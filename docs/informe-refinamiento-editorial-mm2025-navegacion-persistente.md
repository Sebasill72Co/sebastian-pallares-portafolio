# INFORME — REFINAMIENTO EDITORIAL MM2025 Y NAVEGACIÓN PERSISTENTE

Fecha: 15 de julio de 2026  
Repositorio: `/Users/MPT5/Desarrollo/sebastian-pallares-portafolio`  
Estado: implementación y validación local terminadas; sin commit, push ni rama nueva.

## 1. Archivos modificados

| Ruta | Motivo |
|---|---|
| `proyectos/maraton-medellin/2025/index.html` | Reorganizar Hero, archivo de ediciones, mini banner, laboratorios, logotipos y sistema por distancias sin alterar la identidad 2025. |
| `assets/css/mm2025-microsite.css` | Refinar jerarquía, densidad, responsive, estados interactivos y navegación persistente exclusivos de MM2025. |
| `assets/js/mm2025-microsite-config.js` | Ampliar datos semánticos de paleta y distancias con funciones, combinaciones, títulos, descripciones y acentos. |
| `assets/js/mm2025-microsite.js` | Incorporar panel cromático ampliado, laboratorio tipográfico restablecible, selector de distancias enriquecido y centrado del año activo. |
| `assets/css/mm2026-microsite.css` | Añadir exclusivamente persistencia, alturas y offsets de la barra anual; no se tocaron sus secciones visuales. |
| `assets/css/mm-edition-base.css` | Aplicar navegación persistente, offsets y comportamiento móvil común a las plantillas 2021–2024. |
| `docs/informe-refinamiento-editorial-mm2025-navegacion-persistente.md` | Registrar alcance, decisiones, métricas y validaciones de esta fase. |

No se modificó `assets/js/mm-edition-base.js`: ya centraba correctamente el año activo en 2021–2024. Tampoco fue necesario modificar el controlador de MM2026, que ya lleva su pista anual al extremo donde se encuentra 2026.

## 2. Hero 2025

- **Estructura anterior:** etiqueta única, logotipo a la izquierda, titular dentro de una tarjeta morada grande a la derecha y datos en una cápsula inferior.
- **Estructura nueva:** banda superior de metadatos, bloque editorial a la izquierda y módulo oficial de marca/fecha/distancias a la derecha.
- **Etiquetas:** `CASO DE ESTUDIO`, `CAMPAÑA · EVENTO DEPORTIVO` y `MEDELLÍN · 2025`.
- **Titular:** se conserva “Cada recorrido cuenta una forma distinta de vivir la ciudad.”; ocupa cinco líneas en 1366 px y mantiene una lectura controlada en móvil.
- **Logo:** `assets/images/projects/maraton-medellin/2025/brand/logo-principal.png`, sin deformación.
- **Fecha:** `7 / SEP / 2025`.
- **Distancias:** `42K · 21K · 10K · 5K`.
- **Fondo:** `assets/images/projects/maraton-medellin/2025/fondos/hero-principal.jpg`, con posiciones focales ajustadas para escritorio y móvil.
- **Altura:** pasó de 642 px a 618 px en 1366 × 768. La nueva altura es acotada mediante `clamp()` en escritorio y depende del contenido en móvil.
- **Responsive:** todo el contenido cabe dentro del Hero en 375, 430, 768, 1366 y 1920 px; en 375 × 812 la sección mide 617 px y da paso a Historia dentro del primer desplazamiento.

## 3. Barra de ediciones 2025

- Se adoptó la composición editorial de dos áreas: introducción a la izquierda y años a la derecha.
- Texto aplicado: “Conoce las demás ediciones de Maratón Medellín en las que he trabajado.”
- `2025` conserva `aria-current="page"`, fondo morado y texto verde neón.
- La barra usa el blanco cálido de 2025, divisores morados y estados de foco/hover con cian; no hereda la identidad de 2026.
- En móvil, la introducción permanece disponible en el HTML pero se oculta visualmente; la pista anual tiene desplazamiento horizontal interno, objetivos de al menos 44 px y centra automáticamente 2025.

## 4. Historia

- **Altura anterior:** 1.108 px en 1366 px.
- **Altura nueva:** 832 px.
- **Reducción de scroll:** 276 px, equivalente a 24,9 %.
- **Retícula:** cuatro columnas continuas en escritorio, dos en tableta y una en móvil; se eliminaron radios y espacios entre tarjetas para formar una secuencia editorial.
- **Interacción:** hover y foco invierten el contraste sin alterar el flujo; los módulos hermanos se atenúan de forma moderada únicamente cuando existe un dispositivo con hover.
- **Textos conservados:** Contexto, Problema, Proceso y Conclusión mantienen el contenido documentado; no se agregó narrativa nueva ni datos no verificados.

## 5. Mini banner

- Ruta: `assets/images/projects/maraton-medellin/2025/fondos/mini-banner.jpg`.
- Proporción intrínseca y renderizada: 2400 / 664, equivalente a 3,614:1.
- Se eliminó el overlay “Vive la ciudad / Corre Medellín”.
- No usa `cover`, altura forzada ni recorte: `width: 100%` y `height: auto` muestran la imagen completa.
- La proporción se conserva en los cinco tamaños responsive y no genera scroll horizontal.

## 6. Key Visual y Branding

- Se redujeron paddings, alturas mínimas y escala de titulares para acercar el visual protagonista al encabezado.
- El encabezado de `02 · Branding · Key Visual` conserva su texto y ahora usa una jerarquía más compacta.
- El fondo oficial del Hero sigue siendo el visual protagonista del módulo; no se reconstruyó con rectángulos CSS ni se introdujeron recursos de 2026.
- La organización mantiene, en secuencia, Key Visual, paleta, tipografía, aplicaciones de marca y distancias, con separaciones de 18 px y menor altura editorial.

## 7. Paleta 2025

- Colores conservados: cian `#00B7CE`, rosa `#EFC7BD`, morado `#391459` y verde neón `#4CF77C`.
- La paleta se presenta como banda modular continua de cuatro campos iguales; hover, foco o selección amplían el color activo sin reordenar el documento.
- El panel técnico muestra nombre, HEX, RGB, CMYK y Pantone pendiente, además de función, combinaciones permitidas y una demostración de contraste.
- La interacción funciona con puntero, teclado y selección táctil mediante botones reales y `aria-pressed`.
- Los datos cromáticos existentes se conservaron; no se inventaron valores Pantone.

## 8. Tipografía 2025

- Pesos disponibles: Gopher Regular 400, Medium 500, Bold 700 y Black 900.
- La muestra integra mayúsculas, minúsculas, vocales acentuadas, `ñ`, numerales y símbolos `/ + &`.
- El campo continúa siendo editable mediante `contenteditable` y posee una etiqueta accesible.
- Rango de tamaño: 36–104 px, con salida numérica visible.
- El botón `Restablecer` devuelve texto, tamaño de 70 px y peso Medium.
- Botones, rango y muestra pueden recorrerse con teclado; los estados usan `aria-pressed` y foco visible.

## 9. Aplicaciones del logotipo

- Versiones utilizadas: principal, secundaria y horizontal.
- Combinaciones: principal sobre cian, secundaria sobre rosa y horizontal sobre morado, según aplicaciones documentadas de la guía 2025.
- Fuente documental: `KV_MM_2025.pdf` y guías de usos cromáticos inventariadas en `docs/manifiesto-recursos-mm2025.md`.
- La retícula usa tres columnas compactas en escritorio y una columna en móvil.
- Todos los archivos conservan su proporción natural; no se reconstruyeron marcas mediante CSS ni se alteraron originales.

## 10. Sistema por distancias

- **Izquierda:** imagen activa en la parte superior y, debajo, etiqueta, título, descripción y selector.
- **Imagen activa:** módulo oficial 42K, 21K, 10K o 5K, con transición de opacidad y sin cambio de altura del documento.
- **Información:** el título, descripción, leyenda y acento cambian desde la configuración JS.
- **Selector:** cuatro botones con estado `aria-pressed` y objetivos táctiles legibles.
- **Derecha:** reserva editorial explícita `RECORRIDO REAL · Contenido pendiente`; no se inventó mapa, fotografía ni trazado.
- **Responsive:** dos columnas en escritorio; imagen, información y reserva se apilan en móvil. El cambio de distancia registró 0 px de desplazamiento de layout.

## 11. Campaña en acción

- **Altura anterior:** 1.454 px en 1366 px.
- **Altura nueva:** 1.124 px.
- **Reducción de scroll:** 330 px, equivalente a 22,7 %.
- El selector de tres momentos aparece antes mediante un encabezado más corto, botones de 64 px y menor separación vertical.
- Se conserva un solo panel activo y las mismas piezas verificadas: cuatro paraderos, frente/reverso de la bolsa, siete camisetas, cuatro dorsales y cuatro trofeos.

## 12. Créditos

- **Altura anterior:** 927 px.
- **Altura nueva:** 573 px.
- **Reducción:** 354 px, equivalente a 38,2 %.
- Se conservaron Pablo Molina como director creativo, MIRAPALTECHO, el equipo habitual, las advertencias de participación específica pendiente y la procedencia del archivo 2025.

## 13. Footer

- Fondo: `assets/images/projects/maraton-medellin/2025/fondos/fondo-variacion-01.jpg`.
- Frase: “VIVE LA CIUDAD. CORRE MEDELLÍN.”
- Conserva `PROJECT ATLAS · MIRAPALTECHO`, © 2026 y el enlace “Todos los proyectos”.
- La altura se ajustó de 440 px a 390 px sin superposición, recorte de texto ni cambio de identidad.
- En móvil, frase y metadatos se apilan con alineación inicial y permanecen dentro del contenedor.

## 14. Navegación persistente 2021–2026

| Edición | Archivo CSS afectado | Sticky | Año activo | Móvil | Regresiones |
|---|---|---:|---:|---:|---|
| 2021 | `assets/css/mm-edition-base.css` | Sí | Visible | Validado | Ninguna detectada |
| 2022 | `assets/css/mm-edition-base.css` | Sí | Visible | Validado | Ninguna detectada |
| 2023 | `assets/css/mm-edition-base.css` | Sí | Visible | Validado | Ninguna detectada |
| 2024 | `assets/css/mm-edition-base.css` | Sí | Visible | Validado | Ninguna detectada |
| 2025 | `assets/css/mm2025-microsite.css` | Sí | Visible | Validado | Ninguna detectada |
| 2026 | `assets/css/mm2026-microsite.css` | Sí | Visible | Validado | Ninguna detectada |

- El encabezado principal permanece en `top: 0`; la barra anual se fija inmediatamente debajo mediante variables de altura por edición.
- Los offsets de ancla suman encabezado, barra y 16 px de aire editorial.
- En móvil, la barra se reduce a 52–54 px y oculta visualmente su introducción sin eliminarla del documento.
- La pista de años tiene scroll interno, `scroll-snap` donde corresponde y centra el año activo mediante los controladores ya existentes o el nuevo inicializador 2025.
- Las seis ediciones mantuvieron `scrollWidth === innerWidth` en las pruebas de 375 y 1366 px.

## 15. Validación responsive

| Tamaño | Hero | Barra anual | Scroll horizontal | Imágenes rotas | Resultado |
|---|---:|---:|---:|---:|---|
| 375 × 812 | 617 px; contenido completo | 55 px; 2025 visible | No | 0 | Aprobado |
| 430 × 900 | 632 px; contenido completo | 55 px; 2025 visible | No | 0 | Aprobado |
| 768 × 1024 | 647 px; contenido completo | 55 px; 2025 visible | No | 0 | Aprobado |
| 1366 × 768 | 618 px; titular en cinco líneas | 79 px; 2025 visible | No | 0 | Aprobado |
| 1920 × 1080 | 724 px; composición contenida | 79 px; 2025 visible | No | 0 | Aprobado |

La página completa pasó de 8.310 px a 6.917 px de altura en 1366 × 768: una reducción global de 1.393 px o 16,8 %.

## 16. Validación técnica

- **Consola/JavaScript:** `node --check` aprobó configuración y controlador; los módulos de paleta, distancia, momentos y galerías inicializaron con 4, 4, 3 y sus cantidades esperadas, sin excepciones durante las pruebas funcionales.
- **404:** el servidor local devolvió exclusivamente estados 200/304 para HTML, CSS, JS, fuentes e imágenes solicitadas; no registró respuestas 404.
- **Rutas:** se comprobaron las referencias relativas del HTML y todas resolvieron a archivos existentes.
- **Imágenes:** 0 imágenes rotas en los cinco tamaños de MM2025 y en las comprobaciones móvil/escritorio de 2021–2026.
- **Fuentes:** Gopher 400, 500, 700 y 900 cargaron localmente desde `assets/fonts/mm2025/`.
- **Accesibilidad:** se mantienen enlace de salto, HTML semántico, foco visible, etiquetas, `aria-current`, `aria-selected`, `aria-pressed`, navegación de tabs y objetivos táctiles.
- **Movimiento reducido:** se conserva `prefers-reduced-motion`, que elimina transiciones y scroll suave.
- **Scroll horizontal:** ausente en 375, 430, 768, 1366 y 1920 px.
- **Noindex:** se conserva `<meta name="robots" content="noindex, nofollow">` en MM2025.

## 17. Elementos no modificados

- Home principal del portafolio.
- Otros proyectos y carreras.
- Identidad, secciones visuales, narrativa, recursos y JavaScript editorial de MM2026.
- HTML, contenido y configuraciones de las ediciones 2021–2024.
- Originales de Descargas, documentos fuente, PDFs y recursos temporales.

## 18. Pendientes reales

- Recorridos reales para completar el panel derecho del sistema por distancias.
- Equivalencias Pantone confirmadas de la paleta 2025.
- Mockups faltantes para paraderos, bolsa, dorsales y trofeos; no existen en el archivo integrado.
- Créditos y participación específica por pieza de Jorge Zapata, Santiago Ospina y Sebastian Pallares.
- Publicación: retirar `noindex, nofollow` únicamente después de resolver los pendientes documentales y aprobar visualmente el caso.

## 19. Próximo paso

Revisión visual final de MM2025 antes de organizar y ampliar sus piezas.
