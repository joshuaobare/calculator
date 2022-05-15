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

function operate(x,c,d) {

let result = "";
    
    if (x == '+') {
    result = add(c,d);
    }

    else if (x == '-') {
    result = subtract(c,d);
    }
    
    else if (x == '/') {
    result = divide(c,d);
    }
    
    else if (x == '*') {
    result = multiply(c,d);
    }

    return result;
}

const numbtn= document.querySelectorAll('.num')
console.log(numbtn)
numbtn.forEach((button) =>{
    button.addEventListener('click', function(){
        document.getElementById('disp').innerHTML = button.value}
        
        )})