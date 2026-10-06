(function () {
  "use strict";

  var config = window.MM2025_MICROSITE;
  if (!config) return;

  var reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function select(selector, context) {
    return (context || document).querySelector(selector);
  }

  function selectAll(selector, context) {
    return Array.prototype.slice.call((context || document).querySelectorAll(selector));
  }

  function setPressed(buttons, active, attribute) {
    buttons.forEach(function (button) {
      var isActive = button === active;
      button.setAttribute(attribute, String(isActive));
      if (attribute === "aria-selected") button.tabIndex = isActive ? 0 : -1;
    });
  }

  function createPiece(piece) {
    var figure = document.createElement("figure");
    var image = document.createElement("img");
    var caption = document.createElement("figcaption");
    var title = document.createElement("strong");
    var meta = document.createElement("span");

    figure.className = "mm25-piece" + (piece.landscape ? " mm25-piece--landscape" : "");
    image.src = piece.src;
    image.alt = piece.alt;
    image.loading = "lazy";
    image.decoding = "async";
    if (piece.width) image.width = piece.width;
    if (piece.height) image.height = piece.height;

    title.textContent = piece.title;
    meta.textContent = piece.meta;
    caption.append(title, meta);
    figure.append(image, caption);
    return figure;
  }

  function renderPieces(container, pieces) {
    if (!container) return;
    var fragment = document.createDocumentFragment();
    pieces.forEach(function (piece) {
      fragment.appendChild(createPiece(piece));
    });
    container.replaceChildren(fragment);
  }

  function initPalette() {
    var controls = select("[data-palette-controls]");
    var readout = select("[data-color-readout]");
    var laboratory = controls ? controls.closest(".mm25-palette-lab") : null;
    if (!controls || !readout) return;

    var contrastSurfaces = {
      cyan: { background: "#EFC7BD", text: "#391459" },
      pink: { background: "#00B7CE", text: "#391459" },
      purple: { background: "#4CF77C", text: "#391459" },
      lime: { background: "#391459", text: "#FFFDF9" }
    };

    var buttons = config.palette.map(function (color, index) {
      var button = document.createElement("button");
      button.type = "button";
      button.className = "mm25-swatch";
      button.style.setProperty("--swatch", color.hex);
      button.style.setProperty("--swatch-text", color.text);
      button.dataset.short = color.name;
      button.setAttribute("aria-label", color.name + " " + color.hex);
      button.setAttribute("aria-pressed", String(index === 0));
      button.addEventListener("click", function () {
        setPressed(buttons, button, "aria-pressed");
        update(color);
      });
      button.addEventListener("focus", function () {
        update(color);
      });
      button.addEventListener("pointerenter", function () {
        update(color);
      });
      controls.appendChild(button);
      return button;
    });

    function update(color) {
      var surface = contrastSurfaces[color.id] || contrastSurfaces.cyan;
      readout.replaceChildren();
      readout.style.setProperty("--active-color", color.hex);
      readout.style.setProperty("--active-text", color.text);
      if (laboratory) {
        laboratory.dataset.activePalette = color.id;
        laboratory.style.setProperty("--palette-surface", surface.background);
        laboratory.style.setProperty("--palette-surface-text", surface.text);
      }
      [
        [color.name, color.hex],
        ["RGB", color.rgb],
        ["CMYK", color.cmyk],
        ["Pantone", "Pendiente de confirmar"]
      ].forEach(function (entry) {
        var item = document.createElement("span");
        var strong = document.createElement("strong");
        strong.textContent = entry[0];
        item.append(strong, document.createTextNode(entry[1]));
        readout.appendChild(item);
      });
      var context = document.createElement("div");
      var role = document.createElement("p");
      var pairs = document.createElement("p");
      context.className = "mm25-color-context";
      role.innerHTML = "<strong>Función</strong>" + color.role;
      pairs.innerHTML = "<strong>Combinaciones</strong>" + color.pairs;
      context.append(role, pairs);
      readout.appendChild(context);
    }

    update(config.palette[0]);
  }

  function initTypography() {
    var sample = select("[data-type-sample]");
    var size = select("[data-font-size]");
    var sizeValue = select("[data-font-size-value]");
    var reset = select("[data-type-reset]");
    var italic = select("[data-font-style]");
    var weights = selectAll("[data-font-weight]");
    if (!sample || !size || !weights.length) return;

    weights.forEach(function (button) {
      button.addEventListener("click", function () {
        setPressed(weights, button, "aria-pressed");
        sample.style.fontWeight = button.dataset.fontWeight;
        sample.dataset.weight = button.dataset.fontWeight;
      });
    });

    if (italic) italic.addEventListener("click", function () {
      var active = italic.getAttribute("aria-pressed") !== "true";
      italic.setAttribute("aria-pressed", String(active));
      sample.style.fontStyle = active ? "italic" : "normal";
    });

    size.addEventListener("input", function () {
      sample.style.fontSize = size.value + "px";
      if (sizeValue) sizeValue.textContent = size.value + " px";
    });

    if (reset) reset.addEventListener("click", function () {
      size.value = "70";
      sample.style.fontSize = "70px";
      sample.style.fontWeight = "500";
      sample.style.fontStyle = "normal";
      sample.dataset.weight = "500";
      sample.innerHTML = "Corre entre montañas<br><small>ÁÉÍÓÚ ñ · abcdef · 0123456789 · / + &amp;</small>";
      if (sizeValue) sizeValue.textContent = "70 px";
      if (italic) italic.setAttribute("aria-pressed", "false");
      setPressed(weights, weights.filter(function (button) { return button.dataset.fontWeight === "500"; })[0], "aria-pressed");
    });
  }

  function initDistances() {
    var controls = select("[data-distance-controls]");
    var image = select("[data-distance-image]");
    var caption = select("[data-distance-caption]");
    var label = select("[data-distance-label]");
    var title = select("[data-distance-title]");
    var description = select("[data-distance-description]");
    var stage = image && image.closest(".mm25-distance-stage");
    if (!controls || !image || !caption || !stage) return;

    var buttons = config.distances.map(function (distance, index) {
      var button = document.createElement("button");
      button.type = "button";
      button.textContent = distance.label;
      button.setAttribute("aria-pressed", String(index === 0));
      button.addEventListener("click", function () {
        if (button.getAttribute("aria-pressed") === "true") return;
        setPressed(buttons, button, "aria-pressed");

        var change = function () {
          image.src = distance.src;
          image.alt = distance.alt;
          caption.textContent = distance.caption;
          if (label) label.textContent = "Sistema por distancia · " + distance.label;
          if (title) title.textContent = distance.title;
          if (description) description.textContent = distance.description;
          stage.style.setProperty("--distance-accent", distance.accent);
          stage.classList.remove("is-changing");
        };

        if (reducedMotion) {
          change();
        } else {
          stage.classList.add("is-changing");
          window.setTimeout(change, 180);
        }
      });
      controls.appendChild(button);
      return button;
    });
  }

  function initMomentTabs() {
    var tabs = selectAll("[data-moment]");
    var panels = selectAll("[data-panel]");
    if (!tabs.length || !panels.length) return;

    function activate(tab, focus) {
      setPressed(tabs, tab, "aria-selected");
      panels.forEach(function (panel) {
        panel.hidden = panel.dataset.panel !== tab.dataset.moment;
      });
      if (focus) tab.focus();
    }

    tabs.forEach(function (tab, index) {
      tab.addEventListener("click", function () {
        activate(tab, false);
      });

      tab.addEventListener("keydown", function (event) {
        var nextIndex = null;
        if (event.key === "ArrowRight" || event.key === "ArrowDown") nextIndex = (index + 1) % tabs.length;
        if (event.key === "ArrowLeft" || event.key === "ArrowUp") nextIndex = (index - 1 + tabs.length) % tabs.length;
        if (event.key === "Home") nextIndex = 0;
        if (event.key === "End") nextIndex = tabs.length - 1;
        if (nextIndex === null) return;
        event.preventDefault();
        activate(tabs[nextIndex], true);
      });
    });
  }

  function initRaceGroups() {
    var buttons = selectAll("[data-race-group]");
    var grid = select('[data-piece-grid="carrera"]');
    if (!buttons.length || !grid) return;

    function activate(button) {
      setPressed(buttons, button, "aria-pressed");
      renderPieces(grid, config.moments.carrera[button.dataset.raceGroup]);
    }

    buttons.forEach(function (button) {
      button.addEventListener("click", function () {
        activate(button);
      });
    });

    activate(buttons[0]);
  }

  function initNavigationState() {
    var links = selectAll('.mm25-header__nav a[href^="#"]');
    var sectionAccents = {
      inicio: "#FFFFFF",
      historia: "#00B7CE",
      "sistema-visual": "#EFC7BD",
      campana: "#4CF77C",
      creditos: "#FFFFFF"
    };
    var targets = links.map(function (link) {
      return select(link.getAttribute("href"));
    }).filter(Boolean);
    var ticking = false;

    function updateNavigation() {
      var probe = window.innerHeight * 0.45;
      var current = targets[0];

      targets.forEach(function (target) {
        if (target.getBoundingClientRect().top <= probe) current = target;
      });

      links.forEach(function (link) {
        var active = current && link.getAttribute("href") === "#" + current.id;
        if (active) link.setAttribute("aria-current", "location");
        else link.removeAttribute("aria-current");
      });

      document.documentElement.style.setProperty(
        "--mm25-nav-accent",
        current ? sectionAccents[current.id] || "#FFFFFF" : "#FFFFFF"
      );
      ticking = false;
    }

    function requestUpdate() {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(updateNavigation);
    }

    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    updateNavigation();
  }

  function initEditionNav() {
    var current = select('.mm25-editions__track [aria-current="page"]');
    if (!current) return;
    var track = current.parentElement;
    var frame = 0;

    function alignCurrentEdition() {
      var left = current.offsetLeft - (track.clientWidth - current.offsetWidth) / 2;
      track.scrollLeft = Math.max(0, left);
      frame = 0;
    }

    function requestAlignment() {
      if (frame) window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(alignCurrentEdition);
    }

    requestAlignment();
    window.addEventListener("resize", requestAlignment, { passive: true });
  }

  function init() {
    var year = select("[data-current-year]");
    if (year) year.textContent = new Date().getFullYear();

    renderPieces(select('[data-piece-grid="campana"]'), config.moments.campana);
    renderPieces(select('[data-piece-grid="expo"]'), config.moments.expo);
    initPalette();
    initTypography();
    initDistances();
    initMomentTabs();
    initRaceGroups();
    initEditionNav();
    initNavigationState();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init, { once: true });
  } else {
    init();
  }
})();
