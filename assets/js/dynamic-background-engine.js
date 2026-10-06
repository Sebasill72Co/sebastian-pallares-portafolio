/* PROJECT ATLAS — Motor reutilizable de fondos dinámicos */
(function iniciarMotorFondos(global) {
  "use strict";

  const composiciones = new Map(Object.entries(global.ATLAS_DYNAMIC_BACKGROUNDS || {}));
  const instancias = new Set();

  function asignarVariables(elemento, variables = {}) {
    Object.entries(variables).forEach(([nombre, valor]) => {
      if (valor === undefined || valor === null || valor === "") return;
      elemento.style.setProperty(`--${nombre}`, String(valor));
    });
  }

  function seleccionarBreakpoint(composicion) {
    const ancho = global.innerWidth;
    return Object.entries(composicion.breakpoints)
      .sort((a, b) => b[1].minWidth - a[1].minWidth)
      .find(([, datos]) => ancho >= datos.minWidth) || ["mobile", composicion.breakpoints.mobile];
  }

  function resolverColor(nombre) {
    return `var(--mm26-${nombre})`;
  }

  function crearSegmento(datos, origen, columna, indice, factores) {
    if (!datos) return;

    const segmento = document.createElement("span");
    const [inicio, centro, final] = datos.gradient;
    const [amplitud, duracion, desfase] = datos.motion;
    const amplitudFinal = amplitud * (factores.amplitudeFactor || 1);
    const duracionFinal = duracion * (factores.durationFactor || 1);

    segmento.className = "dynamic-background__segment";
    segmento.dataset.origin = origen;
    segmento.dataset.segmentIndex = String(indice + 1);
    asignarVariables(segmento, {
      "segment-height": `${datos.height}%`,
      "segment-opacity": datos.opacity,
      "segment-start": resolverColor(inicio),
      "segment-mid": resolverColor(centro),
      "segment-end": resolverColor(final),
      "segment-scale-from": 1 - amplitudFinal / 100,
      "segment-scale-to": 1 + amplitudFinal / 100,
      "segment-duration": `${duracionFinal}s`,
      "segment-delay": `${desfase}s`
    });
    columna.appendChild(segmento);
  }

  function renderizarComposicion(elemento, composicion) {
    const [nombreBreakpoint, configuracion] = seleccionarBreakpoint(composicion);
    if (elemento.dataset.dynamicBreakpoint === nombreBreakpoint && elemento.dataset.dynamicReady === "true") return;

    asignarVariables(elemento, composicion.tokens);
    asignarVariables(elemento, {
      "dynamic-base-color": composicion.base?.color,
      "dynamic-base-start": composicion.base?.start,
      "dynamic-base-end": composicion.base?.end,
      "dynamic-base-angle": composicion.base?.angle,
      "dynamic-noise-opacity": elemento.dataset.noisePercent === undefined
        ? composicion.noise?.opacity
        : Number(elemento.dataset.noisePercent) / 100,
      "dynamic-column-template": configuracion.columns.map((columna) => `${columna.weight}fr`).join(" ")
    });

    const base = document.createElement("div");
    base.className = "dynamic-background__base";

    const estructura = document.createElement("div");
    estructura.className = "dynamic-background__columns";
    configuracion.columns.forEach((datos, indice) => {
      const columna = document.createElement("div");
      columna.className = "dynamic-background__column";
      columna.dataset.columnIndex = String(indice + 1);
      columna.dataset.weight = String(datos.weight);
      crearSegmento(datos.top, "top", columna, indice, configuracion);
      crearSegmento(datos.bottom, "bottom", columna, indice, configuracion);
      estructura.appendChild(columna);
    });

    const ruido = document.createElement("div");
    ruido.className = "dynamic-background__noise";

    elemento.replaceChildren(base, estructura, ruido);
    elemento.classList.add("dynamic-background--ready");
    elemento.dataset.dynamicVariant = composicion.variant || "primary";
    elemento.dataset.dynamicBreakpoint = nombreBreakpoint;
    elemento.dataset.dynamicReady = "true";
    elemento.dispatchEvent(new CustomEvent("atlas:background-breakpoint", { detail: { breakpoint: nombreBreakpoint } }));
  }

  function renderizar(elemento, composicion) {
    if (!elemento || !composicion) return;
    instancias.add({ elemento, composicion });
    renderizarComposicion(elemento, composicion);
  }

  function renderizarTodos(root = document) {
    root.querySelectorAll("[data-dynamic-background]").forEach((elemento) => {
      renderizar(elemento, composiciones.get(elemento.dataset.dynamicBackground));
    });
  }

  function actualizarResponsive() {
    instancias.forEach(({ elemento, composicion }) => renderizarComposicion(elemento, composicion));
  }

  function registrar(nombre, composicion) {
    if (nombre && composicion) composiciones.set(nombre, composicion);
  }

  function establecerMovimiento(elemento, activo) {
    if (elemento) elemento.dataset.motion = activo ? "running" : "paused";
  }

  function establecerRuido(elemento, porcentaje) {
    if (!elemento) return;
    const valor = Math.min(80, Math.max(0, Number(porcentaje) || 0));
    elemento.dataset.noisePercent = String(valor);
    elemento.style.setProperty("--dynamic-noise-opacity", String(valor / 100));
  }

  let temporizadorResponsive;
  global.addEventListener("resize", () => {
    global.clearTimeout(temporizadorResponsive);
    temporizadorResponsive = global.setTimeout(actualizarResponsive, 120);
  }, { passive: true });

  global.AtlasDynamicBackgrounds = Object.freeze({
    establecerMovimiento,
    establecerRuido,
    registrar,
    renderizarTodos
  });

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => renderizarTodos(), { once: true });
  } else {
    renderizarTodos();
  }
})(window);
