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

const documentsBackStart = appSource.indexOf("function handleLeaseCategoryDetailBack");
const documentsBackEnd = appSource.indexOf("\n\n  async function handleLeaseCategoryDetailClick", documentsBackStart);
const documentsBackSource = appSource.slice(documentsBackStart, documentsBackEnd);
assert.ok(documentsBackSource.includes("renderLeasePage()"), "Documents detail Back must return to the Documents list");
assert.strictEqual(documentsBackSource.includes("updateBuilding"), false, "Documents Back must not save business data");
const leaseBackSource = sourceFor("handleLeaseBack", "openLeaseCategoryDetail");
assert.ok(leaseBackSource.includes("goToDashboard()"), "Documents top-level Back must return Home");

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
assertTopLevelBackGoesHome("handleLeaseBack", "openLeaseCategoryDetail");

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
assert.strictEqual(scheduleViewSource.includes("updateBuilding"), false, "Opening Schedule must not save normalized Buildings");

console.log("navigation regression test passed");
