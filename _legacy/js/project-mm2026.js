const progress = document.getElementById("reading-progress");
const header = document.getElementById("project-header");
const heroImage = document.querySelector(".hero-media img");
const revealItems = document.querySelectorAll(".reveal");
const year = document.getElementById("year");

function updatePage() {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const progressValue = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;

  if (progress) progress.style.width = `${progressValue}%`;
  if (header) header.classList.toggle("is-scrolled", window.scrollY > 24);

  if (heroImage && window.scrollY < window.innerHeight) {
    heroImage.style.transform = `scale(1.04) translateY(${window.scrollY * 0.055}px)`;
  }
}

function createMissingState(image) {
  const parent = image.parentElement;
  if (!parent || parent.querySelector(".media-missing")) return;

  image.remove();
  const message = document.createElement("div");
  message.className = "media-missing";
  message.textContent = "Recurso pendiente o ruta por verificar";
  parent.appendChild(message);
}

document.querySelectorAll("img").forEach((image) => {
  image.addEventListener("error", () => {
    const fallback = image.dataset.fallback;

    if (fallback && image.src !== new URL(fallback, window.location.href).href) {
      image.src = fallback;
      image.removeAttribute("data-fallback");
      return;
    }

    createMissingState(image);
  });
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

revealItems.forEach((item) => observer.observe(item));

window.addEventListener("scroll", updatePage, { passive: true });

if (year) year.textContent = new Date().getFullYear();

updatePage();
