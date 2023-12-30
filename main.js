let title = document.getElementById("title");

// gsap animation codes

let titleTL = gsap.timeline();
titleTL.pause();

titleTL.to("#title", {
  scale: 1.5,
  duraiton: 3,
  backgroundColor: "red",
  borderRadius: "30px",
  padding: " 10px 15px",
});

title.addEventListener("mouseenter", () => titleTL.play());
// title.addEventListener("mouseleave", () => title.reverse());
