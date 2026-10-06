/* PROJECT ATLAS — Media Maratón del Mar 2027 · interacción del micrositio */
(function () {
  "use strict";

  /* Paleta oficial (Manual de Key Visual 2027, lámina 03). Valores tal como aparecen en el manual. */
  var PALETTE = [
    { name: "Crema",     hex: "#F5E9D8", rgb: "245 · 233 · 216", cmyk: "3 · 7 · 15 · 0",   pantone: "7506 C", ink: "#001A4A" },
    { name: "Arena",     hex: "#DAC48A", rgb: "218 · 196 · 138", cmyk: "15 · 20 · 53 · 0", pantone: "7402 C", ink: "#001A4A" },
    { name: "Ocre",      hex: "#C9961C", rgb: "255 · 47 · 46",   cmyk: "0 · 93 · 86 · 0",  pantone: "7550 C", ink: "#001A4A",
      note: "En el manual, los valores RGB y CMYK de este color no corresponden al HEX #C9961C. Pendiente de confirmar con el archivo fuente." },
    { name: "Naranja",   hex: "#E84E2C", rgb: "232 · 78 · 44",    cmyk: "3 · 85 · 96 · 0",  pantone: "1655 C", ink: "#FFFFFF" },
    { name: "Magenta",   hex: "#D4216A", rgb: "212 · 33 · 106",   cmyk: "12 · 99 · 36 · 0", pantone: "214 C",  ink: "#FFFFFF" },
    { name: "Ladrillo",  hex: "#7D2100", rgb: "125 · 33 · 0",     cmyk: "30 · 92 · 100 · 38", pantone: "174 C", ink: "#F5E9D8" },
    { name: "Turquesa",  hex: "#2EBFAB", rgb: "46 · 191 · 171",   cmyk: "69 · 0 · 42 · 0",  pantone: "2239 C", ink: "#001A4A" },
    { name: "Pizarra",   hex: "#3D5A6B", rgb: "61 · 90 · 107",    cmyk: "79 · 56 · 43 · 22", pantone: "2215 C", ink: "#F5E9D8" },
    { name: "Azul mar",  hex: "#001A4A", rgb: "0 · 26 · 74",      cmyk: "100 · 87 · 35 · 22", pantone: "2768 C", ink: "#F5E9D8" }
  ];

  function $(s, r) { return (r || document).querySelector(s); }
  function $$(s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); }

  /* Paleta */
  var palette = $("[data-palette]");
  if (palette) {
    var wrap = $(".mmdm-swatches", palette);
    var buttons = PALETTE.map(function (c, i) {
      var b = document.createElement("button");
      b.type = "button";
      b.textContent = c.name;
      b.style.setProperty("--sw", c.hex);
      b.style.setProperty("--sw-ink", c.ink);
      b.setAttribute("aria-pressed", i === 0 ? "true" : "false");
      b.setAttribute("aria-label", c.name + " " + c.hex);
      b.addEventListener("click", function () { pick(i); });
      wrap.appendChild(b);
      return b;
    });
    function pick(i) {
      var c = PALETTE[i];
      buttons.forEach(function (b, j) { b.setAttribute("aria-pressed", String(i === j)); });
      $("[data-hex]", palette).textContent = c.hex;
      $("[data-rgb]", palette).textContent = c.rgb;
      $("[data-cmyk]", palette).textContent = c.cmyk;
      $("[data-pantone]", palette).textContent = c.pantone;
      var note = $("[data-note]", palette);
      note.hidden = !c.note;
      note.textContent = c.note || "";
      palette.style.setProperty("--palette-bg", c.hex);
      palette.style.setProperty("--palette-ink", c.ink);
    }
    pick(0);
  }

  /* Pestañas (logotipo y reglas) */
  $$('[role="tablist"]').forEach(function (list) {
    var tabs = $$('[role="tab"]', list);
    function select(tab, focus) {
      tabs.forEach(function (t) {
        var on = t === tab;
        t.setAttribute("aria-selected", String(on));
        t.tabIndex = on ? 0 : -1;
        var panel = document.getElementById(t.getAttribute("aria-controls"));
        if (panel) panel.hidden = !on;
      });
      if (focus) tab.focus();
    }
    tabs.forEach(function (tab, i) {
      tab.addEventListener("click", function () { select(tab); });
      tab.addEventListener("keydown", function (e) {
        var n = e.key === "ArrowRight" ? tabs[(i + 1) % tabs.length] : e.key === "ArrowLeft" ? tabs[(i - 1 + tabs.length) % tabs.length] : null;
        if (n) { e.preventDefault(); select(n, true); }
      });
    });
  });

  /* Textura */
  var texture = $("[data-texture]");
  if (texture) {
    var stage = $("[data-texture-stage]", texture);
    var label = $("[data-texture-label]", texture);
    var sw = $("[data-texture-switch]", texture);
    $$("[data-texture-bg]", texture).forEach(function (b, _, all) {
      b.addEventListener("click", function () {
        all.forEach(function (x) { x.setAttribute("aria-pressed", String(x === b)); });
        stage.dataset.bg = b.dataset.textureBg;
        label.textContent = b.dataset.textureBg === "intenso" ? "80 % · multiplicar" : "25 %";
      });
    });
    sw.addEventListener("click", function () {
      var on = sw.getAttribute("aria-pressed") !== "true";
      sw.setAttribute("aria-pressed", String(on));
      sw.textContent = on ? "Textura activada" : "Sin textura";
      stage.classList.toggle("is-off", !on);
    });
  }

  /* Galería */
  var gallery = $("[data-gallery]");
  if (gallery) {
    var img = $("[data-gallery-image]", gallery);
    var cap = $("[data-gallery-caption]", gallery);
    var thumbs = $$(".mmdm-gallery__thumbs button", gallery);
    thumbs.forEach(function (t) {
      t.addEventListener("click", function () {
        thumbs.forEach(function (x) { x.setAttribute("aria-pressed", String(x === t)); });
        img.classList.add("is-swapping");
        setTimeout(function () {
          img.src = t.dataset.src;
          img.alt = "Aplicación: " + t.dataset.caption;
          cap.textContent = t.dataset.caption;
          img.classList.remove("is-swapping");
        }, 160);
      });
    });
  }

  /* Sección activa en el menú */
  var links = $$('.mm-header__nav a[href^="#"]:not(.mm-header__flower)');
  if ("IntersectionObserver" in window && links.length) {
    var map = {};
    links.forEach(function (a) { map[a.getAttribute("href").slice(1)] = a; });
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        links.forEach(function (a) { a.removeAttribute("aria-current"); });
        var a = map[e.target.id];
        if (a) a.setAttribute("aria-current", "location");
      });
    }, { rootMargin: "-40% 0px -55% 0px" });
    Object.keys(map).forEach(function (id) { var s = document.getElementById(id); if (s) io.observe(s); });
  }

  /* Visor del Key Visual (se abre con un botón, no se muestra completo en la página) */
  var KV = [
    ["01-portada-key-visual", "Portada"], ["02-logotipo-principal", "Logotipo"], ["03-logotipo-aplicaciones", "Logotipo · aplicaciones principales"],
    ["04-logotipo-variaciones-arco", "Logotipo · variaciones permitidas"], ["05-paleta", "Paleta de color"], ["06-tipografia-principal", "Tipografía principal"],
    ["07-tipografia-complementaria", "Tipografía complementaria"], ["08-posicion-usos-correctos", "Posición del logotipo"], ["09-posicion-usos-incorrectos", "Usos incorrectos"],
    ["10-area-proteccion", "Área de protección"], ["11-ilustraciones-culturales", "Ilustraciones culturales"], ["12-sello-diez-anos", "Sello Diez años"],
    ["13-estrella", "La estrella"], ["14-textura-grafica", "Textura gráfica"], ["15-frases-graficas", "Frases gráficas"],
    ["16-apertura-aplicaciones", "Aplicaciones"], ["17-aplicacion-diez-anos-carretilla", "Aplicación · Diez años"], ["18-aplicacion-corriendo-sabroso", "Aplicación · Corriendo sabroso"],
    ["19-aplicacion-corre-cartagena", "Aplicación · Corre Cartagena"], ["20-aplicacion-banner-corriendo-juntos", "Aplicación · Corriendo juntos"]
  ];
  var dlg = $("[data-kv]");
  if (dlg) {
    var base = "../../../assets/images/projects/media-maraton-del-mar/2027/manual/";
    var kImg = $("[data-kv-image]", dlg), kLabel = $("[data-kv-label]", dlg), kCount = $("[data-kv-count]", dlg);
    var cur = 0, opener = null;
    function show(i) {
      cur = (i + KV.length) % KV.length;
      kImg.src = base + KV[cur][0] + ".webp";
      kImg.alt = "Key Visual 2027, lámina " + (cur + 1) + ": " + KV[cur][1];
      kLabel.textContent = KV[cur][1];
      kCount.textContent = (cur + 1) + " / " + KV.length;
      var nx = new Image(); nx.src = base + KV[(cur + 1) % KV.length][0] + ".webp";
    }
    function open(i, btn) {
      opener = btn; show(i);
      if (dlg.showModal) dlg.showModal(); else dlg.setAttribute("open", "");
      document.documentElement.classList.add("kv-open");
    }
    function close() { if (dlg.close) dlg.close(); else dlg.removeAttribute("open"); }
    dlg.addEventListener("close", function () { document.documentElement.classList.remove("kv-open"); if (opener) opener.focus(); });
    $$("[data-kv-open]").forEach(function (b) {
      b.addEventListener("click", function () { open(parseInt(b.dataset.kvOpen, 10) - 1, b); });
    });
    $("[data-kv-prev]", dlg).addEventListener("click", function () { show(cur - 1); });
    $("[data-kv-next]", dlg).addEventListener("click", function () { show(cur + 1); });
    $("[data-kv-close]", dlg).addEventListener("click", close);
    dlg.addEventListener("click", function (e) { if (e.target === dlg) close(); });
    dlg.addEventListener("keydown", function (e) {
      if (e.key === "ArrowRight") { e.preventDefault(); show(cur + 1); }
      if (e.key === "ArrowLeft") { e.preventDefault(); show(cur - 1); }
    });
    var tx = null;
    kImg.addEventListener("touchstart", function (e) { tx = e.touches[0].clientX; }, { passive: true });
    kImg.addEventListener("touchend", function (e) {
      if (tx === null) return; var dx = e.changedTouches[0].clientX - tx;
      if (Math.abs(dx) > 40) show(cur + (dx < 0 ? 1 : -1)); tx = null;
    }, { passive: true });
  }

  $$("[data-year]").forEach(function (n) { n.textContent = String(new Date().getFullYear()); });
})();

/* Muestra de Summer Surfing: familia (Serif/Sans) × corte (Regular/Rough/Texture) */
(function () {
  "use strict";
  var box = document.querySelector("[data-specimen]");
  if (!box) return;
  var state = { family: "serif", cut: "rough" };
  var name = box.querySelector("[data-specimen-name]");
  function cap(s) { return s.charAt(0).toUpperCase() + s.slice(1); }
  function apply() {
    var ff = '"SS ' + cap(state.family) + " " + cap(state.cut) + '", var(--mmdm-display)';
    box.querySelector("[data-specimen-sample]").style.fontFamily = ff;
    box.querySelector("[data-specimen-chars]").style.fontFamily = ff;
    name.textContent = "Summer Surfing " + cap(state.family) + " " + cap(state.cut);
    box.querySelectorAll("[data-family]").forEach(function (b) { b.setAttribute("aria-pressed", String(b.dataset.family === state.family)); });
    box.querySelectorAll("[data-cut]").forEach(function (b) { b.setAttribute("aria-pressed", String(b.dataset.cut === state.cut)); });
  }
  box.querySelectorAll("[data-family]").forEach(function (b) { b.addEventListener("click", function () { state.family = b.dataset.family; apply(); }); });
  box.querySelectorAll("[data-cut]").forEach(function (b) { b.addEventListener("click", function () { state.cut = b.dataset.cut; apply(); }); });
  apply();
})();

/* Recorrido oficial 2027: 21K / 10K (datos del reglamento oficial) */
(function () {
  "use strict";
  var root = document.querySelector("[data-mmdm-route]");
  if (!root) return;
  var DATA = {
    "21k": { start: "5:20 a. m.", limit: "3 horas", corrals: "Corral 1 · menos de 1:50:00\nCorral 2 · 1:50:01 a 2:10:00\nCorral 3 · más de 2:10:00" },
    "10k": { start: "5:50 a. m.", limit: "2 horas", corrals: "Corral 1 · 1:05:00 o menos\nCorral 2 · más de 1:05:00" }
  };
  var tabs = Array.prototype.slice.call(root.querySelectorAll("[data-route]"));
  function select(id, focus) {
    var d = DATA[id];
    root.setAttribute("data-active", id);
    tabs.forEach(function (t) { var on = t.dataset.route === id; t.setAttribute("aria-selected", String(on)); t.tabIndex = on ? 0 : -1; if (on && focus) t.focus(); });
    root.querySelector("[data-route-mark]").textContent = id.toUpperCase();
    root.querySelector("[data-route-start]").textContent = d.start;
    root.querySelector("[data-route-limit]").textContent = d.limit;
    root.querySelector("[data-route-corrals]").textContent = d.corrals;
  }
  tabs.forEach(function (t, i) {
    t.addEventListener("click", function () { select(t.dataset.route); });
    t.addEventListener("keydown", function (e) {
      if (e.key === "ArrowRight" || e.key === "ArrowLeft") { e.preventDefault(); var n = tabs[(i + 1) % tabs.length]; select(n.dataset.route, true); }
    });
  });
  select("21k");
})();

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
    root.querySelectorAll(".mmdm-prod__grid button").forEach(function (b) {
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
