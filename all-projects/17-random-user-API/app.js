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
  const { location: street } = person;
  const { city, country, postcode, state } = street;
  return {
    phone,
    email,
    fullname: `${firstName} ${lastName}`,
    address: `${city}, ${state}, ${postcode}, ${country} `,
    image,
    password,
    age,
  };
};
const showUser = () => {
  getUser().then((data) => {
    name.textContent = data.fullname;
    email.textContent = data.email;
    birthday.textContent = data.age;
    address.textContent = data.address;
    phone.textContent = data.phone;
    password.textContent = data.password;
  });
};

window.addEventListener("DOMContentLoaded", showUser);
btn.addEventListener("click", showUser);
