var cat = {
    name: 'Fluffy',
    activities: ['play', 'eat cat food'],
    catFriends: [{
            name: 'bar',
            activities: ['be grumpy', 'eat bread omblet'],
            weight: 8,
            furcolor: 'white'
        },
        {
            name: 'foo',
            activities: ['sleep', 'pre - sleep naps'],
            weight: 3
        }
    ]
}
console.log(cat);

cat.height = 8;
cat.weight = 10;
cat.name = "Fluffyy";
console.log(cat);
console.log(cat.catFriends[0].activities.concat(cat.catFriends[1].activities));
console.log(cat.catFriends[0].name + ',' + cat.catFriends[1].name);
console.log(cat.catFriends[0].weight + cat.catFriends[1].weight);
console.log(cat.activities.concat(cat.catFriends[0].activities).concat(cat.catFriends[1].activities));
cat.catFriends[0].activities.push('Food Hunting');
cat.catFriends[0].activities.push('Catnip Toys');
cat.catFriends[1].activities.push('Feather and String');
cat.catFriends[1].activities.push('Cardboard Boxes');
console.log(cat.catFriends[0].activities, cat.catFriends[1].activities);
cat.catFriends[0].furcolor = 'golden white';
console.log(cat.catFriends[0]);

/*********************************************************************************************************************/
var myCar = {
    make: 'Bugatti',
    model: 'Bugatti La Voiture Noire',
    year: 2019,
    accidents: [{
            date: '3 / 15 / 2019',
            damage_points: '5000',
            atFaultForAccident: true
        },
        {
            date: '7 / 4 / 2022',
            damage_points: '2200',
            atFaultForAccident: true
        },
        {
            date: '6 / 22 / 2021',
            damage_points: '7900',
            atFaultForAccident: true
        }
    ]
}
console.log(myCar);
let accidents_dates = [];
myCar.accidents.map((arr) => {
    arr.atFaultForAccident = false;
    accidents_dates.push(arr.date);
})
console.log(myCar.accidents);
console.log(accidents_dates);

/******************************************************************************************************************/
var obj = {
    name: 'RajiniKanth',
    age: 33,
    hasPets: false
};

function printAllValues(obj) {
    // your code here
    return Object.values(obj);
}
console.log(printAllValues(obj));

/*******************************************************************************************************************/
function printAllKeys(obj) {
    // your code here
    return Object.keys(obj);
}

console.log(printAllKeys(obj));

/********************************************************************************************************************/
var obj = {
    name: 'ISRO',
    age: 35,
    role: 'Scientist'
};

function convertListToObject(obj) {
    // your code here
    let obj_arr = [];
    let keys = Object.keys(obj);
    let values = Object.values(obj);
    for (let i = 0; i < keys.length; i++) {
        obj_arr[i] = [];
        obj_arr[i].push(keys[i]);
        obj_arr[i].push(values[i]);
    }
    return obj_arr;
}
console.log(convertListToObject(obj));

/***************************************************************************************************************/
var arr = ['GUVI', 'I', 'am', 'a geek'];

function transformFirstAndLast(arr) {

    return {
        [arr[0]]: arr[arr.length - 1]
    };
}
console.log(transformFirstAndLast(arr));

/****************************************************************************************************************/
var arr = [
    ['make', 'Ford'],
    ['model', 'Mustang'],
    ['year', 1964]
];

function fromListToObject(arr) {
    var newObject = {};
    arr.map((val) => {
        let key = val[0];
        newObject[key] = val[1];
    })
    return newObject;
}
console.log(fromListToObject(arr));

/******************************************************************************************************************/
var arr = [
    [
        ['firstName', 'Vasanth'],
        ['lastName', 'Raja'],
        ['age', 24],
        ['role', 'JSWizard']
    ],
    [
        ['firstName', 'Sri'],
        ['lastName', 'Devi'],
        ['age', 28],
        ['role', 'Coder']
    ]
];

function transformEmployeeData(arr) {
    var transformEmployeeList = [];

    //Your code
    arr.map((list) => {
        let obj = {};
        list.map((val) => {
            obj[val[0]] = val[1];
        })
        transformEmployeeList.push(obj);
    })

    return transformEmployeeList;
}
console.log(transformEmployeeData(arr));

/******************************************************************************************************************/
var expected = {
    foo: 5,
    bar: 6
};
var actual = {
    foo: 5,
    bar: 6
}

function assertObjectsEqual(actual, expected, testName) {
    // your code here
    if (actual.foo == expected.foo && actual.bar == expected.bar)
        return 'PASSED';
    else
        return 'FAILED';
}
console.log(assertObjectsEqual(actual, expected, 'detects that two objects are equal'));

/******************************************************************************************************************/
var securityQuestions = [{
        question: 'What was your first pet’s name?',
        expectedAnswer: 'FlufferNutter'
    },
    {
        question: 'What was the model year of your first car?',
        expectedAnswer: '1985'
    },
    {
        question: 'What city were you born in?',
        expectedAnswer: 'NYC'
    }
]

function checkSecurityQuestions(securityQuestions, question, answer) {

    // your code here
    for (let i = 0; i < securityQuestions.length; i++) {
        let arr = securityQuestions[i];
        if (arr.question == question && arr.expectedAnswer == answer)
            return true;
    }
    return false;
}
//Test case1:
var ques = 'What was your first pet’s name?';
var ans = 'FlufferNutter';
var status = checkSecurityQuestions(securityQuestions, ques, ans);
console.log(status); // true
//Test case2:
var ques = 'What was your first pet’s name?';
var ans = 'DufferNutter';
var status = checkSecurityQuestions(securityQuestions, ques, ans);
console.log(status); // false

/***************************************************************************************************************/
var students = [{
        name: 'Siddharth Abhimanyu',
        age: 21
    }, {
        name: 'Malar',
        age: 25
    },
    {
        name: 'Maari',
        age: 18
    }, {
        name: 'Bhallala Deva',
        age: 17
    },
    {
        name: 'Baahubali',
        age: 16
    }, {
        name: 'AAK chandran',
        age: 23
    }, {
        name: 'Gabbar Singh',
        age: 33
    }, {
        name: 'Mogambo',
        age: 53
    },
    {
        name: 'Munnabhai',
        age: 40
    }, {
        name: 'Sher Khan',
        age: 20
    },
    {
        name: 'Chulbul Pandey',
        age: 19
    }, {
        name: 'Anthony',
        age: 28
    },
    {
        name: 'Devdas',
        age: 56
    }
];

function returnMinors(arr) {
    let list = [];
    arr.map((obj) => {
        if (obj.age < 20)
            list.push(obj);
    })
    return list;
}
console.log(returnMinors(students));

/*******************************************************************************************************************/
// using XMLHttpRequest
let request = new XMLHttpRequest;
request.open('GET', 'https://restcountries.eu/rest/v2/all', true);
request.send();
request.onload = function () {
    let data = JSON.parse(this.response);
    data.map((obj)=>{
        console.log(obj.flag);
    })
}

// using fetch
// let promiseData=fetch('https://restcountries.eu/rest/v2/all');
// promiseData.then((response)=>{
//     let data=response.json();
//     data.then((obj)=>{
//         obj.map((val)=>{
//             console.log(val.flag);
//         });
//     });
// }).catch((error)=>{
//     console.log(error);
// });