let title = document.getElementsByClassName("title");

// gsap animation codes

let titleTL = gsap.timeline();

titleTL.to(".title", {
  x: 500,
  duraiton: 3,
  stagger: 0.5,
  ease: "bounce.out(1.3)",
});
titleTL.to(".title", {
  x: 0,
  duraiton: 3,
  stagger: 0.5,
  ease: "bounce",
});

// title.addEventListener("mouseenter", () => titleTL.play());
// // title.addEventListener("mouseleave", () => title.reverse());
