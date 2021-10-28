const buttons = document.querySelectorAll(".toggle button");
const paragraphs = document.querySelectorAll("section p:last-child");

buttons.forEach(function (singleButton) {
  singleButton.addEventListener("click", function (event) {
    console.log(event.currentTarget);
  });
});
