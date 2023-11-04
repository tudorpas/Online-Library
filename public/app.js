
const createItem = document.querySelector(".createButton");
const submitForm = document.querySelector(".submit-input");
const closeForm = document.querySelector(".close-button-form")
const popup = document.querySelector(".popup");
const itemList = document.querySelector(".item-list");
const inputForm = document.querySelector(".input-form");
const xButtons = document.querySelectorAll(".delete-button")
// INPUT 
const nameInput = document.querySelector("#name");
const authorInput = document.querySelector("#author");
const descriptionInput = document.querySelector("#description");
const pagInput = document.querySelector("#pag");


createItem.addEventListener('click', () => {
    popup.classList.add("open-popup");
})

closeForm.addEventListener('click', () => {
    popup.classList.remove("open-popup");
})

xButtons.forEach(button =>{
    button.addEventListener("click", () => {
    
    })
})


