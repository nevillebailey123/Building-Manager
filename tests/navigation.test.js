const assert = require("assert");
const fs = require("fs");
const vm = require("vm");

const appSource = fs.readFileSync("./app.js", "utf8");
const indexSource = fs.readFileSync("./index.html", "utf8");
const storageSource = fs.readFileSync("./storage.js", "utf8");
const serviceWorkerSource = fs.readFileSync("./service-worker.js", "utf8");

function sourceFor(functionName, nextFunctionName) {
  const start = appSource.indexOf(`function ${functionName}`);
  assert.ok(start >= 0, `Missing ${functionName}`);
  const candidates = [`\n  function ${nextFunctionName}`, `\n  async function ${nextFunctionName}`]
    .map(function (marker) { return appSource.indexOf(marker, start); })
    .filter(function (index) { return index > start; });
  assert.ok(candidates.length > 0, `Missing boundary ${nextFunctionName} after ${functionName}`);
  return appSource.slice(start, Math.min.apply(null, candidates));
}

// --- Shared application shell -------------------------------------------------

assert.ok(indexSource.includes('id="app-shell-header"'), "A shared application shell must exist");
assert.ok(indexSource.includes('id="app-brand-btn"'), "The shell must expose the Compliance HQ home control");
assert.ok(indexSource.includes(">Compliance HQ<"), "The visible product name must be Compliance HQ");
assert.ok(indexSource.includes('content="Compliance HQ"'), "The installed app name must be Compliance HQ");
assert.ok(indexSource.includes('id="app-property-selector"'), "The shell must own the shared Property selector");
assert.ok(indexSource.includes('id="app-module-nav"'), "The shell must own the module navigation");

const shellNavStart = indexSource.indexOf('id="app-module-nav"');
const shellNav = indexSource.slice(shellNavStart, indexSource.indexOf("</nav>", shellNavStart));
["dashboard", "Tenancy", "Contacts", "Schedule", "Documents", "settings"].forEach(function (moduleKey) {
  assert.ok(shellNav.includes(`data-app-module="${moduleKey}"`), `Shell navigation must include ${moduleKey}`);
});
["Dashboard", "Tenancies", "Contacts", "Calendar", "Documents", "Settings"].forEach(function (label) {
  assert.ok(shellNav.includes(`>${label}<`), `Shell navigation must be labelled ${label}`);
});

// Navigation is defined once and reused, rather than duplicated per page.
assert.strictEqual(indexSource.split('id="app-module-nav"').length - 1, 1, "Shell navigation markup must not be duplicated");
assert.strictEqual(indexSource.split('id="app-property-selector"').length - 1, 1, "The Property selector must not be duplicated");
assert.strictEqual(indexSource.includes('id="lease-building-filter"'), false, "Documents must not keep its own Property filter");
assert.strictEqual(indexSource.includes('id="tenancy-building-filter"'), false, "Tenancies must not keep its own Property filter");
assert.strictEqual(indexSource.includes('id="contacts-building-filter"'), false, "Contacts must not keep its own Property filter");
assert.strictEqual(indexSource.includes('id="schedule-filter-property"'), false, "Calendar must not keep its own Property filter");
assert.ok(appSource.includes("function renderAllBuildingFilterSelects"), "One shared function must render the Property selector");

// Active module highlighting.
const activeModuleSource = sourceFor("setActiveAppModule", "setAppShellVisible");
assert.ok(activeModuleSource.includes('classList.toggle("is-active"'), "The shell must highlight the active module");
assert.ok(activeModuleSource.includes("data-app-module"), "Highlighting must key off the shared module attribute");
// Claiming a module is what makes a screen a shell page, so it must also guarantee the shell is showing.
assert.ok(activeModuleSource.includes("setAppShellVisible(true)"), "Every module page must guarantee the shared shell is visible");
assert.ok(activeModuleSource.includes("renderAllBuildingFilterSelects()"), "Every module page must repopulate the shared Property selector");
assert.ok(
  activeModuleSource.indexOf("setAppShellVisible(true)") < activeModuleSource.indexOf("if (!appModuleNav)"),
  "Shell visibility must not depend on the nav element being present"
);

// Only the deliberately focused workflows may hide the shell.
const shellHidingFunctions = appSource.split("setAppShellVisible(false)").length - 1;
assert.strictEqual(shellHidingFunctions, 4, "Only Setup, Resume Setup, Edit Property and Complete Task may hide the shared shell");
["showDashboard", "showTenancyView", "showContactsView", "showScheduleView", "showLeaseView", "showSettingsView"].forEach(function (name) {
  const index = appSource.indexOf(`function ${name}(`);
  const body = appSource.slice(index, appSource.indexOf("\n  }", index));
  assert.strictEqual(body.includes("setAppShellVisible(false)"), false, `${name} must never hide the shared shell`);
});
assert.ok(sourceFor("hideAllViews", "showTemplateLibraryView").includes("setAppShellVisible(true)"), "Every view change must restore the shared shell by default");

// Opening the document form must not touch the shell.
assert.strictEqual(sourceFor("openDocumentForm", "closeDocumentForm").includes("setAppShellVisible"), false, "Add/Edit Document must leave the shared shell alone");
assert.strictEqual(sourceFor("renderTenancySectionState", "getTenancyById").includes("setAppShellVisible"), false, "Add Tenancy must leave the shared shell alone");

// The service worker must not pair a fresh index.html with stale scripts or styles.
assert.ok(serviceWorkerSource.includes('destination === "script" || destination === "style"'), "Scripts and styles must be served network-first");
assert.ok(
  serviceWorkerSource.indexOf('destination === "script" || destination === "style"') < serviceWorkerSource.indexOf("staleWhileRevalidate(event.request, RUNTIME_CACHE)"),
  "Scripts and styles must be handled before the stale-while-revalidate branch"
);
[
  ["showDashboard", 'setActiveAppModule("dashboard")'],
  ["showTenancyView", 'setActiveAppModule("Tenancy")'],
  ["showContactsView", 'setActiveAppModule("Contacts")'],
  ["showScheduleView", 'setActiveAppModule("Schedule")'],
  ["showLeaseView", 'setActiveAppModule("Documents")'],
  ["showSettingsView", 'setActiveAppModule("settings")'],
].forEach(function (entry) {
  const index = appSource.indexOf(`function ${entry[0]}(`);
  assert.ok(index >= 0, `Missing ${entry[0]}`);
  assert.ok(appSource.slice(index, index + 400).includes(entry[1]), `${entry[0]} must set the active module`);
});

// --- Shared module routing ----------------------------------------------------

const openAppModuleSource = sourceFor("openAppModule", "handleAppModuleNavClick");
const routingCalls = [];
const routingContext = {
  activeBuildingId: "prop-1",
  goToDashboard() { routingCalls.push("dashboard"); },
  openSettingsView() { routingCalls.push("settings"); },
  openCurrentTenancyView(id) { routingCalls.push(`Tenancy:${id}`); },
  openContactsView() { routingCalls.push("Contacts"); },
  openScheduleView(id) { routingCalls.push(`Schedule:${id}`); },
  openLeaseView(id) { routingCalls.push(`Documents:${id}`); },
};
vm.createContext(routingContext);
vm.runInContext(openAppModuleSource, routingContext);
[
  ["dashboard", "dashboard"],
  ["settings", "settings"],
  ["Tenancy", "Tenancy:prop-1"],
  ["Contacts", "Contacts"],
  ["Schedule", "Schedule:prop-1"],
  ["Documents", "Documents:prop-1"],
].forEach(function (entry) {
  routingCalls.length = 0;
  vm.runInContext(`openAppModule(${JSON.stringify(entry[0])});`, routingContext);
  assert.deepStrictEqual(routingCalls, [entry[1]], `${entry[0]} must route through the shared shell`);
});

// Selecting a property never forces the user back to the Dashboard.
const selectorChangeSource = sourceFor("handleBuildingFilterChange", "handleHistoryBack");
assert.ok(selectorChangeSource.includes("renderSchedulePage()"), "Selector change must re-render Calendar in place");
assert.ok(selectorChangeSource.includes("renderCurrentTenancyPage()"), "Selector change must re-render Tenancies in place");
assert.ok(selectorChangeSource.includes('renderContactSectionState("list")'), "Selector change must re-render Contacts in place");
assert.ok(selectorChangeSource.includes("renderLeasePage()"), "Selector change must re-render Documents in place");
assert.strictEqual(selectorChangeSource.includes("goToDashboard()"), false, "Selector change must not force the user to the Dashboard");

// --- Property archive ---------------------------------------------------------

const archiveContext = {};
archiveContext.buildings = [
  { id: "a", buildingName: "Alpha" },
  { id: "b", buildingName: "Beta", archived: false },
  { id: "c", buildingName: "Gamma", archived: true },
];
archiveContext.activeBuildingId = "";
archiveContext.window = { BuildingStorage: { getBuildings() { return archiveContext.buildings; } } };
archiveContext.escapeHtml = function (value) { return String(value); };
archiveContext.getBuildingFilterId = function () { return archiveContext.activeBuildingId; };
vm.createContext(archiveContext);
["isBuildingArchived", "getAllBuildingsIncludingArchived", "getOperationalBuildings", "getSortedBuildings", "getBuildingsForFilter"]
  .forEach(function (name, index, all) {
    vm.runInContext(sourceFor(name, all[index + 1] || "renderBuildingFilterOptions"), archiveContext);
  });

assert.ok(sourceFor("isBuildingArchived", "getAllBuildingsIncludingArchived").includes("building.archived === true"), "Archiving must use an explicit archived flag");

vm.runInContext("operational = getOperationalBuildings().map(function (b) { return b.id; }).join(',');", archiveContext);
assert.strictEqual(archiveContext.operational, "a,b", "Records with no archived field must be treated as active");

vm.runInContext("selectorOptions = getSortedBuildings().map(function (b) { return b.buildingName; }).join(',');", archiveContext);
assert.strictEqual(archiveContext.selectorOptions, "Alpha,Beta", "Archived properties must be excluded from the operational selector");

vm.runInContext("everything = getAllBuildingsIncludingArchived().map(function (b) { return b.buildingName; }).join(',');", archiveContext);
assert.strictEqual(archiveContext.everything, "Alpha,Beta,Gamma", "Settings must still see archived properties");

vm.runInContext("portfolio = getBuildingsForFilter().map(function (b) { return b.id; }).join(',');", archiveContext);
assert.strictEqual(archiveContext.portfolio, "a,b", "All Properties must be a real portfolio view over active properties");

archiveContext.activeBuildingId = "b";
vm.runInContext("scoped = getBuildingsForFilter().map(function (b) { return b.id; }).join(',');", archiveContext);
assert.strictEqual(archiveContext.scoped, "b", "A selected property must scope every module to that property");

archiveContext.activeBuildingId = "c";
vm.runInContext("archivedScope = getBuildingsForFilter().map(function (b) { return b.id; }).join(',');", archiveContext);
assert.strictEqual(archiveContext.archivedScope, "", "An archived property must not act as an operational scope");

const setArchivedSource = sourceFor("setBuildingArchived", "deletePropertyPermanently");
assert.strictEqual(setArchivedSource.includes("window.confirm"), false, "Archiving must not depend on a native dialog that sandboxed browsers suppress");
assert.ok(setArchivedSource.includes("archived: archived"), "Archive and restore must share one code path");
assert.strictEqual(setArchivedSource.includes("deleteBuilding"), false, "Archiving must never delete records");
assert.ok(setArchivedSource.includes('setCurrentPropertyId("")'), "Archiving the selected property must clear the operational selection");

const deleteConfirmSource = sourceFor("confirmPropertyDeleteDialog", "setBuildingArchived");
assert.strictEqual(deleteConfirmSource.includes("window.confirm"), false, "Permanent deletion must not depend on a native dialog");
assert.ok(deleteConfirmSource.includes("template-delete-modal"), "Permanent deletion must reuse the existing in-app modal pattern");
assert.ok(deleteConfirmSource.includes("building.buildingName"), "The confirmation must identify the property by name");
assert.ok(deleteConfirmSource.includes("cannot be undone"), "Permanent deletion must warn that it is irreversible");
assert.ok(deleteConfirmSource.includes('data-property-delete-action="cancel"'), "Permanent deletion must offer an explicit Cancel");
assert.ok(deleteConfirmSource.includes('data-property-delete-action="delete"'), "Permanent deletion must require an explicit final Delete");

const deletePropertySource = sourceFor("deletePropertyPermanently", "handleBreadcrumbClick");
assert.ok(deletePropertySource.includes("BuildingStorage.deleteBuilding"), "Permanent deletion must use the existing storage API");
assert.strictEqual(deletePropertySource.includes("MasterData"), false, "Permanent deletion must not touch the central repository");
assert.ok(deletePropertySource.includes('setCurrentPropertyId("")'), "Deleting the selected property must clear the operational selection");

const applySelectionSource = sourceFor("applyBuildingFilterSelection", "getBuildingFilterEmptySuffix");
assert.ok(applySelectionSource.includes("isBuildingArchived(target)"), "An archived property must never become the operational selection");

// --- Settings -----------------------------------------------------------------

assert.ok(indexSource.includes('id="settings-view"'), "A Settings screen must exist");
assert.ok(indexSource.includes('id="settings-property-list"'), "Settings must list existing properties");
assert.ok(indexSource.includes('id="settings-add-property-btn"'), "Settings must offer Add Property");
assert.ok(indexSource.includes('id="settings-templates-btn"'), "Settings must offer Calendar Templates");
assert.ok(indexSource.includes('id="backup-export-btn"'), "Settings must offer Export Backup");
assert.ok(indexSource.includes('id="backup-restore-btn"'), "Settings must offer Restore Backup");
assert.ok(appSource.includes('settingsTemplatesBtn.addEventListener("click", openTemplateLibrary)'), "Settings must open the Calendar Template library");
assert.ok(appSource.includes('settingsAddPropertyBtn.addEventListener("click", showForm)'), "Settings Add Property must reuse the existing Setup wizard");

const settingsListSource = sourceFor("renderSettingsPropertyList", "getPortfolioSummaryCounts");
assert.ok(settingsListSource.includes('data-settings-property-action="edit"'), "Settings cards must offer Edit Property");
["archive", "unarchive", "delete"].forEach(function (action) {
  assert.strictEqual(settingsListSource.includes(`data-settings-property-action="${action}"`), false, `Settings cards must not offer the ${action} action directly`);
});
assert.ok(
  settingsListSource.includes('data-settings-property-action="resume-setup"'),
  "Incomplete Settings cards must offer Resume Setup"
);
assert.strictEqual(
  settingsListSource.split("data-settings-property-action").length - 1,
  2,
  "Settings cards may only offer Resume Setup and Edit Property"
);
assert.ok(settingsListSource.includes('${archived ? "Archived"'), "Settings must clearly mark archived properties");
assert.ok(settingsListSource.includes("getAllBuildingsIncludingArchived()"), "Settings must show archived properties too");

// Property management lives inside Edit Property.
assert.ok(indexSource.includes('id="edit-property-management"'), "Edit Property must expose a Property Management section");
assert.ok(indexSource.includes(">Property Management<"), "The management section must be titled Property Management");
assert.ok(indexSource.includes('id="edit-archive-property-btn" class="btn btn-secondary" type="button">Archive Property<'), "Edit Property must offer Archive Property");
assert.ok(indexSource.includes('id="edit-restore-property-btn" class="btn btn-secondary" type="button">Restore Property<'), "Edit Property must offer Restore Property");
assert.ok(indexSource.includes('id="edit-property-danger"'), "Edit Property must expose a separated danger section");
assert.ok(indexSource.includes(">Delete Property<"), "The danger section must be titled Delete Property");
assert.ok(indexSource.includes('id="edit-delete-property-btn" class="btn btn-danger-subtle" type="button">Delete Property Permanently<'), "Permanent deletion must live in Edit Property with danger styling");
assert.ok(
  indexSource.indexOf('id="edit-property-danger"') > indexSource.indexOf('id="edit-property-management"'),
  "The danger section must sit below Property Management"
);

const managementSectionSource = sourceFor("renderPropertyManagementSection", "openPropertyEditor");
assert.ok(managementSectionSource.includes("isBuildingArchived(building)"), "The management section must follow the archived state");
assert.ok(managementSectionSource.includes("editArchivePropertyBtn") && managementSectionSource.includes("editRestorePropertyBtn"), "Archive and Restore must be shown exclusively");

// The editor reuses the existing archive/restore/delete implementations.
[
  ["handleArchivePropertyFromEditor", "setBuildingArchived(building, true)"],
  ["handleRestorePropertyFromEditor", "setBuildingArchived(building, false)"],
  ["handleDeletePropertyFromEditor", "deletePropertyPermanently(building)"],
].forEach(function (entry) {
  const index = appSource.indexOf(`function ${entry[0]}(`);
  assert.ok(index >= 0, `Missing ${entry[0]}`);
  assert.ok(appSource.slice(index, index + 420).includes(entry[1]), `${entry[0]} must reuse the existing implementation`);
});

// Property administration has left the Dashboard.
const dashboardStart = indexSource.indexOf('id="dashboard-view"');
const dashboardMarkup = indexSource.slice(dashboardStart, indexSource.indexOf('<section id="settings-view"', dashboardStart));
["backup-export-btn", "backup-restore-btn", "delete-building-btn", "selector-add-new", "edit-building-btn"].forEach(function (id) {
  assert.strictEqual(dashboardMarkup.includes(id), false, `Dashboard must not administer properties (${id})`);
});
assert.strictEqual(indexSource.includes('id="delete-building-btn"'), false, "Permanent deletion must only live in Settings");

// --- Navigation clean-up ------------------------------------------------------

assert.strictEqual(indexSource.includes("← Dashboard"), false, "Redundant Dashboard buttons must be removed from module pages");
["lease-back-btn", "tenancy-back-btn", "contacts-back-btn", "schedule-back-btn", "overview-back-btn", "placeholder-back-btn"].forEach(function (id) {
  assert.strictEqual(indexSource.includes(`id="${id}"`), false, `${id} is redundant now that the shell is permanent`);
});
[indexSource, appSource].forEach(function (source, sourceIndex) {
  const ambiguous = source.match(/>\s*(←\s*)?Back\s*</g) || [];
  assert.deepStrictEqual(ambiguous, [], `${sourceIndex === 0 ? "index.html" : "app.js"} must not label a button simply "Back"`);
});

// Workflow navigation that is genuinely needed is retained.
assert.ok(indexSource.includes('id="cancel-edit-btn" class="btn btn-secondary" type="button">Cancel<'), "Edit Property must keep Cancel");
assert.ok(indexSource.includes('id="cancel-tenancy-btn" class="btn btn-secondary" type="button">← Tenancies<'), "Tenancy form must return to Tenancies");
assert.ok(indexSource.includes('id="document-cancel-btn" class="btn btn-secondary" type="button">Cancel<'), "Document form must use Cancel");
assert.strictEqual(indexSource.includes("← Documents"), false, "The document form must not duplicate navigation");
assert.ok(indexSource.includes('id="template-library-back-btn" class="btn btn-secondary view-nav-btn" type="button">← Settings<'), "Calendar Templates must return to Settings");
assert.ok(indexSource.includes('id="companies-back-btn" class="btn btn-secondary view-nav-btn" type="button">← Contacts<'), "Companies must return to Contacts");
assert.ok(indexSource.includes('id="history-back-btn" class="btn btn-secondary view-nav-btn" type="button">← Calendar<'), "Completed must return to Calendar");

const cancelTenancySource = sourceFor("handleCancelTenancy", "handleTenancyTabCurrent");
assert.ok(cancelTenancySource.includes("setCurrentPropertyId(tenancyFormFilterBuildingId)"), "Tenancy Cancel must restore its selection");
assert.ok(cancelTenancySource.includes("openCurrentTenancyView()"), "Tenancy Cancel must return to the Tenancies list");
assert.strictEqual(cancelTenancySource.includes("updateBuilding"), false, "Tenancy Cancel must not save changes");

const cancelEditSource = sourceFor("handleCancelEdit", "handleModuleNavigationClick");
assert.ok(cancelEditSource.includes("openSettingsView()"), "Edit Property Cancel must return to Settings");
assert.strictEqual(cancelEditSource.includes("updateBuilding"), false, "Edit Property Cancel must not save changes");

const contactsBackSource = sourceFor("handleContactsBack", "handleCompaniesBack");
assert.ok(contactsBackSource.includes("returnToScheduleDetails(context)"), "Contact navigation must preserve the Calendar return context");
assert.ok(contactsBackSource.includes("openContactsView()"), "Contact navigation must return to the Contacts list");

// The Calendar page focuses on calendar items; master template administration lives in Settings.
assert.strictEqual(indexSource.includes(">Manage Templates<"), false, "The Calendar page must not present template administration");
assert.ok(indexSource.includes('id="manage-templates-btn"'), "Assigning templates to a property remains an operational Calendar action");

// Focused workflows hide the shell so Cancel/Save stay unambiguous.
["showForm", "showEditForm", "showCompleteTaskView"].forEach(function (name) {
  const index = appSource.indexOf(`function ${name}(`);
  assert.ok(index >= 0, `Missing ${name}`);
  assert.ok(appSource.slice(index, index + 300).includes("setAppShellVisible(false)"), `${name} must hide the shared shell`);
});

// --- Shared UI and form polish ------------------------------------------------

// 1. The global Property selector carries a visible label.
assert.ok(indexSource.includes('<label class="app-property-label" for="app-property-selector">Property</label>'), "The shared Property selector must have a visible label");
assert.ok(indexSource.indexOf('id="app-property-selector"') > indexSource.indexOf('id="app-brand-btn"'), "The Property selector must stay top-right of the shell");

// 2. Main screens no longer carry breadcrumbs.
["showDashboard", "showTenancyView", "showContactsView", "showScheduleView", "showLeaseView", "showSettingsView"].forEach(function (name) {
  const index = appSource.indexOf(`function ${name}(`);
  assert.ok(index >= 0, `Missing ${name}`);
  const body = appSource.slice(index, appSource.indexOf("\n  }", index));
  assert.ok(body.includes("setBreadcrumbs([])"), `${name} must not render breadcrumbs`);
});
// Deeper workflows keep their contextual trail.
["showTemplateLibraryView", "showCompaniesView", "showHistoryView", "showCompleteTaskView", "showEditForm"].forEach(function (name) {
  const index = appSource.indexOf(`function ${name}(`);
  assert.ok(index >= 0, `Missing ${name}`);
  const body = appSource.slice(index, appSource.indexOf("\n  }", index));
  assert.ok(body.includes("{ label:"), `${name} must keep contextual breadcrumbs`);
});
assert.ok(appSource.includes("breadcrumbNav.hidden = items.length === 0"), "The breadcrumb bar must collapse when empty");

// 3. Main page headers: title left, single primary action right.
function headerFor(viewId) {
  const start = indexSource.indexOf(`id="${viewId}"`);
  assert.ok(start >= 0, `Missing ${viewId}`);
  return indexSource.slice(start, indexSource.indexOf("</header>", start));
}
assert.ok(headerFor("tenancy-view").includes('<button id="add-tenancy-btn" class="btn btn-primary" type="button">+ Add Tenancy</button>'), "Add Tenancy must sit top-right of Tenancies");
assert.strictEqual(indexSource.includes('id="add-another-tenancy-btn"'), false, "Tenancies must not repeat Add Tenancy at the bottom");
assert.strictEqual(indexSource.split("+ Add Tenancy").length - 1, 1, "Only one Add Tenancy button may exist");
assert.ok(headerFor("contacts-view").includes('<button id="contacts-create-btn" class="btn btn-primary" type="button">+ Add Contact</button>'), "Contacts must offer + Add Contact top-right");
const contactsViewStart = indexSource.indexOf('id="contacts-view"');
const contactsViewMarkup = indexSource.slice(contactsViewStart, indexSource.indexOf('id="companies-view"', contactsViewStart));
assert.strictEqual(contactsViewMarkup.includes("+ Create New Contact"), false, "The old Create New Contact wording must be gone from Contacts");
assert.strictEqual(indexSource.includes('id="add-contact-btn"'), false, "Contacts must not repeat its Add action");
assert.ok(headerFor("schedule-view").includes('id="manage-templates-btn"'), "Calendar must keep + Add From Templates top-right");
assert.ok(headerFor("lease-view").includes('id="documents-add-btn"'), "Documents must keep + Add Document top-right");
const dashboardHeader = headerFor("dashboard-view");
assert.strictEqual(dashboardHeader.includes("btn-primary"), false, "The Dashboard must have no primary Add action");

// 4. Add buttons disappear once the matching Add workflow is open.
const leaseControlsSource = sourceFor("setLeaseTopLevelControlsVisible", "renderLeasePage");
assert.ok(leaseControlsSource.includes("documentsAddBtn"), "Opening the document form must hide + Add Document");
assert.ok(leaseControlsSource.includes("leaseRepositoryCard"), "Opening the document form must hide the repository browser");
const openDocumentFormSource = sourceFor("openDocumentForm", "closeDocumentForm");
assert.ok(openDocumentFormSource.includes("setLeaseTopLevelControlsVisible(false)"), "openDocumentForm must hide the repository controls immediately");

// 5. Document Type has left the user-facing form; the fixed categories remain.
assert.strictEqual(indexSource.includes('id="document-type-select"'), false, "Document Type must be removed from the document form");
assert.strictEqual(indexSource.includes(">Document Type<"), false, "Document Type must not be labelled in the UI");
assert.strictEqual(appSource.includes("documentTypeSelect"), false, "The Document Type control must be fully unwired");
assert.ok(appSource.includes("documentType: existing && existing.documentType ? existing.documentType : getDocumentFormCategory()"), "Legacy documentType data must be preserved on save");
assert.ok(appSource.includes("categoryId: String(document.categoryId || \"\")"), "Legacy categoryId data must still be normalised, not dropped");
assert.ok(appSource.includes("FIXED_DOCUMENT_CATEGORIES.map"), "The fixed categories must still drive the Category field");

// 6 + 7. Focused document form and its actions.
const documentFormStart = indexSource.indexOf('id="document-form-card"');
const documentFormMarkup = indexSource.slice(documentFormStart, indexSource.indexOf("</section>", indexSource.indexOf("</form>", documentFormStart)));
assert.ok(documentFormStart > indexSource.indexOf('id="lease-repository-card"'), "The document form must not be nested inside the repository card");
[
  "document-title-input",
  "document-building-select",
  "document-category-select",
  "document-date-input",
  "document-expiry-input",
  "document-tenancy-select",
  "document-schedule-select",
  "document-file-input",
  "document-notes-input",
].forEach(function (id) {
  assert.ok(documentFormMarkup.includes(`id="${id}"`), `The document form must keep ${id}`);
});
assert.ok(
  documentFormMarkup.indexOf('id="document-cancel-btn"') < documentFormMarkup.indexOf('id="document-save-btn"'),
  "Cancel must sit left of the primary Save action"
);
assert.ok(appSource.includes('documentSaveBtn.textContent = mode === "edit" ? "Save Changes" : "Save Document"'), "Save must be labelled per mode");
const closeDocumentFormSource = sourceFor("closeDocumentForm", "handleSaveDocument");
assert.strictEqual(closeDocumentFormSource.includes("updateBuilding"), false, "Cancel must not save changes");
assert.ok(closeDocumentFormSource.includes("renderLeasePage()"), "Cancel must return to the Documents repository");

// Edit preserves the stored file unless the user chooses a new one.
const saveDocumentSource = sourceFor("handleSaveDocument", "updateBuildingDocumentsStateForBuilding");
assert.ok(saveDocumentSource.includes("(existing && existing.storage ? { ...existing.storage } : null)"), "Editing must keep the existing file when none is chosen");
assert.ok(saveDocumentSource.includes('if (activeDocumentFormMode !== "edit" && !selectedFile)'), "Adding must still require a file");
assert.ok(saveDocumentSource.includes("fileName: selectedFile ? selectedFile.name : (existing ? existing.fileName : \"\")"), "Editing must keep the existing file name when none is chosen");

// 8. Permanent deletion is visually subdued, separated and still confirmed.
assert.strictEqual(settingsListSource.includes("Delete Permanently"), false, "The prominent Delete Permanently button must be gone from Settings cards");
assert.ok(indexSource.includes("btn-danger-subtle"), "Permanent deletion must use subdued danger styling");
assert.ok(
  appSource.indexOf("function handleDeletePropertyFromEditor") > 0
    && sourceFor("handleDeletePropertyFromEditor", "confirmPropertyDeleteDialog").includes("confirmPropertyDeleteDialog(building)"),
  "Permanent deletion must retain its confirmation"
);

// 9. The Dashboard document count reads the central repository.
assert.ok(appSource.includes("function getDocumentRepositoryCount"), "The Dashboard must have one repository count helper");
assert.ok(sourceFor("getDocumentRepositoryCount", "getPortfolioSummaryCounts").includes("getDocumentRegisterRecords().length"), "The Dashboard count must reuse the Documents module records");
const workspaceSummarySource = sourceFor("renderWorkspaceSummary", "renderBuildings");
assert.strictEqual(workspaceSummarySource.split("getDocumentRepositoryCount()").length - 1, 2, "Both Dashboard scopes must use the repository count");
assert.strictEqual(workspaceSummarySource.includes("tenancy.lease.documents.length"), false, "The Dashboard must not count lease documents only");
assert.strictEqual(sourceFor("getPortfolioSummaryCounts", "renderWorkspaceSummary").includes("normalized.documents"), false, "The portfolio count must not bypass the repository");

// --- Terminology and preserved internals -------------------------------------

assert.ok(appSource.includes('<option value="">All Properties</option>'), "The selector must offer All Properties first");
assert.ok(storageSource.includes("buildingManagerBuildings"), "localStorage keys must be unchanged");
assert.ok(storageSource.includes("restoreBackupData"), "The backup/restore path must be unchanged");
assert.ok(appSource.includes("scheduleItems"), "Calendar data structures must be unchanged");
assert.ok(indexSource.includes('name="buildingName"'), "Form field names must be unchanged");
assert.ok(indexSource.includes('data-module="Documents"'), "Property module routing keys must be unchanged");

console.log("navigation regression test passed");
