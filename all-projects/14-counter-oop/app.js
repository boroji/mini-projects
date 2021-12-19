function CounterGenerator(element, initialValue) {
  console.log(element, initialValue);
}

isSelected("1");
isSelected("2");

function isSelected(selection) {
  const element = document.querySelector(`.oop-${selection}`);
  if (element) {
    console.log(element);
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
