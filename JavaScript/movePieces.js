// the functions in this file are used to move the pieces on the board
// and to handle the arrow keys for moving the pieces
//this crear the board and the boxes
// 0 | 1 | 2 | 3
// 4 | 5 | 6 | 7
// 8 | 9 | 10| 11
// 12| 13| 14| 15
// 

function MovePieces(direction) {
    // In this function, we will move the pieces on the board
    switch (direction) {
        case "up": // Move pieces up
            console.log('Moving pieces up');
            // We iterate through the board to find pieces that need to move.
            // Starting from 'index = 0' ensures we process all potential pieces.
            for (let index = 0; index < board.length; index++) {
                // A piece can only move up if it's not empty (0)
                // and if it's not already in the top row (index < 4).
                if (board[index] !== 0 && index >= 4) {
                    let currentPieceValue = board[index]; // Store the value of the piece we're moving
                    let currentPosition = index;          // This will track the piece's spot as it moves up

                    // Use a do...while loop to allow the piece to move multiple steps up the board.
                    // The loop continues until a 'break' condition is met.
                    do {
                        let targetPosition = currentPosition - 4; // Calculate the cell directly above

                        // Check if moving to the target position would go off the top of the board.
                        // If it would, the piece can't move further, so we break.
                        if (targetPosition < 0) {
                            break;
                        }

                        // Check if the target position is empty (0).
                        if (board[targetPosition] === 0) {
                            // If empty, move the piece:
                            // 1. Place the piece's value in the new target spot.
                            // 2. Clear the piece's old spot (set it to 0).
                            // 3. Update currentPosition to the new spot, so the loop can try to move it further.
                            board[targetPosition] = currentPieceValue;
                            document.getElementById(`box${targetPosition}`).setAttribute('data', currentPieceValue);
                            board[currentPosition] = 0;
                            document.getElementById(`box${currentPosition}`).setAttribute('data', 0);
                            currentPosition = targetPosition;
                            // The loop will now repeat, attempting to move the piece from its new 'currentPosition'.
                        }
                        // Check if the target position has a piece with the same value for merging.
                        else if (board[targetPosition] === currentPieceValue) {
                            // If values are the same, merge them:
                            // 1. Double the value in the target spot.
                            // 2. Clear the piece's old spot (set it to 0).
                            board[targetPosition] *= 2;
                            document.getElementById(`box${targetPosition}`).setAttribute('data', board[targetPosition]);
                            board[currentPosition] = 0;
                            document.getElementById(`box${currentPosition}`).setAttribute('data', 0);
                            currentPosition = targetPosition; // Update currentPosition to the merged spot.
                            // In 2048, a piece can only merge once per move, so we break the loop here.
                            break;
                        }
                        // If the target position is occupied by a different piece (not empty, not same value).
                        else {
                            // The piece is blocked and cannot move further up, so we break the loop.
                            break;
                        }
                    } while (true); // Loop indefinitely until one of the 'break' conditions above is met.

                    // Optional: Log the original position and where the piece ended up after moving.
                    console.log(`Original piece at ${index} potentially moved up to ${currentPosition}`);
                }
            }
            updateTheScreen(); // Update the screen after all pieces have attempted to move
            break;

        // You'll add cases for "down", "left", "right" here, following similar logic.
        case "down":
            console.log('Moving pieces down');
            // We iterate through the board to find pieces that need to move.
            // Starting from 'index = 0' ensures we process all potential pieces.
            for (let index = 0; index < board.length; index++) {
                // A piece can only move down if it's not empty (0)
                // and if it's not already in the btton row (index > 4).
                if (board[index] !== 0 && index <= 15) {
                    let currentPieceValue = board[index]; // Store the value of the piece we're moving
                    let currentPosition = index;          // This will track the piece's spot as it moves down

                    // Use a do...while loop to allow the piece to move multiple steps down the board.
                    // The loop continues until a 'break' condition is met.
                    do {
                        let targetPosition = currentPosition + 4; // Calculate the cell directly above

                        // Check if moving to the target position would go off the top of the board.
                        // If it would, the piece can't move further, so we break.
                        if (targetPosition > 15) {
                            break;
                        }

                        // Check if the target position is empty (0).
                        if (board[targetPosition] === 0) {
                            // If empty, move the piece:
                            // 1. Place the piece's value in the new target spot.
                            // 2. Clear the piece's old spot (set it to 0).
                            // 3. Update currentPosition to the new spot, so the loop can try to move it further.
                            board[targetPosition] = currentPieceValue;
                            document.getElementById(`box${targetPosition}`).setAttribute('data', currentPieceValue);
                            board[currentPosition] = 0;
                            document.getElementById(`box${currentPosition}`).setAttribute('data', 0);
                            currentPosition = targetPosition;
                            // The loop will now repeat, attempting to move the piece from its new 'currentPosition'.
                        }
                        // Check if the target position has a piece with the same value for merging.
                        else if (board[targetPosition] === currentPieceValue) {
                            // If values are the same, merge them:
                            // 1. Double the value in the target spot.
                            // 2. Clear the piece's old spot (set it to 0).
                            board[targetPosition] *= 2;
                            document.getElementById(`box${targetPosition}`).setAttribute('data', board[targetPosition]);
                            board[currentPosition] = 0;
                            document.getElementById(`box${currentPosition}`).setAttribute('data', 0);
                            currentPosition = targetPosition; // Update currentPosition to the merged spot.
                            // In 2048, a piece can only merge once per move, so we break the loop here.
                            break;
                        }
                        // If the target position is occupied by a different piece (not empty, not same value).
                        else {
                            // The piece is blocked and cannot move further up, so we break the loop.
                            break;
                        }
                    } while (true); // Loop indefinitely until one of the 'break' conditions above is met.

                    // Optional: Log the original position and where the piece ended up after moving.
                    console.log(`Original piece at ${index} potentially moved up to ${currentPosition}`);
                }
            }
            updateTheScreen(); // Update the screen after all pieces have attempted to move
        break;
        // case "left":
        //     // ...
        //     break;
        // case "right":
        //     // ...
        //     break;

        default:
            // This case handles any unexpected direction values.
            console.warn("Invalid direction provided to MovePieces:", direction);
            break;
    }
}

// Function to operate the arrow keys
function handleArrowKeys(event) {
    switch (event.key) {
      case 'ArrowUp':
        console.log('ArrowUp');
        MovePieces("up");
        break;
      case 'ArrowDown':
        console.log('ArrowDown');
        MovePieces("down");
        break;
      case 'ArrowLeft':
        console.log('ArrowLeft');
        MovePieces("left");
        break;
      case 'ArrowRight':
        console.log('ArrowRight');
        MovePieces("right");
        break;
      default:
        // don't do  anything for other key types
        break;
    }
}
  
  // add an event listener to the document for  detecting the arrow keys
  document.addEventListener('keydown', handleArrowKeys);