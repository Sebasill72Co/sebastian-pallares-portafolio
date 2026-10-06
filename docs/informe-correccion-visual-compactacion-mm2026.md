# INFORME — CORRECCIÓN VISUAL Y COMPACTACIÓN EDITORIAL MM2026

Fecha: 12 de julio de 2026  
Alcance: landing Maratón Medellín 2026  
Estado: implementación y validación terminadas  

## 1. Resultado

La landing quedó reorganizada alrededor de una jerarquía cromática dominante violeta/verde. Se eliminaron visualmente los fondos generales vinotinto y azul marino, se reservaron los colores secundarios para funciones específicas y las imágenes horizontales ahora ocupan el ancho completo del viewport sin márgenes laterales ni deformación.

También se redujo la escala de títulos, numeraciones, tarjetas y espacios verticales; se compactaron las retículas de imágenes y se amplió la explicación de Branding usando únicamente recursos existentes.

No se implementaron piezas 2021–2025, bolsa del kit, arquitectura por momentos, nuevos mockups ni nuevas piezas gráficas.

## 2. Archivos modificados

### `proyectos/maraton-medellin/2026/index.html`

- Se reemplazaron las clases cromáticas heredadas por `section-flat--primary` y `section-flat--green`.
- Créditos, Branding, Merchandising y Aplicaciones quedaron sobre el violeta principal.
- Fotografía quedó como superficie alterna verde.
- Se incorporó en Branding una síntesis editorial de color, tipografía y composición.
- Se actualizaron las versiones de caché de CSS y de los datos MM2026.

### `assets/css/project.css`

- Se centralizaron las variables semánticas solicitadas.
- Se impuso la jerarquía violeta, verde, blanco y azul secundario sobre estilos heredados.
- Se eliminó visualmente el vinotinto del cierre del Hero, los créditos y el footer.
- Se anuló el pseudo-fondo azul marino que ocultaba los banners estáticos de Impresos y Mockups.
- Se convirtieron las imágenes horizontales y la imagen principal de campaña en full-bleed real.
- Se compactaron títulos, numeraciones, paddings, tarjetas, documentos y módulos de aplicaciones.
- Se reorganizaron los módulos cuadrados/verticales en cuatro columnas de escritorio.
- Se añadieron estilos para los fundamentos del sistema visual en Branding.

### `assets/js/maraton-2026-data.js`

- Se añadió la paleta cromática existente a la galería de Branding.
- No se cambió la arquitectura del generador ni se agregaron recursos nuevos.

## 3. Jerarquía cromática aplicada

```css
--mm26-bg-primary: #4A0BAE;
--mm26-text-primary: #54CF88;
--mm26-text-body: #FFFFFF;
--mm26-accent-secondary: #7281F1;
--mm26-green-surface: #54CF88;
--mm26-green-surface-text: #4A0BAE;
--mm26-red-banner-title: #FFCB3E;
--mm26-red-banner-support: #F5F694;
--mm26-yellow-green-banner-text: #641E28;
```

- `#4A0BAE`: fondo dominante, navegación y superficies editoriales.
- `#54CF88`: titulares, énfasis y superficie alterna.
- Blanco: párrafos, descripciones e información funcional.
- `#7281F1`: numeraciones, etiquetas, líneas e indicadores.
- Amarillos: restringidos a la familia roja/magenta.
- `#641E28`: restringido al texto sobre la familia verde/amarilla.

Las declaraciones antiguas continúan presentes en zonas heredadas de la hoja para no realizar una refactorización destructiva, pero quedan anuladas visualmente en el caso MM2026 mediante la capa semántica final.

## 4. Full-bleed y medios

- La vista general de campaña ocupa exactamente el ancho del viewport.
- Todos los módulos horizontales ocupan exactamente el ancho del viewport.
- Se usa `width: 100vw`, altura automática y sin repetición.
- No hay estiramiento desproporcionado, costuras, bordes redondeados ni scroll horizontal.
- Los pies de foto conservan una línea editorial contenida para lectura.
- Los fondos estáticos mantienen el grano integrado y ya no están cubiertos por el pseudo-fondo azul marino heredado.

## 5. Compactación editorial

- Secciones: padding vertical fluido entre 72 y 108 px en escritorio, 68 px en tamaños menores.
- Títulos: `clamp(3rem, 6.5vw, 7rem)` con interlínea `0.95`; se reduce nuevamente en móvil.
- Numeraciones: `clamp(3.75rem, 7vw, 7rem)` y azul secundario con menor opacidad.
- Créditos: tarjetas de 250 px mínimos en escritorio, menor padding y radios más contenidos.
- Documentos: 170 px mínimos en escritorio y altura natural en móvil.
- Aplicaciones: 230 px mínimos y separación interna reducida.
- Galerías cuadradas/verticales: cuatro columnas en escritorio y una columna en móvil.
- El alto total en 1366 px pasó de aproximadamente 22.699 px antes de la fase a 16.920 px después de la compactación, una reducción cercana al 25 % sin ocultar recursos.

## 6. Branding / sistema visual

La sección ya no se limita a presentar módulos. Ahora introduce tres fundamentos:

1. Color: jerarquía violeta, verde y azul secundario.
2. Tipografía: relación entre impacto y legibilidad funcional.
3. Composición: bloques verticales, escalas variables y textura continua.

La galería incorpora 15 recursos existentes, incluida la paleta HEX y la textura del sistema. No se crearon nuevas piezas visuales.

## 7. Dirección por sección

- Hero: violeta dominante, verde como énfasis y blanco para lectura.
- Resumen: banner rojo/magenta con amarillos reservados a esa familia.
- Créditos: violeta, titulares verdes y tarjeta destacada verde.
- Campaña: familia azul/violeta/verde.
- Branding: violeta con estructura editorial verde/azul.
- Fotografía: superficie verde alterna con texto violeta.
- Impresos: banner verde/amarillo con texto vino.
- Merchandising: violeta con titulares verdes.
- Mockups: banner rojo/magenta con título amarillo.
- Aplicaciones y cierre: violeta principal.

## 8. Validaciones

| Viewport | Scroll horizontal | Imágenes rotas | Full-bleed | Barras dinámicas |
|---|---:|---:|---:|---:|
| 375 × 812 | No | 0 | Correcto | 0 |
| 430 × 900 | No | 0 | Correcto | 0 |
| 768 × 900 | No | 0 | Correcto | 0 |
| 1366 × 768 | No | 0 | Correcto | 0 |
| 1920 × 1080 | No | 0 | Correcto | 0 |

Validaciones adicionales:

- Consola: 0 errores y 0 advertencias.
- `node --check` correcto para `project.js` y `maraton-2026-data.js`.
- `git diff --check` sin errores.
- Balance de llaves CSS correcto.
- Paleta y textura de Branding disponibles en sus rutas.
- El laboratorio y el motor dinámico permanecen sin cambios.

## 9. Límites y siguientes decisiones

- Fotografía continúa sin recursos registrados; se corrigió su dirección cromática, pero no se inventó contenido.
- Los PDF de Impresos y Mockups continúan representados como tarjetas funcionales; no se generaron previsualizaciones nuevas.
- La página sigue siendo extensa porque conserva todos los recursos actuales de Campaña y Branding. La compactación redujo el recorrido, pero una curaduría posterior podría seleccionar piezas protagonistas y mover el resto a grupos desplegables.
- No se abordaron las ediciones 2021–2025 ni la estructura futura en tres momentos.

## 10. Próximo paso recomendado

Realizar una revisión visual conjunta del balance entre las secciones violeta, verde y los tres banners estáticos. Después de aprobar esta jerarquía, la siguiente fase puede definir la curaduría de piezas y la arquitectura narrativa futura sin volver a alterar la base cromática.
