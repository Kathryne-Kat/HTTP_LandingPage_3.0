// document.addEventListener("DOMContentLoaded", function () {
//   new Splide(".splide", {
//     type: "loop",
//     drag: "free",
//     focus: "center",
//     perPage: 3,
//     autoScroll: {
//       speed: 1,
//     },
//   }).mount(window.splide.Extensions);
// });

new Splide(".splide", {
  pagination: false,
  type: "loop",
  drag: "free",
  focus: "center",
  perPage: 3,
  autoScroll: {
    speed: 1,
  },
}).mount(window.splide.Extensions);

// new Splide(".splide").mount();
