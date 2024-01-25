

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

// Fetch the element with a class name of main-container and store it inside of a variable called mainContainer
const mainContainer = document.querySelector(".main-container");

// Initialized a new variable called playerTurn to keep track of who's turn it is
// let or var
let playerTurn = 'X';

// Added a click event listener to our mainConatiner element
mainContainer.addEventListener("click", event => {
    console.log('box ' + event.target.
    classList[2] + " was clicked!");
    
    // We are modifying the innerText property of the clicked element (found from the event object) and changing it to either an X or an O depending on who's turn it is
    if (playerTurn == 'X'){
        event.target.innerText = "X";
        // We are re-assigning the value of the playerTurn variable to 'toggle' between X and O
        playerTurn = 'O';
    }else if (playerTurn == 'O'){
        event.target.innerText = "O";
        playerTurn = 'X';
    }
    // At the end of every turn, we want our program to check the board and see if we have a winner
    checkForWinner();
});

// const squares = document.getElementByClassName("box")
const squares = document.querySelectorAll(".box");

function clearBoard(){
    squares.forEach((squares) => squares.innerText = '');
}

function checkForWinner(){
    // In order to win, we need to find either three X's or three O's in a row in any direction
    // Start with the X's
    //console.log(squares);
    console.log(squares[0].innerText);
    if (
        // If all squares in the top row have an innerText property that equals 'X' then we have a winner!
        squares[0].innerText == "X" && 
        squares[1].innerText == "X" &&
        squares[2].innerText == "X"
        ){
            alert("X won!!!");
            clearBoard();
        }else if(
        // If all squares in the top row have an innerText property that equals 'X' then we have a winner!
        squares[3].innerText == "X" && 
        squares[4].innerText == "X" &&
        squares[5].innerText == "X"
        ){
            alert("X won!!!");
            clearBoard();
        }else if(
        // If all squares in the top row have an innerText property that equals 'X' then we have a winner!
        squares[6].innerText == "X" && 
        squares[7].innerText == "X" &&
        squares[8].innerText == "X"
        ){
            alert("X won!!!");
            clearBoard();
        }else if(
        // If all squares in the top row have an innerText property that equals 'X' then we have a winner!
        squares[0].innerText == "X" && 
        squares[3].innerText == "X" &&
        squares[6].innerText == "X"
        ){
            alert("X won!!!");
            clearBoard();
        }else if(
        // If all squares in the top row have an innerText property that equals 'X' then we have a winner!
        squares[1].innerText == "X" && 
        squares[4].innerText == "X" &&
        squares[7].innerText == "X"
        ){
            alert("X won!!!");
            clearBoard();
        }else if(
        // If all squares in the top row have an innerText property that equals 'X' then we have a winner!
        squares[2].innerText == "X" && 
        squares[5].innerText == "X" &&
        squares[8].innerText == "X"
        ){
            alert("X won!!!");
            clearBoard();
        }else if(
        // If all squares in the top row have an innerText property that equals 'X' then we have a winner!
        squares[0].innerText == "X" && 
        squares[4].innerText == "X" &&
        squares[8].innerText == "X"
        ){
            alert("X won!!!");
            clearBoard();
        }else if(
        // If all squares in the top row have an innerText property that equals 'X' then we have a winner!
        squares[2].innerText == "X" && 
        squares[4].innerText == "X" &&
        squares[6].innerText == "X"
        ){
            alert("X won!!!");
            clearBoard();
        }
    
}




