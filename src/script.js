import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Button from './components/button';
import utils from './utils';

ReactDOM.render(
    <Button/>,
  document.getElementById('root')
);

(async function () {

    console.log('Engineering Training!');

    function initModalButton() {       
        return new Promise((resolve)=>{
            var dataLoaded = false;
            const openModalButton = document.getElementById("modalButton");
            openModalButton.addEventListener("click", () => {
                if (dataLoaded === false) {
                    utils.loadData(()=>{
                        resolve();
                        dataLoaded = true;
                    })
                }               
            });

        })
    }

    function toggleFunction() {
        let modalContainer = document.getElementById("modal");
        modalContainer.classList.toggle("hidden");
    }

    const openModalButton = document.getElementById("modalButton");
    const closeModalButton = document.getElementsByClassName("closeModal");

    closeModalButton.item(0).addEventListener("click", toggleFunction);

    console.log("modalButton", openModalButton);
    console.log("closeModalButton", closeModalButton);

    console.log("BEFORE initModalButton is called");
    await initModalButton();
    console.log("AFTER initModalButton is called !!!");

})();



