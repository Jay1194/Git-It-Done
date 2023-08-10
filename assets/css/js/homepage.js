var getUserRepos = function() {
    //make an HTTP request to /users/octocat/repos on my behalf
  fetch("https://api.github.com/users/octocat/repos").then(function(response) {
    // formatting response
  response.json().then(function(data) {
    console.log(data);
  });
});
 
}
getUserRepos();