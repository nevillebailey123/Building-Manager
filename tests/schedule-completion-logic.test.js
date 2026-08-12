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
    constructor(form) {
      this.form = form;
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
  context.completeTaskForm = new FakeFormElement("completeTaskForm");
  context.completeTaskForm.elements = {
    companyUsed: new FakeElement("companyUsed", "SELECT"),
    contactUsed: new FakeElement("contactUsed", "SELECT"),
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

function buildScheduleBuilding(config) {
  const now = "2026-01-01T00:00:00.000Z";
  return {
    id: config.id,
    buildingName: config.name || "Test Building",
    propertyTemplates: [{
      id: config.templateId,
      masterTemplateId: "",
      propertyId: config.id,
      name: config.taskName,
      category: config.category || "General",
      defaultFrequency: config.frequency,
      initialDueDate: config.initialDueDate,
      nextDueDate: config.dueDate,
      defaultReminderPeriod: "",
      suggestedDocuments: [],
      defaultNotes: "",
      preferredCompanyId: "",
      preferredContactId: "",
      attachments: [],
      customRecurringDates: config.customRecurringDates || [],
      active: "Yes",
      createdDate: now,
      lastUpdated: now,
    }],
    scheduleItems: [{
      id: config.itemId,
      propertyTemplateId: config.templateId,
      templateId: config.templateId,
      propertyId: config.id,
      taskName: config.taskName,
      category: config.category || "General",
      dueDate: config.dueDate,
      initialDueDate: config.initialDueDate,
      frequency: config.frequency,
      preferredCompany: "",
      preferredCompanyId: "",
      preferredContactId: "",
      notes: "",
      lastCompletedDate: "",
      lastCompletionHistoryId: "",
      status: "Future",
      createdDate: now,
      lastUpdated: now,
    }],
    historyRecords: [],
  };
}

function completeOnce(api, building, completedDate) {
  const scheduleItem = building.scheduleItems[0];
  return api.applyTemplateCompletion(building, scheduleItem, {
    completedAt: `${completedDate}T10:00:00.000Z`,
    completedBy: "Tester",
    notes: "Completed occurrence",
  });
}

const context = createAppHarness();
const api = context.window.BuildingManagerSchedule;
assert.ok(api);
assert.strictEqual(typeof api.applyTemplateCompletion, "function");
assert.strictEqual(typeof api.getNextDueDatePlaceholder, "function");
assert.strictEqual(typeof api.getSortedScheduleItems, "function");

// TEST A: Annual item stays visible and advances one cycle from due date.
let annual = buildScheduleBuilding({
  id: "b-annual",
  templateId: "t-annual",
  itemId: "i-annual",
  taskName: "Annual Gutter Cleaning",
  frequency: "Annual",
  dueDate: "2026-08-09",
  initialDueDate: "2026-08-09",
});
annual = completeOnce(api, annual, "2026-08-09");
assert.strictEqual(annual.scheduleItems[0].dueDate, "2027-08-09");
assert.strictEqual(annual.scheduleItems[0].lastCompletedDate, "2026-08-09");
assert.strictEqual(annual.historyRecords.length, 1);
assert.strictEqual(annual.historyRecords[0].scheduleItemId, "i-annual");
assert.notStrictEqual(annual.scheduleItems[0].status, "Completed");

// TEST B: Monthly progression.
let monthly = buildScheduleBuilding({
  id: "b-monthly",
  templateId: "t-monthly",
  itemId: "i-monthly",
  taskName: "Rates",
  frequency: "Monthly",
  dueDate: "2026-08-15",
  initialDueDate: "2026-08-15",
});
monthly = completeOnce(api, monthly, "2026-08-15");
assert.strictEqual(monthly.scheduleItems[0].dueDate, "2026-09-15");

// TEST B2: Quarterly progression.
let quarterly = buildScheduleBuilding({
  id: "b-quarterly",
  templateId: "t-quarterly",
  itemId: "i-quarterly",
  taskName: "Quarterly Inspection",
  frequency: "Quarterly",
  dueDate: "2026-08-03",
  initialDueDate: "2026-08-03",
});
quarterly = completeOnce(api, quarterly, "2026-08-03");
assert.strictEqual(quarterly.scheduleItems[0].dueDate, "2026-11-03");

// TEST C: Two custom dates roll continuously.
let customTwo = buildScheduleBuilding({
  id: "b-custom-two",
  templateId: "t-custom-two",
  itemId: "i-custom-two",
  taskName: "Biannual Compliance",
  frequency: "Custom",
  dueDate: "2026-03-15",
  initialDueDate: "2026-03-15",
  customRecurringDates: [{ day: 15, month: 3 }, { day: 15, month: 9 }],
});
customTwo = completeOnce(api, customTwo, "2026-03-15");
assert.strictEqual(customTwo.scheduleItems[0].dueDate, "2026-09-15");
customTwo = completeOnce(api, customTwo, "2026-09-15");
assert.strictEqual(customTwo.scheduleItems[0].dueDate, "2027-03-15");
customTwo = completeOnce(api, customTwo, "2027-03-15");
assert.strictEqual(customTwo.scheduleItems[0].dueDate, "2027-09-15");
assert.strictEqual(customTwo.historyRecords.length, 3);

// TEST D: Multiple custom dates roll in chronological annual order.
let customMany = buildScheduleBuilding({
  id: "b-custom-many",
  templateId: "t-custom-many",
  itemId: "i-custom-many",
  taskName: "Quarterly Custom",
  frequency: "Custom",
  dueDate: "2026-03-01",
  initialDueDate: "2026-03-01",
  customRecurringDates: [
    { day: 1, month: 12 },
    { day: 1, month: 9 },
    { day: 1, month: 6 },
    { day: 1, month: 3 },
  ],
});
customMany = completeOnce(api, customMany, "2026-03-01");
assert.strictEqual(customMany.scheduleItems[0].dueDate, "2026-06-01");
customMany = completeOnce(api, customMany, "2026-06-01");
assert.strictEqual(customMany.scheduleItems[0].dueDate, "2026-09-01");
customMany = completeOnce(api, customMany, "2026-09-01");
assert.strictEqual(customMany.scheduleItems[0].dueDate, "2026-12-01");
customMany = completeOnce(api, customMany, "2026-12-01");
assert.strictEqual(customMany.scheduleItems[0].dueDate, "2027-03-01");

// TEST E: Early completion should not drift annual cycle.
let early = buildScheduleBuilding({
  id: "b-early",
  templateId: "t-early",
  itemId: "i-early",
  taskName: "Building Insurance",
  frequency: "Annual",
  dueDate: "2026-08-20",
  initialDueDate: "2026-08-20",
});
early = completeOnce(api, early, "2026-08-15");
assert.strictEqual(early.scheduleItems[0].dueDate, "2027-08-20");

// TEST F: Overdue completion should preserve cycle anchor.
let overdue = buildScheduleBuilding({
  id: "b-overdue",
  templateId: "t-overdue",
  itemId: "i-overdue",
  taskName: "Annual Inspection",
  frequency: "Annual",
  dueDate: "2026-07-20",
  initialDueDate: "2026-07-20",
});
overdue = completeOnce(api, overdue, "2026-08-10");
assert.strictEqual(overdue.scheduleItems[0].dueDate, "2027-07-20");

// TEST G: Sorted active list includes all active items and persists after save/reload.
const mixed = {
  id: "b-mixed",
  buildingName: "Mixed Building",
  propertyTemplates: [
    buildScheduleBuilding({ id: "x", templateId: "pt1", itemId: "si1", taskName: "Rates", frequency: "Monthly", dueDate: "2026-08-20", initialDueDate: "2026-08-20" }).propertyTemplates[0],
    buildScheduleBuilding({ id: "x", templateId: "pt2", itemId: "si2", taskName: "Gutter Cleaning", frequency: "Annual", dueDate: "2026-08-25", initialDueDate: "2026-08-25" }).propertyTemplates[0],
    buildScheduleBuilding({ id: "x", templateId: "pt3", itemId: "si3", taskName: "Building Insurance", frequency: "Annual", dueDate: "2026-09-10", initialDueDate: "2026-09-10" }).propertyTemplates[0],
    buildScheduleBuilding({ id: "x", templateId: "pt4", itemId: "si4", taskName: "Tax Return", frequency: "Annual", dueDate: "2026-09-30", initialDueDate: "2026-09-30" }).propertyTemplates[0],
  ],
  scheduleItems: [
    buildScheduleBuilding({ id: "x", templateId: "pt1", itemId: "si1", taskName: "Rates", frequency: "Monthly", dueDate: "2026-08-20", initialDueDate: "2026-08-20" }).scheduleItems[0],
    buildScheduleBuilding({ id: "x", templateId: "pt2", itemId: "si2", taskName: "Gutter Cleaning", frequency: "Annual", dueDate: "2026-08-25", initialDueDate: "2026-08-25" }).scheduleItems[0],
    buildScheduleBuilding({ id: "x", templateId: "pt3", itemId: "si3", taskName: "Building Insurance", frequency: "Annual", dueDate: "2026-09-10", initialDueDate: "2026-09-10" }).scheduleItems[0],
    buildScheduleBuilding({ id: "x", templateId: "pt4", itemId: "si4", taskName: "Tax Return", frequency: "Annual", dueDate: "2026-09-30", initialDueDate: "2026-09-30" }).scheduleItems[0],
  ],
  historyRecords: [],
};

let mixedUpdated = api.applyTemplateCompletion(mixed, mixed.scheduleItems[1], {
  completedAt: "2026-08-25T09:00:00.000Z",
  completedBy: "Tester",
  notes: "Completed gutter cleaning",
});

const sortedAfterCompletion = api.getSortedScheduleItems(mixedUpdated).map(function (item) {
  return `${item.taskName}:${item.dueDate}`;
});
assert.strictEqual(sortedAfterCompletion.length, 4);
assert.deepStrictEqual(sortedAfterCompletion, [
  "Rates:2026-08-20",
  "Building Insurance:2026-09-10",
  "Tax Return:2026-09-30",
  "Gutter Cleaning:2027-08-25",
]);

context.window.BuildingStorage.addBuilding(mixedUpdated);
const reloaded = context.window.BuildingStorage.getBuildingById("b-mixed");
assert.ok(reloaded);
assert.strictEqual(reloaded.scheduleItems.length, 4);
assert.strictEqual((reloaded.historyRecords || []).length, 1);

console.log("schedule completion logic regression test passed");
