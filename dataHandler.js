const { Octokit } = require("@octokit/rest");
require('dotenv').config();
var JiraApi = require('jira-client');

    // Initialize
    const octokit = new Octokit({ 
        auth: process.env.GITHUB_TOKEN,
        baseUrl: 'https://api.github.com',
        log: {
            debug: () => {},
            info: () => {},
            warn: console.warn,
            error: console.error
        },
        request: {
            agent: undefined,
            fetch: undefined,
            timeout: 0
        }
    });

    // Initialize
    var jira = new JiraApi({
        protocol: 'https',
        host: 'totalwine.atlassian.net',
        username: process.env.JIRA_USER_NAME,
        password: process.env.GIRA_TOKEN,
        apiVersion: '2',
        strictSSL: true
     });

    async function findJiraIssue(issueNumber){
        return new Promise( async (resolve,reject)=>{
            jira.findIssue(issueNumber)   
            .then((issue)=> {
                // console.log('Status: ' + issue.fields.status.name);
                const {summary} = issue.fields;
                const issueStatus= issue.fields.status.name
                console.log('status: ' + issueStatus);
                resolve({
                    status:issueStatus,
                    icon:  "bi bi-check-circle-fill",
                    title: summary,
                    link: `https://totalwine.atlassian.net/browse/${issueNumber}`
                })
            })
            .catch((err)=> {
                console.error(err);
                reject(err);
            });
        });
    }

    let jiraTemplate = {
        icon: "bi bi-check-circle-fill",
    };

    let errorJiraTemplate = {
        icon: "bi bi-x-circle",
    };

    function getRandomNum(max) {
        return Math.floor(Math.random() * max);
    }

    function getIcon() {
        let rNum = getRandomNum(3);
        return (rNum >= 1 ? jiraTemplate : errorJiraTemplate);
    }

    class JiraHandler {
        constructor(links, titles) {
            this.jirasObject = [];
            this.jiraTicketNumber = [];
            // this.createJiraObject();
            // this.fetchGitHubData();
            this.retrieveJiraInfo();
        }

        async fetchGitHubData(){
            return new Promise( async (resolve)=>{
                const commits = await octokit.rest.repos.listCommits({
                    owner:"Nabulizi",
                    repo:"engineering-training",
                  });
                  resolve(commits);
            })
        }

        retrieveJiraInfo(){    
            return new Promise( async (resolve)=>{

            this.fetchGitHubData().then((listOfCommits)=>{
                let jiraTicketNumber = [];
                let promises=[];
                const regEx=/([A-Z][A-Z0-9]+-[0-9]+)/g
                //get all jira tickets number from commit messages through loops
                for(let index=0;index<listOfCommits.data.length;index++){                   
                    //  console.log("Commmit Massage : "+listOfCommits.data[index].commit.message);
                    let ticketNum=listOfCommits.data[index].commit.message.match(regEx);
                    let indx=jiraTicketNumber.indexOf(ticketNum);

                    if(ticketNum != null && indx === -1){    
                        jiraTicketNumber.push(ticketNum);
                    }else{
                        console.log(ticketNum + 'Jira ticket number already exists or No Ticket Number');
                    }
                    
                }
                console.log(jiraTicketNumber);  

                //get all title and link using 
                for (let i=0; i<jiraTicketNumber.length;i++){
                    promises.push(findJiraIssue(jiraTicketNumber[i]));
                }
                Promise.all(promises).then((values)=>{
                    console.log(values);
                })
                resolve(Promise.all(promises));
            })
        })

        }

    }

    const jiraHandler = new JiraHandler();

    module.exports = jiraHandler;