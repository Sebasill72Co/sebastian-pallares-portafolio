# Mapa de migración incremental a componentes

Fecha: 11 de julio de 2026  
Alcance inicial: Home y Maratón Medellín 2026.

## Orden de carga

Ambas páginas cargan primero `assets/css/shared-components.css` y después su hoja específica. En JavaScript cargan primero `assets/js/shared-components.js`; los datos y la lógica particular permanecen después. Este orden conserva las reglas actuales y permite que cada caso de estudio mantenga su identidad.

## Mapa

| Origen actual | Patrón compartido | Consumidores | CSS y JavaScript | Adopción y compatibilidad | Riesgo y validación |
|---|---|---|---|---|---|
| `.hero` y `.project-hero` | Hero `.atlas-hero` | Home, MM2026 y futuros casos | Base CSS; estilos visuales históricos permanecen | Clase auxiliar añadida sin cambiar estructura | Bajo; comparar composición y hero en todos los anchos |
| `.site-header`, `.project-header`, navegaciones internas | Navegación `.atlas-nav` | Home, MM2026 y futuros casos | Foco compartido; layouts específicos intactos | Mejora progresiva con enlaces HTML funcionales | Bajo; teclado, foco y sticky |
| `.team-credits`, `.credits-grid` | Créditos `.atlas-credits` | Home y MM2026 | Base semántica; tarjetas actuales intactas | Variantes mediante clases existentes | Bajo; revisar contenido y contraste |
| `.dynamic-gallery` | Galería `.atlas-gallery` | MM2026; futuros datos por proyecto | `project.js` mantiene render; base compartida gestiona errores | El HTML esencial de la página no depende de la galería | Medio; vacío, error, formatos y rutas dinámicas |
| `.document-card` | Documento `.atlas-document-card` | MM2026 y futuros proyectos | Estilo específico actual y patrón compartido | Enlaces directos; PDFs originales intactos | Medio; existencia y apertura segura |
| `.credit-note`, notas editoriales | Callout `.atlas-callout` | Home, MM2026 y futuros casos | Acento mínimo heredable | Clase adicional, contenido en español | Bajo; contraste y espaciado |
| `.footer`, `.project-footer`, `.contact` | Footer/contacto `.atlas-footer`, `.atlas-contact` | Home y MM2026 | Año compartido y foco visible | Los enlaces siguen disponibles sin JS | Bajo; WhatsApp, correo y año |

## Utilidades transversales

`assets/js/shared-components.js` expone `window.AtlasComponents` con progreso de lectura, aparición mediante `IntersectionObserver`, año actual y estados de error de imágenes. No contiene datos de proyectos ni selectores de una identidad concreta. La API admite más de 50 páginas estáticas sin duplicar estas utilidades ni introducir framework, compilación o dependencia externa.

## Duplicados conservados

- `assets/css/project-mm2026.css` y `assets/js/project-mm2026.js` permanecen sin uso ni modificación.
- Las reglas históricas de hero, navegación, créditos, galerías, documentos y footer permanecen en `styles.css` y `project.css`.
- El HTML alternativo dentro de la carpeta de imágenes permanece intacto.
- Los placeholders y páginas eliminadas previamente no se restauran ni se limpian en esta fase.

## Adopción futura

Cada nuevo caso puede cargar la base compartida, añadir las clases `atlas-*` y mantener una hoja y datos específicos. La retirada de duplicados solo debe realizarse después de comparar visualmente los consumidores y recibir aprobación.

