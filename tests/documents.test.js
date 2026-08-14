const assert = require("assert");
const fs = require("fs");
const vm = require("vm");

const appSource = fs.readFileSync("./app.js", "utf8");
const indexSource = fs.readFileSync("./index.html", "utf8");
const serviceWorkerSource = fs.readFileSync("./service-worker.js", "utf8");

assert.ok(indexSource.includes('data-workspace-module="Documents"'), "Home Documents tile must use the Documents module name");
assert.ok(indexSource.includes('data-module="Documents"'), "Building Documents tile must use the Documents module name");
assert.ok(appSource.includes("workspaceModuleNav.addEventListener(\"click\", handleWorkspaceModuleNavigationClick)"), "Home Dashboard must register the delegated module click listener");
assert.ok(appSource.includes('moduleName === "Documents"'), "Home Dashboard handler must recognize Documents");
assert.ok(serviceWorkerSource.includes('building-manager-shell-v2'), "Service worker shell cache must invalidate stale dashboard code");
assert.ok(serviceWorkerSource.includes('building-manager-runtime-v2'), "Service worker runtime cache must invalidate stale dashboard code");

const homeHandlerStart = appSource.indexOf("function handleWorkspaceModuleNavigationClick");
const homeHandlerEnd = appSource.indexOf("\n\n  function handleBreadcrumbClick", homeHandlerStart);
const homeHandlerSource = appSource.slice(homeHandlerStart, homeHandlerEnd);
const navigationCalls = [];
const dashboardNav = {
  listener: null,
  addEventListener(type, listener) {
    if (type === "click") {
      this.listener = listener;
    }
  },
  dispatchClick(target) {
    if (!this.listener) {
      throw new Error("Dashboard Documents listener was not registered");
    }
    this.listener({ target: target });
  },
};
const homeContext = {
  activeBuildingId: "",
  HTMLElement: function HTMLElement() {},
  alert() {
    throw new Error("Documents navigation should not require a selected Building");
  },
  openLeaseView(buildingId) {
    navigationCalls.push(buildingId);
  },
  workspaceModuleNav: dashboardNav,
};
function createHomeButton() {
  const button = Object.create(homeContext.HTMLElement.prototype);
  button.closest = function () { return button; };
  button.getAttribute = function (name) {
    return name === "data-workspace-module" ? "Documents" : "";
  };
  return button;
}
homeContext.HTMLElement.prototype.constructor = homeContext.HTMLElement;
homeContext.createHomeButton = createHomeButton;
vm.createContext(homeContext);
vm.runInContext(homeHandlerSource, homeContext);
vm.runInContext('workspaceModuleNav.addEventListener("click", handleWorkspaceModuleNavigationClick);', homeContext);
assert.ok(dashboardNav.listener, "Dashboard Documents listener must be registered");
["", "ford-onekawa"].forEach(function (buildingId) {
  homeContext.activeBuildingId = buildingId;
  navigationCalls.length = 0;
  dashboardNav.dispatchClick(createHomeButton());
  assert.strictEqual(navigationCalls.length, 1, "Home Documents action must open the Documents page");
  assert.strictEqual(navigationCalls[0], buildingId, "Home Documents action must preserve the shared Building filter");
});
const start = appSource.indexOf("function getDocumentRegisterRecords");
const end = appSource.indexOf("\n\n  function renderLeasePage", start);
assert.ok(start >= 0 && end > start, "Document register helpers should exist");
const registerSource = appSource.slice(start, end);
assert.ok(registerSource.includes("data-document-register-category-key"), "Initial Documents view must render category cards");
assert.ok(registerSource.includes("group.entries.length"), "Category cards must display filtered counts");
assert.ok(registerSource.includes("renderDocumentRegisterCategoryDetail"), "Category cards must open a document list");
assert.ok(registerSource.includes("activeLeaseManagedCategoryKey"), "Category navigation must preserve selected category state");
assert.ok(registerSource.includes("data-document-register-edit=\"true\""), "Document rows must expose a separate Edit action");

const categoryClickSource = appSource.slice(appSource.indexOf("async function handleLeaseCategoryDetailClick"), appSource.indexOf("\n\n  function handleLeaseCategorySearch"));
assert.ok(categoryClickSource.includes("openOrDownloadLeaseDocument(entry.record, false)"), "Document body clicks must use the existing file viewer helper");
assert.ok(categoryClickSource.includes("event.stopPropagation()"), "Edit clicks must stop before triggering document viewing");
assert.ok(categoryClickSource.includes('openDocumentForm("edit", entry)'), "Edit clicks must open the Document Edit form");

const contacts = [{ id: "contact-1", name: "Master Contact" }];
const buildings = [
  {
    id: "building-a",
    buildingName: "Ford Onekawa",
    documents: [{ id: "doc-a", title: "Insurance Certificate", documentType: "Insurance", fileName: "insurance.pdf", documentDate: "2026-08-14", tenancyId: "tenancy-a", scheduleItemId: "schedule-a", storage: { dataUrl: "data:a" } }],
    documentCategories: [{ id: "lease-category", key: "lease-documents", name: "Lease Documents", source: "lease" }],
    tenancies: [{ id: "tenancy-a", companyName: "EIT" }],
    tenancy: { id: "tenancy-a", companyName: "EIT", lease: { documents: [{ id: "lease-a", title: "EIT Lease", fileName: "eit-lease.pdf", documentType: "Lease", storage: { dataUrl: "data:lease-a" } }] } },
    scheduleItems: [{ id: "schedule-a", taskName: "Building WOF" }],
  },
  {
    id: "building-b",
    buildingName: "Building B",
    documents: [{ id: "doc-b", title: "Valuation", documentType: "Valuation", fileName: "valuation.pdf", storage: { dataUrl: "data:b" } }],
    documentCategories: [],
    tenancies: [],
    scheduleItems: [],
  },
];
let selectedBuildingId = "";
const context = {
  DEFAULT_DOCUMENT_CATEGORY_DEFINITIONS: [
    { key: "insurance" },
    { key: "building-valuations" },
    { key: "lease-documents" },
  ],
  getBuildingsForFilter() {
    return selectedBuildingId ? buildings.filter((building) => building.id === selectedBuildingId) : buildings;
  },
  ensureWorkflowCollections(building) {
    return building;
  },
  getAllTenanciesForBuilding(building) {
    return building.tenancies || (building.tenancy ? [building.tenancy] : []);
  },
  findDocumentCategoryById() {
    return null;
  },
  getDocumentsModuleCategories(building) {
    return building.documentCategories || [];
  },
  buildDocumentCategoryKey(name) {
    return String(name).toLowerCase().replace(/[^a-z0-9]+/g, "-");
  },
};
vm.createContext(context);
vm.runInContext(registerSource, context);

vm.runInContext("allRecords = getDocumentRegisterRecords();", context);
assert.strictEqual(
  Array.from(context.allRecords, (entry) => entry.record.id).sort().join(","),
  "doc-a,doc-b,lease-a",
  "All Buildings must expose Building and tenancy documents without copying their storage"
);
assert.strictEqual(context.allRecords.find((entry) => entry.record.id === "lease-a").source, "tenancy");
assert.strictEqual(context.allRecords.find((entry) => entry.record.id === "doc-a").record.storage.dataUrl, "data:a");

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
  Array.from(context.buildingBRecords, (entry) => entry.record.id).join(","),
  "doc-b",
  "Building B must show only its own documents"
);

selectedBuildingId = "";
vm.runInContext("categoryGroups = getDocumentRegisterCategoryGroups();", context);
assert.strictEqual(
  Array.from(context.categoryGroups, (group) => `${group.name}:${group.entries.length}`).sort().join(","),
  "Insurance:1,Lease Documents:1,Valuation:1",
  "Category groups must aggregate populated categories without showing empty defaults"
);

const formSource = appSource.slice(appSource.indexOf("function openDocumentForm"), appSource.indexOf("\n\n  function closeDocumentForm"));
assert.ok(formSource.includes("documentFormFilterBuildingId = getBuildingFilterId()"), "Document edit must capture the current Building filter");
assert.ok(formSource.includes("tenancyId"), "Document form must store tenancy IDs");
assert.ok(formSource.includes("scheduleItemId"), "Document form must store schedule item IDs");
assert.ok(formSource.includes("renderDocumentFormRelationships"), "Document form must refresh relationships by Building");

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
