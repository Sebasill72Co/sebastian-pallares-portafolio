# INFORME — AUDITORÍA CORRECTIVA Y CONSOLIDACIÓN MM2024

Fecha: 16 de julio de 2026

Estado: implementación técnica consolidada; revisión visual manual del usuario pendiente.

## 1. Archivos modificados

### Micrositio

- `proyectos/maraton-medellin/2024/index.html`
- `assets/css/mm2024-microsite.css`
- `assets/js/mm2024-microsite-config.js`
- `assets/js/mm2024-microsite.js`

### Documentación

- `docs/manifiesto-recursos-mm2024.md`
- `docs/informe-integracion-completa-mm2024.md`
- `docs/trazabilidad-presentacion-mm2024.md`
- `docs/informe-auditoria-correctiva-mm2024.md`

### Fuentes añadidas

- `assets/fonts/mm2024/gopher-display-regular.ttf`
- `assets/fonts/mm2024/gopher-display-italic.ttf`
- `assets/fonts/mm2024/gopher-display-medium.ttf`
- `assets/fonts/mm2024/gopher-display-medium-italic.ttf`
- `assets/fonts/mm2024/gopher-display-bold.ttf`
- `assets/fonts/mm2024/gopher-display-bold-italic.ttf`
- `assets/fonts/mm2024/gopher-display-black.ttf`
- `assets/fonts/mm2024/gopher-display-black-italic.ttf`

### Recursos activos sin pérdida

- `assets/images/projects/maraton-medellin/2024/dia-carrera/dorsales-png/`
- `assets/images/projects/maraton-medellin/2024/recorridos-png/`
- `assets/images/projects/maraton-medellin/2024/exporunners/bolsa-kit-png/`
- cuatro variantes en `assets/images/projects/maraton-medellin/2024/branding/sistema/`
- cuatro aplicaciones de fecha en `assets/images/projects/maraton-medellin/2024/branding/fecha/`

No se eliminaron los JPEG derivados anteriores. Dejaron de cargarse en el micrositio.

## 2. Presentación inspeccionada

- Documento: `Presentación Campaña 2024 Maratón Medellín, octubre 2023.pdf`.
- Páginas: 42 de 42.
- Método: render local a PNG temporal de 1800 px, siete hojas de contacto e inspección individual de páginas críticas.
- No se usó navegador, internet, MCP ni conectores.
- Los renders permanecieron en `/tmp`; no se copiaron al producto.
- Matriz completa: `docs/trazabilidad-presentacion-mm2024.md`.

La revisión confirmó:

- frase del Hero en la página 2;
- contexto en la página 3;
- problema en las páginas 4–8;
- antecedente de montañas en las páginas 9–11;
- pregunta estratégica y referentes de Medellín en las páginas 12–21;
- paleta en la página 22;
- arte urbano y conclusión en las páginas 23–24;
- visual principal en la página 26;
- aniversario y fecha en la página 27;
- aplicaciones en las páginas 28–41;
- frase de cierre en la página 42.

## 3. Recursos MM2025 dentro de 2024

La carpeta anómala contiene ocho fondos y una textura bajo el nombre heredado `Recursos MM2025`.

| Fondo | Validación | Integración |
|---|---|---|
| Fondo 1 | Duplicado exacto de `Banner Hero fondo.png`; lenguaje MM2024 | Hero |
| Fondo 2 | Paleta, textura, formas y flor compatibles con páginas 22 y 26–41 | Interludio |
| Fondo 3 | Paleta, textura y geometría compatibles con páginas 22 y 26–41 | Visual principal |
| Fondo 4 | Paleta, textura y formas compatibles con páginas 22 y 26–41 | Banner final |
| Fondo 5 | Compatible; no necesario para la narrativa actual | No integrado |
| Fondo 6 | Compatible; contiene aerosol y trama urbana | No integrado |
| Fondo 7 | Compatible; variante verde | No integrado |
| Fondo 8 | Compatible; variante clara | No integrado |

La pertenencia al lenguaje 2024 se confirma por paleta, textura y elementos gráficos. El PDF no muestra estos ocho fondos como composiciones aisladas idénticas. Se mantiene registrada la anomalía nominal.

## 4. Paleta

La página 22 contiene una matriz de ocho columnas por tres filas: 24 posiciones y 23 valores únicos detectados.

La presentación no asigna nombres funcionales. Para el micrositio se definió una jerarquía operativa basada en la frecuencia visual de las páginas 26–41:

- principales: verde noche, amarillo solar, coral y azul urbano;
- apoyo: menta, rosa claro, naranja y azul claro;
- variaciones: quince tonos adicionales.

Cambios:

- se eliminó la presentación plana de 21 módulos equivalentes;
- la vista inicial muestra únicamente los tonos principales;
- se añadieron filtros `Principales`, `Apoyo`, `Variaciones` y `Todos`;
- cada color informa familia, jerarquía, HEX, RGB, CMYK aproximado y Pantone pendiente;
- no se inventaron equivalencias Pantone.

## 5. Formatos de imagen

| Recurso | Formato anterior | Formato final | Motivo | Peso aproximado |
|---|---|---|---|---:|
| Dorsal 42K corral 2 | JPEG 1600 × 1320 | PNG 1600 × 1320 | Texto, número, logos y líneas sin artefactos | 200 KB → 269 KB |
| Familia de ocho dorsales | JPEG | PNG | Documentos gráficos planos; render completo con `contain` | 2.1 MB → 4.7 MB |
| Portada 42K | JPEG 1000 × 1000 | PNG 1000 × 1000 | Color plano y tipografía | 424 KB → 1.5 MB |
| Cuatro portadas | JPEG | PNG | Preservar bordes, texto y proporción; 21K mantiene 3:2 | 1.4 MB → 6.4 MB |
| Bolsa frente | JPEG 1380 × 1800 | PNG 1073 × 1400 | Pieza plana renderizada desde PDF | 869 KB → 2.5 MB |
| Bolsa frente/reverso | JPEG | PNG | Evitar compresión con pérdida | 1.8 MB → 4.9 MB |
| Distancias | PNG original 4208/4209 × 2000 | PNG 2000 × 950 | Cuatro variantes lossless con tamaño web suficiente | 245–502 KB por variante |
| Fondos texturizados | JPEG 2400 × 1256 | JPEG sin cambio | La textura continua admite compresión fotográfica | Sin cambio |
| Logos y aniversario | PNG con alfa | PNG con alfa | Transparencia y bordes | Sin cambio |

El aumento de peso en piezas planas es deliberado y se limita mediante `loading="lazy"`, dimensiones intrínsecas y selectores que cargan por interacción.

## 6. Tipografía

La tabla interna del PDF confirmó:

- `GopherDisplay-Heavy`;
- `GopherDisplay-HeavyItalic`;
- `GopherDisplay-Italic`;
- `GopherDisplay-Black`;
- `DINNextLTPro-Regular`;
- `Fraunces` 700/900;
- `Fixture-ExtraBold`.

Decisiones:

- Gopher estándar permanece como fuente de interfaz.
- Gopher Display se usa en el laboratorio y cierres editoriales.
- Se integraron Regular, Medium, Bold y Black con sus cursivas reales por instrucción directa.
- El control Itálica es independiente del peso.
- No se usa `font-style: italic` sobre un peso sin archivo correspondiente.
- No se cargaron las 32 fuentes disponibles.

## 7. Distancias

Las cuatro variantes fueron inspeccionadas:

- principal color: misma escala para las cuatro distancias;
- principal monocromática: igual jerarquía en blanco/negro;
- versión 2 color: jerarquía descendente 42K, 21K, 10K y 5K;
- versión 2 monocromática: la misma jerarquía en blanco/negro.

La versión 2 aparece aplicada en la composición principal y piezas de las páginas 26, 28–32 y 37–41. La principal funciona como firma de igual protagonismo.

El micrositio incluye un selector compacto. No muestra las cuatro variantes simultáneamente.

## 8. Fondos

Los ocho fondos se inspeccionaron visualmente. Solo 1–4 permanecen integrados porque ya cumplen funciones concretas:

- 1: Hero;
- 2: interludio;
- 3: visual principal;
- 4: banner final.

Los fondos 5–8 no se incorporaron por obligación. Permanecen disponibles para una fase posterior si aparece una necesidad editorial real.

## 9. Fecha y aniversario

- La fecha `1 SEP 2024` está documentada visualmente en las páginas 26–41.
- Se copiaron las cuatro aplicaciones gráficas de fecha a una ruta estable.
- El Hero conserva la fecha como texto real porque mejora accesibilidad, carga y lectura responsive.
- La marca completa de 30 años se mantiene en Hero y visual principal.
- La marca compacta aparece documentada en la página 27, pero no se añadió como una segunda marca redundante.

## 10. Campaña en acción

### Durante campaña

Se retiraron los fondos genéricos que se mostraban como si fueran piezas. Ahora existe una síntesis documental compacta con:

- valla;
- pasacalles;
- paraderos;
- banner web;
- feed de Instagram;
- aviso de revista.

El módulo indica expresamente que los artes independientes están pendientes.

### Feria Exporunners

Se muestran únicamente frente y reverso reales de la bolsa, derivados del PDF disponible.

### Día de carrera

Se muestran únicamente los ocho dorsales reales. Las imágenes utilizan su proporción intrínseca y `object-fit: contain`; cabecera, laterales, numeración, logos y franjas permanecen visibles.

## 11. Infraestructura compartida

MM2025 y MM2026 se tomaron como referencia oficial.

Se igualaron en MM2024:

- header de 72 px en escritorio y 64 px en móvil;
- logo personal 48/42 px;
- flor de 44 px;
- retícula `1fr auto 1fr`;
- padding lateral `clamp(18px, 3vw, 48px)`;
- menú anual de 78 px y 52 px móvil;
- texto descriptivo a la izquierda;
- años de 72 px alineados a la derecha;
- offset de anclas `header + menú + 16px`;
- títulos de sección con columna de numeral de 66 px;
- tarjetas editoriales;
- pestañas de 68 px;
- créditos de cuatro módulos;
- cierre de 58svh;
- banner final `clamp(72px, 9vw, 132px)`;
- metafooter de 92 px;
- responsive equivalente a 800 y 560 px.

No se extrajo un nuevo archivo compartido porque MM2025 y MM2026 todavía usan nombres, estructuras y capas CSS distintas. Modificarlos habría introducido riesgo sobre identidades aprobadas. La geometría fue replicada en MM2024 sin alterar esas ediciones.

## 12. Protección editorial

- `noindex, nofollow` permanece activo.
- Se añadió el comentario interno `Estado editorial: revisión pendiente`.
- El Home no contiene una publicación nueva de MM2024.
- No se marca el proyecto como final.

## 13. Validación técnica

- Sintaxis aprobada con `node --check` en configuración y controlador.
- 27 referencias locales HTML verificadas.
- 18 referencias dinámicas verificadas.
- 17 rutas CSS verificadas.
- 25 IDs únicos.
- 23 relaciones internas y ARIA resueltas.
- Llaves CSS balanceadas.
- Dorsales verificados como PNG de 1000/1600 px.
- Portadas verificadas como PNG con proporciones 1:1 y 3:2.
- Cuatro variantes de distancias verificadas como PNG 2000 × 950.
- Ocho fuentes Gopher Display verificadas como TrueType.
- Contrastes principales: verde noche/blanco 9.42:1; verde noche/amarillo 5.28:1; amarillo/verde noche 5.28:1.
- No hay rutas absolutas ni referencias a la carpeta temporal dentro del producto.
- No se hizo commit, push ni rama.

No se declara validación responsive visual en navegador porque la política activa prohíbe usarlo. La revisión responsive realizada es estática.

## 14. Pendientes para revisión del usuario

1. Confirmar visualmente el encuadre de los fondos 1–4.
2. Confirmar la altura percibida del cierre y banner final.
3. Confirmar si el laboratorio debe llamar a la familia `Gopher Display` o presentar el nombre simplificado `Gopher`.
4. Incorporar artes independientes de campaña cuando estén disponibles.
5. Confirmar mapas completos de recorridos.
6. Confirmar Pantone y créditos individuales.

## 15. Próximo paso

Esperar las observaciones visuales del usuario sobre MM2024.
