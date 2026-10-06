# INFORME — RECONSTRUCCIÓN DEL MICROSITIO MM2026

Fecha: 13 de julio de 2026  
Proyecto: PROJECT ATLAS — Maratón Medellín 2026  
Estado: reconstrucción terminada y validada  

## 1. Resultado general

La landing MM2026 fue reconstruida como un micrositio editorial propio de la edición. La nueva página ya no consume la arquitectura anterior basada en secciones genéricas, galerías automáticas y tarjetas de documentos.

El recorrido actual cuenta una historia:

1. Introducción de campaña.
2. Contexto, problema, proceso y conclusión.
3. Construcción del Branding / Key Visual.
4. Activación del sistema durante la campaña.
5. Feria Exporunners.
6. Día de la carrera.
7. Créditos y cierre conceptual.

Los recursos existentes se presentan mediante selección editorial, escenarios protagonistas, tabs y carruseles horizontales. No existe una galería vertical que enumere todos los archivos disponibles.

## 2. Arquitectura por edición

MM2026 utiliza una implementación aislada:

```text
proyectos/maraton-medellin/2026/index.html
assets/css/mm2026-microsite.css
assets/js/mm2026-microsite-config.js
assets/js/mm2026-microsite.js
```

Esta separación permite que la edición controle su propia:

- paleta;
- dirección artística;
- ritmo editorial;
- composición;
- comportamiento interactivo;
- estructura narrativa;
- selección de piezas;
- movimiento.

No se creó una plantilla visual que deba copiarse en otras carreras. Los patrones técnicos —configuración, tabs accesibles, carruseles y observación de entrada— sí pueden estudiarse y reutilizarse sin imponer la estética MM2026.

## 3. Archivos modificados y creados

### `proyectos/maraton-medellin/2026/index.html`

Archivo reconstruido completamente.

- Nueva estructura semántica.
- Un único `h1`.
- Navegación compacta del caso.
- Hero de campaña generado con capas HTML/CSS.
- Narrativa de contexto, problema, proceso y conclusión.
- Key Visual construido sin imágenes de campaña.
- Selector de tres momentos.
- Créditos MIRAPALTECHO preservados.
- Cierre editorial.

### `assets/css/mm2026-microsite.css`

Hoja dedicada a la edición 2026.

- Variables cromáticas MM2026.
- Diseño responsive y full-bleed.
- Barras y texturas construidas con CSS.
- Movimiento ambiental lento.
- Estados de tabs y carruseles.
- Layouts editoriales de historia, identidad y créditos.
- Soporte de `prefers-reduced-motion`.
- Foco visible y enlace para saltar al contenido.

### `assets/js/mm2026-microsite-config.js`

Configuración temática y de contenido.

```js
{
  edition: 2026,
  theme: "mm26",
  artDirection: "modular-gradient",
  palette: {},
  motion: {},
  moments: []
}
```

Registra únicamente la selección editorial utilizada por cada momento.

### `assets/js/mm2026-microsite.js`

Controlador progresivo del micrositio.

- Render de escenarios por configuración.
- Tabs accesibles con flechas, Inicio y Fin.
- Carruseles horizontales con botones.
- Barra de progreso de lectura.
- Revelado progresivo por `IntersectionObserver`.
- Adaptación al movimiento reducido.
- Escape de contenido antes de construir HTML.

### `docs/informe-reconstruccion-micrositio-mm2026.md`

Documento maestro de esta fase.

## 4. Archivos heredados desconectados

La landing ya no carga:

- `assets/css/project.css`;
- `assets/css/shared-components.css`;
- `assets/js/project.js`;
- `assets/js/maraton-2026-data.js`;
- `assets/js/shared-components.js`;
- el motor de fondos dinámicos;
- el laboratorio de fondos.

Estos archivos no fueron eliminados. Permanecen disponibles para auditoría, recuperación o fases futuras.

## 5. Dirección visual

### Fondo y jerarquía

- Violeta `#4A0BAE`: territorio dominante.
- Verde `#54CF88`: énfasis, activación y superficie de créditos.
- Azul `#7281F1`: información secundaria y profundidad.
- Amarillo, lima y vino: reservados para aplicaciones y momentos específicos.
- Blanco: lectura funcional.

### Hero

- Barras reales generadas con HTML y CSS.
- Ritmo asimétrico.
- Degradados propios de MM2026.
- Movimiento ambiental lento, no reactivo ni tipo ecualizador.
- Logo 2026 preservado como recurso SVG.

### Key Visual

La sección `#identidad` contiene cero imágenes.

Se construye con:

- texto real;
- variables CSS;
- barras HTML;
- gradientes;
- muestras tipográficas;
- módulos y retículas;
- textura procedural continua.

## 6. Arquitectura narrativa

### Introducción

Presenta la promesa conceptual y la identidad principal antes de entrar al proceso.

### Historia

Cuatro bloques conectan contexto, problema, proceso y conclusión sin convertir cada punto en una pantalla completa.

### Branding / Key Visual

Explica las reglas del sistema y permite verlo en acción mediante una composición generada por código.

### Campaña en acción

Tres tabs cambian el escenario editorial sin recargar ni alargar innecesariamente la página:

- Durante la campaña.
- Feria Exporunners.
- Día de la carrera.

Cada escenario contiene:

- texto contextual;
- una aplicación protagonista;
- una selección horizontal de piezas;
- controles de navegación.

### Créditos

Se preservaron:

- Pablo Molina — Dirección creativa.
- Jorge Zapata, Santiago Ospina y Sebastian Pallares — Equipo creativo habitual.
- Participación específica de Sebastian sin atribución exclusiva del proyecto.

## 7. Interacción y movimiento

- Revelados suaves durante el desplazamiento.
- Barras con respiración cromática y variación mínima de escala.
- Tabs con actualización inmediata del escenario.
- Carruseles con scroll natural, botones y `scroll-snap`.
- Barra superior de progreso.
- Sin Canvas, WebGL, video ni dependencias externas de animación.
- Sin listeners de desplazamiento que modifiquen layouts o causen saltos.

## 8. Accesibilidad

- Documento en español.
- Un único `h1`.
- Jerarquía de encabezados coherente.
- `main`, `nav`, `header`, `section` y `footer` semánticos.
- Enlace “Saltar al contenido”.
- `:focus-visible` de alto contraste.
- Tabs con roles, `aria-selected`, `aria-controls` y navegación por teclado.
- Región interactiva con `aria-live="polite"`.
- Texto alternativo específico en las aplicaciones.
- Imágenes secundarias con `loading="lazy"`.
- `prefers-reduced-motion` desactiva animación y desplazamiento suave.

## 9. Rendimiento

Peso combinado del código nuevo sin recursos visuales:

| Archivo | Tamaño aproximado |
|---|---:|
| HTML | 9,4 KB |
| CSS | 22,3 KB |
| Configuración JS | 6,2 KB |
| Controlador JS | 6,1 KB |
| Total | 43,9 KB |

Decisiones de rendimiento:

- No se cargan todas las piezas disponibles.
- Solo el primer escenario se construye al iniciar.
- Los demás escenarios se generan bajo demanda.
- Las piezas secundarias usan carga diferida.
- No existen frameworks ni librerías adicionales.
- No se cargan PDFs dentro de la experiencia.

## 10. Validación responsive

| Viewport | Scroll horizontal | Imágenes rotas | Key Visual con imágenes | Resultado |
|---|---:|---:|---:|---|
| 375 × 812 | No | 0 | 0 | Correcto |
| 430 × 900 | No | 0 | 0 | Correcto |
| 768 × 900 | No | 0 | 0 | Correcto |
| 1366 × 768 | No | 0 | 0 | Correcto |
| 1920 × 1080 | No | 0 | 0 | Correcto |

El alto total de página quedó entre aproximadamente 8.236 y 9.801 px según el viewport. La implementación anterior superaba aproximadamente 16.920 px en 1366 px y 20.180 px en 1920 px.

## 11. Validaciones técnicas

- 13 rutas visuales de configuración comprobadas: 0 faltantes.
- Consola del navegador: 0 errores y 0 advertencias.
- Servidor local: todos los recursos solicitados respondieron 200 o 304.
- `node --check assets/js/mm2026-microsite-config.js`: correcto.
- `node --check assets/js/mm2026-microsite.js`: correcto.
- `git diff --check`: correcto.
- Llaves CSS balanceadas.
- Tabs probados con clic y teclado.
- Cambio de escenarios probado para campaña, Exporunners y carrera.
- Sin scroll horizontal en los cinco tamaños.

## 12. Limitaciones actuales

- Exporunners dispone actualmente de una única aplicación visual real organizada: la escarapela de staff. Los demás módulos de ese escenario son demostraciones editoriales construidas con código, claramente presentadas como principios o arquitectura preparada.
- No existen todavía recursos finales de backing, tótems, panelería, stand o punto de información.
- La selección de Día de carrera utiliza mockups contextuales existentes; no se presentan como fotografía documental.
- No se construyeron las páginas 2021–2025.
- No se modificaron otras carreras ni el Home.

## 13. Próximo paso recomendado

Realizar una revisión visual conjunta del micrositio y aprobar:

1. escala del Hero;
2. ritmo de la sección Historia;
3. composición del Key Visual;
4. selección de piezas por momento;
5. equilibrio de movimiento.

Después de esa aprobación, la siguiente fase puede incorporar nuevos recursos de Exporunners o Día de carrera sin cambiar la arquitectura base.

## 14. Estado de Git

No se creó rama, commit ni push. El repositorio conserva cambios anteriores ajenos a esta fase y no se revirtió ninguno.
