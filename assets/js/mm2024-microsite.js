(function () {
  "use strict";

  var config = window.MM2024_MICROSITE;
  if (!config) return;
  var reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  function select(selector, context) {
    return (context || document).querySelector(selector);
  }

  function selectAll(selector, context) {
    return Array.prototype.slice.call((context || document).querySelectorAll(selector));
  }

  function setActive(buttons, active, attribute) {
    buttons.forEach(function (button) {
      var selected = button === active;
      button.setAttribute(attribute, String(selected));
      if (attribute === "aria-selected") button.tabIndex = selected ? 0 : -1;
    });
  }

  function hexToRgb(hex) {
    var value = hex.replace("#", "");
    return {
      r: parseInt(value.slice(0, 2), 16),
      g: parseInt(value.slice(2, 4), 16),
      b: parseInt(value.slice(4, 6), 16)
    };
  }

  function rgbToCmyk(rgb) {
    var r = rgb.r / 255;
    var g = rgb.g / 255;
    var b = rgb.b / 255;
    var k = 1 - Math.max(r, g, b);
    if (k === 1) return "0 · 0 · 0 · 100";
    var c = (1 - r - k) / (1 - k);
    var m = (1 - g - k) / (1 - k);
    var y = (1 - b - k) / (1 - k);
    return [c, m, y, k].map(function (value) { return Math.round(value * 100); }).join(" · ");
  }

  function textColor(hex) {
    var rgb = hexToRgb(hex);
    var luminance = (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000;
    return luminance > 150 ? "#1C4D51" : "#FFFDF8";
  }

  function createPiece(piece) {
    var figure = document.createElement("figure");
    var image = document.createElement("img");
    var caption = document.createElement("figcaption");
    var title = document.createElement("strong");
    var meta = document.createElement("span");

    figure.className = "mm24-piece" + (piece.landscape ? " mm24-piece--landscape" : "");
    image.src = piece.src;
    image.alt = piece.alt;
    image.loading = "lazy";
    image.decoding = "async";
    image.width = piece.width;
    image.height = piece.height;
    title.textContent = piece.title;
    meta.textContent = piece.meta;
    caption.append(title, meta);
    figure.append(image, caption);
    return figure;
  }

  function renderPieces(container, pieces) {
    if (!container) return;
    var fragment = document.createDocumentFragment();
    pieces.forEach(function (piece) { fragment.appendChild(createPiece(piece)); });
    container.replaceChildren(fragment);
  }

  function initPalette() {
    var controls = select("[data-palette-controls]");
    var readout = select("[data-color-readout]");
    var familyControls = selectAll("[data-color-family]");
    if (!controls || !readout) return;

    function update(color) {
      var rgb = hexToRgb(color.hex);
      readout.style.setProperty("--active-color", color.hex);
      readout.style.setProperty("--active-text", textColor(color.hex));
      readout.replaceChildren();
      [
        [color.name, color.hex],
        ["RGB", rgb.r + " · " + rgb.g + " · " + rgb.b],
        ["CMYK aprox.", rgbToCmyk(rgb)],
        ["Pantone", "Pendiente de confirmar"],
        ["Familia", color.family],
        ["Jerarquía", color.group === "base" ? "Principal" : color.group === "apoyo" ? "Apoyo" : "Variación"]
      ].forEach(function (entry) {
        var item = document.createElement("span");
        var strong = document.createElement("strong");
        strong.textContent = entry[0];
        item.append(strong, document.createTextNode(entry[1]));
        readout.appendChild(item);
      });
      var context = document.createElement("div");
      context.className = "mm24-color-context";
      var role = document.createElement("p");
      var pairs = document.createElement("p");
      role.innerHTML = "<strong>Función</strong>" + color.role;
      pairs.innerHTML = "<strong>Combinaciones</strong>" + color.pairs;
      context.append(role, pairs);
      readout.appendChild(context);
    }

    var buttons = config.palette.map(function (color, index) {
      var button = document.createElement("button");
      button.type = "button";
      button.className = "mm24-swatch";
      button.style.setProperty("--swatch", color.hex);
      button.style.setProperty("--swatch-text", textColor(color.hex));
      button.title = color.name;
      button.dataset.colorGroup = color.group;
      button.setAttribute("aria-label", color.name + " " + color.hex);
      button.setAttribute("aria-pressed", String(index === 0));
      button.addEventListener("click", function () {
        setActive(buttons, button, "aria-pressed");
        update(color);
      });
      button.addEventListener("focus", function () { update(color); });
      controls.appendChild(button);
      return button;
    });

    familyControls.forEach(function (filter) {
      filter.addEventListener("click", function () {
        var family = filter.dataset.colorFamily;
        setActive(familyControls, filter, "aria-pressed");
        buttons.forEach(function (button) {
          button.hidden = family !== "all" && button.dataset.colorGroup !== family;
        });
        var firstVisible = buttons.find(function (button) { return !button.hidden; });
        if (firstVisible) {
          setActive(buttons, firstVisible, "aria-pressed");
          update(config.palette[buttons.indexOf(firstVisible)]);
        }
      });
    });

    buttons.forEach(function (button) {
      button.hidden = button.dataset.colorGroup !== "base";
    });
    update(config.palette[0]);
  }

  function initTypography() {
    var sample = select("[data-type-sample]");
    var size = select("[data-font-size]");
    var output = select("[data-font-size-value]");
    var reset = select("[data-type-reset]");
    var italic = select("[data-font-italic-toggle]");
    var textInput = select("[data-type-text]");
    var workbench = select("[data-type-workbench]");
    var weights = selectAll("[data-font-weight]");
    if (!sample || !size || !workbench) return;

    weights.forEach(function (button) {
      button.addEventListener("click", function () {
        setActive(weights, button, "aria-pressed");
        sample.style.fontWeight = button.dataset.fontWeight;
        workbench.dataset.fontWeight = button.dataset.fontWeight;
      });
    });

    size.addEventListener("input", function () {
      workbench.style.setProperty("--type-size", size.value + "px");
      output.textContent = size.value + " px";
    });

    if (italic) {
      italic.addEventListener("click", function () {
        var active = italic.getAttribute("aria-pressed") !== "true";
        italic.setAttribute("aria-pressed", String(active));
        sample.style.fontStyle = active ? "italic" : "normal";
        workbench.dataset.fontStyle = active ? "italic" : "normal";
      });
    }

    if (textInput) {
      textInput.addEventListener("input", function () {
        sample.textContent = textInput.value || "30 años corriendo juntos";
      });
    }

    reset.addEventListener("click", function () {
      size.value = "68";
      output.textContent = "68 px";
      workbench.style.setProperty("--type-size", "68px");
      sample.style.fontWeight = "500";
      sample.style.fontStyle = "normal";
      workbench.dataset.fontWeight = "500";
      workbench.dataset.fontStyle = "normal";
      if (italic) italic.setAttribute("aria-pressed", "false");
      if (textInput) textInput.value = "30 años corriendo juntos";
      sample.textContent = "30 años corriendo juntos";
      setActive(weights, weights[1], "aria-pressed");
    });
  }

  function initDistances() {
    var image = select("[data-distance-image]");
    var label = select("[data-distance-label]");
    var title = select("[data-distance-title]");
    var description = select("[data-distance-description]");
    var caption = select("[data-distance-caption]");
    var controls = select("[data-distance-controls]");
    if (!image || !controls) return;

    function update(item) {
      image.src = item.src;
      image.alt = item.alt;
      image.width = item.width;
      image.height = item.height;
      label.textContent = "Sistema por distancia · " + item.label;
      title.textContent = item.title;
      description.textContent = item.description;
      caption.textContent = item.label + " · aplicación oficial";
    }

    var buttons = config.distances.map(function (item, index) {
      var button = document.createElement("button");
      button.type = "button";
      button.textContent = item.label;
      button.setAttribute("aria-pressed", String(index === 0));
      button.addEventListener("click", function () {
        setActive(buttons, button, "aria-pressed");
        update(item);
      });
      controls.appendChild(button);
      return button;
    });
    update(config.distances[0]);
  }

  function initDistanceVariants() {
    var controls = select("[data-distance-variant-controls]");
    var image = select("[data-distance-variant-image]");
    var caption = select("[data-distance-variant-caption]");
    if (!controls || !image || !config.distanceVariants) return;

    function update(item) {
      image.src = item.src;
      image.alt = item.alt;
      image.width = item.width;
      image.height = item.height;
      caption.textContent = item.label;
    }

    var buttons = config.distanceVariants.map(function (item, index) {
      var button = document.createElement("button");
      button.type = "button";
      button.textContent = item.label;
      button.setAttribute("aria-pressed", String(index === 0));
      button.addEventListener("click", function () {
        setActive(buttons, button, "aria-pressed");
        update(item);
      });
      controls.appendChild(button);
      return button;
    });
  }

  function initMoments() {
    var tabs = selectAll("[data-moment]");
    var panels = selectAll("[data-moment-panel]");
    var moments = select("[data-moments]");
    if (!tabs.length) return;

    function activate(tab, moveFocus) {
      var id = tab.dataset.moment;
      var update = function () {
        setActive(tabs, tab, "aria-selected");
        panels.forEach(function (panel) { panel.hidden = panel.dataset.momentPanel !== id; });
        if (id === "expo") renderPieces(select("[data-expo-pieces]"), config.moments.expo);
        if (moments) moments.classList.remove("is-changing");
        if (moveFocus) {
          var activePanel = panels.find(function (panel) { return panel.dataset.momentPanel === id; });
          if (activePanel) activePanel.focus({ preventScroll: true });
        }
      };
      if (reducedMotion.matches || !moments) update();
      else {
        moments.classList.add("is-changing");
        window.setTimeout(update, 160);
      }
    }

    tabs.forEach(function (tab, index) {
      tab.addEventListener("click", function () { activate(tab, true); });
      tab.addEventListener("keydown", function (event) {
        if (["ArrowLeft", "ArrowRight", "Home", "End"].indexOf(event.key) === -1) return;
        event.preventDefault();
        var target = index;
        if (event.key === "ArrowRight") target = (index + 1) % tabs.length;
        if (event.key === "ArrowLeft") target = (index - 1 + tabs.length) % tabs.length;
        if (event.key === "Home") target = 0;
        if (event.key === "End") target = tabs.length - 1;
        var next = tabs[target];
        activate(next, false);
        next.focus();
      });
    });
  }

  function initRace() {
    var controls = selectAll("[data-race-distance]");
    var container = select("[data-race-pieces]");
    if (!controls.length || !container) return;
    controls.forEach(function (button) {
      button.addEventListener("click", function () {
        setActive(controls, button, "aria-pressed");
        renderPieces(container, config.race[button.dataset.raceDistance]);
      });
    });
    renderPieces(container, config.race["42k"]);
  }

  function initNavigation() {
    var links = selectAll(".mm24-header__nav a[href^='#']");
    var sections = links.map(function (link) { return select(link.getAttribute("href")); }).filter(Boolean);
    if (!links.length || !sections.length) return;
    var queued = false;

    function update() {
      var marker = Math.min(window.innerHeight * 0.36, 280);
      var current = sections[0];
      sections.forEach(function (section) {
        if (section.getBoundingClientRect().top <= marker) current = section;
      });
      links.forEach(function (link) {
        if (link.getAttribute("href") === "#" + current.id) link.setAttribute("aria-current", "location");
        else link.removeAttribute("aria-current");
      });
      queued = false;
    }

    window.addEventListener("scroll", function () {
      if (queued) return;
      queued = true;
      window.requestAnimationFrame(update);
    }, { passive: true });
    update();
  }

  function initEditions() {
    var track = select(".mm24-editions__track");
    var active = track && select("[aria-current='page']", track);
    if (!track || !active) return;
    function align() {
      track.scrollLeft = active.offsetLeft - (track.clientWidth - active.offsetWidth) / 2;
    }
    window.addEventListener("resize", align, { passive: true });
    align();
  }

  initPalette();
  initTypography();
  initDistances();
  initDistanceVariants();
  initMoments();
  initRace();
  initNavigation();
  initEditions();

  var year = select("[data-current-year]");
  if (year) year.textContent = new Date().getFullYear();
}());
