# INFORME — PALETA CINÉTICA Y ESCENARIO EDITORIAL MM2026

**Proyecto:** PROJECT ATLAS — Maratón Medellín 2026  
**Fecha:** 13 de julio de 2026  
**Alcance:** encabezado, paleta y tres momentos del micrositio MM2026  
**Estado:** implementación y validación completadas  

## 1. Archivos modificados

### `proyectos/maraton-medellin/2026/index.html`

- Se trasladó la flor/MM al interior del menú, inmediatamente antes de “Historia”.
- Se reemplazó la cuadrícula estática de doce muestras por el fallback semántico del escenario cromático.
- Se convirtió el selector de momentos en una navegación editorial numerada.
- Se añadió un fallback HTML del primer momento con valla plana y mockup.
- Se actualizaron los parámetros de versión de CSS y JavaScript.

### `assets/css/mm2026-microsite.css`

- Se recoloreó la flor mediante máscara CSS.
- Se diseñaron la banda cromática, el panel técnico, la demostración y los filtros de familias.
- Se reemplazó la cápsula de momentos por un selector compacto de 68 px en escritorio.
- Se crearon tres retículas editoriales diferenciadas.
- Se incorporaron estados responsive, táctiles, de foco y movimiento reducido.
- El contenido con `data-reveal` permanece visible cuando JavaScript no se ejecuta.

### `assets/js/mm2026-microsite-config.js`

- Se centralizaron los doce colores oficiales y sus datos técnicos.
- Se modelaron comparaciones, roles, tipos de pieza, variantes y recursos pendientes.
- Se declararon dimensiones reales de todas las imágenes utilizadas.

### `assets/js/mm2026-microsite.js`

- Se implementó la selección de color y familia.
- Se implementaron los tres renderizadores editoriales.
- Se añadieron selectores de rol, distancia, tipo de pieza y frente/reverso.
- Se mantuvieron las pestañas ARIA y la navegación con flechas, Inicio y Fin.
- Se corrigió la estrategia de mejora progresiva para conservar el fallback sin JavaScript.

### `docs/informe-paleta-cinetica-escenario-editorial-mm2026.md`

- Documento maestro de la fase.

## 2. Encabezado

- El logo profesional permanece aislado en el extremo izquierdo y conserva su enlace al portafolio.
- La flor/MM está dentro del elemento `nav`, antes de “Historia”.
- El color renderizado y comprobado es `rgb(84, 207, 136)`, equivalente a `#54CF88`.
- La técnica utilizada es `mask`/`-webkit-mask` con el SVG oficial existente. El SVG no fue editado, duplicado ni rasterizado.
- La flor enlaza a `#inicio`.
- Tamaño visual: 40 px en escritorio, 36 px en tableta y 32 px en móvil.
- Área interactiva mínima: 44 × 44 px.
- En móvil, la navegación permanece visible y entra completa en 375 px.
- Tiene foco global visible y un hover/active limitado a `scale(1.05)`.
- No existe animación permanente ni rotación continua.

## 3. Paleta anterior

Se retiró como presentación principal la cuadrícula de doce tarjetas idénticas. Los datos HEX no fueron eliminados: se trasladaron al modelo central de configuración y se muestran mediante controles interactivos dentro de una sola composición.

## 4. Paleta cinética

### Banda modular

- Doce módulos verticales contiguos.
- Sin gaps, bordes individuales ni redondeos por color.
- Pesos de ancho asimétricos declarados en configuración.
- El módulo activo se expande y revela familia y HEX.
- Los demás tonos reducen su presencia sin desaparecer.

### Familias y selector

- Todos.
- Oscuros.
- Vibrantes.
- Apoyo.

El selector enfatiza la familia elegida y permite volver al conjunto completo. No elimina definitivamente los demás tonos.

### Color activo

El color activo actualiza:

- módulo seleccionado;
- fondo interno del laboratorio;
- nombre y familia;
- datos técnicos;
- función;
- parejas recomendadas;
- gradiente;
- demostración editorial.

### Panel técnico

Solo presenta la información completa del color activo. Esto reduce repetición y mantiene estable la altura del laboratorio.

### Demostración

La aplicación compacta incluye etiqueta, título, texto, botón y gradiente. Su fondo y contraste cambian con el color seleccionado.

### Interacción

- Escritorio: hover, foco o clic seleccionan el color.
- Móvil: toque mantiene el color activo.
- La banda usa desplazamiento horizontal y `scroll-snap` en móvil.
- Duración visual: 250–400 ms.
- No hay saltos verticales ni cambio automático de color.

## 5. Datos de color

### HEX y RGB

Los doce HEX se conservaron según la documentación y configuración vigente:

- Oscuros: `#641E28`, `#4A0BAF`, `#325541`, `#FFCB3E`.
- Vibrantes: `#DF3760`, `#7281F1`, `#54CF88`, `#F5F694`.
- Apoyo: `#E19BA5`, `#A4AFFE`, `#98FFC3`, `#FEFEDB`.

Los valores RGB son conversiones exactas de los HEX.

### CMYK

Los valores CMYK fueron calculados desde sRGB y están identificados de forma visible como **Aproximado**. No se presentan como especificación oficial de impresión.

### Pantone

No se encontró una equivalencia Pantone Solid Coated validada en los documentos vigentes. Todos los colores muestran **Pendiente de validación** en lugar de inventar una referencia.

### Función y parejas

Cada registro incorpora:

- función semántica dentro del sistema;
- dos parejas recomendadas;
- gradiente relacionado;
- color de texto para la demostración.

Toda la información está centralizada en `MM26_MICROSITE.paletteColors`.

## 6. Accesibilidad de la paleta

- Cada módulo es un botón real con nombre descriptivo.
- El color activo utiliza `aria-pressed`.
- Los filtros de familia utilizan `aria-pressed`.
- Foco, clic, toque y teclado producen el mismo estado persistente.
- Los datos esenciales permanecen visibles; no dependen exclusivamente de hover.
- No se usa `aria-live`, evitando anuncios excesivos.
- En movimiento reducido se eliminan expansión animada y transiciones, manteniendo los cambios de contenido.
- El fallback HTML muestra el primer color y toda su información técnica sin JavaScript.

## 7. Selector de momentos

- Altura en escritorio: 68 px.
- Altura en móvil: 58–60 px.
- Cada pestaña muestra número y nombre.
- La pestaña activa usa fondo verde, texto violeta y línea inferior.
- El estado se actualiza con `aria-selected` y `tabindex` roving.
- Se conservan `role="tablist"`, `role="tab"` y `aria-controls`.
- Navegación probada con flechas; también se mantienen Inicio y Fin.
- No existe autoplay ni cambio automático.

## 8. Durante la campaña

### Composición

Retícula horizontal expansiva con:

- diseño plano a la izquierda;
- mockup urbano como pieza central;
- información editorial a la derecha;
- publicaciones y estados pendientes en una tira inferior.

### Piezas

- Valla plana.
- Mockup urbano de valla.
- Publicaciones Lanzamiento 01, 03 y 05.
- Historias identificadas como recurso pendiente.
- Futuras piezas exteriores identificadas como pendientes.

### Movimiento

Plano y mockup entran desde direcciones opuestas entre 280 y 450 ms. La interacción no modifica textos ni bloquea el scroll.

## 9. Feria Exporunners

### Composición

Escenario verde con sensación espacial:

- escarapela plana;
- mockup aplicado;
- información del rol;
- siete miniaturas compactas;
- área inferior para futuras aplicaciones.

### Roles disponibles

1. Staff.
2. Prensa.
3. Expositor.
4. Organización.
5. Fotógrafo.
6. Patrocinador.
7. All Access.

Cada selección actualiza plano, mockup, nombre, texto alternativo, dimensiones y estado `aria-pressed` sin cambiar el scroll.

### Recursos futuros

Backings, tótems, panelería, stand y punto de información permanecen identificados como pendientes.

## 10. Día de la carrera

### Composición

Escenario rojo/vinotinto con dos niveles de control:

1. tipo de pieza;
2. variante de la pieza.

### Selector de piezas

- Dorsal.
- Bolsa.
- Próximas aplicaciones.

### Dorsales

- 42K.
- 21K.
- 10K.
- 5K.

Cada distancia actualiza diseño plano, aplicación, título, texto alternativo y estado.

### Bolsa

- Frente.
- Reverso.

Ambas vistas muestran plano y mockup enfrentados en la misma retícula.

### Próximas aplicaciones

Camiseta, cinta de meta, kilometraje y podio se muestran como pendientes, sin recursos ficticios.

## 11. Plano y mockup

Piezas enfrentadas:

- valla de campaña;
- escarapelas de los siete roles;
- dorsales 42K, 21K, 10K y 5K;
- bolsa del kit, frente y reverso.

Los planos usan `object-fit: contain`. Los mockups usan `cover` dentro de áreas limitadas y sin deformación.

## 12. Variantes

- Publicaciones: miniaturas con estado seleccionado.
- Escarapelas: miniaturas por rol.
- Dorsales: botones por distancia.
- Bolsa: botones frente/reverso.
- Tipos de carrera: botones Dorsal, Bolsa y Próximas.

Las variantes actualizan la misma vista principal, no recargan la página y no alteran el scroll. Todos los selectores usan botones reales y `aria-pressed`.

## 13. Densidad

- Altura anterior estimada del momento en escritorio: aproximadamente 1.000–1.150 px, sumando cabecera, imagen 16:5.25, carrusel y controles.
- Altura nueva medida en 1366 × 768: 710 px.
- Altura nueva medida en 1920 × 1080: 760 px.
- Reducción estimada del escenario activo: 29–38 %.
- Las imágenes principales se limitan a 300–500 px de alto según breakpoint.
- En móvil el escenario se apila para conservar plano y mockup; no utiliza `100vh`.

## 14. Validación responsive

| Tamaño | Resultado visual | Scroll horizontal | Imágenes rotas | Altura del momento |
|---|---|---:|---:|---:|
| 375 × 812 | Correcto | 0 px | 0 | 1.074 px, apilado |
| 430 × 900 | Correcto | 0 px | 0 | 1.047 px, apilado |
| 768 × 1024 | Correcto | 0 px | 0 | 811 px |
| 1366 × 768 | Correcto | 0 px | 0 | 710 px |
| 1920 × 1080 | Correcto | 0 px | 0 | 760 px |

En los cinco tamaños se tomaron capturas reales de navegador. La flor permaneció verde y el ancho de la página coincidió con el viewport.

## 15. Validación técnica

- Consola: 0 errores.
- Rutas estáticas y dinámicas: 0 faltantes.
- Imágenes rotas en navegador: 0.
- JavaScript: sintaxis válida en configuración y controlador.
- CSS: llaves balanceadas.
- `git diff --check`: sin errores.
- Imágenes secundarias: `loading="lazy"` y `decoding="async"`.
- Dimensiones declaradas según los archivos reales.
- Accesibilidad: botones reales, foco visible, tabs ARIA y estados `aria-pressed`.
- Movimiento reducido: CSS y JavaScript eliminan animación no esencial.
- Scroll horizontal de página: 0 px en los cinco tamaños.
- Funcionamiento sin JavaScript probado visualmente con ambos scripts desactivados temporalmente y restaurados después:
  - primer color visible;
  - información técnica visible;
  - primer momento visible;
  - valla plana y mockup visibles;
  - elementos `data-reveal` con opacidad 1;
  - 0 imágenes rotas;
  - 0 scroll horizontal.

## 16. Elementos no modificados

No se modificaron:

- Hero y sus recursos;
- Historia;
- composición “Corre entre montañas”;
- laboratorio tipográfico;
- composición modular oficial;
- créditos;
- footer;
- Home principal;
- otras carreras;
- ediciones 2021–2025;
- laboratorio de fondos;
- motor dinámico antiguo.

Dentro de Key Visual se sustituyó únicamente la presentación de la paleta, que era el alcance explícito de esta fase.

## 17. Pendientes reales

1. Validación oficial de equivalencias CMYK de impresión.
2. Validación oficial de Pantone Solid Coated.
3. Recursos de historias para Durante campaña.
4. Futuras piezas exteriores.
5. Backings, tótems, panelería, stand y punto de información de Exporunners.
6. Camiseta, cinta de meta, kilometraje y podio del Día de carrera.

No se inventaron imágenes ni especificaciones para cubrir estos pendientes.

## 18. Próximo paso

Organizar definitivamente las piezas dentro de los tres momentos aprobados.
