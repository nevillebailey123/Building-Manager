const assert = require("assert");
const fs = require("fs");
const http = require("http");
const path = require("path");
const { chromium } = require("playwright");

const root = path.resolve(__dirname, "..");
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
      response.writeHead(200, { "Content-Type": path.extname(filePath) === ".html" ? "text/html" : "text/javascript" });
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
    const page = await browser.newPage();
    await page.addInitScript(function () {
      window.__openedDocumentUrls = [];
      const originalAnchorClick = HTMLAnchorElement.prototype.click;
      HTMLAnchorElement.prototype.click = function () {
        window.__openedDocumentUrls.push(this.href);
        if (this.target !== "_blank") {
          originalAnchorClick.call(this);
        }
      };
      localStorage.setItem("buildingManagerCurrentPropertyId", "building-a");
      localStorage.setItem("buildingManagerBuildings", JSON.stringify([{
        id: "building-a",
        buildingName: "Ford Onekawa",
        documents: [{
          id: "document-a",
          title: "Insurance Certificate 2026",
          categoryId: "category-insurance",
          documentType: "Insurance",
          fileName: "insurance.pdf",
          storage: { kind: "data-url", dataUrl: "data:application/pdf;base64,JVBERi0xLjQK", previewStatus: "not-generated", ocrStatus: "not-indexed" },
        }],
        documentCategories: [{ id: "category-insurance", key: "insurance", name: "Insurance", source: "building", sortOrder: 0 }],
        tenancy: null,
        tenancies: [],
        scheduleItems: [],
        propertyTemplates: [],
        historyRecords: [],
      }]));
    });
    await page.goto(running.url, { waitUntil: "networkidle" });
    await page.locator("#workspace-module-nav [data-workspace-module=\"Documents\"]").click();
    await page.locator("[data-document-register-category-key=\"insurance\"]").click();
    const documentRow = page.locator("[data-document-register-id=\"document-a\"]");
    assert.strictEqual(await documentRow.count(), 1, "Category must show the document row");

    await documentRow.locator("h3").click();
    const openedUrls = await page.evaluate(function () { return window.__openedDocumentUrls; });
    assert.ok(openedUrls.some(function (url) { return url.startsWith("data:application/pdf"); }), "Document body click must open the stored PDF");
    assert.strictEqual(await page.locator("#document-form-card").evaluate(function (element) { return getComputedStyle(element).display; }), "none", "Viewing must not open Edit");

    await documentRow.locator("[data-document-register-edit=\"true\"]").click();
    assert.strictEqual(await page.locator("#document-form-card").evaluate(function (element) { return getComputedStyle(element).display; }), "block", "Edit must open the Document Edit form");
    console.log("document view/edit browser regression test passed");
  } finally {
    await browser.close();
    running.server.close();
  }
})().catch(function (error) {
  console.error(error.stack || error);
  process.exitCode = 1;
});
