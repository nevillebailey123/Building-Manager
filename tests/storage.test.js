const assert = require("assert");
const fs = require("fs");
const vm = require("vm");

const storageSource = fs.readFileSync("./storage.js", "utf8");

function createStorageHarness(initialValue) {
  const store = new Map();
  const localStorage = {
    getItem(key) {
      return store.has(key) ? store.get(key) : null;
    },
    setItem(key, value) {
      store.set(key, String(value));
    },
    removeItem(key) {
      store.delete(key);
    },
    clear() {
      store.clear();
    },
  };

  if (initialValue !== undefined) {
    localStorage.setItem("buildingManagerBuildings", JSON.stringify(initialValue));
  }

  const context = {
    window: {},
    localStorage,
    console,
    crypto: undefined,
    Date,
  };
  context.window = context;
  vm.createContext(context);
  vm.runInContext(storageSource, context);

  return {
    context,
    localStorage,
  };
}

const harness = createStorageHarness({ buildings: [{ id: "building-1", buildingName: "Legacy Building" }] });
const buildings = harness.context.window.BuildingStorage.getBuildings();
assert.strictEqual(JSON.stringify(buildings), JSON.stringify([{ id: "building-1", buildingName: "Legacy Building" }]));
console.log("storage regression test passed");
