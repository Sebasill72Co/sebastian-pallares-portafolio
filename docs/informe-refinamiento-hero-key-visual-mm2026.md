# INFORME — REFINAMIENTO DEL HERO, KEY VISUAL Y SISTEMA DE MARCA MM2026

Fecha: 13 de julio de 2026  
Proyecto: PROJECT ATLAS — Maratón Medellín 2026  
Alcance: micrositio aislado `proyectos/maraton-medellin/2026/`

## 1. Resultado general

Se refinó el micrositio existente sin reconstruir su arquitectura narrativa. El Hero ahora usa el fondo horizontal oficial de barras como una superficie completa y mantiene el logotipo y el numeral 2026 como recursos SVG independientes. El bloque de Branding / Key Visual fue corregido con información verificable de los documentos oficiales: paleta de doce tonos, familia Bricolage Grotesque, uso restringido de Ziren y la frase de campaña “Corre entre montañas”.

Los tres momentos de campaña conservan la navegación por pestañas, pero reducen altura de cabeceras, imagen protagonista y tarjetas. El cierre incorpora una franja de barras de campaña. No se modificaron otras ediciones, el Home ni otros proyectos.

No se creó rama, commit ni push.

## 2. Archivos modificados

### Código

| Ruta | Función | Cambios |
|---|---|---|
| `proyectos/maraton-medellin/2026/index.html` | Estructura del micrositio | Hero con fondo oficial y marcas separadas; procedencia de textos; Key Visual documentado; paleta completa; sistema tipográfico; distancias; composición modular; footer con barras. |
| `assets/css/mm2026-microsite.css` | Tema y dirección visual MM2026 | Fuentes locales; Hero full-bleed; sistema de marca; compactación editorial; responsive; footer; reducción de movimiento. |
| `assets/js/mm2026-microsite-config.js` | Datos por edición y catálogo de piezas | Paleta oficial ampliada; metadatos de procedencia; fuentes documentales; rutas ASCII estables; escarapelas oficiales. |
| `assets/js/mm2026-microsite.js` | Controlador del micrositio | Dimensiones intrínsecas configurables y `decoding="async"` para recursos dinámicos; se conserva la navegación accesible por pestañas. |

### Recursos añadidos

| Ruta | Función |
|---|---|
| `assets/fonts/mm2026/bricolage-grotesque-variable.ttf` | Familia editorial oficial. |
| `assets/fonts/mm2026/ziren-bold.otf` | Uso exclusivo en numeración, fechas y distancias. |
| `assets/images/projects/maraton-medellin/2026/lanzamiento/recursos-oficiales/logo-vertical-blanco-mm26.svg` | Logotipo oficial separado del fondo. |
| `assets/images/projects/maraton-medellin/2026/lanzamiento/recursos-oficiales/2026-lineas-mm26.svg` | Numeral 2026 oficial separado. |
| `assets/images/projects/maraton-medellin/2026/exporunners/escarapelas/planos/` | Siete artes planos oficiales. |
| `assets/images/projects/maraton-medellin/2026/exporunners/escarapelas/mockups/` | Siete mockups oficiales optimizados a WEBP. |
| `assets/images/projects/maraton-medellin/2026/durante-campana/redes-sociales/publicaciones/` | Copias canónicas con nombres ASCII de tres publicaciones ya existentes. |

## 3. Fuentes documentales revisadas

### Documentos oficiales utilizados

1. `Key Visual Maratón Medellín 2026.pdf`
   - Ruta revisada: `/Users/MPT5/Desktop/Clientes - Escritorio/Maratón Medellín/2026/Recursos Graficos/Recursos Gráficos MM-Sistecrédito - Clientes/Key Visual/`
   - 14 páginas, 112.904.706 bytes.
   - Contiene aplicaciones del logotipo, paleta, tipografías, protección, usos incorrectos, complementos de marca y ejemplos del Key Visual.

2. `Visualizacion Recursos gráficos - Maraton Medellin 2026.pdf`
   - Ruta revisada: `/Users/MPT5/Desktop/Clientes - Escritorio/Maratón Medellín/2026/Recursos Graficos/Recursos Gráficos MM-Sistecrédito - Clientes/`
   - 27 páginas, 53.918.873 bytes.
   - Contiene fondos de barras, combinaciones cromáticas, complementos, tratamiento del 2026, distancias y ejemplos de composición.

3. `Logo - Maraton Medellin Sistecrédito 2026 - Aplicaciones Principales.pdf`
   - Ruta revisada: `/Users/MPT5/Desktop/Clientes - Escritorio/Maratón Medellín/2026/Recursos Graficos/Elementos editables/`
   - Una página; se utilizó para contrastar aplicaciones permitidas.

Los PDF no se copiaron al sitio ni se incrustaron como imágenes. Su peso y función corresponden a documentación maestra, no a recursos web.

### Hallazgo sobre la narrativa

No se encontró una presentación oficial de campaña que documente contexto, problema, proceso y conclusión con el contenido que hoy aparece en el micrositio. Se encontraron presentaciones comerciales, estadísticas, integraciones y documentos de producción, pero no constituyen una fuente válida para atribuirles esa narrativa.

Por tanto, la historia del caso se mantiene explícitamente clasificada como síntesis editorial.

## 4. Procedencia de los textos

| Bloque | Estado | Evidencia / decisión |
|---|---|---|
| Frase principal del Hero | `existing-project-copy` | La frase “Una identidad que convierte el ritmo de la ciudad en sistema visual” ya existía en una implementación anterior del proyecto. Se restauró su formulación verificable. |
| Contexto | `editorial-synthesis` | Síntesis editorial construida a partir del alcance visible de las aplicaciones; no aparece como texto oficial en los documentos revisados. |
| Problema | `editorial-synthesis` | Interpretación editorial del reto de flexibilidad y reconocimiento. |
| Proceso | `editorial-synthesis` | Síntesis del sistema observado: módulos, tipografía, color y textura. |
| Conclusión | `editorial-synthesis` | Lectura editorial del comportamiento transversal de las aplicaciones. |
| Frase principal del Key Visual | `official-document` | “Corre entre montañas” aparece en la visualización oficial de recursos. |
| Paleta, tipografía, distancias y reglas gráficas | `official-document` | Contenido adaptado de los PDF oficiales de Key Visual y recursos gráficos. |
| Descripciones de los tres momentos | `editorial-synthesis` | Texto de mediación web; no se atribuye a un documento oficial. |

Los estados también quedaron registrados en `assets/js/mm2026-microsite-config.js` y en atributos `data-copy-source` de los bloques principales.

## 5. Decisiones de diseño y arquitectura

### Hero

- Se reutiliza `fondos-estaticos/banner-fondo-01.png`, ya presente en el repositorio y derivado de la familia oficial de barras.
- El fondo usa `background-size: cover`, sin repetición, deformación ni una segunda capa de ruido.
- El logotipo vertical blanco y el 2026 de líneas son SVG oficiales independientes.
- Se eliminó la composición generada con seis columnas CSS del Hero.
- El texto conserva contraste blanco/verde y una jerarquía responsive.

### Key Visual

- Se sustituyó la frase editorial anterior por “Corre entre montañas”.
- La demostración se construye en HTML y CSS, no con una página rasterizada del manual.
- Las barras son módulos asimétricos superiores e inferiores, inspirados en la lógica oficial.
- Las distancias se construyen como texto real con Ziren.
- La animación se limita al desplazamiento interno y saturación de los degradados; no mueve la composición completa.
- `prefers-reduced-motion` sigue desactivando animaciones y transiciones no esenciales.

### Paleta

Se integraron los doce tonos documentados:

| Familia | HEX | Función documentada |
|---|---|---|
| Oscuros | `#641E28`, `#4A0BAF`, `#325541`, `#FFCB3E` | Contraste fuerte y bases de degradado. |
| Vibrantes | `#DF3760`, `#7281F1`, `#54CF88`, `#F5F694` | Transiciones eléctricas y deportivas. |
| Apoyo | `#E19BA5`, `#A4AFFE`, `#98FFC3`, `#FEFEDB` | Aplicaciones monocromáticas; no se presentan como paradas principales de degradado. |

### Tipografía

- Bricolage Grotesque reemplaza las dependencias remotas Manrope y Space Grotesk.
- Ziren se carga localmente y solo se aplica en distancias, numeración y muestras funcionales.
- Las fuentes usan `font-display: swap`.
- No se incorporó Gopher en la interfaz: aparece en el paquete de fuentes, pero el documento oficial de Key Visual identifica Bricolage Grotesque y Ziren como sistema aplicable a esta fase.

### Densidad de los tres momentos

- Títulos reducidos de un máximo de 6.5 rem a 5 rem.
- Cabeceras y separaciones internas compactadas.
- Imagen protagonista en escritorio reducida de 16:8 a 16:5.25.
- Tarjetas reducidas de 470 px a 320 px de altura mínima.
- Los modos tableta y móvil mantienen relaciones de aspecto específicas para no sacrificar lectura.

## 6. Auditoría de recursos nuevos

### Escarapelas — artes planos

Ruta original común:  
`/Users/MPT5/Downloads/Material grafico temporal portafolio sebastian pallares/Maratón Medellín/2026/Piezas gráficas/2 Piezas Feria/escarapela/Artes_Originales_PNG/`

Todos los archivos son PNG verticales de 621 × 798 px y representan variantes gráficas distintas. Ningún hash coincide con el mockup provisional que existía en el repositorio.

| Original | Peso original | Ruta final | Decisión |
|---|---:|---|---|
| `Escarapela_ALL_ACCESS.png` | 498.730 B | `planos/escarapela-all-access.png` | Conservar; rol oficial distinto. |
| `Escarapela_EXPOSITOR.png` | 775.920 B | `planos/escarapela-expositor.png` | Conservar; rol oficial distinto. |
| `Escarapela_FOTOGRAFO.png` | 803.439 B | `planos/escarapela-fotografo.png` | Conservar; rol oficial distinto. |
| `Escarapela_ORGANIZACION.png` | 629.471 B | `planos/escarapela-organizacion.png` | Conservar; rol oficial distinto. |
| `Escarapela_PATROCINADOR.png` | 614.318 B | `planos/escarapela-patrocinador.png` | Conservar; rol oficial distinto. |
| `Escarapela_PRENSA.png` | 559.387 B | `planos/escarapela-prensa.png` | Conservar; rol oficial distinto. |
| `Escarapela_STAFF.png` | 598.312 B | `planos/escarapela-staff.png` | Conservar y publicar como vista plana. |

### Escarapelas — mockups

Ruta original común:  
`/Users/MPT5/Downloads/Material grafico temporal portafolio sebastian pallares/Maratón Medellín/2026/Piezas gráficas/2 Piezas Feria/escarapela/Mockups_1920x1080/`

Todos los originales son PNG de 1920 × 1080 px. Se generaron derivados WEBP a calidad 82 para publicación; los originales externos permanecen intactos.

| Original | Peso PNG | Derivado WEBP | Peso final | Uso |
|---|---:|---|---:|---|
| `Mockup_Escarapela_ALL_ACCESS_1920x1080.png` | 2.678.539 B | `mockups/escarapela-all-access.webp` | 155.176 B | Galería Exporunners. |
| `Mockup_Escarapela_EXPOSITOR_1920x1080.png` | 2.685.885 B | `mockups/escarapela-expositor.webp` | 156.832 B | Galería Exporunners. |
| `Mockup_Escarapela_FOTOGRAFO_1920x1080.png` | 2.683.519 B | `mockups/escarapela-fotografo.webp` | 158.966 B | Reserva publicada en catálogo. |
| `Mockup_Escarapela_ORGANIZACION_1920x1080.png` | 2.617.655 B | `mockups/escarapela-organizacion.webp` | 151.386 B | Reserva publicada en catálogo. |
| `Mockup_Escarapela_PATROCINADOR_1920x1080.png` | 2.678.958 B | `mockups/escarapela-patrocinador.webp` | 160.082 B | Reserva publicada en catálogo. |
| `Mockup_Escarapela_PRENSA_1920x1080.png` | 2.672.982 B | `mockups/escarapela-prensa.webp` | 160.634 B | Galería Exporunners. |
| `Mockup_Escarapela_STAFF_1920x1080.png` | 2.656.689 B | `mockups/escarapela-staff.webp` | 153.164 B | Imagen protagonista Exporunners. |

El mockup provisional `exporunners/escarapelas/escarapela-staff-mockup.png` quedó sin referencias visibles, pero no se eliminó porque la instrucción prohíbe borrar recursos sin aprobación.

### Recursos oficiales de marca

| Original | Formato | Ruta final | Decisión |
|---|---|---|---|
| `LOGO Vertical Blanco - MM26.svg` | SVG, viewBox 465 × 235 | `lanzamiento/recursos-oficiales/logo-vertical-blanco-mm26.svg` | Publicar como logotipo separado. |
| `2026 lineas - MM26.svg` | SVG, viewBox 1746 × 381 | `lanzamiento/recursos-oficiales/2026-lineas-mm26.svg` | Publicar como numeral separado. |
| `BricolageGrotesque-VariableFont_opsz,wdth,wght.ttf` | TTF, 407.844 B | `assets/fonts/mm2026/bricolage-grotesque-variable.ttf` | Fuente editorial oficial. |
| `Ziren-Bold.otf` | OTF, 99.196 B | `assets/fonts/mm2026/ziren-bold.otf` | Fuente funcional restringida. |

### Duplicados documentales

- Dos copias de `Key Visual Maratón Medellín 2026.pdf` comparadas tienen el mismo SHA-256: `60db672f...04c550a`.
- Las dos visualizaciones de recursos comparadas no tienen el mismo hash; se utilizó la versión de `Recursos Gráficos MM-Sistecrédito - Clientes`, fechada en marzo de 2026 y con 27 páginas.
- No se copiaron duplicados PDF al proyecto web.

## 7. Validación técnica

### Responsive

| Viewport | Scroll horizontal | Hero | Interacción | Resultado |
|---|---:|---:|---|---|
| 375 × 812 | 0 px | 872 px | Activa | Correcto. |
| 430 × 900 | 0 px | 938 px | Activa | Correcto. |
| 768 × 900 | 0 px | 857 px | Activa | Correcto. |
| 1366 × 768 | 0 px | 696 px | Activa | Correcto. |
| 1920 × 1080 | 0 px | 1008 px | Activa | Correcto. |

El Hero ocupa exactamente el área restante bajo la cabecera en escritorio. En móvil se extiende ligeramente más de una pantalla para conservar texto, logotipo y 2026 sin solapamientos.

### JavaScript y consola

- `node --check assets/js/mm2026-microsite-config.js`: correcto.
- `node --check assets/js/mm2026-microsite.js`: correcto.
- Consola del navegador: sin errores.
- Las tres pestañas renderizan contenido.
- Flecha derecha sobre la primera pestaña selecciona “Feria Exporunners” y actualiza el panel a `exporunners`.
- Todas las rutas declaradas en el catálogo existen en el repositorio.

### Accesibilidad y semántica

- Idioma `es`.
- Un único `main` y un único `h1`.
- Sin identificadores duplicados.
- Todas las imágenes renderizadas tienen `alt`, `width` y `height`.
- Ningún botón carece de nombre accesible.
- Existe enlace de salto al contenido.
- El selector de momentos conserva `tablist`, `tab` y `tabpanel`.
- `:focus-visible` y `prefers-reduced-motion` permanecen implementados.

### Integridad

- `git diff --check`: sin errores de whitespace.
- No se restauraron archivos eliminados por el usuario.
- No se modificó el Home, KÒRSWILL ni otras ediciones.
- No se eliminaron originales temporales.

## 8. Limitaciones y pendientes

1. La narrativa de contexto, problema, proceso y conclusión sigue siendo síntesis editorial; requiere validación humana si se desea atribuirla como discurso oficial de campaña.
2. El Hero utiliza el PNG oficial existente de 3001 × 1265 px. Una futura fase podría producir variantes AVIF/WEBP y recortes art-directed para reducir transferencia sin cambiar la composición.
3. Tres publicaciones sociales se copiaron a rutas ASCII estables para evitar problemas de normalización Unicode. Permanecen en PNG porque esta fase priorizó integridad visual; su optimización puede hacerse en lote posteriormente.
4. Los cuatro mockups de escarapelas que no están visibles en el rail actual permanecen organizados y listos para ampliar la selección sin nuevas copias.
5. El documento oficial no identifica Gopher como tipografía de interfaz del Key Visual; se dejó fuera hasta una validación de uso.

## 9. Próximo paso recomendado

Realizar una revisión visual con Sebastian en los cinco tamaños y aprobar específicamente:

1. escala del texto del Hero;
2. posición relativa del logotipo y el 2026;
3. fidelidad de la muestra modular del Key Visual;
4. selección de cuatro escarapelas visibles;
5. densidad final del bloque de los tres momentos.

No se recomienda ampliar contenido ni integrar nuevas piezas antes de esa aprobación visual.
