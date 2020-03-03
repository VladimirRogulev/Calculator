const screen = document.getElementById('window');
sign = false;
point = false;

const number = (number) => {
    if(screen.innerHTML.length < 12){
        if(screen.innerHTML !== '0'){
            screen.innerHTML += number;
        } else {
            screen.innerHTML = number;
        }
    }
    sign = false;
};

const action = (action) => {
    if(screen.innerHTML.length < 11){
        if (!sign){
            screen.innerHTML += action;
            sign = true;
            point = false;
        } else {
            screen.innerHTML = screen.innerHTML.substring(0, screen.innerHTML.length - 1) + action;
            point = false;
        }
    }
};

const dot = (dot) => {
    if (screen.innerHTML.length < 11 && !point && !sign){
        screen.innerHTML += dot;
        point = true;
    }
};

const clean = () => {
    screen.innerHTML = '0';
    sign = false;
    point = false;
};

const back = () => {
    if (screen.innerHTML === 'Infinity'){
        clean();
    } else if (point){
        screen.innerHTML = screen.innerHTML.substring(0, screen.innerHTML.length - 1);
        point = false;
    } else if (sign){
        screen.innerHTML = screen.innerHTML.substring(0, screen.innerHTML.length - 1);
        sign = false;
    } else {
        screen.innerHTML = screen.innerHTML.substring(0, screen.innerHTML.length - 1);
    }
};

const equal = () => {
    let result = eval(screen.innerHTML);

    if (String(+result.toFixed(10)).length < 13){
        screen.innerHTML = +result.toFixed(10);
    } else {
        screen.innerHTML = '0';
        alert('Число не может поместиться на экран!'); 
    }
};