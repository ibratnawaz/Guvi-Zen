getAge=()=>{
    let inp=(document.getElementById('dob').value)
    let dob=inp.split('-');
    let curDate=new Date().getDate();
    let curMonth=new Date().getMonth()+1;
    let curYear=new Date().getFullYear();
    let curHours=new Date().getHours();
    let curMin=new Date().getMinutes();
    let curSec=new Date().getSeconds();
    let curMilliSec=new Date().getMilliseconds();

    if(dob[1]>curMonth){
        var month=curMonth;
        var year=curYear-dob[0]-1;
    }
    else{
        var month=curMonth-dob[1];
        var year=curYear-dob[0];
    }
    let age=`${year} years ${month} months ${Math.abs(curDate-dob[2])} days ${curHours} hours ${curMin} minutes ${curSec} seconds ${curMilliSec} milliseconds`;
    document.getElementById('result').innerText=age;
}