console.log('Engineering Training!');

const modalButton=document.getElementById("modalButton");
// const modalContainer=document.getElementById("modal");
modalButton.addEventListener("click",myFunction);
let modalContainer = document.getElementById("modal");
console.log("modalButton",modalButton)

function myFunction() {
    console.log("function is called!!!");
    let modalContainer = document.getElementById("modal");
    if (modalContainer.style.display === "block") {
        modalContainer.style.display = "none";
    } else {
        modalContainer.style.display = "block";
    }
  }