console.log('Engineering Training!');

const modalButton=document.getElementById("modalButton");
const closeModalButton=document.getElementsByClassName("closeModal");
closeModalButton.item(0).addEventListener("click",myFunction);
modalButton.addEventListener("click",myFunction);

// let modalContainer = document.getElementById("modal");
console.log("modalButton",modalButton);
console.log("closeModalButton");

function myFunction() {
    let modalContainer = document.getElementById("modal");
    if (modalContainer.style.display === "block") {
        modalContainer.style.display = "none";
    } else {
        modalContainer.style.display = "block";
    }
  }