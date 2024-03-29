import store from './store'

const utils = {
    loadData: async function () {
      
        return new Promise(async (resolve)=>{
            const response = await fetch('/getJiraTickets').catch((err)=>{
                store.dispatch({ type: "DATA_FAILURE", error: err.message })
            });

            if(!response || !response.json) {
                return
            }

            response.json().then((data) => {
                store.dispatch({ type: "DATA_SUCCESS", data })
                resolve(data);
            }); 
        })  
    },
}



export default utils;