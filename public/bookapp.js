const deleteButton = document.querySelector(".post-delete");
const postId = document.querySelector(".post-id");
const editButton = document.querySelector(".post-edit")
const submitForm = document.querySelector(".submit-input");
const closeForm = document.querySelector(".close-button-form")
const popup = document.querySelector(".popup");

function sendDeleteRequest(id) {
  fetch("http://localhost:3000/" + id, {
    method: "DELETE"
  });
  window.location.href = "http://localhost:3000";
}




editButton.addEventListener('click', () => {
  popup.classList.add("open-popup");
})

closeForm.addEventListener('click', () => {
  popup.classList.remove("open-popup");
})