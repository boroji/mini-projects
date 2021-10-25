const button = document.querySelector(".toggle-button");
const navigation = document.querySelector(".mobile-nav");

button.addEventListener("click", function () {
  navigation.classList.toggle("show-nav");
});
