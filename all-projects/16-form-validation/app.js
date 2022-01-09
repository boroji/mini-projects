import selection from "./utils/selection.js";
import success from "./utils/success.js";
import error from "./utils/error.js";

const email = selection(".email");
const username = selection(".username");
const password = selection(".password");
const confirmPassword = selection(".confirm-password");
const form = selection(".form");

function allInputs(inputs) {
  inputs.forEach((element) => {
    if (element.value.trim() === "") {
      error(element);
    } else {
      success(element);
    }
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  allInputs([email, username, password, confirmPassword]);
});
