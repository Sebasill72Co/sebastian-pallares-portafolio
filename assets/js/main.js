document.documentElement.classList.add("js");
window.AtlasComponents?.iniciar({ progreso: "#progress" });

(function iniciarNavegacionHome() {
  "use strict";

  const boton = document.querySelector(".nav-toggle");
  const navegacion = document.querySelector("#navegacion-principal");
  if (!boton || !navegacion) return;

  function establecerEstado(abierto) {
    boton.setAttribute("aria-expanded", String(abierto));
    document.body.classList.toggle("menu-open", abierto);
  }

  boton.addEventListener("click", () => {
    establecerEstado(boton.getAttribute("aria-expanded") !== "true");
  });

  navegacion.addEventListener("click", (evento) => {
    if (evento.target.closest("a")) establecerEstado(false);
  });

  document.addEventListener("keydown", (evento) => {
    if (evento.key === "Escape" && boton.getAttribute("aria-expanded") === "true") {
      establecerEstado(false);
      boton.focus();
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 760) establecerEstado(false);
  }, { passive: true });
})();
