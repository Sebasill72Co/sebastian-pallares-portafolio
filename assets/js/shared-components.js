/* PROJECT ATLAS — Utilidades compartidas y sin dependencias */
(function inicializarAtlas(global) {
  "use strict";

  const reduceMotion = global.matchMedia("(prefers-reduced-motion: reduce)");

  function actualizarAnio(root = document) {
    root.querySelectorAll("[data-current-year], #year").forEach((elemento) => {
      elemento.textContent = new Date().getFullYear();
    });
  }

  function activarRevelados(root = document) {
    const elementos = root.querySelectorAll(".reveal");
    if (reduceMotion.matches || !("IntersectionObserver" in global)) {
      elementos.forEach((elemento) => elemento.classList.add("visible"));
      return null;
    }

    const observador = new IntersectionObserver((entradas) => {
      entradas.forEach((entrada) => {
        if (entrada.isIntersecting) entrada.target.classList.add("visible");
      });
    }, { threshold: 0.12 });

    elementos.forEach((elemento) => observador.observe(elemento));
    return observador;
  }

  function activarProgreso(selector) {
    const barra = document.querySelector(selector);
    if (!barra) return function noop() {};

    function actualizar() {
      const total = document.documentElement.scrollHeight - global.innerHeight;
      const valor = total > 0 ? (global.scrollY / total) * 100 : 0;
      barra.style.width = `${valor}%`;
    }

    global.addEventListener("scroll", actualizar, { passive: true });
    global.addEventListener("resize", actualizar, { passive: true });
    actualizar();
    return actualizar;
  }

  function activarEstadoImagenes(root = document) {
    root.querySelectorAll("img").forEach((imagen) => {
      imagen.addEventListener("error", () => {
        const contenedor = imagen.closest("figure, [data-media]");
        if (!contenedor) return;
        contenedor.classList.add("media-error");
        contenedor.setAttribute("data-media-state", "error");
      });
    });
  }

  function activarControlesBarras(root = document) {
    root.querySelectorAll("[data-bars-control]").forEach((control) => {
      const fondo = document.querySelector(control.dataset.barsControl);
      if (!fondo) return;

      const barras = fondo.querySelectorAll(".dynamic-bars__bar[data-width]");
      const actualizar = () => {
        const escala = Number(control.value) / 100;
        barras.forEach((barra) => {
          const anchoBase = Number(barra.dataset.width);
          barra.style.setProperty("--bar-width", `${(anchoBase * escala).toFixed(2)}%`);
        });
      };

      control.addEventListener("input", actualizar);
      actualizar();
    });
  }

  function iniciar(opciones = {}) {
    actualizarAnio();
    activarRevelados();
    activarEstadoImagenes();
    activarControlesBarras();
    if (opciones.progreso) activarProgreso(opciones.progreso);
  }

  global.AtlasComponents = Object.freeze({
    activarControlesBarras,
    activarEstadoImagenes,
    activarProgreso,
    activarRevelados,
    actualizarAnio,
    iniciar,
    reduceMotion
  });
})(window);
