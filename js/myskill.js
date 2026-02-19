document.querySelectorAll(".skill").forEach(skill => {
  const percent = Number(skill.dataset.percent);
  const path = skill.querySelector(".hex-progress");
  const text = skill.querySelector(".percent");

  const length = path.getTotalLength();

  // initial hidden state
  path.style.strokeDasharray = length;
  path.style.strokeDashoffset = length;

  let animated = false;

  skill.addEventListener("mouseenter", () => {
    if (animated) return;
    animated = true;

    // faster stroke animation
    gsap.to(path, {
      strokeDashoffset: length * (1 - percent / 100),
      duration: 0.6,          // 🔥 reduced from 1.4
      ease: "power1.out"
    });

    // faster number count
    gsap.fromTo(
      { value: 0 },
      { value: percent },
      {
        duration: 0.6,        // 🔥 reduced from 1.4
        ease: "power1.out",
        onUpdate() {
          text.textContent =
            Math.round(this.targets()[0].value) + "%";
        }
      }
    );
  });
});
