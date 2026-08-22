// Regression coverage for resumable New Property Setup.
// Verifies that a property can be partially configured, saved, reloaded,
// resumed from Settings, and completed without creating a duplicate property.

const assert = require("assert");
const fs = require("fs");
const http = require("http");
const path = require("path");
const { chromium } = require("playwright");

const root = path.resolve(__dirname, "..");

const contentTypes = {
  ".html": "text/html",
  ".js": "text/javascript",
  ".css": "text/css",
  ".json": "application/json",
  ".png": "image/png",
};

function startServer() {
  return new Promise(function (resolve, reject) {
    const server = http.createServer(function (request, response) {
      const requestPath = decodeURIComponent((request.url || "/").split("?")[0]);
      const relativePath = requestPath === "/" ? "index.html" : requestPath.replace(/^\//, "");
      const filePath = path.resolve(root, relativePath);

      if (!filePath.startsWith(root) || !fs.existsSync(filePath)) {
        response.writeHead(404);
        response.end();
        return;
      }

      response.writeHead(200, {
        "Content-Type": contentTypes[path.extname(filePath)] || "application/octet-stream",
      });

      fs.createReadStream(filePath).pipe(response);
    });

    server.listen(0, "127.0.0.1", function () {
      resolve({
        server: server,
        url: `http://127.0.0.1:${server.address().port}/`,
      });
    });

    server.on("error", reject);
  });
}

function storedBuildings(page) {
  return page.evaluate(function () {
    return JSON.parse(localStorage.getItem("buildingManagerBuildings") || "[]");
  });
}

(async function () {
  const running = await startServer();
  const browser = await chromium.launch({ headless: true });

  try {
    const page = await browser.newPage();
    const pageErrors = [];

    page.on("pageerror", function (error) {
      pageErrors.push(String(error));
    });

    await page.addInitScript(function () {
      window.__COMPLIANCE_HQ_BROWSER_TEST__ = true;
    });

    await page.goto(running.url, { waitUntil: "networkidle" });

    // ------------------------------------------------------------
    // A. Start a new property.
    // ------------------------------------------------------------

    await page.locator('#app-module-nav [data-app-module="settings"]').click();
    await page.locator("#settings-add-property-btn").click();

    assert.strictEqual(
      await page.locator("#form-view").evaluate(function (element) {
        return element.classList.contains("is-active");
      }),
      true,
      "Add Property must open the Setup wizard"
    );

    await page.locator("#buildingName").fill("Resume Test Property");
    await page.locator("#streetAddress").fill("25 Test Street");
    await page.locator("#city").fill("Christchurch");
    await page.locator("#owner").fill("Test Owner");
    await page.locator("#propertyManager").fill("Test Manager");
    await page.locator("#buildingType").fill("Industrial");

    await page.locator("#building-form button[type='submit']").click();

    // Step 1 should immediately create the persistent property shell.
    let buildings = await storedBuildings(page);

    assert.strictEqual(
      buildings.length,
      1,
      "completing Property Details must create one persistent property"
    );

    let property = buildings[0];

    assert.strictEqual(
      property.buildingName,
      "Resume Test Property",
      "saved property must retain its name"
    );

    assert.strictEqual(
      property.setupIncomplete,
      true,
      "property must be marked as incomplete during setup"
    );

    const propertyId = property.id;

    // ------------------------------------------------------------
    // B. Enter partial tenancy data WITHOUT completing the tenancy.
    // ------------------------------------------------------------

    await page.locator("#setup-add-tenancy-btn").click();

    await page.locator("#setupTenancyCompanyId").selectOption("__new__");
    await page.locator("#setupTenancyNewCompanyName").fill("Resume Test Tenant");
    await page.locator("#setupLeaseStart").fill("2026-09-01");
    await page.locator("#setupLeaseEnd").fill("2029-08-31");
    await page.locator("#setupTenancyNotes").fill("Partial tenancy draft");

    // Save & Exit while still part-way through Step 2.
    await page.locator("#setup-save-exit-btn").click();

    await page.waitForFunction(function () {
      return document.getElementById("settings-view").classList.contains("is-active");
    });

    buildings = await storedBuildings(page);

    assert.strictEqual(
      buildings.length,
      1,
      "Save & Exit must not create a duplicate property"
    );

    property = buildings[0];

    assert.strictEqual(
      property.id,
      propertyId,
      "Save & Exit must preserve the original property id"
    );

    assert.strictEqual(
      property.setupIncomplete,
      true,
      "Save & Exit must leave the property marked incomplete"
    );

    assert.strictEqual(
      Number(property.setupStep),
      2,
      "Save & Exit must remember the current setup step"
    );

    assert.ok(
      property.setupDraft,
      "Save & Exit must persist setupDraft"
    );

    assert.ok(
      property.setupDraft.tenancy,
      "partial tenancy entry must be persisted in setupDraft"
    );

    assert.strictEqual(
      property.setupDraft.tenancy.newCompanyName,
      "Resume Test Tenant",
      "partial new-company tenancy entry must survive Save & Exit"
    );

    // Settings must show the incomplete setup and Resume Setup action.
    const propertyCard = page.locator(
      `[data-settings-property-id="${propertyId}"]`
    );

    assert.ok(
      (await propertyCard.textContent()).includes("Setup:"),
      "Settings must identify the property as incomplete"
    );

    assert.strictEqual(
      await propertyCard.locator('[data-settings-property-action="resume-setup"]').count(),
      1,
      "incomplete property must offer Resume Setup"
    );

    // ------------------------------------------------------------
    // C. Reload the whole application.
    // ------------------------------------------------------------

    await page.reload({ waitUntil: "networkidle" });

    await page.locator('#app-module-nav [data-app-module="settings"]').click();

    const reloadedCard = page.locator(
      `[data-settings-property-id="${propertyId}"]`
    );

    assert.strictEqual(
      await reloadedCard.locator('[data-settings-property-action="resume-setup"]').count(),
      1,
      "Resume Setup must survive a full page reload"
    );

    await reloadedCard.locator('[data-settings-property-action="resume-setup"]').click();

    // ------------------------------------------------------------
    // D. Resume must return to Step 2 with entered data restored.
    // ------------------------------------------------------------

    assert.strictEqual(
      await page.locator("#setup-step-2").evaluate(function (element) {
        return element.classList.contains("is-active");
      }),
      true,
      "Resume Setup must return to the saved setup step"
    );

    assert.strictEqual(
      await page.locator("#setupTenancyCompanyId").inputValue(),
      "__new__",
      "new-company selection must be restored"
    );

    assert.strictEqual(
      await page.locator("#setupTenancyNewCompanyName").inputValue(),
      "Resume Test Tenant",
      "partial tenancy company name must be restored"
    );

    assert.strictEqual(
      await page.locator("#setupLeaseStart").inputValue(),
      "2026-09-01",
      "partial lease start must be restored"
    );

    assert.strictEqual(
      await page.locator("#setupLeaseEnd").inputValue(),
      "2029-08-31",
      "partial lease end must be restored"
    );

    assert.strictEqual(
      await page.locator("#setupTenancyNotes").inputValue(),
      "Partial tenancy draft",
      "partial tenancy notes must be restored"
    );

    // ------------------------------------------------------------
    // E. Finish tenancy, then skip remaining optional setup.
    // ------------------------------------------------------------

    await page.locator("#setup-save-tenancy-btn").click();

    assert.strictEqual(
      await page.locator("#setup-step-3").evaluate(function (element) {
        return element.classList.contains("is-active");
      }),
      true,
      "saving the resumed tenancy must continue to Contacts"
    );

    await page.locator("#setup-step-3-next-btn").click();

    assert.strictEqual(
      await page.locator("#setup-step-4").evaluate(function (element) {
        return element.classList.contains("is-active");
      }),
      true,
      "Contacts must continue to Calendar Items"
    );

    // Clear all templates so setup can finish without configuring dates.
    await page.locator("#setup-clear-all-btn").click();
    await page.locator("#setup-step-4-next-btn").click();

    await page.waitForFunction(function () {
      return document.getElementById("setup-step-6").classList.contains("is-active");
    });

    // ------------------------------------------------------------
    // F. Completed setup must update the SAME property.
    // ------------------------------------------------------------

    buildings = await storedBuildings(page);

    assert.strictEqual(
      buildings.length,
      1,
      "finishing resumed setup must not create a second property"
    );

    property = buildings[0];

    assert.strictEqual(
      property.id,
      propertyId,
      "completed setup must retain the original property id"
    );

    assert.strictEqual(
      property.setupIncomplete,
      false,
      "completed property must no longer be marked incomplete"
    );

    assert.strictEqual(
      Number(property.setupStep),
      6,
      "completed setup must record the finished step"
    );

    assert.ok(
      Array.isArray(property.tenancies) && property.tenancies.length === 1,
      "completed resumed setup must create the tenancy"
    );

    assert.strictEqual(
      property.tenancies[0].companyName,
      "Resume Test Tenant",
      "resumed tenancy must be attached to the completed property"
    );

    assert.deepStrictEqual(
      pageErrors,
      [],
      "no page errors during resumable property setup"
    );

    console.log("resumable property setup browser regression test passed");
  } finally {
    await browser.close();
    running.server.close();
  }
})().catch(function (error) {
  console.error(error);
  process.exit(1);
});
