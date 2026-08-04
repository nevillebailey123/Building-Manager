(function () {
  const dashboardView = document.getElementById("dashboard-view");
  const formView = document.getElementById("form-view");
  const overviewView = document.getElementById("overview-view");
  const tenancyView = document.getElementById("tenancy-view");
  const contactsView = document.getElementById("contacts-view");
  const buildingRolesView = document.getElementById("building-roles-view");
  const companiesView = document.getElementById("companies-view");
  const scheduleView = document.getElementById("schedule-view");
  const historyView = document.getElementById("history-view");
  const completeTaskView = document.getElementById("complete-task-view");
  const placeholderView = document.getElementById("placeholder-view");
  const editView = document.getElementById("edit-view");
  const breadcrumbNav = document.getElementById("breadcrumb-nav");
  const addBuildingBtn = document.getElementById("add-building-btn");
  const cancelBtn = document.getElementById("cancel-btn");
  const buildingSearch = document.getElementById("building-search");
  const overviewBackBtn = document.getElementById("overview-back-btn");
  const editBuildingBtn = document.getElementById("edit-building-btn");
  const tenancyBackBtn = document.getElementById("tenancy-back-btn");
  const contactsBackBtn = document.getElementById("contacts-back-btn");
  const buildingRolesBackBtn = document.getElementById("building-roles-back-btn");
  const companiesBackBtn = document.getElementById("companies-back-btn");
  const scheduleBackBtn = document.getElementById("schedule-back-btn");
  const historyBackBtn = document.getElementById("history-back-btn");
  const buildingForm = document.getElementById("building-form");
  const editBuildingForm = document.getElementById("edit-building-form");
  const tenancyForm = document.getElementById("tenancy-form");
  const contactForm = document.getElementById("contact-form");
  const buildingRoleForm = document.getElementById("building-role-form");
  const companyForm = document.getElementById("company-form");
  const completeTaskForm = document.getElementById("complete-task-form");
  const cancelEditBtn = document.getElementById("cancel-edit-btn");
  const cancelTenancyBtn = document.getElementById("cancel-tenancy-btn");
  const cancelContactBtn = document.getElementById("cancel-contact-btn");
  const addTenancyBtn = document.getElementById("add-tenancy-btn");
  const addContactBtn = document.getElementById("add-contact-btn");
  const addContactInlineBtn = document.getElementById("add-contact-inline-btn");
  const addRoleBtn = document.getElementById("add-role-btn");
  const addRoleInlineBtn = document.getElementById("add-role-inline-btn");
  const addCompanyBtn = document.getElementById("add-company-btn");
  const addCompanyInlineBtn = document.getElementById("add-company-inline-btn");
  const editTenancyBtn = document.getElementById("edit-tenancy-btn");
  const manageContactsBtn = document.getElementById("manage-contacts-btn");
  const tenancyDocumentsBtn = document.getElementById("tenancy-documents-btn");
  const deleteBuildingBtn = document.getElementById("delete-building-btn");
  const buildingList = document.getElementById("building-list");
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
  const contactsBuildingName = document.getElementById("contacts-building-name");
  const contactsEmptyState = document.getElementById("contacts-empty-state");
  const contactsListCard = document.getElementById("contacts-list-card");
  const contactsList = document.getElementById("contacts-list");
  const contactFormCard = document.getElementById("contact-form-card");
  const contactFormTitle = document.getElementById("contact-form-title");
  const contactNewCompanyWrap = document.getElementById("contact-new-company-wrap");
  const buildingRolesBuildingName = document.getElementById("building-roles-building-name");
  const buildingRolesEmptyState = document.getElementById("building-roles-empty-state");
  const buildingRolesListCard = document.getElementById("building-roles-list-card");
  const buildingRolesList = document.getElementById("building-roles-list");
  const buildingRoleFormCard = document.getElementById("building-role-form-card");
  const buildingRoleFormTitle = document.getElementById("building-role-form-title");
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
  const historyList = document.getElementById("history-list");
  const cancelCompleteTaskBtn = document.getElementById("cancel-complete-task-btn");
  const cancelBuildingRoleBtn = document.getElementById("cancel-building-role-btn");
  const cancelCompanyBtn = document.getElementById("cancel-company-btn");
  const placeholderTitle = document.getElementById("placeholder-title");
  const placeholderDescription = document.getElementById("placeholder-description");
  const placeholderBuildingName = document.getElementById("placeholder-building-name");
  const placeholderMessage = document.getElementById("placeholder-message");
  const placeholderBackBtn = document.getElementById("placeholder-back-btn");

  let activeBuildingId = "";
  let activeModule = "Overview";
  let tenancyFormMode = "add";
  let contactFormMode = "add";
  let activeContactId = "";
  let buildingRoleFormMode = "add";
  let activeBuildingRoleId = "";
  let companyFormMode = "add";
  let activeCompanyId = "";
  let activeScheduleItemId = "";
  let breadcrumbItems = [];
  let placeholderBackHandler = null;

  const DEFAULT_ROLE_TYPES = [
    "Owner",
    "Property Manager",
    "Tenant Representative",
    "Accounts Contact",
    "HVAC Contractor",
    "Fire Contractor",
    "IQP",
    "Electrician",
    "Plumber",
    "Roofer",
    "Gutter Cleaning",
    "Security",
    "Locksmith",
    "Lift Contractor",
    "Insurance Broker",
    "Solicitor",
    "Accountant",
    "Cleaner",
    "Gardener",
    "Other",
  ];

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
    formView.classList.remove("is-active");
    overviewView.classList.remove("is-active");
    tenancyView.classList.remove("is-active");
    contactsView.classList.remove("is-active");
    buildingRolesView.classList.remove("is-active");
    companiesView.classList.remove("is-active");
    scheduleView.classList.remove("is-active");
    historyView.classList.remove("is-active");
    completeTaskView.classList.remove("is-active");
    placeholderView.classList.remove("is-active");
    editView.classList.remove("is-active");
  }

  function showDashboard() {
    hideAllViews();
    dashboardView.classList.add("is-active");
    setBreadcrumbs([
      { label: "Buildings", onClick: goToDashboard },
    ]);
  }

  function showForm() {
    hideAllViews();
    formView.classList.add("is-active");
    setBreadcrumbs([
      { label: "Buildings", onClick: goToDashboard },
      { label: "Add Building", onClick: showForm },
    ]);
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

  function showBuildingRolesView() {
    hideAllViews();
    buildingRolesView.classList.add("is-active");
    setBreadcrumbs([
      { label: "Buildings", onClick: goToDashboard },
      { label: getActiveBuildingName(), onClick: function () { openOverviewById(activeBuildingId); } },
      { label: "Building Roles", onClick: openBuildingRolesView },
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

  function matchesSearch(building, query) {
    if (!query) {
      return true;
    }

    const name = normalizeText(building.buildingName);
    const address = normalizeText(building.streetAddress);
    const city = normalizeText(building.city);

    return name.includes(query) || address.includes(query) || city.includes(query);
  }

  function renderBuildings() {
    const searchQuery = normalizeText(buildingSearch.value);
    const buildings = window.BuildingStorage.getBuildings();
    const filtered = buildings.filter(function (building) {
      return matchesSearch(building, searchQuery);
    });

    if (buildings.length === 0) {
      buildingList.innerHTML = "";
      emptyState.style.display = "block";
      emptyState.textContent = "No buildings have been added yet.";
      return;
    }

    if (filtered.length === 0) {
      buildingList.innerHTML = "";
      emptyState.style.display = "block";
      emptyState.textContent = "No buildings match your search.";
      return;
    }

    emptyState.style.display = "none";
    buildingList.innerHTML = filtered.map(buildCardHtml).join("");
  }

  function getFormData(form) {
    const formData = new FormData(form);
    const now = new Date().toISOString();
    return {
      id: window.BuildingStorage.createId(),
      buildingName: String(formData.get("buildingName") || "").trim(),
      streetAddress: String(formData.get("streetAddress") || "").trim(),
      city: String(formData.get("city") || "").trim(),
      owner: String(formData.get("owner") || "").trim(),
      propertyManager: String(formData.get("propertyManager") || "").trim(),
      status: String(formData.get("status") || "Occupied"),
      notes: String(formData.get("notes") || "").trim(),
      createdDate: now,
      lastUpdated: now,
      tenancy: null,
      buildingContactAssignments: [],
      buildingRoles: [],
      scheduleItems: createDefaultScheduleItems(),
      historyRecords: [],
    };
  }

  function handleSave(event) {
    event.preventDefault();
    const building = getFormData(buildingForm);

    window.BuildingStorage.addBuilding(building);
    buildingForm.reset();
    showDashboard();
    renderBuildings();
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
  }

  function renderHistoryPage(building) {
    const normalized = ensureWorkflowCollections(building);
    historyBuildingName.textContent = normalized.buildingName;

    if (normalized.historyRecords.length === 0) {
      historyList.innerHTML = '<p class="module-placeholder">No history exists.</p>';
      return;
    }

    const sorted = normalized.historyRecords.slice().sort(function (a, b) {
      return new Date(b.completedDate).getTime() - new Date(a.completedDate).getTime();
    });

    historyList.innerHTML = sorted
      .map(function (record) {
        const notesSummary = record.notes ? record.notes.slice(0, 80) : "No notes";
        const attachmentFlag = record.hasAttachments ? "Attachments: Yes" : "Attachments: No";
        const companyDisplay = record.companyUsedId ? getCompanyNameById(record.companyUsedId, record.companyUsed) : (record.companyUsed || "Not set");
        return `
          <article class="building-card clickable-card history-card" data-history-id="${record.id}" role="button" tabindex="0" aria-label="Open history item ${record.taskName}">
            <h3>${record.taskName}</h3>
            <p><strong>Completed Date:</strong> ${formatDate(record.completedDate)}</p>
            <p><strong>Company:</strong> ${companyDisplay}</p>
            <p><strong>Notes:</strong> ${notesSummary}</p>
            <p><strong>${attachmentFlag}</strong></p>
            <p><strong>Next Due Date:</strong> ${formatDate(record.nextDueDate)}</p>
            <span class="card-chevron">&gt;</span>
          </article>
        `;
      })
      .join("");
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
    showScheduleView();
  }

  function openHistoryView(buildingId) {
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

    renderHistoryPage(normalized);
    showHistoryView();
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

    const buildingRoles = Array.isArray(building.buildingRoles) ? building.buildingRoles : [];
    const roleContactIds = buildingRoles
      .map(function (roleItem) {
        return roleItem.contactId;
      })
      .filter(function (contactId) {
        return Boolean(contactId);
      });

    if (roleContactIds.length > 0) {
      return roleContactIds
        .map(function (contactId) {
          return findContactById(contactId);
        })
        .filter(function (contact) {
          return Boolean(contact);
        });
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

  function migrateBuildingRolesForBuilding(building) {
    const currentRoles = Array.isArray(building.buildingRoles) ? building.buildingRoles.slice() : [];
    if (currentRoles.length > 0) {
      return {
        building: {
          ...building,
          buildingRoles: currentRoles,
        },
        changed: !Array.isArray(building.buildingRoles),
      };
    }

    const refs = [];
    const assignmentRefs = Array.isArray(building.buildingContactAssignments) ? building.buildingContactAssignments : [];
    assignmentRefs.forEach(function (id) {
      if (id && !refs.includes(id)) {
        refs.push(id);
      }
    });

    if (building.tenancy && Array.isArray(building.tenancy.contactRefs)) {
      building.tenancy.contactRefs.forEach(function (id) {
        if (id && !refs.includes(id)) {
          refs.push(id);
        }
      });
    }

    const now = new Date().toISOString();
    const migratedRoles = refs
      .map(function (contactId) {
        const contact = findContactById(contactId);
        if (!contact) {
          return null;
        }

        return {
          id: window.BuildingStorage.createId(),
          role: "Other",
          companyId: contact.companyId || "",
          contactId: contact.id,
          notes: "",
          createdDate: now,
          lastUpdated: now,
        };
      })
      .filter(function (item) {
        return Boolean(item);
      });

    return {
      building: {
        ...building,
        buildingRoles: migratedRoles,
      },
      changed: !Array.isArray(building.buildingRoles) || migratedRoles.length > 0,
    };
  }

  function ensureBuildingRolesForActiveBuilding() {
    const building = findBuildingById(activeBuildingId);
    if (!building) {
      return null;
    }

    const result = migrateBuildingRolesForBuilding(building);
    if (result.changed) {
      window.BuildingStorage.updateBuilding({
        ...result.building,
        lastUpdated: new Date().toISOString(),
      });
    }

    return result.building;
  }

  function migrateBuildingRolesForAllBuildings() {
    const buildings = window.BuildingStorage.getBuildings();
    buildings.forEach(function (building) {
      const result = migrateBuildingRolesForBuilding(building);
      if (result.changed) {
        window.BuildingStorage.updateBuilding({
          ...result.building,
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

  function renderTenancyDetails(tenancy) {
    const tradingName = tenancy.tradingName || "Not provided";
    const refs = Array.isArray(tenancy.contactRefs) ? tenancy.contactRefs : [];
    const legacyContacts = Array.isArray(tenancy.contacts) ? tenancy.contacts : [];
    const contactCountSource = refs.length > 0 ? refs : legacyContacts;
    const contactsSummary = getTenancySummaryText(contactCountSource, "Contact", "Contacts");
    const documentsSummary = getDocumentSummaryText(tenancy.documents);
    const companyNameDisplay = `<button type="button" class="inline-link tenancy-company-link">${tenancy.companyName}</button>`;

    tenancyDetailsList.innerHTML = `
      <div><dt>Company Name</dt><dd>${companyNameDisplay}</dd></div>
      <div><dt>Trading Name</dt><dd>${tradingName}</dd></div>
      <div><dt>Lease Start</dt><dd>${formatDate(tenancy.leaseStart)}</dd></div>
      <div><dt>Lease End</dt><dd>${formatDate(tenancy.leaseEnd)}</dd></div>
      <div><dt>Status</dt><dd>${tenancy.status}</dd></div>
      <div><dt>Number of Contacts</dt><dd>${contactsSummary}</dd></div>
      <div><dt>Number of Documents</dt><dd>${documentsSummary}</dd></div>
    `;
  }

  function renderContactList(contacts) {
    contactsList.innerHTML = contacts
      .map(function (contact) {
        const companyName = getCompanyNameById(contact.companyId, "Not set");
        return `
          <article class="building-card clickable-card" data-contact-id="${contact.id}" role="button" tabindex="0" aria-label="Open contact ${contact.name}">
            <h3>${contact.name}</h3>
            <p><strong>Company:</strong> ${companyName}</p>
            <p><strong>Responsibility:</strong> ${contact.responsibility || "General"}</p>
            <p><strong>Mobile:</strong> ${contact.mobile || "Not provided"}</p>
            <p><strong>Email:</strong> ${contact.email || "Not provided"}</p>
            <p><strong>Preferred Contact:</strong> ${contact.preferredContactMethod || "Phone"}</p>
            <div class="card-meta">
              <button class="btn btn-secondary contact-edit-btn" type="button">✏ Edit</button>
              <button class="btn btn-danger contact-delete-btn" type="button">🗑 Delete</button>
            </div>
            <span class="card-chevron">&gt;</span>
          </article>
        `;
      })
      .join("");
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

    const roleIds = Array.isArray(building.buildingRoles)
      ? building.buildingRoles
          .map(function (item) {
            return item.companyId;
          })
          .filter(function (companyId) {
            return Boolean(companyId);
          })
      : [];

    if (roleIds.length > 0) {
      return roleIds.filter(function (companyId, index) {
        return roleIds.indexOf(companyId) === index;
      });
    }

    if (!building.tenancy) {
      return [];
    }

    const contactRefs = Array.isArray(building.tenancy.contactRefs) ? building.tenancy.contactRefs : [];
    const ids = building.tenancy.companyId ? [building.tenancy.companyId] : [];
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

  function renderRoleTypeOptions(selectedRole) {
    const options = DEFAULT_ROLE_TYPES.map(function (roleType) {
      const selected = roleType === selectedRole ? " selected" : "";
      return `<option value="${roleType}"${selected}>${roleType}</option>`;
    });

    buildingRoleForm.elements.role.innerHTML = options.join("");
  }

  function renderRoleCompanyOptions(selectedCompanyId) {
    const companies = getCompanies();
    const options = ['<option value="">Select a company</option>'];
    companies.forEach(function (company) {
      const selected = company.id === selectedCompanyId ? " selected" : "";
      options.push(`<option value="${company.id}"${selected}>${company.name}</option>`);
    });

    buildingRoleForm.elements.companyId.innerHTML = options.join("");
  }

  function renderRoleContactOptions(selectedContactId, companyId) {
    const contacts = getContacts().filter(function (contact) {
      return contact.companyId === companyId;
    });
    const options = ['<option value="">Select a contact</option>'];
    contacts.forEach(function (contact) {
      const selected = contact.id === selectedContactId ? " selected" : "";
      options.push(`<option value="${contact.id}"${selected}>${contact.name}</option>`);
    });

    buildingRoleForm.elements.contactId.innerHTML = options.join("");
  }

  function getBuildingRolesForActiveBuilding() {
    const building = ensureBuildingRolesForActiveBuilding();
    if (!building || !Array.isArray(building.buildingRoles)) {
      return [];
    }
    return building.buildingRoles;
  }

  function renderBuildingRolesList(roles) {
    buildingRolesList.innerHTML = roles
      .map(function (roleItem) {
        const companyName = getCompanyNameById(roleItem.companyId, "Not set");
        const contactName = getContactNameById(roleItem.contactId);
        return `
          <article class="building-card clickable-card" data-role-id="${roleItem.id}" role="button" tabindex="0" aria-label="Open building role ${roleItem.role}">
            <h3>${roleItem.role}</h3>
            <p><strong>Company:</strong> ${companyName}</p>
            <p><strong>Contact:</strong> ${contactName}</p>
            <div class="card-meta">
              <button class="btn btn-secondary building-role-edit-btn" type="button">Edit</button>
              <button class="btn btn-danger building-role-remove-btn" type="button">Remove</button>
            </div>
            <span class="card-chevron">&gt;</span>
          </article>
        `;
      })
      .join("");
  }

  function renderBuildingRolesSectionState(mode) {
    if (mode === "form") {
      buildingRolesEmptyState.style.display = "none";
      buildingRolesListCard.style.display = "none";
      buildingRoleFormCard.style.display = "block";
      return;
    }

    const roles = getBuildingRolesForActiveBuilding();
    buildingRoleFormCard.style.display = "none";
    if (roles.length === 0) {
      buildingRolesEmptyState.style.display = "block";
      buildingRolesListCard.style.display = "none";
      return;
    }

    buildingRolesEmptyState.style.display = "none";
    buildingRolesListCard.style.display = "block";
    renderBuildingRolesList(roles);
  }

  function openBuildingRolesView() {
    const building = ensureBuildingRolesForActiveBuilding();
    if (!building) {
      showDashboard();
      return;
    }

    buildingRolesBuildingName.textContent = building.buildingName;
    activeBuildingRoleId = "";
    renderBuildingRolesSectionState("list");
    showBuildingRolesView();
  }

  function resetBuildingRoleForm() {
    buildingRoleForm.reset();
    buildingRoleForm.elements.buildingRoleId.value = "";
    renderRoleTypeOptions("Owner");
    renderRoleCompanyOptions("");
    renderRoleContactOptions("", "");
  }

  function openBuildingRoleForm(mode, roleItem) {
    buildingRoleFormMode = mode;
    activeBuildingRoleId = roleItem && roleItem.id ? roleItem.id : "";
    resetBuildingRoleForm();

    buildingRoleFormTitle.textContent = mode === "edit" ? "Edit Role Assignment" : "Assign Role";
    if (mode === "edit" && roleItem) {
      buildingRoleForm.elements.buildingRoleId.value = roleItem.id;
      renderRoleTypeOptions(roleItem.role || "Other");
      renderRoleCompanyOptions(roleItem.companyId || "");
      renderRoleContactOptions(roleItem.contactId || "", roleItem.companyId || "");
      buildingRoleForm.elements.notes.value = roleItem.notes || "";
    }

    renderBuildingRolesSectionState("form");
    showBuildingRolesView();
  }

  function buildBuildingRolePayload(existingRole) {
    const formData = new FormData(buildingRoleForm);
    const now = new Date().toISOString();
    return {
      id: existingRole && existingRole.id ? existingRole.id : window.BuildingStorage.createId(),
      role: String(formData.get("role") || "Other").trim(),
      companyId: String(formData.get("companyId") || "").trim(),
      contactId: String(formData.get("contactId") || "").trim(),
      notes: String(formData.get("notes") || "").trim(),
      createdDate: existingRole && existingRole.createdDate ? existingRole.createdDate : now,
      lastUpdated: now,
    };
  }

  function openContactsView() {
    const building = findBuildingById(activeBuildingId);
    if (!building) {
      showDashboard();
      return;
    }

    contactsBuildingName.textContent = building.buildingName;
    activeContactId = "";
    populateContactCompanySelect("");
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

  function openContactForm(mode, contact) {
    contactFormMode = mode;
    activeContactId = contact && contact.id ? contact.id : "";
    resetContactForm();
    populateContactCompanySelect(contact && contact.companyId ? contact.companyId : "");

    contactFormTitle.textContent = mode === "edit" ? "Edit Contact" : "Add Contact";
    if (mode === "edit" && contact) {
      contactForm.elements.contactId.value = contact.id;
      contactForm.elements.name.value = contact.name || "";
      contactForm.elements.responsibility.value = contact.responsibility || "";
      contactForm.elements.mobile.value = contact.mobile || "";
      contactForm.elements.officePhone.value = contact.officePhone || "";
      contactForm.elements.email.value = contact.email || "";
      contactForm.elements.preferredContact.value = contact.preferredContactMethod || "Phone";
      contactForm.elements.active.value = contact.active || "Yes";
      contactForm.elements.notes.value = contact.notes || "";
    }

    renderContactSectionState("form");
    showContactsView();
    setBreadcrumbs([
      { label: "Buildings", onClick: goToDashboard },
      { label: getActiveBuildingName(), onClick: function () { openOverviewById(activeBuildingId); } },
      { label: "Contacts", onClick: openContactsView },
      { label: mode === "edit" ? "Edit Contact" : "Add Contact", onClick: function () { openContactForm(mode, contact); } },
    ]);
  }

  function buildContactPayload(existingContact) {
    const formData = new FormData(contactForm);
    const now = new Date().toISOString();
    return {
      id: existingContact && existingContact.id ? existingContact.id : window.BuildingStorage.createId(),
      companyId: String(formData.get("companyId") || "").trim(),
      name: String(formData.get("name") || "").trim(),
      responsibility: String(formData.get("responsibility") || "").trim(),
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

  function upsertContactForActiveTenancy(payload) {
    const building = findBuildingById(activeBuildingId);
    if (!building) {
      return;
    }

    window.BuildingStorage.upsertContact(payload);

    if (!building.tenancy) {
      const assignments = Array.isArray(building.buildingContactAssignments) ? building.buildingContactAssignments : [];
      if (!assignments.includes(payload.id)) {
        window.BuildingStorage.updateBuilding({
          ...building,
          buildingContactAssignments: assignments.concat(payload.id),
          lastUpdated: new Date().toISOString(),
        });
      }
      return;
    }

    const refs = ensureTenantContactRefs(building);
    const nextRefs = refs.includes(payload.id) ? refs : refs.concat(payload.id);

    const updated = {
      ...building,
      tenancy: {
        ...building.tenancy,
        contactRefs: nextRefs,
      },
      lastUpdated: new Date().toISOString(),
    };

    window.BuildingStorage.updateBuilding(updated);
  }

  function deleteContactForActiveTenancy(contactId) {
    const building = findBuildingById(activeBuildingId);
    if (!building) {
      return;
    }

    if (!building.tenancy) {
      const assignments = Array.isArray(building.buildingContactAssignments) ? building.buildingContactAssignments : [];
      const nextAssignments = assignments.filter(function (id) {
        return id !== contactId;
      });

      window.BuildingStorage.updateBuilding({
        ...building,
        buildingContactAssignments: nextAssignments,
        lastUpdated: new Date().toISOString(),
      });
      return;
    }

    const refs = ensureTenantContactRefs(building);
    const nextRefs = refs.filter(function (refId) {
      return refId !== contactId;
    });

    const updated = {
      ...building,
      tenancy: {
        ...building.tenancy,
        contactRefs: nextRefs,
      },
      lastUpdated: new Date().toISOString(),
    };

    window.BuildingStorage.updateBuilding(updated);
  }

  function renderCurrentTenancyPage(building) {
    tenancyBuildingName.textContent = building.buildingName;

    if (!building.tenancy) {
      renderTenancySectionState(false, "empty");
      return;
    }

    renderTenancySectionState(true, "details");
    renderTenancyDetails(building.tenancy);
  }

  function openCurrentTenancyView(buildingId) {
    const building = findBuildingById(buildingId);
    if (!building) {
      showDashboard();
      return;
    }

    activeBuildingId = building.id;
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
    moduleContentTitle.textContent = moduleName;

    if (moduleName === "Overview") {
      const currentTenant = building.tenancy ? building.tenancy.companyName : "None";
      const currentTenantDisplay = building.tenancy
        ? `<button type="button" class="inline-link current-tenant-link">${currentTenant}</button>`
        : "None";
      const contactsCount = building.tenancy
        ? (Array.isArray(building.tenancy.contactRefs) && building.tenancy.contactRefs.length > 0
          ? building.tenancy.contactRefs.length
          : (Array.isArray(building.tenancy.contacts) ? building.tenancy.contacts.length : 0))
        : 0;
      const documentsCount = building.tenancy && Array.isArray(building.tenancy.documents) ? building.tenancy.documents.length : 0;
      moduleContentBody.innerHTML = `
        <dl class="snapshot-list">
          <div><dt>Status</dt><dd>${building.status}</dd></div>
          <div><dt>Current Tenant</dt><dd>${currentTenantDisplay}</dd></div>
          <div><dt>Contacts</dt><dd>${contactsCount}</dd></div>
          <div><dt>Compliance Items</dt><dd>0</dd></div>
          <div><dt>Documents</dt><dd>${documentsCount}</dd></div>
          <div><dt>History Records</dt><dd>0</dd></div>
          <div><dt>Last Updated</dt><dd>${formatDateTime(building.lastUpdated)}</dd></div>
        </dl>
      `;
      return;
    }

    const descriptions = {
      "Current Tenancy": "No tenancy has been entered.",
      Companies: "No companies have been added.",
      Schedule: "No scheduled items exist.",
      Documents: "No documents have been uploaded.",
      History: "No history exists.",
    };

    moduleContentBody.innerHTML = `<p class="module-placeholder">${descriptions[moduleName] || "No data exists."}</p>`;
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
    renderOverviewModule(activeModule, building);
  }

  function openOverviewById(buildingId) {
    const building = findBuildingById(buildingId);
    if (!building) {
      return;
    }

    activeBuildingId = buildingId;
    activeModule = "Overview";
    renderOverview(building);
    showOverview();
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

  function handleTenancyBack() {
    openOverviewById(activeBuildingId);
  }

  function handleManageContacts() {
    openContactsView();
  }

  function handleBuildingRolesBack() {
    openOverviewById(activeBuildingId);
  }

  function handleAddRole() {
    if (getCompaniesForActiveBuilding().length === 0) {
      openCompaniesView();
      return;
    }

    openBuildingRoleForm("add");
  }

  function handleCancelBuildingRole() {
    openBuildingRolesView();
  }

  function handleSaveBuildingRole(event) {
    event.preventDefault();
    const building = ensureBuildingRolesForActiveBuilding();
    if (!building) {
      showDashboard();
      return;
    }

    const roles = Array.isArray(building.buildingRoles) ? building.buildingRoles : [];
    const existing = buildingRoleFormMode === "edit"
      ? roles.find(function (item) {
        return item.id === activeBuildingRoleId;
      }) || null
      : null;

    const payload = buildBuildingRolePayload(existing);
    if (!payload.role || !payload.companyId || !payload.contactId) {
      alert("Please select role, company and contact.");
      return;
    }

    const duplicate = roles.some(function (item) {
      if (existing && item.id === existing.id) {
        return false;
      }
      return item.role === payload.role && item.contactId === payload.contactId;
    });
    if (duplicate) {
      alert("This role is already assigned to the selected contact.");
      return;
    }

    const updatedRoles = existing
      ? roles.map(function (item) {
          return item.id === existing.id ? payload : item;
        })
      : [payload].concat(roles);

    window.BuildingStorage.updateBuilding({
      ...building,
      buildingRoles: updatedRoles,
      lastUpdated: new Date().toISOString(),
    });

    openBuildingRolesView();
  }

  function handleBuildingRoleCompanyChange() {
    const companyId = String(buildingRoleForm.elements.companyId.value || "");
    renderRoleContactOptions("", companyId);
  }

  function handleBuildingRolesListClick(event) {
    const target = event.target;
    if (!(target instanceof HTMLElement)) {
      return;
    }

    const card = target.closest(".building-card");
    if (!card) {
      return;
    }

    const roleId = card.getAttribute("data-role-id") || "";
    if (!roleId) {
      return;
    }

    const roles = getBuildingRolesForActiveBuilding();
    const selected = roles.find(function (item) {
      return item.id === roleId;
    });
    if (!selected) {
      return;
    }

    if (target.closest(".building-role-remove-btn")) {
      const shouldDelete = window.confirm("Delete this role assignment?");
      if (!shouldDelete) {
        return;
      }

      const building = ensureBuildingRolesForActiveBuilding();
      if (!building) {
        showDashboard();
        return;
      }

      const updatedRoles = roles.filter(function (item) {
        return item.id !== selected.id;
      });
      window.BuildingStorage.updateBuilding({
        ...building,
        buildingRoles: updatedRoles,
        lastUpdated: new Date().toISOString(),
      });
      openBuildingRolesView();
      return;
    }

    openBuildingRoleForm("edit", selected);
  }

  function handleBuildingRolesListKeydown(event) {
    if (event.key !== "Enter" && event.key !== " ") {
      return;
    }

    const target = event.target;
    if (!(target instanceof HTMLElement)) {
      return;
    }

    const card = target.closest(".building-card");
    if (!card) {
      return;
    }

    event.preventDefault();
    const roleId = card.getAttribute("data-role-id") || "";
    if (!roleId) {
      return;
    }

    const roles = getBuildingRolesForActiveBuilding();
    const selected = roles.find(function (item) {
      return item.id === roleId;
    });
    if (!selected) {
      return;
    }

    openBuildingRoleForm("edit", selected);
  }

  function handleTenancyDocuments() {
    showModulePlaceholder("Documents", "No documents uploaded.");
  }

  function handleScheduleBack() {
    openOverviewById(activeBuildingId);
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
    openHistoryView(activeBuildingId);
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

    const moduleName = button.getAttribute("data-module") || "Overview";
    if (moduleName === "Overview") {
      activeModule = "Overview";
      const building = findBuildingById(activeBuildingId);
      if (!building) {
        return;
      }
      setActiveModuleButton(activeModule);
      renderOverviewModule(activeModule, building);
      return;
    }

    if (moduleName === "Current Tenancy") {
      openCurrentTenancyView(activeBuildingId);
      return;
    }

    if (moduleName === "Tenancy History") {
      showModulePlaceholder("Tenancy History", "No tenancy history has been recorded yet.");
      return;
    }

    if (moduleName === "Contacts") {
      openContactsView();
      return;
    }

    if (moduleName === "Building Roles") {
      openBuildingRolesView();
      return;
    }

    if (moduleName === "Companies") {
      openCompaniesView();
      return;
    }

    if (moduleName === "Schedule") {
      openScheduleView(activeBuildingId);
      return;
    }

    if (moduleName === "Completed") {
      openHistoryView(activeBuildingId);
      return;
    }

    if (moduleName === "Documents") {
      showModulePlaceholder("Documents", "No documents uploaded.");
      return;
    }

    const building = findBuildingById(activeBuildingId);
    if (!building) {
      return;
    }

    activeModule = moduleName;
    setActiveModuleButton(activeModule);
    renderOverviewModule(activeModule, building);
  }

  function applySearchFilter() {
    renderBuildings();
  }

  function handleOpenBuildingClick(event) {
    const target = event.target;
    if (!(target instanceof HTMLElement)) {
      return;
    }

    const card = target.closest(".building-card");
    if (!card) {
      return;
    }

    const buildingId = card.getAttribute("data-id") || "";
    openOverviewById(buildingId);
  }

  function handleBuildingCardKeydown(event) {
    if (event.key !== "Enter" && event.key !== " ") {
      return;
    }

    const target = event.target;
    if (!(target instanceof HTMLElement)) {
      return;
    }

    const card = target.closest(".building-card");
    if (!card) {
      return;
    }

    event.preventDefault();
    const buildingId = card.getAttribute("data-id") || "";
    if (!buildingId) {
      return;
    }
    openOverviewById(buildingId);
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

  addBuildingBtn.addEventListener("click", showForm);
  cancelBtn.addEventListener("click", function () {
    buildingForm.reset();
    showDashboard();
  });
  buildingSearch.addEventListener("input", applySearchFilter);
  overviewBackBtn.addEventListener("click", handleOverviewBack);
  tenancyBackBtn.addEventListener("click", handleTenancyBack);
  contactsBackBtn.addEventListener("click", handleContactsBack);
  buildingRolesBackBtn.addEventListener("click", handleBuildingRolesBack);
  companiesBackBtn.addEventListener("click", handleCompaniesBack);
  scheduleBackBtn.addEventListener("click", handleScheduleBack);
  historyBackBtn.addEventListener("click", handleHistoryBack);
  editBuildingBtn.addEventListener("click", handleOpenEdit);
  cancelEditBtn.addEventListener("click", handleCancelEdit);
  deleteBuildingBtn.addEventListener("click", handleDeleteBuilding);
  addTenancyBtn.addEventListener("click", function () {
    openTenancyForm("add");
  });
  editTenancyBtn.addEventListener("click", handleEditTenancy);
  manageContactsBtn.addEventListener("click", handleManageContacts);
  tenancyDocumentsBtn.addEventListener("click", handleTenancyDocuments);
  cancelTenancyBtn.addEventListener("click", handleCancelTenancy);
  addContactBtn.addEventListener("click", handleAddContact);
  addContactInlineBtn.addEventListener("click", handleAddContact);
  addRoleBtn.addEventListener("click", handleAddRole);
  addRoleInlineBtn.addEventListener("click", handleAddRole);
  addCompanyBtn.addEventListener("click", handleAddCompany);
  addCompanyInlineBtn.addEventListener("click", handleAddCompany);
  cancelContactBtn.addEventListener("click", handleCancelContact);
  cancelBuildingRoleBtn.addEventListener("click", handleCancelBuildingRole);
  cancelCompanyBtn.addEventListener("click", handleCancelCompany);
  cancelCompleteTaskBtn.addEventListener("click", handleCancelCompleteTask);
  placeholderBackBtn.addEventListener("click", handlePlaceholderBack);
  moduleNav.addEventListener("click", handleModuleNavigationClick);
  buildingForm.addEventListener("submit", handleSave);
  editBuildingForm.addEventListener("submit", handleEditSave);
  tenancyForm.addEventListener("submit", handleSaveTenancy);
  contactForm.addEventListener("submit", handleSaveContact);
  contactForm.elements.companyId.addEventListener("change", handleContactCompanyChange);
  buildingRoleForm.addEventListener("submit", handleSaveBuildingRole);
  buildingRoleForm.elements.companyId.addEventListener("change", handleBuildingRoleCompanyChange);
  companyForm.addEventListener("submit", handleSaveCompany);
  completeTaskForm.addEventListener("submit", handleSaveCompleteTask);
  completeTaskForm.elements.companyUsed.addEventListener("change", handleCompleteCompanyChange);
  buildingList.addEventListener("click", handleOpenBuildingClick);
  buildingList.addEventListener("keydown", handleBuildingCardKeydown);
  contactsList.addEventListener("click", handleContactListClick);
  buildingRolesList.addEventListener("click", handleBuildingRolesListClick);
  buildingRolesList.addEventListener("keydown", handleBuildingRolesListKeydown);
  companiesList.addEventListener("click", handleCompanyListClick);
  scheduleOverdueList.addEventListener("click", handleScheduleListClick);
  scheduleWeekList.addEventListener("click", handleScheduleListClick);
  scheduleMonthList.addEventListener("click", handleScheduleListClick);
  scheduleFutureList.addEventListener("click", handleScheduleListClick);
  scheduleOverdueList.addEventListener("keydown", handleScheduleListKeydown);
  scheduleWeekList.addEventListener("keydown", handleScheduleListKeydown);
  scheduleMonthList.addEventListener("keydown", handleScheduleListKeydown);
  scheduleFutureList.addEventListener("keydown", handleScheduleListKeydown);
  historyList.addEventListener("click", handleHistoryListClick);
  historyList.addEventListener("keydown", handleHistoryListKeydown);
  tenancyDetailsList.addEventListener("click", handleTenancyDetailsClick);
  moduleContentBody.addEventListener("click", handleModuleContentClick);
  breadcrumbNav.addEventListener("click", handleBreadcrumbClick);

  ensureMasterMigration();
  migrateBuildingRolesForAllBuildings();
  showDashboard();
  renderBuildings();
})();
