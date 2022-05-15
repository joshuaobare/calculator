function add(a,b) {
    return a+b;
}

function subtract(a,b) {
    return a-b;
}

function multiply(a,b) {
    return a*b;
}

function divide(a,b) {
    return a/b;
}

function operate(x,a,b) {

let result = "";
    
    if (x == '+') {
    result = add(a,b);
    }

    else if (x == '-') {
    result = subtract(a,b);
    }
    
    else if (x == '/') {
    result = divide(a,b);
    }
    
    else if (x == '*') {
    result = multiply(a,b);
    }

    console.log(result);
}

operate('/',7,10)
