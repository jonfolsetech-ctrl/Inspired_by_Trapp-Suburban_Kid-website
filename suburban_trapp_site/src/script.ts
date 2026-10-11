const menuToggle = document.querySelector<HTMLButtonElement>(".menu-toggle");
const nav = document.querySelector<HTMLElement>(".main-nav");

menuToggle?.addEventListener("click", () => {
  const expanded = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!expanded));
  menuToggle.setAttribute(
    "aria-label",
    expanded ? "Open navigation" : "Close navigation",
  );
  nav?.classList.toggle("open", !expanded);
});

nav?.querySelectorAll<HTMLAnchorElement>("a").forEach((link) =>
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle?.setAttribute("aria-expanded", "false");
    menuToggle?.setAttribute("aria-label", "Open navigation");
  }),
);

const year = document.getElementById("year");
if (year) year.textContent = String(new Date().getFullYear());

const toast = document.querySelector<HTMLElement>(".toast");
let toastTimer: ReturnType<typeof setTimeout>;

function showToast(message: string): void {
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 3200);
}

document
  .querySelectorAll<HTMLAnchorElement>("[data-placeholder]")
  .forEach((link) =>
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const label = link.dataset.placeholder;
      if (label) showToast(`${label}: add the official link before launch.`);
    }),
  );

const form = document.querySelector<HTMLFormElement>("#contactForm");
form?.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const subject = encodeURIComponent(
    `${String(data.get("topic") ?? "")} — SUBURBAN KIDD / INSPIRED BY TRAPP`,
  );
  const body = encodeURIComponent(
    `Name: ${String(data.get("name") ?? "")}\nEmail: ${String(data.get("email") ?? "")}\nTopic: ${String(data.get("topic") ?? "")}\n\n${String(data.get("message") ?? "")}`,
  );
  window.location.href = `mailto:jon.folse.tech@gmail.com?subject=${subject}&body=${body}`;
});

const revealTargets = document.querySelectorAll<HTMLElement>(
  ".release, .story-copy, .story-image, .visual, .product, .event-placeholder, .contact-form",
);
revealTargets.forEach((element) => element.classList.add("reveal"));

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 },
  );
  revealTargets.forEach((element) => observer.observe(element));
} else {
  revealTargets.forEach((element) => element.classList.add("visible"));
}
