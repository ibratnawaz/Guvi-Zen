let div=document.getElementById('div');

function createTimer(){
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
                                            document.body.innerHTML='';
                                            document.body.style.backgroundImage='url(winter.jpg)';
                                            let msg=document.createElement('div');
                                            msg.innerHTML='Winter is Coming...';
                                            msg.style.fontSize='5em';
                                            msg.style.color='white';
                                            document.body.appendChild(msg);
                                        }, 1000);
                                        div.innerHTML=1;
                                    }, 1000);
                                    div.innerHTML=2;
                                }, 1000);
                                div.innerHTML=3;
                            }, 1000);
                            div.innerHTML=4;
                        }, 1000);
                        div.innerHTML=5;
                    }, 1000);
                    div.innerHTML=6;
                }, 1000);
                div.innerHTML=7;
            }, 1000);
            div.innerHTML=8;
        }, 1000);
        div.innerHTML=9;
    }, 1500);
    div.innerHTML=10;
}

createTimer();