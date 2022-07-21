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
        // .then(utils.loadData(() => {
        //     dataLoaded = true;
        // }));
    }
  
    const utils = {
        loadData: async function (callback) {
            const response = await fetch('/getJiraTickets');
            const data = await response.json();
            console.log(data); 
          
            toggleFunction();
            
            this.renderData(data).then((response) => {
                const ul = document.querySelector(".group");
                ul.innerHTML = response;
                return response;
            })
            
            callback();
          
            let modalContainer = document.getElementById("modal");
            modalContainer.classList.add("hidden");           
        },

        renderData: function (data) {
            let response = "";
            return new Promise((resolve) => {
               data.jirasObject.forEach(element => {
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



