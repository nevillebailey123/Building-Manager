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

function masterTemplate(id, name, active) {
  return {
    id: id,
    name: name,
    description: "",
    category: "General",
    defaultFrequency: "Annual",
    nextDueDate: "2026-09-01",
    defaultReminderPeriod: "30 days before",
    suggestedDocuments: [],
    defaultNotes: "",
    customRecurringDates: [],
    active: active || "Yes",
    defaultChecked: false,
    createdDate: "2026-01-01T00:00:00.000Z",
    lastUpdated: "2026-01-01T00:00:00.000Z",
  };
}

const MASTER_DATA = {
  companies: [{ id: "company-1", name: "Fire Co", type: "Service" }],
  contacts: [{
    id: "contact-1",
    companyId: "company-1",
    name: "Fiona Fire",
    mobile: "021 000 0001",
    email: "fiona@example.com",
    active: "Yes",
  }],
  scheduledItemTemplates: [
    masterTemplate("m-fire", "Fire Alarm Service"),
    masterTemplate("m-backflow", "Backflow Test"),
  ],
  documents: [],
};

// A manually created calendar item with no master template must never be affected.
const MANUAL_TEMPLATE_ID = "pt-manual";
const MANUAL_ITEM_ID = "si-manual";

const BUILDINGS = [{
  id: "ford-onekawa",
  buildingName: "Ford Onekawa",
  streetAddress: "1 Kirkwood Road",
  city: "Napier",
  status: "Occupied",
  tenancy: null,
  tenancies: [],
  documents: [],
  documentCategories: [],
  buildingContactAssignments: [],
  contactRelationshipById: {},
  propertyTemplates: [{
    id: MANUAL_TEMPLATE_ID,
    masterTemplateId: "",
    propertyId: "ford-onekawa",
    name: "Manual Roof Inspection",
    category: "General",
    defaultFrequency: "Annual",
    initialDueDate: "2026-11-01",
    nextDueDate: "2026-11-01",
    defaultReminderPeriod: "",
    suggestedDocuments: [],
    defaultNotes: "",
    preferredCompanyId: "",
    preferredContactId: "",
    attachments: [],
    customRecurringDates: [],
    active: "Yes",
    createdDate: "2026-01-01T00:00:00.000Z",
    lastUpdated: "2026-01-01T00:00:00.000Z",
  }],
  scheduleItems: [{
    id: MANUAL_ITEM_ID,
    propertyTemplateId: MANUAL_TEMPLATE_ID,
    templateId: MANUAL_TEMPLATE_ID,
    propertyId: "ford-onekawa",
    taskName: "Manual Roof Inspection",
    category: "General",
    dueDate: "2026-11-01",
    initialDueDate: "2026-11-01",
    frequency: "Annual",
    preferredCompany: "",
    preferredCompanyId: "",
    preferredContactId: "",
    notes: "",
    lastCompletedDate: "",
    lastCompletionHistoryId: "",
    status: "Future",
    createdDate: "2026-01-01T00:00:00.000Z",
    lastUpdated: "2026-01-01T00:00:00.000Z",
  }],
  historyRecords: [],
}];

async function load(page, url) {
  await page.goto(url, { waitUntil: "networkidle" });
}

function readProperty(page) {
  return page.evaluate(function () {
    const buildings = JSON.parse(localStorage.getItem("buildingManagerBuildings") || "[]");
    const building = buildings.find(function (item) { return item.id === "ford-onekawa"; }) || {};
    return {
      propertyTemplates: (building.propertyTemplates || []).map(function (template) {
        return {
          id: template.id,
          masterTemplateId: template.masterTemplateId || "",
          name: template.name,
          nextDueDate: template.nextDueDate,
          defaultFrequency: template.defaultFrequency,
          preferredContactId: template.preferredContactId || "",
          preferredCompanyId: template.preferredCompanyId || "",
          defaultNotes: template.defaultNotes || "",
        };
      }),
      scheduleItems: (building.scheduleItems || []).map(function (item) {
        return {
          id: item.id,
          propertyTemplateId: item.propertyTemplateId || item.templateId || "",
          taskName: item.taskName,
          dueDate: item.dueDate,
          frequency: item.frequency,
          preferredContactId: item.preferredContactId || "",
          preferredCompanyId: item.preferredCompanyId || "",
          notes: item.notes || "",
          lastCompletedDate: item.lastCompletedDate || "",
        };
      }),
      historyRecords: (building.historyRecords || []).map(function (record) {
        return { id: record.id, scheduleItemId: record.scheduleItemId, taskName: record.taskName };
      }),
    };
  });
}

function masterTemplateIds(page) {
  return page.evaluate(function () {
    return JSON.parse(localStorage.getItem("buildingManagerMasterData") || "{}")
      .scheduledItemTemplates.map(function (template) { return template.id; })
      .sort();
  });
}

function fireItem(state) {
  return state.scheduleItems.find(function (item) { return item.taskName === "Fire Alarm Service"; }) || null;
}

function firePropertyTemplate(state) {
  return state.propertyTemplates.find(function (template) { return template.name === "Fire Alarm Service"; }) || null;
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
      localStorage.setItem("buildingManagerCurrentPropertyId", "ford-onekawa");
    }, { buildings: BUILDINGS, masterData: MASTER_DATA });

    await load(page, running.url);

    // --- 1. An active master template can be assigned normally ---------------
    const assigned = await page.evaluate(function () {
      const api = window.BuildingManagerSchedule;
      const building = window.BuildingStorage.getBuildingById("ford-onekawa");
      const result = api.addMasterTemplatesToBuilding(building, ["m-fire"], [
        { templateId: "m-fire", defaultFrequency: "Annual", initialDueDate: "2026-09-01", nextDueDate: "2026-09-01" },
      ]);
      window.BuildingStorage.updateBuilding(result.building);
      return api.getAssignedMasterTemplateIdsForBuilding(window.BuildingStorage.getBuildingById("ford-onekawa"));
    });
    assert.deepStrictEqual(assigned, ["m-fire"], "An active master template must be assignable");

    let state = await readProperty(page);
    assert.ok(firePropertyTemplate(state), "Assignment must create a property template");
    assert.ok(fireItem(state), "Assignment must create the calendar item");
    assert.strictEqual(firePropertyTemplate(state).masterTemplateId, "m-fire", "The property template must record its master");

    // Give the calendar item real property data that must survive the whole lifecycle.
    await page.evaluate(function (itemId) {
      const buildings = JSON.parse(localStorage.getItem("buildingManagerBuildings"));
      const building = buildings.find(function (item) { return item.id === "ford-onekawa"; });
      building.scheduleItems = building.scheduleItems.map(function (item) {
        if (item.id !== itemId) {
          return item;
        }
        return {
          ...item,
          dueDate: "2027-03-15",
          preferredContactId: "contact-1",
          preferredCompanyId: "company-1",
          notes: "Access via rear door",
        };
      });
      building.historyRecords = (building.historyRecords || []).concat({
        id: "hist-fire-1",
        scheduleItemId: itemId,
        taskName: "Fire Alarm Service",
        completedAt: "2026-03-15T00:00:00.000Z",
        completedDate: "2026-03-15",
        completedBy: "Tester",
        notes: "Passed",
      });
      const updatedBuilding = buildings.find(function (item) {
        return item.id === "ford-onekawa";
      });
      return window.BuildingStorage.updateBuilding(updatedBuilding);
    }, fireItem(state).id);
    const fireItemId = fireItem(state).id;
    const firePropertyTemplateId = firePropertyTemplate(state).id;

    await load(page, running.url);
    state = await readProperty(page);
    assert.strictEqual(fireItem(state).dueDate, "2027-03-15", "A custom due date must survive normalisation");
    assert.strictEqual(state.historyRecords.length, 1, "Completion history must survive normalisation");

    // --- 2-4. Archive ---------------------------------------------------------
    await page.evaluate(function () {
      window.BuildingManagerSchedule.deactivateMasterTemplate("m-fire");
    });

    let activeIds = await page.evaluate(function () {
      return window.BuildingManagerSchedule.getActiveScheduledItemTemplates().map(function (t) { return t.id; });
    });
    assert.deepStrictEqual(activeIds, ["m-backflow"], "An archived template must leave the active template list");

    const blocked = await page.evaluate(function () {
      const api = window.BuildingManagerSchedule;
      // A second property must not be able to pick up the archived template.
      const building = {
        id: "second-property",
        buildingName: "Second Property",
        propertyTemplates: [],
        scheduleItems: [],
        historyRecords: [],
        documents: [],
      };
      const result = api.addMasterTemplatesToBuilding(building, ["m-fire"], [
        { templateId: "m-fire", defaultFrequency: "Annual", initialDueDate: "2026-09-01", nextDueDate: "2026-09-01" },
      ]);
      return {
        added: result.addedTemplateIds,
        propertyTemplates: result.building.propertyTemplates.length,
        scheduleItems: result.building.scheduleItems.length,
      };
    });
    assert.deepStrictEqual(blocked.added, [], "An archived template must not be newly assignable");
    assert.strictEqual(blocked.propertyTemplates, 0, "An archived template must not create a property template");
    assert.strictEqual(blocked.scheduleItems, 0, "An archived template must not generate a calendar item");

    state = await readProperty(page);
    assert.ok(fireItem(state), "Archiving must not delete the existing calendar item");
    assert.strictEqual(fireItem(state).dueDate, "2027-03-15", "Archiving must not reset the custom due date");
    assert.strictEqual(state.scheduleItems.length, 2, "Archiving must not generate an extra calendar item");
    assert.strictEqual(state.historyRecords.length, 1, "Archiving must not delete completion history");

    // The picker must not offer the archived template to a property that lacks it.
    await page.evaluate(function () {
      localStorage.setItem("buildingManagerCurrentPropertyId", "ford-onekawa");
    });

    // --- 5. Reload keeps the template archived --------------------------------
    await load(page, running.url);
    const archivedAfterReload = await page.evaluate(function () {
      return JSON.parse(localStorage.getItem("buildingManagerMasterData"))
        .scheduledItemTemplates.find(function (template) { return template.id === "m-fire"; }).active;
    });
    assert.strictEqual(archivedAfterReload, "No", "An archived template must stay archived after reload");
    activeIds = await page.evaluate(function () {
      return window.BuildingManagerSchedule.getActiveScheduledItemTemplates().map(function (t) { return t.id; });
    });
    assert.deepStrictEqual(activeIds, ["m-backflow"], "Reload must not reactivate an archived template");

    // --- 6-9. Delete ----------------------------------------------------------
    await page.evaluate(function () {
      window.BuildingManagerSchedule.deleteMasterTemplate("m-fire");
    });

    assert.deepStrictEqual(await masterTemplateIds(page), ["m-backflow"], "Deleting must remove the master template");

    state = await readProperty(page);
    assert.strictEqual(
      firePropertyTemplate(state).masterTemplateId,
      "",
      "Deleting must remove the stale master template assignment"
    );
    assert.strictEqual(firePropertyTemplate(state).id, firePropertyTemplateId, "The property template record itself must survive");
    assert.ok(fireItem(state), "Deleting a master template must not delete the calendar item");
    assert.strictEqual(fireItem(state).id, fireItemId, "The calendar item must keep its identity");
    assert.strictEqual(fireItem(state).dueDate, "2027-03-15", "The custom due date must survive the delete");
    assert.strictEqual(fireItem(state).frequency, "Annual", "The frequency must survive the delete");
    assert.strictEqual(fireItem(state).preferredContactId, "contact-1", "The preferred contact must survive the delete");
    assert.strictEqual(fireItem(state).preferredCompanyId, "company-1", "The preferred company must survive the delete");
    assert.strictEqual(fireItem(state).notes, "Access via rear door", "Notes must survive the delete");
    assert.strictEqual(state.historyRecords.length, 1, "Completion history must survive the delete");
    assert.strictEqual(state.historyRecords[0].scheduleItemId, fireItemId, "History must stay attached to its calendar item");

    const assignedAfterDelete = await page.evaluate(function () {
      return window.BuildingManagerSchedule.getAssignedMasterTemplateIdsForBuilding(
        window.BuildingStorage.getBuildingById("ford-onekawa")
      );
    });
    assert.deepStrictEqual(assignedAfterDelete, [], "The property must no longer be assigned to the deleted template");

    // --- 10-12. Reload after delete ------------------------------------------
    await load(page, running.url);
    assert.deepStrictEqual(await masterTemplateIds(page), ["m-backflow"], "A deleted template must not return after reload");

    state = await readProperty(page);
    assert.strictEqual(state.scheduleItems.length, 2, "Reload must not regenerate or duplicate the preserved calendar item");
    assert.strictEqual(state.propertyTemplates.length, 2, "Reload must not duplicate the property template");
    assert.strictEqual(fireItem(state).id, fireItemId, "The preserved calendar item must keep its id after reload");
    assert.strictEqual(fireItem(state).dueDate, "2027-03-15", "The preserved calendar item must keep its due date after reload");
    assert.strictEqual(firePropertyTemplate(state).masterTemplateId, "", "The severed link must not come back after reload");
    assert.strictEqual(state.historyRecords.length, 1, "History must not be duplicated by reload");

    const manualItem = state.scheduleItems.find(function (item) { return item.id === MANUAL_ITEM_ID; });
    assert.ok(manualItem, "An independent manual calendar item must be unaffected");
    assert.strictEqual(manualItem.dueDate, "2026-11-01", "A manual calendar item must keep its due date");

    // The calendar renders both preserved items.
    await page.locator('#app-module-nav [data-app-module="Schedule"]').click();
    const scheduleText = await page.locator("#schedule-ops-list").textContent();
    assert.ok(scheduleText.includes("Fire Alarm Service"), "The preserved calendar item must still render");
    assert.ok(scheduleText.includes("Manual Roof Inspection"), "The manual calendar item must still render");

    // The picker must not offer the deleted template and must offer the remaining one.
    await page.locator("#manage-templates-btn").click();
    const pickerTemplates = await page.evaluate(function () {
      return Array.prototype.map.call(
        document.querySelectorAll(".template-picker-item"),
        function (node) { return node.getAttribute("data-template-id"); }
      );
    });
    assert.deepStrictEqual(pickerTemplates, ["m-backflow"], "Neither the deleted nor an archived template may be offered for assignment");
    await page.locator('[data-template-picker-action="close"]').click();

    // --- 13. Backup and restore ----------------------------------------------
    const backup = await page.evaluate(function () {
      return JSON.stringify(window.BuildingStorage.createBackupPayload());
    });
    await page.close();

    const targetContext = await browser.newContext();
    const targetPage = await targetContext.newPage();
    targetPage.on("pageerror", function (error) { pageErrors.push(String(error)); });
    await load(targetPage, running.url);
    await targetPage.evaluate(async function (payload) {
      const restoreOutcome = window.BuildingStorage.restoreBackupData(JSON.parse(payload));
      if (restoreOutcome.persisted) {
        await restoreOutcome.persisted;
      }
    }, backup);
    await load(targetPage, running.url);

    assert.deepStrictEqual(await masterTemplateIds(targetPage), ["m-backflow"], "Restore must not resurrect the deleted template");
    const restored = await readProperty(targetPage);
    assert.strictEqual(restored.scheduleItems.length, 2, "Restore must preserve both calendar items exactly once");
    assert.strictEqual(restored.historyRecords.length, 1, "Restore must preserve completion history");
    const restoredFire = fireItem(restored);
    assert.strictEqual(restoredFire.id, fireItemId, "Restore must preserve the calendar item id");
    assert.strictEqual(restoredFire.dueDate, "2027-03-15", "Restore must preserve the custom due date");
    assert.strictEqual(restoredFire.preferredContactId, "contact-1", "Restore must preserve the preferred contact");
    assert.strictEqual(restoredFire.preferredCompanyId, "company-1", "Restore must preserve the preferred company");
    assert.strictEqual(restoredFire.notes, "Access via rear door", "Restore must preserve the notes");
    assert.strictEqual(firePropertyTemplate(restored).masterTemplateId, "", "Restore must keep the calendar record independent");
    await targetContext.close();

    // --- Legacy data: stale references are reconciled on startup --------------
    const legacyContext = await browser.newContext();
    const legacyPage = await legacyContext.newPage();
    legacyPage.on("pageerror", function (error) { pageErrors.push(String(error)); });
    await legacyPage.addInitScript(function () {}, null);
    await load(legacyPage, running.url);
    await legacyPage.evaluate(function (payload) {
      localStorage.setItem("buildingManagerBuildings", JSON.stringify(payload.buildings));
      localStorage.setItem("buildingManagerMasterData", JSON.stringify(payload.masterData));
      localStorage.setItem("buildingManagerCurrentPropertyId", "ford-onekawa");
    }, {
      buildings: [{
        ...BUILDINGS[0],
        propertyTemplates: BUILDINGS[0].propertyTemplates.concat([{
          ...BUILDINGS[0].propertyTemplates[0],
          id: "pt-stale",
          masterTemplateId: "m-deleted-long-ago",
          name: "Fire Alarm Service",
        }]),
        scheduleItems: BUILDINGS[0].scheduleItems.concat([{
          ...BUILDINGS[0].scheduleItems[0],
          id: "si-stale",
          propertyTemplateId: "pt-stale",
          templateId: "pt-stale",
          taskName: "Fire Alarm Service",
        }]),
      }],
      masterData: MASTER_DATA,
    });
    await load(legacyPage, running.url);

    const legacyState = await readProperty(legacyPage);
    assert.strictEqual(
      legacyState.propertyTemplates.find(function (t) { return t.id === "pt-stale"; }).masterTemplateId,
      "",
      "Startup must clear a property template reference to a master template that no longer exists"
    );
    assert.strictEqual(legacyState.scheduleItems.length, 2, "Startup reconciliation must not delete or duplicate calendar items");
    assert.ok(
      legacyState.scheduleItems.some(function (item) { return item.id === "si-stale"; }),
      "The calendar item behind a stale reference must be preserved"
    );
    await legacyContext.close();

    assert.deepStrictEqual(pageErrors, [], "The template lifecycle must not throw a browser exception");
    console.log("template lifecycle browser regression test passed");
  } finally {
    await browser.close();
    running.server.close();
  }
})().catch(function (error) {
  console.error(error.stack || error);
  process.exitCode = 1;
});
