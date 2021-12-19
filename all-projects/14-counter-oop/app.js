function CounterGenerator(element, initialValue) {
  this.element = element;
  this.initialValue = initialValue;
  this.reset = element.querySelector(".reset-counter");
  this.increase = element.querySelector(".chevron-right");
  this.decrease = element.querySelector(".chevron-left");
  this.value = element.querySelector(".counter");
  this.value.textContent = this.initialValue;
  console.log(this.reset);
  console.log(this.increase);
  console.log(this.decrease);
  console.log(this.value);
}

const oop1 = new CounterGenerator(isSelected("1"), 100);
const oop2 = new CounterGenerator(isSelected("2"), 200);

function isSelected(selection) {
  const element = document.querySelector(`.oop-${selection}`);
  if (element) {
    return element;
  }
  throw new Error(`Your selection is not valid, please check your ${selection}`);
}

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
