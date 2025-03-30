gsap.to(".hex1", { rotation: 360, duration: 5, repeat: -1, ease: "power2.inOut" });
gsap.to(".hex2", { rotation: 360, duration: 4, repeat: -1, ease: "power2.inOut", delay: 1 });
gsap.to(".hex3", { rotation: 360, duration: 6, repeat: -1, ease: "power2.inOut", delay: 2 });

gsap.to(".hex1", { y: "-20px", duration: 2, repeat: -1, yoyo: true, ease: "power1.inOut" });
gsap.to(".hex2", { y: "20px", duration: 2.5, repeat: -1, yoyo: true, ease: "power1.inOut", delay: 0.5 });
gsap.to(".hex3", { y: "-15px", duration: 3, repeat: -1, yoyo: true, ease: "power1.inOut", delay: 1 });




gsap.to(".hexagon", {
    y: -20,
    duration: 1.5,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut",
    stagger: 0.3
});
