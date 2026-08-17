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

function contact(id, name, mobile, email) {
  return {
    id: id,
    name: name,
    mobile: mobile,
    email: email,
    officePhone: "",
    responsibility: "Property Manager",
    companyId: "company-1",
    notes: "",
  };
}

const MASTER_DATA = {
  contacts: [
    contact("c-alice", "Alice Agent", "021 111 1111", "alice@example.com"),
    contact("c-bob", "Bob Broker", "021 222 2222", "bob@example.com"),
    contact("c-cara", "Cara Caretaker", "021 333 3333", "cara@example.com"),
    contact("c-dan", "Dan Director", "021 444 4444", "dan@example.com"),
  ],
  companies: [{ id: "company-1", name: "Example Co", type: "Service" }],
  templates: [],
};

function tenancy(id, companyName, contactRefs) {
  return {
    id: id,
    companyName: companyName,
    tradingName: companyName,
    leaseStart: "2026-01-01",
    leaseEnd: "2029-01-01",
    status: "Occupied",
    contacts: [],
    contactRefs: contactRefs,
    documents: [],
    lease: { notes: "", documents: [], versionHistory: [] },
  };
}

// Four contacts are linked to the property. Only some are linked to each tenancy.
const CURRENT_SHAPE = [{
  id: "ford-onekawa",
  buildingName: "Ford Onekawa",
  streetAddress: "1 Kirkwood Road",
  city: "Napier",
  status: "Occupied",
  buildingContactAssignments: ["c-alice", "c-bob", "c-cara", "c-dan"],
  contactRelationshipById: { "c-dan": "Owner" },
  tenancies: [
    tenancy("ten-single", "EIT", ["c-alice"]),
    tenancy("ten-multi", "Pan Pac Forestry", ["c-bob", "c-cara"]),
    tenancy("ten-none", "Acme Legal", []),
  ],
  tenancy: null,
  documents: [],
  documentCategories: [],
  scheduleItems: [],
  propertyTemplates: [],
  historyRecords: [],
}];

// Legacy shape: property links were written into tenancy.contactRefs and always carried a
// relationship label. c-alice was linked through the tenancy Add Link flow, so it has none.
const LEGACY_SHAPE = [{
  id: "legacy-property",
  buildingName: "Legacy House",
  streetAddress: "9 Legacy Lane",
  city: "Napier",
  status: "Occupied",
  buildingContactAssignments: [],
  tenancies: [
    Object.assign(tenancy("legacy-ten-a", "Legacy Tenant A", ["c-alice", "c-bob", "c-cara"]), {
      contactRelationshipById: { "c-bob": "Owner", "c-cara": "Property Manager" },
    }),
    tenancy("legacy-ten-b", "Legacy Tenant B", ["c-dan"]),
  ],
  tenancy: null,
  documents: [],
  documentCategories: [],
  scheduleItems: [],
  propertyTemplates: [],
  historyRecords: [],
}];

function cardContacts(page, tenancyId) {
  return page.evaluate(function (id) {
    const card = document.querySelector(`[data-tenancy-id="${id}"]`);
    if (!card) {
      return null;
    }
    const column = card.querySelector(".tenancy-card-contacts");
    return {
      heading: column.querySelector(".tenancy-card-contacts-heading").textContent.trim(),
      names: Array.prototype.map.call(column.querySelectorAll(".tenancy-card-contact-name"), function (node) {
        return node.textContent.trim();
      }),
      text: column.textContent.replace(/\s+/g, " ").trim(),
      phones: Array.prototype.map.call(column.querySelectorAll(".contact-phone-link"), function (node) { return node.getAttribute("href"); }),
      emails: Array.prototype.map.call(column.querySelectorAll(".contact-email-link"), function (node) { return node.getAttribute("href"); }),
    };
  }, tenancyId);
}

async function openTenancies(page, url, buildings, propertyId) {
  await page.addInitScript(function (payload) {
    localStorage.setItem("buildingManagerBuildings", JSON.stringify(payload.buildings));
    localStorage.setItem("buildingManagerMasterData", JSON.stringify(payload.masterData));
    localStorage.setItem("buildingManagerCurrentPropertyId", payload.propertyId);
  }, { buildings: buildings, masterData: MASTER_DATA, propertyId: propertyId });
  await page.goto(url, { waitUntil: "networkidle" });
  await page.locator('#app-module-nav [data-app-module="Tenancy"]').click();
}

(async function () {
  const running = await startServer();
  const browser = await chromium.launch({ headless: true });
  try {
    // --- A tenancy shows only its own contacts -------------------------------
    const page = await browser.newPage();
    const pageErrors = [];
    page.on("pageerror", function (error) {
      pageErrors.push(String(error));
    });
    await openTenancies(page, running.url, CURRENT_SHAPE, "ford-onekawa");

    const single = await cardContacts(page, "ten-single");
    assert.deepStrictEqual(single.names, ["Alice Agent"], "A tenancy must show only the contact linked to it");
    assert.strictEqual(single.heading, "Contact", "A single linked contact must use the singular heading");
    assert.deepStrictEqual(single.phones, ["tel:0211111111"], "The linked contact's phone must be shown");
    assert.deepStrictEqual(single.emails, ["mailto:alice@example.com"], "The linked contact's email must be shown");
    ["Bob Broker", "Cara Caretaker", "Dan Director"].forEach(function (name) {
      assert.strictEqual(single.text.includes(name), false, `Unlinked property contact ${name} must not appear`);
    });

    const multi = await cardContacts(page, "ten-multi");
    assert.deepStrictEqual(multi.names, ["Bob Broker", "Cara Caretaker"], "A tenancy with several links must show all of them");
    assert.strictEqual(multi.heading, "Contacts", "Several linked contacts must use the plural heading");
    assert.strictEqual(multi.text.includes("Alice Agent"), false, "Another tenancy's contact must not leak across");
    assert.strictEqual(multi.text.includes("Dan Director"), false, "A property-only contact must not appear on a tenancy");

    const none = await cardContacts(page, "ten-none");
    assert.deepStrictEqual(none.names, [], "A tenancy with no links must show no contact names");
    assert.strictEqual(none.text, "Contact Not set", "A tenancy with no links must show Not set");

    // The property Contacts page still shows every contact, tenancy-linked or not.
    await page.locator('#app-module-nav [data-app-module="Contacts"]').click();
    const contactsText = await page.locator("#contacts-list").textContent();
    ["Alice Agent", "Bob Broker", "Cara Caretaker", "Dan Director"].forEach(function (name) {
      assert.ok(contactsText.includes(name), `The property Contacts page must still list ${name}`);
    });

    // Linking a contact at property level must not attach it to a tenancy.
    const afterPropertyLink = await page.evaluate(function () {
      const buildings = JSON.parse(localStorage.getItem("buildingManagerBuildings"));
      return buildings[0].tenancies.map(function (item) { return item.contactRefs.join(","); }).join("|");
    });
    assert.strictEqual(afterPropertyLink, "c-alice|c-bob,c-cara|", "Browsing must not widen any tenancy's contact links");
    await page.close();

    // --- Legacy data is separated correctly ----------------------------------
    const legacyPage = await browser.newPage();
    legacyPage.on("pageerror", function (error) {
      pageErrors.push(String(error));
    });
    await openTenancies(legacyPage, running.url, LEGACY_SHAPE, "legacy-property");

    const legacyA = await cardContacts(legacyPage, "legacy-ten-a");
    assert.deepStrictEqual(legacyA.names, ["Alice Agent"], "Legacy tenancy-specific links must be preserved");
    assert.strictEqual(legacyA.text.includes("Bob Broker"), false, "Legacy property links must not stay on the tenancy");
    assert.strictEqual(legacyA.text.includes("Cara Caretaker"), false, "Legacy property links must not stay on the tenancy");

    const legacyB = await cardContacts(legacyPage, "legacy-ten-b");
    assert.deepStrictEqual(legacyB.names, ["Dan Director"], "A tenancy with no legacy relationship map must be left alone");

    const migrated = await legacyPage.evaluate(function () {
      return JSON.parse(localStorage.getItem("buildingManagerBuildings"))[0];
    });
    assert.deepStrictEqual(
      migrated.buildingContactAssignments.sort(),
      ["c-bob", "c-cara"],
      "Migrated property links must move to the property, not be deleted"
    );
    assert.deepStrictEqual(migrated.tenancies[0].contactRefs, ["c-alice"], "Genuine tenancy links must survive migration");
    assert.deepStrictEqual(migrated.tenancies[1].contactRefs, ["c-dan"], "Untouched tenancies must keep their links");

    // No contact records were removed.
    const contactCount = await legacyPage.evaluate(function () {
      return JSON.parse(localStorage.getItem("buildingManagerMasterData")).contacts.length;
    });
    assert.strictEqual(contactCount, 4, "Migration must never delete contact records");

    // Every contact is still reachable from the property Contacts page after migration.
    await legacyPage.locator('#app-module-nav [data-app-module="Contacts"]').click();
    const legacyContactsText = await legacyPage.locator("#contacts-list").textContent();
    ["Alice Agent", "Bob Broker", "Cara Caretaker", "Dan Director"].forEach(function (name) {
      assert.ok(legacyContactsText.includes(name), `${name} must remain on the property Contacts page after migration`);
    });
    await legacyPage.close();

    // --- Backup carries the tenancy-contact relationships --------------------
    const sourcePage = await browser.newPage();
    sourcePage.on("pageerror", function (error) {
      pageErrors.push(String(error));
    });
    await openTenancies(sourcePage, running.url, CURRENT_SHAPE, "ford-onekawa");
    const backup = await sourcePage.evaluate(function () {
      return JSON.stringify(window.BuildingStorage.createBackupPayload());
    });
    const parsedBackup = JSON.parse(backup);
    const backedUpBuilding = parsedBackup.buildingManagerBuildings[0];
    assert.deepStrictEqual(
      backedUpBuilding.tenancies.map(function (item) { return item.contactRefs; }),
      [["c-alice"], ["c-bob", "c-cara"], []],
      "The backup must carry each tenancy's own contact links"
    );
    assert.deepStrictEqual(
      backedUpBuilding.buildingContactAssignments,
      ["c-alice", "c-bob", "c-cara", "c-dan"],
      "The backup must carry the property contact links"
    );
    assert.strictEqual(parsedBackup.buildingManagerMasterData.contacts.length, 4, "The backup must carry the contact records");
    await sourcePage.close();

    // Restoring that backup into a separate browser store reproduces the same relationships.
    // A fresh context stands in for the other origin, since localStorage is never shared.
    const targetContext = await browser.newContext();
    const targetPage = await targetContext.newPage();
    targetPage.on("pageerror", function (error) {
      pageErrors.push(String(error));
    });
    await targetPage.goto(running.url, { waitUntil: "networkidle" });
    assert.strictEqual(
      await targetPage.locator("[data-tenancy-id]").count(),
      0,
      "A separate browser store must start empty, proving localStorage is not shared"
    );

    const restoreOutcome = await targetPage.evaluate(function (payload) {
      return window.BuildingStorage.restoreBackupData(JSON.parse(payload)).success;
    }, backup);
    assert.strictEqual(restoreOutcome, true, "The backup must restore successfully");

    await targetPage.reload({ waitUntil: "networkidle" });
    await targetPage.locator("#app-property-selector").selectOption("ford-onekawa");
    await targetPage.locator('#app-module-nav [data-app-module="Tenancy"]').click();

    const restoredSingle = await cardContacts(targetPage, "ten-single");
    const restoredMulti = await cardContacts(targetPage, "ten-multi");
    const restoredNone = await cardContacts(targetPage, "ten-none");
    assert.deepStrictEqual(restoredSingle.names, ["Alice Agent"], "Restore must reproduce the single tenancy link");
    assert.deepStrictEqual(restoredMulti.names, ["Bob Broker", "Cara Caretaker"], "Restore must reproduce multiple tenancy links");
    assert.strictEqual(restoredNone.text, "Contact Not set", "Restore must reproduce a tenancy with no links");
    await targetContext.close();

    assert.deepStrictEqual(pageErrors, [], "Tenancy contact resolution must not throw a browser exception");
    console.log("tenancy contact source browser regression test passed");
  } finally {
    await browser.close();
    running.server.close();
  }
})().catch(function (error) {
  console.error(error.stack || error);
  process.exitCode = 1;
});
