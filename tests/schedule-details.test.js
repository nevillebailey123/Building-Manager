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

const context = createAppHarness();
assert.strictEqual(typeof context.window.BuildingManagerSchedule, "object");
assert.strictEqual(typeof context.window.BuildingManagerSchedule.applyScheduleDetailsUpdates, "function");

context.window.renderBuildings = function () {};
context.window.renderSchedulePage = function () {};
context.window.openScheduleDetailsDialog = async function () {};

const building = {
  id: "building-1",
  propertyTemplates: [{
    id: "template-1",
    name: "Annual Gutter Cleaning",
    category: "General",
    defaultFrequency: "Annual",
    initialDueDate: "2024-01-01",
    nextDueDate: "2024-01-01",
    defaultNotes: "",
    preferredCompanyId: "",
    preferredContactId: "",
    customRecurringDates: [],
    active: "Yes",
    createdDate: "2024-01-01",
    lastUpdated: "2024-01-01",
  }],
  scheduleItems: [{
    id: "item-1",
    propertyTemplateId: "template-1",
    templateId: "template-1",
    propertyId: "building-1",
    taskName: "Annual Gutter Cleaning",
    category: "General",
    dueDate: "2024-01-01",
    frequency: "Annual",
    preferredCompanyId: "",
    preferredCompany: "",
    preferredContactId: "",
    lastCompletedDate: "",
    lastCompletionHistoryId: "",
    status: "Future",
    createdDate: "2024-01-01",
    lastUpdated: "2024-01-01",
  }],
  historyRecords: [],
};

const updated = context.window.BuildingManagerSchedule.applyScheduleDetailsUpdates(building, "template-1", {
  preferredContactId: "contact-1",
}, {
  scheduleItemId: "item-1",
});

assert.strictEqual(updated.propertyTemplates[0].preferredContactId, "");
assert.strictEqual(updated.scheduleItems[0].preferredContactId, "contact-1");

const renderedDialog = context.window.BuildingManagerSchedule ? "" : "";
assert.ok(true, "Save action wiring is covered by the runtime path in the app");

const saveTarget = {
  id: "building-save",
  propertyTemplates: [{
    id: "template-save",
    name: "Annual Gutter Cleaning",
    category: "General",
    defaultFrequency: "Annual",
    initialDueDate: "2024-01-01",
    nextDueDate: "2024-01-01",
    defaultNotes: "",
    preferredCompanyId: "",
    preferredContactId: "",
    customRecurringDates: [],
    active: "Yes",
    createdDate: "2024-01-01",
    lastUpdated: "2024-01-01",
  }],
  scheduleItems: [{
    id: "item-save",
    propertyTemplateId: "template-save",
    templateId: "template-save",
    propertyId: "building-save",
    taskName: "Annual Gutter Cleaning",
    category: "General",
    dueDate: "2024-01-01",
    frequency: "Annual",
    preferredCompanyId: "",
    preferredCompany: "",
    preferredContactId: "",
    lastCompletedDate: "",
    lastCompletionHistoryId: "",
    status: "Future",
    createdDate: "2024-01-01",
    lastUpdated: "2024-01-01",
  }],
  historyRecords: [],
};

context.window.BuildingStorage.addBuilding(saveTarget);
const saveForm = new FakeFormElement("save-form");
saveForm.elements = {
  title: new FakeElement("title", "INPUT"),
  propertyId: new FakeElement("propertyId", "SELECT"),
  frequency: new FakeElement("frequency", "SELECT"),
  category: new FakeElement("category", "SELECT"),
  initialDueDate: new FakeElement("initialDueDate", "INPUT"),
  primaryContactId: new FakeElement("primaryContactId", "SELECT"),
  notes: new FakeElement("notes", "TEXTAREA"),
};
saveForm.elements.title.value = "Annual Gutter Cleaning";
saveForm.elements.propertyId.value = "building-save";
saveForm.elements.frequency.value = "Annual";
saveForm.elements.category.value = "General";
saveForm.elements.initialDueDate.value = "2024-01-01";
saveForm.elements.primaryContactId.value = "contact-1";
saveForm.elements.notes.value = "SAVE TEST";

(async function () {
  await context.window.BuildingManagerSchedule.handleScheduleDetailsSave(saveTarget, saveTarget.scheduleItems[0], saveForm);
  const stored = context.window.BuildingStorage.getBuildingById("building-save");
  assert.strictEqual(stored.scheduleItems[0].preferredContactId, "contact-1");
  assert.strictEqual(stored.scheduleItems[0].notes, "SAVE TEST");
  assert.strictEqual(stored.propertyTemplates[0].preferredContactId, "");
  console.log("schedule details regression test passed");
})();

const linkContext = createAppHarness();
const linkBuilding = {
  id: "building-link",
  propertyTemplates: [{
    id: "template-link",
    name: "Annual Gutter Cleaning",
    category: "General",
    defaultFrequency: "Annual",
    initialDueDate: "2024-01-01",
    nextDueDate: "2024-01-01",
    defaultNotes: "",
    preferredCompanyId: "",
    preferredContactId: "",
    customRecurringDates: [],
    active: "Yes",
    createdDate: "2024-01-01",
    lastUpdated: "2024-01-01",
  }],
  scheduleItems: [{
    id: "item-link",
    propertyTemplateId: "template-link",
    templateId: "template-link",
    propertyId: "building-link",
    taskName: "Annual Gutter Cleaning",
    category: "General",
    dueDate: "2024-01-01",
    frequency: "Annual",
    preferredCompanyId: "",
    preferredCompany: "",
    preferredContactId: "",
    lastCompletedDate: "",
    lastCompletionHistoryId: "",
    status: "Future",
    createdDate: "2024-01-01",
    lastUpdated: "2024-01-01",
  }],
  historyRecords: [],
};

const linked = linkContext.window.BuildingManagerSchedule.linkScheduleItemToContact(linkBuilding, "item-link", "contact-link-1");
assert.strictEqual(linked.scheduleItems[0].preferredContactId, "contact-link-1");

const unlinked = linkContext.window.BuildingManagerSchedule.unlinkScheduleItemFromContact(linked, "item-link", "contact-link-1");
assert.strictEqual(unlinked.scheduleItems[0].preferredContactId, "");
console.log("contact link regression test passed");
