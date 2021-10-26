const button = document.querySelector(".toggle");
const navigation = document.querySelector(".mobile-nav");

button.addEventListener("click", function () {
  if (navigation.classList.contains("show-nav")) {
    navigation.classList.remove("show-nav");
    navigation.classList.add("hide-nav");
  } else {
    navigation.classList.add("show-nav");
    navigation.classList.remove("hide-nav");
  }
});
