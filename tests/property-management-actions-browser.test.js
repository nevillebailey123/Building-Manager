// Regression cover for the Settings -> Edit Property management actions.
// The bug: Archive/Restore/Delete were gated behind native window.confirm, which is
// suppressed in sandboxed/embedded browsers, so the buttons silently did nothing.
// This suite deliberately does NOT register a Playwright dialog handler, so any
// reintroduced native dialog is auto-dismissed and the assertions fail.
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

const seededMasterData = {
  companies: [{ id: "company-1", name: "Alpha Holdings" }],
  contacts: [
    { id: "contact-1", name: "Jim Beveridge", mobile: "027 000 0001", email: "jim@example.com", companyId: "company-1" },
    { id: "contact-2", name: "Sue Nolan", mobile: "027 000 0002", email: "sue@example.com", companyId: "company-1" },
  ],
  scheduledItemTemplates: [{ id: "master-template-1", name: "Fire Alarm Service", frequency: "Annual" }],
};

function makeBuilding(id, name, extra) {
  return Object.assign({
    id: id,
    buildingName: name,
    streetAddress: "1 Test Street",
    city: "Napier",
    status: "Occupied",
    tenancy: null,
    tenancies: [],
    documents: [],
    documentCategories: [],
    scheduleItems: [],
    propertyTemplates: [],
    historyRecords: [],
    buildingContactAssignments: [],
    contactRelationshipById: {},
  }, extra || {});
}

const seededBuildings = [
  makeBuilding("alpha", "Alpha House", {
    tenancies: [{
      id: "ten-a",
      companyName: "Alpha Tenant",
      tradingName: "Alpha Tenant",
      leaseStart: "2026-01-01",
      leaseEnd: "2027-01-01",
      status: "Occupied",
      contactRefs: [{ contactId: "contact-1", responsibility: "Tenant Contact" }],
      lease: { id: "doc-a", fileName: "alpha-lease.pdf", category: "Leases" },
    }],
    documents: [{ id: "doc-a", fileName: "alpha-lease.pdf", category: "Leases" }],
    scheduleItems: [{ id: "sched-a", name: "Fire Alarm Service", dueDate: "2026-09-01", status: "Scheduled", preferredContactId: "contact-1" }],
    propertyTemplates: [{ id: "prop-template-a", masterTemplateId: "master-template-1", name: "Fire Alarm Service" }],
    historyRecords: [{ id: "hist-a", summary: "Property created" }],
    buildingContactAssignments: ["contact-1"],
    contactRelationshipById: { "contact-1": "Property Manager" },
  }),
  makeBuilding("beta", "Beta Tower", {
    tenancies: [{ id: "ten-b", companyName: "Beta Tenant", tradingName: "Beta Tenant", leaseStart: "2026-02-01", leaseEnd: "2028-02-01", status: "Occupied" }],
    scheduleItems: [{ id: "sched-b", name: "Backflow Test", dueDate: "2026-10-01", status: "Scheduled" }],
    buildingContactAssignments: ["contact-2"],
    contactRelationshipById: { "contact-2": "Owner" },
  }),
];

function storedBuildings(page) {
  return page.evaluate(function () {
    return JSON.parse(localStorage.getItem("buildingManagerBuildings") || "[]");
  });
}

function storedMasterData(page) {
  return page.evaluate(function () {
    return JSON.parse(localStorage.getItem("buildingManagerMasterData") || "null");
  });
}

function selectorOptions(page) {
  return page.evaluate(function () {
    const selector = document.getElementById("app-property-selector");
    return selector ? Array.prototype.map.call(selector.options, function (option) { return option.text; }) : [];
  });
}

async function openEditProperty(page, propertyId) {
  await page.locator('#app-module-nav [data-app-module="settings"]').click();
  await page.locator(`[data-settings-property-id="${propertyId}"] [data-settings-property-action="edit"]`).click();
  assert.strictEqual(
    await page.locator("#edit-view").evaluate(function (element) { return element.classList.contains("is-active"); }),
    true,
    `Edit Property must open for ${propertyId}`
  );
}

function findBuilding(buildings, id) {
  return buildings.find(function (building) { return building.id === id; });
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

    await page.addInitScript(function (payload) {
      localStorage.setItem("buildingManagerBuildings", JSON.stringify(payload.buildings));
      localStorage.setItem("buildingManagerMasterData", JSON.stringify(payload.masterData));
      localStorage.setItem("buildingManagerCurrentPropertyId", "alpha");
    }, { buildings: seededBuildings, masterData: seededMasterData });
    await page.goto(running.url, { waitUntil: "networkidle" });

    assert.deepStrictEqual(
      await selectorOptions(page),
      ["All Properties", "Alpha House", "Beta Tower"],
      "both properties start out active in the Property selector"
    );

    // Normalisation rewrites some generated ids on load, so compare against the loaded state.
    const normalisedAlpha = findBuilding(await storedBuildings(page), "alpha");

    // A. Archive from Settings -> Edit Property.
    await openEditProperty(page, "alpha");
    assert.strictEqual(await page.locator("#edit-archive-property-btn").isVisible(), true, "Archive Property must be offered for an active property");
    assert.strictEqual(await page.locator("#edit-restore-property-btn").isVisible(), false, "Restore Property must be hidden for an active property");
    await page.locator("#edit-archive-property-btn").click();
    await page.waitForFunction(function () {
      return document.getElementById("settings-view").classList.contains("is-active");
    });

    let buildings = await storedBuildings(page);
    let alpha = findBuilding(buildings, "alpha");
    let beta = findBuilding(buildings, "beta");
    assert.strictEqual(buildings.length, 2, "archiving must not remove the property");
    assert.strictEqual(alpha.archived, true, "the property must be marked archived");
    assert.strictEqual(alpha.tenancies.length, 1, "tenancies survive archiving");
    assert.deepStrictEqual(alpha.tenancies[0].contactRefs, [{ contactId: "contact-1", responsibility: "Tenant Contact" }], "tenancy contact links survive archiving");
    assert.deepStrictEqual(alpha.buildingContactAssignments, ["contact-1"], "property contact assignments survive archiving");
    assert.deepStrictEqual(alpha.contactRelationshipById, { "contact-1": "Property Manager" }, "contact relationships survive archiving");
    assert.deepStrictEqual(alpha.scheduleItems, normalisedAlpha.scheduleItems, "calendar items survive archiving");
    assert.ok(alpha.documents.some(function (doc) { return doc.id === "doc-a"; }), "documents survive archiving");
    assert.deepStrictEqual(alpha.propertyTemplates, normalisedAlpha.propertyTemplates, "property templates survive archiving");
    assert.deepStrictEqual(alpha.historyRecords, normalisedAlpha.historyRecords, "history survives archiving");
    assert.strictEqual(beta.archived, undefined, "the other property must be untouched");
    assert.strictEqual(beta.tenancies.length, 1, "the other property keeps its tenancy");

    assert.deepStrictEqual(
      await selectorOptions(page),
      ["All Properties", "Beta Tower"],
      "an archived property leaves the operational Property selector"
    );
    assert.strictEqual(
      await page.locator('[data-settings-property-id="alpha"]').count(),
      1,
      "an archived property stays listed in Settings so it can be restored"
    );

    // B. Restore.
    await openEditProperty(page, "alpha");
    assert.strictEqual(await page.locator("#edit-restore-property-btn").isVisible(), true, "Restore Property must be offered for an archived property");
    assert.strictEqual(await page.locator("#edit-archive-property-btn").isVisible(), false, "Archive Property must be hidden for an archived property");
    await page.locator("#edit-restore-property-btn").click();
    await page.waitForFunction(function () {
      return document.getElementById("settings-view").classList.contains("is-active");
    });

    buildings = await storedBuildings(page);
    alpha = findBuilding(buildings, "alpha");
    assert.strictEqual(alpha.archived, false, "restoring clears the archived state");
    assert.strictEqual(alpha.tenancies.length, 1, "tenancies survive restoring");
    assert.deepStrictEqual(alpha.scheduleItems, normalisedAlpha.scheduleItems, "calendar items survive restoring");
    assert.ok(alpha.documents.some(function (doc) { return doc.id === "doc-a"; }), "documents survive restoring");
    assert.deepStrictEqual(alpha.historyRecords, normalisedAlpha.historyRecords, "history survives restoring");
    assert.deepStrictEqual(
      await selectorOptions(page),
      ["All Properties", "Alpha House", "Beta Tower"],
      "a restored property returns to the Property selector"
    );

    // C. Delete opens an in-app confirmation, and Cancel changes nothing.
    await openEditProperty(page, "alpha");
    await page.locator("#edit-delete-property-btn").click();
    const confirmDialog = page.locator("[data-property-delete-confirm]");
    await confirmDialog.waitFor({ state: "visible" });
    assert.ok(
      (await confirmDialog.textContent()).includes("Alpha House"),
      "the confirmation must identify the property by name"
    );
    await confirmDialog.locator('[data-property-delete-action="cancel"]').click();
    assert.strictEqual(await page.locator("[data-property-delete-confirm]").count(), 0, "cancelling closes the confirmation");
    buildings = await storedBuildings(page);
    assert.strictEqual(buildings.length, 2, "cancelling must not delete anything");
    assert.ok(findBuilding(buildings, "alpha"), "the property survives a cancelled delete");

    // D + E. Confirmed permanent delete.
    await page.locator("#edit-delete-property-btn").click();
    await confirmDialog.waitFor({ state: "visible" });
    await confirmDialog.locator('[data-property-delete-action="delete"]').click();
    await page.waitForFunction(function () {
      return document.getElementById("settings-view").classList.contains("is-active");
    });

    buildings = await storedBuildings(page);
    assert.strictEqual(buildings.length, 1, "only the confirmed property is removed");
    assert.strictEqual(buildings[0].id, "beta", "the second property remains");
    assert.strictEqual(buildings[0].tenancies.length, 1, "the second property keeps its tenancy");
    assert.ok(buildings[0].scheduleItems.length > 0, "the second property keeps its calendar items");
    assert.deepStrictEqual(buildings[0].buildingContactAssignments, ["contact-2"], "the second property keeps its contact links");

    const masterData = await storedMasterData(page);
    assert.strictEqual(masterData.contacts.length, 2, "master contacts must survive a property deletion");
    assert.strictEqual(masterData.companies.length, 1, "companies must survive a property deletion");
    assert.strictEqual(masterData.scheduledItemTemplates.length, 1, "master templates must survive a property deletion");

    assert.strictEqual(
      await page.evaluate(function () { return localStorage.getItem("buildingManagerCurrentPropertyId"); }),
      "",
      "the deleted property must not stay selected"
    );
    assert.strictEqual(
      await page.locator('[data-settings-property-id="alpha"]').count(),
      0,
      "the deleted property card disappears from Settings without a reload"
    );
    assert.deepStrictEqual(
      await selectorOptions(page),
      ["All Properties", "Beta Tower"],
      "the Property selector refreshes immediately after deletion"
    );

    assert.deepStrictEqual(pageErrors, [], "no page errors during property management actions");
    console.log("property-management-actions-browser tests passed");
  } finally {
    await browser.close();
    running.server.close();
  }
})().catch(function (error) {
  console.error(error);
  process.exit(1);
});
