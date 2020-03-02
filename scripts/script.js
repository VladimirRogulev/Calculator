const screen = document.getElementById('window');
let result;
let act;
let sign = false;
let point = false;

const action = (action) => {
	act = action;
    sign = false;
    point = false;
	result = Number(screen.innerHTML);
};

const dot = (dot) => {
    if(screen.innerHTML.length < 12 && !point){
            screen.innerHTML += dot;
            point = true;
            sign = true;
    }
};

const number = (num) => {
    if(screen.innerHTML.length < 12){
        if(+screen.innerHTML && sign){
            screen.innerHTML += num;
        } else {
            screen.innerHTML = num;
            sign = true;
        }
    }
};

const equal = () => {
    if(act !== undefined){
        switch(act){
            case '/':
                result /= Number(screen.innerHTML);
                break;
            case '*':
                result *= Number(screen.innerHTML);
                break;
            case '-':
                result -= Number(screen.innerHTML);
                break;
            case '+':
                result += Number(screen.innerHTML);
                break;
            default:
                result = Number(screen.innerHTML);
        }

        if (String(+result.toFixed(10)).length < 13){
            screen.innerHTML = +result.toFixed(10);
            act = undefined;
        } else {
            screen.innerHTML = '0';
            alert('Число не может поместиться на экран!'); 
        }
    }
};

const clean = () => {
    screen.innerHTML = '0';
    result = 0;
    act = undefined;
    sign = false;
    point = false;
};

const back = () => {
    if (screen.innerHTML === 'Infinity'){
        clean();
    } else {
        screen.innerHTML = screen.innerHTML.substring(0, screen.innerHTML.length - 1);
    }
};
