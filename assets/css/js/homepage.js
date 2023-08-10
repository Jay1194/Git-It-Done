var getUserRepos = function() {
    //make an HTTP request to /users/octocat/repos on my behalf
    fetch("https://api.github.com/users/octocat/repos");
};
 
getUserRepos();