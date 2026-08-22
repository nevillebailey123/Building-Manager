(function () {
  const STORAGE_KEY = "buildingManagerBuildings";
  const MASTER_KEY = "buildingManagerMasterData";

  let cachedBuildings = null;
  let cachedMasterData = null;

  let supabaseSyncPromise = Promise.resolve();
  let supabaseSyncRequested = false;
  let supabaseSyncSuppressed = false;

  function setSupabaseSyncSuppressed(suppressed) {
    supabaseSyncSuppressed = suppressed === true;
  }

  function queueSupabaseSync() {
    if (supabaseSyncSuppressed) {
      return Promise.resolve({
        success: true,
        skipped: true,
        reason: "Supabase synchronization is temporarily suppressed.",
      });
    }

    if (
      !window.ComplianceHQSupabase
      || typeof window.ComplianceHQSupabase.syncCurrentApplicationData !== "function"
    ) {
      return Promise.resolve({
        success: false,
        skipped: true,
        reason: "Supabase synchronization is unavailable.",
      });
    }

    supabaseSyncRequested = true;

    supabaseSyncPromise = supabaseSyncPromise
      .catch(function () {
        // A previous failed sync must not permanently block the queue.
      })
      .then(async function () {
        let lastResult = null;

        while (supabaseSyncRequested) {
          supabaseSyncRequested = false;

          try {
            const session = await window.ComplianceHQSupabase.getSession();

            if (!session) {
              return {
                success: false,
                skipped: true,
                reason: "No authenticated Supabase session.",
              };
            }

            lastResult =
              await window.ComplianceHQSupabase.syncCurrentApplicationData();

            console.info(
              "Compliance HQ synchronized to Supabase:",
              lastResult.counts
            );
          } catch (error) {
            console.error("Supabase synchronization failed:", error);
            throw error;
          }
        }

        return lastResult || {
          success: true,
          skipped: true,
        };
      });

    return supabaseSyncPromise;
  }

  function mirrorToIndexedDB(operation, value) {
    if (!window.ComplianceHQIndexedDB || typeof window.ComplianceHQIndexedDB[operation] !== "function") {
      return Promise.resolve();
    }

    return Promise.resolve(window.ComplianceHQIndexedDB[operation](value)).catch(function (error) {
      console.error("IndexedDB mirror failed:", operation, error);
      throw error;
    });
  }

  function normalizeBuildings(value) {
    if (Array.isArray(value)) {
      return value;
    }

    if (value && typeof value === "object") {
      if (Array.isArray(value.buildings)) {
        return value.buildings;
      }

      if (Array.isArray(value.items)) {
        return value.items;
      }

      if (Array.isArray(value.data)) {
        return value.data;
      }
    }

    return [];
  }

  function getBuildings() {
    if (Array.isArray(cachedBuildings)) {
      return cachedBuildings;
    }

    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      cachedBuildings = [];
      return cachedBuildings;
    }

    try {
      const parsed = JSON.parse(raw);
      const normalized = normalizeBuildings(parsed);

      if (!Array.isArray(parsed) && parsed && typeof parsed === "object") {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(normalized));
      }

      cachedBuildings = normalized;
      return cachedBuildings;
    } catch (error) {
      cachedBuildings = [];
      return cachedBuildings;
    }
  }

  function saveBuildings(buildings) {
    const normalized = normalizeBuildings(buildings);
    cachedBuildings = normalized;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(normalized));

    const indexedDBMirror = mirrorToIndexedDB("replaceBuildings", normalized);

    queueSupabaseSync().catch(function () {
      // Local save remains successful if remote synchronization fails.
    });

    return indexedDBMirror;
  }

  function defaultMasterData() {
    return {
      companies: [],
      contacts: [],
      scheduledItemTemplates: [],
      documents: [],
    };
  }

  function getMasterData() {
    if (cachedMasterData) {
      return cachedMasterData;
    }

    const raw = localStorage.getItem(MASTER_KEY);
    if (!raw) {
      cachedMasterData = defaultMasterData();
      return cachedMasterData;
    }

    try {
      const parsed = JSON.parse(raw);
      cachedMasterData = {
        companies: Array.isArray(parsed.companies) ? parsed.companies : [],
        contacts: Array.isArray(parsed.contacts) ? parsed.contacts : [],
        scheduledItemTemplates: Array.isArray(parsed.scheduledItemTemplates) ? parsed.scheduledItemTemplates : [],
        documents: Array.isArray(parsed.documents) ? parsed.documents : [],
      };
      return cachedMasterData;
    } catch (error) {
      cachedMasterData = defaultMasterData();
      return cachedMasterData;
    }
  }

  function saveMasterData(masterData) {
    cachedMasterData = masterData;
    localStorage.setItem(MASTER_KEY, JSON.stringify(masterData));

    const indexedDBMirror = mirrorToIndexedDB("saveMasterData", masterData);

    queueSupabaseSync().catch(function () {
      // Local save remains successful if remote synchronization fails.
    });

    return indexedDBMirror;
  }

  async function initializeFromIndexedDB() {
    if (!window.ComplianceHQIndexedDB) {
      return {
        success: false,
        source: "localStorage",
        reason: "IndexedDB storage layer is unavailable.",
      };
    }

    try {
      const results = await Promise.all([
        window.ComplianceHQIndexedDB.getAllBuildings(),
        window.ComplianceHQIndexedDB.getMasterData(),
      ]);

      const indexedBuildings = results[0];
      const indexedMasterData = results[1];

      if (Array.isArray(indexedBuildings) && indexedBuildings.length > 0) {
        cachedBuildings = normalizeBuildings(indexedBuildings);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(cachedBuildings));
      }

      if (indexedMasterData && typeof indexedMasterData === "object") {
        cachedMasterData = {
          companies: Array.isArray(indexedMasterData.companies) ? indexedMasterData.companies : [],
          contacts: Array.isArray(indexedMasterData.contacts) ? indexedMasterData.contacts : [],
          scheduledItemTemplates: Array.isArray(indexedMasterData.scheduledItemTemplates) ? indexedMasterData.scheduledItemTemplates : [],
          documents: Array.isArray(indexedMasterData.documents) ? indexedMasterData.documents : [],
        };
        localStorage.setItem(MASTER_KEY, JSON.stringify(cachedMasterData));
      }

      return {
        success: true,
        source: "indexedDB",
        buildingCount: Array.isArray(cachedBuildings) ? cachedBuildings.length : 0,
      };
    } catch (error) {
      console.error("IndexedDB initialization failed:", error);
      return {
        success: false,
        source: "localStorage",
        reason: error && error.message ? error.message : "IndexedDB initialization failed.",
      };
    }
  }

  function syncToIndexedDB() {
    if (!window.ComplianceHQIndexedDB) {
      return Promise.resolve({
        success: false,
        reason: "IndexedDB storage layer is unavailable.",
      });
    }

    return Promise.all([
      window.ComplianceHQIndexedDB.replaceBuildings(getBuildings()),
      window.ComplianceHQIndexedDB.saveMasterData(getMasterData()),
    ]).then(function () {
      return {
        success: true,
      };
    }).catch(function (error) {
      console.error("IndexedDB startup sync failed:", error);
      return {
        success: false,
        reason: error && error.message ? error.message : "IndexedDB synchronization failed.",
      };
    });
  }

  function createBackupPayload() {
    return {
      backupVersion: 1,
      createdAt: new Date().toISOString(),
      buildingManagerBuildings: getBuildings(),
      buildingManagerMasterData: getMasterData(),
    };
  }

  function validateBackupData(payload) {
    if (!payload || typeof payload !== "object") {
      return {
        success: false,
        error: "The selected file is not a valid backup object.",
      };
    }

    if (payload.backupVersion !== 1) {
      return {
        success: false,
        error: "This backup file is not supported. Expected backupVersion 1.",
      };
    }

    if (!Array.isArray(payload.buildingManagerBuildings)) {
      return {
        success: false,
        error: "The backup file is missing the building data array.",
      };
    }

    if (!payload.buildingManagerMasterData || typeof payload.buildingManagerMasterData !== "object") {
      return {
        success: false,
        error: "The backup file is missing the master data object.",
      };
    }

    const masterData = payload.buildingManagerMasterData;
    const requiredKeys = ["companies", "contacts", "scheduledItemTemplates", "documents"];
    const invalidKey = requiredKeys.find(function (key) {
      return !Array.isArray(masterData[key]);
    });

    if (invalidKey) {
      return {
        success: false,
        error: "The backup file contains invalid master data fields.",
      };
    }

    return {
      success: true,
      data: {
        backupVersion: 1,
        createdAt: typeof payload.createdAt === "string" ? payload.createdAt : new Date().toISOString(),
        buildingManagerBuildings: payload.buildingManagerBuildings,
        buildingManagerMasterData: {
          companies: masterData.companies,
          contacts: masterData.contacts,
          scheduledItemTemplates: masterData.scheduledItemTemplates,
          documents: masterData.documents,
        },
      },
    };
  }

  function restoreBackupData(payload) {
    const validation = validateBackupData(payload);
    if (!validation.success) {
      return validation;
    }

    const buildingsPersistence = saveBuildings(validation.data.buildingManagerBuildings);
    const masterDataPersistence = saveMasterData(validation.data.buildingManagerMasterData);

    return {
      success: true,
      data: validation.data,
      persisted: Promise.all([
        buildingsPersistence,
        masterDataPersistence,
      ]),
    };
  }

  function createId() {
    if (window.crypto && typeof window.crypto.randomUUID === "function") {
      return window.crypto.randomUUID();
    }

    const randomPart = Math.random().toString(36).slice(2, 9);
    return "bld-" + Date.now() + "-" + randomPart;
  }

  function normalizeText(value) {
    return String(value || "").trim().toLowerCase();
  }

  function addBuilding(building) {
    const current = getBuildings();
    current.push(building);
    saveBuildings(current);
  }

  function updateBuilding(updatedBuilding) {
    const current = getBuildings();
    const next = current.map(function (building) {
      if (building.id === updatedBuilding.id) {
        return updatedBuilding;
      }
      return building;
    });

    return saveBuildings(next);
  }

  function deleteBuilding(buildingId) {
    const current = getBuildings();
    const next = current.filter(function (building) {
      return building.id !== buildingId;
    });

    saveBuildings(next);
  }

  function getBuildingById(buildingId) {
    const current = getBuildings();
    return current.find(function (building) {
      return building.id === buildingId;
    });
  }

  function upsertCompany(company) {
    const masterData = getMasterData();
    const exists = masterData.companies.some(function (existing) {
      return existing.id === company.id;
    });

    if (exists) {
      masterData.companies = masterData.companies.map(function (existing) {
        return existing.id === company.id ? company : existing;
      });
    } else {
      masterData.companies.push(company);
    }

    saveMasterData(masterData);
    return company;
  }

  function upsertContact(contact) {
    const masterData = getMasterData();
    const exists = masterData.contacts.some(function (existing) {
      return existing.id === contact.id;
    });

    if (exists) {
      masterData.contacts = masterData.contacts.map(function (existing) {
        return existing.id === contact.id ? contact : existing;
      });
    } else {
      masterData.contacts.push(contact);
    }

    saveMasterData(masterData);
    return contact;
  }

  function findCompanyByName(companies, name) {
    const target = normalizeText(name);
    return companies.find(function (company) {
      return normalizeText(company.name) === target;
    });
  }

  function findContactBySignature(contacts, companyId, name, email, mobile) {
    const normalizedName = normalizeText(name);
    const normalizedEmail = normalizeText(email);
    const normalizedMobile = normalizeText(mobile);

    return contacts.find(function (contact) {
      return contact.companyId === companyId
        && normalizeText(contact.name) === normalizedName
        && normalizeText(contact.email) === normalizedEmail
        && normalizeText(contact.mobile) === normalizedMobile;
    });
  }

  function migrateLegacyContactsToMaster() {
    const buildings = getBuildings();
    const masterData = getMasterData();
    let buildingsChanged = false;
    let masterChanged = false;

    const companies = masterData.companies.slice();
    const contacts = masterData.contacts.slice();

    const migratedBuildings = buildings.map(function (building) {
      if (!building.tenancy || !Array.isArray(building.tenancy.contacts) || building.tenancy.contacts.length === 0) {
        return building;
      }

      const nextRefs = Array.isArray(building.tenancy.contactRefs) ? building.tenancy.contactRefs.slice() : [];
      let changed = false;

      building.tenancy.contacts.forEach(function (legacyContact) {
        const fallbackCompanyName = building.tenancy.companyName || "Unassigned Company";
        const companyName = fallbackCompanyName;

        let company = findCompanyByName(companies, companyName);
        if (!company) {
          const now = new Date().toISOString();
          company = {
            id: createId(),
            name: companyName,
            type: "Tenant",
            address: "",
            phone: "",
            email: "",
            website: "",
            notes: "",
            createdDate: now,
            lastUpdated: now,
          };
          companies.push(company);
          masterChanged = true;
        }

        const responsibility = legacyContact.responsibility || legacyContact.role || "General";
        let contact = findContactBySignature(
          contacts,
          company.id,
          legacyContact.name,
          legacyContact.email,
          legacyContact.mobile
        );

        if (!contact) {
          const now = new Date().toISOString();
          contact = {
            id: legacyContact.id || createId(),
            companyId: company.id,
            name: legacyContact.name || "",
            contactType: legacyContact.contactType || "Other",
            responsibility: responsibility,
            mobile: legacyContact.mobile || "",
            officePhone: legacyContact.officePhone || "",
            email: legacyContact.email || "",
            preferredContactMethod: legacyContact.preferredContact || "Phone",
            active: legacyContact.active || "Yes",
            notes: legacyContact.notes || "",
            createdDate: legacyContact.createdDate || now,
            lastUpdated: now,
          };
          contacts.push(contact);
          masterChanged = true;
        }

        if (!nextRefs.includes(contact.id)) {
          nextRefs.push(contact.id);
          changed = true;
        }
      });

      if (!changed) {
        return building;
      }

      buildingsChanged = true;
      return {
        ...building,
        tenancy: {
          ...building.tenancy,
          contactRefs: nextRefs,
        },
      };
    });

    if (masterChanged) {
      saveMasterData({
        ...masterData,
        companies,
        contacts,
      });
    }

    if (buildingsChanged) {
      saveBuildings(migratedBuildings);
    }

    return {
      buildingsChanged,
      masterChanged,
    };
  }

  function loadExternalApplicationData(applicationData) {
    if (!applicationData || typeof applicationData !== "object") {
      throw new Error("External application data is invalid.");
    }

    const buildings = normalizeBuildings(applicationData.buildings);
    const suppliedMasterData = applicationData.masterData || {};

    const masterData = {
      companies: Array.isArray(suppliedMasterData.companies)
        ? suppliedMasterData.companies
        : [],
      contacts: Array.isArray(suppliedMasterData.contacts)
        ? suppliedMasterData.contacts
        : [],
      scheduledItemTemplates: Array.isArray(suppliedMasterData.scheduledItemTemplates)
        ? suppliedMasterData.scheduledItemTemplates
        : [],
      documents: Array.isArray(suppliedMasterData.documents)
        ? suppliedMasterData.documents
        : [],
    };

    cachedBuildings = buildings;
    cachedMasterData = masterData;

    localStorage.setItem(STORAGE_KEY, JSON.stringify(buildings));
    localStorage.setItem(MASTER_KEY, JSON.stringify(masterData));

    return {
      success: true,
      buildingCount: buildings.length,
      contactCount: masterData.contacts.length,
      companyCount: masterData.companies.length,
      templateCount: masterData.scheduledItemTemplates.length,
    };
  }

  window.BuildingStorage = {
    getBuildings,
    addBuilding,
    updateBuilding,
    deleteBuilding,
    getBuildingById,
    getMasterData,
    saveMasterData,
    loadExternalApplicationData,
    setSupabaseSyncSuppressed,
    initializeFromIndexedDB,
    syncToIndexedDB,
    createBackupPayload,
    validateBackupData,
    restoreBackupData,
    upsertCompany,
    upsertContact,
    migrateLegacyContactsToMaster,
    createId,
  };
})();
