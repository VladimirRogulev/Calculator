let result = 0; 
let act = '';
let sign = false;

function action(action) {
	act = action;
	sign = false;
	result = parseInt(window.innerHTML);
}

function number(num) {

    const window = document.getElementById("window");

    if(window.innerHTML.length < 12){

        if(window.innerHTML != 0 && sign == true ){
            window.innerHTML += num;
        } else	{
            window.innerHTML = num;
            sign = true; 
        }
    }   
}

function equal() {
    
    if(act != ''){		
        switch(act){
            case '/': 
                result = result / parseInt(window.innerHTML);
                break;
            case '*': 
                result = result * parseInt(window.innerHTML);
                break;
            case '-': 
                result = result - parseInt(window.innerHTML);
                break;
            case '+': 
                result = result + parseInt(window.innerHTML);
                break;
        }
        window.innerHTML = result;
        act = ''; 
    } 
}
