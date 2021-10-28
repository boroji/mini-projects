const buttons = document.querySelectorAll(".toggle button");

buttons.forEach(function (singleButton) {
  singleButton.addEventListener("click", function (event) {
    let saveParagraph =
      event.currentTarget.parentElement.parentElement.nextElementSibling;
    let currentButton = event.currentTarget;
    saveParagraph.classList.toggle("hidden");
    saveParagraph.classList.toggle("visible");
    currentButton.classList.toggle("rotate");
  });
});
