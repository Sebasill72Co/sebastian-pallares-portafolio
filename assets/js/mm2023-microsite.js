/* PROJECT ATLAS — Maratón Medellín 2023 · interacción del caso */
(function () {
  "use strict";
  function $(s, r) { return (r || document).querySelector(s); }
  function $$(s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); }

  /* Paleta: valores tomados del documento de elementos gráficos y del archivo de Pantones */
  var palette = $("[data-mm23-palette]");
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
  $$("[data-mm23-type]").forEach(function (box) {
    var input = $("input", box), sample = $("[data-sample]", box), base = sample.textContent;
    input.addEventListener("input", function () { sample.textContent = input.value || base; });
  });

  /* Distancias: dorsal por corral + medalla */
  var dist = $("[data-mm23-distances]");
  if (dist) {
    var tabs = $$("[data-dist]", dist), corrals = $("[data-corrals]", dist);
    var bib = $("[data-bib]", dist), medal = $("[data-medal]", dist), mark = $("[data-dist-mark]", dist), text = $("[data-dist-text]", dist);
    var base = "../../../assets/images/projects/maraton-medellin/2023/kit/";
    function swapImg(img, src, alt) {
      img.classList.add("is-swapping");
      setTimeout(function () { img.src = src; img.alt = alt; img.classList.remove("is-swapping"); }, 160);
    }
    function showBib(t, file, label) {
      swapImg(bib, base + "dorsal-" + file + ".webp", "Dorsal oficial " + t.textContent + (label ? " · " + label : "") + " de Maratón Medellín 2023");
    }
    function render(t) {
      dist.style.setProperty("--dist", t.dataset.color);
      mark.textContent = t.textContent;
      text.textContent = t.dataset.text;
      var list = t.dataset.bibs.split(",");
      corrals.innerHTML = "";
      list.forEach(function (item, k) {
        var parts = item.split(":"), b = document.createElement("button");
        b.type = "button"; b.textContent = parts[1]; b.setAttribute("aria-pressed", String(k === 0));
        b.addEventListener("click", function () {
          Array.prototype.forEach.call(corrals.children, function (x) { x.setAttribute("aria-pressed", String(x === b)); });
          showBib(t, parts[0], parts[1]);
        });
        corrals.appendChild(b);
      });
      corrals.hidden = list.length < 2;
      showBib(t, list[0].split(":")[0], list[0].split(":")[1]);
      swapImg(medal, base + "medalla-" + t.dataset.dist + ".webp", "Medalla oficial " + t.textContent + " de Maratón Medellín 2023");
    }
    tabs.forEach(function (t, i) {
      t.addEventListener("click", function () {
        tabs.forEach(function (x) { x.setAttribute("aria-selected", String(x === t)); x.tabIndex = x === t ? 0 : -1; });
        render(t);
      });
      t.addEventListener("keydown", function (e) {
        var n = e.key === "ArrowRight" ? tabs[(i + 1) % tabs.length] : e.key === "ArrowLeft" ? tabs[(i - 1 + tabs.length) % tabs.length] : null;
        if (n) { e.preventDefault(); n.focus(); n.click(); }
      });
    });
    render(tabs[0]);
  }

  /* Momentos de campaña */
  var moments = $("[data-mm23-moments]");
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
