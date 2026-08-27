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

const PDF_DATA_URL = "data:application/pdf;base64,JVBERi0xLjQK";

const FORD_LEASE = {
  notes: "",
  versionHistory: [],
  documents: [{ id: "lease-ford", title: "EIT Lease", fileName: "eit-lease.pdf", documentType: "Lease Agreement", storage: { kind: "data-url", dataUrl: PDF_DATA_URL } }],
};

// Ford Onekawa owns two Property documents plus one tenancy lease document that the
// central repository surfaces; Beta Tower owns one. Repository total = 4.
const seededBuildings = [
  {
    id: "ford-onekawa",
    buildingName: "Ford Onekawa",
    streetAddress: "1 Kirkwood Road",
    city: "Napier",
    status: "Occupied",
    tenancy: {
      id: "ten-ford",
      companyName: "EIT",
      tradingName: "EIT",
      status: "Occupied",
      leaseStart: "2026-01-01",
      leaseEnd: "2029-01-01",
      lease: FORD_LEASE,
    },
    tenancies: [{ id: "ten-ford", companyName: "EIT", tradingName: "EIT", leaseStart: "2026-01-01", leaseEnd: "2029-01-01", status: "Occupied", lease: FORD_LEASE }],
    documents: [
      { id: "doc-ford-1", title: "Ford Insurance", category: "Insurance", documentType: "Insurance", fileName: "ford-insurance.pdf", storage: { kind: "data-url", dataUrl: PDF_DATA_URL } },
      // Legacy record: no category field, only the old documentType/categoryId pair.
      { id: "doc-ford-2", title: "Ford Legacy Valuation", categoryId: "legacy-valuations", documentType: "Valuation", fileName: "ford-valuation.pdf", storage: { kind: "data-url", dataUrl: PDF_DATA_URL } },
    ],
    documentCategories: [{ id: "legacy-valuations", key: "building-valuations", name: "Building Valuations", source: "building", sortOrder: 0 }],
    scheduleItems: [],
    propertyTemplates: [],
    historyRecords: [],
  },
  {
    id: "beta",
    buildingName: "Beta Tower",
    streetAddress: "2 Beta Street",
    city: "Napier",
    status: "Vacant",
    tenancy: null,
    tenancies: [],
    documents: [{ id: "doc-beta-1", title: "Beta Compliance", category: "Compliance", documentType: "Compliance", fileName: "beta.pdf", storage: { kind: "data-url", dataUrl: PDF_DATA_URL } }],
    documentCategories: [],
    scheduleItems: [],
    propertyTemplates: [],
    historyRecords: [],
  },
];

function isActive(page, viewId) {
  return page.locator(`#${viewId}`).evaluate(function (element) {
    return element.classList.contains("is-active");
  });
}

function moduleButton(page, key) {
  return page.locator(`#app-module-nav [data-app-module="${key}"]`);
}

function summaryValue(page, label) {
  return page.locator("#workspace-dashboard-summary div", { has: page.locator(`dt:text-is("${label}")`) }).locator("dd").textContent();
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

    // 1. The shared Property selector carries a visible label.
    assert.strictEqual(await page.locator(".app-property-label").textContent(), "Property", "The Property selector must be labelled");
    assert.strictEqual(await page.locator(".app-property-label").isVisible(), true, "The Property label must be visible");

    // 2. Main screens carry no breadcrumbs.
    for (const key of ["dashboard", "Tenancy", "Contacts", "Schedule", "Documents", "settings"]) {
      await moduleButton(page, key).click();
      assert.strictEqual(await page.locator("#breadcrumb-nav .breadcrumb-link").count(), 0, `${key} must not render breadcrumbs`);
      assert.strictEqual(await page.locator("#breadcrumb-nav").isVisible(), false, `${key} must collapse the breadcrumb bar`);
    }

    // Deeper workflows keep a contextual trail.
    await page.locator("#settings-templates-btn").click();
    assert.ok(await page.locator("#breadcrumb-nav .breadcrumb-link").count() > 0, "Calendar Templates must keep contextual breadcrumbs");
    await page.locator("#template-library-back-btn").click();

    // 3. Main page headers: one primary action, top-right.
    await moduleButton(page, "Tenancy").click();
    assert.strictEqual(await page.locator("#tenancy-view header #add-tenancy-btn").count(), 1, "Add Tenancy must sit in the Tenancies header");
    assert.strictEqual(await page.locator("#tenancy-view .btn:visible", { hasText: "+ Add Tenancy" }).count(), 1, "Only one Add Tenancy button may be visible");
    await page.locator("#app-property-selector").selectOption("ford-onekawa");
    await page.locator("#add-tenancy-btn").click();
    assert.strictEqual(await page.locator("#tenancy-form-card").isVisible(), true, "Add Tenancy must open the tenancy form");
    assert.strictEqual(await page.locator("#add-tenancy-btn").isVisible(), false, "Add Tenancy must not be offered while already adding");
    await page.locator("#cancel-tenancy-btn").click();
    assert.strictEqual(await page.locator("#add-tenancy-btn").isVisible(), true, "Add Tenancy must come back after Cancel");
    await page.locator("#app-property-selector").selectOption("");

    await moduleButton(page, "Contacts").click();
    assert.strictEqual(await page.locator("#contacts-view header #contacts-create-btn").textContent(), "+ Add Contact", "Contacts must offer + Add Contact");
    assert.strictEqual(await page.locator("#contacts-view .btn:visible", { hasText: "Add Contact" }).count(), 1, "Only one Add Contact button may be visible");

    await moduleButton(page, "dashboard").click();
    assert.strictEqual(await page.locator("#dashboard-view .btn-primary").count(), 0, "The Dashboard must have no primary Add action");

    // 9. Dashboard document counts match the central repository.
    await page.locator("#app-property-selector").selectOption("ford-onekawa");
    assert.strictEqual(await page.locator("#workspace-dashboard-title").textContent(), "Property Overview", "A selected property must show the property overview");
    assert.strictEqual(await summaryValue(page, "Documents"), "3", "A selected property must count its whole repository, including lease documents");

    await page.locator("#app-property-selector").selectOption("");
    assert.strictEqual(await summaryValue(page, "Documents"), "4", "All Properties must count the whole operational repository");

    await moduleButton(page, "Documents").click();

    async function categoryDocumentCount() {
      const labels = await page.locator("[data-document-category-open] .document-category-card-count").allTextContents();
      return labels.reduce(function (total, label) {
        const match = String(label).match(/^(\d+)/);
        return total + (match ? Number(match[1]) : 0);
      }, 0);
    }

    assert.strictEqual(await categoryDocumentCount(), 4, "The category overview total must match the Dashboard count");

    await page.locator("#app-property-selector").selectOption("ford-onekawa");
    assert.strictEqual(await categoryDocumentCount(), 3, "The category overview must agree with the selected property count");

    // 5. Legacy documents keep working and map onto the fixed categories.
    const valuationsCategory = page.locator('[data-document-category-open="Valuations"]');
    assert.strictEqual(await valuationsCategory.count(), 1, "Legacy valuation documents must appear in the Valuations category");
    await valuationsCategory.click();
    const legacyRow = page.locator('[data-document-register-id="doc-ford-2"]');
    assert.strictEqual(await legacyRow.count(), 1, "Opening Valuations must reveal the legacy valuation document");

    await page.locator("[data-document-category-back]").click();

    // 4 + 6. Add Document opens a focused form.
    await page.locator("#documents-add-btn").click();
    assert.strictEqual(await page.locator("#document-form-card").isVisible(), true, "Add Document must open the form");
    assert.strictEqual(await page.locator("#documents-add-btn").isVisible(), false, "Add Document must not be offered while already adding");
    assert.strictEqual(await page.locator("#lease-repository-card").isVisible(), false, "The repository browser must give way to the focused form");
    assert.strictEqual(await page.locator("#app-shell-header").isVisible(), true, "The shared shell must stay visible");
    assert.strictEqual(await page.locator("#document-type-select").count(), 0, "Document Type must not appear in the form");
    assert.strictEqual(await page.locator("#document-form-title").textContent(), "Add Document", "The form must announce Add Document");
    assert.strictEqual(await page.locator("#document-save-btn").textContent(), "Save Document", "Add must offer Save Document");
    assert.strictEqual(await page.locator("#document-cancel-btn").textContent(), "Cancel", "Add must offer Cancel");
    assert.strictEqual(
      await page.locator("#document-form .form-actions").first().locator("button").allTextContents().then(function (t) { return t.join(","); }),
      "Cancel,Save Document",
      "Cancel must sit left of the primary Save action"
    );
    assert.strictEqual(
      await page.locator("#document-category-select option").allTextContents().then(function (t) { return t.join(","); }),
      "Tenancy,Insurance,Compliance,Maintenance,Financial,Legal,Valuations,Sales,Miscellaneous",
      "Category must offer exactly the nine fixed categories"
    );
    assert.strictEqual(await page.locator("#document-category-select").inputValue(), "Miscellaneous", "Category must default to Miscellaneous");

    // 7. Cancel returns to Documents without saving.
    const beforeCancel = await page.evaluate(function () { return localStorage.getItem("buildingManagerBuildings"); });
    await page.locator("#document-title-input").fill("Discarded Document");
    await page.locator("#document-cancel-btn").click();
    assert.strictEqual(await page.locator("#lease-repository-card").isVisible(), true, "Cancel must return to the Documents repository");
    assert.strictEqual(await page.locator("#documents-add-btn").isVisible(), true, "Add Document must come back after Cancel");
    assert.strictEqual(await categoryDocumentCount(), 3, "Cancel must not add a document");
    assert.strictEqual(
      await page.evaluate(function () { return localStorage.getItem("buildingManagerBuildings"); }),
      beforeCancel,
      "Cancel must not save changes"
    );

    // Add Document saves a new record into the central repository.
    await page.locator("#documents-add-btn").click();
    await page.locator("#document-title-input").fill("New Fire Certificate");
    await page.locator("#document-category-select").selectOption("Compliance");
    await page.locator("#document-date-input").fill("2026-08-14");
    await page.locator("#document-file-input").setInputFiles({ name: "fire-certificate.pdf", mimeType: "application/pdf", buffer: Buffer.from("%PDF-1.4\n") });
    await page.locator("#document-save-btn").click();
    await page.locator("#lease-repository-card").waitFor({ state: "visible" });
    assert.strictEqual(await page.locator("#lease-repository-card").isVisible(), true, "Saving must return to the repository");
    assert.strictEqual(await categoryDocumentCount(), 4, "Saving must add the document to the repository");

    const complianceCategory = page.locator('[data-document-category-open="Compliance"]');
    assert.strictEqual(await complianceCategory.count(), 1, "The saved Compliance document must appear in the Compliance category");
    await complianceCategory.click();

    const savedRow = page.locator("article", { hasText: "New Fire Certificate" }).first();
    assert.strictEqual(await savedRow.count(), 1, "Opening Compliance must reveal the saved document");
    assert.ok((await savedRow.textContent()).includes("fire-certificate.pdf"), "The saved document must keep its file");

    // Edit Document preserves the stored file unless it is replaced.
    await savedRow.locator('[data-document-register-edit="true"]').click();
    assert.strictEqual(await page.locator("#document-form-title").textContent(), "Edit Document", "Edit must announce Edit Document");
    assert.strictEqual(await page.locator("#document-save-btn").textContent(), "Save Changes", "Edit must offer Save Changes");
    assert.strictEqual(await page.locator("#documents-add-btn").isVisible(), false, "Add Document must not be offered while editing");
    assert.strictEqual(await page.locator("#document-type-select").count(), 0, "Document Type must not appear when editing");
    assert.ok((await page.locator("#document-current-file").textContent()).includes("fire-certificate.pdf"), "Edit must show the current file");
    await page.locator("#document-title-input").fill("Renamed Fire Certificate");
    await page.locator("#document-save-btn").click();

    const editedRow = page.locator("article", { hasText: "Renamed Fire Certificate" }).first();
    assert.strictEqual(await page.locator("[data-document-register-id]").count(), 1, "The Compliance category must contain the edited document");
    assert.ok((await editedRow.textContent()).includes("fire-certificate.pdf"), "Editing without choosing a file must preserve the stored file");

    await page.locator("[data-document-category-back]").click();
    assert.strictEqual(await categoryDocumentCount(), 4, "Editing must not duplicate the record");
    const editedRecord = await page.evaluate(function () {
      return JSON.parse(localStorage.getItem("buildingManagerBuildings"))
        .find(function (b) { return b.id === "ford-onekawa"; })
        .documents.find(function (d) { return d.title === "Renamed Fire Certificate"; });
    });
    assert.ok(editedRecord.storage && editedRecord.storage.dataUrl, "The stored file must survive an edit");
    assert.strictEqual(editedRecord.category, "Compliance", "The fixed category must survive an edit");
    assert.ok(editedRecord.documentType, "A legacy documentType value must still be written for compatibility");

    // Legacy records keep their original documentType after normalisation.
    const legacyRecord = await page.evaluate(function () {
      return JSON.parse(localStorage.getItem("buildingManagerBuildings"))
        .find(function (b) { return b.id === "ford-onekawa"; })
        .documents.find(function (d) { return d.id === "doc-ford-2"; });
    });
    assert.strictEqual(legacyRecord.documentType, "Valuation", "Legacy documentType data must not be discarded");
    assert.strictEqual(legacyRecord.categoryId, "legacy-valuations", "Legacy categoryId data must not be discarded");
    assert.strictEqual(legacyRecord.category, "Valuations", "Legacy records must be mapped onto a fixed category");

    // The Dashboard follows the repository after the addition.
    await moduleButton(page, "dashboard").click();
    assert.strictEqual(await summaryValue(page, "Documents"), "4", "The Dashboard count must follow the repository");

    // 8. Property management and permanent deletion live inside Edit Property.
    await moduleButton(page, "settings").click();
    const betaCard = page.locator('[data-settings-property-id="beta"]');
    assert.deepStrictEqual(
      await betaCard.locator("[data-settings-property-action]").allTextContents(),
      ["Edit Property"],
      "A Settings card must offer Edit Property as its only property action"
    );

    await betaCard.locator('[data-settings-property-action="edit"]').click();
    assert.strictEqual(await page.locator("#edit-property-management").isVisible(), true, "Edit Property must show Property Management");
    assert.strictEqual(await page.locator("#edit-archive-property-btn").isVisible(), true, "An active property must offer Archive Property");
    const deleteButton = page.locator("#edit-delete-property-btn");
    assert.strictEqual(await deleteButton.textContent(), "Delete Property Permanently", "The danger action must be explicit");
    assert.strictEqual(
      await deleteButton.evaluate(function (element) { return element.className.includes("btn-danger-subtle"); }),
      true,
      "Permanent deletion must use subdued danger styling"
    );

    const deleteConfirm = page.locator("[data-property-delete-confirm]");
    await deleteButton.click();
    await deleteConfirm.waitFor({ state: "visible" });
    assert.ok((await deleteConfirm.textContent()).includes("Permanently delete"), "Permanent deletion must still confirm");
    await deleteConfirm.locator('[data-property-delete-action="cancel"]').click();
    await page.locator("#cancel-edit-btn").click();
    assert.strictEqual(await page.locator("[data-settings-property-id]").count(), 2, "Dismissing the confirmation must keep the property");

    // Cancel and Save Changes keep working from the editor.
    await betaCard.locator('[data-settings-property-action="edit"]').click();
    await page.locator("#editBuildingName").fill("Beta Tower Renamed");
    await page.locator("#save-edit-btn").click();
    assert.strictEqual(await isActive(page, "settings-view"), true, "Save Changes must return to Settings");
    assert.ok((await betaCard.textContent()).includes("Beta Tower Renamed"), "Save Changes must persist the edit");

    assert.deepStrictEqual(pageErrors, [], "The polished UI must not throw a browser exception");
    console.log("shared UI and document form browser regression test passed");
  } finally {
    await browser.close();
    running.server.close();
  }
})().catch(function (error) {
  console.error(error.stack || error);
  process.exitCode = 1;
});
