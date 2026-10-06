# INFORME — AJUSTES FINALES DE SISTEMA MM2026

**Proyecto:** PROJECT ATLAS — Maratón Medellín 2026  
**Fecha:** 13 de julio de 2026  
**Alcance:** navegación, paleta, tipografía, sistema gráfico y créditos  
**Estado:** implementación y validación completadas  

## 1. Archivos modificados

### `proyectos/maraton-medellin/2026/index.html`

- Se sustituyó la máscara de la flor/MM por una variante SVG web con trazo y fondo transparente.
- Se añadió la navegación secundaria de ediciones 2021–2026.
- Se amplió el laboratorio de Bricolage Grotesque, Gopher y Ziren.
- Se corrigió la descripción editorial de Ziren.
- Se reconstruyeron los módulos Distancias y Composición modular.
- Se actualizaron los parámetros de versión de CSS y JavaScript.

### `assets/css/mm2026-microsite.css`

- Se añadieron estilos para la flor detallada y la barra de años.
- Se normalizó el ancho base de los doce módulos de color.
- Se diseñaron los controles, especímenes y campos del laboratorio tipográfico.
- Se implementó la retícula 5/7 del sistema visual.
- Se diseñaron el explorador de distancias y las anotaciones de la composición modular.
- Se compactó la sección de créditos.
- Se añadieron ajustes responsive, de foco, scroll interno y movimiento reducido.

### `assets/js/mm2026-microsite-config.js`

- Se retiraron los pesos de ancho asimétricos de la paleta.
- Se añadieron los datos editoriales de las cuatro distancias.
- Se añadieron los tres principios verificables de la composición modular.

### `assets/js/mm2026-microsite.js`

- La banda cromática dejó de consumir pesos individuales.
- Se añadió el posicionamiento inicial de la barra de años en móvil.
- Se implementaron los controles tipográficos y su restablecimiento.
- Se implementó el selector de distancias.
- Se implementó el selector de principios de la composición modular.
- No se modificaron los renderizadores ni la lógica de Campaña en acción.

### `assets/images/projects/maraton-medellin/2026/lanzamiento/recursos-oficiales/flor-mm-verde-contorno.svg`

- Variante web derivada de la geometría oficial.
- Se ocultó únicamente la silueta exterior rellena.
- Se conservaron los trazos internos, pétalos y letras MM.
- Se aplicó el verde oficial `#54CF88` y se mantuvo el fondo transparente.

### `docs/informe-ajustes-finales-sistema-mm2026.md`

- Documento maestro de esta fase.

## 2. Flor/MM

- **Recurso original:** `assets/images/projects/maraton-medellin/2026/lanzamiento/recursos-oficiales/flor-mm-borde-blanco.svg`.
- **Recurso web utilizado:** `assets/images/projects/maraton-medellin/2026/lanzamiento/recursos-oficiales/flor-mm-verde-contorno.svg`.
- **Técnica:** SVG presentado mediante `<img>`, sin máscara monocromática y sin rasterización.
- **Trazo:** se conserva la geometría detallada del recurso oficial.
- **Rellenos:** se retiró de la presentación web la silueta exterior completamente rellena.
- **Color:** `#54CF88`.
- **Transparencia:** el interior y el fondo permanecen transparentes.
- **Enlace:** `#inicio`.
- **Nombre accesible:** “Volver al inicio del caso Maratón Medellín 2026”.
- **Responsive:** 40 px en escritorio, 36 px en tableta y 32 px en móvil, dentro de un área táctil mínima de 44 × 44 px.
- **Estados:** hover máximo `scale(1.05)`, active `scale(.98)` y foco visible.
- **Movimiento:** no existe animación permanente ni rotación.

## 3. Barra de ediciones

| Año | Ruta | Estado | Comportamiento |
|---|---|---|---|
| 2021 | Página no disponible en el árbol actual | Deshabilitado | `aria-disabled="true"`, sin `href` y sin navegación falsa |
| 2022 | Página no disponible en el árbol actual | Deshabilitado | `aria-disabled="true"`, sin `href` y sin navegación falsa |
| 2023 | Página no disponible en el árbol actual | Deshabilitado | `aria-disabled="true"`, sin `href` y sin navegación falsa |
| 2024 | Página no disponible en el árbol actual | Deshabilitado | `aria-disabled="true"`, sin `href` y sin navegación falsa |
| 2025 | Página no disponible en el árbol actual | Deshabilitado | `aria-disabled="true"`, sin `href` y sin navegación falsa |
| 2026 | `proyectos/maraton-medellin/2026/index.html` | Activo | Enlace real con `aria-current="page"` |

- La barra se ubica debajo del encabezado y antes del Hero.
- 2026 aparece en verde y permanece visible inicialmente en móvil.
- En móvil existe desplazamiento horizontal interno, `scroll-snap` y áreas de 76 × 48 px.
- Los años 2021–2025 pueden consultarse desplazando la barra, pero no generan enlaces 404.
- La página completa conserva cero desbordamiento horizontal.

## 4. Paleta

- Los doce colores utilizan ahora `flex: 1 1 0` como ancho base de escritorio.
- Se eliminaron del render y de la configuración los pesos asimétricos anteriores.
- En 1366 px, los once módulos inactivos midieron 93 px cada uno.
- En 1920 px, los once módulos inactivos midieron 105 px cada uno.
- El módulo activo conserva la ampliación: 181 px en 1366 y 207 px en 1920.
- En móvil y tableta, todos los módulos inactivos parten de 72 px y el activo utiliza 112 px.
- Se conservan los filtros por familia, el panel técnico, la demostración, hover, foco, clic y toque.
- La banda usa desplazamiento y `scroll-snap` internos en 375, 430 y 768 px.

## 5. Laboratorio tipográfico

### Bricolage Grotesque

- Mayúsculas, minúsculas, caracteres españoles, numerales, símbolos y muestra combinada.
- Campo editable propio.
- Rango: 14–144 px.
- Valor inicial: 64 px.
- Botón: “Restablecer Bricolage”.
- Ejes visibles conservados en ancho 100 y peso 500.

### Gopher

- Mayúsculas, minúsculas, caracteres españoles, numerales, símbolos y muestra combinada.
- Campo editable propio.
- Rango: 14–144 px.
- Valor inicial: 48 px.
- Botón: “Restablecer Gopher”.
- Se mantiene como fuente de lectura, información e interfaz.

### Ziren

- Mayúsculas, minúsculas, caracteres españoles, numerales, símbolos y muestra combinada.
- Campo editable propio.
- Rango: 14–144 px.
- Valor inicial: 64 px.
- Botón: “Restablecer Ziren”.
- Incluye una muestra adicional con 42K, 21K, 10K y 5K.

Los tres laboratorios actualizan inmediatamente la muestra, presentan el valor numérico en píxeles y restablecen tanto tamaño como contenido. Las líneas extensas usan desplazamiento interno cuando resulta necesario y no producen scroll horizontal de página.

## 6. Ziren

- La descripción anterior de uso restringido fue eliminada.
- La nueva descripción reconoce su función en numeración, distancias y titulares gráficos de campaña.
- Se mantienen las muestras numéricas 42K, 21K, 10K y 5K.
- El titular real utilizado es “¡Medellín corre contigo!”, tomado de la zona en español de la valla oficial disponible en `durante-campana/vallas/planos/valla-mm2026-plano.png`.
- El titular está identificado como ejemplo verificado de una aplicación oficial, no como texto inventado.

## 7. Distancias reconstruidas

- La cuadrícula de cuatro cuadros iguales se reemplazó por un explorador editorial.
- Cuatro botones reales permiten elegir 42K, 21K, 10K o 5K.
- El estado seleccionado utiliza `aria-pressed`.
- La distancia activa actualiza cifra, nombre, contexto, descripción, acento y gradiente.
- La cifra se mantiene como HTML real en Ziren.
- La composición relaciona la numeración con el dorsal de carrera, sin inventar especificaciones deportivas.
- Hover, foco y clic acceden al mismo contenido; el estado no depende solo del cursor.
- En escritorio ocupa cinco columnas; en tableta y móvil se apila a todo el ancho.

## 8. Composición modular

- **Imagen oficial:** `assets/images/projects/maraton-medellin/2026/fondos-estaticos/banner-fondo-03.png`.
- **Dimensiones declaradas:** 3001 × 1265 px.
- La imagen usa `width: 100%`, `height: auto` y `object-fit: contain`.
- Se eliminó el recorte con `cover` de la presentación anterior.
- La visualización ocupa siete columnas en escritorio.
- Los controles Ritmo, Gradiente y Continuidad actualizan una anotación y una zona de lectura superpuesta.
- La imagen original no se modifica y conserva proporción, textura y gradientes.
- En tableta y móvil el módulo se apila a todo el ancho.

## 9. Uso del ancho

- **Estructura anterior:** retícula de tres columnas; Distancias y Composición modular ocupaban una columna cada una y dejaban libre el tercer tercio derecho.
- **Estructura nueva:** retícula explícita de doce columnas.
- Distancias utiliza cinco columnas.
- Composición modular utiliza siete columnas.
- En 1366 px se midieron 522 px y 740 px respectivamente, dentro de un contenedor de 1284 px y un gap de 22 px.
- En 1920 px se midieron 587 px y 831 px respectivamente.
- A partir de 1050 px hacia abajo, ambos módulos utilizan las doce columnas y se apilan.
- No quedan columnas vacías ni espacios editoriales sin función.

## 10. Campaña en acción

No se modificaron:

- selector de momentos;
- collages;
- valla;
- escarapelas;
- dorsales;
- bolsa;
- variantes;
- movimiento;
- fondos;
- estructura;
- renderizadores JavaScript.

La validación confirmó el momento `campana` activo, las tres pestañas ARIA intactas, las rutas de plano y mockup sin cambios y una altura de escenario de 710 px en 1366 × 768, equivalente al estado aprobado anterior.

## 11. Equipo y créditos

- **Altura anterior medida en 1366 × 768:** 848 px.
- **Altura nueva medida en 1366 × 768:** 492 px.
- **Reducción aproximada:** 42 %.
- **Altura nueva en 1920 × 1080:** 479 px.
- Se redujeron padding vertical, margen previo a tarjetas, espacios internos y escala de títulos.
- En escritorio las tarjetas conservan una altura mínima compacta de 220 px.
- En móvil las tarjetas se apilan sin acordeones ni información oculta.
- Se conservaron Pablo Molina, Jorge Zapata, Santiago Ospina, Sebastian Pallares, MIRAPALTECHO, roles y atribuciones.
- Sebastian no se presenta como autor exclusivo.

## 12. Validación responsive

| Tamaño | Flor | Barra de años | Sistema visual | Créditos | Scroll horizontal | Imágenes rotas |
|---|---:|---|---|---:|---:|---:|
| 375 × 812 | 32 px | 2026 visible; scroll interno | 339 px por módulo, apilados | 897 px, apilado | 0 px | 0 |
| 430 × 900 | 32 px | 2026 visible; scroll interno | 394 px por módulo, apilados | 897 px, apilado | 0 px | 0 |
| 768 × 1024 | 36 px | 2026 visible; scroll interno | 722 px por módulo, apilados | 755 px, apilado | 0 px | 0 |
| 1366 × 768 | 40 px | Seis años visibles | Retícula 5/7 | 492 px | 0 px | 0 |
| 1920 × 1080 | 40 px | Seis años visibles | Retícula 5/7 | 479 px | 0 px | 0 |

Se tomaron capturas reales de navegador en los cinco tamaños. En todos se comprobaron navegación, Hero sin cambios, barra de años, carga de fuentes, presencia de controles, ausencia de imágenes rotas y ausencia de desbordamiento de página.

## 13. Validación técnica

- Consola: 0 errores y 0 advertencias.
- Rutas HTML, CSS y recursos dinámicos: 65 referencias revisadas, 0 faltantes.
- Enlaces de años inexistentes: 0 enlaces falsos.
- Imágenes rotas: 0.
- JavaScript: sintaxis válida en configuración y controlador.
- CSS: 468 llaves de apertura y 468 de cierre.
- SVG derivado: XML válido mediante `xmllint`.
- `git diff --check`: sin errores.
- Fuentes cargadas en navegador: Bricolage Grotesque, Gopher y Ziren.
- Controles tipográficos: tres rangos, tres campos y tres restablecimientos.
- Accesibilidad: nombres específicos, labels vinculados, botones reales, `aria-pressed`, `aria-current`, `aria-disabled` y foco visible.
- Movimiento reducido: se desactivan transiciones no esenciales de flor, paleta, distancias y anotaciones.
- Navegación táctil: áreas mínimas de 44 px y desplazamiento interno.
- Scroll horizontal de página: 0 px en los cinco tamaños.
- No se añadieron librerías, Canvas, WebGL, video ni listeners de scroll adicionales.

## 14. Elementos no modificados

No se modificaron:

- Hero ni sus recursos;
- Historia;
- frase y fondo de “Corre entre montañas”;
- estructura aprobada de Campaña en acción;
- piezas, collages y comparaciones de Campaña en acción;
- footer de campaña;
- Home principal;
- otros proyectos;
- contenido de otras ediciones;
- laboratorio de fondos;
- motor dinámico antiguo;
- textos editoriales fuera del alcance;
- atribuciones de créditos.

No se restauraron archivos eliminados por el usuario, no se creó rama, no se hizo commit y no se hizo push.

## 15. Pendientes reales

1. Las páginas 2021–2025 no existen actualmente en el árbol de trabajo; sus años permanecen deshabilitados hasta que haya rutas válidas.
2. Las equivalencias oficiales CMYK y Pantone de la paleta continúan pendientes de validación de producción.
3. La organización definitiva de las piezas restantes no forma parte de esta fase.

## 16. Próximo paso

Revisión visual final del sistema de marca antes de organizar las piezas restantes.
