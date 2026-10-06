# INFORME DE CORRECCIÓN Y PROTOTIPO

**Proyecto:** PROJECT ATLAS — Maratón Medellín 2026  
**Fase:** Laboratorio aislado del sistema dinámico de fondos  
**Fecha:** 12 de julio de 2026

## 1. Cambios de la implementación anterior

La implementación incorrecta había afectado estos archivos:

- `proyectos/maraton-medellin/2026/index.html`
  - Reemplazo de las barras originales del Hero.
  - Carga del motor dinámico.
  - Sustitución no autorizada del lockup.
  - Adición de hojas y scripts nuevos.

- `assets/css/project.css`
  - Estilos para el lockup compuesto.
  - Retiro de la capa de ruido anterior del Hero.

- `assets/css/dynamic-backgrounds.css`
  - Primera versión del motor visual.

- `assets/js/dynamic-background-engine.js`
  - Primera lógica de generación paramétrica.

- `assets/js/maraton-2026-backgrounds.js`
  - Primera configuración del Hero.

No se copió ni se utilizó el SVG de referencia en producción.

## 2. Restauración

Se restauró únicamente la última intervención del Hero:

- Se recuperaron las siete barras anteriores.
- Se recuperó el lockup anterior: `logo-maraton-medellin-2026.svg`.
- Se eliminaron del landing las referencias al motor nuevo.
- Se restauró la versión previa de `project.css`.
- Se restauró la capa de ruido anterior del Hero.
- Se eliminaron los estilos del lockup compuesto.
- No se revirtieron colores, secciones, navegación, galerías ni trabajo anterior.
- No se eliminó ningún recurso.

La restauración se confirmó en el navegador:

- 7 barras originales.
- 0 contenedores del motor experimental.
- 0 scripts experimentales cargados.
- 0 hojas experimentales cargadas.
- Lockup anterior confirmado.
- Sin desbordamiento horizontal.
- Sin errores de consola.

El landing conserva cambios históricos no consolidados en Git, pero ya no consume el prototipo.

## 3. Archivos creados

### `proyectos/maraton-medellin/2026/laboratorio-fondo.html`

- Prototipo aislado a pantalla completa.
- No está enlazado ni cargado por el landing.
- Solo contiene el fondo y su panel de control.

### `assets/css/dynamic-backgrounds.css`

- Capas, barras, movimiento, ruido y responsive.

### `assets/js/dynamic-background-engine.js`

- Motor independiente de la identidad visual.
- Normaliza anchos y genera entidades DOM.

### `assets/js/maraton-2026-backgrounds.js`

- Configuración del primer prototipo MM2026.

## 4. Arquitectura del motor

### Fondo base

Es una capa independiente y continua. Actualmente usa un degradado vertical entre:

- `#641E28`
- `#8A2944`

Permanece visible donde las barras no ocupan el lienzo.

### Granulado

Existe una sola capa continua sobre fondo y barras.

- No se repite individualmente por barra.
- Utiliza turbulencia SVG ligera.
- Su intensidad puede ajustarse de `0 %` a `80 %`.
- El valor inicial es `56 %`.

### Barras superiores

Tres barras están ancladas al borde superior. Su movimiento usa `transform-origin: top`, por lo que conservan siempre su origen.

### Barras inferiores

Cinco barras están ancladas al borde inferior. Usan `transform-origin: bottom`.

### Cálculo de anchos

Cada barra declara un peso. El motor calcula:

```text
ancho = peso individual / suma de pesos × 100
```

En el prototipo todas tienen peso `1`, por lo que cada barra mide `12,5 %`.

La suma comprobada es exactamente el 100 % del lienzo en todos los tamaños.

### Movimiento

- Se anima `scaleY()`, no la posición completa.
- Cada barra conserva su origen superior o inferior.
- Duraciones entre 31 y 46 segundos.
- Amplitudes aproximadas entre 2,5 % y 6 %.
- Desfases negativos independientes.
- Curva `ease-in-out`.
- El panel permite detener o reactivar el movimiento.
- No se detectaron saltos ni errores durante la prueba.

### Responsive

Cada barra define alturas independientes para:

- Escritorio.
- Tablet.
- Móvil.

Las velocidades móviles también pueden configurarse por barra. El ancho se recalcula siempre desde pesos y no depende de imágenes.

### Movimiento reducido

Con `prefers-reduced-motion: reduce`:

- Las animaciones quedan desactivadas.
- Las barras conservan escala estable.
- `will-change` deja de aplicarse.

## 5. Validaciones

| Tamaño | Barras | Superiores | Inferiores | Ancho total | Overflow |
|---|---:|---:|---:|---:|---|
| 375 × 812 | 8 | 3 | 5 | 375 px | No |
| 430 × 900 | 8 | 3 | 5 | 430 px | No |
| 768 × 900 | 8 | 3 | 5 | 768 px | No |
| 1366 × 768 | 8 | 3 | 5 | 1366 px | No |
| 1920 × 1080 | 8 | 3 | 5 | 1920 px | No |

También se comprobó:

- Primera barra alineada al borde izquierdo.
- Última barra alineada al borde derecho.
- Una sola capa de ruido.
- Movimiento autónomo activo.
- Pausa funcional.
- Ruido en `0 %`.
- Ruido en `80 %`.
- Sin errores de consola.
- `git diff --check` sin errores.

## 6. Limitaciones

- Es una primera interpretación paramétrica, todavía pendiente de aprobación visual.
- La relación exacta entre barras superiores e inferiores puede requerir ajuste.
- Las alturas y combinaciones cromáticas todavía pueden acercarse más a la referencia.
- El movimiento se validó técnicamente, pero su ritmo debe evaluarse durante una observación más prolongada.
- El panel es funcional, no un componente visual definitivo.
- El prototipo usa ocho barras iguales porque la referencia principal presenta ocho módulos; futuras variantes podrán usar pesos y cantidades diferentes.
- No se hizo integración con el Hero ni con otras secciones.

## 7. Siguiente paso

Realizar únicamente una validación visual del prototipo aislado:

`proyectos/maraton-medellin/2026/laboratorio-fondo.html`

Después de esa revisión se podrán ajustar alturas, orígenes, colores, ritmo y amplitud. No se recomienda integrar nada al landing hasta recibir aprobación explícita.

No se hizo commit, push ni se continuó con la integración.
