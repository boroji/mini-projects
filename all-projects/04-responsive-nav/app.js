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
