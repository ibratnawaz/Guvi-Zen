let scoreInfo = window.location.href.split('?');
let score = scoreInfo[1].split('=');

function createMyTag(myTag, myClass = '', myId = '') {
    let ele = document.createElement(myTag);
    ele.setAttribute('class', myClass);
    ele.id = myId;
    return ele;
}

function getInput(ele) {
    if (ele.value.length > 0) {
        document.getElementById('saveScoreBtn').disabled = false;
    } else {
        document.getElementById('saveScoreBtn').disabled = true;
    }
}

function saveScore() {

    if (localStorage.getItem('highScore') < score[1]) {
        localStorage.setItem('highScore', score[1]);
        localStorage.setItem('highScoreUser', document.getElementById('username').value);
    } else {
        localStorage.setItem('highScore', score[1]);
        localStorage.setItem('highScoreUser', document.getElementById('username').value);
    }
    localStorage.setItem(`${document.getElementById('username').value}`, score[1]);
    alert('Your result has been saved');
    document.getElementById('username').disabled = true;
    document.getElementById('saveScoreBtn').disabled = true;
}

let container = createMyTag('div', 'container');
document.body.append(container);


let h1 = createMyTag('h1', 'finalScore mb-3 text-info', 'finalScore');
h1.innerText = score[1];

let userInput = createMyTag('input', 'form-control mb-3', 'username');
userInput.placeholder = "Username";
userInput.setAttribute('oninput', 'getInput(this)');

let saveBtn = createMyTag('button', 'btn btn-primary saveBtn mb-3', 'saveScoreBtn');
saveBtn.innerText = "Save";
saveBtn.disabled = true;
saveBtn.setAttribute('onclick', 'saveScore()');

let playBtn = createMyTag('a', 'btn btn-primary mb-3', 'playAgain');
playBtn.href = "game.html";
playBtn.innerText = "Play Again";

let homeBtn = createMyTag('a', 'btn btn-primary mb-3', 'playAgain');
homeBtn.href = "../index.html";
homeBtn.innerText = "Go Home";

container.append(h1, userInput, saveBtn, playBtn, homeBtn);