(function () {
  "use strict";

  var root = "../../../assets/images/projects/maraton-medellin/2024/";

  window.MM2024_MICROSITE = {
    palette: [
      { id: "verde-noche", name: "Verde noche", hex: "#1C4D51", group: "base", family: "Verdes", role: "Fondo principal de campaña", pairs: "Amarillo solar · Coral" },
      { id: "amarillo-solar", name: "Amarillo solar", hex: "#FFB400", group: "base", family: "Amarillos", role: "Acento principal y fecha", pairs: "Verde noche · Azul urbano" },
      { id: "coral-principal", name: "Coral principal", hex: "#E76962", group: "base", family: "Rojos", role: "Plano cálido principal", pairs: "Turquesa · Verde noche" },
      { id: "azul-urbano", name: "Azul urbano", hex: "#37A5D7", group: "base", family: "Azules", role: "Plano frío principal", pairs: "Coral · Amarillo solar" },
      { id: "menta", name: "Menta", hex: "#66B3A7", group: "apoyo", family: "Verdes", role: "Apoyo claro", pairs: "Rojo profundo · Azul noche" },
      { id: "rosa-claro", name: "Rosa claro", hex: "#F9C4CD", group: "apoyo", family: "Rosas", role: "Superficie clara", pairs: "Verde noche · Azul profundo" },
      { id: "naranja", name: "Naranja", hex: "#EF660A", group: "apoyo", family: "Rojos", role: "Apoyo cálido intenso", pairs: "Cian · Verde profundo" },
      { id: "azul-claro", name: "Azul claro", hex: "#3EB2DC", group: "apoyo", family: "Azules", role: "Apoyo frío luminoso", pairs: "Coral · Verde noche" },
      { id: "rojo", name: "Rojo", hex: "#D95553", group: "variacion", family: "Rojos", role: "Variación de la familia roja", pairs: "Menta · Amarillo claro" },
      { id: "amarillo-claro", name: "Amarillo claro", hex: "#FFD250", group: "variacion", family: "Amarillos", role: "Variación luminosa", pairs: "Verde tinta · Rojo" },
      { id: "verde-tinta", name: "Verde tinta", hex: "#224F50", group: "variacion", family: "Verdes", role: "Variación profunda", pairs: "Amarillo claro · Rosa" },
      { id: "azul-petroleo", name: "Azul petróleo", hex: "#007694", group: "variacion", family: "Azules", role: "Variación profunda", pairs: "Dorado · Coral" },
      { id: "turquesa", name: "Turquesa", hex: "#45C4C2", group: "variacion", family: "Cianes", role: "Variación media", pairs: "Dorado · Verde noche" },
      { id: "azul-carrera", name: "Azul carrera", hex: "#2D7CE2", group: "variacion", family: "Azules", role: "Variación deportiva", pairs: "Dorado · Verde profundo" },
      { id: "durazno", name: "Durazno", hex: "#F0A990", group: "variacion", family: "Rosas", role: "Variación cálida clara", pairs: "Azul profundo · Verde tinta" },
      { id: "amarillo-medio", name: "Amarillo medio", hex: "#F7CA43", group: "variacion", family: "Amarillos", role: "Variación media", pairs: "Azul carrera · Coral" },
      { id: "verde-profundo", name: "Verde profundo", hex: "#376B63", group: "variacion", family: "Verdes", role: "Variación media", pairs: "Amarillo claro · Coral" },
      { id: "cian", name: "Cian", hex: "#45C3E3", group: "variacion", family: "Cianes", role: "Variación luminosa", pairs: "Naranja · Verde profundo" },
      { id: "azul-medio", name: "Azul medio", hex: "#4D75C2", group: "variacion", family: "Azules", role: "Variación intermedia", pairs: "Amarillo claro · Rosa" },
      { id: "rosa-medio", name: "Rosa medio", hex: "#DD7786", group: "variacion", family: "Rosas", role: "Variación media", pairs: "Azul petróleo · Amarillo claro" },
      { id: "rosa-neutro", name: "Rosa neutro", hex: "#D8C1BF", group: "variacion", family: "Rosas", role: "Variación neutra", pairs: "Verde noche · Coral" },
      { id: "rosa-neutro-claro", name: "Rosa neutro claro", hex: "#E5C9C8", group: "variacion", family: "Rosas", role: "Variación neutra clara", pairs: "Verde noche · Azul urbano" },
      { id: "azul-profundo", name: "Azul profundo", hex: "#1B59C1", group: "variacion", family: "Azules", role: "Variación profunda", pairs: "Amarillo medio · Rosa claro" }
    ],
    distances: [
      { id: "42k", label: "42K", title: "La distancia principal", description: "La portada documenta la expresión de 42K dentro del sistema de color de la edición.", src: root + "recorridos-png/portada-42k.webp", alt: "Portada gráfica oficial del recorrido 42K de Maratón Medellín 2024", width: 1000, height: 1000 },
      { id: "21k", label: "21K", title: "Media maratón", description: "La identidad conserva la energía del sistema y diferencia la distancia mediante su propia composición.", src: root + "recorridos-png/portada-21k.webp", alt: "Portada gráfica oficial del recorrido 21K de Maratón Medellín 2024", width: 1500, height: 1000 },
      { id: "10k", label: "10K", title: "Recorrido urbano", description: "Una aplicación compacta del lenguaje visual para una de las distancias más convocantes.", src: root + "recorridos-png/portada-10k.webp", alt: "Portada gráfica oficial del recorrido 10K de Maratón Medellín 2024", width: 1000, height: 1000 },
      { id: "5k", label: "5K", title: "Entrada a la fiesta", description: "La distancia corta mantiene la jerarquía, el color y la celebración de la edición treinta.", src: root + "recorridos-png/portada-5k.webp", alt: "Portada gráfica oficial del recorrido 5K de Maratón Medellín 2024", width: 1000, height: 1000 }
    ],
    distanceVariants: [
      { id: "principal-color", label: "Principal · color", src: root + "branding/sistema/distancias-principal-color.webp", alt: "Sistema principal de distancias en color", width: 2000, height: 950 },
      { id: "principal-mono", label: "Principal · monocromía", src: root + "branding/sistema/distancias-principal-monocromatica.webp", alt: "Sistema principal de distancias en blanco y negro", width: 2000, height: 950 },
      { id: "v2-color", label: "Versión 2 · color", src: root + "branding/sistema/distancias-v2-color.webp", alt: "Segunda jerarquía del sistema de distancias en color", width: 2000, height: 950 },
      { id: "v2-mono", label: "Versión 2 · monocromía", src: root + "branding/sistema/distancias-v2-monocromatica.webp", alt: "Segunda jerarquía del sistema de distancias en blanco y negro", width: 2000, height: 950 }
    ],
    moments: {
      campaign: [],
      expo: [
        { title: "Bolsa del kit · frente", meta: "Feria Exporunners", src: root + "exporunners/bolsa-kit-png/bolsa-kit-frente.webp", alt: "Diseño frontal oficial de la bolsa del kit MM2024", width: 1073, height: 1400 },
        { title: "Bolsa del kit · reverso", meta: "Feria Exporunners", src: root + "exporunners/bolsa-kit-png/bolsa-kit-reverso.webp", alt: "Diseño posterior oficial de la bolsa del kit MM2024", width: 1073, height: 1400 }
      ]
    },
    race: {
      "42k": [
        { title: "42K · Corral 1", meta: "Dorsal de carrera", src: root + "dia-carrera/dorsales-png/42k-corral-1.webp", alt: "Diseño oficial del dorsal 42K corral 1", width: 1000, height: 824 },
        { title: "42K · Corral 2", meta: "Dorsal de carrera", src: root + "dia-carrera/dorsales-png/42k-corral-2.webp", alt: "Diseño oficial del dorsal 42K corral 2", width: 1600, height: 1320 }
      ],
      "21k": [
        { title: "21K · Corral 1", meta: "Dorsal de carrera", src: root + "dia-carrera/dorsales-png/21k-corral-1.webp", alt: "Diseño oficial del dorsal 21K corral 1", width: 1600, height: 1320 },
        { title: "21K · Corral 2", meta: "Dorsal de carrera", src: root + "dia-carrera/dorsales-png/21k-corral-2.webp", alt: "Diseño oficial del dorsal 21K corral 2", width: 1600, height: 1320 },
        { title: "21K · Corral 3", meta: "Dorsal de carrera", src: root + "dia-carrera/dorsales-png/21k-corral-3.webp", alt: "Diseño oficial del dorsal 21K corral 3", width: 1600, height: 1320 }
      ],
      "10k": [
        { title: "10K · Corral 1", meta: "Dorsal de carrera", src: root + "dia-carrera/dorsales-png/10k-corral-1.webp", alt: "Diseño oficial del dorsal 10K corral 1", width: 1600, height: 1320 },
        { title: "10K · Corral 2", meta: "Dorsal de carrera", src: root + "dia-carrera/dorsales-png/10k-corral-2.webp", alt: "Diseño oficial del dorsal 10K corral 2", width: 1600, height: 1320 }
      ],
      "5k": [
        { title: "5K", meta: "Dorsal de carrera", src: root + "dia-carrera/dorsales-png/5k.webp", alt: "Diseño oficial del dorsal 5K", width: 1600, height: 1320 }
      ]
    }
  };
}());
