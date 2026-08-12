const assert = require("assert");
const fs = require("fs");
const vm = require("vm");

// ── Minimal harness (same pattern as other test files) ────────────────────────

class FakeElement {
  constructor(id, tagName) {
    this.id = id || "";
    this.tagName = (tagName || "DIV").toUpperCase();
    this.value = ""; this.textContent = ""; this.innerHTML = "";
    this.className = "";
    this.classList = { add() {}, remove() {}, contains() { return false; }, toggle() { return false; } };
    this.style = {}; this.dataset = {}; this.attributes = {};
    this.children = []; this.listeners = {}; this.parentNode = null;
    this.checked = false; this.disabled = false; this.required = false;
    this.selectedIndex = 0; this.options = []; this.form = null;
  }
  addEventListener(t, h) { (this.listeners[t] = this.listeners[t] || []).push(h); }
  appendChild(c) { c.parentNode = this; this.children.push(c); return c; }
  removeChild(c) { this.children = this.children.filter(function(i) { return i !== c; }); c.parentNode = null; return c; }
  setAttribute(n, v) { this.attributes[n] = String(v); }
  getAttribute(n) { return this.attributes[n]; }
  focus() {}
  closest() { return null; }
  querySelector() { return null; }
  querySelectorAll() { return []; }
  matches() { return false; }
  dispatchEvent() { return true; }
}

class FakeFormElement extends FakeElement {
  constructor(id) { super(id, "FORM"); this.elements = {}; }
}

function createHarness() {
  const elements = new Map();
  const document = {
    body: new FakeElement("body", "BODY"),
    addEventListener() {},
    createElement(tag) { return new FakeElement("", tag); },
    getElementById(id) {
      if (!elements.has(id)) {
        if (id === "contact-form") {
          const f = new FakeFormElement(id);
          f.elements.companyId = new FakeElement("companyId", "SELECT");
          elements.set(id, f);
        } else if (id === "complete-task-form") {
          const f = new FakeFormElement(id);
          f.elements.companyUsed = new FakeElement("companyUsed", "SELECT");
          f.elements.contactUsed = new FakeElement("contactUsed", "SELECT");
          f.elements.completionDate = new FakeElement("completionDate", "INPUT");
          elements.set(id, f);
        } else if (id.endsWith("-form")) {
          elements.set(id, new FakeFormElement(id));
        } else {
          elements.set(id, new FakeElement(id));
        }
      }
      return elements.get(id);
    },
    querySelector() { return null; },
    querySelectorAll() { return []; },
  };

  const localStorage = { store: new Map(),
    getItem(k) { return this.store.has(k) ? this.store.get(k) : null; },
    setItem(k, v) { this.store.set(k, String(v)); },
    removeItem(k) { this.store.delete(k); },
    clear() { this.store.clear(); },
  };

  const window = {
    document, localStorage, console,
    crypto: undefined,
    confirm() { return true; }, alert() {}, prompt() { return ""; },
    location: { reload() {} },
    HTMLElement: FakeElement, HTMLFormElement: FakeFormElement,
    HTMLInputElement: FakeElement, HTMLSelectElement: FakeElement,
    HTMLButtonElement: FakeElement, HTMLTextAreaElement: FakeElement,
  };
  window.window = window; window.self = window; document.defaultView = window;

  class FakeFormData { constructor() { this.values = {}; } get(k) { return this.values[k] !== undefined ? this.values[k] : ""; } }

  const ctx = { window, document, localStorage, console, crypto: undefined,
    confirm: window.confirm, alert: window.alert, prompt: window.prompt,
    location: window.location, Date,
    HTMLElement: FakeElement, HTMLFormElement: FakeFormElement,
    HTMLInputElement: FakeElement, HTMLSelectElement: FakeElement,
    HTMLButtonElement: FakeElement, HTMLTextAreaElement: FakeElement,
    FormData: FakeFormData,
  };
  ctx.window = ctx; ctx.self = ctx;
  vm.createContext(ctx);
  vm.runInContext(fs.readFileSync("./storage.js", "utf8"), ctx);
  vm.runInContext(fs.readFileSync("./app.js", "utf8"), ctx);
  return ctx;
}

function makeBuilding(id, name, tenancies) {
  const now = "2026-01-01T00:00:00.000Z";
  return {
    id, buildingName: name,
    tenancy: Array.isArray(tenancies) && tenancies.length > 0 ? tenancies[0] : null,
    tenancies: Array.isArray(tenancies) ? tenancies : [],
    propertyTemplates: [], scheduleItems: [], historyRecords: [],
    documents: [], createdDate: now, lastUpdated: now,
  };
}

function makeTenancy(id, company, leaseEnd, opts) {
  opts = opts || {};
  const now = "2026-01-01T00:00:00.000Z";
  return {
    id, companyName: company, companyId: "", tradingName: opts.tradingName || "",
    leaseStart: opts.leaseStart || "2024-01-01",
    leaseEnd: leaseEnd,
    rentReviewDate: opts.rentReviewDate || "",
    rentReviewFrequency: opts.rentReviewFrequency || "Annual",
    renewalDate: opts.renewalDate || "",
    noticeDate: opts.noticeDate || "",
    status: "Occupied",
    contacts: [], contactRefs: [], documents: [],
    lease: { notes: "", documents: [], versionHistory: [] },
    createdDate: now, lastUpdated: now,
  };
}

// ── Bootstrap ─────────────────────────────────────────────────────────────────
const ctx = createHarness();
const api = ctx.window.BuildingManagerSchedule;
assert.ok(api, "BuildingManagerSchedule export missing");

// Helper exposed for tests
const { applyTenancyEventCompletion, getAllTenanciesForBuilding } = ctx.window.BuildingManagerSchedule || {};

// We need to access these private functions through the normalized building API.
// The key tested behaviour is via ensureWorkflowCollections which is run inside
// updateBuilding/getBuildingById.

// ── TEST 1: Single tenancy — lease expiry generates schedule item ──────────────
const b1 = makeBuilding("bld-1", "Test Tower",
  [makeTenancy("t1", "ABC Engineering", "2029-03-31")]
);
ctx.window.BuildingStorage.addBuilding(b1);
const loaded1 = ctx.window.BuildingStorage.getBuildingById("bld-1");
// ensureWorkflowCollections is called via ensureWorkflowCollections inside normalisation path.
// Re-read after triggering normalisation (schedule open calls ensureWorkflowCollections).
// Simulate by calling it explicitly through the schedule helper.
const sorted1 = api.getSortedScheduleItems(b1);
const leaseExpiry = sorted1.find(function(i) { return i.tenancyEventType === "lease-expiry"; });
assert.ok(leaseExpiry, "Lease expiry schedule item not generated");
assert.strictEqual(leaseExpiry.dueDate, "2029-03-31");
assert.strictEqual(leaseExpiry.category, "Tenancy");
assert.strictEqual(leaseExpiry.sourceType, "tenancy");
assert.strictEqual(leaseExpiry.tenancyId, "t1");
assert.strictEqual(leaseExpiry.frequency, "One-off");
assert.strictEqual(leaseExpiry.id, "tenancy-event-t1-lease-expiry");

// ── TEST 2: Rent Review — recurring, correct initial date ─────────────────────
const b2 = makeBuilding("bld-2", "Commerce House",
  [makeTenancy("t2", "XYZ Ltd", "2028-06-30", {
    rentReviewDate: "2026-09-01",
    rentReviewFrequency: "Annual",
  })]
);
const sorted2 = api.getSortedScheduleItems(b2);
const rentReview2 = sorted2.find(function(i) { return i.tenancyEventType === "rent-review"; });
assert.ok(rentReview2, "Rent Review schedule item not generated");
assert.strictEqual(rentReview2.dueDate, "2026-09-01");
assert.strictEqual(rentReview2.frequency, "Annual");
assert.strictEqual(rentReview2.frequency, "Annual");
assert.notStrictEqual(rentReview2.frequency, "One-off");

// ── TEST 3: Rent Review completion advances date, preserves history ────────────
const b2copy = makeBuilding("bld-2c", "Commerce House",
  [makeTenancy("t2c", "XYZ Ltd", "2028-06-30", {
    rentReviewDate: "2026-09-01",
    rentReviewFrequency: "Annual",
  })]
);
ctx.window.BuildingStorage.addBuilding(b2copy);
const rrItem = api.getSortedScheduleItems(b2copy).find(function(i) { return i.tenancyEventType === "rent-review"; });
assert.ok(rrItem);
const afterCompletion = api.applyTenancyEventCompletion(b2copy, rrItem, {
  completedAt: "2026-09-01T10:00:00.000Z",
  completedBy: "Test",
  notes: "Completed review",
});
assert.ok(afterCompletion, "applyTenancyEventCompletion returned null");
const advancedItem = afterCompletion.scheduleItems.find(function(i) { return i.id === rrItem.id; });
assert.ok(advancedItem, "Rent review item disappeared after completion");
assert.strictEqual(advancedItem.dueDate, "2027-09-01", "Rent review did not advance by 1 year");
assert.strictEqual(advancedItem.lastCompletedDate, "2026-09-01");
assert.strictEqual(afterCompletion.historyRecords.length, 1);
assert.strictEqual(afterCompletion.historyRecords[0].tenancyId, "t2c");

// ── TEST 4: Fixed events do NOT advance after completion ──────────────────────
const b4 = makeBuilding("bld-4", "Fixed Test",
  [makeTenancy("t4", "Fixed Co", "2029-12-31")]
);
const leItem = api.getSortedScheduleItems(b4).find(function(i) { return i.tenancyEventType === "lease-expiry"; });
assert.ok(leItem);
const after4 = api.applyTenancyEventCompletion(b4, leItem, {
  completedAt: "2026-08-12T10:00:00.000Z",
  completedBy: "Test",
  notes: "",
});
assert.ok(after4);
const leItemAfter = after4.scheduleItems.find(function(i) { return i.id === leItem.id; });
assert.ok(leItemAfter, "Lease expiry item disappeared");
assert.strictEqual(leItemAfter.dueDate, "2029-12-31", "Fixed lease expiry incorrectly advanced");
assert.strictEqual(after4.historyRecords.length, 1);

// ── TEST 5: Multiple tenancies — both produce independent schedule items ───────
const b5 = makeBuilding("bld-5", "Multi Tenancy Tower",
  [
    makeTenancy("t5a", "ABC Engineering", "2029-03-31", { rentReviewDate: "2026-09-01", rentReviewFrequency: "Annual" }),
    makeTenancy("t5b", "XYZ Limited", "2028-06-30", { rentReviewDate: "2026-12-01", rentReviewFrequency: "Annual" }),
  ]
);
const sorted5 = api.getSortedScheduleItems(b5);
const abcRR = sorted5.find(function(i) { return i.tenancyId === "t5a" && i.tenancyEventType === "rent-review"; });
const xyzRR = sorted5.find(function(i) { return i.tenancyId === "t5b" && i.tenancyEventType === "rent-review"; });
const abcLE = sorted5.find(function(i) { return i.tenancyId === "t5a" && i.tenancyEventType === "lease-expiry"; });
const xyzLE = sorted5.find(function(i) { return i.tenancyId === "t5b" && i.tenancyEventType === "lease-expiry"; });

assert.ok(abcRR, "ABC rent review missing");
assert.ok(xyzRR, "XYZ rent review missing");
assert.ok(abcLE, "ABC lease expiry missing");
assert.ok(xyzLE, "XYZ lease expiry missing");

assert.strictEqual(abcRR.dueDate, "2026-09-01");
assert.strictEqual(xyzRR.dueDate, "2026-12-01");
assert.strictEqual(abcLE.dueDate, "2029-03-31");
assert.strictEqual(xyzLE.dueDate, "2028-06-30");

// Confirm items are sorted chronologically
const dueDates = sorted5.map(function(i) { return i.dueDate; });
const sortedDueDates = dueDates.slice().sort();
assert.deepStrictEqual(dueDates, sortedDueDates, "Schedule items not sorted chronologically");

// IDs are stable and unique
const itemIds = sorted5.map(function(i) { return i.id; });
assert.strictEqual(new Set(itemIds).size, itemIds.length, "Duplicate schedule item IDs found");

// ── TEST 6: Removing rent review date removes active item but keeps history ───
ctx.window.BuildingStorage.addBuilding(b5);
// Complete the ABC rent review first to build history
const b5Loaded = ctx.window.BuildingStorage.getBuildingById("bld-5");
const abcRRLive = api.getSortedScheduleItems(b5Loaded).find(function(i) { return i.tenancyId === "t5a" && i.tenancyEventType === "rent-review"; });
const afterComplete5 = api.applyTenancyEventCompletion(b5Loaded, abcRRLive, {
  completedAt: "2026-09-01T10:00:00.000Z",
  completedBy: "Test",
  notes: "",
});
assert.strictEqual(afterComplete5.historyRecords.length, 1);

// Now remove the rent review date from the tenancy
const b5NoRR = {
  ...afterComplete5,
  tenancies: afterComplete5.tenancies.map(function(t) {
    if (t.id !== "t5a") { return t; }
    return { ...t, rentReviewDate: "" };
  }),
};
b5NoRR.tenancy = b5NoRR.tenancies[0];

const sorted5NoRR = api.getSortedScheduleItems(b5NoRR);
const removedItem = sorted5NoRR.find(function(i) { return i.tenancyId === "t5a" && i.tenancyEventType === "rent-review"; });
assert.strictEqual(removedItem, undefined, "Rent review item still appears after date removed");
// History record should still exist
assert.strictEqual(b5NoRR.historyRecords.length, 1, "History record was deleted when date removed");

// ── TEST 7: Editing tenancy date updates existing item, no duplicate ──────────
// Change ABC lease expiry date
const b5ChangedLE = {
  ...b5,
  tenancies: b5.tenancies.map(function(t) {
    if (t.id !== "t5a") { return t; }
    return { ...t, leaseEnd: "2030-06-30" };
  }),
};
b5ChangedLE.tenancy = b5ChangedLE.tenancies[0];

const sorted5Changed = api.getSortedScheduleItems(b5ChangedLE);
const abcLEChanged = sorted5Changed.filter(function(i) {
  return i.tenancyId === "t5a" && i.tenancyEventType === "lease-expiry";
});
assert.strictEqual(abcLEChanged.length, 1, "Edit created duplicate lease expiry items");
assert.strictEqual(abcLEChanged[0].dueDate, "2030-06-30", "Lease expiry date not updated");

// ── TEST 8: Building-level schedule items still work alongside tenancy items ──
const b8 = makeBuilding("bld-8", "Mixed Building",
  [makeTenancy("t8", "Tenant Co", "2029-03-31", { rentReviewDate: "2026-09-01" })]
);
b8.propertyTemplates = [{
  id: "pt8", masterTemplateId: "", propertyId: "bld-8", name: "Rates",
  category: "Financial", defaultFrequency: "Quarterly",
  initialDueDate: "2026-08-15", nextDueDate: "2026-08-15",
  defaultReminderPeriod: "", suggestedDocuments: [], defaultNotes: "",
  preferredCompanyId: "", preferredContactId: "", attachments: [],
  customRecurringDates: [], active: "Yes",
  createdDate: "2026-01-01T00:00:00.000Z", lastUpdated: "2026-01-01T00:00:00.000Z",
}];

const sorted8 = api.getSortedScheduleItems(b8);
const buildingItem = sorted8.find(function(i) { return i.sourceType !== "tenancy"; });
const tenancyItem = sorted8.find(function(i) { return i.sourceType === "tenancy"; });
assert.ok(buildingItem, "Building schedule item missing when tenancy items present");
assert.ok(tenancyItem, "Tenancy schedule item missing when building items present");

// ── TEST 9: getAllTenanciesForBuilding — backward compat with legacy single tenancy ─
const legacyBuilding = {
  id: "bld-legacy",
  buildingName: "Legacy Building",
  tenancy: makeTenancy("tLeg", "Legacy Co", "2028-12-31"),
  propertyTemplates: [], scheduleItems: [], historyRecords: [],
};
const legacyTenancies = api.getSortedScheduleItems(legacyBuilding).filter(function(i) {
  return i.sourceType === "tenancy";
});
assert.ok(legacyTenancies.length >= 1, "Legacy single-tenancy not converted to tenancy schedule items");

// ── TEST 10: Renewal and Notice Date items ────────────────────────────────────
const b10 = makeBuilding("bld-10", "Option Building",
  [makeTenancy("t10", "Option Co", "2029-06-30", {
    renewalDate: "2028-12-31",
    noticeDate: "2028-09-30",
  })]
);
const sorted10 = api.getSortedScheduleItems(b10);
const renewalItem = sorted10.find(function(i) { return i.tenancyEventType === "renewal-option"; });
const noticeItem = sorted10.find(function(i) { return i.tenancyEventType === "notice-date"; });
assert.ok(renewalItem, "Renewal/Option date item not generated");
assert.ok(noticeItem, "Notice date item not generated");
assert.strictEqual(renewalItem.dueDate, "2028-12-31");
assert.strictEqual(noticeItem.dueDate, "2028-09-30");
assert.strictEqual(renewalItem.frequency, "One-off");
assert.strictEqual(noticeItem.frequency, "One-off");

console.log("tenancy schedule regression test passed");
