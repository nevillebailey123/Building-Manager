(function () {
  "use strict";

  const DATABASE_NAME = "ComplianceHQ";
  const DATABASE_VERSION = 1;

  const STORES = {
    buildings: "buildings",
    masterData: "masterData",
    metadata: "metadata",
  };

  function requestToPromise(request) {
    return new Promise(function (resolve, reject) {
      request.onsuccess = function () {
        resolve(request.result);
      };

      request.onerror = function () {
        reject(request.error || new Error("IndexedDB request failed."));
      };
    });
  }

  function transactionToPromise(transaction) {
    return new Promise(function (resolve, reject) {
      transaction.oncomplete = function () {
        resolve();
      };

      transaction.onerror = function () {
        reject(transaction.error || new Error("IndexedDB transaction failed."));
      };

      transaction.onabort = function () {
        reject(transaction.error || new Error("IndexedDB transaction was aborted."));
      };
    });
  }

  function openDatabase() {
    return new Promise(function (resolve, reject) {
      if (!window.indexedDB) {
        reject(new Error("IndexedDB is not available in this browser."));
        return;
      }

      const request = window.indexedDB.open(DATABASE_NAME, DATABASE_VERSION);

      request.onupgradeneeded = function () {
        const database = request.result;

        if (!database.objectStoreNames.contains(STORES.buildings)) {
          database.createObjectStore(STORES.buildings, { keyPath: "id" });
        }

        if (!database.objectStoreNames.contains(STORES.masterData)) {
          database.createObjectStore(STORES.masterData);
        }

        if (!database.objectStoreNames.contains(STORES.metadata)) {
          database.createObjectStore(STORES.metadata);
        }
      };

      request.onsuccess = function () {
        resolve(request.result);
      };

      request.onerror = function () {
        reject(request.error || new Error("Unable to open Compliance HQ database."));
      };

      request.onblocked = function () {
        console.warn("Compliance HQ IndexedDB upgrade is blocked by another open tab.");
      };
    });
  }

  async function getAllBuildings() {
    const database = await openDatabase();

    try {
      const transaction = database.transaction(STORES.buildings, "readonly");
      const store = transaction.objectStore(STORES.buildings);
      return await requestToPromise(store.getAll());
    } finally {
      database.close();
    }
  }

  async function getBuildingById(buildingId) {
    const database = await openDatabase();

    try {
      const transaction = database.transaction(STORES.buildings, "readonly");
      const store = transaction.objectStore(STORES.buildings);
      return await requestToPromise(store.get(buildingId)) || null;
    } finally {
      database.close();
    }
  }

  async function replaceBuildings(buildings) {
    const database = await openDatabase();

    try {
      const transaction = database.transaction(STORES.buildings, "readwrite");
      const store = transaction.objectStore(STORES.buildings);

      store.clear();

      (Array.isArray(buildings) ? buildings : []).forEach(function (building) {
        if (building && building.id) {
          store.put(building);
        }
      });

      await transactionToPromise(transaction);
    } finally {
      database.close();
    }
  }

  async function getMasterData() {
    const database = await openDatabase();

    try {
      const transaction = database.transaction(STORES.masterData, "readonly");
      const store = transaction.objectStore(STORES.masterData);
      const result = await requestToPromise(store.get("current"));
      return result || null;
    } finally {
      database.close();
    }
  }

  async function saveMasterData(masterData) {
    const database = await openDatabase();

    try {
      const transaction = database.transaction(STORES.masterData, "readwrite");
      transaction.objectStore(STORES.masterData).put(masterData, "current");
      await transactionToPromise(transaction);
    } finally {
      database.close();
    }
  }

  async function getMetadata(key) {
    const database = await openDatabase();

    try {
      const transaction = database.transaction(STORES.metadata, "readonly");
      return await requestToPromise(
        transaction.objectStore(STORES.metadata).get(key)
      );
    } finally {
      database.close();
    }
  }

  async function setMetadata(key, value) {
    const database = await openDatabase();

    try {
      const transaction = database.transaction(STORES.metadata, "readwrite");
      transaction.objectStore(STORES.metadata).put(value, key);
      await transactionToPromise(transaction);
    } finally {
      database.close();
    }
  }

  async function healthCheck() {
    const database = await openDatabase();

    try {
      return {
        success: true,
        databaseName: database.name,
        version: database.version,
        stores: Array.from(database.objectStoreNames),
      };
    } finally {
      database.close();
    }
  }

  window.ComplianceHQIndexedDB = {
    databaseName: DATABASE_NAME,
    databaseVersion: DATABASE_VERSION,
    stores: STORES,
    openDatabase,
    getAllBuildings,
    getBuildingById,
    replaceBuildings,
    getMasterData,
    saveMasterData,
    getMetadata,
    setMetadata,
    healthCheck,
  };
})();
