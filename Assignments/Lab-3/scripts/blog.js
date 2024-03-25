// Name: Adam Lamoureux
// Student ID: 100903015
// Date Completed: 2024-03-25
var images = [];

$(document).ready(function () {
    // We want to create a new XMLHTTPRequest Object to grab the blog post data

    var blogxhr = new XMLHttpRequest();
    var imagexhr = new XMLHttpRequest();

    // ASYNCHRONOUS call to the api to get the blog posts
    blogxhr.open("GET", "https://jsonplaceholder.typicode.com/posts");
    imagexhr.open("GET", "https://pixabay.com/api/?key=43068652-0c9db30ebdb5c73816d28816b&q=cats&image_type=photo");

/**
 * Check API response, parse response, and add images.
 * 
 */
    imagexhr.onload = function() {
        //check if API has responded
        console.log("Image API has responded!");
    
        //parse API response
        var response2 = JSON.parse(this.responseText);

        //add images to images array
        response2.hits.forEach(pic => {
            images.push(pic.previewURL);
        })

    };

    /**
     * Check API response, parse response, display blog posts, and add images.
     */
    blogxhr.onload = function() {
        //check if API has responded
        console.log("Post API has responded!");
        
        //parse API response
        var response = JSON.parse(this.responseText);

        //display blog titles and contents (seperate to add images later)
        var blogPosts = "";
       

        //loop through each blog post and create html blog post elements
        response.forEach(post => {
            blogPosts += `
            <div class="card" style="width: 20rem;">
            <div class="card-body">
            <a href="./posts/${post.id}.html" class="card-link">#${post.id}</a>
            <h5 class="card-title"><u><strong>${post.title}</strong></u></h5>            
            <img src="REPLACE" class="catPicture" alt="cute picture of a cat">
            <p class="card-text">${post.body}</p>
            <a href="./users/${post.userId}.html" class="card-link">Posted by: ${post.userId}</a>
            </div>
            </div>`
            ;
        });


        //for each image in images array replace REPLACE(place holder for image) with image
        images.forEach(image => {
            blogPosts = blogPosts.replace("REPLACE", image);
        });

        //add blog posts to blog posts div
        document.getElementById("blogPosts").innerHTML = blogPosts;
    };



    imagexhr.send();
    blogxhr.send();
    
});