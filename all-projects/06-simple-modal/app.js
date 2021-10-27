const overlayColor = document.querySelector(".overlay-color");
const removeButton = document.querySelector(".remove-button");
const openModal = document.querySelector(".modal-open");
const main = document.querySelector("main");

openModal.addEventListener("mousedown", closeModal);
overlayColor.addEventListener("mousedown", closeModal);
removeButton.addEventListener("mousedown", closeModal);

function closeModal() {
  main.classList.toggle("active");
}
