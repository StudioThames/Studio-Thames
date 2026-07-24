const body = document.body;
const header = document.querySelector("[data-header]");
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".site-nav a");

function setMenu(open) {
  body.classList.toggle("menu-open", open);
  navToggle.setAttribute("aria-expanded", String(open));
  navToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
}

navToggle.addEventListener("click", () => setMenu(!body.classList.contains("menu-open")));
navLinks.forEach((link) => link.addEventListener("click", () => setMenu(false)));
window.addEventListener("scroll", () => header.classList.toggle("scrolled", window.scrollY > 40), { passive: true });

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));

document.addEventListener("keydown", (event) => { if (event.key === "Escape") setMenu(false); });

const form = document.querySelector("[data-contact-form]");
form.addEventListener("submit", (event) => {
  if (form.action.endsWith("#")) {
    event.preventDefault();
    form.querySelector(".form-status").textContent = "Your form is designed and ready. Connect Formspree using the README instructions to receive messages.";
  }
});
document.querySelector("[data-year]").textContent = new Date().getFullYear();
