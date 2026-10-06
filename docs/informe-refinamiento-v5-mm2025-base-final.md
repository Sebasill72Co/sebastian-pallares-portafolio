# INFORME — REFINAMIENTO V5 MM2025 Y BASE FINAL DE EDICIONES

Fecha de cierre: 15 de julio de 2026  
Proyecto: PROJECT ATLAS — Maratón Medellín 2021–2026  
Repositorio: `/Users/MPT5/Desarrollo/sebastian-pallares-portafolio`

## 1. Alcance ejecutado

Se consolidó una base visual común para la cabecera principal y el selector anual de las seis ediciones de Maratón Medellín, sin uniformar la dirección artística interna de cada año. La intervención específica de MM2025 corrigió el comportamiento cromático de navegación y paleta, la numeración inicial, la textura y la separación editorial del cierre. En MM2026 se incorporó el módulo de estudio solicitado y se corrigió la conservación de la edición activa al cambiar de ancho.

No se modificaron el Home principal, otros proyectos, recursos visuales ni ediciones ajenas a Maratón Medellín. No se crearon ramas, commits ni pushes.

## 2. Archivos modificados

### Base compartida

- `assets/css/mm-edition-base.css`
  - Unifica la geometría de cabecera y selector anual de MM2021–MM2024.
  - Define logo personal, símbolo de campaña, navegación centrada, regreso al portafolio y estados de foco.
  - Establece el selector anual cian, edición activa morada con texto lima y adaptación responsive.

### Maratón Medellín 2021–2024

- `proyectos/maraton-medellin/2021/index.html`
- `proyectos/maraton-medellin/2022/index.html`
- `proyectos/maraton-medellin/2023/index.html`
- `proyectos/maraton-medellin/2024/index.html`
  - Actualización de versión de la hoja compartida para cargar la base V5.
  - Se confirmó el menú común: Historia, Sistema visual, Campaña y Créditos.

### Maratón Medellín 2025

- `proyectos/maraton-medellin/2025/index.html`
  - Actualización controlada de versiones de CSS y JavaScript.
- `assets/css/mm2025-microsite.css`
  - Cabecera y selector anual alineados con la base común.
  - Selector anual cian y edición activa a altura completa.
  - Numeral `01` fijado al morado oficial `#391459`.
  - Estado visual del laboratorio de paleta conectado a variables dinámicas de contraste.
  - Cierre editorial separado en una superficie morada plana con textura sutil y banner visual posterior independiente.
- `assets/js/mm2025-microsite.js`
  - Navegación activa calculada con un punto de lectura estable del viewport.
  - Barra activa por sección: blanco en Inicio y Créditos, cian en Historia, rosa en Sistema visual y lima en Campaña.
  - Mapeo de contraste del laboratorio cromático sin coincidencia entre muestra activa y superficie.

### Maratón Medellín 2026

- `proyectos/maraton-medellin/2026/index.html`
  - Menú homologado a Historia, Sistema visual, Campaña y Créditos.
  - Incorporación del módulo de crédito: Estudio — MIRAPALTECHO — Proyecto desarrollado en contexto colaborativo.
  - Actualización de versiones de CSS y JavaScript.
- `assets/css/mm2026-microsite.css`
  - Geometría de cabecera y selector anual alineada con el sistema común.
  - Créditos redistribuidos en cuatro, dos y una columna según el ancho disponible.
- `assets/js/mm2026-microsite.js`
  - Reajuste del selector anual al redimensionar para mantener visible la edición 2026 activa.

### Documentación

- `docs/informe-refinamiento-v5-mm2025-base-final.md`
  - Documento de cierre técnico y visual de esta fase.

## 3. Sistema común de cabecera

La cabecera conserva tres zonas en escritorio: identidad personal a la izquierda, navegación de campaña centrada y regreso al portafolio a la derecha. En tableta y móvil pasa a dos zonas, mantiene el menú horizontal y oculta únicamente el enlace de regreso para evitar colisiones.

Medidas comprobadas:

| Rango | Logo personal | Símbolo flor/MM | Cabecera | Regreso |
|---|---:|---:|---:|---|
| 375–430 px | 42 px | 34 px | 65 px aprox. | Oculto |
| 768 px | 48 px | 34 px | 72 px | Oculto |
| 1366–1920 px | 48 px | 34 px | 72 px | Visible y alineado a la derecha |

La navegación conserva enlaces reales y estados `:focus-visible`. No se introdujeron menús desplegables ni JavaScript adicional para la cabecera.

## 4. Selector anual de ediciones

- Fondo común: cian `#00B7CE`.
- Texto base: morado `#391459`.
- Edición activa: fondo morado `#391459` y texto lima `#4CF77C`.
- Altura de escritorio: 79 px de contenedor y 78 px de estado activo.
- Altura hasta 800 px: 53 px de contenedor y 52 px de estado activo.
- El estado activo ocupa toda la altura útil, sin cápsulas ni márgenes verticales.
- En anchos pequeños el carril admite desplazamiento horizontal interno, pero no produce scroll horizontal en el documento.
- MM2026 recalcula la posición del carril después de `resize`, evitando que el año activo quede fuera del área visible.

## 5. Refinamientos específicos de MM2025

### Hero y numeración

- Se mantuvo la textura oficial como capa visual ligera, con opacidad `0.12`.
- El numeral `01` utiliza exactamente el morado oficial `#391459`.
- No se alteraron logos, textos editoriales ni recursos del Hero.

### Navegación cromática por sección

La detección se realiza con un punto de lectura situado al 45 % de la altura del viewport. Se ejecuta de forma limitada mediante `requestAnimationFrame` durante `scroll` y `resize`, lo que evita estados atrasados o dependientes del orden de entrega de `IntersectionObserver`.

| Sección | Color de barra activa |
|---|---|
| Inicio | Blanco |
| Historia | Cian `#00B7CE` |
| Sistema visual | Rosa `#EFC7BD` |
| Campaña | Lima `#4CF77C` |
| Créditos | Blanco |

El enlace activo también recibe `aria-current="location"`.

### Laboratorio de paleta

El color seleccionado nunca se usa simultáneamente como fondo inmediato. El sistema comprobado es:

| Muestra activa | Superficie de contraste |
|---|---|
| Cian | Rosa |
| Rosa | Cian |
| Morado | Lima |
| Lima | Morado, con texto blanco |

### Cierre y footer

- El bloque editorial final utiliza fondo morado plano y una sola textura sutil.
- La imagen `mini-banner.jpg` se mantiene en el bloque visual posterior, no como degradado o mezcla del cierre.
- Espacio visual comprobado a 1366 px: aproximadamente 123 px.

## 6. Ajuste de créditos MM2026

La sección ahora contiene cuatro responsabilidades diferenciadas:

1. Rol de Sebastian Pallares.
2. Equipo.
3. Estudio: MIRAPALTECHO.
4. Dirección creativa: Pablo Molina.

La retícula utiliza cuatro columnas en escritorio, dos hasta 1050 px y una hasta 560 px. Se conserva el contexto colaborativo y no se atribuye autoría exclusiva.

## 7. Validación responsive

Se inspeccionaron las seis ediciones —2021, 2022, 2023, 2024, 2025 y 2026— en los seis tamaños solicitados. Total: 36 combinaciones aprobadas.

| Viewport | Ediciones aprobadas | Scroll horizontal | Año activo visible | Imágenes rotas |
|---|---:|---|---|---:|
| 375 × 812 | 6/6 | No | Sí | 0 |
| 430 × 900 | 6/6 | No | Sí | 0 |
| 768 × 1024 | 6/6 | No | Sí | 0 |
| 1366 × 768 | 6/6 | No | Sí | 0 |
| 1440 × 900 | 6/6 | No | Sí | 0 |
| 1920 × 1080 | 6/6 | No | Sí | 0 |

En cada combinación también se confirmó:

- símbolo flor/MM de 34 px;
- menú Historia / Sistema visual / Campaña / Créditos;
- fondo cian del selector anual;
- edición activa completamente visible;
- ancho del documento igual al ancho del viewport.

## 8. Validaciones técnicas

- Sintaxis JavaScript aprobada con `node --check` en:
  - `assets/js/mm-edition-base.js`;
  - `assets/js/mm2025-microsite.js`;
  - `assets/js/mm2025-microsite-config.js`;
  - `assets/js/mm2026-microsite.js`;
  - `assets/js/mm2026-microsite-config.js`.
- 127 referencias locales de HTML y CSS verificadas; 0 rutas faltantes.
- Consola del navegador: 0 errores.
- Servidor local: todos los recursos solicitados respondieron con estado 200 o 304; 0 respuestas 404.
- `git diff --check` sin errores de espacios en los HTML intervenidos.

## 9. Estado del repositorio y límites de la fase

El repositorio ya contenía cambios previos y archivos no rastreados antes de esta intervención. No se restauró, eliminó ni sobrescribió trabajo ajeno a la fase V5. El estado permanece sin commit.

La cabecera de MM2021–MM2024 se controla desde una hoja compartida. MM2025 y MM2026 conservan hojas propias porque sus direcciones artísticas y estructuras ya son distintas; en esta fase solo se alinearon sus reglas de navegación. Una extracción adicional de tokens podría reducir duplicación en el futuro, pero conviene realizarla como refactor independiente con regresión visual completa.

Las páginas 2021–2024 siguen siendo estructuras editoriales preparatorias. La validación de esta fase cubre navegación, rutas y responsive, no la incorporación de contenido definitivo de esas ediciones.

## 10. Conclusión

MM2025 queda establecida como base editorial final de esta fase: cabecera consistente, selector anual legible, navegación activa cromática, paleta con contraste real y cierre visual correctamente separado. Las seis ediciones comparten una lectura de navegación coherente sin perder su capacidad de tener una dirección artística propia. MM2026 conserva su micrositio actual y añade el reconocimiento explícito a MIRAPALTECHO dentro de créditos.

El siguiente paso recomendado es aprobar visualmente esta base antes de iniciar contenido definitivo o nuevas migraciones de edición.
