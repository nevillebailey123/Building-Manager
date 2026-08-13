const assert = require("assert");
const fs = require("fs");
const vm = require("vm");

const cssSource = fs.readFileSync("./style.css", "utf8");
const appSource = fs.readFileSync("./app.js", "utf8");

// 1. The stacking hierarchy is declared once, as explicit tokens.
function readLayerToken(name) {
  const match = cssSource.match(new RegExp("--" + name + ":\\s*(\\d+)\\s*;"));
  assert.ok(match, `Missing layer token --${name}`);
  return Number(match[1]);
}

const layerModal = readLayerToken("layer-modal");
const layerNested = readLayerToken("layer-modal-nested");
const layerConfirm = readLayerToken("layer-modal-confirm");

assert.ok(layerNested > layerModal, "Nested dialogs must stack above base modals");
assert.ok(layerConfirm > layerNested, "Confirmation dialogs must stack above nested dialogs");

// 2. No backdrop class may hardcode its own z-index and re-open the ordering bug.
const backdropClasses = [
  ".template-delete-modal-backdrop",
  ".document-modal-backdrop",
  ".schedule-details-backdrop",
];

backdropClasses.forEach(function (selector) {
  const escaped = selector.replace(".", "\\.");
  const rules = cssSource.match(new RegExp("(^|[,\\s])" + escaped + "\\s*(,[^{]*)?\\{[^}]*\\}", "gm")) || [];
  assert.ok(rules.length > 0, `Expected CSS rules for ${selector}`);
  rules.forEach(function (rule) {
    const zIndex = rule.match(/z-index:\s*([^;]+);/);
    if (zIndex) {
      assert.ok(
        zIndex[1].includes("var(--layer-"),
        `${selector} must take its z-index from a layer token, found "${zIndex[1].trim()}"`
      );
    }
  });
});

assert.ok(
  /\.app-modal-backdrop-confirm\s*\{\s*z-index:\s*var\(--layer-modal-confirm\);/.test(cssSource),
  "Missing reusable .app-modal-backdrop-confirm layer"
);
assert.ok(
  /\.app-modal-backdrop-nested\s*\{\s*z-index:\s*var\(--layer-modal-nested\);/.test(cssSource),
  "Missing reusable .app-modal-backdrop-nested layer"
);

// 3. Every confirmation dialog opts into the confirm layer.
function getFunctionSource(name) {
  const start = appSource.indexOf(`function ${name}(`);
  assert.ok(start >= 0, `Could not find function ${name}`);
  const end = appSource.indexOf("\n\n  function ", start);
  return appSource.slice(start, end > start ? end : appSource.length);
}

[
  "confirmScheduleRevertDialog",
  "confirmTemplateDeleteDialog",
  "confirmMasterTemplateDeleteDialog",
  "confirmPropertyTemplateUnassignDialog",
].forEach(function (name) {
  assert.ok(
    getFunctionSource(name).includes("app-modal-backdrop-confirm"),
    `${name} must render on the confirmation layer so it appears above its parent modal`
  );
});

[
  "openInlineMasterTemplateCreateDialog",
  "showScheduleCompletionDialog",
].forEach(function (name) {
  assert.ok(
    getFunctionSource(name).includes("app-modal-backdrop-nested"),
    `${name} is opened from inside a modal and must render on the nested layer`
  );
});

// 4. Revert refreshes Schedule Details instead of leaving the user on the schedule list.
const revertHandlerStart = appSource.indexOf("const shouldRevert = await confirmScheduleRevertDialog();");
assert.ok(revertHandlerStart >= 0, "Could not find the schedule details revert action handler");
const revertHandler = appSource.slice(revertHandlerStart, revertHandlerStart + 700);
assert.ok(
  revertHandler.includes("revertTemplateCompletion"),
  "Revert handler should still call the existing revert operation"
);
assert.ok(
  revertHandler.includes("openScheduleDetailsDialog(building.id, scheduleItem.id, false, \"details\")"),
  "Revert must reopen Schedule Details so the reverted state is immediately visible"
);
assert.ok(
  revertHandler.indexOf("if (!shouldRevert)") < revertHandler.indexOf("revertTemplateCompletion"),
  "Revert must be confirmed before any data change"
);

// 5. Behavioural check of the confirmation dialog itself (cancel / confirm / escape).
const revertDialogSource = getFunctionSource("confirmScheduleRevertDialog");

class StubElement {
  constructor(tagName) {
    this.tagName = String(tagName || "DIV").toUpperCase();
    this.className = "";
    this.innerHTML = "";
    this.attributes = {};
    this.children = [];
    this.listeners = {};
    this.parentNode = null;
  }

  setAttribute(name, value) {
    this.attributes[name] = String(value);
  }

  getAttribute(name) {
    return Object.prototype.hasOwnProperty.call(this.attributes, name) ? this.attributes[name] : null;
  }

  addEventListener(type, handler) {
    this.listeners[type] = this.listeners[type] || [];
    this.listeners[type].push(handler);
  }

  appendChild(child) {
    child.parentNode = this;
    this.children.push(child);
    return child;
  }

  remove() {
    if (this.parentNode) {
      this.parentNode.children = this.parentNode.children.filter(function (child) {
        return child !== this;
      }, this);
      this.parentNode = null;
    }
  }

  click(target) {
    (this.listeners.click || []).forEach(function (handler) {
      handler({ target: target || this });
    }, this);
  }
}

function runRevertDialog() {
  const body = new StubElement("body");
  const documentListeners = {};
  const context = {
    window: {
      document: {
        body,
        createElement(tagName) {
          return new StubElement(tagName);
        },
        addEventListener(type, handler) {
          documentListeners[type] = documentListeners[type] || [];
          documentListeners[type].push(handler);
        },
        removeEventListener(type, handler) {
          documentListeners[type] = (documentListeners[type] || []).filter(function (entry) {
            return entry !== handler;
          });
        },
      },
    },
    HTMLElement: StubElement,
  };
  vm.createContext(context);
  vm.runInContext(revertDialogSource, context);

  const promise = vm.runInContext("confirmScheduleRevertDialog();", context);
  const backdrop = body.children[0];
  assert.ok(backdrop, "Revert confirmation must be appended at the body modal layer");
  return { promise, backdrop, body, documentListeners };
}

(async function () {
  // Cancel: no data change, confirmation removed, parent modal untouched.
  const cancelRun = runRevertDialog();
  assert.ok(
    cancelRun.backdrop.className.includes("app-modal-backdrop-confirm"),
    "Revert confirmation backdrop must carry the confirmation layer class"
  );
  const cancelDialog = cancelRun.backdrop.children[0];
  const cancelButton = new StubElement("BUTTON");
  cancelButton.setAttribute("data-schedule-revert-action", "cancel");
  cancelDialog.click(cancelButton);
  assert.strictEqual(await cancelRun.promise, false, "Cancel must resolve false");
  assert.strictEqual(cancelRun.body.children.length, 0, "Cancel must remove only the confirmation overlay");

  // Confirm: resolves true and tears the confirmation down.
  const confirmRun = runRevertDialog();
  const confirmDialog = confirmRun.backdrop.children[0];
  const revertButton = new StubElement("BUTTON");
  revertButton.setAttribute("data-schedule-revert-action", "revert");
  confirmDialog.click(revertButton);
  assert.strictEqual(await confirmRun.promise, true, "Confirm must resolve true");
  assert.strictEqual(confirmRun.body.children.length, 0, "Confirm must remove the confirmation overlay");

  // Escape and backdrop click both cancel.
  const escapeRun = runRevertDialog();
  escapeRun.documentListeners.keydown[0]({ key: "Escape" });
  assert.strictEqual(await escapeRun.promise, false, "Escape must cancel the revert");

  const outsideRun = runRevertDialog();
  outsideRun.backdrop.click(outsideRun.backdrop);
  assert.strictEqual(await outsideRun.promise, false, "Clicking the overlay must cancel the revert");

  console.log("modal stacking regression test passed");
})();
