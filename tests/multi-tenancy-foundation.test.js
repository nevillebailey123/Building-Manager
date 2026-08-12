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
    constructor() {
      this.values = {};
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

console.log("multi-tenancy foundation regression test passed");
