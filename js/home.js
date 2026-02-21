document.addEventListener('click', function (e) {

  const toggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');

  if (!toggle || !navLinks) return;

  if (e.target.closest('#navToggle')) {
    navLinks.classList.toggle('active');
  }

  if (e.target.closest('.nav-links a')) {
    navLinks.classList.remove('active');
  }
});

// Smooth scroll
document.addEventListener('click', function (e) {
  const link = e.target.closest('.nav-links a');
  if (!link) return;

  e.preventDefault();

  const targetId = link.getAttribute('href').replace('#', '');
  const targetSection = document.getElementById(targetId);

  if (targetSection) {
    targetSection.scrollIntoView({
      behavior: 'smooth'
    });
  }
});
