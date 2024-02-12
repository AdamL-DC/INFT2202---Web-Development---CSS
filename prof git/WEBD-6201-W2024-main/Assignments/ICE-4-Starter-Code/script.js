// JQuery Code Here
// wrap our code in teh ready method
$(document).ready(function () {
    console.log("DOM is ready to be manipulated")

    // Animate the from appearence
    $('#registration-form').hide().fadeIn(2000);

    // Handle the form submission
    // document.querySelector('#signup-form').addEventListener("submit", function(event){})
    $('#signup-form').submit(function(event){
        // stops page from refreshing on submit
        event.preventDefault();

        let name = $('#name').val().trim();
        let email = $('#email').val().trim();
        let date = $('#date').val();
        let isValid = true;
        console.log(name);
        console.log(email);
        console.log(date);

        // Form validation
        if (name == ""){
            alert("Please enter your name!");
            isValid = false;
        }

        if (email == ""){
            alert("Please enter your email!");
            isValid = false;
        }

        if (date == ""){
            alert("Please select a date!");
            isValid = false;
        }

        if (isValid == true){
            $('#confirmation-message').slideUp(function () {
                $(this).html(`
                    <p>Thank You, <strong>${name}</strong>!</p>
                    <p>You registration for the show on <strong>${date.toUpperCase()}</strong> is confirmed.</p>
                    <p>A confirmation email has been sent to: <strong>${email}</strong>
                `).slideDown();    
            })

            $('#signup-form').find("input[type=text], input[type=email], select").val("");
        }
    });

    // form field animation
    $("input, select").focus(function (){
        $(this).animate(
            {
                borderColor: "#68b3c8"
            }, 500
        );
    }).blur(function () {
        $(this).animate(
            {
                borderColor: "#ddd"
            }
        );
    });

    // Submit button animation
    $("#signup-form input[type=submit]").hover(function () {
        $(this).animate(
            {
                backgroundColor: jQuery.Color("#333333")
            },
            200
        );
    },
    function () {
        $(this).animate(
            {
                backgroundColor: jQuery.Color("#5c5c5c")
            }, 
            200
        );
    });
});


// ICE 4 TODO:
    // 1. Add a reset button that clears all the inputs and the confirmation message when clicked.
    // 2. Implement a "fade out" for the confirmation message after a certain period once the registration is confirmed

$('#signup-form').submit(function(event){
    event.preventDefault();
})