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

const seededBuildings = [{
  id: "ford-onekawa",
  buildingName: "Ford Onekawa",
  streetAddress: "1 Kirkwood Road",
  city: "Napier",
  status: "Occupied",
  tenancy: null,
  tenancies: [],
  documents: [],
  documentCategories: [],
  scheduleItems: [],
  propertyTemplates: [],
  historyRecords: [],
}];

// Each module page and the Dashboard control that must return there.
const modulePages = [
  { view: "tenancy-view", open: "Tenancy", nav: "#tenancy-back-btn" },
  { view: "contacts-view", open: "Contacts", nav: "#contacts-back-btn" },
  { view: "schedule-view", open: "Schedule", nav: "#schedule-back-btn" },
  { view: "lease-view", open: "Documents", nav: "#lease-back-btn" },
];

function isActive(page, viewId) {
  return page.locator(`#${viewId}`).evaluate(function (element) {
    return element.classList.contains("is-active");
  });
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
      localStorage.setItem("buildingManagerBuildings", JSON.stringify(buildings));
      localStorage.setItem("buildingManagerCurrentPropertyId", "ford-onekawa");
    }, seededBuildings);
    await page.goto(running.url, { waitUntil: "networkidle" });

    assert.strictEqual(await page.locator(".selector-label").textContent(), "Selected Property", "Dashboard must say Selected Property");
    assert.strictEqual(
      await page.locator("#workspace-module-nav .module-nav-title-schedule").textContent(),
      "Calendar",
      "Dashboard module tile must say Calendar"
    );

    for (const modulePage of modulePages) {
      await page.locator(`#workspace-module-nav [data-workspace-module="${modulePage.open}"]`).click();
      assert.strictEqual(await isActive(page, modulePage.view), true, `${modulePage.open} must open`);

      const nav = page.locator(modulePage.nav);
      assert.strictEqual(await nav.isVisible(), true, `${modulePage.open} must show its Dashboard control`);
      assert.strictEqual(await nav.textContent(), "← Dashboard", `${modulePage.open} nav must be labelled Dashboard`);
      assert.strictEqual(
        await page.locator(`#${modulePage.view} .view-nav-row ${modulePage.nav}`).count(),
        1,
        `${modulePage.open} nav must sit in the top-left nav row`
      );
      assert.strictEqual(
        await page.locator(`#${modulePage.view} .top-right-actions .view-nav-btn`).count(),
        0,
        `${modulePage.open} must not keep navigation in the top-right actions`
      );

      await nav.click();
      assert.strictEqual(await isActive(page, "dashboard-view"), true, `${modulePage.open} Dashboard control must return Home`);
    }

    // Breadcrumbs lead with Properties on every module page.
    await page.locator("#workspace-module-nav [data-workspace-module=\"Tenancy\"]").click();
    assert.deepStrictEqual(
      await page.locator("#breadcrumb-nav .breadcrumb-link").allTextContents(),
      ["Properties", "Ford Onekawa", "Current Tenancy"],
      "Breadcrumbs must start at Properties"
    );
    await page.locator("#tenancy-back-btn").click();

    // Calendar page terminology.
    await page.locator("#workspace-module-nav [data-workspace-module=\"Schedule\"]").click();
    assert.strictEqual(await page.locator("#schedule-title").textContent(), "Calendar", "Calendar page must be titled Calendar");
    assert.strictEqual(
      await page.locator("#schedule-view .building-filter-row .schedule-filter-label").textContent(),
      "Property",
      "Calendar filter must be labelled Property"
    );

    // No screen may present a bare "Back" button.
    assert.strictEqual(
      await page.locator("button", { hasText: /^\s*←?\s*Back\s*$/ }).count(),
      0,
      "No button may be labelled simply Back"
    );

    assert.deepStrictEqual(pageErrors, [], "Navigating every module must not throw a browser exception");
    console.log("navigation terminology browser regression test passed");
  } finally {
    await browser.close();
    running.server.close();
  }
})().catch(function (error) {
  console.error(error.stack || error);
  process.exitCode = 1;
});
