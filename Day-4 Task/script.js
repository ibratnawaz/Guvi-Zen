/**Do the below programs in anonymous function and IIFE
 * DONE:Print odd numbers in an array
 * DONE:Convert all the strings to title caps in a string array
 * DONE:Sum of all numbers in an array
 * DONE:Return all the prime numbers in an array
 * DONE:Return all the palindromes in an array
 * DONE:Return median of two sorted arrays of same size
 * DONE:Remove duplicates from an array
 * Rotate an array by k times and return the rotated array
 */

/*******************************************************************************/
//Declaring and initializing all the arrays here:

let arr = [];
for (let i = 1; i <= 100; i++)
    arr.push(i);
    
let str = ["Hello", "my", "name", "is", "World", "and", "I", "love", "Java", "Language"];

/*******************************************************************************/

// using anonymous function
oddNum = (arr) => {
    let oddArr = [];
    oddArr = arr.filter(num => num % 2 != 0);
    console.log('Odd Numbers using anonymous function::', oddArr);
}

oddNum(arr);

// using IIFE
(function () {
    let oddArr = [];
    oddArr = arr.filter(num => num % 2 != 0);
    console.log('Odd Numbers using IIFE:', oddArr);
})(arr)

/*******************************************************************************/

// using anonymous function
capsWord = (str) => {
    let words = [];
    words = str.map((word) => {
        return word.toUpperCase()
    });
    console.log(str, words);
}
capsWord(str);

// using IIFE
(function () {
    let words = [];
    words = str.map((word) => {
        return word.toUpperCase()
    });
    console.log(str, words);
})(str)

/*******************************************************************************/

// using anonymous function
sumNum = (arr) => {

    let res=arr.reduce((num ,sum)=> {return sum+num});
    console.log('sum of all the numbers in the array using anonymous function:', res);
}

sumNum(arr);

// using IIFE
(function () {
    console.log('sum of all the numbers in the array using IIFE:', arr.reduce((num ,sum)=> {return sum+num}));
})(arr)

/*******************************************************************************/

// using anonymous function
getPrimes = (arr) => {

    let primes=[];
    primes=arr.filter((num)=> {
        let check=true;
        if(num==1)
            check=false;
        for(let i=2;i<num;i++)
        {
            if(num%i==0)
            {
                check=false;
                break;
            }
        }
        if(check)
            return num
    });
    console.log('Prime numbers in the array using anonymous function:', primes);
}

getPrimes(arr);

// using IIFE
(function () {
    let primes=[];
    primes=arr.filter((num)=> {
        let check=true;
        if(num==1)
            check=false;
        for(let i=2;i<num;i++)
        {
            if(num%i==0)
            {
                check=false;
                break;
            }
        }
        if(check)
            return num
    });
    console.log('Prime numbers in the array using IIFE:', primes);
})(arr)

/*******************************************************************************/

// using anonymous function
palindrome = (arr) => {
    let PalindromeNum = [];
    PalindromeNum = arr.filter(num => { 
        return num.toString() == num.toString().split('').reverse().join('')
    });
    console.log('Palindrome Numbers using anonymous function:', PalindromeNum);
}

palindrome(arr);

// using IIFE
(function () {
    let PalindromeNum = [];
    PalindromeNum = arr.filter(num => { 
        return num.toString() == num.toString().split('').reverse().join('')
    });
    console.log('Palindrome Numbers using IIFE:', PalindromeNum);
})(arr)

/*******************************************************************************/

// using anonymous function
median = (arr) => {
    let md = [],len=arr.length;
    if(len%2!=0)
    {
        md=arr[len/2]
    }
    else
    {
        md=(arr[len/2]+arr[len/2 - 1])/2
    }
    console.log('Median of the given array is using anonymous function:', md);
}

median(arr);

// using IIFE
(function () {
    let md = [],len=arr.length;
    if(len%2!=0)
    {
        md=arr[len/2]
    }
    else
    {
        md=(arr[len/2]+arr[len/2 - 1])/2
    }
    console.log('Median of the given array is using IIFE:', md);
})(arr)

/*******************************************************************************/
let arrDup=["Mike","Matt","Nancy","Adam","Matt","Nancy","Matt","Nancy","Jenny","Nancy","Carl","Mike","Matt","Nancy","Adam","Jenny","Nancy","Carl"];
console.log(arrDup);

removeDuplicates=(array)=>{
    let uni=[];
    uni=array.filter(function(item, pos) {
        return array.indexOf(item) == pos;
    })
    console.log(uni);
}
removeDuplicates(arrDup);

/*******************************************************************************/

let initArr=[1,2,3,4,5];
console.log('before rotate',initArr);

// using anonymous function
rotateArray=(arr,k)=>{
    for(let i=0;i<k;i++)
    {
        arr.unshift(arr.pop());
    }
}
rotateArray(initArr,2);
console.log('after rotate',initArr);

// using IIFE
let k=6;
(function () {
    
    let list=[1,2,3,4,5];
    if(list.length>k)
    {
        list.unshift(...list.splice(-k))
    }
    else
    {
        for(let i=0;i<k;i++)
        {
            list.unshift(list.pop());
        }
    }
    console.log(list)
})(k)