gsap.registerPlugin(TextPlugin);
gsap.to('#myskill-1', {
  duration: 1.8,
  delay: 1.3,
  text: "Front-End | Back-End Developer",
});

gsap.from('header', { duration: 1.5, y: '-100%', ease: 'bounce', opacity: 0 });
gsap.from('#say-hello', { duration: 1.5, x: '100%', ease: 'bounce', opacity: 0 });
