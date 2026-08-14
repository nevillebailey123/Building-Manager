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

const seededBuildings = [
  {
    id: "building-a",
    buildingName: "Ford Onekawa",
    documents: [{
      id: "document-a",
      title: "Insurance Certificate 2026",
      categoryId: "category-insurance-a",
      documentType: "Insurance",
      fileName: "insurance-certificate.pdf",
      documentDate: "2026-08-05",
      expiryDate: "2027-08-05",
      tenancyId: "tenancy-a",
      scheduleItemId: "schedule-a",
      storage: { kind: "data-url", dataUrl: "data:application/pdf;base64,JVBERi0xLjQK", previewStatus: "not-generated", ocrStatus: "not-indexed" },
    }],
    documentCategories: [{ id: "category-insurance-a", key: "insurance", name: "Insurance", source: "building", sortOrder: 0 }],
    tenancy: null,
    tenancies: [{ id: "tenancy-a", companyName: "EIT", tradingName: "EIT" }],
    scheduleItems: [{ id: "schedule-a", taskName: "Insurance Renewal" }],
    propertyTemplates: [],
    historyRecords: [],
  },
  {
    id: "building-b",
    buildingName: "Building B",
    documents: [
      {
        id: "document-b",
        title: "Insurance Renewal",
        categoryId: "category-insurance-b",
        documentType: "Insurance",
        fileName: "insurance-renewal.pdf",
        storage: { kind: "data-url", dataUrl: "data:application/pdf;base64,JVBERi0xLjQK", previewStatus: "not-generated", ocrStatus: "not-indexed" },
      },
      {
        id: "document-c",
        title: "Lease Deed",
        categoryId: "category-legal-b",
        documentType: "Other",
        fileName: "lease-deed.pdf",
        storage: { kind: "data-url", dataUrl: "data:application/pdf;base64,JVBERi0xLjQK", previewStatus: "not-generated", ocrStatus: "not-indexed" },
      },
    ],
    documentCategories: [
      { id: "category-insurance-b", key: "insurance", name: "Insurance", source: "building", sortOrder: 0 },
      { id: "category-legal-b", key: "legal", name: "Legal", source: "building", sortOrder: 1 },
    ],
    tenancy: null,
    tenancies: [],
    scheduleItems: [],
    propertyTemplates: [],
    historyRecords: [],
  },
];

function isVisible(page, selector) {
  return page.locator(selector).isVisible();
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
      window.__openedDocumentUrls = [];
      const originalAnchorClick = HTMLAnchorElement.prototype.click;
      HTMLAnchorElement.prototype.click = function () {
        window.__openedDocumentUrls.push(this.href);
        if (this.target !== "_blank") {
          originalAnchorClick.call(this);
        }
      };
      localStorage.setItem("buildingManagerCurrentPropertyId", "");
      localStorage.setItem("buildingManagerBuildings", JSON.stringify(buildings));
    }, seededBuildings);
    await page.goto(running.url, { waitUntil: "networkidle" });

    await page.locator("#app-module-nav [data-app-module=\"Documents\"]").click();

    // The Documents screen is a single repository view with its own controls.
    assert.strictEqual(await isVisible(page, "#documents-add-btn"), true, "Documents must keep Add Document");
    assert.strictEqual(await page.locator("#lease-back-btn").count(), 0, "Documents must rely on the shared shell navigation");
    assert.strictEqual(await isVisible(page, "#lease-search"), true, "Documents must keep the repository search");
    assert.strictEqual(await isVisible(page, "#app-property-selector"), true, "Documents must keep the Property filter");
    assert.strictEqual(await isVisible(page, "#lease-category-filter"), true, "Documents must expose the category filter");
    assert.strictEqual(await page.locator("#documents-add-category-btn").count(), 0, "Add Category must be gone");
    assert.strictEqual(await page.locator("#lease-category-detail").count(), 0, "The category drill-down screen must be gone");
    assert.strictEqual(await page.locator("#lease-view input[type=\"search\"]:visible").count(), 1, "Documents must show exactly one search field");

    assert.strictEqual(
      await page.locator("#lease-category-filter option").allTextContents().then(function (texts) { return texts.join(","); }),
      "All Documents,Tenancy,Insurance,Compliance,Maintenance,Financial,Legal,Valuations,Sales,Miscellaneous",
      "Category filter must offer All Documents plus the nine fixed categories"
    );

    const businessDataBefore = await page.evaluate(function () {
      return localStorage.getItem("buildingManagerBuildings");
    });

    // All Buildings, All Documents lists the whole repository once.
    assert.strictEqual(await page.locator("[data-document-register-id]").count(), 3, "All Documents must list every document exactly once");
    const categoryLabels = await page.locator("[data-document-register-id] .document-item-meta").allTextContents();
    assert.ok(categoryLabels.includes("Category: Insurance"), "Rows must show their fixed category");
    assert.ok(categoryLabels.includes("Category: Legal"), "Legacy Legal documents must keep their mapped category");
    assert.ok(categoryLabels.includes("Property: Ford Onekawa"), "Rows must name their owning Property");
    assert.ok(categoryLabels.includes("Property: Building B"), "Rows must name their owning Property");
    assert.strictEqual(categoryLabels.some(function (text) { return /:\s*$/.test(text); }), false, "Rows must not render empty metadata labels");

    // Category filter alone.
    await page.locator("#lease-category-filter").selectOption("Insurance");
    assert.strictEqual(await page.locator("[data-document-register-id]").count(), 2, "Insurance must show both Insurance documents");

    // Property and category filters combine.
    await page.locator("#app-property-selector").selectOption("building-a");
    assert.strictEqual(await page.locator("[data-document-register-id]").count(), 1, "Building A + Insurance must show one document");
    assert.strictEqual(await page.locator("[data-document-register-id=\"document-a\"]").count(), 1, "Building A + Insurance must show Building A's document");

    await page.locator("#app-property-selector").selectOption("building-b");
    assert.strictEqual(await page.locator("[data-document-register-id=\"document-b\"]").count(), 1, "Building B + Insurance must show Building B's document");

    // Search runs across the repository and combines with the filters.
    await page.locator("#app-property-selector").selectOption("");
    await page.locator("#lease-category-filter").selectOption("");
    await page.locator("#lease-search").fill("lease deed");
    assert.strictEqual(await page.locator("[data-document-register-id]").count(), 1, "Search must match a document title");
    assert.strictEqual(await page.locator("[data-document-register-id=\"document-c\"]").count(), 1, "Search must find the Legal document");

    await page.locator("#lease-search").fill("building b");
    assert.strictEqual(await page.locator("[data-document-register-id=\"document-b\"]").count(), 1, "Search must match the Building name");

    await page.locator("#lease-search").fill("insurance");
    await page.locator("#lease-category-filter").selectOption("Legal");
    assert.strictEqual(await page.locator("[data-document-register-id]").count(), 0, "Search must combine with the category filter");
    await page.locator("#lease-search").fill("");
    await page.locator("#lease-category-filter").selectOption("");

    // Add Document preselects the filtered Building and category.
    await page.locator("#app-property-selector").selectOption("building-a");
    await page.locator("#lease-category-filter").selectOption("Insurance");
    await page.locator("#documents-add-btn").click();
    assert.strictEqual(await isVisible(page, "#document-form-card"), true, "Add Document must open the form");
    assert.strictEqual(await page.locator("#document-category-select").inputValue(), "Insurance", "Add Document must preselect the filtered category");
    assert.strictEqual(await page.locator("#document-building-select").inputValue(), "building-a", "Add Document must preselect the filtered Building");
    assert.strictEqual(
      await page.locator("#document-category-select option").allTextContents().then(function (texts) { return texts.join(","); }),
      "Tenancy,Insurance,Compliance,Maintenance,Financial,Legal,Valuations,Sales,Miscellaneous",
      "Add Document must only offer the nine fixed categories"
    );
    await page.locator("#document-cancel-btn").click();
    assert.strictEqual(await isVisible(page, "#lease-dashboard-panel"), true, "Cancelling must return to the Documents list");
    assert.strictEqual(await page.locator("#app-property-selector").inputValue(), "building-a", "Building filter must survive the form");
    assert.strictEqual(await page.locator("#lease-category-filter").inputValue(), "Insurance", "Category filter must survive the form");

    // All Buildings still requires an explicit Building choice, and defaults to Miscellaneous.
    await page.locator("#app-property-selector").selectOption("");
    await page.locator("#lease-category-filter").selectOption("");
    await page.locator("#documents-add-btn").click();
    assert.strictEqual(await page.locator("#document-building-select").inputValue(), "", "All Buildings must not auto-select a Building");
    assert.strictEqual(await page.locator("#document-building-select").evaluate(function (element) { return element.required; }), true, "Building must remain required");
    assert.strictEqual(await page.locator("#document-category-select").inputValue(), "Miscellaneous", "Add Document must default to Miscellaneous");
    await page.locator("#document-cancel-btn").click();

    // Row body views the document; Edit only edits.
    const documentRow = page.locator("[data-document-register-id=\"document-a\"]");
    await documentRow.locator("h3").click();
    const openedUrls = await page.evaluate(function () { return window.__openedDocumentUrls; });
    assert.ok(openedUrls.some(function (url) { return url.startsWith("data:application/pdf"); }), "Row body click must view the stored document");
    assert.strictEqual(await isVisible(page, "#document-form-card"), false, "Viewing must not open Edit");

    await documentRow.locator("[data-document-register-edit=\"true\"]").click();
    assert.strictEqual(await isVisible(page, "#document-form-card"), true, "Edit must open the Document Edit form");
    assert.strictEqual(await page.locator("#document-category-select").inputValue(), "Insurance", "Edit must show the document's mapped category");
    const urlsAfterEdit = await page.evaluate(function () { return window.__openedDocumentUrls; });
    assert.strictEqual(urlsAfterEdit.length, openedUrls.length, "Edit must not also trigger View");
    await page.locator("#document-cancel-btn").click();
    assert.strictEqual(await isVisible(page, "#lease-dashboard-panel"), true, "Back from Edit must return to the Documents list");

    await page.locator("#app-module-nav [data-app-module=\"dashboard\"]").click();
    assert.strictEqual(await page.locator("#dashboard-view").evaluate(function (element) { return element.classList.contains("is-active"); }), true, "Shared Dashboard button must return Home");

    // Browsing and filtering must never mutate business data.
    const businessDataAfter = await page.evaluate(function () {
      return localStorage.getItem("buildingManagerBuildings");
    });
    assert.strictEqual(businessDataAfter, businessDataBefore, "Navigating and filtering must not modify business data");
    assert.deepStrictEqual(pageErrors, [], "Documents navigation must not throw a browser exception");

    console.log("documents repository screen regression test passed");
  } finally {
    await browser.close();
    running.server.close();
  }
})().catch(function (error) {
  console.error(error.stack || error);
  process.exitCode = 1;
});
