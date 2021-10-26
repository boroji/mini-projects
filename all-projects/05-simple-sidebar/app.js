const navigation = document.querySelector("nav");
const navParagraph = document.querySelectorAll("section p");
const hambugerButton = document.querySelector(".hamburger-button");
const removeButton = document.querySelector(".remove-button");

hambugerButton.addEventListener("click", function () {
  navigation.classList.add("expand");
  navigation.classList.remove("collapse");
});
