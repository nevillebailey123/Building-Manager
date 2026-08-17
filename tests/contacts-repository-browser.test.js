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
    contactRecord("c-jim", "Jim Beveridge", "027 833 3030", "admin@jimslocksmithnz.com"),
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

function relationshipsFor(page, contactId) {
  return page.evaluate(function (id) {
    const card = document.querySelector(`[data-contact-id="${id}"]`);
    if (!card) {
      return null;
    }
    const groups = {};
    card.querySelectorAll(".contact-relationship-group").forEach(function (group) {
      const type = group.querySelector(".contact-relationship-type").textContent.trim();
      groups[type] = Array.prototype.map.call(group.querySelectorAll("li"), function (item) {
        return item.textContent.trim();
      });
    });
    return groups;
  }, contactId);
}

async function seed(page, url, buildings, propertyId) {
  await page.addInitScript(function (payload) {
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
    assert.strictEqual(await cardFor(page, "c-jim").count(), 1, "A contact with many relationships must render exactly one card");
    assert.strictEqual(await cardFor(page, "c-orphan").count(), 1, "A contact with no relationships must still appear in the repository");

    // --- Relationship model --------------------------------------------------
    const jim = await relationshipsFor(page, "c-jim");
    assert.deepStrictEqual(
      jim.Property,
      ["Ford Onekawa · Locksmith", "Taradale Chambers · Locksmith"],
      "One contact must link to several properties without duplication"
    );
    assert.deepStrictEqual(jim.Tenancy, ["Jims Locksmith · Tenant Contact"], "The tenancy relationship must be independent");
    assert.deepStrictEqual(jim.Calendar, ["Annual Security Inspection · Preferred Contact"], "The calendar relationship must be independent");
    assert.deepStrictEqual(jim.Company, ["Jims Locksmiths Ltd · Company"], "The company association must be preserved");

    const pat = await relationshipsFor(page, "c-pat");
    assert.deepStrictEqual(pat.Property, ["Ford Onekawa · Painter"], "A property-only contact keeps its property role");
    assert.strictEqual(pat.Tenancy, undefined, "A property contact must not gain a tenancy relationship");
    assert.strictEqual(pat.Calendar, undefined, "A property contact must not gain a calendar relationship");

    const sue = await relationshipsFor(page, "c-sue");
    assert.deepStrictEqual(sue.Tenancy, ["Jims Locksmith · Tenant Contact"], "A tenancy-only contact keeps its tenancy relationship");
    assert.strictEqual(sue.Property, undefined, "A tenancy contact must not gain a property relationship");

    const olive = await relationshipsFor(page, "c-orphan");
    assert.strictEqual(olive.Property, undefined, "An unlinked contact must have no property relationship");
    assert.strictEqual(olive.Tenancy, undefined, "An unlinked contact must have no tenancy relationship");
    assert.strictEqual(olive.Calendar, undefined, "An unlinked contact must have no calendar relationship");
    assert.deepStrictEqual(olive.Company, ["Olive Co · Company"], "A company association is independent of operational links");

    // --- Search --------------------------------------------------------------
    for (const term of ["Jim Beveridge", "Jims Locksmiths Ltd", "027 833 3030", "admin@jimslocksmithnz.com"]) {
      await page.locator("#contacts-search").fill(term);
      assert.strictEqual(await cardFor(page, "c-jim").count(), 1, `Search must match on "${term}"`);
      assert.strictEqual(await page.locator("[data-contact-id]").count(), 1, `Search on "${term}" must exclude other contacts`);
    }
    await page.locator("#contacts-search").fill("");

    // --- Relationship filter -------------------------------------------------
    await page.locator("#contacts-relationship-filter").selectOption("Tenancy");
    let visible = await page.locator("[data-contact-id]").evaluateAll(function (nodes) {
      return nodes.map(function (node) { return node.getAttribute("data-contact-id"); });
    });
    assert.deepStrictEqual(visible.sort(), ["c-jim", "c-sue"], "The Tenancy filter must show only tenancy-linked contacts");

    await page.locator("#contacts-relationship-filter").selectOption("Calendar");
    visible = await page.locator("[data-contact-id]").evaluateAll(function (nodes) {
      return nodes.map(function (node) { return node.getAttribute("data-contact-id"); });
    });
    assert.deepStrictEqual(visible, ["c-jim"], "The Calendar filter must show only calendar-linked contacts");
    assert.strictEqual(await cardFor(page, "c-jim").count(), 1, "Filtering must not duplicate a contact card");

    await page.locator("#contacts-relationship-filter").selectOption("Property");
    visible = await page.locator("[data-contact-id]").evaluateAll(function (nodes) {
      return nodes.map(function (node) { return node.getAttribute("data-contact-id"); });
    });
    assert.deepStrictEqual(visible.sort(), ["c-jim", "c-pat"], "The Property filter must show only property-linked contacts");
    await page.locator("#contacts-relationship-filter").selectOption("");

    // --- Property scoping ----------------------------------------------------
    await page.locator("#app-property-selector").selectOption("taradale");
    visible = await page.locator("[data-contact-id]").evaluateAll(function (nodes) {
      return nodes.map(function (node) { return node.getAttribute("data-contact-id"); });
    });
    assert.deepStrictEqual(visible, ["c-jim"], "A selected property must show only its related contacts");
    const scopedJim = await relationshipsFor(page, "c-jim");
    assert.deepStrictEqual(scopedJim.Property, ["Taradale Chambers · Locksmith"], "Relationships must be scoped to the selected property");
    assert.strictEqual(scopedJim.Tenancy, undefined, "Another property's tenancy link must not leak into the scoped view");
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
      const buildings = JSON.parse(localStorage.getItem("buildingManagerBuildings"));
      const ford = buildings.find(function (item) { return item.id === "ford-onekawa"; });
      // Remove Jim's Ford Onekawa property relationship only.
      ford.buildingContactAssignments = ford.buildingContactAssignments.filter(function (id) { return id !== "c-jim"; });
      localStorage.setItem("buildingManagerBuildings", JSON.stringify(buildings));
      return Boolean(api);
    });
    assert.strictEqual(afterPropertyUnlink, true, "The schedule API must remain available");
    await moduleButton(page, "dashboard").click();
    await moduleButton(page, "Contacts").click();
    const afterUnlink = await relationshipsFor(page, "c-jim");
    assert.deepStrictEqual(afterUnlink.Property, ["Taradale Chambers · Locksmith"], "Unlinking one property must leave the other");
    assert.deepStrictEqual(afterUnlink.Tenancy, ["Jims Locksmith · Tenant Contact"], "A property unlink must not touch the tenancy link");
    assert.deepStrictEqual(afterUnlink.Calendar, ["Annual Security Inspection · Preferred Contact"], "A property unlink must not touch the calendar link");
    assert.strictEqual(await cardFor(page, "c-jim").count(), 1, "Unlinking must never delete the master contact");
    assert.strictEqual(
      await page.evaluate(function () { return JSON.parse(localStorage.getItem("buildingManagerMasterData")).contacts.length; }),
      4,
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
    assert.deepStrictEqual(restoredIds, ["c-jim", "c-orphan", "c-pat", "c-sue"], "Restore must preserve contact IDs");
    const restoredJim = await relationshipsFor(targetPage, "c-jim");
    assert.deepStrictEqual(restoredJim.Property, ["Ford Onekawa · Locksmith", "Taradale Chambers · Locksmith"], "Restore must preserve property relationships and roles");
    assert.deepStrictEqual(restoredJim.Tenancy, ["Jims Locksmith · Tenant Contact"], "Restore must preserve tenancy relationships");
    assert.deepStrictEqual(restoredJim.Calendar, ["Annual Security Inspection · Preferred Contact"], "Restore must preserve calendar relationships");
    assert.deepStrictEqual(restoredJim.Company, ["Jims Locksmiths Ltd · Company"], "Restore must preserve company associations");
    await targetContext.close();

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
