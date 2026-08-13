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
    return Object.prototype.hasOwnProperty.call(this.attributes, name) ? this.attributes[name] : null;
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

function createHarness(buildings, contacts) {
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

  localStorage.setItem("buildingManagerBuildings", JSON.stringify(buildings));
  localStorage.setItem("buildingManagerMasterData", JSON.stringify({
    companies: [],
    contacts: contacts || [],
  }));

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

  vm.runInContext(fs.readFileSync("./storage.js", "utf8"), context);
  vm.runInContext(fs.readFileSync("./app.js", "utf8"), context);

  return context;
}

function makeTenancy(id, companyName, tradingName, contactRefs) {
  return {
    id,
    companyName,
    companyId: "",
    tradingName: tradingName || "",
    leaseStart: "2023-03-01",
    leaseEnd: "2028-10-06",
    rentReviewDate: "",
    rentReviewFrequency: "Annual",
    renewalDate: "",
    noticeDate: "",
    status: "Occupied",
    contacts: [],
    contactRefs: contactRefs || [],
    documents: [],
    lease: { notes: "", documents: [], versionHistory: [] },
    createdDate: "2026-01-01T00:00:00.000Z",
    lastUpdated: "2026-01-01T00:00:00.000Z",
  };
}

function makeBuilding(id, buildingName, tenancies) {
  return {
    id,
    buildingName,
    streetAddress: `${id} Test Street`,
    city: "Napier",
    status: "Occupied",
    tenancy: tenancies[0] || null,
    tenancies,
    tenancyHistory: [],
    propertyTemplates: [],
    scheduleItems: [],
    historyRecords: [],
    documents: [],
    createdDate: "2026-01-01T00:00:00.000Z",
    lastUpdated: "2026-01-01T00:00:00.000Z",
  };
}

function makeContact(id, name, mobile, email) {
  return {
    id,
    companyId: "",
    name,
    contactType: "Person",
    responsibility: "Locksmith",
    mobile,
    officePhone: "",
    email,
    preferredContactMethod: "Mobile",
    active: true,
    notes: "",
    createdDate: "2026-01-01T00:00:00.000Z",
    lastUpdated: "2026-01-01T00:00:00.000Z",
  };
}

const contactA = makeContact("contact-a", "Jim Beveridge", "027 833 3030", "admin@jimslocksmithnz.com");
const contactB = makeContact("contact-b", "Jane Smith", "0211234567", "jane@example.com");

// Building 1 owns tenancies A and B; Building 2 owns tenancy C.
const buildings = [
  makeBuilding("bld-1", "Ford Onekawa", [
    makeTenancy("ten-a", "EIT", "EIT Trading", ["contact-a"]),
    makeTenancy("ten-b", "Pan Pac Forestry", "", ["contact-a", "contact-b"]),
  ]),
  makeBuilding("bld-2", "Taradale Chambers", [
    makeTenancy("ten-c", "Acme Legal", "", []),
  ]),
];

const ctx = createHarness(buildings, [contactA, contactB]);
const masterDataBefore = ctx.localStorage.getItem("buildingManagerMasterData");

const tenancyDetailsList = ctx.document.getElementById("tenancy-details-list");
const tenancyTabCurrent = ctx.document.getElementById("tenancy-tab-current");
const tenancyFormTitle = ctx.document.getElementById("tenancy-form-title");
const tenancyForm = ctx.document.getElementById("tenancy-form");
const buildingSelectorList = ctx.document.getElementById("building-selector-list");

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

function fireClick(element, target) {
  const handlers = element.listeners.click || [];
  assert.ok(handlers.length > 0, `Expected a click handler on ${element.id}`);
  handlers[0]({ target: target || element, stopPropagation() {} });
}

function renderTenancyList() {
  fireClick(tenancyTabCurrent);
  return String(tenancyDetailsList.innerHTML || "");
}

function selectBuilding(buildingId) {
  const option = new FakeElement("", "BUTTON");
  option.setAttribute("data-building-id", buildingId);
  option.closest = function (selector) {
    return selector === ".selector-option" ? option : null;
  };
  fireClick(buildingSelectorList, option);
}

function tileFor(html, companyName) {
  const tiles = html.split("<article").slice(1);
  const match = tiles.find(function (tile) {
    return tile.includes(`<h4>${companyName}</h4>`);
  });
  assert.ok(match, `Could not find a tenancy tile for ${companyName}`);
  return match;
}

// 1-4: each tile shows its own parent building.
selectBuilding("bld-1");
const buildingOneHtml = renderTenancyList();
const tileA = tileFor(buildingOneHtml, "EIT");
const tileB = tileFor(buildingOneHtml, "Pan Pac Forestry");

assert.ok(tileA.includes("<strong>Building:</strong> Ford Onekawa"), "Tenancy A must show Building 1");
assert.ok(tileB.includes("<strong>Building:</strong> Ford Onekawa"), "Tenancy B must show Building 1");
assert.strictEqual(
  buildingOneHtml.includes("Taradale Chambers"),
  false,
  "Building 1 tiles must not show Building 2"
);
assert.ok(tileA.includes("<strong>Trading Name:</strong> EIT Trading"), "Trading name should show when present");
assert.strictEqual(
  tileB.includes("<strong>Trading Name:</strong>"),
  false,
  "Trading name row should be omitted when absent"
);
assert.ok(tileA.includes("<strong>Lease Start:</strong>"), "Tile should show lease start");
assert.ok(tileA.includes("<strong>Lease End:</strong>"), "Tile should show lease end");
assert.ok(tileA.includes("<strong>Status:</strong> Occupied"), "Tile should show status");

// 5-8: linked contact name, tel: link and mailto: link.
assert.ok(tileA.includes("Jim Beveridge"), "Tenancy A tile must show its linked contact name");
assert.ok(
  tileA.includes('href="tel:0278333030"'),
  "Phone must be a tel: link with punctuation stripped from the href"
);
assert.ok(tileA.includes("027 833 3030"), "Phone must be displayed as entered");
assert.ok(
  tileA.includes('href="mailto:admin@jimslocksmithnz.com"'),
  "Email must be a mailto: link"
);
assert.ok(tileA.includes("<strong>Contact</strong>"), "Single contact should use the singular heading");

// 13: multiple linked contacts render compactly, in relationship order.
assert.ok(tileB.includes("<strong>Contacts</strong>"), "Multiple contacts should use the plural heading");
assert.ok(tileB.includes("Jim Beveridge"), "Tenancy B should list its first linked contact");
assert.ok(tileB.includes("Jane Smith"), "Tenancy B should list its second linked contact");
assert.ok(tileB.includes('href="tel:0211234567"'), "Second contact should have its own tel: link");
assert.ok(tileB.includes('href="mailto:jane@example.com"'), "Second contact should have its own mailto: link");
assert.ok(
  tileB.indexOf("Jim Beveridge") < tileB.indexOf("Jane Smith"),
  "Contacts should follow the stored contactRefs order"
);

// 12: no linked contact.
selectBuilding("bld-2");
const buildingTwoHtml = renderTenancyList();
const tileC = tileFor(buildingTwoHtml, "Acme Legal");
assert.ok(tileC.includes("<strong>Building:</strong> Taradale Chambers"), "Tenancy C must show Building 2");
assert.ok(tileC.includes("<strong>Contact:</strong> Not set"), "Tenancy without contacts shows Contact: Not set");
assert.strictEqual(tileC.includes("href=\"tel:"), false, "No blank phone row when there is no contact");
assert.strictEqual(tileC.includes("href=\"mailto:"), false, "No blank email row when there is no contact");
assert.strictEqual(
  buildingTwoHtml.includes("Ford Onekawa"),
  false,
  "Building 2 tiles must not show Building 1"
);

// 9-11: tile click opens Edit Tenancy, phone/email clicks do not.
selectBuilding("bld-1");
renderTenancyList();

function clickTileTarget(className, tenancyId) {
  const tile = new FakeElement("", "ARTICLE");
  tile.setAttribute("data-tenancy-list-action", "edit");
  tile.setAttribute("data-tenancy-id", tenancyId);

  const link = new FakeElement("", "A");
  link.className = className;
  link.closest = function (selector) {
    if (selector === `.${className}`) {
      return link;
    }
    if (selector === "[data-tenancy-list-action]") {
      return tile;
    }
    return null;
  };

  fireClick(tenancyDetailsList, link);
}

tenancyFormTitle.textContent = "";
clickTileTarget("contact-phone-link", "ten-a");
assert.strictEqual(tenancyFormTitle.textContent, "", "Clicking the phone link must not open Edit Tenancy");

tenancyFormTitle.textContent = "";
clickTileTarget("contact-email-link", "ten-a");
assert.strictEqual(tenancyFormTitle.textContent, "", "Clicking the email link must not open Edit Tenancy");

const tileTarget = new FakeElement("", "ARTICLE");
tileTarget.setAttribute("data-tenancy-list-action", "edit");
tileTarget.setAttribute("data-tenancy-id", "ten-b");
fireClick(tenancyDetailsList, tileTarget);
assert.strictEqual(tenancyFormTitle.textContent, "Edit Tenancy", "Clicking the tile must open Edit Tenancy");
assert.strictEqual(tenancyForm.elements.tenancyId.value, "ten-b", "Edit Tenancy must open the clicked tenancy");

// 14 + contact data safety: reload and confirm master contacts were never touched.
assert.strictEqual(
  ctx.localStorage.getItem("buildingManagerMasterData"),
  masterDataBefore,
  "Rendering tenancy tiles must not modify the master Contacts collection"
);

const reloaded = createHarness(
  JSON.parse(ctx.localStorage.getItem("buildingManagerBuildings")),
  JSON.parse(ctx.localStorage.getItem("buildingManagerMasterData")).contacts
);
const reloadedList = reloaded.document.getElementById("tenancy-details-list");
const reloadedTab = reloaded.document.getElementById("tenancy-tab-current");
(reloadedTab.listeners.click || [])[0]({ target: reloadedTab });
const reloadedHtml = String(reloadedList.innerHTML || "");
assert.ok(reloadedHtml.includes("<strong>Building:</strong> Ford Onekawa"), "Building must still render after reload");
assert.ok(reloadedHtml.includes('href="tel:0278333030"'), "Contact phone link must still render after reload");
assert.ok(reloadedHtml.includes('href="mailto:admin@jimslocksmithnz.com"'), "Contact email link must still render after reload");
assert.strictEqual(
  reloaded.window.BuildingStorage.getMasterData().contacts.length,
  2,
  "Both master contacts must still exist after reload"
);

console.log("tenancy tile display regression test passed");
