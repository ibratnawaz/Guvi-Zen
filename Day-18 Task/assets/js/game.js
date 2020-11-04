async function getQues() {
    try {
        let api = await fetch('https://opentdb.com/api.php?amount=10&category=18&difficulty=medium');
        let response = await api.json();

        let container = createMyTag('div', 'container', 'container');
        document.body.append(container);

        let barBox = createMyTag('div', '', 'ques-bar');
        let bar = createMyTag('div', 'progress');
        let val = createMyTag('div', 'progress-bar bg-info', 'ques');
        val.role = "progressbar";
        val.style.width = "0%";
        val.setAttribute('aria-valuenow', "75");
        val.setAttribute('aria-valuemin', "0");
        val.setAttribute('aria-valuemax', "100");
        bar.append(val);
        barBox.append(bar);
        container.append(barBox);

        response.results.forEach((x, z) => {


            let box = createMyTag('div', 'box', `box-${z+1}`)
            container.append(box)

            let questionCount = createMyTag('div', 'questionCount', 'questionCount')


            let progressText = createMyTag('h6', 'progressText ml-2', 'progressText')
            progressText.innerText = `Question  ${z+1}/10`

            questionCount.append(progressText);

            let questionHeader = createMyTag('div', 'questionHeader', 'questionHeader')

            let questionText = createMyTag('h5', 'questionText ml-2')
            questionText.innerText = `${x.question}`
            questionHeader.append(questionText)

            let answerBox = createMyTag('div', 'answerBox', 'answerBox')


            let options1 = createMyTag('div', 'options d-flex m-2 bg-primary', `options1-${z+1}`)
            options1.setAttribute('onclick', `saveProgress('${x.incorrect_answers[0]}','${x.correct_answer}','${z+1}','choiceBtn1-${z+1}')`)

            let choiceText1 = createMyTag('div', 'choiceText text-white m-3', 'choiceText1')
            choiceText1.innerText = "A"

            let choiceBtn = createMyTag('button', 'btn  btn-primary btn-lg btn-block answer', `choiceBtn1-${z+1}`)
            choiceBtn.innerText = `${x.incorrect_answers[0]}`
            options1.append(choiceText1, choiceBtn)
            answerBox.append(options1);



            let options2 = createMyTag('div', 'options d-flex m-2 bg-primary', `options2-${z+1}`)
            options2.setAttribute('onclick', `saveProgress('${x.correct_answer}','${x.correct_answer}','${z+1}','choiceBtn2-${z+1}')`)

            let choiceText2 = createMyTag('div', 'choiceText text-white m-3', 'choiceText2')
            choiceText2.innerText = "B"
            let choiceBtn2 = createMyTag('button', 'btn  btn-primary btn-lg btn-block answer', `choiceBtn2-${z+1}`)
            choiceBtn2.innerText = `${x.correct_answer}`
            options2.append(choiceText2, choiceBtn2)
            answerBox.append(options2);


            if (x.incorrect_answers[1]) {
                let options3 = createMyTag('div', 'options d-flex m-2 bg-primary', `options3-${z+1}`)
                options3.setAttribute('onclick', `saveProgress('${x.incorrect_answers[1]}','${x.correct_answer}','${z+1}','choiceBtn3-${z+1}')`)
                let choiceText3 = createMyTag('div', 'choiceText text-white m-3', 'choiceText3')
                choiceText3.innerText = "C"
                let choiceBtn3 = createMyTag('button', 'btn  btn-primary btn-lg btn-block answer', `choiceBtn3-${z+1}`)
                choiceBtn3.innerText = `${x.incorrect_answers[1]}`
                options3.append(choiceText3, choiceBtn3)
                answerBox.append(options3);
            }
            if (x.incorrect_answers[2]) {
                let options4 = createMyTag('div', 'options d-flex m-2 bg-primary', `options4-${z+1}`)
                options4.setAttribute('onclick', `saveProgress('${x.incorrect_answers[2]}','${x.correct_answer}','${z+1}','choiceBtn4-${z+1}')`)
                let choiceText4 = createMyTag('div', 'choiceText text-white m-3', `choiceText4`)
                choiceText4.innerText = "D"
                let choiceBtn4 = createMyTag('button', 'btn  btn-primary btn-lg btn-block answer', `choiceBtn4-${z+1}`)
                choiceBtn4.innerText = `${x.incorrect_answers[2]}`
                options4.append(choiceText4, choiceBtn4)
                answerBox.append(options4);
            }

            box.append(questionCount, questionHeader, answerBox);
        });

        let finishBtn = createMyTag('a', 'btn btn-success ml-2 mt-3 mb-2 float-right', 'finish-btn');
        finishBtn.type = "button";
        finishBtn.innerText = "Finish Test";
        finishBtn.setAttribute('onclick', `finishTest()`);
        finishBtn.href = `end.html?score=${score}`;
        container.append(finishBtn);
    } catch (error) {
        console.log(error);
    }

}

getQues();

function createMyTag(myTag, myClass = '', myId = '') {
    let ele = document.createElement(myTag);
    ele.setAttribute('class', myClass);
    ele.id = myId;
    return ele;
}

let proVal = 10;
let score = 0;

function saveProgress(current, actual, boxId, opId) {
    if (actual == current) {
        score += 10;
    }

    document.getElementById('ques').style.width = `${proVal}%`;
    proVal += 10;

    document.getElementById(opId).style.backgroundColor = "#007bff";
    document.getElementById(opId).style.color = "white";

    document.getElementById(`box-${boxId}`).style.pointerEvents = "none";
}

function finishTest() {
    // localStorage.setAttribute('score',score);
    console.log(score);
    document.getElementById('finish-btn').href = `end.html?score=${score}`;
}