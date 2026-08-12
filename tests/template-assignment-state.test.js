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

function createAppHarness() {
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
      return Object.prototype.hasOwnProperty.call(this.values, key) ? this.values[key] : "";
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

function makeMasterTemplate(id, name) {
  const now = "2026-01-01T00:00:00.000Z";
  return {
    id,
    name,
    description: "",
    category: "General",
    defaultFrequency: "Annual",
    nextDueDate: "2026-08-20",
    defaultReminderPeriod: "",
    suggestedDocuments: [],
    defaultNotes: "",
    customRecurringDates: [],
    active: "Yes",
    defaultChecked: false,
    createdDate: now,
    lastUpdated: now,
  };
}

function makeBuilding(id, name) {
  const now = "2026-01-01T00:00:00.000Z";
  return {
    id,
    buildingName: name,
    propertyTemplates: [],
    scheduleItems: [],
    historyRecords: [],
    documents: [],
    createdDate: now,
    lastUpdated: now,
  };
}

const context = createAppHarness();
const api = context.window.BuildingManagerSchedule;
assert.ok(api);
assert.strictEqual(typeof api.getAssignedMasterTemplateIdsForBuilding, "function");
assert.strictEqual(typeof api.addMasterTemplatesToBuilding, "function");

const masterData = context.window.BuildingStorage.getMasterData();
masterData.scheduledItemTemplates = [
  makeMasterTemplate("m-1", "Annual Gutter Cleaning"),
  makeMasterTemplate("m-2", "Building Insurance Renewal"),
  makeMasterTemplate("m-3", "Rates"),
];
context.window.BuildingStorage.saveMasterData(masterData);

const buildingA = makeBuilding("b-a", "Property A");
const buildingB = makeBuilding("b-b", "Property B");
context.window.BuildingStorage.addBuilding(buildingA);
context.window.BuildingStorage.addBuilding(buildingB);

let reloadedA = context.window.BuildingStorage.getBuildingById("b-a");
assert.deepStrictEqual(Array.from(api.getAssignedMasterTemplateIdsForBuilding(reloadedA)), []);

// Simulate legacy/incorrect link: property template exists but schedule item is missing.
reloadedA.propertyTemplates.push({
  id: "pt-ghost",
  masterTemplateId: "m-1",
  propertyId: "b-a",
  name: "Annual Gutter Cleaning",
  category: "General",
  defaultFrequency: "Annual",
  initialDueDate: "2026-08-20",
  nextDueDate: "2026-08-20",
  defaultReminderPeriod: "",
  suggestedDocuments: [],
  defaultNotes: "",
  preferredCompanyId: "",
  preferredContactId: "",
  attachments: [],
  customRecurringDates: [],
  active: "No",
  createdDate: "2026-01-01T00:00:00.000Z",
  lastUpdated: "2026-01-01T00:00:00.000Z",
});
context.window.BuildingStorage.updateBuilding(reloadedA);
reloadedA = context.window.BuildingStorage.getBuildingById("b-a");
assert.deepStrictEqual(Array.from(api.getAssignedMasterTemplateIdsForBuilding(reloadedA)), []);

// Assign m-1 and m-2 to Property A. This must create/repair exactly those schedule items once.
let result = api.addMasterTemplatesToBuilding(reloadedA, ["m-1", "m-2"], [
  { templateId: "m-1", defaultFrequency: "Annual", initialDueDate: "2026-08-20", nextDueDate: "2026-08-20" },
  { templateId: "m-2", defaultFrequency: "Annual", initialDueDate: "2026-09-10", nextDueDate: "2026-09-10" },
]);
assert.ok(result && result.building);
context.window.BuildingStorage.updateBuilding(result.building);
reloadedA = context.window.BuildingStorage.getBuildingById("b-a");

const assignedAfterFirstUpdate = Array.from(api.getAssignedMasterTemplateIdsForBuilding(reloadedA)).sort();
assert.deepStrictEqual(assignedAfterFirstUpdate, ["m-1", "m-2"]);
assert.strictEqual(reloadedA.scheduleItems.length, 2);
assert.strictEqual(reloadedA.propertyTemplates.filter(function (t) { return t.masterTemplateId === "m-1"; }).length, 1);

// Re-assigning same templates must not duplicate schedule items.
result = api.addMasterTemplatesToBuilding(reloadedA, ["m-1", "m-2"], []);
assert.ok(result && result.building);
assert.strictEqual(result.building.scheduleItems.length, 2);

// Assign m-3 and verify Property B remains independent.
reloadedA = result.building;
result = api.addMasterTemplatesToBuilding(reloadedA, ["m-3"], [
  { templateId: "m-3", defaultFrequency: "Quarterly", initialDueDate: "2026-10-01", nextDueDate: "2026-10-01" },
]);
assert.ok(result && result.building);
context.window.BuildingStorage.updateBuilding(result.building);
reloadedA = context.window.BuildingStorage.getBuildingById("b-a");
const reloadedB = context.window.BuildingStorage.getBuildingById("b-b");

assert.strictEqual(reloadedA.scheduleItems.length, 3);
assert.deepStrictEqual(Array.from(api.getAssignedMasterTemplateIdsForBuilding(reloadedA)).sort(), ["m-1", "m-2", "m-3"]);
assert.deepStrictEqual(Array.from(api.getAssignedMasterTemplateIdsForBuilding(reloadedB)), []);
assert.strictEqual(reloadedB.scheduleItems.length, 0);

console.log("template assignment state regression test passed");
