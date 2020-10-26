// Write a function called “addFive”.
// Given a number, “addFive” returns 5 added to that number.
function addFive(num) {
    return num + 5;
}

console.log(addFive(5));
console.log(addFive(0));
console.log(addFive(-5));

/*********************************************************************************************************************/

// Write a function called “getOpposite”.
// Given a number, return its opposite
function getOpposite(num) {
    if (Number.isInteger(num)) {
        return -(num);
    } else {
        return -1;
    }
}

console.log(getOpposite(5));
console.log(getOpposite(0));
console.log(getOpposite(-5));
console.log(getOpposite('5a'));
console.log(getOpposite(5.5));

/*********************************************************************************************************************/

// Fill in your code that takes an number minutes and converts it to seconds
function toSeconds(min) {
    return min * 60;
}

console.log(toSeconds(5));
console.log(toSeconds(3));
console.log(toSeconds(2));

/*********************************************************************************************************************/

// Create a function that takes a string and returns it as an integer
function toInteger(myStr) {
    return +myStr;
}

console.log(toInteger('6'));
console.log(toInteger('1000'));
console.log(toInteger('12'));

/*********************************************************************************************************************/

// Create a function that takes a number as an argument, increments the number by +1 and returns the result.
function nextNumber(myInt) {
    return ++myInt;
}

console.log(nextNumber(0));
console.log(nextNumber(9));
console.log(nextNumber(-3));

/*********************************************************************************************************************/

// Create a function that takes an array and returns the first element
function getFirstElement(arr) {
    return arr[0];
}

console.log(getFirstElement([1, 2, 3]));
console.log(getFirstElement([80, 5, 100]));
console.log(getFirstElement([-500, 0, 50]));

/*********************************************************************************************************************/

// Convert Hours into Seconds
function hourToSeconds(arr) {
    return arr * 60 * 60;
}

console.log(hourToSeconds(2));
console.log(hourToSeconds(10));
console.log(hourToSeconds(24));

/*********************************************************************************************************************/

// Find the Perimeter of a Rectangle
function findPerimeter(num1, num2) {
    return 2 * (num1 + num2);
}

console.log(findPerimeter(6, 7));
console.log(findPerimeter(20, 10));
console.log(findPerimeter(2, 9));

/*********************************************************************************************************************/

// Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.
function lessThan100(num1, num2) {
    if ((num1 + num2) < 100) {
        return true;
    } else {
        return false;
    }
}
console.log(lessThan100(22, 15));
console.log(lessThan100(83, 34));

/*********************************************************************************************************************/

// There is a single operator in JavaScript, capable of providing the remainder of a division operation.
// Two numbers are passed as parameters. The first parameter divided by the second parameter will have a remainder,
// possibly zero. Return that value.
function remainder(num1, num2) {
    return num1 % num2;
}

console.log(remainder(1, 3));
console.log(remainder(3, 4));
console.log(remainder(-9, 45));
console.log(remainder(5, 5));

/*********************************************************************************************************************/

// MacDonald is asking you to tell him how many legs can be counted among all his animals.
function CountAnimals(tur, horse, pigs) {
    return 2 * tur + 4 * horse + 4 * pigs;
}

console.log(CountAnimals(2, 3, 5));
console.log(CountAnimals(1, 2, 3));
console.log(CountAnimals(5, 2, 8));

/*********************************************************************************************************************/

// Create a function that returns the number of frames shown in a given number of minutes for a certain FPS.
function frames(num1, num2) {
    return num1 * num2 * 60;
}
console.log(frames(1, 1));
console.log(frames(10, 1));
console.log(frames(10, 25));

/*********************************************************************************************************************/

// Create a function that returns true if an integer is evenly divisible by 5, and false otherwise.
function divisibleByFive(num1) {
    return num1 % 5 == 0 ? true : false;
}

console.log(divisibleByFive(5));
console.log(divisibleByFive(-55));
console.log(divisibleByFive(37));

/*********************************************************************************************************************/

// Given a number, “isEven” returns whether it is even.
function isEven(num) {
    return num % 2 == 0 ? true : (Number.isInteger(num) ? false : -1);
}

console.log(isEven(12));
console.log(isEven(0));
console.log(isEven(11));
console.log(isEven('11h'));

/*********************************************************************************************************************/

// Given 2 numbers, “areBothOdd” returns whether or not both of the given numbers are odd.
function areBothOdd(num1, num2) {
    return (num1 % 2 != 0 && num2 % 2 != 0) ? true : false;
}

console.log(areBothOdd(1, 3));
console.log(areBothOdd(1, 4));
console.log(areBothOdd(2, 3));
console.log(areBothOdd(0, 0));

/*********************************************************************************************************************/

// Given a first and a last name, “getFullName” returns a single string with 
// the given first and last names separated by a single space.
function getFullName(firstName = '', lastName = '') {
    return (`${firstName} ${lastName}`).trim();
}
console.log(getFullName('GUVI', 'GEEK'));
console.log(getFullName('GUVI'));
console.log(getFullName('', 'GEEK'));
console.log(getFullName('', ''));

/*********************************************************************************************************************/

// Given a word, “getLengthOfWord” returns the length of the given word.
function getLengthOfWord(word1) {
    return typeof word1 == 'string' ? word1.length : -1;
}

console.log(getLengthOfWord('GUVI'));
console.log(getLengthOfWord('GUVI'));
console.log(getLengthOfWord(0));
console.log(getLengthOfWord(9));

/*********************************************************************************************************************/

// Given two words, “isSameLength” returns whether the given words have the same length.
function isSameLength(word1, word2) {
    return word1.length == word2.length ? true : false;
}

console.log(isSameLength('GUVI', 'GEEK'));

/*********************************************************************************************************************/

// Create a function to calculate the distance between two points defined by their x, y coordinates
function getDistance(x1, y1, x2, y2) {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2)).toFixed(2);
}
console.log(getDistance(100, 100, 400, 300));

/*********************************************************************************************************************/

// Given an array and an integer, “getNthElement” returns the element at the given integer, 
// within the given array. If the array has a length of 0, it should return ‘undefined’.
function getNthElement(array, n) {
    return array[n];
}

console.log(getNthElement([1, 3, 5], 1));

/*********************************************************************************************************************/

// Given an array, “getLastElement” returns the last element of the given array. 
// If the given array has a length of 0, it should return ‘-1’.
function getLastElement(array) {
    return array.length > 0 ? array[array.length - 1] : -1
}
console.log(getLastElement([1, 2, 3, 4]));

/*********************************************************************************************************************/

// Given an object and a key, “getProperty” returns the value of the property at the given key. 
// If there is no property at the given key, it should return undefined
function getProperty(obj, key) {
    return obj.hasOwnProperty(key) == true ? obj[key] : 'NA';
}

var obj = {
    myKey: 'value'
};

console.log(getProperty(obj, 'myKey'));
console.log(getProperty(obj, 'dummyKey'));

/*********************************************************************************************************************/

// Given an object and a key, “addProperty” adds a new property on the given object with a value of true.
function addProperty(obj, key) {
    obj[key] = true;
    return obj;
}
var obj2 = {};

console.log(addProperty(obj2, 'myKey'));

/*********************************************************************************************************************/

// Given an object and a key, “removeProperty” removes the given key from the given object.
function removeProperty(obj, key) {
    delete obj[key];
    return obj;
}

var obj3 = {
    name:'Nawaz',
    gender:'Male'
};

console.log(removeProperty(obj3, 'name'));

/*********************************************************************************************************************/

// Return an array, where the first element is the count of positives numbers and the second element 
//is sum of negative numbers.
var arr = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var ar2 = function countPositivesSumNegatives(arr) {
    let result = [];
    let l = 0,
        c = 0,
        s = 0;
    while (l < arr.length) {
        if (arr[l] >= 0) {
            c++;
        } else {
            s += +arr[l];
        }
        l++;
    }
    result.push(c);
    result.push(s);
    return result;
}
console.log(ar2(arr));

/*********************************************************************************************************************/

// Create a function that receives an array of numbers and returns an array containing only the positive numbers
function getPositives(ar) {
    let result = [];
    let l = 0;
    while (l < ar.length) {
        if (ar[l] >= 0) {
            result.push(ar[l]);
        }
        l++;
    }
    return result;
}
var ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var ar2 = getPositives(ar);
console.log(ar2);

/*********************************************************************************************************************/

// Write a function `powersOfTwo` which will return list of all powers of 2 from 0 to n (where n is an exponent).
console.log(powersOfTwo(0));
console.log(powersOfTwo(1));
console.log(powersOfTwo(2));

function powersOfTwo(n) {
    let result = [];
    let c = 0;
    while (c <= n) {
        result.push(Math.pow(2, c));
        c++;
    }
    return result;
}

/*********************************************************************************************************************/

// Find the maximum number in an array of numbers
function findMax(ar) {
    return Math.max(...ar);
}
var ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var max = findMax(ar);
console.log("Max: ", max);

/*********************************************************************************************************************/

// Returns true if a number is prime
function isPrime(n) {
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false
        }
    }
    return true;
}

/*********************************************************************************************************************/

// Function prints the first nPrimes numbers
printPrimes(100);

function printPrimes(nPrimes) {
    var n = 0;
    var i = 2;

    while (n < nPrimes) {
        if (isPrime(i)) {
            console.log(n, "→", i);
            n++;
        }

        i++;
    }
}

/*********************************************************************************************************************/

// Create a function that will return in an array the first “nPrimes” prime numbers greater than a particular number “startAt”

console.log(getPrimes(10, 100));

function getPrimes(nPrimes, startAt) {
    let result = [];
    for (let i = 2; i <= nPrimes; i++) {
        if (isPrime(i)) {
            result.push(i);
        }
    }
    return result;
}

function isPrime(n) {
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false
        }
    }
    return true;
}

/*********************************************************************************************************************/

// Reverse a string
var s = reverseString("JavaScript");
console.log(s);

function reverseString(s) {
    let result = '';
    let l = s.length - 1;
    while (l >= 0) {
        result = result + s[l];
        l--;
    }
    return result;
}

/*********************************************************************************************************************/

// Create a function that will merge two arrays and return the result as a new array

var ar1 = [1, 2, 3];
var ar2 = [4, 5, 6];
var ar = mergeArrays(ar1, ar2);
console.log(ar);

function mergeArrays(ar1, ar2) {
    var result = [];
    //this will add the first array to the result array
    for (let el of ar1) {
        result.push(el);
    }

    for (let el of ar2) {
        result.push(el);
    }

    return result;
}

/*********************************************************************************************************************/

// Calculate the sum of numbers received in a comma delimited string

function sumCSV(s) {
    let ar = s.split(',');
    let result = 0;
    for (let i = 0; i < ar.length; i++) {
        result += +ar[i];
    }
    return result;
}
console.log(sumCSV("1.5, 2.3, 3.1, 4, 5.5, 6, 7, 8, 9, 10.9"));