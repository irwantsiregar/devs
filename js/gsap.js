gsap.registerPlugin(TextPlugin);
gsap.to('.skills', {
  duration: 1,
  duration: 2,
  delay: 1.5,
  text: "Front-End Developer | Back-End Developer",
});

gsap.from('.jumbotron img', { duration: 1, rotateY: 360, opacity: 0 });
gsap.from('.navbar', { duration: 1.5, y: '-100%', ease: 'bounce', opacity: 0 });
gsap.from('.myname', { duration: 1, x: -50, ease: 'back', delay: 0.5, opacity: 0 });
