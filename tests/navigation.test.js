const assert = require("assert");
const fs = require("fs");
const vm = require("vm");

const appSource = fs.readFileSync("./app.js", "utf8");

function sourceFor(functionName, nextFunctionName) {
  const start = appSource.indexOf(`function ${functionName}`);
  assert.ok(start >= 0, `Missing ${functionName}`);
  const end = appSource.indexOf(`\n\n  function ${nextFunctionName}`, start);
  return appSource.slice(start, end < 0 ? appSource.length : end);
}

const scheduleBackSource = sourceFor("handleScheduleBack", "completeScheduleItemInline");
assert.ok(scheduleBackSource.includes("goToDashboard()"), "Schedule top-level Back must return Home");

const tenancyCancelSource = sourceFor("handleCancelTenancy", "handleTenancyBack");
assert.ok(tenancyCancelSource.includes("setCurrentPropertyId(tenancyFormFilterBuildingId)"), "Tenancy Back must restore its filter");
assert.ok(tenancyCancelSource.includes("openCurrentTenancyView()"), "Tenancy Back must return to the Tenancies list without changing the restored filter");
assert.strictEqual(tenancyCancelSource.includes("updateBuilding"), false, "Tenancy Back must not save changes");

const tenancyBackSource = sourceFor("handleTenancyBack", "handleTenancyTabCurrent");
assert.ok(tenancyBackSource.includes('tenancyFormCard.style.display === "block"'), "Tenancy header Back must recognize an open form");
assert.ok(tenancyBackSource.includes("handleCancelTenancy()"), "Tenancy header Back must discard the form");
assert.ok(tenancyBackSource.includes("goToDashboard()"), "Tenancy top-level Back must return Home");

const contactsBackSource = sourceFor("handleContactsBack", "handleCompaniesBack");
assert.ok(contactsBackSource.includes("returnToScheduleDetails(context)"), "Contact Back must preserve explicit Schedule return context");
assert.ok(contactsBackSource.includes("openContactsView()"), "Contact Back must return to the Contacts list");
assert.ok(contactsBackSource.includes("goToDashboard()"), "Contacts top-level Back must return Home");
assert.strictEqual(contactsBackSource.includes("handleSaveContact"), false, "Contact Back must not save changes");

const leaseBackSource = sourceFor("handleLeaseBack", "handleAddDocument");
assert.ok(leaseBackSource.includes("goToDashboard()"), "Documents top-level Back must return Home");
assert.strictEqual(appSource.includes("function handleLeaseCategoryDetailBack"), false, "The Documents category drill-down screen must be removed");

function assertTopLevelBackGoesHome(functionName, nextFunctionName, extraContext) {
  const calls = [];
  const context = Object.assign({
    activeBuildingId: "",
    goToDashboard() {
      calls.push("home");
    },
  }, extraContext || {});
  vm.createContext(context);
  vm.runInContext(sourceFor(functionName, nextFunctionName), context);

  ["", "ford-onekawa"].forEach(function (buildingFilterId) {
    context.activeBuildingId = buildingFilterId;
    calls.length = 0;
    vm.runInContext(`${functionName}();`, context);
    assert.deepStrictEqual(calls, ["home"], `${functionName} must go Home for ${buildingFilterId || "All Buildings"}`);
  });
}

assertTopLevelBackGoesHome("handleScheduleBack", "completeScheduleItemInline");
assertTopLevelBackGoesHome("handleTenancyBack", "handleTenancyTabCurrent", {
  tenancyFormCard: { style: { display: "none" } },
});
assertTopLevelBackGoesHome("handleContactsBack", "handleCompaniesBack", {
  contactAssignmentContext: null,
  contactFormCard: { style: { display: "none" } },
});
assertTopLevelBackGoesHome("handleLeaseBack", "handleAddDocument");

const scheduleModalSource = sourceFor("openScheduleDetailsDialog", "handleScheduleFilterChange");
const cancelEditStart = scheduleModalSource.indexOf('action === "cancel-edit"');
const cancelEditEnd = scheduleModalSource.indexOf('action === "open-primary-contact"', cancelEditStart);
const cancelEditSource = scheduleModalSource.slice(cancelEditStart, cancelEditEnd);
assert.ok(cancelEditSource.includes("restoreFormValues"), "Schedule Edit Back must discard unsaved form values");
assert.ok(cancelEditSource.includes("openScheduleDetailsDialog"), "Schedule Edit Back must return to Schedule Details");
assert.strictEqual(cancelEditSource.includes("handleScheduleDetailsSave"), false, "Schedule Edit Back must not save changes");

const revertStart = scheduleModalSource.indexOf('action === "revert"');
const revertCancelEnd = scheduleModalSource.indexOf('const updated = revertTemplateCompletion', revertStart);
const revertSource = scheduleModalSource.slice(revertStart, revertCancelEnd);
assert.ok(revertSource.includes("if (!shouldRevert)"), "Revert Cancel must stop before mutating data");
assert.strictEqual(revertSource.includes("close();"), false, "Revert Cancel must leave Schedule Details open");

const filterContextSource = sourceFor("returnToScheduleDetails", "handleContactsBack");
const filterCalls = [];
const filterContext = {
  setCurrentPropertyId(value) {
    filterCalls.push(["filter", value]);
  },
  openScheduleView(value) {
    filterCalls.push(["schedule", value]);
  },
  openScheduleDetailsDialog(buildingId, scheduleItemId) {
    filterCalls.push(["details", buildingId, scheduleItemId]);
  },
};
vm.createContext(filterContext);
vm.runInContext(filterContextSource, filterContext);

["", "ford-onekawa"].forEach(function (filterBuildingId) {
  filterCalls.length = 0;
  vm.runInContext(
    `returnToScheduleDetails({ buildingId: "source-building", scheduleItemId: "inspection", filterBuildingId: ${JSON.stringify(filterBuildingId)} });`,
    filterContext
  );
  assert.deepStrictEqual(filterCalls, [
    ["filter", filterBuildingId],
    ["schedule", ""],
    ["details", "source-building", "inspection"],
  ], `Schedule return context must preserve ${filterBuildingId || "All Buildings"}`);
});

const pageEntryExpectations = [
  ["openScheduleView", "openHistoryView"],
  ["openCurrentTenancyView", "buildTenancyPayload"],
  ["openLeaseView", "findLeaseDocumentById"],
];
pageEntryExpectations.forEach(function (entry) {
  const helperSource = sourceFor(entry[0], entry[1]);
  assert.ok(helperSource.includes("arguments.length > 0"), `${entry[0]} must distinguish explicit All Buildings from omitted context`);
  assert.ok(helperSource.includes('setCurrentPropertyId(buildingId && findBuildingById(buildingId) ? buildingId : "")'), `${entry[0]} must restore an explicit All Buildings filter`);
});

const scheduleViewSource = sourceFor("openScheduleView", "openHistoryView");
assert.strictEqual(scheduleViewSource.includes("updateBuilding"), false, "Opening Calendar must not save normalized Properties");

// Every module page exposes exactly one top-left Dashboard control that goes straight Home.
[
  ["handleOverviewBack", "handleCancelEdit"],
  ["handleCompaniesBack", "handleCancelTenancy"],
  ["handleHistoryBack", "handleCancelCompleteTask"],
  ["handleTemplateLibraryBack", "handleAddTemplateInline"],
  ["handlePlaceholderBack", "setupBackBtn"],
].forEach(function (entry) {
  const source = sourceFor(entry[0], entry[1]);
  assert.ok(source.includes("goToDashboard()"), `${entry[0]} must return directly to the Dashboard`);
});

const indexSource = fs.readFileSync("./index.html", "utf8");
const navRowIds = [
  "template-library-back-btn",
  "overview-back-btn",
  "tenancy-back-btn",
  "lease-back-btn",
  "contacts-back-btn",
  "companies-back-btn",
  "placeholder-back-btn",
  "schedule-back-btn",
  "history-back-btn",
];
navRowIds.forEach(function (id) {
  const index = indexSource.indexOf(`id="${id}"`);
  assert.ok(index >= 0, `${id} must exist`);
  const line = indexSource.slice(indexSource.lastIndexOf("\n", index) + 1, indexSource.indexOf("\n", index));
  assert.ok(line.includes("view-nav-btn"), `${id} must be the top-left navigation control`);
  assert.ok(line.includes(">← Dashboard<"), `${id} must be labelled Dashboard`);
  const rowStart = indexSource.lastIndexOf('<div class="view-nav-row">', index);
  assert.ok(rowStart >= 0 && rowStart < index, `${id} must live in a view-nav-row`);
});

// No screen may keep an ambiguous "Back" label.
[indexSource, appSource].forEach(function (source, sourceIndex) {
  const ambiguous = source.match(/>\s*(←\s*)?Back\s*</g) || [];
  assert.deepStrictEqual(ambiguous, [], `${sourceIndex === 0 ? "index.html" : "app.js"} must not label a button simply "Back"`);
});

// Destination-specific navigation inside detail/edit screens.
assert.ok(indexSource.includes('id="cancel-tenancy-btn" class="btn btn-secondary" type="button">← Tenancies<'), "Tenancy form must return to Tenancies");
assert.ok(indexSource.includes('id="document-cancel-btn" class="btn btn-secondary" type="button">← Documents<'), "Document form must return to Documents");
assert.ok(appSource.includes('data-contact-details-action="close">Contacts<'), "Contact details must return to Contacts");
assert.ok(appSource.includes('data-schedule-details-action="close">Calendar<'), "Calendar details must return to Calendar");
assert.ok(indexSource.includes('id="setup-back-btn" class="btn btn-secondary" type="button">Previous Step<'), "Setup must use a step-specific label");

// User-facing terminology.
[
  "Selected Property",
  "Select a property",
  "No properties have been added yet.",
  "Property Dashboard",
  ">Property Details<",
  "Edit Property",
  "Delete Property",
  "Property Name",
  "Property Type",
  ">Calendar<",
  "Calendar Item Template Library",
  "Step 4: Calendar Items",
].forEach(function (text) {
  assert.ok(indexSource.includes(text), `index.html must use "${text}"`);
});
[
  "Building Dashboard",
  "Edit Building",
  "Delete Building",
  ">Building Name<",
  "Building Type",
  "Selected Building",
].forEach(function (text) {
  assert.strictEqual(indexSource.includes(text), false, `index.html must not use "${text}"`);
});
assert.ok(appSource.includes('{ label: "Properties", onClick: goToDashboard }'), "Breadcrumbs must start at Properties");
assert.strictEqual(appSource.includes('label: "Buildings"'), false, "Breadcrumbs must not say Buildings");
assert.ok(appSource.includes('<option value="">All Properties</option>'), "Filters must offer All Properties");

// Internal identifiers and storage keys must be untouched.
assert.ok(appSource.includes("buildingManagerBuildings") || fs.readFileSync("./storage.js", "utf8").includes("buildingManagerBuildings"), "localStorage key must be unchanged");
assert.ok(appSource.includes("scheduleItems"), "scheduleItems data structure must be unchanged");
assert.ok(indexSource.includes('name="buildingName"'), "Form field names must be unchanged");
assert.ok(indexSource.includes('data-workspace-module="Schedule"'), "Module routing keys must be unchanged");

console.log("navigation regression test passed");
