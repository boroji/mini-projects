function isSelected(selection) {
  const element = document.querySelector(`.oop-${selection}`);
  if (element) {
    return element;
  }
  throw new Error(`Your selection is not valid, please check your ${selection}`);
}

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
};

CounterGenerator.prototype.counterDown = function () {
  this.initialValue--;
  this.value.textContent = this.initialValue;
};

CounterGenerator.prototype.counterZero = function () {
  this.initialValue = 0;
  this.value.textContent = this.initialValue;
};

const oop1 = new CounterGenerator(isSelected("1"), 100);
const oop2 = new CounterGenerator(isSelected("2"), 200);

// function counterChangeStyles() {
//   if (countValue === 0) {
//     updateCounter.classList.add("large-progress");
//     updateCounter.classList.remove("large-error");
//     updateCounter.classList.remove("large-success");
//   }
//   if (countValue < 0) {
//     updateCounter.classList.add("large-error");
//     updateCounter.classList.remove("large-progress");
//     updateCounter.classList.remove("large-success");
//   }
//   if (countValue > 0) {
//     updateCounter.classList.add("large-success");
//     updateCounter.classList.remove("large-progress");
//     updateCounter.classList.remove("large-error");
//   }
// }
