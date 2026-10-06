(function () {
  "use strict";

  const config = window.MM26_MICROSITE;
  if (!config) return;

  const reducedMotion = window.matchMedia(config.motion.reducedMotionQuery);
  const root = document.documentElement;
  root.classList.add("js");
  const stage = document.querySelector("[data-moment-stage]");
  const tabs = Array.from(document.querySelectorAll("[data-moment-tab]"));
  const year = document.querySelector("[data-current-year]");
  const progress = document.querySelector("[data-reading-progress]");

  const escapeHtml = (value) => String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

  const familyLabel = (family) => ({ oscuro: "Oscuro", vibrante: "Vibrante", apoyo: "Apoyo" }[family] || family);

  function initColorLab() {
    const lab = document.querySelector("[data-color-lab]");
    const band = lab?.querySelector("[data-color-band]");
    const familyControls = Array.from(lab?.querySelectorAll("[data-color-family]") || []);
    if (!lab || !band || !config.paletteColors?.length) return;

    band.innerHTML = config.paletteColors.map((color, index) => `
      <button
        class="color-module${index === 0 ? " is-active" : ""}"
        type="button"
        data-color-id="${escapeHtml(color.id)}"
        data-color-family="${escapeHtml(color.family)}"
        aria-pressed="${index === 0 ? "true" : "false"}"
        aria-label="Ver información de ${escapeHtml(color.name)} ${escapeHtml(color.hex)}"
        style="--module-color:${escapeHtml(color.hex)}"
      ><span>${escapeHtml(familyLabel(color.family))}</span><b>${escapeHtml(color.hex)}</b></button>
    `).join("");

    const modules = Array.from(band.querySelectorAll("[data-color-id]"));

    function selectColor(id) {
      const color = config.paletteColors.find((item) => item.id === id) || config.paletteColors[0];
      lab.dataset.activeColor = color.id;
      lab.style.setProperty("--active-color", color.hex);
      lab.style.setProperty("--active-text", color.textColor);
      lab.style.setProperty("--gradient-from", color.gradient[0]);
      lab.style.setProperty("--gradient-to", color.gradient[1]);
      modules.forEach((module) => {
        const active = module.dataset.colorId === color.id;
        module.classList.toggle("is-active", active);
        module.setAttribute("aria-pressed", String(active));
      });

      const setText = (selector, value) => {
        const node = lab.querySelector(selector);
        if (node) node.textContent = value;
      };
      setText("[data-color-family-label]", familyLabel(color.family));
      setText("[data-color-name]", color.name);
      setText("[data-color-hex]", color.hex);
      setText("[data-color-rgb]", color.rgb);
      setText("[data-color-cmyk]", color.cmyk);
      setText("[data-color-cmyk-status]", color.cmykStatus);
      setText("[data-color-pantone]", color.pantone);
      setText("[data-color-pantone-status]", color.pantoneStatus);
      setText("[data-color-role]", color.role);
      const pairs = lab.querySelector("[data-color-pairs]");
      if (pairs) pairs.innerHTML = color.pairs.map((pair) => `<i style="--pair:${escapeHtml(pair)}">${escapeHtml(pair)}</i>`).join("");
    }

    modules.forEach((module) => {
      module.addEventListener("click", () => selectColor(module.dataset.colorId));
      module.addEventListener("focus", () => selectColor(module.dataset.colorId));
      module.addEventListener("pointerenter", (event) => {
        if (event.pointerType !== "touch") selectColor(module.dataset.colorId);
      });
    });

    familyControls.forEach((control) => {
      control.addEventListener("click", () => {
        const family = control.dataset.colorFamily;
        familyControls.forEach((button) => button.setAttribute("aria-pressed", String(button === control)));
        modules.forEach((module) => module.classList.toggle("is-family-muted", family !== "all" && module.dataset.colorFamily !== family));
        const firstMatch = config.paletteColors.find((color) => family === "all" || color.family === family);
        if (firstMatch) selectColor(firstMatch.id);
      });
    });

    selectColor(config.paletteColors[0].id);
  }

  function initEditionNav() {
    const track = document.querySelector("[data-edition-track]");
    if (!track) return;
    let frame = 0;

    const alignCurrentEdition = () => {
      if (track.scrollWidth > track.clientWidth) track.scrollLeft = track.scrollWidth;
      frame = 0;
    };

    const requestAlignment = () => {
      if (frame) window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(alignCurrentEdition);
    };

    requestAlignment();
    window.addEventListener("resize", requestAlignment, { passive: true });
  }

  function initTypeLab() {
    document.querySelectorAll("[data-type-sample]").forEach((sample) => {
      const range = sample.querySelector("[data-type-size]");
      const value = sample.querySelector("[data-type-size-value]");
      const field = sample.querySelector("[data-type-text]");
      const preview = sample.querySelector("[data-type-preview]");
      const reset = sample.querySelector("[data-type-reset]");
      if (!range || !value || !field || !preview || !reset) return;

      const updateSize = () => {
        const size = Number(range.value) || Number(sample.dataset.defaultSize) || 48;
        sample.style.setProperty("--type-size", `${size}px`);
        value.textContent = `${size} px`;
      };
      const updateText = () => {
        preview.textContent = field.value || sample.dataset.defaultText || "Maratón Medellín 2026";
      };

      range.addEventListener("input", updateSize);
      field.addEventListener("input", updateText);
      reset.addEventListener("click", () => {
        range.value = sample.dataset.defaultSize;
        field.value = sample.dataset.defaultText;
        updateSize();
        updateText();
        field.focus({ preventScroll: true });
      });
      updateSize();
      updateText();
    });
  }

  function initDistanceSystem() {
    const system = document.querySelector("[data-distance-system]");
    const distances = config.distanceSystem;
    if (!system || !distances?.length) return;
    const buttons = Array.from(system.querySelectorAll("[data-distance-id]"));
    const mark = system.querySelector("[data-distance-mark]");
    const name = system.querySelector("[data-distance-name]");
    const context = system.querySelector(".distance-system__stage span");
    const description = system.querySelector("[data-distance-description]");

    function selectDistance(id) {
      const distance = distances.find((item) => item.id === id) || distances[0];
      system.style.setProperty("--distance-from", distance.gradient[0]);
      system.style.setProperty("--distance-to", distance.gradient[1]);
      system.style.setProperty("--distance-accent", distance.accent);
      if (mark) mark.textContent = distance.mark;
      if (name) name.textContent = distance.name;
      if (context) context.textContent = distance.context;
      if (description) description.textContent = distance.description;
      buttons.forEach((button) => button.setAttribute("aria-pressed", String(button.dataset.distanceId === distance.id)));
    }

    buttons.forEach((button) => {
      button.addEventListener("click", () => selectDistance(button.dataset.distanceId));
      button.addEventListener("focus", () => selectDistance(button.dataset.distanceId));
      button.addEventListener("pointerenter", (event) => {
        if (event.pointerType !== "touch") selectDistance(button.dataset.distanceId);
      });
    });
    selectDistance(distances[0].id);
  }

  function initModuleSystem() {
    const figure = document.querySelector("[data-module-system]");
    const controls = Array.from(document.querySelectorAll("[data-module-principle]"));
    const note = document.querySelector("[data-module-note]");
    if (!figure || !controls.length || !config.modulePrinciples?.length) return;

    function selectPrinciple(id) {
      const principle = config.modulePrinciples.find((item) => item.id === id) || config.modulePrinciples[0];
      figure.dataset.focus = principle.id;
      if (note) note.textContent = principle.note;
      controls.forEach((button) => button.setAttribute("aria-pressed", String(button.dataset.modulePrinciple === principle.id)));
    }

    controls.forEach((button) => {
      button.addEventListener("click", () => selectPrinciple(button.dataset.modulePrinciple));
      button.addEventListener("focus", () => selectPrinciple(button.dataset.modulePrinciple));
    });
    selectPrinciple(config.modulePrinciples[0].id);
  }

  function mediaFigure(media, label, className) {
    return `
      <figure class="editorial-media ${escapeHtml(className)}">
        <img src="${escapeHtml(media.src)}" alt="${escapeHtml(media.alt)}" loading="lazy" decoding="async" width="${media.width}" height="${media.height}">
        <figcaption>${escapeHtml(label)}</figcaption>
      </figure>`;
  }

  function momentHeader(moment) {
    return `
      <header class="moment-editorial__header">
        <div>
          <span class="chapter-index">${escapeHtml(moment.index)}</span>
          <p class="eyebrow">${escapeHtml(moment.eyebrow)}</p>
          <h3>${escapeHtml(moment.title)}</h3>
        </div>
        <p>${escapeHtml(moment.description)}</p>
      </header>`;
  }

  function campaignTemplate(moment) {
    const item = moment.comparison;
    return `
      <article class="moment-view moment-view--campana" id="momento-${escapeHtml(moment.id)}" data-moment-view data-content-root="${escapeHtml(moment.contentRoot)}" tabindex="-1">
        ${momentHeader(moment)}
        <div class="moment-collage moment-collage--campana">
          ${mediaFigure(item.flat, "Diseño plano", "editorial-media--flat")}
          ${mediaFigure(item.mockup, "Mockup urbano", "editorial-media--mockup")}
          <aside class="moment-editorial__info">
            <span>${escapeHtml(item.category)}</span>
            <h4>${escapeHtml(item.title)}</h4>
            <p>${escapeHtml(item.description)}</p>
          </aside>
          <div class="campaign-variants" aria-label="Publicaciones de campaña">
            ${moment.variants.map((variant, index) => `
              <button type="button" class="campaign-thumb${index === 0 ? " is-active" : ""}" data-campaign-variant="${escapeHtml(variant.id)}" aria-pressed="${index === 0 ? "true" : "false"}" aria-label="Ver ${escapeHtml(variant.label)}">
                <img src="${escapeHtml(variant.src)}" alt="" loading="lazy" decoding="async" width="${variant.width}" height="${variant.height}">
                <span>${escapeHtml(variant.label)}</span>
              </button>`).join("")}
            ${moment.pending.map((label) => `<span class="editorial-pending">${escapeHtml(label)} · Pendiente</span>`).join("")}
          </div>
        </div>
      </article>`;
  }

  function expoTemplate(moment) {
    const role = moment.roles[0];
    return `
      <article class="moment-view moment-view--exporunners" id="momento-${escapeHtml(moment.id)}" data-moment-view data-content-root="${escapeHtml(moment.contentRoot)}" tabindex="-1">
        ${momentHeader(moment)}
        <div class="moment-collage moment-collage--exporunners">
          ${mediaFigure(role.flat, "Diseño plano", "editorial-media--flat editorial-media--role-flat")}
          ${mediaFigure(role.mockup, "Mockup", "editorial-media--mockup editorial-media--role-mockup")}
          <aside class="moment-editorial__info">
            <span>Identificación Exporunners</span>
            <h4 data-role-name>${escapeHtml(role.label)}</h4>
            <p>Una misma arquitectura adapta color e información a cada función dentro de la feria.</p>
          </aside>
          <div class="role-selector" aria-label="Seleccionar rol de escarapela">
            ${moment.roles.map((item, index) => `
              <button type="button" data-role-id="${escapeHtml(item.id)}" aria-pressed="${index === 0 ? "true" : "false"}">
                <img src="${escapeHtml(item.flat.src)}" alt="" loading="lazy" decoding="async" width="621" height="798">
                <span>${escapeHtml(item.label)}</span>
              </button>`).join("")}
          </div>
          <div class="future-applications" aria-label="Aplicaciones futuras">
            ${moment.pending.map((label) => `<span>${escapeHtml(label)}</span>`).join("")}
          </div>
        </div>
      </article>`;
  }

  function carreraComparisonTemplate(type) {
    if (!type.variants) {
      return `
        <div class="carrera-pending">
          <span>Aplicaciones preparadas</span>
          <h4>${escapeHtml(type.label)}</h4>
          <p>${escapeHtml(type.description)}</p>
          <div>${type.pending.map((label) => `<i>${escapeHtml(label)} · Pendiente</i>`).join("")}</div>
        </div>`;
    }
    const variant = type.variants[0];
    return `
      <div class="carrera-comparison" data-carrera-comparison>
        ${mediaFigure(variant.flat, "Diseño plano", "editorial-media--flat editorial-media--carrera-flat")}
        ${mediaFigure(variant.mockup, "Aplicación", "editorial-media--mockup editorial-media--carrera-mockup")}
        <aside class="moment-editorial__info">
          <span>${escapeHtml(type.label)}</span>
          <h4 data-carrera-variant-name>${escapeHtml(variant.label)}</h4>
          <p>${escapeHtml(type.description)}</p>
        </aside>
        <div class="carrera-variants" aria-label="Seleccionar variante de ${escapeHtml(type.label)}">
          ${type.variants.map((item, index) => `<button type="button" data-carrera-variant="${escapeHtml(item.id)}" aria-pressed="${index === 0 ? "true" : "false"}">${escapeHtml(item.label)}</button>`).join("")}
        </div>
      </div>`;
  }

  function carreraTemplate(moment) {
    const type = moment.pieceTypes[0];
    return `
      <article class="moment-view moment-view--carrera" id="momento-${escapeHtml(moment.id)}" data-moment-view data-content-root="${escapeHtml(moment.contentRoot)}" tabindex="-1">
        ${momentHeader(moment)}
        <div class="piece-type-selector" aria-label="Seleccionar tipo de pieza">
          ${moment.pieceTypes.map((item, index) => `<button type="button" data-piece-type="${escapeHtml(item.id)}" aria-pressed="${index === 0 ? "true" : "false"}">${escapeHtml(item.label)}</button>`).join("")}
        </div>
        <div class="moment-collage moment-collage--carrera" data-carrera-content>
          ${carreraComparisonTemplate(type)}
        </div>
      </article>`;
  }

  function momentTemplate(moment) {
    if (moment.layout === "exporunners") return expoTemplate(moment);
    if (moment.layout === "carrera") return carreraTemplate(moment);
    return campaignTemplate(moment);
  }

  function updateMedia(figure, media) {
    const image = figure?.querySelector("img");
    if (!image) return;
    image.src = media.src;
    image.alt = media.alt;
    image.width = media.width;
    image.height = media.height;
  }

  function bindCampaign(scope) {
    const buttons = Array.from(scope.querySelectorAll("[data-campaign-variant]"));
    buttons.forEach((button) => button.addEventListener("click", () => {
      buttons.forEach((item) => {
        const active = item === button;
        item.classList.toggle("is-active", active);
        item.setAttribute("aria-pressed", String(active));
      });
    }));
  }

  function bindExpo(scope, moment) {
    const buttons = Array.from(scope.querySelectorAll("[data-role-id]"));
    buttons.forEach((button) => button.addEventListener("click", () => {
      const role = moment.roles.find((item) => item.id === button.dataset.roleId);
      if (!role) return;
      buttons.forEach((item) => item.setAttribute("aria-pressed", String(item === button)));
      updateMedia(scope.querySelector(".editorial-media--role-flat"), role.flat);
      updateMedia(scope.querySelector(".editorial-media--role-mockup"), role.mockup);
      const name = scope.querySelector("[data-role-name]");
      if (name) name.textContent = role.label;
    }));
  }

  function bindCarreraVariants(scope, type) {
    const buttons = Array.from(scope.querySelectorAll("[data-carrera-variant]"));
    buttons.forEach((button) => button.addEventListener("click", () => {
      const variant = type.variants.find((item) => item.id === button.dataset.carreraVariant);
      if (!variant) return;
      buttons.forEach((item) => item.setAttribute("aria-pressed", String(item === button)));
      updateMedia(scope.querySelector(".editorial-media--carrera-flat"), variant.flat);
      updateMedia(scope.querySelector(".editorial-media--carrera-mockup"), variant.mockup);
      const name = scope.querySelector("[data-carrera-variant-name]");
      if (name) name.textContent = variant.label;
    }));
  }

  function bindCarrera(scope, moment) {
    const container = scope.querySelector("[data-carrera-content]");
    const typeButtons = Array.from(scope.querySelectorAll("[data-piece-type]"));
    if (!container) return;
    typeButtons.forEach((button) => button.addEventListener("click", () => {
      const type = moment.pieceTypes.find((item) => item.id === button.dataset.pieceType);
      if (!type) return;
      typeButtons.forEach((item) => item.setAttribute("aria-pressed", String(item === button)));
      container.innerHTML = carreraComparisonTemplate(type);
      if (type.variants) bindCarreraVariants(container, type);
    }));
    bindCarreraVariants(container, moment.pieceTypes[0]);
  }

  function bindMoment(scope, moment) {
    if (moment.layout === "exporunners") bindExpo(scope, moment);
    if (moment.layout === "carrera") bindCarrera(scope, moment);
    if (moment.layout === "campana") bindCampaign(scope);
  }

  function renderMoment(id, moveFocus) {
    const moment = config.moments.find((item) => item.id === id) || config.moments[0];
    if (!stage || !moment) return;
    const initialRender = !stage.dataset.activeMoment;
    stage.classList.toggle("is-changing", !initialRender);
    const update = () => {
      stage.innerHTML = momentTemplate(moment);
      stage.dataset.activeMoment = moment.id;
      tabs.forEach((tab) => {
        const selected = tab.dataset.momentTab === moment.id;
        tab.setAttribute("aria-selected", String(selected));
        tab.tabIndex = selected ? 0 : -1;
      });
      bindMoment(stage, moment);
      stage.classList.remove("is-changing");
      stage.classList.toggle("is-entering", !reducedMotion.matches);
      if (moveFocus) stage.querySelector("[data-moment-view]")?.focus({ preventScroll: true });
    };
    if (reducedMotion.matches || initialRender) update();
    else window.setTimeout(update, 160);
  }

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => renderMoment(tab.dataset.momentTab, true));
    tab.addEventListener("keydown", (event) => {
      if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
      event.preventDefault();
      let target = index;
      if (event.key === "ArrowRight") target = (index + 1) % tabs.length;
      if (event.key === "ArrowLeft") target = (index - 1 + tabs.length) % tabs.length;
      if (event.key === "Home") target = 0;
      if (event.key === "End") target = tabs.length - 1;
      tabs[target].focus();
      renderMoment(tabs[target].dataset.momentTab, false);
    });
  });

  function updateProgress() {
    if (!progress) return;
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const value = max > 0 ? window.scrollY / max : 0;
    progress.style.transform = `scaleX(${Math.min(1, Math.max(0, value))})`;
  }

  const reveals = Array.from(document.querySelectorAll("[data-reveal]"));
  if (reducedMotion.matches || !("IntersectionObserver" in window)) {
    reveals.forEach((node) => node.classList.add("is-visible"));
  } else {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    }, { threshold: .15 });
    reveals.forEach((node) => observer.observe(node));
  }

  root.dataset.motion = reducedMotion.matches ? "reduced" : "full";
  reducedMotion.addEventListener("change", (event) => {
    root.dataset.motion = event.matches ? "reduced" : "full";
  });

  window.addEventListener("scroll", updateProgress, { passive: true });
  window.addEventListener("resize", updateProgress, { passive: true });
  year && (year.textContent = new Date().getFullYear());
  initEditionNav();
  initColorLab();
  initTypeLab();
  initDistanceSystem();
  initModuleSystem();
  renderMoment(config.moments[0].id, false);
  updateProgress();
})();

/* Fase 29-sep-2026: laboratorio tipográfico por pestañas (una familia a la vez). */
(function () {
  "use strict";
  var list = document.querySelector(".type-lab__tabs");
  if (!list) return;
  var tabs = Array.prototype.slice.call(list.querySelectorAll('[role="tab"]'));
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
    tab.addEventListener("click", function () { select(tab, false); });
    tab.addEventListener("keydown", function (e) {
      var n = null;
      if (e.key === "ArrowRight") n = tabs[(i + 1) % tabs.length];
      if (e.key === "ArrowLeft") n = tabs[(i - 1 + tabs.length) % tabs.length];
      if (e.key === "Home") n = tabs[0];
      if (e.key === "End") n = tabs[tabs.length - 1];
      if (n) { e.preventDefault(); select(n, true); }
    });
  });
  list.classList.add("is-ready");
  select(tabs[0], false);
})();
