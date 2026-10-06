# INFORME — INTEGRACIÓN COMPLETA MARATÓN MEDELLÍN 2025

Fecha: 15 de julio de 2026  
Repositorio: `/Users/MPT5/Desarrollo/sebastian-pallares-portafolio`  
Estado de entrega: implementación y validación local terminadas; publicación retenida mediante `noindex` por pendientes documentales reales.

## 1. Archivos modificados y creados

| Ruta | Estado | Motivo |
|---|---|---|
| `proyectos/maraton-medellin/2025/index.html` | Modificado | Reemplazar la plantilla neutral por el micrositio editorial 2025 |
| `assets/css/mm2025-microsite.css` | Creado | Tema, layout, responsive y estados accesibles exclusivos de 2025 |
| `assets/js/mm2025-microsite-config.js` | Creado | Manifiesto de paleta, distancias y piezas integradas |
| `assets/js/mm2025-microsite.js` | Creado | Controladores de paleta, tipografía, distancias, momentos, piezas y navegación |
| `assets/fonts/mm2025/` | Creado | Cuatro pesos OTF de Gopher para uso web |
| `assets/images/projects/maraton-medellin/2025/brand/` | Creado | Tres versiones oficiales de logotipo |
| `assets/images/projects/maraton-medellin/2025/fondos/` | Creado | Hero, variación, banner y textura optimizada |
| `assets/images/projects/maraton-medellin/2025/sistema/` | Creado | Cuatro módulos de distancia y dos referencias de apoyo |
| `assets/images/projects/maraton-medellin/2025/durante-campana/paraderos/` | Creado | Cuatro diseños planos derivados de PDF |
| `assets/images/projects/maraton-medellin/2025/exporunners/bolsa-kit/` | Creado | Frente y reverso de la bolsa |
| `assets/images/projects/maraton-medellin/2025/dia-carrera/` | Creado | Camisetas, dorsales y trofeos derivados de los PDF oficiales |
| `docs/manifiesto-recursos-mm2025.md` | Creado | Inventario, procedencia, decisiones de copia y pendientes |
| `docs/informe-integracion-completa-mm2025.md` | Creado | Informe maestro de la integración |

No se creó rama, commit ni push. No se eliminaron, movieron o renombraron originales.

## 2. Carpeta temporal auditada

Ruta:

`/Users/MPT5/Downloads/Material grafico temporal portafolio sebastian pallares/Maratón Medellín/2025/`

| Categoría | Resultado |
|---|---|
| Total de archivos útiles inventariados | 70 |
| Formatos | 23 PDF, 15 PNG, 16 OTF y 16 TTF |
| Documentos | guía KV, presentación de campaña, fondos, cinco guías de uso cromático y piezas finales |
| Fuentes | Gopher OTF y Gopher Display TTF, 16 archivos por familia de distribución |
| Logos | principal, secundario y horizontal; además de símbolos y variantes documentados en PDF |
| Fondos | Hero, variación, mini banner, textura y 25 composiciones en PDF |
| Piezas | 12 paraderos, bolsa del kit, dorsales, camisetas y trofeos |
| Mockups | camiseta oficial; otras piezas se recibieron como diseños planos |
| Fotografías | embebidas en paraderos, mini banner y presentación; no se recibieron archivos fotográficos independientes |
| Duplicados exactos | 0 según SHA-256 |
| Recursos no integrados | ocho paraderos, cinco PDF de uso, PDF de fondos, presentación y 28 fuentes; todos permanecen en origen |

La inspección visual cubrió las 12 páginas de Key Visual, 25 fondos, 51 páginas de usos cromáticos, 48 páginas de presentación, los 12 paraderos, 20 páginas del día de carrera y los 15 PNG.

## 3. Recursos consolidados

| Recurso original | Recurso final | Categoría | Momento | Acción |
|---|---|---|---|---|
| `Banner Hero fondo.png` | `fondos/hero-principal.jpg` | fondo | Hero / Sistema visual | redimensionado y convertido a JPG |
| `Fondo - variación 1.png` | `fondos/fondo-variacion-01.jpg` | fondo | Footer | redimensionado y convertido a JPG |
| `Mini banner sección.png` | `fondos/mini-banner.jpg` | banner | Interludio | redimensionado y convertido a JPG |
| `Textura - efecto Luz suave al 50%.png` | `fondos/textura.png` | textura | Hero / superficies moradas | reducida a 1200 px, transparencia conservada |
| `Logo versión principal.png` | `brand/logo-principal.png` | marca | Hero / KV / aplicaciones | copia normalizada |
| `Logo Versión secundaria.png` | `brand/logo-secundario.png` | marca | reserva de sistema | copia normalizada |
| `Logo versión horizontal.png` | `brand/logo-horizontal.png` | marca | aplicaciones | copia normalizada |
| `Módulo distancia 42K.png` | `sistema/distancia-42k.png` | sistema | selector de distancias | copia normalizada |
| `Módulo distancia 21K.png` | `sistema/distancia-21k.png` | sistema | selector de distancias | copia normalizada |
| `Módulo distancia 10K.png` | `sistema/distancia-10k.png` | sistema | selector de distancias | copia normalizada |
| `Módulo distancia 5K.png` | `sistema/distancia-5k.png` | sistema | selector de distancias | copia normalizada |
| `Avatar Redes Sociales.png` | `sistema/avatar-redes.jpg` | apoyo | reserva | copia web; no mostrado |
| `Colores principales.png` | `sistema/paleta-referencia.jpg` | referencia | reserva | copia web; no mostrado |
| `Arte Paraderos 1.pdf` | `durante-campana/paraderos/paradero-01.jpg` | paradero | Durante campaña | derivado web integrado |
| `Arte Paraderos 2.pdf` | `durante-campana/paraderos/paradero-02.jpg` | paradero | Durante campaña | derivado web integrado |
| `Arte Paraderos 3.pdf` | `durante-campana/paraderos/paradero-03.jpg` | paradero | Durante campaña | derivado web integrado |
| `Arte Paraderos 11.pdf` | `durante-campana/paraderos/paradero-11.jpg` | paradero | Durante campaña | derivado web integrado |
| `Bolsa Kit Tiro.png` | `exporunners/bolsa-kit/frente.png` | bolsa | Feria Exporunners | copia normalizada |
| `Bolsa Kit Retiro.png` | `exporunners/bolsa-kit/reverso.png` | bolsa | Feria Exporunners | copia normalizada |
| `Mockup Camiseta Oficial MM2025.pdf` | `dia-carrera/camisetas/camiseta-01.jpg` a `camiseta-07.jpg` | indumentaria | Día de carrera | siete páginas derivadas |
| `Arte Número MM2025.pdf` | `dia-carrera/dorsales/dorsal-42k.jpg`, `21k`, `10k`, `5k` | dorsal | Día de carrera | cuatro páginas representativas derivadas |
| `Trofeos MM2025.pdf` | `dia-carrera/trofeos/trofeo-42k.jpg`, `21k`, `10k`, `5k` | premiación | Día de carrera | cuatro páginas derivadas |
| `Gopher Regular/Medium/Bold/Black.otf` | `assets/fonts/mm2025/gopher-*.otf` | tipografía | Todo el micrositio | cuatro pesos copiados |

Ubicación base final: `assets/images/projects/maraton-medellin/2025/`.

## 4. Duplicados

| Archivos comparados | Recurso canónico | Método | Decisión |
|---|---|---|---|
| 70 archivos temporales | cada original | SHA-256 | no se detectaron duplicados exactos |
| Gopher OTF vs. Gopher Display TTF | Gopher OTF | nombre, familia documentada y necesidad web | copiar cuatro OTF; conservar TTF en origen |
| PDF de piezas vs. JPG derivados | PDF original | procedencia y función | PDF permanece como fuente; JPG funciona como vista web |
| fondos PNG vs. PDF de 25 fondos | PNG preparados para landing | comparación visual y formato | usar PNG/JPG preparados; conservar PDF como biblioteca |

No se borró ningún archivo por similitud visual.

## 5. Documentos oficiales

- `KV_MM_2025.pdf`: identidad principal, combinaciones, paleta, tipografía, área de protección y usos incorrectos.
- `Presentación Campaña 2025 Maratón Medellín -Oct2024 (1).pdf`: contexto 2024, condición de referente, pregunta estratégica, recorridos, referencias cromáticas y aplicaciones.
- `Fondos MM2025.pdf`: 25 composiciones de recorridos y distancias.
- `Recursos Azul/Blanco/Morado/Palo de Rosa/Verde Neón - Usos Permitidos.pdf`: combinaciones válidas de logo, símbolo, distancias y fecha.
- `Arte Paraderos - MM2025 - 1–12 - Ago2025.pdf`: campaña exterior y aplicaciones fotográficas.
- `Arte Número MM2025 - Jul2025.pdf`: dorsales por distancia y corrales.
- `Mockup Camiseta Oficial MM2025 - Jul2025.pdf`: variantes masculina y femenina.
- `Trofeos MM2025 - Ago2025.pdf`: premiación por distancia.

No se usaron fuentes web, referencias de MM2026 ni contenido de otras ediciones.

## 6. Procedencia de textos

| Bloque | Texto final | Procedencia | Fuente |
|---|---|---|---|
| Hero | “Cada recorrido cuenta una forma distinta de vivir la ciudad.” | síntesis editorial del recorrido único y la ciudad | Presentación, págs. 13–20 |
| Hero | “Una identidad construida a partir de las rutas, las montañas y el pulso urbano de Medellín.” | síntesis editorial | Presentación, págs. 10–21 |
| Contexto | la edición ya era referente después de los 30 años | paráfrasis documentada | Presentación, págs. 2–9 |
| Problema | encontrar un elemento con sentido de atletismo y ciudad | paráfrasis de la pregunta estratégica | Presentación, págs. 10–12 |
| Proceso | simplificar 42K, 21K, 10K y 5K como líneas modulares | síntesis visual | Presentación, págs. 13–21; Fondos MM2025 |
| Conclusión | el recorrido se convierte en identidad | síntesis editorial | Presentación, págs. 13, 18 y 22–26 |
| Manifiesto | “Vive la ciudad. Corre Medellín.” | texto oficial | KV, pág. 5; presentación, págs. 24–26 |
| Momentos | descripciones funcionales de paraderos, bolsa, camisetas, dorsales y trofeos | observación directa | piezas oficiales auditadas |

Las síntesis editoriales no se presentan como citas textuales ni como resultados cuantitativos.

## 7. Arquitectura 2025

- **HTML:** `proyectos/maraton-medellin/2025/index.html` contiene narrativa, componentes semánticos y puntos de montaje.
- **CSS:** `assets/css/mm2025-microsite.css` encapsula variables `--mm25-*`, Gopher, layouts, tema y breakpoints.
- **Configuración JS:** `assets/js/mm2025-microsite-config.js` registra paleta, distancias y piezas.
- **Controlador JS:** `assets/js/mm2025-microsite.js` genera controles y galerías, gestiona teclado y actualiza estados ARIA.
- **Aislamiento respecto a 2026:** no se importa CSS, JS, configuración ni recurso de MM2026.
- **Relación con 2021–2024:** las plantillas neutrales continúan usando `mm-edition-base`; 2025 dejó de depender de esa base sin modificarla.

El micrositio 2025 puede evolucionar sin condicionar la dirección artística de otras ediciones.

## 8. Hero

- Fondo: `fondos/hero-principal.jpg`, derivado del PNG oficial.
- Logo: `brand/logo-principal.png` sin deformación.
- Frase: síntesis editorial basada en la documentación de recorridos únicos.
- Fecha y distancias: `7 / SEP / 2025` y `42K · 21K · 10K · 5K`, verificadas en campaña.
- Jerarquía: logo y titular lado a lado en escritorio; flujo vertical compacto en móvil.
- Responsive: encuadre reajustado, contenido completo dentro del primer viewport y ancho sin desbordamiento.
- Legibilidad: bloque morado de alto contraste, etiqueta rosa y texto blanco.

## 9. Historia

- **Contexto:** la campaña sucede después de la celebración de 30 años y parte de una marca que ya es referente.
- **Problema:** encontrar un elemento con sentido simultáneo de atletismo y ciudad.
- **Proceso:** convertir cuatro recorridos en trazados gráficos y relacionarlos con montañas, camisetas y flores.
- **Conclusión:** el recorrido se vuelve el identificador del sistema.
- **Interacción:** cuatro tarjetas accesibles por teclado cambian contraste y elevación en `hover` o foco; no dependen de animación para comunicar el contenido.

## 10. Key Visual

- Concepto: recorridos reales convertidos en rutas modulares.
- Logo: principal, horizontal y aplicaciones de contraste verificadas.
- Aplicaciones: cian/blanco, rosa/morado, morado/cian y verde/morado.
- Paleta: cuatro colores oficiales con lectura interactiva.
- Tipografía: Gopher con muestra editable, pesos Medium, Bold y Black, y control de tamaño.
- Sistema gráfico: selector 42K, 21K, 10K y 5K con módulos oficiales.
- Recursos: Hero, variación, textura, mini banner, logos y módulos; todos provienen de la carpeta 2025.

No se reconstruyeron logos ni rutas de forma aproximada mediante CSS.

## 11. Paleta

| Color | HEX | RGB | CMYK | Pantone | Estado | Función |
|---|---|---|---|---|---|---|
| Cian | `#00B7CE` | 0, 183, 206 | 72, 4, 18, 0 | Pendiente de confirmar | Oficial | fondo principal, rutas y acentos |
| Rosa | `#EFC7BD` | 239, 199, 189 | 4, 24, 20, 0 | Pendiente de confirmar | Oficial | superficies editoriales y contraste |
| Morado | `#391459` | 57, 20, 89 | 87, 100, 30, 30 | Pendiente de confirmar | Oficial | fondo oscuro, texto y navegación |
| Verde neón | `#4CF77C` | 76, 247, 124 | 55, 0, 77, 0 | Pendiente de confirmar | Oficial | acento, señal y contraste |

El sistema no inventa valores Pantone. La interfaz los marca explícitamente como pendientes.

## 12. Tipografías

| Archivo | Familia | Peso | Estilo | Uso | Estado |
|---|---|---:|---|---|---|
| `gopher-regular.otf` | Gopher | 400 | Regular | laboratorio y respaldo de texto | Oficial / cargado |
| `gopher-medium.otf` | Gopher | 500 | Medium | interfaz, párrafos y navegación | Oficial / cargado |
| `gopher-bold.otf` | Gopher | 700 | Bold | controles y énfasis | Oficial / cargado |
| `gopher-black.otf` | Gopher | 900 | Black | titulares | Oficial / cargado |

Las 28 variantes restantes no se copiaron. La fuente se carga localmente mediante `@font-face` y se verificó en navegador.

## 13. Durante la campaña

Piezas integradas:

1. Paradero 01 — “Corre entre montañas”.
2. Paradero 02 — “Yo soy 5K”.
3. Paradero 03 — “Yo soy 10K”.
4. Paradero 11 — aplicación cian/rosa con corredora.

Las cuatro se muestran como diseños planos. La comparación se produce entre mensajes, distancias, fotografías y jerarquías cromáticas; no se declara la existencia de un mockup que no fue recibido.

## 14. Feria Exporunners

Piezas integradas:

- bolsa del kit, frente;
- bolsa del kit, reverso.

La interfaz conserva ambas vistas como una pareja inseparable. No se creó un mockup artificial.

## 15. Día de la carrera

Piezas integradas:

- siete vistas de camiseta: 42K, 21K, 10K y 5K, con variantes masculinas y femeninas disponibles;
- cuatro dorsales representativos: 42K, 21K, 10K y 5K;
- cuatro trofeos: 42K, 21K, 10K y 5K.

Un selector compacto alterna camisetas, números y trofeos sin acumular todas las familias verticalmente.

## 16. Plano y mockup

| Familia | Plano disponible | Mockup disponible | Presentación aplicada |
|---|---|---|---|
| Paraderos | Sí | No como archivo independiente | diseño plano, identificado como tal |
| Bolsa del kit | Sí, frente y reverso | No | dos vistas planas enfrentadas |
| Camisetas | La aplicación está incluida en el documento | Sí, prenda simulada | siete vistas integradas |
| Dorsales | Sí | No | cuatro diseños planos |
| Trofeos | Sí | No | cuatro diseños planos |

No existe una falsa comparación plano/mockup. Cuando falta una contraparte, la interfaz lo expresa en la etiqueta de la pieza.

## 17. Créditos

| Nombre / entidad | Rol mostrado | Fuente | Pendiente |
|---|---|---|---|
| Pablo Molina | Dirección creativa; dirección, acompañamiento, procesos y contribuciones | `AGENTS.md` | desglose por pieza |
| MIRAPALTECHO | Estudio y contexto colaborativo | presentación y `AGENTS.md` | ninguno para la atribución general |
| Jorge Zapata | Equipo habitual | `AGENTS.md` | participación específica 2025 |
| Santiago Ospina | Equipo habitual | `AGENTS.md` | participación específica 2025 |
| Sebastian Pallares | Equipo habitual y edición del caso | `AGENTS.md` | participación específica 2025 |

La página no atribuye autoría exclusiva a Sebastian ni inventa roles individuales.

## 18. Responsive

| Tamaño | Resultado |
|---|---|
| 375 × 812 | Hero completo; navegación compacta; ancho de documento 375 px; sin scroll horizontal |
| 430 × 900 | Hero completo; logo 2025 sin deformación; texto legible; ancho de documento 430 px |
| 768 × 1024 | composición de tableta en una columna; Hero completo; ancho de documento 768 px |
| 1366 × 768 | Hero completo en dos columnas; navegación y CTA visibles; ancho de documento 1366 px |
| 1920 × 1080 | shell centrado; Hero completo; jerarquía estable; ancho de documento 1920 px |

También se inspeccionaron visualmente Sistema visual y Campaña a 1366 px.

## 19. Validación técnica

- **Consola:** 0 errores y 0 advertencias registrados.
- **Rutas:** validadas por script local y por servidor HTTP.
- **404:** no se registraron respuestas 404; los recursos observados devolvieron 200 o 304.
- **Imágenes:** 0 imágenes rotas; proporciones corregidas con `height: auto`, `object-fit` y dimensiones explícitas.
- **Fuentes:** Gopher Regular, Medium, Bold y Black respondieron correctamente; el `font-family` computado fue `Gopher MM25`.
- **Accesibilidad:** enlace de salto, landmarks, títulos, textos alternativos, foco visible, tabs ARIA, controles con `aria-pressed`, navegación por flechas en los momentos y actualizaciones anunciadas.
- **Movimiento reducido:** `prefers-reduced-motion` desactiva transiciones y scroll suave.
- **Scroll horizontal:** inexistente en los cinco tamaños; `scrollWidth` coincidió con el ancho del viewport.
- **Noindex:** se conserva `noindex, nofollow` por créditos específicos, Pantone y mockups faltantes.
- **Sintaxis:** `node --check` correcto en ambos JavaScript; `git diff --check` sin errores.

## 20. MM2026 y otras ediciones

- MM2026 no recibió modificaciones y MM2025 no importa ninguno de sus archivos.
- Las páginas 2021–2024 no recibieron modificaciones durante esta tarea y conservan la arquitectura neutral compartida.
- El Home principal no recibió modificaciones durante esta tarea.
- No se modificó `mm-edition-base.css`, `mm-edition-base.js` ni la configuración neutral de otras ediciones.
- La no regresión se confirmó por aislamiento de rutas y por la lista de archivos intervenidos; no se realizó una nueva auditoría visual completa de MM2026 porque estaba fuera del alcance.

## 21. Pendientes reales

- Confirmar Pantone oficial, si existe.
- Confirmar roles y participación individual por pieza.
- Aportar mockups independientes de paraderos y bolsa del kit si se desea una comparación plano/mockup.
- Decidir si los ocho paraderos auditados pero no integrados deben entrar en una segunda selección.
- Confirmar que el caso está listo para indexación y retirar `noindex` en una fase de publicación.
- Evaluar conversión futura de PNG/JPG a WebP o AVIF mediante una herramienta de producción disponible; el runtime actual no pudo escribir AVIF.

## 22. Próximo paso

Revisión visual de la edición 2025 antes de continuar con las demás ediciones.
