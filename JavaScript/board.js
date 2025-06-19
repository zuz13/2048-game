//this crear the board and the boxes
// 0 | 1 | 2 | 3
// 4 | 5 | 6 | 7
// 8 | 9 | 10| 11
// 12| 13| 14| 15
//                 


// 
const board = Array(16);// 0 = box1, 1 = box2, 2 = box3, etc. and this is the board
//const  boxes = Array(16);//  this is the boxes or the elements of the board

function cleanTheBoard() {//this function cleans the board and sets all the boxes to 0
    for (let i = 0; i < board.length; i++) {// the work of this loop is to initialize the board with 0s
        board[i] = 0; // Initialize the board with 0
        document.getElementById(`box${i}`).setAttribute('data', 0); // Set the data attribute of each box to 0
        document.getElementById(`boxs${i}`).innerHTML = ``; // Clear the inner HTML of each box display element
    }
}
let NumberRandomAndPosition = () =>{
    // this function generates a random number and a random position on the board
    let value = Math.floor(Math.random() * 4) + 1; // Generate a random number between 1 and 4 return {value, position}; // Return an object with the value and position
    return(value);
};
cleanTheBoard(); // Call the function to clean the board at the start

function createPiece(type,value,SecondValue,position) {
    //this function creates a piece on the board and make the math to multiply the values
    switch (type){
        case "crearNewNumberRandomNewGame":// this function creates a new number on the board and choose a random position on the board
        cleanTheBoard(); // Clean the board before creating new pieces    
        for (let index = 0; index < 2; index++) {//this for is to only create two pieces on the board
                let value = NumberRandomAndPosition(); // Get a random number
                let position = Math.floor(Math.random() * board.length); // Get a random position on the board
                if (value ===2 && board[position] === 0) { // Check if the position is empty
                    board[position] = value; // Place the piece on the board
                    document.getElementById(`box${position}`).setAttribute('data', value); // Update the data attribute of the box
                    document.getElementById(`boxs${position}`).innerHTML = `${value}`; // Update the display of the box
                }else{
                    index--; // If the position is not empty, repeat the iteration to have other tra
                }
            }
        break;
        default:
            console.error("Unknown type of piece creation"); // Handle unknown types
        break;

    }
}
function updateTheScreen() {
    // this function updates the screen with the current state of the board
    for (let i = 0; i < board.length; i++) {
            if (board[i] === 0) {
                document.getElementById(`boxs${i}`).innerHTML = ``; // Clear the display of empty boxes
                
            }else{
                document.getElementById(`boxs${i}`).innerHTML = `${board[i]}`; // Update the display of each box with its value

            }
        }
    
    
}
document.getElementById('information-buttonNew').addEventListener('click', ()=>createPiece("crearNewNumberRandomNewGame",0,0,0));// Add event listener to the New Game button
// all the time this is checking if the button is clicked to start a new game
//boxes[i] = document.getElementById(`box${i}`); // Get the box elements by their IDs