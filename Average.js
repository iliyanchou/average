var inputField = document.getElementById('input');
let inputArray = [];
function getValues(){
    let inputFieldContent = inputField.value;
    if(inputFieldContent.length > 0){
    for(i = 0, j = 0; i<inputFieldContent.length; i++){
        if(i == 0){
            inputArray[j] = inputFieldContent[0];
        }
        else{
            if(inputFieldContent[i] !== ','){
                if(inputArray[j]){
                inputArray[j] += inputFieldContent[i];
                }
                else{
                    inputArray[j] = inputFieldContent[i];
                }
            }
            else{
                j++;
            }
        }
    }

    for(i = 0; i<inputArray.length; i++){
        inputArray[i] = Number(inputArray[i]);
    }
}
else{
    inputArray[0] = 0;
}
}


function calculateAvg() {
    let sum = 0;
    inputArray.forEach(element => {
        sum += element;
    });
    let avg = sum / inputArray.length;
    return avg;
}

function getAverage(){
    getValues();
    var outputField = document.getElementById('output');
    let avg = calculateAvg();
    outputField.innerHTML = `The average is ${avg}`;
    inputArray = [];
}
