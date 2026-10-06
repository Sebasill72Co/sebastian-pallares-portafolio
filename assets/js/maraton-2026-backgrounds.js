/* Configuraciones MM2026 para el laboratorio. El motor no contiene identidad visual. */
window.ATLAS_DYNAMIC_BACKGROUNDS = {
  "mm2026-primary-lab": {
    variant: "primary",
    tokens: {
      "mm26-base-top": "#641E28",
      "mm26-base-bottom": "#3E1730",
      "mm26-purple": "#4A0BAE",
      "mm26-blue": "#7281F1",
      "mm26-green": "#54CF88",
      "mm26-lime": "#F5F694",
      "mm26-pink": "#DF3760",
      "mm26-red": "#641E28",
      "mm26-yellow": "#FFCB3E",
      "mm26-dark": "#325541"
    },
    base: {
      color: "var(--mm26-base-top)",
      start: "var(--mm26-base-top)",
      end: "var(--mm26-base-bottom)",
      angle: "180deg"
    },
    noise: {
      opacity: ".8"
    },
    breakpoints: {
      desktop: {
        minWidth: 1200,
        columns: [
          {
            weight: .76,
            top: { height: 28, gradient: ["red", "pink", "purple"], opacity: .92, motion: [3.2, 27, -8] }
          },
          {
            weight: 1.08,
            bottom: { height: 66, gradient: ["dark", "green", "lime"], opacity: .96, motion: [4.6, 34, -17] }
          },
          {
            weight: .84,
            top: { height: 43, gradient: ["purple", "blue", "pink"], opacity: .94, motion: [2.8, 31, -12] },
            bottom: { height: 20, gradient: ["red", "pink", "yellow"], opacity: .9, motion: [3.4, 23, -4] }
          },
          { weight: 1.27 },
          {
            weight: .68,
            bottom: { height: 78, gradient: ["purple", "blue", "green"], opacity: .95, motion: [5.2, 38, -21] }
          },
          {
            weight: 1.03,
            top: { height: 35, gradient: ["dark", "green", "blue"], opacity: .91, motion: [3.6, 29, -15] }
          },
          {
            weight: 1.18,
            top: { height: 18, gradient: ["red", "pink", "yellow"], opacity: .88, motion: [2.4, 25, -6] },
            bottom: { height: 54, gradient: ["red", "pink", "lime"], opacity: .96, motion: [4.2, 36, -19] }
          },
          {
            weight: .79,
            bottom: { height: 39, gradient: ["dark", "green", "lime"], opacity: .92, motion: [3, 32, -10] }
          },
          {
            weight: 1.32,
            top: { height: 56, gradient: ["purple", "blue", "green"], opacity: .96, motion: [4.8, 37, -23] }
          },
          {
            weight: .65,
            top: { height: 22, gradient: ["red", "pink", "purple"], opacity: .9, motion: [2.6, 24, -13] },
            bottom: { height: 49, gradient: ["red", "pink", "yellow"], opacity: .95, motion: [3.8, 33, -7] }
          },
          { weight: 1.01 },
          {
            weight: .89,
            bottom: { height: 72, gradient: ["purple", "blue", "green"], opacity: .94, motion: [4.4, 35, -16] }
          }
        ]
      },
      tablet: {
        minWidth: 768,
        amplitudeFactor: .78,
        durationFactor: 1.12,
        columns: [
          { weight: .86, top: { height: 31, gradient: ["red", "pink", "purple"], opacity: .92, motion: [3, 30, -8] } },
          { weight: 1.16, bottom: { height: 63, gradient: ["dark", "green", "lime"], opacity: .96, motion: [4.2, 36, -17] } },
          { weight: .82, top: { height: 48, gradient: ["purple", "blue", "pink"], opacity: .94, motion: [2.8, 34, -12] }, bottom: { height: 17, gradient: ["red", "pink", "yellow"], opacity: .9, motion: [3, 26, -4] } },
          { weight: 1.3 },
          { weight: .73, bottom: { height: 75, gradient: ["purple", "blue", "green"], opacity: .95, motion: [4.8, 40, -21] } },
          { weight: 1.08, top: { height: 37, gradient: ["dark", "green", "blue"], opacity: .91, motion: [3.2, 32, -15] } },
          { weight: 1.22, top: { height: 19, gradient: ["red", "pink", "yellow"], opacity: .88, motion: [2.2, 28, -6] }, bottom: { height: 51, gradient: ["red", "pink", "lime"], opacity: .96, motion: [3.8, 38, -19] } },
          { weight: .82, bottom: { height: 42, gradient: ["dark", "green", "lime"], opacity: .92, motion: [2.8, 35, -10] } },
          { weight: 1.36, top: { height: 53, gradient: ["purple", "blue", "green"], opacity: .96, motion: [4.4, 39, -23] } },
          { weight: .65, bottom: { height: 68, gradient: ["red", "pink", "yellow"], opacity: .95, motion: [3.6, 36, -7] } }
        ]
      },
      mobile: {
        minWidth: 0,
        amplitudeFactor: .58,
        durationFactor: 1.25,
        columns: [
          { weight: .9, top: { height: 34, gradient: ["red", "pink", "purple"], opacity: .93, motion: [2.8, 33, -8] } },
          { weight: 1.18, bottom: { height: 61, gradient: ["dark", "green", "lime"], opacity: .96, motion: [3.8, 38, -17] } },
          { weight: .88, top: { height: 45, gradient: ["purple", "blue", "pink"], opacity: .95, motion: [2.5, 36, -12] }, bottom: { height: 18, gradient: ["red", "pink", "yellow"], opacity: .9, motion: [2.8, 31, -4] } },
          { weight: 1.28 },
          { weight: .82, bottom: { height: 73, gradient: ["purple", "blue", "green"], opacity: .95, motion: [4.2, 42, -21] } },
          { weight: 1.12, top: { height: 38, gradient: ["dark", "green", "blue"], opacity: .92, motion: [3, 35, -15] } },
          { weight: 1.25, top: { height: 20, gradient: ["red", "pink", "yellow"], opacity: .89, motion: [2.2, 32, -6] }, bottom: { height: 50, gradient: ["red", "pink", "lime"], opacity: .96, motion: [3.4, 40, -19] } },
          { weight: .9, bottom: { height: 44, gradient: ["dark", "green", "lime"], opacity: .93, motion: [2.6, 37, -10] } }
        ]
      }
    }
  }
};
