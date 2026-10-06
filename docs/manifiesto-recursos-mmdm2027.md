# Manifiesto de recursos — Media Maratón del Mar 2027

**Fecha:** 5 de octubre de 2026
**Página:** `proyectos/media-maraton-del-mar/2027/index.html` (`/proyectos/media-maraton-del-mar/` redirige aquí)
**Estado:** público (confirmado por Sebastian, 5 oct 2026). El manual completo se consulta con un botón (“Ver Key Visual”) que abre un visor, en lugar de mostrarse lámina por lámina en la página.

## Fuente
Única fuente: el artifact **“Media Maratón del Mar · Manual de Key Visual 2027”** (Claude, 16 sep 2026), que contiene 20 láminas renderizadas a 4055 × 2321 px del manual de Key Visual 2027.
El PDF original (`KV Media Maratón del Mar 2027 - Mar2026 - Baja.pdf`) no está en el repositorio ni en la carpeta temporal.

Ninguna otra fuente fue encontrada: no hay archivos de MMDM en la carpeta temporal autorizada, y la propuesta de vinculación de patrocinadores no está entre los artifacts guardados.

## Recursos y trazabilidad
| Recurso | Origen | Tratamiento |
|---|---|---|
| `manual/01…20-*.webp` | Láminas 1–20 del manual | Reducidas a 2400 px; WebP q84; completas, sin recorte |
| `marca/logotipo-arco-diez-anos.webp` | Lámina 1 (portada) | Fondo eliminado por diferencia exacta con la lámina 16 (misma textura). **Derivado**, no original vectorial |
| `marca/sello-diez-anos.webp` | Lámina 12 | Recorte; blanco convertido en transparencia |
| `marca/estrella.webp` | Lámina 13 | Recorte; blanco convertido en transparencia |
| `marca/frases-graficas.webp` | Lámina 15 | Recorte; blanco convertido en transparencia |
| `fondos/textura-crema.webp` | Láminas 1 + 16 | Textura reconstruida combinando las dos láminas (comparten la textura) y rellenando la zona central. **Reconstruida** |

## Datos documentados (confirmados en el manual)
- Fecha y sede: 21 FEB · Cartagena 27. Celebración de los diez años (“Diez años · Ten years · ¡Y ajá!”).
- Paleta (lámina 03): F5E9D8 (7506C), DAC48A (7402C), C9961C (7550C), E84E2C (1655C), D4216A (214C), 7D2100 (174C), 2EBFAB (2239C), 3D5A6B (2215C), 001A4A (2768C).
  - **Inconsistencia del manual:** para #C9961C, el RGB (255/47/46) y el CMYK (0/93/86/0) no corresponden al HEX. Se publica tal cual y con una nota en la página.
- Tipografía: Deertai Brush (logotipo), Summer Surfing Serif (textos gráficos), Summer Surfing Sans (complemento), Golos Text (textos corporativos y párrafos largos).
- Reglas: textura obligatoria (25 % sobre fondos claros; 80 % en modo multiplicar sobre fondos intensos), área de protección 1X, usos incorrectos, posición del logotipo.
- Frases gráficas: “Pa’ lante es pa’ llá”, “¡Ajá! ¿Tú qué esperas para correr?”, “¡El que afloja, pierde!”, “Corriendo sabroso, pero sin relajo”, “Corre Cartagena”, “Corriendo juntos”.

## Interpretado
- Los textos editoriales del caso (Historia y titulares de sección) se redactaron a partir de los textos del manual, sin agregar datos nuevos.
- La tipografía web de la interfaz es Golos Text, la familia oficial para textos largos. Summer Surfing y Deertai Brush aparecen solo en las láminas, porque los archivos de fuente no están disponibles.

## Pendiente
- Originales en alta: logotipo vectorial y fuentes (Summer Surfing, Deertai Brush). Están en la conversación de la propuesta de vinculación; hay que copiarlos a la carpeta temporal autorizada.
- Propuesta de vinculación de patrocinadores: fuera de alcance por ahora (decisión de Sebastian).
- Otras ediciones de la Media Maratón del Mar: sin material.

## Cambios del 5 oct 2026
- Créditos estándar: Pablo Molina en dirección creativa; Jorge Zapata, Santiago Ospina y Sebastian Pallares como equipo de ejecución en partes iguales; MIRAPALTECHO como estudio. Aplicado también en Maratón Medellín 2021–2026 y en el Home.
- Se retiró `noindex`.
- Las láminas del manual (logotipo, tipografía y reglas) salieron de la página y se consultan en el visor “Ver Key Visual”. La galería de campaña muestra solo las cuatro aplicaciones.
- `marca/ilustraciones-culturales.webp`: lámina 11 sin el título ni el pie del manual (zona reemplazada con la textura original; borde inferior recortado). **Derivado.**

## Recursos oficiales recibidos (5 oct 2026, segunda entrega)
| Archivo recibido | Destino | Tratamiento |
|---|---|---|
| Estrella Editable.pdf | `marca/estrella-{turquesa,magenta,naranja}.svg` | Vector; se recortó al motivo sin la nota “Editable”; se recoloreó con la paleta oficial |
| Sello 10 años - Negro - Editable.pdf | `marca/sello-diez-anos-{turquesa,navy}.svg` | Vector; recoloreado |
| Distancias Editables.pdf (21K) | `marca/distancia-21k-{naranja,turquesa}.svg` | Vector; recoloreado |
| Fecha Carrera Horizontal - Editable.pdf | `marca/fecha-horizontal.webp` | Contiene texturas incrustadas, así que se rasterizó a 300 ppp. Usado en el hero |
| Fecha Carrera Bloque - Editable.pdf | `marca/fecha-bloque.webp` | **No se usa.** Sebastian confirmó que la fecha correcta es **21 FEB**; este archivo dice “20 FEB” y debe corregirse en el original |
| 6 texturas de color (rosa, rosa claro, azul claro, coral, durazno, turquesa) | `fondos/textura-*.webp` | Reducidas a 2000 px |

No llegaron: Logo Media Maratón del Mar.pdf, Logo Media Maratón del Mar 2027 Diez Años.pdf, Ilustraciones Editables.pdf. Las piezas `marca/sello-diez-anos.webp` y `marca/estrella.webp`, derivadas de las láminas, quedan reemplazadas por los vectores.

## Tipografía oficial recibida (5 oct 2026)
Summer Surfing Serif y Sans, cada una en Regular, Rough y Texture (6 archivos .otf), convertidas a WOFF2 en `assets/fonts/mmdm2027/`.
- **Serif Rough:** titulares, cifras y numerales de sección.
- **Sans Regular:** etiquetas, botones, chips, menú y datos de la paleta.
- **Golos Text:** textos largos (sin cambios).
- Los seis cortes se pueden probar en la muestra interactiva de la sección Tipografía. Los cortes Texture (unos 840 KB) solo se descargan si el visitante los selecciona.
- Todos los cortes tienen los acentos y caracteres del español. La familia es solo de mayúsculas.

## Logotipos oficiales recibidos (5 oct 2026)
| Archivo | Destino | Uso |
|---|---|---|
| Logo Media Maratón del Mar.pdf (2 páginas) | `marca/logotipo-principal.svg` (pág. 1, naranja/turquesa), `marca/logotipo-principal-magenta.svg` (pág. 2), `marca/logotipo-principal-claro.svg` (pág. 1 con el azul mar cambiado a crema, para fondos oscuros) | Bloque Logotipo y footer |
| Logo Media Maratón del Mar 2027 Diez Años.pdf (2 páginas) | `marca/logotipo-arco-diez-anos.svg`, `-magenta.svg`, `-claro.svg` | Hero y bloque Logotipo |

Vectores originales, recortados al logotipo sin la nota “Editable”. El derivado anterior `marca/logotipo-arco-diez-anos.webp` ya no se usa en la página.
Pendiente: Ilustraciones Editables.pdf (no llegó).

## Paquete oficial “MMM2027 Recursos.zip” (5 oct 2026, 160 MB)
Recibido como adjunto en la conversación; **no se copió completo al repositorio**. Se recomienda guardarlo en Drive como fuente maestra.

Integrado en la web:
| Carpeta del paquete | Destino | Uso |
|---|---|---|
| 07_Ilustraciones/01_Individuales_PNG (12) | `ilustraciones/01…12-*.webp` (recortadas, 900 px) | Nuevo bloque “Doce personajes de la ciudad” |
| 07_Ilustraciones/03_Composicion_KV | `ilustraciones/composicion-kv.webp` (2400 px, con transparencia) | Interludio. **Reemplaza** el derivado `marca/ilustraciones-culturales.webp` |
| 02_Logotipo/04 y 05 · Con_fondo (16 SVG) | `logo-aplicaciones/{principal,aniversario}-0N-fondo-*.svg` (sin metadatos C2PA) | Bloque Logotipo: 8 combinaciones con selector Principal / Aniversario |
| 09_Frases_graficas (3 SVG) | `frases/frase-0N-*.svg` | Elementos de apoyo. **Reemplaza** el recorte `marca/frases-graficas.webp` |
| 10_Aplicaciones_referencia (4) | `aplicaciones/0N-*.webp` | Galería de Campaña (mejor resolución que las láminas del manual) |

Disponibles en el paquete y no usados todavía: logo con fecha, recuadros de textura, 10 fondos de color en PNG (equivalentes a las texturas ya integradas), especímenes tipográficos, páginas del KV en JPG, PDF editable de las ilustraciones y fecha en bloque (dice 20 FEB, incorrecta).
