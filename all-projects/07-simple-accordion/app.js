const buttons = document.querySelectorAll(".toggle button");

buttons.forEach(function (singleButton) {
  singleButton.addEventListener("click", function (event) {
    let saveParagraph, saveSection, currentButton, saveHeading;

    currentButton = event.currentTarget;
    saveParagraph = event.currentTarget.parentElement.parentElement.nextElementSibling;
    saveSection = event.currentTarget.parentElement.parentElement.parentElement;
    saveHeading = event.currentTarget.parentElement.previousElementSibling;

    saveHeading.classList.toggle("h6-english");
    saveHeading.classList.toggle("h5-english");
    saveSection.classList.toggle("inactive");
    saveSection.classList.toggle("active");
    saveParagraph.classList.toggle("hidden");
    saveParagraph.classList.toggle("visible");
    currentButton.classList.toggle("rotate");
  });
});
