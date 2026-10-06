/* PROJECT ATLAS — Maratón Medellín 2022 · interacción del caso */
(function () {
  "use strict";
  function $(s, r) { return (r || document).querySelector(s); }
  function $$(s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); }

  /* Paleta: valores tomados del documento de elementos gráficos y del archivo de Pantones */
  var palette = $("[data-mm22-palette]");
  if (palette) {
    var info = {
      name: $("[data-pal-name]", palette), a: $("[data-pal-a]", palette), b: $("[data-pal-b]", palette),
      la: $("[data-pal-la]", palette), lb: $("[data-pal-lb]", palette), note: $("[data-pal-note]", palette)
    };
    var swatches = $$("[data-pal]", palette);
    function pick(btn) {
      swatches.forEach(function (s) { s.setAttribute("aria-pressed", String(s === btn)); });
      var d = btn.dataset;
      info.name.textContent = d.name;
      info.la.textContent = d.la; info.a.textContent = d.a;
      info.lb.textContent = d.lb; info.b.textContent = d.b;
      info.note.textContent = d.note;
      palette.style.setProperty("--pick", d.color);
    }
    swatches.forEach(function (s) { s.addEventListener("click", function () { pick(s); }); });
    if (swatches[0]) pick(swatches[0]);
  }

  /* Tipografía: escribir para probar */
  $$("[data-mm22-type]").forEach(function (box) {
    var input = $("input", box), sample = $("[data-sample]", box), base = sample.textContent;
    input.addEventListener("input", function () { sample.textContent = input.value || base; });
  });

  /* Distancias: dorsal + camiseta */
  var dist = $("[data-mm22-distances]");
  if (dist) {
    var tabs = $$("[data-dist]", dist), swaps = $$("[data-shirt]", dist);
    var bib = $("[data-bib]", dist), shirt = $("[data-shirt-img]", dist), mark = $("[data-dist-mark]", dist), text = $("[data-dist-text]", dist);
    var current = "42k", tone = "claro";
    var base = "../../../assets/images/projects/maraton-medellin/2022/kit/";
    function swapImg(img, src, alt) {
      img.classList.add("is-swapping");
      setTimeout(function () { img.src = src; img.alt = alt; img.classList.remove("is-swapping"); }, 160);
    }
    function render() {
      var t = tabs.filter(function (x) { return x.dataset.dist === current; })[0];
      dist.style.setProperty("--dist", t.dataset.color);
      mark.textContent = t.textContent;
      text.textContent = t.dataset.text;
      swapImg(bib, base + "dorsal-" + current + ".webp", "Dorsal oficial " + t.textContent + " de Maratón Medellín 2022");
      swapImg(shirt, base + "camiseta-" + current + "-" + tone + ".webp", "Estampado de camiseta " + t.textContent + " sobre tela " + (tone === "claro" ? "clara" : "oscura"));
    }
    tabs.forEach(function (t, i) {
      t.addEventListener("click", function () {
        current = t.dataset.dist;
        tabs.forEach(function (x) { x.setAttribute("aria-selected", String(x === t)); x.tabIndex = x === t ? 0 : -1; });
        render();
      });
      t.addEventListener("keydown", function (e) {
        var n = e.key === "ArrowRight" ? tabs[(i + 1) % tabs.length] : e.key === "ArrowLeft" ? tabs[(i - 1 + tabs.length) % tabs.length] : null;
        if (n) { e.preventDefault(); n.focus(); n.click(); }
      });
    });
    swaps.forEach(function (s) {
      s.addEventListener("click", function () {
        tone = s.dataset.shirt;
        swaps.forEach(function (x) { x.setAttribute("aria-pressed", String(x === s)); });
        render();
      });
    });
  }

  /* Momentos de campaña */
  var moments = $("[data-mm22-moments]");
  if (moments) {
    var mt = $$('[role="tab"]', moments);
    mt.forEach(function (t, i) {
      function select(focus) {
        mt.forEach(function (x) {
          var on = x === t;
          x.setAttribute("aria-selected", String(on)); x.tabIndex = on ? 0 : -1;
          var p = document.getElementById(x.getAttribute("aria-controls"));
          if (p) p.hidden = !on;
        });
        if (focus) t.focus();
      }
      t.addEventListener("click", function () { select(false); });
      t.addEventListener("keydown", function (e) {
        var n = e.key === "ArrowRight" ? mt[(i + 1) % mt.length] : e.key === "ArrowLeft" ? mt[(i - 1 + mt.length) % mt.length] : null;
        if (n) { e.preventDefault(); n.click(); n.focus(); }
      });
    });
  }
})();
