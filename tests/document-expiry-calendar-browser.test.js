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
      response.writeHead(200, { "Content-Type": contentTypes[path.extname(filePath)] || "application/octet-stream", "Cache-Control": "no-store" });
      fs.createReadStream(filePath).pipe(response);
    });
    server.listen(0, "127.0.0.1", function () {
      resolve({ server: server, url: `http://127.0.0.1:${server.address().port}/` });
    });
    server.on("error", reject);
  });
}

const PDF_DATA_URL = "data:application/pdf;base64,JVBERi0xLjQK";

function seedBuildings() {
  return [
    {
      id: "building-a",
      buildingName: "Ford Onekawa",
      documents: [
        // B: no expiry date at all -> must never generate a Calendar entry.
        { id: "doc-no-expiry", title: "Building WOF Certificate", category: "Compliance", fileName: "wof.pdf", storage: { kind: "data-url", dataUrl: PDF_DATA_URL } },
        // C: expiry date set, but Calendar display left off -> must not generate a Calendar entry.
        { id: "doc-expiry-off", title: "Public Liability Insurance", category: "Insurance", fileName: "liability.pdf", documentDate: "2026-03-01", expiryDate: "2027-03-01", addExpiryToCalendar: false, storage: { kind: "data-url", dataUrl: PDF_DATA_URL } },
        // D/J: expiry date + Calendar display on, owned directly by the Property.
        { id: "doc-expiry-on", title: "Fire Insurance Policy", category: "Insurance", fileName: "fire-insurance.pdf", documentDate: "2026-08-05", expiryDate: "2027-08-05", addExpiryToCalendar: true, storage: { kind: "data-url", dataUrl: PDF_DATA_URL } },
      ],
      documentCategories: [],
      tenancy: {
        id: "tenancy-a",
        companyName: "Pan Pac",
        tradingName: "Pan Pac",
        lease: {
          notes: "",
          versionHistory: [],
          // K: expiry date + Calendar display on, owned by a Tenancy within the Property.
          documents: [
            { id: "lease-doc", title: "Pan Pac Lease Agreement", documentType: "Lease Agreement", fileName: "pan-pac-lease.pdf", documentDate: "2024-10-01", expiryDate: "2026-09-30", addExpiryToCalendar: true, storage: { kind: "data-url", dataUrl: PDF_DATA_URL } },
          ],
        },
      },
      // M: a pre-existing manual/template-style Calendar item that must be unaffected by any of this.
      scheduleItems: [
        { id: "manual-a", taskName: "Existing Fire Alarm Service", dueDate: "2026-09-01", frequency: "Annual", category: "Compliance", status: "Scheduled" },
      ],
      propertyTemplates: [],
      historyRecords: [],
    },
  ];
}

function isVisible(page, selector) {
  return page.locator(selector).isVisible();
}

async function seedAndGoto(page, url, buildings) {
  // Only the anchor-click interception needs to survive every reload; the seed itself must NOT
  // be re-applied on later reloads (page.addInitScript persists for the page's lifetime), or later
  // mutations made mid-test would be silently clobbered back to the original seed.
  await page.addInitScript(function () {
      window.__COMPLIANCE_HQ_BROWSER_TEST__ = true;
    window.__openedDocumentUrls = [];
    const originalAnchorClick = HTMLAnchorElement.prototype.click;
    HTMLAnchorElement.prototype.click = function () {
      window.__openedDocumentUrls.push(this.href);
      if (this.target !== "_blank") {
        originalAnchorClick.call(this);
      }
    };
  });
  await page.goto(url, { waitUntil: "networkidle" });
  await page.evaluate(function (data) {
    localStorage.setItem("buildingManagerCurrentPropertyId", "");
    localStorage.setItem("buildingManagerBuildings", JSON.stringify(data));
  }, buildings);
  await page.reload({ waitUntil: "networkidle" });
}

async function openCalendar(page) {
  await page.locator('#app-module-nav [data-app-module="Schedule"]').click();
}

async function getBuildings(page) {
  return page.evaluate(function () {
    return window.BuildingStorage.getBuildings();
  });
}

async function setBuildings(page, buildings) {
  await page.evaluate(function (data) {
    const existing = window.BuildingStorage.getBuildings();

    existing.forEach(function (building) {
      if (!data.some(function (item) { return item.id === building.id; })) {
        window.BuildingStorage.deleteBuilding(building.id);
      }
    });

    data.forEach(function (building) {
      if (window.BuildingStorage.getBuildingById(building.id)) {
        window.BuildingStorage.updateBuilding(building);
      } else {
        window.BuildingStorage.addBuilding(building);
      }
    });
  }, buildings);

  await page.reload({ waitUntil: "networkidle" });
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

    await seedAndGoto(page, running.url, seedBuildings());

    // ── A: repository documents remain directly accessible ─────────────────
    await page.locator('#app-module-nav [data-app-module="Documents"]').click();

    // Documents now opens with a category overview. Open Insurance explicitly.
    await page.locator('[data-document-category-open="Insurance"]').click();

    const documentRow = page.locator('[data-document-register-id="doc-expiry-on"]');
    await documentRow.locator("h3").click();

    let openedUrls = await page.evaluate(function () { return window.__openedDocumentUrls; });
    assert.ok(
      openedUrls.some(function (url) { return url.startsWith("blob:") || url.startsWith("data:application/pdf"); }),
      "Clicking a document row must open the stored file directly"
    );
    assert.strictEqual(
      await isVisible(page, "#document-form-card"),
      false,
      "Viewing a document must not open Edit"
    );

    // Property-owned documents are labelled correctly within their category.
    const propertyRelatedToTexts = await page.locator('[data-document-register-id] .document-item-meta').allTextContents();
    assert.ok(
      propertyRelatedToTexts.some(function (text) { return text.includes("· Property"); }),
      "Property-owned documents must be identified as Property records"
    );

    // Return to the category overview and open Tenancy.
    await page.locator("[data-document-category-back]").click();
    await page.locator('[data-document-category-open="Tenancy"]').click();

    assert.strictEqual(
      await page.locator('[data-document-register-id="lease-doc"]').count(),
      1,
      "Tenancy category must show the lease document"
    );
    assert.ok(
      (await page.locator('[data-document-register-id="lease-doc"] .document-item-meta').allTextContents()).some(function (text) { return text.includes("· Tenancy"); }),
      "Tenancy-owned documents must be labelled Related to: Tenancy"
    );

    // Related To: Tenancy must retain only tenancy-owned records.
    await page.locator("#lease-related-to-filter").selectOption("Tenancy");
    assert.strictEqual(
      await page.locator("[data-document-register-id]").count(),
      1,
      "Related To: Tenancy must show only tenancy documents"
    );

    await page.locator("#lease-related-to-filter").selectOption("");
    await page.locator("[data-document-category-back]").click();

    // Checkbox UX: Add expiry to Calendar is unavailable until an Expiry Date exists.
    await page.locator("#documents-add-btn").click();
    assert.strictEqual(await page.locator("#document-expiry-calendar-toggle").isDisabled(), true, "Calendar toggle must start disabled with no Expiry Date");
    assert.strictEqual(await page.locator("#document-expiry-calendar-toggle").isChecked(), false, "Calendar toggle must start unchecked");
    await page.locator("#document-expiry-input").fill("2028-01-01");
    assert.strictEqual(await page.locator("#document-expiry-calendar-toggle").isDisabled(), false, "Calendar toggle must enable once an Expiry Date is set");
    await page.locator("#document-expiry-input").fill("");
    assert.strictEqual(await page.locator("#document-expiry-calendar-toggle").isDisabled(), true, "Calendar toggle must disable again once Expiry Date is cleared");
    assert.strictEqual(await page.locator("#document-expiry-calendar-toggle").isChecked(), false, "Calendar toggle must uncheck itself once Expiry Date is cleared");
    await page.locator("#document-cancel-btn").click();

    // ── B/C/D/J/K/M: Calendar shows exactly the opted-in expiry entries plus existing items ──
    await openCalendar(page);
    assert.strictEqual(await page.locator(".schedule-ops-row").count(), 3, "Calendar must show the manual item plus exactly the two opted-in document expiries");
    assert.strictEqual(await page.locator(".schedule-row-title", { hasText: "Fire Insurance Policy expires" }).count(), 1, "Property document expiry must appear once");
    assert.strictEqual(await page.locator(".schedule-row-title", { hasText: "Pan Pac Lease Agreement expires" }).count(), 1, "Tenancy document expiry must appear once");
    assert.strictEqual(await page.locator(".schedule-row-title", { hasText: "Existing Fire Alarm Service" }).count(), 1, "Pre-existing manual Calendar item must be unaffected");
    assert.strictEqual(await page.locator(".schedule-row-title", { hasText: "Public Liability Insurance" }).count(), 0, "Expiry date without the Calendar toggle must not appear");
    assert.strictEqual(await page.locator(".schedule-row-title", { hasText: "Building WOF Certificate" }).count(), 0, "A document with no expiry date must never appear in Calendar");

    // Document-generated rows identify their source and (for tenancy documents) the tenancy.
    const propertyDocRow = page.locator(".schedule-ops-row", { hasText: "Fire Insurance Policy expires" });
    assert.ok((await propertyDocRow.innerText()).includes("Source: Document"), "Document-generated rows must identify Source: Document");
    const tenancyDocRow = page.locator(".schedule-ops-row", { hasText: "Pan Pac Lease Agreement expires" });
    assert.ok((await tenancyDocRow.innerText()).includes("Tenancy: Pan Pac"), "Tenancy document expiry must show its Tenancy");
    assert.ok((await tenancyDocRow.innerText()).includes("Source: Document"), "Tenancy document expiry must identify Source: Document");

    // ── L: document-generated Calendar entries open Calendar Details first ──
    await propertyDocRow.click();

    assert.strictEqual(
      await page.locator(".schedule-details-backdrop").count(),
      1,
      "Clicking a document-generated Calendar row must open Calendar Details"
    );
    assert.strictEqual(
      await page.locator("[data-schedule-source-document]").count(),
      1,
      "Calendar Details must show the linked source document"
    );

    const openedBeforeSourceClick = (await page.evaluate(function () {
      return window.__openedDocumentUrls;
    })).length;

    await page.locator("[data-schedule-source-document]").click();

    openedUrls = await page.evaluate(function () {
      return window.__openedDocumentUrls;
    });

    assert.ok(
      openedUrls.length > openedBeforeSourceClick,
      "Clicking the Source Document card must open the stored document"
    );

    await page.locator('[data-schedule-details-action="close"]').click();
    await page.locator(".schedule-details-backdrop").waitFor({ state: "detached" });

    // A normal Calendar item still opens the generic details dialog.
    await page.locator(".schedule-ops-row", { hasText: "Existing Fire Alarm Service" }).click();
    assert.strictEqual(await page.locator(".schedule-details-backdrop").count(), 1, "Non-document Calendar items must still open the Calendar details dialog");
    await page.locator('[data-schedule-details-action="close"]').click();
    await page.locator(".schedule-details-backdrop").waitFor({ state: "detached" });

    // ── E: repeating synchronization must not create duplicates ──────────────
    await openCalendar(page);
    await openCalendar(page);
    assert.strictEqual(await page.locator(".schedule-row-title", { hasText: "Fire Insurance Policy expires" }).count(), 1, "Re-running synchronization must not duplicate the Calendar entry");

    // ── F: changing the Expiry Date must move the Calendar entry to the new date ──
    let buildings = await getBuildings(page);
    buildings[0].documents.find(function (d) { return d.id === "doc-expiry-on"; }).expiryDate = "2028-11-20";
    await setBuildings(page, buildings);
    await openCalendar(page);
    assert.strictEqual(await page.locator(".schedule-row-title", { hasText: "Fire Insurance Policy expires" }).count(), 1, "Changing Expiry Date must keep exactly one Calendar entry");
    const movedRowText = await page.locator(".schedule-ops-row", { hasText: "Fire Insurance Policy expires" }).innerText();
    assert.ok(movedRowText.includes("2028"), "Calendar entry must use the updated expiry date");
    assert.ok(!movedRowText.includes("2027"), "Calendar entry must no longer show the old expiry date");

    // ── G: turning Add expiry to Calendar off must remove the derived entry ──
    buildings = await getBuildings(page);
    buildings[0].documents.find(function (d) { return d.id === "doc-expiry-on"; }).addExpiryToCalendar = false;
    await setBuildings(page, buildings);
    await openCalendar(page);
    assert.strictEqual(await page.locator(".schedule-row-title", { hasText: "Fire Insurance Policy expires" }).count(), 0, "Turning off the Calendar toggle must remove the derived entry");
    assert.strictEqual(await page.locator(".schedule-ops-row").count(), 2, "Only the manual item and the tenancy document expiry should remain");

    // ── H: re-enabling it must restore exactly one entry ──────────────────────
    buildings = await getBuildings(page);
    buildings[0].documents.find(function (d) { return d.id === "doc-expiry-on"; }).addExpiryToCalendar = true;
    await setBuildings(page, buildings);
    await openCalendar(page);
    assert.strictEqual(await page.locator(".schedule-row-title", { hasText: "Fire Insurance Policy expires" }).count(), 1, "Re-enabling the Calendar toggle must restore exactly one entry");

    // ── I: deleting the document must remove its Calendar entry ───────────────
    buildings = await getBuildings(page);
    buildings[0].documents = buildings[0].documents.filter(function (d) { return d.id !== "doc-expiry-on"; });
    await setBuildings(page, buildings);
    await openCalendar(page);
    assert.strictEqual(await page.locator(".schedule-row-title", { hasText: "Fire Insurance Policy expires" }).count(), 0, "Deleting the document must remove its generated Calendar entry");
    assert.strictEqual(await page.locator(".schedule-row-title", { hasText: "Pan Pac Lease Agreement expires" }).count(), 1, "Deleting one document must not affect another document's Calendar entry");
    assert.strictEqual(await page.locator(".schedule-row-title", { hasText: "Existing Fire Alarm Service" }).count(), 1, "Deleting a document must not affect pre-existing manual Calendar items");

    // ── N: backup/restore preserves the document, its expiry/Calendar selection and relationships ──
    const backupPayload = await page.evaluate(function () {
      return window.BuildingStorage.createBackupPayload();
    });
    const backedUpLeaseDoc = backupPayload.buildingManagerBuildings[0].tenancy.lease.documents.find(function (d) { return d.id === "lease-doc"; });
    assert.strictEqual(backedUpLeaseDoc.expiryDate, "2026-09-30", "Backup must preserve the document Expiry Date");
    assert.strictEqual(backedUpLeaseDoc.addExpiryToCalendar, true, "Backup must preserve the Add expiry to Calendar selection");
    assert.strictEqual(backedUpLeaseDoc.title, "Pan Pac Lease Agreement", "Backup must preserve the document title");

    const restoreOutcome = await page.evaluate(function (payload) {
      return window.BuildingStorage.restoreBackupData(payload).success;
    }, backupPayload);
    assert.strictEqual(restoreOutcome, true, "Restoring the backup must succeed");
    await page.reload({ waitUntil: "networkidle" });
    await openCalendar(page);
    assert.strictEqual(await page.locator(".schedule-row-title", { hasText: "Pan Pac Lease Agreement expires" }).count(), 1, "Restoring a backup must keep the document expiry visible in Calendar exactly once");
    await page.locator('#app-module-nav [data-app-module="Documents"]').click();

    // Restored documents are presented through the category-first repository.
    await page.locator('[data-document-category-open="Tenancy"]').click();
    const restoredRelatedTexts = await page.locator('[data-document-register-id="lease-doc"] .document-item-meta').allTextContents();
    assert.ok(
      restoredRelatedTexts.some(function (text) { return text.includes("· Tenancy"); }),
      "Restoring a backup must preserve the Tenancy relationship"
    );

    await page.locator("[data-document-category-back]").click();
    assert.ok(
      await page.locator('[data-document-category-open="Insurance"]').count() >= 1,
      "Restoring a backup must preserve Property-owned documents"
    );

    assert.deepStrictEqual(pageErrors, [], "Document expiry Calendar behaviour must not throw a browser exception");

    console.log("document expiry Calendar browser regression test passed");
  } finally {
    await browser.close();
    running.server.close();
  }
})().catch(function (error) {
  console.error(error.stack || error);
  process.exitCode = 1;
});
