# INFORME — CORRECCIÓN DE PALETA Y FONDOS ESTÁTICOS MM2026

Fecha: 12 de julio de 2026  
Alcance: landing de Maratón Medellín 2026  
Estado: implementación temporal terminada y validada  

## 1. Resultado

La ejecución visible del sistema de barras dinámicas fue desconectada de la landing MM2026 y reemplazada por tres fondos horizontales estáticos. El laboratorio y los archivos del motor dinámico permanecen intactos y aislados para retomarlos en una fase posterior.

No se modificaron el Home principal, otros proyectos, KÒRSWILL, textos, créditos, galerías ni documentos editoriales. No se realizó commit ni push.

## 2. Archivos modificados

### `proyectos/maraton-medellin/2026/index.html`

- Se retiró el marcado de barras dinámicas del Hero y de la sección 01.
- Se retiró el control de ancho asociado a esas barras.
- Se sustituyeron las conexiones `data-bars-palette` por clases semánticas de fondos estáticos en las secciones seleccionadas.
- Se actualizaron únicamente los identificadores de versión de `project.css` y `project.js` para evitar caché obsoleta.
- No se alteraron textos, créditos ni estructura narrativa.

### `assets/css/project.css`

- Se incorporaron las variables cromáticas exactas de MM2026.
- Se añadieron las familias `mm26-static-bg--01`, `mm26-static-bg--02` y `mm26-static-bg--03`.
- Se configuró `background-size: cover`, sin repetición, sin bordes y con posiciones focales responsive.
- Se evitó una segunda capa de ruido sobre las imágenes, porque el granulado ya está integrado en los PNG.
- Se conservaron las reglas antiguas del experimento dinámico para facilitar su recuperación futura, pero ya no tienen consumidores en la landing.

### `assets/js/project.js`

- Se retiró la función que generaba los fondos dinámicos de edición y su llamada durante `DOMContentLoaded`.
- Se mantuvo intacta la lógica restante de la landing, incluida la construcción de galerías.

## 3. Recursos organizados

Los originales se conservaron en la carpeta temporal. Las copias son idénticas a los originales según su huella SHA-256.

| Apariencia | Ruta original | Ruta estable | Uso actual |
|---|---|---|---|
| Morado, azul y verde | `/Users/MPT5/Downloads/Material grafico temporal portafolio sebastian pallares/Maratón Medellín/2026/Barras/Banner fondo 1.png` | `assets/images/projects/maraton-medellin/2026/fondos-estaticos/banner-fondo-01.png` | Hero y sección 03 — Campaña |
| Rojo o magenta | `/Users/MPT5/Downloads/Material grafico temporal portafolio sebastian pallares/Maratón Medellín/2026/Barras/Banner fondo 2.png` | `assets/images/projects/maraton-medellin/2026/fondos-estaticos/banner-fondo-02.png` | Sección 01 — Resumen y sección 08 — Mockups |
| Verde con amarillo | `/Users/MPT5/Downloads/Material grafico temporal portafolio sebastian pallares/Maratón Medellín/2026/Barras/Banner fondo 3.png` | `assets/images/projects/maraton-medellin/2026/fondos-estaticos/banner-fondo-03.png` | Sección 06 — Impresos |

Los tres archivos tienen dimensiones de 3001 × 1265 px y conservan su textura original.

## 4. Sistema cromático aplicado

```css
--mm26-bg-primary: #4A0BAE;
--mm26-text-primary: #54CF88;
--mm26-accent-secondary: #7281F1;
--mm26-red-bg-title: #FFCB3E;
--mm26-red-bg-support: #F5F694;
--mm26-green-yellow-text: #641E28;
```

- Morado: superficies principales y navegación de edición.
- Verde: énfasis y titulares de la familia morada/azul/verde.
- Azul: acento secundario y componentes auxiliares.
- Amarillo y amarillo claro: titulares y soporte sobre la familia roja/magenta.
- Vino: texto de contraste sobre la familia verde/amarilla y superficies oscuras relacionadas.

La paleta queda encapsulada en la presentación de MM2026; no se aplicó al Home ni a otras páginas.

## 5. Desconexión temporal del motor

- La landing contiene 0 elementos `.dynamic-bars`.
- La landing contiene 0 controles `data-bars-control`.
- La landing contiene 0 configuraciones `data-bars-palette`.
- `project.js` ya no construye ni ejecuta fondos dinámicos.
- No se borraron `laboratorio-fondo.html`, `dynamic-backgrounds.css`, `dynamic-background-engine.js` ni `maraton-2026-backgrounds.js`.
- El laboratorio continúa siendo una implementación independiente y no es cargado por la landing.

## 6. Responsive y posiciones focales

Se validaron los tamaños obligatorios:

| Viewport | Scroll horizontal | Imágenes rotas | Barras dinámicas | Resultado |
|---|---:|---:|---:|---|
| 375 × 812 | No | 0 | 0 | Correcto |
| 430 × 900 | No | 0 | 0 | Correcto |
| 768 × 900 | No | 0 | 0 | Correcto |
| 1366 × 768 | No | 0 | 0 | Correcto |
| 1920 × 1080 | No | 0 | 0 | Correcto |

Posiciones focales aplicadas:

- Familia 01: centro visual `50% 50%`.
- Familia 02: centro vertical desplazado a `50% 54%`.
- Familia 03: foco desplazado hacia la zona verde/amarilla, `58% 52%`.

Todas las instancias usan `cover`, `no-repeat` y permanecen detrás del contenido.

## 7. Validaciones técnicas

- `node --check assets/js/project.js`: correcto.
- `git diff --check`: sin errores de espacios o marcadores de conflicto.
- Consola del navegador: 0 errores y 0 advertencias durante la validación.
- Carga de imágenes: 0 recursos `<img>` rotos.
- Las cinco instancias estáticas resolvieron su URL y calcularon `background-size: cover` en los cinco breakpoints.
- No se añadió una capa adicional de granulado sobre las imágenes.

## 8. Observaciones y límites de esta solución temporal

- Las secciones editoriales muy extensas muestran un recorte amplio del fondo por la propia lógica de `cover`; esto evita deformación, mosaico y costuras, pero reduce la cantidad de detalles visibles simultáneamente.
- Los PNG de 3001 × 1265 px son apropiados visualmente, aunque conviene generar variantes WEBP/AVIF y tamaños responsive en una fase de optimización. No se hizo ahora para conservar exactamente los recursos entregados.
- Persisten reglas CSS antiguas del laboratorio dentro de la hoja de proyecto. Están inactivas en la landing y se conservaron deliberadamente para no borrar configuraciones recuperables.
- El repositorio ya tenía numerosos cambios, archivos eliminados y recursos nuevos anteriores a esta tarea. No se revirtieron ni se incluyeron como parte de esta corrección.
- Las rutas de las ediciones 2021–2025 continúan apuntando a páginas ausentes en el estado actual del repositorio. Es una condición preexistente y quedó fuera del alcance para no modificar navegación ni otros proyectos.

## 9. Archivos creados en esta tarea

- `assets/images/projects/maraton-medellin/2026/fondos-estaticos/banner-fondo-01.png`
- `assets/images/projects/maraton-medellin/2026/fondos-estaticos/banner-fondo-02.png`
- `assets/images/projects/maraton-medellin/2026/fondos-estaticos/banner-fondo-03.png`
- `docs/informe-correccion-paleta-fondos-estaticos-mm2026.md`

## 10. Próximo paso recomendado

Realizar únicamente una revisión visual conjunta de la asignación de cada familia de fondo y sus puntos focales. Después de esa aprobación se puede abordar, como fase separada, la optimización de formatos y pesos sin reactivar todavía el motor dinámico.
