(async function () {

    console.log('Engineering Training!');

    function initModalButton() {
        
        return new Promise((resolve,reject)=>{
            var dataLoaded = false;
            const openModalButton = document.getElementById("modalButton");
            openModalButton.addEventListener("click", () => {
                if (dataLoaded === false) {
                    resolve();
                }               
            });

        })
        .then(utils.loadData(() => {
            dataLoaded = true;
        }));
    }
  
    const utils = {

        loadData: async function (callback) {
          
            setTimeout(toggleFunction, 1000)

            setTimeout(() => {
                this.renderData().then((response) => {
                    const ul = document.querySelector(".group");
                    ul.innerHTML = response;
                    return response;
                })
            }, 2000)

            callback();

            setTimeout(() => {
                let modalContainer = document.getElementById("modal");
                modalContainer.classList.add("hidden");
            }, 4000)
        },

        renderData: async function () {
            let response = "";
            const ressult = await fetch('/getJiraTickets');
            const data = await ressult.json();
            console.log(data); 
            return new Promise((resolve, reject) => {
                this.data.forEach(element => {
                    let { link, title, icon } = element;
                    response += `<li class="item"><a href= ${link}> 
            <i class="${icon}">
            </i> ${title} 
            </a></li>`;
                });
                resolve(response);
            })
        }
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
    console.log("AFTER initModalButton is called");

})();



