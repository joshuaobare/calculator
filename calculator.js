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

function clear() {
    document.getElementById('disp').innerHTML = ""
}

const numbtn= document.querySelectorAll('.num')

numbtn.forEach((button) =>{
    button.addEventListener('click', function(){
        document.getElementById('disp').innerHTML = button.value
        
        
    })})

const oprbtn = document.querySelectorAll('.opr')
oprbtn.forEach((button) => {
    button.addEventListener('click',function(){
        document.getElementById('disp').innerHTML = operate(button.value,55,6)
    })
})

const clrbtn = document.querySelector('#clr')
clrbtn.addEventListener('click', clear)