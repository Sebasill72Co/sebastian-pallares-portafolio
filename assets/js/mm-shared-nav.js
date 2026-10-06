/* PROJECT ATLAS — Navegación compartida de ediciones Maratón Medellín.
   Al cambiar de edición (archivo de ediciones o paginador final) la página nueva
   siempre abre desde arriba, sin heredar la posición de desplazamiento. */
(function () {
  "use strict";
  try { if ("scrollRestoration" in history) history.scrollRestoration = "manual"; } catch (e) {}

  function toTop() {
    if (location.hash) return;
    var html = document.documentElement, prev = html.style.scrollBehavior;
    html.style.scrollBehavior = "auto";
    window.scrollTo(0, 0);
    html.style.scrollBehavior = prev;
  }
  window.addEventListener("pageshow", toTop);
  if (document.readyState !== "loading") toTop();
  else document.addEventListener("DOMContentLoaded", toTop);

  /* Enlaces entre ediciones: aterrizan en el inicio de la página destino */
  document.addEventListener("click", function (e) {
    var a = e.target.closest && e.target.closest(".mm-pager__link, .mm-editions__track a");
    if (!a || a.getAttribute("aria-current") === "page") return;
    var href = a.getAttribute("href") || "";
    if (/maraton-medellin\/\d{4}\/|^\.\.\/\d{4}\/|^\.\/index\.html/.test(href) && href.indexOf("#") === -1) {
      a.setAttribute("href", href + "#inicio");
    }
  }, true);
})();
