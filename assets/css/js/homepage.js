// reference to form element
var userFormEl = document.querySelector("#user-form");

// refernce to input element
var nameInputEl = document.querySelector("#username");


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
    response.json().then(function(data) {
        // repo results
        console.log(data);
    });
  });
};





