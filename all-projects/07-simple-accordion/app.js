const buttons = document.querySelectorAll(".toggle button");

buttons.forEach(function (singleButton) {
  singleButton.addEventListener("click", function (event) {
    let saveParagraph, saveSection, currentButton;

    currentButton = event.currentTarget;
    saveParagraph = event.currentTarget.parentElement.parentElement.nextElementSibling;
    saveSection = event.currentTarget.parentElement.parentElement.parentElement;

    saveParagraph.classList.toggle("hidden");
    saveParagraph.classList.toggle("visible");
    currentButton.classList.toggle("rotate");
  });
});
