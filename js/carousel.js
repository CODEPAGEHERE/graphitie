document.addEventListener("DOMContentLoaded", function () {

  const track = document.querySelector(".carousel-track");
  const slides = document.querySelectorAll(".carousel-item");
  const nextBtn = document.querySelector(".carousel-btn.right");
  const prevBtn = document.querySelector(".carousel-btn.left");

  let index = 0;
  const total = slides.length;

  function updateSlide() {
    track.style.transform = `translateX(-${index * 100}%)`;
  }

  nextBtn.addEventListener("click", function () {
    index = (index + 1) % total;
    updateSlide();
  });

  prevBtn.addEventListener("click", function () {
    index = (index - 1 + total) % total;
    updateSlide();
  });

});