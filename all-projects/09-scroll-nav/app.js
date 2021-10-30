const nav = document.querySelector("nav");
const firstSection = document.querySelector(".container main:nth-child(1)");
const buttonTop = document.querySelector("#button-top");

window.addEventListener("scroll", function () {
  const viewportScroll = window.pageYOffset;
  const heightNav = nav.getBoundingClientRect().height;
  const heightFirstSection = firstSection.getBoundingClientRect().height;
  if (viewportScroll > heightNav) {
    nav.classList.remove("inactive");
    nav.classList.add("shadow-light-bottom");
  } else {
    nav.classList.add("inactive");
    nav.classList.remove("shadow-light-bottom");
  }

  if (viewportScroll > heightFirstSection) {
    buttonTop.classList.remove("hidden");
    buttonTop.classList.add("visible");
  } else {
    buttonTop.classList.add("hidden");
    buttonTop.classList.remove("visible");
  }
});
