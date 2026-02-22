
// document.addEventListener("DOMContentLoaded", () => {

//   document.querySelectorAll(".skill").forEach(skill => {
//     const path = skill.querySelector(".hex-progress");
//     const percentEl = skill.querySelector(".percent");
//     const value = skill.dataset.percent;

//     const length = path.getTotalLength();

//     gsap.set(path, {
//       strokeDasharray: length,
//       strokeDashoffset: length
//     });

//     skill.addEventListener("mouseenter", () => {
//       percentEl.textContent = value + "%";

//       gsap.to(path, {
//         strokeDashoffset: length * (1 - value / 100),
//         duration: 1.2,
//         ease: "power2.out"
//       });

//       gsap.to(percentEl, {
//         opacity: 1,
//         y: 0,
//         duration: 0.3
//       });
//     });

//     skill.addEventListener("mouseleave", () => {
//       gsap.to(path, {
//         strokeDashoffset: length,
//         duration: 0.6,
//         ease: "power2.in"
//       });

//       gsap.to(percentEl, {
//         opacity: 0,
//         y: 6,
//         duration: 0.3,
//         onComplete: () => percentEl.textContent = ""
//       });
//     });
//   });

// });