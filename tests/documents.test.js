const assert = require("assert");
const fs = require("fs");
const vm = require("vm");

const appSource = fs.readFileSync("./app.js", "utf8");
const indexSource = fs.readFileSync("./index.html", "utf8");
const serviceWorkerSource = fs.readFileSync("./service-worker.js", "utf8");

assert.ok(indexSource.includes('data-app-module="Documents"'), "Shared shell must expose the Documents module");
assert.ok(indexSource.includes('data-module="Documents"'), "Property Documents tile must use the Documents module name");
assert.ok(appSource.includes("appModuleNav.addEventListener(\"click\", handleAppModuleNavClick)"), "Shared shell must register the delegated module click listener");
assert.ok(appSource.includes('moduleKey === "Documents"'), "Shared shell handler must recognize Documents");
assert.ok(/building-manager-shell-v\d+/.test(serviceWorkerSource), "Service worker shell cache must invalidate stale shell code");
assert.ok(/building-manager-runtime-v\d+/.test(serviceWorkerSource), "Service worker runtime cache must invalidate stale shell code");

const homeHandlerStart = appSource.indexOf("function openAppModule");
const homeHandlerEnd = appSource.indexOf("\n\n  function handleAppModuleNavClick", homeHandlerStart);
const homeHandlerSource = appSource.slice(homeHandlerStart, homeHandlerEnd);
const navigationCalls = [];
const homeContext = {
  activeBuildingId: "",
  goToDashboard() {},
  openSettingsView() {},
  openCurrentTenancyView() {},
  openContactsView() {},
  openScheduleView() {},
  openLeaseView(buildingId) {
    navigationCalls.push(buildingId);
  },
};
vm.createContext(homeContext);
vm.runInContext(homeHandlerSource, homeContext);
["", "ford-onekawa"].forEach(function (buildingId) {
  homeContext.activeBuildingId = buildingId;
  navigationCalls.length = 0;
  vm.runInContext('openAppModule("Documents");', homeContext);
  assert.strictEqual(navigationCalls.length, 1, "Shared shell Documents action must open the Documents page");
  assert.strictEqual(navigationCalls[0], buildingId, "Shared shell Documents action must preserve the shared Property selection");
});
const fixedCategoriesStart = appSource.indexOf("  const FIXED_DOCUMENT_CATEGORIES = [");
const fixedCategoriesEnd = appSource.indexOf("\n\n  const DEFAULT_TEMPLATE_LIBRARY", fixedCategoriesStart);
assert.ok(fixedCategoriesStart >= 0 && fixedCategoriesEnd > fixedCategoriesStart, "Fixed document category helpers should exist");
const fixedCategoriesSource = appSource.slice(fixedCategoriesStart, fixedCategoriesEnd);

const start = appSource.indexOf("function getDocumentRegisterRecords");
const end = appSource.indexOf("\n\n  function getDocumentFormBuilding", start);
assert.ok(start >= 0 && end > start, "Document register helpers should exist");
const registerSource = appSource.slice(start, end);
assert.ok(registerSource.includes("data-document-register-id"), "Documents must render one flat list of document rows");
assert.strictEqual(registerSource.includes("data-document-register-category-key"), false, "Documents must not drill into category screens");
assert.ok(registerSource.includes("data-document-register-edit=\"true\""), "Document rows must expose a separate Edit action");
assert.strictEqual(appSource.includes("function handleAddDocumentCategory"), false, "Add Category must be removed");
assert.strictEqual(appSource.includes("function handleManageDocumentCategory"), false, "Manage Category must be removed");
assert.strictEqual(appSource.includes("showDocumentCategoryFormDialog"), false, "Category creation dialog must be removed");
assert.strictEqual(appSource.includes("showDocumentCategoryManageDialog"), false, "Category management dialog must be removed");
assert.strictEqual(indexSource.includes("documents-add-category-btn"), false, "Add Category button must be removed from the Documents header");
assert.ok(indexSource.includes('id="lease-category-filter"'), "Documents must expose a fixed category filter");
assert.ok(indexSource.includes('<option value="">All Documents</option>'), "Category filter must offer All Documents");
["Tenancy", "Insurance", "Compliance", "Maintenance", "Financial", "Legal", "Valuations", "Sales", "Miscellaneous"].forEach(function (category) {
  assert.ok(indexSource.includes(`<option>${category}</option>`), `Category filter must offer ${category}`);
});

const clickSource = appSource.slice(appSource.indexOf("function activateDocumentRegisterRow"), appSource.indexOf("\n\n  function handleDocumentRegisterKeydown"));
assert.ok(clickSource.includes("openOrDownloadLeaseDocument(entry.record, false)"), "Document body clicks must use the existing file viewer helper");
assert.ok(clickSource.includes('openDocumentForm("edit", entry)'), "Edit clicks must open the Document Edit form");

const contacts = [{ id: "contact-1", name: "Master Contact" }];
const buildings = [
  {
    id: "building-a",
    buildingName: "Ford Onekawa",
    documents: [{ id: "doc-a", title: "Insurance Certificate", categoryId: "insurance-category", documentType: "Insurance", fileName: "insurance.pdf", documentDate: "2026-08-14", tenancyId: "tenancy-a", scheduleItemId: "schedule-a", notes: "Renewal pending", storage: { dataUrl: "data:a" } }],
    documentCategories: [
      { id: "lease-category", key: "lease-documents", name: "Lease Documents", source: "lease" },
      { id: "insurance-category", key: "insurance", name: "Insurance", source: "building" },
    ],
    tenancies: [{ id: "tenancy-a", companyName: "EIT" }],
    tenancy: { id: "tenancy-a", companyName: "EIT", lease: { documents: [{ id: "lease-a", title: "EIT Lease", fileName: "eit-lease.pdf", documentType: "Lease", storage: { dataUrl: "data:lease-a" } }] } },
    scheduleItems: [{ id: "schedule-a", taskName: "Building WOF" }],
  },
  {
    id: "building-b",
    buildingName: "Building B",
    documents: [
      { id: "doc-b", title: "Valuation", categoryId: "valuation-category", documentType: "Valuation", fileName: "valuation.pdf", storage: { dataUrl: "data:b" } },
      { id: "doc-c", title: "Mystery File", categoryId: "unknown-category", documentType: "Widget", fileName: "mystery.pdf", storage: { dataUrl: "data:c" } },
    ],
    documentCategories: [{ id: "valuation-category", key: "building-valuations", name: "Building Valuations", source: "building" }],
    tenancies: [],
    scheduleItems: [],
  },
];
let selectedBuildingId = "";
const context = {
  getBuildingsForFilter() {
    return selectedBuildingId ? buildings.filter((building) => building.id === selectedBuildingId) : buildings;
  },
  ensureWorkflowCollections(building) {
    return building;
  },
  getAllTenanciesForBuilding(building) {
    return building.tenancies || (building.tenancy ? [building.tenancy] : []);
  },
  getDocumentsModuleCategories(building) {
    return building.documentCategories || [];
  },
  normalizeText(value) {
    return String(value || "").toLowerCase();
  },
  leaseSearchQuery: "",
  leaseCategoryFilterValue: "",
};
vm.createContext(context);
vm.runInContext(fixedCategoriesSource, context);
vm.runInContext(registerSource, context);

vm.runInContext("fixedCategories = FIXED_DOCUMENT_CATEGORIES; defaultCategory = DEFAULT_DOCUMENT_CATEGORY;", context);
assert.strictEqual(
  Array.from(context.fixedCategories).join(","),
  "Tenancy,Insurance,Compliance,Maintenance,Financial,Legal,Valuations,Sales,Miscellaneous",
  "The repository must use exactly the nine fixed categories"
);
assert.strictEqual(context.defaultCategory, "Miscellaneous", "Unmapped documents must default to Miscellaneous");

vm.runInContext("allRecords = getDocumentRegisterRecords();", context);
assert.strictEqual(
  Array.from(context.allRecords, (entry) => entry.record.id).sort().join(","),
  "doc-a,doc-b,doc-c,lease-a",
  "All Buildings must expose Building and tenancy documents without copying their storage"
);
assert.strictEqual(context.allRecords.find((entry) => entry.record.id === "lease-a").source, "tenancy");
assert.strictEqual(context.allRecords.find((entry) => entry.record.id === "doc-a").record.storage.dataUrl, "data:a");

// Legacy categories map onto the fixed categories; unknown ones fall back to Miscellaneous.
const categoryByDocumentId = {};
context.allRecords.forEach(function (entry) {
  categoryByDocumentId[entry.record.id] = context.getDocumentRegisterCategory(entry);
});
assert.deepStrictEqual(categoryByDocumentId, {
  "doc-a": "Insurance",
  "doc-b": "Valuations",
  "doc-c": "Miscellaneous",
  "lease-a": "Tenancy",
}, "Existing documents must be mapped onto the closest fixed category");

selectedBuildingId = "building-a";
vm.runInContext("buildingARecords = getDocumentRegisterRecords();", context);
assert.strictEqual(
  Array.from(context.buildingARecords, (entry) => entry.record.id).sort().join(","),
  "doc-a,lease-a",
  "Building A must show only its own documents"
);
assert.strictEqual(context.buildingARecords[0].building.id, "building-a");

selectedBuildingId = "building-b";
vm.runInContext("buildingBRecords = getDocumentRegisterRecords();", context);
assert.strictEqual(
  Array.from(context.buildingBRecords, (entry) => entry.record.id).sort().join(","),
  "doc-b,doc-c",
  "Building B must show only its own documents"
);

// Category filter alone.
selectedBuildingId = "";
context.leaseCategoryFilterValue = "Insurance";
assert.strictEqual(
  Array.from(context.getFilteredDocumentRegisterEntries(), (entry) => entry.record.id).join(","),
  "doc-a",
  "Category filter must filter the central repository"
);

// Property and category filters must work together.
context.leaseCategoryFilterValue = "Insurance";
selectedBuildingId = "building-b";
assert.strictEqual(
  context.getFilteredDocumentRegisterEntries().length,
  0,
  "Property and category filters must combine"
);

selectedBuildingId = "building-a";
assert.strictEqual(
  Array.from(context.getFilteredDocumentRegisterEntries(), (entry) => entry.record.id).join(","),
  "doc-a",
  "Building A + Insurance must show only Building A insurance documents"
);

// Search spans title, category, building name and notes, and combines with the filters.
selectedBuildingId = "";
context.leaseCategoryFilterValue = "";
[
  ["insurance certificate", "doc-a", "Search must match the document title"],
  ["valuations", "doc-b", "Search must match the fixed category"],
  ["building b", "doc-b,doc-c", "Search must match the building name"],
  ["renewal pending", "doc-a", "Search must match notes"],
].forEach(function (testCase) {
  context.leaseSearchQuery = testCase[0];
  assert.strictEqual(
    Array.from(context.getFilteredDocumentRegisterEntries(), (entry) => entry.record.id).sort().join(","),
    testCase[1],
    testCase[2]
  );
});

context.leaseSearchQuery = "building b";
context.leaseCategoryFilterValue = "Valuations";
assert.strictEqual(
  Array.from(context.getFilteredDocumentRegisterEntries(), (entry) => entry.record.id).join(","),
  "doc-b",
  "Search must combine with the category filter"
);
context.leaseSearchQuery = "";
context.leaseCategoryFilterValue = "";
selectedBuildingId = "";

const formSource = appSource.slice(appSource.indexOf("function openDocumentForm"), appSource.indexOf("\n\n  function closeDocumentForm"));
assert.ok(formSource.includes("documentFormFilterBuildingId = getBuildingFilterId()"), "Document edit must capture the current Building filter");
assert.ok(formSource.includes("tenancyId"), "Document form must store tenancy IDs");
assert.ok(formSource.includes("scheduleItemId"), "Document form must store schedule item IDs");
assert.ok(formSource.includes("renderDocumentFormRelationships"), "Document form must refresh relationships by Building");
assert.ok(formSource.includes("renderDocumentFormBuildingOptions(selectedBuildingId)"), "Add Document must preselect the Building the user came from");
assert.ok(formSource.includes("leaseCategoryFilterValue || DEFAULT_DOCUMENT_CATEGORY"), "Add Document must default to the filtered or Miscellaneous category");

const categoryOptionsSource = appSource.slice(appSource.indexOf("function renderDocumentFormCategoryOptions"), appSource.indexOf("\n\n  function renderDocumentFormBuildingOptions"));
assert.ok(categoryOptionsSource.includes("FIXED_DOCUMENT_CATEGORIES.map"), "Add Document must only offer the fixed categories");
assert.ok(categoryOptionsSource.includes("|| DEFAULT_DOCUMENT_CATEGORY"), "Add Document must fall back to Miscellaneous");

const saveSource = appSource.slice(appSource.indexOf("async function handleSaveDocument"), appSource.indexOf("\n\n  function updateBuildingDocumentsStateForBuilding"));
assert.ok(saveSource.includes("category: getDocumentFormCategory()"), "Saving a document must store its fixed category");

const normalizeSource = appSource.slice(appSource.indexOf("function resolveFixedCategoryForRecord"), appSource.indexOf("\n\n  const DEFAULT_TEMPLATE_LIBRARY"));
assert.ok(normalizeSource.includes("DEFAULT_DOCUMENT_CATEGORY"), "Normalisation must fall back to Miscellaneous");
assert.strictEqual(appSource.includes("draft.documents = (draft.documents || []).filter(function (documentRecord) {\n          return documentRecord.categoryId !== category.id;"), false, "Category deletion must no longer remove documents");

const deleteSource = appSource.slice(appSource.indexOf("function handleDeleteDocument"), appSource.indexOf("\n\n  function renderLeasePage", appSource.indexOf("function handleDeleteDocument")));
assert.ok(deleteSource.includes("draft.documents"), "Delete must remove only the document record");
assert.ok(deleteSource.includes("draft.tenancy.lease.documents"), "Delete must handle legacy tenancy documents");
assert.strictEqual(deleteSource.includes("deleteBuilding"), false, "Delete Document must not delete Buildings");
assert.strictEqual(deleteSource.includes("upsertContact"), false, "Delete Document must not modify Contacts");

const storageSource = fs.readFileSync("./storage.js", "utf8");
assert.ok(storageSource.includes("buildingManagerMasterData"), "Backup must retain master data envelope");
assert.ok(storageSource.includes("buildingManagerBuildings"), "Backup must retain Building document data");
assert.ok(storageSource.includes("restoreBackupData"), "Backup restore path must remain available");

console.log("documents register regression test passed");
