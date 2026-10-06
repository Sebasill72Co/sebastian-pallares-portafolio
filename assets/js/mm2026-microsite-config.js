const MM26_IMAGE_ROOT = "../../../assets/images/projects/maraton-medellin/2026";

window.MM26_MICROSITE = {
  edition: 2026,
  theme: "mm26",
  artDirection: "modular-gradient",
  palette: {
    primary: "#4A0BAF",
    green: "#54CF88",
    blue: "#7281F1",
    yellow: "#FFCB3E",
    lime: "#F5F694",
    wine: "#641E28",
    pink: "#DF3760",
    darkGreen: "#325541",
    supportPink: "#E19BA5",
    supportBlue: "#A4AFFE",
    supportGreen: "#98FFC3",
    supportLime: "#FEFEDB",
    white: "#FFFFFF"
  },
  paletteColors: [
    {
      id: "vino-profundo", hex: "#641E28", family: "oscuro", name: "Vino profundo",
      rgb: "100 · 30 · 40", cmyk: "0 · 70 · 60 · 61", cmykStatus: "Aproximado",
      pantone: "Pendiente de validación", pantoneStatus: "Pendiente",
      role: "Contraste profundo para la familia roja y soporte editorial.",
      pairs: ["#DF3760", "#FFCB3E"], gradient: ["#641E28", "#DF3760"], textColor: "#FFFFFF"
    },
    {
      id: "violeta-principal", hex: "#4A0BAF", family: "oscuro", name: "Violeta principal",
      rgb: "74 · 11 · 175", cmyk: "58 · 94 · 0 · 31", cmykStatus: "Aproximado",
      pantone: "Pendiente de validación", pantoneStatus: "Pendiente",
      role: "Fondo dominante, navegación y superficies de máxima identidad.",
      pairs: ["#54CF88", "#7281F1"], gradient: ["#4A0BAF", "#7281F1"], textColor: "#FFFFFF"
    },
    {
      id: "verde-profundo", hex: "#325541", family: "oscuro", name: "Verde profundo",
      rgb: "50 · 85 · 65", cmyk: "41 · 0 · 24 · 67", cmykStatus: "Aproximado",
      pantone: "Pendiente de validación", pantoneStatus: "Pendiente",
      role: "Contraste oscuro para transiciones verdes y aplicaciones espaciales.",
      pairs: ["#54CF88", "#F5F694"], gradient: ["#325541", "#54CF88"], textColor: "#FFFFFF"
    },
    {
      id: "amarillo-intenso", hex: "#FFCB3E", family: "oscuro", name: "Amarillo intenso",
      rgb: "255 · 203 · 62", cmyk: "0 · 20 · 76 · 0", cmykStatus: "Aproximado",
      pantone: "Pendiente de validación", pantoneStatus: "Pendiente",
      role: "Titular y contraste dentro de la familia roja o magenta.",
      pairs: ["#641E28", "#DF3760"], gradient: ["#DF3760", "#FFCB3E"], textColor: "#641E28"
    },
    {
      id: "magenta-activo", hex: "#DF3760", family: "vibrante", name: "Magenta activo",
      rgb: "223 · 55 · 96", cmyk: "0 · 75 · 57 · 13", cmykStatus: "Aproximado",
      pantone: "Pendiente de validación", pantoneStatus: "Pendiente",
      role: "Energía, activación y transición de la familia roja.",
      pairs: ["#641E28", "#FFCB3E"], gradient: ["#641E28", "#DF3760"], textColor: "#FFFFFF"
    },
    {
      id: "azul-electrico", hex: "#7281F1", family: "vibrante", name: "Azul eléctrico",
      rgb: "114 · 129 · 241", cmyk: "53 · 46 · 0 · 5", cmykStatus: "Aproximado",
      pantone: "Pendiente de validación", pantoneStatus: "Pendiente",
      role: "Profundidad, etiquetas, numeraciones e indicadores secundarios.",
      pairs: ["#4A0BAF", "#54CF88"], gradient: ["#4A0BAF", "#7281F1"], textColor: "#FFFFFF"
    },
    {
      id: "verde-principal", hex: "#54CF88", family: "vibrante", name: "Verde principal",
      rgb: "84 · 207 · 136", cmyk: "59 · 0 · 34 · 19", cmykStatus: "Aproximado",
      pantone: "Pendiente de validación", pantoneStatus: "Pendiente",
      role: "Activación, titulares y superficies destacadas.",
      pairs: ["#4A0BAF", "#7281F1"], gradient: ["#54CF88", "#7281F1"], textColor: "#4A0BAF"
    },
    {
      id: "lima-luminosa", hex: "#F5F694", family: "vibrante", name: "Lima luminosa",
      rgb: "245 · 246 · 148", cmyk: "0 · 0 · 40 · 4", cmykStatus: "Aproximado",
      pantone: "Pendiente de validación", pantoneStatus: "Pendiente",
      role: "Luz, contraste y cierre de degradados verdes.",
      pairs: ["#325541", "#54CF88"], gradient: ["#54CF88", "#F5F694"], textColor: "#325541"
    },
    {
      id: "rosa-apoyo", hex: "#E19BA5", family: "apoyo", name: "Rosa de apoyo",
      rgb: "225 · 155 · 165", cmyk: "0 · 31 · 27 · 12", cmykStatus: "Aproximado",
      pantone: "Pendiente de validación", pantoneStatus: "Pendiente",
      role: "Apoyo monocromático y transición suave de la familia roja.",
      pairs: ["#641E28", "#DF3760"], gradient: ["#E19BA5", "#DF3760"], textColor: "#641E28"
    },
    {
      id: "azul-apoyo", hex: "#A4AFFE", family: "apoyo", name: "Azul de apoyo",
      rgb: "164 · 175 · 254", cmyk: "35 · 31 · 0 · 0", cmykStatus: "Aproximado",
      pantone: "Pendiente de validación", pantoneStatus: "Pendiente",
      role: "Apoyo monocromático para información y superficies suaves.",
      pairs: ["#4A0BAF", "#7281F1"], gradient: ["#A4AFFE", "#7281F1"], textColor: "#4A0BAF"
    },
    {
      id: "verde-apoyo", hex: "#98FFC3", family: "apoyo", name: "Verde de apoyo",
      rgb: "152 · 255 · 195", cmyk: "40 · 0 · 24 · 0", cmykStatus: "Aproximado",
      pantone: "Pendiente de validación", pantoneStatus: "Pendiente",
      role: "Apoyo monocromático y respiración en composiciones verdes.",
      pairs: ["#325541", "#54CF88"], gradient: ["#98FFC3", "#54CF88"], textColor: "#325541"
    },
    {
      id: "lima-apoyo", hex: "#FEFEDB", family: "apoyo", name: "Lima de apoyo",
      rgb: "254 · 254 · 219", cmyk: "0 · 0 · 14 · 0", cmykStatus: "Aproximado",
      pantone: "Pendiente de validación", pantoneStatus: "Pendiente",
      role: "Neutral cálido para fondos claros y piezas monocromáticas.",
      pairs: ["#325541", "#F5F694"], gradient: ["#FEFEDB", "#F5F694"], textColor: "#325541"
    }
  ],
  provenance: {
    hero: "existing-project-copy",
    context: "editorial-synthesis",
    problem: "editorial-synthesis",
    process: "editorial-synthesis",
    conclusion: "editorial-synthesis",
    keyVisualPhrase: "official-document",
    graphicSystem: "official-document"
  },
  officialSources: [
    "Key Visual Maratón Medellín 2026.pdf",
    "Visualizacion Recursos gráficos - Maraton Medellin 2026.pdf"
  ],
  distanceSystem: [
    {
      id: "42k", mark: "42K", name: "Distancia 42K", context: "Dorsal de carrera",
      description: "La numeración protagonista diferencia la pieza y conserva la arquitectura común del sistema.",
      gradient: ["#4A0BAF", "#7281F1"], accent: "#54CF88"
    },
    {
      id: "21k", mark: "21K", name: "Distancia 21K", context: "Dorsal de carrera",
      description: "El cambio cromático identifica la distancia sin alterar la jerarquía ni la estructura del dorsal.",
      gradient: ["#325541", "#54CF88"], accent: "#F5F694"
    },
    {
      id: "10k", mark: "10K", name: "Distancia 10K", context: "Dorsal de carrera",
      description: "La cifra funciona como señal de lectura inmediata dentro del lenguaje gráfico compartido.",
      gradient: ["#641E28", "#DF3760"], accent: "#FFCB3E"
    },
    {
      id: "5k", mark: "5K", name: "Distancia 5K", context: "Dorsal de carrera",
      description: "La versión compacta mantiene el impacto de Ziren y la diferenciación por color de la campaña.",
      gradient: ["#7281F1", "#4A0BAF"], accent: "#98FFC3"
    }
  ],
  modulePrinciples: [
    { id: "ritmo", label: "Ritmo", note: "Los anchos y alturas alternados crean un ritmo irregular sin perder unidad." },
    { id: "gradiente", label: "Gradiente", note: "Las transiciones verdes y amarillas aportan profundidad sin separar los módulos." },
    { id: "continuidad", label: "Continuidad", note: "La textura y la base cromática conectan la composición de extremo a extremo." }
  ],
  motion: {
    reveal: true,
    ambient: true,
    reducedMotionQuery: "(prefers-reduced-motion: reduce)"
  },
  moments: [
    {
      id: "campana",
      index: "01",
      nav: "Durante campaña",
      eyebrow: "Visibilidad y expectativa",
      title: "La ciudad empieza a correr antes del primer kilómetro.",
      description: "El sistema sale de la pantalla y ocupa redes, gran formato y puntos de contacto. Plano y aplicación se leen de forma simultánea.",
      layout: "campana",
      tone: "violet",
      accent: "#54CF88",
      contentRoot: "durante-campana",
      comparison: {
        title: "Valla de campaña",
        category: "Gran formato",
        description: "Una lectura inmediata de la pieza plana y su presencia dentro del paisaje urbano.",
        flat: { src: `${MM26_IMAGE_ROOT}/durante-campana/vallas/planos/valla-mm2026-plano.webp`, alt: "Diseño plano de la valla Maratón Medellín 2026", width: 3000, height: 1165 },
        mockup: { src: `${MM26_IMAGE_ROOT}/durante-campana/vallas/mockups/valla-mm2026-mockup.webp`, alt: "Mockup urbano de la valla Maratón Medellín 2026", width: 1672, height: 941 }
      },
      variants: [
        { id: "post-01", label: "Lanzamiento 01", type: "Publicación", src: `${MM26_IMAGE_ROOT}/durante-campana/redes-sociales/publicaciones/post-lanzamiento-01.webp`, alt: "Publicación de lanzamiento 01 Maratón Medellín 2026", width: 1081, height: 1351 },
        { id: "post-03", label: "Lanzamiento 03", type: "Publicación", src: `${MM26_IMAGE_ROOT}/durante-campana/redes-sociales/publicaciones/post-lanzamiento-03.webp`, alt: "Publicación de distancias Maratón Medellín 2026", width: 1081, height: 1351 },
        { id: "post-05", label: "Lanzamiento 05", type: "Publicación", src: `${MM26_IMAGE_ROOT}/durante-campana/redes-sociales/publicaciones/post-lanzamiento-05.webp`, alt: "Publicación de campaña 05 Maratón Medellín 2026", width: 1081, height: 1351 }
      ],
      pending: ["Historias", "Futuras piezas exteriores"]
    },
    {
      id: "exporunners",
      index: "02",
      nav: "Feria",
      eyebrow: "Orientar, recibir, conectar",
      title: "La identidad se convierte en espacio y servicio.",
      description: "El sistema informa y acompaña mediante credenciales diferenciadas por rol, con plano y aplicación siempre enfrentados.",
      layout: "exporunners",
      tone: "green",
      accent: "#4A0BAF",
      contentRoot: "exporunners",
      roles: [
        ["staff", "Staff"], ["prensa", "Prensa"], ["expositor", "Expositor"],
        ["organizacion", "Organización"], ["fotografo", "Fotógrafo"],
        ["patrocinador", "Patrocinador"], ["all-access", "All Access"]
      ].map(([id, label]) => ({
        id, label,
        flat: { src: `${MM26_IMAGE_ROOT}/exporunners/escarapelas/planos/escarapela-${id}.webp`, alt: `Diseño plano de la escarapela ${label} Maratón Medellín 2026`, width: 621, height: 798 },
        mockup: { src: `${MM26_IMAGE_ROOT}/exporunners/escarapelas/mockups/escarapela-${id}.webp`, alt: `Mockup de la escarapela ${label} Maratón Medellín 2026`, width: 1920, height: 1080 }
      })),
      pending: ["Backings", "Tótems", "Panelería", "Stand", "Punto de información"]
    },
    {
      id: "carrera",
      index: "03",
      nav: "Carrera",
      eyebrow: "El sistema entra en movimiento",
      title: "Cada corredor activa una versión distinta de la identidad.",
      description: "Dorsales y bolsa de kit se organizan por tipo y variante para comparar diseño plano y aplicación sin alargar la página.",
      layout: "carrera",
      tone: "red",
      accent: "#FFCB3E",
      contentRoot: "dia-carrera",
      pieceTypes: [
        {
          id: "dorsal", label: "Dorsal", description: "El código cromático diferencia distancias manteniendo una arquitectura común.",
          variants: ["42k", "21k", "10k", "5k"].map((id) => ({
            id, label: id.toUpperCase(),
            flat: { src: `${MM26_IMAGE_ROOT}/dia-carrera/numero-dorsal/planos/numero-${id}.webp`, alt: `Diseño plano del dorsal ${id.toUpperCase()} Maratón Medellín 2026`, width: 2434, height: id === "21k" || id === "10k" ? 2009 : 2008 },
            mockup: { src: `${MM26_IMAGE_ROOT}/dia-carrera/numero-dorsal/mockups/numero-${id}-mockup.webp`, alt: `Aplicación del dorsal ${id.toUpperCase()} Maratón Medellín 2026`, width: 1672, height: 941 }
          }))
        },
        {
          id: "bolsa", label: "Bolsa", description: "Frente y reverso de la bolsa se presentan con su plano y aplicación contextual.",
          variants: [
            { id: "frente", label: "Frente", flat: { src: `${MM26_IMAGE_ROOT}/dia-carrera/bolsa-kit/planos/bolsa-kit-retiro.webp`, alt: "Diseño plano frontal de la bolsa del kit Maratón Medellín 2026", width: 2000, height: 2609 }, mockup: { src: `${MM26_IMAGE_ROOT}/dia-carrera/bolsa-kit/mockups/bolsa-kit-retiro-mockup.webp`, alt: "Mockup frontal de la bolsa del kit Maratón Medellín 2026", width: 1672, height: 941 } },
            { id: "reverso", label: "Reverso", flat: { src: `${MM26_IMAGE_ROOT}/dia-carrera/bolsa-kit/planos/bolsa-kit-tiro.webp`, alt: "Diseño plano posterior de la bolsa del kit Maratón Medellín 2026", width: 2000, height: 2609 }, mockup: { src: `${MM26_IMAGE_ROOT}/dia-carrera/bolsa-kit/mockups/bolsa-kit-tiro-mockup.webp`, alt: "Mockup posterior de la bolsa del kit Maratón Medellín 2026", width: 1672, height: 941 } }
          ]
        },
        {
          id: "futuras", label: "Próximas", description: "Espacio preparado para aplicaciones aún no incorporadas.",
          pending: ["Camiseta", "Cinta de meta", "Kilometraje", "Podio"]
        }
      ]
    }
  ]
};
