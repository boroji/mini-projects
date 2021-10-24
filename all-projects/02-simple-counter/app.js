let countValue = 0;
const buttons = document.querySelectorAll("button");

buttons.forEach(function (eachButton) {
  eachButton.addEventListener("click", function (event) {
    console.log(event.currentTarget);
  });
});
