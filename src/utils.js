
const utils = {
    loadData: async function (callback) {

        const response = await fetch('/getJiraTickets');
        const data = await response.json();
        console.log(data); 
        
        this.renderData(data).then((response) => {
            let ul = document.querySelector(".group");
            ul.innerHTML = response;
            return response;
        })
        
        callback();    
    },

    renderData: function (data) {
        let response = "";
        return new Promise((resolve) => {
           data.jirasObject.forEach(element => {
                let { link, title, icon, status } = element;
                response += `<li class="item"><a href= ${link}> 
        <button type="button" class="${icon}">${status}</button>
         ${title} 
        </a></li>`;
            });
            resolve(response);
        })
    }
}



export default utils;