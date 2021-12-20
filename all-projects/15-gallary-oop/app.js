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
  }
  setMainImage(selectedImage) {
    this.modalImg.src = selectedImage.src;
    this.imageName.textContent = selectedImage.title;
  }
  closeImage() {
    console.log("placeholder");
  }
  nextImage() {
    console.log("placeholder");
  }
  prevImage() {
    console.log("placeholder");
  }
  chooseImage() {
    console.log("placeholder");
  }
}

const nature = new Gallery(getElement(".nature"));
const city = new Gallery(getElement(".city"));
