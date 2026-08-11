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
  findBuildingById() {
    return { id: "building-1" };
  },
  normalizeText(value) {
    return String(value || "").trim().toLowerCase();
  },
  getCompanyNameById(companyId, fallback) {
    return companyId === "company-b" ? "Dawn Co" : fallback;
  },
  getBuildingRelationshipForContact(building, contact) {
    return contact.relationship || "Other";
  },
  getScheduleItemsLinkedToContact() {
    return [];
  },
  dedupeContacts(contacts) {
    return contacts;
  },
  renderContactRoleBadge(role) {
    return `<span>${role}</span>`;
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
  { id: "c2", name: "Zed Example", companyId: "company-a", mobile: "", email: "", relationship: "Accountant" },
  { id: "c1", name: "Amy Example", companyId: "company-b", mobile: "", email: "", relationship: "Locksmith" },
];

context.contacts = contacts;
vm.runInContext("renderContactList(contacts);", context);

const rendered = context.contactsList.innerHTML;
assert.ok(!rendered.includes("contact-group-block"), "Contacts list should not render group wrappers");
assert.ok(!rendered.includes("contact-relationship-block"), "Contacts list should not render relationship section wrappers");
assert.ok(!rendered.includes("PROFESSIONAL"), "Contacts list should not render category headings");
assert.ok(!rendered.includes("Other Relationships"), "Contacts list should not render subgroup headings");
assert.ok(rendered.includes("Role:"), "Contacts cards should still show the role field");
assert.ok(rendered.includes("Locksmith"), "Contacts cards should still show the role value");
assert.ok(rendered.indexOf("Amy Example") < rendered.indexOf("Zed Example"), "Contacts should be alphabetically ordered by name");

console.log("contacts list regression test passed");
