const overlayColor = document.querySelector(".overlay-color");
const removeButton = document.querySelector(".remove-button");
const openModal = document.querySelector(".modal-open");
const main = document.querySelector("main");

openModal.addEventListener("mousedown", function () {
  main.classList.toggle("active");
});
