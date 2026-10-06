# INFORME — REFINAMIENTO V2 MM2025

Fecha: 15 de julio de 2026  
Proyecto: PROJECT ATLAS — Maratón Medellín 2025  
Estado: implementación y validación local completadas; sin commit, push ni rama nueva.

## 1. Archivos modificados

| Ruta | Cambio |
|---|---|
| `proyectos/maraton-medellin/2025/index.html` | Actualización documental de créditos, estructura del cierre editorial y metadatos del footer. |
| `assets/css/mm2025-microsite.css` | Barra anual, Hero, ancho editorial, módulos apilados, texturas, distancias, créditos, footer y responsive V2. |
| `docs/informe-refinamiento-v2-mm2025-hero-espaciado-footer.md` | Registro de decisiones y validaciones de la fase. |

No se modificaron los JavaScript, la configuración 2025, MM2026, las plantillas 2021–2024, el Home ni los recursos originales.

## 2. Barra de ediciones

- Se corrigió una colisión de especificidad: una regla antigua aplicada a todos los `div` impedía que la retícula editorial nueva gobernara el layout.
- La introducción ocupa el área izquierda y la pista de años se ancla al borde derecho del contenedor, igual que en la lógica espacial de MM2026.
- Las seis celdas usan 72 px exactos, sin `gap`, padding residual ni fragmento blanco al lado de 2025.
- El borde derecho de la pista coincide con el borde derecho del contenedor: diferencia medida de 0 px en los seis tamaños.
- Se conserva la persistencia sticky, el scroll interno móvil, `aria-current="page"` y el centrado del año activo.

## 3. Hero 2025

- Se conservó `fondos/hero-principal.jpg`, porque es el recurso oficial preparado específicamente para el Hero.
- Se eliminó la segunda capa de textura aplicada por CSS: el fondo ya integra su trama y la duplicación ensuciaba la imagen.
- El velo se redujo a una transición cian casi imperceptible.
- Se amplió el ancho editorial útil a un máximo de 1440 px.
- El bloque derecho perdió el recuadro rosa; ahora el logotipo, la fecha y las distancias se apoyan directamente sobre el fondo con una división vertical sutil.
- En móvil, la división se transforma en línea superior y el contenido se compacta para entrar completamente en el flujo visible.
- Alturas finales: 597 px en 375, 620 px en 430, 598 px en 768, 618 px en 1366 y 720 px en 1440/1920.

## 4. Historia y ancho editorial

- El contenedor general pasó del máximo de 1220 px al sistema ancho de máximo 1440 px, manteniendo 24 px mínimos de margen en escritorio y 14 px en móvil.
- La retícula sigue siendo continua y conserva los cuatro textos documentados.
- Los paddings internos se ajustan con `clamp()` para evitar columnas estrechas en anchos intermedios.
- La altura en 1366 px bajó de 832 px a 810 px pese al aumento de ancho útil.

## 5. Branding y sistema visual

- Paleta y tipografía dejaron de competir en dos columnas: ahora son módulos apilados de ancho completo.
- Dentro de cada módulo se mantiene una composición editorial de introducción y laboratorio en escritorio; en tableta/móvil se apila.
- El laboratorio de Key Visual conserva el recurso oficial y su estructura interna.
- Aplicaciones de marca utiliza una introducción horizontal amplia y una banda continua de tres aplicaciones, sin tarjetas aisladas.
- Los módulos reciben la textura oficial a baja opacidad y con mezcla `soft-light`, manteniendo legibilidad.

## 6. Sistema por distancias

- El módulo visual recuperó su proporción oficial 1:1 en todos los breakpoints.
- En escritorio, la retícula usa una relación 2/5: el bloque activo ocupa aproximadamente 28,6 % y la reserva de recorrido real 71,4 %.
- La imagen cuadrada queda arriba; debajo permanecen etiqueta, título, descripción y selector.
- El área derecha conserva `Recorrido real · Contenido pendiente`, sin mapa ni trazado inventado.
- En móvil, imagen, información y reserva se apilan sin desbordamiento.

## 7. Campaña en acción

- La sección adopta el mismo ancho editorial máximo de 1440 px.
- Se conservaron tabs, textos, cuatro paraderos, bolsa del kit, camisetas, dorsales y trofeos.
- Los controles siguen respondiendo con sus estados ARIA y un único panel activo.
- No se añadieron piezas, mockups ni recursos no verificados.

## 8. Créditos

- Los cuatro bloques forman una retícula continua con divisores de 1 px, sin radios ni espacios de tarjeta.
- Se aplicó la textura 2025 sobre las superficies de color.
- Se conservan Pablo Molina, MIRAPALTECHO y el equipo habitual.
- El cuarto bloque adopta el criterio de MM2026 —participación de Sebastian— pero se adapta honestamente a 2025 como `Pendiente de documentar`; no se asignaron funciones no confirmadas.
- La altura permanece en 573 px en 1366 px.

## 9. Footer

- Se reemplazó el footer anterior por un cierre editorial equivalente en lógica al de 2026 y vestido exclusivamente con recursos 2025.
- El cierre usa `fondo-variacion-01.jpg`, la frase “VIVE LA CIUDAD. CORRE MEDELLÍN.” y un enlace para volver al inicio.
- Una banda gráfica breve usa el fondo oficial del Hero como transición hacia los metadatos.
- La franja final ordena © 2026 Sebastian Pallares Ruiz, `PROJECT ATLAS · MIRAPALTECHO` y “Todos los proyectos”.
- En móvil, los metadatos se apilan; no existen superposiciones ni texto fuera del lienzo.

## 10. Validación responsive

| Tamaño | Hero | Barra sin hueco | Año activo visible | Distancia 1:1 | Scroll horizontal | Imágenes rotas |
|---|---:|---:|---:|---:|---:|---:|
| 375 × 812 | 597 px | Sí | Sí | Sí | No | 0 |
| 430 × 900 | 620 px | Sí | Sí | Sí | No | 0 |
| 768 × 1024 | 598 px | Sí | Sí | Sí | No | 0 |
| 1366 × 768 | 618 px | Sí | Sí | Sí | No | 0 |
| 1440 × 900 | 720 px | Sí | Sí | Sí | No | 0 |
| 1920 × 1080 | 720 px | Sí | Sí | Sí | No | 0 |

En los seis casos `scrollWidth` coincidió con el ancho del viewport y el contenido del Hero quedó dentro de su propia caja.

## 11. Validación técnica

- `node --check` aprobado para configuración y controlador 2025.
- `git diff --check` sin errores de espacios o parches.
- Rutas relativas del HTML resuelven a archivos existentes.
- El servidor local no registró respuestas 404.
- Carga visual: 0 imágenes rotas en los seis tamaños.
- Interacciones verificadas: cuatro colores, cuatro distancias, cambio a 10K y activación de Feria Exporunners.
- No aparecieron excepciones JavaScript durante las pruebas funcionales.
- Se conservan foco visible, estados ARIA, navegación por teclado y `prefers-reduced-motion`.
- Se conserva `<meta name="robots" content="noindex, nofollow">`.

## 12. Alcance preservado

- No se modificó la identidad 2025 ni se introdujeron colores, fuentes o recursos de 2026.
- No se modificaron MM2026, 2021–2024, otras carreras, otros proyectos o el Home.
- No se movieron, reemplazaron ni eliminaron originales temporales.
- No se realizó commit, push ni creación de rama.

## 13. Pendientes reales

- Recorridos reales por distancia.
- Valores Pantone oficiales.
- Mockups faltantes.
- Participación específica por pieza.
- Revisión visual final antes de retirar `noindex`.
