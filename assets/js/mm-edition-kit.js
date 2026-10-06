/* PROJECT ATLAS — Kit editorial de ediciones Maratón Medellín: recorrido oficial con altimetría.
   Los datos de cada edición viven en <script type="application/json" data-mmk-route-data> dentro de la sección.
   La altimetría se leyó de los perfiles impresos en los planos oficiales (valores aproximados). */
(function () {
  "use strict";
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  function fmt(n) { return String(n).replace(/\B(?=(\d{3})+(?!\d))/g, "."); }

  function init(root) {
    var src = root.querySelector("[data-mmk-route-data]");
    if (!src) return;
    var data;
    try { data = JSON.parse(src.textContent); } catch (e) { return; }
    var tabs = Array.prototype.slice.call(root.querySelectorAll("[data-mmk-tab]"));
    var f = {};
    Array.prototype.forEach.call(root.querySelectorAll("[data-mmk-field]"), function (n) { f[n.getAttribute("data-mmk-field")] = n; });
    var img = root.querySelector("[data-mmk-map]");
    var link = root.querySelector("[data-mmk-map-link]");
    var alt = root.querySelector("[data-mmk-alt]");
    var plot = root.querySelector("[data-mmk-plot]");
    var out = root.querySelector("[data-mmk-readout]");
    var empty = root.querySelector("[data-mmk-alt-empty]");
    var BARS = 72, bars = [];
    for (var i = 0; i < BARS; i++) { var b = document.createElement("i"); plot.appendChild(b); bars.push(b); }
    var cursor = document.createElement("b");
    plot.appendChild(cursor);
    var cur = null, elev = [];

    function at(t) {
      var x = t * (elev.length - 1), j = Math.floor(x), k = Math.min(j + 1, elev.length - 1);
      return elev[j] + (elev[k] - elev[j]) * (x - j);
    }
    function setFrac(t) {
      t = Math.max(0, Math.min(1, t));
      cursor.style.left = (t * 100).toFixed(2) + "%";
      out.textContent = "km " + (cur.km * t).toFixed(1).replace(".", ",") + " · " + fmt(Math.round(at(t))) + " m aprox.";
      var n = Math.round(t * BARS);
      bars.forEach(function (bar, idx) { bar.classList.toggle("is-run", idx < n); });
    }
    function select(id, focus) {
      var d = data.routes[id];
      if (!d) return;
      cur = d;
      tabs.forEach(function (t) {
        var on = t.getAttribute("data-mmk-tab") === id;
        t.setAttribute("aria-selected", String(on));
        t.tabIndex = on ? 0 : -1;
        if (on && focus) t.focus();
      });
      ["date", "mark", "name", "place", "via", "dist", "gain", "start", "hyd"].forEach(function (k) {
        if (!f[k]) return;
        var v = d[k];
        var row = f[k].closest("[data-mmk-row]");
        if (row) row.hidden = !v;
        f[k].textContent = v || "";
      });
      if (img) {
        img.classList.add("is-swapping");
        setTimeout(function () {
          img.src = d.map; img.alt = d.mapAlt;
          if (link) link.href = d.map;
          img.classList.remove("is-swapping");
        }, reduce ? 0 : 180);
      }
      if (d.e) {
        alt.hidden = false; if (empty) empty.hidden = true;
        elev = d.e.split(",").map(Number);
        var lo = data.scale[0], hi = data.scale[1];
        bars.forEach(function (bar, idx) {
          var s = 0;
          for (var z = 0; z < 4; z++) s += at(Math.min(1, (idx + (z + .5) / 4) / BARS));
          bar.style.setProperty("--h", (0.12 + 0.88 * Math.max(0, Math.min(1, (s / 4 - lo) / (hi - lo)))).toFixed(4));
        });
        f.axis.textContent = d.dist;
        plot.classList.add("is-idle");
        setFrac(0);
        out.textContent = "Desliza sobre el perfil";
      } else {
        alt.hidden = true; if (empty) { empty.hidden = false; }
      }
    }
    tabs.forEach(function (t, i) {
      t.addEventListener("click", function () { select(t.getAttribute("data-mmk-tab")); });
      t.addEventListener("keydown", function (e) {
        var n = e.key === "ArrowRight" ? tabs[(i + 1) % tabs.length] : e.key === "ArrowLeft" ? tabs[(i - 1 + tabs.length) % tabs.length] : null;
        if (n) { e.preventDefault(); select(n.getAttribute("data-mmk-tab"), true); }
      });
    });
    function scrub(e) { plot.classList.remove("is-idle"); var r = plot.getBoundingClientRect(); setFrac((e.clientX - r.left) / r.width); }
    plot.addEventListener("pointerdown", function (e) { plot.setPointerCapture(e.pointerId); scrub(e); });
    plot.addEventListener("pointermove", function (e) { if (e.buttons || e.pointerType === "mouse") scrub(e); });
    var frac = 0;
    plot.addEventListener("keydown", function (e) {
      var d = e.key === "ArrowRight" ? .02 : e.key === "ArrowLeft" ? -.02 : 0;
      if (!d) return;
      e.preventDefault();
      plot.classList.remove("is-idle");
      var l = parseFloat(cursor.style.left) / 100 || 0;
      frac = Math.max(0, Math.min(1, l + d));
      setFrac(frac);
    });
    select(tabs[0].getAttribute("data-mmk-tab"));
  }
  function boot() { document.querySelectorAll("[data-mmk-route]").forEach(init); }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot); else boot();
})();
