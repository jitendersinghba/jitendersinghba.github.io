gsap.registerPlugin(ScrollTrigger);

gsap.to(".curve-transition", {
  y: 0,
  opacity: 1,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".projects-section",
    start: "bottom bottom",
    scrub: true,
  }
});
