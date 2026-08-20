const assert = require("assert");
const fs = require("fs");
const vm = require("vm");

const appSource = fs.readFileSync("./app.js", "utf8");
const start = appSource.indexOf("function renderContactList");
const end = appSource.indexOf("\n\n  function showModulePlaceholder", start);
const renderContactListSource = appSource.slice(start, end);

const summaryStart = appSource.indexOf("function summarizeContactRelationships");
const summaryEnd = appSource.indexOf("\n\n  function findContactById", summaryStart);
const summarySource = appSource.slice(summaryStart, summaryEnd);

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
        // Duplicate references must not create duplicate summary entries or inflate counts.
        { type: "Property", targetId: "building-1", targetName: "Ford Onekawa", role: "Property Contact" },
        { type: "Property", targetId: "building-2", targetName: "Taradale Chambers", role: "Locksmith" },
        { type: "Tenancy", targetId: "ten-1", targetName: "Jims Locksmith", role: "Tenant Contact" },
        { type: "Tenancy", targetId: "ten-1", targetName: "Jims Locksmith", role: "Tenant Contact" },
        { type: "Calendar", targetId: "cal-1", targetName: "Annual Security Inspection", role: "Preferred Contact" },
        { type: "Calendar", targetId: "cal-1", targetName: "Annual Security Inspection", role: "Preferred Contact" },
        { type: "Calendar", targetId: "cal-2", targetName: "Fire Alarm Test", role: "Preferred Contact" },
        { type: "Company", targetId: "company-b", targetName: "Dawn Co", role: "Company" },
      ]],
      ["c2", []],
      ["c3", [
        { type: "Calendar", targetId: "cal-3", targetName: "Backflow Test", role: "Preferred Contact" },
      ]],
    ]);
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
vm.runInContext(summarySource, context);
vm.runInContext(renderContactListSource, context);

const contacts = [
  { id: "c2", name: "Zed Example", companyId: "company-a", mobile: "", email: "" },
  { id: "c1", name: "Amy Example", companyId: "company-b", mobile: "021 111 1111", email: "amy@example.com" },
  { id: "c3", name: "Solo Example", companyId: "company-a", mobile: "", email: "" },
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
assert.ok(rendered.includes("Linked to:"), "Contact cards must show a compact linked-to summary");
assert.strictEqual(
  rendered.includes("contact-relationship-type"),
  false,
  "The repository card must not render the full relationship tree"
);

function summaryFor(html, contactId) {
  const cardStart = html.indexOf(`data-contact-id="${contactId}"`);
  const cardEnd = html.indexOf("</article>", cardStart);
  const card = html.slice(cardStart, cardEnd);
  const match = /<p class="contact-card-linked">[\s\S]*?<\/strong>([\s\S]*?)<\/p>/.exec(card);
  return match ? match[1].trim() : "";
}

assert.strictEqual(
  summaryFor(rendered, "c1"),
  "Ford Onekawa · Taradale Chambers · Jims Locksmith · 2 Calendar items",
  "The summary must list properties and tenancies once each and count calendar items"
);
assert.strictEqual(summaryFor(rendered, "c3"), "1 Calendar item", "A single calendar link must use the singular label");
assert.strictEqual(
  rendered.includes("Dawn Co ·") || rendered.includes("· Dawn Co"),
  false,
  "Company relationships must not be listed separately in the summary"
);
assert.ok(rendered.includes(">Dawn Co</p>"), "The contact's company must still be shown with their details");
assert.ok(rendered.includes("Not linked to anything yet."), "A contact with no relationships must say so");
assert.ok(rendered.indexOf("Amy Example") < rendered.indexOf("Zed Example"), "Contacts should be alphabetically ordered by name");
assert.ok(rendered.includes('href="tel:021 111 1111"'), "Phone numbers must remain clickable");
assert.ok(rendered.includes('href="mailto:amy@example.com"'), "Email addresses must remain clickable");
assert.ok(rendered.includes('class="building-card clickable-card contact-card"'), "The whole card must be clickable");

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
  assert.strictEqual(
    html.includes('data-contact-id="c3"'),
    type === "Calendar",
    `${type} filter must only keep contacts holding that relationship`
  );
});
context.contactsRelationshipFilterValue = "";
vm.runInContext("renderContactList(contacts);", context);
assert.strictEqual(
  (context.contactsList.innerHTML.match(/data-contact-id=/g) || []).length,
  3,
  "The All filter must show every contact exactly once"
);

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
const setupStart = appSource.indexOf("const buildingId = setupState.propertyId || window.BuildingStorage.createId();");
const setupEnd = appSource.indexOf("setupState.createdBuildingId = buildingId;", setupStart);
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

// --- The relationship index must not multiply Company links -------------------
const indexStart = appSource.indexOf("function buildContactRelationship");
const indexEnd = appSource.indexOf("\n  function groupRelationshipsByType", indexStart);
assert.ok(indexStart >= 0 && indexEnd > indexStart, "The relationship index must exist");
const indexSource = appSource.slice(indexStart, indexEnd);

const duplicateBuilding = {
  id: "building-1",
  buildingName: "Ford Onekawa",
  buildingContactAssignments: ["c1", "c1"],
  contactRelationshipById: { c1: "Locksmith" },
  tenancies: [{ id: "ten-1", tradingName: "EIT", contactRefs: ["c1", "c1"] }],
  scheduleItems: [
    { id: "cal-1", taskName: "Annual Security Inspection", preferredContactId: "c1" },
    { id: "cal-1", taskName: "Annual Security Inspection", preferredContactId: "c1" },
  ],
};

// The same master contact record stored twice must not duplicate its Company relationship.
const duplicateMasterContacts = [
  { id: "c1", name: "Deborah Prowse", companyId: "company-hbr" },
  { id: "c1", name: "Deborah Prowse", companyId: "company-hbr" },
];

const indexContext = {
  getBuildingsForFilter() {
    return [duplicateBuilding];
  },
  ensureWorkflowCollections(building) {
    return building;
  },
  getBuildingContactRelationshipMap(building) {
    return building.contactRelationshipById || {};
  },
  getAllTenanciesForBuilding(building) {
    return building.tenancies || [];
  },
  getTenancyContactRefs(tenancy) {
    const seen = new Set();
    return (tenancy.contactRefs || []).filter(function (id) {
      if (seen.has(id)) {
        return false;
      }
      seen.add(id);
      return true;
    });
  },
  getContacts() {
    return duplicateMasterContacts;
  },
  dedupeContacts(list) {
    const seen = new Set();
    return list.filter(function (contact) {
      const key = `id:${contact.id}`;
      if (seen.has(key)) {
        return false;
      }
      seen.add(key);
      return true;
    });
  },
  getCompanyNameById(companyId, fallback) {
    return companyId === "company-hbr" ? "Hawkes Bay Refrigeration" : fallback;
  },
};

vm.createContext(indexContext);
vm.runInContext(indexSource, indexContext);
vm.runInContext(summarySource, indexContext);
vm.runInContext("indexed = getRelationshipsForContact('c1');", indexContext);

const byType = indexContext.indexed.reduce(function (acc, relationship) {
  acc[relationship.type] = (acc[relationship.type] || 0) + 1;
  return acc;
}, {});
assert.strictEqual(byType.Company, 1, "A duplicated master contact record must not duplicate its Company relationship");
assert.strictEqual(byType.Property, 1, "Repeated property assignments must be deduplicated");
assert.strictEqual(byType.Tenancy, 1, "Repeated tenancy refs must be deduplicated");
assert.strictEqual(byType.Calendar, 1, "Repeated calendar refs must not inflate the calendar count");

vm.runInContext("summary = summarizeContactRelationships(indexed).join(' \\u00b7 ');", indexContext);
assert.strictEqual(
  indexContext.summary,
  "Ford Onekawa · EIT · 1 Calendar item",
  "The compact summary must show properties, tenancies and a calendar count without the company"
);

console.log("contact relationship index dedupe test passed");
