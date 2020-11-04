function createMyTag(myTag, myClass = '', myId = '') {
    let ele = document.createElement(myTag);
    ele.setAttribute('class', myClass);
    ele.id = myId;
    return ele;
}

let container = createMyTag('div', 'container', 'container');
document.body.append(container);

let h1 = createMyTag('h1');
h1.innerText = "High Score";


let score = createMyTag('h1', 'mt-2', 'score');
score.innerText = `${localStorage.getItem('highScoreUser')} - ${localStorage.getItem('highScore')}`;



let homeBtn = createMyTag('a', 'btn btn-primary btn-lg mt-5', 'home');
homeBtn.setAttribute('href', '../index.html');
homeBtn.innerText = "Go Home";

container.append(h1, score, homeBtn);