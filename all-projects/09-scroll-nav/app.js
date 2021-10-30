const nav = document.querySelector("nav");
const firstSection = document.querySelector(".container main:nth-child(1)");
const buttonTop = document.querySelector("#button-top");
const progressBar = document.querySelector(".progress-bar");
const container = document.querySelector(".container");

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

  buttonTop.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
    });
  });

  if (viewportScroll > heightFirstSection) {
    buttonTop.classList.remove("hidden");
    buttonTop.classList.add("visible");
  } else {
    buttonTop.classList.add("hidden");
    buttonTop.classList.remove("visible");
  }

  let docHeight = document.documentElement.clientHeight;
  let scrollDistance = -document.documentElement.getBoundingClientRect().top;
  let containerheight = container.getBoundingClientRect().height;
  let scrollWidth = (scrollDistance / (containerheight - docHeight)) * 100;
  let floorNum = Math.floor(scrollWidth);

  console.log(floorNum);
  progressBar.style.width = `${floorNum}%`;
});
