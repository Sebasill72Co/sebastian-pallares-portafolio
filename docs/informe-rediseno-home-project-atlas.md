# INFORME — REDISEÑO HOME PROJECT ATLAS

Fecha: 12 de julio de 2026  
Alcance: exclusivamente el Home principal de PROJECT ATLAS.

## 1. Archivos modificados

### `index.html`

- Reestructura el Hero, marcas, proyectos, perfil, experiencia, formación, capacidades, herramientas, proceso, contacto y footer.
- Mantiene la información profesional, fechas, nombres, cargos, estudios y créditos existentes.
- Elimina la nota general de MIRAPALTECHO solicitada.
- Añade navegación móvil accesible, enlace para saltar al contenido, iconos SVG de contacto y favicon local.
- Evita enlaces a tres páginas de proyecto que no existen actualmente.

### `assets/js/main.js`

- Conserva la inicialización de utilidades compartidas.
- Añade el estado de mejora progresiva mediante la clase `js`.
- Gestiona apertura y cierre del menú móvil.
- Cierra el menú después de navegar, con `Escape` o al volver a escritorio.
- Sin dependencias externas.

## 2. Archivos creados

### `assets/css/home-editorial.css`

Hoja visual exclusiva del Home. Aísla el rediseño de los casos internos y evita añadir más sobrescrituras a `styles.css`.

### `docs/informe-rediseno-home-project-atlas.md`

Documento técnico y visual de cierre de la intervención.

## 3. Hero

### Estructura anterior

- Titular de gran escala con numerosos saltos.
- Fotografía inclinada dentro de una tarjeta.
- Dos círculos decorativos.
- Tres notas flotantes.
- Botones tipo píldora.

### Nueva estructura

- Retícula editorial de doce columnas.
- Índice `AT—01` y referencia temporal.
- Nombre profesional con jerarquía propia.
- Titular reorganizado en un bloque de lectura más controlado.
- Fotografía integrada como franja vertical.
- Tres datos profesionales estructurados en una línea inferior.
- Líneas verticales y horizontales funcionales como sistema de alineación.

### Tratamiento de fotografía

- Se conserva `assets/images/brand/foto-perfil.webp`.
- No se inclina ni se deforma.
- Usa `object-fit: cover` y un punto focal estable.
- El recorte editorial conserva rostro y cuerpo en todos los tamaños.
- Incluye proporción y dimensiones intrínsecas `960 × 1280`.
- La interacción se limita a una ampliación de 1.2 % y se elimina con movimiento reducido.

### Jerarquía tipográfica

- El nombre y el mensaje son niveles independientes.
- El titular conserva exactamente su mensaje profesional.
- Se reducen saltos arbitrarios y se controla el ancho de lectura.
- La entrada y descripción permanecen subordinadas al titular.

### CTA

- Acción primaria magenta profundo: “Explorar proyectos”.
- Acción secundaria con borde: “Conocer mi perfil”.
- Área mínima de 48–52 px.
- Estados `hover`, `focus-visible` y `active`.
- Contraste del CTA principal con blanco: aproximadamente 4.92:1.

### Responsive

- En escritorio, fotografía y contenido comparten la retícula.
- En tablet, la fotografía ocupa una columna lateral estable.
- En móvil, el contenido aparece primero y la fotografía se integra después.
- En 375 px los dos CTA quedan visibles dentro del primer viewport.

## 4. Bloque de marcas

- Se conservan los cinco logos reales.
- Se normalizan mediante límites de anchura y altura, `object-fit: contain` y alineación central.
- El estado inicial es monocromático y de opacidad moderada.
- El único logo con caso disponible, Maratón Medellín, conserva interacción y recupera color en `hover` o foco.
- Los logos sin página activa se presentan como marcas no interactivas, evitando 404.
- Se sustituyen tarjetas redondeadas por divisores editoriales.

## 5. Proyectos seleccionados

### Nueva retícula

- Retícula modular de doce columnas.
- Separación de un píxel mediante una superficie común.
- Sin sombras ni tarjetas redondeadas grandes.
- Maratón Medellín ocupa siete columnas y dos filas en escritorio.
- Los demás proyectos usan módulos secundarios compactos.
- En tablet se crea una pieza dominante y tres módulos iguales.
- En móvil todos se apilan verticalmente.

### Jerarquía

- Maratón Medellín conserva la máxima jerarquía.
- Los otros casos se identifican como proyectos en preparación.
- Las descripciones se redujeron sin cambiar su sentido.

### Logos utilizados

- Maratón Medellín: `assets/images/logos/maraton-medellin.svg`
- KÒRSWILL: `assets/images/logos/korswill.svg`
- Media Maratón del Mar: `assets/images/logos/media-maraton-del-mar.svg`
- ExpoInmobiliaria: `assets/images/logos/expoinmobiliaria.svg`

### Recursos y destinos faltantes

Existen logos para todos los proyectos solicitados, por lo que no se creó ningún fallback gráfico.

No existen actualmente estas páginas:

- `proyectos/korswill/index.html`
- `proyectos/media-maraton-del-mar/index.html`
- `proyectos/expoinmobiliaria/index.html`

Por ese motivo, los tres módulos se implementaron como artículos con estado “Caso en preparación”, no como enlaces rotos. Maratón Medellín continúa enlazando a su caso existente.

## 6. Perfil profesional

- La introducción se presenta como texto destacado de gran escala.
- Los tres párrafos se limitan a una columna de lectura de aproximadamente 720 px.
- Pablo Molina, Jorge Zapata y Santiago Ospina permanecen mencionados.
- KÒRSWILL continúa claramente identificado como experiencia independiente.
- Los datos profesionales usan una franja editorial dividida, no tarjetas.
- Las áreas de trabajo se muestran como un índice compacto.

## 7. Experiencia

- La sección adopta filas editoriales con periodo, categoría y contenido.
- Se distinguen claramente experiencia en equipo, proyecto independiente y experiencia inicial.
- Los proyectos relacionados se presentan como filas de datos escaneables.
- Se confirma a Pablo Molina como director creativo.
- Se confirma el equipo habitual: Jorge Zapata, Santiago Ospina y Sebastian Pallares.
- Se eliminó completamente la nota general solicitada y su espacio asociado.

## 8. Formación

- Las dos tarjetas grandes se sustituyen por filas editoriales.
- Cada registro conserva periodo, institución, título y descripción.
- En escritorio usa tres columnas.
- En tablet y móvil reorganiza el contenido sin perder el orden semántico.

## 9. Capacidades y herramientas

- Las capacidades se convierten en tres etapas de diferente jerarquía tipográfica.
- Los números se usan como anclas visuales grandes.
- Título y descripción se alinean mediante una retícula común.
- Las herramientas usan una matriz compacta de dos columnas.
- Se conserva literalmente “HTML y CSS básico”.
- No se exagera el nivel técnico ni se añaden herramientas.

## 10. Forma de trabajo

- Los cuatro pasos se conectan mediante una línea superior continua.
- Cada etapa tiene un punto de progresión sobre la línea.
- En tablet se organiza en dos columnas conectadas.
- En móvil se convierte en una secuencia vertical con línea lateral.
- Se conservan los cuatro nombres y descripciones originales.

## 11. Contacto

- Correo: icono SVG inline de sobre.
- WhatsApp: interpretación SVG reconocible.
- Instagram: icono SVG reconocible.
- Los iconos tienen `aria-hidden="true"` porque el texto ya describe el destino.
- Correo: `mailto:sebasill72@gmail.com`.
- WhatsApp: `https://wa.me/573505458566`.
- Instagram: `https://instagram.com/sebasill72`.
- Los enlaces externos usan `_blank` y `rel="noopener noreferrer"`.
- Todos incluyen `aria-label`.
- Área de interacción comprobada: 74 px de alto.
- Incluyen `hover`, `focus-visible` y estados activos heredados.
- El fondo usa un magenta profundo derivado de la marca para lograr contraste AA con texto blanco.

## 12. Validación responsive

| Tamaño | Navegación | Hero y fotografía | Proyectos | Scroll horizontal |
|---|---|---|---|---|
| 375 × 812 | Menú accesible y funcional | Dos CTA visibles; foto 347 px | Una columna | No |
| 430 × 900 | Menú accesible y funcional | Dos CTA visibles; foto 402 px | Una columna | No |
| 768 × 1024 | Navegación horizontal | Composición de dos columnas; foto 292.6 px | Destacado + módulos | No |
| 1366 × 768 | Navegación completa | Foto 414.4 px y CTA visibles | Retícula 7/5 | No |
| 1920 × 1080 | Navegación completa | Retícula centrada; foto 442.7 px | Retícula 7/5 | No |

El ancho de documento coincidió exactamente con el viewport en los cinco tamaños.

## 13. Validación técnica

### Consola

- Cero errores.
- Cero advertencias.

### Recursos y rutas

- Todos los recursos referenciados por el Home existen.
- Todas las imágenes terminaron con `naturalWidth > 0` después de cargar sus secciones.
- El favicon reutiliza el logo SVG personal y evita la solicitud implícita fallida.
- La última carga del servidor local no registró respuestas 404.

### Accesibilidad

- Un solo `h1` seguido por encabezados `h2` y `h3`.
- Enlace “Saltar al contenido”.
- Navegación con nombre accesible.
- Menú implementado como botón real con `aria-expanded` y `aria-controls`.
- Foco visible de tres píxeles.
- Iconos redundantes ocultos a tecnologías de asistencia.
- Imágenes con texto alternativo; logos decorativos del footer sin anuncio redundante.
- Enlaces de contacto descriptivos.
- Área mínima superior a 44 px.

### Movimiento reducido

- La infraestructura compartida muestra inmediatamente los bloques cuando se solicita movimiento reducido.
- Las transiciones del retrato, logos y menú se eliminan.
- Ningún movimiento transmite información esencial.

### Mejora progresiva

- El contenido esencial está presente en HTML.
- Si JavaScript falla, la navegación móvil permanece visible.
- JavaScript solo transforma esa navegación en un menú plegable.

### Scroll horizontal

- Ausente en los cinco tamaños obligatorios.

## 14. Pendientes o limitaciones

- KÒRSWILL, Media Maratón del Mar y ExpoInmobiliaria no pueden enlazarse hasta que existan sus páginas canónicas.
- El logo SVG de KÒRSWILL pesa aproximadamente 2 MB; no se modificó porque la tarea prohíbe reemplazar originales sin autorización.
- El Hero editorial supera un viewport de altura en móvil porque incorpora contenido, fotografía y datos profesionales. El primer viewport conserva mensaje y ambos CTA; la fotografía continúa al desplazarse.
- La aprobación definitiva de escala tipográfica y recorte fotográfico requiere revisión visual del usuario.

## 15. Próximo paso

Revisión visual del nuevo HOME por parte del usuario.

No se hizo commit, push ni se modificó ningún proyecto interno.
