# INFORME — LABORATORIO TIPOGRÁFICO, FONDOS OFICIALES Y MOMENTOS DINÁMICOS MM2026

**Proyecto:** PROJECT ATLAS — Maratón Medellín 2026  
**Fecha:** 13 de julio de 2026  
**Alcance:** micrositio MM2026  
**Estado:** implementación y validación completadas  

## 1. Objetivo de la fase

Esta fase refinó el micrositio existente sin reconstruir su arquitectura narrativa. El trabajo se concentró en cuatro frentes:

1. presentar profesionalmente las tres tipografías oficiales;
2. corregir la configuración variable de Bricolage Grotesque;
3. sustituir composiciones CSS provisionales por fondos gráficos oficiales;
4. dar más fluidez a los tres momentos de campaña sin ampliar innecesariamente la página.

No se modificaron el Home, otras carreras, las ediciones 2021–2025, el laboratorio de fondos ni el motor dinámico anterior.

## 2. Archivos modificados

### `proyectos/maraton-medellin/2026/index.html`

- Se añadió el símbolo flor/MM en la navegación superior como enlace accesible a `#inicio`.
- Se eliminó la retícula decorativa de rectángulos CSS del bloque “Corre entre montañas”.
- Se convirtió la muestra tipográfica en un laboratorio de tres familias: Bricolage Grotesque, Gopher y Ziren.
- Se sustituyó la demostración modular generada con rectángulos CSS por la imagen oficial verde/amarilla.
- Se actualizaron los identificadores de versión de CSS y JavaScript para evitar caché obsoleta.

### `assets/css/mm2026-microsite.css`

- Se registraron Gopher Regular, Medium y Bold mediante `@font-face`.
- Gopher pasó a ser la familia de lectura, interfaz y texto general.
- Bricolage Grotesque quedó reservada para titulares editoriales con ancho estándar, peso medio y tracking controlado.
- Se corrigieron todos los usos condensados o fuera de rango de Bricolage.
- Se construyó el laboratorio tipográfico responsive.
- “Corre entre montañas” ahora utiliza `banner-fondo-02.png` como imagen oficial de fondo con `background-size: cover`.
- La composición modular utiliza `banner-fondo-03.png` como imagen real, con proporción intrínseca y `object-fit: cover`.
- Se diseñó el símbolo flor/MM dentro del encabezado con estados de foco y hover.
- Se añadieron una franja cromática por momento, transiciones de entrada y un indicador de avance para cada carrusel.
- Se añadieron ajustes específicos para escritorio, tableta y móvil.
- Se mantuvo el tratamiento `prefers-reduced-motion` existente para detener animaciones y transiciones no esenciales.

### `assets/js/mm2026-microsite-config.js`

- Se asociaron los tres fondos oficiales con los tres momentos de campaña.
- Se definieron acento, posición focal y raíz de contenido para cada momento.
- Se añadió `pieceArchitecture`, una taxonomía inicial que separa momento, raíz, categoría y estado de publicación.
- Esta taxonomía prepara la siguiente fase sin cambiar todavía la selección editorial de piezas.

### `assets/js/mm2026-microsite.js`

- Cada momento renderiza una franja con su fondo y foco cromático correspondiente.
- Las transiciones se activan al cambiar de pestaña y no utilizan autoplay.
- Los carruseles informan visualmente el avance horizontal.
- Los botones anterior/siguiente se desactivan correctamente al alcanzar los extremos.
- Cada pieza recibe atributos de categoría y estado preparados para una futura organización o filtrado.
- Se conservó la navegación por teclado de las pestañas y el comportamiento condicionado por movimiento reducido.

## 3. Recursos incorporados

### Fuentes

| Origen | Destino estable | Uso |
|---|---|---|
| `/Users/MPT5/Library/Fonts/Gopher-Regular.otf` | `assets/fonts/mm2026/gopher-regular.otf` | Texto de lectura e interfaz, peso 400 |
| `/Users/MPT5/Library/Fonts/Gopher-Medium.otf` | `assets/fonts/mm2026/gopher-medium.otf` | Texto destacado e interfaz, peso 500 |
| `/Users/MPT5/Library/Fonts/Gopher-Bold.otf` | `assets/fonts/mm2026/gopher-bold.otf` | Etiquetas y controles, peso 700 |

Los archivos originales no fueron movidos, modificados ni eliminados.

### Símbolo oficial

| Origen | Destino estable | Uso |
|---|---|---|
| `/Users/MPT5/Desktop/Clientes - Escritorio/Maratón Medellín/2026/Recursos Graficos/Recursos Gráficos MM-Sistecredito - Clientes/Elementos editables Sistecredito/FLOR borde Blanco - MM26.svg` | `assets/images/projects/maraton-medellin/2026/lanzamiento/recursos-oficiales/flor-mm-borde-blanco.svg` | Enlace al Hero dentro de la navegación MM2026 |

El SVG se conservó como recurso vectorial oficial. El original externo permanece intacto.

## 4. Sistema tipográfico implementado

### Bricolage Grotesque

La inspección del archivo variable confirmó los siguientes ejes reales:

- `opsz`: 12–96;
- `wght`: 200–800;
- `wdth`: 75–100.

La implementación anterior utilizaba valores de ancho 74, 78 y 82, y no fijaba de forma consistente el peso. El valor 74 quedaba fuera del rango real y el peso podía resolver hacia el extremo alto del archivo.

La configuración aplicada es:

```css
font-weight: 500;
font-variation-settings:
  "wdth" 100,
  "wght" 500,
  "opsz" 14;
```

También se redujo el tracking negativo agresivo. Los titulares conservan tensión editorial, pero ya no comprimen ni superponen caracteres.

### Gopher

Se incorporaron tres cortes estáticos:

- Regular 400;
- Medium 500;
- Bold 700.

Gopher funciona como tipografía de lectura, párrafos, navegación, etiquetas y controles. Esto separa claramente la voz editorial de la voz funcional.

### Ziren

Ziren Bold permanece restringida a:

- distancias;
- numeración;
- fechas o códigos de alto impacto.

No se utiliza para párrafos ni titulares editoriales largos.

## 5. Fondos oficiales

### “Corre entre montañas”

Utiliza:

`assets/images/projects/maraton-medellin/2026/fondos-estaticos/banner-fondo-02.png`

La imagen roja/magenta se aplica como fondo continuo, sin repetición ni deformación. El logotipo, el titular y las distancias permanecen como contenido HTML real por encima de la imagen.

### Composición modular

Utiliza:

`assets/images/projects/maraton-medellin/2026/fondos-estaticos/banner-fondo-03.png`

La imagen conserva su proporción original de 3001 × 1265 px y reemplaza por completo los rectángulos CSS provisionales. No se añade una segunda capa de ruido.

### Hero y momentos

- Hero y “Durante la campaña”: `banner-fondo-01.png`.
- “Feria Exporunners” y composición modular: `banner-fondo-03.png`.
- “Día de la carrera” y “Corre entre montañas”: `banner-fondo-02.png`.

La asignación responde a familias cromáticas y evita una distribución aleatoria.

## 6. Navegación

El encabezado mantiene el acceso al portafolio mediante el símbolo personal de Sebastian y añade, como segundo elemento, la flor/MM oficial.

La flor:

- enlaza a `#inicio`;
- tiene una etiqueta accesible explícita;
- no repite texto visual innecesario;
- conserva foco visible;
- permanece disponible en escritorio, tableta y móvil.

## 7. Momentos dinámicos

Los tres momentos se mantienen compactos y bajo control del usuario.

Se incorporaron:

- una franja cromática oficial por momento;
- entrada breve del contenido al cambiar de pestaña;
- movimiento ambiental lento de la posición del fondo;
- indicador de progreso del carrusel;
- estados desactivados en los límites del carrusel;
- foco preservado al activar un momento;
- navegación con flechas, Inicio y Fin dentro del grupo de pestañas.

No se incorporaron autoplay, bucles rápidos, Canvas, WebGL ni animaciones que modifiquen las imágenes originales.

## 8. Preparación de la siguiente fase

La configuración incluye ahora una arquitectura inicial de piezas:

```text
momento
└── raíz de contenido
    ├── categorías
    └── estados
        ├── published
        ├── ready
        └── pending
```

Las raíces preparadas son:

- `durante-campana`;
- `exporunners`;
- `dia-carrera`.

La siguiente fase podrá completar categorías y estados pieza por pieza sin reescribir el renderizador ni alterar la estructura visual del micrositio.

## 9. Validación técnica y visual

### Breakpoints comprobados en navegador

| Tamaño | Resultado | Scroll horizontal | Fuentes |
|---|---|---:|---|
| 375 × 812 | Correcto | 0 px | cargadas |
| 430 × 900 | Correcto | 0 px | cargadas |
| 768 × 900 | Correcto | 0 px | cargadas |
| 1366 × 768 | Correcto | 0 px | cargadas |
| 1920 × 1080 | Correcto | 0 px | cargadas |

En los cinco tamaños, el navegador confirmó para Bricolage:

```text
"opsz" 14, "wdth" 100, "wght" 500
```

### Interacción

- Las tres pestañas actualizan `aria-selected` correctamente.
- El momento activo actualiza su raíz semántica y su fondo.
- El carrusel avanza de 0 % a 100 % y desactiva los controles en los extremos.
- La flor/MM enlaza correctamente a `#inicio`.

### Rutas y consola

- Rutas locales verificadas: **0 faltantes**.
- Imágenes rotas detectadas en navegador: **0**.
- Errores de sintaxis en JavaScript: **0**.
- Errores de consola durante las pruebas: **0**.
- Llaves CSS: balanceadas.
- `git diff --check`: sin errores de espacios o formato.

## 10. Limitaciones y trabajo pendiente

1. Los tres fondos oficiales son PNG de alta resolución y pesan aproximadamente entre 2,2 MB y 4 MB. Conviene generar variantes WebP/AVIF en una fase de optimización, conservando los PNG maestros.
2. La taxonomía de piezas está preparada, pero todavía falta asignar categoría y estado específico a cada recurso definitivo.
3. La selección de piezas sigue siendo la existente; esta fase no agregó nuevos mockups ni reorganizó el inventario editorial.
4. Las posiciones focales ya son responsive mediante `cover`, pero podrían afinarse por pieza cuando se cierre el inventario definitivo.
5. No se alteró el laboratorio ni se reactivó el motor de fondos dinámicos, conforme al alcance solicitado.

## 11. Estado de Git

- No se creó rama.
- No se realizó commit.
- No se realizó push.
- No se restauraron archivos eliminados previamente por el usuario.
- El repositorio continúa con cambios previos ajenos a esta fase; se preservaron sin intervención.

## 12. Próximo paso recomendado

Realizar una revisión visual conjunta del Hero, el laboratorio tipográfico, “Corre entre montañas”, la muestra modular y los tres momentos. Después de su aprobación, completar la clasificación definitiva de piezas usando la taxonomía ya incorporada.
