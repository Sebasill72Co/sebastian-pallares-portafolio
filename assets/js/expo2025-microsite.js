/* PROJECT ATLAS — ExpoInmobiliaria 2025 */
/* Trayectoria: afiche por año */
(function () {
  "use strict";
  var box = document.querySelector("[data-years]");
  if (!box) return;
  var img = box.querySelector("[data-year-img]"), lab = box.querySelector("[data-year-label]"), copy = box.querySelector("[data-year-copy]");
  var tabs = Array.prototype.slice.call(box.querySelectorAll("[data-year]"));
  function pick(t, focus) {
    tabs.forEach(function (x) { var on = x === t; x.setAttribute("aria-selected", String(on)); x.tabIndex = on ? 0 : -1; });
    img.src = t.dataset.yearSrc; img.alt = "Afiche ExpoInmobiliaria " + t.dataset.year;
    lab.textContent = t.dataset.year; copy.textContent = t.dataset.yearCopy;
    if (focus) t.focus();
  }
  tabs.forEach(function (t, i) {
    t.addEventListener("click", function () { pick(t); });
    t.addEventListener("keydown", function (e) {
      var d = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
      if (d) { e.preventDefault(); pick(tabs[(i + d + tabs.length) % tabs.length], true); }
    });
  });
})();
(function () { var y = document.querySelector("[data-year]:not(button)"); if (y) y.textContent = new Date().getFullYear(); })();

/* Galerías de piezas (producción, aplicaciones): pestañas por grupo y visor */
(function () {
  "use strict";
  Array.prototype.forEach.call(document.querySelectorAll("[data-prod]"), function (root) {
    var tabs = Array.prototype.slice.call(root.querySelectorAll("[data-prod-tab]"));
    function select(tab, focus) {
      tabs.forEach(function (t) {
        var on = t === tab;
        t.setAttribute("aria-selected", String(on));
        t.tabIndex = on ? 0 : -1;
        document.getElementById(t.getAttribute("aria-controls")).hidden = !on;
      });
      if (focus) tab.focus();
    }
    tabs.forEach(function (t, i) {
      t.addEventListener("click", function () { select(t); });
      t.addEventListener("keydown", function (e) {
        var d = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
        if (d) { e.preventDefault(); select(tabs[(i + d + tabs.length) % tabs.length], true); }
      });
    });

    var dlg = root.querySelector("[data-prod-viewer]");
    if (!dlg || typeof dlg.showModal !== "function") return;
    var img = dlg.querySelector("[data-prod-image]");
    var cap = dlg.querySelector("[data-prod-caption]");
    var cnt = dlg.querySelector("[data-prod-count]");
    var list = [], cur = 0, opener = null;
    function show(i) {
      cur = (i + list.length) % list.length;
      var b = list[cur];
      img.src = b.dataset.src; img.width = +b.dataset.w; img.height = +b.dataset.h;
      img.alt = "Pieza: " + b.dataset.caption;
      cap.textContent = b.dataset.caption;
      cnt.textContent = (cur + 1) + " / " + list.length;
    }
    root.querySelectorAll(".ex-gal__grid button").forEach(function (b) {
      b.addEventListener("click", function () {
        list = Array.prototype.slice.call(b.parentNode.querySelectorAll("button"));
        opener = b; show(list.indexOf(b)); dlg.showModal();
      });
    });
    dlg.querySelector("[data-prod-prev]").addEventListener("click", function () { show(cur - 1); });
    dlg.querySelector("[data-prod-next]").addEventListener("click", function () { show(cur + 1); });
    dlg.querySelector("[data-prod-close]").addEventListener("click", function () { dlg.close(); });
    dlg.addEventListener("click", function (e) { if (e.target === dlg) dlg.close(); });
    dlg.addEventListener("keydown", function (e) {
      if (e.key === "ArrowRight") show(cur + 1);
      if (e.key === "ArrowLeft") show(cur - 1);
    });
    dlg.addEventListener("close", function () { if (opener) opener.focus(); });
  });
})();
