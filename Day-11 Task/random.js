let input = document.createElement('div');
input.classList.add('input', 'flex');
input.setAttribute('id', 'result');
input.innerText = '--------';

let btn = document.createElement('button');
btn.classList.add('btn', 'flex');
btn.innerHTML = 'Generate Unique 8 Digits Number';
btn.setAttribute('onclick', "generate('')");
document.body.append(input, btn);


function generate(str) {

    if (str.length == 8) {
        document.getElementById('result').innerText = str;
        return str;
    }

    let randNum = Math.random().toFixed(1) * 10;
    if (!str.includes(randNum)) {
        str += randNum
        generate(str);
    } else {
        generate(str);
    }
}