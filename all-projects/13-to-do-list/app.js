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
const alertContainer = document.querySelector(".alert");
const alertText = document.querySelector(".alert p");

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

  // Logic #1 begins here
  if (inputValue !== "" && editToggle === false) {
    // Create element and add class to it
    const newElement = document.createElement("article");
    newElement.classList.add("list-item", "padding-top-16");

    // Create attribute and attach it to the element
    const newAttributeID = document.createAttribute("data-id");
    newAttributeID.value = generateUniqueID;
    newElement.setAttributeNode(newAttributeID);

    // Add HTML content within it
    newElement.innerHTML = `
    <p class="h6-english">${inputValue}</p>
     <div class="button-wrapper">
       <button class="large-progress edit-item">
         <svg width="24" height="24" viewBox="0 0 24 24">
           <path
             d="M3 17.25V21H6.75L17.81 9.94L14.06 6.19L3 17.25ZM20.71 7.04C21.1 6.65 21.1 6.02 20.71 5.63L18.37 3.29C17.98 2.9 17.35 2.9 16.96 3.29L15.13 5.12L18.88 8.87L20.71 7.04V7.04Z"
           />
         </svg>
       </button>
       <button class="large-warning delete-item">
         <svg width="24" height="24" viewBox="0 0 24 24">
           <path
             d="M6 19C6 20.1 6.9 21 8 21H16C17.1 21 18 20.1 18 19V7H6V19ZM19 4H15.5L14.5 3H9.5L8.5 4H5V6H19V4Z"
           />
         </svg>
       </button>
     </div>`;

    // Attach the element to the HTML and display
    listAll.append(newElement);
    displayAlert("Item is successfully added, keep adding more items", "success");

    // Set back to default and add to local storage
    addToLocalStorage(generateUniqueID, inputValue);
    setBackToDefault();

    // Logic #2 begins here
  } else if (inputValue !== "" && editToggle === true) {
    console.log("We are in edit more");
  } else {
    displayAlert("Cannot add empty item to the list", "error");
  }
}

function displayAlert(dynamicText, cssClass) {
  alertText.textContent = dynamicText;
  alertContainer.classList.add(`alert-${cssClass}`);

  setTimeout(function () {
    alertText.textContent = "";
    alertContainer.classList.remove(`alert-${cssClass}`);
  }, 3000);
}

function setBackToDefault() {
  writeItem.value = "";
  editToggle = false;
  editID = "";
}
/* 
===============================
Local storage
===============================
*/
function addToLocalStorage() {
  console.log("addToLocalStorage");
}
