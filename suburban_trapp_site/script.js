const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".main-nav");
menuToggle?.addEventListener("click", () => {
  const expanded = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!expanded));
  menuToggle.setAttribute(
    "aria-label",
    expanded ? "Open navigation" : "Close navigation",
  );
  nav.classList.toggle("open", !expanded);
});
nav?.querySelectorAll("a").forEach((link) =>
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle?.setAttribute("aria-expanded", "false");
    menuToggle?.setAttribute("aria-label", "Open navigation");
  }),
);

document.getElementById("year").textContent = new Date().getFullYear();
const toast = document.querySelector(".toast");
let toastTimer;
function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 3200);
}
document.querySelectorAll("[data-placeholder]").forEach((link) =>
  link.addEventListener("click", (event) => {
    event.preventDefault();
    showToast(
      `${link.dataset.placeholder}: add the official link before launch.`,
    );
  }),
);

const form = document.getElementById("contactForm");
form?.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const subject = encodeURIComponent(
    `${data.get("topic")} — SUBURBAN KIDD / INSPIRED BY TRAPP`,
  );
  const body = encodeURIComponent(
    `Name: ${data.get("name")}\nEmail: ${data.get("email")}\nTopic: ${data.get("topic")}\n\n${data.get("message")}`,
  );
  const contactEmail = "jon.folse.tech@gmail.com";
  window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
});

const revealTargets = document.querySelectorAll(
  ".release, .story-copy, .story-image, .visual, .product, .event-placeholder, .contact-form",
);
revealTargets.forEach((el) => el.classList.add("reveal"));
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
  revealTargets.forEach((el) => observer.observe(el));
} else {
  revealTargets.forEach((el) => el.classList.add("visible"));
}
