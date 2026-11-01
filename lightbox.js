
document.addEventListener("DOMContentLoaded", () => {
  // Automatically find project cover and gallery images
  const images = document.querySelectorAll(
    ".gallery img, .page-hero + div img, .expandable-image"
  );

  if (!images.length) return;

  // Create the lightbox automatically
  const lightbox = document.createElement("div");
  lightbox.className = "lightbox";
  lightbox.setAttribute("role", "dialog");
  lightbox.setAttribute("aria-modal", "true");
  lightbox.setAttribute("aria-label", "Expanded project image");

  lightbox.innerHTML = `
    <button class="lightbox-close" type="button"
            aria-label="Close image">&times;</button>
    <img class="lightbox-image" alt="">
  `;

  document.body.appendChild(lightbox);

  const enlargedImage = lightbox.querySelector(".lightbox-image");
  const closeButton = lightbox.querySelector(".lightbox-close");

  let lastFocused = null;

  function openLightbox(image) {
    lastFocused = document.activeElement;

    enlargedImage.src = image.src;
    enlargedImage.alt = image.alt;

    lightbox.classList.add("active");
    document.body.classList.add("lightbox-open");

    closeButton.focus();
  }

  function closeLightbox() {
    lightbox.classList.remove("active");
    document.body.classList.remove("lightbox-open");
    enlargedImage.removeAttribute("src");

    if (lastFocused && typeof lastFocused.focus === "function") {
      lastFocused.focus();
    }
  }

  images.forEach(image => {
    image.classList.add("expandable-image");
    image.setAttribute("tabindex", "0");
    image.setAttribute("role", "button");

    image.addEventListener("click", () => openLightbox(image));

    image.addEventListener("keydown", event => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openLightbox(image);
      }
    });
  });

  closeButton.addEventListener("click", closeLightbox);

  lightbox.addEventListener("click", event => {
    if (event.target === lightbox) closeLightbox();
  });

  document.addEventListener("keydown", event => {
    if (!lightbox.classList.contains("active")) return;

    if (event.key === "Escape") {
      closeLightbox();
    }

    if (event.key === "Tab") {
      event.preventDefault();
      closeButton.focus();
    }
  });
});
