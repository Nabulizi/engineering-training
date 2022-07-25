const { Octokit } = require("@octokit/rest");
require('dotenv').config();
var JiraApi = require('jira-client');

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

     async function getStatus(issueNumber){
        return new Promise( async (resolve)=>{
            const myIssue= await jira.findIssue(issueNumber);
            resolve(myIssue);
        })       
        .then((issue)=> {
            console.log('Status: ' + issue.fields.status.name);
        })
        .catch((err)=> {
            console.error(err);
        });

    }
    
    getStatus("72591");


    const jiraTitles = [
        "Create and publish a public repository in GitHub under your personal account named 'Engineering Training'",
        "Create index.html with basic html markup and perform first commit",
        "Add anchor tags for each completed subtasks",
        "Make unordered list of anchor tags",
        "Add the TWM logo as an image to the beginning of the body of the page",
        "Add style attributes to img tag to setting the height and width of the logo",
        "Add a head, add a style tag to the head, add a class to style tag, move logo styles to style tag, remove inline styles from logo, add class to the logo",
        "Add a selector inside style tag that targets the list items and removes the bullet",
        "Pseudo-selectors - Add hover styling to list elements",
        "UI Libraries - Add Bootstrap to your page, add check icons to your list, and convert your list into a bootstrap list-group",
        "Convert page to Grid layout"
    ]

    const jiraLinks = [
        "https://totalwine.atlassian.net/browse/DIG-70749",
        "https://totalwine.atlassian.net/browse/DIG-70771",
        "https://totalwine.atlassian.net/browse/DIG-70804",
        "https://totalwine.atlassian.net/browse/DIG-70805",
        "https://totalwine.atlassian.net/browse/DIG-70905",
        "https://totalwine.atlassian.net/browse/DIG-70918",
        "https://totalwine.atlassian.net/browse/DIG-70993",
        "https://totalwine.atlassian.net/browse/DIG-71030",
        "https://totalwine.atlassian.net/browse/DIG-71062",
        "https://totalwine.atlassian.net/browse/DIG-71085",
        "https://totalwine.atlassian.net/browse/DIG-71120"
    ]

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
            this.links = links;
            this.titles = titles;
            this.createJiraObject();
            this.fetchGitHubData();
        }

        createJiraObject() {
            for (let i = 0; i < this.links.length; i++) {
                let icon = getIcon();
                this.jirasObject.push({
                    link: this.links[i],
                    title: this.titles[i],
                    ...icon
                })
            }
        }

        async fetchGitHubData(){
            return new Promise( async (resolve)=>{
                const commits = await octokit.rest.repos.listCommits({
                    owner:"Nabulizi",
                    repo:"engineering-training",
                  });
                  resolve(commits);
            })
            .then((listOfCommits)=>{
                // console.log(listOfCommits);
                for(let index=0;index<listOfCommits.data.length;index++){
                    // console.log("Commmit Massage : "+listOfCommits.data[index].commit.message);
                }
            })
        }
    }

    const jiraHandler = new JiraHandler(jiraLinks, jiraTitles)

    module.exports = jiraHandler;