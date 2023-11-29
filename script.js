let tl = gsap.timeline({ Defaults: { Easing: Expo.EaseOut } });

tl.from(".bg", {
  scale: 0.6,
  duration: 2,
  opacity: 0,
  ease: Expo.easeOut,
  delay: 0.2
})
  .to(
    ".text-reveal",
    {
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      y: 0,
      stagger: 0.3,
      duration: 1
    },
    "-=2.9"
  )
  .to(".text-reveal", {
    clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
    y: -200,
    duration: 0.2,
    delay: 0.5
  })
  .to(".text-reveal", {
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
    stagger: 0.3,
    duration: 0.3,
    delay: 0.5
  })
  .to("svg", { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", y: -150 })
  .to(
    ".local",
    {
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      y: 0,
      stagger: 0.3,
      opacity: 1,
      duration: 1
    },
    "-=1.4"
  );
