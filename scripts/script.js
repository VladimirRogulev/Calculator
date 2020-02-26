const screen = document.getElementById("window");
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
    if(screen.innerHTML.length < 12){
        if(!point){
            screen.innerHTML += dot;
            point = true;
            sign = true;
        }
    }
};

const number = (num) => {
    if(screen.innerHTML.length < 12){
        if(screen.innerHTML !== '0' && sign){
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
        }

        if (String(+result.toFixed(10)).length < 13){
            screen.innerHTML = +result.toFixed(10);
            act = undefined;
        } else {
            screen.innerHTML = "0";
            alert("Число не может поменстится на экран!"); 
        }
    }
};

const clean = () => {
    screen.innerHTML = '0';
    result = 0;
    act = '';
    sign = false;
    point = false;
}

const back = () => {
    screen.innerHTML = screen.innerHTML.substring(0, screen.innerHTML.length - 1);
}
