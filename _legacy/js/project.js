window.AtlasComponents?.iniciar({ progreso: "#reading-progress" });



function crearGalerias() {
  const data = window.MARATON_2026;
  if (!data) return;

  document.querySelectorAll("[data-gallery]").forEach((contenedor) => {
    const clave = contenedor.dataset.gallery;
    const items = Array.isArray(data[clave]) ? data[clave] : [];

    if (!items.length) {
      contenedor.innerHTML = `
        <div class="gallery-empty">
          <span>Contenido pendiente</span>
          <p>Esta sección todavía no tiene archivos visuales registrados.</p>
        </div>
      `;
      return;
    }

    contenedor.innerHTML = items.map((item, index) => {
      const titulo = item.titulo || `Archivo ${index + 1}`;
      const src = `${data.base}${item.archivo}`;

      if (item.tipo === "documento") {
        return `
          <a class="document-card atlas-document-card" href="${src}" target="_blank" rel="noopener">
            <span class="document-type">PDF</span>
            <div>
              <h3>${titulo}</h3>
              <p>Abrir documento ↗</p>
            </div>
          </a>
        `;
      }

      const formato = item.formato || "ancho";
      return `
        <figure class="gallery-item gallery-item--${formato} reveal visible">
          <img
            src="${src}"
            alt="${titulo}"
            loading="lazy"
            onerror="this.closest('figure').classList.add('media-error')"
          >
          <figcaption>${titulo}</figcaption>
        </figure>
      `;
    }).join("");
  });

  window.AtlasComponents?.activarEstadoImagenes(document);
}

document.addEventListener("DOMContentLoaded", () => {
  crearGalerias();
});
