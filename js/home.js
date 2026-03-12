document.addEventListener("DOMContentLoaded", function () {
  const navOpen = document.getElementById("navOpen");
  const navClose = document.getElementById("navClose");
  const navLinks = document.getElementById("navLinks");
  const body = document.body;

  if (!navOpen || !navClose || !navLinks) return;

  function openNavMenu() {
    navLinks.classList.add("active");
    body.classList.add("menu-open");
  }

  function closeNavMenu() {
    navLinks.classList.remove("active");
    body.classList.remove("menu-open");
  }

  navOpen.addEventListener("click", openNavMenu);
  navClose.addEventListener("click", closeNavMenu);

  navLinks.addEventListener("click", function (e) {
    if (e.target.tagName === "A") {
      closeNavMenu();
    }
  });

  // Close on scroll - still useful even if page scrolls
  window.addEventListener("scroll", function () {
    if (navLinks.classList.contains("active")) {
      closeNavMenu();
    }
  }, { passive: true });
});