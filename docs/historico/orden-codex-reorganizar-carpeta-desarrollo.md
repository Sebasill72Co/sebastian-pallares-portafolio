# ORDEN COMPLETA PARA CODEX — REORGANIZAR ESPACIO DE TRABAJO EN DESARROLLO

## CONTEXTO

Actualmente Codex está trabajando dentro de la carpeta del proyecto **Portafolio Sebastian Pallares** y no puede leer ni administrar archivos ubicados fuera de esa carpeta.

El objetivo es que la carpeta abierta como espacio de trabajo sea la carpeta general de **desarrollo**, para que dentro de ella puedan convivir varios proyectos independientes, incluyendo:

- Portafolio Sebastian Pallares
- SUMINEX
- futuros proyectos

Esta orden sustituye las instrucciones anteriores únicamente en lo relacionado con la ubicación del espacio de trabajo y la estructura de carpetas. Todo el contexto, materiales aprobados y reglas del proyecto SUMINEX se mantienen.

---

# 1. PASO MANUAL OBLIGATORIO ANTES DE EJECUTAR

Codex no puede ampliar por sí mismo los permisos del espacio de trabajo si fue abierto únicamente dentro de `Portafolio Sebastian Pallares`.

Antes de ejecutar esta orden, el usuario debe abrir en VS Code/Codex la carpeta general de desarrollo mediante:

```text
Archivo > Abrir carpeta…
```

Abrir una de estas rutas, usando la que realmente exista:

```text
~/mpt5/desarrollo/
```

o, si la carpeta fue creada anteriormente con tres letras “l”:

```text
~/mpt5/desarrolllo/
```

No abrir directamente:

```text
~/mpt5/desarrollo/Portafolio Sebastian Pallares/
```

ni:

```text
~/mpt5/desarrollo/SUMINEX/
```

La carpeta abierta como raíz del espacio de trabajo debe ser **desarrollo** o **desarrolllo**.

Si Codex detecta que sigue limitado únicamente a la carpeta del portafolio, debe detenerse y reportar:

```text
No puedo reorganizar los proyectos porque el espacio de trabajo continúa abierto dentro de Portafolio Sebastian Pallares. Abre la carpeta general de desarrollo y vuelve a ejecutar esta orden.
```

No debe intentar evadir las restricciones del espacio de trabajo.

---

# 2. DETECTAR LA RUTA REAL

Una vez abierta la carpeta general, verifica cuál de estas rutas es la real:

```text
~/mpt5/desarrollo/
```

```text
~/mpt5/desarrolllo/
```

Reglas:

1. Usa la carpeta que ya exista.
2. No crees las dos variantes.
3. No renombres la carpeta general sin autorización.
4. En el reporte final indica la ruta exacta utilizada.

En el resto de esta orden, la ruta detectada se denomina:

```text
<RUTA_DESARROLLO>
```

---

# 3. ESTRUCTURA OBJETIVO

La estructura general debe quedar así:

```text
<RUTA_DESARROLLO>/
├── Portafolio Sebastian Pallares/
├── SUMINEX/
└── futuros-proyectos/
```

`futuros-proyectos/` es solo una representación de que podrán existir otros proyectos. No crees esa carpeta literalmente.

Cada proyecto debe ser independiente. No guardes SUMINEX dentro del portafolio.

La ruta correcta para SUMINEX debe ser:

```text
<RUTA_DESARROLLO>/SUMINEX/
```

La ruta incorrecta que no debe usarse es:

```text
<RUTA_DESARROLLO>/Portafolio Sebastian Pallares/SUMINEX/
```

---

# 4. PROTEGER EL PORTAFOLIO

El proyecto **Portafolio Sebastian Pallares** ya contiene trabajo importante.

Reglas obligatorias:

- No elimines el proyecto.
- No renombres su carpeta.
- No cambies sus rutas internas.
- No muevas sus archivos a SUMINEX.
- No modifiques código, imágenes, Git ni configuración del portafolio durante esta ejecución.
- No mezcles los repositorios.
- No inicialices un repositorio Git en la carpeta general de desarrollo.
- Cada proyecto podrá tener su propio repositorio Git independiente.

Esta ejecución solo debe reorganizar o crear la carpeta independiente de SUMINEX.

---

# 5. LOCALIZAR MATERIAL DE SUMINEX

Busca dentro del espacio de trabajo los archivos relacionados con SUMINEX, incluyendo nombres similares a:

```text
SUMINEX-material-y-orden-para-codex.zip
orden-codex-suminex-consolidacion.md
catalogo-bodys-suminex-*.html
catalogo-bodys-suminex-*.zip
catalogo_bodys_suminex_*
```

También busca una posible carpeta `SUMINEX` ubicada accidentalmente dentro de:

```text
<RUTA_DESARROLLO>/Portafolio Sebastian Pallares/
```

No uses búsquedas fuera de `<RUTA_DESARROLLO>`.

---

# 6. CREAR LA CARPETA INDEPENDIENTE DE SUMINEX

Crea, si no existe:

```text
<RUTA_DESARROLLO>/SUMINEX/
```

Dentro de ella organiza:

```text
SUMINEX/
├── README.md
├── docs/
├── material/
├── pendientes/
├── src/
├── dist/
└── entregas/
```

No crees carpetas con nombres como:

```text
SUMINEX-v1
SUMINEX-v2
SUMINEX-final-nuevo
SUMINEX-copia
```

Todo el proyecto debe mantenerse en una sola carpeta principal.

---

# 7. MIGRACIÓN SEGURA

Si existe material de SUMINEX dentro del portafolio:

1. Cópialo primero a:

```text
<RUTA_DESARROLLO>/SUMINEX/
```

2. No borres todavía el material original.
3. Verifica:
   - número de archivos;
   - tamaños;
   - estructura;
   - que los archivos HTML abran;
   - que las imágenes existan;
   - que no haya rutas rotas.
4. Genera un manifiesto de verificación en:

```text
<RUTA_DESARROLLO>/SUMINEX/docs/MIGRACION-DESDE-PORTAFOLIO.md
```

5. El manifiesto debe indicar:
   - ruta de origen;
   - ruta de destino;
   - archivos copiados;
   - archivos omitidos;
   - errores encontrados;
   - elementos que todavía permanecen en el portafolio.

No elimines los originales hasta que el usuario lo autorice en una orden futura.

Si no existe material de SUMINEX dentro del portafolio, no inventes ni copies archivos no relacionados.

---

# 8. MATERIAL APROBADO DE SUMINEX

Conserva el estado confirmado del proyecto:

```text
BD-001: 7 mockups aprobados
BD-002: 7 mockups aprobados
BD-003: 7 mockups aprobados
BD-004: pendiente
```

Material aprobado total:

```text
21 mockups
```

No declares que existen 28 mockups aprobados.

La carpeta independiente debe conservar o preparar esta estructura:

```text
SUMINEX/
├── material/
│   ├── imagenes-aprobadas/
│   │   ├── bd-001/
│   │   ├── bd-002/
│   │   └── bd-003/
│   ├── logos/
│   └── catalogos-anteriores/
├── pendientes/
│   └── BD-004-PENDIENTE.md
└── src/
    └── assets/
        └── images/
            └── products/
```

No recolorees imágenes mediante CSS, Canvas, filtros, máscaras o superposiciones.

---

# 9. CONSERVAR LA ORDEN MAESTRA

Copia o conserva la orden principal de SUMINEX dentro de:

```text
<RUTA_DESARROLLO>/SUMINEX/docs/ORDEN-MAESTRA-SUMINEX.md
```

También crea:

```text
<RUTA_DESARROLLO>/SUMINEX/docs/DIRECCION-PROYECTO.md
```

Con este contenido conceptual:

- El usuario define lo que necesita.
- ChatGPT dirige el proyecto y crea cada orden completa.
- Codex ejecuta la orden.
- Codex no improvisa ni añade funciones no solicitadas.
- Cada cambio se aplica sobre la misma carpeta `SUMINEX`.
- Cada nueva orden debe conservar los avances aprobados.

No cambies esta modalidad de trabajo.

---

# 10. ARCHIVO DE PROYECTOS EN DESARROLLO

Crea en la raíz de desarrollo:

```text
<RUTA_DESARROLLO>/PROYECTOS.md
```

Debe contener únicamente información organizativa, por ejemplo:

```md
# Proyectos de desarrollo

## Portafolio Sebastian Pallares

- Proyecto de portafolio profesional.
- Carpeta independiente.
- No modificar desde órdenes de SUMINEX.

## SUMINEX

- Catálogo digital mayorista de bodys.
- Carpeta independiente.
- Dirección del proyecto desde ChatGPT.
- Ejecución técnica mediante Codex.
```

No incluyas contraseñas, datos privados ni rutas externas.

---

# 11. CONFIGURACIÓN DE VS CODE

Dentro de la carpeta general de desarrollo, crea solo si resulta útil:

```text
<RUTA_DESARROLLO>/desarrollo.code-workspace
```

El archivo debe permitir abrir como carpetas independientes:

```json
{
  "folders": [
    {
      "path": "Portafolio Sebastian Pallares"
    },
    {
      "path": "SUMINEX"
    }
  ],
  "settings": {}
}
```

Antes de crearlo:

- verifica el nombre real de la carpeta del portafolio;
- usa rutas relativas;
- no incluyas carpetas inexistentes;
- no agregues configuraciones que alteren extensiones, Git o terminal.

El usuario podrá abrir en el futuro este archivo para acceder a varios proyectos desde una sola ventana.

---

# 12. REPOSITORIOS GIT

Verifica si `Portafolio Sebastian Pallares` ya tiene su propio `.git`.

Para SUMINEX:

- no inicialices Git automáticamente en esta ejecución;
- primero organiza y verifica los archivos;
- informa si SUMINEX todavía no tiene repositorio;
- espera una orden futura para inicializarlo o conectarlo a GitHub.

Nunca inicialices Git en:

```text
<RUTA_DESARROLLO>/
```

La carpeta general es un contenedor de proyectos, no un solo repositorio.

---

# 13. PRUEBAS OBLIGATORIAS

Antes de finalizar:

1. Confirma que la raíz abierta sea `<RUTA_DESARROLLO>`.
2. Confirma que el portafolio siga intacto.
3. Confirma que `SUMINEX/` sea una carpeta hermana del portafolio.
4. Confirma que SUMINEX no esté dentro del portafolio.
5. Comprueba que los archivos copiados abran correctamente.
6. Comprueba que las imágenes aprobadas estén presentes.
7. Comprueba que no se haya eliminado ningún original.
8. Comprueba que `PROYECTOS.md` exista.
9. Comprueba el archivo `.code-workspace`, si fue creado.
10. Comprueba que no exista un `.git` nuevo en la raíz de desarrollo.
11. Comprueba que no se hayan modificado archivos del portafolio.
12. Informa cualquier archivo que Codex no haya podido leer.

---

# 14. RESULTADO ESPERADO

La estructura mínima final debe ser:

```text
<RUTA_DESARROLLO>/
├── PROYECTOS.md
├── desarrollo.code-workspace
├── Portafolio Sebastian Pallares/
└── SUMINEX/
    ├── README.md
    ├── docs/
    ├── material/
    ├── pendientes/
    ├── src/
    ├── dist/
    └── entregas/
```

El archivo `desarrollo.code-workspace` puede omitirse únicamente si no es compatible con la estructura real encontrada. En ese caso, explica la razón.

---

# 15. REPORTE FINAL

Al terminar, responde con:

1. ruta general de desarrollo utilizada;
2. ruta exacta del portafolio;
3. ruta exacta de SUMINEX;
4. archivos de SUMINEX encontrados;
5. archivos copiados o reorganizados;
6. elementos que quedaron pendientes;
7. confirmación de que el portafolio no fue modificado;
8. confirmación de que ambos proyectos son carpetas hermanas;
9. ubicación de `PROYECTOS.md`;
10. ubicación del archivo `.code-workspace`, si se creó.

No elimines respaldos ni originales en esta ejecución.
