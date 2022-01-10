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
  const person = data.results[0];
  const { cell: phone, email } = person;
  const {
    name: { first: firstName, last: lastName },
  } = person;
  const {
    picture: { large: image },
  } = person;
  const {
    login: { salt: password },
  } = person;
  const {
    dob: { age },
  } = person;
  return {
    phone,
    email,
    firstName,
    lastName,
    image,
    password,
    age,
  };
};
const showUser = () => {
  getUser();
};

window.addEventListener("DOMContentLoaded", showUser);
btn.addEventListener("click", showUser);
