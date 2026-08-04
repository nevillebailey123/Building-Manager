(function () {
  const STORAGE_KEY = "buildingManagerBuildings";
  const MASTER_KEY = "buildingManagerMasterData";

  function getBuildings() {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return [];
    }

    try {
      const parsed = JSON.parse(raw);
      return Array.isArray(parsed) ? parsed : [];
    } catch (error) {
      return [];
    }
  }

  function saveBuildings(buildings) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(buildings));
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
    const raw = localStorage.getItem(MASTER_KEY);
    if (!raw) {
      return defaultMasterData();
    }

    try {
      const parsed = JSON.parse(raw);
      return {
        companies: Array.isArray(parsed.companies) ? parsed.companies : [],
        contacts: Array.isArray(parsed.contacts) ? parsed.contacts : [],
        scheduledItemTemplates: Array.isArray(parsed.scheduledItemTemplates) ? parsed.scheduledItemTemplates : [],
        documents: Array.isArray(parsed.documents) ? parsed.documents : [],
      };
    } catch (error) {
      return defaultMasterData();
    }
  }

  function saveMasterData(masterData) {
    localStorage.setItem(MASTER_KEY, JSON.stringify(masterData));
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

    saveBuildings(next);
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

  window.BuildingStorage = {
    getBuildings,
    addBuilding,
    updateBuilding,
    deleteBuilding,
    getBuildingById,
    getMasterData,
    saveMasterData,
    upsertCompany,
    upsertContact,
    migrateLegacyContactsToMaster,
    createId,
  };
})();
