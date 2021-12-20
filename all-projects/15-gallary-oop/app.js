function getElement(selection) {
  const element = document.querySelector(selection);
  if (element) {
    return element;
  }
  throw new Error(`Please check "${selection}" selector, no such element exists`);
}

class Gallery {
  constructor(element) {
    // selecting elements
    this.container = element;
    this.list = [...element.querySelectorAll(".img")];
    this.modal = getElement(".modal");
    this.modalImg = getElement(".main-img");
    this.imageName = getElement(".image-name");
    this.modalImages = getElement(".modal-images");
    this.closeBtn = getElement(".close-btn");
    this.nextBtn = getElement(".next-btn");
    this.prevBtn = getElement(".prev-btn");
    // bind to gallery
    this.closeModal = this.closeModal.bind(this);
    this.nextImage = this.nextImage.bind(this);
    this.prevImage = this.prevImage.bind(this);
    this.chooseImage = this.chooseImage.bind(this);
    // add event listener
    this.container.addEventListener(
      "click",
      function (event) {
        if (event.target.classList.contains("img")) {
          this.openModal(event.target, this.list);
        }
      }.bind(this),
    );
  }
  openModal(selectedImage, list) {
    this.setMainImage(selectedImage);
    this.modalImages.innerHTML = list
      .map(function (image) {
        return `<img src="${
          image.src
        }" title="${image.title}" data-id="${image.dataset.id}" class="${selectedImage.dataset.id === image.dataset.id ? "modal-img selected" : "modal-img"}"/>`;
      })
      .join("");
    this.modal.classList.add("open");
    this.closeBtn.addEventListener("click", this.closeModal);
    this.nextBtn.addEventListener("click", this.nextImage);
    this.prevBtn.addEventListener("click", this.prevImage);
  }
  setMainImage(selectedImage) {
    this.modalImg.src = selectedImage.src;
    this.imageName.textContent = selectedImage.title;
  }
  closeModal() {
    this.modal.classList.remove("open");
    this.closeBtn.removeEventListener("click", this.closeModal);
    this.nextBtn.removeEventListener("click", this.nextImage);
    this.prevBtn.removeEventListener("click", this.prevImage);
    this.modalImages.removeEventListener("click", this.chooseImage);
  }
  nextImage() {
    const selected = this.modalImages.querySelector(".selected");
    const next = selected.nextElementSibling || this.modalImages.firstElementChild;
    selected.classList.remove("selected");
    next.classList.add("selected");
    this.setMainImage(next);
  }
  prevImage() {
    const selected = this.modalImages.querySelector(".selected");
    const prev = selected.previousElementSibling || this.modalImages.lastElementChild;
    selected.classList.remove("selected");
    prev.classList.add("selected");
    this.setMainImage(prev);
  }
  chooseImage() {
    console.log("placeholder");
  }
}

const nature = new Gallery(getElement(".nature"));
const city = new Gallery(getElement(".city"));
