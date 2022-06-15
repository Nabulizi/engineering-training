console.log('Engineering Training!');

const openModalButton=document.getElementById("modalButton");
const closeModalButton=document.getElementsByClassName("closeModal");

closeModalButton.item(0).addEventListener("click",myFunction);
openModalButton.addEventListener("click",myFunction);

console.log("modalButton",openModalButton);

console.log("closeModalButton");
function myFunction(){
    let modalContainer = document.getElementById("modal");
    modalContainer.classList.toggle("hidden");
}

// function myFunction() {
//     let modalContainer = document.getElementById("modal");
//     if (modalContainer.style.display === "block") {
//         modalContainer.style.display = "none";
//     } else {
//         modalContainer.style.display = "block";
//     }
//   }