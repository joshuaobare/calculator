const disp = document.getElementById('disp')
const btn= document.querySelectorAll('button')

function operate(x,c,d) {

let result = "";
    
    if (x == '+') {
    result = c+d;
    }

    else if (x == '-') {
    result = c-d;
    }
    
    else if (x == '/') {
    result = c/d;
    }
    
    else if (x == '*') {
    result = c*d;
    }

    return result;
}

function clear() {
    document.getElementById('disp').innerHTML = ""
}


btns=Array.from(btn)

btns.map( button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case 'CLEAR':
                clear()
                break;

            case 'DEL':
                if(disp.innerText) {
                    disp.innerText = disp.innerText.slice(0, -1)
                }
                break;

            default:
                disp.innerText += e.target.innerText;

                if((e.target.innerText == "-") || (e.target.innerText == "+") || (e.target.innerText == "-") || (e.target.innerText == "/"))


                break;



        }




    }
    
    
    
    
    
    
    )
})

 