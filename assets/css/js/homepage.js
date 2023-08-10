// reference to form element
var userFormEl = document.querySelector("#user-form");

// refernce to input element
var nameInputEl = document.querySelector("#username");

// reference empty div data will be written to
var repoContainerEl = document.querySelector("#repos-container");

// refernce To username that was searched in form
var repoSearchTerm = document.querySelector("#repo-search-term");


// executed upon a form submission browser event
var formSubmitHandler = function(event) {
    event.preventDefault();

    // get value from input element
    var username = nameInputEl.value.trim();

    // send value over to getUserRepos()
    if (username) {
        getUserRepos(username);
        // clears form out
        nameInputEl.value = "";
        // No HTTP request without a username, if we accidentally left the <input> field blank!
    } else {
        alert("Please enter a Github username");
    }
    // event listener is working correctly
    console.log(event);
};
// submit event listener
userFormEl.addEventListener("submit", formSubmitHandler);


var getUserRepos = function(user) {
    //format the github api url
    var apiUrl = "http://api.github.com/users/" + user + "/repos";

// make a request to the url
  fetch(apiUrl).then(function(response) {
    // When the response data is converted to JSON, it will be sent from getUserRepos() to displayRepos()
    response.json().then(function(data) {
        displayRepos(data, user);
        // repo results
        console.log(data);
    });
  });
};


//Display Repository Data
// accept both the array of repository data and the term we searched for as parameters
var displayRepos = function(repos, searchTerm) {

    // clear old content before displaying new content
    repoContainerEl.textContent = "";
    repoSearchTerm.textContent = searchTerm;

    // loop over repos (To display on page)
    for (var i = 0; i< repos.length; i++) {
        //format repo name
        var repoName = repos[i].owner.login + "/" + repos[i].name;

        // create a container for each repo and styles it
        var repoEl = document.createElement("div");
        repoEl.classList = "list-item flex-row justify-space-between align-center";

        // create a span element to hold repository name
        var titleEl = document.createElement("span");
        titleEl.textContent = repoName;

        // append container (for repo names)
        repoEl.appendChild(titleEl);

        // append container to the dom (repos)
        repoContainerEl.appendChild(repoEl);
    }
};



