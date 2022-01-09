import selection from "./utils/selection.js";
import success from "./utils/success.js";

const email = selection(".email");
const username = selection(".username");
const password = selection(".password");
const confirmPassword = selection(".confirm-password");
const form = selection(".form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (username.value === "") {
    success(username);
  }
});
