/* PROJECT ATLAS — MM2026 · Recorrido oficial
   Trazado, kilómetros, hidratación, asistencia médica y altimetría de las cuatro distancias.
   Fuente: recorridos interactivos oficiales 2026 (maratonmedellin.com/pages/recorridos-interactivos-2026).
   Coordenadas proyectadas a decámetros (x = este, y = norte) y trazado simplificado (~13 m de tolerancia).
   La altimetría se toma de window.MM26Bars (mm26-bars.js). */
(function () {
  "use strict";

  var ROUTES = {
    "42k": {
      mark: "42K", name: "Maratón", date: "Domingo 6 de septiembre · 2026",
      place: "Salida: Parque de las Luces · Meta: Edificio EPM", km: 42.195, every: 5,
      l: "563,1032,470,1063,311,1082,268,1083,242,1089,239,1073,235,1013,237,1006,235,1001,232,962,235,956,232,952,231,941,241,921,242,878,245,872,243,866,245,829,271,803,276,738,320,651,325,649,329,653,363,822,360,876,511,880,542,872,544,869,545,866,543,844,538,845,539,861,503,606,534,827,538,845,543,844,543,825,515,543,510,515,504,498,491,474,496,472,497,469,491,460,484,425,463,377,417,331,367,260,353,239,352,234,238,120,229,110,225,103,211,95,121,34,0,0,121,34,211,95,225,103,229,110,238,120,347,231,351,232,353,239,367,260,417,331,460,374,466,383,484,425,491,460,497,467,496,476,508,506,514,528,547,864,548,880,544,904,589,1021,547,1035,537,1034,531,1040,520,1044,515,1029",
      k: "468,1064,369,1075,270,1083,236,1019,240,925,246,828,275,740,320,651,347,739,362,833,415,877,515,880,536,841,522,742,509,644,511,666,525,764,542,831,533,733,523,634,514,535,488,447,445,359,383,282,322,205,252,134,177,72,90,25,6,2,103,29,188,79,262,144,332,215,390,293,455,368,491,459,517,553,526,652,536,751,546,849,560,945,572,1027",
      h: "244,851,503,879,512,668,506,507,418,332,2,0,523,614,545,908,394,1073,238,1041,314,666,384,876,521,727,530,711,426,340,284,166,100,27,504,494,544,820,573,981",
      m: "355,780,519,600,116,32,548,874,531,691,429,343,519,599,355,779,115,31,548,873",
      s: "563,1032", f: "515,1029"
    },
    "21k": {
      mark: "21K", name: "Media Maratón", date: "Domingo 6 de septiembre · 2026",
      place: "Salida: Parque de las Luces · Meta: Edificio EPM", km: 21.0975, every: 5,
      l: "560,1033,475,1062,450,1066,450,1084,413,1089,410,1071,305,1083,268,1083,242,1089,239,1073,235,1013,237,1006,235,1001,232,962,235,956,232,952,231,941,241,921,242,878,245,872,243,866,245,829,271,803,276,738,320,651,325,649,329,653,362,820,360,876,511,880,542,872,544,869,546,861,517,559,547,864,548,880,543,906,588,1021,547,1035,537,1034,532,1039,522,1043,517,1029",
      k: "465,1064,401,1072,302,1083,238,1051,234,954,243,860,272,771,305,680,340,708,359,805,388,876,488,879,543,828,533,729,523,631,520,585,530,684,539,783,548,882,570,976",
      h: "244,851,503,879,523,614,545,908,394,1073,238,1041,314,666,384,876,530,711,544,820,573,981",
      m: "355,780,519,600,548,874,531,691,519,599,355,779,548,873",
      s: "560,1033", f: "517,1029"
    },
    "10k": {
      mark: "10K", name: "Diez kilómetros", date: "Domingo 6 de septiembre · 2026",
      place: "Salida: Parques del Río · Meta: Edificio EPM", km: 10, every: 1,
      l: "511,999,518,980,525,975,529,970,536,969,540,963,536,957,532,941,540,913,543,896,496,556,541,879,543,896,540,913,580,1025,547,1035,537,1034,532,1039,522,1043,517,1029",
      k: "539,917,533,819,519,721,505,622,501,588,514,686,528,785,542,883,563,978",
      h: "529,784,521,727,545,927",
      m: "",
      s: "511,999", f: "517,1029"
    },
    "5k": {
      mark: "5K", name: "La antesala", date: "Sábado 5 de septiembre · 2026",
      place: "Salida y meta: Edificio EPM", km: 5, every: 1,
      l: "516,1030,518,1038,501,1043,498,1042,497,1038,517,981,540,962,536,955,532,941,543,905,547,878,542,818,548,878,544,907,561,952,541,961,537,968,534,970,537,1018,535,1032,520,1038,517,1029",
      k: "520,978,544,896,545,838,554,935",
      h: "545,833",
      m: "",
      s: "516,1030", f: "517,1029"
    }
  };
  var COLORS = {
    "42k": { a: "#54CF88", b: "#7281F1", bg: "#2a0a6b" },
    "21k": { a: "#F5F694", b: "#54CF88", bg: "#18301f" },
    "10k": { a: "#FFCB3E", b: "#DF3760", bg: "#3e1219" },
    "5k":  { a: "#98FFC3", b: "#7281F1", bg: "#2a0a6b" }
  };
  var YMAX = 1089;
  var NS = "http://www.w3.org/2000/svg";
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function pairs(str) {
    if (!str) return [];
    var n = str.split(",").map(Number), out = [];
    for (var i = 0; i < n.length; i += 2) out.push([n[i], YMAX - n[i + 1]]);
    return out;
  }
  function el(tag, attrs, parent) {
    var e = document.createElementNS(NS, tag);
    for (var k in attrs) e.setAttribute(k, attrs[k]);
    if (parent) parent.appendChild(e);
    return e;
  }
  function kmText(km) { return String(km).replace(".", ","); }

  function init(root) {
    var B = window.MM26Bars;
    if (!B) return;
    var svg = root.querySelector("[data-route-map]");
    var plot = root.querySelector("[data-route-alt]");
    var readout = root.querySelector("[data-route-readout]");
    var playBtn = root.querySelector("[data-route-play]");
    var buttons = Array.prototype.slice.call(root.querySelectorAll("[data-route-id]"));
    var fields = {};
    Array.prototype.forEach.call(root.querySelectorAll("[data-route-field]"), function (n) { fields[n.getAttribute("data-route-field")] = n; });

    var defs = el("defs", {}, svg);
    var grad = el("linearGradient", { id: "mm26-route-grad", x1: "0", y1: "0", x2: "0", y2: "1" }, defs);
    var stopA = el("stop", { offset: "0" }, grad), stopB = el("stop", { offset: "1" }, grad);
    var gGrid = el("g", { "class": "route-map__grid" }, svg);
    var ghost = el("path", { "class": "route-map__ghost" }, svg);
    var under = el("path", { "class": "route-map__under" }, svg);
    var path = el("path", { "class": "route-map__line", stroke: "url(#mm26-route-grad)", pathLength: "1" }, svg);
    var gMarks = el("g", {}, svg);
    var runner = el("g", { "class": "route-map__runner" }, svg);
    var halo = el("circle", { "class": "route-map__halo" }, runner);
    var dot = el("circle", { "class": "route-map__dot" }, runner);
    ghost.setAttribute("d", "M" + pairs(ROUTES["42k"].l).join("L"));

    /* Altimetría como barra de avance */
    var BARS = 72, bars = [];
    for (var i = 0; i < BARS; i++) {
      var b = document.createElement("span");
      b.className = "route-alt__bar";
      b.style.setProperty("--i", i);
      b.appendChild(document.createElement("i"));
      plot.appendChild(b);
      bars.push(b);
    }
    var cursor = document.createElement("i");
    cursor.className = "route-alt__cursor";
    plot.appendChild(cursor);

    var cur, curId, total = 0, elev = [], frac = 0, playing = false, raf = 0, last = 0;

    function at(f) {
      var x = f * (elev.length - 1), j = Math.floor(x), t = x - j;
      return elev[j] + ((elev[Math.min(j + 1, elev.length - 1)] - elev[j]) * t);
    }

    function setFrac(f) {
      frac = Math.max(0, Math.min(1, f));
      var p = path.getPointAtLength(total * frac);
      runner.setAttribute("transform", "translate(" + p.x.toFixed(1) + " " + p.y.toFixed(1) + ")");
      cursor.style.left = (frac * 100).toFixed(2) + "%";
      var km = cur.km * frac;
      readout.textContent = "km " + km.toFixed(1).replace(".", ",") + " · " + B.fmt(Math.round(at(frac))) + " m";
      var n = Math.round(frac * BARS);
      bars.forEach(function (bar, idx) { bar.classList.toggle("is-run", idx < n); });
    }

    function select(id) {
      if (id === curId) return;
      curId = id;
      cur = ROUTES[id];
      var alt = B.ALT[id], col = COLORS[id];
      root.style.setProperty("--route-a", col.a);
      root.style.setProperty("--route-b", col.b);
      root.style.setProperty("--route-bg", col.bg);
      stopA.setAttribute("stop-color", col.a);
      stopB.setAttribute("stop-color", col.b);
      buttons.forEach(function (btn) { btn.setAttribute("aria-pressed", String(btn.dataset.routeId === id)); });

      fields.mark.textContent = cur.mark;
      fields.name.textContent = cur.name;
      fields.date.textContent = cur.date;
      fields.place.textContent = cur.place;
      fields.km.textContent = kmText(alt.km) + " km";
      fields.gain.textContent = "+" + alt.gain + " m";
      fields.hi.textContent = B.fmt(alt.hi) + " m";
      fields.lo.textContent = B.fmt(alt.lo) + " m";
      var nh = pairs(cur.h).length;
      fields.hyd.textContent = nh + (nh === 1 ? " punto" : " puntos");

      /* Encuadre del mapa según la distancia */
      var pts = pairs(cur.l);
      var xs = pts.map(function (p) { return p[0]; }), ys = pts.map(function (p) { return p[1]; });
      var minX = Math.min.apply(null, xs), maxX = Math.max.apply(null, xs);
      var minY = Math.min.apply(null, ys), maxY = Math.max.apply(null, ys);
      var w = maxX - minX, h = maxY - minY;
      var box = svg.getBoundingClientRect(), ratio = box.width && box.height ? box.width / box.height : 0.62;
      var pad = Math.max(w, h) * 0.08 + 14;
      var vw = w + pad * 2, vh = h + pad * 2;
      if (vw / vh < ratio) vw = vh * ratio; else vh = vw / ratio;
      var cx = (minX + maxX) / 2, cy = (minY + maxY) / 2;
      svg.setAttribute("viewBox", [(cx - vw / 2).toFixed(1), (cy - vh / 2).toFixed(1), vw.toFixed(1), vh.toFixed(1)].join(" "));
      var u = vh / 640; /* unidad: 1 px aproximado en pantalla */
      root.style.setProperty("--route-u", u);

      /* Retícula de referencia (500 m) */
      gGrid.innerHTML = "";
      var step = 50;
      for (var gx = Math.floor((cx - vw / 2) / step) * step; gx < cx + vw / 2; gx += step) el("line", { x1: gx, x2: gx, y1: cy - vh / 2, y2: cy + vh / 2 }, gGrid);
      for (var gy = Math.floor((cy - vh / 2) / step) * step; gy < cy + vh / 2; gy += step) el("line", { y1: gy, y2: gy, x1: cx - vw / 2, x2: cx + vw / 2 }, gGrid);

      var d = "M" + pts.join("L");
      path.setAttribute("d", d);
      under.setAttribute("d", d);
      total = path.getTotalLength();
      path.style.strokeDasharray = "1 1";
      if (!reduce) {
        path.style.transition = "none";
        path.style.strokeDashoffset = 1;
        void path.getBoundingClientRect();
        path.style.transition = "";
      }
      path.style.strokeDashoffset = 0;

      /* Marcadores */
      gMarks.innerHTML = "";
      pairs(cur.m).forEach(function (p) {
        var g = el("g", { "class": "route-map__med", transform: "translate(" + p[0] + " " + p[1] + ")" }, gMarks);
        el("path", { d: "M-1 -4h2v3h3v2h-3v3h-2v-3h-3v-2h3z", transform: "scale(" + (u * 1.6).toFixed(3) + ")" }, g);
      });
      pairs(cur.h).forEach(function (p) {
        el("circle", { "class": "route-map__hyd", cx: p[0], cy: p[1], r: (u * 4.5).toFixed(2) }, gMarks);
      });
      pairs(cur.k).forEach(function (p, idx) {
        var n = idx + 1;
        var major = n % cur.every === 0;
        el("circle", { "class": "route-map__km" + (major ? " is-major" : ""), cx: p[0], cy: p[1], r: (u * (major ? 11 : 3)).toFixed(2) }, gMarks);
        if (major) {
          var t = el("text", { x: p[0], y: p[1], "font-size": (u * 11).toFixed(2), dy: (u * 3.9).toFixed(2) }, gMarks);
          t.textContent = n;
        }
      });
      [["s", "S"], ["f", "M"]].forEach(function (pair, idx) {
        var p = pairs(cur[pair[0]])[0];
        var g = el("g", { "class": "route-map__end route-map__end--" + pair[0], transform: "translate(" + (p[0] + (idx ? -1 : 1) * u * 14) + " " + p[1] + ")" }, gMarks);
        el("rect", { x: -u * 11, y: -u * 11, width: u * 22, height: u * 22, rx: u * 5 }, g);
        var t = el("text", { "font-size": (u * 11).toFixed(2), dy: (u * 3.8).toFixed(2) }, g);
        t.textContent = pair[1];
      });
      path.setAttribute("stroke-width", (u * 4.5).toFixed(2));
      under.setAttribute("stroke-width", (u * 9).toFixed(2));
      halo.setAttribute("r", (u * 16).toFixed(2));
      dot.setAttribute("r", (u * 6).toFixed(2));

      /* Altimetría con las barras oficiales */
      elev = alt.e.split(",").map(Number);
      var profile = B.PROFILES[alt.p] || B.PROFILES["01"];
      var cols = profile.cols, wsum = 0, widths = [];
      for (var q = 0; q < BARS; q++) { widths.push(cols[q % cols.length].w); wsum += widths[q]; }
      var x0 = 0, lo = 1450, hi = 1600;
      bars.forEach(function (bar, idx) {
        var bw = widths[idx] / wsum, s = 0;
        for (var z = 0; z < 5; z++) s += at(Math.min(1, x0 + bw * (z + 0.5) / 5));
        var hgt = 0.12 + 0.88 * Math.max(0, Math.min(1, (s / 5 - lo) / (hi - lo)));
        bar.style.flexBasis = (bw * 100).toFixed(3) + "%";
        bar.style.setProperty("--h", hgt.toFixed(4));
        bar.firstChild.style.backgroundImage = B.gradient(cols[idx % cols.length].s);
        x0 += bw;
      });
      fields.axis.textContent = kmText(alt.km) + " km";
      stop();
      setFrac(0);
    }

    /* Recorrer: avance automático del corredor */
    function step(t) {
      if (!playing) return;
      var dt = last ? (t - last) / 1000 : 0;
      last = t;
      var next = frac + dt / 14;
      if (next >= 1) { setFrac(1); stop(); return; }
      setFrac(next);
      raf = requestAnimationFrame(step);
    }
    function play() {
      if (frac >= 1) setFrac(0);
      playing = true; last = 0;
      playBtn.setAttribute("aria-pressed", "true");
      playBtn.querySelector("span").textContent = "Pausar";
      raf = requestAnimationFrame(step);
    }
    function stop() {
      playing = false;
      cancelAnimationFrame(raf);
      if (playBtn) {
        playBtn.setAttribute("aria-pressed", "false");
        playBtn.querySelector("span").textContent = "Recorrer";
      }
    }
    playBtn.addEventListener("click", function () { if (playing) stop(); else play(); });

    function scrub(e) {
      var r = plot.getBoundingClientRect();
      stop();
      setFrac((e.clientX - r.left) / r.width);
    }
    plot.addEventListener("pointerdown", function (e) { plot.setPointerCapture(e.pointerId); scrub(e); });
    plot.addEventListener("pointermove", function (e) { if (e.buttons || e.pointerType === "mouse") scrub(e); });
    plot.addEventListener("keydown", function (e) {
      var d = e.key === "ArrowRight" ? 0.02 : e.key === "ArrowLeft" ? -0.02 : 0;
      if (d) { e.preventDefault(); stop(); setFrac(frac + d); }
    });

    buttons.forEach(function (btn) { btn.addEventListener("click", function () { select(btn.dataset.routeId); }); });
    select("42k");

    /* Primer recorrido automático al entrar en pantalla */
    if (!reduce && "IntersectionObserver" in window) {
      var io = new IntersectionObserver(function (entries) {
        if (entries[0].isIntersecting) { io.disconnect(); setTimeout(play, 900); }
      }, { threshold: 0.45 });
      io.observe(svg);
    }
  }

  function boot() { document.querySelectorAll("[data-route]").forEach(init); }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();
})();
