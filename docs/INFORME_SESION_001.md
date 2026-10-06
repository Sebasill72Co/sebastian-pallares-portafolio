# INFORME TÉCNICO — PROJECT ATLAS

**Fecha de corte:** 12 de julio de 2026  
**Repositorio:** `sebastian-pallares-portafolio`  
**Rama inspeccionada:** `main`  
**Alcance:** auditoría estática y de Git. No se modificó ningún archivo salvo la creación autorizada de este informe. No se hicieron commits, ramas, push, restauraciones, renombrados ni eliminaciones.

---

## 1. Estado general

### Arquitectura del proyecto

PROJECT ATLAS es actualmente un sitio estático multipágina, sin proceso de compilación ni gestor de paquetes. La arquitectura combina:

- una página principal canónica en `index.html`;
- una página de caso de estudio activa en `proyectos/maraton-medellin/2026/index.html`;
- hojas CSS globales, compartidas y específicas;
- JavaScript global, utilidades compartidas, datos de proyecto y lógica específica;
- recursos gráficos y documentos servidos directamente desde `assets/`;
- documentación técnica y editorial en `docs/` y dentro del proyecto 2026;
- publicación estática configurada mediante Netlify.

La arquitectura está en una transición incompleta: existe una base compartida `atlas-*`, pero convive con implementaciones históricas, archivos alternativos no cargados y un HTML duplicado dentro de una carpeta de imágenes.

### Tecnologías utilizadas

- HTML5 semántico.
- CSS3 sin preprocesador.
- JavaScript ES6+ sin framework.
- `IntersectionObserver` para revelado progresivo.
- CSS Custom Properties para tokens y personalización.
- Animaciones CSS con `transform`, `@keyframes` y `prefers-reduced-motion`.
- Galerías generadas desde un objeto JavaScript local.
- Google Fonts: Manrope y Space Grotesk.
- SVG, WEBP, PNG y JPG para medios visuales.
- PDF para documentos y entregables descargables.
- Git para control de versiones.
- Netlify como destino de publicación estática; GitHub Pages se menciona como respaldo documental.

No se detectaron `package.json`, bundler, TypeScript, Sass, pruebas automatizadas, linting, CMS ni pipeline de optimización.

### Organización de carpetas

```text
/
├── index.html
├── netlify.toml
├── README.md
├── AGENTS.md
├── assets/
│   ├── css/
│   │   ├── styles.css
│   │   ├── shared-components.css
│   │   ├── project.css
│   │   └── project-mm2026.css
│   ├── js/
│   │   ├── main.js
│   │   ├── shared-components.js
│   │   ├── project.js
│   │   ├── project-mm2026.js
│   │   └── maraton-2026-data.js
│   └── images/
│       ├── brand/
│       ├── logos/
│       └── projects/maraton-medellin/2026/lanzamiento/
├── proyectos/
│   └── maraton-medellin/2026/
│       ├── index.html
│       ├── proyecto.json
│       └── notas-editoriales.md
└── docs/
    ├── AUDITORIA_INICIAL.md
    ├── CODEX_BRIEF.md
    ├── MAPA_MIGRACION_COMPONENTES.md
    ├── PLAN_MIGRACION_COMPONENTES.md
    ├── PROJECT_ATLAS.md
    ├── ROADMAP.md
    ├── ROADMAP_V2.md
    └── INFORME_SESION_001.md
```

### Flujo de carga del sitio

#### Home

1. El navegador carga `index.html`.
2. Se solicitan Manrope y Space Grotesk desde Google Fonts.
3. Se carga `assets/css/shared-components.css`.
4. Se carga `assets/css/styles.css`, que sobrescribe o amplía la base.
5. El HTML contiene todo el contenido principal.
6. Al final se cargan `shared-components.js` y `main.js`.
7. `shared-components.js` expone `window.AtlasComponents`.
8. `main.js` llama `AtlasComponents.iniciar({ progreso: "#progress" })`.

#### Maratón Medellín 2026

1. El navegador carga `proyectos/maraton-medellin/2026/index.html`.
2. Se cargan las mismas fuentes externas.
3. Se carga `shared-components.css` y luego `project.css`, ambos con parámetros manuales de versión.
4. El HTML entrega navegación, hero, contexto, créditos y contenedores de galerías.
5. Se carga `shared-components.js`.
6. Se carga `maraton-2026-data.js`, que publica `window.MARATON_2026`.
7. Se carga `project.js`, que inicializa utilidades, crea fondos dinámicos y genera galerías/documentos mediante `innerHTML`.

### Dependencias entre archivos

| Consumidor | Dependencias directas | Función |
|---|---|---|
| `index.html` | `shared-components.css`, `styles.css`, `shared-components.js`, `main.js` | Home y contenido profesional |
| `main.js` | `window.AtlasComponents` | Inicializa revelados, año, imágenes y progreso |
| `proyectos/.../2026/index.html` | `shared-components.css`, `project.css`, `shared-components.js`, `maraton-2026-data.js`, `project.js` | Caso de estudio 2026 |
| `project.js` | `window.AtlasComponents`, `window.MARATON_2026`, atributos `data-gallery` y `data-bars-palette` | Fondos y galerías dinámicas |
| `maraton-2026-data.js` | Árbol `assets/images/projects/.../lanzamiento/` | Registro de 49 recursos |
| `shared-components.css` | Clases `atlas-*`, `.dynamic-bars` | Patrones comunes y movimiento reducido |
| `project.css` | HTML del caso 2026 y clases inyectadas por JS | Diseño, paleta, grillas y fondos |

---

## 2. Estado del repositorio

### Rama actual

- `main`.

### Estado de Git

El árbol de trabajo está ampliamente divergente respecto a `HEAD`:

- **4 archivos modificados rastreados**.
- **35 archivos eliminados rastreados**.
- **29 rutas nuevas/no rastreadas** reportadas por Git; varias son directorios que contienen numerosos recursos.
- `git diff --check` no reportó errores de whitespace.
- El repositorio contiene 44 archivos rastreados en `HEAD`, pero el árbol actual incorpora una cantidad mucho mayor de recursos no rastreados.

### Archivos modificados rastreados

- `assets/css/styles.css`: crecimiento aproximado de 51 a 1.267 líneas; contiene la implementación visual actual de la home y bloques añadidos posteriormente.
- `assets/js/main.js`: reducido a una llamada de inicialización compartida.
- `index.html`: sustituido por una home editorial extensa de 574 líneas.
- `proyectos/maraton-medellin/2026/index.html`: sustituido por un caso de estudio de 383 líneas.

### Archivos nuevos/no rastreados relevantes

- `AGENTS.md`.
- Documentos de instrucciones y prompts en raíz.
- `assets/css/shared-components.css`.
- `assets/css/project.css`.
- `assets/css/project-mm2026.css`.
- `assets/js/shared-components.js`.
- `assets/js/project.js`.
- `assets/js/project-mm2026.js`.
- `assets/js/maraton-2026-data.js`.
- `assets/images/brand/`.
- `assets/images/logos/`.
- Recursos completos de Maratón Medellín 2026 bajo `lanzamiento/`.
- Documentación de auditoría, migración y roadmap.
- `proyecto.json` y `notas-editoriales.md`.

### Archivos eliminados rastreados

Se observan eliminaciones de:

- páginas de ExpoInmobiliaria, Media Maratón del Mar, Tres Trigos, otros proyectos y Posada de Moisés;
- índice general de Maratón Medellín;
- páginas 2021–2025 de Maratón Medellín;
- recursos WEBP históricos de Maratón 2026;
- foto de perfil histórica;
- placeholders `.gitkeep` y un documento LEEME.

Estas eliminaciones son de alto riesgo porque la home y el selector de años aún apuntan a varios de esos destinos.

### Tamaño y salud del repositorio

- Árbol completo: aproximadamente **33 GB**.
- Carpeta `assets`: aproximadamente **9 GB**.
- Recursos de `lanzamiento/`: aproximadamente **9 GB**.
- `tijera.pdf`: aproximadamente **8,5 GB**.
- Se detectaron archivos temporales `tmp_pack_*` en `.git/objects/pack/` y objetos/pack grandes. Esto sugiere operaciones Git interrumpidas o almacenamiento Git no consolidado.
- Existen 15 archivos `.DS_Store` dentro de `assets` y otros adicionales en raíz/proyectos.

### Riesgos detectados en Git

1. Mezclar la migración actual con restauraciones automáticas puede destruir trabajo no consolidado.
2. Hacer commit del árbol actual podría introducir 9 GB de recursos, incluido un PDF de 8,5 GB.
3. Hacer push puede fallar por límites del proveedor o bloquear el repositorio.
4. Las páginas eliminadas producen enlaces rotos en producción.
5. Los `tmp_pack_*` pueden consumir espacio o indicar una operación Git incompleta.
6. El número de archivos no rastreados dificulta atribuir autoría y revisar cambios.

---

## 3. Archivos inspeccionados

La siguiente lista corresponde a archivos leídos directamente, consultados mediante búsquedas estructurales o usados para comprobar dependencias.

### Raíz y configuración

| Ruta | Función | Relación |
|---|---|---|
| `AGENTS.md` | Reglas operativas, identidad, créditos y alcance | Gobierna todo el repositorio |
| `.gitignore` | Exclusiones Git | Solo contiene `.DS_Store`; no cubre temporales ni originales pesados |
| `README.md` | Descripción y publicación | Referencia `docs/PROJECT_ATLAS.md` y `docs/ROADMAP.md` |
| `netlify.toml` | Publicación y headers básicos | Publica la raíz completa |
| `index.html` | Home canónica | Consume CSS/JS compartido y global |
| `LEEME-REEMPLAZO.txt` | Instrucciones heredadas | Contexto de migración |
| `LEEME_PRIMERO.txt` | Instrucciones heredadas | Contexto de migración |
| `PRIMER_PROMPT_CODEX.txt` | Prompt histórico | Contexto de trabajo |
| `SEGUNDO_PROMPT_CODEX.txt` | Prompt histórico | Contexto de trabajo |

### CSS

| Ruta | Función | Relación |
|---|---|---|
| `assets/css/shared-components.css` | Tokens Atlas, barras dinámicas, foco y movimiento reducido | Cargado por home y MM2026 |
| `assets/css/styles.css` | Diseño completo de la home | Cargado solo por `index.html` |
| `assets/css/project.css` | Diseño activo del caso MM2026 | Cargado por la página canónica 2026 |
| `assets/css/project-mm2026.css` | Implementación alternativa del caso | No se detectó como dependencia activa |

### JavaScript

| Ruta | Función | Relación |
|---|---|---|
| `assets/js/shared-components.js` | Año, revelados, progreso, estado de imágenes y controles de barras | Base común activa |
| `assets/js/main.js` | Inicialización de home | Depende de `AtlasComponents` |
| `assets/js/project.js` | Fondos dinámicos y galerías 2026 | Depende de datos y base compartida |
| `assets/js/maraton-2026-data.js` | Registro de 49 recursos | Consumido por `project.js` |
| `assets/js/project-mm2026.js` | Lógica alternativa: progreso, parallax, errores y revelados | No se detectó como dependencia activa |

### HTML, datos y contenido del caso

| Ruta | Función | Relación |
|---|---|---|
| `proyectos/maraton-medellin/2026/index.html` | Página canónica 2026 | Consume `project.css`, datos y JS activo |
| `assets/images/projects/maraton-medellin/2026/index.html` | Copia/variante divergente dentro de imágenes | No canónica; usa rutas y lógica antiguas |
| `proyectos/maraton-medellin/2026/proyecto.json` | Metadatos editoriales | No se consume en runtime |
| `proyectos/maraton-medellin/2026/notas-editoriales.md` | Concepto y créditos | Fuente editorial humana |

### Documentación

| Ruta | Función | Relación |
|---|---|---|
| `docs/AUDITORIA_INICIAL.md` | Auditoría previa | Antecedente; algunos hallazgos ya cambiaron |
| `docs/CODEX_BRIEF.md` | Brief maestro | Define público, proyectos y prioridades |
| `docs/MAPA_MIGRACION_COMPONENTES.md` | Mapa de adopción `atlas-*` | Describe dependencias compartidas |
| `docs/PLAN_MIGRACION_COMPONENTES.md` | Estrategia incremental | Recomienda no limpiar sin aprobación |
| `docs/PROJECT_ATLAS.md` | Propósito y arquitectura conceptual | Documento de producto |
| `docs/ROADMAP.md` | Roadmap original | Plan general |
| `docs/ROADMAP_V2.md` | Roadmap de estabilización | Lista de tareas todavía abierta |

### Recursos inspeccionados por inventario, ruta y tamaño

- `assets/images/brand/logo-personal-sebastian-pallares.svg`.
- `assets/images/brand/foto-perfil.webp`.
- Los cinco SVG de `assets/images/logos/`.
- Los 16 WEBP de branding MM2026.
- Los 11 PNG y 2 JPG de campaña/recursos.
- Los 21 SVG del árbol actual.
- Los 17 PDF del árbol actual.
- Los tres recursos de hero: `hero-principal.webp`, `banner-principal-pagina-interna-2026.svg` y `logo-maraton-medellin-2026.svg`.
- Los 49 recursos declarados en `maraton-2026-data.js`; todos existen con la ruta declarada en el estado actual.
- Los `.DS_Store` detectados en raíz, assets y proyectos.

No se abrió visualmente cada PDF ni se inspeccionó internamente cada imagen; se revisaron existencia, extensión, ubicación y tamaño.

---

## 4. HTML

### Estructura

La home utiliza `header`, `main`, secciones temáticas y footer. El caso MM2026 utiliza header fijo, selector de años, hero, navegación por categorías, nueve secciones numeradas, llamada final y footer. La semántica general es razonable.

### Componentes detectados

- Header y navegación principal.
- Hero editorial.
- Selector de ediciones.
- Navegación sticky de categorías.
- Tarjetas de proyectos.
- Perfil, experiencia, capacidades y contacto.
- Créditos.
- Galerías dinámicas.
- Tarjetas de PDF.
- Barras dinámicas decorativas.
- Control `range` para ancho de barras.
- Footer con identidad.

### Navegación

- La navegación interna por anchors está presente.
- La home enlaza a siete destinos de proyectos inexistentes: Media Maratón del Mar, ExpoInmobiliaria, Tres Trigos y KÒRSWILL aparecen en más de un lugar.
- El selector 2026 enlaza a cinco páginas anuales inexistentes: 2021–2025.
- La navegación superior del caso asocia `#sistema` con “Campaña”, mientras la navegación de categorías lo llama “Branding”; el destino semántico es inconsistente.

### Reutilización

Hay adopción parcial de clases `atlas-hero`, `atlas-nav`, `atlas-credits`, `atlas-gallery`, `atlas-document-card`, `atlas-footer` y `atlas-contact`. Sin embargo, la mayor parte de la estructura sigue específica por página y no existe un generador de páginas o includes.

### Problemas HTML

- Destinos inexistentes visibles.
- HTML duplicado dentro de `assets/images/`.
- Uso de estilos inline extensos para 16 barras en sección 01 y siete barras en hero.
- Galerías esenciales dependen de JavaScript; sin JS quedan contenedores vacíos.
- Algunos mensajes continúan siendo editoriales/provisionales, especialmente fotografía vacía y “Siguiente paso”.
- La mayoría de imágenes generadas dinámicamente no recibe `width`/`height`.
- Solo 5 ocurrencias de `loading="lazy"` se encuentran en los dos HTML; las galerías lo agregan por JS.
- No hay metadatos Open Graph, Twitter Cards, canonical ni datos estructurados.
- No existe página 404.

---

## 5. CSS

### Hojas existentes

- `styles.css`: 1.267 líneas.
- `project.css`: 1.403 líneas.
- `project-mm2026.css`: 938 líneas, aparentemente sin uso.
- `shared-components.css`: 116 líneas.

Total aproximado: 3.724 líneas CSS, de las cuales una hoja de 938 líneas no tiene consumidor detectado.

### Reglas duplicadas y cascada

En `project.css` aparecen selectores repetidos: `.year-nav` y `.project-header` cuatro veces; `.category-nav`, `.section`, `.reading-progress`, `.project-footer`, `.next-project`, `.hero-overlay`, `.document-card` y otros entre dos y tres veces. También hay dos bloques `:root` y variantes de tokens redefinidas cerca del final.

En `styles.css` se repiten `.contact`, `.work-placeholder`, `.timeline-item`, `.profile-facts`, `.process-grid`, `.hero-stage`, `.brands-grid`, `.site-header`, `.progress` y otros. La cascada funciona como historial acumulativo, no como sistema claramente segmentado.

### Variables

Existen al menos cuatro familias de tokens:

1. variables globales iniciales de home;
2. variables Atlas compartidas;
3. variables de marca personal;
4. variables oficiales MM2026 añadidas al final de `project.css`.

Hay valores antiguos azules/magenta todavía presentes en reglas anteriores, aunque algunos quedan sobrescritos por reglas finales. Esto aumenta la dificultad para determinar el valor efectivo.

### Componentes repetidos

- Header/navegación.
- Hero.
- Progreso de lectura.
- Cards y grillas.
- Footer.
- Revelados y animaciones.
- Breakpoints.
- Estados de documento y media.

### Posibilidad de reutilización

Es alta para tokens, contenedores, navegación, foco, progreso, revelados, estados de error, documentos, galerías y barras dinámicas. Debe mantenerse la identidad específica de cada proyecto fuera del núcleo compartido.

### Deuda técnica CSS

- Hojas demasiado largas y acumulativas.
- Uso de `!important` para sobrescribir variables inline de barras.
- Breakpoints superpuestos: 620, 700, 800, 900, 950, 980 y 1050 px.
- Versionado manual mediante query strings con fecha.
- Data URI SVG de ruido duplicado en varias reglas.
- Reglas históricas que ya no corresponden a elementos activos.
- Dificultad para garantizar contraste debido a fondos dinámicos y colores vibrantes.
- `project-mm2026.css` conserva una segunda implementación completa.

---

## 6. JavaScript

### Archivos y responsabilidades

- `shared-components.js`: utilidades compartidas y API global.
- `main.js`: inicialización de la home.
- `project.js`: creación de fondos, render de galerías y estados vacíos.
- `maraton-2026-data.js`: contenido y rutas.
- `project-mm2026.js`: implementación alternativa sin uso detectado.

### Funciones duplicadas

`project-mm2026.js` duplica responsabilidades ya absorbidas por `shared-components.js`: progreso, actualización de año, revelados, error de imágenes y parallax. Mantener ambos archivos expone a que una página futura cargue el script equivocado.

### Arquitectura

La API `window.AtlasComponents` es una mejora sobre scripts monolíticos, pero sigue usando estado global. `window.MARATON_2026` también es global. No hay módulos ES, imports, tipado, pruebas ni contrato formal para datos.

### Oportunidades de modularización

- Separar `core`, `motion`, `gallery`, `documents` y `dynamic-bars`.
- Convertir datos a JSON válido y cargarlo de forma controlada o generar HTML estático.
- Evitar `innerHTML` para contenido si en el futuro los datos dejan de ser locales y confiables.
- Inicializar cada componente por `data-component`.
- Retirar `project-mm2026.js` solo tras validación y aprobación.
- Añadir pruebas mínimas para rutas de datos y generación de cards.

---

## 7. Recursos

### Inventario

- 21 SVG.
- 17 PDF.
- 16 WEBP.
- 11 PNG.
- 2 JPG.
- 15 `.DS_Store` dentro de `assets`.
- No se detectaron videos.
- Las fuentes se cargan externamente desde Google Fonts; no hay fuentes locales.

### Rutas incorrectas

- La home contiene siete enlaces a páginas de proyecto inexistentes.
- El selector de años contiene cinco enlaces a ediciones inexistentes.
- `proyecto.json` declara rutas sin el segmento `lanzamiento/`, por lo que no refleja el árbol real.
- El HTML alternativo dentro de imágenes usa rutas relativas propias de otra profundidad y referencia recursos antiguos/inexistentes.
- La carpeta `campaña` usa una forma Unicode con tilde; el código usa `campaña`. Funciona en el sistema actual, pero es un riesgo de portabilidad.
- Hay nombres con espacios, mayúsculas, doble extensión y espacio interno: `distancia-negro-mm26.svg.svg`, `fecha-sep5-negro-mm26.svg.svg`, `vista-completa-post- lanzamiento-2026.png`.

### Recursos huérfanos o dudosos

- `project-mm2026.css` y `project-mm2026.js` no tienen consumidor activo.
- HTML alternativo dentro de imágenes.
- `hero-principal.webp` y `banner-principal-pagina-interna-2026.svg` permanecen aunque el hero activo usa barras CSS y `logo-maraton-medellin-2026.svg`.
- PDF y SVG de documentos de campaña no incluidos en `maraton-2026-data.js` pueden ser originales deliberados, no necesariamente residuos.
- `.DS_Store` no aporta valor al sitio.

### Recursos repetidos

No se realizó comparación binaria completa de todos los medios. Sí existen representaciones paralelas de la misma campaña en SVG, PDF, PNG y WEBP, algunas necesarias como originales y otras posiblemente derivables. Se requiere inventario de procedencia antes de borrar.

### Pesos críticos

| Recurso | Tamaño aproximado |
|---|---:|
| `impresos/tijeras/tijera.pdf` | 8,5 GB |
| `impresos/numeros/numero-42k-21k-10k.pdf` | 199 MB |
| `impresos/valla/valla-mm.pdf` | 98 MB |
| `impresos/numeros/numero-5k.pdf` | 36 MB |
| `merchandising/coleccion-merch/merch.pdf` | 18 MB |
| vista completa de campaña PNG | 13 MB |
| bolsa kit PNG | 7,6–8,5 MB |
| varios módulos WEBP | 3–6 MB cada uno |

---

## 8. Responsive

### Comportamiento observado por código

- La home y el caso tienen reglas para reorganizar navegación, hero, grillas, tarjetas y footer.
- Se usan `clamp()`, contenedores fluidos, `100svh` y grillas adaptables.
- Las navegaciones horizontales admiten overflow.
- Las barras dinámicas cambian máscara/alcance en móvil.
- Los documentos pasan de 12 a 6 y luego a 12 columnas según ancho.

### Problemas encontrados

- Siete familias de breakpoint dificultan predecir la cascada.
- El selector de años y navegación de categorías tienen offsets específicos que deben probarse juntos.
- El hero móvil acumula logo, barras, titular, metadata y contenido inferior; puede crecer por encima de una pantalla y generar una primera experiencia densa.
- Las imágenes dinámicas carecen de dimensiones intrínsecas HTML.
- Recursos PNG/PDF muy pesados hacen que “responsive” visual no equivalga a rendimiento móvil aceptable.
- Falta evidencia automatizada o capturas permanentes para 375, 430, 768, 1366 y 1920 px.

### Mejoras posibles

- Adoptar breakpoints canónicos compartidos.
- Establecer pruebas visuales repetibles en los cinco anchos requeridos.
- Declarar `aspect-ratio`, `width` y `height` por formato de galería.
- Reducir densidad del hero en móvil.
- Validar navegación sticky y orientación horizontal.
- Generar `srcset`/`sizes` para imágenes raster.

---

## 9. Accesibilidad

### Fortalezas

- `lang="es"`.
- Navegaciones con `aria-label`.
- Logo con texto alternativo.
- Decoraciones principales con `aria-hidden`.
- Control range con etiqueta y `aria-label`.
- `:focus-visible` compartido.
- Soporte `prefers-reduced-motion` para barras y transiciones globales.
- Enlaces PDF con `target="_blank"` y `rel="noopener"`.
- Estructura de headings generalmente jerárquica.

### Riesgos y problemas

- Contraste no verificado de forma sistemática sobre gradientes, ruido y fondos dinámicos.
- El foco compartido usa magenta de marca incluso en contextos de campaña; puede no contrastar en todos los fondos.
- Galerías generadas dentro de regiones `aria-live="polite"` pueden anunciar mucho contenido al cargar.
- El contenido esencial de galerías desaparece si JavaScript falla.
- Los títulos de imágenes se usan como `alt` genérico; no siempre describen contenido o propósito.
- El footer usa un logo con `alt=""`, correcto por decorativo, pero conviene confirmar que el nombre visible sea suficiente.
- No se detectó enlace “saltar al contenido”.
- No se verificó navegación completa por teclado en esta auditoría estática.
- El contraste del texto secundario con opacidades cercanas a 0,64 puede fallar según fondo.

---

## 10. Rendimiento

### Peso del sitio

El mayor problema de rendimiento no está en CSS o JS, sino en los medios. Servir o desplegar directamente `assets/` implica un árbol de aproximadamente 9 GB. Un solo PDF representa cerca de 8,5 GB.

### Recursos grandes

- PDFs de decenas, cientos y miles de MB.
- PNG de 7–13 MB.
- WEBP de 3–6 MB, demasiado grandes pese al formato.
- SVG de hero de aproximadamente 1,4 MB.

### Carga de imágenes

- Las galerías usan `loading="lazy"` por JS.
- Home añade lazy loading a logos secundarios.
- Falta `decoding="async"`, `srcset`, `sizes` y dimensiones consistentes.
- El recurso principal de campaña de 13 MB se usa también en home.
- PDFs no deberían descargarse hasta interacción, pero su inclusión en el deploy sigue siendo costosa.

### CSS

- Aproximadamente 3.724 líneas.
- Una hoja alternativa de 938 líneas sin uso.
- Duplicación y sobrescritura aumentan bytes y coste de mantenimiento.
- El ruido SVG está incrustado más de una vez como Data URI.

### JavaScript

El JavaScript activo es pequeño y sin dependencias externas. Las animaciones usan `transform`, favorable para composición. Riesgos:

- creación de decenas de elementos decorativos;
- uso de `will-change` permanente en múltiples barras;
- render de galerías completo al cargar;
- observadores y listeners globales sin teardown, aceptable para páginas estáticas pero no ideal si se evoluciona a SPA.

### Oportunidades

1. Separar originales de producción web.
2. Crear derivados AVIF/WEBP responsivos.
3. Publicar PDFs optimizados o previews y alojar originales fuera del deploy.
4. Consolidar CSS activo.
5. Extraer una sola textura de ruido reutilizable o generar un asset minúsculo cacheable.
6. Añadir cache headers para assets versionados.
7. Medir Lighthouse después de estabilizar rutas.

---

## 11. Problemas detectados

### CRÍTICO

#### C1. Repositorio y deploy de tamaño extremo

- **Dónde:** raíz, `.git/` y `assets/images/projects/.../lanzamiento/`.
- **Por qué:** originales de producción y PDFs gigantes están dentro del árbol publicado; existen packs temporales Git.
- **Solución:** detener cualquier push, auditar Git, separar originales, usar almacenamiento externo/Git LFS si corresponde y conservar solo derivados web en el deploy.

#### C2. PDF de 8,5 GB dentro de assets públicos

- **Dónde:** `impresos/tijeras/tijera.pdf`.
- **Por qué:** parece un original de producción, no un documento web.
- **Solución:** generar versión optimizada/preview; mover el original fuera del publish tras aprobación.

#### C3. Navegación principal hacia páginas inexistentes

- **Dónde:** home y selector de años.
- **Por qué:** páginas rastreadas fueron eliminadas, pero los enlaces siguen presentes.
- **Solución:** restaurar páginas, crear estados “próximamente” o desactivar enlaces hasta que existan.

### ALTO

#### A1. Migración sin consolidar en `main`

- **Dónde:** Git completo.
- **Por qué:** 4 modificados, 35 eliminados y 29 rutas nuevas.
- **Solución:** inventario de intención, respaldo verificable y commits pequeños por tema; nunca commit masivo sin revisión.

#### A2. Arquitectura duplicada MM2026

- **Dónde:** `project.css`/`project.js`, alternativas `project-mm2026.*` y HTML dentro de imágenes.
- **Por qué:** iteraciones paralelas conservadas.
- **Solución:** designar consumidores canónicos, comparar y retirar solo con aprobación.

#### A3. Portabilidad de nombres

- **Dónde:** `campaña`, archivos con espacios, mayúsculas, doble `.svg.svg`.
- **Por qué:** recursos heredados no normalizados.
- **Solución:** mapa de migración de rutas, renombrado atómico y comprobador automático antes de publicar.

#### A4. Falta de dimensiones y derivados responsive

- **Dónde:** imágenes de home y galerías.
- **Por qué:** HTML/JS generan imágenes sin metadatos intrínsecos.
- **Solución:** registrar ancho/alto/formato en datos y producir `srcset`.

### MEDIO

#### M1. CSS acumulativo y duplicado

- **Dónde:** `styles.css` y `project.css`.
- **Por qué:** se agregan overrides al final en vez de consolidar reglas.
- **Solución:** separar tokens, base, componentes, layouts y temas; eliminar duplicados después de regresión visual.

#### M2. Contenido dinámico dependiente de JS

- **Dónde:** galerías y documentos MM2026.
- **Por qué:** contenedores vacíos se rellenan en runtime.
- **Solución:** pre-render estático o fallback `<noscript>`/HTML esencial.

#### M3. Contraste no garantizado

- **Dónde:** fondos vibrantes, ruido, notas y texto muted.
- **Por qué:** combinación dinámica de colores y opacidades.
- **Solución:** matriz de contraste por variante y tokens de texto por fondo.

#### M4. Metadatos editoriales desalineados

- **Dónde:** `proyecto.json`.
- **Por qué:** rutas declaradas omiten `lanzamiento/` y no se consumen.
- **Solución:** corregir esquema y convertirlo en fuente de verdad o retirarlo.

#### M5. Fotografía vacía y mensajes provisionales

- **Dónde:** sección `#fotografia` y “Siguiente paso”.
- **Por qué:** contenido no disponible.
- **Solución:** ocultar sección hasta disponer de recursos o redactar estado público intencional.

#### M6. Falta SEO social

- **Dónde:** ambos HTML.
- **Por qué:** solo title y description básicos.
- **Solución:** canonical, OG, Twitter, favicon, schema y sitemap.

### BAJO

#### B1. `.DS_Store`

- **Dónde:** múltiples carpetas.
- **Por qué:** residuos macOS.
- **Solución:** limpiar con aprobación; `.gitignore` ya excluye nuevos `.DS_Store`.

#### B2. Versionado manual por fecha

- **Dónde:** enlaces CSS/JS del caso.
- **Por qué:** invalidación de caché manual.
- **Solución:** hash de build o versión centralizada.

#### B3. `aria-live` potencialmente ruidoso

- **Dónde:** galerías.
- **Por qué:** se inyectan muchos items al cargar.
- **Solución:** retirar live region o limitarla a mensajes de estado.

#### B4. Falta skip link

- **Dónde:** ambas páginas.
- **Por qué:** navegación fija extensa.
- **Solución:** añadir enlace de salto al contenido con foco visible.

---

## 12. Plan de trabajo recomendado

### FASE 1 — Contención y respaldo

- **Objetivo:** evitar pérdida de trabajo y bloquear la entrada de archivos gigantes.
- **Archivos afectados:** Git, `.gitignore`, inventario de assets; sin tocar diseño.
- **Riesgo:** alto si se manipula Git sin respaldo.
- **Tiempo estimado:** 4–8 horas.
- **Acciones:** verificar operación Git incompleta, respaldo fuera del repo, clasificar eliminaciones, definir política para originales y no hacer push.

### FASE 2 — Estabilización de rutas

- **Objetivo:** eliminar 404 visibles.
- **Archivos afectados:** `index.html`, selector de años, páginas de proyecto, datos MM2026.
- **Riesgo:** medio.
- **Tiempo estimado:** 4–6 horas.
- **Acciones:** decidir restaurar/placeholder/desactivar; crear comprobador de rutas; corregir metadatos.

### FASE 3 — Estrategia de medios

- **Objetivo:** reducir el publish de 9 GB a un presupuesto web razonable.
- **Archivos afectados:** recursos de MM2026, datos de galerías, configuración de despliegue.
- **Riesgo:** alto por originales valiosos.
- **Tiempo estimado:** 2–5 días según disponibilidad de fuentes.
- **Acciones:** separar originales, generar previews, AVIF/WEBP, PDF optimizado y thumbnails; no eliminar originales sin aprobación.

### FASE 4 — Consolidación CSS

- **Objetivo:** reducir duplicación sin cambiar diseño.
- **Archivos afectados:** cuatro CSS.
- **Riesgo:** medio-alto por cascada.
- **Tiempo estimado:** 2–4 días.
- **Acciones:** tokens, base, componentes, páginas y temas; regresión visual en cinco anchos.

### FASE 5 — Consolidación JavaScript y datos

- **Objetivo:** una sola implementación activa por responsabilidad.
- **Archivos afectados:** cinco JS y `proyecto.json`.
- **Riesgo:** medio.
- **Tiempo estimado:** 1–2 días.
- **Acciones:** modularizar, decidir fuente de verdad, pre-render/fallback, retirar alternativas tras aprobación.

### FASE 6 — Responsive y accesibilidad

- **Objetivo:** cumplir 375, 430, 768, 1366 y 1920 px; WCAG AA en flujos principales.
- **Archivos afectados:** HTML y CSS activos.
- **Riesgo:** medio.
- **Tiempo estimado:** 1–3 días.
- **Acciones:** teclado, contraste, skip link, sticky, reducción de movimiento, dimensiones de medios y capturas comparativas.

### FASE 7 — Completar proyectos y contenido

- **Objetivo:** resolver destinos faltantes y estados provisionales.
- **Archivos afectados:** `proyectos/`, home y recursos.
- **Riesgo:** medio por créditos y autoría.
- **Tiempo estimado:** variable; 1–3 días por caso con contenido disponible.

### FASE 8 — SEO, QA y publicación

- **Objetivo:** publicación controlada.
- **Archivos afectados:** HTML, Netlify, sitemap, robots y 404.
- **Riesgo:** bajo después de estabilizar.
- **Tiempo estimado:** 1–2 días.

---

## 13. Recomendaciones técnicas

1. Mantener el sitio estático; no hay necesidad inmediata de framework.
2. Introducir un build mínimo solo si resuelve hashing, includes y optimización de assets.
3. Separar claramente `originales/` fuera del directorio publicado y `assets/` web.
4. No versionar archivos multigigabyte con Git convencional.
5. Adoptar un manifiesto de medios con ruta, alt, ancho, alto, formato, peso y variante responsive.
6. Convertir `proyecto.json` en fuente real o eliminar su ambigüedad.
7. Unificar tokens en `tokens.css`; preservar temas por proyecto.
8. Dividir CSS en `base`, `components`, `layout-home`, `layout-project` y `theme-mm2026`.
9. Mantener `shared-components.js` pequeño y desacoplado de identidades.
10. Pre-renderizar contenido editorial esencial.
11. Crear un script de CI que falle ante rutas locales inexistentes y archivos por encima de un umbral.
12. Añadir validación HTML, CSS, JS y contraste en CI.
13. Definir presupuesto: imágenes hero <500 KB, cards <250 KB, PDFs públicos preferiblemente <10 MB.
14. Servir originales pesados desde almacenamiento externo autorizado.
15. Añadir CSP después de resolver Google Fonts y Data URI.
16. Añadir `Cache-Control` para assets con hash.
17. Crear página 404, sitemap, robots, canonical y metadatos sociales.
18. Mantener créditos MIRAPALTECHO estructurados y revisados por caso.
19. Conservar KÒRSWILL como proyecto independiente en contenido y esquema.
20. No limpiar ni renombrar recursos hasta tener mapa de rutas y respaldo.

---

## 14. Resumen ejecutivo

PROJECT ATLAS tiene una home editorial avanzada y un caso de estudio de Maratón Medellín 2026 visualmente desarrollado. La base tecnológica —HTML, CSS y JavaScript estático— es apropiada, comprensible y suficiente para el objetivo. También existe una primera capa de componentes compartidos, soporte de foco visible, movimiento reducido, galerías dinámicas y una identidad de proyecto diferenciada.

El proyecto no está listo para publicación. El riesgo principal es operativo: el árbol completo ocupa aproximadamente 33 GB, `assets` ocupa 9 GB y contiene un PDF de 8,5 GB. El estado Git presenta 4 archivos modificados, 35 eliminados y 29 rutas nuevas/no rastreadas. Antes de cualquier commit o push debe crearse un respaldo verificable, investigar los packs temporales de Git y separar originales de producción de los derivados web.

El segundo riesgo es funcional: la home enlaza a proyectos inexistentes y el selector 2026 enlaza a cinco ediciones eliminadas. Solo existe una página canónica activa bajo `proyectos/`: Maratón Medellín 2026. Debe decidirse si se restauran páginas, se crean placeholders editoriales o se desactivan enlaces.

La deuda técnica principal está en CSS. Hay aproximadamente 3.724 líneas distribuidas en cuatro hojas, una de ellas alternativa y sin consumidor detectado. `project.css` y `styles.css` contienen múltiples redefiniciones de los mismos selectores y tokens. La arquitectura funciona por cascada acumulativa, lo que hace delicado cualquier cambio visual. JavaScript es pequeño, pero conserva una implementación alternativa duplicada y depende de globals.

Las prioridades son: 1) contener y respaldar; 2) corregir navegación rota; 3) definir estrategia de medios; 4) consolidar CSS/JS sin rediseño; 5) validar responsive, accesibilidad y rendimiento; 6) completar proyectos; 7) añadir SEO y publicar. Ninguna limpieza de recursos, renombrado, commit o despliegue debe ejecutarse hasta que la fase de contención esté aprobada.

