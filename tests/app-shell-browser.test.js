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
  }, extra || {});
}

const seededBuildings = [
  makeBuilding("alpha", "Alpha House", {
    tenancies: [{ id: "ten-a", companyName: "Alpha Tenant", tradingName: "Alpha Tenant", leaseStart: "2026-01-01", leaseEnd: "2027-01-01", status: "Occupied" }],
    scheduleItems: [{ id: "cal-a", taskName: "Alpha Fire Alarm", dueDate: "2026-09-01", frequency: "Annual", status: "Active", category: "Compliance" }],
    documents: [{ id: "doc-a", title: "Alpha Insurance", category: "Insurance", documentType: "Insurance", fileName: "alpha.pdf", storage: { kind: "data-url", dataUrl: "data:application/pdf;base64,JVBERi0xLjQK" } }],
  }),
  makeBuilding("beta", "Beta Tower", {
    tenancies: [{ id: "ten-b", companyName: "Beta Tenant", tradingName: "Beta Tenant", leaseStart: "2026-02-01", leaseEnd: "2027-02-01", status: "Occupied" }],
    scheduleItems: [{ id: "cal-b", taskName: "Beta Roof Inspection", dueDate: "2026-10-01", frequency: "Annual", status: "Active", category: "Maintenance" }],
    documents: [{ id: "doc-b", title: "Beta Valuation", category: "Valuations", documentType: "Valuation", fileName: "beta.pdf", storage: { kind: "data-url", dataUrl: "data:application/pdf;base64,JVBERi0xLjQK" } }],
  }),
];

const MODULES = [
  { key: "Tenancy", view: "tenancy-view", label: "Tenancies" },
  { key: "Contacts", view: "contacts-view", label: "Contacts" },
  { key: "Schedule", view: "schedule-view", label: "Calendar" },
  { key: "Documents", view: "lease-view", label: "Documents" },
];

function isActive(page, viewId) {
  return page.locator(`#${viewId}`).evaluate(function (element) {
    return element.classList.contains("is-active");
  });
}

function moduleButton(page, key) {
  return page.locator(`#app-module-nav [data-app-module="${key}"]`);
}

(async function () {
  const running = await startServer();
  const browser = await chromium.launch({ headless: true });
  try {
    const page = await browser.newPage({ viewport: { width: 390, height: 780 } });
    const pageErrors = [];
    page.on("pageerror", function (error) {
      pageErrors.push(String(error));
    });
    page.on("dialog", function (dialog) {
      dialog.accept();
    });
    await page.addInitScript(function (buildings) {
      window.__COMPLIANCE_HQ_BROWSER_TEST__ = true;
      localStorage.setItem("buildingManagerBuildings", JSON.stringify(buildings));
      localStorage.setItem("buildingManagerCurrentPropertyId", "");
    }, seededBuildings);
    await page.goto(running.url, { waitUntil: "networkidle" });

    // 1. Shared shell is present, branded and permanently available.
    assert.strictEqual(await page.locator("#app-brand-btn").textContent(), "Compliance HQ", "The shell must be branded Compliance HQ");
    assert.deepStrictEqual(
      await page.locator("#app-module-nav .app-module-btn").allTextContents(),
      ["Dashboard", "Tenancies", "Contacts", "Calendar", "Documents", "Settings"],
      "The shell must expose Dashboard, the four modules and Settings"
    );
    assert.deepStrictEqual(
      await page.locator("#app-property-selector option").allTextContents(),
      ["All Properties", "Alpha House", "Beta Tower"],
      "All Properties must be the first Property selector option"
    );

    // 15. Narrow viewport must not overflow.
    const overflow = await page.evaluate(function () {
      return {
        document: document.documentElement.scrollWidth > window.innerWidth + 1,
        nav: document.getElementById("app-module-nav").scrollWidth > window.innerWidth + 1,
        selector: document.getElementById("app-property-selector").getBoundingClientRect().right > window.innerWidth + 1,
      };
    });
    assert.deepStrictEqual(overflow, { document: false, nav: false, selector: false }, "The shell must not overflow a narrow viewport");

    // 2. Active module highlighting + shell available on every module.
    for (const entry of MODULES) {
      await moduleButton(page, entry.key).click();
      assert.strictEqual(await isActive(page, entry.view), true, `${entry.label} must open`);
      assert.strictEqual(await page.locator("#app-shell-header").isVisible(), true, `${entry.label} must keep the shared shell`);
      assert.deepStrictEqual(
        await page.locator("#app-module-nav .app-module-btn.is-active").allTextContents(),
        [entry.label],
        `${entry.label} must be the only highlighted module`
      );
      assert.strictEqual(await page.locator("#app-property-selector").isVisible(), true, `${entry.label} must keep the shared Property selector`);
    }

    // 4. All Properties portfolio views.
    await moduleButton(page, "Tenancy").click();
    let text = await page.locator("#tenancy-details-list").textContent();
    assert.ok(text.includes("Alpha Tenant") && text.includes("Beta Tenant"), "All Properties must show tenancies across all properties");

    await moduleButton(page, "Schedule").click();
    text = await page.locator("#schedule-ops-list").textContent();
    assert.ok(text.includes("Alpha Fire Alarm") && text.includes("Beta Roof Inspection"), "All Properties must show calendar items across all properties");

    await moduleButton(page, "Documents").click();
    assert.strictEqual(await page.locator("[data-document-register-id]").count(), 2, "All Properties must show the whole document repository");

    // 3. Property selection persists while moving Documents -> Calendar -> Contacts -> Tenancies.
    await page.locator("#app-property-selector").selectOption("alpha");
    assert.strictEqual(await isActive(page, "lease-view"), true, "Changing the selector must stay on the current module");
    assert.strictEqual(await page.locator("[data-document-register-id]").count(), 1, "Documents must scope to the selected property");

    await moduleButton(page, "Schedule").click();
    assert.strictEqual(await page.locator("#app-property-selector").inputValue(), "alpha", "Property selection must persist into Calendar");
    text = await page.locator("#schedule-ops-list").textContent();
    assert.ok(text.includes("Alpha Fire Alarm") && !text.includes("Beta Roof Inspection"), "Calendar must scope to the selected property");

    await moduleButton(page, "Contacts").click();
    assert.strictEqual(await page.locator("#app-property-selector").inputValue(), "alpha", "Property selection must persist into Contacts");

    await moduleButton(page, "Tenancy").click();
    assert.strictEqual(await page.locator("#app-property-selector").inputValue(), "alpha", "Property selection must persist into Tenancies");
    text = await page.locator("#tenancy-details-list").textContent();
    assert.ok(text.includes("Alpha Tenant") && !text.includes("Beta Tenant"), "Tenancies must scope to the selected property");

    // 7. Dashboard is an operational overview for both scopes.
    await moduleButton(page, "dashboard").click();
    assert.strictEqual(await isActive(page, "dashboard-view"), true, "Dashboard must open");
    assert.strictEqual(await page.locator("#workspace-dashboard-title").textContent(), "Property Overview", "Dashboard must summarise the selected property");
    await page.locator("#app-property-selector").selectOption("");
    assert.strictEqual(await isActive(page, "dashboard-view"), true, "Changing the selector must keep the user on the Dashboard");
    assert.strictEqual(await page.locator("#workspace-dashboard-title").textContent(), "Portfolio Overview", "Dashboard must support All Properties");
    text = await page.locator("#workspace-dashboard-summary").textContent();
    assert.ok(text.includes("All Properties"), "Dashboard must state the All Properties scope");

    // 8. Property administration has left the Dashboard.
    assert.strictEqual(await page.locator("#dashboard-view #backup-export-btn").count(), 0, "Backup must not live on the Dashboard");
    assert.strictEqual(await page.locator("#dashboard-view [data-settings-property-action]").count(), 0, "Property administration must not live on the Dashboard");

    // 9 + 11 + 12. Settings structure.
    await moduleButton(page, "settings").click();
    assert.strictEqual(await isActive(page, "settings-view"), true, "Settings must open from the shell");
    assert.strictEqual(await page.locator("#settings-add-property-btn").isVisible(), true, "Settings must offer Add Property");
    assert.strictEqual(await page.locator("#settings-templates-btn").isVisible(), true, "Settings must offer Calendar Templates");
    assert.strictEqual(await page.locator("#backup-export-btn").isVisible(), true, "Settings must offer Export Backup");
    assert.strictEqual(await page.locator("#backup-restore-btn").isVisible(), true, "Settings must offer Restore Backup");
    assert.strictEqual(await page.locator("[data-settings-property-id]").count(), 2, "Settings must list every property");

    await page.locator("#settings-templates-btn").click();
    assert.strictEqual(await isActive(page, "template-library-view"), true, "Settings must open the Calendar Template library");
    await page.locator("#template-library-back-btn").click();
    assert.strictEqual(await isActive(page, "settings-view"), true, "Calendar Templates must return to Settings");

    // 13. The Setup wizard still runs, and Cancel returns to Settings.
    await page.locator("#settings-add-property-btn").click();
    assert.strictEqual(await isActive(page, "form-view"), true, "Add Property must open the existing Setup wizard");
    assert.strictEqual(await page.locator("#app-shell-header").isVisible(), false, "Focused workflows must hide the shell");
    await page.locator("#setup-cancel-btn").click();
    assert.strictEqual(await isActive(page, "settings-view"), true, "Cancelling Setup must return to Settings");

    // 6. Settings cards only route to Edit Property; management lives inside the editor.
    ["archive", "unarchive", "delete"].forEach(async function (action) {
      assert.strictEqual(await page.locator(`[data-settings-property-action="${action}"]`).count(), 0, `Settings cards must not offer ${action}`);
    });
    await page.locator('[data-settings-property-id="beta"] [data-settings-property-action="edit"]').click();
    assert.strictEqual(await isActive(page, "edit-view"), true, "Settings must open Edit Property");
    assert.strictEqual(await page.locator("#edit-archive-property-btn").isVisible(), true, "An active property must offer Archive Property");
    assert.strictEqual(await page.locator("#edit-restore-property-btn").isVisible(), false, "An active property must not offer Restore Property");
    assert.strictEqual(await page.locator("#edit-delete-property-btn").isVisible(), true, "Edit Property must own permanent deletion");
    await page.locator("#cancel-edit-btn").click();
    assert.strictEqual(await isActive(page, "settings-view"), true, "Edit Property Cancel must return to Settings");

    // 10. Archive from Edit Property, exclusion from the operational selector, and restore.
    await page.locator('[data-settings-property-id="beta"] [data-settings-property-action="edit"]').click();
    await page.locator("#edit-archive-property-btn").click();
    assert.strictEqual(await isActive(page, "settings-view"), true, "Archiving must return to Settings");
    assert.deepStrictEqual(
      await page.locator("#app-property-selector option").allTextContents(),
      ["All Properties", "Alpha House"],
      "Archived properties must be excluded from the operational selector"
    );
    assert.strictEqual(await page.locator("[data-settings-property-id]").count(), 2, "Settings must still manage archived properties");
    assert.ok(
      (await page.locator('[data-settings-property-id="beta"]').textContent()).includes("Archived"),
      "Settings must mark the property as archived"
    );

    const archivedRecord = await page.evaluate(function () {
      return JSON.parse(localStorage.getItem("buildingManagerBuildings")).find(function (b) { return b.id === "beta"; });
    });
    assert.strictEqual(archivedRecord.archived, true, "Archiving must set the archived flag");
    assert.ok(archivedRecord.tenancies.length >= 1, "Archiving must keep tenancies");
    assert.ok(archivedRecord.scheduleItems.length >= 1, "Archiving must keep calendar items");
    assert.ok(archivedRecord.documents.length >= 1, "Archiving must keep documents");

    await moduleButton(page, "Documents").click();
    assert.strictEqual(await page.locator("[data-document-register-id]").count(), 1, "Archived property records must leave the operational modules");

    await moduleButton(page, "settings").click();
    await page.locator('[data-settings-property-id="beta"] [data-settings-property-action="edit"]').click();
    assert.strictEqual(await page.locator("#edit-restore-property-btn").isVisible(), true, "An archived property must offer Restore Property");
    assert.strictEqual(await page.locator("#edit-archive-property-btn").isVisible(), false, "An archived property must not offer Archive Property");
    await page.locator("#edit-restore-property-btn").click();
    assert.strictEqual(await isActive(page, "settings-view"), true, "Restoring must return to Settings");
    assert.deepStrictEqual(
      await page.locator("#app-property-selector option").allTextContents(),
      ["All Properties", "Alpha House", "Beta Tower"],
      "Restoring must return the property to the operational selector"
    );
    const restoredRecord = await page.evaluate(function () {
      return JSON.parse(localStorage.getItem("buildingManagerBuildings")).find(function (b) { return b.id === "beta"; });
    });
    assert.strictEqual(restoredRecord.archived, false, "Restoring must clear the archived flag");
    assert.ok(restoredRecord.documents.length >= 1, "Restoring must keep documents");

    // 10. Permanent deletion stays behind an in-app confirmation and only inside Edit Property.
    const deleteConfirm = page.locator("[data-property-delete-confirm]");
    await page.locator('[data-settings-property-id="beta"] [data-settings-property-action="edit"]').click();
    await page.locator("#edit-delete-property-btn").click();
    await deleteConfirm.waitFor({ state: "visible" });
    assert.ok((await deleteConfirm.textContent()).includes("Beta Tower"), "The confirmation must name the property");
    await deleteConfirm.locator('[data-property-delete-action="cancel"]').click();
    assert.strictEqual(await isActive(page, "edit-view"), true, "Dismissing the confirmation must stay in Edit Property");
    await page.locator("#cancel-edit-btn").click();
    assert.strictEqual(await page.locator("[data-settings-property-id]").count(), 2, "Dismissing the confirmation must keep the property");

    await page.locator('[data-settings-property-id="beta"] [data-settings-property-action="edit"]').click();
    await page.locator("#edit-delete-property-btn").click();
    await deleteConfirm.waitFor({ state: "visible" });
    await deleteConfirm.locator('[data-property-delete-action="delete"]').click();
    await page.waitForFunction(function () {
      return document.getElementById("settings-view").classList.contains("is-active");
    });
    assert.strictEqual(await isActive(page, "settings-view"), true, "Confirmed deletion must return to Settings");
    assert.strictEqual(await page.locator("[data-settings-property-id]").count(), 1, "Confirming must permanently delete the property");
    assert.deepStrictEqual(
      await page.locator("#app-property-selector option").allTextContents(),
      ["All Properties", "Alpha House"],
      "A deleted property must leave the operational selector"
    );

    // 6. No screen may present a generic Back button.
    assert.strictEqual(
      await page.locator("button", { hasText: /^\s*←?\s*Back\s*$/ }).count(),
      0,
      "No button may be labelled simply Back"
    );

    assert.deepStrictEqual(pageErrors, [], "Navigating the shared shell must not throw a browser exception");
    console.log("shared shell navigation browser regression test passed");
  } finally {
    await browser.close();
    running.server.close();
  }
})().catch(function (error) {
  console.error(error.stack || error);
  process.exitCode = 1;
});
