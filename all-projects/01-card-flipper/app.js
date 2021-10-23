const hexCode = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const button = document.querySelector("#generate-color");
const hexValue = document.querySelector("#hex-value");
const box = document.querySelector(".box");

button.addEventListener("click", function () {
  hexValue.textContent = "#000000";
  box.style.backgroundColor = "#000";
});
