# INFORME — LABORATORIO MM2026 V2

Fecha: 12 de julio de 2026  
Alcance: prototipo aislado del sistema dinámico de fondos MM2026.

## Archivos modificados

- `proyectos/maraton-medellin/2026/laboratorio-fondo.html`
  - Actualiza el valor inicial del granulado a 80 %.
  - Añade la lectura visible del breakpoint activo.
  - Mantiene únicamente el lienzo dinámico y el panel técnico.
  - Actualiza las versiones de los recursos aislados para evitar caché obsoleta.
- `assets/css/dynamic-backgrounds.css`
  - Sustituye las barras absolutas por una retícula estructural sin `gap`.
  - Añade columnas contiguas y segmentos superiores e inferiores independientes.
  - Mantiene una única capa continua de ruido sobre toda la composición.
  - Limita la animación a escala vertical sutil, desplazamiento interno del degradado y variación cromática mínima.
  - Respeta `prefers-reduced-motion`.
- `assets/js/dynamic-background-engine.js`
  - Renderiza columnas ponderadas mediante CSS Grid.
  - Permite cero, uno o dos segmentos por columna.
  - Selecciona configuraciones independientes para escritorio, tablet y móvil.
  - Conserva el valor de ruido al cambiar de breakpoint.
  - Publica el breakpoint activo para el panel del laboratorio.
- `assets/js/maraton-2026-backgrounds.js`
  - Define los tokens semánticos MM2026.
  - Incorpora tres composiciones geométricas distintas.
  - Configura peso, altura, origen, degradado, opacidad, amplitud, duración y desfase por segmento.

No se modificó el landing principal ni su Hero.

## Configuración geométrica

### Escritorio — 1366 px y 1920 px

- Columnas: 12.
- Pesos: `0.76, 1.08, 0.84, 1.27, 0.68, 1.03, 1.18, 0.79, 1.32, 0.65, 1.01, 0.89`.
- Peso total: `11.50`.
- Segmentos superiores: 6.
- Segmentos inferiores: 7.
- Columnas con ambos segmentos: 3.
- Columnas de fondo madre: 2.
- Alturas superiores: 18 % a 56 %.
- Alturas inferiores: 20 % a 78 %.
- Cobertura animada máxima dentro de una columna: 82.06 %; por tanto, el fondo madre permanece visible.

### Tablet — 768 px

- Columnas: 10.
- Pesos: `0.86, 1.16, 0.82, 1.30, 0.73, 1.08, 1.22, 0.82, 1.36, 0.65`.
- Peso total: `10.00`.
- Segmentos superiores: 5.
- Segmentos inferiores: 6.
- Columnas con ambos segmentos: 2.
- Columnas de fondo madre: 1.
- Alturas superiores: 19 % a 53 %.
- Alturas inferiores: 17 % a 75 %.
- Cobertura animada máxima: 77.81 %.
- La amplitud se reduce al 78 % de la configuración nominal.

### Móvil — 375 px y 430 px

- Columnas: 8.
- Pesos: `0.90, 1.18, 0.88, 1.28, 0.82, 1.12, 1.25, 0.90`.
- Peso total: `8.33`.
- Segmentos superiores: 4.
- Segmentos inferiores: 5.
- Columnas con ambos segmentos: 2.
- Columnas de fondo madre: 1.
- Alturas superiores: 20 % a 45 %.
- Alturas inferiores: 18 % a 73 %.
- Cobertura animada máxima: 74.78 %.
- La amplitud se reduce al 58 % y las duraciones aumentan para un movimiento más lento.

### Color

Variables semánticas utilizadas:

- `--mm26-base-top: #641E28`
- `--mm26-base-bottom: #3E1730`
- `--mm26-purple: #4A0BAE`
- `--mm26-blue: #7281F1`
- `--mm26-green: #54CF88`
- `--mm26-lime: #F5F694`
- `--mm26-pink: #DF3760`
- `--mm26-red: #641E28`
- `--mm26-yellow: #FFCB3E`
- `--mm26-dark: #325541`

Los segmentos combinan estos colores mediante degradados propios. No se añadieron colores ajenos al sistema MM2026.

## Diferencias frente al prototipo anterior

- Se eliminó la distribución fija de ocho barras iguales de 12.5 %.
- Una columna ya no equivale a una barra de altura completa.
- Los anchos ahora son ponderados y asimétricos.
- Hay configuraciones diferentes por breakpoint, no una composición de escritorio escalada.
- Cada columna admite un segmento superior, uno inferior, ambos o ninguno.
- Se incorporaron columnas donde solo aparece el fondo madre.
- Las alturas, duraciones, amplitudes y desfases ya no siguen un patrón alternado evidente.
- La animación afecta únicamente a los segmentos.
- El ruido inicial aumentó de 56 % a 80 % y se conserva al cambiar de breakpoint.
- El panel informa el breakpoint activo.

## Validación visual

- Se inspeccionó la estructura del archivo `Fondo barras principales.svg` como referencia, sin cargarlo en el prototipo, rasterizarlo, animarlo ni reutilizar sus imágenes Base64.
- La reconstrucción conserva la jerarquía de fondo continuo, módulos contiguos y entradas desde extremos opuestos, pero sustituye la repetición uniforme por un ritmo editorial asimétrico.
- El código garantiza una única capa de ruido situada por encima del fondo y de todos los segmentos.
- No existen `gap`, bordes, contornos ni márgenes entre columnas.
- No hay desplazamiento horizontal ni animación de columnas completas.
- La comprobación visual automatizada en el navegador local quedó bloqueada por la política de acceso a archivos locales de la herramienta. Por esta razón, la fidelidad perceptual final requiere aprobación visual manual y no se declara como validada automáticamente.

## Validación responsive

La geometría fue comprobada matemáticamente para los cinco tamaños:

| Tamaño | Configuración | Columnas | Cobertura horizontal | Desbordamiento previsto |
|---|---:|---:|---:|---:|
| 375 × 812 | móvil | 8 | 100 % | ninguno |
| 430 × 900 | móvil | 8 | 100 % | ninguno |
| 768 × 900 | tablet | 10 | 100 % | ninguno |
| 1366 × 768 | escritorio | 12 | 100 % | ninguno |
| 1920 × 1080 | escritorio | 12 | 100 % | ninguno |

CSS Grid distribuye los pesos en fracciones y absorbe el redondeo subpíxel, por lo que el primer y último módulo cubren exactamente los límites del contenedor. `overflow: hidden`, `min-width: 0` y la ausencia de `gap` evitan scroll horizontal y separaciones.

Validaciones técnicas realizadas:

- `node --check` sin errores en los dos archivos JavaScript.
- `git diff --check` sin errores de espacios o marcadores de conflicto.
- No existen referencias al SVG, Base64 de la referencia ni reglas antiguas de barras de 12.5 %.
- No se incorporaron los recursos del laboratorio al landing principal.
- La consola del navegador no pudo inspeccionarse debido a la restricción local indicada anteriormente.

## Limitaciones

- Falta la comparación perceptual lado a lado dentro de un navegador autorizado para abrir simultáneamente el SVG local y el laboratorio.
- El granulado se genera con una capa SVG procedural continua; su textura se aproxima al referente, pero puede necesitar ajuste fino de frecuencia, mezcla y contraste tras la revisión visual.
- Las proporciones son una interpretación paramétrica y no una vectorización literal del archivo original.
- El movimiento orgánico deberá observarse durante al menos 30–40 segundos para confirmar que ningún ciclo resulta demasiado evidente.
- No se ha probado la apariencia en un dispositivo físico con densidad de píxel alta.

## Próximo paso

Solicitar únicamente la aprobación visual del laboratorio aislado antes de considerar cualquier integración.
