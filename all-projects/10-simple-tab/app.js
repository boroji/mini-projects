const buttons = document.querySelectorAll("button");
const articles = document.querySelectorAll("article");
const main = document.querySelector("main");

main.addEventListener("click", function (event) {
  const targetID = event.target.dataset.id;
  if (targetID) {
    buttons.forEach(function (btn) {
      btn.classList.remove("large-primary");
      btn.classList.add("large-secondary");
      event.target.classList.add("large-primary");
      event.target.classList.remove("large-secondary");
    });
  }
});
