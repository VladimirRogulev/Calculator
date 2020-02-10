const screen = document.getElementById("window");
let result;
let act;
let sign = false;

const action = (action) => {
	act = action;
	sign = false;
	result = parseInt(screen.innerHTML);
};

const number = (num) => {
    if(screen.innerHTML.length < 12){
        if(screen.innerHTML !== '0' && sign === true ){
            screen.innerHTML += num;
        } else	{
            screen.innerHTML = num;
            sign = true;
        }
    }
};

const equal = () => {
    if(act !== undefined){
        switch(act){
            case '/':
                result /= parseInt(screen.innerHTML);
                break;
            case '*':
                result *= parseInt(screen.innerHTML);
                break;
            case '-':
                result -= parseInt(screen.innerHTML);
                break;
            case '+':
                result += parseInt(screen.innerHTML);
                break;
        }

        screen.innerHTML = result;
        act = undefined;
    }
};
