# INFORME — INTEGRACIÓN DE RECURSOS TEMPORALES MM2026

Fecha: 12 de julio de 2026  
Alcance: landing Maratón Medellín 2026  
Estado: inventario, organización, integración y validación terminados  

## 1. Resultado

Se revisaron visualmente y se integraron 15 recursos gráficos encontrados en la carpeta temporal de MM2026. Los archivos fueron copiados a una estructura estable por momento y tipo de aplicación, con nombres web seguros y sin alterar ni eliminar los originales.

La sección “Sistema visual” quedó completamente libre de imágenes y recursos gráficos externos. Su presentación ahora utiliza únicamente HTML, CSS, texto real, variables, color, gradientes y retículas generadas con código.

No se implementó todavía la arquitectura narrativa definitiva en tres momentos; las carpetas creadas preparan esa fase sin modificar la estructura editorial actual.

## 2. Carpeta temporal revisada

Raíz inspeccionada:

`/Users/MPT5/Downloads/Material grafico temporal portafolio sebastian pallares/Maratón Medellín/2026/`

Se revisaron recursivamente:

- `Piezas gráficas/1 Durante campaña/valla/`
- `Piezas gráficas/2 Piezas Feria/escarapela/`
- `Piezas gráficas/2 Piezas Feria/Bolsa kit/`
- `Piezas gráficas/2 Piezas Feria/número/`

También se comprobó la existencia de los banners y SVG de referencia previamente organizados. No se duplicaron nuevamente porque ya tienen una ubicación estable o pertenecen al laboratorio aislado.

## 3. Inventario visual y destino

Todos los recursos inventariados son PNG.

| Nombre original | Dimensiones | Orientación | Tipo / pieza | Momento | Ruta final | Uso en landing |
|---|---:|---|---|---|---|---|
| `Valla MM2026.png` | 3000 × 1165 | Horizontal | Diseño plano de valla | Durante campaña | `durante-campana/vallas/planos/valla-mm2026-plano.png` | Campaña |
| `ChatGPT Image 12 jul 2026, 10_51_55 p.m..png` | 1672 × 941 | Horizontal | Mockup urbano de valla | Durante campaña | `durante-campana/vallas/mockups/valla-mm2026-mockup.png` | Campaña |
| `ChatGPT Image 12 jul 2026, 11_21_56 p.m..png` | 1672 × 941 | Horizontal | Escarapela de staff en contexto | Exporunners | `exporunners/escarapelas/escarapela-staff-mockup.png` | Mockups |
| `Bolsa Kit Retiro.png` | 2000 × 2609 | Vertical | Diseño plano, reverso de bolsa | Día de carrera | `dia-carrera/bolsa-kit/planos/bolsa-kit-retiro.png` | Merchandising |
| `Bolsa Kit Tiro.png` | 2000 × 2609 | Vertical | Diseño plano, frente de bolsa | Día de carrera | `dia-carrera/bolsa-kit/planos/bolsa-kit-tiro.png` | Merchandising |
| `ChatGPT Image 12 jul 2026, 10_37_47 p.m..png` | 1672 × 941 | Horizontal | Mockup de bolsa, frente | Día de carrera | `dia-carrera/bolsa-kit/mockups/bolsa-kit-retiro-mockup.png` | Merchandising |
| `ChatGPT Image 12 jul 2026, 10_40_37 p.m..png` | 1672 × 941 | Horizontal | Mockup de bolsa, reverso | Día de carrera | `dia-carrera/bolsa-kit/mockups/bolsa-kit-tiro-mockup.png` | Merchandising |
| `42K.png` | 2434 × 2008 | Horizontal | Diseño plano de dorsal 42K | Día de carrera | `dia-carrera/numero-dorsal/planos/numero-42k.png` | Impresos |
| `21k.png` | 2434 × 2009 | Horizontal | Diseño plano de dorsal 21K | Día de carrera | `dia-carrera/numero-dorsal/planos/numero-21k.png` | Impresos |
| `10K.png` | 2434 × 2009 | Horizontal | Diseño plano de dorsal 10K | Día de carrera | `dia-carrera/numero-dorsal/planos/numero-10k.png` | Impresos |
| `5K.png` | 2434 × 2008 | Horizontal | Diseño plano de dorsal 5K | Día de carrera | `dia-carrera/numero-dorsal/planos/numero-5k.png` | Impresos |
| `ChatGPT Image 12 jul 2026, 11_06_02 p.m..png` | 1672 × 941 | Horizontal | Mockup en carrera, dorsal 42K | Día de carrera | `dia-carrera/numero-dorsal/mockups/numero-42k-mockup.png` | Mockups |
| `ChatGPT Image 12 jul 2026, 11_06_30 p.m..png` | 1672 × 941 | Horizontal | Mockup en carrera, dorsal 21K | Día de carrera | `dia-carrera/numero-dorsal/mockups/numero-21k-mockup.png` | Mockups |
| `ChatGPT Image 12 jul 2026, 11_06_20 p.m..png` | 1672 × 941 | Horizontal | Mockup en carrera, dorsal 10K | Día de carrera | `dia-carrera/numero-dorsal/mockups/numero-10k-mockup.png` | Mockups |
| `ChatGPT Image 12 jul 2026, 11_08_49 p.m..png` | 1672 × 941 | Horizontal | Mockup en carrera, dorsal 5K | Día de carrera | `dia-carrera/numero-dorsal/mockups/numero-5k-mockup.png` | Mockups |

Las rutas finales de la tabla son relativas a:

`assets/images/projects/maraton-medellin/2026/`

## 4. Estructura creada

```text
assets/images/projects/maraton-medellin/2026/
├── durante-campana/
│   └── vallas/
│       ├── planos/
│       └── mockups/
├── exporunners/
│   └── escarapelas/
└── dia-carrera/
    ├── bolsa-kit/
    │   ├── planos/
    │   └── mockups/
    └── numero-dorsal/
        ├── planos/
        └── mockups/
```

No se crearon carpetas vacías para aplicaciones que aún no tienen material real.

## 5. Integración editorial

### Campaña

- Diseño plano de la valla como pieza horizontal protagonista.
- Mockup urbano de la valla en una tarjeta editorial 4:3.

### Impresos

- Cuatro dorsales planos: 42K, 21K, 10K y 5K.
- Se conservan los PDF existentes como documentos funcionales.

### Merchandising

- Frente y reverso planos de la bolsa del kit.
- Dos mockups de la bolsa en contexto.
- Se conservan los PDF existentes de medallas y colección.

### Mockups

- Escarapela de staff en contexto Exporunners.
- Cuatro aplicaciones de dorsales en carrera.
- Se conserva el PDF existente de camiseta.

## 6. Sistema visual sin imágenes

Se eliminó de la sección `#sistema` el consumidor de galería `data-gallery="branding"`.

La sección contiene ahora:

- fundamentos editoriales en HTML;
- escala tipográfica real;
- paleta construida con variables CSS;
- retícula modular creada con gradientes CSS;
- formas y módulos generados mediante código.

Resultado verificado:

- imágenes dentro de `#sistema`: 0;
- SVG de campaña dentro de `#sistema`: 0;
- galerías dinámicas dentro de `#sistema`: 0;
- demostraciones HTML/CSS: 1 sistema completo.

## 7. Tratamiento de imagen

Los mockups editoriales utilizan:

```css
aspect-ratio: 4 / 3;
object-fit: cover;
```

Los diseños planos también viven en un lienzo 4:3, pero emplean `object-fit: contain` para no cortar información, logos, dorsales o marcas de producción. Esta es una excepción funcional deliberada.

## 8. Archivos de código modificados

### `proyectos/maraton-medellin/2026/index.html`

- Se retiró la galería de imágenes de Sistema visual.
- Se añadió la demostración semántica HTML/CSS.
- Se actualizaron identificadores de caché.

### `assets/js/maraton-2026-data.js`

- Se retiró la configuración visual de Branding que ya no tiene consumidor.
- Se registraron las 15 nuevas aplicaciones en Campaña, Impresos, Merchandising y Mockups.

### `assets/css/project.css`

- Se añadieron formatos `editorial` y `plano`.
- Se aplicó la relación 4:3 responsive.
- Se construyó el laboratorio visual de código para Sistema visual.

## 9. Validaciones

| Viewport | Scroll horizontal | Imágenes rotas | Sistema visual con imágenes | Mockups 4:3 `cover` |
|---|---:|---:|---:|---:|
| 375 × 812 | No | 0 | 0 | Correcto |
| 430 × 900 | No | 0 | 0 | Correcto |
| 768 × 900 | No | 0 | 0 | Correcto |
| 1366 × 768 | No | 0 | 0 | Correcto |
| 1920 × 1080 | No | 0 | 0 | Correcto |

Validaciones adicionales:

- Consola del navegador: 0 errores y 0 advertencias.
- `node --check assets/js/maraton-2026-data.js`: correcto.
- `node --check assets/js/project.js`: correcto.
- `git diff --check`: correcto.
- Llaves CSS balanceadas.
- Copias comparadas con sus originales sin diferencias.
- Los originales temporales permanecen en su ubicación.

## 10. Límites de esta fase

- Los mockups contextuales identificados por su nombre como imágenes generadas se presentan como visualizaciones, no como registro fotográfico documental.
- No se crearon ni integraron todavía paraderos, redes sociales nuevas, backing, tótems, panelería, stands, punto de información, cinta de meta, kilometraje o podio porque no existen recursos temporales disponibles para esas categorías.
- No se implementó la navegación definitiva por momentos de campaña.

## 11. Próximo paso recomendado

Revisar visualmente la curaduría y el orden de las nuevas piezas dentro de Campaña, Impresos, Merchandising y Mockups. La siguiente fase podrá definir la arquitectura narrativa por momentos usando esta estructura estable, sin volver a organizar los archivos.
