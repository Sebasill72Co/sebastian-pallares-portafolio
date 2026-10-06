# INFORME — REFINAMIENTO V3 MM2025

Fecha de validación: 15 de julio de 2026  
Alcance: micrositio de Maratón Medellín 2025  
Estado: implementación y validación terminadas, sin commit ni push.

## 1. Resumen de la intervención

La versión V3 corrige cuatro aspectos puntuales del micrositio MM2025 sin modificar otras ediciones ni reconstruir su arquitectura:

- el recorrido violeta integrado en la imagen del Hero fue sustituido por una versión rosa más suave;
- las cuatro secciones editoriales principales adoptaron una secuencia cromática cian, rosa, verde y morado;
- el laboratorio tipográfico incorporó archivos itálicos reales de Gopher y un control específico para activarlos;
- el sistema de distancias conservó su comportamiento, pero redujo su altura y densidad vertical.

## 2. Archivos modificados y creados

### Código

| Ruta | Intervención |
| --- | --- |
| `proyectos/maraton-medellin/2025/index.html` | Se conectó el Hero rosa, se añadió el control `Italic` al laboratorio tipográfico y se actualizaron los parámetros de versión de CSS y JavaScript. |
| `assets/css/mm2025-microsite.css` | Se declararon las familias itálicas reales, se aplicó la secuencia cromática V3, se ajustó el tracking de Gopher Black y se compactó el sistema de distancias. |
| `assets/js/mm2025-microsite.js` | Se añadió el manejo del estilo itálico real, su estado accesible con `aria-pressed` y su restablecimiento junto con peso y tamaño. |

### Recursos

| Ruta | Función |
| --- | --- |
| `assets/images/projects/maraton-medellin/2025/fondos/hero-principal-rosa.png` | Derivado maestro de la edición cromática del Hero. |
| `assets/images/projects/maraton-medellin/2025/fondos/hero-principal-rosa.jpg` | Derivado web usado por el micrositio; 1764 × 892 px y 413.115 bytes. |
| `assets/fonts/mm2025/gopher-italic.otf` | Gopher Italic, peso 400. |
| `assets/fonts/mm2025/gopher-medium-italic.otf` | Gopher Medium Italic, peso 500. |
| `assets/fonts/mm2025/gopher-bold-italic.otf` | Gopher Bold Italic, peso 700. |
| `assets/fonts/mm2025/gopher-black-italic.otf` | Gopher Black Italic, peso 900. |
| `docs/informe-refinamiento-v3-mm2025-color-hero-tipografia.md` | Informe técnico de la intervención y sus validaciones. |

El Hero original `assets/images/projects/maraton-medellin/2025/fondos/hero-principal.jpg` se conservó intacto. Los archivos tipográficos originales tampoco fueron movidos ni eliminados.

## 3. Hero

Se creó un derivado del fondo existente mediante edición visual asistida, con una instrucción quirúrgica: sustituir únicamente el recorrido morado por rosa suave `#EFC7BD`, conservando composición, textura, tipografía, jerarquía y elementos gráficos.

La landing utiliza el JPG optimizado mediante `background-image`, con la misma lógica de cobertura y posicionamiento responsive del Hero anterior. El cambio reduce la competencia cromática del recorrido con el titular blanco y mantiene el fondo morado dominante.

La revisión visual se realizó en escritorio y móvil. No se detectaron recortes que oculten el titular ni desbordamientos horizontales.

## 4. Sistema cromático por secciones

La secuencia quedó aplicada así:

| Sección | Color verificado en navegador | Tratamiento |
| --- | --- | --- |
| Historia | `rgb(0, 183, 206)` / `#00B7CE` | Fondo cian con textura integrada y contraste editorial. |
| Sistema visual | `rgb(239, 199, 189)` / `#EFC7BD` | Fondo rosa; titulares morados para mantener jerarquía y legibilidad. |
| Campaña | `rgb(76, 247, 124)` / `#4CF77C` | Fondo verde con textura y contraste oscuro. |
| Créditos | `rgb(57, 20, 89)` / `#391459` | Cierre morado con contraste claro. |

Los fondos conservan la textura ya disponible en MM2025. No se añadieron sombras pesadas, bordes decorativos ni colores ajenos a esta edición.

## 5. Tipografía

### Disponibilidad de Gopher Italic

**Sí estaba disponible una familia itálica real en los recursos temporales de MM2025.** Se localizaron y copiaron de forma no destructiva las variantes Regular Italic, Medium Italic, Bold Italic y Black Italic. No se simuló la inclinación con transformaciones CSS.

El laboratorio ahora permite combinar los pesos 400, 500, 700 y 900 con el estado itálico. La comprobación de Gopher Black Italic en navegador devolvió:

- familia: `Gopher MM25`;
- peso computado: `900`;
- estilo computado: `italic`;
- tracking computado a 70 px: `-0.84px`;
- solicitud del archivo `gopher-black-italic.otf`: HTTP 200/304, sin 404.

El tracking de la variante Black se abrió de forma moderada en titulares, pie y muestra tipográfica. El objetivo fue reducir la mancha cerrada sin debilitar su carácter.

## 6. Sistema de distancias

Se mantuvieron:

- las cuatro distancias 42K, 21K, 10K y 5K;
- el cambio de imagen, etiqueta, título y descripción;
- el área reservada para el recorrido real;
- los estados `aria-pressed` de los controles.

Se redujeron padding, márgenes, tamaño del título, interlínea, separación de controles y altura de los botones. En 1366 × 768 la sección pasó de 790 px en la línea base revisada a 721 px, una reducción aproximada de 8,7 %.

La interacción 10K fue probada y actualizó correctamente el rótulo a `Sistema por distancia · 10K` y el título a `El recorrido urbano concentra el gesto gráfico.`

## 7. Validación responsive

La validación se realizó en navegador local real, no por inferencia estática.

| Viewport | Ancho del documento | Alto del Hero | Alto del sistema de distancias | Imágenes rotas | Resultado |
| --- | ---: | ---: | ---: | ---: | --- |
| 375 × 812 | 375 px | 597 px | 713 px | 0 | Sin scroll horizontal ni solapamientos. |
| 430 × 900 | 430 px | 620 px | 768 px | 0 | Sin scroll horizontal ni solapamientos. |
| 768 × 1024 | 768 px | 598 px | 843 px | 0 | Sin scroll horizontal ni solapamientos. |
| 1366 × 768 | 1366 px | 618 px | 721 px | 0 | Sin scroll horizontal ni solapamientos. |
| 1440 × 900 | 1440 px | 720 px | 752 px | 0 | Sin scroll horizontal ni solapamientos. |
| 1920 × 1080 | 1920 px | 720 px | 808 px | 0 | Sin scroll horizontal ni solapamientos. |

Comprobaciones adicionales:

- el enlace activo `2025` con `aria-current="page"` permaneció visible en los seis tamaños;
- las cuatro secciones conservaron sus colores computados en todos los breakpoints;
- la proporción del escenario gráfico de distancias se mantuvo en 1:1;
- el Hero fue legible y no produjo ancho excedente;
- los controles tipográficos, de distancia y de momentos conservaron sus estados accesibles.

## 8. Validación funcional y técnica

- `node --check assets/js/mm2025-microsite.js`: correcto.
- `node --check assets/js/mm2025-microsite-config.js`: correcto.
- `git diff --check` sobre los archivos intervenidos: correcto.
- revisión de rutas locales de HTML y CSS: 0 rutas faltantes.
- consola del navegador: 0 errores registrados.
- registro del servidor local: 0 respuestas 404 durante la validación.
- laboratorio tipográfico: 5 controles operativos, incluidos Black e Italic.
- selector de distancias: 4 controles operativos.
- navegación por momentos: 3 controles; `Feria Exporunners` activó correctamente su panel.

## 9. Limitaciones y observaciones

- El derivado rosa del Hero tiene 1764 × 892 px, mientras el original conserva mayor resolución. Se verificó correctamente hasta 1920 px con cobertura de fondo, aunque una futura exportación manual desde el archivo fuente permitiría igualar la resolución original y garantizar correspondencia absoluta en detalles muy pequeños.
- La reducción de altura del sistema de distancias es deliberadamente moderada: preserva el cuadrado gráfico, el texto y el espacio reservado para el recorrido real. Compactarlo mucho más exigiría reconsiderar la composición, no solo el espaciado.
- No se modificaron contenido editorial, recursos de otras ediciones, Home, navegación global ni configuración de otros proyectos.

## 10. Estado de Git y cierre

No se creó rama, commit ni push. El repositorio ya contenía cambios previos y archivos sin seguimiento; la intervención se limitó a las rutas enumeradas en este informe y no restauró ni eliminó trabajo anterior.

