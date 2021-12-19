function isSelected(selection) {
  const element = document.querySelector(`.oop-${selection}`);
  if (element) {
    return element;
  }
  throw new Error(`Your selection is not valid, please check your ${selection}`);
}

/* 
// function OOP approach

function CounterGenerator(element, initialValue) {
  this.element = element;
  this.initialValue = initialValue;
  this.reset = element.querySelector(".reset-counter");
  this.increase = element.querySelector(".chevron-right");
  this.decrease = element.querySelector(".chevron-left");
  this.value = element.querySelector(".counter");
  this.value.textContent = this.initialValue;
  // bind functions to the CounterGenerator
  this.counterUp = this.counterUp.bind(this);
  this.counterDown = this.counterDown.bind(this);
  this.counterZero = this.counterZero.bind(this);
  // add event listeners
  this.increase.addEventListener("click", this.counterUp);
  this.decrease.addEventListener("click", this.counterDown);
  this.reset.addEventListener("click", this.counterZero);
}

CounterGenerator.prototype.counterUp = function () {
  this.initialValue++;
  this.value.textContent = this.initialValue;
  if (this.initialValue > 0) {
    this.value.classList.add("large-success");
    this.value.classList.remove("large-progress");
    this.value.classList.remove("large-error");
  }
};

CounterGenerator.prototype.counterDown = function () {
  this.initialValue--;
  this.value.textContent = this.initialValue;
  if (this.initialValue < 0) {
    this.value.classList.add("large-error");
    this.value.classList.remove("large-progress");
    this.value.classList.remove("large-success");
  }
};

CounterGenerator.prototype.counterZero = function () {
  this.initialValue = 0;
  this.value.textContent = this.initialValue;
  if (this.initialValue === 0) {
    this.value.classList.add("large-progress");
    this.value.classList.remove("large-error");
    this.value.classList.remove("large-success");
  }
};

 */

// Class OOP approach

class CounterGenerator {
  constructor(element, initialValue) {
    this.element = element;
    this.initialValue = initialValue;
    this.reset = element.querySelector(".reset-counter");
    this.increase = element.querySelector(".chevron-right");
    this.decrease = element.querySelector(".chevron-left");
    this.value = element.querySelector(".counter");
    this.value.textContent = this.initialValue;
    // bind functions to the CounterGenerator
    this.counterUp = this.counterUp.bind(this);
    this.counterDown = this.counterDown.bind(this);
    this.counterZero = this.counterZero.bind(this);
    // add event listeners
    this.increase.addEventListener("click", this.counterUp);
    this.decrease.addEventListener("click", this.counterDown);
    this.reset.addEventListener("click", this.counterZero);
  }
  counterUp() {
    this.initialValue++;
    this.value.textContent = this.initialValue;
    if (this.initialValue > 0) {
      this.value.classList.add("large-success");
      this.value.classList.remove("large-progress");
      this.value.classList.remove("large-error");
    }
  }
  counterDown() {
    this.initialValue--;
    this.value.textContent = this.initialValue;
    if (this.initialValue < 0) {
      this.value.classList.add("large-error");
      this.value.classList.remove("large-progress");
      this.value.classList.remove("large-success");
    }
  }
  counterZero() {
    this.initialValue = 0;
    this.value.textContent = this.initialValue;
    if (this.initialValue === 0) {
      this.value.classList.add("large-progress");
      this.value.classList.remove("large-error");
      this.value.classList.remove("large-success");
    }
  }
}

const oop1 = new CounterGenerator(isSelected("1"), 0);
const oop2 = new CounterGenerator(isSelected("2"), 0);
const oop3 = new CounterGenerator(isSelected("3"), 0);
