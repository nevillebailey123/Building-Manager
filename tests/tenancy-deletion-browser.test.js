const assert = require("assert");
const fs = require("fs");
const http = require("http");
const path = require("path");
const { chromium } = require("playwright");

const root = path.resolve(__dirname, "..");
const contentTypes = { ".html": "text/html", ".js": "text/javascript", ".css": "text/css", ".json": "application/json", ".png": "image/png" };
function startServer() { return new Promise((resolve, reject) => { const server = http.createServer((req,res) => { const requestPath=decodeURIComponent((req.url||"/").split("?")[0]); const relative=requestPath==="/"?"index.html":requestPath.replace(/^\//,""); const file=path.resolve(root,relative); if(!file.startsWith(root)||!fs.existsSync(file)){res.writeHead(404);res.end();return;} res.writeHead(200,{"Content-Type":contentTypes[path.extname(file)]||"application/octet-stream"}); fs.createReadStream(file).pipe(res); }); server.listen(0,"127.0.0.1",()=>resolve({server,url:`http://127.0.0.1:${server.address().port}/`})); server.on("error",reject); }); }

const now = "2026-08-20T00:00:00.000Z";
const tenancyA = { id:"ten-a", companyName:"Delete Me Ltd", tradingName:"", leaseStart:"2026-01-01", leaseEnd:"2029-01-01", rentReviewDate:"2027-01-01", rentReviewFrequency:"Annual", renewalDate:"", noticeDate:"", status:"Occupied", notes:"", contactRefs:["contact-1"], documents:[], lease:{notes:"",documents:[{id:"lease-doc",title:"Lease A",fileName:"lease-a.pdf",category:"Lease",uploadedAt:now,storage:{kind:"data-url",dataUrl:""}}],versionHistory:[]} };
const tenancyB = { id:"ten-b", companyName:"Keep Me Ltd", tradingName:"", leaseStart:"2026-02-01", leaseEnd:"2030-02-01", rentReviewDate:"", rentReviewFrequency:"Annual", renewalDate:"", noticeDate:"", status:"Occupied", notes:"", contactRefs:[], documents:[], lease:{notes:"",documents:[],versionHistory:[]} };
const buildings=[{ id:"property-a", buildingName:"Property A", streetAddress:"1 Test Street", city:"Napier", status:"Occupied", tenancy:tenancyA, tenancies:[tenancyA,tenancyB], tenancyHistory:[], documents:[{id:"property-doc",title:"Property Doc",fileName:"property.pdf",category:"General",tenancyId:"ten-a",uploadedAt:now,storage:{kind:"data-url",dataUrl:""}}], documentCategories:[], propertyTemplates:[], scheduleItems:[{id:"tenancy-event-ten-a-lease-expiry",sourceType:"tenancy",tenancyId:"ten-a",tenancyEventType:"lease-expiry",propertyId:"property-a",taskName:"Delete Me Ltd Lease Expiry",category:"Tenancy",dueDate:"2029-01-01",frequency:"One-off",createdDate:now,lastUpdated:now},{id:"manual-item",sourceType:"manual",propertyId:"property-a",taskName:"Keep this",category:"General",dueDate:"2028-01-01",frequency:"One-off",createdDate:now,lastUpdated:now}], historyRecords:[{id:"history-ten",scheduleItemId:"tenancy-event-ten-a-lease-expiry",completedAt:now},{id:"history-manual",scheduleItemId:"manual-item",completedAt:now}], buildingContactAssignments:["contact-1"], contactRelationshipById:{"contact-1":"Property Manager"}, createdDate:now,lastUpdated:now }];
const masterData={contacts:[{id:"contact-1",name:"Master Contact",email:"contact@example.com",companyId:"company-1"}],companies:[{id:"company-1",name:"Master Company"}],scheduledItemTemplates:[],documents:[]};

(async function(){
 const running=await startServer(); const browser=await chromium.launch({headless:true});
 try {
  const page=await browser.newPage(); const errors=[]; page.on("pageerror",e=>errors.push(String(e)));
  await page.addInitScript(payload=>{window.__COMPLIANCE_HQ_BROWSER_TEST__=true;if(!localStorage.getItem("buildingManagerBuildings")){localStorage.setItem("buildingManagerBuildings",JSON.stringify(payload.buildings));localStorage.setItem("buildingManagerMasterData",JSON.stringify(payload.masterData));localStorage.setItem("buildingManagerCurrentPropertyId","property-a");}},{buildings,masterData});
  await page.goto(running.url,{waitUntil:"networkidle"});
  await page.locator('#app-module-nav [data-app-module="Tenancy"]').click();
  await page.locator('[data-tenancy-id="ten-a"]').click();
  assert.strictEqual(await page.locator('#delete-tenancy-btn').isVisible(),true,"Permanent delete must be available only in Edit Tenancy");

  // Cancel must be a no-op.
  await page.locator('#delete-tenancy-btn').click();
  await page.locator('[data-tenancy-delete-action="cancel"]').click();
  let state=await page.evaluate(()=>JSON.parse(localStorage.getItem("buildingManagerBuildings")));
  assert.strictEqual(state[0].tenancies.length,2,"Cancel must keep both tenancies");

  // Explicit confirmation deletes only the selected tenancy.
  await page.locator('#delete-tenancy-btn').click();
  await page.locator('[data-tenancy-delete-action="delete"]').click();
  await page.waitForTimeout(50);
  state=await page.evaluate(()=>JSON.parse(localStorage.getItem("buildingManagerBuildings")));
  const b=state[0];
  assert.deepStrictEqual(b.tenancies.map(t=>t.id),["ten-b"],"Only the selected tenancy must be removed");
  assert.strictEqual(b.tenancy.id,"ten-b","Legacy tenancy pointer must move to the first remaining tenancy");
  assert.strictEqual(b.status,"Occupied","Property remains occupied while another tenancy exists");
  assert.strictEqual(b.scheduleItems.some(i=>i.sourceType==="tenancy"&&i.tenancyId==="ten-a"),false,"Deleted tenancy Calendar items must be removed");
  assert.strictEqual(b.historyRecords.some(r=>r.id==="history-ten"),false,"Deleted tenancy Calendar history must be removed");
  assert.strictEqual(b.historyRecords.some(r=>r.id==="history-manual"),true,"Unrelated Calendar history must remain");
  assert.strictEqual(b.documents.some(d=>d.id==="property-doc"&&String(d.tenancyId||"")===""),true,"Property repository documents must be preserved and unlinked");
  assert.strictEqual(b.documents.some(d=>d.id==="lease-doc"),true,"Tenancy-only lease documents must be preserved in the Documents repository");
  const md=await page.evaluate(()=>JSON.parse(localStorage.getItem("buildingManagerMasterData")));
  assert.strictEqual(md.contacts.some(c=>c.id==="contact-1"),true,"Master contact must remain");
  assert.strictEqual(md.companies.some(c=>c.id==="company-1"),true,"Master company must remain");
  assert.strictEqual(b.buildingContactAssignments.includes("contact-1"),true,"Unrelated property contact relationship must remain");

  await page.reload({waitUntil:"networkidle"});
  const reloaded=await page.evaluate(()=>JSON.parse(localStorage.getItem("buildingManagerBuildings"))[0]);
  assert.deepStrictEqual(reloaded.tenancies.map(t=>t.id),["ten-b"],"Deleted tenancy must not reappear after reload");
  assert.deepStrictEqual(errors,[],"Tenancy deletion must not throw browser errors");
  console.log("tenancy deletion browser regression test passed");
 } finally { await browser.close(); running.server.close(); }
})().catch(error=>{console.error(error.stack||error);process.exitCode=1;});
