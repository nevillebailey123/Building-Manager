(function () {
  "use strict";

  const SUPABASE_URL = "https://utpfgldgiohbtvuaygkq.supabase.co";
  const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_WI6VsYzn6SL7zSbrDZGM9g_qav2A0ZF";

  if (!window.supabase || typeof window.supabase.createClient !== "function") {
    console.error("Compliance HQ: Supabase library is unavailable.");
    return;
  }

  const client = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_PUBLISHABLE_KEY
  );

  async function signIn(email, password) {
    const result = await client.auth.signInWithPassword({
      email: String(email || "").trim(),
      password: String(password || ""),
    });

    if (result.error) {
      throw result.error;
    }

    return result.data;
  }

  async function signOut() {
    const result = await client.auth.signOut();

    if (result.error) {
      throw result.error;
    }

    return true;
  }

  async function getSession() {
    const result = await client.auth.getSession();

    if (result.error) {
      throw result.error;
    }

    return result.data.session || null;
  }

  async function testConnection() {
    const session = await getSession();

    if (!session) {
      return {
        success: false,
        authenticated: false,
        message: "Not signed in.",
      };
    }

    const result = await client
      .from("properties")
      .select("id")
      .limit(1);

    if (result.error) {
      return {
        success: false,
        authenticated: true,
        message: result.error.message,
      };
    }

    return {
      success: true,
      authenticated: true,
      message: "Supabase connection successful.",
    };
  }

  window.ComplianceHQSupabase = {
    client,
    signIn,
    signOut,
    getSession,
    testConnection,
  };
})();


/*
 * Supabase application read layer.
 * Reconstructs the existing Compliance HQ browser data model from
 * normalized Supabase tables without modifying browser storage.
 */

function mergeStoredData(row) {
  const extra = row && row.data && typeof row.data === "object"
    ? row.data
    : {};

  return { ...extra };
}

async function readSupabaseTable(table) {
  const result = await window.ComplianceHQSupabase.client
    .from(table)
    .select("*");

  if (result.error) {
    throw new Error(table + ": " + result.error.message);
  }

  return Array.isArray(result.data) ? result.data : [];
}

async function loadApplicationData() {
  const session = await window.ComplianceHQSupabase.getSession();

  if (!session) {
    throw new Error("You must be signed in before loading Supabase data.");
  }

  const results = await Promise.all([
    readSupabaseTable("properties"),
    readSupabaseTable("tenancies"),
    readSupabaseTable("companies"),
    readSupabaseTable("contacts"),
    readSupabaseTable("master_templates"),
    readSupabaseTable("property_templates"),
    readSupabaseTable("schedule_items"),
    readSupabaseTable("history_records"),
    readSupabaseTable("documents"),
    readSupabaseTable("document_links"),
    readSupabaseTable("contact_links"),
  ]);

  const [
    propertyRows,
    tenancyRows,
    companyRows,
    contactRows,
    masterTemplateRows,
    propertyTemplateRows,
    scheduleRows,
    historyRows,
    documentRows,
    documentLinkRows,
    contactLinkRows,
  ] = results;

  const companies = companyRows.map(function (row) {
    return {
      id: row.id,
      name: row.name,
      type: row.type,
      address: row.address,
      phone: row.phone,
      email: row.email,
      website: row.website,
      notes: row.notes,
      createdDate: row.created_at,
      lastUpdated: row.updated_at,
    };
  });

  const contacts = contactRows.map(function (row) {
    return {
      id: row.id,
      companyId: row.company_id || "",
      name: row.name,
      contactType: row.contact_type,
      responsibility: row.responsibility,
      mobile: row.mobile,
      officePhone: row.office_phone,
      email: row.email,
      preferredContactMethod: row.preferred_contact_method,
      active: row.active,
      notes: row.notes,
      createdDate: row.created_at,
      lastUpdated: row.updated_at,
    };
  });

  const scheduledItemTemplates = masterTemplateRows.map(function (row) {
    return {
      ...mergeStoredData(row),
      id: row.id,
      name: row.name,
      category: row.category,
      frequency: row.frequency,
      description: row.description,
      active: row.active,
      createdDate: row.created_at,
      lastUpdated: row.updated_at,
    };
  });

  const propertyTemplatesByProperty = new Map();
  propertyTemplateRows.forEach(function (row) {
    const item = {
      ...mergeStoredData(row),
      id: row.id,
      masterTemplateId: row.master_template_id || "",
      templateId: row.master_template_id || "",
      name: row.name,
      category: row.category,
      frequency: row.frequency,
      preferredCompanyId: row.preferred_company_id || "",
      preferredContactId: row.preferred_contact_id || "",
      createdDate: row.created_at,
      lastUpdated: row.updated_at,
    };

    if (!propertyTemplatesByProperty.has(row.property_id)) {
      propertyTemplatesByProperty.set(row.property_id, []);
    }
    propertyTemplatesByProperty.get(row.property_id).push(item);
  });

  const scheduleByProperty = new Map();
  scheduleRows.forEach(function (row) {
    const item = {
      ...mergeStoredData(row),
      id: row.id,
      propertyId: row.property_id,
      tenancyId: row.tenancy_id || "",
      propertyTemplateId: row.property_template_id || "",
      templateId: row.property_template_id || "",
      taskName: row.task_name,
      category: row.category,
      dueDate: row.due_date || "",
      frequency: row.frequency,
      preferredCompanyId: row.preferred_company_id || "",
      preferredContactId: row.preferred_contact_id || "",
      sourceType: row.source_type,
      sourceId: row.source_id,
      status: row.status,
      lastCompletionHistoryId: row.last_completion_history_id || "",
      createdDate: row.created_at,
      lastUpdated: row.updated_at,
    };

    if (!scheduleByProperty.has(row.property_id)) {
      scheduleByProperty.set(row.property_id, []);
    }
    scheduleByProperty.get(row.property_id).push(item);
  });

  const historyByProperty = new Map();
  historyRows.forEach(function (row) {
    const item = {
      ...mergeStoredData(row),
      id: row.id,
      propertyId: row.property_id,
      scheduleItemId: row.schedule_item_id || "",
      completedAt: row.completed_at || "",
      createdDate: row.created_at,
    };

    if (!historyByProperty.has(row.property_id)) {
      historyByProperty.set(row.property_id, []);
    }
    historyByProperty.get(row.property_id).push(item);
  });

  const documentById = new Map();
  documentRows.forEach(function (row) {
    documentById.set(row.id, {
      ...mergeStoredData(row),
      id: row.id,
      title: row.title,
      categoryId: row.category_id,
      category: row.category,
      documentType: row.document_type,
      version: row.version,
      documentDate: row.document_date || "",
      expiryDate: row.expiry_date || "",
      addExpiryToCalendar: row.add_expiry_to_calendar === true,
      description: row.description,
      uploadedBy: row.uploaded_by,
      fileName: row.file_name,
      mimeType: row.mime_type,
      sizeBytes: Number(row.size_bytes || 0),
      uploadedAt: row.uploaded_at || row.created_at,
      notes: row.notes,
      storage: {
        kind: row.storage_kind,
        path: row.storage_path,
        previewStatus: row.preview_status,
        ocrStatus: row.ocr_status,
      },
      createdDate: row.created_at,
      lastUpdated: row.updated_at,
    });
  });

  const documentsByProperty = new Map();
  documentLinkRows.forEach(function (row) {
    if (!row.property_id || row.tenancy_id) {
      return;
    }

    const document = documentById.get(row.document_id);
    if (!document) {
      return;
    }

    if (!documentsByProperty.has(row.property_id)) {
      documentsByProperty.set(row.property_id, []);
    }

    documentsByProperty.get(row.property_id).push({
      ...document,
      tenancyId: "",
      scheduleItemId: row.schedule_item_id || "",
    });
  });

  const tenancyRowsByProperty = new Map();
  tenancyRows.forEach(function (row) {
    const contactRefs = contactLinkRows
      .filter(function (link) {
        return link.tenancy_id === row.id;
      })
      .map(function (link) {
        return link.contact_id;
      });

    const leaseDocuments = documentLinkRows
      .filter(function (link) {
        return link.tenancy_id === row.id;
      })
      .map(function (link) {
        return documentById.get(link.document_id);
      })
      .filter(Boolean);

    const tenancy = {
      id: row.id,
      companyId: row.company_id || "",
      companyName: row.company_name,
      tradingName: row.trading_name,
      leaseStart: row.lease_start || "",
      leaseEnd: row.lease_end || "",
      rentReviewDate: row.rent_review_date || "",
      rentReviewFrequency: row.rent_review_frequency,
      renewalDate: row.renewal_date || "",
      noticeDate: row.notice_date || "",
      status: row.status,
      notes: row.notes,
      contacts: [],
      contactRefs: contactRefs,
      documents: leaseDocuments,
      lease: {
        notes: row.lease_notes,
        documents: leaseDocuments,
        versionHistory: [],
      },
    };

    if (!tenancyRowsByProperty.has(row.property_id)) {
      tenancyRowsByProperty.set(row.property_id, []);
    }
    tenancyRowsByProperty.get(row.property_id).push(tenancy);
  });

  const buildings = propertyRows.map(function (row) {
    const tenancies = tenancyRowsByProperty.get(row.id) || [];

    const propertyContactLinks = contactLinkRows.filter(function (link) {
      return link.property_id === row.id && !link.tenancy_id;
    });

    const relationshipById = {};
    propertyContactLinks.forEach(function (link) {
      relationshipById[link.contact_id] = link.relationship;
    });

    return {
      id: row.id,
      buildingName: row.building_name,
      streetAddress: row.street_address,
      city: row.city,
      owner: row.owner,
      propertyManager: row.property_manager,
      buildingType: row.building_type,
      status: row.status,
      notes: row.notes,
      archived: row.archived === true,
      createdDate: row.created_at,
      lastUpdated: row.updated_at,
      tenancy: tenancies[0] || null,
      tenancies: tenancies,
      buildingContactAssignments: propertyContactLinks.map(function (link) {
        return link.contact_id;
      }),
      contactRelationshipById: relationshipById,
      buildingRoles: [],
      documents: documentsByProperty.get(row.id) || [],
      propertyTemplates: propertyTemplatesByProperty.get(row.id) || [],
      scheduleItems: scheduleByProperty.get(row.id) || [],
      historyRecords: historyByProperty.get(row.id) || [],
    };
  });

  return {
    buildings: buildings,
    masterData: {
      companies: companies,
      contacts: contacts,
      scheduledItemTemplates: scheduledItemTemplates,
      documents: [],
    },
    counts: {
      properties: buildings.length,
      tenancies: tenancyRows.length,
      companies: companies.length,
      contacts: contacts.length,
      masterTemplates: scheduledItemTemplates.length,
      propertyTemplates: propertyTemplateRows.length,
      scheduleItems: scheduleRows.length,
      historyRecords: historyRows.length,
      documents: documentRows.length,
      documentLinks: documentLinkRows.length,
      contactLinks: contactLinkRows.length,
    },
  };
}

/*
 * Compliance HQ migration support.
 * Copies existing browser data to Supabase.
 * It does not remove or modify browser data.
 */

async function upsertMigrationRows(table, rows) {
  if (!Array.isArray(rows) || rows.length === 0) {
    return 0;
  }

  const result = await window.ComplianceHQSupabase.client
    .from(table)
    .upsert(rows, { onConflict: "id" });

  if (result.error) {
    throw new Error(table + ": " + result.error.message);
  }

  return rows.length;
}

function cleanDate(value) {
  const text = String(value || "").trim();
  return text || null;
}

function cleanTimestamp(value) {
  const text = String(value || "").trim();
  return text || new Date().toISOString();
}

async function migrateExistingBrowserData() {
  if (!window.BuildingStorage) {
    throw new Error("BuildingStorage is unavailable.");
  }

  const session = await window.ComplianceHQSupabase.getSession();
  if (!session) {
    throw new Error("You must be signed in before migrating data.");
  }

  const buildings = window.BuildingStorage.getBuildings();
  const master = window.BuildingStorage.getMasterData();

  const companies = (master.companies || []).map(function (company) {
    return {
      id: String(company.id),
      name: company.name || "",
      type: company.type || "",
      address: company.address || "",
      phone: company.phone || "",
      email: company.email || "",
      website: company.website || "",
      notes: company.notes || "",
      created_at: cleanTimestamp(company.createdDate),
      updated_at: cleanTimestamp(company.lastUpdated),
    };
  });

  const uniqueContactsById = new Map();

  (master.contacts || []).forEach(function (contact) {
    const contactId = String(contact.id || "").trim();
    if (!contactId || uniqueContactsById.has(contactId)) {
      return;
    }

    uniqueContactsById.set(contactId, contact);
  });

  const contacts = Array.from(uniqueContactsById.values()).map(function (contact) {
    return {
      id: String(contact.id),
      company_id: contact.companyId || null,
      name: contact.name || "",
      contact_type: contact.contactType || "",
      responsibility: contact.responsibility || "",
      mobile: contact.mobile || "",
      office_phone: contact.officePhone || "",
      email: contact.email || "",
      preferred_contact_method: contact.preferredContactMethod || "",
      active: contact.active || "Yes",
      notes: contact.notes || "",
      created_at: cleanTimestamp(contact.createdDate),
      updated_at: cleanTimestamp(contact.lastUpdated),
    };
  });

  const properties = buildings.map(function (building) {
    return {
      id: String(building.id),
      building_name: building.buildingName || "",
      street_address: building.streetAddress || "",
      city: building.city || "",
      owner: building.owner || "",
      property_manager: building.propertyManager || "",
      building_type: building.buildingType || "",
      status: building.status || "Vacant",
      notes: building.notes || "",
      archived: building.archived === true,
      created_at: cleanTimestamp(building.createdDate),
      updated_at: cleanTimestamp(building.lastUpdated),
    };
  });

  const masterTemplates = (master.scheduledItemTemplates || []).map(function (template) {
    return {
      id: String(template.id),
      name: template.name || template.taskName || "",
      category: template.category || "General",
      frequency: template.frequency || "",
      description: template.description || "",
      active: template.archived !== true,
      data: template,
      created_at: cleanTimestamp(template.createdDate),
      updated_at: cleanTimestamp(template.lastUpdated),
    };
  });

  const tenancies = [];
  const propertyTemplates = [];
  const scheduleItems = [];
  const historyRecords = [];
  const documents = [];
  const documentLinks = [];
  const contactLinks = [];

  buildings.forEach(function (building) {
    const propertyId = String(building.id);

    const buildingTenancies = Array.isArray(building.tenancies)
      ? building.tenancies
      : (building.tenancy ? [building.tenancy] : []);

    buildingTenancies.forEach(function (tenancy) {
      if (!tenancy || !tenancy.id) {
        return;
      }

      const tenancyId = String(tenancy.id);
      const lease = tenancy.lease && typeof tenancy.lease === "object"
        ? tenancy.lease
        : {};

      tenancies.push({
        id: tenancyId,
        property_id: propertyId,
        company_id: tenancy.companyId || null,
        company_name: tenancy.companyName || "",
        trading_name: tenancy.tradingName || "",
        lease_start: cleanDate(tenancy.leaseStart),
        lease_end: cleanDate(tenancy.leaseEnd),
        rent_review_date: cleanDate(tenancy.rentReviewDate),
        rent_review_frequency: tenancy.rentReviewFrequency || "Annual",
        renewal_date: cleanDate(tenancy.renewalDate),
        notice_date: cleanDate(tenancy.noticeDate),
        status: tenancy.status || "Occupied",
        notes: tenancy.notes || "",
        lease_notes: lease.notes || "",
        created_at: cleanTimestamp(
          tenancy.createdDate || building.createdDate
        ),
        updated_at: cleanTimestamp(
          tenancy.lastUpdated || building.lastUpdated
        ),
      });

      (tenancy.contactRefs || []).forEach(function (contactId) {
        contactLinks.push({
          contact_id: String(contactId),
          property_id: propertyId,
          tenancy_id: tenancyId,
          relationship: "",
        });
      });

      const leaseDocuments = Array.isArray(lease.documents)
        ? lease.documents
        : (Array.isArray(tenancy.documents) ? tenancy.documents : []);

      leaseDocuments.forEach(function (document) {
        if (!document || !document.id) {
          return;
        }

        const documentId = String(document.id);
        const storage = document.storage || {};

        documents.push({
          id: documentId,
          title: document.title || "",
          category_id: document.categoryId || "",
          category: document.category || "Tenancy",
          document_type: document.documentType || document.type || "Lease Agreement",
          version: document.version || "",
          document_date: cleanDate(document.documentDate || document.date),
          expiry_date: cleanDate(document.expiryDate),
          add_expiry_to_calendar: document.addExpiryToCalendar === true,
          description: document.description || "",
          uploaded_by: document.uploadedBy || "",
          file_name: document.fileName || document.name || "",
          mime_type: document.mimeType || document.fileType || "application/octet-stream",
          size_bytes: Number(document.sizeBytes || 0),
          uploaded_at: cleanDate(document.uploadedAt),
          notes: document.notes || "",
          storage_kind: storage.kind || "",
          storage_path: "",
          preview_status: storage.previewStatus || "",
          ocr_status: storage.ocrStatus || "",
          data: document,
          created_at: cleanTimestamp(document.createdDate || document.uploadedAt),
          updated_at: cleanTimestamp(document.lastUpdated),
        });

        documentLinks.push({
          document_id: documentId,
          property_id: propertyId,
          tenancy_id: tenancyId,
          schedule_item_id: document.scheduleItemId || null,
          relationship_type: "tenancy",
        });
      });
    });

    (building.propertyTemplates || []).forEach(function (template) {
      propertyTemplates.push({
        id: String(template.id),
        property_id: propertyId,
        master_template_id: template.masterTemplateId || template.templateId || null,
        name: template.name || template.taskName || "",
        category: template.category || "General",
        frequency: template.frequency || "",
        preferred_company_id: template.preferredCompanyId || null,
        preferred_contact_id: template.preferredContactId || null,
        data: template,
        created_at: cleanTimestamp(template.createdDate),
        updated_at: cleanTimestamp(template.lastUpdated),
      });
    });

    (building.scheduleItems || []).forEach(function (item) {
      scheduleItems.push({
        id: String(item.id),
        property_id: propertyId,
        tenancy_id: item.tenancyId || null,
        property_template_id: item.propertyTemplateId || item.templateId || null,
        task_name: item.taskName || "",
        category: item.category || "General",
        due_date: cleanDate(item.dueDate),
        frequency: item.frequency || "",
        preferred_company_id: item.preferredCompanyId || null,
        preferred_contact_id: item.preferredContactId || null,
        source_type: item.sourceType || "",
        source_id: item.sourceId || item.documentId || "",
        status: item.status || "",
        last_completion_history_id: item.lastCompletionHistoryId || null,
        data: item,
        created_at: cleanTimestamp(item.createdDate),
        updated_at: cleanTimestamp(item.lastUpdated),
      });
    });

    (building.historyRecords || []).forEach(function (record) {
      historyRecords.push({
        id: String(record.id),
        property_id: propertyId,
        schedule_item_id: record.scheduleItemId || null,
        completed_at: cleanDate(
          record.completedAt ||
          record.completedDate ||
          record.date
        ),
        data: record,
        created_at: cleanTimestamp(
          record.createdDate ||
          record.completedAt ||
          record.completedDate
        ),
      });
    });

    (building.documents || []).forEach(function (document) {
      const documentId = String(document.id);
      const storage = document.storage || {};

      documents.push({
        id: documentId,
        title: document.title || "",
        category_id: document.categoryId || "",
        category: document.category || "",
        document_type: document.documentType || document.type || "Document",
        version: document.version || "",
        document_date: cleanDate(document.documentDate || document.date),
        expiry_date: cleanDate(document.expiryDate),
        add_expiry_to_calendar: document.addExpiryToCalendar === true,
        description: document.description || "",
        uploaded_by: document.uploadedBy || "",
        file_name: document.fileName || document.name || "",
        mime_type: document.mimeType || document.fileType || "application/octet-stream",
        size_bytes: Number(document.sizeBytes || 0),
        uploaded_at: cleanDate(document.uploadedAt),
        notes: document.notes || "",
        storage_kind: storage.kind || "",
        storage_path: "",
        preview_status: storage.previewStatus || "",
        ocr_status: storage.ocrStatus || "",
        data: document,
        created_at: cleanTimestamp(document.createdDate || document.uploadedAt),
        updated_at: cleanTimestamp(document.lastUpdated),
      });

      documentLinks.push({
        document_id: documentId,
        property_id: propertyId,
        tenancy_id: null,
        schedule_item_id: document.scheduleItemId || null,
        relationship_type: "property",
      });
    });

    (building.buildingContactAssignments || []).forEach(function (contactId) {
      contactLinks.push({
        contact_id: String(contactId),
        property_id: propertyId,
        tenancy_id: null,
        relationship: building.contactRelationshipById &&
          building.contactRelationshipById[contactId]
          ? building.contactRelationshipById[contactId]
          : "",
      });
    });
  });

  const counts = {};

  counts.companies = await upsertMigrationRows("companies", companies);
  counts.contacts = await upsertMigrationRows("contacts", contacts);
  counts.properties = await upsertMigrationRows("properties", properties);
  counts.tenancies = await upsertMigrationRows("tenancies", tenancies);
  counts.masterTemplates = await upsertMigrationRows("master_templates", masterTemplates);
  counts.propertyTemplates = await upsertMigrationRows("property_templates", propertyTemplates);
  counts.scheduleItems = await upsertMigrationRows("schedule_items", scheduleItems);
  counts.historyRecords = await upsertMigrationRows("history_records", historyRecords);
  counts.documents = await upsertMigrationRows("documents", documents);

  if (documentLinks.length > 0) {
    const result = await window.ComplianceHQSupabase.client.from("document_links").insert(documentLinks);
    if (result.error) {
      throw new Error("document_links: " + result.error.message);
    }
  }

  if (contactLinks.length > 0) {
    const result = await window.ComplianceHQSupabase.client.from("contact_links").insert(contactLinks);
    if (result.error) {
      throw new Error("contact_links: " + result.error.message);
    }
  }

  counts.documentLinks = documentLinks.length;
  counts.contactLinks = contactLinks.length;

  return {
    success: true,
    counts: counts,
  };
}

window.ComplianceHQSupabase.loadApplicationData = loadApplicationData;
window.ComplianceHQSupabase.migrateExistingBrowserData = migrateExistingBrowserData;
