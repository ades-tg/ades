document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.getElementById("main-nav");
  if (!toggle || !nav) return;
  toggle.addEventListener("click", function (e) {
    e.preventDefault();
    e.stopPropagation();
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    toggle.setAttribute(
      "aria-label",
      open ? "Fermer le menu" : "Ouvrir le menu",
    );
    toggle.innerHTML = open ? "×" : "☰";
  });
  nav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Ouvrir le menu");
      toggle.innerHTML = "☰";
    });
  });
  document.addEventListener("click", function (e) {
    if (
      nav.classList.contains("open") &&
      !nav.contains(e.target) &&
      !toggle.contains(e.target)
    ) {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.innerHTML = "☰";
    }
  });
  // Année du footer — seulement si #year existe
  const year = document.querySelector("#year");

  if (year) {
    year.textContent = new Date().getFullYear();
  }
});
