let countValue = 0;
const buttons = document.querySelectorAll("button");
const updateCounter = document.querySelector("#update-counter");

buttons.forEach(function (eachButton) {
  eachButton.addEventListener("click", function (event) {
    let saveClasses = event.currentTarget.classList;
    if (saveClasses.contains("chevron-left")) {
      countValue--;
    }
    updateCounter.textContent = countValue;
  });
});
