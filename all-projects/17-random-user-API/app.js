import selection from "./utils/selection.js";
const URL = "https://randomuser.me/api/";
const name = selection(".name");
const email = selection(".email");
const birthday = selection(".birthday");
const address = selection(".address");
const phone = selection(".phone");
const password = selection(".password");
const btn = selection(".btn");

const getUser = async () => {
  const response = await fetch(URL);
  const data = await response.json();
  console.log(data);
};

const showUser = () => {
  getUser();
};

window.addEventListener("DOMContentLoaded", showUser);
btn.addEventListener("click", showUser);
