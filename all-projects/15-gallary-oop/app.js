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
    this.list = [...element.querySelectorAll(".img")];
    this.modal = getElement(".modal");
    this.modalImg = getElement(".main-img");
    this.imageName = getElement(".image-name");
    this.modalImages = getElement(".modal-images");
    this.closeBtn = getElement(".close-btn");
    this.nextBtn = getElement(".next-btn");
    this.prevBtn = getElement(".prev-btn");
    console.log(this.list);
  }
  openModal() {
    console.log("placeholder");
  }
  setMainImage() {
    console.log("placeholder");
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
