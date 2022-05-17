const btns= document.querySelectorAll('button')
let dispValue = "0"
let firstNum = null
let secondNum = null
let firstOp = null
let secondOp = null
let result = null




function operate(x,c,d) {

let res = "";
    
    if (x === '+') {
    res = c+d;
    }

    else if (x === '-') {
    res = c-d;
    }
    
    else if (x === '/') {
    res = c/d;
    }
    
    else if (x === '*') {
    res = c*d;
    }

    return res;
}

function clear() {
    dispValue = '0';
    firstNum = null;
    secondNum = null;
    firstOp = null;
    secondOp = null;
    result = null;
}

function updateDisplay() {
    const disp = document.getElementById('disp');
    disp.innerText = dispValue;
    if(dispValue.length > 9) {
        disp.innerText = dispValue.substring(0, 9);
    }
}

updateDisplay();

function clickButton() {
    for(let i = 0; i < btns.length; i++) {
        btns[i].addEventListener('click', function() {
            if(btns[i].classList.contains('num')) {
                numInput(btns[i].value);
                updateDisplay();
            } else if(btns[i].classList.contains('opr')) {
                oprInput(btns[i].value);
            } else if(btns[i].classList.contains('eq')) {
                EqIn();
                updateDisplay();
            } else if(btns[i].classList.contains('dec')) {
                DecIn(btns[i].value);
                updateDisplay();
            } else if(btns[i].classList.contains('clr')) {
                clear();
                updateDisplay();
            } else if(btns[i].classList.contains('del')) {
                disp.innerText = disp.innerText.slice(0, -1)

            }}
    )}
}

clickButton();



function numInput(num) {
    if(firstOp === null) {
        if(dispValue === '0' || dispValue === 0) {                                                        
            dispValue = num;                            // 1st click - handles first operand input
        } else if(dispValue === firstNum) {                                                        
            dispValue = num;                            // starts new operation after EqIn()
        } else {
            dispValue += num;
        }
    } else {                                                        
        if(dispValue === firstNum) {                    // 3rd/5th click - inputs to secondNum
            dispValue = num;
        } else {
            dispValue += num;
        }
    }
}

function oprInput(opr) {
    if(firstOp != null && secondOp === null) {          // 4th click - handles input of second operator                                                        
        secondOp = opr;
        secondNum = dispValue;
        result = operate(firstOp, Number(firstNum), Number(secondNum));
        dispValue = roundAccurately(result, 15).toString();
        firstNum = dispValue;
        result = null;
    } else if(firstOp != null && secondOp != null) {                                                        
        secondNum = dispValue;                             // 6th click - new secondOp
        result = operate(firstOp, Number(firstNum), Number(secondNum));
        secondOp = opr;
        dispValue = roundAccurately(result, 15).toString();
        firstNum = dispValue;
        result = null;
    } else {                                                         
        firstOp = opr;                                     // 2nd click - handles first operator input
        firstNum = dispValue;
    }
}

function EqIn() {
                                                    
    if(firstOp === null) {                // hitting equals doesn't display undefined before operate()
        dispValue = dispValue;
    } else if(secondOp != null) {
        //handles final result
        secondNum = dispValue;
        result = operate(firstOp, Number(firstNum), Number(secondNum));
        if(result === 'lmao') {
            dispValue = 'lmao';
        } else {
            dispValue = roundAccurately(result, 15).toString();
            firstNum = dispValue;
            secondNum = null;
            firstOp = null;
            secondOp = null;
            result = null;
        }
    } else {
        //handles first operation
        secondNum = dispValue;
        result = operate(firstOp, Number(firstNum), Number(secondNum));
        if(result === 'lmao') {
            dispValue = 'lmao';
        } else {
            dispValue = roundAccurately(result, 15).toString();
            firstNum = dispValue;
            secondNum = null;
            firstOp = null;
            secondOp = null;
            result = null;
        }
    }
}

function DecIn(dot) {
    if(dispValue === firstNum || dispValue === secondNum) {
        dispValue = '0';
        dispValue += dot;
    } else if(!dispValue.includes(dot)) {
        dispValue += dot;
    } 
}

function roundAccurately(num, places) {
    return parseFloat(Math.round(num + 'e' + places) + 'e-' + places);
}


