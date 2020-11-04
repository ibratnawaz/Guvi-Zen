function createMyTag(myTag, myClass = '', myId = '') {
    let ele = document.createElement(myTag);
    ele.setAttribute('class', myClass);
    ele.id = myId;
    return ele;
}

let container = createMyTag('div', 'container', 'container');
document.body.append(container);

let info = createMyTag('div', 'info offset-md-3 offset-lg-3', 'info');
container.append(info);

let mainHeading = createMyTag('h2', 'heading text-center', 'heading');
mainHeading.innerText = "Quick Quiz";

let playBtn = createMyTag('a', 'btn btn-primary btn-lg btn-block play mt-3', 'play');
playBtn.setAttribute('href', 'pages/game.html');
playBtn.setAttribute('role', 'button');
playBtn.innerText = "Play";

let highScoreBtn = createMyTag('a', 'btn btn-primary btn-lg btn-block highScores mt-3', 'highScores');
highScoreBtn.setAttribute('href', 'game.html');
highScoreBtn.setAttribute('role', 'button');
highScoreBtn.innerText = "High Scores";
highScoreBtn.href = "pages/highscores.html";

info.append(mainHeading, playBtn, highScoreBtn);