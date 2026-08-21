(function () {
  const dashboardView = document.getElementById("dashboard-view");
  const templateLibraryView = document.getElementById("template-library-view");
  const formView = document.getElementById("form-view");
  const overviewView = document.getElementById("overview-view");
  const tenancyView = document.getElementById("tenancy-view");
  const leaseView = document.getElementById("lease-view");
  const contactsView = document.getElementById("contacts-view");
  const companiesView = document.getElementById("companies-view");
  const scheduleView = document.getElementById("schedule-view");
  const historyView = document.getElementById("history-view");
  const completeTaskView = document.getElementById("complete-task-view");
  const placeholderView = document.getElementById("placeholder-view");
  const editView = document.getElementById("edit-view");
  const settingsView = document.getElementById("settings-view");
  const appShellHeader = document.getElementById("app-shell-header");
  const appBrandBtn = document.getElementById("app-brand-btn");
  const appPropertySelector = document.getElementById("app-property-selector");
  const appModuleNav = document.getElementById("app-module-nav");
  const settingsPropertyList = document.getElementById("settings-property-list");
  const settingsAddPropertyBtn = document.getElementById("settings-add-property-btn");
  const settingsTemplatesBtn = document.getElementById("settings-templates-btn");
  const editPropertyManagementHelp = document.getElementById("edit-property-management-help");
  const editArchivePropertyBtn = document.getElementById("edit-archive-property-btn");
  const editRestorePropertyBtn = document.getElementById("edit-restore-property-btn");
  const editDeletePropertyBtn = document.getElementById("edit-delete-property-btn");
  const breadcrumbNav = document.getElementById("breadcrumb-nav");
  const cancelBtn = document.getElementById("cancel-btn");
  const workspaceDashboardCard = document.getElementById("workspace-dashboard-card");
  const workspaceDashboardTitle = document.getElementById("workspace-dashboard-title");
  const workspaceDashboardSummary = document.getElementById("workspace-dashboard-summary");
  const editBuildingBtn = document.getElementById("edit-building-btn");
  const companiesBackBtn = document.getElementById("companies-back-btn");
  const manageTemplatesBtn = document.getElementById("manage-templates-btn");
  const historyBackBtn = document.getElementById("history-back-btn");
  const templateLibraryBackBtn = document.getElementById("template-library-back-btn");
  const buildingForm = document.getElementById("building-form");
  const editBuildingForm = document.getElementById("edit-building-form");
  const tenancyForm = document.getElementById("tenancy-form");
  const contactForm = document.getElementById("contact-form");
  const companyForm = document.getElementById("company-form");
  const completeTaskForm = document.getElementById("complete-task-form");
  const cancelEditBtn = document.getElementById("cancel-edit-btn");
  const cancelTenancyBtn = document.getElementById("cancel-tenancy-btn");
  const addTenancyBtn = document.getElementById("add-tenancy-btn");
  const addCompanyBtn = document.getElementById("add-company-btn");
  const addCompanyInlineBtn = document.getElementById("add-company-inline-btn");
  const archiveTenancyBtn = document.getElementById("archive-tenancy-btn");
  const deleteTenancyBtn = document.getElementById("delete-tenancy-btn");
  const tenancyDangerSection = document.getElementById("tenancy-danger-section");
  const emptyState = document.getElementById("empty-state");
  const overviewBuildingName = document.getElementById("overview-building-name");
  const overviewStreetAddress = document.getElementById("overview-street-address");
  const overviewCity = document.getElementById("overview-city");
  const overviewStatus = document.getElementById("overview-status");
  const moduleNav = document.getElementById("module-nav");
  const moduleContentTitle = document.getElementById("module-content-title");
  const moduleContentBody = document.getElementById("module-content-body");
  const tenancyBuildingName = document.getElementById("tenancy-building-name");
  const leaseTenantName = document.getElementById("lease-tenant-name");
  const leasePropertyName = document.getElementById("lease-property-name");
  const leaseStatus = document.getElementById("lease-status");
  const leaseCommencementDate = document.getElementById("lease-commencement-date");
  const leaseExpiryDate = document.getElementById("lease-expiry-date");
  const documentsAddBtn = document.getElementById("documents-add-btn");
  const leaseRepositoryCard = document.getElementById("lease-repository-card");
  const leaseSearch = document.getElementById("lease-search");
  const leaseCategoryFilter = document.getElementById("lease-category-filter");
  const leaseRelatedToFilter = document.getElementById("lease-related-to-filter");
  const leaseSortSelect = document.getElementById("lease-sort-select");
  const leaseDashboardPanel = document.getElementById("lease-dashboard-panel");
  const leaseCategoryGrid = document.getElementById("lease-category-grid");
  const documentFormCard = document.getElementById("document-form-card");
  const documentFormTitle = document.getElementById("document-form-title");
  const documentForm = document.getElementById("document-form");
  const documentTitleInput = document.getElementById("document-title-input");
  const documentBuildingSelect = document.getElementById("document-building-select");
  const documentCategorySelect = document.getElementById("document-category-select");
  const documentDateInput = document.getElementById("document-date-input");
  const documentExpiryInput = document.getElementById("document-expiry-input");
  const documentExpiryCalendarToggle = document.getElementById("document-expiry-calendar-toggle");
  const documentExpiryCalendarHelp = document.getElementById("document-expiry-calendar-help");
  const documentTenancySelect = document.getElementById("document-tenancy-select");
  const documentScheduleSelect = document.getElementById("document-schedule-select");
  const documentFileInput = document.getElementById("document-file-input");
  const documentFileHelp = document.getElementById("document-file-help");
  const documentCurrentFile = document.getElementById("document-current-file");
  const documentSaveBtn = document.getElementById("document-save-btn");
  const documentNotesInput = document.getElementById("document-notes-input");
  const documentDeleteBtn = document.getElementById("document-delete-btn");
  const documentCancelBtn = document.getElementById("document-cancel-btn");
  const tenancyEmptyState = document.getElementById("tenancy-empty-state");
  const tenancyDetailsCard = document.getElementById("tenancy-details-card");
  const tenancyFormCard = document.getElementById("tenancy-form-card");
  const tenancyFormTitle = document.getElementById("tenancy-form-title");
  const tenancyDetailsList = document.getElementById("tenancy-details-list");
  const tenancyTabCurrent = document.getElementById("tenancy-tab-current");
  const tenancyTabHistory = document.getElementById("tenancy-tab-history");
  const tenancyCurrentPanel = document.getElementById("tenancy-current-panel");
  const tenancyHistoryPanel = document.getElementById("tenancy-history-panel");
  const tenancyHistoryList = document.getElementById("tenancy-history-list");
  const tenancyContactsSection = document.getElementById("tenancy-contacts-section");
  const tenancyContactsList = document.getElementById("tenancy-contacts-list");
  const tenancyAddContactLinkBtn = document.getElementById("tenancy-add-contact-link-btn");
  const contactsBuildingName = document.getElementById("contacts-building-name");
  const contactsEmptyState = document.getElementById("contacts-empty-state");
  const contactsListCard = document.getElementById("contacts-list-card");
  const contactsList = document.getElementById("contacts-list");
  const contactsSearch = document.getElementById("contacts-search");
  const contactsRelationshipFilter = document.getElementById("contacts-relationship-filter");
  const contactsCreateBtn = document.getElementById("contacts-create-btn");
  const contactFormCard = document.getElementById("contact-form-card");
  const contactFormTitle = document.getElementById("contact-form-title");
  const contactSaveBtn = document.getElementById("contact-save-btn");
  const deleteContactBtn = document.getElementById("delete-contact-btn");
  const contactLinkedPropertySection = document.getElementById("contact-linked-property-section");
  const contactLinkedPropertyList = document.getElementById("contact-linked-property-list");
  const contactAddPropertyLinkBtn = document.getElementById("contact-add-property-link-btn");
  const contactLinkedScheduleSection = document.getElementById("contact-linked-schedule-section");
  const contactLinkedScheduleList = document.getElementById("contact-linked-schedule-list");
  const contactAddScheduleLinkBtn = document.getElementById("contact-add-schedule-link-btn");
  const contactRemoveScheduleLinkBtn = document.getElementById("contact-remove-schedule-link-btn");
  const contactLinkedTenancySection = document.getElementById("contact-linked-tenancy-section");
  const contactLinkedTenancyList = document.getElementById("contact-linked-tenancy-list");
  const contactAddTenancyLinkBtn = document.getElementById("contact-add-tenancy-link-btn");
  const contactRemoveTenancyLinkBtn = document.getElementById("contact-remove-tenancy-link-btn");
  const companiesBuildingName = document.getElementById("companies-building-name");
  const companiesEmptyState = document.getElementById("companies-empty-state");
  const companiesListCard = document.getElementById("companies-list-card");
  const companiesList = document.getElementById("companies-list");
  const companyFormCard = document.getElementById("company-form-card");
  const companyFormTitle = document.getElementById("company-form-title");
  const scheduleBuildingName = document.getElementById("schedule-building-name");
  const historyBuildingName = document.getElementById("history-building-name");
  const completeTaskBuildingName = document.getElementById("complete-task-building-name");
  const completeTaskName = document.getElementById("complete-task-name");
  const scheduleOpsList = document.getElementById("schedule-ops-list");
  const scheduleFilterCategory = document.getElementById("schedule-filter-category");
  const scheduleFilterStatus = document.getElementById("schedule-filter-status");
  const scheduleFilterDuePeriod = document.getElementById("schedule-filter-due-period");
  const historyList = document.getElementById("history-list");
  const cancelCompleteTaskBtn = document.getElementById("cancel-complete-task-btn");
  const cancelCompanyBtn = document.getElementById("cancel-company-btn");
  const placeholderTitle = document.getElementById("placeholder-title");
  const placeholderDescription = document.getElementById("placeholder-description");
  const placeholderBuildingName = document.getElementById("placeholder-building-name");
  const placeholderMessage = document.getElementById("placeholder-message");
  const setupProgress = document.getElementById("setup-progress");
  const setupStep1 = document.getElementById("setup-step-1");
  const setupStep2 = document.getElementById("setup-step-2");
  const setupStep3 = document.getElementById("setup-step-3");
  const setupStep4 = document.getElementById("setup-step-4");
  const setupStep5 = document.getElementById("setup-step-5");
  const setupStep6 = document.getElementById("setup-step-6");
  const setupBackBtn = document.getElementById("setup-back-btn");
  const setupSaveExitBtn = document.getElementById("setup-save-exit-btn");
  const setupCancelBtn = document.getElementById("setup-cancel-btn");
  const setupAddTenancyBtn = document.getElementById("setup-add-tenancy-btn");
  const setupSkipTenancyBtn = document.getElementById("setup-skip-tenancy-btn");
  const setupTenancyForm = document.getElementById("setup-tenancy-form");
  const setupSaveTenancyBtn = document.getElementById("setup-save-tenancy-btn");
  const setupCancelTenancyBtn = document.getElementById("setup-cancel-tenancy-btn");
  const setupTenancyCompanyId = document.getElementById("setupTenancyCompanyId");
  const setupTenancyNewCompanyWrap = document.getElementById("setup-tenancy-new-company-wrap");
  const setupTenancyNewCompanyName = document.getElementById("setupTenancyNewCompanyName");
  const setupAddExistingContactBtn = document.getElementById("setup-add-existing-contact-btn");
  const setupAddNewContactBtn = document.getElementById("setup-add-new-contact-btn");
  const setupExistingContactForm = document.getElementById("setup-existing-contact-form");
  const setupNewContactForm = document.getElementById("setup-new-contact-form");
  const setupExistingContactId = document.getElementById("setupExistingContactId");
  const setupExistingContactRelationship = document.getElementById("setupExistingContactRelationship");
  const setupLinkExistingContactBtn = document.getElementById("setup-link-existing-contact-btn");
  const setupNewContactCompanyId = document.getElementById("setupNewContactCompanyId");
  const setupNewContactCompanyWrap = document.getElementById("setup-new-contact-company-wrap");
  const setupNewContactCompanyName = document.getElementById("setupNewContactCompanyName");
  const setupNewContactName = document.getElementById("setupNewContactName");
  const setupNewContactRelationship = document.getElementById("setupNewContactRelationship");
  const setupNewContactMobile = document.getElementById("setupNewContactMobile");
  const setupNewContactEmail = document.getElementById("setupNewContactEmail");
  const setupCreateContactBtn = document.getElementById("setup-create-contact-btn");
  const setupLinkedContactsList = document.getElementById("setup-linked-contacts-list");
  const setupStep3NextBtn = document.getElementById("setup-step-3-next-btn");
  const setupTemplateList = document.getElementById("setup-template-list");
  const setupSelectAllBtn = document.getElementById("setup-select-all-btn");
  const setupClearAllBtn = document.getElementById("setup-clear-all-btn");
  const setupStep4NextBtn = document.getElementById("setup-step-4-next-btn");
  const setupConfigureList = document.getElementById("setup-configure-list");
  const setupStep5FinishBtn = document.getElementById("setup-step-5-finish-btn");
  const setupFinishSummary = document.getElementById("setup-finish-summary");
  const setupOpenBuildingBtn = document.getElementById("setup-open-building-btn");
  const templateLibraryEmptyState = document.getElementById("template-library-empty-state");
  const templateLibraryListCard = document.getElementById("template-library-list-card");
  const templateLibraryList = document.getElementById("template-library-list");
  const templateLibraryFormCard = document.getElementById("template-library-form-card");
  const templateFormTitle = document.getElementById("template-form-title");
  const templateForm = document.getElementById("template-form");
  const addTemplateBtn = document.getElementById("add-template-btn");
  const addTemplateInlineBtn = document.getElementById("add-template-inline-btn");
  const templateFormDeleteBtn = document.getElementById("template-form-delete-btn");
  const cancelTemplateBtn = document.getElementById("cancel-template-btn");
  const backupExportBtn = document.getElementById("backup-export-btn");
  const backupRestoreBtn = document.getElementById("backup-restore-btn");
  const backupRestoreInput = document.getElementById("backup-restore-input");
  const contactsEmptyMessage = document.getElementById("contacts-empty-message");
  const tenancyEmptyMessage = document.getElementById("tenancy-empty-message");

  let activeBuildingId = "";
  let editingPropertyId = "";
  let activeAppModule = "dashboard";
  let activeModule = "Overview";
  let tenancyFormMode = "add";
  let contactFormMode = "add";
  let contactAssignmentContext = null;
  let contactReturnContext = null;
  let contactFormFilterBuildingId = "";
  let activeContactId = "";
  let contactsSearchQuery = "";
  let contactsRelationshipFilterValue = "";
  let companyFormMode = "add";
  let activeCompanyId = "";
  let templateFormMode = "add";
  let activeTemplateId = "";
  let activeScheduleItemId = "";
  let activeTenancyTab = "current";
  let activeTenancyDetailsId = "";
  let tenancyFormFilterBuildingId = "";
  let activeScheduleTab = "upcoming";
  // "" means All Buildings, matching activeBuildingId.
  let scheduleFilters = {
    property: "",
    category: "all",
    status: "all",
    duePeriod: "all",
  };
  let tenancyEditBuildingId = "";
  let activeDocumentFormMode = "";
  let activeDocumentContext = null;
  let documentFormFilterBuildingId = "";
  let documentFormCategory = "";
  let leaseSearchQuery = "";
  let leaseCategoryFilterValue = "";
  let leaseRelatedToFilterValue = "";
  let leaseSortValue = "newest";
  let breadcrumbItems = [];

  const ACTIVE_BUILDING_KEY = "buildingManagerActiveBuildingId";
  const CURRENT_PROPERTY_KEY = "buildingManagerCurrentPropertyId";

  const RELATIONSHIP_OPTIONS = [
    "Owner",
    "Property Manager",
    "Tenant Representative",
    "Tenant Accounts",
    "HVAC Contractor",
    "Fire Contractor",
    "Emergency Lighting",
    "Electrician",
    "Plumber",
    "Roofing",
    "Gutter Cleaning",
    "Lift Contractor",
    "Security",
    "Locksmith",
    "Cleaner",
    "Gardener",
    "Insurance Broker",
    "Solicitor",
    "Accountant",
    "Other",
  ];

  const CONTACT_RELATIONSHIP_GROUPS = [
    {
      title: "BUILDING",
      relationships: ["Owner", "Property Manager"],
    },
    {
      title: "TENANT",
      relationships: ["Tenant Representative", "Tenant Accounts"],
    },
    {
      title: "CONTRACTORS",
      relationships: [
        "HVAC Contractor",
        "Fire Contractor",
        "Emergency Lighting",
        "Electrician",
        "Plumber",
        "Roofing",
        "Gutter Cleaning",
        "Lift Contractor",
        "Security",
        "Locksmith",
        "Cleaner",
        "Gardener",
      ],
    },
    {
      title: "PROFESSIONAL",
      relationships: ["Insurance Broker", "Solicitor", "Accountant", "Other"],
    },
  ];

  const LEGACY_RELATIONSHIP_NORMALIZATION = {
    IQP: "Emergency Lighting",
    Roofer: "Roofing",
    General: "Other",
  };

  const TEMPLATE_CATEGORY_OPTIONS = [
    "Compliance",
    "Maintenance",
    "Insurance",
    "Financial",
    "Safety",
    "Tenancy",
    "Utilities",
    "Grounds",
    "General",
  ];

  const TENANCY_RENT_REVIEW_FREQUENCY_OPTIONS = [
    "Annual",
    "2 Yearly",
    "3 Yearly",
    "One-off",
  ];

  const TEMPLATE_FREQUENCY_OPTIONS = [
    "One-off",
    "Weekly",
    "Monthly",
    "Quarterly",
    "6 Monthly",
    "Annual",
    "2 Yearly",
    "3 Yearly",
    "5 Yearly",
    "Custom",
  ];

  const SCHEDULE_DOCUMENT_TYPES = ["Certificate", "Invoice", "Quote", "Report", "Other"];

  const LEASE_DOCUMENT_CATEGORIES = [
    {
      key: "lease-agreement",
      title: "Lease Agreement",
      icon: "📄",
      documentTypes: ["Lease Agreement"],
      primary: true,
    },
    {
      key: "variations",
      title: "Variations",
      icon: "🧾",
      documentTypes: ["Deed of Variation"],
      primary: false,
    },
    {
      key: "rent-reviews",
      title: "Rent Reviews",
      icon: "💲",
      documentTypes: ["Rent Review", "CPI Review"],
      primary: false,
    },
    {
      key: "market-evidence",
      title: "Market Evidence",
      icon: "📊",
      documentTypes: ["Market Rent Review"],
      primary: false,
    },
    {
      key: "assignments-renewals",
      title: "Assignments / Renewals",
      icon: "🔁",
      documentTypes: ["Deed of Assignment", "Deed of Renewal", "Extension Agreement", "Licence to Occupy", "Sublease"],
      primary: false,
    },
    {
      key: "correspondence",
      title: "Correspondence",
      icon: "✉",
      documentTypes: ["Correspondence"],
      primary: false,
    },
    {
      key: "other-documents",
      title: "Other Documents",
      icon: "📁",
      documentTypes: ["Side Agreement", "Surrender Agreement", "Termination Notice", "Other"],
      primary: false,
    },
  ];

  // Legacy per-building category containers. Retained only so saved records can be mapped
  // onto the fixed central categories; no longer editable or shown in the UI.
  const DEFAULT_DOCUMENT_CATEGORY_DEFINITIONS = [
    {
      key: "lease-documents",
      name: "Lease Documents",
      description: "Current tenancy lease records and supporting documents.",
      icon: "📄",
      source: "lease",
    },
    {
      key: "building-valuations",
      name: "Building Valuations",
      description: "Valuations and appraisal documents.",
      icon: "🏢",
      source: "building",
    },
    {
      key: "insurance",
      name: "Insurance",
      description: "Policies, schedules, and claims-related files.",
      icon: "🛡",
      source: "building",
    },
    {
      key: "correspondence",
      name: "Correspondence",
      description: "Letters, notices, and other communications.",
      icon: "✉",
      source: "building",
    },
  ];

  // The central document repository uses these nine fixed categories. They are filters,
  // not storage locations, and cannot be created, renamed or deleted by users.
  const FIXED_DOCUMENT_CATEGORIES = [
    "Tenancy",
    "Insurance",
    "Compliance",
    "Maintenance",
    "Financial",
    "Legal",
    "Valuations",
    "Sales",
    "Miscellaneous",
  ];

  const DEFAULT_DOCUMENT_CATEGORY = "Miscellaneous";

  // Maps legacy free-text category names and document types onto the fixed categories.
  const LEGACY_DOCUMENT_CATEGORY_MAP = {
    "tenancy": "Tenancy",
    "lease": "Tenancy",
    "leases": "Tenancy",
    "lease documents": "Tenancy",
    "lease document": "Tenancy",
    "lease agreement": "Tenancy",
    "tenancy documents": "Tenancy",
    "rent review": "Tenancy",
    "insurance": "Insurance",
    "insurances": "Insurance",
    "policy": "Insurance",
    "compliance": "Compliance",
    "safety": "Compliance",
    "health and safety": "Compliance",
    "certificate": "Compliance",
    "certificates": "Compliance",
    "wof": "Compliance",
    "maintenance": "Maintenance",
    "grounds": "Maintenance",
    "utilities": "Maintenance",
    "repairs": "Maintenance",
    "service report": "Maintenance",
    "financial": "Financial",
    "finance": "Financial",
    "accounts": "Financial",
    "invoice": "Financial",
    "invoices": "Financial",
    "rates": "Financial",
    "legal": "Legal",
    "valuation": "Valuations",
    "valuations": "Valuations",
    "building valuations": "Valuations",
    "appraisal": "Valuations",
    "sale": "Sales",
    "sales": "Sales",
    "miscellaneous": "Miscellaneous",
    "other": "Miscellaneous",
    "correspondence": "Miscellaneous",
  };

  function isFixedDocumentCategory(value) {
    return FIXED_DOCUMENT_CATEGORIES.indexOf(String(value || "").trim()) !== -1;
  }

  function mapToFixedDocumentCategory(value) {
    const raw = String(value || "").trim();
    if (!raw) {
      return "";
    }
    if (isFixedDocumentCategory(raw)) {
      return raw;
    }
    return LEGACY_DOCUMENT_CATEGORY_MAP[raw.toLowerCase()] || "";
  }

  // Normalises a stored document onto a fixed category without discarding its original data.
  function resolveFixedCategoryForRecord(documentRecord, legacyCategories) {
    const direct = mapToFixedDocumentCategory(documentRecord.category);
    if (direct) {
      return direct;
    }

    const legacyId = String(documentRecord.categoryId || "").trim();
    const legacy = legacyId
      ? (legacyCategories || []).find(function (category) {
        return String(category.id || "") === legacyId || String(category.key || "") === legacyId;
      })
      : null;
    if (legacy) {
      if (legacy.source === "lease") {
        return "Tenancy";
      }
      const mappedLegacy = mapToFixedDocumentCategory(legacy.name) || mapToFixedDocumentCategory(legacy.key);
      if (mappedLegacy) {
        return mappedLegacy;
      }
    }

    return mapToFixedDocumentCategory(documentRecord.documentType) || DEFAULT_DOCUMENT_CATEGORY;
  }

  const DEFAULT_TEMPLATE_LIBRARY = [
    { name: "Building WOF", category: "Compliance", defaultFrequency: "Annual", defaultReminderPeriod: "30 days before", suggestedDocuments: ["Certificate"], defaultNotes: "", active: "Yes", defaultChecked: true },
    { name: "Quarterly HVAC Inspection", category: "Maintenance", defaultFrequency: "Quarterly", defaultReminderPeriod: "14 days before", suggestedDocuments: ["Service Report"], defaultNotes: "", active: "Yes", defaultChecked: true },
    { name: "Fire Alarm Inspection", category: "Safety", defaultFrequency: "6 Monthly", defaultReminderPeriod: "30 days before", suggestedDocuments: ["Compliance Report"], defaultNotes: "", active: "Yes", defaultChecked: true },
    { name: "Emergency Lighting", category: "Safety", defaultFrequency: "6 Monthly", defaultReminderPeriod: "30 days before", suggestedDocuments: ["Test Record"], defaultNotes: "", active: "Yes", defaultChecked: true },
    { name: "Fire Extinguishers", category: "Safety", defaultFrequency: "Annual", defaultReminderPeriod: "30 days before", suggestedDocuments: ["Service Certificate"], defaultNotes: "", active: "Yes", defaultChecked: true },
    { name: "Annual Gutter Cleaning", category: "Grounds", defaultFrequency: "Annual", defaultReminderPeriod: "14 days before", suggestedDocuments: ["Invoice"], defaultNotes: "", active: "Yes", defaultChecked: true },
    { name: "Roof Inspection", category: "Maintenance", defaultFrequency: "Annual", defaultReminderPeriod: "30 days before", suggestedDocuments: ["Inspection Report"], defaultNotes: "", active: "Yes", defaultChecked: true },
    { name: "Building Insurance Renewal", category: "Insurance", defaultFrequency: "Annual", defaultReminderPeriod: "45 days before", suggestedDocuments: ["Policy Schedule"], defaultNotes: "", active: "Yes", defaultChecked: true },
    { name: "Rates", category: "Financial", defaultFrequency: "Quarterly", defaultReminderPeriod: "14 days before", suggestedDocuments: ["Rates Notice"], defaultNotes: "", active: "Yes", defaultChecked: true },
    { name: "Tax Return", category: "Financial", defaultFrequency: "Annual", defaultReminderPeriod: "30 days before", suggestedDocuments: ["Tax Return"], defaultNotes: "", active: "Yes", defaultChecked: true },
    { name: "Lift Servicing", category: "Maintenance", defaultFrequency: "Monthly", defaultReminderPeriod: "7 days before", suggestedDocuments: ["Service Report"], defaultNotes: "", active: "Yes", defaultChecked: false },
    { name: "Pest Control", category: "Maintenance", defaultFrequency: "Quarterly", defaultReminderPeriod: "14 days before", suggestedDocuments: ["Service Report"], defaultNotes: "", active: "Yes", defaultChecked: false },
    { name: "Backflow Testing", category: "Utilities", defaultFrequency: "Annual", defaultReminderPeriod: "30 days before", suggestedDocuments: ["Test Certificate"], defaultNotes: "", active: "Yes", defaultChecked: false },
    { name: "Generator Service", category: "Maintenance", defaultFrequency: "Annual", defaultReminderPeriod: "30 days before", suggestedDocuments: ["Service Report"], defaultNotes: "", active: "Yes", defaultChecked: false },
    { name: "Window Cleaning", category: "Grounds", defaultFrequency: "Quarterly", defaultReminderPeriod: "7 days before", suggestedDocuments: ["Invoice"], defaultNotes: "", active: "Yes", defaultChecked: false },
  ];

  let setupState = createEmptySetupState();

  function getActiveBuilding() {
    if (!activeBuildingId) {
      return null;
    }
    return findBuildingById(activeBuildingId);
  }

  function getActiveBuildingName() {
    const building = getActiveBuilding();
    if (!building) {
      return "Property";
    }
    return building.buildingName;
  }

  function goToDashboard() {
    showDashboard();
    renderBuildings();
  }

  function setBreadcrumbs(items) {
    breadcrumbItems = items;
    breadcrumbNav.hidden = items.length === 0;
    breadcrumbNav.innerHTML = items
      .map(function (item, index) {
        const separator = index < items.length - 1 ? '<span class="breadcrumb-sep">&gt;</span>' : "";
        return `<button class="breadcrumb-link" type="button" data-crumb-index="${index}">${item.label}</button>${separator}`;
      })
      .join("");
  }

  // Shared application shell: one nav definition drives every module page.
  const APP_MODULE_KEYS = ["dashboard", "Tenancy", "Contacts", "Schedule", "Documents", "settings"];

  function setActiveAppModule(moduleKey) {
    activeAppModule = APP_MODULE_KEYS.indexOf(moduleKey) === -1 ? "" : moduleKey;
    // Any screen that claims a module is a shell page, so the shell and its Property selector must be showing.
    setAppShellVisible(true);
    renderAllBuildingFilterSelects();
    if (!appModuleNav) {
      return;
    }

    Array.prototype.forEach.call(appModuleNav.querySelectorAll(".app-module-btn"), function (button) {
      button.classList.toggle("is-active", button.getAttribute("data-app-module") === activeAppModule);
      button.setAttribute("aria-current", button.getAttribute("data-app-module") === activeAppModule ? "page" : "false");
    });
  }

  // Focused workflows (setup, edit, task completion) hide the shell so Cancel/Save stay unambiguous.
  function setAppShellVisible(isVisible) {
    if (!appShellHeader) {
      return;
    }
    appShellHeader.hidden = !isVisible;
  }

  function hideAllViews() {
    dashboardView.classList.remove("is-active");
    templateLibraryView.classList.remove("is-active");
    formView.classList.remove("is-active");
    overviewView.classList.remove("is-active");
    tenancyView.classList.remove("is-active");
    leaseView.classList.remove("is-active");
    contactsView.classList.remove("is-active");
    companiesView.classList.remove("is-active");
    scheduleView.classList.remove("is-active");
    historyView.classList.remove("is-active");
    completeTaskView.classList.remove("is-active");
    placeholderView.classList.remove("is-active");
    editView.classList.remove("is-active");
    if (settingsView) {
      settingsView.classList.remove("is-active");
    }
    setAppShellVisible(true);
    renderAllBuildingFilterSelects();
  }

  function showTemplateLibraryView() {
    hideAllViews();
    templateLibraryView.classList.add("is-active");
    setActiveAppModule("settings");
    setBreadcrumbs([
      { label: "Settings", onClick: openSettingsView },
      { label: "Calendar Templates", onClick: openTemplateLibrary },
    ]);
  }

  function showSettingsView() {
    hideAllViews();
    settingsView.classList.add("is-active");
    setActiveAppModule("settings");
    setBreadcrumbs([]);
  }

  function openSettingsView() {
    renderSettingsPropertyList();
    showSettingsView();
  }

  function showDashboard() {
    hideAllViews();
    dashboardView.classList.add("is-active");
    setActiveAppModule("dashboard");
    setBreadcrumbs([]);
  }

  function showForm() {
    hideAllViews();
    setAppShellVisible(false);
    formView.classList.add("is-active");
    startSetupWorkflow();
  }

  // Property Details is not currently reachable: the Dashboard now renders the per-property
  // overview and Settings owns property administration. Retained pending a decision.
  function showOverview() {
    hideAllViews();
    overviewView.classList.add("is-active");
    setActiveAppModule("dashboard");
    setBreadcrumbs([
      { label: "Dashboard", onClick: goToDashboard },
      { label: getActiveBuildingName(), onClick: function () { openOverviewById(activeBuildingId); } },
    ]);
  }

  function showEditForm() {
    hideAllViews();
    setAppShellVisible(false);
    editView.classList.add("is-active");
    setBreadcrumbs([
      { label: "Settings", onClick: openSettingsView },
      { label: "Edit Property", onClick: showEditForm },
    ]);
  }

  function showTenancyView() {
    hideAllViews();
    tenancyView.classList.add("is-active");
    setActiveAppModule("Tenancy");
    setBreadcrumbs([]);
  }

  function showLeaseView() {
    hideAllViews();
    leaseView.classList.add("is-active");
    setActiveAppModule("Documents");
    setBreadcrumbs([]);
  }

  function showContactsView() {
    hideAllViews();
    contactsView.classList.add("is-active");
    setActiveAppModule("Contacts");
    setBreadcrumbs([]);
  }

  function showCompaniesView() {
    hideAllViews();
    companiesView.classList.add("is-active");
    setActiveAppModule("Contacts");
    setBreadcrumbs([
      { label: "Dashboard", onClick: goToDashboard },
      { label: "Contacts", onClick: openContactsView },
      { label: "Companies", onClick: openCompaniesView },
    ]);
  }

  function showScheduleView() {
    hideAllViews();
    scheduleView.classList.add("is-active");
    setActiveAppModule("Schedule");
    setBreadcrumbs([]);
  }

  function showHistoryView() {
    hideAllViews();
    historyView.classList.add("is-active");
    setActiveAppModule("Schedule");
    setBreadcrumbs([
      { label: "Dashboard", onClick: goToDashboard },
      { label: "Calendar", onClick: function () { openScheduleView(activeBuildingId); } },
      { label: "Completed", onClick: function () { openHistoryView(activeBuildingId); } },
    ]);
  }

  function showCompleteTaskView() {
    hideAllViews();
    setAppShellVisible(false);
    completeTaskView.classList.add("is-active");
    setBreadcrumbs([
      { label: "Dashboard", onClick: goToDashboard },
      { label: "Calendar", onClick: function () { openScheduleView(activeBuildingId); } },
      { label: "Complete Task", onClick: function () { openCompleteTaskView(activeScheduleItemId); } },
    ]);
  }

  function showPlaceholderViewPage() {
    hideAllViews();
    placeholderView.classList.add("is-active");
  }

  function getHealthLabel(building) {
    if (building.status === "Occupied") {
      return "Good";
    }
    return "Review";
  }

  function buildCardHtml(building) {
    const address = building.streetAddress + ", " + building.city;
    const health = getHealthLabel(building);
    return `
      <article class="building-card clickable-card" data-id="${building.id}" role="button" tabindex="0" aria-label="Open ${building.buildingName}">
        <h3>${building.buildingName}</h3>
        <p>${address}</p>
        <p><strong>Status:</strong> ${building.status}</p>
        <p><strong>Property Health:</strong> ${health}</p>
        <div class="card-meta">
          <span class="status-pill">${building.status}</span>
          <button class="btn btn-secondary open-building-btn" type="button">Open Property</button>
        </div>
        <span class="card-chevron">&gt;</span>
      </article>
    `;
  }

  function normalizeText(value) {
    return String(value || "").trim().toLowerCase();
  }

  function getMasterData() {
    return window.BuildingStorage.getMasterData();
  }

  function getCompanies() {
    const masterData = getMasterData();
    return Array.isArray(masterData.companies) ? masterData.companies : [];
  }

  function getContacts() {
    const masterData = getMasterData();
    return Array.isArray(masterData.contacts) ? masterData.contacts : [];
  }

  function normalizeSuggestedDocuments(value) {
    if (Array.isArray(value)) {
      return value
        .map(function (item) {
          return String(item || "").trim();
        })
        .filter(function (item) {
          return Boolean(item);
        });
    }

    return String(value || "")
      .split(",")
      .map(function (item) {
        return item.trim();
      })
      .filter(function (item) {
        return Boolean(item);
      });
  }

  function normalizeTemplateRecord(template) {
    const now = new Date().toISOString();
    const category = TEMPLATE_CATEGORY_OPTIONS.includes(template.category) ? template.category : "General";
    const frequency = TEMPLATE_FREQUENCY_OPTIONS.includes(template.defaultFrequency)
      ? template.defaultFrequency
      : (TEMPLATE_FREQUENCY_OPTIONS.includes(template.frequency) ? template.frequency : "Annual");
    const nextDueDate = String(template.nextDueDate || template.dueDate || "").trim();
    const activeValue = String(template.active || "Yes");
    const active = activeValue === "No" ? "No" : "Yes";

    return {
      id: String(template.id || window.BuildingStorage.createId()),
      name: String(template.name || "").trim(),
      description: String(template.description || "").trim(),
      category: category,
      defaultFrequency: frequency,
      nextDueDate: nextDueDate,
      defaultReminderPeriod: String(template.defaultReminderPeriod || "30 days before").trim(),
      suggestedDocuments: normalizeSuggestedDocuments(template.suggestedDocuments),
      defaultNotes: String(template.defaultNotes || "").trim(),
      customRecurringDates: normalizeRecurringDateEntries(template.customRecurringDates),
      active: active,
      defaultChecked: Boolean(template.defaultChecked),
      createdDate: String(template.createdDate || now),
      lastUpdated: String(template.lastUpdated || now),
    };
  }

  function normalizePropertyTemplateRecord(template) {
    const now = new Date().toISOString();
    const category = TEMPLATE_CATEGORY_OPTIONS.includes(template.category) ? template.category : "General";
    const frequency = TEMPLATE_FREQUENCY_OPTIONS.includes(template.defaultFrequency)
      ? template.defaultFrequency
      : (TEMPLATE_FREQUENCY_OPTIONS.includes(template.frequency) ? template.frequency : "Annual");
    const activeValue = String(template.active || "No");
    const active = activeValue === "Yes" ? "Yes" : "No";
    const attachments = Array.isArray(template.attachments) ? template.attachments : [];
    const normalizedAttachments = attachments
      .map(function (attachment) {
        return {
          id: String(attachment.id || window.BuildingStorage.createId()),
          type: SCHEDULE_DOCUMENT_TYPES.includes(String(attachment.type || ""))
            ? String(attachment.type)
            : "Other",
          fileName: String(attachment.fileName || ""),
          mimeType: String(attachment.mimeType || "application/octet-stream"),
          sizeBytes: typeof attachment.sizeBytes === "number" ? attachment.sizeBytes : 0,
          uploadedAt: String(attachment.uploadedAt || now),
          lastUpdated: String(attachment.lastUpdated || now),
          storage: attachment.storage && typeof attachment.storage === "object"
            ? {
              kind: attachment.storage.kind || "data-url",
              dataUrl: attachment.storage.dataUrl || "",
              previewStatus: attachment.storage.previewStatus || "not-generated",
              ocrStatus: attachment.storage.ocrStatus || "not-indexed",
            }
            : {
              kind: "data-url",
              dataUrl: "",
              previewStatus: "not-generated",
              ocrStatus: "not-indexed",
            },
        };
      })
      .filter(function (attachment) {
        return Boolean(attachment.type);
      });
    const nextDueDate = String(template.nextDueDate || "").trim();

    return {
      id: String(template.id || window.BuildingStorage.createId()),
      masterTemplateId: String(template.masterTemplateId || "").trim(),
      propertyId: String(template.propertyId || "").trim(),
      name: String(template.name || "").trim(),
      category: category,
      defaultFrequency: frequency,
      initialDueDate: String(template.initialDueDate || nextDueDate).trim(),
      nextDueDate: nextDueDate,
      defaultReminderPeriod: String(template.defaultReminderPeriod || "").trim(),
      suggestedDocuments: normalizeSuggestedDocuments(template.suggestedDocuments),
      defaultNotes: String(template.defaultNotes || "").trim(),
      preferredCompanyId: String(template.preferredCompanyId || "").trim(),
      preferredContactId: String(template.preferredContactId || "").trim(),
      attachments: normalizedAttachments,
      customRecurringDates: normalizeRecurringDateEntries(template.customRecurringDates),
      active: active,
      createdDate: String(template.createdDate || now),
      lastUpdated: String(template.lastUpdated || now),
    };
  }

  function getScheduledItemTemplates() {
    const masterData = getMasterData();
    const templates = Array.isArray(masterData.scheduledItemTemplates) ? masterData.scheduledItemTemplates : [];
    return templates.map(normalizeTemplateRecord);
  }

  function saveScheduledItemTemplates(templates) {
    const masterData = getMasterData();
    window.BuildingStorage.saveMasterData({
      ...masterData,
      scheduledItemTemplates: templates,
    });
  }

  function ensureTemplateLibrarySeeded() {
    const current = getScheduledItemTemplates();
    if (current.length === 0) {
      const seeded = DEFAULT_TEMPLATE_LIBRARY.map(function (template) {
        return normalizeTemplateRecord({
          ...template,
          id: window.BuildingStorage.createId(),
        });
      });
      saveScheduledItemTemplates(seeded);
      return;
    }

    const normalized = current.map(normalizeTemplateRecord);
    const changed = JSON.stringify(current) !== JSON.stringify(normalized);
    if (changed) {
      saveScheduledItemTemplates(normalized);
    }
  }

  function findTemplateById(templateId) {
    return getScheduledItemTemplates().find(function (template) {
      return template.id === templateId;
    }) || null;
  }

  // Single definition of an active master template; every selection path must use it.
  function isMasterTemplateActive(template) {
    return Boolean(template) && template.active === "Yes";
  }

  function getActiveScheduledItemTemplates() {
    return getScheduledItemTemplates().filter(isMasterTemplateActive);
  }

  function findMasterTemplateById(templateId) {
    return findTemplateById(templateId);
  }

  function createPropertyTemplateFromMaster(masterTemplate, overrides) {
    const now = new Date().toISOString();
    const base = {
      id: window.BuildingStorage.createId(),
      masterTemplateId: masterTemplate ? masterTemplate.id : "",
      propertyId: "",
      name: masterTemplate ? masterTemplate.name : "",
      category: masterTemplate ? masterTemplate.category : "General",
      defaultFrequency: masterTemplate ? masterTemplate.defaultFrequency : "Annual",
      initialDueDate: "",
      nextDueDate: "",
      defaultReminderPeriod: "",
      suggestedDocuments: [],
      defaultNotes: "",
      preferredCompanyId: "",
      preferredContactId: "",
      attachments: [],
      customRecurringDates: [],
      active: "No",
      createdDate: now,
      lastUpdated: now,
    };

    return normalizePropertyTemplateRecord({
      ...base,
      ...(overrides || {}),
    });
  }

  function getPropertyTemplates(building) {
    const templates = building && Array.isArray(building.propertyTemplates) ? building.propertyTemplates : [];
    return templates.map(normalizePropertyTemplateRecord);
  }

  function findPropertyTemplateById(building, templateId) {
    return getPropertyTemplates(building).find(function (template) {
      return template.id === templateId;
    }) || null;
  }

  function upsertTemplate(template) {
    const templates = getScheduledItemTemplates();
    const exists = templates.some(function (existing) {
      return existing.id === template.id;
    });

    const normalized = normalizeTemplateRecord(template);
    const next = exists
      ? templates.map(function (existing) {
        return existing.id === normalized.id ? normalized : existing;
      })
      : templates.concat(normalized);

    saveScheduledItemTemplates(next);
    return normalized;
  }

  function findCompanyById(companyId) {
    return getCompanies().find(function (company) {
      return company.id === companyId;
    }) || null;
  }

  // --- Contact relationship layer ------------------------------------------
  // Contacts are stored once in master data. Their links to Properties, Tenancies,
  // Calendar items and Companies are derived here from the canonical id fields, so there is
  // one consolidated read model without a second persisted collection that could drift.
  const CONTACT_RELATIONSHIP_TYPES = ["Property", "Tenancy", "Calendar", "Company"];

  function buildContactRelationship(type, targetId, targetName, role, building) {
    return {
      type: type,
      targetId: String(targetId || ""),
      targetName: String(targetName || "Not set"),
      role: String(role || "").trim() || "Linked",
      buildingId: building ? String(building.id || "") : "",
      buildingName: building ? String(building.buildingName || "") : "",
    };
  }

  function collectContactRelationshipsForBuilding(building, relationshipsByContactId) {
    const normalized = ensureWorkflowCollections(building);
    const add = function (contactId, relationship) {
      const id = String(contactId || "").trim();
      if (!id) {
        return;
      }
      if (!relationshipsByContactId.has(id)) {
        relationshipsByContactId.set(id, []);
      }
      const list = relationshipsByContactId.get(id);
      const isDuplicate = list.some(function (existing) {
        return existing.type === relationship.type
          && existing.targetId === relationship.targetId
          && existing.role === relationship.role;
      });
      if (!isDuplicate) {
        list.push(relationship);
      }
    };

    const relationshipMap = getBuildingContactRelationshipMap(normalized);
    (Array.isArray(normalized.buildingContactAssignments) ? normalized.buildingContactAssignments : [])
      .forEach(function (contactId) {
        add(contactId, buildContactRelationship(
          "Property",
          normalized.id,
          normalized.buildingName,
          relationshipMap[contactId] || "Property Contact",
          normalized
        ));
      });

    getAllTenanciesForBuilding(normalized).forEach(function (tenancy) {
      getTenancyContactRefs(tenancy).forEach(function (contactId) {
        add(contactId, buildContactRelationship(
          "Tenancy",
          tenancy.id,
          tenancy.tradingName || tenancy.companyName || "Tenancy",
          "Tenant Contact",
          normalized
        ));
      });
    });

    (normalized.scheduleItems || []).forEach(function (item) {
      add(item.preferredContactId, buildContactRelationship(
        "Calendar",
        item.id,
        item.taskName || "Calendar Item",
        "Preferred Contact",
        normalized
      ));
    });
  }

  // Relationships across the current Property selector scope, keyed by contact id.
  function getContactRelationshipIndex() {
    const relationshipsByContactId = new Map();
    getBuildingsForFilter().forEach(function (building) {
      collectContactRelationshipsForBuilding(building, relationshipsByContactId);
    });

    // Duplicate master contact records must not multiply the derived company relationship.
    dedupeContacts(getContacts()).forEach(function (contact) {
      const companyName = contact && contact.companyId ? getCompanyNameById(contact.companyId, "") : "";
      if (!contact || !contact.companyId || !companyName) {
        return;
      }
      const id = String(contact.id || "").trim();
      if (!id) {
        return;
      }
      if (!relationshipsByContactId.has(id)) {
        relationshipsByContactId.set(id, []);
      }
      const list = relationshipsByContactId.get(id);
      const alreadyLinked = list.some(function (existing) {
        return existing.type === "Company" && existing.targetId === String(contact.companyId || "");
      });
      if (!alreadyLinked) {
        list.push(buildContactRelationship("Company", contact.companyId, companyName, "Company", null));
      }
    });

    return relationshipsByContactId;
  }

  function getRelationshipsForContact(contactId) {
    return getContactRelationshipIndex().get(String(contactId || "").trim()) || [];
  }

  function groupRelationshipsByType(relationships) {
    return CONTACT_RELATIONSHIP_TYPES
      .map(function (type) {
        return {
          type: type,
          items: relationships.filter(function (relationship) {
            return relationship.type === type;
          }),
        };
      })
      .filter(function (group) {
        return group.items.length > 0;
      });
  }

  // Compact repository summary: operational links only. Company is omitted because the
  // contact's company is already shown with their details.
  function summarizeContactRelationships(relationships) {
    const seenTargets = new Set();
    const propertyNames = [];
    const tenancyNames = [];
    const calendarTargets = new Set();

    (relationships || []).forEach(function (relationship) {
      if (!relationship) {
        return;
      }

      const targetKey = `${relationship.type}|${String(relationship.targetId || relationship.targetName || "")}`;
      if (relationship.type === "Calendar") {
        calendarTargets.add(targetKey);
        return;
      }

      if (relationship.type !== "Property" && relationship.type !== "Tenancy") {
        return;
      }

      if (seenTargets.has(targetKey)) {
        return;
      }
      seenTargets.add(targetKey);

      const name = String(relationship.targetName || "").trim();
      if (!name) {
        return;
      }

      if (relationship.type === "Property") {
        propertyNames.push(name);
        return;
      }
      tenancyNames.push(name);
    });

    const parts = propertyNames.concat(tenancyNames);
    if (calendarTargets.size > 0) {
      parts.push(calendarTargets.size === 1 ? "1 Calendar item" : `${calendarTargets.size} Calendar items`);
    }

    return parts;
  }

  function findContactById(contactId) {
    return getContacts().find(function (contact) {
      return contact.id === contactId;
    }) || null;
  }

  function getCompanyNameById(companyId, fallback) {
    const company = findCompanyById(companyId);
    if (company && company.name) {
      return company.name;
    }
    return fallback || "Not set";
  }

  function getContactNameById(contactId) {
    const contact = findContactById(contactId);
    if (contact && contact.name) {
      return contact.name;
    }
    return "Not set";
  }

  function ensureMasterMigration() {
    window.BuildingStorage.migrateLegacyContactsToMaster();
  }

  function normalizeAllBuildingsForWorkflowCollections() {
    const buildings = window.BuildingStorage.getBuildings();
    buildings.forEach(function (building) {
      const normalized = ensureWorkflowCollections(building);
      if (JSON.stringify(normalized) === JSON.stringify(building)) {
        return;
      }

      window.BuildingStorage.updateBuilding(normalized);
    });
  }

  function normalizeRelationshipLabel(value) {
    const trimmed = String(value || "").trim();
    if (!trimmed) {
      return "Other";
    }
    return LEGACY_RELATIONSHIP_NORMALIZATION[trimmed] || trimmed;
  }

  function getScheduleItemsLinkedToContact(building, contactId) {
    if (!building || !contactId) {
      return [];
    }

    const normalized = ensureWorkflowCollections(building);
    return (normalized.scheduleItems || [])
      .filter(function (item) {
        return String(item.preferredContactId || "") === String(contactId);
      })
      .sort(function (left, right) {
        return new Date(left.dueDate).getTime() - new Date(right.dueDate).getTime();
      });
  }

  function isKnownRelationship(value) {
    return RELATIONSHIP_OPTIONS.includes(value);
  }

  function getBuildingContactRelationshipMap(building) {
    if (!building) {
      return {};
    }

    const map = building.contactRelationshipById && typeof building.contactRelationshipById === "object"
      ? building.contactRelationshipById
      : {};
    // Legacy data kept the property relationship map on the tenancy; still read it so labels survive.
    const legacyMap = building.tenancy && building.tenancy.contactRelationshipById && typeof building.tenancy.contactRelationshipById === "object"
      ? building.tenancy.contactRelationshipById
      : {};

    return { ...legacyMap, ...map };
  }

  function getBuildingRelationshipForContact(building, contact) {
    if (!building || !contact) {
      return "Other";
    }

    const relationshipMap = getBuildingContactRelationshipMap(building);
    const mapped = normalizeRelationshipLabel(relationshipMap[contact.id]);
    if (mapped && mapped !== "Other") {
      return mapped;
    }

    return normalizeRelationshipLabel(contact.responsibility || "Other");
  }

  // Property-level contact links always live on the building; tenancy.contactRefs is tenancy-only.
  function applyContactRelationshipToBuilding(building, contactId, relationship) {
    const normalizedRelationship = normalizeRelationshipLabel(relationship);
    const now = new Date().toISOString();

    const assignments = Array.isArray(building.buildingContactAssignments) ? building.buildingContactAssignments : [];
    const nextAssignments = assignments.includes(contactId) ? assignments.slice() : assignments.concat(contactId);
    const nextMap = {
      ...getBuildingContactRelationshipMap(building),
      [contactId]: normalizedRelationship,
    };

    return {
      ...building,
      buildingContactAssignments: nextAssignments,
      contactRelationshipById: nextMap,
      lastUpdated: now,
    };
  }

  function removeContactRelationshipFromBuilding(building, contactId) {
    const currentMap = getBuildingContactRelationshipMap(building);
    const nextMap = {
      ...currentMap,
    };
    delete nextMap[contactId];

    const assignments = Array.isArray(building.buildingContactAssignments) ? building.buildingContactAssignments : [];
    return {
      ...building,
      buildingContactAssignments: assignments.filter(function (id) {
        return id !== contactId;
      }),
      contactRelationshipById: nextMap,
      lastUpdated: new Date().toISOString(),
    };
  }

  function saveCurrentPropertyId(propertyId) {
    const normalized = String(propertyId || "").trim();
    localStorage.setItem(CURRENT_PROPERTY_KEY, normalized);

    // Keep legacy key in sync for backward compatibility.
    if (normalized) {
      localStorage.setItem(ACTIVE_BUILDING_KEY, normalized);
      return;
    }

    localStorage.removeItem(ACTIVE_BUILDING_KEY);
  }

  function getSavedCurrentPropertyId() {
    const currentPropertyRaw = localStorage.getItem(CURRENT_PROPERTY_KEY);
    if (currentPropertyRaw !== null) {
      return String(currentPropertyRaw || "").trim();
    }

    return String(localStorage.getItem(ACTIVE_BUILDING_KEY) || "").trim();
  }

  function setCurrentPropertyId(propertyId) {
    activeBuildingId = String(propertyId || "").trim();
    saveCurrentPropertyId(activeBuildingId);
  }

  function syncScheduleFilterToCurrentProperty() {
    scheduleFilters = {
      ...scheduleFilters,
      property: activeBuildingId,
    };
  }

  // Shared Building filter for Schedule, Tenancies, Contacts and Documents.
  // activeBuildingId is the single source of truth; "" means All Buildings.
  function getBuildingFilterId() {
    return activeBuildingId;
  }

  // Properties without an archived flag predate archiving and are treated as active.
  function isBuildingArchived(building) {
    return Boolean(building && building.archived === true);
  }

  function getAllBuildingsIncludingArchived() {
    return window.BuildingStorage.getBuildings().slice().sort(function (left, right) {
      return String(left.buildingName || "").localeCompare(String(right.buildingName || ""), undefined, { sensitivity: "base" });
    });
  }

  function getOperationalBuildings() {
    return window.BuildingStorage.getBuildings().filter(function (building) {
      return !isBuildingArchived(building);
    });
  }

  function getSortedBuildings() {
    return getOperationalBuildings().slice().sort(function (left, right) {
      return String(left.buildingName || "").localeCompare(String(right.buildingName || ""), undefined, { sensitivity: "base" });
    });
  }

  // Every filtered page reads its records from here, so All Properties is a real portfolio view.
  function getBuildingsForFilter() {
    const buildings = getOperationalBuildings();
    const filterId = getBuildingFilterId();
    if (!filterId) {
      return buildings;
    }

    return buildings.filter(function (building) {
      return String(building.id || "") === filterId;
    });
  }

  function renderBuildingFilterOptions(selectElement) {
    if (!selectElement) {
      return;
    }

    const filterId = getBuildingFilterId();
    selectElement.innerHTML = ['<option value="">All Properties</option>']
      .concat(getSortedBuildings().map(function (building) {
        return `<option value="${escapeHtml(building.id)}">${escapeHtml(building.buildingName)}</option>`;
      }))
      .join("");
    selectElement.value = filterId;
    if (selectElement.value !== filterId) {
      selectElement.value = "";
    }
  }

  // The shared shell owns the only Property selector, so every module stays in sync.
  function renderAllBuildingFilterSelects() {
    renderBuildingFilterOptions(appPropertySelector);
  }

  function applyBuildingFilterSelection(buildingId) {
    const nextId = String(buildingId || "").trim();
    const target = findBuildingById(nextId);
    setCurrentPropertyId(target && !isBuildingArchived(target) ? nextId : "");
    syncScheduleFilterToCurrentProperty();
    renderAllBuildingFilterSelects();
    renderBuildings();
  }

  function getBuildingFilterEmptySuffix() {
    return getBuildingFilterId() ? "this Property" : "your properties";
  }

  function updateSelectedBuildingHeader() {
    renderAllBuildingFilterSelects();
  }

  function ensureActiveBuildingSelection(buildings) {
    if (!Array.isArray(buildings) || buildings.length === 0) {
      setCurrentPropertyId("");
      return;
    }

    if (activeBuildingId && buildings.some(function (building) { return building.id === activeBuildingId; })) {
      return;
    }

    const savedId = getSavedCurrentPropertyId();
    const hasSavedSelection = localStorage.getItem(CURRENT_PROPERTY_KEY) !== null
      || localStorage.getItem(ACTIVE_BUILDING_KEY) !== null;
    if (!savedId) {
      if (hasSavedSelection) {
        setCurrentPropertyId("");
        return;
      }

      setCurrentPropertyId(buildings[0].id);
      return;
    }

    const saved = buildings.find(function (building) {
      return building.id === savedId;
    });
    setCurrentPropertyId(saved ? saved.id : buildings[0].id);
  }

  function renderSettingsPropertyList() {
    if (!settingsPropertyList) {
      return;
    }

    const buildings = getAllBuildingsIncludingArchived();
    if (buildings.length === 0) {
      settingsPropertyList.innerHTML = '<p class="module-placeholder">No properties have been added yet.</p>';
      return;
    }

    settingsPropertyList.innerHTML = buildings.map(function (building) {
      const archived = isBuildingArchived(building);
      const incomplete = building.setupIncomplete === true;
      const address = [building.streetAddress, building.city].filter(Boolean).join(", ");
      const setupStep = Math.max(1, Math.min(5, Number(building.setupStep || 1)));
      return `
        <article class="building-card settings-property-card${archived ? " is-archived" : ""}" data-settings-property-id="${escapeHtml(building.id)}">
          <h3>${escapeHtml(building.buildingName || "Untitled Property")}</h3>
          ${address ? `<p>${escapeHtml(address)}</p>` : ""}
          <p><strong>Status:</strong> ${archived ? "Archived" : escapeHtml(building.status || "Active")}</p>
          ${incomplete ? `<p><strong>Setup:</strong> Incomplete · Step ${setupStep} of 5</p>` : ""}
          <div class="document-item-actions settings-property-actions">
            ${incomplete && !archived ? '<button class="btn btn-primary lease-tile-btn" type="button" data-settings-property-action="resume-setup">Resume Setup</button>' : ""}
            <button class="btn btn-secondary lease-tile-btn" type="button" data-settings-property-action="edit">Edit Property</button>
          </div>
        </article>
      `;
    }).join("");
  }

  // Dashboard counts must match the Documents module, so they read the same repository records.
  function getDocumentRepositoryCount() {
    return getDocumentRegisterRecords().length;
  }

  function getPortfolioSummaryCounts(buildings) {
    return buildings.reduce(function (totals, building) {
      const normalized = ensureWorkflowCollections(building);
      const scheduleItems = Array.isArray(normalized.scheduleItems) ? normalized.scheduleItems : [];
      totals.properties += 1;
      totals.tenancies += getAllTenanciesForBuilding(normalized).length;
      totals.overdue += scheduleItems.filter(function (item) {
        return getScheduleBucket(item) === "overdue";
      }).length;
      totals.dueSoon += scheduleItems.filter(function (item) {
        const bucket = getScheduleBucket(item);
        return bucket === "week" || bucket === "month";
      }).length;
      return totals;
    }, { properties: 0, tenancies: 0, overdue: 0, dueSoon: 0 });
  }

  // Dashboard sections read from this single summary so future panels can be added centrally.
  function renderWorkspaceSummary(building) {
    if (!building) {
      const totals = getPortfolioSummaryCounts(getOperationalBuildings());
      if (workspaceDashboardTitle) {
        workspaceDashboardTitle.textContent = "Portfolio Overview";
      }
      workspaceDashboardSummary.innerHTML = `
        <div><dt>Property</dt><dd>All Properties</dd></div>
        <div><dt>Properties</dt><dd>${totals.properties}</dd></div>
        <div><dt>Tenancies</dt><dd>${totals.tenancies}</dd></div>
        <div><dt>Overdue Items</dt><dd>${totals.overdue}</dd></div>
        <div><dt>Due Soon</dt><dd>${totals.dueSoon}</dd></div>
        <div><dt>Documents</dt><dd>${getDocumentRepositoryCount()}</dd></div>
      `;
      return;
    }

    const normalized = ensureWorkflowCollections(building);
    const currentTenant = normalized.tenancy ? normalized.tenancy.companyName : "None";
    const documentsCount = getDocumentRepositoryCount();
    const overdueCount = normalized.scheduleItems.filter(function (item) {
      return getScheduleBucket(item) === "overdue";
    }).length;
    const nextItem = normalized.scheduleItems
      .slice()
      .sort(function (a, b) {
        return new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime();
      })[0] || null;
    const nextItemText = nextItem ? `${nextItem.taskName} (${formatDate(nextItem.dueDate)})` : "None scheduled";

    if (workspaceDashboardTitle) {
      workspaceDashboardTitle.textContent = "Property Overview";
    }
    workspaceDashboardSummary.innerHTML = `
      <div><dt>Property Name</dt><dd>${normalized.buildingName}</dd></div>
      <div><dt>Address</dt><dd>${normalized.streetAddress}, ${normalized.city}</dd></div>
      <div><dt>Current Tenant</dt><dd>${currentTenant}</dd></div>
      <div><dt>Next Calendar Item</dt><dd>${nextItemText}</dd></div>
      <div><dt>Overdue Items</dt><dd>${overdueCount}</dd></div>
      <div><dt>Documents</dt><dd>${documentsCount}</dd></div>
    `;
  }

  function renderBuildings() {
    const buildings = getOperationalBuildings();
    renderSettingsPropertyList();

    if (buildings.length === 0) {
      emptyState.style.display = "block";
      workspaceDashboardCard.style.display = "none";
      updateSelectedBuildingHeader();
      return;
    }

    ensureActiveBuildingSelection(buildings);
    const activeBuilding = findBuildingById(activeBuildingId);

    emptyState.style.display = "none";
    workspaceDashboardCard.style.display = "block";
    updateSelectedBuildingHeader();
    renderWorkspaceSummary(activeBuilding);
  }

  function createEmptySetupState() {
    return {
      currentStep: 1,
      propertyId: "",
      buildingDetails: null,
      tenancy: null,
      linkedContacts: [],
      selectedTemplateIds: [],
      configuredScheduleItems: [],
      createdBuildingId: "",
      finishSummary: null,
    };
  }

  function createDefaultDocumentCategories() {
    return DEFAULT_DOCUMENT_CATEGORY_DEFINITIONS.map(function (category, index) {
      return {
        id: window.BuildingStorage.createId(),
        key: category.key,
        name: category.name,
        description: category.description,
        icon: category.icon,
        source: category.source,
        sortOrder: index,
        isCollapsed: false,
      };
    });
  }

  function normalizeDocumentCategories(categories) {
    const defaults = createDefaultDocumentCategories();
    const source = Array.isArray(categories) ? categories : defaults;

    return source
      .map(function (category, index) {
        const fallback = defaults.find(function (item) {
          return item.key === category.key;
        }) || {};

        return {
          id: String(category.id || fallback.id || window.BuildingStorage.createId()),
          key: String(category.key || fallback.key || `document-category-${index + 1}`),
          name: String(category.name || fallback.name || "Untitled Category").trim() || "Untitled Category",
          description: String(category.description || fallback.description || "").trim(),
          icon: String(category.icon || fallback.icon || "📁").trim() || "📁",
          source: String(category.source || fallback.source || "building"),
          sortOrder: typeof category.sortOrder === "number" ? category.sortOrder : index,
          isCollapsed: Boolean(category.isCollapsed),
        };
      })
      .sort(function (left, right) {
        return left.sortOrder - right.sortOrder;
      })
      .map(function (category, index) {
        return {
          ...category,
          sortOrder: index,
        };
      });
  }

  function getSetupProgressStep(step) {
    if (step === 5) {
      return 4;
    }
    if (step === 6) {
      return 5;
    }
    return step;
  }

  function renderSetupProgress(step) {
    const progressStep = getSetupProgressStep(step);
    const items = setupProgress.querySelectorAll(".setup-progress-item");
    items.forEach(function (item) {
      const marker = Number(item.getAttribute("data-progress-step"));
      item.classList.toggle("is-active", marker === progressStep);
      item.classList.toggle("is-complete", marker < progressStep);
    });
  }

  function showSetupStep(step) {
    setupState.currentStep = step;
    setupStep1.classList.toggle("is-active", step === 1);
    setupStep2.classList.toggle("is-active", step === 2);
    setupStep3.classList.toggle("is-active", step === 3);
    setupStep4.classList.toggle("is-active", step === 4);
    setupStep5.classList.toggle("is-active", step === 5);
    setupStep6.classList.toggle("is-active", step === 6);
    setupBackBtn.style.display = step > 1 && step < 6 ? "block" : "none";
    renderSetupProgress(step);
  }

  function startSetupWorkflow() {
    setupState = createEmptySetupState();
    buildingForm.reset();
    setupTenancyForm.reset();
    setupNewContactForm.reset();
    setupExistingContactForm.reset();
    setupTenancyForm.style.display = "none";
    setupExistingContactForm.style.display = "none";
    setupNewContactForm.style.display = "none";
    setupTenancyNewCompanyWrap.style.display = "none";
    setupNewContactCompanyWrap.style.display = "none";
    setupLinkedContactsList.innerHTML = '<p class="module-placeholder">No contacts linked yet.</p>';
    setBreadcrumbs([
      { label: "Properties", onClick: goToDashboard },
      { label: "New Property Setup", onClick: showForm },
    ]);
    renderSetupRelationshipOptions(setupExistingContactRelationship, "Other");
    renderSetupRelationshipOptions(setupNewContactRelationship, "Other");
    renderSetupTenancyCompanyOptions("");
    renderSetupContactCompanyOptions("");
    renderSetupExistingContactOptions("");
    renderTemplateLibrary();
    showSetupStep(1);
  }

  function resumeSetupWorkflow(building) {
    if (!building || !building.id) {
      return;
    }

    setupState = createEmptySetupState();
    setupState.propertyId = building.id;
    setupState.createdBuildingId = building.id;

    setupState.buildingDetails = {
      buildingName: String(building.buildingName || ""),
      streetAddress: String(building.streetAddress || ""),
      city: String(building.city || ""),
      owner: String(building.owner || ""),
      propertyManager: String(building.propertyManager || ""),
      buildingType: String(building.buildingType || ""),
    };

    buildingForm.elements.buildingName.value = setupState.buildingDetails.buildingName;
    buildingForm.elements.streetAddress.value = setupState.buildingDetails.streetAddress;
    buildingForm.elements.city.value = setupState.buildingDetails.city;
    buildingForm.elements.owner.value = setupState.buildingDetails.owner;
    buildingForm.elements.propertyManager.value = setupState.buildingDetails.propertyManager;
    buildingForm.elements.buildingType.value = setupState.buildingDetails.buildingType;

    const draft = building.setupDraft && typeof building.setupDraft === "object"
      ? building.setupDraft
      : {};

    setupState.linkedContacts = Array.isArray(draft.linkedContacts)
      ? draft.linkedContacts.map(function (entry) { return { ...entry }; })
      : [];

    setupState.selectedTemplateIds = Array.isArray(draft.selectedTemplateIds)
      ? draft.selectedTemplateIds.slice()
      : [];

    setupState.configuredScheduleItems = Array.isArray(draft.configuredScheduleItems)
      ? draft.configuredScheduleItems.map(function (item) { return { ...item }; })
      : [];

    const existingTenancies = getAllTenanciesForBuilding(building);
    const existingTenancy = existingTenancies.length > 0 ? existingTenancies[0] : null;
    const tenancyDraft = draft.tenancy && typeof draft.tenancy === "object"
      ? draft.tenancy
      : null;
    const tenancy = tenancyDraft || existingTenancy;

    if (tenancy) {
      setupState.tenancy = {
        companyId: String(tenancy.companyId || ""),
        companyName: String(tenancy.companyName || ""),
        leaseStart: String(tenancy.leaseStart || ""),
        leaseEnd: String(tenancy.leaseEnd || ""),
        notes: String(tenancy.notes || ""),
      };

      renderSetupTenancyCompanyOptions(setupState.tenancy.companyId);

      if (setupState.tenancy.companyId === "__new__") {
        setupTenancyCompanyId.value = "__new__";
        setupTenancyNewCompanyWrap.style.display = "block";
        setupTenancyNewCompanyName.required = true;
        setupTenancyNewCompanyName.value = String(tenancy.newCompanyName || tenancy.companyName || "");
      } else {
        setupTenancyCompanyId.value = setupState.tenancy.companyId;
        setupTenancyNewCompanyWrap.style.display = "none";
        setupTenancyNewCompanyName.required = false;
      }

      setupTenancyForm.elements.leaseStart.value = setupState.tenancy.leaseStart;
      setupTenancyForm.elements.leaseEnd.value = setupState.tenancy.leaseEnd;
      setupTenancyForm.elements.notes.value = setupState.tenancy.notes;
      setupTenancyForm.style.display = "grid";
    } else {
      renderSetupTenancyCompanyOptions("");
      setupTenancyForm.reset();
      setupTenancyForm.style.display = "none";
    }

    setupExistingContactForm.style.display = "none";
    setupNewContactForm.style.display = "none";
    setupTenancyNewCompanyWrap.style.display = "none";
    setupNewContactCompanyWrap.style.display = "none";

    renderSetupRelationshipOptions(setupExistingContactRelationship, "Other");
    renderSetupRelationshipOptions(setupNewContactRelationship, "Other");
    renderSetupContactCompanyOptions("");
    renderSetupExistingContactOptions("");
    renderSetupLinkedContacts();
    renderTemplateLibrary();

    setupTemplateList.querySelectorAll('input[type="checkbox"]').forEach(function (input) {
      input.checked = setupState.selectedTemplateIds.includes(String(input.value || ""));
    });

    const savedStep = Math.max(1, Math.min(5, Number(building.setupStep || 1)));

    if (savedStep === 5) {
      renderConfigureSelectedItems();
    }

    hideAllViews();
    setAppShellVisible(false);
    formView.classList.add("is-active");

    setBreadcrumbs([
      { label: "Settings", onClick: openSettingsView },
      { label: "Resume Property Setup", onClick: function () { resumeSetupWorkflow(building); } },
    ]);

    showSetupStep(savedStep);
  }

  function buildSetupBuildingDetails() {
    const formData = new FormData(buildingForm);
    return {
      buildingName: String(formData.get("buildingName") || "").trim(),
      streetAddress: String(formData.get("streetAddress") || "").trim(),
      city: String(formData.get("city") || "").trim(),
      owner: String(formData.get("owner") || "").trim(),
      propertyManager: String(formData.get("propertyManager") || "").trim(),
      buildingType: String(formData.get("buildingType") || "").trim(),
    };
  }

  function renderSetupTenancyCompanyOptions(selectedId) {
    const options = ['<option value="">Select a company</option>'];
    getUniqueCompaniesByName().forEach(function (company) {
      const selected = company.id === selectedId ? " selected" : "";
      options.push(`<option value="${company.id}"${selected}>${company.name}</option>`);
    });
    options.push('<option value="__new__">+ Add new company</option>');
    setupTenancyCompanyId.innerHTML = options.join("");
  }

  function handleSetupTenancyCompanyChange() {
    const isNew = setupTenancyCompanyId.value === "__new__";
    setupTenancyNewCompanyWrap.style.display = isNew ? "block" : "none";
    setupTenancyNewCompanyName.required = isNew;
    if (!isNew) {
      setupTenancyNewCompanyName.value = "";
    }
  }

  function saveSetupTenancyAndContinue() {
    const companySelection = String(setupTenancyCompanyId.value || "");
    const leaseStart = String(setupTenancyForm.elements.leaseStart.value || "").trim();
    const leaseEnd = String(setupTenancyForm.elements.leaseEnd.value || "").trim();
    const notes = String(setupTenancyForm.elements.notes.value || "").trim();

    if (!companySelection || !leaseStart || !leaseEnd) {
      alert("Please complete company, lease start and lease end.");
      return;
    }

    let companyId = companySelection;
    let companyName = getCompanyNameById(companySelection, "");
    if (companySelection === "__new__") {
      const newCompanyName = String(setupTenancyNewCompanyName.value || "").trim();
      if (!newCompanyName) {
        alert("Please enter a new company name.");
        return;
      }
      const company = ensureCompanyByName(newCompanyName, "Tenant");
      companyId = company ? company.id : "";
      companyName = company ? company.name : newCompanyName;
      renderSetupTenancyCompanyOptions(companyId);
    }

    if (!companyId) {
      alert("Please select or create a valid company.");
      return;
    }

    setupState.tenancy = {
      companyId: companyId,
      companyName: companyName,
      leaseStart: leaseStart,
      leaseEnd: leaseEnd,
      notes: notes,
    };

    showSetupStep(3);
  }

  function renderSetupRelationshipOptions(selectElement, selectedValue) {
    const normalizedSelected = normalizeRelationshipLabel(selectedValue);
    const options = RELATIONSHIP_OPTIONS.map(function (role) {
      const selected = role === normalizedSelected ? " selected" : "";
      return `<option value="${role}"${selected}>${role}</option>`;
    });

    if (normalizedSelected && !isKnownRelationship(normalizedSelected)) {
      options.push(`<option value="${normalizedSelected}" selected>${normalizedSelected}</option>`);
    }

    selectElement.innerHTML = options.join("");
  }

  function renderContactRelationshipOptions(selectElement, selectedValue) {
    const normalizedSelected = normalizeRelationshipLabel(selectedValue);
    const options = RELATIONSHIP_OPTIONS.map(function (relationship) {
      const selected = relationship === normalizedSelected ? " selected" : "";
      return `<option value="${relationship}"${selected}>${relationship}</option>`;
    });

    if (normalizedSelected && !isKnownRelationship(normalizedSelected)) {
      options.push(`<option value="${normalizedSelected}" selected>${normalizedSelected}</option>`);
    }

    selectElement.innerHTML = options.join("");
  }

  function renderContactRoleBadge(role) {
    const roleText = String(role || "").trim() || "Not set";
    return `<span class="contact-role-text ${getContactRoleToneClass(roleText)}">${escapeHtml(roleText)}</span>`;
  }

  function getContactRoleToneClass(role) {
    const normalized = normalizeText(role);
    if (!normalized) {
      return "contact-role-pill-default";
    }

    if (normalized.includes("owner") || normalized.includes("manager")) {
      return "contact-role-pill-purple";
    }

    if (normalized.includes("tenant") || normalized.includes("accounts")) {
      return "contact-role-pill-orange";
    }

    if (normalized.includes("fire") || normalized.includes("emergency") || normalized.includes("security") || normalized.includes("locksmith")) {
      return "contact-role-pill-red";
    }

    if (normalized.includes("broker") || normalized.includes("solicitor") || normalized.includes("accountant")) {
      return "contact-role-pill-green";
    }

    if (
      normalized.includes("contractor")
      || normalized.includes("electrician")
      || normalized.includes("plumber")
      || normalized.includes("roof")
      || normalized.includes("gutter")
      || normalized.includes("lift")
      || normalized.includes("cleaner")
      || normalized.includes("gardener")
      || normalized.includes("hvac")
    ) {
      return "contact-role-pill-blue";
    }

    return "contact-role-pill-teal";
  }

  function getContactClassification(contact) {
    if (!contact) {
      return "Other";
    }

    const value = String(contact.contactType || contact.classification || "").trim();
    return value || "Other";
  }

  function renderSetupExistingContactOptions(selectedId) {
    const options = ['<option value="">Select existing contact</option>'];
    getContacts().forEach(function (contact) {
      const selected = contact.id === selectedId ? " selected" : "";
      const company = contact.companyId ? getCompanyNameById(contact.companyId, "") : "";
      const suffix = company ? ` (${company})` : "";
      options.push(`<option value="${contact.id}"${selected}>${contact.name}${suffix}</option>`);
    });
    setupExistingContactId.innerHTML = options.join("");
  }

  function renderSetupContactCompanyOptions(selectedId) {
    const options = ['<option value="">Select a company</option>'];
    getUniqueCompaniesByName().forEach(function (company) {
      const selected = company.id === selectedId ? " selected" : "";
      options.push(`<option value="${company.id}"${selected}>${company.name}</option>`);
    });
    options.push('<option value="__new__">+ Add new company</option>');
    setupNewContactCompanyId.innerHTML = options.join("");
  }

  function handleSetupContactCompanyChange() {
    const isNew = setupNewContactCompanyId.value === "__new__";
    setupNewContactCompanyWrap.style.display = isNew ? "block" : "none";
    setupNewContactCompanyName.required = isNew;
    if (!isNew) {
      setupNewContactCompanyName.value = "";
    }
  }

  function getSetupLinkedContactLabel(entry) {
    if (entry.type === "existing") {
      const contact = findContactById(entry.contactId);
      const name = contact ? contact.name : "Unknown contact";
      return name;
    }
    return entry.name;
  }

  function renderSetupLinkedContacts() {
    if (setupState.linkedContacts.length === 0) {
      setupLinkedContactsList.innerHTML = '<p class="module-placeholder">No contacts linked yet.</p>';
      return;
    }

    setupLinkedContactsList.innerHTML = setupState.linkedContacts
      .map(function (entry, index) {
        return `
          <article class="building-card">
            <h3>${getSetupLinkedContactLabel(entry)}</h3>
            <p><strong>Role / Service:</strong> ${renderContactRoleBadge(entry.relationship)}</p>
            <p><strong>Type:</strong> ${entry.type === "existing" ? "Existing Contact" : "New Contact"}</p>
            <div class="card-meta">
              <button class="btn btn-danger setup-remove-linked-contact" type="button" data-linked-index="${index}">Remove</button>
            </div>
          </article>
        `;
      })
      .join("");
  }

  function addExistingContactToSetup() {
    const contactId = String(setupExistingContactId.value || "").trim();
    const relationship = String(setupExistingContactRelationship.value || "Other").trim();
    if (!contactId) {
      alert("Please select an existing contact.");
      return;
    }

    const duplicate = setupState.linkedContacts.some(function (entry) {
      return entry.type === "existing" && entry.contactId === contactId;
    });
    if (duplicate) {
      alert("This contact is already linked.");
      return;
    }

    setupState.linkedContacts.push({
      type: "existing",
      contactId: contactId,
      relationship: relationship || "Other",
    });
    renderSetupLinkedContacts();
  }

  function addNewContactToSetup() {
    const companySelection = String(setupNewContactCompanyId.value || "").trim();
    const newCompanyName = String(setupNewContactCompanyName.value || "").trim();
    const name = String(setupNewContactName.value || "").trim();
    const relationship = String(setupNewContactRelationship.value || "Other").trim();
    const mobile = String(setupNewContactMobile.value || "").trim();
    const email = String(setupNewContactEmail.value || "").trim();

    if (!companySelection || !name) {
      alert("Please complete company and contact name.");
      return;
    }

    if (companySelection === "__new__" && !newCompanyName) {
      alert("Please enter a company name.");
      return;
    }

    setupState.linkedContacts.push({
      type: "new",
      name: name,
      relationship: relationship || "Other",
      mobile: mobile,
      email: email,
      companyId: companySelection,
      newCompanyName: newCompanyName,
    });

    setupNewContactForm.reset();
    renderSetupContactCompanyOptions("");
    renderSetupRelationshipOptions(setupNewContactRelationship, "Other");
    setupNewContactCompanyWrap.style.display = "none";
    renderSetupLinkedContacts();
  }

  function renderTemplateLibrary() {
    const templates = getActiveScheduledItemTemplates();

    if (templates.length === 0) {
      setupTemplateList.innerHTML = '<p class="module-placeholder">No active templates available. Add templates in the Template Library.</p>';
      return;
    }

    // Restore selections captured in this setup session (e.g. when user navigates Back).
    const previouslySelected = new Set(setupState.selectedTemplateIds || []);

    setupTemplateList.innerHTML = templates
      .map(function (template) {
        const checked = previouslySelected.has(template.id) ? " checked" : "";
        return `
          <label class="setup-checkbox-row">
            <input type="checkbox" value="${template.id}"${checked} />
            <span>${template.name} (${template.category}, ${template.defaultFrequency})</span>
          </label>
        `;
      })
      .join("");
  }

  function getTemplateById(templateId) {
    return getScheduledItemTemplates().find(function (item) {
      return item.id === templateId;
    }) || null;
  }

  function getFrequencyOptions(selected) {
    return TEMPLATE_FREQUENCY_OPTIONS
      .map(function (value) {
        const isSelected = value === selected ? " selected" : "";
        return `<option value="${value}"${isSelected}>${value}</option>`;
      })
      .join("");
  }

  function getSetupCompanyOptions(selectedId) {
    const options = ['<option value="">Not set</option>'];
    getUniqueCompaniesByName().forEach(function (company) {
      const selected = company.id === selectedId ? " selected" : "";
      options.push(`<option value="${company.id}"${selected}>${company.name}</option>`);
    });
    return options.join("");
  }

  function getSetupContactOptions(selectedId, companyId) {
    const options = ['<option value="">Not set</option>'];
    getContacts().forEach(function (contact) {
      if (companyId && contact.companyId !== companyId) {
        return;
      }
      const selected = contact.id === selectedId ? " selected" : "";
      options.push(`<option value="${contact.id}"${selected}>${contact.name}</option>`);
    });
    return options.join("");
  }

  function renderConfigureSelectedItems() {
    if (setupState.configuredScheduleItems.length === 0) {
      setupConfigureList.innerHTML = '<p class="module-placeholder">No calendar items selected. You can finish setup now.</p>';
      return;
    }

    setupConfigureList.innerHTML = setupState.configuredScheduleItems
      .map(function (item, index) {
        return `
          <article class="module-content-card setup-config-card">
            <h3>${item.taskName}</h3>
            <label for="setupStatus${index}">Status</label>
            <select id="setupStatus${index}" data-config-index="${index}" data-field="active">
              <option value="No"${item.active === "No" ? " selected" : ""}>Inactive</option>
              <option value="Yes"${item.active === "Yes" ? " selected" : ""}>Active</option>
            </select>

            <label for="setupDueDate${index}">Next Due Date</label>
            <input id="setupDueDate${index}" type="date" data-config-index="${index}" data-field="dueDate" value="${item.dueDate}" />

            <label for="setupFrequency${index}">Frequency</label>
            <select id="setupFrequency${index}" data-config-index="${index}" data-field="frequency">${getFrequencyOptions(item.frequency)}</select>

            <label for="setupReminder${index}">Reminder</label>
            <input id="setupReminder${index}" type="text" data-config-index="${index}" data-field="defaultReminderPeriod" value="${escapeHtml(item.defaultReminderPeriod)}" placeholder="e.g. 30 days before" />

            <label for="setupNotes${index}">Default Notes</label>
            <textarea id="setupNotes${index}" rows="2" data-config-index="${index}" data-field="defaultNotes">${escapeHtml(item.defaultNotes)}</textarea>

            <label for="setupSuggestedDocs${index}">Suggested Documents</label>
            <input id="setupSuggestedDocs${index}" type="text" data-config-index="${index}" data-field="suggestedDocuments" value="${escapeHtml(item.suggestedDocuments)}" placeholder="Comma separated" />

            <label for="setupPreferredCompany${index}">Preferred Company</label>
            <select id="setupPreferredCompany${index}" data-config-index="${index}" data-field="preferredCompanyId">${getSetupCompanyOptions(item.preferredCompanyId)}</select>

            <label for="setupPreferredContact${index}">Preferred Contact</label>
            <select id="setupPreferredContact${index}" data-config-index="${index}" data-field="preferredContactId">${getSetupContactOptions(item.preferredContactId, item.preferredCompanyId)}</select>
          </article>
        `;
      })
      .join("");
  }

  function handleConfigureListChange(event) {
    const target = event.target;
    if (!(target instanceof HTMLElement)) {
      return;
    }

    const index = Number(target.getAttribute("data-config-index"));
    const field = String(target.getAttribute("data-field") || "");
    if (Number.isNaN(index) || !setupState.configuredScheduleItems[index]) {
      return;
    }

    const value = "value" in target ? String(target.value || "") : "";
    setupState.configuredScheduleItems[index][field] = value;

    if (field === "preferredCompanyId") {
      const contactSelect = setupConfigureList.querySelector(`select[data-config-index="${index}"][data-field="preferredContactId"]`);
      if (contactSelect) {
        contactSelect.innerHTML = getSetupContactOptions("", value);
        setupState.configuredScheduleItems[index].preferredContactId = "";
      }
    }
  }

  function handleSetupSelectAll() {
    setupTemplateList.querySelectorAll('input[type="checkbox"]').forEach(function (input) {
      input.checked = true;
    });
  }

  function handleSetupClearAll() {
    setupTemplateList.querySelectorAll('input[type="checkbox"]').forEach(function (input) {
      input.checked = false;
    });
  }

  function captureTemplateSelection() {
    const selected = Array.from(setupTemplateList.querySelectorAll('input[type="checkbox"]'))
      .filter(function (input) {
        return input.checked;
      })
      .map(function (input) {
        return String(input.value || "");
      });

    setupState.selectedTemplateIds = selected.slice();
    setupState.configuredScheduleItems = selected.map(function (templateId) {
      const template = getTemplateById(templateId);
      const frequency = template ? template.defaultFrequency : "Quarterly";
      const category = template ? template.category : "General";
      return {
        masterTemplateId: templateId,
        taskName: template ? template.name : templateId,
        dueDate: "",
        category: category,
        frequency: frequency,
        defaultReminderPeriod: "",
        defaultNotes: "",
        suggestedDocuments: "",
        preferredCompanyId: "",
        preferredContactId: "",
        active: "No",
      };
    });
  }

  function finalizeSetupAndCreateBuilding() {
    if (!setupState.buildingDetails) {
      alert("Property details are incomplete.");
      return;
    }

    const now = new Date().toISOString();
    const linkedContactIds = [];

    setupState.linkedContacts.forEach(function (entry) {
      if (entry.type === "existing") {
        const existing = findContactById(entry.contactId);
        if (!existing) {
          return;
        }

        const currentRelationship = String(existing.responsibility || "").trim();
        if (!currentRelationship || currentRelationship === "General") {
          window.BuildingStorage.upsertContact({
            ...existing,
            contactType: getContactClassification(existing),
            responsibility: entry.relationship,
            lastUpdated: now,
          });
        }

        linkedContactIds.push(existing.id);
        return;
      }

      let companyId = entry.companyId;
      if (companyId === "__new__") {
        const createdCompany = ensureCompanyByName(entry.newCompanyName, "Service");
        companyId = createdCompany ? createdCompany.id : "";
      }

      const contact = {
        id: window.BuildingStorage.createId(),
        companyId: companyId,
        name: entry.name,
        contactType: "Other",
        responsibility: entry.relationship,
        mobile: entry.mobile,
        officePhone: "",
        email: entry.email,
        preferredContactMethod: "Phone",
        active: "Yes",
        notes: "",
        createdDate: now,
        lastUpdated: now,
      };
      window.BuildingStorage.upsertContact(contact);
      linkedContactIds.push(contact.id);
    });

    let tenancy = null;
    if (setupState.tenancy) {
      tenancy = {
        id: window.BuildingStorage.createId(),
        companyName: setupState.tenancy.companyName,
        companyId: setupState.tenancy.companyId,
        tradingName: "",
        leaseStart: setupState.tenancy.leaseStart,
        leaseEnd: setupState.tenancy.leaseEnd,
        status: "Occupied",
        notes: setupState.tenancy.notes,
        contacts: [],
        contactRefs: [],
        documents: [],
        lease: {
          notes: "",
          documents: [],
          versionHistory: [],
        },
      };
    }

    const propertyTemplates = setupState.configuredScheduleItems.map(function (item) {
      return createPropertyTemplateFromMaster(findMasterTemplateById(item.masterTemplateId), {
        masterTemplateId: item.masterTemplateId || "",
        name: item.taskName,
        category: item.category || "General",
        defaultFrequency: item.frequency || "Annual",
        nextDueDate: String(item.dueDate || "").trim(),
        defaultReminderPeriod: String(item.defaultReminderPeriod || "").trim(),
        defaultNotes: String(item.defaultNotes || "").trim(),
        suggestedDocuments: normalizeSuggestedDocuments(item.suggestedDocuments),
        preferredCompanyId: String(item.preferredCompanyId || "").trim(),
        preferredContactId: String(item.preferredContactId || "").trim(),
        active: item.active === "Yes" ? "Yes" : "No",
      });
    });

    const missingDueDateForActiveTemplate = propertyTemplates.some(function (template) {
      return template.active === "Yes" && !String(template.nextDueDate || "").trim();
    });
    if (missingDueDateForActiveTemplate) {
      alert("Please enter a next due date for all active property templates.");
      return;
    }

    const scheduleItems = propertyTemplates
      .filter(function (template) {
        return template.active === "Yes" && String(template.nextDueDate || "").trim();
      })
      .map(function (item) {
      const preferredCompanyName = item.preferredCompanyId
        ? getCompanyNameById(item.preferredCompanyId, "")
        : "";

      const scheduleItem = {
        id: window.BuildingStorage.createId(),
        templateId: item.id,
        propertyTemplateId: item.id,
        taskName: item.name,
        category: item.category || "General",
        dueDate: item.nextDueDate,
        frequency: item.defaultFrequency,
        preferredCompany: preferredCompanyName,
        preferredCompanyId: item.preferredCompanyId,
        preferredContactId: item.preferredContactId,
        status: "Future",
        createdDate: now,
        lastUpdated: now,
      };

      scheduleItem.status = getScheduleStatusText(scheduleItem);
      return scheduleItem;
    });

    const buildingId = setupState.propertyId || window.BuildingStorage.createId();
    const existingBuilding = window.BuildingStorage.getBuildingById(buildingId);
    const building = {
      ...(existingBuilding || {}),
      id: buildingId,
      buildingName: setupState.buildingDetails.buildingName,
      streetAddress: setupState.buildingDetails.streetAddress,
      city: setupState.buildingDetails.city,
      owner: setupState.buildingDetails.owner,
      propertyManager: setupState.buildingDetails.propertyManager,
      buildingType: setupState.buildingDetails.buildingType,
      status: tenancy ? "Occupied" : "Vacant",
      notes: existingBuilding ? String(existingBuilding.notes || "") : "",
      createdDate: existingBuilding ? existingBuilding.createdDate : now,
      lastUpdated: now,
      tenancy: tenancy,
      tenancies: tenancy ? [tenancy] : [],
      buildingContactAssignments: linkedContactIds.slice(),
      buildingRoles: existingBuilding && Array.isArray(existingBuilding.buildingRoles)
        ? existingBuilding.buildingRoles
        : [],
      documents: existingBuilding && Array.isArray(existingBuilding.documents)
        ? existingBuilding.documents
        : [],
      documentCategories: existingBuilding && Array.isArray(existingBuilding.documentCategories)
        ? existingBuilding.documentCategories
        : createDefaultDocumentCategories(),
      propertyTemplates: propertyTemplates,
      scheduleItems: scheduleItems,
      historyRecords: existingBuilding && Array.isArray(existingBuilding.historyRecords)
        ? existingBuilding.historyRecords
        : [],
      setupIncomplete: false,
      setupStep: 6,
      setupDraft: null,
    };

    if (existingBuilding) {
      window.BuildingStorage.updateBuilding(building);
    } else {
      window.BuildingStorage.addBuilding(building);
    }

    setupState.propertyId = buildingId;
    setupState.createdBuildingId = buildingId;
    setupState.finishSummary = {
      buildingCreated: true,
      tenancyAdded: Boolean(tenancy),
      linkedContactsCount: linkedContactIds.length,
      createdScheduleCount: scheduleItems.length,
    };

    renderSetupFinishSummary();
    showSetupStep(6);
    renderBuildings();
  }

  function renderSetupFinishSummary() {
    if (!setupState.finishSummary) {
      setupFinishSummary.innerHTML = "";
      return;
    }

    setupFinishSummary.innerHTML = `
      <p>✔ Property Created</p>
      <p>${setupState.finishSummary.tenancyAdded ? "✔ Current Tenancy Added" : "✔ Current Tenancy Skipped"}</p>
      <p>✔ ${setupState.finishSummary.linkedContactsCount} Contacts Linked</p>
      <p>✔ ${setupState.finishSummary.createdScheduleCount} Calendar Items Created</p>
    `;
  }

  function handleSetupStepOneSubmit(event) {
    event.preventDefault();

    const details = buildSetupBuildingDetails();
    setupState.buildingDetails = details;

    const now = new Date().toISOString();
    const existing = setupState.propertyId
      ? window.BuildingStorage.getBuildingById(setupState.propertyId)
      : null;

    if (existing) {
      window.BuildingStorage.updateBuilding({
        ...existing,
        ...details,
        setupIncomplete: true,
        setupStep: 2,
        lastUpdated: now,
      });
    } else {
      const propertyId = window.BuildingStorage.createId();
      const building = {
        id: propertyId,
        ...details,
        status: "Vacant",
        notes: "",
        createdDate: now,
        lastUpdated: now,
        tenancy: null,
        tenancies: [],
        buildingContactAssignments: [],
        buildingRoles: [],
        documents: [],
        documentCategories: createDefaultDocumentCategories(),
        propertyTemplates: [],
        scheduleItems: [],
        historyRecords: [],
        setupIncomplete: true,
        setupStep: 2,
      };

      window.BuildingStorage.addBuilding(building);
      setupState.propertyId = propertyId;
      setupState.createdBuildingId = propertyId;
    }

    renderBuildings();
    showSetupStep(2);
  }

  function handleSetupCancel() {
    setupState = createEmptySetupState();
    openSettingsView();
    renderBuildings();
  }

  function handleSetupSaveExit() {
    if (!setupState.propertyId) {
      alert("Complete Property Details and select Next before saving setup.");
      return;
    }

    const existingBuilding = window.BuildingStorage.getBuildingById(setupState.propertyId);
    if (!existingBuilding) {
      alert("The property could not be found.");
      return;
    }

    // Preserve partially entered tenancy details even if Save and Continue
    // has not yet been selected.
    if (setupState.currentStep === 2 && setupTenancyForm.style.display !== "none") {
      const companySelection = String(setupTenancyCompanyId.value || "");
      const newCompanyName = String(setupTenancyNewCompanyName.value || "").trim();

      setupState.tenancy = {
        companyId: companySelection,
        companyName: companySelection === "__new__"
          ? newCompanyName
          : getCompanyNameById(companySelection, ""),
        newCompanyName: newCompanyName,
        leaseStart: String(setupTenancyForm.elements.leaseStart.value || "").trim(),
        leaseEnd: String(setupTenancyForm.elements.leaseEnd.value || "").trim(),
        notes: String(setupTenancyForm.elements.notes.value || "").trim(),
      };
    }

    // If saving from the Calendar selection screen, capture the current
    // checkbox state before leaving the wizard.
    if (setupState.currentStep === 4) {
      captureTemplateSelection();
    }

    window.BuildingStorage.updateBuilding({
      ...existingBuilding,
      setupIncomplete: true,
      setupStep: setupState.currentStep,
      setupDraft: {
        tenancy: setupState.tenancy ? { ...setupState.tenancy } : null,
        linkedContacts: setupState.linkedContacts.map(function (entry) {
          return { ...entry };
        }),
        selectedTemplateIds: setupState.selectedTemplateIds.slice(),
        configuredScheduleItems: setupState.configuredScheduleItems.map(function (item) {
          return { ...item };
        }),
      },
      lastUpdated: new Date().toISOString(),
    });

    setupState = createEmptySetupState();
    renderBuildings();
    openSettingsView();
  }

  function handleSetupBack() {
    const current = setupState.currentStep;
    if (current <= 1 || current >= 6) {
      return;
    }

    const previous = current - 1;
    showSetupStep(previous);
  }

  function handleSetupAddTenancy() {
    setupTenancyForm.style.display = "grid";
    renderSetupTenancyCompanyOptions("");
  }

  function handleSetupSkipTenancy() {
    setupState.tenancy = null;
    setupTenancyForm.style.display = "none";
    showSetupStep(3);
  }

  function handleSetupCancelTenancy() {
    setupTenancyForm.reset();
    setupTenancyForm.style.display = "none";
    setupTenancyNewCompanyWrap.style.display = "none";
  }

  function handleSetupShowExistingContact() {
    setupExistingContactForm.style.display = "grid";
    setupNewContactForm.style.display = "none";
    renderSetupExistingContactOptions("");
    renderSetupRelationshipOptions(setupExistingContactRelationship, "Other");
  }

  function handleSetupShowNewContact() {
    setupNewContactForm.style.display = "grid";
    setupExistingContactForm.style.display = "none";
    renderSetupContactCompanyOptions("");
    renderSetupRelationshipOptions(setupNewContactRelationship, "Other");
  }

  function handleSetupLinkedContactListClick(event) {
    const target = event.target;
    if (!(target instanceof HTMLElement)) {
      return;
    }

    const removeBtn = target.closest(".setup-remove-linked-contact");
    if (!removeBtn) {
      return;
    }

    const index = Number(removeBtn.getAttribute("data-linked-index"));
    if (Number.isNaN(index)) {
      return;
    }

    setupState.linkedContacts = setupState.linkedContacts.filter(function (_, i) {
      return i !== index;
    });
    renderSetupLinkedContacts();
  }

  function handleSetupStepThreeNext() {
    showSetupStep(4);
  }

  function handleSetupStepFourNext() {
    captureTemplateSelection();
    if (setupState.configuredScheduleItems.length === 0) {
      // No templates selected — skip configure step and go straight to finish.
      finalizeSetupAndCreateBuilding();
      return;
    }
    renderConfigureSelectedItems();
    showSetupStep(5);
  }

  function handleSetupStepFiveFinish() {
    const missingDueDate = setupState.configuredScheduleItems.some(function (item) {
      return item.active === "Yes" && !String(item.dueDate || "").trim();
    });
    if (missingDueDate) {
      alert("Please enter a next due date for all active property templates.");
      return;
    }

    finalizeSetupAndCreateBuilding();
  }

  function handleSetupOpenBuilding() {
    if (!setupState.createdBuildingId) {
      goToDashboard();
      return;
    }

    applyBuildingFilterSelection(setupState.createdBuildingId);
    goToDashboard();
  }

  function findBuildingById(buildingId) {
    return window.BuildingStorage.getBuildingById(buildingId);
  }

  function getBuildingNameById(buildingId) {
    const building = findBuildingById(buildingId);
    return building && building.buildingName ? building.buildingName : "";
  }

  function renderPropertySelectOptions(selectedId) {
    const buildings = window.BuildingStorage.getBuildings();
    const options = ['<option value="">Select Property</option>'];

    buildings.forEach(function (building) {
      const selected = String(building.id || "") === String(selectedId || "") ? " selected" : "";
      options.push(`<option value="${building.id}"${selected}>${escapeHtml(building.buildingName)}</option>`);
    });

    return options.join("");
  }

  function formatDateTime(value) {
    if (!value) {
      return "Not recorded";
    }

    const parsed = new Date(value);
    if (Number.isNaN(parsed.getTime())) {
      return "Not recorded";
    }

    return parsed.toLocaleString();
  }

  function formatDate(value) {
    if (!value) {
      return "Not set";
    }

    const parsed = new Date(value);
    if (Number.isNaN(parsed.getTime())) {
      return "Not set";
    }

    return parsed.toLocaleDateString();
  }

  function formatLastCompletedDate(value) {
    const trimmed = String(value || "").trim();
    if (!trimmed) {
      return "Not completed yet";
    }

    return formatDate(trimmed);
  }

  function escapeHtml(value) {
    return String(value || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/\"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  const MODAL_STACK_BASE_Z_INDEX = 2200;
  const MODAL_STACK_STEP = 100;
  const modalLayerStack = [];

  function getFocusableElements(container) {
    if (!(container instanceof HTMLElement)) {
      return [];
    }

    const selectors = [
      'button:not([disabled])',
      'a[href]',
      'input:not([disabled]):not([type="hidden"])',
      'select:not([disabled])',
      'textarea:not([disabled])',
      '[tabindex]:not([tabindex="-1"])',
    ].join(",");

    return Array.from(container.querySelectorAll(selectors)).filter(function (element) {
      if (!(element instanceof HTMLElement)) {
        return false;
      }

      if (element.getAttribute("aria-hidden") === "true") {
        return false;
      }

      const style = window.getComputedStyle(element);
      return style.display !== "none" && style.visibility !== "hidden";
    });
  }

  function focusFirstElementInContainer(container) {
    const focusable = getFocusableElements(container);
    if (focusable.length > 0) {
      focusable[0].focus();
      return;
    }

    if (container instanceof HTMLElement) {
      container.focus();
    }
  }

  function isTopModalLayer(layer) {
    return modalLayerStack.length > 0 && modalLayerStack[modalLayerStack.length - 1] === layer;
  }

  function pushModalLayer(backdrop, dialog) {
    const layer = {
      backdrop: backdrop,
      dialog: dialog,
      previousActiveElement: document.activeElement instanceof HTMLElement ? document.activeElement : null,
    };

    const layerIndex = modalLayerStack.length;
    const backdropZIndex = MODAL_STACK_BASE_Z_INDEX + (layerIndex * MODAL_STACK_STEP);
    backdrop.style.zIndex = String(backdropZIndex);

    if (dialog instanceof HTMLElement) {
      dialog.style.zIndex = String(backdropZIndex + 1);
      if (!dialog.hasAttribute("tabindex")) {
        dialog.setAttribute("tabindex", "-1");
      }
    }

    modalLayerStack.push(layer);
    return layer;
  }

  function popModalLayer(layer, restoreFocus) {
    const index = modalLayerStack.lastIndexOf(layer);
    if (index === -1) {
      return;
    }

    modalLayerStack.splice(index, 1);

    if (restoreFocus && layer.previousActiveElement instanceof HTMLElement && document.contains(layer.previousActiveElement)) {
      layer.previousActiveElement.focus();
      return;
    }

    const topLayer = modalLayerStack[modalLayerStack.length - 1];
    if (topLayer && topLayer.dialog instanceof HTMLElement) {
      topLayer.dialog.focus();
    }
  }

  function enableModalFocusTrap(dialog, isLayerActive) {
    if (!(dialog instanceof HTMLElement)) {
      return function () {};
    }

    function handleKeydown(event) {
      if (event.key !== "Tab") {
        return;
      }

      if (typeof isLayerActive === "function" && !isLayerActive()) {
        return;
      }

      const focusable = getFocusableElements(dialog);
      if (focusable.length === 0) {
        event.preventDefault();
        dialog.focus();
        return;
      }

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const active = document.activeElement;

      if (event.shiftKey) {
        if (active === first || !dialog.contains(active)) {
          event.preventDefault();
          last.focus();
        }
        return;
      }

      if (active === last || !dialog.contains(active)) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", handleKeydown);
    return function releaseModalFocusTrap() {
      document.removeEventListener("keydown", handleKeydown);
    };
  }

  function toDateStart(value) {
    const date = new Date(value);
    date.setHours(0, 0, 0, 0);
    return date;
  }

  const MONTH_NAMES = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  function getMonthName(monthNumber) {
    const index = Number(monthNumber) - 1;
    if (index < 0 || index >= MONTH_NAMES.length) {
      return "";
    }

    return MONTH_NAMES[index];
  }

  function getDaysInMonth(monthNumber) {
    const month = Number(monthNumber);
    if (!month || month < 1 || month > 12) {
      return 31;
    }

    return new Date(2024, month, 0).getDate();
  }

  function normalizeRecurringDateEntry(entry) {
    if (!entry || typeof entry !== "object") {
      return null;
    }

    const day = Number(entry.day);
    const month = Number(entry.month);
    if (!Number.isInteger(day) || !Number.isInteger(month)) {
      return null;
    }
    if (day < 1 || day > 31 || month < 1 || month > 12) {
      return null;
    }

    const maxDay = getDaysInMonth(month);
    if (day > maxDay) {
      return null;
    }

    return { day: day, month: month };
  }

  function normalizeRecurringDateEntries(value) {
    if (!Array.isArray(value)) {
      return [];
    }

    const seen = new Set();
    return value
      .map(normalizeRecurringDateEntry)
      .filter(function (entry) {
        if (!entry) {
          return false;
        }

        const key = `${entry.month}-${entry.day}`;
        if (seen.has(key)) {
          return false;
        }
        seen.add(key);
        return true;
      })
      .sort(function (left, right) {
        if (left.month !== right.month) {
          return left.month - right.month;
        }
        return left.day - right.day;
      });
  }

  function formatRecurringDateEntry(entry) {
    const normalized = normalizeRecurringDateEntry(entry);
    if (!normalized) {
      return "";
    }

    return `${normalized.day} ${getMonthName(normalized.month)}`;
  }

  function getNextRecurringDatePlaceholder(baseDate, recurringDates, includeCurrent) {
    const dates = normalizeRecurringDateEntries(recurringDates);
    if (dates.length === 0) {
      return "";
    }

    const normalizedBase = toDateStart(baseDate);
    if (Number.isNaN(normalizedBase.getTime())) {
      return "";
    }

    const baseYear = normalizedBase.getFullYear();
    const baseMonth = normalizedBase.getMonth() + 1;
    const baseDay = normalizedBase.getDate();
    const allowCurrentDay = includeCurrent !== false;

    const matchingDate = dates.find(function (entry) {
      return entry.month > baseMonth || (entry.month === baseMonth && (allowCurrentDay ? entry.day >= baseDay : entry.day > baseDay));
    });

    const selected = matchingDate || dates[0];
    const selectedYear = matchingDate ? baseYear : baseYear + 1;
    return new Date(selectedYear, selected.month - 1, selected.day).toISOString().slice(0, 10);
  }

  function getFrequencyDays(frequency) {
    const map = {
      "One-off": 30,
      Weekly: 7,
      Monthly: 30,
      Quarterly: 90,
      "6 Monthly": 182,
      Annual: 365,
      Custom: 30,
    };

    return map[frequency] || 30;
  }

  function addMonthsClamped(baseDate, monthsToAdd) {
    const source = toDateStart(baseDate);
    const sourceDay = source.getDate();
    const sourceMonth = source.getMonth();
    const sourceYear = source.getFullYear();

    const targetMonthIndex = sourceMonth + monthsToAdd;
    const targetYear = sourceYear + Math.floor(targetMonthIndex / 12);
    const targetMonth = ((targetMonthIndex % 12) + 12) % 12;
    const lastDayOfTargetMonth = new Date(targetYear, targetMonth + 1, 0).getDate();
    const clampedDay = Math.min(sourceDay, lastDayOfTargetMonth);
    return new Date(targetYear, targetMonth, clampedDay);
  }

  function addFrequencyToDate(baseDate, frequency) {
    const normalized = toDateStart(baseDate);
    if (Number.isNaN(normalized.getTime())) {
      return null;
    }

    if (frequency === "Custom") {
      return null;
    }

    if (frequency === "Weekly") {
      return new Date(normalized.getTime() + 7 * 24 * 60 * 60 * 1000);
    }
    if (frequency === "Monthly") {
      return addMonthsClamped(normalized, 1);
    }
    if (frequency === "Quarterly") {
      return addMonthsClamped(normalized, 3);
    }
    if (frequency === "6 Monthly") {
      return addMonthsClamped(normalized, 6);
    }
    if (frequency === "Annual") {
      return addMonthsClamped(normalized, 12);
    }

    const days = getFrequencyDays(frequency);
    return new Date(normalized.getTime() + days * 24 * 60 * 60 * 1000);
  }

  function getNextDueDatePlaceholder(baseDate, frequency, recurringDates, includeCurrentForCustom) {
    if (frequency === "Custom") {
      const includeCurrent = includeCurrentForCustom !== false;
      const customNext = getNextRecurringDatePlaceholder(baseDate, recurringDates, includeCurrent);
      return customNext || "";
    }

    const next = addFrequencyToDate(baseDate, frequency);
    if (!next || Number.isNaN(next.getTime())) {
      const start = toDateStart(baseDate);
      const fallback = new Date(start.getTime() + getFrequencyDays(frequency) * 24 * 60 * 60 * 1000);
      return fallback.toISOString().slice(0, 10);
    }

    return next.toISOString().slice(0, 10);
  }

  function ensureDefaultCompany() {
    const companies = getCompanies();
    const existing = companies.find(function (company) {
      return normalizeText(company.name) === normalizeText("ABC HVAC Ltd");
    });

    if (existing) {
      return existing;
    }

    const now = new Date().toISOString();
    const created = {
      id: window.BuildingStorage.createId(),
      name: "ABC HVAC Ltd",
      type: "HVAC",
      address: "",
      phone: "",
      email: "",
      website: "",
      notes: "",
      createdDate: now,
      lastUpdated: now,
    };

    window.BuildingStorage.upsertCompany(created);
    return created;
  }

  function ensureCompanyByName(name, fallbackType) {
    const normalized = normalizeText(name);
    if (!normalized) {
      return null;
    }

    const existing = getCompanies().find(function (company) {
      return normalizeText(company.name) === normalized;
    });
    if (existing) {
      return existing;
    }

    const now = new Date().toISOString();
    const created = {
      id: window.BuildingStorage.createId(),
      name: name,
      type: fallbackType || "Service",
      address: "",
      phone: "",
      email: "",
      website: "",
      notes: "",
      createdDate: now,
      lastUpdated: now,
    };
    window.BuildingStorage.upsertCompany(created);
    return created;
  }

  function createScheduleItemFromPropertyTemplate(template, propertyId, now) {
    const createdAt = now || new Date().toISOString();
    const taskName = String(template.name || "Calendar Item").trim() || "Calendar Item";
    const normalizedPropertyId = String(propertyId || template.propertyId || "").trim();
    const scheduleItem = {
      id: window.BuildingStorage.createId(),
      templateId: template.id,
      propertyTemplateId: template.id,
      propertyId: normalizedPropertyId,
      taskName: taskName,
      category: template.category || "General",
      dueDate: String(template.nextDueDate || "").trim(),
      frequency: template.defaultFrequency || "Annual",
      preferredCompany: "",
      preferredCompanyId: template.preferredCompanyId || "",
      preferredContactId: template.preferredContactId || "",
      lastCompletedDate: String(template.lastCompletedDate || "").trim(),
      lastCompletionHistoryId: "",
      status: "Future",
      createdDate: createdAt,
      lastUpdated: createdAt,
    };

    scheduleItem.status = getScheduleStatusText(scheduleItem);
    return scheduleItem;
  }

  function getActivePropertyTemplates(building) {
    return getPropertyTemplates(building).filter(function (template) {
      return template.active === "Yes" && String(template.nextDueDate || "").trim();
    });
  }

  function migrateLegacyPropertyTemplates(building, scheduleItems) {
    const existing = getPropertyTemplates(building);
    const now = new Date().toISOString();
    const existingById = new Set(existing.map(function (template) { return template.id; }));
    const migrated = existing.slice();
    const tenancies = getAllTenanciesForBuilding(building);

    (scheduleItems || []).forEach(function (item) {
      if (resolveLegacyTenancyEventKey(item, tenancies)) {
        return;
      }

      // Document-generated entries are re-derived from their document every pass; never mint a property template for them.
      if (item && item.sourceType === "document") {
        return;
      }

      const linkedPropertyTemplateId = String(item.propertyTemplateId || item.templateId || "").trim();
      if (linkedPropertyTemplateId && existingById.has(linkedPropertyTemplateId)) {
        return;
      }

      const master = item.templateId ? findMasterTemplateById(item.templateId) : null;
      const fromItemName = String(item.taskName || "").trim();
      const duplicate = migrated.some(function (template) {
        return normalizeText(template.name) === normalizeText(fromItemName)
          && String(template.nextDueDate || "").trim() === String(item.dueDate || "").trim();
      });
      if (duplicate) {
        return;
      }

      const created = createPropertyTemplateFromMaster(master, {
        id: linkedPropertyTemplateId || window.BuildingStorage.createId(),
        name: fromItemName || (master ? master.name : "Calendar Item"),
        category: item.category || (master ? master.category : "General"),
        defaultFrequency: item.frequency || (master ? master.defaultFrequency : "Annual"),
        nextDueDate: String(item.dueDate || master && master.nextDueDate || "").trim(),
        defaultReminderPeriod: master ? master.defaultReminderPeriod : "",
        suggestedDocuments: master ? master.suggestedDocuments : [],
        defaultNotes: master ? master.defaultNotes : "",
        preferredCompanyId: String(item.preferredCompanyId || "").trim(),
        preferredContactId: String(item.preferredContactId || "").trim(),
        active: "Yes",
        createdDate: String(item.createdDate || now),
        lastUpdated: String(item.lastUpdated || now),
      });

      migrated.push(created);
      existingById.add(created.id);
    });

    return migrated;
  }

  function syncScheduleItemsFromPropertyTemplates(building, existingScheduleItems) {
    const now = new Date().toISOString();
    const activeTemplates = getActivePropertyTemplates(building);
    const existingMap = new Map((existingScheduleItems || []).map(function (item) {
      return [String(item.propertyTemplateId || item.templateId || ""), item];
    }));
    const propertyId = String(building && building.id ? building.id : "").trim();

    return activeTemplates.map(function (template) {
      const existing = existingMap.get(template.id);
      const preferredCompanyName = template.preferredCompanyId
        ? getCompanyNameById(template.preferredCompanyId, "")
        : (existing ? existing.preferredCompany : "");

      const next = existing
        ? {
          ...existing,
          templateId: template.id,
          propertyTemplateId: template.id,
          propertyId: String(existing.propertyId || "").trim(),
          taskName: String(existing.taskName || template.name || "").trim() || template.name || "Calendar Item",
          category: String(existing.category || template.category || "General").trim() || "General",
          dueDate: String(existing.dueDate || template.nextDueDate || "").trim(),
          frequency: String(existing.frequency || template.defaultFrequency || "Annual").trim() || "Annual",
          preferredCompanyId: String(existing.preferredCompanyId || template.preferredCompanyId || "").trim(),
          preferredCompany: String(existing.preferredCompany || preferredCompanyName || "").trim(),
          preferredContactId: String(existing.preferredContactId || "").trim(),
          lastUpdated: now,
        }
        : createScheduleItemFromPropertyTemplate(template, template.propertyId || propertyId, now);

      next.status = getScheduleStatusText(next);
      return next;
    });
  }

  function getAllTenanciesForBuilding(building) {
    if (!building) {
      return [];
    }
    const tenancies = Array.isArray(building.tenancies) ? building.tenancies : [];
    if (tenancies.length > 0) {
      return tenancies.filter(function (t) { return t && String(t.id || "").trim(); });
    }
    if (building.tenancy) {
      return [building.tenancy];
    }
    return [];
  }

  function getTenancyDisplayName(tenancy) {
    if (!tenancy) {
      return "Tenancy";
    }
    return String(tenancy.tradingName || tenancy.companyName || "Tenancy").trim() || "Tenancy";
  }

  function getBuildingDisplayLabel(building) {
    if (!building) {
      return "Unknown property";
    }
    const name = String(building.buildingName || "").trim();
    const address = String(building.streetAddress || "").trim();
    if (name && address) {
      return `${name} — ${address}`;
    }
    return name || address || "Unknown property";
  }

  // Canonical tenancy -> contact relationship storage: tenancy.contactRefs[] holds master contact ids.
  function getTenancyContactRefs(tenancy) {
    if (!tenancy || !Array.isArray(tenancy.contactRefs)) {
      return [];
    }

    const seen = new Set();
    return tenancy.contactRefs
      .map(function (contactId) {
        return String(contactId || "").trim();
      })
      .filter(function (contactId) {
        if (!contactId || seen.has(contactId)) {
          return false;
        }
        seen.add(contactId);
        return true;
      });
  }

  function getContactsForTenancy(tenancy) {
    return getTenancyContactRefs(tenancy)
      .map(function (contactId) {
        return findContactById(contactId);
      })
      .filter(Boolean);
  }

  function applyTenancyContactRefs(building, tenancyId, nextRefs) {
    const targetId = String(tenancyId || "").trim();
    const nextTenancies = getAllTenanciesForBuilding(building).map(function (tenancy) {
      if (String(tenancy.id || "") !== targetId) {
        return tenancy;
      }

      return { ...tenancy, contactRefs: nextRefs };
    });

    return {
      ...building,
      tenancies: nextTenancies,
      tenancy: nextTenancies[0] || null,
      lastUpdated: new Date().toISOString(),
    };
  }

  function linkContactToTenancy(building, tenancyId, contactId) {
    const targetContactId = String(contactId || "").trim();
    const tenancy = getTenancyById(building, tenancyId);
    if (!tenancy || !targetContactId) {
      return null;
    }

    const existingRefs = getTenancyContactRefs(tenancy);
    if (existingRefs.includes(targetContactId)) {
      return null;
    }

    return applyTenancyContactRefs(building, tenancy.id, existingRefs.concat(targetContactId));
  }

  function unlinkContactFromTenancy(building, tenancyId, contactId) {
    const targetContactId = String(contactId || "").trim();
    const tenancy = getTenancyById(building, tenancyId);
    if (!tenancy || !targetContactId) {
      return null;
    }

    const existingRefs = getTenancyContactRefs(tenancy);
    if (!existingRefs.includes(targetContactId)) {
      return null;
    }

    return applyTenancyContactRefs(building, tenancy.id, existingRefs.filter(function (refId) {
      return refId !== targetContactId;
    }));
  }

  function getTenancyLinksForContact(contactId) {
    const targetContactId = String(contactId || "").trim();
    if (!targetContactId) {
      return [];
    }

    const links = [];
    window.BuildingStorage.getBuildings().forEach(function (building) {
      getAllTenanciesForBuilding(building).forEach(function (tenancy) {
        if (getTenancyContactRefs(tenancy).includes(targetContactId)) {
          links.push({ building: building, tenancy: tenancy });
        }
      });
    });

    return links;
  }

  function createUniqueTenancyId(usedIds) {
    const baseId = String(window.BuildingStorage.createId() || "tenancy").trim() || "tenancy";
    let candidate = baseId;
    let suffix = 1;
    while (usedIds.has(candidate)) {
      candidate = baseId + "-" + suffix;
      suffix += 1;
    }
    usedIds.add(candidate);
    return candidate;
  }

  function getTenancyLabelForScheduleItem(item) {
    if (!item || (item.sourceType !== "tenancy" && item.sourceType !== "document") || !item.tenancyId) {
      return "";
    }
    const building = findBuildingById(String(item.propertyId || "").trim());
    if (!building) {
      return "";
    }
    const tenancy = getAllTenanciesForBuilding(building).find(function (t) {
      return String(t.id || "") === String(item.tenancyId || "");
    });
    if (!tenancy) {
      return "";
    }
    return String(tenancy.tradingName || tenancy.companyName || "Tenant").trim();
  }

  function formatTenancyEventType(eventType) {
    const labels = {
      "rent-review": "Rent Review",
      "lease-expiry": "Lease Expiry",
      "renewal-option": "Lease Renewal / Option",
      "notice-date": "Notice Date",
    };
    return labels[String(eventType || "")] || String(eventType || "").replace(/-/g, " ");
  }

  function getTenancyEventSourceDate(tenancy, eventType) {
    if (!tenancy) {
      return "";
    }

    if (eventType === "rent-review") {
      return String(tenancy.rentReviewDate || "").trim();
    }
    if (eventType === "lease-expiry") {
      return String(tenancy.leaseEnd || "").trim();
    }
    if (eventType === "renewal-option") {
      return String(tenancy.renewalDate || "").trim();
    }
    if (eventType === "notice-date") {
      return String(tenancy.noticeDate || "").trim();
    }

    return "";
  }

  function inferTenancyEventTypeFromItem(item) {
    const explicit = String(item && item.tenancyEventType || "").trim();
    if (explicit) {
      return explicit;
    }

    const taskName = normalizeText(item && item.taskName || "");
    if (taskName.includes("lease expiry")) {
      return "lease-expiry";
    }
    if (taskName.includes("rent review")) {
      return "rent-review";
    }
    if (taskName.includes("renewal") || taskName.includes("option")) {
      return "renewal-option";
    }
    if (taskName.includes("notice date")) {
      return "notice-date";
    }

    return "";
  }

  function buildTenancyEventKey(tenancyId, eventType) {
    const normalizedTenancyId = String(tenancyId || "").trim();
    const normalizedEventType = String(eventType || "").trim();
    if (!normalizedTenancyId || !normalizedEventType) {
      return "";
    }
    return normalizedTenancyId + "|" + normalizedEventType;
  }

  function doesTaskNameMatchTenancy(itemTaskName, tenancy) {
    const task = normalizeText(itemTaskName || "");
    if (!task) {
      return false;
    }

    const labels = [
      normalizeText(tenancy && tenancy.companyName || ""),
      normalizeText(tenancy && tenancy.tradingName || ""),
    ].filter(Boolean);

    if (labels.length === 0) {
      return false;
    }

    return labels.some(function (label) {
      return task.includes(label);
    });
  }

  function resolveLegacyTenancyEventKey(item, tenancies) {
    if (!item) {
      return "";
    }

    if (String(item.sourceType || "") === "tenancy" && item.tenancyId) {
      const explicitEventType = inferTenancyEventTypeFromItem(item);
      return buildTenancyEventKey(item.tenancyId, explicitEventType);
    }

    const eventType = inferTenancyEventTypeFromItem(item);
    if (!eventType) {
      return "";
    }

    const dueDate = String(item.dueDate || "").trim();
    if (!dueDate) {
      return "";
    }

    const matchingTenancies = (tenancies || []).filter(function (tenancy) {
      if (!tenancy || !String(tenancy.id || "").trim()) {
        return false;
      }

      const sourceDate = getTenancyEventSourceDate(tenancy, eventType);
      if (!sourceDate || sourceDate !== dueDate) {
        return false;
      }

      return doesTaskNameMatchTenancy(item.taskName, tenancy);
    });

    if (matchingTenancies.length !== 1) {
      return "";
    }

    return buildTenancyEventKey(matchingTenancies[0].id, eventType);
  }

  function getScheduleItemMetadataScore(item) {
    if (!item || typeof item !== "object") {
      return 0;
    }

    let score = 0;
    if (String(item.sourceType || "") === "tenancy") {
      score += 2;
    }
    if (String(item.lastCompletedDate || "").trim()) {
      score += 3;
    }
    if (String(item.lastCompletionHistoryId || "").trim()) {
      score += 3;
    }
    if (String(item.preferredCompanyId || item.preferredCompany || "").trim()) {
      score += 1;
    }
    if (String(item.preferredContactId || "").trim()) {
      score += 1;
    }
    if (String(item.notes || "").trim()) {
      score += 1;
    }

    return score;
  }

  function chooseBestScheduleItemCandidate(candidates) {
    if (!Array.isArray(candidates) || candidates.length === 0) {
      return null;
    }

    return candidates.slice().sort(function (left, right) {
      const scoreDiff = getScheduleItemMetadataScore(right) - getScheduleItemMetadataScore(left);
      if (scoreDiff !== 0) {
        return scoreDiff;
      }

      const rightIsTenancy = String(right.sourceType || "") === "tenancy";
      const leftIsTenancy = String(left.sourceType || "") === "tenancy";
      if (rightIsTenancy !== leftIsTenancy) {
        return rightIsTenancy ? 1 : -1;
      }

      return String(left.id || "").localeCompare(String(right.id || ""));
    })[0] || null;
  }

  function mergeScheduleItemMetadata(baseItem, candidates) {
    const merged = {
      ...baseItem,
    };

    (candidates || []).forEach(function (candidate) {
      if (!candidate || typeof candidate !== "object") {
        return;
      }

      if (!String(merged.preferredCompanyId || "").trim() && String(candidate.preferredCompanyId || "").trim()) {
        merged.preferredCompanyId = candidate.preferredCompanyId;
      }
      if (!String(merged.preferredCompany || "").trim() && String(candidate.preferredCompany || "").trim()) {
        merged.preferredCompany = candidate.preferredCompany;
      }
      if (!String(merged.preferredContactId || "").trim() && String(candidate.preferredContactId || "").trim()) {
        merged.preferredContactId = candidate.preferredContactId;
      }
      if (!String(merged.lastCompletedDate || "").trim() && String(candidate.lastCompletedDate || "").trim()) {
        merged.lastCompletedDate = candidate.lastCompletedDate;
      }
      if (!String(merged.lastCompletionHistoryId || "").trim() && String(candidate.lastCompletionHistoryId || "").trim()) {
        merged.lastCompletionHistoryId = candidate.lastCompletionHistoryId;
      }
      if (!String(merged.notes || "").trim() && String(candidate.notes || "").trim()) {
        merged.notes = candidate.notes;
      }
      if (!String(merged.createdDate || "").trim() && String(candidate.createdDate || "").trim()) {
        merged.createdDate = candidate.createdDate;
      }
      if (!String(merged.frequency || "").trim() && String(candidate.frequency || "").trim()) {
        merged.frequency = candidate.frequency;
      }
    });

    return merged;
  }

  function syncTenancyScheduleItems(building, existingScheduleItems) {
    const tenancies = getAllTenanciesForBuilding(building);
    const propertyId = String(building && building.id ? building.id : "").trim();
    const now = new Date().toISOString();

    const candidatesByKey = new Map();
    (existingScheduleItems || []).forEach(function (item) {
      const key = resolveLegacyTenancyEventKey(item, tenancies);
      if (!key) {
        return;
      }

      const existing = candidatesByKey.get(key) || [];
      existing.push(item);
      candidatesByKey.set(key, existing);
    });

    const generated = [];
    const consumedItemIds = new Set();
    const droppedItemIdMap = {};

    tenancies.forEach(function (tenancy) {
      if (!tenancy || !String(tenancy.id || "").trim()) {
        return;
      }

      const tenancyId = String(tenancy.id);
      const companyLabel = String(tenancy.tradingName || tenancy.companyName || "Tenant").trim();

      function makeItem(eventType, taskName, sourceDueDate, frequency) {
        if (!String(sourceDueDate || "").trim()) {
          return;
        }
        const key = buildTenancyEventKey(tenancyId, eventType);
        const candidates = candidatesByKey.get(key) || [];
        const retainedCandidate = chooseBestScheduleItemCandidate(candidates);
        const itemId = retainedCandidate && String(retainedCandidate.id || "").trim()
          ? String(retainedCandidate.id || "").trim()
          : "tenancy-event-" + tenancyId + "-" + eventType;

        candidates.forEach(function (candidate) {
          const candidateId = String(candidate && candidate.id || "").trim();
          if (!candidateId) {
            return;
          }

          consumedItemIds.add(candidateId);
          if (candidateId !== itemId) {
            droppedItemIdMap[candidateId] = itemId;
          }
        });

        // For recurring items, preserve an advanced dueDate; for fixed items, always pin to source.
        const dueDate = (frequency !== "One-off" && retainedCandidate && String(retainedCandidate.dueDate || "").trim())
          ? retainedCandidate.dueDate
          : sourceDueDate;

        const baseItem = {
          id: itemId,
          sourceType: "tenancy",
          tenancyId: tenancyId,
          tenancyEventType: eventType,
          propertyId: propertyId,
          propertyTemplateId: "",
          templateId: "",
          taskName: taskName,
          category: "Tenancy",
          frequency: frequency,
          dueDate: dueDate,
          initialDueDate: sourceDueDate,
          lastCompletedDate: retainedCandidate ? String(retainedCandidate.lastCompletedDate || "") : "",
          lastCompletionHistoryId: retainedCandidate ? String(retainedCandidate.lastCompletionHistoryId || "") : "",
          preferredCompany: "",
          preferredCompanyId: "",
          preferredContactId: "",
          notes: retainedCandidate ? String(retainedCandidate.notes || "") : "",
          status: "",
          createdDate: retainedCandidate ? retainedCandidate.createdDate : now,
          lastUpdated: now,
        };

        const item = mergeScheduleItemMetadata(baseItem, candidates);
        item.status = getScheduleStatusText(item);
        generated.push(item);
      }

      // Rent Review — recurring
      if (String(tenancy.rentReviewDate || "").trim()) {
        const freq = String(tenancy.rentReviewFrequency || "Annual").trim() || "Annual";
        makeItem("rent-review", "Rent Review \u2014 " + companyLabel, tenancy.rentReviewDate, freq);
      }

      // Lease Expiry — fixed, sourced from leaseEnd
      if (String(tenancy.leaseEnd || "").trim()) {
        makeItem("lease-expiry", "Lease Expiry \u2014 " + companyLabel, tenancy.leaseEnd, "One-off");
      }

      // Renewal / Option Date — fixed
      if (String(tenancy.renewalDate || "").trim()) {
        makeItem("renewal-option", "Lease Renewal \u2014 " + companyLabel, tenancy.renewalDate, "One-off");
      }

      // Notice Date — fixed
      if (String(tenancy.noticeDate || "").trim()) {
        makeItem("notice-date", "Notice Date \u2014 " + companyLabel, tenancy.noticeDate, "One-off");
      }
    });

    return {
      items: generated,
      consumedItemIds: consumedItemIds,
      droppedItemIdMap: droppedItemIdMap,
    };
  }

  // Documents are the source of truth: an opted-in expiry produces exactly one deterministic, regenerated schedule item.
  function syncDocumentScheduleItems(building, existingScheduleItems) {
    const propertyId = String(building && building.id ? building.id : "").trim();
    const now = new Date().toISOString();

    const existingByDocumentId = new Map();
    (existingScheduleItems || []).forEach(function (item) {
      if (String(item.sourceType || "") !== "document") {
        return;
      }
      const documentId = String(item.documentId || "").trim();
      if (documentId) {
        existingByDocumentId.set(documentId, item);
      }
    });

    const documentEntries = (building.documents || []).map(function (record) {
      return { record: record, source: "building", tenancyId: String(record.tenancyId || "").trim() };
    });

    getAllTenanciesForBuilding(building).forEach(function (tenancy) {
      const leaseDocuments = tenancy && tenancy.lease && Array.isArray(tenancy.lease.documents) ? tenancy.lease.documents : [];
      leaseDocuments.forEach(function (record) {
        documentEntries.push({ record: record, source: "tenancy", tenancyId: String(tenancy.id || "").trim() });
      });
    });

    const generated = [];
    const consumedItemIds = new Set();

    documentEntries.forEach(function (entry) {
      const record = entry.record;
      const documentId = String(record && record.id || "").trim();
      const expiryDate = String(record && record.expiryDate || "").trim();
      if (!documentId || !expiryDate || record.addExpiryToCalendar !== true) {
        return;
      }

      const existing = existingByDocumentId.get(documentId);
      const itemId = existing && String(existing.id || "").trim() ? existing.id : ("document-expiry-" + documentId);
      consumedItemIds.add(itemId);

      const title = getDocumentRegisterTitle(record);
      const item = {
        id: itemId,
        sourceType: "document",
        documentId: documentId,
        documentSource: entry.source,
        tenancyId: entry.tenancyId,
        propertyId: propertyId,
        propertyTemplateId: "",
        templateId: "",
        taskName: title + " expires",
        category: "Document",
        frequency: "One-off",
        dueDate: expiryDate,
        initialDueDate: expiryDate,
        lastCompletedDate: "",
        lastCompletionHistoryId: "",
        preferredCompany: "",
        preferredCompanyId: "",
        preferredContactId: "",
        notes: "",
        status: "",
        createdDate: existing ? existing.createdDate : now,
        lastUpdated: now,
      };
      item.status = getScheduleStatusText(item);
      generated.push(item);
    });

    return {
      items: generated,
      consumedItemIds: consumedItemIds,
    };
  }

  function applyTenancyEventCompletion(building, scheduleItem, options) {
    if (scheduleItem.sourceType !== "tenancy") {
      return null;
    }

    const isRecurring = scheduleItem.frequency !== "One-off";
    const previousDueDate = String(scheduleItem.dueDate || "").trim();
    const newDueDate = isRecurring
      ? getNextDueDatePlaceholder(previousDueDate, scheduleItem.frequency, [], false)
      : previousDueDate;

    const completedAt = options.completedAt || new Date().toISOString();
    const completedBy = options.completedBy || "Property Manager";
    const historyId = window.BuildingStorage.createId();

    const historyRecord = {
      id: historyId,
      templateId: "",
      scheduleItemId: scheduleItem.id,
      tenancyId: scheduleItem.tenancyId,
      tenancyEventType: scheduleItem.tenancyEventType,
      completedAt: completedAt,
      completedDate: completedAt.slice(0, 10),
      completedBy: completedBy,
      taskName: scheduleItem.taskName,
      companyUsed: options.companyUsed || "",
      companyUsedId: options.companyUsedId || "",
      contactUsed: options.contactUsed || "",
      contactUsedId: options.contactUsedId || "",
      notes: options.notes || "",
      hasAttachments: false,
      completionDocument: null,
      previousDueDate: previousDueDate,
      newDueDate: newDueDate,
      nextDueDate: newDueDate,
      revertedAt: "",
      revertedBy: "",
      createdDate: completedAt,
    };

    const currentScheduleItems = Array.isArray(building.scheduleItems) ? building.scheduleItems.slice() : [];
    const itemExists = currentScheduleItems.some(function (item) {
      return String(item.id || "") === String(scheduleItem.id || "");
    });

    const updatedScheduleItems = currentScheduleItems.map(function (item) {
      if (String(item.id || "") !== String(scheduleItem.id || "")) {
        return item;
      }
      const next = {
        ...item,
        dueDate: newDueDate,
        lastCompletedDate: completedAt.slice(0, 10),
        lastCompletionHistoryId: historyId,
        lastUpdated: completedAt,
      };
      next.status = getScheduleStatusText(next);
      return next;
    });

    if (!itemExists) {
      const next = {
        ...scheduleItem,
        dueDate: newDueDate,
        lastCompletedDate: completedAt.slice(0, 10),
        lastCompletionHistoryId: historyId,
        lastUpdated: completedAt,
      };
      next.status = getScheduleStatusText(next);
      updatedScheduleItems.push(next);
    }

    const updated = {
      ...building,
      scheduleItems: updatedScheduleItems,
      historyRecords: (building.historyRecords || []).concat(historyRecord),
      lastUpdated: completedAt,
    };

    const normalized = ensureWorkflowCollections(updated);
    window.BuildingStorage.updateBuilding(normalized);
    return normalized;
  }

  function ensureWorkflowCollections(building) {
    const next = {
      ...building,
      documents: Array.isArray(building.documents) ? building.documents : [],
      documentCategories: normalizeDocumentCategories(building.documentCategories),
      propertyTemplates: getPropertyTemplates(building),
      scheduleItems: Array.isArray(building.scheduleItems) ? building.scheduleItems : [],
      historyRecords: Array.isArray(building.historyRecords) ? building.historyRecords : [],
    };

    if (next.tenancy) {
      const legacyDocuments = Array.isArray(next.tenancy.documents) ? next.tenancy.documents : [];
      const currentLease = next.tenancy.lease || {};
      const leaseDocuments = Array.isArray(currentLease.documents) ? currentLease.documents : legacyDocuments;
      const versionHistory = Array.isArray(currentLease.versionHistory) ? currentLease.versionHistory : [];

      next.tenancy = {
        ...next.tenancy,
        documents: leaseDocuments.map(function (document) {
          return {
            ...document,
            documentType: document.documentType || document.type || "Lease Agreement",
            storage: document.storage && typeof document.storage === "object"
              ? {
                kind: document.storage.kind || "data-url",
                dataUrl: document.storage.dataUrl || document.fileDataUrl || "",
                previewStatus: document.storage.previewStatus || "not-generated",
                ocrStatus: document.storage.ocrStatus || "not-indexed",
              }
              : {
                kind: "data-url",
                dataUrl: document.fileDataUrl || "",
                previewStatus: "not-generated",
                ocrStatus: "not-indexed",
              },
          };
        }),
        lease: {
          notes: String(currentLease.notes || ""),
          documents: leaseDocuments.map(function (document, index) {
            const uploadedAt = document.uploadedAt || document.createdDate || next.lastUpdated || new Date().toISOString();
            return {
              id: document.id || window.BuildingStorage.createId(),
              title: document.title || "",
              documentType: document.documentType || document.type || "Lease Agreement",
              version: document.version || document.name || `Version ${index + 1}`,
              documentDate: document.documentDate || document.date || next.tenancy.leaseStart || "",
              expiryDate: String(document.expiryDate || "").trim(),
              addExpiryToCalendar: document.addExpiryToCalendar === true,
              description: document.description || document.fileName || document.name || "",
              uploadedBy: document.uploadedBy || document.user || "Not recorded",
              fileName: document.fileName || document.name || "lease-document",
              mimeType: document.mimeType || document.fileType || "application/octet-stream",
              sizeBytes: typeof document.sizeBytes === "number" ? document.sizeBytes : 0,
              uploadedAt: uploadedAt,
              lastUpdated: document.lastUpdated || uploadedAt,
              notes: document.notes || "",
              storage: document.storage && typeof document.storage === "object"
                ? {
                  kind: document.storage.kind || "data-url",
                  dataUrl: document.storage.dataUrl || document.fileDataUrl || "",
                  previewStatus: document.storage.previewStatus || "not-generated",
                  ocrStatus: document.storage.ocrStatus || "not-indexed",
                }
                : {
                  kind: "data-url",
                  dataUrl: document.fileDataUrl || "",
                  previewStatus: "not-generated",
                  ocrStatus: "not-indexed",
                },
            };
          }),
          versionHistory: versionHistory,
        },
      };
    }

    next.documents = next.documents.map(function (document, index) {
      const uploadedAt = document.uploadedAt || document.createdDate || next.lastUpdated || new Date().toISOString();
      return {
        ...document,
        id: document.id || window.BuildingStorage.createId(),
        categoryId: String(document.categoryId || ""),
        category: resolveFixedCategoryForRecord(document, next.documentCategories),
        documentType: document.documentType || document.type || "Document",
        version: document.version || `v${index + 1}`,
        documentDate: document.documentDate || document.date || uploadedAt.slice(0, 10),
        expiryDate: String(document.expiryDate || "").trim(),
        addExpiryToCalendar: document.addExpiryToCalendar === true,
        description: document.description || document.fileName || document.name || "",
        uploadedBy: document.uploadedBy || document.user || "Not recorded",
        fileName: document.fileName || document.name || "building-document",
        mimeType: document.mimeType || document.fileType || "application/octet-stream",
        sizeBytes: typeof document.sizeBytes === "number" ? document.sizeBytes : 0,
        uploadedAt: uploadedAt,
        lastUpdated: document.lastUpdated || uploadedAt,
        notes: document.notes || "",
        storage: document.storage && typeof document.storage === "object"
          ? {
            kind: document.storage.kind || "data-url",
            dataUrl: document.storage.dataUrl || document.fileDataUrl || "",
            previewStatus: document.storage.previewStatus || "not-generated",
            ocrStatus: document.storage.ocrStatus || "not-indexed",
          }
          : {
            kind: "data-url",
            dataUrl: document.fileDataUrl || "",
            previewStatus: "not-generated",
            ocrStatus: "not-indexed",
          },
      };
    });

    next.propertyTemplates = migrateLegacyPropertyTemplates(next, next.scheduleItems)
      .map(normalizePropertyTemplateRecord);

    next.scheduleItems = next.scheduleItems.map(function (item) {
      let preferredCompanyId = item.preferredCompanyId || "";
      const legacyPreferredCompany = String(item.preferredCompany || "").trim();
      const hasRealPreferredCompany = legacyPreferredCompany
        && normalizeText(legacyPreferredCompany) !== "not set";

      if (!preferredCompanyId && hasRealPreferredCompany) {
        const companies = getCompanies();
        let matched = companies.find(function (company) {
          return normalizeText(company.name) === normalizeText(legacyPreferredCompany);
        });

        if (!matched) {
          const now = new Date().toISOString();
          matched = {
            id: window.BuildingStorage.createId(),
            name: legacyPreferredCompany,
            type: "Service",
            address: "",
            phone: "",
            email: "",
            website: "",
            notes: "",
            createdDate: now,
            lastUpdated: now,
          };
          window.BuildingStorage.upsertCompany(matched);
        }

        preferredCompanyId = matched.id;
      }

      return {
        ...item,
        templateId: item.templateId || item.propertyTemplateId || "",
        propertyTemplateId: item.propertyTemplateId || item.templateId || "",
        propertyId: String(item.propertyId || building.id || "").trim(),
        taskName: item.taskName,
        category: item.category || "General",
        dueDate: item.dueDate,
        frequency: item.frequency,
        preferredCompanyId: preferredCompanyId,
        preferredCompany: item.preferredCompany || getCompanyNameById(preferredCompanyId, ""),
        preferredContactId: item.preferredContactId || "",
        lastCompletionHistoryId: item.lastCompletionHistoryId || "",
      };
    });

    const tenancySync = syncTenancyScheduleItems(next, next.scheduleItems);
    const consumedTenancyItemIds = tenancySync.consumedItemIds || new Set();
    const documentSync = syncDocumentScheduleItems(next, next.scheduleItems);
    const consumedDocumentItemIds = documentSync.consumedItemIds || new Set();
    const nonTenancyItems = next.scheduleItems.filter(function (item) {
      const itemId = String(item && item.id || "").trim();
      const isConsumedTenancyItem = itemId && consumedTenancyItemIds.has(itemId);
      const isDocumentItem = item.sourceType === "document" || (itemId && consumedDocumentItemIds.has(itemId));
      return item.sourceType !== "tenancy" && !isConsumedTenancyItem && !isDocumentItem;
    });

    const templateDerivedItems = syncScheduleItemsFromPropertyTemplates(next, nonTenancyItems);
    next.scheduleItems = templateDerivedItems.concat(tenancySync.items || [], documentSync.items || []);

    const droppedItemIdMap = tenancySync.droppedItemIdMap || {};
    next.historyRecords = next.historyRecords.map(function (record) {
      const replacementScheduleItemId = droppedItemIdMap[String(record.scheduleItemId || "")];
      if (!replacementScheduleItemId) {
        return record;
      }

      return {
        ...record,
        scheduleItemId: replacementScheduleItemId,
      };
    });

    // Normalise legacy single-tenancy to tenancies array for multi-tenancy support.
    if (!Array.isArray(next.tenancies)) {
      next.tenancies = next.tenancy ? [next.tenancy] : [];
    }

    const usedTenancyIds = new Set();
    next.tenancies = next.tenancies
      .filter(function (tenancy) {
        return Boolean(tenancy && typeof tenancy === "object");
      })
      .map(function (tenancy) {
        const existingTenancyId = String(tenancy.id || "").trim();
        let tenancyId = existingTenancyId;
        if (!tenancyId || usedTenancyIds.has(tenancyId)) {
          tenancyId = createUniqueTenancyId(usedTenancyIds);
        } else {
          usedTenancyIds.add(tenancyId);
        }
        const lease = tenancy.lease && typeof tenancy.lease === "object"
          ? tenancy.lease
          : {
            notes: "",
            documents: Array.isArray(tenancy.documents) ? tenancy.documents : [],
            versionHistory: [],
          };

        return {
          ...tenancy,
          id: tenancyId,
          status: String(tenancy.status || "Occupied") || "Occupied",
          contacts: Array.isArray(tenancy.contacts) ? tenancy.contacts : [],
          contactRefs: Array.isArray(tenancy.contactRefs) ? tenancy.contactRefs : [],
          documents: Array.isArray(tenancy.documents) ? tenancy.documents : [],
          lease: {
            notes: String(lease.notes || ""),
            documents: Array.isArray(lease.documents) ? lease.documents : [],
            versionHistory: Array.isArray(lease.versionHistory) ? lease.versionHistory : [],
          },
        };
      });

    next.tenancy = next.tenancies.length > 0 ? next.tenancies[0] : null;

    return next;
  }

  function getScheduleBucket(item) {
    const today = toDateStart(new Date().toISOString().slice(0, 10));
    const due = toDateStart(item.dueDate);
    const diffDays = Math.floor((due.getTime() - today.getTime()) / (24 * 60 * 60 * 1000));

    if (diffDays < 0) {
      return "overdue";
    }
    if (diffDays === 0) {
      return "today";
    }
    if (diffDays <= 7) {
      return "week";
    }
    if (diffDays <= 31) {
      return "month";
    }
    return "future";
  }

  function getScheduleStatusText(item) {
    const priority = getScheduleVisualPriority(item);
    const map = {
      overdue: "Overdue",
      due30: "Due Within 30 Days",
      scheduled: "Scheduled",
    };

    return map[priority] || "Scheduled";
  }

  function getScheduleDiffDays(item) {
    const today = toDateStart(new Date().toISOString().slice(0, 10));
    const due = toDateStart(item.dueDate);
    return Math.floor((due.getTime() - today.getTime()) / (24 * 60 * 60 * 1000));
  }

  function getScheduleRowState(diffDays) {
    if (diffDays < 0) {
      return "overdue";
    }
    if (diffDays === 0) {
      return "today";
    }
    return "upcoming";
  }

  function getScheduleVisualPriority(item, diffDays) {
    const resolvedDiffDays = typeof diffDays === "number" ? diffDays : getScheduleDiffDays(item);
    if (resolvedDiffDays < 0) {
      return "overdue";
    }

    if (resolvedDiffDays <= 30) {
      return "due30";
    }

    return "scheduled";
  }

  function getScheduleItemCategory(building, item) {
    if (item.category) {
      return item.category;
    }

    const fromPropertyTemplateId = building && (item.propertyTemplateId || item.templateId)
      ? findPropertyTemplateById(building, item.propertyTemplateId || item.templateId)
      : null;
    if (fromPropertyTemplateId && fromPropertyTemplateId.category) {
      return fromPropertyTemplateId.category;
    }

    const fromName = getPropertyTemplates(building || {}).find(function (template) {
      return normalizeText(template.name) === normalizeText(item.taskName);
    });
    return fromName && fromName.category ? fromName.category : "General";
  }

  function ensureScheduleFilterValue(selectElement, desiredValue) {
    if (!selectElement) {
      return;
    }

    const hasDesired = Array.from(selectElement.options).some(function (option) {
      return option.value === desiredValue;
    });
    selectElement.value = hasDesired ? desiredValue : "all";
  }

  function renderScheduleFilterOptions(buildings, rows) {
    const categories = Array.from(new Set(rows.map(function (row) {
      return row.category;
    }))).sort(function (left, right) {
      return String(left).localeCompare(String(right), undefined, { sensitivity: "base" });
    });

    renderAllBuildingFilterSelects();

    scheduleFilterCategory.innerHTML = ['<option value="all">All Categories</option>']
      .concat(categories.map(function (category) {
        return `<option value="${escapeHtml(category)}">${escapeHtml(category)}</option>`;
      }))
      .join("");

    ensureScheduleFilterValue(scheduleFilterCategory, scheduleFilters.category);
    ensureScheduleFilterValue(scheduleFilterStatus, scheduleFilters.status);
    ensureScheduleFilterValue(scheduleFilterDuePeriod, scheduleFilters.duePeriod);
  }

  function matchesScheduleDuePeriod(diffDays, dueDateValue, duePeriod) {
    if (duePeriod === "all") {
      return true;
    }
    if (duePeriod === "overdue") {
      return diffDays < 0;
    }
    if (duePeriod === "today") {
      return diffDays === 0;
    }
    if (duePeriod === "7-days") {
      return diffDays >= 0 && diffDays <= 7;
    }
    if (duePeriod === "30-days") {
      return diffDays >= 0 && diffDays <= 30;
    }
    if (duePeriod === "this-month") {
      const due = toDateStart(dueDateValue);
      const today = toDateStart(new Date().toISOString().slice(0, 10));
      return due.getMonth() === today.getMonth() && due.getFullYear() === today.getFullYear();
    }

    return true;
  }

  function filterScheduleRows(rows) {
    return rows.filter(function (row) {
      if (scheduleFilters.property && row.propertyId !== scheduleFilters.property) {
        return false;
      }
      if (scheduleFilters.category !== "all" && row.category !== scheduleFilters.category) {
        return false;
      }
      if (scheduleFilters.status !== "all" && row.visualPriority !== scheduleFilters.status) {
        return false;
      }
      if (!matchesScheduleDuePeriod(row.diffDays, row.item.dueDate, scheduleFilters.duePeriod)) {
        return false;
      }
      return true;
    });
  }

  function sortScheduleRows(rows) {
    return rows.slice().sort(function (left, right) {
      return new Date(left.item.dueDate).getTime() - new Date(right.item.dueDate).getTime();
    });
  }

  function getOverdueLabel(daysOverdue) {
    if (daysOverdue === 1) {
      return "1 day overdue";
    }

    return `${daysOverdue} days overdue`;
  }

  function getPendingRevertRecord(building, scheduleItem) {
    if (!building || !scheduleItem || !scheduleItem.lastCompletionHistoryId) {
      return null;
    }

    const template = findPropertyTemplateById(building, scheduleItem.propertyTemplateId || scheduleItem.templateId);
    if (!template) {
      return null;
    }

    const record = (building.historyRecords || []).find(function (entry) {
      return entry.id === scheduleItem.lastCompletionHistoryId;
    }) || null;
    if (!record || record.revertedAt) {
      return null;
    }

    if (String(template.nextDueDate || "") !== String(record.newDueDate || "")) {
      return null;
    }

    return record;
  }

  function getLatestCompletionRecord(building, scheduleItemId) {
    const records = (building.historyRecords || [])
      .filter(function (entry) {
        return entry.scheduleItemId === scheduleItemId && !entry.revertedAt;
      })
      .sort(function (left, right) {
        return new Date(right.completedAt || right.completedDate).getTime()
          - new Date(left.completedAt || left.completedDate).getTime();
      });

    return records[0] || null;
  }

  function decorateScheduleRows(building, items) {
    return items.map(function (item) {
      const diffDays = getScheduleDiffDays(item);
      const lastCompletionRecord = getPendingRevertRecord(building, item);
      const itemPropertyId = String(item.propertyId || "").trim();
      const itemPropertyName = itemPropertyId
        ? getBuildingNameById(itemPropertyId) || "Property not assigned"
        : "Property not assigned";
      const visualPriority = getScheduleVisualPriority(item, diffDays);
      return {
        item: item,
        state: getScheduleRowState(diffDays),
        visualPriority: visualPriority,
        statusText: getScheduleStatusText(item),
        diffDays: diffDays,
        category: getScheduleItemCategory(building, item),
        propertyId: itemPropertyId,
        propertyName: itemPropertyName,
        lastCompletedDate: String(item.lastCompletedDate || "").trim(),
        lastCompletionRecord: lastCompletionRecord,
      };
    });
  }

  function getNormalizedScheduleBuildings() {
    const buildings = window.BuildingStorage.getBuildings();
    return buildings.map(function (building) {
      return ensureWorkflowCollections(building);
    });
  }

  function confirmScheduleRevertDialog() {
    return new Promise(function (resolve) {
      const backdrop = window.document.createElement("div");
      backdrop.className = "template-delete-modal-backdrop app-modal-backdrop-confirm";

      const dialog = window.document.createElement("div");
      dialog.className = "template-delete-modal";
      dialog.setAttribute("role", "dialog");
      dialog.setAttribute("aria-modal", "true");
      dialog.setAttribute("aria-labelledby", "schedule-revert-modal-title");

      dialog.innerHTML = `
        <h3 id="schedule-revert-modal-title">Revert Completion</h3>
        <p>This will undo the last completion and restore the previous due date. Continue?</p>
        <div class="template-delete-modal-actions">
          <button class="btn btn-secondary" type="button" data-schedule-revert-action="cancel">Cancel</button>
          <button class="btn template-delete-btn" type="button" data-schedule-revert-action="revert">Revert</button>
        </div>
      `;

      backdrop.appendChild(dialog);
      window.document.body.appendChild(backdrop);

      let isClosed = false;

      function closeWith(result) {
        if (isClosed) {
          return;
        }
        isClosed = true;
        window.document.removeEventListener("keydown", handleEscape);
        backdrop.remove();
        resolve(result);
      }

      function handleEscape(event) {
        if (event.key === "Escape") {
          closeWith(false);
        }
      }

      window.document.addEventListener("keydown", handleEscape);

      backdrop.addEventListener("click", function (event) {
        if (event.target === backdrop) {
          closeWith(false);
        }
      });

      dialog.addEventListener("click", function (event) {
        const target = event.target;
        if (!(target instanceof HTMLElement)) {
          return;
        }

        const action = target.getAttribute("data-schedule-revert-action");
        if (action === "cancel") {
          closeWith(false);
          return;
        }

        if (action === "revert") {
          closeWith(true);
        }
      });
    });
  }

  function applyTemplateCompletion(building, scheduleItem, options) {
    const template = findPropertyTemplateById(building, scheduleItem.propertyTemplateId || scheduleItem.templateId);
    if (!template) {
      return null;
    }

    const previousDueDate = String(template.nextDueDate || scheduleItem.dueDate || "").trim();
    const newDueDate = getNextDueDatePlaceholder(previousDueDate, template.defaultFrequency || scheduleItem.frequency, template.customRecurringDates, false);
    const completedAt = options.completedAt || new Date().toISOString();
    const completedBy = options.completedBy || "Property Manager";
    const historyId = window.BuildingStorage.createId();

    const historyRecord = {
      id: historyId,
      templateId: template.id,
      scheduleItemId: scheduleItem.id,
      completedAt: completedAt,
      completedDate: completedAt.slice(0, 10),
      completedBy: completedBy,
      taskName: scheduleItem.taskName,
      companyUsed: options.companyUsed || "",
      companyUsedId: options.companyUsedId || "",
      contactUsed: options.contactUsed || "",
      contactUsedId: options.contactUsedId || "",
      notes: options.notes || "",
      hasAttachments: Boolean(options.completionDocument),
      completionDocument: options.completionDocument || null,
      previousDueDate: previousDueDate,
      newDueDate: newDueDate,
      nextDueDate: newDueDate,
      revertedAt: "",
      revertedBy: "",
      createdDate: completedAt,
    };

    const updatedPropertyTemplates = getPropertyTemplates(building).map(function (entry) {
      if (entry.id !== template.id) {
        return entry;
      }

      return normalizePropertyTemplateRecord({
        ...entry,
        nextDueDate: newDueDate,
        defaultFrequency: template.defaultFrequency,
        preferredCompanyId: options.companyUsedId || entry.preferredCompanyId || "",
        preferredContactId: options.contactUsedId || entry.preferredContactId || "",
        lastUpdated: completedAt,
      });
    });

    const activeTemplate = updatedPropertyTemplates.find(function (entry) {
      return entry.id === template.id;
    }) || template;

    const updatedScheduleItems = (building.scheduleItems || []).map(function (item) {
      if (item.id !== scheduleItem.id) {
        return item;
      }

      const nextScheduleItem = {
        ...item,
        templateId: activeTemplate.id,
        propertyTemplateId: activeTemplate.id,
        dueDate: newDueDate,
        lastCompletedDate: completedAt.slice(0, 10),
        frequency: activeTemplate.defaultFrequency,
        taskName: activeTemplate.name,
        category: activeTemplate.category,
        preferredCompany: options.companyUsed || item.preferredCompany || "",
        preferredCompanyId: options.companyUsedId || item.preferredCompanyId || "",
        preferredContactId: options.contactUsedId || item.preferredContactId || "",
        status: "",
        lastCompletionHistoryId: historyId,
        lastUpdated: completedAt,
      };

      nextScheduleItem.status = getScheduleStatusText(nextScheduleItem);
      return nextScheduleItem;
    });

    const updated = {
      ...building,
      propertyTemplates: updatedPropertyTemplates,
      scheduleItems: updatedScheduleItems,
      historyRecords: (building.historyRecords || []).concat(historyRecord),
      lastUpdated: completedAt,
    };

    const normalized = ensureWorkflowCollections(updated);
    window.BuildingStorage.updateBuilding(normalized);
    return normalized;
  }

  function revertTemplateCompletion(building, scheduleItem, historyRecord) {
    const template = findPropertyTemplateById(building, scheduleItem.propertyTemplateId || scheduleItem.templateId);
    if (!template || !historyRecord) {
      return null;
    }

    const revertedAt = new Date().toISOString();
    const revertedBy = "Property Manager";

    const updatedPropertyTemplates = getPropertyTemplates(building).map(function (entry) {
      if (entry.id !== template.id) {
        return entry;
      }

      return normalizePropertyTemplateRecord({
        ...entry,
        nextDueDate: historyRecord.previousDueDate,
        lastUpdated: revertedAt,
      });
    });

    const updated = {
      ...building,
      propertyTemplates: updatedPropertyTemplates,
      scheduleItems: (building.scheduleItems || []).map(function (item) {
        if (item.id !== scheduleItem.id) {
          return item;
        }

        const restoredStatus = getScheduleStatusText({
          ...item,
          status: "",
          dueDate: historyRecord.previousDueDate,
        });

        return {
          ...item,
          dueDate: historyRecord.previousDueDate,
          lastCompletedDate: "",
          status: restoredStatus,
          lastCompletionHistoryId: "",
          lastUpdated: revertedAt,
        };
      }),
      historyRecords: (building.historyRecords || []).map(function (record) {
        if (record.id !== historyRecord.id) {
          return record;
        }

        return {
          ...record,
          revertedAt: revertedAt,
          revertedBy: revertedBy,
        };
      }),
      lastUpdated: revertedAt,
    };

    const normalized = ensureWorkflowCollections(updated);
    window.BuildingStorage.updateBuilding(normalized);
    return normalized;
  }

  function renderScheduleRow(row) {
    const dueClass = `schedule-row-due-${row.visualPriority}`;
    const statusClass = `schedule-row-status-${row.visualPriority}`;
    const isTenancyItem = row.item.sourceType === "tenancy";
    const isDocumentItem = row.item.sourceType === "document";
    const propertyMarkup = `<p class="schedule-row-meta">Property: ${escapeHtml(row.propertyName || "Property not assigned")}</p>`;
    const lastCompletedMarkup = `<p class="schedule-row-meta">Last Completed: ${escapeHtml(formatLastCompletedDate(row.lastCompletedDate))}</p>`;
    const dueDateMarkup = `<p class="schedule-row-due ${dueClass}">Next Due Date: ${formatDate(row.item.dueDate)}</p>`;
    const statusMarkup = `<p class="schedule-row-status ${statusClass}">Status: ${escapeHtml(row.statusText)}</p>`;

    let contextMarkup = "";
    if (isTenancyItem) {
      const tenancyLabel = getTenancyLabelForScheduleItem(row.item);
      if (tenancyLabel) {
        contextMarkup = `<p class="schedule-row-meta">Tenancy: ${escapeHtml(tenancyLabel)}</p>`;
      }
    } else if (isDocumentItem) {
      const tenancyLabel = getTenancyLabelForScheduleItem(row.item);
      contextMarkup = (tenancyLabel ? `<p class="schedule-row-meta">Tenancy: ${escapeHtml(tenancyLabel)}</p>` : "")
        + `<p class="schedule-row-meta">Source: Document</p>`;
    } else {
      const linkedContactText = getScheduleLinkedContactText(row);
      if (linkedContactText) {
        contextMarkup = `<p class="schedule-row-meta">Contact: ${escapeHtml(linkedContactText)}</p>`;
      }
    }

    const frequencyMarkup = ((isTenancyItem || isDocumentItem) && row.item.frequency === "One-off")
      ? ""
      : `<p class="schedule-row-meta">Frequency: ${escapeHtml(row.item.frequency)}</p>`;

    return `
      <article class="schedule-ops-row schedule-ops-row-${row.state} schedule-ops-priority-${row.visualPriority}" data-schedule-id="${row.item.id}" data-schedule-building-id="${row.propertyId}" role="button" tabindex="0" aria-label="Open schedule details for ${escapeHtml(row.item.taskName)}">
        <span class="schedule-ops-marker" aria-hidden="true"></span>
        <div class="schedule-ops-main">
          <h3 class="schedule-row-title">${escapeHtml(row.item.taskName)}</h3>
          <div class="schedule-ops-details-columns">
            <div class="schedule-ops-details-column">
              ${frequencyMarkup}
              ${propertyMarkup}
              ${lastCompletedMarkup}
            </div>
            <div class="schedule-ops-details-column">
              ${dueDateMarkup}
              ${statusMarkup}
              ${contextMarkup}
            </div>
          </div>
        </div>
      </article>
    `;
  }

  function getScheduleLinkedContactText(row) {
    if (!row || !row.item) {
      return "";
    }

    const contactId = String(row.item.preferredContactId || "").trim();
    if (!contactId) {
      return "";
    }

    const building = findBuildingById(row.propertyId);
    const contact = findContactById(contactId);
    if (!building || !contact) {
      return "";
    }

    const relationship = getBuildingRelationshipForContact(building, contact);
    return `${contact.name} (${relationship})`;
  }

  function renderScheduleGroup(title, priorityKey, rows) {
    const rowsForGroup = sortScheduleRows(rows.filter(function (row) {
      return row.visualPriority === priorityKey;
    }));

    if (rowsForGroup.length === 0) {
      return "";
    }

    return `
      <section class="schedule-ops-group schedule-ops-group-${priorityKey}">
        <h3 class="schedule-ops-group-title">${title}</h3>
        <div class="schedule-ops-group-list">
          ${rowsForGroup.map(renderScheduleRow).join("")}
        </div>
      </section>
    `;
  }

  function renderScheduleOperationsList(rows) {
    if (rows.length === 0) {
      scheduleOpsList.innerHTML = `<p class="module-placeholder schedule-ops-empty">No scheduled items for ${getBuildingFilterEmptySuffix()}.</p>`;
      return;
    }

    const sortedRows = sortScheduleRows(rows);
    scheduleOpsList.innerHTML = `
      <section class="schedule-ops-group schedule-ops-group-scheduled">
        <h3 class="schedule-ops-group-title">Calendar Items</h3>
        <div class="schedule-ops-group-list">
          ${sortedRows.map(renderScheduleRow).join("")}
        </div>
      </section>
    `;
  }

  function renderCompletedRecords(container, records) {
    if (!records || records.length === 0) {
      container.innerHTML = '<p class="module-placeholder">No completed calendar work.</p>';
      return;
    }

    const sorted = records.slice().sort(function (a, b) {
      return new Date(b.completedDate).getTime() - new Date(a.completedDate).getTime();
    });

    container.innerHTML = sorted
      .map(function (record) {
        const notesSummary = record.notes ? record.notes.slice(0, 80) : "No notes";
        const attachmentFlag = record.hasAttachments ? "Attachments: Yes" : "Attachments: No";
        const companyDisplay = record.companyUsedId ? getCompanyNameById(record.companyUsedId, record.companyUsed) : (record.companyUsed || "Not set");
        return `
          <article class="building-card clickable-card history-card" data-history-id="${record.id}" role="button" tabindex="0" aria-label="Open history item ${record.taskName}">
            <h3>${record.taskName}</h3>
            <p><strong>Completion date:</strong> ${formatDate(record.completedDate)}</p>
            <p><strong>Company:</strong> ${companyDisplay}</p>
            <p><strong>Notes:</strong> ${notesSummary}</p>
            <p><strong>${attachmentFlag}</strong></p>
            <p><strong>Next due date:</strong> ${formatDate(record.nextDueDate)}</p>
            <span class="card-chevron">&gt;</span>
          </article>
        `;
      })
      .join("");
  }

  function renderSchedulePage() {
    const buildings = getNormalizedScheduleBuildings();
    scheduleBuildingName.textContent = activeBuildingId ? getActiveBuildingName() : "All Properties";

    const rows = buildings.flatMap(function (building) {
      return decorateScheduleRows(building, building.scheduleItems || []);
    });
    renderScheduleFilterOptions(buildings, rows);
    const filteredRows = filterScheduleRows(rows);
    renderScheduleOperationsList(filteredRows);
  }

  function renderHistoryPage(building) {
    const normalized = ensureWorkflowCollections(building);
    historyBuildingName.textContent = normalized.buildingName;

    renderCompletedRecords(historyList, normalized.historyRecords);
  }

  function openScheduleView(buildingId) {
    const buildings = window.BuildingStorage.getBuildings();
    if (buildings.length === 0) {
      showDashboard();
      return;
    }

    if (arguments.length > 0) {
      setCurrentPropertyId(buildingId && findBuildingById(buildingId) ? buildingId : "");
    }

    syncScheduleFilterToCurrentProperty();

    renderSchedulePage();
    showScheduleView();
  }

  function openHistoryView(buildingId) {
    openScheduleView(buildingId);
  }

  function findScheduleItemById(building, itemId) {
    const normalized = ensureWorkflowCollections(building);
    return normalized.scheduleItems.find(function (item) {
      return item.id === itemId;
    });
  }

  // Document-generated schedule items carry documentId/documentSource back to the owning repository record.
  function findDocumentForScheduleItem(building, scheduleItem) {
    if (!building || !scheduleItem || scheduleItem.sourceType !== "document") {
      return null;
    }
    const documentId = String(scheduleItem.documentId || "").trim();
    if (!documentId) {
      return null;
    }
    const normalized = ensureWorkflowCollections(building);
    if (scheduleItem.documentSource === "tenancy") {
      const tenancies = getAllTenanciesForBuilding(normalized);
      for (let i = 0; i < tenancies.length; i += 1) {
        const leaseDocuments = tenancies[i] && tenancies[i].lease && Array.isArray(tenancies[i].lease.documents)
          ? tenancies[i].lease.documents
          : [];
        const found = leaseDocuments.find(function (record) { return String(record.id || "") === documentId; });
        if (found) {
          return found;
        }
      }
      return null;
    }
    return (normalized.documents || []).find(function (record) { return String(record.id || "") === documentId; }) || null;
  }

  function renderCompanySelect(selectElement, selectedId, includeEmptyOption) {
    const companies = getCompanies();
    const options = [];
    if (includeEmptyOption) {
      options.push('<option value="">Not set</option>');
    }

    companies.forEach(function (company) {
      const selected = company.id === selectedId ? " selected" : "";
      options.push(`<option value="${company.id}"${selected}>${company.name}</option>`);
    });

    selectElement.innerHTML = options.join("");
  }

  function renderContactSelect(selectElement, selectedId, companyId, includeEmptyOption) {
    const contacts = getContacts().filter(function (contact) {
      if (!companyId) {
        return true;
      }
      return contact.companyId === companyId;
    });

    const options = [];
    if (includeEmptyOption) {
      options.push('<option value="">Not set</option>');
    }

    contacts.forEach(function (contact) {
      const selected = contact.id === selectedId ? " selected" : "";
      const company = findCompanyById(contact.companyId);
      const suffix = company ? ` (${company.name})` : "";
      options.push(`<option value="${contact.id}"${selected}>${contact.name}${suffix}</option>`);
    });

    selectElement.innerHTML = options.join("");
  }

  function openCompleteTaskView(itemId) {
    const building = findBuildingById(activeBuildingId);
    if (!building) {
      showDashboard();
      return;
    }

    const scheduleItem = findScheduleItemById(building, itemId);
    if (!scheduleItem) {
      openScheduleView(activeBuildingId);
      return;
    }

    activeScheduleItemId = scheduleItem.id;
    completeTaskBuildingName.textContent = building.buildingName;
    completeTaskName.textContent = scheduleItem.taskName;
    completeTaskForm.reset();
    completeTaskForm.elements.completionDate.value = new Date().toISOString().slice(0, 10);
    ensureDefaultCompany();
    renderCompanySelect(completeTaskForm.elements.companyUsed, scheduleItem.preferredCompanyId || "", false);
    const selectedCompanyId = scheduleItem.preferredCompanyId || completeTaskForm.elements.companyUsed.value;
    renderContactSelect(completeTaskForm.elements.contactUsed, scheduleItem.preferredContactId || "", selectedCompanyId, true);
    showCompleteTaskView();
  }

  function createNextScheduleOccurrence(item, completionDate, companyUsed) {
    const baseDueDate = String(item.dueDate || completionDate || "").trim();
    const nextDueDate = getNextDueDatePlaceholder(baseDueDate, item.frequency, item.customRecurringDates);

    return {
      ...item,
      id: window.BuildingStorage.createId(),
      dueDate: nextDueDate,
      preferredCompany: companyUsed || item.preferredCompany,
      preferredCompanyId: item.preferredCompanyId || "",
      preferredContactId: item.preferredContactId || "",
      status: "Future",
      createdDate: new Date().toISOString(),
      lastUpdated: new Date().toISOString(),
    };
  }

  function getTenancySummaryText(items, singular, plural) {
    if (singular === "Contact") {
      return getContactCountLabel(items);
    }

    if (!Array.isArray(items) || items.length === 0) {
      return "No documents";
    }

    return `${items.length} ${plural}`;
  }

  function getContactCountLabel(items) {
    if (!Array.isArray(items) || items.length === 0) {
      return "0 Contacts";
    }

    if (items.length === 1) {
      return "1 Contact";
    }

    return `${items.length} Contacts`;
  }

  function getContactIdentityKey(contact) {
    if (!contact) {
      return "";
    }

    const id = String(contact.id || "").trim();
    if (id) {
      return `id:${id}`;
    }

    const name = normalizeText(contact.name || "");
    const email = normalizeText(contact.email || "");
    const mobile = normalizeText(contact.mobile || "");
    const companyId = normalizeText(contact.companyId || "");
    return `fallback:${name}|${email}|${mobile}|${companyId}`;
  }

  function dedupeContacts(contacts) {
    const seen = new Set();
    return (contacts || []).filter(function (contact) {
      const key = getContactIdentityKey(contact);
      if (!key || seen.has(key)) {
        return false;
      }
      seen.add(key);
      return true;
    });
  }

  // A property shows its own contacts plus every contact linked to one of its tenancies.
  function getContactIdsForBuilding(building) {
    if (!building) {
      return [];
    }

    const ids = [];
    const seen = new Set();
    const add = function (contactId) {
      const id = String(contactId || "").trim();
      if (!id || seen.has(id)) {
        return;
      }
      seen.add(id);
      ids.push(id);
    };

    (Array.isArray(building.buildingContactAssignments) ? building.buildingContactAssignments : []).forEach(add);
    getAllTenanciesForBuilding(building).forEach(function (tenancy) {
      getTenancyContactRefs(tenancy).forEach(add);
    });

    return ids;
  }

  function getContactsForBuilding(building) {
    if (!building) {
      return [];
    }

    const refs = getContactIdsForBuilding(building);

    // Backward compatibility: show legacy embedded tenancy contacts until migration links are created.
    if (refs.length === 0 && building.tenancy && Array.isArray(building.tenancy.contacts) && building.tenancy.contacts.length > 0) {
      return dedupeContacts(building.tenancy.contacts);
    }

    return dedupeContacts(refs
      .map(function (contactId) {
        return findContactById(contactId);
      })
      .filter(function (contact) {
        return Boolean(contact);
      }));
  }

  function getContactsForActiveBuilding() {
    const building = findBuildingById(activeBuildingId);
    return getContactsForBuilding(building);
  }

  // Property links used to be written into tenancy.contactRefs, which made every property contact
  // appear on every tenancy card. Only property links also recorded a relationship label, so those
  // are moved back to the property; refs without one were created by the tenancy Add Link flow.
  function migratePropertyContactsOutOfTenancies() {
    window.BuildingStorage.getBuildings().forEach(function (building) {
      const tenancies = getAllTenanciesForBuilding(building);
      if (tenancies.length === 0) {
        return;
      }

      const legacyRelationshipMap = building.tenancy && building.tenancy.contactRelationshipById
        && typeof building.tenancy.contactRelationshipById === "object"
        ? building.tenancy.contactRelationshipById
        : {};
      if (Object.keys(legacyRelationshipMap).length === 0) {
        return;
      }

      const propertyRefs = Array.isArray(building.buildingContactAssignments)
        ? building.buildingContactAssignments.slice()
        : [];
      let changed = false;

      const nextTenancies = tenancies.map(function (tenancy) {
        const refs = getTenancyContactRefs(tenancy);
        const keptRefs = refs.filter(function (contactId) {
          if (!Object.prototype.hasOwnProperty.call(legacyRelationshipMap, contactId)) {
            return true;
          }

          if (!propertyRefs.includes(contactId)) {
            propertyRefs.push(contactId);
          }
          changed = true;
          return false;
        });

        return keptRefs.length === refs.length ? tenancy : { ...tenancy, contactRefs: keptRefs };
      });

      if (!changed) {
        return;
      }

      window.BuildingStorage.updateBuilding({
        ...building,
        buildingContactAssignments: propertyRefs,
        contactRelationshipById: {
          ...legacyRelationshipMap,
          ...(building.contactRelationshipById && typeof building.contactRelationshipById === "object" ? building.contactRelationshipById : {}),
        },
        tenancies: nextTenancies,
        tenancy: nextTenancies[0] || null,
        lastUpdated: building.lastUpdated || new Date().toISOString(),
      });
    });
  }

  function migrateBuildingRolesIntoContactsForAllBuildings() {
    const buildings = window.BuildingStorage.getBuildings();
    buildings.forEach(function (building) {
      const roles = Array.isArray(building.buildingRoles) ? building.buildingRoles : [];
      if (roles.length === 0) {
        return;
      }

      const refs = Array.isArray(building.buildingContactAssignments) ? building.buildingContactAssignments.slice() : [];

      let buildingChanged = false;
      roles.forEach(function (roleItem) {
        if (!roleItem || !roleItem.contactId) {
          return;
        }

        const contact = findContactById(roleItem.contactId);
        if (!contact) {
          return;
        }

        if (!refs.includes(contact.id)) {
          refs.push(contact.id);
          buildingChanged = true;
        }

        const currentRelationship = String(contact.responsibility || "").trim();
        const roleRelationship = String(roleItem.role || "").trim();
        if (!roleRelationship) {
          return;
        }

        if (!currentRelationship || currentRelationship === "General") {
          window.BuildingStorage.upsertContact({
            ...contact,
            contactType: getContactClassification(contact),
            responsibility: roleRelationship,
            lastUpdated: new Date().toISOString(),
          });
        }
      });

      if (buildingChanged) {
        window.BuildingStorage.updateBuilding({
          ...building,
          buildingContactAssignments: refs,
          lastUpdated: building.lastUpdated || new Date().toISOString(),
        });
      }
    });
  }

  function getDocumentSummaryText(items) {
    if (!Array.isArray(items) || items.length === 0) {
      return "No documents";
    }

    if (items.length === 1) {
      return "1 Document";
    }

    return `${items.length} Documents`;
  }

  function renderTenancySectionState(hasTenancy, mode) {
    tenancyEmptyState.style.display = hasTenancy || mode === "form" ? "none" : "block";
    tenancyDetailsCard.style.display = hasTenancy && mode !== "form" ? "block" : "none";
    tenancyFormCard.style.display = mode === "form" ? "block" : "none";
    if (addTenancyBtn instanceof HTMLButtonElement) {
      addTenancyBtn.style.display = mode === "form" ? "none" : "";
    }
  }

  function getTenancyById(building, tenancyId) {
    const targetId = String(tenancyId || "").trim();
    if (!targetId) {
      return null;
    }

    return getAllTenanciesForBuilding(building).find(function (tenancy) {
      return String(tenancy.id || "") === targetId;
    }) || null;
  }

  function setTenancyTab(tabName) {
    activeTenancyTab = tabName === "history" ? "history" : "current";
    const isCurrent = activeTenancyTab === "current";
    tenancyTabCurrent.classList.toggle("is-active", isCurrent);
    tenancyTabHistory.classList.toggle("is-active", !isCurrent);
    tenancyTabCurrent.setAttribute("aria-selected", isCurrent ? "true" : "false");
    tenancyTabHistory.setAttribute("aria-selected", isCurrent ? "false" : "true");
    tenancyCurrentPanel.classList.toggle("is-active", isCurrent);
    tenancyHistoryPanel.classList.toggle("is-active", !isCurrent);
  }

  function renderTenancyHistory() {
    const entries = [];
    getBuildingsForFilter().forEach(function (building) {
      (Array.isArray(building.tenancyHistory) ? building.tenancyHistory : []).forEach(function (entry) {
        entries.push({ building: building, entry: entry });
      });
    });

    if (entries.length === 0) {
      tenancyHistoryList.innerHTML = `<p class="module-placeholder">No previous tenants recorded for ${getBuildingFilterEmptySuffix()}.</p>`;
      return;
    }

    tenancyHistoryList.innerHTML = entries
      .map(function (row) {
        const entry = row.entry;
        return `
          <article class="building-card">
            <h3>${escapeHtml(entry.companyName || "Previous Tenant")}</h3>
            <p><strong>Property:</strong> ${escapeHtml(row.building.buildingName || "Not set")}</p>
            <p><strong>Lease Dates:</strong> ${formatDate(entry.leaseStart)} - ${formatDate(entry.leaseEnd)}</p>
            <p><strong>Historic documents:</strong> ${getDocumentSummaryText(entry.documents || [])}</p>
            <p><strong>Historic contacts:</strong> ${getContactCountLabel(entry.contactRefs || [])}</p>
          </article>
        `;
      })
      .join("");
  }

  function getLeaseStatusLabel(tenancy) {
    if (!tenancy) {
      return "No current tenancy";
    }

    const today = toDateStart(new Date().toISOString().slice(0, 10)).getTime();
    const start = tenancy.leaseStart ? toDateStart(tenancy.leaseStart).getTime() : null;
    const end = tenancy.leaseEnd ? toDateStart(tenancy.leaseEnd).getTime() : null;

    if (start && today < start) {
      return "Pending";
    }
    if (end && today > end) {
      return "Expired";
    }
    if (start || end) {
      return "Active";
    }

    return tenancy.status || "Pending";
  }

  function getLeaseCategoryByKey(categoryKey) {
    return LEASE_DOCUMENT_CATEGORIES.find(function (category) {
      return category.key === categoryKey;
    }) || LEASE_DOCUMENT_CATEGORIES[LEASE_DOCUMENT_CATEGORIES.length - 1];
  }

  function getLeaseCategoryForDocumentType(documentType) {
    const matched = LEASE_DOCUMENT_CATEGORIES.find(function (category) {
      return category.documentTypes.includes(documentType);
    });

    return matched || LEASE_DOCUMENT_CATEGORIES[LEASE_DOCUMENT_CATEGORIES.length - 1];
  }

  function getDocumentsForLeaseCategory(lease, categoryKey) {
    return (lease.documents || [])
      .filter(function (documentRecord) {
        return getLeaseCategoryForDocumentType(documentRecord.documentType).key === categoryKey;
      })
      .slice()
      .sort(function (left, right) {
        const leftPrimary = left.documentDate || left.uploadedAt || "";
        const rightPrimary = right.documentDate || right.uploadedAt || "";
        const leftTime = new Date(leftPrimary).getTime() || 0;
        const rightTime = new Date(rightPrimary).getTime() || 0;
        if (rightTime !== leftTime) {
          return rightTime - leftTime;
        }

        return new Date(right.uploadedAt).getTime() - new Date(left.uploadedAt).getTime();
      });
  }

  function formatLeaseDocumentCount(count) {
    if (count === 0) {
      return "No Documents";
    }

    if (count === 1) {
      return "1 Document";
    }

    return `${count} Documents`;
  }

  function getLatestLeaseDocumentForCategory(lease, categoryKey) {
    return getDocumentsForLeaseCategory(lease, categoryKey)[0] || null;
  }

  function formatLeaseLatestDocumentDate(documentRecord) {
    if (!documentRecord) {
      return "No upload date";
    }

    const source = documentRecord.uploadedAt || documentRecord.documentDate;
    if (!source) {
      return "No upload date";
    }

    return formatDate(source);
  }

  function matchesLeaseCategorySearch(category, documents, latestDocument) {
    const query = normalizeText(leaseSearchQuery);
    if (!query) {
      return true;
    }

    if (normalizeText(category.title).includes(query)) {
      return true;
    }

    if (latestDocument && normalizeText(latestDocument.fileName).includes(query)) {
      return true;
    }

    return documents.some(function (documentRecord) {
      return normalizeText(documentRecord.fileName).includes(query)
        || normalizeText(documentRecord.documentType).includes(query);
    });
  }

  function getLeaseData(building) {
    const normalized = ensureWorkflowCollections(building);
    if (!normalized.tenancy) {
      return {
        building: normalized,
        tenancy: null,
        lease: {
          notes: "",
          documents: [],
          versionHistory: [],
        },
      };
    }

    return {
      building: normalized,
      tenancy: normalized.tenancy,
      lease: normalized.tenancy.lease || {
        notes: "",
        documents: [],
        versionHistory: [],
      },
    };
  }

  function sortDocumentRecordsNewest(records) {
    return records.slice().sort(function (left, right) {
      const leftPrimary = left.documentDate || left.uploadedAt || "";
      const rightPrimary = right.documentDate || right.uploadedAt || "";
      const leftTime = new Date(leftPrimary).getTime() || 0;
      const rightTime = new Date(rightPrimary).getTime() || 0;
      if (rightTime !== leftTime) {
        return rightTime - leftTime;
      }

      return new Date(right.uploadedAt).getTime() - new Date(left.uploadedAt).getTime();
    });
  }

  function getDocumentsModuleCategories(building) {
    return (building.documentCategories || []).slice().sort(function (left, right) {
      return left.sortOrder - right.sortOrder;
    });
  }

  function findDocumentCategoryById(building, categoryId) {
    return getDocumentsModuleCategories(building).find(function (category) {
      return category.id === categoryId;
    }) || null;
  }

  function getDocumentsForCategoryContainer(building, category) {
    if (!category) {
      return [];
    }

    if (category.source === "lease") {
      return sortDocumentRecordsNewest(getLeaseData(building).lease.documents || []);
    }

    return sortDocumentRecordsNewest((building.documents || []).filter(function (documentRecord) {
      return documentRecord.categoryId === category.id;
    }));
  }

  function getLatestDocumentForCategoryContainer(building, category) {
    return getDocumentsForCategoryContainer(building, category)[0] || null;
  }

  // Locates a document anywhere in a building's categories, for read-only portfolio actions.
  function findAnyDocumentRecordInBuilding(building, documentId) {
    const targetId = String(documentId || "").trim();
    if (!building || !targetId) {
      return null;
    }

    const normalized = ensureWorkflowCollections(building);
    let found = null;
    getDocumentsModuleCategories(normalized).some(function (category) {
      found = getDocumentsForCategoryContainer(normalized, category).find(function (documentRecord) {
        return String(documentRecord.id || "") === targetId;
      }) || null;
      return Boolean(found);
    });

    return found;
  }

  function getDocumentRegisterRecords() {
    const records = [];
    const seen = new Set();
    getBuildingsForFilter().forEach(function (building) {
      const normalized = ensureWorkflowCollections(building);
      (normalized.documents || []).forEach(function (documentRecord) {
        const key = `${building.id}:${documentRecord.id}`;
        if (seen.has(key)) return;
        seen.add(key);
        records.push({
          building: normalized,
          record: documentRecord,
          source: "building",
          tenancyId: String(documentRecord.tenancyId || "").trim(),
        });
      });

      const currentTenancy = normalized.tenancy;
      const leaseDocuments = currentTenancy && currentTenancy.lease && Array.isArray(currentTenancy.lease.documents)
        ? currentTenancy.lease.documents
        : [];
      leaseDocuments.forEach(function (documentRecord) {
        const key = `${building.id}:${documentRecord.id}`;
        if (seen.has(key)) return;
        seen.add(key);
        records.push({
          building: normalized,
          record: documentRecord,
          source: "tenancy",
          tenancyId: String(currentTenancy.id || "").trim(),
        });
      });
    });
    return records;
  }

  function getDocumentRegisterTitle(record) {
    return String(record.title || record.description || record.fileName || "Untitled Document").trim();
  }

  function getDocumentRegisterCategory(entry) {
    if (entry.source === "tenancy") {
      return mapToFixedDocumentCategory(entry.record.category) || "Tenancy";
    }
    return resolveFixedCategoryForRecord(entry.record, getDocumentsModuleCategories(ensureWorkflowCollections(entry.building)));
  }

  function getDocumentRegisterRelatedToLabel(entry) {
    return entry.source === "tenancy" ? "Tenancy" : "Property";
  }

  function matchesDocumentRegisterFilters(entry) {
    if (leaseCategoryFilterValue && getDocumentRegisterCategory(entry) !== leaseCategoryFilterValue) {
      return false;
    }

    // Guarded reference: older embedded test harnesses execute this function without declaring the newer filter globals.
    const relatedToFilter = typeof leaseRelatedToFilterValue !== "undefined" ? leaseRelatedToFilterValue : "";
    if (relatedToFilter && getDocumentRegisterRelatedToLabel(entry) !== relatedToFilter) {
      return false;
    }

    const query = normalizeText(leaseSearchQuery);
    if (!query) {
      return true;
    }

    return normalizeText([
      getDocumentRegisterTitle(entry.record),
      getDocumentRegisterCategory(entry),
      entry.building.buildingName,
      entry.record.notes,
      entry.record.description,
      entry.record.fileName,
      entry.record.documentType,
    ].join(" ")).includes(query);
  }

  function getFilteredDocumentRegisterEntries() {
    const sortValue = typeof leaseSortValue !== "undefined" ? leaseSortValue : "newest";
    return getDocumentRegisterRecords()
      .filter(matchesDocumentRegisterFilters)
      .sort(function (left, right) {
        const leftTime = new Date(left.record.documentDate || left.record.uploadedAt || 0).getTime() || 0;
        const rightTime = new Date(right.record.documentDate || right.record.uploadedAt || 0).getTime() || 0;
        return sortValue === "oldest" ? leftTime - rightTime : rightTime - leftTime;
      });
  }

  function getDocumentRegisterRelatedTenancy(entry) {
    const tenancyId = entry.tenancyId || String(entry.record.tenancyId || "").trim();
    return getAllTenanciesForBuilding(entry.building).find(function (tenancy) {
      return String(tenancy.id || "") === tenancyId;
    }) || null;
  }

  function getDocumentRegisterRelatedScheduleItem(entry) {
    const scheduleItemId = String(entry.record.scheduleItemId || "").trim();
    if (!scheduleItemId) {
      return null;
    }
    return (ensureWorkflowCollections(entry.building).scheduleItems || []).find(function (item) {
      return String(item.id || "") === scheduleItemId;
    }) || null;
  }

  function getDocumentRegisterEmptyMessage() {
    if (leaseSearchQuery.trim()) {
      return "No documents match your search.";
    }
    if (leaseCategoryFilterValue) {
      return `No ${leaseCategoryFilterValue} documents${getBuildingFilterId() ? " for this Property" : ""}.`;
    }
    return getBuildingFilterId() ? "No documents for this Property." : "No documents have been added yet.";
  }

  function renderDocumentRegister() {
    const entries = getFilteredDocumentRegisterEntries();

    if (entries.length === 0) {
      leaseCategoryGrid.classList.add("document-register-list");
      leaseCategoryGrid.innerHTML = `<p class="module-placeholder">${escapeHtml(getDocumentRegisterEmptyMessage())}</p>`;
      return;
    }

    leaseCategoryGrid.classList.add("document-register-list");
    leaseCategoryGrid.innerHTML = entries.map(function (entry) {
      const record = entry.record;
      const tenancy = getDocumentRegisterRelatedTenancy(entry);
      const scheduleItem = getDocumentRegisterRelatedScheduleItem(entry);
      return `
        <article class="building-card document-register-row" data-document-register-id="${escapeHtml(record.id)}" data-document-register-building-id="${escapeHtml(entry.building.id)}" data-document-register-source="${entry.source}" role="button" tabindex="0" aria-label="Open document ${escapeHtml(getDocumentRegisterTitle(record))}">
          <div class="document-register-row-main">
            <h3 class="document-register-row-title">${escapeHtml(getDocumentRegisterTitle(record))}</h3>
            <div class="document-register-row-meta">
              <p class="document-item-meta">Category: ${escapeHtml(getDocumentRegisterCategory(entry))}</p>
              <p class="document-item-meta">Property: ${escapeHtml(entry.building.buildingName || "Not set")}</p>
              <p class="document-item-meta">Related to: ${escapeHtml(getDocumentRegisterRelatedToLabel(entry))}</p>
              ${tenancy ? `<p class="document-item-meta">Related Tenancy: ${escapeHtml(tenancy.tradingName || tenancy.companyName || "Tenancy")}</p>` : ""}
              ${scheduleItem ? `<p class="document-item-meta">Related Calendar Item: ${escapeHtml(scheduleItem.taskName || "Calendar Item")}</p>` : ""}
              ${record.fileName ? `<p class="document-item-meta document-item-filename">File: ${escapeHtml(record.fileName)}</p>` : ""}
            </div>
          </div>
          <div class="document-register-row-dates">
            ${record.documentDate ? `<p class="document-item-meta">Date: ${escapeHtml(formatDate(record.documentDate))}</p>` : ""}
            ${record.expiryDate ? `<p class="document-item-meta document-item-expiry">Expires ${escapeHtml(formatDate(record.expiryDate))}</p>` : ""}
          </div>

          <div class="document-item-actions">
            <button class="btn btn-secondary lease-tile-btn document-edit-btn" type="button" data-document-register-edit="true">Edit</button>
          </div>
        </article>
      `;
    }).join("");
  }

  function getDocumentFormBuilding() {
    return findBuildingById(documentBuildingSelect ? documentBuildingSelect.value : "");
  }

  function getDocumentFormCategory() {
    return mapToFixedDocumentCategory(documentCategorySelect ? documentCategorySelect.value : "") || DEFAULT_DOCUMENT_CATEGORY;
  }

  function renderDocumentFormCategoryOptions(selectedCategory) {
    if (!documentCategorySelect) {
      return;
    }
    documentCategorySelect.innerHTML = FIXED_DOCUMENT_CATEGORIES.map(function (category) {
      return `<option value="${escapeHtml(category)}">${escapeHtml(category)}</option>`;
    }).join("");
    documentCategorySelect.value = mapToFixedDocumentCategory(selectedCategory) || DEFAULT_DOCUMENT_CATEGORY;
  }

  function renderDocumentFormBuildingOptions(selectedId) {
    if (!documentBuildingSelect) {
      return;
    }
    const options = selectedId
      ? []
      : ['<option value="">Select a Property</option>'];
    documentBuildingSelect.innerHTML = options.concat(getSortedBuildings().map(function (building) {
      return `<option value="${escapeHtml(building.id)}">${escapeHtml(building.buildingName)}</option>`;
    })).join("");
    documentBuildingSelect.value = selectedId || "";
  }

  function renderDocumentFormRelationships(selectedTenancyId, selectedScheduleItemId) {
    const building = getDocumentFormBuilding();
    const tenancies = building ? getAllTenanciesForBuilding(building) : [];
    const scheduleItems = building ? ensureWorkflowCollections(building).scheduleItems : [];
    if (documentTenancySelect) {
      documentTenancySelect.innerHTML = ['<option value="">No related tenancy</option>']
        .concat(tenancies.map(function (tenancy) {
          return `<option value="${escapeHtml(tenancy.id)}">${escapeHtml(tenancy.tradingName || tenancy.companyName || "Tenancy")}</option>`;
        })).join("");
      documentTenancySelect.value = tenancies.some(function (tenancy) { return String(tenancy.id) === String(selectedTenancyId || ""); }) ? selectedTenancyId : "";
    }
    if (documentScheduleSelect) {
      documentScheduleSelect.innerHTML = ['<option value="">No related calendar item</option>']
        .concat(scheduleItems.map(function (item) {
          return `<option value="${escapeHtml(item.id)}">${escapeHtml(item.taskName || "Calendar Item")}</option>`;
        })).join("");
      documentScheduleSelect.value = scheduleItems.some(function (item) { return String(item.id) === String(selectedScheduleItemId || ""); }) ? selectedScheduleItemId : "";
    }
  }

  function findDocumentRegisterEntry(buildingId, documentId, source) {
    return getDocumentRegisterRecords().find(function (entry) {
      return String(entry.building.id) === String(buildingId)
        && String(entry.record.id) === String(documentId)
        && entry.source === source;
    }) || null;
  }

  // The Calendar toggle only makes sense once an Expiry Date exists; keep it disabled/unchecked otherwise.
  function updateDocumentExpiryCalendarToggleState() {
    const hasExpiryDate = Boolean(String(documentExpiryInput.value || "").trim());
    documentExpiryCalendarToggle.disabled = !hasExpiryDate;
    if (!hasExpiryDate) {
      documentExpiryCalendarToggle.checked = false;
    }
    if (documentExpiryCalendarHelp) {
      documentExpiryCalendarHelp.textContent = hasExpiryDate
        ? "The document expiry will appear in Calendar while this is checked."
        : "Set an Expiry Date to enable a Calendar reminder.";
    }
  }

  function openDocumentForm(mode, entry) {
    activeDocumentFormMode = mode;
    activeDocumentContext = entry || null;
    documentFormFilterBuildingId = getBuildingFilterId();
    documentFormCategory = leaseCategoryFilterValue;
    const record = entry ? entry.record : null;
    const selectedBuildingId = entry ? entry.building.id : getBuildingFilterId();
    documentFormTitle.textContent = mode === "edit" ? "Edit Document" : "Add Document";
    documentTitleInput.value = record ? getDocumentRegisterTitle(record) : "";
    documentDateInput.value = record ? String(record.documentDate || "").slice(0, 10) : "";
    documentExpiryInput.value = record ? String(record.expiryDate || "").slice(0, 10) : "";
    documentExpiryCalendarToggle.checked = Boolean(record && record.addExpiryToCalendar && record.expiryDate);
    updateDocumentExpiryCalendarToggleState();
    documentNotesInput.value = record ? String(record.notes || "") : "";
    renderDocumentFormBuildingOptions(selectedBuildingId);
    renderDocumentFormCategoryOptions(entry ? getDocumentRegisterCategory(entry) : (leaseCategoryFilterValue || DEFAULT_DOCUMENT_CATEGORY));
    renderDocumentFormRelationships(entry ? entry.tenancyId : "", record ? record.scheduleItemId : "");
    documentFileInput.value = "";
    documentFileInput.required = mode !== "edit";
    documentFileHelp.textContent = mode === "edit" ? "(leave blank to keep current file)" : "(required)";
    documentCurrentFile.textContent = record && record.fileName ? `Current file: ${record.fileName}` : "";
    documentSaveBtn.textContent = mode === "edit" ? "Save Changes" : "Save Document";
    documentDeleteBtn.style.display = mode === "edit" ? "inline-flex" : "none";
    setLeaseTopLevelControlsVisible(false);
    documentFormCard.style.display = "block";
    showLeaseView();
  }

  function closeDocumentForm() {
    const filterId = documentFormFilterBuildingId;
    activeDocumentFormMode = "";
    activeDocumentContext = null;
    documentFormCard.style.display = "none";
    setCurrentPropertyId(filterId);
    leaseCategoryFilterValue = documentFormCategory;
    renderLeasePage();
    showLeaseView();
  }

  async function handleSaveDocument(event) {
    event.preventDefault();
    const building = getDocumentFormBuilding();
    const title = String(documentTitleInput.value || "").trim();
    if (!building || !title) {
      return;
    }
    const tenancyId = String(documentTenancySelect.value || "").trim();
    const scheduleItemId = String(documentScheduleSelect.value || "").trim();
    const selectedFile = documentFileInput.files && documentFileInput.files[0] ? documentFileInput.files[0] : null;
    const existing = activeDocumentContext ? activeDocumentContext.record : null;
    const now = new Date().toISOString();
    const storage = selectedFile
      ? { kind: "data-url", dataUrl: await readFileAsDataUrl(selectedFile), previewStatus: "not-generated", ocrStatus: "not-indexed" }
      : (existing && existing.storage ? { ...existing.storage } : null);
    if (activeDocumentFormMode !== "edit" && !selectedFile) {
      return;
    }
    const payload = {
      ...(existing || {}),
      id: existing && existing.id ? existing.id : window.BuildingStorage.createId(),
      title: title,
      description: title,
      category: getDocumentFormCategory(),
      documentType: existing && existing.documentType ? existing.documentType : getDocumentFormCategory(),
      documentDate: String(documentDateInput.value || "").trim(),
      expiryDate: String(documentExpiryInput.value || "").trim(),
      addExpiryToCalendar: Boolean(String(documentExpiryInput.value || "").trim() && documentExpiryCalendarToggle.checked),
      tenancyId: tenancyId,
      scheduleItemId: scheduleItemId,
      notes: String(documentNotesInput.value || "").trim(),
      fileName: selectedFile ? selectedFile.name : (existing ? existing.fileName : ""),
      mimeType: selectedFile ? (selectedFile.type || "application/octet-stream") : (existing ? existing.mimeType : "application/octet-stream"),
      sizeBytes: selectedFile ? (selectedFile.size || 0) : (existing ? existing.sizeBytes || 0 : 0),
      uploadedAt: existing && existing.uploadedAt ? existing.uploadedAt : now,
      lastUpdated: now,
      storage: storage,
    };
    const sourceEntry = activeDocumentContext;
    if (sourceEntry && sourceEntry.source === "tenancy" && String(sourceEntry.building.id) === String(building.id)) {
      const updated = updateActiveBuildingDocumentsState(function (draft) {
        if (!draft.tenancy || !draft.tenancy.lease) return draft;
        draft.tenancy.lease.documents = (draft.tenancy.lease.documents || []).map(function (record) {
          return record.id === payload.id ? payload : record;
        });
        draft.tenancy.documents = draft.tenancy.lease.documents;
        return draft;
      });
      if (updated) closeDocumentForm();
      return;
    }
    if (sourceEntry && sourceEntry.source === "tenancy") {
      updateActiveBuildingDocumentsState(function (draft) {
        if (draft.tenancy && draft.tenancy.lease) {
          draft.tenancy.lease.documents = (draft.tenancy.lease.documents || []).filter(function (record) { return record.id !== payload.id; });
          draft.tenancy.documents = draft.tenancy.lease.documents;
        }
        return draft;
      });
    }
    if (sourceEntry && sourceEntry.source === "building" && String(sourceEntry.building.id) !== String(building.id)) {
      updateBuildingDocumentsStateForBuilding(sourceEntry.building.id, function (draft) {
        draft.documents = (draft.documents || []).filter(function (record) { return record.id !== payload.id; });
        return draft;
      });
    }
    const updated = updateBuildingDocumentsStateForBuilding(building.id, function (draft) {
      draft.documents = (draft.documents || []).filter(function (record) { return record.id !== payload.id; }).concat(payload);
      return draft;
    });
    if (updated) closeDocumentForm();
  }

  function updateBuildingDocumentsStateForBuilding(buildingId, mutator) {
    const building = findBuildingById(buildingId);
    if (!building) return null;
    const normalized = ensureWorkflowCollections(building);
    const draft = JSON.parse(JSON.stringify(normalized));
    const next = mutator(draft) || draft;
    next.lastUpdated = new Date().toISOString();
    window.BuildingStorage.updateBuilding(next);
    return next;
  }

  function handleDeleteDocument() {
    if (!activeDocumentContext || !window.confirm(`Delete this document?\n\nThis will permanently remove "${getDocumentRegisterTitle(activeDocumentContext.record)}".\n\nThis action cannot be undone.`)) return;
    const entry = activeDocumentContext;
    if (entry.source === "tenancy") {
      updateBuildingDocumentsStateForBuilding(entry.building.id, function (draft) {
        if (draft.tenancy && draft.tenancy.lease) {
          draft.tenancy.lease.documents = (draft.tenancy.lease.documents || []).filter(function (record) { return record.id !== entry.record.id; });
          draft.tenancy.documents = draft.tenancy.lease.documents;
        }
        return draft;
      });
    } else {
      updateBuildingDocumentsStateForBuilding(entry.building.id, function (draft) {
        draft.documents = (draft.documents || []).filter(function (record) { return record.id !== entry.record.id; });
        return draft;
      });
    }
    closeDocumentForm();
  }

  // Adding or editing a document replaces the repository browser with a focused form.
  function setLeaseTopLevelControlsVisible(visible) {
    [documentsAddBtn, leaseRepositoryCard].forEach(function (element) {
      if (element) {
        element.style.display = visible ? "" : "none";
      }
    });
  }

  function renderLeasePage() {
    renderAllBuildingFilterSelects();
    if (leaseCategoryFilter) {
      leaseCategoryFilter.value = leaseCategoryFilterValue;
    }
    if (leaseRelatedToFilter) {
      leaseRelatedToFilter.value = leaseRelatedToFilterValue;
    }
    if (leaseSortSelect) {
      leaseSortSelect.value = leaseSortValue;
    }

    if (activeDocumentFormMode) {
      setLeaseTopLevelControlsVisible(false);
      documentFormCard.style.display = "block";
      return;
    }

    setLeaseTopLevelControlsVisible(true);
    documentFormCard.style.display = "none";
    leaseDashboardPanel.style.display = "block";
    renderDocumentRegister();
    showLeaseView();
  }

  function openLeaseView(buildingId) {
    if (arguments.length > 0) {
      setCurrentPropertyId(buildingId && findBuildingById(buildingId) ? buildingId : "");
      syncScheduleFilterToCurrentProperty();
    }

    leaseCategoryFilterValue = "";
    leaseRelatedToFilterValue = "";
    leaseSortValue = "newest";
    leaseSearchQuery = "";
    if (leaseSearch) {
      leaseSearch.value = "";
    }
    renderLeasePage();
    showLeaseView();
  }

  function findLeaseDocumentById(building, documentId) {
    const data = getLeaseData(building);
    return data.lease.documents.find(function (document) {
      return document.id === documentId;
    }) || null;
  }

  function updateActiveBuildingLease(mutator) {
    const current = findBuildingById(activeBuildingId);
    if (!current || !current.tenancy) {
      return null;
    }

    const normalized = ensureWorkflowCollections(current);
    const currentLease = normalized.tenancy.lease || {
      notes: "",
      documents: [],
      versionHistory: [],
    };
    const nextLease = mutator(currentLease);
    const updated = {
      ...normalized,
      tenancy: {
        ...normalized.tenancy,
        documents: nextLease.documents,
        lease: nextLease,
      },
      lastUpdated: new Date().toISOString(),
    };

    window.BuildingStorage.updateBuilding(updated);
    return updated;
  }

  function updateActiveBuildingDocumentsState(mutator) {
    const current = findBuildingById(activeBuildingId);
    if (!current) {
      return null;
    }

    const normalized = ensureWorkflowCollections(current);
    const draft = {
      ...normalized,
      documents: (normalized.documents || []).map(function (documentRecord) {
        return {
          ...documentRecord,
          storage: documentRecord.storage ? { ...documentRecord.storage } : null,
        };
      }),
      documentCategories: (normalized.documentCategories || []).map(function (category) {
        return { ...category };
      }),
      tenancy: normalized.tenancy
        ? {
          ...normalized.tenancy,
          lease: {
            ...(normalized.tenancy.lease || {}),
            documents: ((normalized.tenancy.lease && normalized.tenancy.lease.documents) || []).map(function (documentRecord) {
              return {
                ...documentRecord,
                storage: documentRecord.storage ? { ...documentRecord.storage } : null,
              };
            }),
            versionHistory: ((normalized.tenancy.lease && normalized.tenancy.lease.versionHistory) || []).map(function (entry) {
              return {
                ...entry,
                archivedDocument: entry.archivedDocument
                  ? {
                    ...entry.archivedDocument,
                    storage: entry.archivedDocument.storage ? { ...entry.archivedDocument.storage } : null,
                  }
                  : entry.archivedDocument,
              };
            }),
          },
        }
        : null,
    };

    const next = mutator(draft) || draft;
    const updated = {
      ...next,
      lastUpdated: new Date().toISOString(),
    };

    window.BuildingStorage.updateBuilding(updated);
    return updated;
  }


  function readFileAsDataUrl(file) {
    return new Promise(function (resolve, reject) {
      const reader = new FileReader();
      reader.onload = function () {
        resolve(String(reader.result || ""));
      };
      reader.onerror = function () {
        reject(new Error("Unable to read file."));
      };
      reader.readAsDataURL(file);
    });
  }

  function requestDocumentFileSelection() {
    return new Promise(function (resolve) {
      const input = window.document.createElement("input");
      input.type = "file";
      input.accept = ".pdf,.doc,.docx,image/*";
      input.style.display = "none";

      input.addEventListener("change", function () {
        const selected = input.files && input.files[0] ? input.files[0] : null;
        input.remove();
        resolve(selected);
      }, { once: true });

      window.document.body.appendChild(input);
      input.click();
    });
  }

  function resolveDocumentTypeForCategory(category) {
    if (!category || !Array.isArray(category.documentTypes) || category.documentTypes.length === 0) {
      return "Other";
    }

    if (category.documentTypes.length === 1) {
      return category.documentTypes[0];
    }

    const options = category.documentTypes.join(", ");
    const response = window.prompt(`Select document type for ${category.title}: ${options}`, category.documentTypes[0]);
    const selected = String(response || "").trim();
    if (category.documentTypes.includes(selected)) {
      return selected;
    }

    return category.documentTypes[0];
  }

  function getNextLeaseDocumentVersion(currentVersion) {
    const parsed = /^v(\d+)$/i.exec(String(currentVersion || ""));
    const nextNumber = parsed ? Number(parsed[1]) + 1 : 2;
    return `v${nextNumber}`;
  }

  function createLeaseVersionHistoryEntry(documentRecord, now, note) {
    return {
      id: window.BuildingStorage.createId(),
      uploadedAt: now,
      documentType: documentRecord.documentType,
      version: documentRecord.version || "v1",
      user: documentRecord.uploadedBy || "Property Manager",
      notes: note,
      sourceDocumentId: documentRecord.id,
      fileName: documentRecord.fileName || "",
      mimeType: documentRecord.mimeType || "",
      sizeBytes: documentRecord.sizeBytes || 0,
      replacedUploadedAt: documentRecord.uploadedAt || "",
      replacedLastUpdated: documentRecord.lastUpdated || "",
      archivedDocument: {
        id: documentRecord.id,
        version: documentRecord.version || "v1",
        fileName: documentRecord.fileName || "",
        mimeType: documentRecord.mimeType || "",
        sizeBytes: documentRecord.sizeBytes || 0,
        uploadedAt: documentRecord.uploadedAt || "",
        lastUpdated: documentRecord.lastUpdated || "",
        uploadedBy: documentRecord.uploadedBy || "Property Manager",
        documentDate: documentRecord.documentDate || "",
        description: documentRecord.description || "",
        notes: documentRecord.notes || "",
        storage: documentRecord.storage ? { ...documentRecord.storage } : null,
      },
    };
  }

  function openOrDownloadLeaseDocument(documentRecord, shouldDownload) {
    if (!documentRecord || !documentRecord.storage || !documentRecord.storage.dataUrl) {
      alert("No file is stored for this document.");
      return;
    }

    const link = window.document.createElement("a");
    link.href = documentRecord.storage.dataUrl;
    if (shouldDownload) {
      link.download = documentRecord.fileName || "lease-document";
    } else {
      link.target = "_blank";
      link.rel = "noopener noreferrer";
    }
    window.document.body.appendChild(link);
    link.click();
    window.document.body.removeChild(link);
  }

  function renderContactList(contacts) {
    const query = normalizeText(contactsSearchQuery);
    const relationshipIndex = getContactRelationshipIndex();
    const enriched = dedupeContacts(contacts)
      .map(function (contact) {
        const companyName = String(contact.companyName || "").trim() || String(contact.companyName || "").trim() || getCompanyNameById(contact.companyId, "Not set");
        const relationships = relationshipIndex.get(String(contact.id || "")) || [];
        return {
          contact: contact,
          companyName: companyName,
          relationships: relationships,
          linkedSummary: summarizeContactRelationships(relationships),
        };
      })
      .filter(function (entry) {
        if (contactsRelationshipFilterValue) {
          const hasType = entry.relationships.some(function (relationship) {
            return relationship.type === contactsRelationshipFilterValue;
          });
          if (!hasType) {
            return false;
          }
        }

        if (!query) {
          return true;
        }

        return normalizeText([
          entry.contact.name,
          entry.companyName,
          entry.contact.mobile,
          entry.contact.officePhone,
          entry.contact.email,
          entry.contact.responsibility,
          entry.relationships.map(function (relationship) {
            return `${relationship.targetName} ${relationship.role}`;
          }).join(" "),
        ].join(" ")).includes(query);
      })
      .sort(function (left, right) {
        const leftName = normalizeText(left.contact.name);
        const rightName = normalizeText(right.contact.name);
        if (leftName < rightName) {
          return -1;
        }
        if (leftName > rightName) {
          return 1;
        }
        return 0;
      });

    if (enriched.length === 0) {
      contactsList.innerHTML = '<p class="module-placeholder">No contacts match your search.</p>';
      return;
    }

    function renderLinkedSummary(entry) {
      if (entry.linkedSummary.length === 0) {
        return '<p class="contact-card-linked contact-relationship-empty">Not linked to anything yet.</p>';
      }

      const summary = entry.linkedSummary.map(escapeHtml).join(" \u00b7 ");
      return `<p class="contact-card-linked"><strong>Linked to:</strong> ${summary}</p>`;
    }

    function buildContactCard(entry) {
      const contact = entry.contact;
      const mobileLink = contact.mobile
        ? `<a class="inline-link contact-phone-link" href="tel:${escapeHtml(contact.mobile)}">${escapeHtml(contact.mobile)}</a>`
        : "Not provided";
      const emailLink = contact.email
        ? `<a class="inline-link contact-email-link" href="mailto:${escapeHtml(contact.email)}">${escapeHtml(contact.email)}</a>`
        : "Not provided";
      return `
        <article class="building-card clickable-card contact-card" data-contact-id="${contact.id}" role="button" tabindex="0" aria-label="Open contact ${escapeHtml(contact.name)}">
          <h3 class="contact-card-name">${escapeHtml(contact.name)}</h3>
          <p class="contact-card-company">${escapeHtml(entry.companyName)}</p>
          <p><strong>Phone:</strong> ${mobileLink}</p>
          <p><strong>Email:</strong> ${emailLink}</p>
          ${renderLinkedSummary(entry)}
        </article>
      `;
    }

    contactsList.innerHTML = enriched.map(buildContactCard).join("");
  }

  function showModulePlaceholder(moduleName, message) {
    const descriptions = {
      "Tenancy History": "Previous tenancy records and notes.",
      Documents: "Property records, certificates and supporting files.",
      History: "Completed work and permanent records.",
    };

    placeholderTitle.textContent = moduleName;
    placeholderDescription.textContent = descriptions[moduleName] || "Module information for this property.";
    placeholderBuildingName.textContent = getActiveBuildingName();
    placeholderMessage.textContent = message;
    setBreadcrumbs([
      { label: "Properties", onClick: goToDashboard },
      { label: getActiveBuildingName(), onClick: function () { openOverviewById(activeBuildingId); } },
      { label: moduleName, onClick: function () { showModulePlaceholder(moduleName, message); } },
    ]);
    showPlaceholderViewPage();
  }

  function renderContactSectionState(mode) {
    if (mode === "form") {
      if (contactsCreateBtn instanceof HTMLButtonElement) {
        contactsCreateBtn.style.display = "none";
      }
      contactsEmptyState.style.display = "none";
      contactsListCard.style.display = "none";
      contactFormCard.style.display = "block";
      return;
    }

    if (contactsCreateBtn instanceof HTMLButtonElement) {
      contactsCreateBtn.style.display = "inline-flex";
    }

    const contacts = getContactsForDisplayInActiveBuilding();
    contactFormCard.style.display = "none";

    if (contacts.length === 0) {
      if (contactsEmptyMessage) {
        contactsEmptyMessage.textContent = getBuildingFilterId()
          ? "No contacts associated with this Property."
          : "No contacts have been added.";
      }
      contactsEmptyState.style.display = "block";
      contactsListCard.style.display = "none";
      return;
    }

    contactsEmptyState.style.display = "none";
    contactsListCard.style.display = "block";
    renderContactList(contacts);
  }

  // Read-only derivation of which master contacts relate to a building, via existing relationship ids.
  function getContactIdsRelatedToBuilding(building) {
    const ids = new Set();
    if (!building) {
      return ids;
    }

    getContactsForBuilding(building).forEach(function (contact) {
      if (contact && contact.id) {
        ids.add(String(contact.id));
      }
    });

    getAllTenanciesForBuilding(building).forEach(function (tenancy) {
      getTenancyContactRefs(tenancy).forEach(function (contactId) {
        ids.add(contactId);
      });
    });

    (ensureWorkflowCollections(building).scheduleItems || []).forEach(function (item) {
      const contactId = String(item.preferredContactId || "").trim();
      if (contactId) {
        ids.add(contactId);
      }
    });

    return ids;
  }

  function getContactsForDisplayInActiveBuilding() {
    const allContacts = dedupeContacts(getContacts());
    if (!getBuildingFilterId()) {
      return allContacts;
    }

    const relatedIds = new Set();
    getBuildingsForFilter().forEach(function (building) {
      getContactIdsRelatedToBuilding(building).forEach(function (contactId) {
        relatedIds.add(contactId);
      });
    });

    return allContacts.filter(function (contact) {
      return contact && relatedIds.has(String(contact.id));
    });
  }

  function getScheduleItemsLinkedToContactForFilter(contactId) {
    const items = [];
    getBuildingsForFilter().forEach(function (building) {
      getScheduleItemsLinkedToContact(building, contactId).forEach(function (item) {
        items.push(item);
      });
    });
    return items;
  }

  function getRelationshipForContactInFilter(contact) {
    const buildings = getBuildingsForFilter();
    for (let index = 0; index < buildings.length; index += 1) {
      const relationship = getBuildingContactRelationshipMap(buildings[index])[contact.id];
      if (relationship) {
        return relationship;
      }
    }

    return String(contact.responsibility || "").trim() || "Other";
  }

  function getRelatedBuildingNamesForContact(contactId) {
    const names = [];
    getBuildingsForFilter().forEach(function (building) {
      if (getContactIdsRelatedToBuilding(building).has(String(contactId || ""))) {
        names.push(String(building.buildingName || "Not set"));
      }
    });
    return names;
  }

  function openContactDetailsDialog(contact, options) {
    if (!contact) {
      return;
    }

    const existingBackdrop = window.document.querySelector(".contact-details-backdrop");
    if (existingBackdrop) {
      existingBackdrop.remove();
    }

    const relationship = getRelationshipForContactInFilter(contact);
    const companyName = String(contact.companyName || "").trim() || String(contact.companyName || "").trim() || getCompanyNameById(contact.companyId, "Not set");
    const linkedItems = getScheduleItemsLinkedToContactForFilter(contact.id);
    const linkedItemsMarkup = linkedItems.length === 0
      ? '<p class="module-placeholder">No linked calendar items.</p>'
      : `
        <section class="building-list" aria-live="polite">
          ${linkedItems.map(function (item) {
            return `
              <article class="building-card">
                <h3>${escapeHtml(item.taskName)}</h3>
                <p><strong>Due Date:</strong> ${formatDate(item.dueDate)}</p>
                <p><strong>Status:</strong> ${escapeHtml(getScheduleStatusText(item))}</p>
              </article>
            `;
          }).join("")}
        </section>
      `;

    const tenancyLinks = getTenancyLinksForContact(contact.id);
    const relationshipGroups = groupRelationshipsByType(getRelationshipsForContact(contact.id));
    const relationshipsMarkup = relationshipGroups.length === 0
      ? '<p class="module-placeholder">Not linked to anything yet.</p>'
      : relationshipGroups.map(function (group) {
        const items = group.items.map(function (relationship) {
          return `<li>${escapeHtml(relationship.targetName)} \u00b7 ${escapeHtml(relationship.role)}</li>`;
        }).join("");
        return `
          <div class="contact-relationship-group">
            <p class="contact-relationship-type">${escapeHtml(group.type)}</p>
            <ul class="contact-relationship-list">${items}</ul>
          </div>
        `;
      }).join("");

    const linkedTenanciesMarkup = tenancyLinks.length === 0
      ? '<p class="module-placeholder">No linked tenancies.</p>'
      : `
        <section class="building-list" aria-live="polite">
          ${tenancyLinks.map(function (link) {
            return `
              <article class="building-card">
                <h3>${escapeHtml(getTenancyDisplayName(link.tenancy))}</h3>
                <p><strong>Property:</strong> ${escapeHtml(getBuildingDisplayLabel(link.building))}</p>
                <p><strong>Company:</strong> ${escapeHtml(link.tenancy.companyName || "Not provided")}</p>
              </article>
            `;
          }).join("")}
        </section>
      `;

    const backdrop = window.document.createElement("div");
    backdrop.className = "schedule-details-backdrop contact-details-backdrop";
    backdrop.innerHTML = `
      <div class="schedule-details-modal" role="dialog" aria-modal="true" aria-labelledby="contact-details-title">
        <header class="schedule-details-header">
          <h3 id="contact-details-title">${escapeHtml(contact.name || "Contact")}</h3>
          <button class="btn btn-secondary btn-small" type="button" data-contact-details-action="close">Contacts</button>
        </header>

        <section class="schedule-details-section">
          <h4>Contact Details</h4>
          <dl class="schedule-details-grid">
            <div><dt>Company</dt><dd>${escapeHtml(companyName)}</dd></div>
            <div><dt>Role</dt><dd>${escapeHtml(relationship)}</dd></div>
            <div><dt>Mobile</dt><dd>${escapeHtml(contact.mobile || "Not provided")}</dd></div>
            <div><dt>Office Phone</dt><dd>${escapeHtml(contact.officePhone || "Not provided")}</dd></div>
            <div><dt>Email</dt><dd>${escapeHtml(contact.email || "Not provided")}</dd></div>
            <div><dt>Notes</dt><dd>${escapeHtml(contact.notes || "Not provided")}</dd></div>
            <div><dt>Linked Calendar Items</dt><dd>${linkedItems.length}</dd></div>
            <div><dt>Linked Tenancies</dt><dd>${tenancyLinks.length}</dd></div>
          </dl>
        </section>

        <section class="schedule-details-section contact-details-relationships">
          <h4>Relationships</h4>
          ${relationshipsMarkup}
        </section>

        <section class="schedule-details-section">
          <h4>Linked Calendar Items</h4>
          ${linkedItemsMarkup}
        </section>

        <section class="schedule-details-section">
          <h4>Linked Tenancies</h4>
          ${linkedTenanciesMarkup}
        </section>

        <section class="schedule-details-bottom-actions" aria-label="Contact actions">
          <button class="btn btn-secondary" type="button" data-contact-details-action="edit">Edit Contact</button>
          <button class="btn btn-primary" type="button" data-contact-details-action="close">Contacts</button>
        </section>
      </div>
    `;

    window.document.body.appendChild(backdrop);

    function closeDialog() {
      backdrop.remove();
    }

    backdrop.addEventListener("click", function (event) {
      if (event.target === backdrop) {
        closeDialog();
        return;
      }

      const target = event.target;
      if (!(target instanceof HTMLElement)) {
        return;
      }

      const action = target.getAttribute("data-contact-details-action");
      if (action === "close") {
        closeDialog();
        return;
      }

      if (action === "edit") {
        closeDialog();
        openContactForm("edit", contact, options);
      }
    });
  }

  function getCompanyIdsForBuilding(building) {
    if (!building) {
      return [];
    }

    const contactRefs = getContactIdsForBuilding(building);
    const ids = building.tenancy && building.tenancy.companyId ? [building.tenancy.companyId] : [];
    contactRefs.forEach(function (contactId) {
      const contact = findContactById(contactId);
      if (contact && contact.companyId && !ids.includes(contact.companyId)) {
        ids.push(contact.companyId);
      }
    });

    return ids;
  }

  function getCompaniesForActiveBuilding() {
    const building = findBuildingById(activeBuildingId);
    if (!building) {
      return [];
    }

    const companyIds = getCompanyIdsForBuilding(building);
    const allCompanies = getCompanies();

    if (companyIds.length === 0) {
      return allCompanies;
    }

    return allCompanies.filter(function (company) {
      return companyIds.includes(company.id);
    });
  }

  function renderCompanyList(companies) {
    companiesList.innerHTML = companies
      .map(function (company) {
        return `
          <article class="building-card clickable-card" data-company-id="${company.id}" role="button" tabindex="0" aria-label="Open company ${company.name}">
            <h3>${company.name}</h3>
            <p><strong>Type:</strong> ${company.type || "Not set"}</p>
            <p><strong>Phone:</strong> ${company.phone || "Not provided"}</p>
            <p><strong>Email:</strong> ${company.email || "Not provided"}</p>
            <div class="card-meta">
              <button class="btn btn-secondary company-edit-btn" type="button">✏ Edit</button>
            </div>
            <span class="card-chevron">&gt;</span>
          </article>
        `;
      })
      .join("");
  }

  function renderCompanySectionState(mode) {
    if (mode === "form") {
      companiesEmptyState.style.display = "none";
      companiesListCard.style.display = "none";
      companyFormCard.style.display = "block";
      return;
    }

    const companies = getCompaniesForActiveBuilding();
    companyFormCard.style.display = "none";
    if (companies.length === 0) {
      companiesEmptyState.style.display = "block";
      companiesListCard.style.display = "none";
      return;
    }

    companiesEmptyState.style.display = "none";
    companiesListCard.style.display = "block";
    renderCompanyList(companies);
  }

  function openCompaniesView() {
    const building = findBuildingById(activeBuildingId);
    if (!building) {
      showDashboard();
      return;
    }

    companiesBuildingName.textContent = building.buildingName;
    activeCompanyId = "";
    renderCompanySectionState("list");
    showCompaniesView();
  }

  function resetCompanyForm() {
    companyForm.reset();
    companyForm.elements.companyId.value = "";
  }

  function openCompanyForm(mode, company) {
    companyFormMode = mode;
    activeCompanyId = company && company.id ? company.id : "";
    resetCompanyForm();

    companyFormTitle.textContent = mode === "edit" ? "Edit Company" : "Add Company";
    if (mode === "edit" && company) {
      companyForm.elements.companyId.value = company.id;
      companyForm.elements.name.value = company.name || "";
      companyForm.elements.type.value = company.type || "";
      companyForm.elements.address.value = company.address || "";
      companyForm.elements.phone.value = company.phone || "";
      companyForm.elements.email.value = company.email || "";
      companyForm.elements.website.value = company.website || "";
      companyForm.elements.notes.value = company.notes || "";
    }

    renderCompanySectionState("form");
    showCompaniesView();
  }

  function buildCompanyPayload(existingCompany) {
    const formData = new FormData(companyForm);
    const now = new Date().toISOString();
    return {
      id: existingCompany && existingCompany.id ? existingCompany.id : window.BuildingStorage.createId(),
      name: String(formData.get("name") || "").trim(),
      type: String(formData.get("type") || "").trim(),
      address: String(formData.get("address") || "").trim(),
      phone: String(formData.get("phone") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      website: String(formData.get("website") || "").trim(),
      notes: String(formData.get("notes") || "").trim(),
      createdDate: existingCompany && existingCompany.createdDate ? existingCompany.createdDate : now,
      lastUpdated: now,
    };
  }

  function getSuggestedDocumentsText(documents) {
    if (!Array.isArray(documents) || documents.length === 0) {
      return "Not set";
    }
    return documents.join(", ");
  }

  function populateTemplateFormOptions(categoryValue, frequencyValue) {
    templateForm.elements.category.innerHTML = TEMPLATE_CATEGORY_OPTIONS
      .map(function (option) {
        const selected = option === categoryValue ? " selected" : "";
        return `<option value="${option}"${selected}>${option}</option>`;
      })
      .join("");

    templateForm.elements.defaultFrequency.innerHTML = TEMPLATE_FREQUENCY_OPTIONS
      .map(function (option) {
        const selected = option === frequencyValue ? " selected" : "";
        return `<option value="${option}"${selected}>${option}</option>`;
      })
      .join("");
  }

  function resetTemplateForm() {
    templateForm.reset();
    templateForm.elements.templateId.value = "";
    templateForm.elements.description.value = "";
    populateTemplateFormOptions("General", "Annual");
    templateForm.elements.nextDueDate.value = "";
    templateForm.elements.defaultReminderPeriod.value = "30 days before";
    templateForm.elements.active.value = "Yes";
  }

  function sortTemplatesByName(templates) {
    return templates.slice().sort(function (left, right) {
      return String(left.name || "").localeCompare(String(right.name || ""), undefined, {
        sensitivity: "base",
      });
    });
  }

  function renderTemplateLibraryCard(template) {
    const isActive = template.active === "Yes";
    const statusToggleLabel = isActive ? "Deactivate" : "Activate";
    const statusToggleClass = isActive ? "btn-danger template-deactivate-btn" : "btn-secondary template-activate-btn";
    const statusToggleAction = isActive ? "deactivate" : "activate";
    const inactiveClass = isActive ? "" : " template-card-inactive";

    return `
      <article class="building-card template-card${inactiveClass}" data-template-id="${template.id}">
        <div class="template-card-layout">
          <section class="template-card-column template-card-column-left">
            <h3 class="template-card-title">${template.name}</h3>
            <p class="template-card-field"><span class="template-card-label">Frequency</span><span class="template-card-value">${template.defaultFrequency}</span></p>
            <p class="template-card-field"><span class="template-card-label">Status</span><span class="template-card-value">${template.active === "Yes" ? "Active" : "Inactive"}</span></p>
            <p class="template-card-field"><span class="template-card-label">Category</span><span class="template-card-value">${template.category}</span></p>
            <p class="template-card-field"><span class="template-card-label">Due Date</span><span class="template-card-value">${formatDate(template.nextDueDate)}</span></p>
          </section>
          <section class="template-card-column template-card-column-right">
            <p class="template-card-field"><span class="template-card-label">Reminder</span><span class="template-card-value">${template.defaultReminderPeriod}</span></p>
            <p class="template-card-field template-card-notes"><span class="template-card-label">Default Notes</span><span class="template-card-value">${template.defaultNotes || "Not set"}</span></p>
            <div class="template-card-actions">
              <button class="btn btn-secondary template-edit-btn" type="button">Edit</button>
              <button class="btn ${statusToggleClass}" type="button" data-template-toggle-action="${statusToggleAction}">${statusToggleLabel}</button>
            </div>
          </section>
        </div>
      </article>
    `;
  }

  function renderTemplateStatusGroup(title, templates, sectionClassName) {
    const cards = templates.length > 0
      ? templates.map(renderTemplateLibraryCard).join("")
      : '<p class="module-placeholder template-status-empty">No templates in this section.</p>';

    return `
      <section class="template-status-group ${sectionClassName}">
        <h4 class="template-status-heading">${title}</h4>
        <div class="template-status-list">
          ${cards}
        </div>
      </section>
    `;
  }

  function summarizeMasterTemplateUsage(templateId) {
    const targetId = String(templateId || "").trim();
    if (!targetId) {
      return {
        assignedProperties: 0,
        scheduleItems: 0,
        historyRecords: 0,
        attachments: 0,
      };
    }

    const buildings = window.BuildingStorage.getBuildings();
    return buildings.reduce(function (summary, building) {
      const normalized = ensureWorkflowCollections(building);
      const linkedTemplates = getPropertyTemplates(normalized).filter(function (template) {
        return String(template.masterTemplateId || "").trim() === targetId;
      });

      if (linkedTemplates.length === 0) {
        return summary;
      }

      const templateIds = new Set(linkedTemplates.map(function (template) {
        return String(template.id || "").trim();
      }).filter(function (id) {
        return Boolean(id);
      }));

      const linkedScheduleItems = (normalized.scheduleItems || []).filter(function (item) {
        const propertyTemplateId = String(item.propertyTemplateId || item.templateId || "").trim();
        return templateIds.has(propertyTemplateId);
      });

      const scheduleItemIds = new Set(linkedScheduleItems.map(function (item) {
        return String(item.id || "").trim();
      }).filter(function (id) {
        return Boolean(id);
      }));

      const linkedHistoryRecords = (normalized.historyRecords || []).filter(function (record) {
        return scheduleItemIds.has(String(record.scheduleItemId || "").trim());
      });

      const attachmentCount = linkedTemplates.reduce(function (count, template) {
        return count + (Array.isArray(template.attachments) ? template.attachments.length : 0);
      }, 0);

      return {
        assignedProperties: summary.assignedProperties + linkedTemplates.length,
        scheduleItems: summary.scheduleItems + linkedScheduleItems.length,
        historyRecords: summary.historyRecords + linkedHistoryRecords.length,
        attachments: summary.attachments + attachmentCount,
      };
    }, {
      assignedProperties: 0,
      scheduleItems: 0,
      historyRecords: 0,
      attachments: 0,
    });
  }

  function confirmTemplateDeleteDialog(options) {
    const usage = options && options.usage ? options.usage : null;
    const isInUse = usage && (usage.assignedProperties > 0 || usage.scheduleItems > 0 || usage.historyRecords > 0 || usage.attachments > 0);
    const warningMessage = isInUse
      ? `This Master Template is in use: ${usage.assignedProperties} assigned Property Templates, ${usage.scheduleItems} schedule items, ${usage.historyRecords} completion records, ${usage.attachments} template documents.`
      : "";
    return new Promise(function (resolve) {
      const backdrop = window.document.createElement("div");
      backdrop.className = "template-delete-modal-backdrop app-modal-backdrop-confirm";

      const dialog = window.document.createElement("div");
      dialog.className = "template-delete-modal";
      dialog.setAttribute("role", "dialog");
      dialog.setAttribute("aria-modal", "true");
      dialog.setAttribute("aria-labelledby", "template-delete-modal-title");

      dialog.innerHTML = `
        <h3 id="template-delete-modal-title">Delete Master Template</h3>
        <p>Are you sure you want to permanently delete this Master Template?</p>
        ${warningMessage ? `<p>${warningMessage}</p>` : ""}
        <p>Historical Property calendar and completion records are retained.</p>
        <div class="template-delete-modal-actions">
          <button class="btn btn-secondary" type="button" data-template-delete-confirm="cancel">Cancel</button>
          <button class="btn template-delete-btn" type="button" data-template-delete-confirm="delete">Delete</button>
        </div>
      `;

      backdrop.appendChild(dialog);
      window.document.body.appendChild(backdrop);

      let isClosed = false;

      function handleEscape(event) {
        if (event.key !== "Escape") {
          return;
        }
        closeWith(false);
      }

      function closeWith(result) {
        if (isClosed) {
          return;
        }
        isClosed = true;
        window.document.removeEventListener("keydown", handleEscape);
        backdrop.remove();
        resolve(result);
      }

      backdrop.addEventListener("click", function (event) {
        if (event.target === backdrop) {
          closeWith(false);
        }
      });

      dialog.addEventListener("click", function (event) {
        const target = event.target;
        if (!(target instanceof HTMLElement)) {
          return;
        }

        const action = target.getAttribute("data-template-delete-confirm");
        if (action === "cancel") {
          closeWith(false);
          return;
        }

        if (action === "delete") {
          closeWith(true);
        }
      });

      window.document.addEventListener("keydown", handleEscape);

      const cancelButton = dialog.querySelector('[data-template-delete-confirm="cancel"]');
      if (cancelButton instanceof HTMLButtonElement) {
        cancelButton.focus();
      }
    });
  }

  function renderTemplateLibraryDirectory(templates) {
    const activeTemplates = sortTemplatesByName(templates.filter(function (template) {
      return template.active === "Yes";
    }));
    const inactiveTemplates = sortTemplatesByName(templates.filter(function (template) {
      return template.active === "No";
    }));

    templateLibraryList.innerHTML = [
      renderTemplateStatusGroup("Active Templates", activeTemplates, "template-status-group-active"),
      renderTemplateStatusGroup("Inactive Templates", inactiveTemplates, "template-status-group-inactive"),
    ].join("");
  }

  function renderTemplateLibrarySectionState(mode) {
    if (mode === "form") {
      templateLibraryEmptyState.style.display = "none";
      templateLibraryListCard.style.display = "none";
      templateLibraryFormCard.style.display = "block";
      return;
    }

    const templates = getScheduledItemTemplates();
    templateLibraryFormCard.style.display = "none";

    if (templates.length === 0) {
      templateLibraryEmptyState.style.display = "block";
      templateLibraryListCard.style.display = "none";
      return;
    }

    templateLibraryEmptyState.style.display = "none";
    templateLibraryListCard.style.display = "block";
    renderTemplateLibraryDirectory(templates);
  }

  function openTemplateLibrary() {
    activeTemplateId = "";
    renderTemplateLibrarySectionState("list");
    showTemplateLibraryView();
  }

  function openTemplateForm(mode, template) {
    templateFormMode = mode;
    activeTemplateId = template && template.id ? template.id : "";
    resetTemplateForm();

    templateFormTitle.textContent = mode === "edit" ? "Edit Master Template" : "Add Master Template";
    if (templateFormDeleteBtn instanceof HTMLButtonElement) {
      templateFormDeleteBtn.style.display = mode === "edit" ? "inline-flex" : "none";
      templateFormDeleteBtn.disabled = mode !== "edit";
    }
    if (mode === "edit" && template) {
      templateForm.elements.templateId.value = template.id;
      templateForm.elements.name.value = template.name || "";
      templateForm.elements.description.value = template.description || "";
      templateForm.elements.nextDueDate.value = template.nextDueDate || "";
      templateForm.elements.defaultReminderPeriod.value = template.defaultReminderPeriod || "30 days before";
      templateForm.elements.suggestedDocuments.value = getSuggestedDocumentsText(template.suggestedDocuments);
      templateForm.elements.defaultNotes.value = template.defaultNotes || "";
      templateForm.elements.active.value = template.active === "No" ? "No" : "Yes";
      populateTemplateFormOptions(template.category, template.defaultFrequency);
    }

    renderTemplateLibrarySectionState("form");
    showTemplateLibraryView();
    setBreadcrumbs([
      { label: "Properties", onClick: goToDashboard },
      { label: "Template Library", onClick: openTemplateLibrary },
      { label: mode === "edit" ? "Edit Master Template" : "Add Master Template", onClick: function () { openTemplateForm(mode, template); } },
    ]);
  }

  function buildTemplatePayload(existingTemplate) {
    const formData = new FormData(templateForm);
    const now = new Date().toISOString();
    return normalizeTemplateRecord({
      id: existingTemplate && existingTemplate.id ? existingTemplate.id : window.BuildingStorage.createId(),
      name: String(formData.get("name") || "").trim(),
      description: String(formData.get("description") || "").trim(),
      category: String(formData.get("category") || "General").trim(),
      defaultFrequency: String(formData.get("defaultFrequency") || "Annual").trim(),
      nextDueDate: String(formData.get("nextDueDate") || "").trim(),
      defaultReminderPeriod: String(formData.get("defaultReminderPeriod") || "30 days before").trim(),
      suggestedDocuments: String(formData.get("suggestedDocuments") || "").trim(),
      defaultNotes: String(formData.get("defaultNotes") || "").trim(),
      active: String(formData.get("active") || "Yes"),
      defaultChecked: existingTemplate ? Boolean(existingTemplate.defaultChecked) : false,
      createdDate: existingTemplate && existingTemplate.createdDate ? existingTemplate.createdDate : now,
      lastUpdated: now,
    });
  }

  function handleAddTemplate() {
    openTemplateForm("add");
  }

  function handleTemplateLibraryBack() {
    openSettingsView();
  }

  function handleCancelTemplate() {
    openTemplateLibrary();
  }

  async function handleTemplateFormDelete() {
    if (templateFormMode !== "edit" || !activeTemplateId) {
      return;
    }

    const usage = summarizeMasterTemplateUsage(activeTemplateId);
    const shouldDelete = await confirmTemplateDeleteDialog({ usage: usage });
    if (!shouldDelete) {
      return;
    }

    deleteTemplate(activeTemplateId);
    openTemplateLibrary();
  }

  function syncActiveBuildingScheduleFromTemplates() {
    if (!activeBuildingId) {
      return null;
    }

    const building = findBuildingById(activeBuildingId);
    if (!building) {
      return null;
    }

    const normalized = ensureWorkflowCollections(building);
    window.BuildingStorage.updateBuilding({
      ...building,
      propertyTemplates: normalized.propertyTemplates,
      scheduleItems: normalized.scheduleItems,
      historyRecords: normalized.historyRecords,
      lastUpdated: new Date().toISOString(),
    });
    return normalized;
  }

  function handleSaveTemplate(event) {
    event.preventDefault();

    const templates = getScheduledItemTemplates();
    const existing = templateFormMode === "edit"
      ? templates.find(function (template) {
        return template.id === activeTemplateId;
      }) || null
      : null;

    const payload = buildTemplatePayload(existing);
    upsertTemplate(payload);
    syncActiveBuildingScheduleFromTemplates();
    openTemplateLibrary();
  }

  function deactivateTemplate(templateId) {
    const template = findTemplateById(templateId);
    if (!template) {
      return;
    }

    upsertTemplate({
      ...template,
      active: "No",
      lastUpdated: new Date().toISOString(),
    });
    syncActiveBuildingScheduleFromTemplates();
  }

  function activateTemplate(templateId) {
    const template = findTemplateById(templateId);
    if (!template) {
      return;
    }

    upsertTemplate({
      ...template,
      active: "Yes",
      lastUpdated: new Date().toISOString(),
    });
    syncActiveBuildingScheduleFromTemplates();
  }

  // Deleting a master template severs the link only. The property template, its calendar
  // item and its history survive as an independent property record.
  function detachMasterTemplatesFromBuilding(building, masterTemplateIds) {
    if (!building) {
      return null;
    }

    const targets = new Set((masterTemplateIds || []).map(function (id) {
      return String(id || "").trim();
    }).filter(function (id) {
      return Boolean(id);
    }));

    if (targets.size === 0) {
      return null;
    }

    const now = new Date().toISOString();
    let changed = false;
    const nextTemplates = getPropertyTemplates(building).map(function (template) {
      if (!targets.has(String(template.masterTemplateId || "").trim())) {
        return template;
      }

      changed = true;
      return {
        ...template,
        masterTemplateId: "",
        lastUpdated: now,
      };
    });

    if (!changed) {
      return null;
    }

    return {
      ...building,
      propertyTemplates: nextTemplates,
      lastUpdated: now,
    };
  }

  function detachMasterTemplateFromAllBuildings(masterTemplateId) {
    const targetId = String(masterTemplateId || "").trim();
    if (!targetId) {
      return;
    }

    window.BuildingStorage.getBuildings().forEach(function (building) {
      const updated = detachMasterTemplatesFromBuilding(building, [targetId]);
      if (updated) {
        window.BuildingStorage.updateBuilding(updated);
      }
    });
  }

  // Startup reconciliation for data saved before deletes severed their links.
  function detachDeletedMasterTemplateReferences() {
    const knownMasterIds = new Set(getScheduledItemTemplates().map(function (template) {
      return String(template.id || "").trim();
    }));

    window.BuildingStorage.getBuildings().forEach(function (building) {
      const staleIds = getPropertyTemplates(building)
        .map(function (template) {
          return String(template.masterTemplateId || "").trim();
        })
        .filter(function (masterTemplateId) {
          return Boolean(masterTemplateId) && !knownMasterIds.has(masterTemplateId);
        });

      if (staleIds.length === 0) {
        return;
      }

      const updated = detachMasterTemplatesFromBuilding(building, staleIds);
      if (updated) {
        window.BuildingStorage.updateBuilding(updated);
      }
    });
  }

  function deleteTemplate(templateId) {
    const templates = getScheduledItemTemplates();
    const next = templates.filter(function (template) {
      return template.id !== templateId;
    });

    if (next.length === templates.length) {
      return;
    }

    saveScheduledItemTemplates(next);
    detachMasterTemplateFromAllBuildings(templateId);
    syncActiveBuildingScheduleFromTemplates();
  }

  async function handleTemplateLibraryListClick(event) {
    const target = event.target;
    if (!(target instanceof HTMLElement)) {
      return;
    }

    const card = target.closest(".template-card");
    if (!card) {
      return;
    }

    const templateId = card.getAttribute("data-template-id") || "";
    if (!templateId) {
      return;
    }

    const selected = findTemplateById(templateId);
    if (!selected) {
      return;
    }

    if (target.closest(".template-edit-btn")) {
      openTemplateForm("edit", selected);
      return;
    }

    const toggleActionButton = target.closest("[data-template-toggle-action]");
    if (toggleActionButton) {
      const action = toggleActionButton.getAttribute("data-template-toggle-action") || "";
      if (action === "deactivate" && selected.active === "Yes") {
        deactivateTemplate(templateId);
        openTemplateLibrary();
        return;
      }

      if (action === "activate" && selected.active === "No") {
        activateTemplate(templateId);
        openTemplateLibrary();
      }
    }
  }

  function openContactsView() {
    const building = findBuildingById(getBuildingFilterId());
    renderAllBuildingFilterSelects();

    contactsBuildingName.textContent = building ? building.buildingName : "All Properties";
    activeContactId = "";
    contactsSearchQuery = "";
    populateContactCompanySelect("", null);
    contactForm.elements.responsibility.value = "";
    if (contactsSearch) {
      contactsSearch.value = "";
    }
    renderContactSectionState("list");
    showContactsView();
  }

  function resetContactForm() {
    contactForm.reset();
    contactForm.elements.contactId.value = "";
    contactForm.elements.companyId.value = "";
    contactForm.elements.companyName.value = "";
    contactForm.elements.responsibility.value = "";
  }

  function getUniqueCompaniesByName() {
    const seen = new Set();
    return getCompanies().filter(function (company) {
      const key = normalizeText(company.name);
      if (!key || seen.has(key)) {
        return false;
      }
      seen.add(key);
      return true;
    });
  }

  function populateContactCompanySelect(selectedId, contact) {
    const companyName = contact && String(contact.companyName || "").trim()
      ? String(contact.companyName || "").trim()
      : getCompanyNameById(selectedId, "");
    contactForm.elements.companyId.value = String(selectedId || "").trim();
    contactForm.elements.companyName.value = companyName;
  }

  function handleContactCompanyChange() {
    // Company is free text on the contact. Legacy companyId is retained only for compatibility.
  }

  function setContactFormAssignmentContext(context) {
    contactAssignmentContext = context || null;
    if (contactSaveBtn instanceof HTMLButtonElement) {
      contactSaveBtn.textContent = contactAssignmentContext ? "Save & Assign" : "Save";
    }
  }

  function openContactForm(mode, contact, options) {
    contactFormMode = mode;
    const assignmentContext = options && options.assignmentContext ? options.assignmentContext : null;
    setContactFormAssignmentContext(assignmentContext
      ? Object.assign({}, assignmentContext, {
        filterBuildingId: Object.prototype.hasOwnProperty.call(assignmentContext, "filterBuildingId")
          ? assignmentContext.filterBuildingId
          : getBuildingFilterId(),
      })
      : null);
    contactReturnContext = options && options.returnContext ? options.returnContext : null;
    contactFormFilterBuildingId = getBuildingFilterId();
    activeContactId = contact && contact.id ? contact.id : "";
    resetContactForm();
    populateContactCompanySelect(contact && contact.companyId ? contact.companyId : "", contact || null);

    contactFormTitle.textContent = mode === "edit" ? "Edit Contact" : "New Contact";
    contactForm.style.display = "grid";
    deleteContactBtn.style.display = mode === "edit" ? "inline-flex" : "none";
    if (mode === "edit" && contact) {
      const building = findBuildingById(activeBuildingId);
      const relationship = getBuildingRelationshipForContact(building, contact);
      contactForm.elements.contactId.value = contact.id;
      contactForm.elements.name.value = contact.name || "";
      contactForm.elements.responsibility.value = String(relationship || "").trim();
      contactForm.elements.mobile.value = contact.mobile || "";
      contactForm.elements.officePhone.value = contact.officePhone || "";
      contactForm.elements.email.value = contact.email || "";
      contactForm.elements.notes.value = contact.notes || "";
    } else {
      contactForm.elements.responsibility.value = "";
    }

    if (mode === "edit" && contact && contact.id) {
      renderContactLinkedProperties(contact);
      renderContactLinkedTenancies(contact);
      renderContactLinkedScheduleItems(contact);
    } else {
      renderContactLinkedProperties(null);
      renderContactLinkedTenancies(null);
      renderContactLinkedScheduleItems(null);
    }

    renderContactSectionState("form");
    showContactsView();
    setBreadcrumbs([
      { label: "Properties", onClick: goToDashboard },
      { label: getActiveBuildingName(), onClick: function () { openOverviewById(activeBuildingId); } },
      { label: "Contacts", onClick: openContactsView },
      { label: mode === "edit" ? "Edit Contact" : "New Contact", onClick: function () { openContactForm(mode, contact); } },
    ]);
  }

  function buildContactPayloadFromFormData(formData, existingContact) {
    const now = new Date().toISOString();
    const relationship = normalizeRelationshipLabel(formData.get("responsibility")) || "Other";
    const classification = String(getContactClassification(existingContact)).trim() || "Other";
    return {
      id: existingContact && existingContact.id ? existingContact.id : window.BuildingStorage.createId(),
      companyId: existingContact && existingContact.companyId ? String(existingContact.companyId).trim() : "",
      companyName: String(formData.get("companyName") || "").trim(),
      name: String(formData.get("name") || "").trim(),
      contactType: classification,
      responsibility: relationship,
      mobile: String(formData.get("mobile") || "").trim(),
      officePhone: String(formData.get("officePhone") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      notes: String(formData.get("notes") || "").trim(),
      createdDate: existingContact && existingContact.createdDate ? existingContact.createdDate : now,
      lastUpdated: now,
    };
  }

  function buildContactPayload(existingContact) {
    return buildContactPayloadFromFormData(new FormData(contactForm), existingContact);
  }

  function upsertContactForActiveTenancy(payload) {
    // The master contact is always saved; the building relationship only applies when one is selected.
    window.BuildingStorage.upsertContact(payload);

    const building = findBuildingById(activeBuildingId);
    if (!building) {
      return;
    }

    const updated = applyContactRelationshipToBuilding(building, payload.id, payload.responsibility || "Other");
    window.BuildingStorage.updateBuilding(updated);
  }

  function removeContactIdFromRefs(refs, contactId) {
    const targetId = String(contactId || "").trim();
    return (Array.isArray(refs) ? refs : []).filter(function (ref) {
      if (ref && typeof ref === "object") {
        return String(ref.contactId || ref.id || "").trim() !== targetId;
      }
      return String(ref || "").trim() !== targetId;
    });
  }

  function removeContactFromRelationshipMap(map, contactId) {
    const nextMap = map && typeof map === "object" ? { ...map } : {};
    delete nextMap[String(contactId || "").trim()];
    return nextMap;
  }

  // Permanently delete one canonical contact and remove every live ID reference to it.
  // Historical display text (for example historyRecord.contactUsed) is preserved, while
  // the historical contactUsedId is cleared so deleted master IDs never dangle.
  function deleteContactPermanently(contactId) {
    const targetId = String(contactId || "").trim();
    if (!targetId) {
      return false;
    }

    const masterData = getMasterData();
    const contactExists = (masterData.contacts || []).some(function (contact) {
      return String(contact.id || "").trim() === targetId;
    });
    if (!contactExists) {
      return false;
    }

    const now = new Date().toISOString();
    window.BuildingStorage.getBuildings().forEach(function (building) {
      const normalized = ensureWorkflowCollections(building);
      const nextTenancies = (normalized.tenancies || []).map(function (tenancy) {
        return {
          ...tenancy,
          contactRefs: removeContactIdFromRefs(tenancy.contactRefs, targetId),
          contactRelationshipById: removeContactFromRelationshipMap(tenancy.contactRelationshipById, targetId),
        };
      });

      const nextPropertyTemplates = (normalized.propertyTemplates || []).map(function (template) {
        if (String(template.preferredContactId || "").trim() !== targetId) {
          return template;
        }
        return { ...template, preferredContactId: "", lastUpdated: now };
      });

      const nextScheduleItems = (normalized.scheduleItems || []).map(function (item) {
        if (String(item.preferredContactId || "").trim() !== targetId) {
          return item;
        }
        return { ...item, preferredContactId: "" };
      });

      const nextHistoryRecords = (normalized.historyRecords || []).map(function (record) {
        if (String(record.contactUsedId || "").trim() !== targetId) {
          return record;
        }
        return { ...record, contactUsedId: "" };
      });

      const updated = {
        ...normalized,
        buildingContactAssignments: removeContactIdFromRefs(normalized.buildingContactAssignments, targetId),
        contactRelationshipById: removeContactFromRelationshipMap(normalized.contactRelationshipById, targetId),
        tenancies: nextTenancies,
        tenancy: nextTenancies[0] || null,
        propertyTemplates: nextPropertyTemplates,
        scheduleItems: nextScheduleItems,
        historyRecords: nextHistoryRecords,
        lastUpdated: now,
      };

      window.BuildingStorage.updateBuilding(updated);
    });

    window.BuildingStorage.saveMasterData({
      ...masterData,
      contacts: (masterData.contacts || []).filter(function (contact) {
        return String(contact.id || "").trim() !== targetId;
      }),
      scheduledItemTemplates: (masterData.scheduledItemTemplates || []).map(function (template) {
        if (String(template.preferredContactId || "").trim() !== targetId) {
          return template;
        }
        return { ...template, preferredContactId: "", lastUpdated: now };
      }),
    });

    return true;
  }

  function getTelHref(phone) {
    return String(phone || "").replace(/[^\d+]/g, "");
  }

  // Read-only rendering of the tenancy's linked master contacts. Never mutates masterData.contacts.
  function renderTenancyTileContacts(tenancy) {
    const linkedContacts = getContactsForTenancy(tenancy);
    if (linkedContacts.length === 0) {
      return `
        <div class="tenancy-card-contacts">
          <p class="tenancy-card-contacts-heading">Contact</p>
          <p>Not set</p>
        </div>
      `;
    }

    const heading = linkedContacts.length === 1 ? "Contact" : "Contacts";
    const entries = linkedContacts.map(function (contact) {
      const phone = String(contact.mobile || contact.officePhone || "").trim();
      const email = String(contact.email || "").trim();
      const telHref = getTelHref(phone);

      return `
        <div class="tenancy-card-contact">
          <p class="tenancy-card-contact-name">${escapeHtml(contact.name || "Contact")}</p>
          ${telHref ? `<p><a class="contact-link contact-phone-link" href="tel:${escapeHtml(telHref)}">${escapeHtml(phone)}</a></p>` : ""}
          ${email ? `<p><a class="contact-link contact-email-link" href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>` : ""}
        </div>
      `;
    }).join("");

    return `
      <div class="tenancy-card-contacts">
        <p class="tenancy-card-contacts-heading">${heading}</p>
        ${entries}
      </div>
    `;
  }

  // Maps each tenancy id to the building that owns it, so a tile never shows the wrong property.
  function buildTenancyOwnerBuildingMap() {
    const owners = new Map();
    window.BuildingStorage.getBuildings().forEach(function (building) {
      getAllTenanciesForBuilding(building).forEach(function (tenancy) {
        owners.set(String(tenancy.id || ""), building);
      });
    });
    return owners;
  }

  // Tenancy rows for the current Building filter, each paired with its owning building.
  function getTenancyRowsForFilter() {
    const rows = [];
    getBuildingsForFilter().forEach(function (building) {
      getAllTenanciesForBuilding(building).forEach(function (tenancy) {
        rows.push({ building: building, tenancy: tenancy });
      });
    });
    return rows;
  }

  function findBuildingByTenancyId(tenancyId) {
    return buildTenancyOwnerBuildingMap().get(String(tenancyId || "")) || null;
  }

  // The tenancy form always acts on the building that owns the tenancy being edited.
  function getTenancyEditBuilding() {
    return findBuildingById(tenancyEditBuildingId) || findBuildingById(activeBuildingId);
  }

  function renderCurrentTenancyPage() {
    renderAllBuildingFilterSelects();

    const filterBuilding = findBuildingById(getBuildingFilterId());
    tenancyBuildingName.textContent = filterBuilding ? filterBuilding.buildingName : "All Properties";
    renderTenancyHistory();

    // Canonical tenancy list renderer: always driven by building.tenancies[].
    activeTenancyDetailsId = "";
    const tenancyRows = getTenancyRowsForFilter();
    const tenancyDetailsHeading = tenancyDetailsCard.querySelector("h3");
    if (tenancyDetailsHeading) {
      tenancyDetailsHeading.textContent = "Current Tenancies";
    }

    if (tenancyRows.length === 0) {
      if (tenancyEmptyMessage) {
        tenancyEmptyMessage.textContent = `No tenancies for ${getBuildingFilterEmptySuffix()}.`;
      }
      renderTenancySectionState(false, "list");
      setTenancyTab(activeTenancyTab);
      return;
    }

    renderTenancySectionState(true, "list");

    tenancyDetailsList.innerHTML = tenancyRows.map(function (row) {
      const tenancy = row.tenancy;
      const companyName = String(tenancy.companyName || tenancy.tradingName || "Tenancy").trim();
      const tradingName = String(tenancy.tradingName || "").trim();
      const tenancyStatus = String(tenancy.status || "Occupied").trim() || "Occupied";
      const tenancyId = escapeHtml(tenancy.id);
      const ownerBuildingName = String(row.building.buildingName || "Not set").trim() || "Not set";

      return `
        <article class="tenancy-list-card clickable-card" role="button" tabindex="0" data-tenancy-list-action="edit" data-tenancy-id="${tenancyId}" aria-label="Edit tenancy ${escapeHtml(companyName)}">
          <div class="tenancy-card-main">
            <h4>${escapeHtml(companyName)}</h4>
            ${tradingName && tradingName !== companyName ? `<p><strong>Trading Name:</strong> ${escapeHtml(tradingName)}</p>` : ""}
            <p><strong>Property:</strong> ${escapeHtml(ownerBuildingName)}</p>
            <p><strong>Lease Start:</strong> ${formatDate(tenancy.leaseStart)}</p>
            <p><strong>Lease End:</strong> ${formatDate(tenancy.leaseEnd)}</p>
            <p><strong>Status:</strong> ${escapeHtml(tenancyStatus)}</p>
          </div>
          ${renderTenancyTileContacts(tenancy)}
        </article>
      `;
    }).join("");

    setTenancyTab(activeTenancyTab);
  }

  function openCurrentTenancyView(buildingId) {
    if (arguments.length > 0) {
      setCurrentPropertyId(buildingId && findBuildingById(buildingId) ? buildingId : "");
      syncScheduleFilterToCurrentProperty();
    }

    activeTenancyTab = "current";
    activeTenancyDetailsId = "";
    tenancyEditBuildingId = "";
    tenancyFormMode = "";
    renderCurrentTenancyPage();
    showTenancyView();
  }

  function buildTenancyPayload(building, existingTenancy, options) {
    const formData = new FormData(tenancyForm);
    const createMode = Boolean(options && options.createMode);
    const companyName = String(formData.get("companyName") || "").trim();
    const company = ensureCompanyByName(companyName, "Tenant");
    const normalizedBuilding = ensureWorkflowCollections(building);
    const normalizedTenancy = existingTenancy || (createMode ? null : normalizedBuilding.tenancy) || null;
    // Read tenancy ID from hidden form field so edits to existing tenancies preserve the ID.
    const formTenancyId = createMode ? "" : String(formData.get("tenancyId") || "").trim();
    const usedTenancyIds = new Set(getAllTenanciesForBuilding(building).map(function (tenancy) {
      return String(tenancy.id || "").trim();
    }).filter(Boolean));
    const tenancyId = formTenancyId || (existingTenancy && existingTenancy.id ? existingTenancy.id : "");
    return {
      id: tenancyId || createUniqueTenancyId(usedTenancyIds),
      companyName: companyName,
      companyId: company ? company.id : "",
      tradingName: String(formData.get("tradingName") || "").trim(),
      leaseStart: String(formData.get("leaseStart") || "").trim(),
      leaseEnd: String(formData.get("leaseEnd") || "").trim(),
      rentReviewDate: String(formData.get("rentReviewDate") || "").trim(),
      rentReviewFrequency: String(formData.get("rentReviewFrequency") || "Annual").trim() || "Annual",
      renewalDate: String(formData.get("renewalDate") || "").trim(),
      noticeDate: String(formData.get("noticeDate") || "").trim(),
      status: String(formData.get("status") || "Occupied"),
      notes: String(formData.get("notes") || "").trim(),
      contacts: normalizedTenancy && Array.isArray(normalizedTenancy.contacts) ? normalizedTenancy.contacts : [],
      contactRefs: normalizedTenancy && Array.isArray(normalizedTenancy.contactRefs) ? normalizedTenancy.contactRefs : [],
      documents: normalizedTenancy && Array.isArray(normalizedTenancy.documents) ? normalizedTenancy.documents : [],
      lease: normalizedTenancy && normalizedTenancy.lease
        ? normalizedTenancy.lease
        : {
          notes: "",
          documents: [],
          versionHistory: [],
        },
    };
  }

  function openTenancyForm(mode, tenancyToEdit) {
    tenancyFormFilterBuildingId = getBuildingFilterId();
    if (mode === "edit" && tenancyToEdit) {
      const owner = findBuildingByTenancyId(tenancyToEdit.id);
      tenancyEditBuildingId = owner ? owner.id : activeBuildingId;
    } else if (mode === "add") {
      tenancyEditBuildingId = activeBuildingId;
    }

    const building = getTenancyEditBuilding();
    if (!building) {
      alert("Select a property before adding a tenancy.");
      return;
    }

    tenancyFormMode = mode;
    if (mode === "add") {
      activeTenancyDetailsId = "";
    }
    tenancyForm.reset();
    tenancyFormTitle.textContent = mode === "edit" ? "Edit Tenancy" : "Add Current Tenancy";

    const tenancy = tenancyToEdit
      || (mode === "edit"
        ? getTenancyById(building, activeTenancyDetailsId) || (getAllTenanciesForBuilding(building)[0] || null)
        : null);

    if (tenancyForm.elements.tenancyId) {
      tenancyForm.elements.tenancyId.value = "";
    }

    if (mode === "edit" && tenancy) {
      activeTenancyDetailsId = tenancy.id || "";
      if (tenancyForm.elements.tenancyId) {
        tenancyForm.elements.tenancyId.value = tenancy.id || "";
      }
      tenancyForm.elements.companyName.value = tenancy.companyName || "";
      tenancyForm.elements.tradingName.value = tenancy.tradingName || "";
      tenancyForm.elements.leaseStart.value = tenancy.leaseStart || "";
      tenancyForm.elements.leaseEnd.value = tenancy.leaseEnd || "";
      if (tenancyForm.elements.rentReviewDate) {
        tenancyForm.elements.rentReviewDate.value = tenancy.rentReviewDate || "";
      }
      if (tenancyForm.elements.rentReviewFrequency) {
        tenancyForm.elements.rentReviewFrequency.value = tenancy.rentReviewFrequency || "Annual";
      }
      if (tenancyForm.elements.renewalDate) {
        tenancyForm.elements.renewalDate.value = tenancy.renewalDate || "";
      }
      if (tenancyForm.elements.noticeDate) {
        tenancyForm.elements.noticeDate.value = tenancy.noticeDate || "";
      }
      // Set status radio
      const statusInputs = tenancyForm.querySelectorAll('input[name="status"]');
      statusInputs.forEach(function (input) {
        input.checked = input.value === (tenancy.status || "Occupied");
      });
      tenancyForm.elements.notes.value = tenancy.notes || "";
    }

    const hasTenancies = getAllTenanciesForBuilding(building).length > 0;
    if (archiveTenancyBtn instanceof HTMLButtonElement) {
      archiveTenancyBtn.style.display = mode === "edit" && hasTenancies ? "inline-flex" : "none";
    }
    if (tenancyDangerSection instanceof HTMLElement) {
      tenancyDangerSection.style.display = mode === "edit" && hasTenancies ? "block" : "none";
    }

    renderTenancyContactsSection(mode === "edit" ? tenancy : null);
    renderTenancySectionState(hasTenancies, "form");
  }

  function renderTenancyContactsSection(tenancy) {
    if (!tenancyContactsSection || !tenancyContactsList) {
      return;
    }

    tenancyContactsSection.style.display = "block";

    if (!tenancy || !tenancy.id) {
      tenancyContactsList.innerHTML = '<p class="module-placeholder">Save this tenancy before linking contacts.</p>';
      if (tenancyAddContactLinkBtn instanceof HTMLButtonElement) {
        tenancyAddContactLinkBtn.style.display = "none";
        tenancyAddContactLinkBtn.disabled = true;
      }
      return;
    }

    if (tenancyAddContactLinkBtn instanceof HTMLButtonElement) {
      tenancyAddContactLinkBtn.style.display = "inline-flex";
      tenancyAddContactLinkBtn.disabled = false;
    }

    const linkedContacts = getContactsForTenancy(tenancy);
    if (linkedContacts.length === 0) {
      tenancyContactsList.innerHTML = '<p class="module-placeholder">No linked contacts.</p>';
      return;
    }

    tenancyContactsList.innerHTML = linkedContacts.map(function (contact) {
      return `
        <article class="building-card">
          <h3>${escapeHtml(contact.name || "Contact")}</h3>
          <p><strong>Company:</strong> ${escapeHtml(String(contact.companyName || "").trim() || getCompanyNameById(contact.companyId, "Not set"))}</p>
          <p><strong>Mobile:</strong> ${escapeHtml(contact.mobile || "Not provided")}</p>
          <p><strong>Email:</strong> ${escapeHtml(contact.email || "Not provided")}</p>
          <div class="tenancy-card-actions">
            <button class="btn btn-secondary btn-small" type="button" data-tenancy-contact-action="remove" data-contact-id="${escapeHtml(contact.id)}" data-tenancy-id="${escapeHtml(tenancy.id)}">Remove Link</button>
          </div>
        </article>
      `;
    }).join("");
  }

  function showTenancyContactLinkDialog(tenancy, availableContacts) {
    return new Promise(function (resolve) {
      const backdrop = window.document.createElement("div");
      backdrop.className = "template-delete-modal-backdrop";
      backdrop.innerHTML = `
        <div class="template-delete-modal" role="dialog" aria-modal="true" aria-labelledby="tenancy-link-contact-title">
          <h3 id="tenancy-link-contact-title">Link Contact</h3>
          <p>Select a contact to link to ${escapeHtml(getTenancyDisplayName(tenancy))}.</p>
          <label>
            <span class="visually-hidden">Contact</span>
            <select id="tenancy-link-contact-select" class="schedule-filter-select">
              <option value="">Select contact</option>
              ${availableContacts.map(function (contact) {
                const companyName = String(contact.companyName || "").trim() || getCompanyNameById(contact.companyId, "");
                const suffix = companyName ? ` - ${companyName}` : "";
                return `<option value="${escapeHtml(contact.id)}">${escapeHtml(contact.name || "Contact")}${escapeHtml(suffix)}</option>`;
              }).join("")}
            </select>
          </label>
          <div class="template-delete-modal-actions">
            <button class="btn btn-secondary" type="button" data-tenancy-contact-link-action="cancel">Cancel</button>
            <button class="btn btn-primary" type="button" data-tenancy-contact-link-action="save">Link</button>
          </div>
        </div>
      `;

      window.document.body.appendChild(backdrop);

      function close(value) {
        backdrop.remove();
        resolve(value);
      }

      backdrop.addEventListener("click", function (event) {
        if (event.target === backdrop) {
          close("");
          return;
        }

        const target = event.target;
        if (!(target instanceof HTMLElement)) {
          return;
        }

        const action = target.getAttribute("data-tenancy-contact-link-action");
        if (action === "cancel") {
          close("");
          return;
        }

        if (action === "save") {
          const select = backdrop.querySelector("#tenancy-link-contact-select");
          close(select instanceof HTMLSelectElement ? String(select.value || "").trim() : "");
        }
      });
    });
  }

  function getTenancyBeingEdited() {
    const building = getTenancyEditBuilding();
    if (!building || tenancyFormMode !== "edit") {
      return null;
    }

    const formTenancyId = tenancyForm && tenancyForm.elements.tenancyId
      ? String(tenancyForm.elements.tenancyId.value || "").trim()
      : "";
    return getTenancyById(building, formTenancyId);
  }

  async function handleAddContactLinkForTenancy() {
    const building = getTenancyEditBuilding();
    const tenancy = getTenancyBeingEdited();
    if (!building || !tenancy) {
      return;
    }

    const linkedIds = getTenancyContactRefs(tenancy);
    const availableContacts = dedupeContacts(getContacts()).filter(function (contact) {
      return contact && contact.id && !linkedIds.includes(String(contact.id));
    });

    if (availableContacts.length === 0) {
      alert("There are no further contacts available to link. Create the contact first from the Contacts screen.");
      return;
    }

    const contactId = await showTenancyContactLinkDialog(tenancy, availableContacts);
    if (!contactId) {
      return;
    }

    const updated = linkContactToTenancy(building, tenancy.id, contactId);
    if (!updated) {
      return;
    }

    window.BuildingStorage.updateBuilding(updated);
    renderBuildings();
    renderTenancyContactsSection(getTenancyById(updated, tenancy.id));
  }

  function handleTenancyContactsListClick(event) {
    const target = event.target;
    if (!(target instanceof HTMLElement)) {
      return;
    }

    const actionHost = (typeof target.closest === "function" && target.closest("[data-tenancy-contact-action]")) || target;
    if (actionHost.getAttribute("data-tenancy-contact-action") !== "remove") {
      return;
    }

    const building = getTenancyEditBuilding();
    if (!building) {
      return;
    }

    const tenancyId = String(actionHost.getAttribute("data-tenancy-id") || "").trim();
    const contactId = String(actionHost.getAttribute("data-contact-id") || "").trim();
    const updated = unlinkContactFromTenancy(building, tenancyId, contactId);
    if (!updated) {
      return;
    }

    window.BuildingStorage.updateBuilding(updated);
    renderBuildings();
    renderTenancyContactsSection(getTenancyById(updated, tenancyId));
  }

  function createArchivedTenancyRecord(tenancy, archivedAt) {
    const lease = tenancy && tenancy.lease ? tenancy.lease : { notes: "", documents: [], versionHistory: [] };
    const leaseDocuments = Array.isArray(lease.documents)
      ? lease.documents
      : (Array.isArray(tenancy.documents) ? tenancy.documents : []);

    return {
      ...tenancy,
      status: "Archived",
      archivedAt: archivedAt,
      archivedBy: "Property Manager",
      documents: leaseDocuments,
      lease: {
        ...lease,
        documents: leaseDocuments,
      },
      contactRefs: Array.isArray(tenancy.contactRefs) ? tenancy.contactRefs : [],
      contacts: Array.isArray(tenancy.contacts) ? tenancy.contacts : [],
    };
  }

  function confirmTenancyDeleteDialog(tenancy) {
    return new Promise(function (resolve) {
      const backdrop = window.document.createElement("div");
      backdrop.className = "template-delete-modal-backdrop app-modal-backdrop-confirm";
      backdrop.setAttribute("data-tenancy-delete-confirm", String(tenancy && tenancy.id || ""));

      const dialog = window.document.createElement("div");
      dialog.className = "template-delete-modal";
      dialog.setAttribute("role", "dialog");
      dialog.setAttribute("aria-modal", "true");
      dialog.setAttribute("aria-labelledby", "tenancy-delete-modal-title");
      const tenancyName = String(tenancy && (tenancy.tradingName || tenancy.companyName) || "this tenancy").trim();
      dialog.innerHTML = `
        <h3 id="tenancy-delete-modal-title">Delete Tenancy Permanently</h3>
        <p>Permanently delete <strong>${escapeHtml(tenancyName)}</strong>?</p>
        <p>This removes the tenancy and its tenancy-specific Calendar history. Master Contacts and Companies are kept, and linked Documents are preserved in the Documents repository. This action cannot be undone.</p>
        <div class="template-delete-modal-actions">
          <button class="btn btn-secondary" type="button" data-tenancy-delete-action="cancel">Cancel</button>
          <button class="btn template-delete-btn" type="button" data-tenancy-delete-action="delete">Delete Tenancy</button>
        </div>
      `;

      backdrop.appendChild(dialog);
      window.document.body.appendChild(backdrop);
      let isClosed = false;

      function closeWith(result) {
        if (isClosed) return;
        isClosed = true;
        window.document.removeEventListener("keydown", handleEscape);
        backdrop.remove();
        resolve(Boolean(result));
      }

      function handleEscape(event) {
        if (event.key === "Escape") closeWith(false);
      }

      window.document.addEventListener("keydown", handleEscape);
      backdrop.addEventListener("click", function (event) {
        if (event.target === backdrop) closeWith(false);
      });
      dialog.addEventListener("click", function (event) {
        const target = event.target;
        if (!(target instanceof HTMLElement)) return;
        const action = target.getAttribute("data-tenancy-delete-action");
        if (action === "cancel") closeWith(false);
        if (action === "delete") closeWith(true);
      });
    });
  }

  function deleteTenancyPermanently(building, tenancyId) {
    const targetId = String(tenancyId || "").trim();
    if (!building || !targetId) return null;

    const latestBuilding = findBuildingById(building.id) || building;
    const normalizedBuilding = ensureWorkflowCollections(latestBuilding);
    const tenancies = getAllTenanciesForBuilding(normalizedBuilding);
    const tenancyToDelete = tenancies.find(function (tenancy) {
      return String(tenancy.id || "").trim() === targetId;
    });
    if (!tenancyToDelete) return null;

    const tenancyScheduleItemIds = new Set((normalizedBuilding.scheduleItems || []).filter(function (item) {
      return String(item.tenancyId || "").trim() === targetId;
    }).map(function (item) {
      return String(item.id || "").trim();
    }).filter(Boolean));

    // Preserve tenancy documents by promoting any tenancy-only records into the property repository.
    const propertyDocuments = (normalizedBuilding.documents || []).map(function (documentRecord) {
      if (String(documentRecord.tenancyId || "").trim() !== targetId) return documentRecord;
      return { ...documentRecord, tenancyId: "", lastUpdated: new Date().toISOString() };
    });
    const knownDocumentIds = new Set(propertyDocuments.map(function (documentRecord) {
      return String(documentRecord.id || "").trim();
    }).filter(Boolean));
    const leaseDocuments = tenancyToDelete.lease && Array.isArray(tenancyToDelete.lease.documents)
      ? tenancyToDelete.lease.documents
      : (Array.isArray(tenancyToDelete.documents) ? tenancyToDelete.documents : []);
    leaseDocuments.forEach(function (documentRecord) {
      const documentId = String(documentRecord && documentRecord.id || "").trim();
      if (documentId && knownDocumentIds.has(documentId)) return;
      propertyDocuments.push({ ...documentRecord, tenancyId: "" });
      if (documentId) knownDocumentIds.add(documentId);
    });

    const remainingTenancies = tenancies.filter(function (tenancy) {
      return String(tenancy.id || "").trim() !== targetId;
    });
    const now = new Date().toISOString();
    const updated = {
      ...normalizedBuilding,
      tenancy: remainingTenancies[0] || null,
      tenancies: remainingTenancies,
      documents: propertyDocuments,
      scheduleItems: (normalizedBuilding.scheduleItems || []).filter(function (item) {
        return !(String(item.tenancyId || "").trim() === targetId);
      }),
      historyRecords: (normalizedBuilding.historyRecords || []).filter(function (record) {
        return !tenancyScheduleItemIds.has(String(record.scheduleItemId || "").trim());
      }),
      status: remainingTenancies.length === 0 ? "Vacant" : normalizedBuilding.status,
      lastUpdated: now,
    };

    const normalized = ensureWorkflowCollections(updated);
    window.BuildingStorage.updateBuilding(normalized);
    return normalized;
  }

  function handleDeleteTenancy() {
    const building = getTenancyEditBuilding();
    const tenancy = getTenancyBeingEdited();
    if (!building || !tenancy) return;

    confirmTenancyDeleteDialog(tenancy).then(function (confirmed) {
      if (!confirmed) return;
      const updated = deleteTenancyPermanently(building, tenancy.id);
      if (!updated) return;
      activeTenancyDetailsId = "";
      tenancyFormMode = "";
      renderBuildings();
      setTenancyTab("current");
      openCurrentTenancyView();
    });
  }

  function handleArchiveTenancy() {
    const building = getTenancyEditBuilding();
    const allTenancies = getAllTenanciesForBuilding(building);
    if (!building || allTenancies.length === 0) {
      return;
    }

    const selectedTenancyId = tenancyForm && tenancyForm.elements.tenancyId
      ? String(tenancyForm.elements.tenancyId.value || "").trim()
      : "";
    const tenancyToArchive = getTenancyById(building, selectedTenancyId)
      || getTenancyById(building, activeTenancyDetailsId)
      || allTenancies[0];
    if (!tenancyToArchive) {
      return;
    }

    const shouldArchive = window.confirm("Archive this tenancy? It will be removed from Current and kept in History with all lease information, documents, and audit records.");
    if (!shouldArchive) {
      return;
    }

    const now = new Date().toISOString();
    const archivedEntry = createArchivedTenancyRecord(tenancyToArchive, now);
    const history = Array.isArray(building.tenancyHistory) ? building.tenancyHistory : [];
    const remainingTenancies = allTenancies.filter(function (tenancy) {
      return String(tenancy.id || "") !== String(tenancyToArchive.id || "");
    });
    const updated = {
      ...building,
      tenancy: remainingTenancies[0] || null,
      tenancies: remainingTenancies,
      tenancyHistory: history.concat(archivedEntry),
      status: remainingTenancies.length === 0 ? "Vacant" : building.status,
      lastUpdated: now,
    };

    window.BuildingStorage.updateBuilding(updated);
    renderBuildings();
    setTenancyTab("current");
    openCurrentTenancyView();
  }

  function renderOverviewModule(moduleName, building) {
    const normalized = ensureWorkflowCollections(building);
    const currentTenant = normalized.tenancy ? normalized.tenancy.companyName : "None";
    const currentTenantDisplay = normalized.tenancy
      ? `<button type="button" class="inline-link current-tenant-link">${currentTenant}</button>`
      : "None";
    const overdueCount = normalized.scheduleItems.filter(function (item) {
      return getScheduleBucket(item) === "overdue";
    }).length;
    const nextItem = normalized.scheduleItems
      .slice()
      .sort(function (a, b) {
        return new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime();
      })[0] || null;
    const nextScheduledItem = nextItem ? `${nextItem.taskName} (${formatDate(nextItem.dueDate)})` : "None scheduled";
    const documentsCount = normalized.tenancy && normalized.tenancy.lease && Array.isArray(normalized.tenancy.lease.documents)
      ? normalized.tenancy.lease.documents.length
      : 0;
    const lastActivity = formatDateTime(normalized.lastUpdated);
    const address = `${normalized.streetAddress}, ${normalized.city}`;

    moduleContentTitle.textContent = "Dashboard Summary";
    moduleContentBody.innerHTML = `
      <dl class="snapshot-list dashboard-snapshot-list">
        <div><dt>Property Name</dt><dd>${normalized.buildingName}</dd></div>
        <div><dt>Address</dt><dd>${address}</dd></div>
        <div><dt>Property Health</dt><dd>${getHealthLabel(normalized)}</dd></div>
        <div><dt>Current Tenant</dt><dd>${currentTenantDisplay}</dd></div>
        <div><dt>Next Calendar Item</dt><dd>${nextScheduledItem}</dd></div>
        <div><dt>Overdue Items</dt><dd>${overdueCount}</dd></div>
        <div><dt>Document Count</dt><dd>${documentsCount}</dd></div>
        <div><dt>Last Activity</dt><dd>${lastActivity}</dd></div>
      </dl>
    `;
  }

  function setActiveModuleButton(moduleName) {
    const buttons = moduleNav.querySelectorAll(".module-nav-card");
    buttons.forEach(function (button) {
      const isActive = button.getAttribute("data-module") === moduleName;
      button.classList.toggle("is-active", isActive);
    });
  }

  function renderOverview(building) {
    overviewBuildingName.textContent = building.buildingName;
    overviewStreetAddress.textContent = building.streetAddress;
    overviewCity.textContent = building.city;
    overviewStatus.textContent = building.status;

    setActiveModuleButton(activeModule);
    renderOverviewModule("Dashboard", building);
  }

  function openOverviewById(buildingId) {
    const building = findBuildingById(buildingId);
    if (!building) {
      return;
    }

    setCurrentPropertyId(buildingId);
    showDashboard();
    renderBuildings();
  }

  function populateEditForm(building) {
    editBuildingForm.elements.editBuildingId.value = building.id;
    editBuildingForm.elements.buildingName.value = building.buildingName;
    editBuildingForm.elements.streetAddress.value = building.streetAddress;
    editBuildingForm.elements.city.value = building.city;
    editBuildingForm.elements.owner.value = building.owner;
    editBuildingForm.elements.propertyManager.value = building.propertyManager;
    editBuildingForm.elements.notes.value = building.notes || "";

    const statusFields = editBuildingForm.elements.status;
    for (let i = 0; i < statusFields.length; i += 1) {
      statusFields[i].checked = statusFields[i].value === building.status;
    }
  }

  function handleEditSave(event) {
    event.preventDefault();
    const editingId = editingPropertyId
      || String(editBuildingForm.elements.editBuildingId.value || "").trim()
      || activeBuildingId;
    const current = findBuildingById(editingId);
    if (!current) {
      openSettingsView();
      renderBuildings();
      return;
    }

    const formData = new FormData(editBuildingForm);
    const updated = {
      ...current,
      id: current.id,
      buildingName: String(formData.get("buildingName") || "").trim(),
      streetAddress: String(formData.get("streetAddress") || "").trim(),
      city: String(formData.get("city") || "").trim(),
      owner: String(formData.get("owner") || "").trim(),
      propertyManager: String(formData.get("propertyManager") || "").trim(),
      status: String(formData.get("status") || "Occupied"),
      notes: String(formData.get("notes") || "").trim(),
      createdDate: current.createdDate || new Date().toISOString(),
      lastUpdated: new Date().toISOString(),
      buildingContactAssignments: Array.isArray(current.buildingContactAssignments) ? current.buildingContactAssignments : [],
      buildingRoles: Array.isArray(current.buildingRoles) ? current.buildingRoles : [],
      propertyTemplates: Array.isArray(current.propertyTemplates) ? current.propertyTemplates : [],
      scheduleItems: Array.isArray(current.scheduleItems) ? current.scheduleItems : [],
      historyRecords: Array.isArray(current.historyRecords) ? current.historyRecords : [],
    };

    window.BuildingStorage.updateBuilding(updated);
    editingPropertyId = "";
    renderBuildings();
    openSettingsView();
  }

  function handleSaveTenancy(event) {
    event.preventDefault();
    const current = getTenancyEditBuilding();
    if (!current) {
      showDashboard();
      renderBuildings();
      return;
    }

    // Find the tenancy being edited so its existing data (docs, contactRefs, etc.) is preserved.
    const existingTenancies = getAllTenanciesForBuilding(current).slice();
    const isCreateMode = tenancyFormMode !== "edit";
    const formTenancyId = tenancyForm.elements.tenancyId
      ? String(tenancyForm.elements.tenancyId.value || "").trim()
      : "";
    const matchedTenancy = isCreateMode
      ? null
      : (formTenancyId
        ? existingTenancies.find(function (tenancy) {
          return String(tenancy.id || "") === formTenancyId;
        }) || null
        : getTenancyById(current, activeTenancyDetailsId));

    const tenancyPayload = buildTenancyPayload(current, matchedTenancy || null, { createMode: isCreateMode });

    if (isCreateMode) {
      existingTenancies.push(tenancyPayload);
    } else {
      const editingId = String(tenancyPayload.id || "").trim();
      const targetIndex = existingTenancies.findIndex(function (tenancy) {
        return String(tenancy.id || "") === editingId;
      });
      if (targetIndex < 0) {
        return;
      }
      existingTenancies[targetIndex] = tenancyPayload;
    }

    const updated = {
      ...current,
      tenancy: existingTenancies[0] || null,
      tenancies: existingTenancies,
      lastUpdated: new Date().toISOString(),
    };

    window.BuildingStorage.updateBuilding(updated);
    activeTenancyDetailsId = "";
    tenancyFormMode = "";
    renderBuildings();
    openCurrentTenancyView();
  }

  function handleAddContact() {
    openContactForm("add");
  }

  function handleAddCompany() {
    openCompanyForm("add");
  }

  function confirmContactDeleteDialog(contact) {
    return new Promise(function (resolve) {
      const backdrop = window.document.createElement("div");
      backdrop.className = "template-delete-modal-backdrop app-modal-backdrop-confirm";
      backdrop.setAttribute("data-contact-delete-confirm", contact.id || "");

      const dialog = window.document.createElement("div");
      dialog.className = "template-delete-modal";
      dialog.setAttribute("role", "dialog");
      dialog.setAttribute("aria-modal", "true");
      dialog.setAttribute("aria-labelledby", "contact-delete-modal-title");
      dialog.innerHTML = `
        <h3 id="contact-delete-modal-title">Delete Contact</h3>
        <p>Permanently delete <strong>${escapeHtml(contact.name || "this contact")}</strong>?</p>
        <p>This removes the contact from the central repository and clears their Property, Tenancy, Calendar and template links. Properties, Tenancies, Companies and Calendar items are kept. This action cannot be undone.</p>
        <div class="template-delete-modal-actions">
          <button class="btn btn-secondary" type="button" data-contact-delete-action="cancel">Cancel</button>
          <button class="btn template-delete-btn" type="button" data-contact-delete-action="delete">Delete</button>
        </div>
      `;

      backdrop.appendChild(dialog);
      window.document.body.appendChild(backdrop);

      function closeWith(confirmed) {
        window.document.removeEventListener("keydown", handleEscape);
        backdrop.remove();
        resolve(Boolean(confirmed));
      }

      function handleEscape(event) {
        if (event.key === "Escape") {
          closeWith(false);
        }
      }

      window.document.addEventListener("keydown", handleEscape);
      backdrop.addEventListener("click", function (event) {
        if (event.target === backdrop) {
          closeWith(false);
        }
      });

      dialog.addEventListener("click", function (event) {
        const target = event.target;
        if (!(target instanceof HTMLElement)) {
          return;
        }
        const action = target.getAttribute("data-contact-delete-action");
        if (action === "cancel") {
          closeWith(false);
          return;
        }
        if (action === "delete") {
          closeWith(true);
        }
      });
    });
  }

  function handleDeleteContact() {
    if (!activeContactId) {
      return;
    }

    const contact = findContactById(activeContactId);
    if (!contact) {
      return;
    }

    confirmContactDeleteDialog(contact).then(function (confirmed) {
      if (!confirmed) {
        return;
      }

      if (!deleteContactPermanently(contact.id)) {
        return;
      }

      activeContactId = "";
      renderBuildings();
      openContactsView();
    });
  }

  function renderContactLinkedScheduleItems(contact) {
    if (!contactLinkedScheduleSection || !contactLinkedScheduleList) {
      return;
    }

    if (!contact || !contact.id) {
      contactLinkedScheduleSection.style.display = "block";
      contactLinkedScheduleList.innerHTML = '<p class="module-placeholder">Save this contact before linking calendar items.</p>';
      if (contactAddScheduleLinkBtn instanceof HTMLButtonElement) contactAddScheduleLinkBtn.style.display = "none";
      if (contactRemoveScheduleLinkBtn instanceof HTMLButtonElement) contactRemoveScheduleLinkBtn.style.display = "none";
      return;
    }

    contactLinkedScheduleSection.style.display = "block";
    if (contactAddScheduleLinkBtn instanceof HTMLButtonElement) contactAddScheduleLinkBtn.style.display = "none";
    if (contactRemoveScheduleLinkBtn instanceof HTMLButtonElement) contactRemoveScheduleLinkBtn.style.display = "none";
    const linkedItems = getScheduleItemsLinkedToContactForFilter(contact.id);
    if (linkedItems.length === 0) {
      contactLinkedScheduleList.innerHTML = '<p class="module-placeholder">No linked calendar items.</p>';
      if (contactRemoveScheduleLinkBtn instanceof HTMLButtonElement) {
        contactRemoveScheduleLinkBtn.disabled = true;
      }
      return;
    }

    if (contactRemoveScheduleLinkBtn instanceof HTMLButtonElement) {
      contactRemoveScheduleLinkBtn.disabled = false;
    }

    contactLinkedScheduleList.innerHTML = linkedItems.map(function (item) {
      return `
        <article class="building-card clickable-card" data-linked-schedule-id="${item.id}" role="button" tabindex="0" aria-label="Open schedule item ${escapeHtml(item.taskName)}">
          <h3>${escapeHtml(item.taskName)}</h3>
          <p><strong>Frequency:</strong> ${escapeHtml(item.frequency || "Not set")}</p>
          <p><strong>Due Date:</strong> ${formatDate(item.dueDate)}</p>
          <span class="card-chevron">&gt;</span>
        </article>
      `;
    }).join("");
  }

  function showContactScheduleLinkDialog(building, contact) {
    return new Promise(function (resolve) {
      const normalized = ensureWorkflowCollections(building);
      const items = (normalized.scheduleItems || []).slice().sort(function (left, right) {
        return new Date(left.dueDate).getTime() - new Date(right.dueDate).getTime();
      });

      if (items.length === 0) {
        resolve("");
        return;
      }

      const backdrop = window.document.createElement("div");
      backdrop.className = "template-delete-modal-backdrop";
      backdrop.innerHTML = `
        <div class="template-delete-modal" role="dialog" aria-modal="true" aria-labelledby="contact-link-schedule-title">
          <h3 id="contact-link-schedule-title">Link Calendar Item</h3>
          <p>Select a calendar item to link to ${escapeHtml(contact.name)}.</p>
          <label>
            <span class="visually-hidden">Calendar item</span>
            <select id="contact-link-schedule-select" class="schedule-filter-select">
              <option value="">Select calendar item</option>
              ${items.map(function (item) {
                const current = String(item.preferredContactId || "").trim();
                const linkedSuffix = current && current !== String(contact.id) ? " (reassigns current primary contact)" : "";
                return `<option value="${item.id}">${escapeHtml(item.taskName)} - ${escapeHtml(formatDate(item.dueDate))}${escapeHtml(linkedSuffix)}</option>`;
              }).join("")}
            </select>
          </label>
          <div class="template-delete-modal-actions">
            <button class="btn btn-secondary" type="button" data-contact-link-action="cancel">Cancel</button>
            <button class="btn btn-primary" type="button" data-contact-link-action="save">Link</button>
          </div>
        </div>
      `;

      window.document.body.appendChild(backdrop);

      function close(value) {
        backdrop.remove();
        resolve(value);
      }

      backdrop.addEventListener("click", function (event) {
        if (event.target === backdrop) {
          close("");
        }
      });

      backdrop.addEventListener("click", function (event) {
        const target = event.target;
        if (!(target instanceof HTMLElement)) {
          return;
        }

        const action = target.getAttribute("data-contact-link-action");
        if (action === "cancel") {
          close("");
          return;
        }

        if (action === "save") {
          const select = backdrop.querySelector("#contact-link-schedule-select");
          const selectedId = select instanceof HTMLSelectElement ? String(select.value || "").trim() : "";
          close(selectedId);
        }
      });
    });
  }

  function linkScheduleItemToContact(building, scheduleItemId, contactId) {
    const normalized = ensureWorkflowCollections(building);
    const scheduleItem = (normalized.scheduleItems || []).find(function (item) {
      return String(item.id || "") === String(scheduleItemId || "");
    });
    if (!scheduleItem) {
      return null;
    }

    const nextScheduleItems = (normalized.scheduleItems || []).map(function (item) {
      if (String(item.id || "") !== String(scheduleItemId || "")) {
        return item;
      }

      return {
        ...item,
        preferredContactId: String(contactId || "").trim(),
        lastUpdated: new Date().toISOString(),
      };
    });

    return {
      ...normalized,
      scheduleItems: nextScheduleItems,
      lastUpdated: new Date().toISOString(),
    };
  }

  function showContactScheduleUnlinkDialog(building, contact) {
    return new Promise(function (resolve) {
      const linkedItems = getScheduleItemsLinkedToContact(building, contact.id);

      if (linkedItems.length === 0) {
        resolve("");
        return;
      }

      const backdrop = window.document.createElement("div");
      backdrop.className = "template-delete-modal-backdrop";
      backdrop.innerHTML = `
        <div class="template-delete-modal" role="dialog" aria-modal="true" aria-labelledby="contact-unlink-schedule-title">
          <h3 id="contact-unlink-schedule-title">Remove Calendar Link</h3>
          <p>Select a linked calendar item to unlink from ${escapeHtml(contact.name)}.</p>
          <label>
            <span class="visually-hidden">Linked calendar item</span>
            <select id="contact-unlink-schedule-select" class="schedule-filter-select">
              <option value="">Select linked calendar item</option>
              ${linkedItems.map(function (item) {
                return `<option value="${item.id}">${escapeHtml(item.taskName)} - ${escapeHtml(formatDate(item.dueDate))}</option>`;
              }).join("")}
            </select>
          </label>
          <div class="template-delete-modal-actions">
            <button class="btn btn-secondary" type="button" data-contact-unlink-action="cancel">Cancel</button>
            <button class="btn template-delete-btn" type="button" data-contact-unlink-action="remove">Remove Link</button>
          </div>
        </div>
      `;

      window.document.body.appendChild(backdrop);

      function close(value) {
        backdrop.remove();
        resolve(value);
      }

      backdrop.addEventListener("click", function (event) {
        if (event.target === backdrop) {
          close("");
        }
      });

      backdrop.addEventListener("click", function (event) {
        const target = event.target;
        if (!(target instanceof HTMLElement)) {
          return;
        }

        const action = target.getAttribute("data-contact-unlink-action");
        if (action === "cancel") {
          close("");
          return;
        }

        if (action === "remove") {
          const select = backdrop.querySelector("#contact-unlink-schedule-select");
          const selectedId = select instanceof HTMLSelectElement ? String(select.value || "").trim() : "";
          close(selectedId);
        }
      });
    });
  }

  function unlinkScheduleItemFromContact(building, scheduleItemId, contactId) {
    const normalized = ensureWorkflowCollections(building);
    const scheduleItem = (normalized.scheduleItems || []).find(function (item) {
      return String(item.id || "") === String(scheduleItemId || "");
    });
    if (!scheduleItem) {
      return null;
    }

    if (String(scheduleItem.preferredContactId || "") !== String(contactId || "")) {
      return null;
    }

    const nextScheduleItems = (normalized.scheduleItems || []).map(function (item) {
      if (String(item.id || "") !== String(scheduleItemId || "")) {
        return item;
      }

      return {
        ...item,
        preferredContactId: "",
        lastUpdated: new Date().toISOString(),
      };
    });

    return {
      ...normalized,
      scheduleItems: nextScheduleItems,
      lastUpdated: new Date().toISOString(),
    };
  }

  function getPropertyLinksForContact(contactId) {
    const targetId = String(contactId || "").trim();
    if (!targetId) return [];
    return window.BuildingStorage.getBuildings().filter(function (building) {
      const assignments = Array.isArray(building.buildingContactAssignments) ? building.buildingContactAssignments : [];
      return assignments.map(String).includes(targetId);
    });
  }

  function renderContactLinkedProperties(contact) {
    if (!contactLinkedPropertySection || !contactLinkedPropertyList) return;
    contactLinkedPropertySection.style.display = "block";
    if (!contact || !contact.id) {
      contactLinkedPropertyList.innerHTML = '<p class="module-placeholder">Save this contact before linking properties.</p>';
      if (contactAddPropertyLinkBtn instanceof HTMLButtonElement) contactAddPropertyLinkBtn.style.display = "none";
      return;
    }
    if (contactAddPropertyLinkBtn instanceof HTMLButtonElement) contactAddPropertyLinkBtn.style.display = "inline-flex";
    const links = getPropertyLinksForContact(contact.id);
    if (links.length === 0) {
      contactLinkedPropertyList.innerHTML = '<p class="module-placeholder">No linked properties.</p>';
      return;
    }
    contactLinkedPropertyList.innerHTML = links.map(function (building) {
      return `
        <article class="building-card">
          <h3>${escapeHtml(getBuildingDisplayLabel(building))}</h3>
          <div class="actions-row actions-row-tight">
            <button class="btn btn-secondary btn-small" type="button" data-contact-property-unlink-id="${escapeHtml(building.id)}">Remove</button>
          </div>
        </article>
      `;
    }).join("");
  }

  function showContactPropertyLinkDialog(contact, buildings) {
    return new Promise(function (resolve) {
      const backdrop = window.document.createElement("div");
      backdrop.className = "template-delete-modal-backdrop";
      backdrop.innerHTML = `
        <div class="template-delete-modal" role="dialog" aria-modal="true" aria-labelledby="contact-link-property-title">
          <h3 id="contact-link-property-title">Link Property</h3>
          <p>Select a property to link to ${escapeHtml(contact.name)}.</p>
          <label><span class="visually-hidden">Property</span>
            <select id="contact-link-property-select" class="schedule-filter-select">
              <option value="">Select property</option>
              ${buildings.map(function (building) { return `<option value="${escapeHtml(building.id)}">${escapeHtml(getBuildingDisplayLabel(building))}</option>`; }).join("")}
            </select>
          </label>
          <div class="template-delete-modal-actions">
            <button class="btn btn-secondary" type="button" data-contact-property-link-action="cancel">Cancel</button>
            <button class="btn btn-primary" type="button" data-contact-property-link-action="save">Link</button>
          </div>
        </div>`;
      window.document.body.appendChild(backdrop);
      function close(value) { backdrop.remove(); resolve(value); }
      backdrop.addEventListener("click", function (event) {
        if (event.target === backdrop) return close("");
        const target = event.target;
        if (!(target instanceof HTMLElement)) return;
        const action = target.getAttribute("data-contact-property-link-action");
        if (action === "cancel") return close("");
        if (action === "save") {
          const select = backdrop.querySelector("#contact-link-property-select");
          close(select instanceof HTMLSelectElement ? String(select.value || "").trim() : "");
        }
      });
    });
  }

  async function handleAddPropertyLinkForContact() {
    const contact = findContactById(activeContactId);
    if (!contact) return;
    const linkedIds = new Set(getPropertyLinksForContact(contact.id).map(function (building) { return String(building.id); }));
    const available = window.BuildingStorage.getBuildings().filter(function (building) { return !linkedIds.has(String(building.id)); });
    if (available.length === 0) {
      alert("There are no further properties available to link.");
      return;
    }
    const buildingId = await showContactPropertyLinkDialog(contact, available);
    if (!buildingId) return;
    const building = findBuildingById(buildingId);
    if (!building) return;
    window.BuildingStorage.updateBuilding(applyContactRelationshipToBuilding(building, contact.id, contact.responsibility || "Other"));
    renderBuildings();
    renderContactLinkedProperties(contact);
  }

  function handlePropertyLinkListClick(event) {
    const target = event.target;
    if (!(target instanceof HTMLElement)) return;
    const button = target.closest("[data-contact-property-unlink-id]");
    if (!(button instanceof HTMLElement)) return;
    const buildingId = String(button.getAttribute("data-contact-property-unlink-id") || "").trim();
    const contact = findContactById(activeContactId);
    const building = findBuildingById(buildingId);
    if (!contact || !building) return;
    window.BuildingStorage.updateBuilding(removeContactRelationshipFromBuilding(building, contact.id));
    renderBuildings();
    renderContactLinkedProperties(contact);
  }

  function renderContactLinkedTenancies(contact) {
    if (!contactLinkedTenancySection || !contactLinkedTenancyList) {
      return;
    }

    contactLinkedTenancySection.style.display = "block";

    if (!contact || !contact.id) {
      contactLinkedTenancyList.innerHTML = '<p class="module-placeholder">Save this contact before linking tenancies.</p>';
      if (contactAddTenancyLinkBtn instanceof HTMLButtonElement) {
        contactAddTenancyLinkBtn.style.display = "none";
        contactAddTenancyLinkBtn.disabled = true;
      }
      if (contactRemoveTenancyLinkBtn instanceof HTMLButtonElement) {
        contactRemoveTenancyLinkBtn.style.display = "none";
        contactRemoveTenancyLinkBtn.disabled = true;
      }
      return;
    }

    const links = getTenancyLinksForContact(contact.id);

    if (contactAddTenancyLinkBtn instanceof HTMLButtonElement) {
      contactAddTenancyLinkBtn.style.display = "inline-flex";
      contactAddTenancyLinkBtn.disabled = false;
    }
    if (contactRemoveTenancyLinkBtn instanceof HTMLButtonElement) {
      contactRemoveTenancyLinkBtn.style.display = "inline-flex";
      contactRemoveTenancyLinkBtn.disabled = links.length === 0;
    }

    if (links.length === 0) {
      contactLinkedTenancyList.innerHTML = '<p class="module-placeholder">No linked tenancies.</p>';
      return;
    }

    contactLinkedTenancyList.innerHTML = links.map(function (link) {
      return `
        <article class="building-card">
          <h3>${escapeHtml(getTenancyDisplayName(link.tenancy))}</h3>
          <p><strong>Property:</strong> ${escapeHtml(getBuildingDisplayLabel(link.building))}</p>
          <p><strong>Company:</strong> ${escapeHtml(link.tenancy.companyName || "Not provided")}</p>
          <div class="actions-row actions-row-tight">
            <button class="btn btn-secondary btn-small" type="button" data-contact-tenancy-unlink-building="${escapeHtml(link.building.id)}" data-contact-tenancy-unlink-id="${escapeHtml(link.tenancy.id)}">Remove</button>
          </div>
        </article>
      `;
    }).join("");
  }

  function showContactTenancyLinkDialog(contact, availableTenancies) {
    return new Promise(function (resolve) {
      const backdrop = window.document.createElement("div");
      backdrop.className = "template-delete-modal-backdrop";
      backdrop.innerHTML = `
        <div class="template-delete-modal" role="dialog" aria-modal="true" aria-labelledby="contact-link-tenancy-title">
          <h3 id="contact-link-tenancy-title">Link Tenancy</h3>
          <p>Select a tenancy to link to ${escapeHtml(contact.name)}.</p>
          <label>
            <span class="visually-hidden">Tenancy</span>
            <select id="contact-link-tenancy-select" class="schedule-filter-select">
              <option value="">Select tenancy</option>
              ${availableTenancies.map(function (entry) {
                return `<option value="${escapeHtml(entry.tenancy.id)}">${escapeHtml(getTenancyDisplayName(entry.tenancy))} - ${escapeHtml(getBuildingDisplayLabel(entry.building))}</option>`;
              }).join("")}
            </select>
          </label>
          <div class="template-delete-modal-actions">
            <button class="btn btn-secondary" type="button" data-contact-tenancy-link-action="cancel">Cancel</button>
            <button class="btn btn-primary" type="button" data-contact-tenancy-link-action="save">Link</button>
          </div>
        </div>
      `;

      window.document.body.appendChild(backdrop);

      function close(value) {
        backdrop.remove();
        resolve(value);
      }

      backdrop.addEventListener("click", function (event) {
        if (event.target === backdrop) {
          close("");
          return;
        }

        const target = event.target;
        if (!(target instanceof HTMLElement)) {
          return;
        }

        const action = target.getAttribute("data-contact-tenancy-link-action");
        if (action === "cancel") {
          close("");
          return;
        }

        if (action === "save") {
          const select = backdrop.querySelector("#contact-link-tenancy-select");
          close(select instanceof HTMLSelectElement ? String(select.value || "").trim() : "");
        }
      });
    });
  }

  function showContactTenancyUnlinkDialog(contact, links) {
    return new Promise(function (resolve) {
      const backdrop = window.document.createElement("div");
      backdrop.className = "template-delete-modal-backdrop";
      backdrop.innerHTML = `
        <div class="template-delete-modal" role="dialog" aria-modal="true" aria-labelledby="contact-unlink-tenancy-title">
          <h3 id="contact-unlink-tenancy-title">Remove Tenancy Link</h3>
          <p>Select a linked tenancy to unlink from ${escapeHtml(contact.name)}. The tenancy and the contact are both kept.</p>
          <label>
            <span class="visually-hidden">Linked tenancy</span>
            <select id="contact-unlink-tenancy-select" class="schedule-filter-select">
              <option value="">Select linked tenancy</option>
              ${links.map(function (link) {
                return `<option value="${escapeHtml(link.building.id)}::${escapeHtml(link.tenancy.id)}">${escapeHtml(getTenancyDisplayName(link.tenancy))} - ${escapeHtml(getBuildingDisplayLabel(link.building))}</option>`;
              }).join("")}
            </select>
          </label>
          <div class="template-delete-modal-actions">
            <button class="btn btn-secondary" type="button" data-contact-tenancy-unlink-action="cancel">Cancel</button>
            <button class="btn template-delete-btn" type="button" data-contact-tenancy-unlink-action="remove">Remove Link</button>
          </div>
        </div>
      `;

      window.document.body.appendChild(backdrop);

      function close(value) {
        backdrop.remove();
        resolve(value);
      }

      backdrop.addEventListener("click", function (event) {
        if (event.target === backdrop) {
          close("");
          return;
        }

        const target = event.target;
        if (!(target instanceof HTMLElement)) {
          return;
        }

        const action = target.getAttribute("data-contact-tenancy-unlink-action");
        if (action === "cancel") {
          close("");
          return;
        }

        if (action === "remove") {
          const select = backdrop.querySelector("#contact-unlink-tenancy-select");
          close(select instanceof HTMLSelectElement ? String(select.value || "").trim() : "");
        }
      });
    });
  }

  async function handleAddTenancyLinkForContact() {
    if (!activeContactId) return;
    const contact = findContactById(activeContactId);
    if (!contact) return;
    const availableTenancies = [];
    window.BuildingStorage.getBuildings().forEach(function (building) {
      getAllTenanciesForBuilding(building).forEach(function (tenancy) {
        if (!getTenancyContactRefs(tenancy).includes(String(contact.id))) {
          availableTenancies.push({ building: building, tenancy: tenancy });
        }
      });
    });
    if (availableTenancies.length === 0) {
      alert("There are no further tenancies available to link.");
      return;
    }
    const selection = await showContactTenancyLinkDialog(contact, availableTenancies);
    if (!selection) return;
    const match = availableTenancies.find(function (entry) { return String(entry.tenancy.id) === String(selection); });
    if (!match) return;
    const updated = linkContactToTenancy(match.building, match.tenancy.id, contact.id);
    if (!updated) return;
    window.BuildingStorage.updateBuilding(updated);
    renderBuildings();
    renderContactLinkedTenancies(contact);
  }

  function handleTenancyLinkListClick(event) {
    const target = event.target;
    if (!(target instanceof HTMLElement)) return;
    const button = target.closest("[data-contact-tenancy-unlink-id]");
    if (!(button instanceof HTMLElement)) return;
    const buildingId = String(button.getAttribute("data-contact-tenancy-unlink-building") || "").trim();
    const tenancyId = String(button.getAttribute("data-contact-tenancy-unlink-id") || "").trim();
    const contact = findContactById(activeContactId);
    const building = findBuildingById(buildingId);
    if (!contact || !building) return;
    const updated = unlinkContactFromTenancy(building, tenancyId, contact.id);
    if (!updated) return;
    window.BuildingStorage.updateBuilding(updated);
    renderBuildings();
    renderContactLinkedTenancies(contact);
  }

  async function handleRemoveTenancyLinkForContact() {
    if (!activeContactId) {
      return;
    }

    const contact = findContactById(activeContactId);
    if (!contact) {
      return;
    }

    const links = getTenancyLinksForContact(contact.id);
    if (links.length === 0) {
      return;
    }

    const selection = await showContactTenancyUnlinkDialog(contact, links);
    if (!selection) {
      return;
    }

    const separatorIndex = selection.indexOf("::");
    if (separatorIndex < 0) {
      return;
    }

    const buildingId = selection.slice(0, separatorIndex);
    const tenancyId = selection.slice(separatorIndex + 2);
    const building = findBuildingById(buildingId);
    if (!building) {
      return;
    }

    const updated = unlinkContactFromTenancy(building, tenancyId, contact.id);
    if (!updated) {
      return;
    }

    window.BuildingStorage.updateBuilding(updated);
    renderBuildings();
    renderContactLinkedTenancies(contact);
  }

  async function handleAddScheduleLinkForContact() {
    if (!activeContactId) {
      return;
    }

    const contact = findContactById(activeContactId);
    const building = findBuildingById(activeBuildingId);
    if (!contact || !building) {
      return;
    }

    const scheduleItemId = await showContactScheduleLinkDialog(building, contact);
    if (!scheduleItemId) {
      return;
    }

    const updated = linkScheduleItemToContact(building, scheduleItemId, contact.id);
    if (!updated) {
      return;
    }

    window.BuildingStorage.updateBuilding(updated);
    renderBuildings();
    renderContactLinkedScheduleItems(contact);
  }

  async function handleRemoveScheduleLinkForContact() {
    if (!activeContactId) {
      return;
    }

    const contact = findContactById(activeContactId);
    const building = findBuildingById(activeBuildingId);
    if (!contact || !building) {
      return;
    }

    const scheduleItemId = await showContactScheduleUnlinkDialog(building, contact);
    if (!scheduleItemId) {
      return;
    }

    const updated = unlinkScheduleItemFromContact(building, scheduleItemId, contact.id);
    if (!updated) {
      return;
    }

    window.BuildingStorage.updateBuilding(updated);
    renderBuildings();
    renderContactLinkedScheduleItems(contact);
  }

  function handleSaveContact(event) {
    event.preventDefault();

    // Resolve from master data so editing works in All Buildings mode too.
    const existingContact = contactFormMode === "edit" ? findContactById(activeContactId) : null;

    const payload = buildContactPayload(existingContact);

    if (contactAssignmentContext && contactFormMode === "add") {
      const context = contactAssignmentContext;
      const building = findBuildingById(context.buildingId);
      if (building) {
        const normalizedBuilding = ensureWorkflowCollections(building);
        window.BuildingStorage.upsertContact(payload);
        const withRelationship = applyContactRelationshipToBuilding(normalizedBuilding, payload.id, payload.responsibility || "Other");

        if (context.returnToPrimaryContactPicker) {
          const normalized = ensureWorkflowCollections(withRelationship);
          window.BuildingStorage.updateBuilding(normalized);
          renderBuildings();
          pendingPrimaryContactDialogState = {
            buildingId: context.buildingId,
            scheduleItemId: context.scheduleItemId,
            preselectedContactId: payload.id,
          };
          setContactFormAssignmentContext(null);
          returnToScheduleDetails(context);
          return;
        }

        const linked = linkScheduleItemToContact(withRelationship, context.scheduleItemId, payload.id);
        if (linked) {
          const normalized = ensureWorkflowCollections(linked);
          window.BuildingStorage.updateBuilding(normalized);
          renderBuildings();
          setContactFormAssignmentContext(null);
          returnToScheduleDetails(context);
          return;
        }
      }

      window.BuildingStorage.upsertContact(payload);
      renderBuildings();
      setContactFormAssignmentContext(null);
      openContactsView();
      return;
    }

    upsertContactForActiveTenancy(payload);
    renderBuildings();
    setContactFormAssignmentContext(null);
    contactReturnContext = null;
    openContactsView();
  }

  function handleCancelCompany() {
    openCompaniesView();
  }

  function handleSaveCompany(event) {
    event.preventDefault();
    const companies = getCompanies();
    const existing = companyFormMode === "edit"
      ? companies.find(function (company) {
        return company.id === activeCompanyId;
      }) || null
      : null;

    const payload = buildCompanyPayload(existing);
    window.BuildingStorage.upsertCompany(payload);
    openCompaniesView();
  }

  function handleCompanyListClick(event) {
    const target = event.target;
    if (!(target instanceof HTMLElement)) {
      return;
    }

    const card = target.closest(".building-card");
    if (!card) {
      return;
    }

    const companyId = card.getAttribute("data-company-id") || "";
    if (!companyId) {
      return;
    }

    const selected = findCompanyById(companyId);
    if (!selected) {
      return;
    }

    openCompanyForm("edit", selected);
  }

  function handleContactListClick(event) {
    const target = event.target;
    if (!(target instanceof HTMLElement)) {
      return;
    }

    const linkedScheduleCard = target.closest("[data-linked-schedule-id]");
    if (linkedScheduleCard instanceof HTMLElement) {
      const scheduleItemId = String(linkedScheduleCard.getAttribute("data-linked-schedule-id") || "").trim();
      if (!scheduleItemId) {
        return;
      }

      // Resolve the owning building so the link works in All Buildings mode.
      const ownerBuilding = getBuildingsForFilter().find(function (candidate) {
        return Boolean(findScheduleItemById(candidate, scheduleItemId));
      }) || findBuildingById(activeBuildingId);
      if (!ownerBuilding) {
        return;
      }

      openScheduleView("");
      openScheduleDetailsDialog(ownerBuilding.id, scheduleItemId);
      return;
    }

    const card = target.closest(".building-card");
    if (!card) {
      return;
    }

    const contactId = card.getAttribute("data-contact-id") || "";
    if (!contactId) {
      return;
    }

    const contacts = getContactsForDisplayInActiveBuilding();
    const selected = contacts.find(function (contact) {
      return contact.id === contactId;
    });
    if (!selected) {
      return;
    }

    if (target.closest(".company-open-link")) {
      const company = findCompanyById(selected.companyId);
      if (company) {
        openCompanyForm("edit", company);
      }
      return;
    }

    // Phone and email links perform their own action instead of opening the contact.
    if (target.closest(".contact-phone-link") || target.closest(".contact-email-link")) {
      return;
    }

    openContactDetailsDialog(selected);
  }

  function handleTenancyDetailsClick(event) {
    const target = event.target;
    if (!(target instanceof HTMLElement)) {
      return;
    }

    // Phone/email links act on their own; they must not also open Edit Tenancy.
    if (typeof target.closest === "function"
      && (target.closest(".contact-phone-link") || target.closest(".contact-email-link"))) {
      if (typeof event.stopPropagation === "function") {
        event.stopPropagation();
      }
      return;
    }

    // Handle per-tenancy list actions. The whole tile is clickable, so resolve the nearest action host.
    const actionHost = (typeof target.closest === "function" && target.closest("[data-tenancy-list-action]")) || target;
    const listAction = actionHost.getAttribute("data-tenancy-list-action");
    if (listAction) {
      const tenancyId = String(actionHost.getAttribute("data-tenancy-id") || "").trim();
      // Resolve the owning building so All Buildings mode edits the right record.
      const building = findBuildingByTenancyId(tenancyId) || findBuildingById(activeBuildingId);
      if (!building) {
        return;
      }

      const tenancy = getTenancyById(building, tenancyId);
      if (!tenancy) {
        return;
      }

      if (listAction === "edit") {
        openTenancyForm("edit", tenancy);
        return;
      }

      if (listAction === "archive") {
        const shouldArchive = window.confirm("Archive this tenancy? It will be removed from Current and kept in History.");
        if (!shouldArchive) {
          return;
        }
        const now = new Date().toISOString();
        const archivedEntry = createArchivedTenancyRecord(tenancy, now);
        const remaining = getAllTenanciesForBuilding(building).filter(function (t) {
          return String(t.id || "") !== tenancyId;
        });
        const history = Array.isArray(building.tenancyHistory) ? building.tenancyHistory : [];
        const updated = {
          ...building,
          tenancy: remaining[0] || null,
          tenancies: remaining,
          tenancyHistory: history.concat(archivedEntry),
          status: remaining.length === 0 ? "Vacant" : building.status,
          lastUpdated: now,
        };
        window.BuildingStorage.updateBuilding(updated);
        renderBuildings();
        openCurrentTenancyView();
      }
      return;
    }

    if (!target.closest(".tenancy-company-link")) {
      return;
    }

    openCompaniesView();
  }

  function handleModuleContentClick(event) {
    const target = event.target;
    if (!(target instanceof HTMLElement)) {
      return;
    }

    if (!target.closest(".current-tenant-link")) {
      return;
    }

    openCurrentTenancyView(activeBuildingId);
  }

  function returnToScheduleDetails(context) {
    if (!context || !context.buildingId || !context.scheduleItemId) {
      return;
    }

    const filterBuildingId = Object.prototype.hasOwnProperty.call(context, "filterBuildingId")
      ? context.filterBuildingId
      : context.buildingId;
    setCurrentPropertyId(filterBuildingId);
    openScheduleView("");
    openScheduleDetailsDialog(context.buildingId, context.scheduleItemId);
  }

  // Retained for the contact form and Schedule assignment return paths.
  function handleContactsBack() {
    if (contactAssignmentContext) {
      const context = contactAssignmentContext;
      setContactFormAssignmentContext(null);
      returnToScheduleDetails(context);
      return;
    }

    if (contactFormCard.style.display === "block") {
      if (contactReturnContext) {
        const context = contactReturnContext;
        contactReturnContext = null;
        returnToScheduleDetails(context);
        return;
      }
      setCurrentPropertyId(contactFormFilterBuildingId);
      openContactsView();
      return;
    }

    openContactsView();
  }

  function handleCompaniesBack() {
    openContactsView();
  }

  function handleCancelTenancy() {
    // Back discards unsaved form edits and returns to the canonical tenancy list.
    setCurrentPropertyId(tenancyFormFilterBuildingId);
    openCurrentTenancyView();
  }

  function handleTenancyTabCurrent() {
    activeTenancyTab = "current";
    renderCurrentTenancyPage();
  }

  function handleTenancyTabHistory() {
    activeTenancyTab = "history";
    renderCurrentTenancyPage();
  }

  function handleContactSearch() {
    contactsSearchQuery = String(contactsSearch.value || "");
    renderContactSectionState("list");
  }

  function handleContactsRelationshipFilterChange() {
    const value = String(contactsRelationshipFilter ? contactsRelationshipFilter.value : "").trim();
    contactsRelationshipFilterValue = CONTACT_RELATIONSHIP_TYPES.indexOf(value) === -1 ? "" : value;
    renderContactSectionState("list");
  }

  function handleAddDocument() {
    openDocumentForm("add", null);
  }

  function handleLeaseCategoryFilterChange() {
    leaseCategoryFilterValue = mapToFixedDocumentCategory(leaseCategoryFilter ? leaseCategoryFilter.value : "");
    renderLeasePage();
  }

  function handleLeaseRelatedToFilterChange() {
    const value = String(leaseRelatedToFilter ? leaseRelatedToFilter.value : "").trim();
    leaseRelatedToFilterValue = value === "Property" || value === "Tenancy" ? value : "";
    renderLeasePage();
  }

  function handleLeaseSortChange() {
    leaseSortValue = leaseSortSelect && leaseSortSelect.value === "oldest" ? "oldest" : "newest";
    renderLeasePage();
  }

  function handleLeaseSearch() {
    leaseSearchQuery = String(leaseSearch.value || "");
    renderLeasePage();
  }

  function activateDocumentRegisterRow(target, row) {
    const entry = findDocumentRegisterEntry(
      row.getAttribute("data-document-register-building-id") || "",
      row.getAttribute("data-document-register-id") || "",
      row.getAttribute("data-document-register-source") || "building"
    );
    if (!entry) {
      return;
    }

    if (target.closest("[data-document-register-edit=\"true\"]")) {
      openDocumentForm("edit", entry);
      return;
    }

    openOrDownloadLeaseDocument(entry.record, false);
  }

  function handleLeaseCategoryGridClick(event) {
    const target = event.target;
    if (!(target instanceof HTMLElement)) {
      return;
    }

    const registerRow = target.closest("[data-document-register-id]");
    if (!registerRow) {
      return;
    }

    if (target.closest("[data-document-register-edit=\"true\"]")) {
      event.stopPropagation();
    }

    activateDocumentRegisterRow(target, registerRow);
  }

  function handleDocumentRegisterKeydown(event) {
    if (event.key !== "Enter" && event.key !== " ") {
      return;
    }
    const target = event.target;
    if (!(target instanceof HTMLElement)) {
      return;
    }
    const row = target.closest("[data-document-register-id]");
    if (!row) {
      return;
    }

    event.preventDefault();
    if (target.closest("[data-document-register-edit=\"true\"]")) {
      event.stopPropagation();
    }

    activateDocumentRegisterRow(target, row);
  }

  function openInlineMasterTemplateCreateDialog() {
    return new Promise(function (resolve) {
      const backdrop = window.document.createElement("div");
      backdrop.className = "template-delete-modal-backdrop app-modal-backdrop-nested";

      const dialog = window.document.createElement("div");
      dialog.className = "template-delete-modal template-master-create-modal";
      dialog.setAttribute("role", "dialog");
      dialog.setAttribute("aria-modal", "true");
      dialog.setAttribute("aria-labelledby", "template-master-create-title");

      dialog.innerHTML = `
        <h3 id="template-master-create-title">Add Master Template</h3>
        <form class="template-master-create-form">
          <label>
            <span>Name</span>
            <input name="name" type="text" required />
          </label>
          <label>
            <span>Description (Optional)</span>
            <textarea name="description" rows="2" placeholder="Short template description"></textarea>
          </label>
          <label>
            <span>Category</span>
            <select name="category">${TEMPLATE_CATEGORY_OPTIONS.map(function (option) {
              return `<option value="${option}">${option}</option>`;
            }).join("")}</select>
          </label>
          <label>
            <span>Default Frequency</span>
            <select name="defaultFrequency">${TEMPLATE_FREQUENCY_OPTIONS.map(function (option) {
              return `<option value="${option}">${option}</option>`;
            }).join("")}</select>
          </label>
          <div class="template-delete-modal-actions">
            <button class="btn btn-secondary" type="button" data-template-master-create-action="cancel">Cancel</button>
            <button class="btn btn-primary" type="submit">Save Template</button>
          </div>
        </form>
      `;

      backdrop.appendChild(dialog);
      window.document.body.appendChild(backdrop);

      function closeWith(template) {
        window.document.removeEventListener("keydown", handleEscape);
        backdrop.remove();
        resolve(template || null);
      }

      function handleEscape(event) {
        if (event.key === "Escape") {
          closeWith(null);
        }
      }

      window.document.addEventListener("keydown", handleEscape);

      backdrop.addEventListener("click", function (event) {
        if (event.target === backdrop) {
          closeWith(null);
        }
      });

      const form = dialog.querySelector(".template-master-create-form");
      if (form instanceof HTMLFormElement) {
        form.addEventListener("submit", function (event) {
          event.preventDefault();
          const formData = new FormData(form);
          const payload = normalizeTemplateRecord({
            id: window.BuildingStorage.createId(),
            name: String(formData.get("name") || "").trim(),
            description: String(formData.get("description") || "").trim(),
            category: String(formData.get("category") || "General").trim(),
            defaultFrequency: String(formData.get("defaultFrequency") || "Annual").trim(),
            nextDueDate: "",
            defaultReminderPeriod: "",
            suggestedDocuments: [],
            defaultNotes: "",
            active: "Yes",
            defaultChecked: false,
            createdDate: new Date().toISOString(),
            lastUpdated: new Date().toISOString(),
          });

          if (!payload.name) {
            const nameInput = form.elements.namedItem("name");
            if (nameInput instanceof HTMLInputElement) {
              nameInput.reportValidity();
            }
            return;
          }

          upsertTemplate(payload);
          closeWith(payload);
        });
      }

      dialog.addEventListener("click", function (event) {
        const target = event.target;
        if (!(target instanceof HTMLElement)) {
          return;
        }

        const action = target.getAttribute("data-template-master-create-action");
        if (action === "cancel") {
          closeWith(null);
        }
      });
    });
  }

  function openInlineMasterTemplateEditDialog(template) {
    return new Promise(function (resolve) {
      if (!template) {
        resolve(null);
        return;
      }

      const backdrop = window.document.createElement("div");
      backdrop.className = "template-delete-modal-backdrop app-modal-backdrop-nested";

      const dialog = window.document.createElement("div");
      dialog.className = "template-delete-modal template-master-create-modal";
      dialog.setAttribute("role", "dialog");
      dialog.setAttribute("aria-modal", "true");
      dialog.setAttribute("aria-labelledby", "template-master-edit-title");

      dialog.innerHTML = `
        <h3 id="template-master-edit-title">Edit Master Template</h3>
        <form class="template-master-create-form">
          <label>
            <span>Name</span>
            <input name="name" type="text" value="${escapeHtml(template.name)}" required />
          </label>
          <label>
            <span>Category</span>
            <select name="category">${TEMPLATE_CATEGORY_OPTIONS.map(function (option) {
              return `<option value="${option}"${option === template.category ? " selected" : ""}>${option}</option>`;
            }).join("")}</select>
          </label>
          <label>
            <span>Default Frequency</span>
            <select name="defaultFrequency">${TEMPLATE_FREQUENCY_OPTIONS.map(function (option) {
              return `<option value="${option}"${option === template.defaultFrequency ? " selected" : ""}>${option}</option>`;
            }).join("")}</select>
          </label>
          <label>
            <span>Default Reminder</span>
            <input name="defaultReminderPeriod" type="text" value="${escapeHtml(template.defaultReminderPeriod || "")}" placeholder="e.g. 30 days before" />
          </label>
          <label>
            <span>Suggested Documents</span>
            <textarea name="suggestedDocuments" rows="2" placeholder="Comma separated">${escapeHtml(getSuggestedDocumentsText(template.suggestedDocuments))}</textarea>
          </label>
          <label>
            <span>Default Notes</span>
            <textarea name="defaultNotes" rows="2">${escapeHtml(template.defaultNotes || "")}</textarea>
          </label>
          <div class="template-delete-modal-actions">
            <button class="btn btn-secondary" type="button" data-template-master-edit-action="cancel">Cancel</button>
            <button class="btn btn-primary" type="submit">Save Changes</button>
          </div>
        </form>
      `;

      backdrop.appendChild(dialog);
      window.document.body.appendChild(backdrop);

      function closeWith(updated) {
        window.document.removeEventListener("keydown", handleEscape);
        backdrop.remove();
        resolve(updated || null);
      }

      function handleEscape(event) {
        if (event.key === "Escape") {
          closeWith(null);
        }
      }

      window.document.addEventListener("keydown", handleEscape);

      backdrop.addEventListener("click", function (event) {
        if (event.target === backdrop) {
          closeWith(null);
        }
      });

      dialog.addEventListener("click", function (event) {
        const target = event.target;
        if (!(target instanceof HTMLElement)) {
          return;
        }

        const action = target.getAttribute("data-template-master-edit-action");
        if (action === "cancel") {
          closeWith(null);
        }
      });

      const form = dialog.querySelector(".template-master-create-form");
      if (form instanceof HTMLFormElement) {
        form.addEventListener("submit", function (event) {
          event.preventDefault();
          const formData = new FormData(form);
          const updated = normalizeTemplateRecord({
            ...template,
            name: String(formData.get("name") || "").trim(),
            category: String(formData.get("category") || template.category || "General").trim(),
            defaultFrequency: String(formData.get("defaultFrequency") || template.defaultFrequency || "Annual").trim(),
            defaultReminderPeriod: String(formData.get("defaultReminderPeriod") || "").trim(),
            suggestedDocuments: String(formData.get("suggestedDocuments") || "").trim(),
            defaultNotes: String(formData.get("defaultNotes") || "").trim(),
            lastUpdated: new Date().toISOString(),
          });

          if (!updated.name) {
            const nameInput = form.elements.namedItem("name");
            if (nameInput instanceof HTMLInputElement) {
              nameInput.reportValidity();
            }
            return;
          }

          upsertTemplate(updated);
          closeWith(updated);
        });
      }
    });
  }

  function confirmMasterTemplateDeleteDialog() {
    return new Promise(function (resolve) {
      const backdrop = window.document.createElement("div");
      backdrop.className = "template-delete-modal-backdrop app-modal-backdrop-confirm";

      const dialog = window.document.createElement("div");
      dialog.className = "template-delete-modal";
      dialog.setAttribute("role", "dialog");
      dialog.setAttribute("aria-modal", "true");
      dialog.setAttribute("aria-labelledby", "master-template-delete-title");

      dialog.innerHTML = `
        <h3 id="master-template-delete-title">Delete Master Template</h3>
        <p>Are you sure you want to permanently delete this Master Template?</p>
        <p>This will not affect any Property Templates that have already been created from it.</p>
        <div class="template-delete-modal-actions">
          <button class="btn btn-secondary" type="button" data-master-template-delete-action="cancel">Cancel</button>
          <button class="btn template-delete-btn" type="button" data-master-template-delete-action="delete">Delete</button>
        </div>
      `;

      backdrop.appendChild(dialog);
      window.document.body.appendChild(backdrop);

      function closeWith(confirmed) {
        window.document.removeEventListener("keydown", handleEscape);
        backdrop.remove();
        resolve(Boolean(confirmed));
      }

      function handleEscape(event) {
        if (event.key === "Escape") {
          closeWith(false);
        }
      }

      window.document.addEventListener("keydown", handleEscape);

      backdrop.addEventListener("click", function (event) {
        if (event.target === backdrop) {
          closeWith(false);
        }
      });

      dialog.addEventListener("click", function (event) {
        const target = event.target;
        if (!(target instanceof HTMLElement)) {
          return;
        }

        const action = target.getAttribute("data-master-template-delete-action");
        if (action === "cancel") {
          closeWith(false);
          return;
        }
        if (action === "delete") {
          closeWith(true);
        }
      });
    });
  }

  function showMasterTemplatePickerDialog(building) {
    return new Promise(function (resolve) {
      const assignedMasterTemplateIds = getAssignedMasterTemplateIdsForBuilding(building);
      const initialSelectedIds = new Set(Array.from(assignedMasterTemplateIds));
      const selectedIds = new Set(Array.from(assignedMasterTemplateIds));
      let searchQuery = "";
      let createdTemplateId = "";

      const backdrop = window.document.createElement("div");
      backdrop.className = "template-delete-modal-backdrop";

      const dialog = window.document.createElement("div");
      dialog.className = "template-delete-modal template-picker-modal";
      dialog.setAttribute("role", "dialog");
      dialog.setAttribute("aria-modal", "true");
      dialog.setAttribute("aria-labelledby", "template-picker-title");

      dialog.innerHTML = `
        <div class="template-picker-header">
          <h3 id="template-picker-title">Add Templates To Property</h3>
          <button class="template-picker-close" type="button" aria-label="Close" data-template-picker-action="close">&times;</button>
        </div>
        <div class="template-picker-toolbar">
          <button class="btn btn-secondary btn-small" type="button" data-template-picker-action="new-master">+ Add Master Template</button>
        </div>
        <label class="template-picker-search-wrap">
          <span class="visually-hidden">Search templates</span>
          <input id="template-picker-search" class="search-input template-picker-search" type="search" placeholder="Search by template name, category, or description" />
        </label>
        <div class="template-picker-bulk-actions">
          <button class="btn btn-secondary btn-small" type="button" data-template-picker-action="select-all">Select All</button>
          <button class="btn btn-secondary btn-small" type="button" data-template-picker-action="clear-all">Clear All</button>
        </div>
        <div class="template-picker-list" data-template-picker-list></div>
        <div class="template-delete-modal-actions template-picker-actions">
          <button class="btn btn-primary" type="button" data-template-picker-action="add">Update Property Templates</button>
        </div>
      `;

      backdrop.appendChild(dialog);
      window.document.body.appendChild(backdrop);

      const listContainer = dialog.querySelector("[data-template-picker-list]");
      const searchInput = dialog.querySelector("#template-picker-search");
      const commitButton = dialog.querySelector('[data-template-picker-action="add"]');

      function selectionChanged() {
        if (selectedIds.size !== initialSelectedIds.size) {
          return true;
        }

        for (const id of selectedIds) {
          if (!initialSelectedIds.has(id)) {
            return true;
          }
        }

        return false;
      }

      function renderCommitButtonState() {
        if (commitButton instanceof HTMLButtonElement) {
          commitButton.disabled = !selectionChanged();
        }
      }

      function getFilteredTemplates() {
        // Archived masters stay listed only while already assigned, so they can be
        // unassigned but never newly assigned.
        const templates = getScheduledItemTemplates().filter(function (template) {
          return isMasterTemplateActive(template) || initialSelectedIds.has(template.id);
        });

        if (!searchQuery) {
          return templates;
        }

        const query = normalizeText(searchQuery);
        return templates.filter(function (template) {
          return normalizeText(template.name).includes(query)
            || normalizeText(template.category).includes(query)
            || normalizeText(template.description).includes(query);
        });
      }

      function renderList() {
        const filtered = getFilteredTemplates();
        if (!(listContainer instanceof HTMLElement)) {
          return;
        }

        if (createdTemplateId) {
          selectedIds.add(createdTemplateId);
          createdTemplateId = "";
        }

        if (filtered.length === 0) {
          listContainer.innerHTML = '<p class="module-placeholder">No templates match your search.</p>';
          return;
        }

        listContainer.innerHTML = filtered.map(function (template) {
          const checked = selectedIds.has(template.id) ? " checked" : "";
          const archivedLabel = isMasterTemplateActive(template)
            ? ""
            : '<span class="template-picker-item-archived">Archived</span>';
          return `
            <article class="template-picker-item" data-template-id="${template.id}">
              <input type="checkbox" value="${template.id}"${checked} />
              <span class="template-picker-item-content">
                <strong>${escapeHtml(template.name)}</strong>
                <span>${escapeHtml(template.category)}</span>
                <span>${escapeHtml(template.defaultFrequency)}</span>
                ${archivedLabel}
              </span>
              <span class="template-picker-item-actions">
                <button class="btn btn-secondary btn-small" type="button" data-template-picker-template-action="edit" data-template-id="${template.id}">Edit</button>
              </span>
            </article>
          `;
        }).join("");

        renderCommitButtonState();
      }

      function closeWith(selected) {
        window.document.removeEventListener("keydown", handleEscape);
        backdrop.remove();
        resolve(selected);
      }

      function handleEscape(event) {
        if (event.key === "Escape") {
          closeWith(null);
        }
      }

      window.document.addEventListener("keydown", handleEscape);

      backdrop.addEventListener("click", function (event) {
        if (event.target === backdrop) {
          closeWith(null);
        }
      });

      dialog.addEventListener("change", function (event) {
        const target = event.target;
        if (!(target instanceof HTMLInputElement)) {
          return;
        }

        if (target.type === "checkbox") {
          const templateId = String(target.value || "");
          if (!templateId) {
            return;
          }

          if (target.checked) {
            selectedIds.add(templateId);
          } else {
            selectedIds.delete(templateId);
          }

          renderCommitButtonState();
        }
      });

      if (searchInput instanceof HTMLInputElement) {
        searchInput.addEventListener("input", function () {
          searchQuery = String(searchInput.value || "").trim();
          renderList();
        });
      }

      dialog.addEventListener("click", async function (event) {
        const target = event.target;
        if (!(target instanceof HTMLElement)) {
          return;
        }

        const rowActionButton = target.closest("[data-template-picker-template-action]");
        if (rowActionButton instanceof HTMLElement) {
          const rowAction = rowActionButton.getAttribute("data-template-picker-template-action") || "";
          const templateId = rowActionButton.getAttribute("data-template-id") || "";
          if (!templateId) {
            return;
          }

          if (rowAction === "edit") {
            const template = findMasterTemplateById(templateId);
            if (!template) {
              return;
            }
            const updated = await openInlineMasterTemplateEditDialog(template);
            if (!updated) {
              return;
            }
            renderList();
            return;
          }

        }

        const action = target.getAttribute("data-template-picker-action");
        if (!action) {
          return;
        }

        if (action === "close") {
          closeWith(null);
          return;
        }

        if (action === "add") {
          const removedMasterTemplateIds = Array.from(initialSelectedIds).filter(function (id) {
            return !selectedIds.has(id);
          });

          if (removedMasterTemplateIds.length > 0) {
            const masterTemplatesById = new Map(getScheduledItemTemplates().map(function (template) {
              return [String(template.id || "").trim(), template];
            }));
            const scheduleItemsToRemove = removedMasterTemplateIds.map(function (templateId) {
              const template = masterTemplatesById.get(String(templateId || "").trim());
              return String(template && template.name ? template.name : "").trim();
            }).filter(function (name) {
              return Boolean(name);
            });

            const shouldRemove = await confirmPropertyTemplateUnassignDialog({
              buildingName: String(building && building.buildingName ? building.buildingName : "").trim(),
              scheduleItemNames: scheduleItemsToRemove,
            });
            if (!shouldRemove) {
              return;
            }
          }

          closeWith(Array.from(selectedIds));
          return;
        }

        if (action === "select-all") {
          getFilteredTemplates().forEach(function (template) {
            selectedIds.add(template.id);
          });
          renderList();
          return;
        }

        if (action === "clear-all") {
          selectedIds.clear();
          renderList();
          return;
        }

        if (action === "new-master") {
          const created = await openInlineMasterTemplateCreateDialog();
          if (!created) {
            return;
          }
          createdTemplateId = created.id;
          renderList();
        }
      });

      renderList();
      renderCommitButtonState();
    });
  }

  function confirmPropertyTemplateUnassignDialog(options) {
    return new Promise(function (resolve) {
      const backdrop = window.document.createElement("div");
      backdrop.className = "template-delete-modal-backdrop app-modal-backdrop-confirm";

      const dialog = window.document.createElement("div");
      dialog.className = "template-delete-modal";
      dialog.setAttribute("role", "dialog");
      dialog.setAttribute("aria-modal", "true");
      dialog.setAttribute("aria-labelledby", "template-unassign-modal-title");

      const buildingName = String(options && options.buildingName ? options.buildingName : "").trim();
      const scheduleItemNames = Array.isArray(options && options.scheduleItemNames)
        ? options.scheduleItemNames.filter(function (name) {
          return Boolean(String(name || "").trim());
        })
        : [];
      const listMarkup = scheduleItemNames.length > 0
        ? `
          <p>You are about to remove the following calendar items from ${escapeHtml(buildingName || "this property")}:</p>
          <ul class="template-unassign-list">
            ${scheduleItemNames.map(function (name) {
              return `<li>${escapeHtml(name)}</li>`;
            }).join("")}
          </ul>
        `
        : '<p>You are about to remove one or more calendar items from this property.</p>';

      dialog.innerHTML = `
        <h3 id="template-unassign-modal-title">Remove Calendar Items?</h3>
        ${listMarkup}
        <p>Their historical completion records and associated history will be retained.</p>
        <p>Do you wish to proceed?</p>
        <div class="template-delete-modal-actions">
          <button class="btn btn-secondary" type="button" data-template-unassign-action="cancel">Cancel</button>
          <button class="btn template-delete-btn" type="button" data-template-unassign-action="remove">Remove Calendar Items</button>
        </div>
      `;

      backdrop.appendChild(dialog);
      window.document.body.appendChild(backdrop);

      function closeWith(confirmed) {
        window.document.removeEventListener("keydown", handleEscape);
        backdrop.remove();
        resolve(Boolean(confirmed));
      }

      function handleEscape(event) {
        if (event.key === "Escape") {
          closeWith(false);
        }
      }

      window.document.addEventListener("keydown", handleEscape);

      backdrop.addEventListener("click", function (event) {
        if (event.target === backdrop) {
          closeWith(false);
        }
      });

      dialog.addEventListener("click", function (event) {
        const target = event.target;
        if (!(target instanceof HTMLElement)) {
          return;
        }

        const action = target.getAttribute("data-template-unassign-action");
        if (action === "cancel") {
          closeWith(false);
          return;
        }

        if (action === "remove") {
          closeWith(true);
        }
      });
    });
  }

  function removeMasterTemplatesFromBuilding(building, masterTemplateIds) {
    if (!building) {
      return null;
    }

    const normalized = ensureWorkflowCollections(building);
    const removeMasterIds = new Set((masterTemplateIds || []).map(function (id) {
      return String(id || "").trim();
    }).filter(function (id) {
      return Boolean(id);
    }));

    if (removeMasterIds.size === 0) {
      return normalized;
    }

    const templatesToRemove = getPropertyTemplates(normalized).filter(function (template) {
      return removeMasterIds.has(String(template.masterTemplateId || "").trim());
    });
    if (templatesToRemove.length === 0) {
      return normalized;
    }

    const templateIdsToRemove = new Set(templatesToRemove.map(function (template) {
      return template.id;
    }));
    const scheduleItemIdsToRemove = new Set((normalized.scheduleItems || []).filter(function (item) {
      return templateIdsToRemove.has(String(item.propertyTemplateId || item.templateId || "").trim());
    }).map(function (item) {
      return item.id;
    }));

    return {
      ...normalized,
      propertyTemplates: getPropertyTemplates(normalized).filter(function (template) {
        return !templateIdsToRemove.has(template.id);
      }),
      scheduleItems: (normalized.scheduleItems || []).filter(function (item) {
        return !scheduleItemIdsToRemove.has(item.id);
      }),
      historyRecords: Array.isArray(normalized.historyRecords) ? normalized.historyRecords.slice() : [],
      lastUpdated: new Date().toISOString(),
    };
  }

  function showPropertyTemplateEditorDialog(building, propertyTemplateIds) {
    return new Promise(function (resolve) {
      const sourceTemplates = getScheduledItemTemplates().filter(function (template) {
        return (propertyTemplateIds || []).includes(template.id);
      });

      if (sourceTemplates.length === 0) {
        resolve(null);
        return;
      }

      const backdrop = window.document.createElement("div");
      backdrop.className = "template-delete-modal-backdrop";

      const dialog = window.document.createElement("div");
      dialog.className = "template-delete-modal template-property-editor-modal";
      dialog.setAttribute("role", "dialog");
      dialog.setAttribute("aria-modal", "true");
      dialog.setAttribute("aria-labelledby", "property-template-editor-title");

      dialog.innerHTML = `
        <h3 id="property-template-editor-title">Add Templates To Calendar</h3>
        <p>Choose how each selected template should be scheduled for this property.</p>
        <form class="template-property-editor-form">
          <div class="template-property-editor-list">
            ${sourceTemplates.map(function (template) {
              const initialDueDate = String(template.initialDueDate || template.nextDueDate || "").trim();
              const customDueDate = template.defaultFrequency === "Custom"
                ? String(template.nextDueDate || initialDueDate).trim()
                : "";
              return `
                <article class="template-property-editor-item" data-property-template-id="${template.id}">
                  <h4>${escapeHtml(template.name)}</h4>
                  <label>Frequency<select data-field="defaultFrequency">${TEMPLATE_FREQUENCY_OPTIONS.map(function (option) {
                    return `<option value="${option}"${option === template.defaultFrequency ? " selected" : ""}>${option}</option>`;
                  }).join("")}</select></label>
                  <label data-start-date-wrap>Start Date<input type="date" data-field="initialDueDate" value="${escapeHtml(initialDueDate)}" /></label>
                  <label data-custom-date-wrap style="display: ${template.defaultFrequency === "Custom" ? "grid" : "none"};">Custom Calendar Date<input type="date" data-field="customDueDate" value="${escapeHtml(customDueDate)}" /></label>
                </article>
              `;
            }).join("")}
          </div>
          <div class="template-delete-modal-actions">
            <button class="btn btn-secondary" type="button" data-property-template-editor-action="cancel">Cancel</button>
            <button class="btn btn-primary" type="submit">Add to Calendar</button>
          </div>
        </form>
      `;

      backdrop.appendChild(dialog);
      window.document.body.appendChild(backdrop);

      function closeWith(result) {
        window.document.removeEventListener("keydown", handleEscape);
        backdrop.remove();
        resolve(result);
      }

      function handleEscape(event) {
        if (event.key === "Escape") {
          closeWith(null);
        }
      }

      window.document.addEventListener("keydown", handleEscape);

      backdrop.addEventListener("click", function (event) {
        if (event.target === backdrop) {
          closeWith(null);
        }
      });

      dialog.addEventListener("click", function (event) {
        const target = event.target;
        if (!(target instanceof HTMLElement)) {
          return;
        }

        const action = target.getAttribute("data-property-template-editor-action");
        if (action === "cancel") {
          closeWith(null);
        }
      });

      const form = dialog.querySelector(".template-property-editor-form");
      if (form instanceof HTMLFormElement) {
        function updateSchedulingControls(card) {
          if (!(card instanceof HTMLElement)) {
            return;
          }

          const frequencyInput = card.querySelector('[data-field="defaultFrequency"]');
          const startDateWrap = card.querySelector("[data-start-date-wrap]");
          const customDateWrap = card.querySelector("[data-custom-date-wrap]");
          const customDateInput = card.querySelector('[data-field="customDueDate"]');

          if (!(frequencyInput instanceof HTMLSelectElement)) {
            return;
          }

          const isCustom = frequencyInput.value === "Custom";
          if (startDateWrap instanceof HTMLElement) {
            startDateWrap.style.display = isCustom ? "none" : "grid";
          }
          if (customDateWrap instanceof HTMLElement) {
            customDateWrap.style.display = isCustom ? "grid" : "none";
          }
          if (customDateInput instanceof HTMLInputElement) {
            customDateInput.required = isCustom;
          }
          const startDateInput = card.querySelector('[data-field="initialDueDate"]');
          if (startDateInput instanceof HTMLInputElement) {
            startDateInput.required = !isCustom;
          }
        }

        Array.from(form.querySelectorAll("[data-property-template-id]")).forEach(function (card) {
          updateSchedulingControls(card);
        });

        form.addEventListener("change", function (event) {
          const target = event.target;
          if (!(target instanceof HTMLElement)) {
            return;
          }

          if (!target.matches('[data-field="defaultFrequency"]')) {
            return;
          }

          const card = target.closest("[data-property-template-id]");
          updateSchedulingControls(card);
        });

        form.addEventListener("submit", function (event) {
          event.preventDefault();

          const updates = sourceTemplates.map(function (template) {
            const card = form.querySelector(`[data-property-template-id="${template.id}"]`);
            if (!(card instanceof HTMLElement)) {
              return template;
            }

            function getValue(field) {
              const input = card.querySelector(`[data-field="${field}"]`);
              if (input instanceof HTMLInputElement || input instanceof HTMLTextAreaElement || input instanceof HTMLSelectElement) {
                return String(input.value || "").trim();
              }
              return "";
            }

            const selectedFrequency = getValue("defaultFrequency") || template.defaultFrequency;
            const startDate = getValue("initialDueDate") || template.initialDueDate || template.nextDueDate;
            const customScheduleDate = getValue("customDueDate");
            const fallbackDate = new Date().toISOString().slice(0, 10);
            const resolvedDueDate = (selectedFrequency === "Custom"
              ? (customScheduleDate || startDate)
              : startDate) || fallbackDate;

            return normalizePropertyTemplateRecord({
              ...template,
              defaultFrequency: selectedFrequency,
              initialDueDate: resolvedDueDate,
              nextDueDate: resolvedDueDate,
              propertyId: String(building.id || "").trim(),
              customRecurringDates: selectedFrequency === "Custom" ? [] : normalizeRecurringDateEntries(template.customRecurringDates),
              active: "Yes",
              lastUpdated: new Date().toISOString(),
            });
          });

          closeWith(updates);
        });
      }
    });
  }

  function addMasterTemplatesToBuilding(building, masterTemplateIds, templateSettings) {
    const targetBuildingId = String(building && building.id ? building.id : activeBuildingId || "").trim();
    if (!building) {
      return null;
    }

    const normalized = ensureWorkflowCollections(building);
    const existing = getPropertyTemplates(normalized);
    const existingByMasterTemplateId = new Map(existing.map(function (template) {
      return [String(template.masterTemplateId || "").trim(), template];
    }));
    const scheduleItemsByTemplateId = new Map((normalized.scheduleItems || []).map(function (item) {
      const propertyTemplateId = String(item.propertyTemplateId || item.templateId || "").trim();
      return [propertyTemplateId, item];
    }));
    const assignedMasterTemplateIds = getAssignedMasterTemplateIdsForBuilding(normalized);
    const settingsByTemplateId = new Map((templateSettings || []).map(function (entry) {
      return [String(entry.templateId || entry.id || ""), entry];
    }));

    const fallbackDueDate = new Date().toISOString().slice(0, 10);
    const templatesToCreate = [];
    const templatesToUpdate = [];
    const scheduleItemsToCreate = [];

    (masterTemplateIds || []).forEach(function (masterTemplateId) {
      const normalizedMasterTemplateId = String(masterTemplateId || "").trim();
      if (!normalizedMasterTemplateId || assignedMasterTemplateIds.has(normalizedMasterTemplateId)) {
        return;
      }

      const master = findMasterTemplateById(masterTemplateId);
      if (!master) {
        return;
      }

      const existingPropertyTemplate = existingByMasterTemplateId.get(normalizedMasterTemplateId) || null;
      // An archived master template can never start a new assignment.
      if (!isMasterTemplateActive(master) && !existingPropertyTemplate) {
        return;
      }

      const settings = settingsByTemplateId.get(master.id) || {};
      const resolvedFrequency = String(settings.defaultFrequency || master.defaultFrequency || "Annual").trim() || "Annual";
      const resolvedInitialDueDate = String(settings.initialDueDate || settings.nextDueDate || master.nextDueDate || "").trim() || fallbackDueDate;
      const resolvedNextDueDate = String(settings.nextDueDate || resolvedInitialDueDate).trim() || resolvedInitialDueDate || fallbackDueDate;

      if (existingPropertyTemplate) {
        const repairedTemplate = normalizePropertyTemplateRecord({
          ...existingPropertyTemplate,
          propertyId: targetBuildingId,
          active: "Yes",
          name: String(settings.name || existingPropertyTemplate.name || master.name || "").trim(),
          category: String(settings.category || existingPropertyTemplate.category || master.category || "General").trim() || "General",
          defaultFrequency: resolvedFrequency,
          initialDueDate: resolvedInitialDueDate,
          nextDueDate: resolvedNextDueDate,
          customRecurringDates: resolvedFrequency === "Custom"
            ? normalizeRecurringDateEntries(settings.customRecurringDates || existingPropertyTemplate.customRecurringDates || master.customRecurringDates)
            : normalizeRecurringDateEntries(settings.customRecurringDates || existingPropertyTemplate.customRecurringDates || master.customRecurringDates),
          defaultReminderPeriod: String(settings.defaultReminderPeriod || existingPropertyTemplate.defaultReminderPeriod || master.defaultReminderPeriod || "").trim(),
          preferredCompanyId: String(settings.preferredCompanyId || existingPropertyTemplate.preferredCompanyId || master.preferredCompanyId || "").trim(),
          preferredContactId: String(settings.preferredContactId || existingPropertyTemplate.preferredContactId || master.preferredContactId || "").trim(),
          defaultNotes: String(settings.defaultNotes || existingPropertyTemplate.defaultNotes || master.defaultNotes || "").trim(),
          suggestedDocuments: normalizeSuggestedDocuments(settings.suggestedDocuments || existingPropertyTemplate.suggestedDocuments || master.suggestedDocuments),
          lastUpdated: new Date().toISOString(),
        });

        templatesToUpdate.push(repairedTemplate);

        if (!scheduleItemsByTemplateId.has(String(repairedTemplate.id || ""))) {
          scheduleItemsToCreate.push(createScheduleItemFromPropertyTemplate(repairedTemplate, targetBuildingId));
        }
        return;
      }

      const createdTemplate = createPropertyTemplateFromMaster(master, {
        propertyId: targetBuildingId,
        active: "Yes",
        defaultFrequency: resolvedFrequency,
        initialDueDate: resolvedInitialDueDate,
        nextDueDate: resolvedNextDueDate,
        customRecurringDates: normalizeRecurringDateEntries(settings.customRecurringDates || master.customRecurringDates),
        defaultReminderPeriod: String(settings.defaultReminderPeriod || master.defaultReminderPeriod || "").trim(),
        preferredCompanyId: String(settings.preferredCompanyId || master.preferredCompanyId || "").trim(),
        preferredContactId: String(settings.preferredContactId || master.preferredContactId || "").trim(),
        defaultNotes: String(settings.defaultNotes || master.defaultNotes || "").trim(),
        suggestedDocuments: normalizeSuggestedDocuments(settings.suggestedDocuments || master.suggestedDocuments),
      });

      templatesToCreate.push(createdTemplate);
      scheduleItemsToCreate.push(createScheduleItemFromPropertyTemplate(createdTemplate, targetBuildingId));
    });

    if (templatesToCreate.length === 0 && templatesToUpdate.length === 0 && scheduleItemsToCreate.length === 0) {
      return {
        building: normalized,
        addedTemplateIds: [],
      };
    }

    const updatesByTemplateId = new Map(templatesToUpdate.map(function (template) {
      return [String(template.id || "").trim(), template];
    }));
    const mergedPropertyTemplates = existing
      .map(function (template) {
        const replacement = updatesByTemplateId.get(String(template.id || "").trim());
        return replacement || template;
      })
      .concat(templatesToCreate);

    const updated = {
      ...normalized,
      propertyTemplates: mergedPropertyTemplates,
      scheduleItems: (normalized.scheduleItems || []).concat(scheduleItemsToCreate),
      lastUpdated: new Date().toISOString(),
    };

    const rehydrated = ensureWorkflowCollections(updated);
    return {
      building: rehydrated,
      addedTemplateIds: templatesToCreate.concat(templatesToUpdate).map(function (template) {
        return template.id;
      }),
    };
  }

  function getAssignedMasterTemplateIdsForBuilding(building) {
    const normalized = ensureWorkflowCollections(building || {});
    const propertyTemplates = getPropertyTemplates(normalized);
    const templateIdsWithScheduleItems = new Set((normalized.scheduleItems || []).map(function (item) {
      return String(item.propertyTemplateId || item.templateId || "").trim();
    }).filter(function (id) {
      return Boolean(id);
    }));

    return new Set(propertyTemplates
      .filter(function (template) {
        return Boolean(String(template.masterTemplateId || "").trim())
          && templateIdsWithScheduleItems.has(String(template.id || "").trim());
      })
      .map(function (template) {
        return String(template.masterTemplateId || "").trim();
      })
      .filter(function (id) {
        return Boolean(id);
      }));
  }

  function persistBuildingWithWorkflowSync(building) {
    const normalized = ensureWorkflowCollections(building);
    window.BuildingStorage.updateBuilding(normalized);
    return normalized;
  }

  function showManageTemplatesSaveConfirmation() {
    if (!(manageTemplatesBtn instanceof HTMLButtonElement)) {
      return;
    }

    const parent = manageTemplatesBtn.parentElement;
    if (!(parent instanceof HTMLElement)) {
      return;
    }

    const existing = parent.querySelector(".schedule-details-save-confirmation");
    if (existing instanceof HTMLElement) {
      existing.remove();
    }

    const confirmation = window.document.createElement("span");
    confirmation.className = "schedule-details-save-confirmation";
    confirmation.setAttribute("role", "status");
    confirmation.setAttribute("aria-live", "polite");
    confirmation.textContent = "✓ Saved";
    parent.appendChild(confirmation);

    window.setTimeout(function () {
      if (confirmation.parentNode) {
        confirmation.remove();
      }
    }, 2400);
  }

  async function handleManageTemplatesForProperty() {
    if (!activeBuildingId) {
      alert("Select a property before managing templates for a property calendar.");
      return;
    }

    const propertyId = activeBuildingId;

    const activeBuilding = findBuildingById(propertyId);
    if (!activeBuilding) {
      return;
    }

    const selected = await showMasterTemplatePickerDialog(activeBuilding);
    if (!Array.isArray(selected)) {
      return;
    }

    const currentBuilding = findBuildingById(propertyId);
    if (!currentBuilding) {
      return;
    }

    const currentlyAssigned = getAssignedMasterTemplateIdsForBuilding(currentBuilding);
    const selectedIds = new Set((selected || []).map(function (id) {
      return String(id || "").trim();
    }).filter(function (id) {
      return Boolean(id);
    }));

    const toAdd = Array.from(selectedIds).filter(function (id) {
      return !currentlyAssigned.has(id);
    });
    const toRemove = Array.from(currentlyAssigned).filter(function (id) {
      return !selectedIds.has(id);
    });

    if (toAdd.length === 0 && toRemove.length === 0) {
      return;
    }

    let workingBuilding = ensureWorkflowCollections(currentBuilding);

    if (toRemove.length > 0) {
      const removed = removeMasterTemplatesFromBuilding(workingBuilding, toRemove);
      if (removed) {
        workingBuilding = ensureWorkflowCollections(removed);
      }
    }

    if (toAdd.length === 0) {
      persistBuildingWithWorkflowSync(workingBuilding);
      renderBuildings();
      openScheduleView(propertyId);
      showManageTemplatesSaveConfirmation();
      return;
    }

    const scheduleSettings = await showPropertyTemplateEditorDialog(workingBuilding, toAdd);
    if (!scheduleSettings || scheduleSettings.length === 0) {
      return;
    }

    const addResult = addMasterTemplatesToBuilding(workingBuilding, toAdd, scheduleSettings);
    if (!addResult || addResult.addedTemplateIds.length === 0) {
      persistBuildingWithWorkflowSync(workingBuilding);
      renderBuildings();
      openScheduleView(propertyId);
      showManageTemplatesSaveConfirmation();
      return;
    }

    persistBuildingWithWorkflowSync(addResult.building);

    renderBuildings();
    openScheduleView(propertyId);
    showManageTemplatesSaveConfirmation();
  }

  function completeScheduleItemInline(itemId, buildingId) {
    const targetBuildingId = buildingId || activeBuildingId;
    showScheduleCompleteDialog(targetBuildingId, itemId);
  }

  function getScheduleDetailsData(building, scheduleItem) {
    // Tenancy-generated items have no property template; build synthetic details data.
    if (scheduleItem.sourceType === "tenancy") {
      const tenancy = getAllTenanciesForBuilding(building).find(function (t) {
        return String(t.id || "") === String(scheduleItem.tenancyId || "");
      }) || null;
      const records = (building.historyRecords || [])
        .filter(function (record) {
          return record.scheduleItemId === scheduleItem.id && !record.revertedAt;
        })
        .sort(function (left, right) {
          return new Date(right.completedAt || right.completedDate).getTime() - new Date(left.completedAt || left.completedDate).getTime();
        });
      return {
        template: null,
        tenancy: tenancy,
        records: records,
        latestRecord: records[0] || null,
        isTenancyItem: true,
      };
    }

    const template = findPropertyTemplateById(building, scheduleItem.propertyTemplateId || scheduleItem.templateId);
    if (!template) {
      return null;
    }

    const records = (building.historyRecords || [])
      .filter(function (record) {
        return record.scheduleItemId === scheduleItem.id && !record.revertedAt;
      })
      .sort(function (left, right) {
        return new Date(right.completedAt || right.completedDate).getTime() - new Date(left.completedAt || left.completedDate).getTime();
      });

    return {
      template: template,
      tenancy: null,
      records: records,
      latestRecord: records[0] || null,
      isTenancyItem: false,
    };
  }

  function renderScheduleHistoryTable(records) {
    if (!records || records.length === 0) {
      return '<p class="module-placeholder">No completion records yet.</p>';
    }

    return `
      <div class="schedule-history-table-wrap">
        <table class="schedule-history-table">
          <thead>
            <tr>
              <th>Due Date</th>
              <th>Completed Date</th>
              <th>Completed By</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            ${records.map(function (record) {
              return `
                <tr>
                  <td>${formatDate(record.previousDueDate || record.nextDueDate)}</td>
                  <td>${formatDate(record.completedDate)}</td>
                  <td>${escapeHtml(record.completedBy || "Not recorded")}</td>
                  <td>${escapeHtml(record.notes || "")}</td>
                </tr>
              `;
            }).join("")}
          </tbody>
        </table>
      </div>
    `;
  }

  function renderSchedulePrimaryContactOptions(building, selectedContactId) {
    const contacts = getContactsForBuilding(building);
    return ['<option value="">Not set</option>']
      .concat(contacts.map(function (contact) {
        const relationship = getBuildingRelationshipForContact(building, contact);
        const selected = String(contact.id) === String(selectedContactId || "") ? " selected" : "";
        return `<option value="${contact.id}"${selected}>${escapeHtml(contact.name)} (${escapeHtml(relationship)})</option>`;
      }))
      .join("");
  }

  function readSchedulePrimaryContactId(form, formData, scheduleItem, template) {
    const fallbackValue = String(scheduleItem && scheduleItem.preferredContactId ? scheduleItem.preferredContactId : template && template.preferredContactId ? template.preferredContactId : "").trim();

    if (form && form.elements && form.elements.primaryContactId) {
      const directValue = String(form.elements.primaryContactId.value || "").trim();
      if (directValue) {
        return directValue;
      }
    }

    if (formData && typeof formData.get === "function") {
      const formValue = String(formData.get("primaryContactId") || "").trim();
      if (formValue) {
        return formValue;
      }
    }

    return fallbackValue;
  }

  function renderRecurringDateOptions(selectedValue, maxValue, includeBlank) {
    const values = [];
    if (includeBlank) {
      values.push('<option value="">Select</option>');
    }

    for (let index = 1; index <= maxValue; index += 1) {
      const selected = String(index) === String(selectedValue) ? " selected" : "";
      values.push(`<option value="${index}"${selected}>${index}</option>`);
    }

    return values.join("");
  }

  function renderRecurringDateDayOptions(selectedValue, monthNumber) {
    return renderRecurringDateOptions(selectedValue, getDaysInMonth(monthNumber), true);
  }

  function buildRecurringDateRowHtml(entry, index) {
    const dayOptions = renderRecurringDateDayOptions(entry ? entry.day : "", entry ? entry.month : 1);
    const monthOptions = MONTH_NAMES.map(function (monthName, monthIndex) {
      const monthNumber = monthIndex + 1;
      const selected = entry && Number(entry.month) === monthNumber ? " selected" : "";
      return `<option value="${monthNumber}"${selected}>${monthName}</option>`;
    }).join("");

    return `
      <article class="schedule-recurring-date-row" data-recurring-date-index="${index}">
        <label>
          Day
          <select data-recurring-date-field="day">${dayOptions}</select>
        </label>
        <label>
          Month
          <select data-recurring-date-field="month">${monthOptions}</select>
        </label>
        <button class="btn btn-secondary btn-small" type="button" data-recurring-date-action="remove">Remove</button>
      </article>
    `;
  }

  function renderRecurringDatesSection(recurringDates) {
    const dates = normalizeRecurringDateEntries(recurringDates);
    const rows = dates.length > 0
      ? dates.map(function (entry, index) {
        return buildRecurringDateRowHtml(entry, index);
      }).join("")
      : '<p class="module-placeholder">No recurring dates added yet.</p>';

    return `
      <section class="schedule-recurring-dates-section" data-recurring-dates-section>
        <div class="schedule-recurring-dates-header">
          <h4>Recurring Dates</h4>
          <button class="btn btn-secondary btn-small" type="button" data-recurring-date-action="add">+ Add Date</button>
        </div>
        <div class="schedule-recurring-dates-list" data-recurring-dates-list>
          ${rows}
        </div>
      </section>
    `;
  }

  function setScheduleRecurringDatesSectionVisibility(container, frequency) {
    if (!(container instanceof HTMLElement)) {
      return;
    }

    container.style.display = frequency === "Custom" ? "grid" : "none";
  }

  function readRecurringDatesFromEditForm(form) {
    const rows = Array.from(form.querySelectorAll("[data-recurring-date-index]"));
    return normalizeRecurringDateEntries(rows.map(function (row) {
      if (!(row instanceof HTMLElement)) {
        return null;
      }

      const dayField = row.querySelector('[data-recurring-date-field="day"]');
      const monthField = row.querySelector('[data-recurring-date-field="month"]');
      const day = dayField instanceof HTMLSelectElement ? Number(dayField.value) : NaN;
      const month = monthField instanceof HTMLSelectElement ? Number(monthField.value) : NaN;
      if (!Number.isInteger(day) || !Number.isInteger(month)) {
        return null;
      }

      return { day: day, month: month };
    }));
  }

  function updateRecurringDateRows(form) {
    const list = form.querySelector("[data-recurring-dates-list]");
    if (!(list instanceof HTMLElement)) {
      return;
    }

    const dates = readRecurringDatesFromEditForm(form);
    if (dates.length === 0) {
      list.innerHTML = '<p class="module-placeholder">No recurring dates added yet.</p>';
      return;
    }

    list.innerHTML = dates.map(function (entry, index) {
      return buildRecurringDateRowHtml(entry, index);
    }).join("");
  }

  function setRecurringDatesForEditForm(form, recurringDates) {
    const list = form.querySelector("[data-recurring-dates-list]");
    if (!(list instanceof HTMLElement)) {
      return;
    }

    const dates = normalizeRecurringDateEntries(recurringDates);
    if (dates.length === 0) {
      list.innerHTML = '<p class="module-placeholder">No recurring dates added yet.</p>';
      return;
    }

    list.innerHTML = dates.map(function (entry, index) {
      return buildRecurringDateRowHtml(entry, index);
    }).join("");
  }

  function getRecurringDatesFromTemplate(template) {
    return normalizeRecurringDateEntries(template && template.customRecurringDates ? template.customRecurringDates : []);
  }

  function renderScheduleDocumentTiles(attachments) {
    const byType = new Map((attachments || []).map(function (attachment) {
      return [attachment.type, attachment];
    }));

    return SCHEDULE_DOCUMENT_TYPES.map(function (type) {
      const existing = byType.get(type);
      const hasDocumentClass = existing ? " is-filled" : "";
      const label = existing ? `Open / Replace ${type}` : `Upload ${type}`;
      const fileName = existing ? `<p>${escapeHtml(existing.fileName || "Document uploaded")}</p>` : '<p>No document uploaded</p>';
      return `
        <button class="schedule-document-tile${hasDocumentClass}" type="button" data-schedule-doc-type="${type}">
          <strong>${type}</strong>
          ${fileName}
          <span>${label}</span>
        </button>
      `;
    }).join("");
  }

  function upsertScheduleTemplateAttachment(template, attachmentType, payload) {
    const existing = (template.attachments || []).filter(function (attachment) {
      return attachment.type !== attachmentType;
    });

    return normalizePropertyTemplateRecord({
      ...template,
      attachments: existing.concat(payload),
      lastUpdated: new Date().toISOString(),
    });
  }

  function applyScheduleDetailsUpdates(building, templateId, updates, options) {
    const now = new Date().toISOString();
    const resolvedUpdates = updates || {};
    const normalizedTemplateId = String(templateId || "").trim();
    const targetScheduleItemId = options && options.scheduleItemId ? String(options.scheduleItemId || "") : "";

    const nextPropertyTemplates = getPropertyTemplates(building).map(function (template) {
      if (String(template.id || "") !== normalizedTemplateId) {
        return template;
      }

      const nextTemplate = {
        ...template,
        propertyId: Object.prototype.hasOwnProperty.call(resolvedUpdates, "propertyId")
          ? String(resolvedUpdates.propertyId || "").trim()
          : String(template.propertyId || "").trim(),
        name: Object.prototype.hasOwnProperty.call(resolvedUpdates, "name")
          ? String(resolvedUpdates.name || "").trim()
          : String(template.name || "").trim(),
        category: Object.prototype.hasOwnProperty.call(resolvedUpdates, "category")
          ? String(resolvedUpdates.category || "").trim()
          : String(template.category || "General").trim() || "General",
        defaultFrequency: Object.prototype.hasOwnProperty.call(resolvedUpdates, "defaultFrequency")
          ? String(resolvedUpdates.defaultFrequency || "").trim()
          : String(template.defaultFrequency || "Annual").trim() || "Annual",
        initialDueDate: Object.prototype.hasOwnProperty.call(resolvedUpdates, "initialDueDate")
          ? String(resolvedUpdates.initialDueDate || "").trim()
          : String(template.initialDueDate || "").trim(),
        nextDueDate: Object.prototype.hasOwnProperty.call(resolvedUpdates, "nextDueDate")
          ? String(resolvedUpdates.nextDueDate || "").trim()
          : String(template.nextDueDate || "").trim(),
        customRecurringDates: Array.isArray(resolvedUpdates.customRecurringDates)
          ? resolvedUpdates.customRecurringDates
          : getRecurringDatesFromTemplate(template),
        preferredContactId: String(template.preferredContactId || "").trim(),
        defaultNotes: Object.prototype.hasOwnProperty.call(resolvedUpdates, "defaultNotes")
          ? String(resolvedUpdates.defaultNotes || "").trim()
          : String(template.defaultNotes || "").trim(),
        lastUpdated: now,
      };

      if (!nextTemplate.nextDueDate) {
        nextTemplate.nextDueDate = nextTemplate.initialDueDate || template.nextDueDate || "";
      }

      return normalizePropertyTemplateRecord(nextTemplate);
    });

    const updatedTemplate = nextPropertyTemplates.find(function (template) {
      return String(template.id || "") === normalizedTemplateId;
    }) || null;

    const nextScheduleItems = (building.scheduleItems || []).map(function (item) {
      const matchesCurrentItem = Boolean(targetScheduleItemId) && String(item.id || "") === targetScheduleItemId;
      if (!matchesCurrentItem) {
        return item;
      }

      const next = {
        ...item,
        propertyId: Object.prototype.hasOwnProperty.call(resolvedUpdates, "propertyId")
          ? String(resolvedUpdates.propertyId || "").trim()
          : String(item.propertyId || "").trim(),
        taskName: Object.prototype.hasOwnProperty.call(resolvedUpdates, "name")
          ? String(resolvedUpdates.name || "").trim()
          : String(item.taskName || "").trim(),
        category: Object.prototype.hasOwnProperty.call(resolvedUpdates, "category")
          ? String(resolvedUpdates.category || "").trim()
          : String(item.category || "").trim(),
        frequency: Object.prototype.hasOwnProperty.call(resolvedUpdates, "defaultFrequency")
          ? String(resolvedUpdates.defaultFrequency || "").trim()
          : String(item.frequency || "").trim(),
        initialDueDate: Object.prototype.hasOwnProperty.call(resolvedUpdates, "initialDueDate")
          ? String(resolvedUpdates.initialDueDate || "").trim()
          : String(item.initialDueDate || item.dueDate || "").trim(),
        dueDate: Object.prototype.hasOwnProperty.call(resolvedUpdates, "nextDueDate")
          ? String(resolvedUpdates.nextDueDate || "").trim()
          : String(item.dueDate || "").trim(),
        preferredContactId: Object.prototype.hasOwnProperty.call(resolvedUpdates, "preferredContactId")
          ? String(resolvedUpdates.preferredContactId || "").trim()
          : String(item.preferredContactId || "").trim(),
        notes: Object.prototype.hasOwnProperty.call(resolvedUpdates, "defaultNotes")
          ? String(resolvedUpdates.defaultNotes || "").trim()
          : String(item.notes || "").trim(),
        lastUpdated: now,
      };

      if (updatedTemplate) {
        next.propertyTemplateId = updatedTemplate.id;
        next.templateId = updatedTemplate.id;
        next.propertyId = String(updatedTemplate.propertyId || next.propertyId || "").trim();
        next.taskName = String(updatedTemplate.name || next.taskName || "").trim();
        next.category = String(updatedTemplate.category || next.category || "General").trim() || "General";
        next.frequency = String(updatedTemplate.defaultFrequency || next.frequency || "Annual").trim() || "Annual";
        next.initialDueDate = String(updatedTemplate.initialDueDate || next.initialDueDate || "").trim();
        next.dueDate = String(updatedTemplate.nextDueDate || next.dueDate || "").trim();
        next.preferredContactId = String(updatedTemplate.preferredContactId || next.preferredContactId || "").trim();
        next.notes = String(updatedTemplate.defaultNotes || next.notes || "").trim();
      }

      if (!next.dueDate) {
        next.dueDate = next.initialDueDate || item.dueDate || "";
      }

      next.status = getScheduleStatusText({ ...next, status: "", dueDate: next.dueDate || item.dueDate });
      return next;
    });

    return {
      ...building,
      propertyTemplates: nextPropertyTemplates,
      scheduleItems: nextScheduleItems,
      lastUpdated: now,
    };
  }

  window.BuildingManagerSchedule = {
    applyScheduleDetailsUpdates: applyScheduleDetailsUpdates,
    handleScheduleDetailsSave: handleScheduleDetailsSave,
    deleteScheduleItem: deleteScheduleItem,
    findDocumentForScheduleItem: findDocumentForScheduleItem,
    getNextDueDatePlaceholder: getNextDueDatePlaceholder,
    applyTemplateCompletion: applyTemplateCompletion,
    applyTenancyEventCompletion: applyTenancyEventCompletion,
    getAllTenanciesForBuilding: getAllTenanciesForBuilding,
    getTenancyContactRefs: getTenancyContactRefs,
    getContactsForTenancy: getContactsForTenancy,
    getTenancyLinksForContact: getTenancyLinksForContact,
    linkContactToTenancy: linkContactToTenancy,
    unlinkContactFromTenancy: unlinkContactFromTenancy,
    getAssignedMasterTemplateIdsForBuilding: function (building) {
      return Array.from(getAssignedMasterTemplateIdsForBuilding(building));
    },
    addMasterTemplatesToBuilding: addMasterTemplatesToBuilding,
    getScheduledItemTemplates: getScheduledItemTemplates,
    getActiveScheduledItemTemplates: getActiveScheduledItemTemplates,
    deactivateMasterTemplate: deactivateTemplate,
    activateMasterTemplate: activateTemplate,
    deleteMasterTemplate: deleteTemplate,
    detachDeletedMasterTemplateReferences: detachDeletedMasterTemplateReferences,
    removeMasterTemplatesFromBuilding: removeMasterTemplatesFromBuilding,
    getSortedScheduleItems: function (building) {
      const normalized = ensureWorkflowCollections(building);
      return sortScheduleRows(decorateScheduleRows(normalized, normalized.scheduleItems || [])).map(function (row) {
        return row.item;
      });
    },
    linkScheduleItemToContact: function (building, scheduleItemId, contactId) {
      const normalized = ensureWorkflowCollections(building);
      const scheduleItem = (normalized.scheduleItems || []).find(function (item) {
        return String(item.id || "") === String(scheduleItemId || "");
      });
      if (!scheduleItem) {
        return null;
      }

      const nextScheduleItems = (normalized.scheduleItems || []).map(function (item) {
        if (String(item.id || "") !== String(scheduleItemId || "")) {
          return item;
        }

        return {
          ...item,
          preferredContactId: String(contactId || "").trim(),
          lastUpdated: new Date().toISOString(),
        };
      });

      return {
        ...normalized,
        scheduleItems: nextScheduleItems,
        lastUpdated: new Date().toISOString(),
      };
    },
    unlinkScheduleItemFromContact: function (building, scheduleItemId, contactId) {
      const normalized = ensureWorkflowCollections(building);
      const scheduleItem = (normalized.scheduleItems || []).find(function (item) {
        return String(item.id || "") === String(scheduleItemId || "");
      });
      if (!scheduleItem) {
        return null;
      }

      if (String(scheduleItem.preferredContactId || "") !== String(contactId || "")) {
        return null;
      }

      const nextScheduleItems = (normalized.scheduleItems || []).map(function (item) {
        if (String(item.id || "") !== String(scheduleItemId || "")) {
          return item;
        }

        return {
          ...item,
          preferredContactId: "",
          lastUpdated: new Date().toISOString(),
        };
      });

      return {
        ...normalized,
        scheduleItems: nextScheduleItems,
        lastUpdated: new Date().toISOString(),
      };
    },
  };

  function calculateNextDueDateFromSettings(initialDueDate, frequency, _latestRecord, recurringDates, currentDueDate) {
    const normalizedInitialDueDate = String(initialDueDate || "").trim();
    const normalizedCurrentDueDate = String(currentDueDate || "").trim();
    const baseDate = normalizedCurrentDueDate || normalizedInitialDueDate;

    if (!baseDate) {
      return "";
    }

    if (frequency === "Custom") {
      return getNextDueDatePlaceholder(baseDate, frequency, recurringDates, true);
    }

    return normalizedCurrentDueDate || normalizedInitialDueDate;
  }

  function showScheduleDetailsSaveConfirmation(container) {
    if (!(container instanceof HTMLElement)) {
      return;
    }

    const actions = container.querySelector("[data-schedule-details-confirmation-anchor]");
    if (!(actions instanceof HTMLElement)) {
      return;
    }

    const existingConfirmation = actions.querySelector(".schedule-details-save-confirmation");
    if (existingConfirmation instanceof HTMLElement) {
      existingConfirmation.remove();
    }

    const confirmation = window.document.createElement("span");
    confirmation.className = "schedule-details-save-confirmation";
    confirmation.setAttribute("role", "status");
    confirmation.setAttribute("aria-live", "polite");
    confirmation.textContent = "✓ Saved";
    actions.appendChild(confirmation);

    window.setTimeout(function () {
      if (confirmation.parentNode) {
        confirmation.remove();
      }
    }, 2400);
  }

  async function handleScheduleDetailsSave(building, scheduleItem, form) {
    const formData = new FormData(form);
    const title = String(formData.get("title") || "").trim();
    const frequency = String(formData.get("frequency") || "Annual").trim();
    const category = String(formData.get("category") || "General").trim();
    const submittedInitialDueDate = String(formData.get("initialDueDate") || "").trim();
    const propertyId = String(formData.get("propertyId") || "").trim();
    const latestBuilding = findBuildingById(building && building.id ? building.id : activeBuildingId) || building;
    const currentScheduleItem = latestBuilding && Array.isArray(latestBuilding.scheduleItems)
      ? (latestBuilding.scheduleItems.find(function (item) {
        return item.id === (scheduleItem && scheduleItem.id ? scheduleItem.id : "");
      }) || null)
      : null;
    const detailsData = currentScheduleItem ? getScheduleDetailsData(latestBuilding, currentScheduleItem) : null;
    const primaryContactId = readSchedulePrimaryContactId(form, formData, currentScheduleItem, detailsData && detailsData.template ? detailsData.template : null);
    const notes = String(formData.get("notes") || "").trim();
    const recurringDates = frequency === "Custom" ? readRecurringDatesFromEditForm(form) : [];
    const fallbackInitialDueDate = currentScheduleItem
      ? String(currentScheduleItem.initialDueDate || currentScheduleItem.dueDate || "").trim()
      : "";
    const templateInitialDueDate = detailsData && detailsData.template
      ? String(detailsData.template.initialDueDate || detailsData.template.nextDueDate || "").trim()
      : "";
    const initialDueDate = submittedInitialDueDate || fallbackInitialDueDate || templateInitialDueDate;

    if (!title || !propertyId) {
      alert("Title and Property are required.");
      return;
    }

    if (frequency !== "Custom" && !initialDueDate) {
      alert("Title, Property and Initial Due Date are required.");
      return;
    }

    if (frequency === "Custom" && recurringDates.length === 0) {
      alert("Add at least one recurring date for Custom frequency.");
      return;
    }

    if (!detailsData || !latestBuilding || !currentScheduleItem) {
      return;
    }

    const templateId = currentScheduleItem.propertyTemplateId || currentScheduleItem.templateId || detailsData.template.id;
    const nextDueDate = calculateNextDueDateFromSettings(initialDueDate, frequency, detailsData.latestRecord, recurringDates, currentScheduleItem.dueDate);
    const updatedBuilding = applyScheduleDetailsUpdates(latestBuilding, templateId, {
      name: title,
      category: category,
      defaultFrequency: frequency,
      initialDueDate: initialDueDate,
      nextDueDate: nextDueDate,
      propertyId: propertyId,
      customRecurringDates: recurringDates,
      preferredContactId: primaryContactId,
      defaultNotes: notes,
    }, {
      scheduleItemId: currentScheduleItem.id,
    });

    const persistedBuilding = {
      ...updatedBuilding,
      propertyTemplates: Array.isArray(updatedBuilding.propertyTemplates) ? updatedBuilding.propertyTemplates : [],
      scheduleItems: Array.isArray(updatedBuilding.scheduleItems) ? updatedBuilding.scheduleItems : [],
      historyRecords: Array.isArray(updatedBuilding.historyRecords) ? updatedBuilding.historyRecords : [],
      lastUpdated: new Date().toISOString(),
    };

    window.BuildingStorage.updateBuilding(persistedBuilding);
    const savedBuilding = window.BuildingStorage.getBuildingById(persistedBuilding.id) || persistedBuilding;
    activeScheduleItemId = currentScheduleItem.id;
    renderBuildings();
    renderSchedulePage();
    await openScheduleDetailsDialog(savedBuilding.id, currentScheduleItem.id, true, "details");
  }

  async function handleScheduleDocumentUpload(building, scheduleItem, type) {
    const detailsData = getScheduleDetailsData(building, scheduleItem);
    if (!detailsData) {
      return;
    }

    const current = (detailsData.template.attachments || []).find(function (attachment) {
      return attachment.type === type;
    });

    if (current && current.storage && current.storage.dataUrl) {
      const action = window.prompt(`Type OPEN to view ${type}, or REPLACE to upload a new file.`, "OPEN");
      const normalizedAction = String(action || "").trim().toUpperCase();
      if (normalizedAction === "OPEN") {
        openOrDownloadLeaseDocument(current, false);
        return;
      }
      if (normalizedAction !== "REPLACE") {
        return;
      }
    }

    const file = await requestDocumentFileSelection();
    if (!file) {
      return;
    }

    const now = new Date().toISOString();
    const attachment = {
      id: current ? current.id : window.BuildingStorage.createId(),
      type: type,
      fileName: file.name,
      mimeType: file.type || "application/octet-stream",
      sizeBytes: file.size || 0,
      uploadedAt: current ? current.uploadedAt : now,
      lastUpdated: now,
      storage: {
        kind: "data-url",
        dataUrl: await readFileAsDataUrl(file),
        previewStatus: "not-generated",
        ocrStatus: "not-indexed",
      },
    };

    const updatedTemplate = upsertScheduleTemplateAttachment(detailsData.template, type, attachment);
    const updatedPropertyTemplates = (building.propertyTemplates || []).map(function (template) {
      return String(template.id || "") === String(updatedTemplate.id || "")
        ? updatedTemplate
        : template;
    });
    const updatedBuilding = {
      ...building,
      propertyTemplates: updatedPropertyTemplates,
      lastUpdated: new Date().toISOString(),
    };
    const normalized = ensureWorkflowCollections(updatedBuilding);
    window.BuildingStorage.updateBuilding(normalized);
    renderBuildings();
    renderSchedulePage();
    await openScheduleDetailsDialog(normalized.id, scheduleItem.id);
  }

  function confirmScheduleItemDeleteDialog(building, scheduleItem) {
    return new Promise(function (resolve) {
      const backdrop = window.document.createElement("div");
      backdrop.className = "template-delete-modal-backdrop app-modal-backdrop-confirm";
      backdrop.setAttribute("data-schedule-item-delete-confirm", "");

      const dialog = window.document.createElement("div");
      dialog.className = "template-delete-modal";
      dialog.setAttribute("role", "dialog");
      dialog.setAttribute("aria-modal", "true");
      dialog.setAttribute("aria-labelledby", "schedule-item-delete-modal-title");

      const itemName = String(scheduleItem && scheduleItem.taskName ? scheduleItem.taskName : "Calendar Item").trim() || "Calendar Item";
      const propertyName = String(building && building.buildingName ? building.buildingName : "this property").trim() || "this property";
      dialog.innerHTML = `
        <h3 id="schedule-item-delete-modal-title">Delete Calendar Item?</h3>
        <p><strong>${escapeHtml(itemName)}</strong> will be permanently removed from ${escapeHtml(propertyName)}.</p>
        <p>Historical completion records will be retained. This action cannot be undone.</p>
        <div class="template-delete-modal-actions">
          <button class="btn btn-secondary" type="button" data-schedule-item-delete-action="cancel">Cancel</button>
          <button class="btn template-delete-btn" type="button" data-schedule-item-delete-action="delete">Delete Calendar Item</button>
        </div>
      `;

      backdrop.appendChild(dialog);
      window.document.body.appendChild(backdrop);

      function closeWith(confirmed) {
        window.document.removeEventListener("keydown", handleEscape);
        backdrop.remove();
        resolve(Boolean(confirmed));
      }

      function handleEscape(event) {
        if (event.key === "Escape") {
          closeWith(false);
        }
      }

      window.document.addEventListener("keydown", handleEscape);

      backdrop.addEventListener("click", function (event) {
        if (event.target === backdrop) {
          closeWith(false);
        }
      });

      dialog.addEventListener("click", function (event) {
        const target = event.target;
        if (!(target instanceof HTMLElement)) {
          return;
        }

        const action = target.getAttribute("data-schedule-item-delete-action");
        if (action === "cancel") {
          closeWith(false);
          return;
        }

        if (action === "delete") {
          closeWith(true);
        }
      });
    });
  }

  async function deleteScheduleItem(building, scheduleItem) {
    if (!building || !scheduleItem || scheduleItem.sourceType === "tenancy" || scheduleItem.sourceType === "document") {
      return null;
    }

    const latestBuilding = findBuildingById(building.id) || building;
    const normalizedBuilding = ensureWorkflowCollections(latestBuilding);
    const scheduleItemId = String(scheduleItem.id || "").trim();
    const currentScheduleItem = (normalizedBuilding.scheduleItems || []).find(function (item) {
      return String(item.id || "").trim() === scheduleItemId;
    });
    if (!currentScheduleItem || currentScheduleItem.sourceType === "tenancy" || currentScheduleItem.sourceType === "document") {
      return null;
    }

    const templateId = String(currentScheduleItem.propertyTemplateId || currentScheduleItem.templateId || "").trim();
    const now = new Date().toISOString();
    const updated = {
      ...normalizedBuilding,
      propertyTemplates: getPropertyTemplates(normalizedBuilding).filter(function (template) {
        return String(template.id || "").trim() !== templateId;
      }),
      scheduleItems: (normalizedBuilding.scheduleItems || []).filter(function (item) {
        const linkedTemplateId = String(item.propertyTemplateId || item.templateId || "").trim();
        return String(item.id || "").trim() !== scheduleItemId && (!templateId || linkedTemplateId !== templateId);
      }),
      historyRecords: Array.isArray(normalizedBuilding.historyRecords) ? normalizedBuilding.historyRecords.slice() : [],
      lastUpdated: now,
    };

    await window.BuildingStorage.updateBuilding(updated);
    return updated;
  }

  function getScheduleCompletionActionLabel(title) {
    const normalizedTitle = String(title || "").trim();
    if (!normalizedTitle) {
      return "Mark Completed";
    }

    const shortened = normalizedTitle.replace(/^(annual|monthly|quarterly|weekly|6 monthly|six monthly|one[- ]off|custom dates|custom)\s+/i, "").trim();
    return `${shortened || normalizedTitle} Completed`;
  }

  function getPrimaryContactForScheduleItem(building, scheduleItem, template) {
    const contactId = String(scheduleItem.preferredContactId || template.preferredContactId || "").trim();
    if (!contactId) {
      return null;
    }

    const contact = findContactById(contactId);
    if (!contact) {
      return null;
    }

    const relationship = String(getBuildingRelationshipForContact(building, contact) || "").trim();
    const companyName = String(getCompanyNameById(contact.companyId, "") || "").trim();
    const phone = String(contact.mobile || contact.officePhone || "").trim();
    const email = String(contact.email || "").trim();
    const relationshipOrCompany = [companyName, relationship]
      .filter(function (value, index, values) {
        return Boolean(value) && values.indexOf(value) === index;
      })
      .join(" • ");

    return {
      id: contact.id,
      name: String(contact.name || "").trim(),
      relationshipOrCompany: relationshipOrCompany,
      phone: phone,
      email: email,
    };
  }

  function renderPrimaryContactSection(building, scheduleItem, template) {
    const primaryContact = getPrimaryContactForScheduleItem(building, scheduleItem, template);
    if (!primaryContact || !primaryContact.name) {
      return `
        <section class="schedule-details-section">
          <h4>Primary Contact</h4>
          <p class="module-placeholder">No primary contact assigned</p>
        </section>
      `;
    }

    const phoneMarkup = primaryContact.phone
      ? `<p><strong>Phone:</strong> <a class="schedule-details-contact-link" href="tel:${escapeHtml(primaryContact.phone)}">${escapeHtml(primaryContact.phone)}</a></p>`
      : "";
    const emailMarkup = primaryContact.email
      ? `<p><strong>Email:</strong> <a class="schedule-details-contact-link" href="mailto:${escapeHtml(primaryContact.email)}">${escapeHtml(primaryContact.email)}</a></p>`
      : "";

    return `
      <section class="schedule-details-section">
        <h4>Primary Contact</h4>
        <div class="schedule-details-primary-contact">
          <button class="inline-link schedule-details-contact-open" type="button" data-schedule-details-action="open-primary-contact" data-contact-id="${escapeHtml(primaryContact.id)}">${escapeHtml(primaryContact.name)}</button>
          ${primaryContact.relationshipOrCompany ? `<p>${escapeHtml(primaryContact.relationshipOrCompany)}</p>` : ""}
          ${phoneMarkup}
          ${emailMarkup}
        </div>
      </section>
    `;
  }

  function renderScheduleDetailsDialogHtml(building, scheduleItem, detailsData, mode) {
    const viewMode = mode === "edit" ? "edit" : "details";
    const isTenancyItem = Boolean(detailsData.isTenancyItem);
    const template = detailsData.template;
    const tenancy = detailsData.tenancy || null;

    const statusText = getScheduleStatusText(scheduleItem);
    const titleValue = String(scheduleItem.taskName || (template ? template.name : "") || "").trim();
    const categoryValue = String(scheduleItem.category || (template ? template.category : "") || "General").trim();
    const frequencyValue = String(scheduleItem.frequency || (template ? template.defaultFrequency : "") || "Annual").trim();
    const propertyValue = String(scheduleItem.propertyId || building.id || "").trim();
    const notesValue = String(scheduleItem.notes || (template ? template.defaultNotes : "") || "").trim();

    // Tenancy-sourced items: read-only details, no edit form, Open Tenancy action
    if (isTenancyItem) {
      const eventTypeLabel = formatTenancyEventType(scheduleItem.tenancyEventType);
      const tenancyCompanyName = tenancy ? (tenancy.tradingName || tenancy.companyName || "Tenant") : "Unknown Tenancy";
      const isRecurring = scheduleItem.frequency !== "One-off";
      const completionBtnLabel = isRecurring ? `${eventTypeLabel} Completed` : `${eventTypeLabel} Noted`;

      const contactId = tenancy && Array.isArray(tenancy.contactRefs) && tenancy.contactRefs[0]
        ? String(tenancy.contactRefs[0]).trim()
        : "";
      const contact = contactId ? findContactById(contactId) : null;
      const tenancyContactSection = contact
        ? `<section class="schedule-details-section">
            <h4>Tenancy Contact</h4>
            <div class="schedule-details-primary-contact">
              <button class="inline-link schedule-details-contact-open" type="button" data-schedule-details-action="open-primary-contact" data-contact-id="${escapeHtml(contact.id)}">${escapeHtml(contact.name)}</button>
              ${contact.mobile ? `<p><strong>Phone:</strong> <a class="schedule-details-contact-link" href="tel:${escapeHtml(contact.mobile)}">${escapeHtml(contact.mobile)}</a></p>` : ""}
              ${contact.email ? `<p><strong>Email:</strong> <a class="schedule-details-contact-link" href="mailto:${escapeHtml(contact.email)}">${escapeHtml(contact.email)}</a></p>` : ""}
            </div>
          </section>`
        : "";

      return `
        <div class="schedule-details-modal" role="dialog" aria-modal="true" aria-labelledby="schedule-details-title">
          <header class="schedule-details-header">
            <h3 id="schedule-details-title">${escapeHtml(titleValue)}</h3>
            <button class="btn btn-secondary btn-small" type="button" data-schedule-details-action="close">Calendar</button>
          </header>
          <section class="schedule-details-section">
            <h4>Calendar Details</h4>
            <dl class="schedule-details-grid">
              <div><dt>Property</dt><dd>${escapeHtml(getBuildingNameById(propertyValue) || "Property not assigned")}</dd></div>
              <div><dt>Tenancy</dt><dd>${escapeHtml(tenancyCompanyName)}</dd></div>
              <div><dt>Event Type</dt><dd>${escapeHtml(eventTypeLabel)}</dd></div>
              <div><dt>Category</dt><dd>${escapeHtml(categoryValue)}</dd></div>
              ${isRecurring ? `<div><dt>Frequency</dt><dd>${escapeHtml(frequencyValue)}</dd></div>` : ""}
              <div><dt>Status</dt><dd>${escapeHtml(statusText)}</dd></div>
              <div><dt>Next Due Date</dt><dd>${formatDate(scheduleItem.dueDate)}</dd></div>
              <div><dt>Last Completed</dt><dd>${formatLastCompletedDate(scheduleItem.lastCompletedDate || "")}</dd></div>
            </dl>
          </section>
          ${tenancyContactSection}
          <section class="schedule-details-section">
            <h4>Completion History</h4>
            ${renderScheduleHistoryTable(detailsData.records)}
          </section>
          <section class="schedule-details-bottom-actions" data-schedule-details-confirmation-anchor aria-label="Calendar actions">
            <div class="schedule-details-bottom-actions-left">
              <button class="btn btn-secondary" type="button" data-schedule-details-action="open-tenancy">Open Tenancy</button>
            </div>
            <button class="btn btn-primary" type="button" data-schedule-details-action="complete">${escapeHtml(completionBtnLabel)}</button>
          </section>
        </div>
      `;
    }

    // Standard building-template item
    const canRevert = Boolean(getPendingRevertRecord(building, scheduleItem));
    const initialDueDateValue = String(scheduleItem.initialDueDate || scheduleItem.dueDate || template.initialDueDate || "").trim();
    const isCustomFrequency = frequencyValue === "Custom";
    const customDates = isCustomFrequency ? getRecurringDatesFromTemplate(template) : [];
    const frequencyDisplay = isCustomFrequency ? "Custom Dates" : frequencyValue;
    const scheduledDatesMarkup = customDates.length > 0
      ? `<div class="schedule-details-row-span"><dt>Calendar Dates</dt><dd>${customDates.map(function (entry) {
        return `<span>${escapeHtml(formatRecurringDateEntry(entry))}</span>`;
      }).join("")}</dd></div>`
      : "";

    if (viewMode === "edit") {
      return `
        <div class="schedule-details-modal" role="dialog" aria-modal="true" aria-labelledby="schedule-details-title">
          <header class="schedule-details-header">
            <h3 id="schedule-details-title">Edit Calendar Item</h3>
            <button class="btn btn-secondary btn-small" type="button" data-schedule-details-action="close">Calendar</button>
          </header>

          <section class="schedule-details-section">
            <form class="schedule-details-edit-form" data-schedule-details-edit-form>
              <label>Title<input name="title" type="text" value="${escapeHtml(titleValue)}" required /></label>
              <label>Property *
                <select name="propertyId" required>
                  ${renderPropertySelectOptions(propertyValue || building.id)}
                </select>
              </label>
              <label>Frequency
                <select name="frequency">
                  ${TEMPLATE_FREQUENCY_OPTIONS.map(function (option) {
                    const selected = option === frequencyValue ? " selected" : "";
                    return `<option value="${option}"${selected}>${option}</option>`;
                  }).join("")}
                </select>
              </label>
              <label>Category
                <select name="category">
                  ${TEMPLATE_CATEGORY_OPTIONS.map(function (option) {
                    const selected = option === categoryValue ? " selected" : "";
                    return `<option value="${option}"${selected}>${option}</option>`;
                  }).join("")}
                </select>
              </label>
              <label data-initial-due-date-wrap style="display: ${isCustomFrequency ? "none" : "grid"};">Initial Due Date<input name="initialDueDate" type="date" value="${escapeHtml(initialDueDateValue)}" ${isCustomFrequency ? "" : "required"} /></label>
              <label>Primary Contact
                <select name="primaryContactId" data-primary-contact-select>
                  ${renderSchedulePrimaryContactOptions(building, scheduleItem.preferredContactId || template.preferredContactId || "")}
                </select>
              </label>
              <div data-recurring-dates-section style="display: ${isCustomFrequency ? "grid" : "none"}; gap: 0.7rem;">
                ${renderRecurringDatesSection(getRecurringDatesFromTemplate(template))}
              </div>
              <label>Notes<textarea name="notes" rows="3">${escapeHtml(notesValue)}</textarea></label>
              <div class="schedule-details-form-actions" data-schedule-details-confirmation-anchor>
                <button class="btn btn-secondary btn-small" type="button" data-schedule-details-action="cancel-edit">Cancel</button>
                <button class="btn btn-primary btn-small" type="button" data-schedule-details-action="save">Save</button>
              </div>
              <div class="schedule-details-danger-section">
                <button class="btn btn-danger-subtle" type="button" data-schedule-details-action="delete">Delete Calendar Item</button>
              </div>
            </form>
          </section>
        </div>
      `;
    }

    return `
      <div class="schedule-details-modal" role="dialog" aria-modal="true" aria-labelledby="schedule-details-title">
        <header class="schedule-details-header">
          <h3 id="schedule-details-title">${escapeHtml(titleValue)}</h3>
          <button class="btn btn-secondary btn-small" type="button" data-schedule-details-action="close">Calendar</button>
        </header>

        <section class="schedule-details-section">
          <div class="schedule-details-section-header">
            <h4>Calendar Details</h4>
          </div>
          <dl class="schedule-details-grid" data-schedule-details-display>
            <div><dt>Property</dt><dd>${escapeHtml(getBuildingNameById(propertyValue) || "Property not assigned")}</dd></div>
            <div><dt>Frequency</dt><dd>${escapeHtml(frequencyDisplay)}</dd></div>
            ${scheduledDatesMarkup}
            <div><dt>Category</dt><dd>${escapeHtml(categoryValue)}</dd></div>
            <div><dt>Status</dt><dd>${escapeHtml(statusText)}</dd></div>
            <div><dt>Next Due Date</dt><dd>${formatDate(scheduleItem.dueDate)}</dd></div>
            <div><dt>Last Completed</dt><dd>${formatLastCompletedDate(scheduleItem.lastCompletedDate || "")}</dd></div>
          </dl>
        </section>

        ${renderPrimaryContactSection(building, scheduleItem, template)}

        ${notesValue
          ? `<section class="schedule-details-section"><h4>Notes</h4><p class="schedule-details-notes">${escapeHtml(notesValue)}</p></section>`
          : ""}

        <section class="schedule-details-section">
          <h4>Documents</h4>
          <div class="schedule-document-grid">
            ${renderScheduleDocumentTiles(template.attachments || [])}
          </div>
        </section>

        <section class="schedule-details-section">
          <h4>Completion History</h4>
          ${renderScheduleHistoryTable(detailsData.records)}
        </section>

        <section class="schedule-details-bottom-actions" data-schedule-details-confirmation-anchor aria-label="Calendar actions">
          <div class="schedule-details-bottom-actions-left">
            ${canRevert
              ? '<button class="btn schedule-revert-action-btn" type="button" data-schedule-details-action="revert">Revert</button>'
              : ""}
            <button class="btn btn-secondary" type="button" data-schedule-details-action="edit">Edit</button>
          </div>
          <button class="btn btn-primary" type="button" data-schedule-details-action="complete">${escapeHtml(getScheduleCompletionActionLabel(titleValue))}</button>
        </section>
      </div>
    `;
  }

  function showScheduleCompletionDialog(building, scheduleItem) {
    return new Promise(function (resolve) {
      const backdrop = window.document.createElement("div");
      backdrop.className = "schedule-details-backdrop app-modal-backdrop-nested";

      const now = new Date().toISOString().slice(0, 10);
      let selectedFile = null;

      backdrop.innerHTML = `
        <div class="schedule-complete-dialog" role="dialog" aria-modal="true" aria-labelledby="schedule-complete-title">
          <h3 id="schedule-complete-title">Complete ${escapeHtml(scheduleItem.taskName)}</h3>
          <form class="schedule-complete-form">
            <label>Completed Date<input name="completedDate" type="date" value="${now}" required /></label>
            <label>Completed By<input name="completedBy" type="text" value="Property Manager" required /></label>
            <label>Notes<textarea name="notes" rows="3"></textarea></label>
            <div class="schedule-complete-upload-row">
              <button type="button" class="btn btn-secondary btn-small" data-schedule-complete-upload>Upload Optional Document</button>
              <span data-schedule-complete-file-name>No file selected</span>
            </div>
            <div class="schedule-complete-actions">
              <button type="button" class="btn btn-secondary" data-schedule-complete-cancel>Cancel</button>
              <button type="submit" class="btn btn-primary">Complete</button>
            </div>
          </form>
        </div>
      `;

      window.document.body.appendChild(backdrop);

      function close(result) {
        backdrop.remove();
        resolve(result);
      }

      backdrop.addEventListener("click", function (event) {
        if (event.target === backdrop) {
          close(null);
        }
      });

      const cancelButton = backdrop.querySelector("[data-schedule-complete-cancel]");
      const uploadButton = backdrop.querySelector("[data-schedule-complete-upload]");
      const fileNameLabel = backdrop.querySelector("[data-schedule-complete-file-name]");
      const form = backdrop.querySelector(".schedule-complete-form");

      if (cancelButton instanceof HTMLButtonElement) {
        cancelButton.addEventListener("click", function () {
          close(null);
        });
      }

      if (uploadButton instanceof HTMLButtonElement) {
        uploadButton.addEventListener("click", async function () {
          const file = await requestDocumentFileSelection();
          if (!file) {
            return;
          }

          selectedFile = file;
          if (fileNameLabel instanceof HTMLElement) {
            fileNameLabel.textContent = file.name;
          }
        });
      }

      if (form instanceof HTMLFormElement) {
        form.addEventListener("submit", async function (event) {
          event.preventDefault();
          const formData = new FormData(form);
          const completionDocument = selectedFile
            ? {
              id: window.BuildingStorage.createId(),
              fileName: selectedFile.name,
              mimeType: selectedFile.type || "application/octet-stream",
              sizeBytes: selectedFile.size || 0,
              storage: {
                kind: "data-url",
                dataUrl: await readFileAsDataUrl(selectedFile),
                previewStatus: "not-generated",
                ocrStatus: "not-indexed",
              },
            }
            : null;

          close({
            completedDate: String(formData.get("completedDate") || "").trim(),
            completedBy: String(formData.get("completedBy") || "").trim() || "Property Manager",
            notes: String(formData.get("notes") || "").trim(),
            completionDocument: completionDocument,
          });
        });
      }
    });
  }

  async function showScheduleCompleteDialog(buildingId, itemId) {
    const building = findBuildingById(buildingId);
    if (!building) {
      return;
    }

    const scheduleItem = findScheduleItemById(building, itemId);
    if (!scheduleItem) {
      return;
    }

    const result = await showScheduleCompletionDialog(building, scheduleItem);
    if (!result) {
      return;
    }

    const completedAt = new Date(`${result.completedDate}T${new Date().toTimeString().slice(0, 8)}`).toISOString();
    const normalized = ensureWorkflowCollections(building);
    let updated;

    if (scheduleItem.sourceType === "tenancy") {
      updated = applyTenancyEventCompletion(normalized, scheduleItem, {
        completedAt: completedAt,
        completedBy: result.completedBy,
        notes: result.notes,
      });
    } else {
      const companyUsedId = scheduleItem.preferredCompanyId || "";
      const companyUsed = getCompanyNameById(companyUsedId, scheduleItem.preferredCompany || "");
      const contactUsedId = scheduleItem.preferredContactId || "";
      const contactUsed = contactUsedId ? getContactNameById(contactUsedId) : "";
      updated = applyTemplateCompletion(normalized, scheduleItem, {
        completedAt: completedAt,
        completedBy: result.completedBy,
        companyUsed: companyUsed,
        companyUsedId: companyUsedId,
        contactUsed: contactUsed,
        contactUsedId: contactUsedId,
        notes: result.notes,
        completionDocument: result.completionDocument,
      });
    }

    if (!updated) {
      return;
    }

    renderBuildings();
    renderSchedulePage();
  }

  async function openScheduleDetailsDialog(buildingId, itemId, showSavedConfirmation, mode) {
    const viewMode = mode === "edit" ? "edit" : "details";
    const building = findBuildingById(buildingId);
    if (!building) {
      return;
    }

    const scheduleItem = findScheduleItemById(building, itemId);
    if (!scheduleItem) {
      return;
    }

    // Document-generated entries are owned by their source document: open the file, not the generic editor.
    if (scheduleItem.sourceType === "document") {
      const sourceDocument = findDocumentForScheduleItem(building, scheduleItem);
      if (sourceDocument) {
        openOrDownloadLeaseDocument(sourceDocument, false);
      }
      return;
    }

    const detailsData = getScheduleDetailsData(building, scheduleItem);
    if (!detailsData) {
      return;
    }

    const existingBackdrop = window.document.querySelector(".schedule-details-backdrop");
    if (existingBackdrop) {
      if (typeof existingBackdrop.__releaseModalLayer === "function") {
        existingBackdrop.__releaseModalLayer();
      }
      existingBackdrop.remove();
    }

    const backdrop = window.document.createElement("div");
    backdrop.className = "schedule-details-backdrop";
  backdrop.innerHTML = renderScheduleDetailsDialogHtml(building, scheduleItem, detailsData, viewMode);
    window.document.body.appendChild(backdrop);

    const modal = backdrop.querySelector(".schedule-details-modal");
    const layer = pushModalLayer(backdrop, modal instanceof HTMLElement ? modal : null);
    const releaseFocusTrap = enableModalFocusTrap(
      modal instanceof HTMLElement ? modal : null,
      function () {
        return isTopModalLayer(layer);
      }
    );

    if (showSavedConfirmation && modal instanceof HTMLElement && viewMode === "details") {
      showScheduleDetailsSaveConfirmation(modal);
    }

    const editForm = backdrop.querySelector("[data-schedule-details-edit-form]");
    const template = detailsData.template;
    let saveButton = null;
    let restoreFormValues = null;

    if (editForm instanceof HTMLFormElement && viewMode === "edit") {
      saveButton = editForm.querySelector('button[data-schedule-details-action="save"], button[type="submit"]');
      const select = editForm.querySelector("[data-primary-contact-select]");
      const frequencySelect = editForm.querySelector('select[name="frequency"]');
      const recurringSection = editForm.querySelector("[data-recurring-dates-section]");
      const recurringList = editForm.querySelector("[data-recurring-dates-list]");
      const initialDueDateWrap = editForm.querySelector("[data-initial-due-date-wrap]");
      const initialDueDateInput = editForm.elements.initialDueDate;
      const initialValues = {
        title: String(scheduleItem.taskName || template.name || "").trim(),
        propertyId: String(scheduleItem.propertyId || building.id || "").trim(),
        frequency: String(scheduleItem.frequency || template.defaultFrequency || "").trim(),
        category: String(scheduleItem.category || template.category || "").trim(),
        initialDueDate: String(scheduleItem.initialDueDate || scheduleItem.dueDate || template.initialDueDate || "").trim(),
        primaryContactId: String(scheduleItem.preferredContactId || template.preferredContactId || "").trim(),
        notes: String(scheduleItem.notes || template.defaultNotes || "").trim(),
        recurringDates: getRecurringDatesFromTemplate(template),
      };

      const primaryContactSelect = editForm.querySelector("[data-primary-contact-select]");
      if (primaryContactSelect instanceof HTMLSelectElement) {
        primaryContactSelect.value = initialValues.primaryContactId;
      }

      function getFormSnapshot() {
        return {
          title: String(editForm.elements.title ? editForm.elements.title.value : "" || "").trim(),
          propertyId: String(editForm.elements.propertyId ? editForm.elements.propertyId.value : "" || "").trim(),
          frequency: String(editForm.elements.frequency ? editForm.elements.frequency.value : "" || "").trim(),
          category: String(editForm.elements.category ? editForm.elements.category.value : "" || "").trim(),
          initialDueDate: String(editForm.elements.initialDueDate ? editForm.elements.initialDueDate.value : "" || "").trim(),
          primaryContactId: String(editForm.elements.primaryContactId ? editForm.elements.primaryContactId.value : "" || "").trim(),
          notes: String(editForm.elements.notes ? editForm.elements.notes.value : "" || "").trim(),
          recurringDates: editForm.elements.frequency && String(editForm.elements.frequency.value || "") === "Custom"
            ? readRecurringDatesFromEditForm(editForm)
            : [],
        };
      }

      function valuesMatch(left, right) {
        if (!left || !right) {
          return false;
        }

        if (left.title !== right.title || left.propertyId !== right.propertyId || left.frequency !== right.frequency || left.category !== right.category || left.initialDueDate !== right.initialDueDate || left.primaryContactId !== right.primaryContactId || left.notes !== right.notes) {
          return false;
        }

        if (left.recurringDates.length !== right.recurringDates.length) {
          return false;
        }

        return left.recurringDates.every(function (entry, index) {
          const compareEntry = right.recurringDates[index] || {};
          return String(entry.day || "") === String(compareEntry.day || "") && String(entry.month || "") === String(compareEntry.month || "");
        });
      }

      function updateSaveState() {
        if (saveButton instanceof HTMLButtonElement) {
          saveButton.disabled = valuesMatch(getFormSnapshot(), initialValues);
        }
      }

      function updateEditFrequencyVisibility() {
        if (!(frequencySelect instanceof HTMLSelectElement)) {
          return;
        }

        const isCustomFrequency = String(frequencySelect.value || "") === "Custom";
        if (initialDueDateWrap instanceof HTMLElement) {
          initialDueDateWrap.style.display = isCustomFrequency ? "none" : "grid";
        }
        if (initialDueDateInput instanceof HTMLInputElement) {
          initialDueDateInput.required = !isCustomFrequency;
        }

        setScheduleRecurringDatesSectionVisibility(recurringSection, frequencySelect.value);
      }

      restoreFormValues = function () {
        if (editForm.elements.title) {
          editForm.elements.title.value = initialValues.title;
        }
        if (editForm.elements.propertyId) {
          editForm.elements.propertyId.value = initialValues.propertyId;
        }
        if (editForm.elements.frequency) {
          editForm.elements.frequency.value = initialValues.frequency;
        }
        if (editForm.elements.category) {
          editForm.elements.category.value = initialValues.category;
        }
        if (editForm.elements.initialDueDate) {
          editForm.elements.initialDueDate.value = initialValues.initialDueDate;
        }
        if (editForm.elements.primaryContactId) {
          editForm.elements.primaryContactId.value = initialValues.primaryContactId;
        }
        if (editForm.elements.notes) {
          editForm.elements.notes.value = initialValues.notes;
        }

        if (select instanceof HTMLSelectElement) {
          select.innerHTML = renderSchedulePrimaryContactOptions(building, initialValues.primaryContactId);
          select.value = initialValues.primaryContactId;
        }

        if (frequencySelect instanceof HTMLSelectElement && recurringSection instanceof HTMLElement && recurringList instanceof HTMLElement) {
          updateEditFrequencyVisibility();
          recurringList.innerHTML = initialValues.recurringDates.length === 0
            ? '<p class="module-placeholder">No recurring dates added yet.</p>'
            : initialValues.recurringDates.map(function (entry, index) {
              return buildRecurringDateRowHtml(entry, index);
            }).join("");
        }

        updateSaveState();
      };

      if (frequencySelect instanceof HTMLSelectElement && recurringSection instanceof HTMLElement && recurringList instanceof HTMLElement) {
        const renderRecurringRows = function () {
          updateEditFrequencyVisibility();
          if (frequencySelect.value !== "Custom") {
            updateSaveState();
            return;
          }

          const currentDates = readRecurringDatesFromEditForm(editForm);
          if (currentDates.length === 0) {
            recurringList.innerHTML = '<p class="module-placeholder">No recurring dates added yet.</p>';
          } else {
            recurringList.innerHTML = currentDates.map(function (entry, index) {
              return buildRecurringDateRowHtml(entry, index);
            }).join("");
          }
          updateSaveState();
        };

        frequencySelect.addEventListener("change", function () {
          renderRecurringRows();
        });

        recurringSection.addEventListener("click", function (event) {
          const target = event.target;
          if (!(target instanceof HTMLElement)) {
            return;
          }

          const action = target.getAttribute("data-recurring-date-action");
          if (action === "add") {
            const existing = readRecurringDatesFromEditForm(editForm);
            existing.push({ day: 1, month: 1 });
            recurringList.innerHTML = existing.map(function (entry, index) {
              return buildRecurringDateRowHtml(entry, index);
            }).join("");
            updateSaveState();
            return;
          }

          const row = target.closest("[data-recurring-date-index]");
          if (!(row instanceof HTMLElement)) {
            return;
          }

          if (action === "remove") {
            const remaining = readRecurringDatesFromEditForm(editForm).filter(function (_entry, index) {
              return String(index) !== String(row.getAttribute("data-recurring-date-index") || "");
            });
            recurringList.innerHTML = remaining.length === 0
              ? '<p class="module-placeholder">No recurring dates added yet.</p>'
              : remaining.map(function (entry, index) {
                return buildRecurringDateRowHtml(entry, index);
              }).join("");
            updateSaveState();
          }
        });

        recurringSection.addEventListener("change", function (event) {
          const target = event.target;
          if (!(target instanceof HTMLElement)) {
            return;
          }

          const row = target.closest("[data-recurring-date-index]");
          if (row instanceof HTMLElement && target.matches('[data-recurring-date-field="month"]')) {
            const daySelect = row.querySelector('[data-recurring-date-field="day"]');
            const monthSelect = target;
            if (daySelect instanceof HTMLSelectElement && monthSelect instanceof HTMLSelectElement) {
              const maxDay = getDaysInMonth(monthSelect.value);
              const currentDay = Number(daySelect.value || 1);
              const safeDay = Math.min(currentDay, maxDay);
              daySelect.innerHTML = renderRecurringDateDayOptions(safeDay, monthSelect.value);
              daySelect.value = String(safeDay);
            }
          }

          const normalized = readRecurringDatesFromEditForm(editForm);
          recurringList.innerHTML = normalized.length === 0
            ? '<p class="module-placeholder">No recurring dates added yet.</p>'
            : normalized.map(function (entry, index) {
              return buildRecurringDateRowHtml(entry, index);
            }).join("");
          updateSaveState();
        });

        renderRecurringRows();
      }

      editForm.addEventListener("input", updateSaveState);
      editForm.addEventListener("change", updateSaveState);
      updateEditFrequencyVisibility();
      updateSaveState();
    }

    let isClosed = false;

    function cleanupLayer() {
      if (isClosed) {
        return;
      }

      isClosed = true;
      releaseFocusTrap();
      popModalLayer(layer, true);
      delete backdrop.__releaseModalLayer;
    }

    function close() {
      cleanupLayer();
      backdrop.remove();
    }

    backdrop.__releaseModalLayer = cleanupLayer;

    backdrop.addEventListener("click", async function (event) {
      if (event.target === backdrop) {
        close();
        return;
      }

      const target = event.target;
      if (!(target instanceof HTMLElement)) {
        return;
      }

      const action = target.getAttribute("data-schedule-details-action");
      if (action === "close") {
        close();
        return;
      }

      if (action === "edit") {
        close();
        // Tenancy-generated items must be edited in the Tenancy form, not the schedule edit form.
        if (scheduleItem.sourceType === "tenancy") {
          openCurrentTenancyView(building.id);
          return;
        }
        await openScheduleDetailsDialog(building.id, scheduleItem.id, false, "edit");
        return;
      }

      if (action === "save") {
        event.preventDefault();
        event.stopPropagation();
        if (!(editForm instanceof HTMLFormElement) || (saveButton instanceof HTMLButtonElement && saveButton.disabled)) {
          return;
        }
        await handleScheduleDetailsSave(building, scheduleItem, editForm);
        return;
      }

      if (action === "delete") {
        const shouldDelete = await confirmScheduleItemDeleteDialog(building, scheduleItem);
        if (!shouldDelete) {
          return;
        }

        const deleted = await deleteScheduleItem(building, scheduleItem);
        if (!deleted) {
          return;
        }

        close();
        renderBuildings();
        renderSchedulePage();
        return;
      }

      if (action === "complete") {
        close();
        await showScheduleCompleteDialog(building.id, scheduleItem.id);
        return;
      }

      if (action === "revert") {
        const normalized = ensureWorkflowCollections(building);
        const latestItem = findScheduleItemById(normalized, scheduleItem.id);
        const historyRecord = latestItem ? getPendingRevertRecord(normalized, latestItem) : null;
        if (!latestItem || !historyRecord) {
          return;
        }

        const shouldRevert = await confirmScheduleRevertDialog();
        if (!shouldRevert) {
          return;
        }

        const updated = revertTemplateCompletion(normalized, latestItem, historyRecord);
        if (!updated) {
          return;
        }

        close();
        renderBuildings();
        renderSchedulePage();
        await openScheduleDetailsDialog(building.id, scheduleItem.id, false, "details");
        return;
      }

      if (action === "cancel-edit") {
        if (typeof restoreFormValues === "function") {
          restoreFormValues();
        }
        close();
        await openScheduleDetailsDialog(building.id, scheduleItem.id, false, "details");
        return;
      }

      if (action === "open-primary-contact") {
        const contactId = String(target.getAttribute("data-contact-id") || "").trim();
        const contact = contactId ? findContactById(contactId) : null;
        if (!contact) {
          return;
        }
        close();
        openContactDetailsDialog(contact, {
          returnContext: {
            buildingId: building.id,
            scheduleItemId: scheduleItem.id,
            filterBuildingId: getBuildingFilterId(),
          },
        });
        return;
      }

      if (action === "open-tenancy") {
        close();
        openCurrentTenancyView(building.id);
        return;
      }

      const docTile = target.closest("[data-schedule-doc-type]");
      if (docTile instanceof HTMLElement && viewMode === "details") {
        const type = String(docTile.getAttribute("data-schedule-doc-type") || "").trim();
        if (!type) {
          return;
        }
        await handleScheduleDocumentUpload(building, scheduleItem, type);
      }
    });

    if (editForm instanceof HTMLFormElement && saveButton instanceof HTMLButtonElement && viewMode === "edit") {
      saveButton.addEventListener("click", function (event) {
        event.preventDefault();
        event.stopPropagation();
        if (saveButton.disabled) {
          return;
        }
        handleScheduleDetailsSave(building, scheduleItem, editForm);
      });
    }

    if (modal instanceof HTMLElement) {
      focusFirstElementInContainer(modal);
    }

  }

  function handleScheduleFilterChange() {
    scheduleFilters = {
      property: scheduleFilters.property,
      category: String(scheduleFilterCategory.value || "all"),
      status: String(scheduleFilterStatus.value || "all"),
      duePeriod: String(scheduleFilterDuePeriod.value || "all"),
    };

    renderSchedulePage();
  }

  // Single entry point for the shared Building selector on all four operational pages.
  function handleBuildingFilterChange(event) {
    const select = event && event.target ? event.target : null;
    applyBuildingFilterSelection(select ? select.value : "");

    if (scheduleView.classList.contains("is-active")) {
      renderSchedulePage();
      return;
    }

    if (tenancyView.classList.contains("is-active")) {
      tenancyEditBuildingId = "";
      tenancyFormMode = "";
      activeTenancyDetailsId = "";
      renderCurrentTenancyPage();
      return;
    }

    if (contactsView.classList.contains("is-active")) {
      activeContactId = "";
      renderContactSectionState("list");
      renderAllBuildingFilterSelects();
      return;
    }

    if (leaseView.classList.contains("is-active")) {
      renderLeasePage();
    }
  }

  function handleHistoryBack() {
    openScheduleView(activeBuildingId);
  }

  function handleCancelCompleteTask() {
    openScheduleView(activeBuildingId);
  }

  function handleSaveCompleteTask(event) {
    event.preventDefault();
    const building = findBuildingById(activeBuildingId);
    if (!building) {
      showDashboard();
      return;
    }

    const scheduleItem = findScheduleItemById(building, activeScheduleItemId);
    if (!scheduleItem) {
      openScheduleView(activeBuildingId);
      return;
    }

    showScheduleCompleteDialog(building.id, scheduleItem.id).then(function () {
      openScheduleView(activeBuildingId);
    });
  }

  function handleCompleteCompanyChange() {
    const selectedCompanyId = completeTaskForm.elements.companyUsed.value;
    renderContactSelect(completeTaskForm.elements.contactUsed, "", selectedCompanyId, true);
  }

  function handleScheduleListClick(event) {
    const target = event.target;
    if (!(target instanceof HTMLElement)) {
      return;
    }

    const row = target.closest(".schedule-ops-row");
    if (!row) {
      return;
    }

    const rowBuildingId = row ? (row.getAttribute("data-schedule-building-id") || "") : "";

    const itemId = String(row.getAttribute("data-schedule-id") || "").trim();
    if (!itemId) {
      return;
    }

    openScheduleDetailsDialog(rowBuildingId || activeBuildingId, itemId);
  }

  function handleScheduleListKeydown(event) {
    const target = event.target;
    if (!(target instanceof HTMLElement)) {
      return;
    }

    const row = target.closest(".schedule-ops-row");
    if (!row) {
      return;
    }

    const rowBuildingId = row ? (row.getAttribute("data-schedule-building-id") || "") : "";

    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      const itemId = String(row.getAttribute("data-schedule-id") || "").trim();
      if (!itemId) {
        return;
      }

      openScheduleDetailsDialog(rowBuildingId || activeBuildingId, itemId);
    }
  }

  function handleHistoryListClick(event) {
    const target = event.target;
    if (!(target instanceof HTMLElement)) {
      return;
    }

    const card = target.closest(".history-card");
    if (!card) {
      return;
    }

    showModulePlaceholder("History", "History detail view will be added later.");
  }

  function handleHistoryListKeydown(event) {
    if (event.key !== "Enter" && event.key !== " ") {
      return;
    }

    const target = event.target;
    if (!(target instanceof HTMLElement)) {
      return;
    }

    const card = target.closest(".history-card");
    if (!card) {
      return;
    }

    event.preventDefault();
    showModulePlaceholder("History", "History detail view will be added later.");
  }

  function handleExportBackup() {
    const payload = window.BuildingStorage.createBackupPayload();
    const serialised = JSON.stringify(payload, null, 2);
    const blob = new Blob([serialised], { type: "application/json" });
    const fileName = "Compliance-HQ-Backup-" + new Date().toISOString().slice(0, 10) + ".json";
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = fileName;
    link.style.display = "none";
    document.body.appendChild(link);

    try {
      link.click();
    } catch (error) {
      window.open(url, "_blank");
    }

    window.setTimeout(function () {
      if (link.parentNode) {
        link.parentNode.removeChild(link);
      }

      if (window.URL.revokeObjectURL) {
        window.URL.revokeObjectURL(url);
      }
    }, 150);
  }

  function handleRestoreBackupButtonClick() {
    if (backupRestoreInput instanceof HTMLInputElement) {
      backupRestoreInput.click();
    }
  }

  function handleRestoreBackupSelection(event) {
    const input = event.target;
    const file = input && input.files ? input.files[0] : null;

    if (!file) {
      return;
    }

    const reader = new FileReader();
    reader.onload = function (readerEvent) {
      try {
        const payload = JSON.parse(readerEvent.target.result);
        const validation = window.BuildingStorage.validateBackupData(payload);

        if (!validation.success) {
          alert(validation.error || "The selected backup file is invalid.");
          input.value = "";
          return;
        }

        const shouldRestore = window.confirm("This will overwrite the current Compliance HQ data. Continue?");
        if (!shouldRestore) {
          input.value = "";
          return;
        }

        const restoreOutcome = window.BuildingStorage.restoreBackupData(validation.data);
        if (!restoreOutcome.success) {
          alert(restoreOutcome.error || "The backup could not be restored.");
          input.value = "";
          return;
        }

        Promise.resolve(restoreOutcome.persisted)
          .then(function () {
            alert("Backup restored successfully.");
            window.location.reload();
          })
          .catch(function (error) {
            console.error("Backup persistence failed:", error);
            alert("The backup was restored locally, but could not be fully saved. Please try again.");
            input.value = "";
          });
      } catch (error) {
        alert("The selected file could not be read as JSON.");
        input.value = "";
      }
    };

    reader.onerror = function () {
      alert("The selected file could not be read.");
      input.value = "";
    };

    reader.readAsText(file);
  }

  function handleOpenEdit() {
    const building = findBuildingById(activeBuildingId);
    if (!building) {
      openSettingsView();
      return;
    }

    openPropertyEditor(building);
  }

  function handleCancelEdit() {
    editingPropertyId = "";
    openSettingsView();
  }

  function handleModuleNavigationClick(event) {
    const target = event.target;
    if (!(target instanceof HTMLElement)) {
      return;
    }

    const button = target.closest(".module-nav-card");
    if (!button) {
      return;
    }

    const moduleName = button.getAttribute("data-module") || "";
    if (moduleName === "Tenancy") {
      openCurrentTenancyView(activeBuildingId);
      return;
    }

    if (moduleName === "Contacts") {
      openContactsView();
      return;
    }

    if (moduleName === "Schedule") {
      openScheduleView(activeBuildingId);
      return;
    }

    if (moduleName === "Documents") {
      openLeaseView(activeBuildingId);
      return;
    }
  }

  // One handler serves the shared shell navigation on every module page.
  function openAppModule(moduleKey) {
    if (moduleKey === "dashboard") {
      goToDashboard();
      return;
    }
    if (moduleKey === "settings") {
      openSettingsView();
      return;
    }
    if (moduleKey === "Tenancy") {
      openCurrentTenancyView(activeBuildingId);
      return;
    }
    if (moduleKey === "Contacts") {
      openContactsView();
      return;
    }
    if (moduleKey === "Schedule") {
      openScheduleView(activeBuildingId);
      return;
    }
    if (moduleKey === "Documents") {
      openLeaseView(activeBuildingId);
    }
  }

  function handleAppModuleNavClick(event) {
    const target = event.target;
    if (!(target instanceof HTMLElement)) {
      return;
    }

    const button = target.closest(".app-module-btn");
    if (!button) {
      return;
    }

    openAppModule(button.getAttribute("data-app-module") || "");
  }

  // Changing the shared selector re-renders the current module instead of leaving it.
  function handleAppPropertySelectorChange(event) {
    handleBuildingFilterChange(event);
  }

  function handleSettingsPropertyListClick(event) {
    const target = event.target;
    if (!(target instanceof HTMLElement)) {
      return;
    }

    const actionButton = target.closest("[data-settings-property-action]");
    if (!actionButton) {
      return;
    }

    const card = actionButton.closest("[data-settings-property-id]");
    const propertyId = card ? card.getAttribute("data-settings-property-id") || "" : "";
    const building = findBuildingById(propertyId);
    if (!building) {
      return;
    }

    const action = actionButton.getAttribute("data-settings-property-action") || "";

    if (action === "resume-setup") {
      resumeSetupWorkflow(building);
      return;
    }

    if (action === "edit") {
      openPropertyEditor(building);
    }
  }

  function getEditingProperty() {
    return findBuildingById(editingPropertyId || (editBuildingForm.elements.editBuildingId ? editBuildingForm.elements.editBuildingId.value : ""));
  }

  // Archive, restore and permanent deletion are property-specific, so they live with the editor.
  function renderPropertyManagementSection(building) {
    const archived = isBuildingArchived(building);
    if (editPropertyManagementHelp) {
      editPropertyManagementHelp.textContent = archived
        ? "This property is archived. Restoring it makes it available again in the operational Property selector. All of its records have been preserved."
        : "Archiving hides this property from normal operational views and the Property selector. Its tenancies, contacts, calendar items, documents and history are all preserved.";
    }
    if (editArchivePropertyBtn) {
      editArchivePropertyBtn.style.display = archived ? "none" : "inline-flex";
    }
    if (editRestorePropertyBtn) {
      editRestorePropertyBtn.style.display = archived ? "inline-flex" : "none";
    }
  }

  function openPropertyEditor(building) {
    editingPropertyId = building.id;
    populateEditForm(building);
    renderPropertyManagementSection(building);
    showEditForm();
  }

  function handleArchivePropertyFromEditor() {
    const building = getEditingProperty();
    if (building) {
      setBuildingArchived(building, true);
    }
  }

  function handleRestorePropertyFromEditor() {
    const building = getEditingProperty();
    if (building) {
      setBuildingArchived(building, false);
    }
  }

  function handleDeletePropertyFromEditor() {
    const building = getEditingProperty();
    if (!building) {
      return;
    }

    confirmPropertyDeleteDialog(building).then(function (confirmed) {
      if (confirmed) {
        deletePropertyPermanently(building);
      }
    });
  }

  // In-app modal, matching the rest of the app: native window.confirm is suppressed in
  // sandboxed/embedded browsers, which is what made these actions silently do nothing.
  function confirmPropertyDeleteDialog(building) {
    return new Promise(function (resolve) {
      const backdrop = window.document.createElement("div");
      backdrop.className = "template-delete-modal-backdrop app-modal-backdrop-confirm";
      backdrop.setAttribute("data-property-delete-confirm", building.id || "");

      const dialog = window.document.createElement("div");
      dialog.className = "template-delete-modal";
      dialog.setAttribute("role", "dialog");
      dialog.setAttribute("aria-modal", "true");
      dialog.setAttribute("aria-labelledby", "property-delete-modal-title");

      dialog.innerHTML = `
        <h3 id="property-delete-modal-title">Delete Property</h3>
        <p>Permanently delete <strong>${escapeHtml(building.buildingName || "this property")}</strong>?</p>
        <p>This removes the property and its tenancies, calendar items, documents and history. Contacts, companies and master templates in the central repository are kept. This action cannot be undone.</p>
        <div class="template-delete-modal-actions">
          <button class="btn btn-secondary" type="button" data-property-delete-action="cancel">Cancel</button>
          <button class="btn template-delete-btn" type="button" data-property-delete-action="delete">Delete</button>
        </div>
      `;

      backdrop.appendChild(dialog);
      window.document.body.appendChild(backdrop);

      function closeWith(confirmed) {
        window.document.removeEventListener("keydown", handleEscape);
        backdrop.remove();
        resolve(Boolean(confirmed));
      }

      function handleEscape(event) {
        if (event.key === "Escape") {
          closeWith(false);
        }
      }

      window.document.addEventListener("keydown", handleEscape);

      backdrop.addEventListener("click", function (event) {
        if (event.target === backdrop) {
          closeWith(false);
        }
      });

      dialog.addEventListener("click", function (event) {
        const target = event.target;
        if (!(target instanceof HTMLElement)) {
          return;
        }

        const action = target.getAttribute("data-property-delete-action");
        if (action === "cancel") {
          closeWith(false);
          return;
        }
        if (action === "delete") {
          closeWith(true);
        }
      });
    });
  }

  function setBuildingArchived(building, archived) {
    window.BuildingStorage.updateBuilding({
      ...building,
      archived: archived,
      lastUpdated: new Date().toISOString(),
    });

    if (archived && activeBuildingId === building.id) {
      setCurrentPropertyId("");
      syncScheduleFilterToCurrentProperty();
    }

    editingPropertyId = "";
    renderBuildings();
    openSettingsView();
  }

  function deletePropertyPermanently(building) {
    window.BuildingStorage.deleteBuilding(building.id);
    if (activeBuildingId === building.id) {
      setCurrentPropertyId("");
      syncScheduleFilterToCurrentProperty();
    }
    editingPropertyId = "";
    renderBuildings();
    openSettingsView();
  }

  function handleBreadcrumbClick(event) {
    const target = event.target;
    if (!(target instanceof HTMLElement)) {
      return;
    }

    const button = target.closest(".breadcrumb-link");
    if (!button) {
      return;
    }

    const index = Number(button.getAttribute("data-crumb-index"));
    const crumb = breadcrumbItems[index];
    if (!crumb || typeof crumb.onClick !== "function") {
      return;
    }

    crumb.onClick();
  }

  cancelBtn.addEventListener("click", handleSetupCancel);
  setupCancelBtn.addEventListener("click", handleSetupCancel);
  if (setupSaveExitBtn instanceof HTMLButtonElement) {
    setupSaveExitBtn.addEventListener("click", handleSetupSaveExit);
  }
  setupBackBtn.addEventListener("click", handleSetupBack);
  setupAddTenancyBtn.addEventListener("click", handleSetupAddTenancy);
  setupSkipTenancyBtn.addEventListener("click", handleSetupSkipTenancy);
  setupSaveTenancyBtn.addEventListener("click", saveSetupTenancyAndContinue);
  setupCancelTenancyBtn.addEventListener("click", handleSetupCancelTenancy);
  setupTenancyCompanyId.addEventListener("change", handleSetupTenancyCompanyChange);
  setupAddExistingContactBtn.addEventListener("click", handleSetupShowExistingContact);
  setupAddNewContactBtn.addEventListener("click", handleSetupShowNewContact);
  setupLinkExistingContactBtn.addEventListener("click", addExistingContactToSetup);
  setupNewContactCompanyId.addEventListener("change", handleSetupContactCompanyChange);
  setupCreateContactBtn.addEventListener("click", addNewContactToSetup);
  setupLinkedContactsList.addEventListener("click", handleSetupLinkedContactListClick);
  setupStep3NextBtn.addEventListener("click", handleSetupStepThreeNext);
  if (setupSelectAllBtn instanceof HTMLButtonElement) {
    setupSelectAllBtn.addEventListener("click", handleSetupSelectAll);
  }
  if (setupClearAllBtn instanceof HTMLButtonElement) {
    setupClearAllBtn.addEventListener("click", handleSetupClearAll);
  }
  setupStep4NextBtn.addEventListener("click", handleSetupStepFourNext);
  setupConfigureList.addEventListener("change", handleConfigureListChange);
  setupStep5FinishBtn.addEventListener("click", handleSetupStepFiveFinish);
  setupOpenBuildingBtn.addEventListener("click", handleSetupOpenBuilding);
  companiesBackBtn.addEventListener("click", handleCompaniesBack);
  manageTemplatesBtn.addEventListener("click", handleManageTemplatesForProperty);
  historyBackBtn.addEventListener("click", handleHistoryBack);
  templateLibraryBackBtn.addEventListener("click", handleTemplateLibraryBack);
  editBuildingBtn.addEventListener("click", handleOpenEdit);
  cancelEditBtn.addEventListener("click", handleCancelEdit);
  if (editArchivePropertyBtn instanceof HTMLButtonElement) {
    editArchivePropertyBtn.addEventListener("click", handleArchivePropertyFromEditor);
  }
  if (editRestorePropertyBtn instanceof HTMLButtonElement) {
    editRestorePropertyBtn.addEventListener("click", handleRestorePropertyFromEditor);
  }
  if (editDeletePropertyBtn instanceof HTMLButtonElement) {
    editDeletePropertyBtn.addEventListener("click", handleDeletePropertyFromEditor);
  }
  backupExportBtn.addEventListener("click", handleExportBackup);
  backupRestoreBtn.addEventListener("click", handleRestoreBackupButtonClick);
  backupRestoreInput.addEventListener("change", handleRestoreBackupSelection);
  addTenancyBtn.addEventListener("click", function () {
    openTenancyForm("add");
  });
  tenancyTabCurrent.addEventListener("click", handleTenancyTabCurrent);
  tenancyTabHistory.addEventListener("click", handleTenancyTabHistory);
  if (archiveTenancyBtn instanceof HTMLButtonElement) {
    archiveTenancyBtn.addEventListener("click", handleArchiveTenancy);
  }
  if (deleteTenancyBtn instanceof HTMLButtonElement) {
    deleteTenancyBtn.addEventListener("click", handleDeleteTenancy);
  }
  if (contactsCreateBtn instanceof HTMLButtonElement) {
    contactsCreateBtn.addEventListener("click", handleAddContact);
  }
  documentsAddBtn.addEventListener("click", handleAddDocument);
  cancelTenancyBtn.addEventListener("click", handleCancelTenancy);
  addCompanyBtn.addEventListener("click", handleAddCompany);
  addCompanyInlineBtn.addEventListener("click", handleAddCompany);
  deleteContactBtn.addEventListener("click", handleDeleteContact);
  if (contactAddPropertyLinkBtn instanceof HTMLButtonElement) {
    contactAddPropertyLinkBtn.addEventListener("click", handleAddPropertyLinkForContact);
  }
  if (contactAddScheduleLinkBtn instanceof HTMLButtonElement) {
    contactAddScheduleLinkBtn.addEventListener("click", handleAddScheduleLinkForContact);
  }
  if (contactRemoveScheduleLinkBtn instanceof HTMLButtonElement) {
    contactRemoveScheduleLinkBtn.addEventListener("click", handleRemoveScheduleLinkForContact);
  }
  if (contactAddTenancyLinkBtn instanceof HTMLButtonElement) {
    contactAddTenancyLinkBtn.addEventListener("click", handleAddTenancyLinkForContact);
  }
  if (contactRemoveTenancyLinkBtn instanceof HTMLButtonElement) {
    contactRemoveTenancyLinkBtn.addEventListener("click", handleRemoveTenancyLinkForContact);
  }
  if (tenancyAddContactLinkBtn instanceof HTMLButtonElement) {
    tenancyAddContactLinkBtn.addEventListener("click", handleAddContactLinkForTenancy);
  }
  if (tenancyContactsList) {
    tenancyContactsList.addEventListener("click", handleTenancyContactsListClick);
  }
  cancelCompanyBtn.addEventListener("click", handleCancelCompany);
  addTemplateBtn.addEventListener("click", handleAddTemplate);
  addTemplateInlineBtn.addEventListener("click", handleAddTemplate);
  if (templateFormDeleteBtn instanceof HTMLButtonElement) {
    templateFormDeleteBtn.addEventListener("click", handleTemplateFormDelete);
  }
  cancelTemplateBtn.addEventListener("click", handleCancelTemplate);
  cancelCompleteTaskBtn.addEventListener("click", handleCancelCompleteTask);
  moduleNav.addEventListener("click", handleModuleNavigationClick);
  buildingForm.addEventListener("submit", handleSetupStepOneSubmit);
  editBuildingForm.addEventListener("submit", handleEditSave);
  tenancyForm.addEventListener("submit", handleSaveTenancy);
  leaseSearch.addEventListener("input", handleLeaseSearch);
  contactForm.addEventListener("submit", handleSaveContact);
  contactForm.elements.companyId.addEventListener("change", handleContactCompanyChange);
  contactsSearch.addEventListener("input", handleContactSearch);
  if (contactsRelationshipFilter) {
    contactsRelationshipFilter.addEventListener("change", handleContactsRelationshipFilterChange);
  }
  companyForm.addEventListener("submit", handleSaveCompany);
  templateForm.addEventListener("submit", handleSaveTemplate);
  completeTaskForm.addEventListener("submit", handleSaveCompleteTask);
  completeTaskForm.elements.companyUsed.addEventListener("change", handleCompleteCompanyChange);
  appModuleNav.addEventListener("click", handleAppModuleNavClick);
  appBrandBtn.addEventListener("click", goToDashboard);
  appPropertySelector.addEventListener("change", handleAppPropertySelectorChange);
  settingsPropertyList.addEventListener("click", handleSettingsPropertyListClick);
  settingsAddPropertyBtn.addEventListener("click", showForm);
  settingsTemplatesBtn.addEventListener("click", openTemplateLibrary);
  leaseCategoryGrid.addEventListener("click", handleLeaseCategoryGridClick);
  leaseCategoryGrid.addEventListener("keydown", handleDocumentRegisterKeydown);
  if (leaseCategoryFilter) {
    leaseCategoryFilter.addEventListener("change", handleLeaseCategoryFilterChange);
  }
  if (leaseRelatedToFilter) {
    leaseRelatedToFilter.addEventListener("change", handleLeaseRelatedToFilterChange);
  }
  if (leaseSortSelect) {
    leaseSortSelect.addEventListener("change", handleLeaseSortChange);
  }
  documentForm.addEventListener("submit", handleSaveDocument);
  documentCancelBtn.addEventListener("click", closeDocumentForm);
  documentDeleteBtn.addEventListener("click", handleDeleteDocument);
  documentExpiryInput.addEventListener("input", updateDocumentExpiryCalendarToggleState);
  documentBuildingSelect.addEventListener("change", function () {
    renderDocumentFormRelationships(documentTenancySelect.value, documentScheduleSelect.value);
  });
  contactsList.addEventListener("click", handleContactListClick);
  contactLinkedScheduleList.addEventListener("click", handleContactListClick);
  companiesList.addEventListener("click", handleCompanyListClick);
  templateLibraryList.addEventListener("click", handleTemplateLibraryListClick);
  scheduleOpsList.addEventListener("click", handleScheduleListClick);
  scheduleOpsList.addEventListener("keydown", handleScheduleListKeydown);
  scheduleFilterCategory.addEventListener("change", handleScheduleFilterChange);
  scheduleFilterStatus.addEventListener("change", handleScheduleFilterChange);
  scheduleFilterDuePeriod.addEventListener("change", handleScheduleFilterChange);
  historyList.addEventListener("click", handleHistoryListClick);
  historyList.addEventListener("keydown", handleHistoryListKeydown);
  tenancyDetailsList.addEventListener("click", handleTenancyDetailsClick);
  moduleContentBody.addEventListener("click", handleModuleContentClick);
  breadcrumbNav.addEventListener("click", handleBreadcrumbClick);

  function startApplication() {
    ensureMasterMigration();
    normalizeAllBuildingsForWorkflowCollections();
    ensureTemplateLibrarySeeded();
    detachDeletedMasterTemplateReferences();
    migrateBuildingRolesIntoContactsForAllBuildings();
    migratePropertyContactsOutOfTenancies();

    window.BuildingStorage.syncToIndexedDB().then(function (result) {
      if (!result.success) {
        console.warn("IndexedDB startup synchronization did not complete:", result.reason);
      }
    });

    showDashboard();
    renderBuildings();
  }

  if (window.ComplianceHQIndexedDB) {
    window.BuildingStorage.initializeFromIndexedDB().then(function (result) {
      if (!result.success) {
        console.warn("IndexedDB initialization did not complete:", result.reason);
      }

      startApplication();
    });
  } else {
    startApplication();
  }
})();
