const button = document.querySelector(".toggle");
const navigation = document.querySelector(".mobile-nav");
const doubleLine = document.querySelector(".double-line");
const tripleLine = document.querySelector(".triple-line");
const removeLine = document.querySelector(".remove-line");

button.addEventListener("click", function () {
  if (navigation.classList.contains("show-nav")) {
    navigation.classList.remove("show-nav");
    navigation.classList.add("hide-nav");
  } else {
    navigation.classList.add("show-nav");
    navigation.classList.remove("hide-nav");
  }

  if (tripleLine.classList.contains("slide-down")) {
    tripleLine.classList.remove("slide-down");
    tripleLine.classList.add("slide-up");
  }
  if (doubleLine.classList.contains("slide-up")) {
    doubleLine.classList.remove("slide-down");
    doubleLine.classList.add("slide-up");
  }
  console.log("click");
});

button.addEventListener("mouseover", function () {
  tripleLine.classList.add("slide-down");
  tripleLine.classList.remove("slide-up");
  doubleLine.classList.add("slide-up");
  doubleLine.classList.remove("slide-down");
  console.log("mouseover");
});

button.addEventListener("mouseout", function () {
  doubleLine.classList.add("slide-down");
  doubleLine.classList.remove("slide-up");
  tripleLine.classList.add("slide-up");
  tripleLine.classList.remove("slide-down");
  console.log("mouseout");
});
