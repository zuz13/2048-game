// 0  1  2  3
// 4  5  6  7
// 8  9 10 11
//12 13 14 15

function cleanArray(){
    for (let index = 0; index < Attributes.length; index++) {
        if (Attributes[index] === 0) {
            document.getElementById(`boxs${index+1}`).innerHTML = ``;//${}
            document.getElementById(boxes[index]).setAttribute('data', 0);
        }
        
    }
}

function movePieces(address,piece) {
    switch (address) {
        case "up":
            console.log("up movePieces",{piece});
            cleanArray();
            calculate("up", piece);
            document.getElementById(boxes[piece]).setAttribute('data', 0);
            document.getElementById(`boxs${piece+1}`).innerHTML = ``;//${}

            document.getElementById(boxes[piece-4]).setAttribute('data',Attributes[piece]);
            document.getElementById(`boxs${piece-3}`).innerHTML = `${Attributes[piece]}`;
            Attributes[piece-4]= Attributes[piece];
            Attributes[piece] = 0;
            cleanArray();
        break;
        case "left":
            console.log("left movePieces",{piece});
            cleanArray();
            calculate("left", piece);
            document.getElementById(boxes[piece]).setAttribute('data', 0);
            document.getElementById(`boxs${piece+1}`).innerHTML = ``;//${}
            document.getElementById(boxes[piece-1]).setAttribute('data',Attributes[piece]);
            document.getElementById(`boxs${piece}`).innerHTML = `${Attributes[piece]}`;
            Attributes[piece-1]= Attributes[piece];
            Attributes[piece] = 0;
            cleanArray();
        break;
        case "down":
            console.log("Down movePieces",{piece});
            cleanArray();
            calculate("down", piece);
            document.getElementById(boxes[piece]).setAttribute('data', 0);
            document.getElementById(`boxs${piece+1}`).innerHTML = ``;//${}
    
            document.getElementById(boxes[piece+4]).setAttribute('data',Attributes[piece]);
            document.getElementById(`boxs${piece+5}`).innerHTML = `${Attributes[piece]}`;
            Attributes[piece+4]= Attributes[piece];
            Attributes[piece] = 0;
            cleanArray();
        break;
        case "right":
            console.log("Right movePieces",{piece});
            cleanArray();
            calculate("right", piece);
            document.getElementById(boxes[piece]).setAttribute('data', 0);
            document.getElementById(`boxs${piece+1}`).innerHTML = ``;
            
            document.getElementById(boxes[piece+1]).setAttribute('data',Attributes[piece]);
            document.getElementById(`boxs${piece+2}`).innerHTML = `${Attributes[piece]}`;
            Attributes[piece+1]= Attributes[piece];
            Attributes[piece] = 0;
            cleanArray();
        break;
        default:
            console.error("Invalid direction");
            break;
    }
}

function move(address){
    switch (address) {
        case "up":
            for (let index = 0; index < Attributes.length; index++) {
                if (Attributes[index] != 0){
                    if (index == 0 || index == 1 || index == 2 || index == 3) { //first column
                        
                    }else if (index == 4 || index == 5 || index == 6 || index == 7){//second column
                        if(Attributes[index-4 ] != 0){
                            calculate("up", index);
                            cleanArray();
                        }else{
                            movePieces("up",index);
                            index = 0;
                        }
                    }else if (index == 8 || index == 9 || index == 10 || index == 11){//third column
                        if(Attributes[index-4] != 0){
                            if (Attributes[index-8] == 0) {
                                movePieces("up",index-4);
                                movePieces("up",index);
                            }else if (Attributes[index] == Attributes[index-4]) {
                                movePieces("up",index);
                            }{
                                // calculate("up", index);
                            }
                        }else{
                            movePieces("up",index);
                            index = 0;
                        }
                    }else if (index == 12 || index == 13 || index == 14 || index == 15){//fourth column
                        if(Attributes[index-4] != 0){
                            if (Attributes[index-8] == 0) {
                                movePieces("up",index-4);
                                movePieces("up",index);
                            }else if(Attributes[index] == Attributes[index-4]){
                                movePieces("up",index);
                            }else{
                                calculate("up", index);
                            }
                        }else{
                            movePieces("up",index);
                            index = 0;
                        }
                    }
                }
            }
        break;
        case "down":
            for (let index = 0; index < Attributes.length; index++) {
                if (Attributes[index] != 0){
                    if (index == 0 || index == 1 || index == 2 || index == 3) { //first column
                        if(Attributes[index+4] != 0){
                            if (Attributes[index+8] == 0) {
                                movePieces("down",index+4);
                                movePieces("down",index);
                            }else if(Attributes[index+12] == 0){
                                movePieces("down",index+8);
                                movePieces("down",index+4);
                                movePieces("down",index);
                            }
                        }else{
                            movePieces("down",index);
                            index = 0;
                        }
                    }else if (index == 4 || index == 5 || index == 6 || index == 7){//second column
                        if(Attributes[index+4] != 0){
                            if (Attributes[index+8] == 0) {
                                movePieces("down",index+4);
                                movePieces("down",index);
                            }
                        }else{
                            movePieces("down",index);
                            index = 0;
                        }
                    }else if (index == 8 || index == 9 || index == 10 || index == 11){//third column
                        if(Attributes[index+4] != 0){
                            calculate("down", index);
                            cleanArray();
                        }else{
                            movePieces("down",index);
                            index = 0;
                        }
                    }else if (index == 12 || index == 13 || index == 14 || index == 15){//fourth column
                       
                    }
                }
            }
        break;
        case  "left":

        for (let index = 0; index < Attributes.length; index++) {
            if (Attributes[index] != 0){
                if (index == 0 || index == 4 || index == 8 || index == 12) { //first column
                    
                }else if (index == 1 || index == 5 || index == 9 || index == 13){//second column
                    if(Attributes[index-1] != 0){
                        calculate("left", index);
                        cleanArray();
                    }else{
                        movePieces("left",index);
                        index = 0;
                    }
                }else if (index == 2 || index == 6 || index == 10 || index == 14){//third column
                    if(Attributes[index-1] != 0){
                        if (Attributes[index-2] == 0) {
                            movePieces("left",index-1);
                            movePieces("left",index);
                        }else{//here
                            calculate("left",index)
                        }
                    }else{
                        movePieces("left",index);
                        index = 0;
                    }
                }else if (index == 3 || index == 7 || index == 11 || index == 15){//fourth column
                    if(Attributes[index-1] != 0){
                        if (Attributes[index-2] == 0) {
                            movePieces("left",index-1);
                            movePieces("left",index);
                        }else if(Attributes[index-3] == 0){
                            movePieces("left",index-2);
                            movePieces("left",index-1);
                            movePieces("left",index);
                        }
                    }else{
                        movePieces("left",index);
                        index = 0;
                    }
                }
            }
        }

        break;
        case  "right":

        for (let index = 0; index < Attributes.length; index++) {
            if (Attributes[index] != 0){
                if (index == 0 || index == 4 || index == 8 || index == 12) { //first column
                    if(Attributes[index+1] != 0){
                        if (Attributes[index+2] == 0) {
                            movePieces("right",index+1);
                            movePieces("right",index);
                        }else if(Attributes[index+3] == 0){
                            movePieces("right",index+2);
                            movePieces("right",index+1);
                            movePieces("right",index);
                        }
                    }else{
                        movePieces("right",index);
                        index = 0;
                    }
                }else if (index == 1 || index == 5 || index == 9 || index == 13){//second column
                    if(Attributes[index+1] != 0){
                        if (Attributes[index+2] == 0) {
                            movePieces("right",index+1);
                            movePieces("right",index);
                        }else if (Attributes[index+2] == Attributes[index+1]) {
                            calculate('right',index)
                            movePieces('right',index);
                        }
                    }else{
                        movePieces("right",index);
                        index = 0;
                    }
                }else if (index == 2 || index == 6 || index == 10 || index == 14){//third column
                    if(Attributes[index+1] != 0){
                        calculate("right", index);
                    }else{
                        movePieces("right",index);
                        cleanArray();
                        index = 0;
                    }
                }else if (index == 3 || index == 7 || index == 11 || index == 15){//fourth column
                    
                }
            }
        }

        break;
        default:
            console.error("Invalid direction");
        break;
    }
}

// Function to operate the arrow keys
function handleArrowKeys(event) {
    switch (event.key) {
      case 'ArrowUp':
        console.log('ArrowUp');
        move("up");
        newBox();
        newBox();
        cleanArray();
        break;
      case 'ArrowDown':
        console.log('ArrowDown');
        move("down");
        newBox();
        newBox();
        cleanArray();
        break;
      case 'ArrowLeft':
        console.log('ArrowLeft');
        move("left");
        newBox();
        newBox();
        cleanArray();
        break;
      case 'ArrowRight':
        console.log('ArrowRight');
        move("right");
        newBox();
        newBox();
        cleanArray();
        break;
      default:
        // don't do  anything for other key types
        break;
    }
}
  
  // add an event listener to the document for  detecting the arrow keys
  document.addEventListener('keydown', handleArrowKeys);