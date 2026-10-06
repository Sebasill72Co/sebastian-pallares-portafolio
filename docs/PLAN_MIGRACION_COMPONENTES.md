# PROJECT ATLAS — Plan de migración incremental a componentes

## Propósito

Crear una arquitectura reutilizable para el portafolio de Sebastián Pallares Ruiz sin rediseñar la interfaz aprobada ni poner en riesgo los recursos existentes. La migración se realizará por capas, empezando por el Home y Maratón Medellín 2026.

## Principios

- Migración incremental, reversible y documentada.
- Preservación visual antes que abstracción prematura.
- HTML semántico, CSS compartido pequeño y JavaScript con mejora progresiva.
- Contenido público exclusivamente en español.
- Ninguna eliminación o limpieza hasta recibir aprobación.
- PDFs originales y nombres actuales de carpetas permanecen intactos.
- Créditos precisos, especialmente en proyectos de MIRAPALTECHO.

## Arquitectura propuesta

La ubicación final se decidirá después de inspeccionar el repositorio. La organización conceptual recomendada es:

```text
assets/
├── css/
│   ├── base o tokens compartidos
│   ├── componentes compartidos
│   └── estilos específicos por página o proyecto
├── js/
│   ├── utilidades compartidas
│   ├── componentes interactivos
│   └── datos y lógica específica por proyecto
└── images/
    └── estructura actual preservada

proyectos/
└── páginas de casos de estudio que adoptan componentes gradualmente

docs/
├── MAPA_MIGRACION_COMPONENTES.md
└── MIGRACION_COMPONENTES_RESULTADO.md
```

No se exige que estos nombres se creen literalmente si chocan con la arquitectura real. La implementación debe adaptarse al repositorio y conservar el orden de carga y las rutas actuales.

## Catálogo inicial de componentes

### Hero

Patrón semántico para portada del Home y de casos de estudio, con variantes de fondo, metadatos, acciones y tratamiento móvil. No debe uniformar identidades visuales propias.

### Navegación

Base compartida para navegación principal, enlaces de salto y navegación interna de proyectos. Debe admitir teclado, foco visible y estado actual.

### Créditos

Bloque estructurado para dirección creativa, rol, equipo y contribuciones. En MIRAPALTECHO debe conservar a Pablo Molina como director creativo y a Jorge Zapata y Santiago Ospina como equipo habitual, con excepciones documentadas por caso.

### Galería

Componente para imágenes y recursos visuales con proporciones variables, lazy loading cuando sea apropiado y estados de carga, vacío y error. Los datos específicos permanecen separados de la lógica compartida.

### Documentos

Tarjeta o enlace accesible para abrir documentos. Los PDFs originales no se transforman ni modifican durante esta fase.

### Callout

Nota editorial reutilizable con variantes discretas. Puede alojar créditos destacados, contexto, resultados o advertencias sin convertirse en un bloque decorativo genérico.

### Footer

Pie compartido con identidad, contacto, navegación secundaria y enlaces externos. Debe mantener el acceso directo a WhatsApp.

## Alcance de la primera intervención

Incluye:

- inspección completa de las instrucciones y auditoría existente;
- mapa de HTML, CSS y JS usados por el Home y Maratón Medellín 2026;
- definición e implementación de la base para los siete componentes;
- adopción controlada en secciones de bajo riesgo;
- consolidación de tokens y reglas inequívocamente compartidas;
- extracción de utilidades JavaScript realmente compartidas;
- verificación de rutas, responsive, accesibilidad básica y errores de consola;
- documentación del resultado y de la deuda conservada.

No incluye:

- rediseño del Home o los casos de estudio;
- migración completa de todos los proyectos;
- eliminación de CSS, JS, HTML, imágenes o documentos duplicados;
- renombrado de carpetas o archivos con tildes;
- optimización o modificación de PDFs originales;
- introducción de framework, CMS, SPA o proceso de compilación;
- publicación, despliegue o push.

## Estrategia incremental

1. Confirmar repositorio y estado Git.
2. Crear respaldo local verificable.
3. Inventariar consumidores y dependencias reales.
4. Crear el mapa de migración.
5. Definir tokens o primitivas compartidas sin alterar estilos.
6. Implementar componentes con compatibilidad hacia la estructura actual.
7. Adoptar primero componentes de bajo riesgo en Home y Maratón Medellín 2026.
8. Validar rutas, interfaz y responsive.
9. Documentar duplicados y candidatos a retiro sin eliminarlos.
10. Detenerse y solicitar aprobación.

## Riesgos y mitigaciones

| Riesgo | Impacto | Mitigación |
|---|---|---|
| Rutas relativas diferentes entre Home y páginas anidadas | Recursos o estilos rotos | Inventario de profundidades, comprobador de rutas y validación desde ambas URLs |
| Cambios visuales al consolidar CSS | Pérdida del diseño aprobado | Migrar solo reglas inequívocas, conservar estilos específicos y comparar en varios anchos |
| Conflicto con cambios locales | Pérdida de trabajo | Revisar `git status`, crear respaldo y nunca descartar cambios |
| Abstracción excesiva | Componentes difíciles de mantener | Extraer patrones con consumidores reales y permitir variantes explícitas |
| JavaScript como requisito de contenido | Sitio inaccesible ante fallos | Mejora progresiva y contenido esencial presente en HTML |
| Créditos imprecisos | Riesgo profesional y reputacional | Modelo estructurado de créditos y revisión específica de MIRAPALTECHO |
| Limpieza prematura | Pérdida de recursos aún útiles | No borrar nada; mantener lista de candidatos pendiente de aprobación |
| Archivos con tildes o nombres heredados | Problemas futuros de despliegue | Mantenerlos en esta fase y documentar una migración posterior coordinada |
| PDFs pesados | Rendimiento deficiente | Enlazarlos mediante tarjetas; no modificarlos en esta fase |

## Validaciones

### Git y seguridad

- Ruta raíz confirmada.
- `git status` inicial y final registrado.
- Rama o commit local de respaldo verificable.
- `git diff --check` sin errores.
- Sin push ni cambios remotos.

### Rutas y carga

- Referencias locales de HTML, CSS y JS verificadas.
- Orden de hojas de estilo y scripts comprobado.
- Logo, perfil, hero y galerías cargan desde Home y proyecto anidado.
- Rutas dinámicas diferenciadas de rutas realmente rotas.

### Responsive y accesibilidad

- Home: 1440, 1024, 768 y 390 px.
- Maratón Medellín 2026: 1440, 768 y 390 px.
- Sin scroll horizontal accidental.
- Navegación por teclado y foco visible.
- Texto legible y contraste preservado.
- Imágenes con texto alternativo adecuado.
- Animaciones compatibles con `prefers-reduced-motion`.

### Funcionalidad

- Enlace de WhatsApp correcto.
- Navegación interna funcional.
- Galerías conservan estados de carga y error.
- Documentos se abren mediante enlaces sin modificar los originales.
- Consola sin errores nuevos atribuibles a la migración.

## Criterios de aceptación

- Existe respaldo local previo a los cambios.
- Se creó `docs/MAPA_MIGRACION_COMPONENTES.md`.
- Los siete componentes solicitados tienen una base reutilizable documentada e implementada.
- Home y Maratón Medellín 2026 adoptan únicamente cambios de bajo riesgo y conservan su apariencia.
- CSS y JS compartidos empiezan a unificarse sin borrar las implementaciones anteriores.
- El contenido visible permanece en español.
- Los créditos de MIRAPALTECHO permanecen correctos.
- Se ejecutaron y documentaron las validaciones disponibles.
- Se creó `docs/MIGRACION_COMPONENTES_RESULTADO.md`.
- No se borraron ni renombraron archivos o carpetas.
- No se modificaron PDFs originales.
- No se hizo push.
- La limpieza de duplicados queda explícitamente pendiente de aprobación.

## Puerta de aprobación

La migración se detiene al completar la primera adopción y su documentación. Cualquier limpieza, renombrado, extensión a otros casos de estudio, optimización de PDFs o publicación requiere aprobación explícita de Sebastián.

