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

function contactRecord(id, name, mobile, email, companyId) {
  return {
    id: id,
    name: name,
    companyId: companyId || "company-locksmith",
    contactType: "Person",
    responsibility: "Locksmith",
    mobile: mobile,
    officePhone: "",
    email: email,
    preferredContactMethod: "Mobile",
    active: "Yes",
    notes: "",
    createdDate: "2026-01-01T00:00:00.000Z",
    lastUpdated: "2026-01-01T00:00:00.000Z",
  };
}

const MASTER_DATA = {
  contacts: [
    { ...contactRecord("c-jim", "Jim Beveridge", "027 833 3030", "admin@jimslocksmithnz.com"), notes: "Responsible for cleaning gutters and fire systems check" },
    // The same master record stored twice must still render one card and one company link.
    { ...contactRecord("c-jim", "Jim Beveridge", "027 833 3030", "admin@jimslocksmithnz.com"), notes: "Responsible for cleaning gutters and fire systems check" },
    contactRecord("c-pat", "Pat Painter", "021 222 2222", "pat@example.com", "company-paint"),
    contactRecord("c-sue", "Sue Surveyor", "021 333 3333", "sue@example.com", "company-survey"),
    contactRecord("c-orphan", "Orphan Olive", "021 999 9999", "olive@example.com", "company-olive"),
  ],
  companies: [
    { id: "company-locksmith", name: "Jims Locksmiths Ltd", type: "Service" },
    { id: "company-paint", name: "Painters Co", type: "Service" },
    { id: "company-survey", name: "Surveyors Co", type: "Service" },
    { id: "company-olive", name: "Olive Co", type: "Service" },
  ],
  templates: [],
  scheduledItemTemplates: [],
  documents: [],
};

function tenancyRecord(id, companyName, contactRefs) {
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

function calendarItem(id, taskName, preferredContactId) {
  return {
    id: id,
    taskName: taskName,
    category: "Compliance",
    dueDate: "2026-09-01",
    frequency: "Annual",
    status: "Active",
    preferredCompany: "",
    preferredCompanyId: "",
    preferredContactId: preferredContactId,
    notes: "",
  };
}

// Jim is linked to two properties, one tenancy and one calendar item.
// Pat is a property-only contact. Sue is tenancy-only. Olive has no links at all.
const BUILDINGS = [
  {
    id: "ford-onekawa",
    buildingName: "Ford Onekawa",
    streetAddress: "1 Kirkwood Road",
    city: "Napier",
    status: "Occupied",
    buildingContactAssignments: ["c-jim", "c-pat"],
    contactRelationshipById: { "c-jim": "Locksmith", "c-pat": "Painter" },
    tenancies: [
      tenancyRecord("ten-jims", "Jims Locksmith", ["c-jim", "c-sue"]),
      tenancyRecord("ten-empty", "Acme Legal", []),
    ],
    tenancy: null,
    scheduleItems: [calendarItem("cal-security", "Annual Security Inspection", "c-jim")],
    documents: [],
    documentCategories: [],
    propertyTemplates: [],
    historyRecords: [],
  },
  {
    id: "taradale",
    buildingName: "Taradale Chambers",
    streetAddress: "2 Taradale Road",
    city: "Napier",
    status: "Vacant",
    buildingContactAssignments: ["c-jim"],
    contactRelationshipById: { "c-jim": "Locksmith" },
    tenancies: [],
    tenancy: null,
    // An orphan reference to a contact that no longer exists must not crash rendering.
    scheduleItems: [calendarItem("cal-orphan", "Orphaned Task", "c-does-not-exist")],
    documents: [],
    documentCategories: [],
    propertyTemplates: [],
    historyRecords: [],
  },
];

function moduleButton(page, key) {
  return page.locator(`#app-module-nav [data-app-module="${key}"]`);
}

function cardFor(page, contactId) {
  return page.locator(`[data-contact-id="${contactId}"]`);
}

// The repository card shows only a compact summary of the operational links.
function summaryFor(page, contactId) {
  return page.evaluate(function (id) {
    const card = document.querySelector(`[data-contact-id="${id}"]`);
    if (!card) {
      return null;
    }
    const linked = card.querySelector(".contact-card-linked");
    if (!linked) {
      return null;
    }
    return linked.textContent.replace(/\s+/g, " ").replace(/^Linked to:\s*/, "").trim();
  }, contactId);
}

// The detailed relationship view lives in Contact Details.
async function detailRelationshipsFor(page, contactId) {
  await page.locator(`[data-contact-id="${contactId}"]`).click();
  const details = await page.evaluate(function () {
    const backdrop = document.querySelector(".contact-details-backdrop");
    if (!backdrop) {
      return null;
    }
    const groups = {};
    backdrop.querySelectorAll(".contact-details-relationships .contact-relationship-group").forEach(function (group) {
      const type = group.querySelector(".contact-relationship-type").textContent.trim();
      groups[type] = Array.prototype.map.call(group.querySelectorAll("li"), function (item) {
        return item.textContent.trim();
      });
    });
    return {
      title: backdrop.querySelector("#contact-details-title").textContent.trim(),
      groups: groups,
      closeButtonCount: backdrop.querySelectorAll('[data-contact-details-action="close"]').length,
    };
  });
  await page.locator('.contact-details-backdrop [data-contact-details-action="close"]').first().click();
  return details;
}

async function seed(page, url, buildings, propertyId) {
  await page.addInitScript(function (payload) {
      window.__COMPLIANCE_HQ_BROWSER_TEST__ = true;
    localStorage.setItem("buildingManagerBuildings", JSON.stringify(payload.buildings));
    localStorage.setItem("buildingManagerMasterData", JSON.stringify(payload.masterData));
    localStorage.setItem("buildingManagerCurrentPropertyId", payload.propertyId);
  }, { buildings: buildings, masterData: MASTER_DATA, propertyId: propertyId });
  await page.goto(url, { waitUntil: "networkidle" });
}

(async function () {
  const running = await startServer();
  const browser = await chromium.launch({ headless: true });
  try {
    const page = await browser.newPage();
    const pageErrors = [];
    page.on("pageerror", function (error) {
      pageErrors.push(String(error));
    });
    await seed(page, running.url, BUILDINGS, "");
    await moduleButton(page, "Contacts").click();

    // --- Repository: one card per contact ------------------------------------
    assert.strictEqual(await page.locator("[data-contact-id]").count(), 4, "All Properties must show the whole contact repository");
    assert.strictEqual(await cardFor(page, "c-jim").count(), 1, "A duplicated master record must still render exactly one card");
    assert.strictEqual(await cardFor(page, "c-orphan").count(), 1, "A contact with no relationships must still appear in the repository");

    // --- Compact linked-to summary -------------------------------------------
    assert.strictEqual(
      await summaryFor(page, "c-jim"),
      "Ford Onekawa · Taradale Chambers · Jims Locksmith · 1 Calendar item",
      "The summary must list properties and tenancies once each and count calendar items"
    );
    assert.strictEqual(await summaryFor(page, "c-pat"), "Ford Onekawa", "A property-only contact summarises to its property");
    assert.strictEqual(await summaryFor(page, "c-sue"), "Jims Locksmith", "A tenancy-only contact summarises to its tenancy");
    assert.strictEqual(await summaryFor(page, "c-orphan"), "Not linked to anything yet.", "An unlinked contact must say so");
    for (const companyName of ["Jims Locksmiths Ltd", "Olive Co"]) {
      assert.strictEqual(
        (await page.locator(".contact-card-linked").allTextContents()).join(" ").includes(companyName),
        false,
        `The summary must not list the company relationship (${companyName})`
      );
    }
    assert.ok(
      (await cardFor(page, "c-jim").textContent()).includes("Jims Locksmiths Ltd"),
      "The contact's company must still be shown with their details"
    );
    assert.strictEqual(
      await page.locator("#contacts-list .contact-relationship-group").count(),
      0,
      "The repository card must not render the full relationship tree"
    );

    // --- Detailed relationship management stays in Contact Details -----------
    const jimDetails = await detailRelationshipsFor(page, "c-jim");
    assert.strictEqual(jimDetails.title, "Jim Beveridge", "Clicking a card must open that contact");
    assert.strictEqual(jimDetails.closeButtonCount, 1, "Contact Details must have exactly one Contacts button");
    assert.deepStrictEqual(
      jimDetails.groups.Property,
      ["Ford Onekawa · Locksmith", "Taradale Chambers · Locksmith"],
      "Contact Details must still show every property relationship and role"
    );
    assert.deepStrictEqual(jimDetails.groups.Tenancy, ["Jims Locksmith · Tenant Contact"], "Contact Details must still show tenancy relationships");
    assert.deepStrictEqual(jimDetails.groups.Calendar, ["Annual Security Inspection · Preferred Contact"], "Contact Details must still show calendar relationships");
    assert.deepStrictEqual(jimDetails.groups.Company, ["Jims Locksmiths Ltd · Company"], "A duplicated master record must not duplicate the company relationship");

    const patDetails = await detailRelationshipsFor(page, "c-pat");
    assert.deepStrictEqual(patDetails.groups.Property, ["Ford Onekawa · Painter"], "A property-only contact keeps its property role");
    assert.strictEqual(patDetails.groups.Tenancy, undefined, "A property contact must not gain a tenancy relationship");
    assert.strictEqual(patDetails.groups.Calendar, undefined, "A property contact must not gain a calendar relationship");

    const sueDetails = await detailRelationshipsFor(page, "c-sue");
    assert.deepStrictEqual(sueDetails.groups.Tenancy, ["Jims Locksmith · Tenant Contact"], "A tenancy-only contact keeps its tenancy relationship");
    assert.strictEqual(sueDetails.groups.Property, undefined, "A tenancy contact must not gain a property relationship");

    const oliveDetails = await detailRelationshipsFor(page, "c-orphan");
    assert.strictEqual(oliveDetails.groups.Property, undefined, "An unlinked contact must have no property relationship");
    assert.strictEqual(oliveDetails.groups.Tenancy, undefined, "An unlinked contact must have no tenancy relationship");
    assert.strictEqual(oliveDetails.groups.Calendar, undefined, "An unlinked contact must have no calendar relationship");
    assert.deepStrictEqual(oliveDetails.groups.Company, ["Olive Co · Company"], "A company association is independent of operational links");

    // --- Phone and email links act on their own ------------------------------
    for (const linkCase of [[".contact-phone-link", "tel:027 833 3030"], [".contact-email-link", "mailto:admin@jimslocksmithnz.com"]]) {
      const result = await page.evaluate(function (payload) {
        const link = document.querySelector(`[data-contact-id="c-jim"] ${payload.selector}`);
        // Suppress the external navigation while still letting the delegated card handler run.
        const guard = function (event) { event.preventDefault(); };
        document.addEventListener("click", guard, true);
        link.click();
        document.removeEventListener("click", guard, true);
        return { href: link.getAttribute("href"), openedCard: Boolean(document.querySelector(".contact-details-backdrop")) };
      }, { selector: linkCase[0] });
      assert.strictEqual(result.href, linkCase[1], `${linkCase[0]} must keep its own action`);
      assert.strictEqual(result.openedCard, false, `${linkCase[0]} must not open the contact card`);
    }

    // --- Search --------------------------------------------------------------
    for (const term of ["Jim Beveridge", "Jims Locksmiths Ltd", "027 833 3030", "admin@jimslocksmithnz.com", "cleaning gutters", "fire systems"]) {
      await page.locator("#contacts-search").fill(term);
      assert.strictEqual(await cardFor(page, "c-jim").count(), 1, `Search must match on "${term}"`);
      assert.strictEqual(await page.locator("[data-contact-id]").count(), 1, `Search on "${term}" must exclude other contacts`);
    }
    await page.locator("#contacts-search").fill("");

    // --- Main tile notes / simplified filters -------------------------------
    assert.strictEqual(
      await page.locator("#contacts-relationship-filter").count(),
      0,
      "Contacts must not show the redundant Relationship filter"
    );

    const jimCardText = await cardFor(page, "c-jim").innerText();
    assert.ok(
      jimCardText.includes("Responsible for cleaning gutters and fire systems check"),
      "Existing Notes must be visible on the main contact tile"
    );
    assert.strictEqual(
      await cardFor(page, "c-pat").locator(".contact-card-notes").count(),
      0,
      "A contact without Notes must not show an empty Notes area"
    );

    // --- Property scoping ----------------------------------------------------
    await page.locator("#app-property-selector").selectOption("taradale");
    visible = await page.locator("[data-contact-id]").evaluateAll(function (nodes) {
      return nodes.map(function (node) { return node.getAttribute("data-contact-id"); });
    });
    assert.deepStrictEqual(visible, ["c-jim"], "A selected property must show only its related contacts");
    assert.strictEqual(
      await summaryFor(page, "c-jim"),
      "Taradale Chambers",
      "Relationships must be scoped to the selected property"
    );
    await page.locator("#app-property-selector").selectOption("");

    // --- Tenancy integration must not regress --------------------------------
    await page.locator("#app-property-selector").selectOption("ford-onekawa");
    await moduleButton(page, "Tenancy").click();
    const jimsTenancy = await page.locator('[data-tenancy-id="ten-jims"] .tenancy-card-contacts').textContent();
    assert.ok(jimsTenancy.includes("Jim Beveridge"), "The tenancy card must show its explicitly linked contacts");
    assert.ok(jimsTenancy.includes("Sue Surveyor"), "Multiple explicit tenancy contacts must both show");
    assert.strictEqual(jimsTenancy.includes("Pat Painter"), false, "A property-only contact must not appear on a tenancy card");
    const emptyTenancy = await page.locator('[data-tenancy-id="ten-empty"] .tenancy-card-contacts').textContent();
    assert.strictEqual(emptyTenancy.replace(/\s+/g, " ").trim(), "Contact Not set", "A tenancy with no links must show Not set");

    // --- Orphan references degrade gracefully --------------------------------
    await page.locator("#app-property-selector").selectOption("taradale");
    await moduleButton(page, "Schedule").click();
    assert.ok(
      (await page.locator("#schedule-ops-list").textContent()).includes("Orphaned Task"),
      "A calendar item pointing at a missing contact must still render"
    );
    assert.deepStrictEqual(pageErrors, [], "Orphan contact references must not throw");
    await page.locator("#app-property-selector").selectOption("");

    // --- Unlinking removes one relationship only -----------------------------
    const afterPropertyUnlink = await page.evaluate(function () {
      const api = window.BuildingManagerSchedule;
      const ford = window.BuildingStorage.getBuildingById("ford-onekawa");
      // Remove Jim's Ford Onekawa property relationship only.
      const updated = {
        ...ford,
        buildingContactAssignments: ford.buildingContactAssignments.filter(function (id) {
          return id !== "c-jim";
        }),
      };
      window.BuildingStorage.updateBuilding(updated);
      return Boolean(api);
    });
    assert.strictEqual(afterPropertyUnlink, true, "The schedule API must remain available");
    await moduleButton(page, "dashboard").click();
    await moduleButton(page, "Contacts").click();
    const afterUnlink = await detailRelationshipsFor(page, "c-jim");
    assert.deepStrictEqual(afterUnlink.groups.Property, ["Taradale Chambers · Locksmith"], "Unlinking one property must leave the other");
    assert.deepStrictEqual(afterUnlink.groups.Tenancy, ["Jims Locksmith · Tenant Contact"], "A property unlink must not touch the tenancy link");
    assert.deepStrictEqual(afterUnlink.groups.Calendar, ["Annual Security Inspection · Preferred Contact"], "A property unlink must not touch the calendar link");
    assert.strictEqual(await cardFor(page, "c-jim").count(), 1, "Unlinking must never delete the master contact");
    assert.strictEqual(
      await page.evaluate(function () { return JSON.parse(localStorage.getItem("buildingManagerMasterData")).contacts.length; }),
      5,
      "Unlinking must never delete a contact record"
    );
    await page.close();

    // --- Backup and restore --------------------------------------------------
    const sourcePage = await browser.newPage();
    sourcePage.on("pageerror", function (error) { pageErrors.push(String(error)); });
    await seed(sourcePage, running.url, BUILDINGS, "");
    const backup = await sourcePage.evaluate(function () {
      return JSON.stringify(window.BuildingStorage.createBackupPayload());
    });
    await sourcePage.close();

    const targetContext = await browser.newContext();
    await targetContext.addInitScript(function () {
      window.__COMPLIANCE_HQ_BROWSER_TEST__ = true;
    });
    const targetPage = await targetContext.newPage();
    targetPage.on("pageerror", function (error) { pageErrors.push(String(error)); });
    await targetPage.goto(running.url, { waitUntil: "networkidle" });
    assert.strictEqual(
      await targetPage.evaluate(function () { return JSON.parse(localStorage.getItem("buildingManagerMasterData") || '{"contacts":[]}').contacts.length; }),
      0,
      "A separate browser store must start with no contacts"
    );
    await targetPage.evaluate(function (payload) {
      window.BuildingStorage.restoreBackupData(JSON.parse(payload));
    }, backup);
    await targetPage.reload({ waitUntil: "networkidle" });
    await targetPage.locator("#app-property-selector").selectOption("");
    await moduleButton(targetPage, "Contacts").click();

    assert.strictEqual(await targetPage.locator("[data-contact-id]").count(), 4, "Restore must reproduce every contact exactly once");
    const restoredIds = await targetPage.evaluate(function () {
      return JSON.parse(localStorage.getItem("buildingManagerMasterData")).contacts.map(function (c) { return c.id; }).sort();
    });
    assert.deepStrictEqual(restoredIds, ["c-jim", "c-jim", "c-orphan", "c-pat", "c-sue"], "Restore must preserve every stored contact record");
    const restoredJim = await detailRelationshipsFor(targetPage, "c-jim");
    assert.deepStrictEqual(restoredJim.groups.Property, ["Ford Onekawa · Locksmith", "Taradale Chambers · Locksmith"], "Restore must preserve property relationships and roles");
    assert.deepStrictEqual(restoredJim.groups.Tenancy, ["Jims Locksmith · Tenant Contact"], "Restore must preserve tenancy relationships");
    assert.deepStrictEqual(restoredJim.groups.Calendar, ["Annual Security Inspection · Preferred Contact"], "Restore must preserve calendar relationships");
    assert.deepStrictEqual(restoredJim.groups.Company, ["Jims Locksmiths Ltd · Company"], "Restore must preserve company associations");
    await targetContext.close();

    // --- Permanent contact deletion ------------------------------------------
    const deleteContext = await browser.newContext();
    const deletePage = await deleteContext.newPage();
    deletePage.on("pageerror", function (error) { pageErrors.push(String(error)); });
    await seed(deletePage, running.url, BUILDINGS, "");
    await moduleButton(deletePage, "Contacts").click();
    await deletePage.locator('[data-contact-id="c-jim"]').click();
    await deletePage.locator('.contact-details-backdrop [data-contact-details-action="edit"]').click();
    await deletePage.locator('#delete-contact-btn').click();

    const deleteDialog = deletePage.locator('[data-contact-delete-confirm="c-jim"]');
    await deleteDialog.waitFor({ state: "visible" });
    assert.ok((await deleteDialog.textContent()).includes("Jim Beveridge"), "The delete confirmation must identify the contact by name");

    // Cancel must leave both the canonical contact and every relationship intact.
    await deleteDialog.locator('[data-contact-delete-action="cancel"]').click();
    assert.strictEqual(await deletePage.locator('[data-contact-delete-confirm]').count(), 0, "Cancel closes the contact delete modal");
    assert.strictEqual(
      await deletePage.evaluate(function () {
        return JSON.parse(localStorage.getItem("buildingManagerMasterData")).contacts.some(function (contact) { return contact.id === "c-jim"; });
      }),
      true,
      "Cancel must not remove the master contact"
    );

    // Confirmed delete removes the canonical record and all ID references, but not related entities.
    await deletePage.locator('#delete-contact-btn').click();
    await deletePage.locator('[data-contact-delete-confirm="c-jim"] [data-contact-delete-action="delete"]').click();
    await deletePage.waitForFunction(function () {
      return !JSON.parse(localStorage.getItem("buildingManagerMasterData")).contacts.some(function (contact) { return contact.id === "c-jim"; });
    });

    const deletedState = await deletePage.evaluate(function () {
      return {
        master: JSON.parse(localStorage.getItem("buildingManagerMasterData")),
        buildings: JSON.parse(localStorage.getItem("buildingManagerBuildings")),
      };
    });
    assert.strictEqual(deletedState.master.contacts.some(function (contact) { return contact.id === "c-jim"; }), false, "The canonical contact must be deleted");
    assert.strictEqual(deletedState.master.companies.some(function (company) { return company.id === "company-locksmith"; }), true, "Deleting a contact must keep its company");
    deletedState.buildings.forEach(function (building) {
      assert.strictEqual((building.buildingContactAssignments || []).includes("c-jim"), false, "Property assignments must be cleaned across every property");
      assert.strictEqual(Object.prototype.hasOwnProperty.call(building.contactRelationshipById || {}, "c-jim"), false, "Property relationship maps must be cleaned");
      (building.tenancies || []).forEach(function (tenancy) {
        assert.strictEqual((tenancy.contactRefs || []).some(function (ref) {
          return String(ref && typeof ref === "object" ? ref.contactId || ref.id || "" : ref) === "c-jim";
        }), false, "Tenancy contact references must be cleaned");
      });
      (building.scheduleItems || []).forEach(function (item) {
        assert.notStrictEqual(item.preferredContactId, "c-jim", "Calendar preferred contact IDs must be cleared");
      });
      (building.propertyTemplates || []).forEach(function (template) {
        assert.notStrictEqual(template.preferredContactId, "c-jim", "Property template preferred contact IDs must be cleared");
      });
    });
    assert.strictEqual(deletedState.buildings.length, 2, "Deleting a contact must not delete properties");
    assert.strictEqual(deletedState.buildings[0].tenancies.length, 2, "Deleting a contact must not delete tenancies");
    assert.strictEqual(deletedState.buildings[0].scheduleItems.length > 0, true, "Deleting a contact must not delete Calendar items");
    await deleteContext.close();

    assert.deepStrictEqual(pageErrors, [], "The contacts repository must not throw a browser exception");
    console.log("contacts repository browser regression test passed");
  } finally {
    await browser.close();
    running.server.close();
  }
})().catch(function (error) {
  console.error(error.stack || error);
  process.exitCode = 1;
});
