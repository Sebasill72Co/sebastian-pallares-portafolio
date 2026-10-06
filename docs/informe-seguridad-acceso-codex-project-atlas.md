# INFORME — SEGURIDAD DE ACCESO CODEX / PROJECT ATLAS

Fecha: 15 de julio de 2026  
Estado: configuración creada y validada; reinicio de Codex requerido

## 1. Workspace activo

Se confirmó mediante `pwd` y `git rev-parse --show-toplevel` que el workspace y la raíz de Git activos son exactamente:

`/Users/MPT5/Desarrollo/sebastian-pallares-portafolio`

No se inspeccionaron carpetas privadas externas. La auditoría se limitó al repositorio y a los archivos de instrucciones proporcionados explícitamente por el usuario para esta tarea.

## 2. Archivos de configuración

### `.codex/config.toml`

Archivo creado con el perfil local `project-atlas-locked`.

Configuración principal:

- permisos predeterminados: `project-atlas-locked`;
- política de aprobación: `on-request`;
- revisor de aprobaciones: `user`;
- aplicaciones: desactivadas;
- red: desactivada;
- escritura limitada al repositorio;
- lectura del material temporal expresamente autorizado;
- patrones de secretos denegados.

La carpeta `.codex` y el archivo `config.toml` no existían antes de esta tarea. Por esta razón no había una configuración previa que conservar y no fue necesario crear una copia `.bak`.

### `AGENTS.md`

Se añadió la sección `Límite de seguridad de PROJECT ATLAS` sin eliminar ni reemplazar instrucciones existentes. Esta regla persistente prohíbe:

- trabajar fuera de las dos rutas autorizadas;
- inspeccionar otras carpetas del usuario;
- acceder a información sensible;
- utilizar internet, navegador, MCP o conectores;
- solicitar acceso total o evasión del sandbox;
- crear ramas, commits o pushes.

Si una tarea necesita un recurso externo, el flujo obligatorio consiste en detenerse y solicitar que el usuario copie el archivo a la carpeta temporal autorizada.

## 3. Carpetas autorizadas

| Ruta | Permiso | Motivo |
|---|---|---|
| `/Users/MPT5/Desarrollo/sebastian-pallares-portafolio` | Lectura y escritura | Repositorio oficial de PROJECT ATLAS |
| `/Users/MPT5/Downloads/Material grafico temporal portafolio sebastian pallares` | Solo lectura | Fuente temporal autorizada para incorporar materiales al repositorio sin alterar originales |
| `:tmpdir` | Lectura y escritura transitoria | Operaciones temporales necesarias |
| `:slash_tmp` | Lectura y escritura transitoria | Operaciones temporales necesarias |

Las autorizaciones específicas del repositorio y la carpeta temporal están declaradas después de las prohibiciones generales correspondientes para expresar la excepción intencional dentro del perfil.

## 4. Carpetas denegadas

La política declara como denegados, sin inspeccionar su contenido:

- `/Users/MPT5` como límite general;
- `/Users/MPT5/Desktop`;
- `/Users/MPT5/Documents`;
- `/Users/MPT5/Library`;
- `/Users/MPT5/Downloads`, excepto la carpeta temporal autorizada;
- `/Users/MPT5/Desarrollo`, excepto el repositorio oficial;
- cualquier otro proyecto, repositorio o carpeta de cliente fuera del alcance.

La ruta `/Users/MPT5/Desktop/Clientes - Escritorio` queda fuera de alcance por estar contenida en Desktop. No debe volver a utilizarse aunque aparezca mencionada en documentación histórica.

## 5. Secretos protegidos

Dentro de los roots del workspace se deniegan expresamente los siguientes patrones:

- `**/.env`;
- `**/.env.*`;
- `**/*.pem`;
- `**/*.key`;
- `**/*.p12`;
- `**/*.pfx`;
- `**/*credential*`;
- `**/*secret*`.

La validación comprobó la presencia de estas reglas en la estructura TOML. No se intentó localizar ni leer archivos coincidentes.

## 6. Red y conectores

| Capacidad | Estado configurado |
|---|---|
| Red e internet | Desactivados mediante `enabled = false` |
| Apps | Desactivadas mediante `apps = false` |
| Navegador | Prohibido por la regla persistente de `AGENTS.md` |
| MCP y conectores | Prohibidos por la regla persistente de `AGENTS.md` |
| Aprobaciones | Solo bajo solicitud y revisión del usuario |
| Acceso total | Prohibido |

No se modificaron ajustes de entrenamiento o controles de datos de la cuenta. Esos controles deben gestionarse manualmente desde ChatGPT y Codex Settings.

## 7. Validación

Se realizaron las siguientes comprobaciones no invasivas:

- raíz del workspace correcta;
- raíz de Git correcta;
- sintaxis TOML válida mediante el analizador estándar `tomllib`;
- perfil predeterminado: `project-atlas-locked`;
- aprobaciones: `on-request`;
- revisor: `user`;
- apps: `false`;
- red: `false`;
- repositorio: `write`;
- material temporal: `read`;
- home del usuario: `deny`;
- patrones `.env`, claves y secretos: `deny`;
- regla persistente presente en `AGENTS.md`;
- `git diff --check` sin errores de formato en los archivos de configuración.

No se validaron las prohibiciones intentando leer archivos privados. La política debe cargarse en una sesión nueva.

### Reinicio requerido

Es necesario reiniciar Codex y volver a abrir únicamente este repositorio para que `.codex/config.toml` pueda convertirse en la configuración activa de una nueva sesión. Después del reinicio se debe comprobar en la interfaz que el perfil cargado sea `project-atlas-locked` y rechazar cualquier solicitud de acceso fuera de las rutas autorizadas.

## 8. Limitaciones

Una política escrita dentro del repositorio no sustituye ni puede ampliar las garantías del sandbox administrado por Codex. Su aplicación efectiva depende de que la versión instalada reconozca el esquema de permisos, cargue la configuración local y respete la precedencia específica de rutas.

La sesión en la que se creó este documento conserva el perfil de permisos con el que fue iniciada. El nuevo perfil no debe considerarse activo hasta reiniciar Codex y verificarlo en la interfaz.

El usuario debe mantener como workspace únicamente el repositorio oficial, rechazar solicitudes externas y no aprobar `danger-full-access` ni mecanismos que omitan el sandbox. Los controles de entrenamiento deben cambiarse manualmente en la configuración de la cuenta; no pueden establecerse mediante TOML, Markdown o instrucciones del proyecto.

La orden MM2025 V6 fue revisada, pero no se ejecutó porque la orden de seguridad exige detener toda tarea de diseño o desarrollo después de generar este informe. Debe iniciarse en una sesión posterior con el perfil restringido ya activo.
