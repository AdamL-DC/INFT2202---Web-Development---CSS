$(document).ready(function () {
    // We want to create a new XMLHTTPRequest Object to grab the Pokemon API Data

    var xhr = new XMLHttpRequest();

    // The line below will create a GET HTTP Request to the pokemon API via the URL
    // The call below is ASYNCHRONOUS
    xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");


    xhr.onload = function() {
        console.log("API has responded!");
        
        var response = JSON.parse(this.responseText);
        console.log(response);
        var blogPosts = "";
        response.forEach(post => {
            blogPosts += `
            <div class="card" style="width: 18rem;">
            <div class="card-body">
              <a href="./posts/${post.id}.html" class="card-link">${post.id}</a>
              <h5 class="card-title"><u><strong>${post.title}</strong></u></h5>
              <p class="card-text">${post.body}</p>
              <a href="./users/${post.userId}.html" class="card-link">Posted by: ${post.userId}</a>
            </div>
            </div>
            
            `;
        });
        document.getElementById("blogPosts").innerHTML = blogPosts;
    };

    xhr.send();
});