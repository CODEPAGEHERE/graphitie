// Global event listener (works with dynamic mounting)
document.addEventListener("submit", function (e) {

  if (e.target && e.target.id === "contactForm") {

    e.preventDefault();

    const popup = document.getElementById("contactPopup");

    if (!popup) return;

    popup.classList.add("active");

    launchConfetti();

    e.target.reset();
  }
});

// Close popup
document.addEventListener("click", function (e) {

  if (e.target && e.target.id === "closePopup") {
    document.getElementById("contactPopup").classList.remove("active");
  }

  if (e.target && e.target.classList.contains("contact-popup")) {
    document.getElementById("contactPopup").classList.remove("active");
  }

});


// Confetti
function launchConfetti() {
  const duration = 1200;
  const end = Date.now() + duration;

  (function frame() {
    confetti({
      particleCount: 6,
      spread: 70,
      origin: { y: 0.6 }
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();
}
