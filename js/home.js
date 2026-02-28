document.addEventListener("DOMContentLoaded", function () {

  const navOpen = document.getElementById("navOpen");
  const navClose = document.getElementById("navClose");
  const navLinks = document.getElementById("navLinks");
  const body = document.body;

  if (!navOpen || !navClose || !navLinks) return;

  // OPEN
  navOpen.addEventListener("click", function () {
    navLinks.classList.add("active");
    body.classList.add("menu-open");
  });

  // CLOSE
  navClose.addEventListener("click", function () {
    navLinks.classList.remove("active");
    body.classList.remove("menu-open");
  });

  // Close when link clicked
  navLinks.addEventListener("click", function (e) {
    if (e.target.tagName === "A") {
      navLinks.classList.remove("active");
      body.classList.remove("menu-open");
    }
  });

  // Close on scroll
  window.addEventListener("scroll", function () {
    if (body.classList.contains("menu-open")) {
      navLinks.classList.remove("active");
      body.classList.remove("menu-open");
    }
  });

});