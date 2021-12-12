/* 
===============================
Selecting all items
===============================
*/
const form = document.querySelector("form");
const listItem = document.querySelector(".list-item");
const writeItem = document.querySelector(".write-item");
const addItem = document.querySelector(".add-item");
const editItem = document.querySelector(".edit-item");
const deleteItem = document.querySelector(".delete-item");
const deleteAll = document.querySelector(".delete-all");
const listAll = document.querySelector(".list-all");
const alertSuccess = document.querySelector(".alert-success");
const alertDelete = document.querySelector(".alert-delete");

/* 
===============================
Adding inital value
===============================
*/
let editItemInitial, editToggle, editID;
editToggle = false;
editID = "";
/* 
===============================
Event listeners
===============================
*/
form.addEventListener("submit", addItemLogic);
/* 
===============================
Functions
===============================
*/
function addItemLogic(event) {
  event.preventDefault();
  const inputValue = writeItem.value;
  // Generate unique ID
  const generateUniqueID = new Date().getTime().toString();
  console.log(generateUniqueID);
  // Input logic
  if (inputValue !== "" && editToggle === false) {
    console.log("Item added");
  } else if (inputValue !== "" && editToggle === true) {
    console.log("We are in edit more");
  } else {
    console.log("Empty value");
  }
}
