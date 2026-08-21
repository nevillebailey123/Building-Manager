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

  const propertyTemplates = [];
  const scheduleItems = [];
  const historyRecords = [];
  const documents = [];
  const documentLinks = [];
  const contactLinks = [];

  buildings.forEach(function (building) {
    const propertyId = String(building.id);

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

window.ComplianceHQSupabase.migrateExistingBrowserData = migrateExistingBrowserData;
