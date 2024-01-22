// - As a User, I want to click one the 'Add' button and add the to do that I typed from the text box onto my todo list


// Using the tag name - however this will select ALL buttons
// const addBtn = document.querySelector('button')

// Grabs the HTML button and stores it inside a variables called addBtn
const addBtn = document.querySelector("#submit-btn");

// Grabs the HTML Input elelement and store it inside a variable called inputEl
const inputEl = document.querySelector('#to-do-input');

// Grabs the HTML UL elelement and store it inside a variable called inputEl
const unorderedListEl = document.querySelector('#to-do-list');

// Adds an event listener to the html button 
addBtn.addEventListener("click", function (event) {
    // Stops the browser from refreshing when the form is submitted
    event.preventDefault();

    // inputEl.value represents the text the user types into the input element text box
    //console.dir(inputEl.value);
    
    const newListItem = document.createElement('li')
    newListItem.innerText = inputEl.value // "Shovel the Snow"
    // newListItem --> <li>Shovel the Snow</li>
    unorderedListEl.append(newListItem);
});