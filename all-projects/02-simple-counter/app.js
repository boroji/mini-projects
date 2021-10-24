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
    updateCounter.textContent = countValue;
  });
});
