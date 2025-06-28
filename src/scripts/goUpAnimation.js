import { animate, svg, stagger, createTimeline } from "animejs";

const goUp = document.getElementById("goUpIcon");

const animation = animate(svg.createDrawable("#goUpIcon path"), {
  draw: "0 1",
  duration: 600,
  delay: stagger(600),
  autoplay: false,
});

const tl = createTimeline().sync(animation);

goUp.addEventListener("mouseenter", () => {
  tl.restart();
});
