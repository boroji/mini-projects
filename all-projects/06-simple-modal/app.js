const overlayColor = document.querySelector(".overlay-color");
const removeButton = document.querySelector(".remove-button");
const openModal = document.querySelector(".modal-open");
const main = document.querySelector("main");

openModal.addEventListener("mousedown", modalInit);
overlayColor.addEventListener("mousedown", modalInit);
removeButton.addEventListener("mousedown", modalInit);

function modalInit() {
  main.classList.remove("default-state");
  main.classList.toggle("active");
  main.classList.toggle("inactive");
}
