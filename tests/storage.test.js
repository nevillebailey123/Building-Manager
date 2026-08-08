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

const backup = harness.context.window.BuildingStorage.createBackupPayload();
assert.strictEqual(backup.backupVersion, 1);
assert.ok(typeof backup.createdAt === "string" && backup.createdAt.length > 0);
assert.strictEqual(backup.buildingManagerBuildings[0].id, "building-1");
assert.strictEqual(JSON.stringify(backup.buildingManagerMasterData), JSON.stringify({
  companies: [],
  contacts: [],
  scheduledItemTemplates: [],
  documents: [],
}));

const restoreOutcome = harness.context.window.BuildingStorage.restoreBackupData(backup);
assert.strictEqual(restoreOutcome.success, true);
assert.strictEqual(harness.localStorage.getItem("buildingManagerBuildings"), JSON.stringify(backup.buildingManagerBuildings));

const invalidPayload = { ...backup, backupVersion: 2 };
const invalidOutcome = harness.context.window.BuildingStorage.restoreBackupData(invalidPayload);
assert.strictEqual(invalidOutcome.success, false);
assert.strictEqual(harness.localStorage.getItem("buildingManagerBuildings"), JSON.stringify(backup.buildingManagerBuildings));

console.log("storage regression test passed");
