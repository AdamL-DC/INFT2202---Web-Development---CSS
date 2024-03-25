// Name: Adam Lamoureux
// Student ID: 100903015
// Date Completed: 2024-03-25


$(document).ready(function () {
    // We want to create a new XMLHTTPRequest Object to grab the blog post data

    var xhr = new XMLHttpRequest();

    // ASYNCHRONOUS call to the api to get the blog posts
    xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");


    xhr.onload = function() {
        //check if API has responded
        console.log("API has responded!");
        
        //parse API response
        var response = JSON.parse(this.responseText);

        //display blog posts
        var blogPosts = "";

        //loop through each blog post and create html blog post elements
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
        //add blog posts to blog posts div
        document.getElementById("blogPosts").innerHTML = blogPosts;
    };

    
    xhr.send();
});