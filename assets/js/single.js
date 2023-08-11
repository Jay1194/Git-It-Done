
//list repos issues
var getRepoIssues = function(repo) {
    //git api url
    var apiUrl = "https://api.github.com/repos/" + repo + "/issues?direction=asc";
     // request was successful
    fetch(apiUrl).then(function(response) {
        if (response.ok) {
            response.json().then(function(data) {
                console.log(data);
            });
        }
        else {
            alert("there was a problem with your request!")
        }
    })
};

getRepoIssues("facebook/akd");