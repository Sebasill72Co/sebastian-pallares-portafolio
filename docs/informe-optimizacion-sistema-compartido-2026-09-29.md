# Informe — Optimización, navegación compartida y vista de águila

**Fecha:** 29 de septiembre de 2026
**Ejecutor:** Claude (Cowork), a partir de `PROJECT_ATLAS_INFORME_MAESTRO_CLAUDE_PRO.md`
**Alcance:** repositorio local completo (Home + Maratón Medellín 2021–2026). Sin cambios de identidad por edición.

## 0. Respaldo previo
Antes de tocar nada se guardó una instantánea completa del estado local (incluidos los archivos sin seguimiento) en una referencia oculta de Git, sin rama, sin commit en `main` y sin push:

```
refs/atlas-snapshots/2026-09-29-pre-claude   (33a8f5b)
```
Ver un archivo anterior: `git show refs/atlas-snapshots/2026-09-29-pre-claude:ruta/al/archivo`
Se eliminó además un `.git/index.lock` huérfano que bloqueaba Git.

## 1. Optimización de imágenes
- 113 PNG/JPG de 2024, 2025 y 2026 convertidos a WebP (calidad 88). Piezas planas, mockups, publicaciones, dorsales, bolsas, escarapelas, paraderos y recorridos limitados a 2400 px en su lado mayor; fondos, texturas y branding a tamaño original.
- **Los originales se conservan intactos** junto a cada WebP (archivos maestros).
- 98 referencias actualizadas en HTML/CSS/JS de 2024, 2025 y 2026 (solo donde existía el WebP correspondiente).
- Ejemplos: dorsal 5K 9,05 → 1,41 MB · bolsa kit 8,91 → 1,37 MB · valla 5,05 → 0,65 MB · textura 2025 1,90 → 0,89 MB.
- `assets/images/logos/korswill.svg` tenía un PNG incrustado de 2 MB: 2,09 MB → 65 KB (original en `logos/originales/korswill-original.svg`).

## 2. Limpieza (nada borrado; todo movido)
- `_legacy/` — CSS/JS sin uso (`project.css`, `project-mm2026.css`, `project.js`, `project-mm2026.js`, `maraton-2026-data.js`, `mm2024-config.js`, `mm2025-config.js`) y una copia de página que estaba dentro de `assets/images/.../2026/index.html` con rutas rotas. Detalle en `_legacy/LEEME.md`.
- `docs/historico/` — prompts y órdenes sueltas de la raíz (`LEEME-*.txt`, `PRIMER/SEGUNDO_PROMPT_CODEX.txt`, `orden-codex-reorganizar-carpeta-desarrollo.md`, `COLOCA-EL-LOGO-AQUI.txt`).

## 3. Publicación (netlify.toml)
- `/.codex/*`, `/docs/*`, `/_legacy/*` y `/AGENTS.md` responden 404 en Netlify (antes eran públicos; `.codex` exponía rutas locales de la máquina).
- Caché de 30 días para `/assets/*` (CSS/JS ya usan `?v=`).
- Nueva página `404.html` en español con la identidad personal.

## 4. Sistema compartido de navegación MM
Nuevo `assets/css/mm-shared-nav.css`, cargado después del CSS de cada edición. Es la **única fuente de geometría** para header y archivo de ediciones en 2021–2026. No define colores ni tipografías: cada año conserva los suyos mediante `--mm-editions-*` y su `font-family`.

Clases compartidas añadidas al marcado (se conservan las clases antiguas, de las que depende el JS):
`mm-header`, `mm-header__brand`, `mm-header__nav`, `mm-header__flower`, `mm-header__back`, `mm-editions`, `mm-editions__inner`, `mm-editions__intro`, `mm-editions__track`.

Resultado medido en 1440 px (idéntico en las seis ediciones): header 72 px · logo personal 48 px · flor 34 px en caja de 44 px · enlaces .78rem/700 · archivo de ediciones 78 px · celdas de año 72 px · pista alineada a la derecha, en el mismo borde que ← Proyectos. En móvil: header 64 px, archivo 52 px y los seis años visibles sin desplazamiento.

Diferencias que existían antes: tamaño de año 16 px en 2024 frente a 10,5–12,5 px en el resto; celdas de 68 o 72 px; la pista de 2024 llegaba al borde de la pantalla; el tamaño del menú variaba entre 11,5 y 12,5 px; la flor quedaba en tres posiciones distintas.

Tokens añadidos: 2024 (`--mm-editions-*`, amarillo y verde petróleo de su identidad) y 2026 (`--mm-editions-label`, verde).

## 5. Vista de águila — correcciones
| Edición | Hallazgo | Corrección |
|---|---|---|
| 2025 | Los paraderos se recortaban un 17 % (celda 4:5 con `cover`) | `.mm25-piece img` usa la proporción real y `contain` |
| 2025 | La muestra “Rosa” desaparecía sobre el fondo rosa | Borde sutil en todas las muestras |
| 2026 | Mockups de dorsal y escarapela recortados (18 % / 6 %) | `contain` en `.editorial-media--mockup img` |
| 2024 | Párrafo de Créditos en una columna de 66 px (una palabra por línea) | Retícula de 3 columnas igual que las demás secciones |
| 2024 | Desbordamiento horizontal de 6 px en móvil (“MIRAPALTECHO.”) | Tamaño del h2 ajustado en ≤480 px |
| Home | Logos blancos invisibles en “He trabajado con” | Siluetas oscuras uniformes |
| Home | ExpoInmobiliaria dejaba un hueco de 7/12 en la retícula | Ocupa todo el ancho, con el logo contenido |
| Home/2026 | Sin Open Graph | `og:title`, `og:description`, `og:locale` (sin imagen; ver pendientes) |

Verificado y correcto: numerales separados de los títulos (2024/2025); cursiva real de Gopher en los cuatro pesos (Regular, Medium, Bold y Black, con archivos `@font-face` reales; el botón Italic actúa sobre cualquier peso); dorsales completos en 2024, 2025 y 2026; banner final presente en 2024, 2025 y 2026; menú de ediciones a la derecha.

## 6. Validación
- 7 páginas × 2 anchos (1440 y 390): **0 errores de consola propios, 0 recursos 404, 0 desbordamiento horizontal.** El único aviso es Google Fonts en el entorno de pruebas, que no tiene red.
- Recorrido automático de pestañas y selectores (Durante campaña / Feria / Carrera, Camisetas / Números / Trofeos, 42K–5K): ninguna pieza recortada, salvo las miniaturas del selector de publicaciones de 2026, que se recortan a propósito.

## 7. Pendientes que requieren decisión o material (no se inventó nada)
1. **Índice `proyectos/maraton-medellin/index.html` y páginas de otros proyectos** (Expo, Mar, Tres Trigos, Posada, Otros): estaban eliminados localmente. Según la regla de no restaurar lo borrado por el usuario, no se recuperaron. Siguen disponibles en `main` y en el snapshot.
2. **Imagen para compartir (og:image)** del Home y de MM2026: hace falta una pieza 1200×630 aprobada.
3. **Masters sin uso en el sitio** (~167 MB, sobre todo `2026/lanzamiento/` y `.pdf`): moverlos a Drive o a una carpeta fuera del sitio publicado aligeraría el despliegue.
4. **MM2026 — mockup del dorsal 42K** muestra a una corredora con el rostro visible. Hay que confirmar si se acepta, dada la regla de piezas sin rostros identificables.
5. **MM2024 — portada 42K** se presenta recortada en círculo. Hay que confirmar si ese recorte es deliberado.
6. **MM2024 — tarjeta de Sebastian** dice “Pendiente de confirmar”. Falta el texto aprobado para 2024.
7. **MM2021–2023** siguen como plantillas en construcción (`noindex`), a la espera del material documental.
8. **Laboratorio tipográfico de MM2026**: la muestra de Bricolage se corta en 1440 px (“Corre entre m…”). Hay que decidir si se reduce el tamaño por defecto.
9. **Deuda CSS**: cada archivo de edición acumula capas “Fase …” que se sobrescriben entre sí (2024: 44 KB, 2025: 56 KB, 2026: 65 KB). Con la navegación ya centralizada, se pueden eliminar las reglas antiguas de header y ediciones.

## 8. Confirmaciones
- Sin commit en `main`, sin push, sin ramas nuevas.
- Sin archivos eliminados del proyecto; solo se borraron el bloqueo `.git/index.lock`, temporales de Git y un paquete temporal propio (`.atlas-tmp/`).
- Carpeta de material temporal: solo lectura, sin modificaciones.

---

# Segunda fase (29 sep 2026) — Estructura de páginas y barras en movimiento

## Barras de MM2026 con movimiento vertical
- Nuevo `assets/js/mm26-bars.js`. Reconstruye los fondos oficiales de barras `banner-fondo-01` (hero y franja del footer) y `banner-fondo-02` (Key Visual “Corre entre montañas”) como 8 columnas vivas.
- Cada columna usa el degradado **muestreado del archivo oficial**: se detectaron los anchos reales de cada barra y se tomaron 21 muestras de color por columna. Cada una se desplaza en vertical con amplitud, duración y fase propias.
- El grano se reproduce con una textura propia (`fondos-estaticos/grano-barras.webp`) en modo overlay.
- La imagen oficial sigue debajo como respaldo. Con “reducir movimiento” se ve exactamente el archivo original.
- Las barras se pausan cuando salen de pantalla.
- La “Composición modular” (banner 03) se dejó estática, porque la sección la presenta como imagen oficial.

## Estructura
- **Paginador entre ediciones** en las seis páginas MM (antes del footer): muestra la edición anterior y la siguiente, y en los extremos enlaza al portafolio. Usa los colores del archivo de ediciones de cada año.
- **MM2021–2023:** las cuatro secciones de tarjetas “Pendiente de documentar” (unos 4.700 px) se reemplazaron por un archivo compacto con el estado de cada capítulo y accesos a las ediciones documentadas (2024–2026). Los anclajes del menú (Historia, Sistema visual, Campaña, Créditos) siguen funcionando.
- **MM2026, laboratorio tipográfico:** Bricolage, Gopher y Ziren ahora aparecen en pestañas, una familia a la vez, con navegación por teclado; la sección es unos 1.300 px más corta. Las muestras ya no se cortan (antes “Corre entre m…”).
- **MM2025, sistema por distancia:** se retiró el panel vacío “Recorrido real · Contenido pendiente”, que ocupaba 5/7 del módulo. La pieza y el texto ocupan todo el ancho, y el trazado se incorporará cuando exista. La etiqueta de la distancia se veía como una píldora blanca vacía (texto blanco sobre blanco); ahora es morada.
- **Home:** la tarjeta de Maratón Medellín dice “Ediciones 2021—2026”. El resto del Home se dejó igual.

Validación: 7 páginas × 2 anchos sin errores de consola propios, sin recursos 404 y sin desbordamiento horizontal.

## Fase 5-oct-2026 — correcciones del Home y MM2026 dinámico

- Home: logo MMDM con variantes oficiales (`media-maraton-del-mar-mono.svg` en franja de marcas, `-blanco.svg` en la tarjeta turquesa); chips de capacidades con padding interno; columnas de proceso alineadas y con menor separación (solo escritorio, ≥761px).
- Maratón Medellín 2021–2026: nuevo `assets/js/mm-shared-nav.js`; los enlaces del paginador y del selector de ediciones llevan a la parte superior de la página destino (`#inicio` + reinicio de scroll).
- MM2026 · Distancias: banda de 28 barras animadas proporcionales a la distancia (42,195 / 21,0975 / 10 / 5 km).
- MM2026 · Composición modular: barras vivas con modos Ritmo, Gradiente y Continuidad, y empuje con el cursor. Con `prefers-reduced-motion` se muestra la imagen original.
- MM2026 · KV "Corre entre montañas": corregido el choque de la tilde de la Ñ con la línea superior.
- Auditoría: 0 errores de consola, 0 errores HTTP, 0 desbordes horizontales. Sin commit ni push.
- MM2026 · Distancias (ajuste): la banda de barras ahora es el perfil de altimetría oficial de cada recorrido (fuente: maratonmedellin.com/pages/recorridos-interactivos-2026, remuestreado a 96 puntos). 48 barras contiguas con los degradados oficiales (42K y 5K: fondo 01; 21K: fondo 03; 10K: fondo 02), escala vertical común 1.450–1.600 m, rango y desnivel oficiales, y lectura de km y altitud con el cursor.
- MM2026 · Página interna más editorial (referencia: maratonmedellin.com, adaptada, no copiada):
  - Ficha del proyecto bajo el hero (cliente, edición, distancias, alcance, estudio, rol) y sellos oficiales (World Athletics, Federación Colombiana de Atletismo, clasificatoria a Boston).
  - Banda "+30 años" (desde 1994) con línea de tiempo en barras que enlaza las ediciones 2021–2026.
  - Nueva sección 03 · Recorrido oficial (`assets/js/mm26-route.js`): trazado real de las 4 distancias en SVG (sin mapa base), km, hidratación, asistencia médica, salida/meta, datos oficiales y perfil de altimetría que mueve al corredor; botón "Recorrer".
  - Cierre reemplazado por "case-finale": 2026 oficial, cifras de la edición e índice del caso.
  - Hero sin la etiqueta genérica "Caso de estudio"; numeración de secciones 01–05; enlace "Recorrido" en el menú.
  - El sitio web oficial no se menciona dentro del caso (decisión de Sebastián).

## Fase 5-oct-2026 (c) — kit editorial en las ediciones 2021–2025

- Nuevo kit compartido `assets/css/mm-edition-kit.css` + `assets/js/mm-edition-kit.js` (temas 2025, 2024 y "archivo" para 2021–2023).
- 2024 y 2025: ficha del proyecto, banda de trayectoria (30 años / edición 31), sección "Recorrido oficial" con los planos oficiales (selector por distancia, datos y altimetría en barras leída del perfil de cada plano, valores aproximados), cifras, ganadores 42K e índice. Enlace "Recorrido" en el menú.
- 2021–2023: ficha, trayectoria y cifras de la edición con datos verificados en la web (sin inventar piezas de diseño).
- Planos oficiales descargados de maratonmedellin.com: originales en `Material grafico temporal…/Maratón Medellín/2024|2025/Recorridos oficiales/`; versiones WebP en `assets/images/projects/maraton-medellin/2024|2025/recorridos-oficiales/`.
- Fuentes citadas al pie de cada edición (maratonmedellin.com, El Colombiano, La República, Nación Paisa, Ruta Running, Running Correr).

## Fase 5-oct-2026 (d) — MM2022 y MM2023 documentados como casos completos

Fuente del material: `sebastian-pallares-portafolio-trabajo/proyectos/maraton-medellin/2022|2023` (archivos originales sin modificar).

- **MM2022 · "¡Corramos más!"**
  - Archivos nuevos: `assets/css/mm2022-microsite.css`, `assets/js/mm2022-microsite.js` y `assets/js/mm2022-config.js`.
  - Fuentes: Brunches Round Slanted y Gilroy en `assets/fonts/mm2022/` (WOFF2).
  - Recursos en `assets/images/projects/maraton-medellin/2022/{marca,sistema,campana,kit}`. Los logotipos y titulares son SVG vectoriales extraídos del PDF de elementos gráficos.
  - Secciones: hero, ficha, historia, trayectoria, sistema (marca, paleta HEX/Pantone, tipografía oficial, recursos, dorsal + camiseta por distancia), campaña (ciudad / digital / kit y aliados), créditos y cifras.
- **MM2023 · "Corre entre montañas"**
  - Archivos nuevos: `assets/css/mm2023-microsite.css`, `assets/js/mm2023-microsite.js` y `assets/js/mm2023-config.js`.
  - La historia usa los textos de la presentación de campaña de MIRAPALTECHO (octubre de 2022).
  - Secciones: sistema (marca SVG, paleta de cinco colores, recursos, dorsal por corral + medalla) y recorrido con los backings oficiales (horarios y tiempos límite de los paneles oficiales).
  - Campaña: durante campaña / feria y kit / día de carrera, con 78 piezas en WebP y SVG.
  - Tipografía no documentada: la UI usa Gopher (ya incluida en 2024) sin presentarla como oficial.
- Paginadores, archivo de ediciones y líneas de tiempo actualizados ("¡Corramos más!", "Corre entre montañas").
- Excluido a propósito: una página de escarapelas con una firma manuscrita y los moodboards de referencia de otras carreras.

## Fase 5-oct-2026 (e) — ajustes MM2022/MM2023 y MMDM 2027 con información oficial

- MM2022 y MM2023: en el sello del hero gira solo el anillo de texto y la flor queda fija (`.seal-split`, dos capas con máscara radial).
- MM2023: la tipografía queda confirmada como Gopher (dato de Sebastián). Se agregó un bloque de tipografía con texto de prueba.
- MMDM 2027, con información de mediamaratondelmar.com (información general 2027, reglamento y preguntas frecuentes):
  - Ficha del proyecto.
  - Nueva sección 03 · Recorrido oficial, con los hitos del 21K y del 10K desde la Sociedad Portuaria hasta el Centro de Convenciones, ilustrados con personajes de la campaña. Incluye salida, tiempo máximo, corrales e hidratación.
  - Guía rápida: fechas clave, transporte desde 9 puntos de acopio y MMMKids.
  - Cifras: 10 años, 10.000 cupos, y 9.500 corredores y 20 países en 2026, con los ganadores 21K de 2026 según El Universal.
  - Numeración de secciones 01–05 y enlace "Recorrido" en el menú.
  - Hero sin la etiqueta "Caso de estudio".
- El tiempo máximo del 21K aparece como 3 h en el reglamento y en las preguntas frecuentes, y como 3:30 h en una línea de la página de información. Se usó el dato del reglamento.

## Fase f — Media Maratón del Mar: ediciones 2023, 2025, 2026 y producción 2027 (2026-10-05)

- Nuevas páginas de archivo `proyectos/media-maraton-del-mar/{2023,2025,2026}/index.html` con identidad MMDM: ficha, la edición (datos de carrera), resultados, trayectoria, cifras, créditos y paginador. La edición 2024 se omitió por indicación.
- Archivo de ediciones (2023 · 2025 · 2026 · 2027) y paginador compartidos (`mm-editions` / `mm-pager`), también en 2027; trayectoria (kit `mmk-legacy`) 2018–2027.
- Datos tomados de prensa: El Universal, El Espectador, El Tiempo, La FM y Puerto de Cartagena. Donde las fuentes difieren se citó la publicación de resultados.
- 2027: nueva sección 05 «Producción de evento» con 46 piezas (`assets/images/projects/media-maraton-del-mar/2027/produccion/` + `mini/`), agrupadas en Números, Feria y entrega, Acreditación, Día de carrera y Prensa, con visor. Créditos pasa a 06. Fuente: `sebastian-pallares-portafolio-trabajo/proyectos/media-maraton-del-mar/Piezas Producción`.
- Versiones: `mmdm2027-microsite.css?v=20261005-13`, `mmdm2027-microsite.js?v=20261005-8`.

## Fase g — Material propio MMDM 2023, 2025 y 2026 + caso ExpoInmobiliaria 2025 (2026-10-06)

- Fuente: `sebastian-pallares-portafolio-trabajo/proyectos/media-maraton-del-mar/{2023,2025,2026}` y `proyectos/expoinmobiliaria/{2024,2025}`. Originales intactos; solo se generaron WebP optimizados (+ `mini/`).
- MMDM 2025 · "Corre y fluye como el mar": historia, sistema visual, aplicaciones y 22 artes de producción (presentación de campaña 2025). Identidad propia (`.mmdm-ed-2025`).
- MMDM 2023 · "Haz historia": campaña de inscripciones y 44 artes de producción. Identidad propia (`.mmdm-ed-2023`).
- MMDM 2026 · "El mar nos conecta más que nunca": historia, sistema visual (paleta Pantone, Deertail Brush / Summer Surfing / Montserrat, elementos culturales, degradados, textura 69 %), aplicaciones, manual de Key Visual (21 láminas) y 33 artes de producción. Fuente `assets/fonts/mmdm2026/deertail-brush.woff2`. Nota: en el manual la ficha del azul profundo repite el HEX del amarillo; se usa #002559 (RGB 0, 37, 89).
- Galerías con pestañas y visor reutilizables (`[data-prod]` en `mmdm2027-microsite.js`).
- ExpoInmobiliaria 2025: nuevo caso `proyectos/expoinmobiliaria/2025/` (`expo2025-microsite.css/js`) con trayectoria de afiches 2011–2024, campaña, dos versiones de aplicaciones (11 y 16 sep. 2024), cifras de la feria (7–9 mar. 2025) y créditos. La portada enlaza el caso.
- Corrección: `mm2023-microsite.css` referenciaba `marco-azul.webp` inexistente.
- Versiones: `mmdm2027-microsite.css?v=20261005-16`, `mmdm2027-microsite.js?v=20261005-9`, `expo2025-microsite.css/js?v=20261005-1`.
