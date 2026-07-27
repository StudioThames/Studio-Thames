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
function updateHeader() {
  header.classList.toggle("scrolled", window.scrollY > 40);
}
updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));

const film = document.querySelector(".film-card video");
const audioToggle = document.querySelector("[data-audio-toggle]");
const audioLabel = document.querySelector("[data-audio-label]");

function updateAudioButton() {
  if (film.paused || film.ended) {
    audioLabel.textContent = "Play with sound";
    audioToggle.setAttribute("aria-label", "Play film with sound");
    return;
  }

  const soundIsOn = !film.muted && film.volume > 0;
  audioLabel.textContent = soundIsOn ? "Sound on" : "Play with sound";
  audioToggle.setAttribute("aria-label", soundIsOn ? "Mute film" : "Play film with sound");
}

audioToggle.addEventListener("click", async () => {
  if (film.paused || film.ended) {
    film.muted = false;
    film.volume = 1;
    try {
      await film.play();
    } catch {
      film.muted = true;
      audioLabel.textContent = "Tap again for sound";
      return;
    }
    updateAudioButton();
    return;
  }

  if (!film.muted && film.volume > 0) {
    film.muted = true;
  } else {
    film.muted = false;
    film.volume = 1;
    try {
      await film.play();
    } catch {
      film.muted = true;
      audioLabel.textContent = "Tap again for sound";
      return;
    }
  }
  updateAudioButton();
});

film.addEventListener("play", updateAudioButton);
film.addEventListener("pause", updateAudioButton);
film.addEventListener("volumechange", updateAudioButton);
film.addEventListener("ended", updateAudioButton);
updateAudioButton();

const lightboxItems = [...document.querySelectorAll("[data-lightbox]")];
const lightbox = document.querySelector("[data-lightbox-dialog]");
const lightboxImage = lightbox.querySelector("[data-lightbox-image]");
const lightboxCaption = lightbox.querySelector("[data-lightbox-caption]");
const lightboxCount = lightbox.querySelector("[data-lightbox-count]");
let lightboxIndex = 0;
let lightboxReturnFocus = null;
let touchStartX = 0;

function showLightboxItem(index) {
  lightboxIndex = (index + lightboxItems.length) % lightboxItems.length;
  const item = lightboxItems[lightboxIndex];
  lightboxImage.src = item.dataset.src;
  lightboxImage.alt = item.getAttribute("aria-label").replace(/^Enlarge\s+/i, "");
  lightboxCaption.textContent = item.dataset.caption;
  lightboxCount.textContent = `${lightboxIndex + 1} / ${lightboxItems.length}`;
}

function openLightbox(index, trigger) {
  lightboxReturnFocus = trigger;
  showLightboxItem(index);
  lightbox.hidden = false;
  body.classList.add("modal-open");
  lightbox.querySelector("[data-lightbox-close]").focus();
}

function closeLightbox() {
  lightbox.hidden = true;
  body.classList.remove("modal-open");
  lightboxImage.src = "";
  lightboxReturnFocus?.focus();
}

lightboxItems.forEach((item, index) => {
  item.addEventListener("click", () => openLightbox(index, item));
  item.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openLightbox(index, item);
    }
  });
});

lightbox.querySelector("[data-lightbox-close]").addEventListener("click", closeLightbox);
lightbox.querySelector("[data-lightbox-prev]").addEventListener("click", () => showLightboxItem(lightboxIndex - 1));
lightbox.querySelector("[data-lightbox-next]").addEventListener("click", () => showLightboxItem(lightboxIndex + 1));
lightbox.addEventListener("click", (event) => { if (event.target === lightbox) closeLightbox(); });
lightboxImage.addEventListener("touchstart", (event) => { touchStartX = event.changedTouches[0].clientX; }, { passive: true });
lightboxImage.addEventListener("touchend", (event) => {
  const distance = event.changedTouches[0].clientX - touchStartX;
  if (Math.abs(distance) > 45) showLightboxItem(lightboxIndex + (distance < 0 ? 1 : -1));
}, { passive: true });

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    if (!lightbox.hidden) closeLightbox();
    else setMenu(false);
  }
  if (!lightbox.hidden && event.key === "ArrowLeft") showLightboxItem(lightboxIndex - 1);
  if (!lightbox.hidden && event.key === "ArrowRight") showLightboxItem(lightboxIndex + 1);
});

const form = document.querySelector("[data-contact-form]");
form.addEventListener("submit", (event) => {
  if (form.action.endsWith("#")) {
    event.preventDefault();
    form.querySelector(".form-status").textContent = "Your form is designed and ready. Connect Formspree using the README instructions to receive messages.";
  }
});
document.querySelector("[data-year]").textContent = new Date().getFullYear();
