// 0  1  2  3
// 4  5  6  7
// 8  9 10 11
//12 13 14 15
let movements = 0;
// localStorage.setItem('bestScore','0');

function score() {
    if (parseInt(localStorage.getItem('bestScore') === NaN)) {
        localStorage.setItem('bestScore','0');
    }

    let bestScore = localStorage.getItem('bestScore');
    document.getElementById('information-score').innerHTML = `${movements}`;

    if (movements > parseInt(bestScore)) {
        localStorage.setItem('bestScore',`${movements}`);
    }
    document.getElementById('information-best_score').innerHTML = parseInt(localStorage.getItem('bestScore'));
}

score();

function math(number,secondNumber,address,thirdNumber) {
    switch (address) {
        case "right":
            console.log(
                'math',{address},{number},{secondNumber},{thirdNumber},
                'first boxes '+'box: '+boxes[number+secondNumber]+' '+'second boxes '+
                'box: '+boxes[number+thirdNumber]
            );
            Attributes[number+thirdNumber] = Attributes[number+secondNumber] + Attributes[number+thirdNumber];
            movements = movements+Attributes[number+thirdNumber];
            Attributes[number+secondNumber] = 0;
            // Attributes[number] = 0
            score();

            document.getElementById(boxes[number+secondNumber]).setAttribute('data', 0);
            document.getElementById(`boxs${number+secondNumber+1}`).innerHTML = ``;
        
            document.getElementById(boxes[number+thirdNumber]).setAttribute('data',Attributes[number+thirdNumber]);
            document.getElementById(`boxs${number+thirdNumber+1}`).innerHTML = `${Attributes[number+thirdNumber]}`;

            
        break;
        case "left":
            console.log(
                'math',{address},{number},{secondNumber},{thirdNumber},
                'first boxes '+'box: '+boxes[number+secondNumber]+' '+'second boxes '+
                'box: '+boxes[number+thirdNumber]
            );
            Attributes[number-thirdNumber] = Attributes[number-secondNumber] + Attributes[number-thirdNumber];
            Attributes[number-secondNumber] = 0;
            movements = movements+Attributes[number-thirdNumber];
            // Attributes[number] = 0
            score();

            document.getElementById(boxes[number-secondNumber]).setAttribute('data', 0);
            document.getElementById(`boxs${number+secondNumber+1}`).innerHTML = ``;// I change the minus by plus
        
            document.getElementById(boxes[number-thirdNumber]).setAttribute('data',Attributes[number-thirdNumber]);
            document.getElementById(`boxs${number-thirdNumber+1}`).innerHTML = `${Attributes[number-thirdNumber]}`;
        break;

        case "up":
            console.log(
                'math',{address},{number},{secondNumber},{thirdNumber},
                'first boxes '+'box: '+boxes[number+secondNumber]+' '+'second boxes '+
                'box: '+boxes[number+thirdNumber]
            );
            Attributes[number-thirdNumber] = Attributes[number-secondNumber] + Attributes[number-thirdNumber];
            Attributes[number-secondNumber] = 0;
            movements = movements+Attributes[number-secondNumber];
            // Attributes[number] = 0;
            score();

            document.getElementById(boxes[number-secondNumber]).setAttribute('data', 0);
            document.getElementById(`boxs${number+secondNumber-1}`).innerHTML = ``;//${}
        
            document.getElementById(boxes[number-thirdNumber]).setAttribute('data',Attributes[number-thirdNumber]);
            document.getElementById(`boxs${number-thirdNumber+1}`).innerHTML = `${Attributes[number-thirdNumber]}`;
        break;

        case "down":
            console.log(
                'math',{address},{number},{secondNumber},{thirdNumber},
                'first boxes '+'box: '+boxes[number+secondNumber]+' '+'second boxes '+
                'box: '+boxes[number+thirdNumber]
            );
            Attributes[number+thirdNumber] = Attributes[number+secondNumber] + Attributes[number+thirdNumber];
            movements = movements+Attributes[number+thirdNumber];
            Attributes[number+secondNumber] = 0;
            // Attributes[number] = 0
            score();

            document.getElementById(boxes[number+secondNumber]).setAttribute('data', 0);
            document.getElementById(`boxs${number+secondNumber+1}`).innerHTML = ``;
        
            document.getElementById(boxes[number+thirdNumber]).setAttribute('data',Attributes[number+thirdNumber]);
            document.getElementById(`boxs${number+thirdNumber+1}`).innerHTML = `${Attributes[number+thirdNumber]}`;
        break;
    
        default:
            console.error('error value null');
        break;
    }
}

function calculate(address,number,){
    switch (address) {
        case "right":
            console.log("right calculate",{number});

            if (number == 0 || number == 4 || number == 8 || number == 12) {//first column
                if (Attributes[number+3] != 0 && Attributes[number+3] ==  Attributes[number+2]) {
                    math(number,2,"right",3);
                }else if (Attributes[number+3] != 0 && Attributes[number+3] == Attributes[number+1] && Attributes[number+2] == 0) {
                    math(number,1,"right",3);
                }else if (Attributes[number+3] != 0 && Attributes[number+3] == Attributes[number] && Attributes[number+1] == 0 && Attributes[number+2] == 0) {
                    math(number,0,"right",3);
                }
            }else if (number == 1 || number == 5 || number == 9 || number == 13) {//second column
                if (Attributes[number+2] != 0 && Attributes[number+2] ==  Attributes[number+1]) {
                    math(number,1,"right",2);
                }else if (Attributes[number+2] != 0 && Attributes[number+2] == Attributes[number] && Attributes[number+1] == 0) {
                    math(number,0,"right",2);
                }
            }else if (number == 2 || number == 6 || number == 10 || number == 14) {//third column
                if (Attributes[number+1] != 0 && Attributes[number+1] ==  Attributes[number]) {
                    math(number,0,"right",1);
                }
            }else if (number == 3 || number == 7 || number == 11 || number == 15){//fourth column
                //nothing
            }
        break;
        case "left":
            console.log("left calculate",{number});
            if (number == 0 || number == 4 || number == 8 || number == 12) {//first column
                //nothing
            }else if (number == 1 || number == 5 || number == 9 || number == 13) {//second column
                if (Attributes[number-1] != 0 && Attributes[number-1] == Attributes[number]) {
                    math(number,0,"left",1);
                }
            }else if (number == 2 || number == 6 || number == 10 || number == 14) {//third column
                if (Attributes[number-2] != 0 && Attributes[number-2] ==  Attributes[number-1]) {
                    math(number,1,"left",2);
                }else if (Attributes[number-2] != 0 && Attributes[number-2] == Attributes[number] && Attributes[number-1] === 0) {
                    math(number,0,"left",2);
                }else if(Attributes[number-1] != 0 && Attributes[number-1] == Attributes[number]){
                    math(number,0,"left",1);
                }
            }else if (number == 3 || number == 7 || number == 11 || number == 15){//fourth column
                if (Attributes[number-3] != 0 && Attributes[number-3] ==  Attributes[number-2]) {
                    math(number,2,"left",3);
                }else if (Attributes[number-3] != 0 && Attributes[number-3] == Attributes[number-1] && Attributes[number-2] == 0) {
                    math(number,1,"left",3);
                }else if (Attributes[number-3] != 0 && Attributes[number-3] == Attributes[number] && Attributes[number-1] == 0 && Attributes[number+2] == 0) {
                    math(number,0,"left",3);
                }   
            }
        break;
        case "up":
            console.log("up calculate",{number});
            if (number == 0 || number == 1 || number == 2 || number == 3) { //first row
                        
            }else if (number == 4 || number == 5 || number == 6 || number == 7){//second row
                if (Attributes[number-4] != 0 && Attributes[number-4] ==  Attributes[number]) {
                    math(number,0,"up",4);
                }
            }else if (number == 8 || number == 9 || number == 10 || number == 11){//third row
                if (Attributes[number-8] != 0 && Attributes[number-8] == Attributes[number-4]) {
                    math(number,4,"up",8);
                }else if (Attributes[number-8] != 0 && Attributes[number-8] == Attributes[number] && Attributes[number-4] == 0) {
                    math(number,0,"up",8);
                }
            }else if (number == 12 || number == 13 || number == 14 || number == 15){//fourth row
                if (Attributes[number-12] != 0 && Attributes[number-12] ==  Attributes[number-8]) {
                    math(number,8,"up",12);
                }else if (Attributes[number-12] != 0 && Attributes[number-12] == Attributes[number-4] && Attributes[number-8] == 0) {
                    math(number,4,"up",12);
                }else if (Attributes[number-12] != 0 && Attributes[number-12] == Attributes[number] && Attributes[number-4] == 0 && Attributes[number-4] == 0) {
                    math(number,0,"up",12);
                }
            }
        break;
        case "down":
            console.log("down calculate",{number});
            if (number == 0 || number == 1 || number == 2 || number == 3) { //fourth row
                if (Attributes[number+12] != 0 && Attributes[number+12] ==  Attributes[number+8]) {
                    math(number,8,"down",12);
                }else if (Attributes[number+12] != 0 && Attributes[number+12] == Attributes[number+4] && Attributes[number+8] == 0) {
                    math(number,4,"down",12);
                }else if (Attributes[number+12] != 0 && Attributes[number+12] == Attributes[number] && Attributes[number+4] == 0 && Attributes[number+4] == 0) {
                    math(number,0,"up",12);
                }       
            }else if (number == 4 || number == 5 || number == 6 || number == 7){//third row
                if (Attributes[number+8] != 0 && Attributes[number+8] == Attributes[number+4]) {
                    math(number,4,"down",8);
                }else if (Attributes[number+8] != 0 && Attributes[number+8] == Attributes[number] && Attributes[number+4] == 0) {
                    math(number,0,"down",8);
                }
            }else if (number == 8 || number == 9 || number == 10 || number == 11){//second row
                if (Attributes[number+4] != 0 && Attributes[number+4] ==  Attributes[number]) {
                    math(number,0,"down",4);
                }
            }else if (number == 12 || number == 13 || number == 14 || number == 15){//first row
                
            }
        break;
    
        default:
            console.error("Invalid direction");
        break;
    }
}