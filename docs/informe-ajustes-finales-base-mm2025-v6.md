# INFORME — AJUSTES FINALES DE BASE MM2025 V6

Fecha: 15 de julio de 2026  
Proyecto: PROJECT ATLAS — Maratón Medellín 2021–2026  
Estado: implementación y validación técnica local completadas; validación visual manual pendiente por política de seguridad.

## 1. Archivos modificados

| Ruta | Motivo |
|---|---|
| `assets/css/mm-edition-base.css` | Convertir el menú anual compartido de MM2021–MM2024 en un componente temático basado en variables semánticas, eliminando la paleta fija de MM2025. |
| `assets/js/mm-edition-base.js` | Conectar las variables del menú anual con la configuración real de cada edición y limitar el centrado del año activo al eje horizontal. |
| `proyectos/maraton-medellin/2021/index.html` | Actualizar las versiones de CSS y JavaScript compartidos. |
| `proyectos/maraton-medellin/2022/index.html` | Actualizar las versiones de CSS y JavaScript compartidos. |
| `proyectos/maraton-medellin/2023/index.html` | Actualizar las versiones de CSS y JavaScript compartidos. |
| `proyectos/maraton-medellin/2024/index.html` | Actualizar las versiones de CSS y JavaScript compartidos. |
| `assets/css/mm2025-microsite.css` | Centralizar el tema anual 2025, unificar el offset de anclas y sustituir el banner del footer por el fondo morado oficial. |
| `assets/js/mm2025-microsite.js` | Sustituir `scrollIntoView()` por un cálculo horizontal que no altera el hash ni el desplazamiento vertical. |
| `proyectos/maraton-medellin/2025/index.html` | Actualizar las versiones de CSS y JavaScript de la fase V6. |
| `assets/css/mm2026-microsite.css` | Restaurar el tema del menú anual con la paleta oficial violeta y verde de MM2026. |
| `proyectos/maraton-medellin/2026/index.html` | Actualizar la versión de la hoja de estilos MM2026. |
| `docs/informe-ajustes-finales-base-mm2025-v6.md` | Documentar alcance, decisiones y validaciones de la fase. |

No se modificaron el Home, otras carreras, contenidos editoriales, tipografías, piezas, créditos ni recursos originales.

## 2. Temas por edición

El componente anual ahora utiliza estas siete variables semánticas:

```css
--mm-editions-bg;
--mm-editions-text;
--mm-editions-border;
--mm-editions-hover-bg;
--mm-editions-hover-text;
--mm-editions-active-bg;
--mm-editions-active-text;
```

| Edición | Fondo menú | Activo | Texto activo | Fuente de verdad |
|---|---|---|---|---|
| 2021 | `#FFFFFF` | `#6B5A8E` | `#FFFFFF` | `assets/js/mm2021-config.js` |
| 2022 | `#FFFFFF` | `#9A623F` | `#FFFFFF` | `assets/js/mm2022-config.js` |
| 2023 | `#FFFFFF` | `#327467` | `#FFFFFF` | `assets/js/mm2023-config.js` |
| 2024 | `#FFFFFF` | `#466A9B` | `#FFFFFF` | `assets/js/mm2024-config.js` |
| 2025 | `#00B7CE` | `#391459` | `#4CF77C` | Variables oficiales de `mm2025-microsite.css` |
| 2026 | `#4A0BAF` | `#54CF88` | `#4A0BAF` | Variables oficiales de `mm2026-microsite.css` |

Las ediciones 2021–2024 conservan los temas neutrales existentes porque sus paletas definitivas aún no están documentadas. No reciben colores de 2025 ni 2026.

Contraste calculado del estado activo:

| Edición | Relación de contraste |
|---|---:|
| 2021 | 6.04:1 |
| 2022 | 5.01:1 |
| 2023 | 5.48:1 |
| 2024 | 5.53:1 |
| 2025 | 10.51:1 |
| 2026 | 5.44:1 |

Todos los estados activos superan el mínimo AA de 4.5:1 para texto normal.

## 3. MM2025

El menú anual mantiene su identidad aprobada:

- fondo cian `#00B7CE`;
- texto morado `#391459`;
- bordes morados translúcidos;
- hover claro con texto morado;
- edición activa morada con texto verde neón `#4CF77C`;
- estado activo a la altura completa de la celda;
- `aria-current="page"` conservado en 2025.

La navegación principal, el Hero, Historia, Sistema visual, Campaña, Créditos, paleta interactiva, tipografías y piezas no fueron modificados.

## 4. MM2026

Se eliminó la sobrescritura cian/morada heredada de V5. El menú anual vuelve a usar la identidad propia de 2026:

- superficie violeta `#4A0BAF`;
- texto blanco;
- bordes verdes translúcidos;
- hover verde `#54CF88` con texto violeta;
- edición activa verde con texto violeta;
- etiqueta introductoria verde;
- foco visible con contorno verde;
- `aria-current="page"` conservado en 2026.

No se alteraron secciones, recursos, narrativa, interacciones ni créditos de MM2026.

## 5. Footer MM2025

### Recurso utilizado

- Original temporal: `/Users/MPT5/Downloads/Material grafico temporal portafolio sebastian pallares/Maratón Medellín/2025/Recursos/Fondo - variación 1.png`
- Dimensiones originales: 2948 × 1201 px.
- Ruta final existente: `assets/images/projects/maraton-medellin/2025/fondos/fondo-variacion-01.jpg`
- Dimensiones optimizadas: 2400 × 977 px.
- Proporción final: aproximadamente 2.456:1.

El archivo final ya existía en el repositorio como derivado web del recurso oficial; no se creó una copia redundante ni se modificó el original temporal.

### Tratamiento

- La frase permanece en un bloque morado plano independiente con textura integrada.
- El bloque siguiente usa únicamente el fondo morado oficial.
- No contiene texto, overlays ni elementos editoriales superpuestos.
- Conserva la altura aprobada mediante `clamp(72px, 9vw, 132px)`.
- En anchos hasta 800 px utiliza `clamp(72px, 18vw, 110px)`.
- Usa `background-size: cover`, posición central y fondo de respaldo morado.
- No se deforma, repite ni genera costuras.

Alturas resultantes por viewport:

| Viewport | Altura del banner |
|---|---:|
| 375 px | 72 px |
| 430 px | 77.4 px |
| 768 px | 110 px |
| 1366 px | 122.9 px |
| 1440 px | 129.6 px |
| 1920 px | 132 px |

La proporción muy horizontal del contenedor exige recorte vertical del fondo para conservar la altura aprobada. Al ser una textura gráfica sin texto central, se mantiene el foco en el centro y no se pierde información editorial.

## 6. Anclajes MM2025

### Estrategia

Se creó una única fuente de verdad:

```css
--mm25-anchor-gap: 16px;
--mm25-anchor-offset:
  calc(
    var(--mm25-header-h) +
    var(--mm25-editions-h) +
    var(--mm25-anchor-gap)
  );
```

`html { scroll-padding-top }` y las cinco secciones con hash usan exactamente `--mm25-anchor-offset`. Se eliminó la diferencia previa entre 24 px de `scroll-padding-top` y 16 px de `scroll-margin-top`.

### Offsets por breakpoint

| Rango | Header | Menú anual | Aire | Offset total |
|---|---:|---:|---:|---:|
| Escritorio, más de 800 px | 72 px | 78 px | 16 px | 166 px |
| Tableta, 561–800 px | 72 px | 52 px | 16 px | 140 px |
| Móvil, hasta 560 px | 64 px | 52 px | 16 px | 132 px |

### JavaScript

El centrado del año 2025 dejó de utilizar `scrollIntoView()`, que podía modificar también el eje vertical durante una carga con hash. Ahora calcula `offsetLeft` y actualiza únicamente `scrollLeft` del carril anual. El cálculo se repite mediante un único `requestAnimationFrame` cancelable al cambiar el ancho del viewport.

No se añadieron temporizadores, listeners de clic duplicados ni interceptores de hash. Por ello se conserva el comportamiento nativo para:

- clic;
- teclado sobre enlaces;
- URL con hash;
- carga directa con hash;
- Atrás y Adelante.

La estrategia coincide con MM2026: offset CSS calculado a partir de las alturas sticky y alineación anual exclusivamente horizontal.

## 7. Validación responsive

La política activa `project-atlas-locked` prohíbe navegador, MCP y conectores. Por ello no se ejecutó automatización visual ni se presentan capturas como si hubieran sido verificadas. Se realizó validación estática de reglas, breakpoints, rutas, proporciones y offsets para los seis tamaños solicitados.

| Tamaño | Tema anual | Año activo | Offset MM2025 | Banner | Scroll global |
|---|---|---|---:|---|---|
| 375 × 812 | Variables móviles | Celda completa | 132 px | 72 px | Sin reglas nuevas que amplíen el viewport |
| 430 × 900 | Variables móviles | Celda completa | 132 px | 77.4 px | Sin reglas nuevas que amplíen el viewport |
| 768 × 1024 | Variables tableta | Celda completa | 140 px | 110 px | Carril anual con overflow interno |
| 1366 × 768 | Variables escritorio | Celda completa | 166 px | 122.9 px | Sin ancho fijo nuevo |
| 1440 × 900 | Variables escritorio | Celda completa | 166 px | 129.6 px | Sin ancho fijo nuevo |
| 1920 × 1080 | Variables escritorio | Celda completa | 166 px | 132 px | Sin ancho fijo nuevo |

Revisión visual manual pendiente:

1. confirmar el encuadre central del banner morado;
2. comprobar que la franja visible antes de Historia, Sistema visual, Campaña y Créditos coincida perceptualmente con MM2026;
3. confirmar la lectura cromática del menú anual en los seis tamaños.

## 8. Validación técnica

- `node --check` aprobado en los controladores y configuraciones de MM2021–MM2026 involucrados.
- 167 referencias locales, recursos y destinos de ancla verificados.
- 0 rutas faltantes.
- Todos los enlaces principales de MM2025 resuelven a identificadores existentes.
- No queda `scrollIntoView()` en el controlador MM2025.
- El carril anual conserva overflow horizontal interno y no introduce ancho fijo de página.
- El banner utiliza una ruta relativa canónica y existente.
- El bloque visual del footer permanece vacío y con `aria-hidden="true"`; no contiene texto superpuesto.
- `git diff --check` aprobado en los HTML rastreados intervenidos.
- No se detectaron espacios finales en CSS o JavaScript modificados.
- No se hicieron commit, push ni ramas.

No se afirma una validación de consola en navegador porque su uso está prohibido por la política activa. La sintaxis JavaScript y las rutas sí quedaron comprobadas localmente.

## 9. Próximo paso

Realizar únicamente una revisión visual manual de MM2025 y MM2026 en los seis tamaños solicitados. Si el encuadre del banner y los anclajes se aprueban, la base puede considerarse estable antes de continuar cargando piezas gráficas.
