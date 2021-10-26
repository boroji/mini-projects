const navigation = document.querySelector("nav");
const navParagraph = document.querySelectorAll("p");
const hambugerButton = document.querySelector(".hamburger-button");
const removeButton = document.querySelector(".remove-button");

hambugerButton.addEventListener("click", function () {
  navigation.classList.add("expand");
  navigation.classList.remove("collapse");
  hambugerButton.classList.add("slide-left");
  hambugerButton.classList.remove("slide-right");
  removeButton.classList.add("slide-right");
  removeButton.classList.remove("slide-left");
  navParagraph.forEach(function (allParagraph) {
    allParagraph.classList.add("slide-right");
    allParagraph.classList.remove("slide-left");
  });
});

removeButton.addEventListener("click", function () {
  navigation.classList.remove("expand");
  navigation.classList.add("collapse");
  hambugerButton.classList.remove("slide-left");
  hambugerButton.classList.add("slide-right");
  removeButton.classList.remove("slide-right");
  removeButton.classList.add("slide-left");
  navParagraph.forEach(function (allParagraph) {
    allParagraph.classList.remove("slide-right");
    allParagraph.classList.add("slide-left");
  });
});
