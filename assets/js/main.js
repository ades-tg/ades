document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector("#main-nav");

  // Menu mobile
  if (toggle && nav) {
    toggle.addEventListener("click", function (event) {
      event.preventDefault();
      event.stopPropagation();

      nav.classList.toggle("open");

      const isOpen = nav.classList.contains("open");

      toggle.setAttribute(
        "aria-label",
        isOpen ? "Fermer le menu" : "Ouvrir le menu",
      );

      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");

      toggle.textContent = isOpen ? "×" : "☰";
    });

    // Fermer le menu après avoir cliqué sur un lien
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("open");

        toggle.setAttribute("aria-label", "Ouvrir le menu");
        toggle.setAttribute("aria-expanded", "false");
        toggle.textContent = "☰";
      });
    });

    // Fermer si on clique en dehors du menu
    document.addEventListener("click", function (event) {
      if (
        nav.classList.contains("open") &&
        !nav.contains(event.target) &&
        !toggle.contains(event.target)
      ) {
        nav.classList.remove("open");

        toggle.setAttribute("aria-label", "Ouvrir le menu");
        toggle.setAttribute("aria-expanded", "false");
        toggle.textContent = "☰";
      }
    });
  }

  // Année du footer — seulement si #year existe
  const year = document.querySelector("#year");

  if (year) {
    year.textContent = new Date().getFullYear();
  }
});
