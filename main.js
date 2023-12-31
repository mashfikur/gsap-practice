let title = document.getElementsByClassName("title");

// gsap animation codes

let titleTL = gsap.timeline();

titleTL.to(".title", {
  x: 500,
  duraiton: 3,
  stagger: 0.5,
  ease: "elastic.inOut(.6)",
});

// title.addEventListener("mouseenter", () => titleTL.play());
// // title.addEventListener("mouseleave", () => title.reverse());
