const button = document.querySelector(".toggle");
const navigation = document.querySelector(".mobile-nav");
const doubleLine = document.querySelector(".double-line");
const tripleLine = document.querySelector(".triple-line");
const hambugerButton = document.querySelector(".hamburger-button");
const removeButton = document.querySelector(".remove-button");

removeButton.style.display = "none";

hambugerButton.addEventListener("click", function () {
  checkClassLogic();
  hambugerButton.style.display = "none";
  removeButton.style.display = "flex";
});

button.addEventListener("mouseover", function () {
  tripleLine.classList.add("slide-down");
  tripleLine.classList.remove("slide-up");
  doubleLine.classList.add("slide-up");
  doubleLine.classList.remove("slide-down");
});

button.addEventListener("mouseout", function () {
  doubleLine.classList.add("slide-down");
  doubleLine.classList.remove("slide-up");
  tripleLine.classList.add("slide-up");
  tripleLine.classList.remove("slide-down");
});

removeButton.addEventListener("click", function () {
  checkClassLogic();
  hambugerButton.style.display = "flex";
  removeButton.style.display = "none";
});

function checkClassLogic() {
  if (navigation.classList.contains("show-nav")) {
    navigation.classList.remove("show-nav");
    navigation.classList.add("hide-nav");
  } else {
    navigation.classList.add("show-nav");
    navigation.classList.remove("hide-nav");
  }
}
