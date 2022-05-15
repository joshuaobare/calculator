function add(a,b) {
    return a+b
}

function subtract(a,b) {
    return a-b
}

function multiply(a,b) {
    return a*b
}

function divide(a,b) {
    return a/b
}

function operate(x) {
    if (x == '+') {
        add()
    }

    else if (x == '-') {
        subtract()
    }
    
    else if (x == '/') {
        divide()
    }
    
    else if (x == '*') {
        multiply()
    }
}