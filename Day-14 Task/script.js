let div = document.getElementById('div');

function createTimer() {
    setTimeout(function () {
        setTimeout(function () {
            setTimeout(function () {
                setTimeout(function () {
                    setTimeout(function () {
                        setTimeout(function () {
                            setTimeout(function () {
                                setTimeout(function () {
                                    setTimeout(function () {
                                        setTimeout(function () {
                                            document.body.style.background = 'gray';
                                            document.body.style.backgroundImage = 'url(winter.jpg)';
                                            let msg = document.createElement('div');
                                            msg.innerHTML = 'Winter is Coming...';
                                            msg.style.fontSize = '5em';
                                            msg.style.color = 'white';
                                            document.body.innerHTML = '';
                                            document.body.appendChild(msg);
                                        }, 500);
                                        div.innerHTML = 1;
                                        document.body.style.background = 'linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12)';
                                    }, 1000);
                                    div.innerHTML = 2;
                                    document.body.style.background = 'linear-gradient(to right top, #1968e0, #755dc4, #9357a8, #9e578f, #9d5c7b)';
                                }, 1000);
                                div.innerHTML = 3;
                                document.body.style.background = 'linear-gradient(to right, rgb(18, 194, 233), rgb(196, 113, 237), rgb(246, 79, 89))';
                            }, 1000);
                            div.innerHTML = 4;
                            document.body.style.background = 'linear-gradient(to bottom right, #4D6E6B, #6CFAC4)';
                        }, 1000);
                        div.innerHTML = 5;
                        document.body.style.background = 'linear-gradient(to right, rgb(41, 128, 185), rgb(109, 213, 250), rgb(255, 255, 255))'
                    }, 1000);
                    div.innerHTML = 6;
                    document.body.style.background = 'linear-gradient(to right, rgb(253, 200, 48), rgb(243, 115, 53))';
                }, 1000);
                div.innerHTML = 7;
                document.body.style.background = 'linear-gradient(to right, rgb(138, 35, 135), rgb(233, 64, 87), rgb(242, 113, 33))';
            }, 1000);
            div.innerHTML = 8;
            document.body.style.background = 'linear-gradient(to right, rgb(84, 74, 125), rgb(255, 212, 82))'
        }, 1000);
        div.innerHTML = 9;
        document.body.style.background = 'linear-gradient(to right, rgb(131, 96, 195), rgb(46, 191, 145))';
    }, 1500);
    div.innerHTML = 10;
    document.body.style.background = 'linear-gradient(to right top, #e0b519, #fd8351, #e76686, #a866a4, #5c679d)';

}

createTimer();