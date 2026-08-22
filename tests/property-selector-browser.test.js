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
  }),
  makeBuilding("beta", "Beta Tower"),
  makeBuilding("gamma", "Gamma Archived", { archived: true }),
];

// The five main operational screens that must always carry the shared Property selector.
const OPERATIONAL_MODULES = [
  { key: "dashboard", view: "dashboard-view", label: "Dashboard" },
  { key: "Tenancy", view: "tenancy-view", label: "Tenancies" },
  { key: "Contacts", view: "contacts-view", label: "Contacts" },
  { key: "Schedule", view: "schedule-view", label: "Calendar" },
  { key: "Documents", view: "lease-view", label: "Documents" },
];

function moduleButton(page, key) {
  return page.locator(`#app-module-nav [data-app-module="${key}"]`);
}

function isActive(page, viewId) {
  return page.locator(`#${viewId}`).evaluate(function (element) {
    return element.classList.contains("is-active");
  });
}

// Rendered, laid out and reachable — not merely present in the DOM.
function selectorState(page) {
  return page.evaluate(function () {
    const selectors = document.querySelectorAll("#app-property-selector, .app-property-select");
    const selector = document.getElementById("app-property-selector");
    const header = document.getElementById("app-shell-header");
    const label = document.querySelector(".app-property-label");
    const rect = selector ? selector.getBoundingClientRect() : { width: 0, height: 0 };
    return {
      count: selectors.length,
      headerHidden: header ? header.hidden : true,
      headerDisplay: header ? getComputedStyle(header).display : "none",
      rendered: Boolean(selector && selector.offsetParent),
      display: selector ? getComputedStyle(selector).display : "none",
      visibility: selector ? getComputedStyle(selector).visibility : "hidden",
      width: Math.round(rect.width),
      height: Math.round(rect.height),
      labelText: label ? label.textContent : "",
      labelRendered: Boolean(label && label.offsetParent),
      options: selector ? Array.prototype.map.call(selector.options, function (option) { return option.text; }) : [],
      value: selector ? selector.value : null,
    };
  });
}

async function assertSelectorVisible(page, context, expectedValue) {
  const state = await selectorState(page);
  assert.strictEqual(state.count, 1, `${context}: exactly one shared Property selector must exist`);
  assert.strictEqual(state.headerHidden, false, `${context}: the shared shell must not be hidden`);
  assert.notStrictEqual(state.headerDisplay, "none", `${context}: the shared shell must be displayed`);
  assert.strictEqual(state.rendered, true, `${context}: the Property selector must be rendered`);
  assert.notStrictEqual(state.display, "none", `${context}: the Property selector must not be display:none`);
  assert.strictEqual(state.visibility, "visible", `${context}: the Property selector must be visible`);
  assert.ok(state.width > 0 && state.height > 0, `${context}: the Property selector must occupy space`);
  assert.strictEqual(state.labelText, "Property", `${context}: the Property label must read Property`);
  assert.strictEqual(state.labelRendered, true, `${context}: the Property label must be rendered`);
  assert.strictEqual(state.options[0], "All Properties", `${context}: All Properties must remain the first option`);
  assert.deepStrictEqual(state.options, ["All Properties", "Alpha House", "Beta Tower"], `${context}: archived properties must stay excluded`);
  if (expectedValue !== undefined) {
    assert.strictEqual(state.value, expectedValue, `${context}: the selected property must persist`);
  }
  return state;
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
    await page.addInitScript(function (buildings) {
      window.__COMPLIANCE_HQ_BROWSER_TEST__ = true;
      localStorage.setItem("buildingManagerBuildings", JSON.stringify(buildings));
      localStorage.setItem("buildingManagerCurrentPropertyId", "");
    }, seededBuildings);
    await page.goto(running.url, { waitUntil: "networkidle" });

    await assertSelectorVisible(page, "initial load", "");

    // Dashboard -> Tenancies -> Contacts -> Calendar -> Documents -> Dashboard.
    for (const entry of OPERATIONAL_MODULES) {
      await moduleButton(page, entry.key).click();
      assert.strictEqual(await isActive(page, entry.view), true, `${entry.label} must open`);
      await assertSelectorVisible(page, entry.label, "");
    }
    await moduleButton(page, "dashboard").click();
    await assertSelectorVisible(page, "back on Dashboard", "");

    // The selected property persists across the same round trip.
    await page.locator("#app-property-selector").selectOption("alpha");
    for (const entry of OPERATIONAL_MODULES) {
      await moduleButton(page, entry.key).click();
      await assertSelectorVisible(page, `${entry.label} with a selected property`, "alpha");
    }
    await moduleButton(page, "dashboard").click();
    await assertSelectorVisible(page, "back on Dashboard with a selected property", "alpha");

    // Settings may show the selector, but must never filter its property list.
    await moduleButton(page, "settings").click();
    const settingsState = await selectorState(page);
    assert.strictEqual(settingsState.count, 1, "Settings must not introduce a second Property selector");
    assert.strictEqual(
      await page.locator("[data-settings-property-id]").count(),
      3,
      "Settings must list every property regardless of the Property selector"
    );
    await page.locator("#app-property-selector").selectOption("beta");
    assert.strictEqual(
      await page.locator("[data-settings-property-id]").count(),
      3,
      "Changing the Property selector must not filter the Settings property list"
    );
    await page.locator("#app-property-selector").selectOption("alpha");

    // Opening and cancelling Add Document leaves the selector in place.
    await moduleButton(page, "Documents").click();
    await page.locator("#documents-add-btn").click();
    assert.strictEqual(await page.locator("#document-form-card").isVisible(), true, "Add Document must open the form");
    await assertSelectorVisible(page, "Add Document open", "alpha");
    await page.locator("#document-cancel-btn").click();
    await assertSelectorVisible(page, "Add Document cancelled", "alpha");

    // Opening and cancelling Add Tenancy leaves the selector in place.
    await moduleButton(page, "Tenancy").click();
    await page.locator("#add-tenancy-btn").click();
    assert.strictEqual(await page.locator("#tenancy-form-card").isVisible(), true, "Add Tenancy must open the form");
    await assertSelectorVisible(page, "Add Tenancy open", "alpha");
    await page.locator("#cancel-tenancy-btn").click();
    await assertSelectorVisible(page, "Add Tenancy cancelled", "alpha");

    // Opening and cancelling Add Contact leaves the selector in place.
    await moduleButton(page, "Contacts").click();
    await page.locator("#contacts-create-btn").click();
    await assertSelectorVisible(page, "Add Contact open", "alpha");

    // Focused workflows that deliberately hide the shell must restore it on the way back.
    await moduleButton(page, "settings").click();
    await page.locator("#settings-add-property-btn").click();
    assert.strictEqual(await isActive(page, "form-view"), true, "Add Property must open the Setup wizard");
    assert.strictEqual(await page.locator("#app-shell-header").isVisible(), false, "Setup deliberately hides the shell");
    await page.locator("#setup-cancel-btn").click();
    await assertSelectorVisible(page, "after cancelling Setup", "alpha");

    await page.locator('[data-settings-property-id="beta"] [data-settings-property-action="edit"]').click();
    assert.strictEqual(await isActive(page, "edit-view"), true, "Edit Property must open");
    assert.strictEqual(await page.locator("#app-shell-header").isVisible(), false, "Edit Property deliberately hides the shell");
    await page.locator("#cancel-edit-btn").click();
    await assertSelectorVisible(page, "after cancelling Edit Property", "alpha");

    // The selector survives the full round trip after those workflows.
    for (const entry of OPERATIONAL_MODULES) {
      await moduleButton(page, entry.key).click();
      await assertSelectorVisible(page, `${entry.label} after focused workflows`, "alpha");
    }

    // A reload restores the shared selector (the seed script resets the stored selection).
    await page.reload({ waitUntil: "networkidle" });
    await assertSelectorVisible(page, "after reload");

    assert.deepStrictEqual(pageErrors, [], "The shared Property selector must not throw a browser exception");
    console.log("property selector persistence browser regression test passed");
  } finally {
    await browser.close();
    running.server.close();
  }
})().catch(function (error) {
  console.error(error.stack || error);
  process.exitCode = 1;
});
