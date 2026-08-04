(function () {
  const dashboardView = document.getElementById("dashboard-view");
  const templateLibraryView = document.getElementById("template-library-view");
  const formView = document.getElementById("form-view");
  const overviewView = document.getElementById("overview-view");
  const tenancyView = document.getElementById("tenancy-view");
  const contactsView = document.getElementById("contacts-view");
  const companiesView = document.getElementById("companies-view");
  const scheduleView = document.getElementById("schedule-view");
  const historyView = document.getElementById("history-view");
  const completeTaskView = document.getElementById("complete-task-view");
  const placeholderView = document.getElementById("placeholder-view");
  const editView = document.getElementById("edit-view");
  const breadcrumbNav = document.getElementById("breadcrumb-nav");
  const cancelBtn = document.getElementById("cancel-btn");
  const selectedBuildingBtn = document.getElementById("selected-building-btn");
  const selectedBuildingName = document.getElementById("selected-building-name");
  const selectedBuildingStatus = document.getElementById("selected-building-status");
  const buildingSelectorList = document.getElementById("building-selector-list");
  const workspaceDashboardCard = document.getElementById("workspace-dashboard-card");
  const workspaceDashboardSummary = document.getElementById("workspace-dashboard-summary");
  const workspaceModuleNav = document.getElementById("workspace-module-nav");
  const overviewBackBtn = document.getElementById("overview-back-btn");
  const editBuildingBtn = document.getElementById("edit-building-btn");
  const tenancyBackBtn = document.getElementById("tenancy-back-btn");
  const contactsBackBtn = document.getElementById("contacts-back-btn");
  const companiesBackBtn = document.getElementById("companies-back-btn");
  const scheduleBackBtn = document.getElementById("schedule-back-btn");
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
  const cancelContactBtn = document.getElementById("cancel-contact-btn");
  const addTenancyBtn = document.getElementById("add-tenancy-btn");
  const addContactBtn = document.getElementById("add-contact-btn");
  const addContactInlineBtn = document.getElementById("add-contact-inline-btn");
  const addCompanyBtn = document.getElementById("add-company-btn");
  const addCompanyInlineBtn = document.getElementById("add-company-inline-btn");
  const editTenancyBtn = document.getElementById("edit-tenancy-btn");
  const tenancyContactsBtn = document.getElementById("tenancy-contacts-btn");
  const tenancyDocumentsBtn = document.getElementById("tenancy-documents-btn");
  const deleteBuildingBtn = document.getElementById("delete-building-btn");
  const emptyState = document.getElementById("empty-state");
  const overviewBuildingName = document.getElementById("overview-building-name");
  const overviewStreetAddress = document.getElementById("overview-street-address");
  const overviewCity = document.getElementById("overview-city");
  const overviewStatus = document.getElementById("overview-status");
  const moduleNav = document.getElementById("module-nav");
  const moduleContentTitle = document.getElementById("module-content-title");
  const moduleContentBody = document.getElementById("module-content-body");
  const tenancyBuildingName = document.getElementById("tenancy-building-name");
  const tenancyEmptyState = document.getElementById("tenancy-empty-state");
  const tenancyDetailsCard = document.getElementById("tenancy-details-card");
  const tenancyFormCard = document.getElementById("tenancy-form-card");
  const tenancyFormTitle = document.getElementById("tenancy-form-title");
  const tenancyDetailsList = document.getElementById("tenancy-details-list");
  const endTenancyBtn = document.getElementById("end-tenancy-btn");
  const tenancyTabCurrent = document.getElementById("tenancy-tab-current");
  const tenancyTabHistory = document.getElementById("tenancy-tab-history");
  const tenancyCurrentPanel = document.getElementById("tenancy-current-panel");
  const tenancyHistoryPanel = document.getElementById("tenancy-history-panel");
  const tenancyHistoryList = document.getElementById("tenancy-history-list");
  const contactsBuildingName = document.getElementById("contacts-building-name");
  const contactsEmptyState = document.getElementById("contacts-empty-state");
  const contactsListCard = document.getElementById("contacts-list-card");
  const contactsList = document.getElementById("contacts-list");
  const contactsSearch = document.getElementById("contacts-search");
  const contactFormCard = document.getElementById("contact-form-card");
  const contactFormTitle = document.getElementById("contact-form-title");
  const contactExistingForm = document.getElementById("contact-existing-form");
  const addExistingContactBtn = document.getElementById("add-existing-contact-btn");
  const addExistingContactInlineBtn = document.getElementById("add-existing-contact-inline-btn");
  const contactFormSelectExistingBtn = document.getElementById("contact-form-select-existing-btn");
  const contactFormCreateNewBtn = document.getElementById("contact-form-create-new-btn");
  const cancelExistingContactBtn = document.getElementById("cancel-existing-contact-btn");
  const existingContactId = document.getElementById("existingContactId");
  const existingContactRelationship = document.getElementById("existingContactRelationship");
  const existingContactCustomWrap = document.getElementById("existing-contact-custom-wrap");
  const existingContactCustomRelationship = document.getElementById("existingContactCustomRelationship");
  const contactNewCompanyWrap = document.getElementById("contact-new-company-wrap");
  const contactCustomRelationshipWrap = document.getElementById("contact-custom-relationship-wrap");
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
  const scheduleOverdueList = document.getElementById("schedule-overdue-list");
  const scheduleWeekList = document.getElementById("schedule-week-list");
  const scheduleMonthList = document.getElementById("schedule-month-list");
  const scheduleFutureList = document.getElementById("schedule-future-list");
  const scheduleCompletedList = document.getElementById("schedule-completed-list");
  const scheduleTabUpcoming = document.getElementById("schedule-tab-upcoming");
  const scheduleTabCompleted = document.getElementById("schedule-tab-completed");
  const scheduleUpcomingPanel = document.getElementById("schedule-upcoming-panel");
  const scheduleCompletedPanel = document.getElementById("schedule-completed-panel");
  const historyList = document.getElementById("history-list");
  const cancelCompleteTaskBtn = document.getElementById("cancel-complete-task-btn");
  const cancelCompanyBtn = document.getElementById("cancel-company-btn");
  const placeholderTitle = document.getElementById("placeholder-title");
  const placeholderDescription = document.getElementById("placeholder-description");
  const placeholderBuildingName = document.getElementById("placeholder-building-name");
  const placeholderMessage = document.getElementById("placeholder-message");
  const placeholderBackBtn = document.getElementById("placeholder-back-btn");
  const setupProgress = document.getElementById("setup-progress");
  const setupStep1 = document.getElementById("setup-step-1");
  const setupStep2 = document.getElementById("setup-step-2");
  const setupStep3 = document.getElementById("setup-step-3");
  const setupStep4 = document.getElementById("setup-step-4");
  const setupStep5 = document.getElementById("setup-step-5");
  const setupStep6 = document.getElementById("setup-step-6");
  const setupBackBtn = document.getElementById("setup-back-btn");
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
  const cancelTemplateBtn = document.getElementById("cancel-template-btn");

  let activeBuildingId = "";
  let activeModule = "Overview";
  let tenancyFormMode = "add";
  let contactFormMode = "add";
  let activeContactId = "";
  let contactsSearchQuery = "";
  let companyFormMode = "add";
  let activeCompanyId = "";
  let templateFormMode = "add";
  let activeTemplateId = "";
  let activeScheduleItemId = "";
  let activeTenancyTab = "current";
  let activeScheduleTab = "upcoming";
  let selectorOpen = false;
  let breadcrumbItems = [];
  let placeholderBackHandler = null;

  const ACTIVE_BUILDING_KEY = "buildingManagerActiveBuildingId";

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
    "Utilities",
    "Grounds",
    "General",
  ];

  const TEMPLATE_FREQUENCY_OPTIONS = [
    "One-off",
    "Monthly",
    "Quarterly",
    "6 Monthly",
    "Annual",
    "2 Yearly",
    "3 Yearly",
    "5 Yearly",
    "Custom",
  ];

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
      return "Building";
    }
    return building.buildingName;
  }

  function goToDashboard() {
    showDashboard();
    renderBuildings();
  }

  function setBreadcrumbs(items) {
    breadcrumbItems = items;
    breadcrumbNav.innerHTML = items
      .map(function (item, index) {
        const separator = index < items.length - 1 ? '<span class="breadcrumb-sep">&gt;</span>' : "";
        return `<button class="breadcrumb-link" type="button" data-crumb-index="${index}">${item.label}</button>${separator}`;
      })
      .join("");
  }

  function hideAllViews() {
    dashboardView.classList.remove("is-active");
    templateLibraryView.classList.remove("is-active");
    formView.classList.remove("is-active");
    overviewView.classList.remove("is-active");
    tenancyView.classList.remove("is-active");
    contactsView.classList.remove("is-active");
    companiesView.classList.remove("is-active");
    scheduleView.classList.remove("is-active");
    historyView.classList.remove("is-active");
    completeTaskView.classList.remove("is-active");
    placeholderView.classList.remove("is-active");
    editView.classList.remove("is-active");
  }

  function showTemplateLibraryView() {
    hideAllViews();
    templateLibraryView.classList.add("is-active");
    setBreadcrumbs([
      { label: "Buildings", onClick: goToDashboard },
      { label: "Template Library", onClick: openTemplateLibrary },
    ]);
  }

  function showDashboard() {
    hideAllViews();
    dashboardView.classList.add("is-active");
    setSelectorOpen(false);
    setBreadcrumbs([
      { label: "Buildings", onClick: goToDashboard },
    ]);
  }

  function showForm() {
    hideAllViews();
    formView.classList.add("is-active");
    startSetupWorkflow();
  }

  function showOverview() {
    hideAllViews();
    overviewView.classList.add("is-active");
    setBreadcrumbs([
      { label: "Buildings", onClick: goToDashboard },
      { label: getActiveBuildingName(), onClick: function () { openOverviewById(activeBuildingId); } },
    ]);
  }

  function showEditForm() {
    hideAllViews();
    editView.classList.add("is-active");
    setBreadcrumbs([
      { label: "Buildings", onClick: goToDashboard },
      { label: getActiveBuildingName(), onClick: function () { openOverviewById(activeBuildingId); } },
      { label: "Edit Building", onClick: showEditForm },
    ]);
  }

  function showTenancyView() {
    hideAllViews();
    tenancyView.classList.add("is-active");
    setBreadcrumbs([
      { label: "Buildings", onClick: goToDashboard },
      { label: getActiveBuildingName(), onClick: function () { openOverviewById(activeBuildingId); } },
      { label: "Current Tenancy", onClick: function () { openCurrentTenancyView(activeBuildingId); } },
    ]);
  }

  function showContactsView() {
    hideAllViews();
    contactsView.classList.add("is-active");
    setBreadcrumbs([
      { label: "Buildings", onClick: goToDashboard },
      { label: getActiveBuildingName(), onClick: function () { openOverviewById(activeBuildingId); } },
      { label: "Contacts", onClick: openContactsView },
    ]);
  }

  function showCompaniesView() {
    hideAllViews();
    companiesView.classList.add("is-active");
    setBreadcrumbs([
      { label: "Buildings", onClick: goToDashboard },
      { label: getActiveBuildingName(), onClick: function () { openOverviewById(activeBuildingId); } },
      { label: "Companies", onClick: openCompaniesView },
    ]);
  }

  function showScheduleView() {
    hideAllViews();
    scheduleView.classList.add("is-active");
    setBreadcrumbs([
      { label: "Buildings", onClick: goToDashboard },
      { label: getActiveBuildingName(), onClick: function () { openOverviewById(activeBuildingId); } },
      { label: "Schedule", onClick: function () { openScheduleView(activeBuildingId); } },
    ]);
  }

  function showHistoryView() {
    hideAllViews();
    historyView.classList.add("is-active");
    setBreadcrumbs([
      { label: "Buildings", onClick: goToDashboard },
      { label: getActiveBuildingName(), onClick: function () { openOverviewById(activeBuildingId); } },
      { label: "Completed", onClick: function () { openHistoryView(activeBuildingId); } },
    ]);
  }

  function showCompleteTaskView() {
    hideAllViews();
    completeTaskView.classList.add("is-active");
    setBreadcrumbs([
      { label: "Buildings", onClick: goToDashboard },
      { label: getActiveBuildingName(), onClick: function () { openOverviewById(activeBuildingId); } },
      { label: "Schedule", onClick: function () { openScheduleView(activeBuildingId); } },
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
        <p><strong>Building Health:</strong> ${health}</p>
        <div class="card-meta">
          <span class="status-pill">${building.status}</span>
          <button class="btn btn-secondary open-building-btn" type="button">Open Building</button>
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
    const activeValue = String(template.active || "Yes");
    const active = activeValue === "No" ? "No" : "Yes";

    return {
      id: String(template.id || window.BuildingStorage.createId()),
      name: String(template.name || "").trim(),
      category: category,
      defaultFrequency: frequency,
      defaultReminderPeriod: String(template.defaultReminderPeriod || "30 days before").trim(),
      suggestedDocuments: normalizeSuggestedDocuments(template.suggestedDocuments),
      defaultNotes: String(template.defaultNotes || "").trim(),
      active: active,
      defaultChecked: Boolean(template.defaultChecked),
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

  function ensureTenantContactRefs(building) {
    if (!building.tenancy) {
      return [];
    }

    if (Array.isArray(building.tenancy.contactRefs)) {
      return building.tenancy.contactRefs;
    }

    return [];
  }

  function normalizeRelationshipLabel(value) {
    const trimmed = String(value || "").trim();
    if (!trimmed) {
      return "Other";
    }
    return LEGACY_RELATIONSHIP_NORMALIZATION[trimmed] || trimmed;
  }

  function isKnownRelationship(value) {
    return RELATIONSHIP_OPTIONS.includes(value);
  }

  function getBuildingContactRelationshipMap(building) {
    if (!building) {
      return {};
    }

    if (building.tenancy) {
      const tenancyMap = building.tenancy.contactRelationshipById;
      return tenancyMap && typeof tenancyMap === "object" ? tenancyMap : {};
    }

    const map = building.contactRelationshipById;
    return map && typeof map === "object" ? map : {};
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

  function applyContactRelationshipToBuilding(building, contactId, relationship) {
    const normalizedRelationship = normalizeRelationshipLabel(relationship);
    const now = new Date().toISOString();

    if (building.tenancy) {
      const refs = ensureTenantContactRefs(building);
      const nextRefs = refs.includes(contactId) ? refs.slice() : refs.concat(contactId);
      const nextMap = {
        ...getBuildingContactRelationshipMap(building),
        [contactId]: normalizedRelationship,
      };

      return {
        ...building,
        tenancy: {
          ...building.tenancy,
          contactRefs: nextRefs,
          contactRelationshipById: nextMap,
        },
        lastUpdated: now,
      };
    }

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

    if (building.tenancy) {
      const refs = ensureTenantContactRefs(building).filter(function (refId) {
        return refId !== contactId;
      });

      return {
        ...building,
        tenancy: {
          ...building.tenancy,
          contactRefs: refs,
          contactRelationshipById: nextMap,
        },
        lastUpdated: new Date().toISOString(),
      };
    }

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

  function saveActiveBuildingId(buildingId) {
    if (!buildingId) {
      localStorage.removeItem(ACTIVE_BUILDING_KEY);
      return;
    }
    localStorage.setItem(ACTIVE_BUILDING_KEY, buildingId);
  }

  function getSavedActiveBuildingId() {
    return String(localStorage.getItem(ACTIVE_BUILDING_KEY) || "");
  }

  function getBuildingStatusLevel(building) {
    const normalized = ensureWorkflowCollections(building);
    const scheduleItems = Array.isArray(normalized.scheduleItems) ? normalized.scheduleItems : [];
    if (scheduleItems.length === 0) {
      return "grey";
    }

    const overdueCount = scheduleItems.filter(function (item) {
      return getScheduleBucket(item) === "overdue";
    }).length;
    const soonCount = scheduleItems.filter(function (item) {
      const bucket = getScheduleBucket(item);
      return bucket === "week" || bucket === "month";
    }).length;

    if (overdueCount >= 3) {
      return "red";
    }
    if (overdueCount >= 1) {
      return "orange";
    }
    if (soonCount >= 1) {
      return "yellow";
    }
    return "green";
  }

  function getStatusDot(level) {
    const map = {
      green: "🟢",
      yellow: "🟡",
      orange: "🟠",
      red: "🔴",
      grey: "⚪",
    };
    return map[level] || "⚪";
  }

  function updateSelectedBuildingHeader(building) {
    if (!building) {
      selectedBuildingName.textContent = "Select a building";
      selectedBuildingStatus.className = "building-status-indicator status-grey";
      return;
    }

    selectedBuildingName.textContent = building.buildingName;
    selectedBuildingStatus.className = "building-status-indicator status-" + getBuildingStatusLevel(building);
  }

  function setSelectorOpen(isOpen) {
    selectorOpen = isOpen;
    selectedBuildingBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
    buildingSelectorList.classList.toggle("is-open", isOpen);
  }

  function ensureActiveBuildingSelection(buildings) {
    if (!Array.isArray(buildings) || buildings.length === 0) {
      activeBuildingId = "";
      saveActiveBuildingId("");
      return;
    }

    if (activeBuildingId && buildings.some(function (building) { return building.id === activeBuildingId; })) {
      return;
    }

    const savedId = getSavedActiveBuildingId();
    const saved = buildings.find(function (building) {
      return building.id === savedId;
    });
    activeBuildingId = saved ? saved.id : buildings[0].id;
    saveActiveBuildingId(activeBuildingId);
  }

  function renderSelectorList(buildings) {
    const rows = buildings
      .map(function (building) {
        const level = getBuildingStatusLevel(building);
        const selected = building.id === activeBuildingId;
        const selectedClass = selected ? " is-selected" : "";
        return `
          <button class="selector-option${selectedClass}" type="button" data-building-id="${building.id}">
            <span>${building.buildingName}</span>
            <span class="selector-dot">${getStatusDot(level)}</span>
          </button>
        `;
      })
      .join("");

    const addRow = `
      <button class="selector-option selector-add-new" type="button" data-selector-action="add-building">
        <span>+ Add New Building</span>
      </button>
    `;

    buildingSelectorList.innerHTML = rows + addRow;
  }

  function renderWorkspaceSummary(building) {
    if (!building) {
      workspaceDashboardSummary.innerHTML = '<div><dt>Building</dt><dd>Not selected</dd></div>';
      return;
    }

    const normalized = ensureWorkflowCollections(building);
    const currentTenant = normalized.tenancy ? normalized.tenancy.companyName : "None";
    const documentsCount = normalized.tenancy && Array.isArray(normalized.tenancy.documents) ? normalized.tenancy.documents.length : 0;
    const overdueCount = normalized.scheduleItems.filter(function (item) {
      return getScheduleBucket(item) === "overdue";
    }).length;
    const nextItem = normalized.scheduleItems
      .slice()
      .sort(function (a, b) {
        return new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime();
      })[0] || null;
    const nextItemText = nextItem ? `${nextItem.taskName} (${formatDate(nextItem.dueDate)})` : "None scheduled";

    workspaceDashboardSummary.innerHTML = `
      <div><dt>Building Name</dt><dd>${normalized.buildingName}</dd></div>
      <div><dt>Address</dt><dd>${normalized.streetAddress}, ${normalized.city}</dd></div>
      <div><dt>Current Tenant</dt><dd>${currentTenant}</dd></div>
      <div><dt>Next Scheduled Item</dt><dd>${nextItemText}</dd></div>
      <div><dt>Overdue Items</dt><dd>${overdueCount}</dd></div>
      <div><dt>Documents</dt><dd>${documentsCount}</dd></div>
    `;
  }

  function renderBuildings() {
    const buildings = window.BuildingStorage.getBuildings();

    if (buildings.length === 0) {
      emptyState.style.display = "block";
      workspaceDashboardCard.style.display = "none";
      workspaceModuleNav.style.display = "none";
      renderSelectorList([]);
      updateSelectedBuildingHeader(null);
      return;
    }

    ensureActiveBuildingSelection(buildings);
    const activeBuilding = findBuildingById(activeBuildingId);

    emptyState.style.display = "none";
    workspaceDashboardCard.style.display = "block";
    workspaceModuleNav.style.display = "grid";
    renderSelectorList(buildings);
    updateSelectedBuildingHeader(activeBuilding);
    renderWorkspaceSummary(activeBuilding);
  }

  function createEmptySetupState() {
    return {
      currentStep: 1,
      buildingDetails: null,
      tenancy: null,
      linkedContacts: [],
      selectedTemplateIds: [],
      configuredScheduleItems: [],
      createdBuildingId: "",
      finishSummary: null,
    };
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
      { label: "Buildings", onClick: goToDashboard },
      { label: "New Building Setup", onClick: showForm },
    ]);
    renderSetupRelationshipOptions(setupExistingContactRelationship, "Other");
    renderSetupRelationshipOptions(setupNewContactRelationship, "Other");
    renderSetupTenancyCompanyOptions("");
    renderSetupContactCompanyOptions("");
    renderSetupExistingContactOptions("");
    renderTemplateLibrary();
    showSetupStep(1);
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

  function setRelationshipSelection(selectElement, customWrap, customInput, value) {
    const normalized = normalizeRelationshipLabel(value);
    renderContactRelationshipOptions(selectElement, normalized);

    if (isKnownRelationship(normalized) && normalized !== "Other") {
      selectElement.value = normalized;
      customWrap.style.display = "none";
      customInput.required = false;
      customInput.value = "";
      return;
    }

    selectElement.value = "Other";
    customWrap.style.display = "block";
    customInput.required = true;
    customInput.value = normalized !== "Other" ? normalized : "";
  }

  function resolveRelationshipValue(selectValue, customValue) {
    const selected = normalizeRelationshipLabel(selectValue);
    if (selected !== "Other") {
      return selected;
    }

    const custom = String(customValue || "").trim();
    return custom ? custom : "Other";
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
      return `${name} (${entry.relationship})`;
    }
    return `${entry.name} (${entry.relationship})`;
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
    const templates = getScheduledItemTemplates().filter(function (template) {
      return template.active === "Yes";
    });

    if (templates.length === 0) {
      setupTemplateList.innerHTML = '<p class="module-placeholder">No active templates available. Add templates in the Template Library.</p>';
      return;
    }

    setupTemplateList.innerHTML = templates
      .map(function (template) {
        const checked = template.defaultChecked ? " checked" : "";
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
      setupConfigureList.innerHTML = '<p class="module-placeholder">No schedule items selected. You can finish setup now.</p>';
      return;
    }

    setupConfigureList.innerHTML = setupState.configuredScheduleItems
      .map(function (item, index) {
        return `
          <article class="module-content-card setup-config-card">
            <h3>${item.taskName}</h3>
            <label for="setupDueDate${index}">Next Due Date</label>
            <input id="setupDueDate${index}" type="date" data-config-index="${index}" data-field="dueDate" value="${item.dueDate}" />

            <label for="setupFrequency${index}">Frequency</label>
            <select id="setupFrequency${index}" data-config-index="${index}" data-field="frequency">${getFrequencyOptions(item.frequency)}</select>

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

  function captureTemplateSelection() {
    const selected = Array.from(setupTemplateList.querySelectorAll('input[type="checkbox"]'))
      .filter(function (input) {
        return input.checked;
      })
      .map(function (input) {
        return String(input.value || "");
      });

    setupState.selectedTemplateIds = selected;
    setupState.configuredScheduleItems = selected.map(function (templateId) {
      const template = getTemplateById(templateId);
      const frequency = template ? template.defaultFrequency : "Quarterly";
      return {
        templateId: templateId,
        taskName: template ? template.name : templateId,
        dueDate: getNextDueDatePlaceholder(new Date().toISOString().slice(0, 10), frequency),
        frequency: frequency,
        preferredCompanyId: "",
        preferredContactId: "",
      };
    });
  }

  function finalizeSetupAndCreateBuilding() {
    if (!setupState.buildingDetails) {
      alert("Building details are incomplete.");
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
        contactRefs: linkedContactIds.slice(),
        documents: [],
      };
    }

    const scheduleItems = setupState.configuredScheduleItems.map(function (item) {
      const preferredCompanyName = item.preferredCompanyId
        ? getCompanyNameById(item.preferredCompanyId, "")
        : "";

      const scheduleItem = {
        id: window.BuildingStorage.createId(),
        taskName: item.taskName,
        dueDate: item.dueDate,
        frequency: item.frequency,
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

    const buildingId = window.BuildingStorage.createId();
    const building = {
      id: buildingId,
      buildingName: setupState.buildingDetails.buildingName,
      streetAddress: setupState.buildingDetails.streetAddress,
      city: setupState.buildingDetails.city,
      owner: setupState.buildingDetails.owner,
      propertyManager: setupState.buildingDetails.propertyManager,
      buildingType: setupState.buildingDetails.buildingType,
      status: tenancy ? "Occupied" : "Vacant",
      notes: "",
      createdDate: now,
      lastUpdated: now,
      tenancy: tenancy,
      buildingContactAssignments: tenancy ? [] : linkedContactIds.slice(),
      buildingRoles: [],
      scheduleItems: scheduleItems,
      historyRecords: [],
    };

    window.BuildingStorage.addBuilding(building);

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
      <p>✔ Building Created</p>
      <p>${setupState.finishSummary.tenancyAdded ? "✔ Current Tenancy Added" : "✔ Current Tenancy Skipped"}</p>
      <p>✔ ${setupState.finishSummary.linkedContactsCount} Contacts Linked</p>
      <p>✔ ${setupState.finishSummary.createdScheduleCount} Scheduled Items Created</p>
    `;
  }

  function handleSetupStepOneSubmit(event) {
    event.preventDefault();
    setupState.buildingDetails = buildSetupBuildingDetails();
    showSetupStep(2);
  }

  function handleSetupCancel() {
    setupState = createEmptySetupState();
    showDashboard();
    renderBuildings();
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
    renderConfigureSelectedItems();
    showSetupStep(5);
  }

  function handleSetupStepFiveFinish() {
    const missingDueDate = setupState.configuredScheduleItems.some(function (item) {
      return !String(item.dueDate || "").trim();
    });
    if (missingDueDate) {
      alert("Please enter a next due date for all selected schedule items.");
      return;
    }

    finalizeSetupAndCreateBuilding();
  }

  function handleSetupOpenBuilding() {
    if (!setupState.createdBuildingId) {
      showDashboard();
      return;
    }

    openOverviewById(setupState.createdBuildingId);
  }

  function findBuildingById(buildingId) {
    return window.BuildingStorage.getBuildingById(buildingId);
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

  function toDateStart(value) {
    const date = new Date(value);
    date.setHours(0, 0, 0, 0);
    return date;
  }

  function getFrequencyDays(frequency) {
    const map = {
      Monthly: 30,
      Quarterly: 90,
      "6 Monthly": 182,
      Annual: 365,
      Custom: 30,
    };

    return map[frequency] || 30;
  }

  function getNextDueDatePlaceholder(baseDate, frequency) {
    const start = toDateStart(baseDate);
    const next = new Date(start.getTime() + getFrequencyDays(frequency) * 24 * 60 * 60 * 1000);
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

  function createDefaultScheduleItems() {
    const defaultCompany = ensureDefaultCompany();
    return [
      {
        id: window.BuildingStorage.createId(),
        taskName: "Quarterly HVAC Inspection",
        dueDate: getNextDueDatePlaceholder(new Date().toISOString().slice(0, 10), "Quarterly"),
        frequency: "Quarterly",
        preferredCompany: "ABC HVAC Ltd",
        preferredCompanyId: defaultCompany.id,
        preferredContactId: "",
        status: "Due This Week",
        createdDate: new Date().toISOString(),
        lastUpdated: new Date().toISOString(),
      },
    ];
  }

  function ensureWorkflowCollections(building) {
    const next = {
      ...building,
      scheduleItems: Array.isArray(building.scheduleItems) ? building.scheduleItems : [],
      historyRecords: Array.isArray(building.historyRecords) ? building.historyRecords : [],
    };

    if (next.scheduleItems.length === 0 && next.historyRecords.length === 0) {
      next.scheduleItems = createDefaultScheduleItems();
    }

    next.scheduleItems = next.scheduleItems.map(function (item) {
      let preferredCompanyId = item.preferredCompanyId || "";
      if (!preferredCompanyId && item.preferredCompany) {
        const companies = getCompanies();
        let matched = companies.find(function (company) {
          return normalizeText(company.name) === normalizeText(item.preferredCompany);
        });

        if (!matched) {
          const now = new Date().toISOString();
          matched = {
            id: window.BuildingStorage.createId(),
            name: item.preferredCompany,
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
        preferredCompanyId: preferredCompanyId,
        preferredContactId: item.preferredContactId || "",
      };
    });

    return next;
  }

  function getScheduleBucket(item) {
    const today = toDateStart(new Date().toISOString().slice(0, 10));
    const due = toDateStart(item.dueDate);
    const diffDays = Math.floor((due.getTime() - today.getTime()) / (24 * 60 * 60 * 1000));

    if (diffDays < 0) {
      return "overdue";
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
    const bucket = getScheduleBucket(item);
    const map = {
      overdue: "Overdue",
      week: "Due This Week",
      month: "Due This Month",
      future: "Future",
    };

    return map[bucket] || "Future";
  }

  function buildScheduleCardHtml(item) {
    const preferredCompanyDisplay = getCompanyNameById(item.preferredCompanyId, item.preferredCompany);
    const preferredContactDisplay = item.preferredContactId ? getContactNameById(item.preferredContactId) : "Not set";
    return `
      <article class="building-card clickable-card schedule-card" data-schedule-id="${item.id}" role="button" tabindex="0" aria-label="Open ${item.taskName}">
        <h3>${item.taskName}</h3>
        <p><strong>Due</strong></p>
        <p>${formatDate(item.dueDate)}</p>
        <p><strong>Frequency</strong></p>
        <p>${item.frequency}</p>
        <p><strong>Preferred Company</strong></p>
        <p>${preferredCompanyDisplay}</p>
        <p><strong>Preferred Contact</strong></p>
        <p>${preferredContactDisplay}</p>
        <p><strong>Status</strong></p>
        <p>${getScheduleStatusText(item)}</p>
        <div class="card-meta">
          <button class="btn btn-primary complete-task-btn" type="button">Complete</button>
        </div>
        <span class="card-chevron">&gt;</span>
      </article>
    `;
  }

  function renderScheduleSection(container, items, emptyMessage) {
    if (items.length === 0) {
      container.innerHTML = `<p class="module-placeholder">${emptyMessage}</p>`;
      return;
    }

    container.innerHTML = items.map(buildScheduleCardHtml).join("");
  }

  function setScheduleTab(tabName) {
    activeScheduleTab = tabName === "completed" ? "completed" : "upcoming";
    const isUpcoming = activeScheduleTab === "upcoming";
    scheduleTabUpcoming.classList.toggle("is-active", isUpcoming);
    scheduleTabCompleted.classList.toggle("is-active", !isUpcoming);
    scheduleTabUpcoming.setAttribute("aria-selected", isUpcoming ? "true" : "false");
    scheduleTabCompleted.setAttribute("aria-selected", isUpcoming ? "false" : "true");
    scheduleUpcomingPanel.classList.toggle("is-active", isUpcoming);
    scheduleCompletedPanel.classList.toggle("is-active", !isUpcoming);
  }

  function renderCompletedRecords(container, records) {
    if (!records || records.length === 0) {
      container.innerHTML = '<p class="module-placeholder">No completed scheduled work.</p>';
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

  function renderSchedulePage(building) {
    const normalized = ensureWorkflowCollections(building);
    scheduleBuildingName.textContent = normalized.buildingName;

    const overdue = normalized.scheduleItems.filter(function (item) {
      return getScheduleBucket(item) === "overdue";
    });
    const week = normalized.scheduleItems.filter(function (item) {
      return getScheduleBucket(item) === "week";
    });
    const month = normalized.scheduleItems.filter(function (item) {
      return getScheduleBucket(item) === "month";
    });
    const future = normalized.scheduleItems.filter(function (item) {
      return getScheduleBucket(item) === "future";
    });

    renderScheduleSection(scheduleOverdueList, overdue, "No overdue items.");
    renderScheduleSection(scheduleWeekList, week, "No items due this week.");
    renderScheduleSection(scheduleMonthList, month, "No items due this month.");
    renderScheduleSection(scheduleFutureList, future, "No future items.");
    renderCompletedRecords(scheduleCompletedList, normalized.historyRecords);
  }

  function renderHistoryPage(building) {
    const normalized = ensureWorkflowCollections(building);
    historyBuildingName.textContent = normalized.buildingName;

    renderCompletedRecords(historyList, normalized.historyRecords);
  }

  function openScheduleView(buildingId) {
    const building = findBuildingById(buildingId);
    if (!building) {
      showDashboard();
      return;
    }

    activeBuildingId = building.id;
    const normalized = ensureWorkflowCollections(building);
    if (normalized !== building) {
      window.BuildingStorage.updateBuilding({
        ...building,
        scheduleItems: normalized.scheduleItems,
        historyRecords: normalized.historyRecords,
      });
    }

    renderSchedulePage(normalized);
    setScheduleTab(activeScheduleTab);
    showScheduleView();
  }

  function openHistoryView(buildingId) {
    activeScheduleTab = "completed";
    openScheduleView(buildingId);
  }

  function findScheduleItemById(building, itemId) {
    const normalized = ensureWorkflowCollections(building);
    return normalized.scheduleItems.find(function (item) {
      return item.id === itemId;
    });
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
    return {
      ...item,
      id: window.BuildingStorage.createId(),
      dueDate: getNextDueDatePlaceholder(completionDate, item.frequency),
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

  function getContactsForActiveBuilding() {
    const building = findBuildingById(activeBuildingId);
    if (!building) {
      return [];
    }

    let refs = [];
    if (building.tenancy) {
      refs = ensureTenantContactRefs(building);

      // Backward compatibility: if legacy embedded contacts exist but refs do not,
      // show those contacts until migration links are created.
      if (refs.length === 0 && Array.isArray(building.tenancy.contacts) && building.tenancy.contacts.length > 0) {
        return building.tenancy.contacts;
      }
    } else {
      refs = Array.isArray(building.buildingContactAssignments) ? building.buildingContactAssignments : [];
    }

    return refs
      .map(function (contactId) {
        return findContactById(contactId);
      })
      .filter(function (contact) {
        return Boolean(contact);
      });
  }

  function migrateBuildingRolesIntoContactsForAllBuildings() {
    const buildings = window.BuildingStorage.getBuildings();
    buildings.forEach(function (building) {
      const roles = Array.isArray(building.buildingRoles) ? building.buildingRoles : [];
      if (roles.length === 0) {
        return;
      }

      const refs = building.tenancy
        ? (Array.isArray(building.tenancy.contactRefs) ? building.tenancy.contactRefs.slice() : [])
        : (Array.isArray(building.buildingContactAssignments) ? building.buildingContactAssignments.slice() : []);

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
            responsibility: roleRelationship,
            lastUpdated: new Date().toISOString(),
          });
        }
      });

      if (buildingChanged) {
        if (building.tenancy) {
          window.BuildingStorage.updateBuilding({
            ...building,
            tenancy: {
              ...building.tenancy,
              contactRefs: refs,
            },
            lastUpdated: building.lastUpdated || new Date().toISOString(),
          });
          return;
        }

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
    tenancyEmptyState.style.display = hasTenancy ? "none" : "block";
    tenancyDetailsCard.style.display = hasTenancy && mode !== "form" ? "block" : "none";
    tenancyFormCard.style.display = mode === "form" ? "block" : "none";
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

  function renderTenancyHistory(building) {
    const tenancyHistory = Array.isArray(building.tenancyHistory) ? building.tenancyHistory : [];
    if (tenancyHistory.length === 0) {
      tenancyHistoryList.innerHTML = '<p class="module-placeholder">No previous tenants recorded.</p>';
      return;
    }

    tenancyHistoryList.innerHTML = tenancyHistory
      .map(function (entry) {
        return `
          <article class="building-card">
            <h3>${entry.companyName || "Previous Tenant"}</h3>
            <p><strong>Lease Dates:</strong> ${formatDate(entry.leaseStart)} - ${formatDate(entry.leaseEnd)}</p>
            <p><strong>Historic documents:</strong> ${getDocumentSummaryText(entry.documents || [])}</p>
            <p><strong>Historic contacts:</strong> ${getContactCountLabel(entry.contactRefs || [])}</p>
          </article>
        `;
      })
      .join("");
  }

  function renderTenancyDetails(tenancy) {
    const tradingName = tenancy.tradingName || "Not provided";
    const refs = Array.isArray(tenancy.contactRefs) ? tenancy.contactRefs : [];
    const legacyContacts = Array.isArray(tenancy.contacts) ? tenancy.contacts : [];
    const contactCountSource = refs.length > 0 ? refs : legacyContacts;
    const contactsSummary = getTenancySummaryText(contactCountSource, "Contact", "Contacts");
    const documentsSummary = getDocumentSummaryText(tenancy.documents);
    const companyNameDisplay = `<button type="button" class="inline-link tenancy-company-link">${tenancy.companyName}</button>`;

    tenancyDetailsList.innerHTML = `
      <div><dt>Current Tenant</dt><dd>${companyNameDisplay}</dd></div>
      <div><dt>Trading Name</dt><dd>${tradingName}</dd></div>
      <div><dt>Lease Dates</dt><dd>${formatDate(tenancy.leaseStart)} - ${formatDate(tenancy.leaseEnd)}</dd></div>
      <div><dt>Status</dt><dd>${tenancy.status}</dd></div>
      <div><dt>Associated Contacts</dt><dd>${contactsSummary}</dd></div>
      <div><dt>Lease Document</dt><dd>${documentsSummary}</dd></div>
    `;
  }

  function renderContactList(contacts) {
    const building = findBuildingById(activeBuildingId);
    const query = normalizeText(contactsSearchQuery);
    const enriched = contacts
      .map(function (contact) {
        const companyName = getCompanyNameById(contact.companyId, "Not set");
        const relationship = getBuildingRelationshipForContact(building, contact);
        return {
          contact: contact,
          companyName: companyName,
          relationship: relationship,
        };
      })
      .filter(function (entry) {
        if (!query) {
          return true;
        }

        return normalizeText(entry.contact.name).includes(query)
          || normalizeText(entry.companyName).includes(query)
          || normalizeText(entry.relationship).includes(query);
      });

    if (enriched.length === 0) {
      contactsList.innerHTML = '<p class="module-placeholder">No contacts match your search.</p>';
      return;
    }

    const grouped = {};
    CONTACT_RELATIONSHIP_GROUPS.forEach(function (group) {
      grouped[group.title] = {};
      group.relationships.forEach(function (relationship) {
        grouped[group.title][relationship] = [];
      });
    });

    const uncategorized = [];
    enriched.forEach(function (entry) {
      let matchedGroup = null;
      CONTACT_RELATIONSHIP_GROUPS.forEach(function (group) {
        if (group.relationships.includes(entry.relationship)) {
          matchedGroup = group;
        }
      });

      if (!matchedGroup) {
        uncategorized.push(entry);
        return;
      }

      grouped[matchedGroup.title][entry.relationship].push(entry);
    });

    function buildContactCard(entry) {
      const contact = entry.contact;
      return `
        <article class="building-card clickable-card" data-contact-id="${contact.id}" role="button" tabindex="0" aria-label="Open contact ${contact.name}">
          <h3><button class="inline-link contact-open-link" type="button">${contact.name}</button></h3>
          <p><strong>Company:</strong> <button class="inline-link company-open-link" type="button" data-company-id="${contact.companyId}">${entry.companyName}</button></p>
          <p><strong>Relationship:</strong> ${entry.relationship}</p>
          <p><strong>Mobile:</strong> ${contact.mobile || "Not provided"}</p>
          <p><strong>Email:</strong> ${contact.email || "Not provided"}</p>
          <div class="card-meta">
            <button class="btn btn-secondary contact-edit-btn" type="button">Edit</button>
            <button class="btn btn-danger contact-delete-btn" type="button">Remove</button>
          </div>
          <span class="card-chevron">&gt;</span>
        </article>
      `;
    }

    const groupSections = CONTACT_RELATIONSHIP_GROUPS.map(function (group) {
      const relationshipSections = group.relationships.map(function (relationship) {
        const entries = grouped[group.title][relationship];
        if (!entries || entries.length === 0) {
          return "";
        }

        return `
          <section class="contact-relationship-block">
            <h4>${relationship}</h4>
            <div class="building-list">${entries.map(buildContactCard).join("")}</div>
          </section>
        `;
      }).join("");

      if (!relationshipSections) {
        return "";
      }

      return `
        <section class="contact-group-block">
          <h3>${group.title}</h3>
          ${relationshipSections}
        </section>
      `;
    }).join("");

    const uncategorizedSection = uncategorized.length
      ? `
        <section class="contact-group-block">
          <h3>PROFESSIONAL</h3>
          <section class="contact-relationship-block">
            <h4>Other Relationships</h4>
            <div class="building-list">${uncategorized.map(buildContactCard).join("")}</div>
          </section>
        </section>
      `
      : "";

    contactsList.innerHTML = groupSections + uncategorizedSection;
  }

  function showModulePlaceholder(moduleName, message) {
    const descriptions = {
      "Tenancy History": "Previous tenancy records and notes.",
      Documents: "Building records, certificates and supporting files.",
      History: "Completed work and permanent records.",
    };

    placeholderTitle.textContent = moduleName;
    placeholderDescription.textContent = descriptions[moduleName] || "Module information for this building.";
    placeholderBuildingName.textContent = getActiveBuildingName();
    placeholderMessage.textContent = message;
    placeholderBackHandler = function () {
      openOverviewById(activeBuildingId);
    };

    setBreadcrumbs([
      { label: "Buildings", onClick: goToDashboard },
      { label: getActiveBuildingName(), onClick: function () { openOverviewById(activeBuildingId); } },
      { label: moduleName, onClick: function () { showModulePlaceholder(moduleName, message); } },
    ]);
    showPlaceholderViewPage();
  }

  function renderContactSectionState(mode) {
    if (mode === "form") {
      contactsEmptyState.style.display = "none";
      contactsListCard.style.display = "none";
      contactFormCard.style.display = "block";
      return;
    }

    const contacts = getContactsForActiveBuilding();
    contactFormCard.style.display = "none";

    if (contacts.length === 0) {
      contactsEmptyState.style.display = "block";
      contactsListCard.style.display = "none";
      return;
    }

    contactsEmptyState.style.display = "none";
    contactsListCard.style.display = "block";
    renderContactList(contacts);
  }

  function getCompanyIdsForBuilding(building) {
    if (!building) {
      return [];
    }

    const contactRefs = building.tenancy
      ? (Array.isArray(building.tenancy.contactRefs) ? building.tenancy.contactRefs : [])
      : (Array.isArray(building.buildingContactAssignments) ? building.buildingContactAssignments : []);
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
    populateTemplateFormOptions("General", "Annual");
    templateForm.elements.defaultReminderPeriod.value = "30 days before";
    templateForm.elements.active.value = "Yes";
  }

  function renderTemplateLibraryDirectory(templates) {
    templateLibraryList.innerHTML = templates
      .map(function (template) {
        return `
          <article class="building-card template-card" data-template-id="${template.id}">
            <h3>${template.name}</h3>
            <div class="template-directory-grid">
              <p><strong>Name:</strong> ${template.name}</p>
              <p><strong>Category:</strong> ${template.category}</p>
              <p><strong>Frequency:</strong> ${template.defaultFrequency}</p>
              <p><strong>Status:</strong> ${template.active === "Yes" ? "Active" : "Inactive"}</p>
            </div>
            <p><strong>Default Reminder:</strong> ${template.defaultReminderPeriod}</p>
            <p><strong>Suggested Documents:</strong> ${getSuggestedDocumentsText(template.suggestedDocuments)}</p>
            <p><strong>Default Notes:</strong> ${template.defaultNotes || "Not set"}</p>
            <div class="card-meta">
              <button class="btn btn-secondary template-edit-btn" type="button">Edit</button>
              <button class="btn btn-secondary template-duplicate-btn" type="button">Duplicate</button>
              <button class="btn btn-danger template-deactivate-btn" type="button" ${template.active === "No" ? "disabled" : ""}>Deactivate</button>
            </div>
          </article>
        `;
      })
      .join("");
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

    templateFormTitle.textContent = mode === "edit" ? "Edit Template" : "Add Template";
    if (mode === "edit" && template) {
      templateForm.elements.templateId.value = template.id;
      templateForm.elements.name.value = template.name || "";
      templateForm.elements.defaultReminderPeriod.value = template.defaultReminderPeriod || "30 days before";
      templateForm.elements.suggestedDocuments.value = getSuggestedDocumentsText(template.suggestedDocuments);
      templateForm.elements.defaultNotes.value = template.defaultNotes || "";
      templateForm.elements.active.value = template.active === "No" ? "No" : "Yes";
      populateTemplateFormOptions(template.category, template.defaultFrequency);
    }

    renderTemplateLibrarySectionState("form");
    showTemplateLibraryView();
    setBreadcrumbs([
      { label: "Buildings", onClick: goToDashboard },
      { label: "Template Library", onClick: openTemplateLibrary },
      { label: mode === "edit" ? "Edit Template" : "Add Template", onClick: function () { openTemplateForm(mode, template); } },
    ]);
  }

  function buildTemplatePayload(existingTemplate) {
    const formData = new FormData(templateForm);
    const now = new Date().toISOString();
    return normalizeTemplateRecord({
      id: existingTemplate && existingTemplate.id ? existingTemplate.id : window.BuildingStorage.createId(),
      name: String(formData.get("name") || "").trim(),
      category: String(formData.get("category") || "General").trim(),
      defaultFrequency: String(formData.get("defaultFrequency") || "Annual").trim(),
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
    if (activeBuildingId) {
      openScheduleView(activeBuildingId);
      return;
    }

    showDashboard();
    renderBuildings();
  }

  function handleCancelTemplate() {
    openTemplateLibrary();
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
  }

  function duplicateTemplate(templateId) {
    const template = findTemplateById(templateId);
    if (!template) {
      return;
    }

    const now = new Date().toISOString();
    const duplicate = {
      ...template,
      id: window.BuildingStorage.createId(),
      name: `${template.name} (Copy)`,
      createdDate: now,
      lastUpdated: now,
    };
    upsertTemplate(duplicate);
  }

  function handleTemplateLibraryListClick(event) {
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

    if (target.closest(".template-duplicate-btn")) {
      duplicateTemplate(templateId);
      openTemplateLibrary();
      return;
    }

    if (target.closest(".template-deactivate-btn") && selected.active === "Yes") {
      deactivateTemplate(templateId);
      openTemplateLibrary();
    }
  }

  function openContactsView() {
    const building = findBuildingById(activeBuildingId);
    if (!building) {
      showDashboard();
      return;
    }

    contactsBuildingName.textContent = building.buildingName;
    activeContactId = "";
    contactsSearchQuery = "";
    populateContactCompanySelect("");
    populateExistingContactSelect("");
    setRelationshipSelection(contactForm.elements.responsibility, contactCustomRelationshipWrap, contactForm.elements.customRelationship, "Other");
    setRelationshipSelection(existingContactRelationship, existingContactCustomWrap, existingContactCustomRelationship, "Other");
    if (contactsSearch) {
      contactsSearch.value = "";
    }
    renderContactSectionState("list");
    showContactsView();
  }

  function resetContactForm() {
    contactForm.reset();
    contactForm.elements.preferredContact.value = "Phone";
    contactForm.elements.active.value = "Yes";
    contactForm.elements.contactId.value = "";
    contactForm.elements.companyId.value = "";
    contactForm.elements.newCompanyName.value = "";
    contactNewCompanyWrap.style.display = "none";
    setRelationshipSelection(contactForm.elements.responsibility, contactCustomRelationshipWrap, contactForm.elements.customRelationship, "Other");
  }

  function resetExistingContactForm() {
    contactExistingForm.reset();
    setRelationshipSelection(existingContactRelationship, existingContactCustomWrap, existingContactCustomRelationship, "Other");
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

  function populateContactCompanySelect(selectedId) {
    const companies = getUniqueCompaniesByName();
    const options = ['<option value="">Select a company</option>'];
    companies.forEach(function (company) {
      const selected = company.id === selectedId ? " selected" : "";
      options.push(`<option value="${company.id}"${selected}>${company.name}</option>`);
    });
    options.push('<option value="__new__">+ Add new company</option>');
    contactForm.elements.companyId.innerHTML = options.join("");

    const hasSelected = companies.some(function (company) {
      return company.id === selectedId;
    });

    if (selectedId && !hasSelected) {
      const selectedCompany = findCompanyById(selectedId);
      if (selectedCompany) {
        const normalized = normalizeText(selectedCompany.name);
        const canonical = companies.find(function (company) {
          return normalizeText(company.name) === normalized;
        });
        if (canonical) {
          contactForm.elements.companyId.value = canonical.id;
        }
      }
    }
  }

  function handleContactCompanyChange() {
    const value = String(contactForm.elements.companyId.value || "");
    const isNewCompany = value === "__new__";
    contactNewCompanyWrap.style.display = isNewCompany ? "block" : "none";
    contactForm.elements.newCompanyName.required = isNewCompany;
    if (!isNewCompany) {
      contactForm.elements.newCompanyName.value = "";
    }
  }

  function handleContactRelationshipChange() {
    const selected = normalizeRelationshipLabel(contactForm.elements.responsibility.value);
    const isOther = selected === "Other";
    contactCustomRelationshipWrap.style.display = isOther ? "block" : "none";
    contactForm.elements.customRelationship.required = isOther;
    if (!isOther) {
      contactForm.elements.customRelationship.value = "";
    }
  }

  function handleExistingContactRelationshipChange() {
    const selected = normalizeRelationshipLabel(existingContactRelationship.value);
    const isOther = selected === "Other";
    existingContactCustomWrap.style.display = isOther ? "block" : "none";
    existingContactCustomRelationship.required = isOther;
    if (!isOther) {
      existingContactCustomRelationship.value = "";
    }
  }

  function populateExistingContactSelect(selectedId) {
    const options = ['<option value="">Select existing contact</option>'];
    getContacts().forEach(function (contact) {
      const selected = contact.id === selectedId ? " selected" : "";
      const company = contact.companyId ? getCompanyNameById(contact.companyId, "") : "";
      const suffix = company ? ` (${company})` : "";
      options.push(`<option value="${contact.id}"${selected}>${contact.name}${suffix}</option>`);
    });
    existingContactId.innerHTML = options.join("");
  }

  function openSelectExistingContactForm() {
    contactFormMode = "link-existing";
    resetExistingContactForm();
    populateExistingContactSelect("");
    contactFormTitle.textContent = "Select Existing Contact";
    contactExistingForm.style.display = "grid";
    contactForm.style.display = "none";

    renderContactSectionState("form");
    showContactsView();
    setBreadcrumbs([
      { label: "Buildings", onClick: goToDashboard },
      { label: getActiveBuildingName(), onClick: function () { openOverviewById(activeBuildingId); } },
      { label: "Contacts", onClick: openContactsView },
      { label: "Select Existing Contact", onClick: openSelectExistingContactForm },
    ]);
  }

  function openContactForm(mode, contact) {
    contactFormMode = mode;
    activeContactId = contact && contact.id ? contact.id : "";
    resetContactForm();
    populateContactCompanySelect(contact && contact.companyId ? contact.companyId : "");

    contactFormTitle.textContent = mode === "edit" ? "Edit Contact" : "Create New Contact";
    contactExistingForm.style.display = "none";
    contactForm.style.display = "grid";
    if (mode === "edit" && contact) {
      const building = findBuildingById(activeBuildingId);
      const relationship = getBuildingRelationshipForContact(building, contact);
      contactForm.elements.contactId.value = contact.id;
      contactForm.elements.name.value = contact.name || "";
      setRelationshipSelection(contactForm.elements.responsibility, contactCustomRelationshipWrap, contactForm.elements.customRelationship, relationship);
      contactForm.elements.mobile.value = contact.mobile || "";
      contactForm.elements.officePhone.value = contact.officePhone || "";
      contactForm.elements.email.value = contact.email || "";
      contactForm.elements.preferredContact.value = contact.preferredContactMethod || "Phone";
      contactForm.elements.active.value = contact.active || "Yes";
      contactForm.elements.notes.value = contact.notes || "";
    } else {
      setRelationshipSelection(contactForm.elements.responsibility, contactCustomRelationshipWrap, contactForm.elements.customRelationship, "Other");
    }

    renderContactSectionState("form");
    showContactsView();
    setBreadcrumbs([
      { label: "Buildings", onClick: goToDashboard },
      { label: getActiveBuildingName(), onClick: function () { openOverviewById(activeBuildingId); } },
      { label: "Contacts", onClick: openContactsView },
      { label: mode === "edit" ? "Edit Contact" : "Create New Contact", onClick: function () { openContactForm(mode, contact); } },
    ]);
  }

  function buildContactPayload(existingContact) {
    const formData = new FormData(contactForm);
    const now = new Date().toISOString();
    const relationship = resolveRelationshipValue(formData.get("responsibility"), formData.get("customRelationship"));
    return {
      id: existingContact && existingContact.id ? existingContact.id : window.BuildingStorage.createId(),
      companyId: String(formData.get("companyId") || "").trim(),
      name: String(formData.get("name") || "").trim(),
      responsibility: relationship,
      mobile: String(formData.get("mobile") || "").trim(),
      officePhone: String(formData.get("officePhone") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      preferredContactMethod: String(formData.get("preferredContact") || "Phone"),
      active: String(formData.get("active") || "Yes"),
      notes: String(formData.get("notes") || "").trim(),
      createdDate: existingContact && existingContact.createdDate ? existingContact.createdDate : now,
      lastUpdated: now,
    };
  }

  function handleLinkExistingContact(event) {
    event.preventDefault();

    const selectedContactId = String(existingContactId.value || "").trim();
    if (!selectedContactId) {
      alert("Please select an existing contact.");
      return;
    }

    const contact = findContactById(selectedContactId);
    if (!contact) {
      alert("Selected contact was not found.");
      return;
    }

    const relationship = resolveRelationshipValue(existingContactRelationship.value, existingContactCustomRelationship.value);
    const updatedContact = {
      ...contact,
      responsibility: relationship,
      lastUpdated: new Date().toISOString(),
    };

    upsertContactForActiveTenancy(updatedContact);
    renderBuildings();
    openContactsView();
  }

  function upsertContactForActiveTenancy(payload) {
    const building = findBuildingById(activeBuildingId);
    if (!building) {
      return;
    }

    window.BuildingStorage.upsertContact(payload);

    const updated = applyContactRelationshipToBuilding(building, payload.id, payload.responsibility || "Other");
    window.BuildingStorage.updateBuilding(updated);
  }

  function deleteContactForActiveTenancy(contactId) {
    const building = findBuildingById(activeBuildingId);
    if (!building) {
      return;
    }

    const updated = removeContactRelationshipFromBuilding(building, contactId);
    window.BuildingStorage.updateBuilding(updated);
  }

  function renderCurrentTenancyPage(building) {
    tenancyBuildingName.textContent = building.buildingName;
    renderTenancyHistory(building);

    if (!building.tenancy) {
      renderTenancySectionState(false, "empty");
      setTenancyTab(activeTenancyTab);
      return;
    }

    renderTenancySectionState(true, "details");
    renderTenancyDetails(building.tenancy);
    setTenancyTab(activeTenancyTab);
  }

  function openCurrentTenancyView(buildingId) {
    const building = findBuildingById(buildingId);
    if (!building) {
      showDashboard();
      return;
    }

    activeBuildingId = building.id;
    activeTenancyTab = "current";
    renderCurrentTenancyPage(building);
    showTenancyView();
  }

  function buildTenancyPayload(building, existingTenancy) {
    const formData = new FormData(tenancyForm);
    const companyName = String(formData.get("companyName") || "").trim();
    const company = ensureCompanyByName(companyName, "Tenant");
    return {
      id: existingTenancy && existingTenancy.id ? existingTenancy.id : window.BuildingStorage.createId(),
      companyName: companyName,
      companyId: company ? company.id : "",
      tradingName: String(formData.get("tradingName") || "").trim(),
      leaseStart: String(formData.get("leaseStart") || "").trim(),
      leaseEnd: String(formData.get("leaseEnd") || "").trim(),
      status: String(formData.get("status") || "Occupied"),
      notes: String(formData.get("notes") || "").trim(),
      contacts: existingTenancy && Array.isArray(existingTenancy.contacts) ? existingTenancy.contacts : [],
      contactRefs: existingTenancy && Array.isArray(existingTenancy.contactRefs) ? existingTenancy.contactRefs : [],
      documents: existingTenancy && Array.isArray(existingTenancy.documents) ? existingTenancy.documents : [],
    };
  }

  function openTenancyForm(mode) {
    const building = findBuildingById(activeBuildingId);
    if (!building) {
      showDashboard();
      return;
    }

    tenancyFormMode = mode;
    tenancyForm.reset();
    tenancyFormTitle.textContent = mode === "edit" ? "Edit Current Tenancy" : "Add Current Tenancy";

    if (mode === "edit" && building.tenancy) {
      tenancyForm.elements.companyName.value = building.tenancy.companyName || "";
      tenancyForm.elements.tradingName.value = building.tenancy.tradingName || "";
      tenancyForm.elements.leaseStart.value = building.tenancy.leaseStart || "";
      tenancyForm.elements.leaseEnd.value = building.tenancy.leaseEnd || "";
      tenancyForm.elements.status.value = building.tenancy.status || "Occupied";
      tenancyForm.elements.notes.value = building.tenancy.notes || "";
    }

    renderTenancySectionState(Boolean(building.tenancy), "form");
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
    const documentsCount = normalized.tenancy && Array.isArray(normalized.tenancy.documents) ? normalized.tenancy.documents.length : 0;
    const lastActivity = formatDateTime(normalized.lastUpdated);
    const address = `${normalized.streetAddress}, ${normalized.city}`;

    moduleContentTitle.textContent = "Dashboard Summary";
    moduleContentBody.innerHTML = `
      <dl class="snapshot-list dashboard-snapshot-list">
        <div><dt>Building Name</dt><dd>${normalized.buildingName}</dd></div>
        <div><dt>Address</dt><dd>${address}</dd></div>
        <div><dt>Building Health</dt><dd>${getHealthLabel(normalized)}</dd></div>
        <div><dt>Current Tenant</dt><dd>${currentTenantDisplay}</dd></div>
        <div><dt>Next Scheduled Item</dt><dd>${nextScheduledItem}</dd></div>
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

    activeBuildingId = buildingId;
    saveActiveBuildingId(buildingId);
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
    const current = findBuildingById(activeBuildingId);
    if (!current) {
      showDashboard();
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
      scheduleItems: Array.isArray(current.scheduleItems) ? current.scheduleItems : createDefaultScheduleItems(),
      historyRecords: Array.isArray(current.historyRecords) ? current.historyRecords : [],
    };

    window.BuildingStorage.updateBuilding(updated);
    renderBuildings();
    openOverviewById(updated.id);
  }

  function handleSaveTenancy(event) {
    event.preventDefault();
    const current = findBuildingById(activeBuildingId);
    if (!current) {
      showDashboard();
      renderBuildings();
      return;
    }

    const tenancyPayload = buildTenancyPayload(current, current.tenancy || null);
    const updated = {
      ...current,
      tenancy: tenancyPayload,
      lastUpdated: new Date().toISOString(),
    };

    window.BuildingStorage.updateBuilding(updated);
    renderBuildings();
    renderCurrentTenancyPage(updated);
  }

  function handleAddContact() {
    openContactForm("add");
  }

  function handleAddExistingContact() {
    openSelectExistingContactForm();
  }

  function handleAddCompany() {
    openCompanyForm("add");
  }

  function handleSaveContact(event) {
    event.preventDefault();

    const contacts = getContactsForActiveBuilding();
    let existingContact = null;
    if (contactFormMode === "edit") {
      existingContact = contacts.find(function (contact) {
        return contact.id === activeContactId;
      }) || null;
    }

    const payload = buildContactPayload(existingContact);
    if (payload.companyId === "__new__") {
      const newCompanyName = String(contactForm.elements.newCompanyName.value || "").trim();
      if (!newCompanyName) {
        alert("Please enter a company name.");
        return;
      }

      const company = ensureCompanyByName(newCompanyName, "Service");
      if (!company) {
        alert("Unable to create company.");
        return;
      }
      payload.companyId = company.id;
    }

    if (!payload.companyId) {
      alert("Please select a company.");
      return;
    }

    upsertContactForActiveTenancy(payload);
    renderBuildings();
    openContactsView();
  }

  function handleCancelContact() {
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

    const card = target.closest(".building-card");
    if (!card) {
      return;
    }

    const contactId = card.getAttribute("data-contact-id") || "";
    if (!contactId) {
      return;
    }

    const contacts = getContactsForActiveBuilding();
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

    if (target.closest(".contact-open-link") || target.closest(".contact-edit-btn")) {
      openContactForm("edit", selected);
      return;
    }

    if (target.closest(".contact-delete-btn")) {
      const shouldDelete = window.confirm("Delete this contact?");
      if (!shouldDelete) {
        return;
      }

      deleteContactForActiveTenancy(contactId);
      renderBuildings();
      openContactsView();
      return;
    }

    openContactForm("edit", selected);
  }

  function handleTenancyDetailsClick(event) {
    const target = event.target;
    if (!(target instanceof HTMLElement)) {
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

  function handleContactsBack() {
    openOverviewById(activeBuildingId);
  }

  function handleCompaniesBack() {
    openOverviewById(activeBuildingId);
  }

  function handleCancelTenancy() {
    openCurrentTenancyView(activeBuildingId);
  }

  function handleEditTenancy() {
    openTenancyForm("edit");
  }

  function handleEndTenancy() {
    openTenancyForm("edit");
  }

  function handleTenancyBack() {
    openOverviewById(activeBuildingId);
  }

  function handleTenancyTabCurrent() {
    activeTenancyTab = "current";
    const building = findBuildingById(activeBuildingId);
    if (!building) {
      return;
    }
    renderCurrentTenancyPage(building);
  }

  function handleTenancyTabHistory() {
    activeTenancyTab = "history";
    const building = findBuildingById(activeBuildingId);
    if (!building) {
      return;
    }
    renderCurrentTenancyPage(building);
  }

  function handleTenancyContacts() {
    openContactsView();
  }

  function handleContactSearch() {
    contactsSearchQuery = String(contactsSearch.value || "");
    renderContactSectionState("list");
  }

  function handleTenancyDocuments() {
    showModulePlaceholder("Documents", "No documents uploaded.");
  }

  function handleScheduleBack() {
    openOverviewById(activeBuildingId);
  }

  function handleScheduleTabUpcoming() {
    activeScheduleTab = "upcoming";
    const building = findBuildingById(activeBuildingId);
    if (!building) {
      return;
    }
    renderSchedulePage(building);
    setScheduleTab("upcoming");
  }

  function handleScheduleTabCompleted() {
    activeScheduleTab = "completed";
    const building = findBuildingById(activeBuildingId);
    if (!building) {
      return;
    }
    renderSchedulePage(building);
    setScheduleTab("completed");
  }

  function handleHistoryBack() {
    openOverviewById(activeBuildingId);
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

    const formData = new FormData(completeTaskForm);
    const completionDate = String(formData.get("completionDate") || "").trim();
    const notes = String(formData.get("notes") || "").trim();
    const companyUsedId = String(formData.get("companyUsed") || "").trim();
    const contactUsedId = String(formData.get("contactUsed") || "").trim();
    const companyUsed = getCompanyNameById(companyUsedId, "");
    const contactUsed = contactUsedId ? getContactNameById(contactUsedId) : "";
    const nextDueDate = getNextDueDatePlaceholder(completionDate, scheduleItem.frequency);

    const normalized = ensureWorkflowCollections(building);
    const remainingSchedule = normalized.scheduleItems.filter(function (item) {
      return item.id !== scheduleItem.id;
    });

    const nextItem = createNextScheduleOccurrence(scheduleItem, completionDate, companyUsed);
    nextItem.preferredCompanyId = companyUsedId || scheduleItem.preferredCompanyId || "";
    nextItem.preferredContactId = contactUsedId || "";
    const historyRecord = {
      id: window.BuildingStorage.createId(),
      scheduleItemId: scheduleItem.id,
      completedDate: completionDate,
      taskName: scheduleItem.taskName,
      companyUsed: companyUsed,
      companyUsedId: companyUsedId,
      contactUsed: contactUsed,
      contactUsedId: contactUsedId,
      notes: notes,
      hasAttachments: false,
      nextDueDate: nextDueDate,
      createdDate: new Date().toISOString(),
    };

    const updated = {
      ...building,
      scheduleItems: remainingSchedule.concat(nextItem),
      historyRecords: normalized.historyRecords.concat(historyRecord),
      lastUpdated: new Date().toISOString(),
    };

    window.BuildingStorage.updateBuilding(updated);
    renderBuildings();
    activeScheduleTab = "completed";
    openScheduleView(activeBuildingId);
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

    const card = target.closest(".schedule-card");
    if (!card) {
      return;
    }

    const itemId = card.getAttribute("data-schedule-id") || "";
    if (!itemId) {
      return;
    }

    openCompleteTaskView(itemId);
  }

  function handleScheduleListKeydown(event) {
    if (event.key !== "Enter" && event.key !== " ") {
      return;
    }

    const target = event.target;
    if (!(target instanceof HTMLElement)) {
      return;
    }

    const card = target.closest(".schedule-card");
    if (!card) {
      return;
    }

    event.preventDefault();
    const itemId = card.getAttribute("data-schedule-id") || "";
    if (!itemId) {
      return;
    }

    openCompleteTaskView(itemId);
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
    placeholderBackHandler = function () {
      openHistoryView(activeBuildingId);
    };
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
    placeholderBackHandler = function () {
      openHistoryView(activeBuildingId);
    };
  }

  function handleDeleteBuilding() {
    if (!activeBuildingId) {
      return;
    }

    const shouldDelete = window.confirm("Are you sure?");
    if (!shouldDelete) {
      return;
    }

    window.BuildingStorage.deleteBuilding(activeBuildingId);
    activeBuildingId = "";
    showDashboard();
    renderBuildings();
  }

  function handleOpenEdit() {
    const building = findBuildingById(activeBuildingId);
    if (!building) {
      showDashboard();
      return;
    }

    populateEditForm(building);
    showEditForm();
  }

  function handleOverviewBack() {
    showDashboard();
    renderBuildings();
  }

  function handleCancelEdit() {
    if (!activeBuildingId) {
      showDashboard();
      return;
    }

    openOverviewById(activeBuildingId);
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
      showModulePlaceholder("Documents", "No documents uploaded.");
      return;
    }
  }

  function handleSelectedBuildingToggle() {
    setSelectorOpen(!selectorOpen);
  }

  function handleSelectorListClick(event) {
    const target = event.target;
    if (!(target instanceof HTMLElement)) {
      return;
    }

    const option = target.closest(".selector-option");
    if (!option) {
      return;
    }

    if (option.getAttribute("data-selector-action") === "add-building") {
      setSelectorOpen(false);
      showForm();
      return;
    }

    const buildingId = option.getAttribute("data-building-id") || "";
    if (!buildingId) {
      return;
    }

    activeBuildingId = buildingId;
    saveActiveBuildingId(buildingId);
    setSelectorOpen(false);
    renderBuildings();
  }

  function handleWorkspaceModuleNavigationClick(event) {
    const target = event.target;
    if (!(target instanceof HTMLElement)) {
      return;
    }

    const button = target.closest(".module-nav-card");
    if (!button) {
      return;
    }

    if (!activeBuildingId) {
      return;
    }

    const moduleName = button.getAttribute("data-workspace-module") || "";
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
      showModulePlaceholder("Documents", "No documents uploaded.");
      return;
    }
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

  function handlePlaceholderBack() {
    if (typeof placeholderBackHandler === "function") {
      placeholderBackHandler();
      return;
    }

    openOverviewById(activeBuildingId);
  }

  cancelBtn.addEventListener("click", handleSetupCancel);
  setupCancelBtn.addEventListener("click", handleSetupCancel);
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
  setupStep4NextBtn.addEventListener("click", handleSetupStepFourNext);
  setupConfigureList.addEventListener("change", handleConfigureListChange);
  setupStep5FinishBtn.addEventListener("click", handleSetupStepFiveFinish);
  setupOpenBuildingBtn.addEventListener("click", handleSetupOpenBuilding);
  selectedBuildingBtn.addEventListener("click", handleSelectedBuildingToggle);
  overviewBackBtn.addEventListener("click", handleOverviewBack);
  tenancyBackBtn.addEventListener("click", handleTenancyBack);
  contactsBackBtn.addEventListener("click", handleContactsBack);
  companiesBackBtn.addEventListener("click", handleCompaniesBack);
  scheduleBackBtn.addEventListener("click", handleScheduleBack);
  manageTemplatesBtn.addEventListener("click", openTemplateLibrary);
  historyBackBtn.addEventListener("click", handleHistoryBack);
  templateLibraryBackBtn.addEventListener("click", handleTemplateLibraryBack);
  editBuildingBtn.addEventListener("click", handleOpenEdit);
  cancelEditBtn.addEventListener("click", handleCancelEdit);
  deleteBuildingBtn.addEventListener("click", handleDeleteBuilding);
  addTenancyBtn.addEventListener("click", function () {
    openTenancyForm("add");
  });
  editTenancyBtn.addEventListener("click", handleEditTenancy);
  endTenancyBtn.addEventListener("click", handleEndTenancy);
  tenancyTabCurrent.addEventListener("click", handleTenancyTabCurrent);
  tenancyTabHistory.addEventListener("click", handleTenancyTabHistory);
  tenancyContactsBtn.addEventListener("click", handleTenancyContacts);
  tenancyDocumentsBtn.addEventListener("click", handleTenancyDocuments);
  cancelTenancyBtn.addEventListener("click", handleCancelTenancy);
  addExistingContactBtn.addEventListener("click", handleAddExistingContact);
  addContactBtn.addEventListener("click", handleAddContact);
  addExistingContactInlineBtn.addEventListener("click", handleAddExistingContact);
  addContactInlineBtn.addEventListener("click", handleAddContact);
  addCompanyBtn.addEventListener("click", handleAddCompany);
  addCompanyInlineBtn.addEventListener("click", handleAddCompany);
  cancelContactBtn.addEventListener("click", handleCancelContact);
  cancelExistingContactBtn.addEventListener("click", handleCancelContact);
  cancelCompanyBtn.addEventListener("click", handleCancelCompany);
  addTemplateBtn.addEventListener("click", handleAddTemplate);
  addTemplateInlineBtn.addEventListener("click", handleAddTemplate);
  cancelTemplateBtn.addEventListener("click", handleCancelTemplate);
  cancelCompleteTaskBtn.addEventListener("click", handleCancelCompleteTask);
  placeholderBackBtn.addEventListener("click", handlePlaceholderBack);
  moduleNav.addEventListener("click", handleModuleNavigationClick);
  buildingForm.addEventListener("submit", handleSetupStepOneSubmit);
  editBuildingForm.addEventListener("submit", handleEditSave);
  tenancyForm.addEventListener("submit", handleSaveTenancy);
  contactForm.addEventListener("submit", handleSaveContact);
  contactExistingForm.addEventListener("submit", handleLinkExistingContact);
  contactForm.elements.companyId.addEventListener("change", handleContactCompanyChange);
  contactForm.elements.responsibility.addEventListener("change", handleContactRelationshipChange);
  existingContactRelationship.addEventListener("change", handleExistingContactRelationshipChange);
  contactsSearch.addEventListener("input", handleContactSearch);
  contactFormSelectExistingBtn.addEventListener("click", openSelectExistingContactForm);
  contactFormCreateNewBtn.addEventListener("click", function () {
    openContactForm("add");
  });
  companyForm.addEventListener("submit", handleSaveCompany);
  templateForm.addEventListener("submit", handleSaveTemplate);
  completeTaskForm.addEventListener("submit", handleSaveCompleteTask);
  completeTaskForm.elements.companyUsed.addEventListener("change", handleCompleteCompanyChange);
  buildingSelectorList.addEventListener("click", handleSelectorListClick);
  workspaceModuleNav.addEventListener("click", handleWorkspaceModuleNavigationClick);
  contactsList.addEventListener("click", handleContactListClick);
  companiesList.addEventListener("click", handleCompanyListClick);
  templateLibraryList.addEventListener("click", handleTemplateLibraryListClick);
  scheduleOverdueList.addEventListener("click", handleScheduleListClick);
  scheduleWeekList.addEventListener("click", handleScheduleListClick);
  scheduleMonthList.addEventListener("click", handleScheduleListClick);
  scheduleFutureList.addEventListener("click", handleScheduleListClick);
  scheduleTabUpcoming.addEventListener("click", handleScheduleTabUpcoming);
  scheduleTabCompleted.addEventListener("click", handleScheduleTabCompleted);
  scheduleOverdueList.addEventListener("keydown", handleScheduleListKeydown);
  scheduleWeekList.addEventListener("keydown", handleScheduleListKeydown);
  scheduleMonthList.addEventListener("keydown", handleScheduleListKeydown);
  scheduleFutureList.addEventListener("keydown", handleScheduleListKeydown);
  historyList.addEventListener("click", handleHistoryListClick);
  historyList.addEventListener("keydown", handleHistoryListKeydown);
  tenancyDetailsList.addEventListener("click", handleTenancyDetailsClick);
  moduleContentBody.addEventListener("click", handleModuleContentClick);
  breadcrumbNav.addEventListener("click", handleBreadcrumbClick);
  document.addEventListener("click", function (event) {
    const target = event.target;
    if (!(target instanceof HTMLElement)) {
      return;
    }

    if (target.closest("#selected-building-btn") || target.closest("#building-selector-list")) {
      return;
    }

    if (selectorOpen) {
      setSelectorOpen(false);
    }
  });

  ensureMasterMigration();
  ensureTemplateLibrarySeeded();
  migrateBuildingRolesIntoContactsForAllBuildings();
  showDashboard();
  renderBuildings();
})();
