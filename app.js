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
  const leaseBackBtn = document.getElementById("lease-back-btn");
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
  const addTenancyBtn = document.getElementById("add-tenancy-btn");
  const addContactBtn = document.getElementById("add-contact-btn");
  const addCompanyBtn = document.getElementById("add-company-btn");
  const addCompanyInlineBtn = document.getElementById("add-company-inline-btn");
  const editTenancyBtn = document.getElementById("edit-tenancy-btn");
  const archiveTenancyBtn = document.getElementById("archive-tenancy-btn");
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
  const leaseTenantName = document.getElementById("lease-tenant-name");
  const leasePropertyName = document.getElementById("lease-property-name");
  const leaseStatus = document.getElementById("lease-status");
  const leaseCommencementDate = document.getElementById("lease-commencement-date");
  const leaseExpiryDate = document.getElementById("lease-expiry-date");
  const documentsAddCategoryBtn = document.getElementById("documents-add-category-btn");
  const leaseSearch = document.getElementById("lease-search");
  const leaseDashboardPanel = document.getElementById("lease-dashboard-panel");
  const leaseCategoryGrid = document.getElementById("lease-category-grid");
  const leaseCategoryDetail = document.getElementById("lease-category-detail");
  const leaseCategoryDetailTitle = document.getElementById("lease-category-detail-title");
  const leaseCategoryDetailMeta = document.getElementById("lease-category-detail-meta");
  const leaseCategoryDetailManageBtn = document.getElementById("lease-category-detail-manage-btn");
  const leaseCategoryDetailBackBtn = document.getElementById("lease-category-detail-back-btn");
  const leaseCategorySearch = document.getElementById("lease-category-search");
  const leaseCategoryUploadBtn = document.getElementById("lease-category-upload-btn");
  const leaseCategoryList = document.getElementById("lease-category-list");
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
  const contactsBuildingName = document.getElementById("contacts-building-name");
  const contactsEmptyState = document.getElementById("contacts-empty-state");
  const contactsListCard = document.getElementById("contacts-list-card");
  const contactsList = document.getElementById("contacts-list");
  const contactsSearch = document.getElementById("contacts-search");
  const contactsCreateBtn = document.getElementById("contacts-create-btn");
  const contactFormCard = document.getElementById("contact-form-card");
  const contactFormTitle = document.getElementById("contact-form-title");
  const contactSaveBtn = document.getElementById("contact-save-btn");
  const deleteContactBtn = document.getElementById("delete-contact-btn");
  const contactLinkedScheduleSection = document.getElementById("contact-linked-schedule-section");
  const contactLinkedScheduleList = document.getElementById("contact-linked-schedule-list");
  const contactAddScheduleLinkBtn = document.getElementById("contact-add-schedule-link-btn");
  const contactRemoveScheduleLinkBtn = document.getElementById("contact-remove-schedule-link-btn");
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
  const scheduleFilterProperty = document.getElementById("schedule-filter-property");
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
  const backupExportBtn = document.getElementById("backup-export-btn");
  const backupRestoreBtn = document.getElementById("backup-restore-btn");
  const backupRestoreInput = document.getElementById("backup-restore-input");

  let activeBuildingId = "";
  let activeModule = "Overview";
  let tenancyFormMode = "add";
  let contactFormMode = "add";
  let contactAssignmentContext = null;
  let activeContactId = "";
  let contactsSearchQuery = "";
  let companyFormMode = "add";
  let activeCompanyId = "";
  let templateFormMode = "add";
  let activeTemplateId = "";
  let activeScheduleItemId = "";
  let activeTenancyTab = "current";
  let activeScheduleTab = "upcoming";
  let scheduleFilters = {
    property: "all",
    category: "all",
    status: "all",
    duePeriod: "all",
  };
  let activeLeaseManagedCategoryKey = "";
  let leaseSearchQuery = "";
  let leaseCategorySearchQuery = "";
  let selectorOpen = false;
  let breadcrumbItems = [];
  let placeholderBackHandler = null;
  let pendingPrimaryContactDialogState = null;

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
    "Utilities",
    "Grounds",
    "General",
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
    leaseView.classList.remove("is-active");
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

  function showLeaseView() {
    hideAllViews();
    leaseView.classList.add("is-active");
    const building = getActiveBuildingName();
    const crumbs = [
      { label: "Buildings", onClick: goToDashboard },
      { label: building, onClick: function () { openOverviewById(activeBuildingId); } },
      { label: "Documents", onClick: function () { openLeaseView(activeBuildingId); } },
    ];

    if (activeLeaseManagedCategoryKey) {
      const current = getActiveBuilding();
      const category = current ? findDocumentCategoryById(ensureWorkflowCollections(current), activeLeaseManagedCategoryKey) : null;
      if (category) {
        crumbs.push({
          label: category.name,
          onClick: function () {
            openLeaseCategoryDetail(category.id);
          },
        });
      }
    }

    setBreadcrumbs([
      ...crumbs,
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
      property: activeBuildingId || "all",
    };
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
      selectedBuildingName.textContent = "All Properties";
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

  function renderSelectorList(buildings) {
    const allPropertiesSelectedClass = !activeBuildingId ? " is-selected" : "";
    const allPropertiesRow = `
      <button class="selector-option${allPropertiesSelectedClass}" type="button" data-building-id="">
        <span>All Properties</span>
        <span class="selector-dot">${getStatusDot("grey")}</span>
      </button>
    `;

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

    buildingSelectorList.innerHTML = allPropertiesRow + rows + addRow;
  }

  function renderWorkspaceSummary(building) {
    if (!building) {
      workspaceDashboardSummary.innerHTML = '<div><dt>Building</dt><dd>All Properties</dd></div>';
      return;
    }

    const normalized = ensureWorkflowCollections(building);
    const currentTenant = normalized.tenancy ? normalized.tenancy.companyName : "None";
    const documentsCount = normalized.tenancy && normalized.tenancy.lease && Array.isArray(normalized.tenancy.lease.documents)
      ? normalized.tenancy.lease.documents.length
      : 0;
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
        contactRefs: linkedContactIds.slice(),
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
      documents: [],
      documentCategories: createDefaultDocumentCategories(),
      propertyTemplates: propertyTemplates,
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
      showDashboard();
      return;
    }

    openOverviewById(setupState.createdBuildingId);
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

  function getNextDueDatePlaceholder(baseDate, frequency, recurringDates) {
    if (frequency === "Custom") {
      const customNext = getNextRecurringDatePlaceholder(baseDate, recurringDates, true);
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
    const taskName = String(template.name || "Scheduled Item").trim() || "Scheduled Item";
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

    (scheduleItems || []).forEach(function (item) {
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
        name: fromItemName || (master ? master.name : "Scheduled Item"),
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
          taskName: template.name,
          category: template.category || "General",
          dueDate: String(template.nextDueDate || "").trim(),
          frequency: template.defaultFrequency || "Annual",
          preferredCompanyId: template.preferredCompanyId || "",
          preferredCompany: preferredCompanyName,
          preferredContactId: template.preferredContactId || "",
          lastUpdated: now,
        }
        : createScheduleItemFromPropertyTemplate(template, template.propertyId || propertyId, now);

      next.status = getScheduleStatusText(next);
      return next;
    });
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
              documentType: document.documentType || document.type || "Lease Agreement",
              version: document.version || document.name || `Version ${index + 1}`,
              documentDate: document.documentDate || document.date || next.tenancy.leaseStart || "",
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
        id: document.id || window.BuildingStorage.createId(),
        categoryId: String(document.categoryId || ""),
        documentType: document.documentType || document.type || "Document",
        version: document.version || `v${index + 1}`,
        documentDate: document.documentDate || document.date || uploadedAt.slice(0, 10),
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

    next.scheduleItems = syncScheduleItemsFromPropertyTemplates(next, next.scheduleItems);

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
    if (String(item.status || "") === "Completed") {
      return "Completed";
    }

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
    if (String(item.status || "") === "Completed") {
      return "completed";
    }

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

    const sortedBuildings = (buildings || []).slice().sort(function (left, right) {
      return String(left.buildingName || "").localeCompare(String(right.buildingName || ""), undefined, { sensitivity: "base" });
    });

    scheduleFilterProperty.innerHTML = [
      '<option value="all">All Properties</option>',
    ].concat(sortedBuildings.map(function (entry) {
      return `<option value="${entry.id}">${escapeHtml(entry.buildingName)}</option>`;
    })).join("");

    scheduleFilterCategory.innerHTML = ['<option value="all">All Categories</option>']
      .concat(categories.map(function (category) {
        return `<option value="${escapeHtml(category)}">${escapeHtml(category)}</option>`;
      }))
      .join("");

    ensureScheduleFilterValue(scheduleFilterProperty, scheduleFilters.property);
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
      if (scheduleFilters.property !== "all" && row.propertyId !== scheduleFilters.property) {
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

  function wasCompletedToday(record) {
    if (!record || !record.completedDate) {
      return false;
    }

    const today = new Date().toISOString().slice(0, 10);
    return String(record.completedDate) === today;
  }

  function decorateScheduleRows(building, items) {
    return items.map(function (item) {
      const diffDays = getScheduleDiffDays(item);
      const lastCompletionRecord = getPendingRevertRecord(building, item);
      const latestCompletionRecord = getLatestCompletionRecord(building, item.id);
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
        latestCompletionRecord: latestCompletionRecord,
        completedToday: wasCompletedToday(latestCompletionRecord),
      };
    });
  }

  function getNormalizedScheduleBuildings() {
    const buildings = window.BuildingStorage.getBuildings();
    return buildings.map(function (building) {
      const normalized = ensureWorkflowCollections(building);
      if (normalized !== building) {
        window.BuildingStorage.updateBuilding({
          ...building,
          propertyTemplates: normalized.propertyTemplates,
          scheduleItems: normalized.scheduleItems,
          historyRecords: normalized.historyRecords,
        });
      }

      return normalized;
    });
  }

  function confirmScheduleRevertDialog() {
    return new Promise(function (resolve) {
      const backdrop = window.document.createElement("div");
      backdrop.className = "template-delete-modal-backdrop";

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

      return {
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
        status: "Completed",
        lastCompletionHistoryId: historyId,
        lastUpdated: completedAt,
      };
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
    const dueClass = `schedule-row-due-${row.visualPriority === "completed" ? "scheduled" : row.visualPriority}`;
    const statusClass = `schedule-row-status-${row.visualPriority === "completed" ? "scheduled" : row.visualPriority}`;
    const linkedContactText = getScheduleLinkedContactText(row);
    const linkedContactMarkup = linkedContactText
      ? `<p class="schedule-row-meta">Linked Contact: ${escapeHtml(linkedContactText)}</p>`
      : "";
    const propertyMarkup = `<p class="schedule-row-meta">${escapeHtml(row.propertyName || "Property not assigned")}</p>`;
    const lastCompletedMarkup = `<p class="schedule-row-meta">Last Completed</p><p class="schedule-row-meta">${escapeHtml(formatLastCompletedDate(row.lastCompletedDate))}</p>`;
    const nextDueMarkup = `<p class="schedule-row-meta">Next Due</p><p class="schedule-row-meta">${formatDate(row.item.dueDate)}</p>`;

    return `
      <article class="schedule-ops-row schedule-ops-row-${row.state} schedule-ops-priority-${row.visualPriority}" data-schedule-id="${row.item.id}" data-schedule-building-id="${row.propertyId}" role="button" tabindex="0" aria-label="Open schedule details for ${escapeHtml(row.item.taskName)}">
        <span class="schedule-ops-marker" aria-hidden="true"></span>
        <div class="schedule-ops-main">
          <h3 class="schedule-row-title">${escapeHtml(row.item.taskName)}</h3>
          <p class="schedule-row-meta">${escapeHtml(row.item.frequency)}</p>
          ${propertyMarkup}
          ${lastCompletedMarkup}
          ${nextDueMarkup}
          ${linkedContactMarkup}
          <p class="schedule-row-due ${dueClass}">Next Due Date: ${formatDate(row.item.dueDate)}</p>
          <p class="schedule-row-status ${statusClass}">Status: ${escapeHtml(row.statusText)}</p>
        </div>
      </article>
    `;
  }

  function renderCompletedRow(row) {
    const completedDate = row.latestCompletionRecord ? formatDate(row.latestCompletionRecord.completedDate) : "-";
    const linkedContactText = getScheduleLinkedContactText(row);
    const linkedContactMarkup = linkedContactText
      ? `<p class="schedule-row-meta">Linked Contact: ${escapeHtml(linkedContactText)}</p>`
      : "";
    const propertyMarkup = `<p class="schedule-row-meta">${escapeHtml(row.propertyName || "Property not assigned")}</p>`;
    const lastCompletedMarkup = `<p class="schedule-row-meta">Last Completed</p><p class="schedule-row-meta">${escapeHtml(formatLastCompletedDate(row.lastCompletedDate || row.latestCompletionRecord && row.latestCompletionRecord.completedDate))}</p>`;
    const nextDueMarkup = `<p class="schedule-row-meta">Next Due</p><p class="schedule-row-meta">${formatDate(row.item.dueDate)}</p>`;
    return `
      <article class="schedule-ops-row schedule-ops-row-completed schedule-ops-priority-completed" data-schedule-id="${row.item.id}" data-schedule-building-id="${row.propertyId}" role="button" tabindex="0" aria-label="Open schedule details for ${escapeHtml(row.item.taskName)}">
        <span class="schedule-ops-marker" aria-hidden="true"></span>
        <div class="schedule-ops-main">
          <h3 class="schedule-row-title">${escapeHtml(row.item.taskName)}</h3>
          <p class="schedule-row-meta">${escapeHtml(row.item.frequency)}</p>
          ${propertyMarkup}
          ${lastCompletedMarkup}
          ${nextDueMarkup}
          ${linkedContactMarkup}
          <p class="schedule-row-due schedule-row-due-scheduled">Next Due Date: ${formatDate(row.item.dueDate)}</p>
          <p class="schedule-row-status schedule-row-status-scheduled">Status: Completed</p>
        </div>
      </article>
    `;
  }

  function renderCompletedGroup(rows) {
    if (rows.length === 0) {
      return "";
    }

    return `
      <section class="schedule-ops-group schedule-ops-group-completed">
        <h3 class="schedule-ops-group-title">Completed</h3>
        <div class="schedule-ops-group-list">
          ${rows.map(renderCompletedRow).join("")}
        </div>
      </section>
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
    const completedRows = rows.filter(function (row) {
      return row.completedToday;
    });
    const activeRows = rows.filter(function (row) {
      return !row.completedToday;
    });

    if (rows.length === 0) {
      scheduleOpsList.innerHTML = '<p class="module-placeholder schedule-ops-empty">No scheduled items.</p>';
      return;
    }

    const sections = [
      renderScheduleGroup("Overdue", "overdue", activeRows),
      renderScheduleGroup("Due Within 30 Days", "due30", activeRows),
      renderScheduleGroup("Scheduled", "scheduled", activeRows),
      renderCompletedGroup(completedRows),
    ].filter(function (section) {
      return Boolean(section);
    });

    scheduleOpsList.innerHTML = sections.join("");
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

    if (buildingId && findBuildingById(buildingId)) {
      setCurrentPropertyId(buildingId);
    } else {
      ensureActiveBuildingSelection(buildings);
    }

    syncScheduleFilterToCurrentProperty();

    const activeBuilding = findBuildingById(activeBuildingId);
    if (activeBuilding) {
      const normalized = ensureWorkflowCollections(activeBuilding);
      window.BuildingStorage.updateBuilding({
        ...activeBuilding,
        propertyTemplates: normalized.propertyTemplates,
        scheduleItems: normalized.scheduleItems,
        historyRecords: normalized.historyRecords,
      });
    }

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

  function getContactsForBuilding(building) {
    if (!building) {
      return [];
    }

    let refs = [];
    if (building.tenancy) {
      refs = ensureTenantContactRefs(building);

      // Backward compatibility: if legacy embedded contacts exist but refs do not,
      // show those contacts until migration links are created.
      if (refs.length === 0 && Array.isArray(building.tenancy.contacts) && building.tenancy.contacts.length > 0) {
        return dedupeContacts(building.tenancy.contacts);
      }
    } else {
      refs = Array.isArray(building.buildingContactAssignments) ? building.buildingContactAssignments : [];
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
            contactType: getContactClassification(contact),
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
    const companyNameDisplay = tenancy.companyName || "Not provided";

    tenancyDetailsList.innerHTML = `
      <div><dt>Current Tenant</dt><dd>${escapeHtml(companyNameDisplay)}</dd></div>
      <div><dt>Trading Name</dt><dd>${escapeHtml(tradingName)}</dd></div>
      <div><dt>Lease Dates</dt><dd>${formatDate(tenancy.leaseStart)} - ${formatDate(tenancy.leaseEnd)}</dd></div>
      <div><dt>Status</dt><dd>${escapeHtml(tenancy.status || "Occupied")}</dd></div>
    `;
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

  function matchesDocumentsModuleSearch(category, documents) {
    const query = normalizeText(leaseSearchQuery);
    if (!query) {
      return true;
    }

    if (normalizeText(category.name).includes(query) || normalizeText(category.description).includes(query)) {
      return true;
    }

    return documents.some(function (documentRecord) {
      return normalizeText(documentRecord.fileName).includes(query)
        || normalizeText(documentRecord.documentType).includes(query)
        || normalizeText(documentRecord.description).includes(query);
    });
  }

  function renderCategoryDocumentsList(building, category, documents) {
    return documents.map(function (documentRecord) {
      const notesMarkup = documentRecord.notes
        ? '<span class="document-note-indicator">Notes</span>'
        : "";
      return `
        <article class="document-item-row">
          <div class="document-item-main">
            <h4 class="document-item-title">${escapeHtml(documentRecord.fileName || "Untitled")}</h4>
            <p class="document-item-meta">Document Date: ${escapeHtml(formatDate(documentRecord.documentDate || documentRecord.uploadedAt))}</p>
            <p class="document-item-meta">Upload Date: ${escapeHtml(formatDate(documentRecord.uploadedAt))}</p>
            <p class="document-item-meta">Uploaded By: ${escapeHtml(documentRecord.uploadedBy || "Not recorded")}${notesMarkup ? ` • ${notesMarkup}` : ""}</p>
          </div>
          <div class="document-item-actions">
            <button class="btn btn-secondary lease-tile-btn" type="button" data-document-module-action="view" data-document-category-id="${category.id}" data-document-id="${documentRecord.id}">View</button>
            <button class="btn btn-secondary lease-tile-btn" type="button" data-document-module-action="download" data-document-category-id="${category.id}" data-document-id="${documentRecord.id}">Download</button>
            <button class="btn btn-secondary lease-tile-btn" type="button" data-document-module-action="replace" data-document-category-id="${category.id}" data-document-id="${documentRecord.id}">Edit / Replace</button>
            <button class="btn template-delete-btn lease-tile-btn" type="button" data-document-module-action="delete-document" data-document-category-id="${category.id}" data-document-id="${documentRecord.id}">Delete</button>
          </div>
        </article>
      `;
    }).join("");
  }

  function matchesCategoryDocumentSearch(documentRecord) {
    const query = normalizeText(leaseCategorySearchQuery);
    if (!query) {
      return true;
    }

    return normalizeText(documentRecord.fileName).includes(query)
      || normalizeText(documentRecord.documentType).includes(query)
      || normalizeText(documentRecord.description).includes(query)
      || normalizeText(documentRecord.uploadedBy).includes(query)
      || normalizeText(documentRecord.notes).includes(query);
  }

  function renderLeaseCategoryTiles(building) {
    const normalized = ensureWorkflowCollections(building);
    const categories = getDocumentsModuleCategories(normalized)
      .map(function (category) {
        return {
          category: category,
          documents: getDocumentsForCategoryContainer(normalized, category),
        };
      })
      .filter(function (entry) {
        return matchesDocumentsModuleSearch(entry.category, entry.documents);
      });

    leaseCategoryGrid.innerHTML = categories.map(function (entry) {
      const category = entry.category;
      const documents = entry.documents;
      const latestDocument = documents[0] || null;
      const latestDate = latestDocument ? formatLeaseLatestDocumentDate(latestDocument) : "";
      const latestName = latestDocument ? latestDocument.fileName : "";
      const buttonLabel = documents.length > 0 ? "Open" : "Add";
      const latestNameMarkup = latestName
        ? `<p class="document-category-meta">${escapeHtml(latestName)}</p>`
        : "";
      const latestDateMarkup = latestDate
        ? `<p class="document-category-meta">${escapeHtml(latestDate)}</p>`
        : "";

      return `
        <article class="document-category-card${category.source === "lease" ? " is-primary" : ""}" data-document-category-id="${category.id}" role="button" tabindex="0" aria-label="Open ${escapeHtml(category.name)}">
          <div class="document-category-header">
            <div class="document-category-summary">
              <div class="document-category-text">
                <h3 class="document-category-title">${escapeHtml(category.name)}</h3>
                <p class="document-category-meta">${escapeHtml(formatLeaseDocumentCount(documents.length))}</p>
                ${latestNameMarkup}
                ${latestDateMarkup}
              </div>
            </div>
            <div class="document-category-card-menu">
              <button class="btn btn-secondary lease-tile-btn document-category-menu-btn" type="button" aria-label="Manage ${escapeHtml(category.name)}" data-document-module-action="manage" data-document-category-id="${category.id}">⋮</button>
            </div>
            <div class="document-category-actions">
              <button class="btn ${documents.length > 0 ? "btn-secondary" : "btn-primary"} lease-tile-btn" type="button" data-document-module-action="${documents.length > 0 ? "open" : "add"}" data-document-category-id="${category.id}">${buttonLabel}</button>
            </div>
          </div>
        </article>
      `;
    }).join("") || '<p class="module-placeholder">No document categories match your search.</p>';
  }

  function renderLeaseCategoryDetail(building) {
    if (!leaseCategoryDetail || !leaseDashboardPanel) {
      return;
    }

    if (!activeLeaseManagedCategoryKey) {
      leaseDashboardPanel.style.display = "block";
      leaseCategoryDetail.classList.remove("is-active");
      return;
    }

    const normalized = ensureWorkflowCollections(building);
    const category = findDocumentCategoryById(normalized, activeLeaseManagedCategoryKey);
    if (!category) {
      activeLeaseManagedCategoryKey = "";
      leaseDashboardPanel.style.display = "block";
      leaseCategoryDetail.classList.remove("is-active");
      return;
    }

    const documents = getDocumentsForCategoryContainer(normalized, category).filter(matchesCategoryDocumentSearch);
    leaseDashboardPanel.style.display = "none";
    leaseCategoryDetail.classList.add("is-active");
    leaseCategoryDetailTitle.textContent = category.name;
    leaseCategoryDetailMeta.textContent = `${formatLeaseDocumentCount(getDocumentsForCategoryContainer(normalized, category).length)}. Newest first.`;

    if (leaseCategorySearch) {
      leaseCategorySearch.value = leaseCategorySearchQuery;
    }

    if (documents.length === 0) {
      leaseCategoryList.innerHTML = `
        <div class="document-category-empty-state">
          <p class="module-placeholder">No documents yet.</p>
          <button class="btn btn-primary" type="button" data-document-module-action="add" data-document-category-id="${category.id}">Load First Document</button>
        </div>
      `;
      return;
    }

    leaseCategoryList.innerHTML = renderCategoryDocumentsList(normalized, category, documents);
  }

  function renderLeasePage(building) {
    const data = getLeaseData(building);
    const tenancy = data.tenancy;

    leaseTenantName.textContent = tenancy ? tenancy.companyName : "No current tenancy";
    leasePropertyName.textContent = data.building.buildingName;
    leaseStatus.textContent = getLeaseStatusLabel(tenancy);
    leaseCommencementDate.textContent = tenancy ? formatDate(tenancy.leaseStart) : "Not set";
    leaseExpiryDate.textContent = tenancy ? formatDate(tenancy.leaseEnd) : "Not set";

    renderLeaseCategoryTiles(data.building);
    renderLeaseCategoryDetail(data.building);
    showLeaseView();
  }

  function openLeaseView(buildingId) {
    const building = findBuildingById(buildingId);
    if (!building) {
      showDashboard();
      return;
    }

    setCurrentPropertyId(building.id);
    activeLeaseManagedCategoryKey = "";
    leaseSearchQuery = "";
    if (leaseSearch) {
      leaseSearch.value = "";
    }
    renderLeasePage(building);
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

  function buildDocumentCategoryKey(name) {
    const base = String(name || "")
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
    return base || `document-category-${Date.now()}`;
  }

  function resequenceDocumentCategories(categories) {
    return categories.map(function (category, index) {
      return {
        ...category,
        sortOrder: index,
      };
    });
  }

  function getAllLeaseDocumentTypes() {
    return LEASE_DOCUMENT_CATEGORIES.reduce(function (items, category) {
      return items.concat(category.documentTypes || []);
    }, []);
  }

  function resolveLeaseDocumentTypeForModule() {
    const documentTypes = getAllLeaseDocumentTypes();
    if (documentTypes.length === 0) {
      return "Lease Document";
    }

    const defaultType = documentTypes[0];
    const response = window.prompt(`Select document type: ${documentTypes.join(", ")}`, defaultType);
    const selected = String(response || "").trim();
    if (documentTypes.includes(selected)) {
      return selected;
    }

    return defaultType;
  }

  function showDocumentCategoryFormDialog(totalCount) {
    return new Promise(function (resolve) {
      const backdrop = window.document.createElement("div");
      backdrop.className = "document-modal-backdrop";

      const dialog = window.document.createElement("div");
      dialog.className = "document-modal";
      dialog.setAttribute("role", "dialog");
      dialog.setAttribute("aria-modal", "true");
      dialog.setAttribute("aria-labelledby", "document-category-form-title");

      dialog.innerHTML = `
        <h3 id="document-category-form-title">Create Category</h3>
        <form class="document-modal-form">
          <label>
            <span>Category Name</span>
            <input name="name" type="text" required />
          </label>
          <label>
            <span>Description</span>
            <textarea name="description" rows="3"></textarea>
          </label>
          <label>
            <span>Icon</span>
            <input name="icon" type="text" placeholder="📁" />
          </label>
          <label>
            <span>Display Order</span>
            <input name="displayOrder" type="number" min="1" max="${Math.max(1, totalCount + 1)}" value="${Math.max(1, totalCount + 1)}" required />
          </label>
          <div class="document-modal-actions">
            <button class="btn btn-secondary" type="button" data-document-modal-action="cancel">Cancel</button>
            <button class="btn btn-primary" type="submit">Create Category</button>
          </div>
        </form>
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
          closeWith(null);
        }
      }

      window.document.addEventListener("keydown", handleEscape);

      backdrop.addEventListener("click", function (event) {
        if (event.target === backdrop) {
          closeWith(null);
        }
      });

      const form = dialog.querySelector(".document-modal-form");
      const cancelButton = dialog.querySelector('[data-document-modal-action="cancel"]');
      if (cancelButton instanceof HTMLButtonElement) {
        cancelButton.addEventListener("click", function () {
          closeWith(null);
        });
      }

      if (form instanceof HTMLFormElement) {
        form.addEventListener("submit", function (event) {
          event.preventDefault();
          const formData = new FormData(form);
          const name = String(formData.get("name") || "").trim();
          if (!name) {
            const nameInput = form.elements.namedItem("name");
            if (nameInput instanceof HTMLInputElement) {
              nameInput.reportValidity();
            }
            return;
          }

          closeWith({
            name: name,
            description: String(formData.get("description") || "").trim(),
            icon: String(formData.get("icon") || "").trim(),
            displayOrder: Number(formData.get("displayOrder") || totalCount + 1),
          });
        });

        const firstInput = form.elements.namedItem("name");
        if (firstInput instanceof HTMLInputElement) {
          firstInput.focus();
        }
      }
    });
  }

  function showDocumentCategoryManageDialog(category, canMoveUp, canMoveDown) {
    return new Promise(function (resolve) {
      const backdrop = window.document.createElement("div");
      backdrop.className = "document-modal-backdrop";

      const dialog = window.document.createElement("div");
      dialog.className = "document-modal document-manage-modal";
      dialog.setAttribute("role", "dialog");
      dialog.setAttribute("aria-modal", "true");
      dialog.setAttribute("aria-labelledby", "document-manage-title");

      dialog.innerHTML = `
        <h3 id="document-manage-title">Manage Category</h3>
        <p class="document-manage-subtitle">${escapeHtml(category.name)}</p>
        <div class="document-manage-actions">
          <button class="btn btn-secondary" type="button" data-document-manage-action="rename">Rename Category</button>
          <button class="btn btn-secondary" type="button" data-document-manage-action="icon">Change Icon</button>
          <button class="btn btn-secondary" type="button" data-document-manage-action="move-up"${canMoveUp ? "" : " disabled"}>Move Up</button>
          <button class="btn btn-secondary" type="button" data-document-manage-action="move-down"${canMoveDown ? "" : " disabled"}>Move Down</button>
          <button class="btn template-delete-btn" type="button" data-document-manage-action="delete">Delete Category</button>
          <button class="btn btn-secondary" type="button" data-document-manage-action="close">Close</button>
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

        const action = target.getAttribute("data-document-manage-action");
        if (!action || target.hasAttribute("disabled")) {
          return;
        }

        if (action === "close") {
          closeWith(null);
          return;
        }

        closeWith(action);
      });
    });
  }

  function findDocumentRecordById(building, category, documentId) {
    const documents = getDocumentsForCategoryContainer(building, category);
    return documents.find(function (documentRecord) {
      return documentRecord.id === documentId;
    }) || null;
  }

  async function handleAddDocumentCategory() {
    const building = findBuildingById(activeBuildingId);
    if (!building) {
      return;
    }

    const normalized = ensureWorkflowCollections(building);
    const result = await showDocumentCategoryFormDialog((normalized.documentCategories || []).length);
    if (!result) {
      return;
    }

    const updated = updateActiveBuildingDocumentsState(function (draft) {
      const categories = resequenceDocumentCategories((draft.documentCategories || []).slice());
      const insertIndex = Math.max(0, Math.min(categories.length, Number(result.displayOrder || categories.length + 1) - 1));
      categories.splice(insertIndex, 0, {
        id: window.BuildingStorage.createId(),
        key: buildDocumentCategoryKey(result.name),
        name: result.name,
        description: result.description,
        icon: result.icon || "📁",
        source: "building",
        sortOrder: insertIndex,
        isCollapsed: false,
      });
      draft.documentCategories = resequenceDocumentCategories(categories);
      return draft;
    });

    if (!updated) {
      return;
    }

    renderBuildings();
    renderLeasePage(updated);
  }

  function toggleDocumentCategory(categoryId) {
    const updated = updateActiveBuildingDocumentsState(function (draft) {
      draft.documentCategories = (draft.documentCategories || []).map(function (category) {
        if (category.id !== categoryId) {
          return category;
        }

        return {
          ...category,
          isCollapsed: !category.isCollapsed,
        };
      });
      return draft;
    });

    if (!updated) {
      return;
    }

    renderLeasePage(updated);
  }

  async function handleManageDocumentCategory(categoryId) {
    const building = findBuildingById(activeBuildingId);
    if (!building) {
      return;
    }

    const normalized = ensureWorkflowCollections(building);
    const categories = getDocumentsModuleCategories(normalized);
    const category = categories.find(function (entry) {
      return entry.id === categoryId;
    });
    if (!category) {
      return;
    }

    const index = categories.findIndex(function (entry) {
      return entry.id === category.id;
    });
    const action = await showDocumentCategoryManageDialog(category, index > 0, index < categories.length - 1);
    if (!action) {
      return;
    }

    if (action === "rename") {
      const response = window.prompt("Rename Category", category.name);
      const nextName = String(response || "").trim();
      if (!nextName) {
        return;
      }

      const updatedByName = updateActiveBuildingDocumentsState(function (draft) {
        draft.documentCategories = (draft.documentCategories || []).map(function (entry) {
          return entry.id === category.id
            ? { ...entry, name: nextName }
            : entry;
        });
        return draft;
      });
      if (updatedByName) {
        renderBuildings();
        renderLeasePage(updatedByName);
      }
      return;
    }

    if (action === "icon") {
      const response = window.prompt("Change Icon", category.icon || "📁");
      const nextIcon = String(response || "").trim() || "📁";
      const updatedByIcon = updateActiveBuildingDocumentsState(function (draft) {
        draft.documentCategories = (draft.documentCategories || []).map(function (entry) {
          return entry.id === category.id
            ? { ...entry, icon: nextIcon }
            : entry;
        });
        return draft;
      });
      if (updatedByIcon) {
        renderLeasePage(updatedByIcon);
      }
      return;
    }

    if (action === "move-up" || action === "move-down") {
      const offset = action === "move-up" ? -1 : 1;
      const updatedByMove = updateActiveBuildingDocumentsState(function (draft) {
        const nextCategories = resequenceDocumentCategories((draft.documentCategories || []).slice());
        const currentIndex = nextCategories.findIndex(function (entry) {
          return entry.id === category.id;
        });
        const targetIndex = currentIndex + offset;
        if (currentIndex < 0 || targetIndex < 0 || targetIndex >= nextCategories.length) {
          return draft;
        }

        const swapped = nextCategories.slice();
        const moved = swapped.splice(currentIndex, 1)[0];
        swapped.splice(targetIndex, 0, moved);
        draft.documentCategories = resequenceDocumentCategories(swapped);
        return draft;
      });
      if (updatedByMove) {
        renderLeasePage(updatedByMove);
      }
      return;
    }

    if (action === "delete") {
      const documentCount = getDocumentsForCategoryContainer(normalized, category).length;
      const warning = documentCount > 0
        ? `Deleting this category will also delete ${documentCount} contained document${documentCount === 1 ? "" : "s"}.`
        : "This category has no documents.";
      const shouldDelete = window.confirm(`Delete category \"${category.name}\"?\n\n${warning}`);
      if (!shouldDelete) {
        return;
      }

      const updatedByDelete = updateActiveBuildingDocumentsState(function (draft) {
        draft.documentCategories = resequenceDocumentCategories((draft.documentCategories || []).filter(function (entry) {
          return entry.id !== category.id;
        }));

        if (category.source === "lease" && draft.tenancy && draft.tenancy.lease) {
          draft.tenancy.lease = {
            ...draft.tenancy.lease,
            documents: [],
            versionHistory: [],
          };
          draft.tenancy.documents = [];
          return draft;
        }

        draft.documents = (draft.documents || []).filter(function (documentRecord) {
          return documentRecord.categoryId !== category.id;
        });
        return draft;
      });
      if (updatedByDelete) {
        renderBuildings();
        renderLeasePage(updatedByDelete);
      }
    }
  }

  async function handleLeaseCategoryLoad(categoryId) {
    const building = findBuildingById(activeBuildingId);
    if (!building) {
      return;
    }

    const normalized = ensureWorkflowCollections(building);
    const category = findDocumentCategoryById(normalized, categoryId);
    if (!category) {
      return;
    }

    if (category.source === "lease" && !normalized.tenancy) {
      alert("Add a current tenancy before loading lease documents.");
      return;
    }

    const selectedFile = await requestDocumentFileSelection();
    if (!selectedFile) {
      return;
    }

    const now = new Date().toISOString();
    const uploadedBy = window.prompt("Uploaded by", "Property Manager") || "Property Manager";
    const documentType = category.source === "lease" ? resolveLeaseDocumentTypeForModule() : category.name;
    const payload = {
      id: window.BuildingStorage.createId(),
      categoryId: category.id,
      documentType: documentType,
      version: "v1",
      documentDate: now.slice(0, 10),
      description: `${category.name} upload`,
      uploadedBy: String(uploadedBy).trim() || "Property Manager",
      fileName: selectedFile.name,
      mimeType: selectedFile.type || "application/octet-stream",
      sizeBytes: selectedFile.size || 0,
      uploadedAt: now,
      lastUpdated: now,
      notes: "Initial document upload.",
      storage: {
        kind: "data-url",
        dataUrl: await readFileAsDataUrl(selectedFile),
        previewStatus: "not-generated",
        ocrStatus: "not-indexed",
      },
    };

    const updated = updateActiveBuildingDocumentsState(function (draft) {
      if (category.source === "lease") {
        if (!draft.tenancy) {
          return draft;
        }
        const lease = draft.tenancy.lease || { notes: "", documents: [], versionHistory: [] };
        lease.documents = (lease.documents || []).concat(payload);
        lease.versionHistory = (lease.versionHistory || []).concat({
          id: window.BuildingStorage.createId(),
          uploadedAt: now,
          documentType: payload.documentType,
          version: payload.version,
          user: payload.uploadedBy,
          notes: payload.notes,
        });
        draft.tenancy.lease = lease;
        draft.tenancy.documents = lease.documents;
        return draft;
      }

      draft.documents = (draft.documents || []).concat(payload);
      return draft;
    });

    if (!updated) {
      return;
    }

    renderBuildings();
    renderLeasePage(updated);
  }

  async function handleLeaseDocumentReplace(categoryId, documentId) {
    const building = findBuildingById(activeBuildingId);
    if (!building) {
      return;
    }

    const normalized = ensureWorkflowCollections(building);
    const category = findDocumentCategoryById(normalized, categoryId);
    if (!category) {
      return;
    }

    const existing = findDocumentRecordById(normalized, category, documentId);
    if (!existing) {
      alert("Document not found.");
      return;
    }

    const selectedFile = await requestDocumentFileSelection();
    if (!selectedFile) {
      return;
    }

    const shouldReplace = window.confirm(`Replace \"${existing.fileName || "current document"}\" with \"${selectedFile.name}\"?\n\n${category.source === "lease" ? "The previous version will be kept in version history." : "The current file will be replaced."}`);
    if (!shouldReplace) {
      return;
    }

    const now = new Date().toISOString();
    const nextVersion = getNextLeaseDocumentVersion(existing.version);
    const uploadedByDefault = String(existing.uploadedBy || "Property Manager").trim() || "Property Manager";
    const uploadedByInput = window.prompt("Uploaded by", uploadedByDefault);
    const uploadedBy = String(uploadedByInput || uploadedByDefault).trim() || "Property Manager";
    const replacementDataUrl = await readFileAsDataUrl(selectedFile);

    const updated = updateActiveBuildingDocumentsState(function (draft) {
      if (category.source === "lease" && draft.tenancy && draft.tenancy.lease) {
        const lease = draft.tenancy.lease;
        const documents = Array.isArray(lease.documents) ? lease.documents.slice() : [];
        const targetIndex = documents.findIndex(function (documentRecord) {
          return documentRecord.id === documentId;
        });
        if (targetIndex === -1) {
          return draft;
        }

        const currentRecord = documents[targetIndex];
        const previousVersionNote = `Replaced by ${selectedFile.name} on ${formatDate(now)}.`;
        const replacementRecord = {
          ...currentRecord,
          version: nextVersion,
          documentDate: now.slice(0, 10),
          description: `${currentRecord.documentType || "Document"} replacement upload`,
          uploadedBy: uploadedBy,
          fileName: selectedFile.name,
          mimeType: selectedFile.type || "application/octet-stream",
          sizeBytes: selectedFile.size || 0,
          uploadedAt: now,
          lastUpdated: now,
          notes: `Replaced previous version (${currentRecord.version || "v1"}).`,
          storage: {
            kind: "data-url",
            dataUrl: replacementDataUrl,
            previewStatus: "not-generated",
            ocrStatus: "not-indexed",
          },
        };

        documents[targetIndex] = replacementRecord;
        lease.documents = documents;
        lease.versionHistory = (lease.versionHistory || []).concat(
          createLeaseVersionHistoryEntry(currentRecord, now, previousVersionNote),
          {
            id: window.BuildingStorage.createId(),
            uploadedAt: now,
            documentType: replacementRecord.documentType,
            version: replacementRecord.version,
            user: replacementRecord.uploadedBy,
            notes: "Replacement upload completed.",
            sourceDocumentId: replacementRecord.id,
          }
        );
        draft.tenancy.lease = lease;
        draft.tenancy.documents = lease.documents;
        return draft;
      }

      draft.documents = (draft.documents || []).map(function (documentRecord) {
        if (documentRecord.id !== documentId) {
          return documentRecord;
        }

        return {
          ...documentRecord,
          version: nextVersion,
          documentDate: now.slice(0, 10),
          uploadedBy: uploadedBy,
          fileName: selectedFile.name,
          mimeType: selectedFile.type || "application/octet-stream",
          sizeBytes: selectedFile.size || 0,
          uploadedAt: now,
          lastUpdated: now,
          notes: `Replaced previous version (${documentRecord.version || "v1"}).`,
          storage: {
            kind: "data-url",
            dataUrl: replacementDataUrl,
            previewStatus: "not-generated",
            ocrStatus: "not-indexed",
          },
        };
      });
      return draft;
    });

    if (!updated) {
      return;
    }

    renderBuildings();
    renderLeasePage(updated);
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
    const building = findBuildingById(activeBuildingId);
    const query = normalizeText(contactsSearchQuery);
    const enriched = dedupeContacts(contacts)
      .map(function (contact) {
        const companyName = getCompanyNameById(contact.companyId, "Not set");
        const relationship = getBuildingRelationshipForContact(building, contact);
        const linkedItems = getScheduleItemsLinkedToContact(building, contact.id);
        const linkedItemsSummary = linkedItems.length === 0
          ? "None"
          : linkedItems.slice(0, 3).map(function (item) {
            return item.taskName;
          }).join(", ");
        const linkedItemsMoreCount = linkedItems.length > 3 ? linkedItems.length - 3 : 0;
        return {
          contact: contact,
          companyName: companyName,
          relationship: relationship,
          linkedItemsSummary: linkedItemsSummary,
          linkedItemsCount: linkedItems.length,
          linkedItemsMoreCount: linkedItemsMoreCount,
        };
      })
      .filter(function (entry) {
        if (!query) {
          return true;
        }

        return normalizeText(entry.contact.name).includes(query)
          || normalizeText(entry.companyName).includes(query)
          || normalizeText(entry.relationship).includes(query)
          || normalizeText(entry.linkedItemsSummary).includes(query);
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
      const mobileLink = contact.mobile
        ? `<a class="inline-link contact-phone-link" href="tel:${escapeHtml(contact.mobile)}">${escapeHtml(contact.mobile)}</a>`
        : "Not provided";
      const emailLink = contact.email
        ? `<a class="inline-link contact-email-link" href="mailto:${escapeHtml(contact.email)}">${escapeHtml(contact.email)}</a>`
        : "Not provided";
      return `
        <article class="building-card clickable-card" data-contact-id="${contact.id}" role="button" tabindex="0" aria-label="Open contact ${contact.name}">
          <div class="contact-card-header">
            <div class="contact-card-title-group">
              <h3><button class="inline-link contact-open-link" type="button">${contact.name}</button></h3>
            </div>
          </div>
          <div class="contact-card-layout">
            <div class="contact-card-column contact-card-column-left">
              <p><strong>Company:</strong> <button class="inline-link company-open-link" type="button" data-company-id="${contact.companyId}">${entry.companyName}</button></p>
              <p><strong>Role:</strong> ${renderContactRoleBadge(entry.relationship)}</p>
              <p><strong>Linked Items:</strong> ${escapeHtml(entry.linkedItemsSummary)}${entry.linkedItemsMoreCount > 0 ? ` (+${entry.linkedItemsMoreCount} more)` : ""}</p>
            </div>
            <div class="contact-card-column contact-card-column-right">
              <p><strong>Phone:</strong> ${mobileLink}</p>
              <p><strong>Email:</strong> ${emailLink}</p>
            </div>
          </div>
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
      contactsEmptyState.style.display = "block";
      contactsListCard.style.display = "none";
      return;
    }

    contactsEmptyState.style.display = "none";
    contactsListCard.style.display = "block";
    renderContactList(contacts);
  }

  function getContactsForDisplayInActiveBuilding() {
    const linkedContacts = dedupeContacts(getContactsForActiveBuilding());
    if (linkedContacts.length > 0) {
      return linkedContacts;
    }

    const building = findBuildingById(activeBuildingId);
    if (!building) {
      return [];
    }

    const companyIds = getCompanyIdsForBuilding(building);
    const allContacts = dedupeContacts(getContacts());

    if (companyIds.length === 0) {
      return allContacts;
    }

    const filtered = allContacts.filter(function (contact) {
      return contact && companyIds.includes(contact.companyId);
    });

    return filtered.length > 0 ? filtered : allContacts;
  }

  function openContactDetailsDialog(contact) {
    const building = findBuildingById(activeBuildingId);
    if (!contact || !building) {
      return;
    }

    const existingBackdrop = window.document.querySelector(".contact-details-backdrop");
    if (existingBackdrop) {
      existingBackdrop.remove();
    }

    const relationship = getBuildingRelationshipForContact(building, contact);
    const companyName = getCompanyNameById(contact.companyId, "Not set");
    const linkedItems = getScheduleItemsLinkedToContact(building, contact.id);
    const linkedItemsMarkup = linkedItems.length === 0
      ? '<p class="module-placeholder">No linked schedule items.</p>'
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

    const backdrop = window.document.createElement("div");
    backdrop.className = "schedule-details-backdrop contact-details-backdrop";
    backdrop.innerHTML = `
      <div class="schedule-details-modal" role="dialog" aria-modal="true" aria-labelledby="contact-details-title">
        <header class="schedule-details-header">
          <h3 id="contact-details-title">${escapeHtml(contact.name || "Contact")}</h3>
          <button class="btn btn-secondary btn-small" type="button" data-contact-details-action="close">Back</button>
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
            <div><dt>Linked Schedule Items</dt><dd>${linkedItems.length}</dd></div>
          </dl>
        </section>

        <section class="schedule-details-section">
          <h4>Linked Schedule Items</h4>
          ${linkedItemsMarkup}
        </section>

        <section class="schedule-details-bottom-actions" aria-label="Contact actions">
          <button class="btn btn-secondary" type="button" data-contact-details-action="edit">Edit Contact</button>
          <button class="btn btn-primary" type="button" data-contact-details-action="close">Back</button>
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
        openContactForm("edit", contact);
      }
    });
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
              <button class="btn template-delete-btn" type="button" data-template-action="delete">Delete</button>
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

  function confirmTemplateDeleteDialog() {
    return new Promise(function (resolve) {
      const backdrop = window.document.createElement("div");
      backdrop.className = "template-delete-modal-backdrop";

      const dialog = window.document.createElement("div");
      dialog.className = "template-delete-modal";
      dialog.setAttribute("role", "dialog");
      dialog.setAttribute("aria-modal", "true");
      dialog.setAttribute("aria-labelledby", "template-delete-modal-title");

      dialog.innerHTML = `
        <h3 id="template-delete-modal-title">Delete Template</h3>
        <p>Are you sure you want to permanently delete this template? This action cannot be undone.</p>
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

    templateFormTitle.textContent = mode === "edit" ? "Edit Template" : "Add Template";
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

  function deleteTemplate(templateId) {
    const templates = getScheduledItemTemplates();
    const next = templates.filter(function (template) {
      return template.id !== templateId;
    });

    if (next.length === templates.length) {
      return;
    }

    saveScheduledItemTemplates(next);
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

    if (target.closest('[data-template-action="delete"]')) {
      const shouldDelete = await confirmTemplateDeleteDialog();
      if (!shouldDelete) {
        return;
      }

      deleteTemplate(templateId);
      openTemplateLibrary();
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
    const building = findBuildingById(activeBuildingId);
    if (!building) {
      showDashboard();
      return;
    }

    contactsBuildingName.textContent = building.buildingName;
    activeContactId = "";
    contactsSearchQuery = "";
    populateContactCompanySelect("");
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

  function populateContactCompanySelect(selectedId) {
    const companies = getUniqueCompaniesByName();
    const options = ['<option value="">Select a company</option>'];
    companies.forEach(function (company) {
      const selected = company.id === selectedId ? " selected" : "";
      options.push(`<option value="${company.id}"${selected}>${company.name}</option>`);
    });
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
    const value = String(contactForm.elements.companyId.value || "").trim();
    if (!value) {
      return;
    }
  }

  function setContactFormAssignmentContext(context) {
    contactAssignmentContext = context || null;
    if (contactSaveBtn instanceof HTMLButtonElement) {
      contactSaveBtn.textContent = contactAssignmentContext ? "Save & Assign" : "Save";
    }
  }

  function openContactForm(mode, contact, options) {
    contactFormMode = mode;
    setContactFormAssignmentContext(options && options.assignmentContext ? options.assignmentContext : null);
    activeContactId = contact && contact.id ? contact.id : "";
    resetContactForm();
    populateContactCompanySelect(contact && contact.companyId ? contact.companyId : "");

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
      renderContactLinkedScheduleItems(contact);
    } else {
      renderContactLinkedScheduleItems(null);
    }

    renderContactSectionState("form");
    showContactsView();
    setBreadcrumbs([
      { label: "Buildings", onClick: goToDashboard },
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
      companyId: String(formData.get("companyId") || "").trim(),
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

    setCurrentPropertyId(building.id);
    activeTenancyTab = "current";
    renderCurrentTenancyPage(building);
    showTenancyView();
  }

  function buildTenancyPayload(building, existingTenancy) {
    const formData = new FormData(tenancyForm);
    const companyName = String(formData.get("companyName") || "").trim();
    const company = ensureCompanyByName(companyName, "Tenant");
    const normalizedBuilding = ensureWorkflowCollections(building);
    const normalizedTenancy = existingTenancy || normalizedBuilding.tenancy || null;
    return {
      id: existingTenancy && existingTenancy.id ? existingTenancy.id : window.BuildingStorage.createId(),
      companyName: companyName,
      companyId: company ? company.id : "",
      tradingName: String(formData.get("tradingName") || "").trim(),
      leaseStart: String(formData.get("leaseStart") || "").trim(),
      leaseEnd: String(formData.get("leaseEnd") || "").trim(),
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

    if (archiveTenancyBtn instanceof HTMLButtonElement) {
      archiveTenancyBtn.style.display = mode === "edit" && building.tenancy ? "inline-flex" : "none";
    }

    renderTenancySectionState(Boolean(building.tenancy), "form");
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

  function handleArchiveTenancy() {
    const building = findBuildingById(activeBuildingId);
    if (!building || !building.tenancy) {
      return;
    }

    const shouldArchive = window.confirm("Archive this tenancy? It will be removed from Current and kept in History with all lease information, documents, and audit records.");
    if (!shouldArchive) {
      return;
    }

    const now = new Date().toISOString();
    const archivedEntry = createArchivedTenancyRecord(building.tenancy, now);
    const history = Array.isArray(building.tenancyHistory) ? building.tenancyHistory : [];
    const updated = {
      ...building,
      tenancy: null,
      tenancyHistory: history.concat(archivedEntry),
      status: "Vacant",
      lastUpdated: now,
    };

    window.BuildingStorage.updateBuilding(updated);
    renderBuildings();
    setTenancyTab("current");
    renderCurrentTenancyPage(updated);
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
      propertyTemplates: Array.isArray(current.propertyTemplates) ? current.propertyTemplates : [],
      scheduleItems: Array.isArray(current.scheduleItems) ? current.scheduleItems : [],
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

  function handleAddCompany() {
    openCompanyForm("add");
  }

  function handleDeleteContact() {
    if (!activeContactId) {
      return;
    }

    const shouldDelete = window.confirm("Delete this contact permanently?");
    if (!shouldDelete) {
      return;
    }

    deleteContactForActiveTenancy(activeContactId);
    renderBuildings();
    openContactsView();
  }

  function renderContactLinkedScheduleItems(contact) {
    if (!contactLinkedScheduleSection || !contactLinkedScheduleList) {
      return;
    }

    if (!contact || !contact.id) {
      contactLinkedScheduleSection.style.display = "block";
      contactLinkedScheduleList.innerHTML = '<p class="module-placeholder">Save this contact before linking schedule items.</p>';
      if (contactAddScheduleLinkBtn instanceof HTMLButtonElement) {
        contactAddScheduleLinkBtn.style.display = "none";
        contactAddScheduleLinkBtn.disabled = true;
      }
      if (contactRemoveScheduleLinkBtn instanceof HTMLButtonElement) {
        contactRemoveScheduleLinkBtn.style.display = "none";
        contactRemoveScheduleLinkBtn.disabled = true;
      }
      return;
    }

    const building = findBuildingById(activeBuildingId);
    if (!building) {
      contactLinkedScheduleSection.style.display = "block";
      contactLinkedScheduleList.innerHTML = '<p class="module-placeholder">No linked schedule items.</p>';
      if (contactAddScheduleLinkBtn instanceof HTMLButtonElement) {
        contactAddScheduleLinkBtn.style.display = "inline-flex";
        contactAddScheduleLinkBtn.disabled = false;
      }
      if (contactRemoveScheduleLinkBtn instanceof HTMLButtonElement) {
        contactRemoveScheduleLinkBtn.style.display = "inline-flex";
        contactRemoveScheduleLinkBtn.disabled = true;
      }
      return;
    }

    contactLinkedScheduleSection.style.display = "block";
    if (contactAddScheduleLinkBtn instanceof HTMLButtonElement) {
      contactAddScheduleLinkBtn.style.display = "inline-flex";
      contactAddScheduleLinkBtn.disabled = false;
    }
    if (contactRemoveScheduleLinkBtn instanceof HTMLButtonElement) {
      contactRemoveScheduleLinkBtn.style.display = "inline-flex";
      contactRemoveScheduleLinkBtn.disabled = false;
    }
    const linkedItems = getScheduleItemsLinkedToContact(building, contact.id);
    if (linkedItems.length === 0) {
      contactLinkedScheduleList.innerHTML = '<p class="module-placeholder">No linked schedule items.</p>';
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
          <h3 id="contact-link-schedule-title">Link Schedule Item</h3>
          <p>Select a schedule item to link to ${escapeHtml(contact.name)}.</p>
          <label>
            <span class="visually-hidden">Schedule item</span>
            <select id="contact-link-schedule-select" class="schedule-filter-select">
              <option value="">Select schedule item</option>
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
      return item.id === scheduleItemId;
    });
    if (!scheduleItem) {
      return null;
    }

    const templateId = scheduleItem.propertyTemplateId || scheduleItem.templateId;
    return updateScheduleItemWithTemplate(normalized, templateId, {
      preferredContactId: contactId,
    });
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
          <h3 id="contact-unlink-schedule-title">Remove Schedule Link</h3>
          <p>Select a linked schedule item to unlink from ${escapeHtml(contact.name)}.</p>
          <label>
            <span class="visually-hidden">Linked schedule item</span>
            <select id="contact-unlink-schedule-select" class="schedule-filter-select">
              <option value="">Select linked schedule item</option>
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
      return item.id === scheduleItemId;
    });
    if (!scheduleItem) {
      return null;
    }

    if (String(scheduleItem.preferredContactId || "") !== String(contactId || "")) {
      return null;
    }

    const templateId = scheduleItem.propertyTemplateId || scheduleItem.templateId;
    return updateScheduleItemWithTemplate(normalized, templateId, {
      preferredContactId: "",
    });
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

    const contacts = getContactsForActiveBuilding();
    let existingContact = null;
    if (contactFormMode === "edit") {
      existingContact = contacts.find(function (contact) {
        return contact.id === activeContactId;
      }) || null;
    }

    const payload = buildContactPayload(existingContact);
    if (!payload.companyId) {
      alert("Please select a company.");
      return;
    }

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
          openScheduleView(context.buildingId);
          openScheduleDetailsDialog(context.buildingId, context.scheduleItemId);
          return;
        }

        const linked = linkScheduleItemToContact(withRelationship, context.scheduleItemId, payload.id);
        if (linked) {
          const normalized = ensureWorkflowCollections(linked);
          window.BuildingStorage.updateBuilding(normalized);
          renderBuildings();
          setContactFormAssignmentContext(null);
          openScheduleView(context.buildingId);
          openScheduleDetailsDialog(context.buildingId, context.scheduleItemId);
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

      openScheduleView(activeBuildingId);
      openScheduleDetailsDialog(activeBuildingId, scheduleItemId);
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

    if (target.closest(".contact-phone-link") || target.closest(".contact-email-link")) {
      return;
    }

    if (target.closest(".contact-open-link") || target.closest(".contact-edit-btn")) {
      openContactDetailsDialog(selected);
      return;
    }

    openContactDetailsDialog(selected);
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
    if (contactAssignmentContext) {
      const context = contactAssignmentContext;
      setContactFormAssignmentContext(null);
      openScheduleView(context.buildingId);
      openScheduleDetailsDialog(context.buildingId, context.scheduleItemId);
      return;
    }

    if (contactFormCard.style.display === "block") {
      openContactsView();
      return;
    }

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

  function handleContactSearch() {
    contactsSearchQuery = String(contactsSearch.value || "");
    renderContactSectionState("list");
  }

  function handleLeaseBack() {
    openOverviewById(activeBuildingId);
  }

  function openLeaseCategoryDetail(categoryKey) {
    activeLeaseManagedCategoryKey = categoryKey;
    leaseCategorySearchQuery = "";
    if (leaseCategorySearch) {
      leaseCategorySearch.value = "";
    }
    const building = findBuildingById(activeBuildingId);
    if (!building) {
      return;
    }

    renderLeasePage(building);
  }

  function handleLeaseSearch() {
    leaseSearchQuery = String(leaseSearch.value || "");

    const building = findBuildingById(activeBuildingId);
    if (!building) {
      return;
    }

    renderLeasePage(building);
  }

  async function handleLeaseCategoryGridClick(event) {
    const target = event.target;
    if (!(target instanceof HTMLElement)) {
      return;
    }

    const actionButton = target.closest("[data-document-module-action]");
    if (actionButton) {
      const building = findBuildingById(activeBuildingId);
      if (!building) {
        return;
      }

      const categoryId = actionButton.getAttribute("data-document-category-id") || "";
      const documentId = actionButton.getAttribute("data-document-id") || "";
      const action = actionButton.getAttribute("data-document-module-action") || "";

      const category = findDocumentCategoryById(ensureWorkflowCollections(building), categoryId);
      if (!category && action !== "add") {
        return;
      }

      if (action === "toggle") {
        toggleDocumentCategory(categoryId);
        return;
      }

      if (action === "open") {
        openLeaseCategoryDetail(categoryId);
        return;
      }

      if (action === "add") {
        await handleLeaseCategoryLoad(categoryId);
        return;
      }

      if (action === "manage") {
        await handleManageDocumentCategory(categoryId);
        return;
      }

      const documentRecord = findDocumentRecordById(ensureWorkflowCollections(building), category, documentId);
      if (!documentRecord) {
        return;
      }

      if (action === "view") {
        openOrDownloadLeaseDocument(documentRecord, false);
        return;
      }

      if (action === "download") {
        openOrDownloadLeaseDocument(documentRecord, true);
        return;
      }

      if (action === "replace") {
        await handleLeaseDocumentReplace(categoryId, documentId);
        return;
      }

      if (action === "delete-document") {
        const shouldDelete = window.confirm(`Delete document \"${documentRecord.fileName || "Untitled"}\"?`);
        if (!shouldDelete) {
          return;
        }

        const updated = updateActiveBuildingDocumentsState(function (draft) {
          const targetCategory = findDocumentCategoryById(draft, categoryId);
          if (targetCategory && targetCategory.source === "lease" && draft.tenancy && draft.tenancy.lease) {
            const lease = draft.tenancy.lease;
            lease.documents = (lease.documents || []).filter(function (entry) {
              return entry.id !== documentId;
            });
            draft.tenancy.lease = lease;
            draft.tenancy.documents = lease.documents;
            return draft;
          }

          draft.documents = (draft.documents || []).filter(function (entry) {
            return entry.id !== documentId;
          });
          return draft;
        });

        if (updated) {
          renderBuildings();
          renderLeasePage(updated);
        }
      }
      return;
    }

    const categoryCard = target.closest("[data-document-category-id]");
    if (categoryCard && !target.closest("button")) {
      const categoryId = categoryCard.getAttribute("data-document-category-id") || "";
      if (categoryId) {
        openLeaseCategoryDetail(categoryId);
      }
    }
  }

  function handleLeaseCategoryGridKeydown(event) {
    if (event.key !== "Enter" && event.key !== " ") {
      return;
    }

    const target = event.target;
    if (!(target instanceof HTMLElement)) {
      return;
    }

    const card = target.closest("[data-document-category-id]");
    if (!card || target.closest("button")) {
      return;
    }

    event.preventDefault();
    const categoryId = card.getAttribute("data-document-category-id") || "";
    if (categoryId) {
      openLeaseCategoryDetail(categoryId);
    }
  }

  function handleLeaseCategoryDetailBack() {
    activeLeaseManagedCategoryKey = "";
    leaseCategorySearchQuery = "";
    if (leaseCategorySearch) {
      leaseCategorySearch.value = "";
    }

    const building = findBuildingById(activeBuildingId);
    if (!building) {
      return;
    }

    renderLeasePage(building);
  }

  async function handleLeaseCategoryDetailClick(event) {
    const target = event.target;
    if (!(target instanceof HTMLElement)) {
      return;
    }

    const actionButton = target.closest("[data-document-module-action]");
    if (!actionButton) {
      return;
    }

    const categoryId = actionButton.getAttribute("data-document-category-id") || activeLeaseManagedCategoryKey || "";
    const action = actionButton.getAttribute("data-document-module-action") || "";

    if (action === "add") {
      await handleLeaseCategoryLoad(categoryId);
      return;
    }

    if (action === "manage") {
      await handleManageDocumentCategory(categoryId);
      return;
    }

    const documentId = actionButton.getAttribute("data-document-id") || "";
    if (!documentId) {
      return;
    }

    const building = findBuildingById(activeBuildingId);
    if (!building) {
      return;
    }

    const normalized = ensureWorkflowCollections(building);
    const category = findDocumentCategoryById(normalized, categoryId);
    if (!category) {
      return;
    }

    const documentRecord = findDocumentRecordById(normalized, category, documentId);
    if (!documentRecord) {
      return;
    }

    if (action === "view") {
      openOrDownloadLeaseDocument(documentRecord, false);
      return;
    }

    if (action === "download") {
      openOrDownloadLeaseDocument(documentRecord, true);
      return;
    }

    if (action === "replace") {
      await handleLeaseDocumentReplace(categoryId, documentId);
      return;
    }

    if (action === "delete-document") {
      const shouldDelete = window.confirm(`Delete document \"${documentRecord.fileName || "Untitled"}\"?`);
      if (!shouldDelete) {
        return;
      }

      const updated = updateActiveBuildingDocumentsState(function (draft) {
        const targetCategory = findDocumentCategoryById(draft, categoryId);
        if (targetCategory && targetCategory.source === "lease" && draft.tenancy && draft.tenancy.lease) {
          const lease = draft.tenancy.lease;
          lease.documents = (lease.documents || []).filter(function (entry) {
            return entry.id !== documentId;
          });
          draft.tenancy.lease = lease;
          draft.tenancy.documents = lease.documents;
          return draft;
        }

        draft.documents = (draft.documents || []).filter(function (entry) {
          return entry.id !== documentId;
        });
        return draft;
      });

      if (updated) {
        renderBuildings();
        renderLeasePage(updated);
      }
    }
  }

  function handleLeaseCategorySearch() {
    leaseCategorySearchQuery = String(leaseCategorySearch.value || "");
    const building = findBuildingById(activeBuildingId);
    if (!building) {
      return;
    }

    renderLeasePage(building);
  }

  function handleLeaseCategoryManage() {
    if (!activeLeaseManagedCategoryKey) {
      return;
    }
    handleManageDocumentCategory(activeLeaseManagedCategoryKey);
  }

  function handleLeaseCategoryUpload() {
    if (!activeLeaseManagedCategoryKey) {
      return;
    }
    handleLeaseCategoryLoad(activeLeaseManagedCategoryKey);
  }

  function openInlineMasterTemplateCreateDialog() {
    return new Promise(function (resolve) {
      const backdrop = window.document.createElement("div");
      backdrop.className = "template-delete-modal-backdrop";

      const dialog = window.document.createElement("div");
      dialog.className = "template-delete-modal template-master-create-modal";
      dialog.setAttribute("role", "dialog");
      dialog.setAttribute("aria-modal", "true");
      dialog.setAttribute("aria-labelledby", "template-master-create-title");

      dialog.innerHTML = `
        <h3 id="template-master-create-title">New Master Template</h3>
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
      backdrop.className = "template-delete-modal-backdrop";

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
      backdrop.className = "template-delete-modal-backdrop";

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
      const assignedMasterTemplateIds = new Set(getPropertyTemplates(building || {}).map(function (template) {
        return String(template.masterTemplateId || "").trim();
      }).filter(function (id) {
        return Boolean(id);
      }));
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
        <h3 id="template-picker-title">Add Templates To Property</h3>
        <div class="template-picker-toolbar">
          <button class="btn btn-secondary btn-small" type="button" data-template-picker-action="new-master">+ New Master Template</button>
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
        <div class="template-delete-modal-actions">
          <button class="btn btn-secondary" type="button" data-template-picker-action="cancel">Cancel</button>
          <button class="btn btn-primary" type="button" data-template-picker-action="add">Update Property Templates</button>
        </div>
      `;

      backdrop.appendChild(dialog);
      window.document.body.appendChild(backdrop);

      const listContainer = dialog.querySelector("[data-template-picker-list]");
      const searchInput = dialog.querySelector("#template-picker-search");

      function getFilteredTemplates() {
        const templates = getScheduledItemTemplates();

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
          return `
            <article class="template-picker-item" data-template-id="${template.id}">
              <input type="checkbox" value="${template.id}"${checked} />
              <span class="template-picker-item-content">
                <strong>${escapeHtml(template.name)}</strong>
                <span>${escapeHtml(template.category)}</span>
                <span>${escapeHtml(template.defaultFrequency)}</span>
              </span>
              <span class="template-picker-item-actions">
                <button class="btn btn-secondary btn-small" type="button" data-template-picker-template-action="edit" data-template-id="${template.id}">Edit</button>
                <button class="btn template-delete-btn btn-small" type="button" data-template-picker-template-action="delete" data-template-id="${template.id}">Delete</button>
              </span>
            </article>
          `;
        }).join("");
      }

      function closeWith(selected) {
        window.document.removeEventListener("keydown", handleEscape);
        backdrop.remove();
        resolve(selected);
      }

      function handleEscape(event) {
        if (event.key === "Escape") {
          closeWith([]);
        }
      }

      window.document.addEventListener("keydown", handleEscape);

      backdrop.addEventListener("click", function (event) {
        if (event.target === backdrop) {
          closeWith([]);
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

          if (rowAction === "delete") {
            const shouldDelete = await confirmMasterTemplateDeleteDialog();
            if (!shouldDelete) {
              return;
            }

            const remaining = getScheduledItemTemplates().filter(function (template) {
              return template.id !== templateId;
            });
            saveScheduledItemTemplates(remaining);
            selectedIds.delete(templateId);
            renderList();
            return;
          }
        }

        const action = target.getAttribute("data-template-picker-action");
        if (!action) {
          return;
        }

        if (action === "cancel") {
          closeWith([]);
          return;
        }

        if (action === "add") {
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
    });
  }

  function confirmPropertyTemplateUnassignDialog(count) {
    return new Promise(function (resolve) {
      const backdrop = window.document.createElement("div");
      backdrop.className = "template-delete-modal-backdrop";

      const dialog = window.document.createElement("div");
      dialog.className = "template-delete-modal";
      dialog.setAttribute("role", "dialog");
      dialog.setAttribute("aria-modal", "true");
      dialog.setAttribute("aria-labelledby", "template-unassign-modal-title");

      const message = count === 1
        ? "This will remove the assigned schedule item from this property."
        : `This will remove ${count} assigned schedule items from this property.`;

      dialog.innerHTML = `
        <h3 id="template-unassign-modal-title">Remove Template Assignment</h3>
        <p>${message}</p>
        <p>Master templates and assignments on other properties will not be changed.</p>
        <div class="template-delete-modal-actions">
          <button class="btn btn-secondary" type="button" data-template-unassign-action="cancel">Cancel</button>
          <button class="btn template-delete-btn" type="button" data-template-unassign-action="remove">Remove</button>
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

  function removeMasterTemplatesFromBuilding(masterTemplateIds, buildingId) {
    const targetBuildingId = String(buildingId || activeBuildingId || "").trim();
    const building = findBuildingById(targetBuildingId);
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
      historyRecords: (normalized.historyRecords || []).filter(function (record) {
        return !scheduleItemIdsToRemove.has(record.scheduleItemId);
      }),
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
        <h3 id="property-template-editor-title">Add Templates To Schedule</h3>
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
                  <label data-custom-date-wrap style="display: ${template.defaultFrequency === "Custom" ? "grid" : "none"};">Custom Schedule Date<input type="date" data-field="customDueDate" value="${escapeHtml(customDueDate)}" /></label>
                </article>
              `;
            }).join("")}
          </div>
          <div class="template-delete-modal-actions">
            <button class="btn btn-secondary" type="button" data-property-template-editor-action="cancel">Cancel</button>
            <button class="btn btn-primary" type="submit">Add to Schedule</button>
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

  function addMasterTemplatesToActiveBuilding(masterTemplateIds, buildingId, templateSettings) {
    const targetBuildingId = String(buildingId || activeBuildingId || "").trim();
    const building = findBuildingById(targetBuildingId);
    if (!building) {
      return null;
    }

    const normalized = ensureWorkflowCollections(building);
    const existing = getPropertyTemplates(normalized);
    const alreadyLinked = new Set(existing.map(function (template) {
      return template.masterTemplateId;
    }));
    const settingsByTemplateId = new Map((templateSettings || []).map(function (entry) {
      return [String(entry.templateId || entry.id || ""), entry];
    }));

    const fallbackDueDate = new Date().toISOString().slice(0, 10);
    const newPropertyTemplates = (masterTemplateIds || []).map(function (masterTemplateId) {
      const master = findMasterTemplateById(masterTemplateId);
      if (!master || alreadyLinked.has(master.id)) {
        return null;
      }
      alreadyLinked.add(master.id);
      const settings = settingsByTemplateId.get(master.id) || {};
      const resolvedFrequency = String(settings.defaultFrequency || master.defaultFrequency || "Annual").trim() || "Annual";
      const resolvedInitialDueDate = String(settings.initialDueDate || settings.nextDueDate || master.nextDueDate || "").trim() || fallbackDueDate;
      const resolvedNextDueDate = String(settings.nextDueDate || resolvedInitialDueDate).trim() || resolvedInitialDueDate || fallbackDueDate;
      return createPropertyTemplateFromMaster(master, {
        propertyId: targetBuildingId,
        active: "Yes",
        defaultFrequency: resolvedFrequency,
        initialDueDate: resolvedInitialDueDate,
        nextDueDate: resolvedNextDueDate,
        customRecurringDates: resolvedFrequency === "Custom" ? [] : normalizeRecurringDateEntries(settings.customRecurringDates || master.customRecurringDates),
        defaultReminderPeriod: String(settings.defaultReminderPeriod || master.defaultReminderPeriod || "").trim(),
        preferredCompanyId: String(settings.preferredCompanyId || master.preferredCompanyId || "").trim(),
        preferredContactId: String(settings.preferredContactId || master.preferredContactId || "").trim(),
        defaultNotes: String(settings.defaultNotes || master.defaultNotes || "").trim(),
        suggestedDocuments: normalizeSuggestedDocuments(settings.suggestedDocuments || master.suggestedDocuments),
      });
    }).filter(function (template) {
      return Boolean(template);
    });

    const newScheduleItems = newPropertyTemplates.map(function (propertyTemplate) {
      return createScheduleItemFromPropertyTemplate(propertyTemplate, targetBuildingId);
    });

    if (newPropertyTemplates.length === 0 || newScheduleItems.length === 0) {
      return {
        building: normalized,
        addedTemplateIds: [],
      };
    }

    const updated = {
      ...normalized,
      propertyTemplates: existing.concat(newPropertyTemplates),
      scheduleItems: (normalized.scheduleItems || []).concat(newScheduleItems),
      lastUpdated: new Date().toISOString(),
    };

    const rehydrated = ensureWorkflowCollections(updated);
    return {
      building: rehydrated,
      addedTemplateIds: newPropertyTemplates.map(function (template) {
        return template.id;
      }),
    };
  }

  function persistBuildingWithWorkflowSync(building) {
    const normalized = ensureWorkflowCollections(building);
    window.BuildingStorage.updateBuilding(normalized);
    return normalized;
  }

  async function handleManageTemplatesForProperty() {
    if (!activeBuildingId) {
      alert("Select a property before managing templates for a property schedule.");
      return;
    }

    const propertyId = activeBuildingId;

    const activeBuilding = findBuildingById(propertyId);
    if (!activeBuilding) {
      return;
    }

    const selected = await showMasterTemplatePickerDialog(activeBuilding);
    if (!selected || selected.length === 0) {
      const currentlyAssigned = new Set(getPropertyTemplates(activeBuilding).map(function (template) {
        return String(template.masterTemplateId || "").trim();
      }).filter(function (id) {
        return Boolean(id);
      }));

      if (currentlyAssigned.size === 0) {
        return;
      }
    }

    const currentBuilding = findBuildingById(propertyId);
    if (!currentBuilding) {
      return;
    }

    const currentlyAssigned = new Set(getPropertyTemplates(currentBuilding).map(function (template) {
      return String(template.masterTemplateId || "").trim();
    }).filter(function (id) {
      return Boolean(id);
    }));
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

    let workingBuilding = ensureWorkflowCollections(currentBuilding);

    if (toRemove.length > 0) {
      const shouldRemove = await confirmPropertyTemplateUnassignDialog(toRemove.length);
      if (shouldRemove) {
        const removed = removeMasterTemplatesFromBuilding(toRemove, propertyId);
        if (removed) {
          workingBuilding = ensureWorkflowCollections(removed);
        }
      }
    }

    if (toAdd.length === 0) {
      persistBuildingWithWorkflowSync(workingBuilding);
      renderBuildings();
      openScheduleView(propertyId);
      return;
    }

    const scheduleSettings = await showPropertyTemplateEditorDialog(workingBuilding, toAdd);
    if (!scheduleSettings || scheduleSettings.length === 0) {
      return;
    }

    persistBuildingWithWorkflowSync(workingBuilding);

    const addResult = addMasterTemplatesToActiveBuilding(toAdd, propertyId, scheduleSettings);
    if (!addResult || addResult.addedTemplateIds.length === 0) {
      renderBuildings();
      openScheduleView(propertyId);
      return;
    }

    persistBuildingWithWorkflowSync(addResult.building);

    renderBuildings();
    openScheduleView(propertyId);
  }

  function handleScheduleBack() {
    openOverviewById(activeBuildingId);
  }

  function completeScheduleItemInline(itemId, buildingId) {
    const targetBuildingId = buildingId || activeBuildingId;
    showScheduleCompleteDialog(targetBuildingId, itemId);
  }

  function getScheduleDetailsData(building, scheduleItem) {
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
      records: records,
      latestRecord: records[0] || null,
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

  function renderPrimaryContactSection(building, scheduleItem, detailsData) {
    const selectedContactId = String(detailsData.template.preferredContactId || scheduleItem.preferredContactId || "").trim();
    const selectedContact = selectedContactId ? findContactById(selectedContactId) : null;

    if (!selectedContact) {
      return `
        <section class="schedule-details-section">
          <h4>Primary Contact</h4>
          <p class="module-placeholder">No Primary Contact Assigned</p>
          <div>
            <button class="btn btn-secondary btn-small" type="button" data-schedule-details-action="assign-contact">Assign Contact</button>
          </div>
        </section>
      `;
    }

    const relationship = getBuildingRelationshipForContact(building, selectedContact);
    const phoneMarkup = selectedContact.mobile
      ? `<a class="inline-link contact-phone-link" href="tel:${escapeHtml(selectedContact.mobile)}">${escapeHtml(selectedContact.mobile)}</a>`
      : "Not provided";
    const emailMarkup = selectedContact.email
      ? `<a class="inline-link contact-email-link" href="mailto:${escapeHtml(selectedContact.email)}">${escapeHtml(selectedContact.email)}</a>`
      : "Not provided";

    return `
      <section class="schedule-details-section">
        <h4>Primary Contact</h4>
        <dl class="schedule-details-grid">
          <div><dt>Contact Name</dt><dd>${escapeHtml(selectedContact.name)}</dd></div>
          <div><dt>Role / Service</dt><dd>${renderContactRoleBadge(relationship)}</dd></div>
          <div><dt>Phone Number</dt><dd>${phoneMarkup}</dd></div>
          <div><dt>Email Address</dt><dd>${emailMarkup}</dd></div>
        </dl>
        <div>
          <button class="btn btn-secondary btn-small" type="button" data-schedule-details-action="open-contact" data-schedule-contact-id="${selectedContact.id}">Open Contact</button>
        </div>
      </section>
    `;
  }

  function showSchedulePrimaryContactDialog(building, scheduleItem, options) {
    return new Promise(function (resolve) {
      const contacts = getContactsForBuilding(building).slice().sort(function (left, right) {
        return String(left.name || "").localeCompare(String(right.name || ""), undefined, { sensitivity: "base" });
      });
      const assignmentOptions = options && typeof options === "object" ? options : {};
      const currentTemplate = findPropertyTemplateById(building, scheduleItem.propertyTemplateId || scheduleItem.templateId);
      const currentPrimaryContactId = String(
        assignmentOptions.currentPrimaryContactId
        || (currentTemplate && currentTemplate.preferredContactId)
        || scheduleItem.preferredContactId
        || ""
      ).trim();
      const currentPrimaryContact = currentPrimaryContactId ? findContactById(currentPrimaryContactId) : null;
      const currentPrimaryContactName = currentPrimaryContact && currentPrimaryContact.name
        ? currentPrimaryContact.name
        : "None assigned";
      let selectedContactId = String(assignmentOptions.preselectedContactId || currentPrimaryContactId || "").trim();
      let searchQuery = "";

      const backdrop = window.document.createElement("div");
      backdrop.className = "template-delete-modal-backdrop";
      backdrop.innerHTML = `
        <div class="template-delete-modal contact-assignment-modal" role="dialog" aria-modal="true" aria-labelledby="primary-contact-dialog-title">
          <h3 id="primary-contact-dialog-title">Assign Primary Contact</h3>
          <p class="primary-contact-context-line">${escapeHtml(scheduleItem.taskName)}</p>
          <p class="primary-contact-context-line">${escapeHtml(building.buildingName || "")}</p>
          <section class="primary-contact-current" aria-label="Current primary contact">
            <h4>Current Primary Contact</h4>
            <p>${escapeHtml(currentPrimaryContactName)}</p>
          </section>
          <h4>Search Contacts</h4>
          <label class="primary-contact-search-wrap">
            <span class="visually-hidden">Search contacts</span>
            <input id="primary-contact-search" class="search-input primary-contact-search-input" type="search" placeholder="Search by name, company or email..." />
          </label>
          <h4>Existing Contacts</h4>
          <section id="primary-contact-card-list" class="building-list primary-contact-card-list" aria-live="polite"></section>
          <button class="btn btn-secondary btn-small primary-contact-create-link" type="button" data-primary-contact-action="create">+ Create New Contact</button>
          <div class="template-delete-modal-actions">
            <button class="btn btn-secondary" type="button" data-primary-contact-action="cancel">Cancel</button>
            <button class="btn btn-primary" type="button" data-primary-contact-action="assign" disabled>Assign</button>
          </div>
        </div>
      `;

      window.document.body.appendChild(backdrop);

      const dialogElement = backdrop.querySelector(".template-delete-modal");
      const layer = pushModalLayer(backdrop, dialogElement instanceof HTMLElement ? dialogElement : null);
      const releaseFocusTrap = enableModalFocusTrap(
        dialogElement instanceof HTMLElement ? dialogElement : null,
        function () {
          return isTopModalLayer(layer);
        }
      );

      const searchInput = backdrop.querySelector("#primary-contact-search");
      const cardList = backdrop.querySelector("#primary-contact-card-list");
      const assignButton = backdrop.querySelector('[data-primary-contact-action="assign"]');

      function getFilteredContacts() {
        const query = normalizeText(searchQuery);
        if (!query) {
          return contacts;
        }

        return contacts.filter(function (contact) {
          const companyName = getCompanyNameById(contact.companyId, "");
          const relationship = getBuildingRelationshipForContact(building, contact);
          return normalizeText(contact.name).includes(query)
            || normalizeText(companyName).includes(query)
            || normalizeText(relationship).includes(query)
            || normalizeText(contact.mobile || "").includes(query)
            || normalizeText(contact.email || "").includes(query);
        });
      }

      function renderContactCards() {
        if (!(cardList instanceof HTMLElement)) {
          return;
        }

        const filtered = getFilteredContacts();
        if (filtered.length === 0) {
          cardList.innerHTML = '<p class="module-placeholder">No contacts match your search.</p>';
        } else {
          cardList.innerHTML = filtered.map(function (contact) {
            const companyName = getCompanyNameById(contact.companyId, "Not set");
            const relationship = getBuildingRelationshipForContact(building, contact);
            const isSelected = String(contact.id) === String(selectedContactId || "");
            const selectedClass = isSelected ? " is-selected" : "";
            const phoneValue = contact.mobile || "Not provided";
            const emailValue = contact.email || "Not provided";

            return `
              <button class="building-card clickable-card primary-contact-card${selectedClass}" type="button" data-primary-contact-card-id="${contact.id}" aria-pressed="${isSelected ? "true" : "false"}">
                <span class="primary-contact-selected-indicator" aria-hidden="true">✓</span>
                <h3>${escapeHtml(contact.name)}</h3>
                <p>${renderContactRoleBadge(relationship)}</p>
                <p>${escapeHtml(companyName)}</p>
                <p>📞 ${escapeHtml(phoneValue)}</p>
                <p>✉ ${escapeHtml(emailValue)}</p>
              </button>
            `;
          }).join("");
        }

        if (assignButton instanceof HTMLButtonElement) {
          assignButton.disabled = !selectedContactId;
        }
      }

      let isClosed = false;

      function cleanupLayer() {
        if (isClosed) {
          return;
        }

        isClosed = true;
        document.removeEventListener("keydown", handleEscape);
        releaseFocusTrap();
        popModalLayer(layer, true);
        delete backdrop.__releaseModalLayer;
      }

      function close(value) {
        cleanupLayer();
        backdrop.remove();
        resolve(value);
      }

      function handleEscape(event) {
        if (event.key !== "Escape") {
          return;
        }

        if (!isTopModalLayer(layer)) {
          return;
        }

        event.preventDefault();
        close(null);
      }

      backdrop.__releaseModalLayer = cleanupLayer;
      document.addEventListener("keydown", handleEscape);

      backdrop.addEventListener("click", function (event) {
        if (event.target === backdrop) {
          close(null);
        }
      });

      backdrop.addEventListener("click", function (event) {
        const target = event.target;
        if (!(target instanceof HTMLElement)) {
          return;
        }

        const action = target.getAttribute("data-primary-contact-action");
        if (action === "cancel") {
          close(null);
          return;
        }

        if (action === "create") {
          close(null);
          openContactForm("add", null, {
            assignmentContext: {
              buildingId: activeBuildingId || building.id,
              scheduleItemId: scheduleItem.id,
              returnToPrimaryContactPicker: true,
            },
          });
          return;
        }

        if (action === "assign") {
          if (!selectedContactId) {
            return;
          }

          close({ mode: "existing", contactId: selectedContactId });
          return;
        }

        const card = target.closest("[data-primary-contact-card-id]");
        if (card instanceof HTMLElement) {
          const contactId = String(card.getAttribute("data-primary-contact-card-id") || "").trim();
          if (!contactId) {
            return;
          }

          selectedContactId = contactId;
          renderContactCards();
        }
      });

      if (searchInput instanceof HTMLInputElement) {
        searchInput.addEventListener("input", function () {
          searchQuery = String(searchInput.value || "").trim();
          renderContactCards();
        });
      }

      renderContactCards();
      focusFirstElementInContainer(dialogElement instanceof HTMLElement ? dialogElement : backdrop);
    });
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

  function updateScheduleItemWithTemplate(building, templateId, updates) {
    const now = new Date().toISOString();
    return {
      ...building,
      propertyTemplates: getPropertyTemplates(building).map(function (template) {
        if (template.id !== templateId) {
          return template;
        }
        return normalizePropertyTemplateRecord({
          ...template,
          ...updates,
          lastUpdated: now,
        });
      }),
      scheduleItems: (building.scheduleItems || []).map(function (item) {
        if ((item.propertyTemplateId || item.templateId) !== templateId) {
          return item;
        }

        const hasPrimaryContactUpdate = Object.prototype.hasOwnProperty.call(updates, "preferredContactId");
        const hasPropertyUpdate = Object.prototype.hasOwnProperty.call(updates, "propertyId");
        return {
          ...item,
          propertyId: hasPropertyUpdate ? String(updates.propertyId || "").trim() : String(item.propertyId || "").trim(),
          taskName: updates.name || item.taskName,
          category: updates.category || item.category,
          frequency: updates.defaultFrequency || item.frequency,
          dueDate: updates.nextDueDate || item.dueDate,
          preferredContactId: hasPrimaryContactUpdate ? String(updates.preferredContactId || "") : String(item.preferredContactId || ""),
          status: getScheduleStatusText({ ...item, status: "", dueDate: updates.nextDueDate || item.dueDate }),
          lastUpdated: now,
        };
      }),
      lastUpdated: now,
    };
  }

  function calculateNextDueDateFromSettings(initialDueDate, frequency, latestRecord, recurringDates) {
    const baseDate = String(initialDueDate || "").trim();
    if (!baseDate) {
      return "";
    }

    if (frequency === "Custom") {
      const customBaseDate = latestRecord && latestRecord.completedDate ? latestRecord.completedDate : baseDate;
      return getNextDueDatePlaceholder(customBaseDate, frequency, recurringDates, !latestRecord);
    }

    if (!latestRecord || !latestRecord.completedDate) {
      return baseDate;
    }

    return getNextDueDatePlaceholder(latestRecord.completedDate, frequency, recurringDates, false);
  }

  async function handleScheduleDetailsSave(building, scheduleItem, form) {
    const formData = new FormData(form);
    const title = String(formData.get("title") || "").trim();
    const frequency = String(formData.get("frequency") || "Annual").trim();
    const category = String(formData.get("category") || "General").trim();
    const initialDueDate = String(formData.get("initialDueDate") || "").trim();
    const propertyId = String(formData.get("propertyId") || "").trim();
    const primaryContactId = String(formData.get("primaryContactId") || "").trim();
    const notes = String(formData.get("notes") || "").trim();
    const recurringDates = frequency === "Custom" ? readRecurringDatesFromEditForm(form) : [];

    if (!title || !initialDueDate || !propertyId) {
      alert("Title, Property and Initial Due Date are required.");
      return;
    }

    if (frequency === "Custom" && recurringDates.length === 0) {
      alert("Add at least one recurring date for Custom frequency.");
      return;
    }

    const detailsData = getScheduleDetailsData(building, scheduleItem);
    if (!detailsData) {
      return;
    }

    const nextDueDate = calculateNextDueDateFromSettings(initialDueDate, frequency, detailsData.latestRecord, recurringDates);
    const updatedBuilding = updateScheduleItemWithTemplate(building, detailsData.template.id, {
      name: title,
      category: category,
      defaultFrequency: frequency,
      initialDueDate: initialDueDate,
      nextDueDate: nextDueDate,
      propertyId: propertyId,
      customRecurringDates: recurringDates,
      preferredContactId: primaryContactId,
      defaultNotes: notes,
    });

    const normalized = ensureWorkflowCollections(updatedBuilding);
    window.BuildingStorage.updateBuilding(normalized);
    renderBuildings();
    renderSchedulePage();
    await openScheduleDetailsDialog(normalized.id, scheduleItem.id);
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
    const updatedBuilding = updateScheduleItemWithTemplate(building, updatedTemplate.id, {
      attachments: updatedTemplate.attachments,
    });
    const normalized = ensureWorkflowCollections(updatedBuilding);
    window.BuildingStorage.updateBuilding(normalized);
    renderBuildings();
    renderSchedulePage();
    await openScheduleDetailsDialog(normalized.id, scheduleItem.id);
  }

  function deleteScheduleItem(building, scheduleItem) {
    const templateId = scheduleItem.propertyTemplateId || scheduleItem.templateId;
    const now = new Date().toISOString();
    const updated = {
      ...building,
      propertyTemplates: getPropertyTemplates(building).filter(function (template) {
        return template.id !== templateId;
      }),
      scheduleItems: (building.scheduleItems || []).filter(function (item) {
        return item.id !== scheduleItem.id;
      }),
      historyRecords: (building.historyRecords || []).filter(function (record) {
        return record.scheduleItemId !== scheduleItem.id;
      }),
      lastUpdated: now,
    };

    const normalized = ensureWorkflowCollections(updated);
    window.BuildingStorage.updateBuilding(normalized);
  }

  function renderScheduleDetailsDialogHtml(building, scheduleItem, detailsData) {
    const template = detailsData.template;
    const latestRecord = detailsData.latestRecord;
    const canRevert = Boolean(getPendingRevertRecord(building, scheduleItem));
    const statusText = latestRecord && wasCompletedToday(latestRecord)
      ? "Completed"
      : getScheduleStatusText(scheduleItem);

    return `
      <div class="schedule-details-modal" role="dialog" aria-modal="true" aria-labelledby="schedule-details-title">
        <header class="schedule-details-header">
          <h3 id="schedule-details-title">${escapeHtml(scheduleItem.taskName)}</h3>
          <button class="btn btn-secondary btn-small" type="button" data-schedule-details-action="close">Back</button>
        </header>

        <section class="schedule-details-section">
          <div class="schedule-details-section-header">
            <h4>Schedule Details</h4>
          </div>
          <dl class="schedule-details-grid" data-schedule-details-display>
            <div><dt>Title</dt><dd>${escapeHtml(template.name)}</dd></div>
            <div><dt>Category</dt><dd>${escapeHtml(template.category)}</dd></div>
            <div><dt>Frequency</dt><dd>${escapeHtml(template.defaultFrequency)}</dd></div>
            <div><dt>Property</dt><dd>${escapeHtml(getBuildingNameById(scheduleItem.propertyId) || "Property not assigned")}</dd></div>
            <div><dt>Initial Due Date</dt><dd>${formatDate(template.initialDueDate)}</dd></div>
            <div><dt>Last Completed</dt><dd>${formatLastCompletedDate(scheduleItem.lastCompletedDate || "")}</dd></div>
            <div><dt>Next Due Date</dt><dd>${formatDate(scheduleItem.dueDate)}</dd></div>
            <div><dt>Status</dt><dd>${escapeHtml(statusText)}</dd></div>
          </dl>

          <form class="schedule-details-edit-form" data-schedule-details-edit-form style="display: none;">
            <dl class="schedule-details-grid schedule-details-readonly-grid">
              <div><dt>Last Completed</dt><dd>${escapeHtml(formatLastCompletedDate(scheduleItem.lastCompletedDate || ""))}</dd></div>
              <div><dt>Next Due Date</dt><dd>${formatDate(scheduleItem.dueDate)}</dd></div>
            </dl>
            <label>Title<input name="title" type="text" value="${escapeHtml(template.name)}" required /></label>
            <label>Property *
              <select name="propertyId" required>
                ${renderPropertySelectOptions(scheduleItem.propertyId || building.id)}
              </select>
            </label>
            <label>Frequency
              <select name="frequency">
                ${TEMPLATE_FREQUENCY_OPTIONS.map(function (option) {
                  const selected = option === template.defaultFrequency ? " selected" : "";
                  return `<option value="${option}"${selected}>${option}</option>`;
                }).join("")}
              </select>
            </label>
            <label>Category
              <select name="category">
                ${TEMPLATE_CATEGORY_OPTIONS.map(function (option) {
                  const selected = option === template.category ? " selected" : "";
                  return `<option value="${option}"${selected}>${option}</option>`;
                }).join("")}
              </select>
            </label>
            <label>Initial Due Date<input name="initialDueDate" type="date" value="${escapeHtml(template.initialDueDate)}" required /></label>
            <label>Primary Contact
              <input type="search" class="search-input" data-primary-contact-search placeholder="Search contacts" />
              <select name="primaryContactId" data-primary-contact-select>
                ${renderSchedulePrimaryContactOptions(building, template.preferredContactId || scheduleItem.preferredContactId || "")}
              </select>
            </label>
            <div data-recurring-dates-section style="display: ${template.defaultFrequency === "Custom" ? "grid" : "none"}; gap: 0.7rem;">
              ${renderRecurringDatesSection(getRecurringDatesFromTemplate(template))}
            </div>
            <label>Notes<textarea name="notes" rows="3">${escapeHtml(template.defaultNotes || "")}</textarea></label>
            <div class="schedule-details-form-actions">
              <button class="btn btn-primary btn-small" type="submit">Save</button>
              <button class="btn btn-secondary btn-small" type="button" data-schedule-details-action="cancel-edit">Cancel</button>
            </div>
          </form>
        </section>

        ${renderPrimaryContactSection(building, scheduleItem, detailsData)}

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

        <section class="schedule-details-bottom-actions" aria-label="Schedule actions">
          <button class="btn btn-secondary" type="button" data-schedule-details-action="toggle-edit">Edit</button>
          ${canRevert
            ? '<button class="btn schedule-revert-action-btn" type="button" data-schedule-details-action="revert">Revert</button>'
            : '<button class="btn btn-primary" type="button" data-schedule-details-action="complete">Complete</button>'}
        </section>
      </div>
    `;
  }

  function showScheduleCompletionDialog(building, scheduleItem) {
    return new Promise(function (resolve) {
      const backdrop = window.document.createElement("div");
      backdrop.className = "schedule-details-backdrop";

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

    const companyUsedId = scheduleItem.preferredCompanyId || "";
    const companyUsed = getCompanyNameById(companyUsedId, scheduleItem.preferredCompany || "");
    const contactUsedId = scheduleItem.preferredContactId || "";
    const contactUsed = contactUsedId ? getContactNameById(contactUsedId) : "";
    const completedAt = new Date(`${result.completedDate}T${new Date().toTimeString().slice(0, 8)}`).toISOString();
    const normalized = ensureWorkflowCollections(building);
    const updated = applyTemplateCompletion(normalized, scheduleItem, {
      completedAt: completedAt,
      completedBy: result.completedBy,
      companyUsed: companyUsed,
      companyUsedId: companyUsedId,
      contactUsed: contactUsed,
      contactUsedId: contactUsedId,
      notes: result.notes,
      completionDocument: result.completionDocument,
    });
    if (!updated) {
      return;
    }

    renderBuildings();
    renderSchedulePage();
  }

  async function promptPrimaryContactAssignment(building, scheduleItem, detailsData, options) {
    const assignmentOptions = options && typeof options === "object" ? options : {};
    const assignment = await showSchedulePrimaryContactDialog(building, scheduleItem, {
      preselectedContactId: assignmentOptions.preselectedContactId || "",
      currentPrimaryContactId: String(detailsData.template.preferredContactId || scheduleItem.preferredContactId || "").trim(),
    });
    if (!assignment) {
      return null;
    }

    if (assignment.mode !== "existing" || !assignment.contactId) {
      return null;
    }

    const normalizedBuilding = ensureWorkflowCollections(building);
    const updatedBuilding = updateScheduleItemWithTemplate(normalizedBuilding, detailsData.template.id, {
      preferredContactId: assignment.contactId,
    });
    const normalized = ensureWorkflowCollections(updatedBuilding);
    window.BuildingStorage.updateBuilding(normalized);
    renderBuildings();
    return normalized;
  }

  async function openScheduleDetailsDialog(buildingId, itemId) {
    const building = findBuildingById(buildingId);
    if (!building) {
      return;
    }

    const scheduleItem = findScheduleItemById(building, itemId);
    if (!scheduleItem) {
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
    backdrop.innerHTML = renderScheduleDetailsDialogHtml(building, scheduleItem, detailsData);
    window.document.body.appendChild(backdrop);

    const modal = backdrop.querySelector(".schedule-details-modal");
    const layer = pushModalLayer(backdrop, modal instanceof HTMLElement ? modal : null);
    const releaseFocusTrap = enableModalFocusTrap(
      modal instanceof HTMLElement ? modal : null,
      function () {
        return isTopModalLayer(layer);
      }
    );
    const editForm = backdrop.querySelector("[data-schedule-details-edit-form]");
    const displayGrid = backdrop.querySelector("[data-schedule-details-display]");

    if (editForm instanceof HTMLFormElement) {
      const searchInput = editForm.querySelector("[data-primary-contact-search]");
      const select = editForm.querySelector("[data-primary-contact-select]");
      const frequencySelect = editForm.querySelector('select[name="frequency"]');
      const recurringSection = editForm.querySelector("[data-recurring-dates-section]");
      const recurringList = editForm.querySelector("[data-recurring-dates-list]");
      if (searchInput instanceof HTMLInputElement && select instanceof HTMLSelectElement) {
        const sourceOptions = Array.from(select.options).map(function (option) {
          return {
            value: option.value,
            label: option.textContent || "",
          };
        });

        function renderFilteredContactOptions() {
          const query = normalizeText(searchInput.value || "");
          const currentValue = String(select.value || "");
          const filtered = sourceOptions.filter(function (entry) {
            if (!query) {
              return true;
            }
            return normalizeText(entry.label).includes(query);
          });

          if (currentValue && !filtered.some(function (entry) { return entry.value === currentValue; })) {
            const current = sourceOptions.find(function (entry) { return entry.value === currentValue; });
            if (current) {
              filtered.unshift(current);
            }
          }

          select.innerHTML = filtered.map(function (entry) {
            const selected = entry.value === currentValue ? " selected" : "";
            return `<option value="${entry.value}"${selected}>${escapeHtml(entry.label)}</option>`;
          }).join("");
        }

        searchInput.addEventListener("input", renderFilteredContactOptions);
      }

      if (frequencySelect instanceof HTMLSelectElement && recurringSection instanceof HTMLElement && recurringList instanceof HTMLElement) {
        const renderRecurringRows = function () {
          setScheduleRecurringDatesSectionVisibility(recurringSection, frequencySelect.value);
          if (frequencySelect.value !== "Custom") {
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
        });

        renderRecurringRows();
      }
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

      if (action === "toggle-edit") {
        if (editForm instanceof HTMLElement && displayGrid instanceof HTMLElement) {
          editForm.style.display = "grid";
          displayGrid.style.display = "none";
        }
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
        return;
      }

      if (action === "cancel-edit") {
        if (editForm instanceof HTMLElement && displayGrid instanceof HTMLElement) {
          editForm.style.display = "none";
          displayGrid.style.display = "grid";
        }
        return;
      }

      if (action === "assign-contact") {
        const updated = await promptPrimaryContactAssignment(building, scheduleItem, detailsData);
        if (!updated) {
          return;
        }
        close();
        await openScheduleDetailsDialog(updated.id, scheduleItem.id);
        return;
      }

      if (action === "open-contact") {
        const contactId = String(target.getAttribute("data-schedule-contact-id") || "").trim();
        if (!contactId) {
          return;
        }

        const selectedContact = findContactById(contactId);
        if (!selectedContact) {
          return;
        }

        close();
        openContactDetailsDialog(selectedContact);
        return;
      }

      const docTile = target.closest("[data-schedule-doc-type]");
      if (docTile instanceof HTMLElement) {
        const type = String(docTile.getAttribute("data-schedule-doc-type") || "").trim();
        if (!type) {
          return;
        }
        await handleScheduleDocumentUpload(building, scheduleItem, type);
      }
    });

    if (editForm instanceof HTMLFormElement) {
      editForm.addEventListener("submit", function (event) {
        event.preventDefault();
        handleScheduleDetailsSave(building, scheduleItem, editForm);
      });
    }

    if (modal instanceof HTMLElement) {
      focusFirstElementInContainer(modal);
    }

    if (
      pendingPrimaryContactDialogState
      && String(pendingPrimaryContactDialogState.buildingId || "") === String(building.id || "")
      && String(pendingPrimaryContactDialogState.scheduleItemId || "") === String(scheduleItem.id || "")
    ) {
      const pendingSelectionId = String(pendingPrimaryContactDialogState.preselectedContactId || "").trim();
      pendingPrimaryContactDialogState = null;
      const updatedFromPending = await promptPrimaryContactAssignment(building, scheduleItem, detailsData, {
        preselectedContactId: pendingSelectionId,
      });
      if (updatedFromPending) {
        close();
        await openScheduleDetailsDialog(updatedFromPending.id, scheduleItem.id);
      }
    }
  }

  function handleScheduleFilterChange() {
    scheduleFilters = {
      property: String(scheduleFilterProperty.value || "all"),
      category: String(scheduleFilterCategory.value || "all"),
      status: String(scheduleFilterStatus.value || "all"),
      duePeriod: String(scheduleFilterDuePeriod.value || "all"),
    };

    if (scheduleFilters.property === "all") {
      setCurrentPropertyId("");
    } else if (findBuildingById(scheduleFilters.property)) {
      setCurrentPropertyId(scheduleFilters.property);
    }

    renderSchedulePage();
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

  function handleExportBackup() {
    const payload = window.BuildingStorage.createBackupPayload();
    const serialised = JSON.stringify(payload, null, 2);
    const blob = new Blob([serialised], { type: "application/json" });
    const fileName = "Building-Manager-Backup-" + new Date().toISOString().slice(0, 10) + ".json";
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

        const shouldRestore = window.confirm("This will overwrite the current Building Manager data. Continue?");
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

        alert("Backup restored successfully.");
        window.location.reload();
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

    if (moduleName === "Lease" || moduleName === "Documents") {
      openLeaseView(activeBuildingId);
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

    const buildingId = option.getAttribute("data-building-id");
    if (buildingId === null) {
      return;
    }

    setCurrentPropertyId(buildingId);
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

    const moduleName = button.getAttribute("data-workspace-module") || "";
    if (!activeBuildingId && moduleName !== "Schedule") {
      alert("Select a property to open this module, or use Schedule to view All Properties.");
      return;
    }

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
    if (moduleName === "Lease" || moduleName === "Documents") {
      openLeaseView(activeBuildingId);
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
  leaseBackBtn.addEventListener("click", handleLeaseBack);
  contactsBackBtn.addEventListener("click", handleContactsBack);
  companiesBackBtn.addEventListener("click", handleCompaniesBack);
  scheduleBackBtn.addEventListener("click", handleScheduleBack);
  manageTemplatesBtn.addEventListener("click", handleManageTemplatesForProperty);
  historyBackBtn.addEventListener("click", handleHistoryBack);
  templateLibraryBackBtn.addEventListener("click", handleTemplateLibraryBack);
  editBuildingBtn.addEventListener("click", handleOpenEdit);
  cancelEditBtn.addEventListener("click", handleCancelEdit);
  deleteBuildingBtn.addEventListener("click", handleDeleteBuilding);
  backupExportBtn.addEventListener("click", handleExportBackup);
  backupRestoreBtn.addEventListener("click", handleRestoreBackupButtonClick);
  backupRestoreInput.addEventListener("change", handleRestoreBackupSelection);
  addTenancyBtn.addEventListener("click", function () {
    openTenancyForm("add");
  });
  editTenancyBtn.addEventListener("click", handleEditTenancy);
  tenancyTabCurrent.addEventListener("click", handleTenancyTabCurrent);
  tenancyTabHistory.addEventListener("click", handleTenancyTabHistory);
  if (archiveTenancyBtn instanceof HTMLButtonElement) {
    archiveTenancyBtn.addEventListener("click", handleArchiveTenancy);
  }
  if (contactsCreateBtn instanceof HTMLButtonElement) {
    contactsCreateBtn.addEventListener("click", handleAddContact);
  }
  documentsAddCategoryBtn.addEventListener("click", handleAddDocumentCategory);
  leaseCategoryDetailManageBtn.addEventListener("click", handleLeaseCategoryManage);
  leaseCategoryDetailBackBtn.addEventListener("click", handleLeaseCategoryDetailBack);
  leaseCategoryUploadBtn.addEventListener("click", handleLeaseCategoryUpload);
  cancelTenancyBtn.addEventListener("click", handleCancelTenancy);
  addContactBtn.addEventListener("click", handleAddContact);
  addCompanyBtn.addEventListener("click", handleAddCompany);
  addCompanyInlineBtn.addEventListener("click", handleAddCompany);
  deleteContactBtn.addEventListener("click", handleDeleteContact);
  contactAddScheduleLinkBtn.addEventListener("click", handleAddScheduleLinkForContact);
  if (contactRemoveScheduleLinkBtn instanceof HTMLButtonElement) {
    contactRemoveScheduleLinkBtn.addEventListener("click", handleRemoveScheduleLinkForContact);
  }
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
  leaseSearch.addEventListener("input", handleLeaseSearch);
  leaseCategorySearch.addEventListener("input", handleLeaseCategorySearch);
  contactForm.addEventListener("submit", handleSaveContact);
  contactForm.elements.companyId.addEventListener("change", handleContactCompanyChange);
  contactsSearch.addEventListener("input", handleContactSearch);
  companyForm.addEventListener("submit", handleSaveCompany);
  templateForm.addEventListener("submit", handleSaveTemplate);
  completeTaskForm.addEventListener("submit", handleSaveCompleteTask);
  completeTaskForm.elements.companyUsed.addEventListener("change", handleCompleteCompanyChange);
  buildingSelectorList.addEventListener("click", handleSelectorListClick);
  workspaceModuleNav.addEventListener("click", handleWorkspaceModuleNavigationClick);
  leaseCategoryGrid.addEventListener("click", handleLeaseCategoryGridClick);
  leaseCategoryGrid.addEventListener("keydown", handleLeaseCategoryGridKeydown);
  leaseCategoryList.addEventListener("click", handleLeaseCategoryDetailClick);
  contactsList.addEventListener("click", handleContactListClick);
  contactLinkedScheduleList.addEventListener("click", handleContactListClick);
  companiesList.addEventListener("click", handleCompanyListClick);
  templateLibraryList.addEventListener("click", handleTemplateLibraryListClick);
  scheduleOpsList.addEventListener("click", handleScheduleListClick);
  scheduleOpsList.addEventListener("keydown", handleScheduleListKeydown);
  scheduleFilterProperty.addEventListener("change", handleScheduleFilterChange);
  scheduleFilterCategory.addEventListener("change", handleScheduleFilterChange);
  scheduleFilterStatus.addEventListener("change", handleScheduleFilterChange);
  scheduleFilterDuePeriod.addEventListener("change", handleScheduleFilterChange);
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
