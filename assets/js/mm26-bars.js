/* PROJECT ATLAS — MM2026 · Barras en movimiento vertical
   Reconstruye los fondos oficiales de barras (banner-fondo-01/02/03) como columnas vivas:
   cada barra conserva el degradado muestreado del archivo oficial y se desplaza verticalmente.
   El WebP oficial queda debajo como respaldo (es lo que se ve con "reducir movimiento").
   Extras:
   - Composición modular (03): modos Ritmo / Gradiente / Continuidad (atributo data-focus del
     host) e interacción con el puntero: las barras cercanas al cursor se desplazan.
   - Distancias: perfil de altimetría oficial de cada recorrido (42K, 21K, 10K, 5K) construido con
     barras contiguas de la campaña; cada barra toma la altitud del tramo que cubre. */
(function () {
  "use strict";

  var PROFILES = {"01":{"ratio":2.3723,"cols":[{"w":11.863,"s":["#5836c7","#5c40cc","#5f4bd3","#6458da","#6866e2","#6e75ea","#7083ed","#6d8ce1","#6996d4","#669fc8","#62a8bb","#5fb1af","#5bbaa3","#58c397","#54cc8a","#54cf88","#53cf87","#54cf88","#53cf87","#54cf88","#53ce87"]},{"w":12.662,"s":["#4f18b6","#501db9","#5224bc","#552cc1","#5835c7","#5c3fcc","#5f4bd2","#6357d9","#6865e2","#6d75ea","#7083ed","#6d8ce1","#6995d5","#669ec8","#62a8bc","#60b1b0","#5cb9a4","#58c398","#54cc8b","#54cf88","#53ce87"]},{"w":12.662,"s":["#4b0db1","#4c0fb1","#4d12b3","#4e17b5","#501cb9","#5223bb","#542ac0","#5732c5","#5a3cca","#5e46d0","#6252d6","#665ede","#6b6ce5","#707bed","#6f86e9","#6c8fde","#6998d2","#65a0c6","#62a9ba","#5fb1af","#5cbaa4"]},{"w":12.662,"s":["#4a0bb0","#4b0db0","#4b0fb0","#4c11b2","#4d15b4","#4f19b6","#501eba","#5223bc","#542ac1","#5730c4","#5939c8","#5c41cd","#5f4bd2","#6255d8","#6660de","#6a6be5","#6f78eb","#7083ed","#6d8be3","#6a92d9","#6899d0"]},{"w":12.662,"s":["#4c10b2","#4d13b4","#4e17b5","#501cb8","#5221bb","#5428bf","#562ec2","#5836c7","#5b3fcc","#5e48d1","#6252d7","#655ddd","#6a69e4","#6e76ea","#7182ed","#6e8ae4","#6b92da","#6899d0","#65a1c5","#62a8bb","#60afb3"]},{"w":12.662,"s":["#5323bc","#542ac0","#5732c5","#5a3bca","#5e46cf","#6151d6","#655edd","#6a6be5","#6f7aed","#7086ea","#6c8edf","#6997d2","#66a0c7","#62a8bb","#5fb1b0","#5cbaa4","#59c299","#55cb8d","#54cf88","#54cf88","#53ce87"]},{"w":12.662,"s":["#6a69e4","#6e77eb","#7084eb","#6c8edf","#6997d3","#65a0c7","#62a9ba","#5fb2af","#5bbba2","#58c495","#54cd89","#53cf87","#53cf87","#54cf88","#53cf87","#54cf88","#54cf88","#53cf87","#54cf88","#53cf87","#54cf88"]},{"w":12.163,"s":["#5939c7","#5c41cd","#604cd3","#6357d9","#6764e1","#6c71e8","#717fef","#6e88e6","#6b91db","#6899d0","#65a1c5","#62a9b9","#5fb1ae","#5cbaa3","#58c298","#55cb8d","#54cf88","#54cf87","#53cf87","#53cf87","#54cf88"]}],"grain":".22"},"02":{"ratio":2.3723,"cols":[{"w":12.529,"s":["#6a2f4c","#742f4c","#82304f","#923152","#a43255","#b83459","#cf355d","#e03b67","#e4457a","#e64f8c","#e95a9f","#ec64b2","#ef6ec5","#f074ce","#f074ce","#f074ce","#f074ce","#f074ce","#f074ce","#f074ce","#f074ce"]},{"w":12.529,"s":["#562d46","#5b2d48","#612e49","#682e4a","#712f4c","#7c304e","#883050","#963152","#a53355","#b63458","#c9355c","#dc3760","#e13e6e","#e4477d","#e64f8d","#e9589d","#eb61ac","#ee69bb","#f072cb","#f074ce","#f074ce"]},{"w":12.529,"s":["#512c46","#532d47","#582d47","#5d2d48","#642e49","#6d2f4b","#762f4d","#82304f","#8f3151","#9e3254","#ae3357","#c0345a","#d3365d","#e03a67","#e34376","#e64c86","#e85495","#ea5da5","#ed66b5","#ef6ec4","#f174ce"]},{"w":12.662,"s":["#582d47","#5d2d48","#612d48","#672e4a","#6e2f4b","#76304d","#7e2f4e","#883050","#933152","#9f3254","#ab3356","#b83459","#c7355c","#d7365e","#e03a66","#e24172","#e4477e","#e64e89","#e85596","#ea5ba2","#ec62ad"]},{"w":12.529,"s":["#542d47","#572d46","#5b2d48","#602d49","#662e4a","#6d2f4b","#752f4d","#7e2f4e","#893150","#943152","#a13254","#ae3356","#bd345a","#cd365d","#dc3760","#e13d6b","#e34478","#e54b85","#e75292","#e9599f","#eb60ab"]},{"w":12.662,"s":["#642e49","#6a2f4b","#732f4c","#7d2f4e","#893050","#973253","#a63255","#b63358","#c8355c","#db375f","#e13e6c","#e3467b","#e64e8a","#e8569a","#eb5ea8","#ed67b7","#ef6fc6","#f074ce","#f074ce","#f074ce","#f074ce"]},{"w":12.529,"s":["#642e49","#6c2f4b","#762f4d","#82304f","#903151","#a03254","#b03357","#c3355b","#d8365e","#e13d6b","#e3467b","#e64f8b","#e9589b","#eb60ab","#ee69bb","#f073cc","#f074ce","#f074ce","#f074ce","#f174ce","#f073cd"]},{"w":12.029,"s":["#5a2d47","#602d49","#662e4a","#6e2f4b","#77304d","#82304f","#8d3151","#9a3253","#a93356","#b83459","#c9355c","#db375f","#e13d6b","#e34579","#e64d87","#e85496","#ea5ca3","#ec64b1","#ee6bc0","#f073cc","#f073ce"]}],"grain":".55"},"03":{"ratio":2.3723,"cols":[{"w":12.396,"s":["#4db77a","#57cd85","#78ce77","#9bcd68","#becc5a","#e0cc4a","#f7cb3e","#f7cb3d","#f7cb3d","#f7cb3e","#f7ca3d","#f7cb3d","#f7cb3d","#f7cb3d","#f7cb3d","#f7cb3e","#f7cb3d","#f7cb3d","#f7cb3d","#f7cb3d","#f7ca3d"]},{"w":12.396,"s":["#397050","#3c7b57","#40895f","#459b69","#4aae74","#51c381","#62ce81","#7fce75","#9dcd68","#b8cc5c","#d5cc4f","#efcb43","#f7cb3d","#f7cb3d","#f7cb3d","#f7cb3d","#f7cb3e","#f7cb3d","#f7cb3d","#f7cb3d","#f7ca3d"]},{"w":12.662,"s":["#3f835c","#429163","#47a36e","#4db87a","#56cd85","#71ce7b","#8ecd6e","#aacd62","#c7cc55","#e4cb49","#f7cb3e","#f7cb3d","#f7cb3d","#f7cb3d","#f7ca3d","#f7cb3d","#f7cb3d","#f8cb3e","#f7cb3d","#f7cb3d","#f8ca3d"]},{"w":12.396,"s":["#3e8059","#408a5f","#449666","#48a56f","#4db579","#52c683","#5fce82","#75ce79","#8ccd6f","#a3cd66","#b8cd5c","#cecc52","#e5cb49","#f5cb3f","#f7cb3d","#f7cb3e","#f7cb3d","#f7cb3d","#f7cb3d","#f7cb3d","#f7ca3d"]},{"w":12.529,"s":["#356046","#36654a","#386d4f","#3b7654","#3e825b","#428e62","#459d6a","#4aad74","#4fbf7e","#58ce85","#6fce7b","#87ce71","#9fcd67","#b6cd5d","#cecc52","#e6cc48","#f6cb3f","#f7cb3d","#f7cb3e","#f7cb3d","#f8cb3e"]},{"w":12.396,"s":["#315640","#335a44","#346047","#37684c","#3a7352","#3e805a","#429063","#47a26d","#4eb87a","#56cd85","#72ce7a","#90cd6d","#adcd61","#cbcc54","#e8cb47","#f7cb3e","#f7cb3e","#f7cb3d","#f7cb3d","#f7cb3d","#f8cb3e"]},{"w":12.529,"s":["#386a4e","#3a7453","#3e815b","#429264","#48a56f","#4eba7c","#59ce84","#75ce79","#94cd6c","#b1cd5f","#cfcc52","#eccb45","#f7cb3d","#f7cb3d","#f7ca3d","#f7cb3d","#f7cb3d","#f7cb3d","#f7cb3d","#f7cb3d","#f8cb3e"]},{"w":12.696,"s":["#315641","#325943","#345d46","#356349","#386b4e","#3b7654","#3e815b","#428f63","#46a06c","#4cb277","#51c582","#62cf81","#7cce76","#97cd6a","#b0cd5f","#cacc55","#e4cb49","#f6cb3f","#f7cb3d","#f7cb3d","#f8cb3e"]}],"grain":".55"}};
  var PAD = 30;
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function seeded(n) { var x = Math.sin(n * 91.7 + 13.1) * 43758.5453; return x - Math.floor(x); }

  function gradient(stops) {
    var total = 100 + PAD * 2, start = PAD / total * 100, span = 100 / total * 100;
    var parts = [stops[0] + " 0%", stops[0] + " " + start.toFixed(2) + "%"];
    stops.forEach(function (c, i) { parts.push(c + " " + (start + span * i / (stops.length - 1)).toFixed(2) + "%"); });
    parts.push(stops[stops.length - 1] + " 100%");
    return "linear-gradient(180deg," + parts.join(",") + ")";
  }

  function build(host) {
    var key = host.getAttribute("data-mm26-bars");
    var profile = PROFILES[key];
    if (!profile || host.querySelector(".mm26-bars")) return;
    var seed = Number(key) * 11;

    var layer = document.createElement("div");
    layer.className = "mm26-bars";
    layer.setAttribute("aria-hidden", "true");
    var stage = document.createElement("div");
    stage.className = "mm26-bars__stage";
    layer.appendChild(stage);

    var strips = [];
    var n = profile.cols.length;
    profile.cols.forEach(function (col, i) {
      var r1 = seeded(i + seed), r2 = seeded(i * 3.3 + seed + 1);
      var bar = document.createElement("span");
      bar.className = "mm26-bars__col";
      bar.style.flexBasis = col.w + "%";
      var strip = document.createElement("i");
      strip.style.backgroundImage = gradient(col.s);
      strip.style.setProperty("--amp", (4 + r1 * 7).toFixed(2) + "%");
      strip.style.setProperty("--dur", (6.5 + r2 * 6).toFixed(2) + "s");
      strip.style.setProperty("--delay", (-r1 * 12).toFixed(2) + "s");
      strip.style.setProperty("--i", i);
      strip.style.setProperty("--n", n);
      strip.style.animationDirection = i % 2 ? "alternate-reverse" : "alternate";
      bar.appendChild(strip);
      stage.appendChild(bar);
      strips.push(strip);
    });

    var grain = document.createElement("b");
    grain.className = "mm26-bars__grain";
    grain.style.setProperty("--grain", profile.grain);
    stage.appendChild(grain);

    host.classList.add("has-mm26-bars");
    host.insertBefore(layer, host.firstChild);

    var posY = parseFloat(host.getAttribute("data-mm26-bars-y") || "50") / 100;
    function fit() {
      var w = layer.clientWidth, h = layer.clientHeight;
      if (!w || !h) return;
      var sw = Math.max(w, h * profile.ratio), sh = Math.max(h, w / profile.ratio);
      stage.style.width = sw + "px";
      stage.style.height = sh + "px";
      stage.style.left = (w - sw) / 2 + "px";
      stage.style.top = (h - sh) * posY + "px";
    }
    fit();
    if ("ResizeObserver" in window) new ResizeObserver(fit).observe(layer);
    else window.addEventListener("resize", fit, { passive: true });

    if ("IntersectionObserver" in window) {
      new IntersectionObserver(function (entries) {
        entries.forEach(function (e) { layer.classList.toggle("is-paused", !e.isIntersecting); });
      }).observe(layer);
    }

    /* Modos de la composición modular (sincronizados con data-focus del host) */
    if (host.hasAttribute("data-focus")) {
      var setMode = function () {
        layer.classList.remove("mode-ritmo", "mode-gradiente", "mode-continuidad");
        layer.classList.add("mode-" + (host.getAttribute("data-focus") || "ritmo"));
      };
      setMode();
      new MutationObserver(setMode).observe(host, { attributes: true, attributeFilter: ["data-focus"] });
    }

    /* Interacción: las barras cercanas al puntero se desplazan verticalmente */
    if (host.hasAttribute("data-mm26-bars-interactive") && !reduce) {
      var raf = 0, target = null;
      var apply = function () {
        raf = 0;
        var rect = stage.getBoundingClientRect();
        strips.forEach(function (s) {
          if (!target) { s.style.translate = "0 0"; return; }
          var r = s.parentNode.getBoundingClientRect();
          var cx = (r.left + r.width / 2 - target.x) / rect.width;
          var influence = Math.exp(-Math.pow(cx * 6, 2));
          var dy = (target.y - rect.top) / rect.height - 0.5;
          s.style.translate = "0 " + (-dy * 38 * influence).toFixed(1) + "%";
        });
      };
      host.addEventListener("pointermove", function (e) {
        target = { x: e.clientX, y: e.clientY };
        if (!raf) raf = requestAnimationFrame(apply);
      });
      host.addEventListener("pointerleave", function () {
        target = null;
        if (!raf) raf = requestAnimationFrame(apply);
      });
    }
  }

  /* Distancias: altimetría oficial reconstruida con las barras de la campaña.
     Fuente: perfiles de altimetría de maratonmedellin.com/pages/recorridos-interactivos-2026
     (remuestreados a 96 puntos equidistantes, metros sobre el nivel del mar). */
  var ALT = {
    "42k": { km: "42,195", gain: 185, hi: 1597, lo: 1464, p: "01", e: "1470,1471,1477,1482,1486,1493,1505,1516,1524,1527,1527,1531,1530,1527,1526,1523,1516,1513,1510,1503,1500,1498,1498,1500,1491,1486,1484,1480,1478,1481,1484,1485,1487,1488,1488,1488,1488,1486,1484,1482,1484,1488,1491,1494,1497,1501,1504,1509,1513,1520,1524,1526,1528,1531,1534,1541,1545,1549,1555,1566,1568,1573,1581,1587,1592,1591,1587,1579,1571,1567,1562,1553,1548,1544,1537,1533,1530,1527,1524,1523,1519,1514,1507,1502,1500,1497,1495,1488,1484,1481,1478,1477,1476,1475,1471,1466" },
    "21k": { km: "21,0975", gain: 85, hi: 1532, lo: 1465, p: "03", e: "1470,1470,1471,1472,1473,1474,1476,1477,1478,1485,1489,1491,1497,1502,1506,1515,1519,1526,1527,1527,1528,1527,1526,1530,1530,1530,1528,1526,1526,1526,1526,1524,1521,1517,1516,1514,1513,1512,1507,1505,1503,1502,1501,1500,1499,1498,1499,1499,1497,1490,1488,1486,1485,1484,1483,1480,1479,1483,1485,1486,1488,1489,1491,1492,1493,1495,1498,1500,1501,1502,1501,1498,1495,1495,1494,1493,1493,1492,1491,1490,1489,1488,1487,1485,1482,1478,1476,1476,1475,1475,1474,1474,1473,1471,1467,1466" },
    "10k": { km: "10", gain: 21, hi: 1501, lo: 1462, p: "02", e: "1475,1475,1475,1477,1478,1479,1478,1478,1477,1477,1477,1478,1482,1483,1484,1484,1484,1485,1485,1485,1486,1486,1486,1487,1487,1487,1488,1488,1488,1489,1490,1490,1491,1492,1493,1493,1494,1494,1495,1495,1495,1496,1498,1498,1497,1496,1495,1494,1494,1493,1493,1492,1492,1491,1490,1489,1489,1488,1488,1487,1487,1487,1487,1487,1486,1486,1486,1486,1486,1486,1485,1485,1485,1485,1484,1481,1478,1476,1475,1475,1475,1475,1475,1474,1474,1474,1474,1474,1473,1471,1471,1470,1468,1466,1465,1464" },
    "5k":  { km: "5", gain: 51, hi: 1485, lo: 1463, p: "01", e: "1464,1463,1464,1468,1472,1473,1475,1475,1475,1475,1475,1474,1474,1474,1474,1474,1475,1475,1475,1477,1478,1479,1480,1480,1479,1477,1476,1477,1477,1477,1478,1478,1478,1477,1478,1477,1477,1478,1480,1478,1477,1476,1478,1479,1481,1482,1483,1484,1485,1484,1483,1483,1482,1481,1480,1479,1478,1477,1478,1480,1479,1478,1477,1478,1477,1477,1477,1476,1476,1477,1479,1480,1481,1480,1480,1480,1480,1480,1479,1478,1479,1478,1476,1475,1473,1470,1470,1471,1473,1472,1470,1468,1465,1464,1464,1465" }
  };
  /* Escala vertical común a las cuatro distancias para no exagerar las pendientes. */
  var FLOOR = 1450, CEIL = 1600, BASE = 0.1;
  var BARS = 48;

  function fmt(n) { return String(n).replace(/\B(?=(\d{3})+(?!\d))/g, "."); }

  function buildDistance(system) {
    var stage = system.querySelector(".distance-system__stage");
    if (!stage || stage.querySelector(".mm26-alt")) return;
    var wrap = document.createElement("div");
    wrap.className = "mm26-alt";
    wrap.setAttribute("aria-hidden", "true");
    var head = document.createElement("div");
    head.className = "mm26-alt__head";
    head.innerHTML = "<span class=\"mm26-alt__title\">Altimetría oficial</span><em></em>";
    var plot = document.createElement("div");
    plot.className = "mm26-alt__plot";
    var axis = document.createElement("div");
    axis.className = "mm26-alt__axis";
    axis.innerHTML = "<span>0 km</span><span></span>";
    var readout = document.createElement("span");
    readout.className = "mm26-alt__readout";
    var line = document.createElement("i");
    line.className = "mm26-alt__cursor";
    plot.appendChild(line);
    plot.appendChild(readout);

    var bars = [];
    for (var i = 0; i < BARS; i++) {
      var b = document.createElement("span");
      b.className = "mm26-alt__bar";
      b.style.setProperty("--i", i);
      var fill = document.createElement("i");
      b.appendChild(fill);
      plot.appendChild(b);
      bars.push(b);
    }
    wrap.appendChild(head);
    wrap.appendChild(plot);
    wrap.appendChild(axis);
    stage.appendChild(wrap);

    var cur = null, elev = [];
    function at(f) {
      var x = f * (elev.length - 1), j = Math.floor(x), t = x - j;
      return elev[j] + ((elev[Math.min(j + 1, elev.length - 1)] - elev[j]) * t);
    }
    function update(id) {
      var d = ALT[id] || ALT["42k"];
      if (cur === d) return;
      cur = d;
      elev = d.e.split(",").map(Number);
      var profile = PROFILES[d.p] || PROFILES["01"];
      var cols = profile.cols, wsum = 0, widths = [];
      for (var k = 0; k < BARS; k++) { widths.push(cols[k % cols.length].w); wsum += widths[k]; }
      var x0 = 0;
      bars.forEach(function (b, k) {
        var w = widths[k] / wsum;
        /* altura = promedio de la altimetría dentro del ancho de la barra */
        var s = 0, n = 6;
        for (var q = 0; q < n; q++) s += at(Math.min(1, x0 + w * (q + 0.5) / n));
        var e = s / n;
        var h = BASE + (1 - BASE) * Math.max(0, Math.min(1, (e - FLOOR) / (CEIL - FLOOR)));
        b.style.flexBasis = (w * 100).toFixed(3) + "%";
        b.style.setProperty("--h", h.toFixed(4));
        b.firstChild.style.backgroundImage = gradient(cols[k % cols.length].s);
        x0 += w;
      });
      head.lastChild.textContent = fmt(d.lo) + "–" + fmt(d.hi) + " m · desnivel +" + d.gain + " m";
      axis.lastChild.textContent = d.km + " km";
      wrap.classList.remove("is-switching");
      void wrap.offsetWidth;
      wrap.classList.add("is-switching");
    }

    /* Lectura con el puntero: kilómetro y altitud aproximados */
    if (!reduce) {
      stage.addEventListener("pointermove", function (e) {
        var r = plot.getBoundingClientRect();
        if (e.clientY < r.top - 24 || e.clientX < r.left || e.clientX > r.right) { wrap.classList.remove("is-reading"); return; }
        var f = (e.clientX - r.left) / r.width;
        var km = parseFloat(cur.km.replace(",", ".")) * f;
        line.style.left = (f * 100).toFixed(2) + "%";
        readout.style.left = (f * 100).toFixed(2) + "%";
        readout.textContent = "km " + km.toFixed(1).replace(".", ",") + " · " + fmt(Math.round(at(f))) + " m";
        wrap.classList.add("is-reading");
      });
      stage.addEventListener("pointerleave", function () { wrap.classList.remove("is-reading"); });
    }

    var current = system.querySelector('[data-distance-id][aria-pressed="true"]');
    update(current ? current.dataset.distanceId : "42k");
    system.querySelectorAll("[data-distance-id]").forEach(function (btn) {
      ["click", "focus", "pointerenter"].forEach(function (ev) {
        btn.addEventListener(ev, function () { update(btn.dataset.distanceId); });
      });
    });
  }

  window.MM26Bars = { ALT: ALT, PROFILES: PROFILES, gradient: gradient, fmt: fmt };

  function init() {
    document.querySelectorAll("[data-mm26-bars]").forEach(build);
    document.querySelectorAll("[data-distance-system]").forEach(buildDistance);
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
