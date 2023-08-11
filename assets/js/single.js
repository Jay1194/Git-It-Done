//create a reference to the issues container (where to display content)
var issueContainerEl = document.querySelector("#issues-container");


//list repos issues
var getRepoIssues = function(repo) {
    //git api url
    var apiUrl = "https://api.github.com/repos/" + repo + "/issues?direction=asc";
     // request was successful
    fetch(apiUrl).then(function(response) {
        if (response.ok) {
            response.json().then(function(data) {
                // pass response data to dom function
                displayIssues(data);
            });
        }
        else {
            alert("there was a problem with your request!")
        }
    })
};
// hard coded repo to generate issues
getRepoIssues("Jay1194/portfolio-generator");


// display dom elements on page
var displayIssues = function(issues) {
    
    //check if no open issues and display message if true (So users don't think app is broken)
    if (issues.length === 0) {
        issueContainerEl.textContent = "This repo has no open issues!";
        return;
    }

    // loop over the response data
    for (var i = 0; i < issues.length; i++) {
        // create a link element to take users to the issue on github
        var issueEl = document.createElement("a");

        // style <a> element
        issueEl.classList = "list-item flex-row justify-space-between align-center";

        // links to the full issue on GitHub
        issueEl.setAttribute("href", issues[i].html_url);

        // Will open the link in a new tab instead of replacing the current webpage
        issueEl.setAttribute("target","_blank");
        
//add content to these elements (to display each issue's name as well as its type—either an actual issue or a pull request)
        // create span to hold issue title
        var titleEl = document.createElement("span");
        titleEl.textContent = issues[i].title;

        // append to container
        issueEl.appendChild(titleEl);

        // create a type element
        var typeEl = document.createElement("span");

        // check if issues is an actual issue or a pull request
        if (issues[i].pull_request) {
            typeEl.textContent = "(Pull request)";
        } else {
            typeEl.textContent = "(Issue)";
        }

        //append to container
        issueEl.appendChild(typeEl);

        // append <a> element to the actual page
        issueContainerEl.appendChild(issueEl);
    }
};
