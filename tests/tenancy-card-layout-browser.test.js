const assert = require("assert");
const fs = require("fs");
const http = require("http");
const path = require("path");
const { chromium } = require("playwright");

const root = path.resolve(__dirname, "..");
const contentTypes = {
  ".html": "text/html",
  ".js": "text/javascript",
  ".css": "text/css",
  ".json": "application/json",
  ".png": "image/png",
};

function startServer() {
  return new Promise(function (resolve, reject) {
    const server = http.createServer(function (request, response) {
      const requestPath = decodeURIComponent((request.url || "/").split("?")[0]);
      const relativePath = requestPath === "/" ? "index.html" : requestPath.replace(/^\//, "");
      const filePath = path.resolve(root, relativePath);
      if (!filePath.startsWith(root) || !fs.existsSync(filePath)) {
        response.writeHead(404);
        response.end();
        return;
      }
      response.writeHead(200, { "Content-Type": contentTypes[path.extname(filePath)] || "application/octet-stream" });
      fs.createReadStream(filePath).pipe(response);
    });
    server.listen(0, "127.0.0.1", function () {
      resolve({ server: server, url: `http://127.0.0.1:${server.address().port}/` });
    });
    server.on("error", reject);
  });
}

const LINKED_CONTACT = {
  id: "contact-1",
  name: "Jim Beveridge",
  mobile: "027 833 3030",
  // Deliberately long, to prove the card cannot be pushed wider than the viewport.
  email: "an.extremely.long.contact.address.for.overflow@averylongdomainnameindeed.example.co.nz",
  responsibility: "Property Manager",
  companyId: "company-1",
};

const seededBuildings = [{
  id: "ford-onekawa",
  buildingName: "Ford Onekawa",
  streetAddress: "1 Kirkwood Road",
  city: "Napier",
  status: "Occupied",
  tenancy: null,
  tenancies: [
    {
      id: "ten-with-contact",
      companyName: "EIT",
      tradingName: "EIT Trading",
      leaseStart: "2026-01-01",
      leaseEnd: "2029-01-01",
      status: "Occupied",
      contactRefs: ["contact-1"],
    },
    {
      id: "ten-without-contact",
      companyName: "Acme Legal",
      leaseStart: "2026-02-01",
      leaseEnd: "2028-02-01",
      status: "Occupied",
    },
  ],
  documents: [],
  documentCategories: [],
  scheduleItems: [],
  propertyTemplates: [],
  historyRecords: [],
}];

const masterData = {
  contacts: [LINKED_CONTACT],
  companies: [{ id: "company-1", name: "Jims Locksmiths", type: "Service" }],
  templates: [],
};

function cardMetrics(page, tenancyId) {
  return page.evaluate(function (id) {
    const card = document.querySelector(`[data-tenancy-id="${id}"]`);
    if (!card) {
      return null;
    }
    const main = card.querySelector(".tenancy-card-main");
    const contacts = card.querySelector(".tenancy-card-contacts");
    const cardRect = card.getBoundingClientRect();
    const mainRect = main ? main.getBoundingClientRect() : null;
    const contactsRect = contacts ? contacts.getBoundingClientRect() : null;
    return {
      columns: getComputedStyle(card).gridTemplateColumns.split(" ").length,
      hasMain: Boolean(main),
      hasContacts: Boolean(contacts),
      contactsText: contacts ? contacts.textContent.replace(/\s+/g, " ").trim() : "",
      sideBySide: Boolean(mainRect && contactsRect && contactsRect.left >= mainRect.right - 1),
      stacked: Boolean(mainRect && contactsRect && contactsRect.top >= mainRect.bottom - 1),
      cardOverflows: card.scrollWidth > Math.ceil(cardRect.width) + 1,
      contactsOverflow: contacts ? contacts.scrollWidth > Math.ceil(contactsRect.width) + 1 : false,
      documentOverflows: document.documentElement.scrollWidth > window.innerWidth + 1,
    };
  }, tenancyId);
}

(async function () {
  const running = await startServer();
  const browser = await chromium.launch({ headless: true });
  try {
    const desktop = await browser.newPage({ viewport: { width: 1280, height: 900 } });
    const pageErrors = [];
    desktop.on("pageerror", function (error) {
      pageErrors.push(String(error));
    });
    await desktop.addInitScript(function (payload) {
      localStorage.setItem("buildingManagerBuildings", JSON.stringify(payload.buildings));
      localStorage.setItem("buildingManagerMasterData", JSON.stringify(payload.masterData));
      localStorage.setItem("buildingManagerCurrentPropertyId", "ford-onekawa");
    }, { buildings: seededBuildings, masterData: masterData });
    await desktop.goto(running.url, { waitUntil: "networkidle" });
    await desktop.locator('#app-module-nav [data-app-module="Tenancy"]').click();

    // Desktop: two balanced columns with contacts to the right of the tenancy details.
    const withContact = await cardMetrics(desktop, "ten-with-contact");
    assert.ok(withContact, "The tenancy card must render");
    assert.strictEqual(withContact.hasMain, true, "The tenancy column must exist");
    assert.strictEqual(withContact.hasContacts, true, "The contact column must exist");
    assert.strictEqual(withContact.columns, 2, "Desktop cards must use two columns");
    assert.strictEqual(withContact.sideBySide, true, "Contacts must sit to the right of the tenancy details");
    assert.ok(withContact.contactsText.startsWith("Contact"), "The contact column must be headed Contact");
    assert.ok(withContact.contactsText.includes("Jim Beveridge"), "The contact name must remain present");
    assert.ok(withContact.contactsText.includes("027 833 3030"), "The phone number must remain present");
    assert.ok(withContact.contactsText.includes("@averylongdomainnameindeed.example.co.nz"), "The email must remain present");
    assert.strictEqual(withContact.cardOverflows, false, "The card must not overflow horizontally");
    assert.strictEqual(withContact.contactsOverflow, false, "Contact details must not overflow the card");
    assert.strictEqual(withContact.documentOverflows, false, "The page must not scroll horizontally");

    // Contact links still work.
    const phoneHref = await desktop.locator('[data-tenancy-id="ten-with-contact"] .contact-phone-link').getAttribute("href");
    const emailHref = await desktop.locator('[data-tenancy-id="ten-with-contact"] .contact-email-link').getAttribute("href");
    assert.strictEqual(phoneHref, "tel:0278333030", "The phone link must remain a tel: link");
    assert.strictEqual(emailHref, `mailto:${LINKED_CONTACT.email}`, "The email link must remain a mailto: link");

    // A tenancy with no linked contact still shows Contact / Not set in the right column.
    const withoutContact = await cardMetrics(desktop, "ten-without-contact");
    assert.strictEqual(withoutContact.hasContacts, true, "A contactless tenancy must still show the contact column");
    assert.strictEqual(withoutContact.contactsText, "Contact Not set", "A contactless tenancy must show Not set");
    assert.strictEqual(withoutContact.sideBySide, true, "The Not set column must also sit on the right");
    assert.strictEqual(withoutContact.cardOverflows, false, "The contactless card must not overflow");

    // Clicking the card still opens the tenancy for editing.
    await desktop.locator('[data-tenancy-id="ten-with-contact"] h4').click();
    assert.strictEqual(
      await desktop.locator("#tenancy-form-card").isVisible(),
      true,
      "Clicking a tenancy card must still open the tenancy form"
    );
    await desktop.locator("#cancel-tenancy-btn").click();

    // Mobile: the same card collapses to a single column in the required order.
    const mobile = await browser.newPage({ viewport: { width: 375, height: 780 } });
    mobile.on("pageerror", function (error) {
      pageErrors.push(String(error));
    });
    await mobile.addInitScript(function (payload) {
      localStorage.setItem("buildingManagerBuildings", JSON.stringify(payload.buildings));
      localStorage.setItem("buildingManagerMasterData", JSON.stringify(payload.masterData));
      localStorage.setItem("buildingManagerCurrentPropertyId", "ford-onekawa");
    }, { buildings: seededBuildings, masterData: masterData });
    await mobile.goto(running.url, { waitUntil: "networkidle" });
    await mobile.locator('#app-module-nav [data-app-module="Tenancy"]').click();

    const mobileCard = await cardMetrics(mobile, "ten-with-contact");
    assert.strictEqual(mobileCard.columns, 1, "Narrow screens must collapse to one column");
    assert.strictEqual(mobileCard.stacked, true, "Contacts must stack below the tenancy details on mobile");
    assert.strictEqual(mobileCard.cardOverflows, false, "The mobile card must not overflow");
    assert.strictEqual(mobileCard.contactsOverflow, false, "Mobile contact details must not overflow the card");
    assert.strictEqual(mobileCard.documentOverflows, false, "The mobile page must not scroll horizontally");

    const mobileOrder = await mobile.evaluate(function () {
      const card = document.querySelector('[data-tenancy-id="ten-with-contact"]');
      return Array.prototype.map.call(card.querySelectorAll(".tenancy-card-main > *, .tenancy-card-contacts"), function (node) {
        return node.className.includes("tenancy-card-contacts") ? "Contact" : node.textContent.split(":")[0].trim();
      });
    });
    assert.deepStrictEqual(
      mobileOrder,
      ["EIT", "Trading Name", "Property", "Lease Start", "Lease End", "Status", "Contact"],
      "Mobile order must be tenancy details then contact information"
    );

    assert.deepStrictEqual(pageErrors, [], "The tenancy card layout must not throw a browser exception");
    console.log("tenancy card layout browser regression test passed");
  } finally {
    await browser.close();
    running.server.close();
  }
})().catch(function (error) {
  console.error(error.stack || error);
  process.exitCode = 1;
});
