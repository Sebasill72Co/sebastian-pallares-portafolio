# INFORME — AJUSTES MM2026 Y PLANTILLAS DE EDICIONES 2021–2025

## 1. Archivos modificados

### MM2026

- `proyectos/maraton-medellin/2026/index.html`
  - Se sustituyó la referencia de la flor verde por la flor/MM blanca oficial.
  - Se añadió el texto introductorio de la barra de ediciones.
  - Los años 2021–2025 dejaron de ser estados deshabilitados y pasaron a ser enlaces reales.
  - Se agregó foco por teclado a los cuatro bloques de Historia.
  - Se añadió el bloque “Aplicaciones principales del logotipo” con diez combinaciones verificadas.
  - Se actualizó la versión de carga de la hoja CSS para invalidar caché.
- `assets/css/mm2026-microsite.css`
  - Se añadió la interacción por contraste de Historia.
  - Se construyó la retícula responsive de aplicaciones oficiales del logotipo.
  - Se reforzó jerarquía, contraste y comportamiento responsive de la barra de ediciones.
  - Se añadieron reglas específicas para foco visible, dispositivos táctiles y movimiento reducido.
- `assets/images/logos/maraton-medellin-flor-blanca.svg`
  - Recurso oficial nuevo, copiado sin alterar desde la carpeta temporal.
  - Se ubicó en la biblioteca compartida para evitar duplicación y acoplamiento de las plantillas a la carpeta 2026.

### Arquitectura compartida 2021–2025

- `assets/css/mm-edition-base.css`
  - Sistema visual neutral, responsive y accesible para las ediciones en construcción.
- `assets/js/mm-edition-base.js`
  - Aplicación de tema por configuración, año activo, año de copyright y posicionamiento de la edición actual.
- `assets/js/mm2021-config.js`
- `assets/js/mm2022-config.js`
- `assets/js/mm2023-config.js`
- `assets/js/mm2024-config.js`
- `assets/js/mm2025-config.js`
  - Configuraciones independientes con `status: "draft"`, tema temporal, tipografía de sistema, Hero pendiente, paleta vacía y momentos vacíos.
- `proyectos/maraton-medellin/2021/index.html`
- `proyectos/maraton-medellin/2022/index.html`
- `proyectos/maraton-medellin/2023/index.html`
- `proyectos/maraton-medellin/2024/index.html`
- `proyectos/maraton-medellin/2025/index.html`
  - Cinco rutas reconstruidas como plantillas nuevas, sin restaurar el contenido anterior eliminado por el usuario.
- `docs/informe-ajustes-mm2026-plantillas-ediciones-2021-2025.md`
  - Documento maestro de esta fase.

No se modificaron el Home, otros proyectos, el laboratorio de fondos, los textos editoriales aprobados de MM2026 ni los scripts del micrositio 2026.

## 2. Flor/MM blanca

- **Archivo temporal encontrado:** `/Users/MPT5/Downloads/Material grafico temporal portafolio sebastian pallares/Maratón Medellín/2026/Recursos/Logo Menú Principal, landing.svg`.
- **Formato:** SVG vectorial, lienzo cuadrado con `viewBox="0 0 2343 2343"` y relleno blanco.
- **Ruta final:** `assets/images/logos/maraton-medellin-flor-blanca.svg`.
- **Integridad:** el archivo de origen y la copia final producen el mismo MD5: `7ada046d9eaf98c7b044f017920b8b7e`.
- **Verificación visual:** el navegador confirmó carga completa, geometría cuadrada y lectura correcta del símbolo MM en blanco.
- **Referencia verde:** se eliminó del menú de MM2026 la referencia a `flor-mm-verde-contorno.svg`; el archivo anterior no se borró.
- **Tamaño:** 44 × 44 px declarados en MM2026 y 34 × 34 px en las plantillas neutrales.
- **Responsive:** conserva proporción y no genera desbordamiento en 375, 430, 768, 1366 ni 1920 px.
- **Foco:** el enlace contenedor conserva foco visible por teclado.
- **Enlace:** en cada edición conduce al Hero de la página actual mediante `#inicio`.

## 3. Historia interactiva

- **Bloques afectados:** Contexto, Problema, Proceso y Conclusión.
- **Hover:** el bloque activo usa verde MM2026 con texto violeta y una elevación sutil.
- **Foco:** cada `article` es alcanzable por teclado mediante `tabindex="0"` y muestra un contorno visible de alto contraste.
- **Contraste:** el texto, la etiqueta y el párrafo cambian conjuntamente para mantener lectura clara.
- **Hermanos:** cuando un bloque está activo, los otros tres bajan a `opacity: .44`.
- **Estabilidad:** el efecto utiliza color, opacidad y transformación; no cambia medidas, padding ni flujo y no produce saltos de layout.
- **Móvil:** en dispositivos táctiles de hasta 800 px se mantiene una presentación estable y legible sin depender de hover.
- **Movimiento reducido:** las transiciones y transformaciones se eliminan con `prefers-reduced-motion: reduce`, pero el contraste y el foco permanecen.

La validación de foco confirmó un módulo verde activo, tres módulos atenuados y ausencia de reflujo.

## 4. Aplicaciones principales del logotipo

### Documentos y activos utilizados

- Documento oficial: `/Users/MPT5/Desktop/Clientes - Escritorio/Maratón Medellín/2026/Recursos Graficos/Elementos editables/Logo - Maraton Medellin Sistecrédito 2026 - Aplicaciones Principales.pdf`.
- El PDF oficial fue renderizado y revisado visualmente como una matriz de cinco columnas por dos filas.
- Activo vectorial utilizado: `assets/images/projects/maraton-medellin/2026/lanzamiento/recursos-oficiales/logo-vertical-blanco-mm26.svg`.

### Combinaciones implementadas

1. Negro / blanco.
2. Blanco / negro.
3. Vino `#641E28` / rosa apoyo `#E19BA5`.
4. Magenta `#DF3760` / amarillo `#FFCB3E`.
5. Violeta `#4A0BAF` / azul apoyo `#A4AFFE`.
6. Azul `#7281F1` / violeta `#4A0BAF`.
7. Verde oscuro `#325541` / verde vibrante `#54CF88`.
8. Verde vibrante `#54CF88` / verde oscuro `#325541`.
9. Amarillo `#FFCB3E` / vino `#641E28`.
10. Lima `#F5F694` / vino `#641E28`.

### Implementación

- La geometría se centraliza en un solo SVG oficial usado como máscara CSS monocromática.
- Cada módulo define únicamente `--app-bg` y `--app-logo`; no se duplicaron diez archivos vectoriales.
- Escritorio: 5 columnas × 2 filas.
- Tableta: 3 columnas.
- Móvil: 2 columnas.
- Hover y foco elevan el módulo aproximadamente 3,5 %, refuerzan saturación y muestran contorno visible.
- Cada combinación incluye etiqueta textual y cada figura participa en la navegación por teclado.
- No se incrustó la página del PDF, una captura ni una imagen de baja resolución como solución principal.

## 5. Barra de ediciones

- **Texto final:** “Conoce las demás ediciones de Maratón Medellín en las que he trabajado.”
- **Composición:** introducción editorial a la izquierda y archivo cronológico 2021–2026 a la derecha.
- **Contraste:** fondo violeta más profundo, etiqueta verde y texto blanco cálido.
- **Altura:** 78 px en escritorio; se reorganiza en dos niveles compactos en móvil.
- **Móvil:** el carril de años es desplazable internamente, sin ampliar el ancho del documento; la edición actual se mantiene dentro del área visible.
- **Año activo:** cada página usa un único `aria-current="page"`.
- **Enlaces:** los seis años son enlaces relativos reales; no quedan años deshabilitados.

## 6. Plantillas creadas

| Año | Ruta | Estado | CSS | Configuración JS | Noindex |
|---|---|---|---|---|---|
| 2021 | `proyectos/maraton-medellin/2021/index.html` | `draft` / Edición en construcción | `assets/css/mm-edition-base.css` | `assets/js/mm2021-config.js` | Sí |
| 2022 | `proyectos/maraton-medellin/2022/index.html` | `draft` / Edición en construcción | `assets/css/mm-edition-base.css` | `assets/js/mm2022-config.js` | Sí |
| 2023 | `proyectos/maraton-medellin/2023/index.html` | `draft` / Edición en construcción | `assets/css/mm-edition-base.css` | `assets/js/mm2023-config.js` | Sí |
| 2024 | `proyectos/maraton-medellin/2024/index.html` | `draft` / Edición en construcción | `assets/css/mm-edition-base.css` | `assets/js/mm2024-config.js` | Sí |
| 2025 | `proyectos/maraton-medellin/2025/index.html` | `draft` / Edición en construcción | `assets/css/mm-edition-base.css` | `assets/js/mm2025-config.js` | Sí |

## 7. Arquitectura compartida

- `mm-edition-base.css` contiene layout, encabezado, barra de ediciones, Hero, módulos editoriales, momentos, créditos, footer, breakpoints, foco y movimiento reducido.
- `mm-edition-base.js` aplica las variables del tema, sincroniza el año visible, completa el copyright y posiciona el año activo.
- Cada edición conserva un archivo `mm20XX-config.js` independiente.
- Se comparten estructura, accesibilidad y comportamiento responsive.
- Permanecen independientes el año, estado, tema temporal, tipografía futura, Hero, paleta y colecciones de cada momento.
- Los acentos actuales son señales temporales distintas en un sistema neutral; no se presentan como identidades oficiales.
- MM2026 no se migró porque ya posee arquitectura, identidad, contenidos e interacciones aprobadas. Se mantuvo aislada para evitar regresiones y contaminación entre sistemas.
- La flor/MM se comparte desde `assets/images/logos/` como navegación institucional, sin duplicar el archivo ni copiar piezas de campaña 2026.

## 8. Contenido temporal

- No existe Lorem Ipsum.
- No se copiaron el relato, el Key Visual, las fuentes, las piezas, la paleta ni las combinaciones cromáticas de MM2026.
- No se inventaron conceptos, resultados, datos de campaña ni responsabilidades.
- Cada página declara “Edición en construcción”.
- Los estados pendientes explican qué falta sin simular contenido final.
- Las plantillas tienen áreas preparadas para imágenes, Key Visual, paletas, tipografías, versiones de logotipo, sistema gráfico y piezas de los tres momentos.
- La dirección creativa de Pablo Molina y el contexto de MIRAPALTECHO se mantienen; el equipo y la participación específica quedan pendientes de verificación por año.

## 9. Navegación entre ediciones

| Desde | 2021 | 2022 | 2023 | 2024 | 2025 | 2026 |
|---|---|---|---|---|---|---|
| 2021 | Activa | Enlace | Enlace | Enlace | Enlace | Enlace |
| 2022 | Enlace | Activa | Enlace | Enlace | Enlace | Enlace |
| 2023 | Enlace | Enlace | Activa | Enlace | Enlace | Enlace |
| 2024 | Enlace | Enlace | Enlace | Activa | Enlace | Enlace |
| 2025 | Enlace | Enlace | Enlace | Enlace | Activa | Enlace |
| 2026 | Enlace | Enlace | Enlace | Enlace | Enlace | Activa |

- Las seis rutas existen y fueron cargadas en navegador local.
- No se obtuvieron respuestas 404 durante la validación.
- Cada página contiene exactamente un `aria-current="page"` y coincide con su año.
- Todos los enlaces usan rutas relativas entre carpetas hermanas.

## 10. Secciones preparadas por edición

Las cinco plantillas incluyen:

- Header con marca personal, flor/MM, navegación interna y regreso a proyectos.
- Barra de ediciones 2021–2026.
- Hero con estado de construcción.
- Historia: Contexto, Problema, Proceso y Conclusión.
- Área de Key Visual.
- Área de paleta.
- Área de tipografía.
- Área de aplicaciones de logotipo.
- Área de sistema gráfico.
- Campaña en acción con Durante campaña, Feria Exporunners y Día de carrera.
- Créditos: dirección creativa, equipo, participación de Sebastian y estudio.
- Footer común.

## 11. Validación responsive

### MM2026

| Tamaño | Resultado | Retícula de logotipo | Scroll horizontal |
|---|---|---|---|
| 375 × 812 | Correcto | 2 columnas | No |
| 430 × 900 | Correcto | 2 columnas | No |
| 768 × 900 | Correcto | 2 columnas | No |
| 1366 × 768 | Correcto | 5 columnas | No |
| 1920 × 1080 | Correcto | 5 columnas | No |

En los cinco tamaños se comprobaron diez aplicaciones, una edición activa, carga correcta de la flor blanca y ancho del documento igual al viewport. La regla intermedia de tres columnas queda activa entre 801 y 1100 px.

### Plantillas 2021–2025

Cada una de las cinco plantillas fue probada en:

- 375 × 812.
- 768 × 1024.
- 1366 × 768.

Las quince combinaciones año/tamaño produjeron:

- ancho del documento igual al viewport;
- un único `h1`;
- un único año activo y correcto;
- seis enlaces de ediciones;
- estado “Edición en construcción” con el año correcto;
- imágenes de navegación cargadas;
- configuración independiente aplicada.

## 12. Validación técnica

- **Consola:** cero errores y cero advertencias en la revisión final.
- **JavaScript:** `node --check` correcto para el script base, las cinco configuraciones y los scripts inspeccionados.
- **SVG:** XML válido y copia idéntica al archivo fuente.
- **Rutas:** las seis páginas cargan; hojas CSS, configuraciones JS, script base y SVG resuelven correctamente.
- **404:** no se detectaron 404 en las páginas verificadas.
- **Scroll horizontal:** inexistente en todos los viewports requeridos.
- **Accesibilidad:** idioma español, skip link, navegación semántica, un `h1`, foco visible, `aria-current`, textos alternativos decorativos vacíos y soporte de movimiento reducido.
- **Noindex:** las cinco páginas incompletas incluyen `noindex, nofollow`.
- **Anclas:** `#inicio`, `#historia`, `#identidad`, `#experiencia` y `#creditos` están presentes y enlazadas.
- **Rendimiento:** las plantillas no cargan fotografías, fuentes de campaña ni galerías; reutilizan una sola hoja CSS, un script base pequeño y un SVG compartido. El bloque de aplicaciones usa una máscara vectorial única en lugar de diez imágenes.

## 13. Regresiones en MM2026

Permanecen intactos:

- contenido y composición del Hero;
- relato y textos de Historia;
- escenario cromático y laboratorio de color;
- laboratorio tipográfico;
- sistema de distancias;
- composición modular;
- estructura y contenido de Campaña en acción;
- créditos;
- cierre y footer;
- configuración y JavaScript del micrositio.

Los cambios de MM2026 se limitaron a flor/MM blanca, comportamiento visual de Historia, aplicaciones oficiales del logotipo y barra de ediciones.

## 14. Pendientes reales

Para cada año 2021–2025 el usuario deberá aportar o seleccionar:

- identidad y logotipo oficiales;
- concepto y relato verificados;
- paleta con valores técnicos;
- tipografías y licencias o archivos autorizados;
- Key Visual y reglas del sistema gráfico;
- piezas de Durante campaña;
- piezas de Feria Exporunners;
- piezas de Día de carrera;
- créditos y participación específica por persona;
- decisiones de dirección de arte propias de la edición;
- orden editorial y selección final de recursos.

## 15. Próximo paso

Integrar la identidad y las primeras piezas de la edición que el usuario seleccione.
