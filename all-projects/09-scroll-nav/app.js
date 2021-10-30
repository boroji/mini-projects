const nav = document.querySelector("nav");

window.addEventListener("scroll", function () {
  const viewportScroll = window.pageYOffset;
  const heightNav = nav.getBoundingClientRect().height;
  if (viewportScroll > heightNav) {
    nav.classList.remove("inactive");
    nav.classList.add("shadow-light-bottom");
  } else {
    nav.classList.add("inactive");
    nav.classList.remove("shadow-light-bottom");
  }
});
