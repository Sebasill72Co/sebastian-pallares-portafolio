(function () {
  "use strict";

  var base = "../../../assets/images/projects/maraton-medellin/2025/";

  window.MM2025_MICROSITE = {
    edition: 2025,
    theme: "mm25",
    artDirection: "recorridos-modulares",
    palette: [
      {
        id: "cyan",
        name: "Cian",
        hex: "#00B7CE",
        rgb: "0 · 183 · 206",
        cmyk: "72 · 4 · 18 · 0",
        text: "#391459",
        role: "Movimiento, fondos activos y señalización del recorrido.",
        pairs: "Morado · Verde neón"
      },
      {
        id: "pink",
        name: "Rosa",
        hex: "#EFC7BD",
        rgb: "239 · 199 · 189",
        cmyk: "4 · 24 · 20 · 0",
        text: "#391459",
        role: "Superficie editorial, pausa y contraste cálido.",
        pairs: "Morado · Cian"
      },
      {
        id: "purple",
        name: "Morado",
        hex: "#391459",
        rgb: "57 · 20 · 89",
        cmyk: "87 · 100 · 30 · 30",
        text: "#FFFFFF",
        role: "Texto, navegación y superficies de máximo contraste.",
        pairs: "Cian · Rosa · Verde neón"
      },
      {
        id: "lime",
        name: "Verde neón",
        hex: "#4CF77C",
        rgb: "76 · 247 · 124",
        cmyk: "55 · 0 · 77 · 0",
        text: "#391459",
        role: "Acento, orientación y señal de energía deportiva.",
        pairs: "Morado · Cian"
      }
    ],
    distances: [
      {
        id: "42k",
        label: "42K",
        caption: "42K · recorrido principal",
        title: "El recorrido principal marca la amplitud del sistema.",
        description: "El trazado de 42K articula la composición más extensa y combina morado, cian y verde como contraste dominante.",
        accent: "#00B7CE",
        src: base + "sistema/distancia-42k.webp",
        alt: "Módulo gráfico oficial de la distancia 42K"
      },
      {
        id: "21k",
        label: "21K",
        caption: "21K · media maratón",
        title: "La media maratón conserva el ritmo con otra proporción.",
        description: "El módulo 21K reorganiza el trazado y la relación entre campos de color sin perder el parentesco visual de la familia.",
        accent: "#EFC7BD",
        src: base + "sistema/distancia-21k.webp",
        alt: "Módulo gráfico oficial de la distancia 21K"
      },
      {
        id: "10k",
        label: "10K",
        caption: "10K · recorrido urbano",
        title: "El recorrido urbano concentra el gesto gráfico.",
        description: "La versión 10K comprime la ruta y hace más directa la lectura de distancia dentro del mismo lenguaje modular.",
        accent: "#4CF77C",
        src: base + "sistema/distancia-10k.webp",
        alt: "Módulo gráfico oficial de la distancia 10K"
      },
      {
        id: "5k",
        label: "5K",
        caption: "5K · recorrido familiar",
        title: "La distancia corta mantiene una voz propia.",
        description: "El módulo 5K ajusta color, escala y trazado para distinguirse con claridad sin separarse del sistema general.",
        accent: "#391459",
        src: base + "sistema/distancia-5k.webp",
        alt: "Módulo gráfico oficial de la distancia 5K"
      }
    ],
    moments: {
      campana: [
        {
          title: "Corre entre montañas",
          meta: "Paradero · diseño plano",
          src: base + "durante-campana/paraderos/paradero-01.webp",
          alt: "Diseño de paradero verde con corredores y el mensaje Corre entre montañas",
          width: 2382,
          height: 3485
        },
        {
          title: "Yo soy 5K",
          meta: "Paradero · diseño plano",
          src: base + "durante-campana/paraderos/paradero-02.webp",
          alt: "Diseño de paradero con dos corredores y el mensaje Yo soy 5K",
          width: 2382,
          height: 3485
        },
        {
          title: "Yo soy 10K",
          meta: "Paradero · diseño plano",
          src: base + "durante-campana/paraderos/paradero-03.webp",
          alt: "Diseño de paradero con dos corredores frente al metro y el mensaje Yo soy 10K",
          width: 2382,
          height: 3485
        },
        {
          title: "Maratón Medellín",
          meta: "Paradero · diseño plano",
          src: base + "durante-campana/paraderos/paradero-11.webp",
          alt: "Diseño de paradero cian y rosa con una corredora durante la carrera",
          width: 2382,
          height: 3485
        }
      ],
      expo: [
        {
          title: "Bolsa del kit · frente",
          meta: "Feria Exporunners · diseño plano",
          src: base + "exporunners/bolsa-kit/frente.webp",
          alt: "Frente de la bolsa del kit 2025 en cian, rosa y morado",
          width: 750,
          height: 978
        },
        {
          title: "Bolsa del kit · reverso",
          meta: "Feria Exporunners · diseño plano",
          src: base + "exporunners/bolsa-kit/reverso.webp",
          alt: "Reverso de la bolsa del kit 2025 con el mensaje Corre entre montañas",
          width: 750,
          height: 978
        }
      ],
      carrera: {
        camisetas: [
          { title: "Camiseta 42K", meta: "Masculina · frente y espalda", src: base + "dia-carrera/camisetas/camiseta-01.webp", alt: "Camiseta oficial cian de 42K, frente y espalda", width: 1871, height: 1072, landscape: true },
          { title: "Camiseta 21K", meta: "Masculina · frente y espalda", src: base + "dia-carrera/camisetas/camiseta-02.webp", alt: "Camiseta oficial azul de 21K, frente y espalda", width: 1871, height: 1072, landscape: true },
          { title: "Camiseta 10K", meta: "Masculina · frente y espalda", src: base + "dia-carrera/camisetas/camiseta-03.webp", alt: "Camiseta oficial azul de 10K, frente y espalda", width: 1871, height: 1072, landscape: true },
          { title: "Camiseta 5K", meta: "Masculina · frente y espalda", src: base + "dia-carrera/camisetas/camiseta-04.webp", alt: "Camiseta oficial negra de 5K, frente y espalda", width: 1871, height: 1072, landscape: true },
          { title: "Camiseta 42K", meta: "Femenina · frente y espalda", src: base + "dia-carrera/camisetas/camiseta-05.webp", alt: "Camiseta oficial rosa de 42K, frente y espalda", width: 1871, height: 1072, landscape: true },
          { title: "Camiseta 21K", meta: "Femenina · frente y espalda", src: base + "dia-carrera/camisetas/camiseta-06.webp", alt: "Camiseta oficial azul claro de 21K, frente y espalda", width: 1871, height: 1072, landscape: true },
          { title: "Camiseta 10K", meta: "Femenina · frente y espalda", src: base + "dia-carrera/camisetas/camiseta-07.webp", alt: "Camiseta oficial azul claro de 10K, frente y espalda", width: 1871, height: 1072, landscape: true }
        ],
        dorsales: [
          { title: "Número 42K", meta: "Corral 1 · diseño plano", src: base + "dia-carrera/dorsales/dorsal-42k.webp", alt: "Número de corredor 42K en morado y amarillo", width: 779, height: 643, landscape: true },
          { title: "Número 21K", meta: "Corral 1 · diseño plano", src: base + "dia-carrera/dorsales/dorsal-21k.webp", alt: "Número de corredor 21K en rosa y verde", width: 779, height: 643, landscape: true },
          { title: "Número 10K", meta: "Corral 1 · diseño plano", src: base + "dia-carrera/dorsales/dorsal-10k.webp", alt: "Número de corredor 10K en cian y verde", width: 779, height: 643, landscape: true },
          { title: "Número 5K", meta: "Diseño plano", src: base + "dia-carrera/dorsales/dorsal-5k.webp", alt: "Número de corredor 5K en verde, rosa y morado", width: 779, height: 643, landscape: true }
        ],
        trofeos: [
          { title: "Trofeo 42K", meta: "Campeona · diseño plano", src: base + "dia-carrera/trofeos/trofeo-42k.webp", alt: "Diseño de trofeo de campeona 42K", width: 1056, height: 1180, landscape: true },
          { title: "Trofeo 21K", meta: "Campeona · diseño plano", src: base + "dia-carrera/trofeos/trofeo-21k.webp", alt: "Diseño de trofeo de campeona 21K", width: 1056, height: 1180, landscape: true },
          { title: "Trofeo 10K", meta: "Campeona · diseño plano", src: base + "dia-carrera/trofeos/trofeo-10k.webp", alt: "Diseño de trofeo de campeona 10K", width: 1056, height: 1180, landscape: true },
          { title: "Trofeo 5K", meta: "Campeona · diseño plano", src: base + "dia-carrera/trofeos/trofeo-5k.webp", alt: "Diseño de trofeo de campeona 5K", width: 1056, height: 1180, landscape: true }
        ]
      }
    }
  };
})();
