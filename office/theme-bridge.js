/* Puts the workspace theme on an office app's page (theme-bridge.css maps the theme's tokens onto the suite's).
 *
 * A classic script, run in <head> before the first paint, so it needs nothing loaded first. The site's desktop and
 * every app share one origin, so the theme the desktop wears is in localStorage under the key the workspace's own
 * page kit uses (system/libs/workspace_ui/src/themes/themeBoot.ts). Framed by the desktop, the page follows the
 * desktop's <html data-ui-theme> live; opened on its own, it follows the stored theme across tabs. The theme bundles
 * sit at <site base>_static/themes/<id>/theme.css, and this script lives at <site base>office/theme-bridge.js, which
 * is how it finds the base on any host. */
(function () {
  var KEY = "workspace-theme";
  var ATTR = "data-ui-theme";
  var REV_ATTR = "data-ui-theme-revision";
  var LINK_ATTR = "data-workspace-theme";
  var ID = /^[a-z0-9][a-z0-9-]{0,47}$/;
  var script = document.currentScript;
  var base = script ? script.src.replace(/office\/theme-bridge\.js(\?.*)?$/, "") : "/";
  var root = document.documentElement;

  function wear(id, revision) {
    if (typeof id !== "string" || !ID.test(id)) id = "standard";
    revision = typeof revision === "string" ? revision : "";
    if (root.getAttribute(ATTR) === id && root.getAttribute(REV_ATTR) === revision) return;
    root.setAttribute(ATTR, id);
    root.setAttribute(REV_ATTR, revision);
    var old = document.head.querySelectorAll("link[" + LINK_ATTR + "]");
    if (id === "standard") {
      for (var i = 0; i < old.length; i++) old[i].remove();
      return;
    }
    var link = document.createElement("link");
    link.rel = "stylesheet";
    link.setAttribute(LINK_ATTR, id);
    link.href = base + "_static/themes/" + encodeURIComponent(id) + "/theme.css" + (revision ? "?v=" + encodeURIComponent(revision) : "");
    // The old bundle stays until the new one has loaded, so a switch never shows the page unstyled.
    link.onload = function () {
      for (var j = 0; j < old.length; j++) old[j].remove();
    };
    link.onerror = function () {
      link.remove();
    };
    document.head.appendChild(link);
  }

  function readStored() {
    try {
      var stored = JSON.parse(window.localStorage.getItem(KEY) || "null");
      return stored && typeof stored === "object" ? stored : {};
    } catch (error) {
      return {};
    }
  }

  function parentRoot() {
    if (window.parent === window) return null;
    try {
      return window.parent.document.documentElement;
    } catch (error) {
      return null;
    }
  }

  // The suite's controls marked as the theme contract's parts (docs/system/themeable-apps.md), so a theme dresses them
  // as it dresses the workspace's own: its buttons, fields, selects, menus and dialogs. Only the suite's chrome is
  // marked; what is drawn inside a document (a sheet's cells, a deck's thumbnails, a calendar's days) keeps its own
  // look and takes the theme through the tokens alone (theme-bridge.css).
  var CHROME = "header, to-bar, dialog, .to-menu, .to-context";
  var PARTS = [
    [".to-btn, .to-icon-btn, .calc-key", { "data-part": "button" }],
    [".to-btn.primary, .calc-key.eq", { "data-variant": "primary" }],
    [".to-tool, .to-icon-btn", { "data-shape": "icon" }],
    [".to-menu, .to-listbox, .to-complete, .to-context, .to-link-pop", { "data-part": "menu" }],
    [".to-menu-item, .to-option, .to-menu-act", { "data-part": "menu-item" }],
    [".to-context-sep, .to-menu [role='separator']", { "data-part": "menu-separator" }],
    [".to-dialog-inner, dialog.to-doc-dialog, dialog.to-drawer", { "data-part": "dialog" }],
    [".to-dialog-head, .to-doc-dialog-head, .to-drawer-head", { "data-part": "dialog-header" }],
    [".to-dialog-head h2, .to-doc-dialog-head h2", { "data-part": "dialog-title" }],
    [".to-app-open", { "data-part": "list-row" }],
    [
      "input.to-title, input.to-find, input.to-search, input.to-find-input, input.to-icons-search, .to-field input, .to-field textarea",
      { "data-part": "field" },
    ],
  ];
  var FIELD_TYPES = /^(text|search|url|email|password|number|tel|date|time|datetime-local|month|week)$/;

  function tagOne(el) {
    for (var i = 0; i < PARTS.length; i++) {
      if (!el.matches(PARTS[i][0])) continue;
      var attrs = PARTS[i][1];
      for (var name in attrs) if (el.getAttribute(name) !== attrs[name]) el.setAttribute(name, attrs[name]);
    }
    if (el.hasAttribute("data-part")) return;
    var tag = el.tagName;
    if (tag === "SELECT" && el.closest(CHROME)) el.setAttribute("data-part", "select");
    else if ((tag === "TEXTAREA" || (tag === "INPUT" && FIELD_TYPES.test(el.type))) && el.closest(CHROME)) el.setAttribute("data-part", "field");
  }

  var ANY = "button, input, select, textarea, dialog, h2, [role='separator'], " + PARTS.map(function (p) { return p[0]; }).join(", ");

  function tagTree(node) {
    if (node.nodeType !== 1) return;
    if (node.matches(ANY)) tagOne(node);
    var found = node.querySelectorAll(ANY);
    for (var i = 0; i < found.length; i++) tagOne(found[i]);
  }

  function tagPage() {
    tagTree(document.body);
    new MutationObserver(function (records) {
      for (var i = 0; i < records.length; i++) {
        var record = records[i];
        if (record.type === "attributes") tagOne(record.target);
        else for (var j = 0; j < record.addedNodes.length; j++) tagTree(record.addedNodes[j]);
      }
    }).observe(document.body, { childList: true, subtree: true, attributes: true, attributeFilter: ["class"] });
    // A theme lights the menu row under the pointer, or the one marked highlighted; the suite moves the focus with the
    // arrow keys, so the focused row is the highlighted one.
    document.addEventListener("focusin", function (event) {
      var row = event.target.closest && event.target.closest("[data-part='menu-item']");
      if (row) row.setAttribute("data-highlighted", "true");
    });
    document.addEventListener("focusout", function (event) {
      var row = event.target.closest && event.target.closest("[data-part='menu-item']");
      if (row) row.removeAttribute("data-highlighted");
    });
  }

  if (document.body) tagPage();
  else document.addEventListener("DOMContentLoaded", tagPage);

  var parent = parentRoot();
  if (parent !== null && parent.hasAttribute("data-public-desktop")) {
    var follow = function () {
      wear(parent.getAttribute(ATTR) || "standard", parent.getAttribute(REV_ATTR) || "");
    };
    follow();
    new MutationObserver(follow).observe(parent, { attributes: true, attributeFilter: [ATTR, REV_ATTR] });
  } else {
    var stored = readStored();
    wear(stored.id, stored.revision);
    window.addEventListener("storage", function (event) {
      if (event.key !== KEY) return;
      var next = readStored();
      wear(next.id, next.revision);
    });
  }
})();
