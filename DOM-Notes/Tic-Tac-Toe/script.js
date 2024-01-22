

// I want to click on a box and it should show me an X

//The variable below will grab all the HTML elements that match the class anme in the arguement('box') and return all the elements as an array
//const boxes = document.getElementsByClassName('box');

// The coded below is iterating through the boxes elements array using an array iterator method
// boxes.foreach((box => box.addEventListener("click", () => { })))

// The code below iterates through the boseex array using a manual for loop
//for (let i = 0; i < boxes.length; i++) {
//    boxes[i].addEventListener("click", (event) => {
//       // console.log(event);
//        console.log("box " + event.target.classList[2] + " was clicked!");
//    });
//}

// console.log(boxes);

const mainContainer = document.querySelector(".main-container");

mainContainer.addEventListener("click", event => {
    console.log('box ' + event.target.
    classList[2] + " was clicked!");
    
    event.target.innerText = " X"
});



const playerTurn = 'X'