# Informe de integración completa — Maratón Medellín 2024

Fecha: 15 de julio de 2026

Alcance: micrositio aislado de la edición 2024

Estado: consolidación preventiva terminada; revisión visual manual del usuario pendiente

> Actualización del 16 de julio de 2026: la integración inicial fue corregida mediante auditoría visual completa y consolidación contra los componentes aprobados de MM2025/MM2026. Consultar `docs/informe-auditoria-correctiva-mm2024.md` y `docs/trazabilidad-presentacion-mm2024.md`.

## 1. Resultado

La página provisional de 2024 fue reemplazada por un micrositio editorial propio, construido con los recursos oficiales disponibles. La edición cuenta ahora una historia completa: introducción, contexto, problema, proceso, conclusión, sistema visual, campaña por momentos, créditos y cierre.

La solución no modifica el Home, las ediciones 2021–2023 o 2025–2026, ni los componentes compartidos. No se hicieron commits, push, ramas, borrados ni cambios en los archivos originales.

## 2. Archivos creados o modificados

### Código

- `proyectos/maraton-medellin/2024/index.html`: reconstrucción semántica del caso de estudio.
- `assets/css/mm2024-microsite.css`: tema, composición, responsive, estados de foco y movimiento reducido exclusivos de 2024.
- `assets/js/mm2024-microsite-config.js`: datos de paleta, distancias y piezas disponibles.
- `assets/js/mm2024-microsite.js`: laboratorios interactivos, pestañas, filtros y estado de navegación.

### Documentación

- `docs/manifiesto-recursos-mm2024.md`: inventario, clasificación, duplicados, transformaciones y pendientes.
- `docs/informe-integracion-completa-mm2024.md`: este informe.

### Recursos estables

- `assets/fonts/mm2024/`: Gopher para interfaz y ocho cortes reales de Gopher Display para el laboratorio.
- `assets/images/projects/maraton-medellin/2024/branding/logos/`: cuatro versiones del logotipo.
- `assets/images/projects/maraton-medellin/2024/branding/aniversario/`: cuatro versiones de la marca 30 años.
- `assets/images/projects/maraton-medellin/2024/branding/sistema/`: cuatro variantes del sistema de distancias.
- `assets/images/projects/maraton-medellin/2024/fondos/`: hero, interludio, Key Visual y cierre.
- `assets/images/projects/maraton-medellin/2024/texturas/`: textura oficial optimizada.
- `assets/images/projects/maraton-medellin/2024/recorridos-png/`: cuatro portadas de distancia sin pérdida.
- `assets/images/projects/maraton-medellin/2024/exporunners/bolsa-kit-png/`: frente y reverso de la bolsa sin pérdida.
- `assets/images/projects/maraton-medellin/2024/dia-carrera/dorsales-png/`: ocho dorsales sin pérdida.

## 3. Arquitectura implementada

### Flujo editorial

1. Encabezado persistente con marca personal, símbolo MM, navegación interna y regreso a proyectos.
2. Navegación persistente de ediciones, con 2024 activo.
3. Hero con fondo oficial, logotipo, aniversario, fecha, distancias y mensaje documentado.
4. Historia en cuatro etapas: Contexto, Problema, Proceso y Conclusión.
5. Interludio visual a ancho completo.
6. Sistema visual con Key Visual, paleta interactiva, laboratorio tipográfico, aplicaciones de marca y selector de distancias.
7. Campaña compacta en tres pestañas: Durante campaña, Feria Exporunners y Día de carrera.
8. Créditos colaborativos de MIRAPALTECHO.
9. Cierre narrativo, banner final y footer.

### Separación de responsabilidades

- El HTML conserva la semántica, el contenido de lectura y los estados iniciales.
- El CSS contiene exclusivamente la dirección visual de MM2024 y no depende de hojas de otras ediciones.
- El archivo de configuración concentra paleta y piezas, por lo que se pueden sumar nuevos recursos sin reescribir el controlador.
- El controlador JavaScript construye componentes progresivos. El contenido principal permanece legible si JavaScript no carga.

## 4. Dirección visual

La identidad utiliza `#1C4D51` como base profunda y organiza la matriz cromática de la página 22 en principales, apoyos y variaciones. Los fondos oficiales son protagonistas y se evita convertir el lenguaje 2024 en una colección de rectángulos genéricos.

Gopher se conserva para interfaz. El laboratorio utiliza Gopher Display en Regular, Medium, Bold y Black, con una cursiva independiente que activa los cuatro archivos itálicos reales.

## 5. Contenido y atribución

El relato se parafraseó a partir de la presentación oficial de octubre de 2023. No se añadieron datos de participación que no estén documentados.

Los créditos preservan:

- Pablo Molina — Dirección creativa, acompañamiento, procesos y contribuciones.
- MIRAPALTECHO — estudio responsable del proyecto.
- Jorge Zapata, Santiago Ospina y Sebastian Pallares — equipo habitual, con participación específica pendiente de confirmar.

## 6. Accesibilidad

- Documento en español y HTML semántico.
- Enlace para saltar al contenido.
- Navegaciones con etiquetas accesibles.
- Pestañas con `role="tablist"`, `role="tab"`, `role="tabpanel"`, control de `tabindex` y flechas izquierda/derecha.
- Botones con `aria-pressed` en paleta, tipografía, distancias y dorsales.
- Textos alternativos específicos.
- Indicadores visibles de `:focus-visible`.
- Respeto por `prefers-reduced-motion`.
- Mensajes de contenido pendiente explícitos en vez de controles vacíos.

## 7. Responsive

Se implementaron reglas para los cinco anchos exigidos:

- 1920 y 1366 px: retícula editorial amplia; historia en cuatro columnas; laboratorios y campañas en composiciones dobles.
- 768 px: encabezado compacto, archivo de ediciones desplazable, historia en dos columnas y módulos reorganizados.
- 430 y 375 px: hero apilado, historia de una columna, paleta de tres columnas, pestañas verticales y galerías de una columna.

No se genera scroll horizontal intencional. Las imágenes incluyen dimensiones intrínsecas, relaciones de aspecto y carga diferida salvo el recurso principal del Hero.

## 8. Rendimiento

- Los fondos grandes se redujeron de 3821 px a 2400 px y se convirtieron a JPEG.
- Las portadas conservan PNG y su proporción original.
- Los dorsales se sirven en PNG, con máximo de 1600 px y sin recorte.
- Las cuatro variantes de distancias se sirven en PNG de 2000 × 950.
- Gopher Display carga los ocho archivos solicitados porque cada combinación es seleccionable.
- Se usa `loading="lazy"` y `decoding="async"` en contenido no crítico.
- Hero y fuente Medium se precargan.
- El JavaScript no usa dependencias externas, observadores múltiples, animaciones continuas ni bibliotecas.

## 9. Validaciones realizadas

- Revisión de estructura real y estado de Git antes de editar.
- Inventario recursivo de los recursos 2024.
- Comparación por hash para detectar duplicados exactos.
- Inspección de dimensiones y formatos.
- Renderizado e inspección visual de las 42 páginas, además de extracción de texto.
- Renderizado local e inspección de las dos páginas de la bolsa.
- Comprobación estática de rutas locales del HTML, CSS, JS y configuración.
- Comprobación de sintaxis de ambos archivos JavaScript.
- Revisión de IDs, enlaces internos, relaciones ARIA y recursos con dimensiones.

La política de PROJECT ATLAS prohíbe navegador e internet. Por tanto, no se afirma una validación visual real en 375, 430, 768, 1366 y 1920 px; esa comprobación queda pendiente para revisión manual local.

## 10. Limitaciones y pendientes

1. No se encontraron mapas completos de 42K, 21K, 10K y 5K; solo sus portadas.
2. La presentación muestra aplicaciones de campaña, pero no se entregaron como archivos independientes. El micrositio utiliza fondos oficiales para explicar el lenguaje sin inventar mockups.
3. No hay fotografías de campaña, Exporunners o día de carrera.
4. No se documentó la participación individual exacta de Jorge Zapata, Santiago Ospina y Sebastian Pallares.
5. Las equivalencias Pantone no están confirmadas; el laboratorio lo indica. Los CMYK son aproximaciones para consulta en pantalla.
6. La carga visual debe revisarse en los cinco tamaños después de abrir el archivo localmente.
7. Conviene convertir en una fase posterior los JPEG a WEBP/AVIF tras aprobar encuadres y niveles de compresión.

## 11. Riesgos controlados

- El repositorio ya contenía numerosos cambios ajenos a esta tarea. No se restauró ni sobrescribió trabajo fuera del alcance 2024.
- El HTML 2024 ya figuraba modificado antes de esta integración; se sustituyó únicamente porque la orden solicitaba reemplazar el borrador completo.
- Los nombres heredados `Recursos MM2025` dentro de la carpeta 2024 se conservaron solo en la fuente temporal. El manifiesto registra esta anomalía; las copias estables usan nomenclatura 2024.
- Los originales y PDF permanecen intactos.

## 12. Próximo paso

Revisión visual de MM2024 y carga posterior de piezas adicionales.
