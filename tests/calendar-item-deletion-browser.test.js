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

const now = "2026-01-01T00:00:00.000Z";

function propertyTemplate(id, propertyId, masterTemplateId, name, dueDate) {
  return {
    id: id,
    masterTemplateId: masterTemplateId,
    propertyId: propertyId,
    name: name,
    category: "General",
    defaultFrequency: "Annual",
    initialDueDate: dueDate,
    nextDueDate: dueDate,
    defaultReminderPeriod: "",
    suggestedDocuments: [],
    defaultNotes: "",
    preferredCompanyId: "",
    preferredContactId: "",
    attachments: [],
    customRecurringDates: [],
    active: "Yes",
    createdDate: now,
    lastUpdated: now,
  };
}

function scheduleItem(id, propertyId, templateId, name, dueDate) {
  return {
    id: id,
    propertyTemplateId: templateId,
    templateId: templateId,
    propertyId: propertyId,
    taskName: name,
    category: "General",
    dueDate: dueDate,
    initialDueDate: dueDate,
    frequency: "Annual",
    preferredCompany: "",
    preferredCompanyId: "",
    preferredContactId: "",
    notes: "",
    lastCompletedDate: "2026-01-15",
    lastCompletionHistoryId: "",
    status: "Future",
    createdDate: now,
    lastUpdated: now,
  };
}

function building(id, name, templates, items, extra) {
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
    propertyTemplates: templates,
    scheduleItems: items,
    historyRecords: [],
    buildingContactAssignments: [],
    contactRelationshipById: {},
    createdDate: now,
    lastUpdated: now,
  }, extra || {});
}

const masterData = {
  companies: [{ id: "company-1", name: "Service Company", type: "Service" }],
  contacts: [{ id: "contact-1", name: "Property Contact", companyId: "company-1", email: "contact@example.com" }],
  scheduledItemTemplates: [{
    id: "master-gutter",
    name: "Gutter Cleaning",
    category: "General",
    defaultFrequency: "Annual",
    nextDueDate: "2026-09-01",
    defaultReminderPeriod: "",
    suggestedDocuments: [],
    defaultNotes: "",
    customRecurringDates: [],
    active: "Yes",
    defaultChecked: false,
    createdDate: now,
    lastUpdated: now,
  }],
  documents: [],
};

const buildings = [
  building("property-a", "Property A", [
    propertyTemplate("pt-manual-a", "property-a", "", "Manual Roof Check", "2026-08-20"),
    propertyTemplate("pt-gutter-a", "property-a", "master-gutter", "Gutter Cleaning", "2026-09-01"),
  ], [
    scheduleItem("item-manual-a", "property-a", "pt-manual-a", "Manual Roof Check", "2026-08-20"),
    scheduleItem("item-gutter-a", "property-a", "pt-gutter-a", "Gutter Cleaning", "2026-09-01"),
  ], {
    tenancies: [{
      id: "tenancy-a",
      companyName: "Tenant A",
      tradingName: "Tenant A",
      leaseStart: "2025-01-01",
      leaseEnd: "2027-06-30",
      rentReviewDate: "2026-12-01",
      rentReviewFrequency: "Annual",
      renewalDate: "2027-03-31",
      status: "Occupied",
      contactRefs: [{ contactId: "contact-1", responsibility: "Tenant Contact" }],
      lease: { notes: "Keep tenancy data" },
    }],
    documents: [{ id: "document-a", fileName: "compliance.pdf", category: "Compliance", description: "Keep document" }],
    historyRecords: [
      { id: "history-manual", scheduleItemId: "item-manual-a", taskName: "Manual Roof Check", completedDate: "2026-01-15", completedAt: "2026-01-15T00:00:00.000Z", completedBy: "Tester" },
      { id: "history-gutter-a", scheduleItemId: "item-gutter-a", taskName: "Gutter Cleaning", completedDate: "2026-01-15", completedAt: "2026-01-15T00:00:00.000Z", completedBy: "Tester" },
    ],
    buildingContactAssignments: ["contact-1"],
    contactRelationshipById: { "contact-1": "Property Manager" },
  }),
  building("property-b", "Property B", [
    propertyTemplate("pt-gutter-b", "property-b", "master-gutter", "Gutter Cleaning", "2026-10-01"),
  ], [
    scheduleItem("item-gutter-b", "property-b", "pt-gutter-b", "Gutter Cleaning", "2026-10-01"),
  ], {
    documents: [{ id: "document-b", fileName: "other.pdf", category: "General" }],
  }),
];

function storedState(page) {
  return page.evaluate(function () {
    return {
      buildings: window.BuildingStorage.getBuildings(),
      masterData: window.BuildingStorage.getMasterData(),
    };
  });
}

function findBuilding(state, id) {
  return state.buildings.find(function (entry) { return entry.id === id; });
}

async function openCalendar(page) {
  await page.locator('#app-module-nav [data-app-module="Schedule"]').click();
}

async function openEditItem(page, itemId) {
  await page.locator(`[data-schedule-id="${itemId}"]`).click();
  await page.locator('[data-schedule-details-action="edit"]').click();
  await page.locator("[data-schedule-details-edit-form]").waitFor({ state: "visible" });
}

async function assertItemStored(page, propertyId, itemId, expected) {
  await page.waitForFunction(function (condition) {
    const target = window.BuildingStorage.getBuildingById(condition.propertyId);
    const exists = Boolean(
      target &&
      (target.scheduleItems || []).some(function (item) {
        return item.id === condition.itemId;
      })
    );
    return exists === condition.expected;
  }, { propertyId: propertyId, itemId: itemId, expected: expected });

  const exists = await page.evaluate(function (ids) {
    const target = window.BuildingStorage.getBuildingById(ids.propertyId);
    return Boolean(
      target &&
      (target.scheduleItems || []).some(function (item) {
        return item.id === ids.itemId;
      })
    );
  }, { propertyId: propertyId, itemId: itemId });

  assert.strictEqual(exists, expected);
}

(async function () {
  const running = await startServer();
  const browser = await chromium.launch({ headless: true });
  try {
    const page = await browser.newPage();
    const pageErrors = [];
    page.on("pageerror", function (error) { pageErrors.push(String(error)); });
    await page.addInitScript(function (seed) {
      window.__COMPLIANCE_HQ_BROWSER_TEST__ = true;
      if (!localStorage.getItem("buildingManagerBuildings")) {
        localStorage.setItem("buildingManagerBuildings", JSON.stringify(seed.buildings));
        localStorage.setItem("buildingManagerMasterData", JSON.stringify(seed.masterData));
        localStorage.setItem("buildingManagerCurrentPropertyId", "property-a");
      }
    }, { buildings: buildings, masterData: masterData });
    await page.goto(running.url, { waitUntil: "networkidle" });
    await openCalendar(page);

    const baseline = await storedState(page);
    const baselineA = findBuilding(baseline, "property-a");
    const baselineB = findBuilding(baseline, "property-b");

    assert.strictEqual(await page.locator('[data-schedule-id] [data-schedule-details-action="delete"]').count(), 0, "Calendar rows must not expose Delete");

    // Cancel button leaves the manual item unchanged.
    await openEditItem(page, "item-manual-a");
    const deleteButton = page.locator('[data-schedule-details-action="delete"]');
    assert.strictEqual(await deleteButton.isVisible(), true, "Edit Calendar Item must expose the separated destructive action");
    await deleteButton.click();
    const confirm = page.locator("[data-schedule-item-delete-confirm]");
    await confirm.waitFor({ state: "visible" });
    const confirmText = await confirm.textContent();
    assert.ok(confirmText.includes("Manual Roof Check"), "Confirmation must identify the Calendar item");
    assert.ok(confirmText.includes("Property A"), "Confirmation must identify the property");
    await confirm.locator('[data-schedule-item-delete-action="cancel"]').click();
    await assertItemStored(page, "property-a", "item-manual-a", true);

    // Escape and backdrop click also cancel without mutation.
    await deleteButton.click();
    await page.keyboard.press("Escape");
    await assertItemStored(page, "property-a", "item-manual-a", true);
    if (await page.locator("[data-schedule-details-edit-form]").count() === 0) {
      await openEditItem(page, "item-manual-a");
    }
    await page.locator('[data-schedule-details-action="delete"]').click();
    await confirm.click({ position: { x: 2, y: 2 } });
    await assertItemStored(page, "property-a", "item-manual-a", true);

    // Explicit confirmation permanently deletes the manual item and retains history.
    await page.locator('[data-schedule-details-action="delete"]').click();
    await confirm.locator('[data-schedule-item-delete-action="delete"]').click();
    await assertItemStored(page, "property-a", "item-manual-a", false);

    await page.locator('[data-schedule-id="item-manual-a"]').waitFor({
      state: "detached",
    });

    assert.strictEqual(
      await page.locator('[data-schedule-id="item-manual-a"]').count(),
      0,
      "Deleted manual item must disappear from Calendar"
    );

    await page.reload({ waitUntil: "networkidle" });
    await openCalendar(page);
    await assertItemStored(page, "property-a", "item-manual-a", false);

    let state = await storedState(page);
    let propertyA = findBuilding(state, "property-a");
    assert.ok(propertyA.historyRecords.some(function (record) { return record.id === "history-manual"; }), "Manual item completion history must be retained");

    // Delete only Property A's template-generated item.
    await openEditItem(page, "item-gutter-a");
    await page.locator('[data-schedule-details-action="delete"]').click();
    await confirm.locator('[data-schedule-item-delete-action="delete"]').click();
    await assertItemStored(page, "property-a", "item-gutter-a", false);

    await page.locator('[data-schedule-id="item-gutter-a"]').waitFor({
      state: "detached",
    });

    await page.reload({ waitUntil: "networkidle" });
    await openCalendar(page);
    state = await storedState(page);
    propertyA = findBuilding(state, "property-a");
    const propertyB = findBuilding(state, "property-b");
    assert.strictEqual(propertyA.scheduleItems.some(function (item) { return item.taskName === "Gutter Cleaning"; }), false, "Synchronization must not recreate Property A's deleted item");
    assert.strictEqual(propertyA.propertyTemplates.some(function (template) { return template.masterTemplateId === "master-gutter"; }), false, "Property A generation relationship must be removed");
    assert.ok(propertyA.historyRecords.some(function (record) { return record.id === "history-gutter-a"; }), "Template item completion history must be retained");
    assert.ok(propertyB.scheduleItems.some(function (item) { return item.id === "item-gutter-b"; }), "Property B's Calendar item must remain");
    assert.ok(propertyB.propertyTemplates.some(function (template) { return template.id === "pt-gutter-b"; }), "Property B's assignment must remain");
    assert.ok(state.masterData.scheduledItemTemplates.some(function (template) { return template.id === "master-gutter" && template.active === "Yes"; }), "Master template must remain active and untouched");

    // A deliberate later assignment creates a fresh property relationship and item.
    const reassigned = await page.evaluate(function () {
      const api = window.BuildingManagerSchedule;
      const current = window.BuildingStorage.getBuildingById("property-a");
      const result = api.addMasterTemplatesToBuilding(current, ["master-gutter"], [{
        templateId: "master-gutter",
        defaultFrequency: "Annual",
        initialDueDate: "2027-09-01",
        nextDueDate: "2027-09-01",
      }]);
      window.BuildingStorage.updateBuilding(result.building);
      return {
        added: result.addedTemplateIds.length,
        items: result.building.scheduleItems.filter(function (item) { return item.taskName === "Gutter Cleaning"; }).length,
      };
    });
    assert.strictEqual(reassigned.added, 1, "The master template must be deliberately assignable again");
    assert.strictEqual(reassigned.items, 1, "Deliberate reassignment must recreate exactly one Calendar item");

    // Tenancy-derived events remain present and read-only in Calendar.
    await page.reload({ waitUntil: "networkidle" });
    await openCalendar(page);
    state = await storedState(page);
    propertyA = findBuilding(state, "property-a");
    const tenancyEvents = propertyA.scheduleItems.filter(function (item) { return item.sourceType === "tenancy"; });
    assert.deepStrictEqual(tenancyEvents.map(function (item) { return item.tenancyEventType; }).sort(), ["lease-expiry", "renewal-option", "rent-review"], "Tenancy-generated Calendar events must remain intact");
    await page.locator(`[data-schedule-id="${tenancyEvents[0].id}"]`).click();
    assert.strictEqual(await page.locator('[data-schedule-details-action="edit"]').count(), 0, "Tenancy event details must not offer Edit");
    assert.strictEqual(await page.locator('[data-schedule-details-action="delete"]').count(), 0, "Tenancy event details must not offer Delete");

    // Unrelated domain data remains unchanged from the normalized baseline.
    state = await storedState(page);
    propertyA = findBuilding(state, "property-a");
    assert.deepStrictEqual(propertyA.tenancies, baselineA.tenancies, "Tenancies must remain unchanged");
    assert.deepStrictEqual(propertyA.documents, baselineA.documents, "Documents must remain unchanged");
    assert.deepStrictEqual(propertyA.buildingContactAssignments, baselineA.buildingContactAssignments, "Property contacts must remain unchanged");
    assert.deepStrictEqual(propertyA.contactRelationshipById, baselineA.contactRelationshipById, "Contact relationships must remain unchanged");
    assert.deepStrictEqual(findBuilding(state, "property-b").documents, baselineB.documents, "Other property documents must remain unchanged");
    assert.deepStrictEqual(state.masterData.contacts, baseline.masterData.contacts, "Contacts must remain unchanged");
    assert.deepStrictEqual(state.masterData.companies, baseline.masterData.companies, "Companies must remain unchanged");
    assert.deepStrictEqual(pageErrors, [], "Browser flow must not produce page errors");

    console.log("calendar item deletion browser regression test passed");
  } finally {
    await browser.close();
    await new Promise(function (resolve) { running.server.close(resolve); });
  }
})().catch(function (error) {
  console.error(error);
  process.exitCode = 1;
});
