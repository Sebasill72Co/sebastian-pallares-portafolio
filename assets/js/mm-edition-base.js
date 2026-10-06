(function () {
  "use strict";

  const config = window.MM_EDITION_CONFIG;
  if (!config) return;

  const root = document.documentElement;
  const theme = config.theme || {};
  const variables = {
    "--mm-ed-bg": theme.background,
    "--mm-ed-surface": theme.surface,
    "--mm-ed-text": theme.text,
    "--mm-ed-muted": theme.muted,
    "--mm-ed-line": theme.line,
    "--mm-ed-accent": theme.accent,
    "--mm-ed-accent-text": theme.accentText,
    "--mm-editions-bg": theme.surface,
    "--mm-editions-text": theme.text,
    "--mm-editions-border": theme.line,
    "--mm-editions-hover-bg": theme.background,
    "--mm-editions-hover-text": theme.accent,
    "--mm-editions-active-bg": theme.accent,
    "--mm-editions-active-text": theme.accentText
  };

  Object.entries(variables).forEach(([name, value]) => {
    if (value) root.style.setProperty(name, value);
  });

  document.querySelectorAll("[data-edition-value]").forEach((node) => {
    node.textContent = String(config.edition);
  });

  document.querySelectorAll("[data-current-year]").forEach((node) => {
    node.textContent = String(new Date().getFullYear());
  });

  const currentEdition = document.querySelector('.edition-archive__years [aria-current="page"]');
  if (currentEdition) {
    const track = currentEdition.parentElement;
    let frame = 0;

    const alignCurrentEdition = () => {
      const left = currentEdition.offsetLeft - (track.clientWidth - currentEdition.offsetWidth) / 2;
      track.scrollLeft = Math.max(0, left);
      frame = 0;
    };

    const requestAlignment = () => {
      if (frame) window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(alignCurrentEdition);
    };

    requestAlignment();
    window.addEventListener("resize", requestAlignment, { passive: true });
  }
})();
