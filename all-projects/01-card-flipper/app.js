const hexCode = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const button = document.querySelector("#generate-color");
const hexValue = document.querySelector("#hex-value");
const box = document.querySelector(".box");

button.addEventListener("click", updateHexCode);

function generateRandomNumber() {
  return Math.floor(Math.random() * hexCode.length);
}

function updateHexCode() {
  let hexUpdate = "#";
  for (let i = 0; i < 6; i++) {
    hexUpdate += hexCode[generateRandomNumber()];
  }
  hexValue.textContent = hexUpdate;
  box.style.backgroundColor = hexUpdate;
}
