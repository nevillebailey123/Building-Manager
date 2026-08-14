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

(async function () {
  const running = await startServer();
  const browser = await chromium.launch({ headless: true });
  try {
    for (const selectedBuildingId of ["", "ford-onekawa"]) {
      const page = await browser.newPage();
      const pageErrors = [];
      page.on("pageerror", function (error) {
        pageErrors.push(String(error));
      });
      await page.addInitScript(function (filterId) {
        localStorage.setItem("buildingManagerBuildings", JSON.stringify([
          { id: "ford-onekawa", buildingName: "Ford Onekawa", tenancy: null, tenancies: [], documents: [], documentCategories: [], scheduleItems: [], propertyTemplates: [], historyRecords: [] },
          { id: "building-b", buildingName: "Building B", tenancies: [{ id: "tenancy-b1", companyName: "Tenant B1" }, { id: "tenancy-b2", companyName: "Tenant B2" }], documents: [], documentCategories: [], scheduleItems: [], propertyTemplates: [], historyRecords: [] },
        ]));
        localStorage.setItem("buildingManagerCurrentPropertyId", filterId);
      }, selectedBuildingId);
      await page.goto(running.url, { waitUntil: "networkidle" });

      const dashboardDocuments = page.locator("#workspace-module-nav [data-workspace-module=\"Documents\"]");
      const dashboardContacts = page.locator("#workspace-module-nav [data-workspace-module=\"Contacts\"]");
      assert.strictEqual(await dashboardDocuments.count(), 1, "Actual dashboard must contain one Documents tile");
      assert.strictEqual(await dashboardContacts.count(), 1, "Actual dashboard must contain one Contacts tile");
      assert.strictEqual(await dashboardDocuments.evaluate(function (element) {
        return { tag: element.tagName, id: element.id, className: element.className, parentId: element.parentElement.id, pointerEvents: getComputedStyle(element).pointerEvents, disabled: element.disabled };
      }).then(function (details) {
        return details.tag === "BUTTON" && details.id === "" && details.className === "module-nav-card" && details.parentId === "workspace-module-nav" && details.pointerEvents === "auto" && details.disabled === false;
      }), true, "Documents tile must match the working dashboard button shape");

      await dashboardContacts.locator(".module-nav-title-contacts").click();
      assert.strictEqual(await page.locator("#contacts-view").evaluate(function (element) { return element.classList.contains("is-active"); }), true, "Contacts dashboard click must open Contacts");
      await page.locator("#contacts-back-btn").click();
      assert.strictEqual(await page.locator("#dashboard-view").evaluate(function (element) { return element.classList.contains("is-active"); }), true, "Contacts Back must return Home");

      await dashboardDocuments.locator(".module-nav-title-documents").click();
      const state = await page.evaluate(function () {
        return {
          documentsActive: document.getElementById("lease-view").classList.contains("is-active"),
          dashboardActive: document.getElementById("dashboard-view").classList.contains("is-active"),
          filter: document.getElementById("lease-building-filter").value,
          title: document.getElementById("lease-title").textContent,
        };
      });
      assert.strictEqual(state.documentsActive, true, "Actual Documents tile click must activate Documents");
      assert.strictEqual(state.dashboardActive, false, "Dashboard must close after Documents click");
      assert.strictEqual(state.filter, selectedBuildingId, "Documents must preserve the shared Building filter");
      assert.strictEqual(state.title, "Documents", "Central Documents page must render");
      assert.deepStrictEqual(pageErrors, [], "Dashboard module click must not throw a browser exception");

      await page.locator("#lease-back-btn").click();
      assert.strictEqual(await page.locator("#dashboard-view").evaluate(function (element) { return element.classList.contains("is-active"); }), true, "Documents Back must return Home");
      await page.close();
    }
  } finally {
    await browser.close();
    running.server.close();
  }
  console.log("dashboard Documents browser regression test passed");
})().catch(function (error) {
  console.error(error.stack || error);
  process.exitCode = 1;
});
