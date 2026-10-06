# INFORME — REFINAMIENTO V4 MM2025

Fecha: 15 de julio de 2026  
Proyecto: PROJECT ATLAS — Maratón Medellín 2025  
Estado: implementación y validación local terminadas; sin commit, push ni rama nueva.

## 1. Alcance ejecutado

La fase V4 refinó la versión existente de MM2025 sin reconstruirla ni modificar MM2026, Home, otras ediciones o recursos originales.

Se trabajó en:

- uniformidad geométrica del header respecto a MM2026;
- continuidad y opacidad de las texturas;
- jerarquía del índice `01`;
- orden cromático y estados de Historia;
- contraste interno del Sistema visual;
- color de tabs y moduladores de Campaña;
- estructura, contenido y orden cromático de Créditos;
- reorganización visual del cierre.

## 2. Archivos modificados

| Ruta | Cambio |
| --- | --- |
| `proyectos/maraton-medellin/2025/index.html` | Actualización de versión CSS, eliminación del párrafo superior derecho en Créditos y contenido definitivo de “Participación de Sebastian”. |
| `assets/css/mm2025-microsite.css` | Reglas V4 de header, texturas, transición Hero/Historia, tarjetas, laboratorios, distancias, tabs, créditos, footer y responsive. |
| `docs/informe-refinamiento-v4-mm2025-uniformidad-menu-secciones.md` | Registro de implementación, validaciones y limitaciones. |

No fue necesario modificar `assets/js/mm2025-microsite.js` ni `assets/js/mm2025-microsite-config.js`.

## 3. Uniformidad del header

MM2026 se utilizó exclusivamente como referencia geométrica. No se copiaron su paleta ni sus textos.

La normalización aplicada a MM2025 incluye:

- header de ancho completo y 72 px de altura en escritorio/tableta;
- padding horizontal compartido: `clamp(18px, 3vw, 48px)`;
- logo personal de 48 × 48 px en escritorio;
- retícula `1fr auto 1fr`, que centra la navegación como grupo;
- enlace “← Proyectos” anclado al mismo borde derecho que MM2026;
- separación responsive equivalente;
- en móvil, logo de 42 px, navegación horizontal accesible y enlace “← Proyectos” oculto, igual que en MM2026.

### Comparación medida en 1366 px

| Elemento | MM2026 | MM2025 V4 |
| --- | ---: | ---: |
| Logo personal, posición X | 40,98 px | 40,98 px |
| Logo personal, ancho | 48 px | 48 px |
| Centro de la navegación | 683 px | 683 px |
| Borde derecho de “← Proyectos” | 1325,02 px | 1325,03 px |
| Altura del header | 72 px | 72 px |

En 375 px, ambas ediciones ubican el logo en X = 18 px, con ancho de 42 px, y comienzan la navegación en X = 72 px.

La lógica ya está lista para replicarse en otros proyectos mediante las mismas variables geométricas. La unificación completa futura requerirá extraer el header a un componente compartido; en esta fase se normalizó MM2025 sin ampliar el alcance ni alterar otras páginas.

## 4. Hero y transición hacia Historia

- El recorrido rosa y la composición del Hero se conservaron.
- La textura del Hero se reactivó como una capa independiente con opacidad `0.12`.
- Hero, Historia, Sistema visual, Campaña y Créditos comparten la misma lógica de textura continua, tamaño de patrón y mezcla `soft-light`.
- Historia y Campaña dejaron de aplicar la textura directamente como fondo opaco; ahora usan una capa controlable equivalente a la del Hero.
- Se añadió un solape técnico de 1 px entre Hero e Historia y un remate cian interno para eliminar la costura visible sin alterar la composición.

La medición en los seis tamaños devolvió una transición constante de `-1 px`, intencional y sin franja transparente.

## 5. Historia

El índice `01` utiliza ahora una mezcla morada de mayor valor tonal, con opacidad completa. Permanece integrado en la composición pero ya no se pierde sobre el fondo cian.

Orden definitivo de tarjetas:

1. cian;
2. rosa;
3. verde;
4. morado.

El estado `hover`, foco y foco visible cambia a:

- fondo blanco cálido `#FFFDF9`;
- texto morado `#391459`;
- foco visible conservado.

El estado fue comprobado mediante foco real del navegador.

## 6. Sistema visual

La sección conserva su fondo rosa general, pero los módulos internos ahora se distinguen por función:

| Módulo | Tratamiento V4 |
| --- | --- |
| Paleta | Cian aclarado, texto morado y comportamiento interactivo conservado. |
| Tipografía | Fondo morado, texto rosa y acentos verdes; controles activos verdes. |
| Aplicaciones de marca | Introducción verde, banda de aplicaciones sobre separación morada y colores oficiales de cada aplicación. |
| Sistema de distancias | Contenedor morado, controles rosa/verde y reserva de recorrido real cian con retícula morada. |

La imagen oficial de distancia mantiene su espacio, proporción e interacción. El área “Recorrido real · Contenido pendiente” permanece intacta.

## 7. Campaña en acción

- Los tabs inactivos pasaron de blanco a rosa.
- El tab activo conserva presencia morada, con texto rosa e índice verde.
- Los controles internos del Día de carrera siguen la misma lógica rosa/morado.
- Se conservaron `aria-selected`, `aria-pressed`, navegación por tabs y panel único visible.

Pruebas funcionales:

- 3 momentos disponibles;
- activación correcta de “Feria Exporunners”;
- panel Exporunners visible después de la interacción;
- 4 controles de distancia operativos;
- cambio a 10K correcto.

## 8. Créditos

Se eliminó el párrafo situado en la parte superior derecha del encabezado.

Orden definitivo de tarjetas:

1. cian — Pablo Molina;
2. rosa — equipo habitual;
3. verde — MIRAPALTECHO;
4. morado — participación de Sebastian.

La cuarta tarjeta quedó con el contenido solicitado:

- etiqueta: `PARTICIPACIÓN DE SEBASTIAN`;
- título: `Diseño y ejecución visual`;
- cuerpo: `Desarrollo de piezas digitales, merchandising, medallas, números, gran formato y materiales para la carrera.`

Se conservaron los créditos obligatorios de Pablo Molina, MIRAPALTECHO, Jorge Zapata y Santiago Ospina.

## 9. Cierre

- El bloque “VIVE LA CIUDAD. CORRE MEDELLÍN.” mantiene fondo morado, textura y tratamiento tipográfico.
- La franja azul anterior basada en `hero-principal.jpg` fue retirada.
- La franja inferior utiliza ahora `assets/images/projects/maraton-medellin/2025/fondos/mini-banner.jpg`, recurso oficial 2025 con imagen de carrera, símbolo MM, fecha y mensaje de campaña.
- La proporción del recurso se conserva mediante `background-size: cover`, sin mosaico ni deformación.

### Nota sobre la referencia adjunta

La orden menciona una imagen específica adjunta, pero el archivo Markdown no contiene una imagen embebida ni una ruta asociada. También se revisaron los archivos recientes de Descargas: las imágenes identificables corresponden a MM2026 y no se incorporaron para evitar contaminar la identidad 2025. Se eligió `mini-banner.jpg` como sustitución oficial y verificable. Si se aporta posteriormente otra imagen 2025 específica, la franja está preparada para reemplazar únicamente su `background-image`.

## 10. Validación responsive

| Viewport | Header | Hero | Transición Hero/Historia | Columnas Historia/Créditos | Franja final | Scroll horizontal | Imágenes rotas |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| 375 × 812 | 65 px | 597 px | -1 px | 1 / 1 | 128 px | No | 0 |
| 430 × 900 | 65 px | 620 px | -1 px | 1 / 1 | 146 px | No | 0 |
| 768 × 1024 | 72 px | 598 px | -1 px | 1 / 1 | 210 px | No | 0 |
| 1366 × 768 | 72 px | 618 px | -1 px | 4 / 4 | 377 px | No | 0 |
| 1440 × 900 | 72 px | 720 px | -1 px | 4 / 4 | 398 px | No | 0 |
| 1920 × 1080 | 72 px | 720 px | -1 px | 4 / 4 | 530 px | No | 0 |

En los seis tamaños:

- `scrollWidth` coincidió con el ancho del viewport;
- el año 2025 activo permaneció visible;
- la textura del Hero mantuvo opacidad `0.12`;
- no hubo solapamientos ni imágenes rotas;
- el cierre conservó la proporción visual del mini banner.

## 11. Validación técnica y accesibilidad

- `node --check assets/js/mm2025-microsite.js`: correcto.
- `node --check assets/js/mm2025-microsite-config.js`: correcto.
- `git diff --check` sobre el HTML intervenido: correcto.
- rutas locales de HTML y CSS: 0 faltantes.
- consola del navegador: 0 errores.
- servidor local: 0 respuestas 404.
- foco visible de las tarjetas: correcto.
- `aria-current="page"`: visible en los seis tamaños.
- `aria-selected` y `aria-pressed`: conservados y operativos.
- `prefers-reduced-motion`: conservado.
- objetivos táctiles del header y controles: mínimo de 42–44 px donde corresponde.

## 12. Estado de Git

No se creó rama, commit ni push. El repositorio ya contenía numerosos cambios previos y archivos sin seguimiento; no se restauró ni eliminó ningún archivo y la intervención quedó limitada a las rutas enumeradas en este informe.

