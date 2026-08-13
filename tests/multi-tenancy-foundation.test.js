const assert = require("assert");
const fs = require("fs");
const vm = require("vm");

class FakeElement {
  constructor(id, tagName) {
    this.id = id || "";
    this.tagName = (tagName || "DIV").toUpperCase();
    this.value = "";
    this.textContent = "";
    this.innerHTML = "";
    this.className = "";
    this.classList = {
      add() {},
      remove() {},
      contains() { return false; },
      toggle() { return false; },
    };
    this.style = {};
    this.dataset = {};
    this.attributes = {};
    this.children = [];
    this.listeners = {};
    this.parentNode = null;
    this.checked = false;
    this.disabled = false;
    this.required = false;
    this.selectedIndex = 0;
    this.options = [];
    this.form = null;
  }

  addEventListener(type, handler) {
    this.listeners[type] = this.listeners[type] || [];
    this.listeners[type].push(handler);
  }

  appendChild(child) {
    child.parentNode = this;
    this.children.push(child);
    return child;
  }

  removeChild(child) {
    this.children = this.children.filter(function (item) {
      return item !== child;
    });
    child.parentNode = null;
    return child;
  }

  setAttribute(name, value) {
    this.attributes[name] = String(value);
  }

  getAttribute(name) {
    return this.attributes[name];
  }

  focus() {
    return undefined;
  }

  closest() {
    return null;
  }

  querySelector() {
    return null;
  }

  querySelectorAll() {
    return [];
  }

  matches() {
    return false;
  }

  dispatchEvent() {
    return true;
  }
}

class FakeFormElement extends FakeElement {
  constructor(id) {
    super(id, "FORM");
    this.elements = {};
  }

  reset() {
    Object.keys(this.elements || {}).forEach(function (key) {
      const element = this.elements[key];
      if (!element) {
        return;
      }

      if (typeof element.checked === "boolean") {
        element.checked = false;
      }
      if (typeof element.value !== "undefined") {
        element.value = "";
      }
    }, this);
  }
}

function createHarness(preloadedBuildings) {
  const elements = new Map();
  const document = {
    body: new FakeElement("body", "BODY"),
    addEventListener() {},
    createElement(tagName) {
      return new FakeElement("", tagName);
    },
    getElementById(id) {
      if (!elements.has(id)) {
        if (id === "contact-form") {
          const form = new FakeFormElement(id);
          form.elements.companyId = new FakeElement("companyId", "SELECT");
          elements.set(id, form);
        } else if (id === "complete-task-form") {
          const form = new FakeFormElement(id);
          form.elements.companyUsed = new FakeElement("companyUsed", "SELECT");
          form.elements.contactUsed = new FakeElement("contactUsed", "SELECT");
          form.elements.completionDate = new FakeElement("completionDate", "INPUT");
          elements.set(id, form);
        } else if (id.endsWith("-form")) {
          elements.set(id, new FakeFormElement(id));
        } else {
          elements.set(id, new FakeElement(id));
        }
      }
      return elements.get(id);
    },
    querySelector() {
      return null;
    },
    querySelectorAll() {
      return [];
    },
  };

  const localStorage = {
    store: new Map(),
    getItem(key) {
      return this.store.has(key) ? this.store.get(key) : null;
    },
    setItem(key, value) {
      this.store.set(key, String(value));
    },
    removeItem(key) {
      this.store.delete(key);
    },
    clear() {
      this.store.clear();
    },
  };

  if (preloadedBuildings) {
    localStorage.setItem("buildingManagerBuildings", JSON.stringify(preloadedBuildings));
  }

  const window = {
    document,
    localStorage,
    console,
    crypto: undefined,
    confirm() { return true; },
    alert() {},
    prompt() { return ""; },
    location: { reload() {} },
    HTMLElement: FakeElement,
    HTMLFormElement: FakeFormElement,
    HTMLInputElement: FakeElement,
    HTMLSelectElement: FakeElement,
    HTMLButtonElement: FakeElement,
    HTMLTextAreaElement: FakeElement,
  };
  window.window = window;
  window.self = window;
  document.defaultView = window;

  class FakeFormData {
    constructor(form) {
      this.values = {};
      if (form && form.elements) {
        Object.keys(form.elements).forEach(function (key) {
          const element = form.elements[key];
          if (element && typeof element.value !== "undefined") {
            this.values[key] = String(element.value || "");
          }
        }, this);
      }
    }

    get(key) {
      return this.values[key] !== undefined ? this.values[key] : "";
    }
  }

  const context = {
    window,
    document,
    localStorage,
    console,
    crypto: undefined,
    confirm: window.confirm,
    alert: window.alert,
    prompt: window.prompt,
    location: window.location,
    HTMLElement: FakeElement,
    HTMLFormElement: FakeFormElement,
    HTMLInputElement: FakeElement,
    HTMLSelectElement: FakeElement,
    HTMLButtonElement: FakeElement,
    HTMLTextAreaElement: FakeElement,
    Date,
    FormData: FakeFormData,
  };
  context.window = context;
  context.self = context;
  vm.createContext(context);

  const storageSource = fs.readFileSync("./storage.js", "utf8");
  const appSource = fs.readFileSync("./app.js", "utf8");

  vm.runInContext(storageSource, context);
  vm.runInContext(appSource, context);

  return context;
}

function makeTenancy(id, company, leaseEnd) {
  const now = "2026-01-01T00:00:00.000Z";
  return {
    id,
    companyName: company,
    companyId: "",
    tradingName: "",
    leaseStart: "2024-01-01",
    leaseEnd,
    rentReviewDate: "",
    rentReviewFrequency: "Annual",
    renewalDate: "",
    noticeDate: "",
    status: "Occupied",
    contacts: [],
    contactRefs: [],
    documents: [],
    lease: { notes: "", documents: [], versionHistory: [] },
    createdDate: now,
    lastUpdated: now,
  };
}

// TEST 1: Legacy tenancy IDs are assigned once and remain stable across reload.
const legacyBuilding = {
  id: "b-legacy",
  buildingName: "Legacy Multi",
  streetAddress: "1 Test St",
  city: "Testville",
  status: "Occupied",
  tenancy: {
    companyName: "Legacy Tenant 1",
    leaseStart: "2024-01-01",
    leaseEnd: "2028-01-01",
    status: "Occupied",
  },
  tenancies: [
    {
      companyName: "Legacy Tenant 1",
      leaseStart: "2024-01-01",
      leaseEnd: "2028-01-01",
      status: "Occupied",
    },
    {
      companyName: "Legacy Tenant 2",
      leaseStart: "2025-02-01",
      leaseEnd: "2029-02-01",
      status: "Occupied",
    },
  ],
  propertyTemplates: [],
  scheduleItems: [],
  historyRecords: [],
  documents: [],
  createdDate: "2026-01-01T00:00:00.000Z",
  lastUpdated: "2026-01-01T00:00:00.000Z",
};

const ctx1 = createHarness([legacyBuilding]);
const firstPass = ctx1.window.BuildingStorage.getBuildingById("b-legacy");
assert.ok(firstPass, "Legacy building missing after startup normalization");
assert.strictEqual(Array.isArray(firstPass.tenancies), true, "Tenancies array missing after normalization");
assert.strictEqual(firstPass.tenancies.length, 2, "Legacy tenancies were not preserved");
assert.ok(firstPass.tenancies[0].id && String(firstPass.tenancies[0].id).trim(), "First tenancy ID was not generated");
assert.ok(firstPass.tenancies[1].id && String(firstPass.tenancies[1].id).trim(), "Second tenancy ID was not generated");
assert.strictEqual(firstPass.tenancy.id, firstPass.tenancies[0].id, "Compatibility pointer did not align to first tenancy");

const firstIds = firstPass.tenancies.map(function (tenancy) {
  return tenancy.id;
});
const persistedSnapshot = JSON.parse(ctx1.localStorage.getItem("buildingManagerBuildings"));

const ctx2 = createHarness(persistedSnapshot);
const secondPass = ctx2.window.BuildingStorage.getBuildingById("b-legacy");
const secondIds = secondPass.tenancies.map(function (tenancy) {
  return tenancy.id;
});
assert.strictEqual(
  JSON.stringify(secondIds),
  JSON.stringify(firstIds),
  "Tenancy IDs changed after reload/startup"
);

// TEST 2: Building isolation for multiple current tenancies in schedule-derived workflow.
const api = ctx2.window.BuildingManagerSchedule;
assert.ok(api, "BuildingManagerSchedule export missing");

const buildingA = {
  id: "bld-A",
  buildingName: "Building A",
  tenancy: makeTenancy("A1", "Tenant A1", "2029-03-31"),
  tenancies: [
    makeTenancy("A1", "Tenant A1", "2029-03-31"),
    makeTenancy("A2", "Tenant A2", "2030-04-30"),
  ],
  propertyTemplates: [],
  scheduleItems: [],
  historyRecords: [],
  documents: [],
  createdDate: "2026-01-01T00:00:00.000Z",
  lastUpdated: "2026-01-01T00:00:00.000Z",
};

const buildingB = {
  id: "bld-B",
  buildingName: "Building B",
  tenancy: makeTenancy("B1", "Tenant B1", "2028-06-30"),
  tenancies: [makeTenancy("B1", "Tenant B1", "2028-06-30")],
  propertyTemplates: [],
  scheduleItems: [],
  historyRecords: [],
  documents: [],
  createdDate: "2026-01-01T00:00:00.000Z",
  lastUpdated: "2026-01-01T00:00:00.000Z",
};

const scheduleA = api.getSortedScheduleItems(buildingA).filter(function (item) {
  return item.sourceType === "tenancy";
});
const scheduleB = api.getSortedScheduleItems(buildingB).filter(function (item) {
  return item.sourceType === "tenancy";
});

const tenancyIdsA = new Set(scheduleA.map(function (item) { return item.tenancyId; }));
const tenancyIdsB = new Set(scheduleB.map(function (item) { return item.tenancyId; }));

assert.ok(tenancyIdsA.has("A1"), "Building A tenancy A1 missing");
assert.ok(tenancyIdsA.has("A2"), "Building A tenancy A2 missing");
assert.strictEqual(tenancyIdsB.has("A1"), false, "Building B leaked tenancy A1");
assert.strictEqual(tenancyIdsB.has("A2"), false, "Building B leaked tenancy A2");
assert.ok(tenancyIdsB.has("B1"), "Building B tenancy B1 missing");

// TEST 3: Add A1, add A2, edit A2, reload normalization, and keep Building B isolated.
const buildingAForWorkflow = {
  id: "bld-workflow-a",
  buildingName: "Workflow A",
  streetAddress: "11 Alpha Street",
  city: "Alpha City",
  status: "Occupied",
  tenancy: null,
  tenancies: [],
  tenancyHistory: [],
  propertyTemplates: [],
  scheduleItems: [],
  historyRecords: [],
  documents: [],
  createdDate: "2026-01-01T00:00:00.000Z",
  lastUpdated: "2026-01-01T00:00:00.000Z",
};

const buildingBForWorkflow = {
  id: "bld-workflow-b",
  buildingName: "Workflow B",
  streetAddress: "22 Beta Street",
  city: "Beta City",
  status: "Occupied",
  tenancy: makeTenancy("b1", "Beta Tenant", "2029-12-31"),
  tenancies: [makeTenancy("b1", "Beta Tenant", "2029-12-31")],
  tenancyHistory: [],
  propertyTemplates: [],
  scheduleItems: [],
  historyRecords: [],
  documents: [],
  createdDate: "2026-01-01T00:00:00.000Z",
  lastUpdated: "2026-01-01T00:00:00.000Z",
};

const ctx3 = createHarness([buildingAForWorkflow, buildingBForWorkflow]);
const addTenancyBtn = ctx3.document.getElementById("add-tenancy-btn");
const addAnotherTenancyBtn = ctx3.document.getElementById("add-another-tenancy-btn");
const editTenancyBtn = ctx3.document.getElementById("edit-tenancy-btn");
const tenancyDetailsList = ctx3.document.getElementById("tenancy-details-list");
const tenancyForm = ctx3.document.getElementById("tenancy-form");

tenancyForm.elements.tenancyId = new FakeElement("tenancyId", "INPUT");
tenancyForm.elements.companyName = new FakeElement("companyName", "INPUT");
tenancyForm.elements.tradingName = new FakeElement("tradingName", "INPUT");
tenancyForm.elements.leaseStart = new FakeElement("leaseStart", "INPUT");
tenancyForm.elements.leaseEnd = new FakeElement("leaseEnd", "INPUT");
tenancyForm.elements.rentReviewDate = new FakeElement("rentReviewDate", "INPUT");
tenancyForm.elements.rentReviewFrequency = new FakeElement("rentReviewFrequency", "SELECT");
tenancyForm.elements.renewalDate = new FakeElement("renewalDate", "INPUT");
tenancyForm.elements.noticeDate = new FakeElement("noticeDate", "INPUT");
tenancyForm.elements.status = new FakeElement("status", "INPUT");
tenancyForm.elements.notes = new FakeElement("notes", "TEXTAREA");
tenancyForm.querySelectorAll = function (selector) {
  if (selector === 'input[name="status"]') {
    return [
      { value: "Occupied", checked: true },
      { value: "Vacant", checked: false },
    ];
  }
  return [];
};

function setTenancyFormValues(values) {
  tenancyForm.elements.tenancyId.value = values.tenancyId || "";
  tenancyForm.elements.companyName.value = values.companyName || "";
  tenancyForm.elements.tradingName.value = values.tradingName || "";
  tenancyForm.elements.leaseStart.value = values.leaseStart || "";
  tenancyForm.elements.leaseEnd.value = values.leaseEnd || "";
  tenancyForm.elements.rentReviewDate.value = values.rentReviewDate || "";
  tenancyForm.elements.rentReviewFrequency.value = values.rentReviewFrequency || "Annual";
  tenancyForm.elements.renewalDate.value = values.renewalDate || "";
  tenancyForm.elements.noticeDate.value = values.noticeDate || "";
  tenancyForm.elements.status.value = values.status || "Occupied";
  tenancyForm.elements.notes.value = values.notes || "";
}

function submitTenancyForm() {
  const handlers = tenancyForm.listeners.submit || [];
  assert.ok(handlers.length > 0, "Tenancy submit handler was not registered");
  handlers[0]({ preventDefault() {} });
}

function clickButton(button) {
  const handlers = button.listeners.click || [];
  assert.ok(handlers.length > 0, "Expected click handler on button");
  handlers[0]({ target: button });
}

// 1-5: Create Building A tenancy A1, then add A2.
clickButton(addTenancyBtn);
setTenancyFormValues({
  companyName: "Tenant A1",
  tradingName: "A1 Trading",
  leaseStart: "2026-01-01",
  leaseEnd: "2029-01-01",
  status: "Occupied",
  notes: "A1 original",
});
submitTenancyForm();

let buildingAAfterA1 = ctx3.window.BuildingStorage.getBuildingById("bld-workflow-a");
assert.strictEqual(buildingAAfterA1.tenancies.length, 1, "Expected one tenancy after first save");
const a1 = buildingAAfterA1.tenancies[0];
assert.ok(a1.id, "A1 ID should be generated");

clickButton(addAnotherTenancyBtn);
setTenancyFormValues({
  companyName: "Tenant A2",
  tradingName: "A2 Trading",
  leaseStart: "2026-02-01",
  leaseEnd: "2030-02-01",
  status: "Occupied",
  notes: "A2 original",
});
submitTenancyForm();

const buildingAAfterA2 = ctx3.window.BuildingStorage.getBuildingById("bld-workflow-a");

// 6-8: Confirm both A1 and A2 exist and A1 was preserved.
assert.strictEqual(buildingAAfterA2.tenancies.length, 2, "Second tenancy save should append, not replace");
const a1After = buildingAAfterA2.tenancies.find(function (tenancy) {
  return String(tenancy.id || "") === String(a1.id || "");
});
assert.ok(a1After, "A1 should still exist after adding A2");
assert.strictEqual(a1After.companyName, "Tenant A1", "A1 company should remain unchanged");
assert.strictEqual(a1After.notes, "A1 original", "A1 notes should remain unchanged");

const a2 = buildingAAfterA2.tenancies.find(function (tenancy) {
  return String(tenancy.id || "") !== String(a1.id || "");
});
assert.ok(a2, "A2 should be present");
assert.notStrictEqual(String(a2.id || ""), String(a1.id || ""), "A2 must have a unique ID");
assert.strictEqual(a2.companyName, "Tenant A2", "A2 company should be saved");

// TEST 3a: A third and fourth tenancy append without replacing earlier records.
clickButton(addAnotherTenancyBtn);
setTenancyFormValues({
  companyName: "Tenant A3",
  tradingName: "A3 Trading",
  leaseStart: "2026-03-01",
  leaseEnd: "2032-03-01",
  status: "Occupied",
  notes: "A3 original",
});
submitTenancyForm();

const buildingAAfterA3 = ctx3.window.BuildingStorage.getBuildingById("bld-workflow-a");
assert.strictEqual(buildingAAfterA3.tenancies.length, 3, "Adding A3 must preserve A1 and A2");
assert.strictEqual(buildingAAfterA3.tenancies[0].companyName, "Tenant A1", "A1 must remain after adding A3");
assert.strictEqual(buildingAAfterA3.tenancies[1].companyName, "Tenant A2", "A2 must remain after adding A3");
const a3 = buildingAAfterA3.tenancies.find(function (tenancy) {
  return tenancy.companyName === "Tenant A3";
});
assert.ok(a3, "A3 should be present after append");

clickButton(addAnotherTenancyBtn);
setTenancyFormValues({
  companyName: "Tenant A4",
  tradingName: "A4 Trading",
  leaseStart: "2026-04-01",
  leaseEnd: "2033-04-01",
  status: "Occupied",
  notes: "A4 original",
});
submitTenancyForm();

const buildingAAfterA4 = ctx3.window.BuildingStorage.getBuildingById("bld-workflow-a");
assert.strictEqual(buildingAAfterA4.tenancies.length, 4, "Adding A4 must preserve all four tenancies");
assert.strictEqual(new Set(buildingAAfterA4.tenancies.map(function (tenancy) { return tenancy.id; })).size, 4, "All four tenancy IDs must be unique");
assert.strictEqual(
  buildingAAfterA4.tenancies.map(function (tenancy) { return tenancy.companyName; }).join("|"),
  "Tenant A1|Tenant A2|Tenant A3|Tenant A4",
  "Adding A4 must not replace an earlier tenancy"
);
const a4 = buildingAAfterA4.tenancies.find(function (tenancy) {
  return tenancy.companyName === "Tenant A4";
});
assert.ok(a4, "A4 should be present after append");

// 9-10: Edit A3 only and ensure the other three tenancies remain unchanged.
const detailsActionTarget = new FakeElement("", "BUTTON");
detailsActionTarget.setAttribute("data-tenancy-list-action", "details");
detailsActionTarget.setAttribute("data-tenancy-id", a3.id);
const detailsHandlers = tenancyDetailsList.listeners.click || [];
assert.ok(detailsHandlers.length > 0, "Tenancy details click handler missing");
detailsHandlers[0]({ target: detailsActionTarget });

clickButton(editTenancyBtn);
setTenancyFormValues({
  tenancyId: a3.id,
  companyName: "Tenant A3 Updated",
  tradingName: "A3 Trading Updated",
  leaseStart: "2026-03-01",
  leaseEnd: "2032-03-02",
  status: "Occupied",
  notes: "A3 updated",
});
submitTenancyForm();

const buildingAAfterEdit = ctx3.window.BuildingStorage.getBuildingById("bld-workflow-a");
assert.strictEqual(buildingAAfterEdit.tenancies.length, 4, "Editing A3 must not duplicate or remove tenancies");

const a1Final = buildingAAfterEdit.tenancies.find(function (tenancy) {
  return String(tenancy.id || "") === String(a1.id || "");
});
const a2Final = buildingAAfterEdit.tenancies.find(function (tenancy) {
  return String(tenancy.id || "") === String(a2.id || "");
});
const a3Final = buildingAAfterEdit.tenancies.find(function (tenancy) {
  return String(tenancy.id || "") === String(a3.id || "");
});
const a4Final = buildingAAfterEdit.tenancies.find(function (tenancy) {
  return String(tenancy.id || "") === String(a4.id || "");
});
assert.ok(a1Final, "A1 should still exist after editing A2");
assert.ok(a2Final, "A2 should still exist after editing A2");
assert.ok(a3Final, "A3 should still exist after editing A3");
assert.ok(a4Final, "A4 should still exist after editing A3");
assert.strictEqual(a1Final.companyName, "Tenant A1", "A1 should not be modified by editing A2");
assert.strictEqual(a1Final.notes, "A1 original", "A1 notes should not change when editing A2");
assert.strictEqual(a2Final.companyName, "Tenant A2", "A2 should not be modified by editing A3");
assert.strictEqual(a2Final.notes, "A2 original", "A2 notes should not change when editing A3");
assert.strictEqual(a3Final.companyName, "Tenant A3 Updated", "A3 update should be applied");
assert.strictEqual(a3Final.leaseEnd, "2032-03-02", "A3 lease end should be updated");
assert.strictEqual(a4Final.companyName, "Tenant A4", "A4 should not be modified by editing A3");
assert.strictEqual(a4Final.notes, "A4 original", "A4 notes should not change when editing A3");

// 11-12: Reload/normalize and verify all four tenancies persist.
const persistedAfterWorkflow = JSON.parse(ctx3.localStorage.getItem("buildingManagerBuildings"));
const ctx4 = createHarness(persistedAfterWorkflow);
const buildingAAfterReload = ctx4.window.BuildingStorage.getBuildingById("bld-workflow-a");
assert.strictEqual(buildingAAfterReload.tenancies.length, 4, "All four tenancies must survive reload/normalization");
assert.ok(buildingAAfterReload.tenancies.some(function (tenancy) { return String(tenancy.id || "") === String(a1.id || ""); }), "A1 missing after reload");
assert.ok(buildingAAfterReload.tenancies.some(function (tenancy) { return String(tenancy.id || "") === String(a2.id || ""); }), "A2 missing after reload");
assert.ok(buildingAAfterReload.tenancies.some(function (tenancy) { return String(tenancy.id || "") === String(a3.id || ""); }), "A3 missing after reload");
assert.ok(buildingAAfterReload.tenancies.some(function (tenancy) { return String(tenancy.id || "") === String(a4.id || ""); }), "A4 missing after reload");

const reloadedScheduleItems = ctx4.window.BuildingManagerSchedule.getSortedScheduleItems(buildingAAfterReload)
  .filter(function (item) {
    return item.sourceType === "tenancy" && item.tenancyEventType === "lease-expiry";
  });
assert.strictEqual(reloadedScheduleItems.length, 4, "All four tenancy schedule events must survive reload");
assert.strictEqual(
  reloadedScheduleItems.map(function (item) { return item.tenancyId; }).sort().join("|"),
  [a1.id, a2.id, a3.id, a4.id].sort().join("|"),
  "Schedule events must remain associated with the correct tenancy IDs"
);

const buildingBAfterWorkflow = ctx4.window.BuildingStorage.getBuildingById("bld-workflow-b");
assert.strictEqual(buildingBAfterWorkflow.tenancies.length, 1, "Building B should remain isolated");
assert.strictEqual(buildingBAfterWorkflow.tenancies[0].companyName, "Beta Tenant", "Building B tenancy should remain unchanged");

// TEST 4: Legacy + tenancy-linked duplicate lease expiry is upgraded into one tenancy event item.
const api4 = ctx4.window.BuildingManagerSchedule;
const duplicateSourceBuilding = {
  id: "bld-dup-eit",
  buildingName: "Ford Onekawa",
  streetAddress: "44 Onekawa Road",
  city: "Napier",
  status: "Occupied",
  tenancy: makeTenancy("t-eit", "EIT", "2030-08-07"),
  tenancies: [
    makeTenancy("t-eit", "EIT", "2030-08-07"),
  ],
  propertyTemplates: [],
  scheduleItems: [
    {
      id: "legacy-lease-eit",
      propertyId: "bld-dup-eit",
      taskName: "Lease Expiry \u2014 EIT",
      category: "Tenancy",
      dueDate: "2030-08-07",
      frequency: "One-off",
      preferredCompanyId: "company-legacy",
      preferredCompany: "Legacy Service Co",
      preferredContactId: "contact-legacy",
      notes: "legacy metadata",
      lastCompletedDate: "2029-08-07",
      lastCompletionHistoryId: "hist-legacy-eit",
      createdDate: "2026-01-01T00:00:00.000Z",
      lastUpdated: "2026-01-01T00:00:00.000Z",
    },
    {
      id: "tenancy-event-t-eit-lease-expiry",
      sourceType: "tenancy",
      tenancyId: "t-eit",
      tenancyEventType: "lease-expiry",
      propertyId: "bld-dup-eit",
      taskName: "Lease Expiry \u2014 EIT",
      category: "Tenancy",
      dueDate: "2030-08-07",
      frequency: "One-off",
      preferredCompanyId: "",
      preferredCompany: "",
      preferredContactId: "",
      notes: "",
      createdDate: "2026-02-01T00:00:00.000Z",
      lastUpdated: "2026-02-01T00:00:00.000Z",
    },
  ],
  historyRecords: [
    {
      id: "hist-legacy-eit",
      scheduleItemId: "legacy-lease-eit",
      tenancyId: "t-eit",
      tenancyEventType: "lease-expiry",
      completedAt: "2029-08-07T00:00:00.000Z",
      completedDate: "2029-08-07",
      completedBy: "Tester",
      taskName: "Lease Expiry \u2014 EIT",
      notes: "done",
      previousDueDate: "2030-08-07",
      newDueDate: "2030-08-07",
      nextDueDate: "2030-08-07",
      revertedAt: "",
      revertedBy: "",
      createdDate: "2029-08-07T00:00:00.000Z",
    },
  ],
  documents: [],
  createdDate: "2026-01-01T00:00:00.000Z",
  lastUpdated: "2026-01-01T00:00:00.000Z",
};

const dedupedItems = api4.getSortedScheduleItems(duplicateSourceBuilding).filter(function (item) {
  return item.tenancyEventType === "lease-expiry" && item.tenancyId === "t-eit";
});
assert.strictEqual(dedupedItems.length, 1, "Expected one EIT lease expiry after normalization");
assert.strictEqual(dedupedItems[0].sourceType, "tenancy", "Lease expiry should be tenancy-associated");
assert.strictEqual(dedupedItems[0].dueDate, "2030-08-07", "Lease expiry due date should be preserved");
assert.strictEqual(dedupedItems[0].preferredCompanyId, "company-legacy", "Legacy metadata should be retained");
assert.strictEqual(dedupedItems[0].lastCompletionHistoryId, "hist-legacy-eit", "Completion link should be preserved");

const normalizedDupBuilding = api4.linkScheduleItemToContact(duplicateSourceBuilding, dedupedItems[0].id, "");
assert.ok(normalizedDupBuilding, "Expected normalized building payload for duplicate repair check");
const repairedLeaseItems = (normalizedDupBuilding.scheduleItems || []).filter(function (item) {
  return item.tenancyEventType === "lease-expiry" && item.tenancyId === "t-eit";
});
assert.strictEqual(repairedLeaseItems.length, 1, "Duplicate lease expiry should be removed from authoritative schedule collection");
assert.strictEqual(normalizedDupBuilding.historyRecords[0].scheduleItemId, repairedLeaseItems[0].id, "History should point to retained schedule item id");

// TEST 5: Two tenancies each keep exactly one lease expiry across repeated normalization/edit cycles.
const idempotentBuilding = {
  id: "bld-idempotent",
  buildingName: "Idempotent Tower",
  streetAddress: "55 Stable Street",
  city: "Auckland",
  status: "Occupied",
  tenancy: makeTenancy("t-panpac", "Pan Pac forestry ltd", "2029-08-11"),
  tenancies: [
    makeTenancy("t-panpac", "Pan Pac forestry ltd", "2029-08-11"),
    makeTenancy("t-eit-2", "EIT", "2030-08-07"),
  ],
  propertyTemplates: [],
  scheduleItems: [
    {
      id: "legacy-panpac",
      propertyId: "bld-idempotent",
      taskName: "Lease Expiry \u2014 Pan Pac forestry ltd",
      category: "Tenancy",
      dueDate: "2029-08-11",
      frequency: "One-off",
      createdDate: "2026-01-01T00:00:00.000Z",
      lastUpdated: "2026-01-01T00:00:00.000Z",
    },
    {
      id: "legacy-eit2",
      propertyId: "bld-idempotent",
      taskName: "Lease Expiry \u2014 EIT",
      category: "Tenancy",
      dueDate: "2030-08-07",
      frequency: "One-off",
      createdDate: "2026-01-01T00:00:00.000Z",
      lastUpdated: "2026-01-01T00:00:00.000Z",
    },
  ],
  historyRecords: [],
  documents: [],
  createdDate: "2026-01-01T00:00:00.000Z",
  lastUpdated: "2026-01-01T00:00:00.000Z",
};

let idempotentState = { ...idempotentBuilding };
for (let i = 0; i < 6; i += 1) {
  const normalizedItems = api4.getSortedScheduleItems(idempotentState);
  const leaseExpiryItems = normalizedItems.filter(function (item) {
    return item.tenancyEventType === "lease-expiry";
  });

  const byTenancy = leaseExpiryItems.reduce(function (acc, item) {
    acc[item.tenancyId] = (acc[item.tenancyId] || 0) + 1;
    return acc;
  }, {});

  assert.strictEqual(byTenancy["t-panpac"], 1, "Pan Pac should have exactly one lease expiry event");
  assert.strictEqual(byTenancy["t-eit-2"], 1, "EIT should have exactly one lease expiry event");

  idempotentState = {
    ...idempotentState,
    scheduleItems: normalizedItems,
  };

  if (i === 2) {
    idempotentState = {
      ...idempotentState,
      tenancies: idempotentState.tenancies.map(function (tenancy) {
        if (tenancy.id !== "t-eit-2") {
          return tenancy;
        }
        return {
          ...tenancy,
          leaseEnd: "2031-08-07",
        };
      }),
    };
  }
}

const isolatedBuildingBItems = api4.getSortedScheduleItems(buildingBForWorkflow).filter(function (item) {
  return item.tenancyEventType === "lease-expiry";
});
assert.strictEqual(isolatedBuildingBItems.length, 1, "Building B should remain isolated from Building A normalization cycles");

console.log("multi-tenancy foundation regression test passed");
