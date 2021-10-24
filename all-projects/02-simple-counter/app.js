let countValue = 0;
const buttons = document.querySelectorAll("button");
const updateCounter = document.querySelector("#update-counter");

buttons.forEach(function (eachButton) {
  eachButton.addEventListener("click", function (event) {
    let saveClasses = event.currentTarget.classList;
    if (saveClasses.contains("chevron-left")) {
      countValue--;
    }
    if (saveClasses.contains("chevron-right")) {
      countValue++;
    }
    if (saveClasses.contains("reset-counter")) {
      countValue = 0;
    }
    counterChangeStyles();
    updateCounter.textContent = countValue;
  });
});

function counterChangeStyles() {
  if (countValue === 0) {
    updateCounter.classList.add("large-progress");
    updateCounter.classList.remove("large-error");
    updateCounter.classList.remove("large-success");
  }
  if (countValue < 0) {
    updateCounter.classList.add("large-error");
    updateCounter.classList.remove("large-progress");
    updateCounter.classList.remove("large-success");
  }
  if (countValue > 0) {
    updateCounter.classList.add("large-success");
    updateCounter.classList.remove("large-progress");
    updateCounter.classList.remove("large-error");
  }
}
