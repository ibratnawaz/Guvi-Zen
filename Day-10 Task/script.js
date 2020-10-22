let row = document.querySelector('.row');

let result = document.createElement('div');
result.classList.add('result');
result.innerHTML = `
    <div class="sec-1 num" id="inputs">0</div>
    <div class="sec-1 res" id="output">0</div>
`;

let keys = document.createElement('div');
keys.classList.add('keys');

let btn1 = createTag('button', '%', "calculate('%')", 'bold', 'btn-4');
let btn2 = createTag('button', 'ESC', "clearFun('cls')", 'bold', 'btn-8');
let btn3 = createTag('button', 'C', "clearFun('all')", 'bold', 'btn-7');
let btn4 = createTag('button', '&#9224;', "calculate('BS')", 'bold', 'btn-9');
let btn5 = createTag('button', '9', "calculate(9)");
let btn6 = createTag('button', '8', "calculate(8)");
let btn7 = createTag('button', '7', "calculate(7)");
let btn8 = createTag('button', '&#xF7;', "calculate('/')", 'bold', 'btn-5');
let btn9 = createTag('button', '6', "calculate(6)");
let btn10 = createTag('button', '5', "calculate(5)");
let btn11 = createTag('button', '4', "calculate(4)");
let btn12 = createTag('button', '&#215;', "calculate('*')", 'bold', 'btn-6');
let btn13 = createTag('button', '3', "calculate(3)");
let btn14 = createTag('button', '2', "calculate(2)");
let btn15 = createTag('button', '1', "calculate(1)");
let btn16 = createTag('button', '-', "calculate('-')", 'bold', 'btn-2');
let btn17 = createTag('button', '0', "calculate(0)");
let btn18 = createTag('button', '.', "calculate('.')", 'bold', 'btn-1');
let btn19 = createTag('button', '=', "calculate('=')", 'bold', 'btn-10');
let btn20 = createTag('button', '+', "calculate('+')", 'bold', 'btn-3');

keys.append(btn1, btn2, btn3, btn4, btn5, btn6, btn7, btn8, btn9, btn10, 
    btn11, btn12, btn13, btn14, btn15, btn16, btn17, btn18, btn19, btn20);

row.append(result, keys);


function createTag(tagName, text, clickFun = '', className = '', idName = '') {
    let tag = document.createElement(tagName);
    tag.setAttribute('class', className);
    tag.setAttribute('id', idName);
    tag.setAttribute('onclick', clickFun);
    tag.innerHTML = text;
    return tag;
}

let exp = '';
calculate = (key) => {
    // console.log(key,exp);
    if (key == '=') {
        try {
            document.getElementById('output').innerText = eval(exp);
        } catch (error) {
            alert(`${exp}  is Invalid Expression`);
        }
    } else if (key == 'BS') {
        if (exp != '') {
            exp = exp.slice(0, (exp.length) - 1);
            if (exp == '') {
                clearFun('cls');
            }
        }
    } else {
        exp += key;
    }

    if (exp != '')
        document.getElementById('inputs').innerText = exp;
}

clearFun = (event) => {
    if (event == 'cls') {
        exp = '';
        document.getElementById('inputs').innerText = '0';
        document.getElementById('output').innerText = '0';
    }
}

document.body.onkeydown = (keyPress) => {

    if (keyPress.keyCode == 13) {
        calculate('=');
    } else if (keyPress.keyCode == 8) {
        calculate('BS');
    } else if (keyPress.keyCode == 27) {
        clearFun('cls');
    } else if ((keyPress.key >= 0 && keyPress.key <= 9) ||
        keyPress.key == '%' || keyPress.key == '/' ||
        keyPress.key == '*' || keyPress.key == '-' ||
        keyPress.key == '+') {

        calculate(keyPress.key);
    }

}