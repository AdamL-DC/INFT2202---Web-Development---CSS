// Name: Adam Lamoureux
// Student ID: 100903015
// Date Completed: 2024-02-22

//Loads when any page is opened
$(document).ready(function () {
    console.log("DOM is ready to be manipulated")


    // login form control
    $('#loginForm').submit(function(event){
        //prevents default refresh on submit
        event.preventDefault();

        //gets the inputted contents of the form
        let username = $('#Username').val().trim();
        let password = $('#Password').val().trim();

        //creates nav elements with user's username and gets the loginLink element to be re appended
        let $nameDisplay = $( '<li class="nav-item"> <a class="nav-link active" aria-current="page">' + username + '</a></li>'),
        loginLink = document.getElementById( "loginLink" );

        // appends the new nav elements onto the navigation bar
        $('.navbar-nav').append( $nameDisplay, loginLink);
    })


    //creates error message div and hides on loading the page

    $("#registerForm").prepend('<div id="ErrorMessage"></div>');
    $("#ErrorMessage").hide();

    //register form control
    $('#registerForm').submit(function(event){
        //prevents default refresh on submit
        event.preventDefault();

        $('#ErrorMessage').html("");
        $('#ErrorMessage').html("<p><strong>ERROR/S:</strong></p>");
        $("#ErrorMessage").hide();

        //gets the inputted contents of the form
        let firstName = $('#firstName').val().trim();
        let lastName = $('#lastName').val().trim();
        let email = $('#Email').val().trim();
        let password = $('#Password').val().trim();
        let confirmPassword = $('#repeatPassword').val().trim();

        //variable used for validation
        let isValid = true;


        //check first name is longer than 2 chars
        if (firstName.length < 2){
            isValid = false;
            $('#ErrorMessage').append("<p>Please ensure first name is longer than 2 characters!</p>");
            $('#ErrorMessage').show();
        }

        //check last name is longer than 2 chars
        if (lastName.length < 2){
            isValid = false;
            $('#ErrorMessage').append("<p>Please ensure last name is longer than 2 characters!</p>");
            $('#ErrorMessage').show();
        }

        //check email is longer than 8 chars
        if (email.length < 8){
            isValid = false;
            $('#ErrorMessage').append("<p>Please ensure email address is longer than 8 characters!</p>");
            $('#ErrorMessage').show();
        }

        //checks email includes @ symbol if someone gets past html restriction
        if (email.includes("@") == false){
            isValid = false;
            $('#ErrorMessage').append("<p>Please ensure email address is valid and contains an @!</p>");
            $('#ErrorMessage').show();
        }

        //checks if passwords are empty
        if(password.length < 6){
            isValid = false;
            $('#ErrorMessage').append("<p>Please ensure password is longer than 8 characters!</p>");
            $('#ErrorMessage').show();
        }

        //checks if passwords match
        if(password != confirmPassword){
            isValid = false;
            $('#ErrorMessage').append("<p>Please ensure both passwords are matching!</p>");
            $('#ErrorMessage').show();
        }

        if(isValid == true){

        }



    })







});

// Page contents

// Home page

let welcomeContent = `Hello, I'm Adam and you seem to have wandered onto my website whether on purpose or on accident.
<br>
I'm currently a second year computer programming student at Durham College.
<br>
This website was created to host a variety of my portfolio items from course related work
aswell as some of my person projects and my resume.
<br>
Feel free to contact me on my contact page if you have concerns or questions about my site!`

// Products page

let evangelionContent = `
<b>Neon Genesis Evangelion</b><br>
I feel like there's no good way for me to discuss my favorite pieces of media without,
what I consider to be one of the best media series ever released, Neon Genesis Evangelion. <br>
The only real way to accurately describe evangelion is "Giant robots fighting biblical monsters while some 
kid cries the whole time"<br>
despite the comedic desciption that the show can be cut down to it truly shows some of the deepest and most
complex character writing that I've ever seen in media<br>
(I watch tons of different forms of media I swear it's a mostly unbiased opinion)<br>
While I will be the first one to admit that the series has become somewhat of a mess with the 5(?) different
movies that released after the original show.<br>
A short summary of the actual important portions of the series:<br>
- The earth has been attacked by "Angels"(giant monsters but the name is important) causing near mass
extinction of the human race and dissapeared<br>
- 15 years after dissapearing the angels return and begin attacking humanity again<br>
- Shinji is a 13 year old in a futuristic version of earth and his father runs nerv - the anti-angel
protection division<br>
- Shinji is one of 4+ (it's 4 1/2 in the original{half is a whole lore thing} but more in the movies) teens
who can pilot an evangelion unit(giant robot to fight monsters)<br>
<br>
Evangelion started as a manga series in 1994 in the Shonen Ace magazine. The series quickly blew up and was
turned into an animated t.v. show in 1995.<br>
Once the show was finished a movie was released called end of evangelion that provided an alternate to 
the last 2 episodes of the original show<br>
In 2007 the series would return for a final movie series (rebuild) of 4 movies that provided an alternate and
more "canon"/finalized ending to the series<br>
I could honestly write pages more about this series but I'll leave it there (please watch it it's really good)
`;

let productsContextContent = `So I WAS going to write new thoughts for each media BUT <br>
I write movie reviews for my friends after watching series that I feel leave an impact on me<br>
So enjoy my thoughts from right after watching the next series:`;

let theGentlemenContent = `<b>The Gentlemen</b>
<br>
I was laughing my a** off almost the entire time and when I wasn't my mouth was wide open from pure shock at what was going on. <br>
This movie is able to perfectly combine action and comedy, giving off a pretty similar vibe to movies like the kingsmen but feeling <br>
not having the over the top goofy stuff that the kingsmen included. This is also the first movie I feel has done the "story time" <br>
method of story telling (idk if thats what its actually called but its when the whole movie is flashbacks and stuff) mainly because <br>
rather than everything being narrated over and having it from a single persons perspective they actually just show it like a normal <br>
movie and use the flashback aspect to just show other viewpoints of what's going on and lets them still actually have twists without <br>
having everything spoiled by seeing the present after the events. I also really like how rather than constantly having a ton of <br>
completely unrealistic fist fighting they actually use guns like real people would. I genuinely think that this is easily my new <br>
favorite movies and I could go on for so much longer about it but I'd rather people reading this just actually watch the movie genuinely 
<br>
<b>9.5/10</b>
<br>
<b>Technical viewpoint</b>
This movie genuinely looks amazing, none of the gore is overplayed and it seems relatively realistic, <br>
the camera work is really good especially for an action movie that normally has super jumpy cuts constantly <br>
where as this movie felt like it stuck to 1 jump cut a scene (it might have been a lot more I'll likely rewatch <br>
it soon and update if I realize differently(on rewatches(multiple)), can confirm it holds up). <br>
My only issue is the little bit they do use effects the green screen is really bad, <br>
to be fair I feel like a lot of greenscreen in movies isn't done very well especially when its a "realistic" movie <br>
and they green screen them driving cars, I understand it can be rally hard to do practically but that one moment <br>
kind of ripped me out of the movie for a minute (pulled me right back in though dw). A large detail this movie did <br>
well is that the characters actually acted like people, there was no "epic one liners" or excessive melee combat, if <br>
real people in those positions would use guns, they just use guns. It causes the movie to feel more realistic and grounds <br>
the movie a little bit more. Which then brings me to the acting, and holy s*** was it good. I really liked Matthew McConaughey <br>
in the wolf of wall street and I feel like hes really good at playing the typical bigger than life (idk if im using that term <br>
correctly) characters, ie. charming ceo, super rich classy drug dealer, etc. and he fits the role of Michael perfectly, also while <br>
writing this I just now realized that the guy who plays Raymond was the main character in pacific rim which I absolutely loved <br>
as a kid. But overall this move is amazing and does almost everything perfectly <br>
<b>9.5/10</b>`;

let maniacContent = `<b>Maniac</b>
<br>
Owen and Annie who both struggle with mental illness participate in a pharmaceutical trial which is attempting to combine <br>
the use of drugs and AI to create a cure all for any mental issues someone struggles with<br>
<br>
<b>My Opinion</b>
<br>
First off I have to say this is one of my favorite types of media, the idea of retrofuturism but rather than being similar <br>
to the Jetsons it combines late 90s/early 2000s with technology we're on the verge of creating/in the beginning steps of creating. <br>
I really enjoy the aspects of visually showing a characters schizophrenia (not a spoiler its literally in the opening scene) by <br>
having a character that's both in the reality the show but also has an alter version of themselves which I find shows the <br>
confusion that the main character has involving his own grip on reality. I'll be honest, trying to write this without spoiling <br>
the show is really difficult so I'll likely keep this section short. Seeing Johna hill playing a serious roll especially someone <br>
who struggles so much was really refreshing since a majority of his career has been more comedic roles (super bad, 21 jump street, <br>
etc.) I find there were still some pretty dumb plot points but at least they managed to incorporate them into the show well enough <br>
to cover up the fact that its dumb. <br>
<b>8.5/10</b>
<br>
<b>Technical Viewpoint</b>
<br>
This show was really visually stunning, it reminded me a lot of the dark scenery complemented with bright neon lights of <br>
Enter The Void (I know I've mentioned it a lot but I will eventually review it). I loved the major difference between the bland <br>
outside world and the vibrant flashy clean inside of the trial showed (at least in my opinion) how the characters tend to live boring <br>
and repetitive lives but once they enter the trial everything is flipped on their heads and become actually interesting. Yet again I <br>
have to mention the stupidity behind some of the beginning points in the plot but the fact they incorporated them into a catalyst for <br>
the well thought out aspects of the plot is really impressive. The main aspect of the plot being the trials showed just how well <br>
thought out the show was overall, having each trial be its own separate story but still managing to further the connection between <br>
Annie and Owen kept the show feeling interesting the entire way through. <br>
<b>solid 8/10</b>`;

// Services page
let gameDeveloperContent = `I have previously worked on multiple unity games and projects, and have recently learned godot.<br>
I have experience working in both 2d and 3d environments within both unity and godot and have messed around with the <br>
basics of other game engines such as unreal engine<br>
<br>
Within the scope of my game development projects I have also learned how to work with a multitude of <br>
accompanying software such as blender, most mainstream Adobe software(photoshop, premiere pro and countless alternatives), etc.`

let applicationProgrammerContent = `Seeing as I am a current student at Durham College in the computer programming and analysis program I have had my fair share of application development<br>
During my time as a Durham College student I have worked with a variety of languages to create a variety of application types<br>
<br>
During my first semester I learned and worked in python and sql<br>
During my second semester I learned html, css and java<br>
During my third semester I learned C# and fully setup java and sql interactions<br>
And During my fourth semester(current) I am further working with java, sql, html, css, C# and I'm currently learning javascript<br>`

let databaseDeveloperContent = `Database development is something that I began learning in my first semester and have continued to refine with my constant use of it within my current program<br>
I began with simply learning sql and how to interact with databases however during my second and third semesters I continued to refine my skills<br>
in overall interactions with databases however I have found that I am not only fond of database development but I was actually fairly good at it.<br>
<br>
This has lead me to continuing to refine my skills within the scope of database interactions and actually implementing<br>
similar systems to those designed in my courses for some personal game development projects for functions such as inventories<br>`


populateServices();
//populateProducts();
//populateHome();


function populateServices(){
    const gameDeveloper = document.querySelector("#gameDeveloper").innerHTML = gameDeveloperContent;
    const applicationProgrammer = document.querySelector("#applicationProgrammer").innerHTML = applicationProgrammerContent;
    const databaseDeveloper = document.querySelector("#databaseDeveloper").innerHTML = databaseDeveloperContent;
}

//function populateProducts(){
// Populate the products page
//const evangelion = document.querySelector("#evangelion").innerHTML = evangelionContent;
//const productsContext = document.querySelector("#productsContext").innerHTML = productsContextContent;
//const theGentlemen = document.querySelector("#theGentlemen").innerHTML = theGentlemenContent;
//const maniac = document.querySelector("#maniac").innerHTML = maniacContent;
//}

//function populateHome(){
//const Welcome = document.querySelector("#welcomeMessage").innerHTML = welcomeContent;
//}