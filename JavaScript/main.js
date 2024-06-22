let outScore = document.getElementById("information-score");
let outBestScore = document.getElementById("information-best_score");
let buttonNew = document.getElementById("information-buttonNew");
let buttonUndo =  document.getElementById("information-buttonUndo");
let count = 0;
//4*4 board

const Attributes = Array(16);
const boxes = Array(16);// 0 = box1, 1 = box2, 2 = box3, etc.
createArray();
// number random
const getRandomNumber = (FirstNumber,lastNumber)  => { return Math.floor(Math.random() * lastNumber) + FirstNumber ;}


function createArray() {
    for (let index = 0; index < boxes.length; index++) {
        boxes[index] = "box"+ (index + 1);
    }
    for (let index = 0; index < boxes.length; index++) {
        const element = boxes[index];
        document.getElementById(element).setAttribute('data', 0);
        document.getElementById(`boxs${index+1}`).innerHTML = ``;
    }
    NewGame();
}

function NewGame(){

    for (let index = 0; index < boxes.length; index++) {
        document.getElementById(boxes[index]).setAttribute('data', 0);
        Attributes[index] = 0;
        document.getElementById(`boxs${index+1}`).innerHTML = ``;
    }
    for (let index = 0; index < 2; index++) {
        let value = Math.floor(Math.random() * 4) + 1;
        if((Math.floor(Math.random() * 4) + 1) == (Math.floor(Math.random() * 4) + 1)){
            if (value == 4) {
                value = value  - 2;
            }
        }
        if (value == 2 || value == 4) {
            let location = Math.floor(Math.random() * boxes.length);
            if (Attributes[location] != 0) {
                index--;
            }else{
                document.getElementById(boxes[location]).setAttribute('data', value);
                Attributes[location] == value;
                document.getElementById(`boxs${location+1}`).innerHTML = `${value}`;
                Attributes[location] =  value;
            }
            
        }else{
            index--;
        }
        
    }
}

function newBox() {
    cleanArray();
    if (count === 0) {
        for (let index = 0; index < 1; index++) {
            let value = Math.floor(Math.random() * 4) + 1;
            if((Math.floor(Math.random() * 4) + 1) == (Math.floor(Math.random() * 4) + 1)){
                if (value == 4) {
                    value = value  - 2;
                }
            }
            if (value == 2 || value == 4) {
                let location = Math.floor(Math.random() * boxes.length);
                if (Attributes[location] !== 0) {
                    index--;
                }else{
                    document.getElementById(boxes[location]).setAttribute('data', value);
                    Attributes[location] == value;
                    document.getElementById(`boxs${location+1}`).innerHTML = `${value}`;
                    Attributes[location] =  value;
                    count++;
                    console.log('newBox location: '+boxes[location]+'. ',{value});
                }
                
            }else{
                index--;
            } 
            cleanArray();  
        }
    }else{
        count=0;
    }
    cleanArray();
}

document.getElementById('information-buttonNew').addEventListener('click', ()=>NewGame());
