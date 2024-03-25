// Name: Adam Lamoureux
// Student ID: 100903015
// Date Completed: 2024-03-25


$(document).ready(function () {
    // We want to create a new XMLHTTPRequest Object to grab the blog post data

    var xhr = new XMLHttpRequest();
    var xhr2 = new XMLHttpRequest();

    // ASYNCHRONOUS call to the api to get the blog posts
    xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");
    xhr2.open("GET", "https://pixabay.com/api/?key=43068652-0c9db30ebdb5c73816d28816b&q=cute+cats&image_type=photo");


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
              <a href="./posts/${post.id}.html" class="card-link">#${post.id}</a>
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

    xhr2.onload = function() {
        //check if API has responded
        console.log("API has responded!");
        
        //parse API response
        var response2 = JSON.parse(this.responseText);

        //display blog posts
        var images = "";

        response2.hits.forEach(pic => {
            images += `
            <img src="${pic.previewURL}" class="catPicture" alt="cute picture of a cat">
            `;
        })

        
        //add blog posts to blog posts div
        document.getElementById("catImages").innerHTML = images;
    };

    xhr.send();
    xhr2.send();
    
});