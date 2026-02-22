
// document.addEventListener("DOMContentLoaded", () => {
//   const track = document.querySelector('.carousel-track');
//   const slides = document.querySelectorAll('.carousel-item');
//   const nextBtn = document.querySelector('.carousel-btn.right');
//   const prevBtn = document.querySelector('.carousel-btn.left');

//   if (!track || slides.length === 0) {
//     console.error("Carousel elements not found");
//     return;
//   }

//   let index = 0;

//   function moveSlide() {
//     track.style.transform = `translateX(-${index * 100}%)`;
//   }

//   nextBtn.addEventListener('click', () => {
//     index = (index + 1) % slides.length;
//     moveSlide();
//   });

//   prevBtn.addEventListener('click', () => {
//     index = (index - 1 + slides.length) % slides.length;
//     moveSlide();
//   });
// });