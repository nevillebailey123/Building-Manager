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
    documents: [{
      id: "document-b",
      title: "Insurance Renewal",
      categoryId: "category-insurance-b",
      documentType: "Insurance",
      fileName: "insurance-renewal.pdf",
      storage: { kind: "data-url", dataUrl: "data:application/pdf;base64,JVBERi0xLjQK", previewStatus: "not-generated", ocrStatus: "not-indexed" },
    }],
    documentCategories: [{ id: "category-insurance-b", key: "insurance", name: "Insurance", source: "building", sortOrder: 0 }],
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

function categoryDetailActive(page) {
  return page.locator("#lease-category-detail").evaluate(function (element) {
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

    await page.locator("#workspace-module-nav [data-workspace-module=\"Documents\"]").click();

    // Top-level Documents screen keeps its own controls (16).
    assert.strictEqual(await isVisible(page, "#documents-add-btn"), true, "Top-level Documents must keep Add Document");
    assert.strictEqual(await isVisible(page, "#documents-add-category-btn"), true, "Top-level Documents must keep Add Category");
    assert.strictEqual(await isVisible(page, "#lease-back-btn"), true, "Top-level Documents must keep Back");
    assert.strictEqual(await isVisible(page, "#lease-search"), true, "Top-level Documents must keep the global search");

    const businessDataBefore = await page.evaluate(function () {
      return localStorage.getItem("buildingManagerBuildings");
    });

    // 1 + 2: open Insurance and confirm it becomes the primary heading.
    await page.locator("[data-document-register-category-key=\"insurance\"]").click();
    assert.strictEqual(await categoryDetailActive(page), true, "Insurance category screen must open");
    assert.strictEqual(await page.locator("#lease-category-detail-title").textContent(), "Insurance", "Category heading must be the category name");
    assert.strictEqual(await page.locator("#lease-category-breadcrumb").textContent(), "Documents > Insurance", "Category breadcrumb must show Documents > Insurance");

    // 3-6 + 11: exactly one of each Category control.
    assert.strictEqual(await page.locator("#lease-category-detail .btn:visible", { hasText: "+ Upload Document" }).count(), 1, "Category must show exactly one Upload Document button");
    assert.strictEqual(await page.locator("#lease-category-detail .btn:visible", { hasText: "Manage Category" }).count(), 1, "Category must show exactly one Manage Category button");
    assert.strictEqual(await page.locator("#lease-category-detail .btn:visible", { hasText: "Back" }).count(), 1, "Category must show exactly one Back button");
    assert.strictEqual(await page.locator("#lease-view input[type=\"search\"]:visible").count(), 1, "Category must show exactly one search field");
    assert.strictEqual(await page.locator("#lease-view select.building-filter-select:visible").count(), 1, "Category must keep exactly one Building selector");
    assert.strictEqual(
      await page.locator("#lease-category-search").getAttribute("placeholder"),
      "Search within Insurance...",
      "Category search must be scoped to the open category"
    );

    // 7-10: top-level controls hidden while a Category is open.
    assert.strictEqual(await isVisible(page, "#lease-search"), false, "Global Documents search must be hidden inside a Category");
    assert.strictEqual(await isVisible(page, "#documents-add-btn"), false, "Global Add Document must be hidden inside a Category");
    assert.strictEqual(await isVisible(page, "#documents-add-category-btn"), false, "Global Add Category must be hidden inside a Category");
    assert.strictEqual(await isVisible(page, "#lease-back-btn"), false, "Top-level Documents Back must be hidden inside a Category");

    // 13 + 15: All Buildings shows every Insurance document with its owning Building.
    assert.strictEqual(await page.locator("[data-document-register-id]").count(), 2, "All Buildings must list Insurance documents from both Buildings");
    assert.strictEqual(await page.locator("#lease-category-detail-meta").textContent(), "2 documents", "Category count must be plural for two documents");
    const buildingLabels = await page.locator("[data-document-register-id] .document-item-meta").allTextContents();
    assert.ok(buildingLabels.includes("Building: Ford Onekawa"), "Cards must name their owning Building");
    assert.ok(buildingLabels.includes("Building: Building B"), "Cards must name their owning Building");

    // 27: the open Category is not repeated on every card, and empty metadata labels are not rendered.
    assert.strictEqual(buildingLabels.some(function (text) { return text.startsWith("Category:"); }), false, "Cards must not repeat the open Category");
    assert.strictEqual(buildingLabels.some(function (text) { return /:\s*$/.test(text); }), false, "Cards must not render empty metadata labels");
    assert.strictEqual(
      await page.locator("[data-document-register-id=\"document-b\"] .document-item-meta").allTextContents().then(function (texts) {
        return texts.some(function (text) { return text.startsWith("Expiry:"); });
      }),
      false,
      "Cards must omit metadata that is not present"
    );

    // 12 + 14: changing Building stays inside Insurance and filters the documents.
    await page.locator("#lease-building-filter").selectOption("building-a");
    assert.strictEqual(await categoryDetailActive(page), true, "Changing Building must not leave the Category");
    assert.strictEqual(await page.locator("#lease-category-detail-title").textContent(), "Insurance", "Category heading must stay Insurance");
    assert.strictEqual(await page.locator("[data-document-register-id]").count(), 1, "Specific Building must only show its own documents");
    assert.strictEqual(await page.locator("#lease-category-detail-meta").textContent(), "1 document", "Category count must be singular for one document");

    // 16 + 17: Upload preselects Category and the selected Building.
    await page.locator("#lease-category-upload-btn").click();
    assert.strictEqual(await isVisible(page, "#document-form-card"), true, "Upload Document must open the Add Document form");
    assert.strictEqual(await page.locator("#document-category-select").inputValue(), "insurance", "Upload must preselect the open Category");
    assert.strictEqual(await page.locator("#document-building-select").inputValue(), "building-a", "Upload must preselect the filtered Building");
    await page.locator("#document-cancel-btn").click();
    assert.strictEqual(await categoryDetailActive(page), true, "Cancelling upload must return to the Category");
    assert.strictEqual(await page.locator("#lease-building-filter").inputValue(), "building-a", "Building filter must survive the upload form");

    // 18: All Buildings requires an explicit Building choice.
    await page.locator("#lease-building-filter").selectOption("");
    assert.strictEqual(await categoryDetailActive(page), true, "All Buildings must remain inside the Category");
    await page.locator("#lease-category-upload-btn").click();
    assert.strictEqual(await page.locator("#document-building-select").inputValue(), "", "All Buildings must not auto-select a Building");
    assert.strictEqual(await page.locator("#document-building-select").evaluate(function (element) { return element.required; }), true, "Building must remain required");
    assert.strictEqual(await page.locator("#document-category-select").inputValue(), "insurance", "Upload must preselect the open Category in All Buildings");
    // 23: Edit/Add form Back returns to the Category.
    await page.locator("#document-cancel-btn").click();
    assert.strictEqual(await categoryDetailActive(page), true, "Back from the form must return to the Category");

    // 19-22: card body views the document, Edit only edits.
    const documentRow = page.locator("[data-document-register-id=\"document-a\"]");
    await documentRow.locator("h3").click();
    const openedUrls = await page.evaluate(function () { return window.__openedDocumentUrls; });
    assert.ok(openedUrls.some(function (url) { return url.startsWith("data:application/pdf"); }), "Card body click must view the stored document");
    assert.strictEqual(await isVisible(page, "#document-form-card"), false, "Viewing must not open Edit");
    assert.strictEqual(await categoryDetailActive(page), true, "Viewing must keep the user inside the Category");

    await documentRow.locator("[data-document-register-edit=\"true\"]").click();
    assert.strictEqual(await isVisible(page, "#document-form-card"), true, "Edit must open the Document Edit form");
    const urlsAfterEdit = await page.evaluate(function () { return window.__openedDocumentUrls; });
    assert.strictEqual(urlsAfterEdit.length, openedUrls.length, "Edit must not also trigger View");
    await page.locator("#document-cancel-btn").click();
    assert.strictEqual(await categoryDetailActive(page), true, "Back from Edit must return to the Category");

    // 24-26: Category Back -> Documents -> Home, preserving the Building filter.
    await page.locator("#lease-category-detail-back-btn").click();
    assert.strictEqual(await categoryDetailActive(page), false, "Category Back must return to the Documents category list");
    assert.strictEqual(await isVisible(page, "#lease-dashboard-panel"), true, "Documents category list must reappear");
    assert.strictEqual(await isVisible(page, "#documents-add-btn"), true, "Top-level controls must reappear on Documents");
    assert.strictEqual(await isVisible(page, "#documents-add-category-btn"), true, "Top-level controls must reappear on Documents");
    assert.strictEqual(await isVisible(page, "#lease-search"), true, "Global search must reappear on Documents");
    assert.strictEqual(await page.locator("#lease-building-filter").inputValue(), "", "Building filter must survive Category Back");

    await page.locator("#lease-back-btn").click();
    assert.strictEqual(await page.locator("#dashboard-view").evaluate(function (element) { return element.classList.contains("is-active"); }), true, "Documents Back must return Home");

    // 28: the whole navigation path is read-only.
    const businessDataAfter = await page.evaluate(function () {
      return localStorage.getItem("buildingManagerBuildings");
    });
    assert.strictEqual(businessDataAfter, businessDataBefore, "Navigating and filtering must not modify business data");
    assert.deepStrictEqual(pageErrors, [], "Category navigation must not throw a browser exception");

    console.log("documents category screen regression test passed");
  } finally {
    await browser.close();
    running.server.close();
  }
})().catch(function (error) {
  console.error(error.stack || error);
  process.exitCode = 1;
});
