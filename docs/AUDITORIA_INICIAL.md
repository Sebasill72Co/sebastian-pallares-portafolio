# Auditoría inicial — PROJECT ATLAS

Fecha: 11 de julio de 2026  
Alcance: revisión técnica sin rediseño ni corrección de archivos existentes.

## Estado general

El repositorio contiene una home funcional en estructura y un caso de estudio avanzado para Maratón Medellín 2026. La identidad principal está aplicada y el contenido visible revisado está en español. Los créditos de MIRAPALTECHO cumplen en términos generales con el documento maestro: Pablo Molina figura como director creativo, se reconoce su acompañamiento y contribuciones, y aparecen Jorge Zapata, Santiago Ospina y Sebastian Pallares como equipo habitual.

El estado actual no está listo para publicación. Hay rutas visibles rotas, navegación hacia páginas inexistentes, recursos muy pesados y varias implementaciones paralelas de CSS, JavaScript y HTML. El árbol de trabajo ya contenía numerosos archivos modificados, eliminados y nuevos antes de esta auditoría; no se restauró, eliminó ni sobrescribió ninguno.

Estructura real principal:

```text
index.html
assets/
  css/                 styles.css, project.css, project-mm2026.css
  js/                  main.js, project.js, project-mm2026.js, maraton-2026-data.js
  images/brand/        logo y foto de perfil disponible
  images/logos/        cinco logos de proyectos
  images/projects/     recursos de Maratón Medellín 2026
docs/
proyectos/
  maraton-medellin/2026/index.html
```

## Problemas críticos

### 1. Recursos visibles rotos en la home

- `index.html` solicita `assets/images/profile/sebastian-pallares.png`, que no existe. Sí existe `assets/images/brand/foto-perfil.webp`, pero la auditoría no cambia la referencia.
- La tarjeta principal solicita `assets/images/projects/maraton-medellin/2026/lanzamiento/vista-completa-campana.webp`, archivo inexistente.

Impacto: imagen rota en el hero y en el proyecto destacado.

### 2. Enlaces principales hacia páginas inexistentes

La home enlaza a directorios que no existen en el estado actual:

- `proyectos/media-maraton-del-mar/`
- `proyectos/expoinmobiliaria/`
- `proyectos/tres-trigos/`
- `proyectos/korswill/`

Los enlaces aparecen tanto en logos como en tarjetas de proyectos. En Git constan eliminaciones previas de varias páginas relacionadas, por lo que deben revisarse antes de decidir si se restauran o se sustituyen por estados “próximamente”.

### 3. Navegación de años rota

El caso 2026 enlaza a `../2025/`, `../2024/`, `../2023/`, `../2022/` y `../2021/`, pero esas páginas no existen actualmente y constan como eliminadas en el árbol de Git.

### 4. Rutas rotas en Maratón Medellín 2026

- `lanzamiento/campaña/campana-principal.webp` no existe.
- En `maraton-2026-data.js`, `impresos/escaparelas/escaparelas.pdf` no coincide con el recurso real `impresos/escarapelas/escarapelas.pdf`.
- En el mismo archivo, `mockups/oficiales/mockup-camiseta-maraton-medellin-2026.pdf` no coincide con `mockup-camisetas-maraton-medellin-2026.pdf`.

Impacto: medios ausentes y documentos que conducen a 404.

### 5. Peso extremo de recursos

Hay archivos no aptos para entrega web directa:

- `impresos/tijeras/tijera.pdf`: aproximadamente 8,5 GB.
- `impresos/numeros/numero-42k-21k-10k.pdf`: aproximadamente 199 MB.
- `impresos/valla/valla-mm.pdf`: aproximadamente 98 MB.
- Otros PDF entre 5 y 36 MB e imágenes raster entre 1 y 13 MB.
- El hero WEBP pesa aproximadamente 3,8 MB y numerosos módulos WEBP pesan entre 3 y 6 MB.

Impacto: clonación, despliegue, consumo de datos, memoria y tiempos de carga muy altos. Los PDF deben conservarse como originales de trabajo o descargas controladas, y generar derivados optimizados para la web.

## Problemas medios

### Implementaciones duplicadas o contradictorias

- La página 2026 carga `project.css` y `project.js`, mientras existen `project-mm2026.css` y `project-mm2026.js` aparentemente alternativos y sin uso.
- `project.js` y `project-mm2026.js` repiten progreso de lectura, parallax, observador de apariciones y actualización de año, pero no se comportan igual.
- `styles.css` y `project.css` contienen bloques de variables y responsive añadidos en distintas zonas; hay varias familias de breakpoints superpuestas (`620`, `700`, `800`, `900`, `950`, `980`, `1050` px), lo que aumenta el riesgo de reglas contradictorias.
- Existe otro `index.html` dentro de `assets/images/projects/maraton-medellin/2026/`. Un HTML ejecutable dentro de imágenes confunde la arquitectura y puede divergir de la página canónica.

No se detectaron archivos exactamente duplicados por hash entre los archivos inventariados.

### Nombres y portabilidad

- La carpeta `campaña` contiene tilde y puede estar normalizada de forma distinta a la cadena `campaña` usada en código. Esto puede comportarse diferente entre sistemas de archivos y servidores.
- Hay nombres con espacios y mayúsculas, por ejemplo `2026 lineas - MM26.svg` y varios PDF.
- Hay extensiones dobles: `distancia-negro-mm26.svg.svg` y `fecha-sep5-negro-mm26.svg.svg`.
- Existe un espacio interno problemático en `vista-completa-post- lanzamiento-2026.png`.
- Hay numerosos `.DS_Store` dentro del repositorio.
- Falta `branding/modulo-2.webp`, aunque puede ser una ausencia deliberada; debe confirmarse antes de renumerar.

### Accesibilidad y rendimiento HTML

- La mayoría de las imágenes visibles no declaran `width`, `height` ni `aspect-ratio` en el HTML, lo que favorece saltos de diseño.
- Las imágenes de galerías tienen `loading="lazy"`, pero el hero y la tarjeta destacada necesitan una estrategia explícita de prioridad y dimensiones.
- No se encontró una regla global `prefers-reduced-motion`; las apariciones, transiciones y parallax deben desactivarse o simplificarse para quienes lo solicitan.
- No se encontró una implementación clara y consistente de `:focus-visible` en los CSS revisados.
- Los contenidos dinámicos se insertan con `innerHTML`. Los datos actuales son locales, pero conviene evitar este patrón si en el futuro el contenido proviene de fuentes editables externas.
- La galería vacía usa `aria-live="polite"` aunque se rellena al cargar; puede generar anuncios innecesarios en lectores de pantalla.

### Contenido editorial aún provisional

- Textos como “Esta sección se alimentará…”, “Aquí se integrarán…” y “Personalizar cada sección…” son notas de producción visibles al público.
- La sección de fotografía está vacía y muestra un estado pendiente.
- La navegación superior etiqueta `#sistema` como “Campaña”, mientras la navegación de categorías lo etiqueta “Branding”; la jerarquía resulta inconsistente.

### Créditos MIRAPALTECHO

Los créditos principales sí cumplen. Antes de publicar debe verificarse con Sebastian que Jorge Zapata y Santiago Ospina participaron efectivamente en esta edición concreta. El texto actual los presenta como “equipo creativo habitual” y aclara que la participación específica se detallará, lo cual evita atribuir autoría exclusiva, pero todavía no documenta roles individuales por pieza o etapa.

## Comprobación responsive

Los CSS incluyen adaptaciones para móvil y escritorio, principalmente a `620/700`, `900/980` y `1050` px. Por inspección estática, existen reglas para reorganizar navegación, grillas, hero y galerías.

No fue posible completar la validación renderizada en 375, 430, 768, 1366 y 1920 px durante esta auditoría: el navegador de prueba perdió la sesión local y luego rechazó la conexión al servidor. Por tanto, los cinco tamaños quedan **pendientes de comprobación visual y de interacción**. No debe interpretarse la presencia de media queries como validación suficiente.

En la siguiente prueba deben verificarse específicamente:

- desbordamiento horizontal;
- legibilidad y solapamiento del encabezado;
- navegación por teclado y foco visible;
- recorte del hero y proporciones de imágenes;
- comportamiento de las galerías con archivos verticales y anchos;
- carga y memoria en móvil real o emulado;
- modo de movimiento reducido.

## Archivos involucrados

- `index.html`
- `assets/css/styles.css`
- `assets/js/main.js`
- `proyectos/maraton-medellin/2026/index.html`
- `assets/css/project.css`
- `assets/js/project.js`
- `assets/js/maraton-2026-data.js`
- `assets/css/project-mm2026.css`
- `assets/js/project-mm2026.js`
- `assets/images/projects/maraton-medellin/2026/index.html`
- `assets/images/projects/maraton-medellin/2026/lanzamiento/`

## Mejoras recomendadas

1. Corregir primero las rutas de imágenes y documentos que hoy producen 404.
2. Decidir qué hacer con los proyectos y años todavía no disponibles: restaurar páginas válidas o mostrar enlaces no interactivos con estado editorial claro.
3. Crear derivados WEBP/AVIF optimizados y miniaturas de los PDF; no enlazar originales de producción gigantes desde galerías públicas.
4. Elegir una sola implementación canónica para el caso 2026 y documentar el destino de los archivos alternativos antes de retirar cualquiera.
5. Normalizar nombres nuevos a minúsculas y guiones, sin espacios ni tildes; migrar los existentes mediante un mapa de rutas para no introducir más 404.
6. Añadir dimensiones intrínsecas, estados de foco, movimiento reducido y una política coherente de carga de imágenes.
7. Sustituir notas técnicas visibles por contenido editorial final o estados de proyecto discretos.
8. Validar créditos por sección y participación real antes de publicación.

## Plan incremental

### Etapa 1 — Estabilización crítica

- Corregir las cinco referencias directas a recursos ausentes o mal escritos.
- Resolver enlaces de proyectos y años inexistentes.
- Ejecutar un comprobador automático de rutas locales.
- Confirmar que no queden 404 en las dos páginas auditadas.

### Etapa 2 — Arquitectura y limpieza controlada

- Definir `project.css`/`project.js` como versión canónica o migrar de forma deliberada a la variante `project-mm2026`.
- Comparar el HTML canónico con el ubicado dentro de imágenes.
- Preparar un inventario de archivos auxiliares y solicitar aprobación antes de eliminar o mover cualquiera.
- Normalizar nombres mediante cambios pequeños y comprobados.

### Etapa 3 — Optimización de medios

- Conservar originales fuera de la entrega web o como descargas explícitas.
- Exportar imágenes responsive y previsualizaciones de PDF.
- Añadir dimensiones, formatos modernos y reglas de carga.
- Establecer límites de peso por tipo de recurso.

### Etapa 4 — Accesibilidad y responsive

- Implementar `:focus-visible` y `prefers-reduced-motion`.
- Probar teclado y lector de pantalla básico.
- Validar visualmente 375, 430, 768, 1366 y 1920 px.
- Corregir únicamente problemas demostrados en esas pruebas.

### Etapa 5 — Cierre editorial

- Confirmar participación de Jorge y Santiago en Maratón Medellín 2026.
- Detallar roles por etapa cuando haya información confirmada.
- Retirar textos técnicos visibles y completar estados vacíos.
- Repetir auditoría de rutas, rendimiento y accesibilidad antes del despliegue.

## Límites de esta auditoría

No se modificó el diseño ni ningún archivo de implementación. No se eliminaron recursos, no se restauraron eliminaciones existentes, no se creó commit y no se hizo push. Las correcciones propuestas requieren aprobación previa.
