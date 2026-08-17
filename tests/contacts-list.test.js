const assert = require("assert");
const fs = require("fs");
const vm = require("vm");

const appSource = fs.readFileSync("./app.js", "utf8");
const start = appSource.indexOf("function renderContactList");
const end = appSource.indexOf("\n\n  function showModulePlaceholder", start);
const renderContactListSource = appSource.slice(start, end);

const context = {
  contactsList: { innerHTML: "" },
  activeBuildingId: "building-1",
  contactsSearchQuery: "",
  contactsRelationshipFilterValue: "",
  CONTACT_RELATIONSHIP_TYPES: ["Property", "Tenancy", "Calendar", "Company"],
  findBuildingById() {
    return { id: "building-1" };
  },
  normalizeText(value) {
    return String(value || "").trim().toLowerCase();
  },
  getCompanyNameById(companyId, fallback) {
    return companyId === "company-b" ? "Dawn Co" : fallback;
  },
  getContactRelationshipIndex() {
    return new Map([
      ["c1", [
        { type: "Property", targetId: "building-1", targetName: "Ford Onekawa", role: "Locksmith" },
        { type: "Property", targetId: "building-2", targetName: "Taradale Chambers", role: "Locksmith" },
        { type: "Tenancy", targetId: "ten-1", targetName: "Jims Locksmith", role: "Tenant Contact" },
        { type: "Calendar", targetId: "cal-1", targetName: "Annual Security Inspection", role: "Preferred Contact" },
      ]],
      ["c2", []],
    ]);
  },
  groupRelationshipsByType(relationships) {
    return ["Property", "Tenancy", "Calendar", "Company"]
      .map(function (type) {
        return { type: type, items: relationships.filter(function (item) { return item.type === type; }) };
      })
      .filter(function (group) { return group.items.length > 0; });
  },
  dedupeContacts(contacts) {
    return contacts;
  },
  escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  },
};

vm.createContext(context);
vm.runInContext(renderContactListSource, context);

const contacts = [
  { id: "c2", name: "Zed Example", companyId: "company-a", mobile: "", email: "" },
  { id: "c1", name: "Amy Example", companyId: "company-b", mobile: "021 111 1111", email: "amy@example.com" },
];

context.contacts = contacts;
vm.runInContext("renderContactList(contacts);", context);

const rendered = context.contactsList.innerHTML;
assert.ok(!rendered.includes("contact-group-block"), "Contacts list should not render group wrappers");
assert.ok(!rendered.includes("PROFESSIONAL"), "Contacts list should not render category headings");
assert.strictEqual(
  (rendered.match(/data-contact-id="c1"/g) || []).length,
  1,
  "A contact with several relationships must still render exactly one card"
);
assert.ok(rendered.includes("Linked to"), "Contact cards must show their relationships");
["Property", "Tenancy", "Calendar"].forEach(function (type) {
  assert.ok(rendered.includes(`contact-relationship-type\">${type}<`), `Relationships must be grouped under ${type}`);
});
assert.ok(rendered.includes("Ford Onekawa · Locksmith"), "A property relationship must show its target and role");
assert.ok(rendered.includes("Taradale Chambers · Locksmith"), "A second property relationship must also be listed");
assert.ok(rendered.includes("Jims Locksmith · Tenant Contact"), "A tenancy relationship must show its target and role");
assert.ok(rendered.includes("Annual Security Inspection · Preferred Contact"), "A calendar relationship must show its target and role");
assert.ok(rendered.includes("Not linked to anything yet."), "A contact with no relationships must say so");
assert.ok(rendered.indexOf("Amy Example") < rendered.indexOf("Zed Example"), "Contacts should be alphabetically ordered by name");

// Search covers name, company, phone and email.
[
  ["amy", "c1"],
  ["dawn co", "c1"],
  ["021 111", "c1"],
  ["amy@example.com", "c1"],
  ["annual security", "c1"],
].forEach(function (testCase) {
  context.contactsSearchQuery = testCase[0];
  vm.runInContext("renderContactList(contacts);", context);
  const html = context.contactsList.innerHTML;
  assert.ok(html.includes(`data-contact-id="${testCase[1]}"`), `Search "${testCase[0]}" must match the expected contact`);
  assert.strictEqual(html.includes('data-contact-id="c2"'), false, `Search "${testCase[0]}" must exclude other contacts`);
});
context.contactsSearchQuery = "";

// The relationship filter narrows by relationship type without duplicating contacts.
["Property", "Tenancy", "Calendar"].forEach(function (type) {
  context.contactsRelationshipFilterValue = type;
  vm.runInContext("renderContactList(contacts);", context);
  const html = context.contactsList.innerHTML;
  assert.strictEqual((html.match(/data-contact-id="c1"/g) || []).length, 1, `${type} filter must keep one card for c1`);
  assert.strictEqual(html.includes('data-contact-id="c2"'), false, `${type} filter must exclude the unlinked contact`);
});
context.contactsRelationshipFilterValue = "";

console.log("contacts list regression test passed");

const filterStart = appSource.indexOf("function getContactIdsRelatedToBuilding");
const filterEnd = appSource.indexOf("\n\n  function getScheduleItemsLinkedToContactForFilter", filterStart);
const contactFilterSource = appSource.slice(filterStart, filterEnd);
const filterContacts = [
  { id: "contact-a", name: "Contact A" },
  { id: "contact-b", name: "Contact B" },
  { id: "contact-c", name: "Contact C" },
];
const filterBuildings = [
  { id: "building-a", buildingContactIds: ["contact-a"] },
  { id: "building-b", buildingContactIds: ["contact-b"] },
];
let selectedFilterBuildingId = "";
const filterContext = {
  getContacts() {
    return filterContacts;
  },
  dedupeContacts(contactsToDedupe) {
    return contactsToDedupe;
  },
  getBuildingFilterId() {
    return selectedFilterBuildingId;
  },
  getBuildingsForFilter() {
    return selectedFilterBuildingId
      ? filterBuildings.filter((building) => building.id === selectedFilterBuildingId)
      : filterBuildings;
  },
  getContactsForBuilding(building) {
    return (building.buildingContactIds || [])
      .map((contactId) => filterContacts.find((contact) => contact.id === contactId))
      .filter(Boolean);
  },
  getAllTenanciesForBuilding() {
    return [];
  },
  getTenancyContactRefs() {
    return [];
  },
  ensureWorkflowCollections(building) {
    return building;
  },
};

vm.createContext(filterContext);
vm.runInContext(contactFilterSource, filterContext);

vm.runInContext("allBuildingContacts = getContactsForDisplayInActiveBuilding();", filterContext);
assert.deepStrictEqual(
  filterContext.allBuildingContacts.map((contact) => contact.id),
  ["contact-a", "contact-b", "contact-c"],
  "All Buildings must show every master Contact, including unassociated Contacts"
);

selectedFilterBuildingId = "building-a";
vm.runInContext("buildingAContacts = getContactsForDisplayInActiveBuilding();", filterContext);
assert.deepStrictEqual(
  filterContext.buildingAContacts.map((contact) => contact.id),
  ["contact-a"],
  "A specific Building must show only related Contacts"
);

selectedFilterBuildingId = "building-b";
vm.runInContext("buildingBContacts = getContactsForDisplayInActiveBuilding();", filterContext);
assert.deepStrictEqual(
  filterContext.buildingBContacts.map((contact) => contact.id),
  ["contact-b"],
  "A different specific Building must show only its related Contacts"
);

console.log("contact building filter regression test passed");

// --- Setup wizard creates Property relationships only -------------------------
const setupStart = appSource.indexOf("const buildingId = window.BuildingStorage.createId();");
const setupEnd = appSource.indexOf("window.BuildingStorage.addBuilding(building);", setupStart);
assert.ok(setupStart >= 0 && setupEnd > setupStart, "Setup wizard building assembly must exist");
const setupSource = appSource.slice(setupStart, setupEnd);
assert.ok(
  setupSource.includes("buildingContactAssignments: linkedContactIds.slice()"),
  "Setup must record its linked contacts as Property relationships"
);
assert.strictEqual(
  setupSource.includes("buildingContactAssignments: tenancy ?"),
  false,
  "Setup must not skip Property relationships when a tenancy is created"
);

const setupTenancyStart = appSource.indexOf("    let tenancy = null;\n    if (setupState.tenancy) {");
const setupTenancyEnd = appSource.indexOf("const propertyTemplates = setupState.configuredScheduleItems", setupTenancyStart);
assert.ok(setupTenancyStart >= 0 && setupTenancyEnd > setupTenancyStart, "Setup wizard tenancy assembly must exist");
const setupTenancySource = appSource.slice(setupTenancyStart, setupTenancyEnd);
assert.ok(
  setupTenancySource.includes("contactRefs: []"),
  "Setup must not silently create Tenancy relationships from Property contacts"
);
assert.strictEqual(
  setupTenancySource.includes("contactRefs: linkedContactIds"),
  false,
  "Setup Property contacts must never become Tenancy contacts"
);

console.log("setup contact relationship regression test passed");

// --- Relationship layer derives each type from its own canonical source -------
const relationshipStart = appSource.indexOf("function collectContactRelationshipsForBuilding");
const relationshipEnd = appSource.indexOf("\n  function getContactRelationshipIndex", relationshipStart);
assert.ok(relationshipStart >= 0 && relationshipEnd > relationshipStart, "The relationship layer must exist");
const relationshipSource = appSource.slice(relationshipStart, relationshipEnd);
assert.ok(relationshipSource.includes("buildingContactAssignments"), "Property relationships must come from buildingContactAssignments");
assert.ok(relationshipSource.includes("getTenancyContactRefs(tenancy)"), "Tenancy relationships must come from tenancy.contactRefs");
assert.ok(relationshipSource.includes("item.preferredContactId"), "Calendar relationships must come from preferredContactId");
assert.ok(relationshipSource.includes("isDuplicate"), "Identical relationships must be deduplicated");
