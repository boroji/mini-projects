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
});

button.addEventListener("mouseover", function () {
  tripleLine.style.display = "block";
  tripleLine.classList.add("slide-down");
  tripleLine.classList.remove("slide-up");
  doubleLine.style.display = "none";
  doubleLine.classList.add("slide-up");
  doubleLine.classList.remove("slide-down");
});

button.addEventListener("mouseout", function () {
  doubleLine.style.display = "block";
  doubleLine.classList.add("slide-down");
  doubleLine.classList.remove("slide-up");
  tripleLine.style.display = "none";
  tripleLine.classList.add("slide-up");
  tripleLine.classList.remove("slide-down");
});
