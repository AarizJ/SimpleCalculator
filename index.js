let display = document.getElementById("display");

function addToDisplay(input) {
    display.textContent += input;
    maxLength();
    maxDigits();
}

function Calc() {
    try{
        display.textContent = eval(display.textContent);
        maxLength();
        maxDigitsAfterDecimalPt();
    } 
    catch(error) {
        display.textContent = "Error";
    }
}

function clearDisplay() {
    display.textContent="";
}
function delDisplay() {
    display.textContent=display.textContent.slice(0,-1);
}

function maxLength() {
    const currentLength=display.textContent.length;
    const maxLength=14;
    if(currentLength>maxLength){
        display.style.fontSize='26px';
    } else {
        display.style.fontSize='30px';
    }
}

function maxDigits() {
    const currentDigits = display.textContent.length;
    const maxDigits = 18;
    if(currentDigits>maxDigits) {
        alert("Max Digits");
        display.textContent = display.textContent.slice(0,-1);
    }
}

function maxDigitsAfterDecimalPt() {
    const parts=display.textContent.split('.');
    const maxDigits=5;

    if(parts.length>1) {
        if(parts[1].length>maxDigits) {
            parts[1] = parts[1].slice(0,maxDigits);
        //array method to concatenate the elements to a single string [array.join(sep)]
            display.textContent=parts.join('.'); 
        }
    }
}