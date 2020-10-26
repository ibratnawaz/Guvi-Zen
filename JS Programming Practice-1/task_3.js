// Recursion

// Write a program to find power of any number using recursion.
function recPower(n, x) {
    if (x == 1)
        return n;
    return n * recPower(n, --x);
}
console.log(recPower(2, 3));

//Write a program to print all even or odd numbers in given range using recursion.
let evenArr = [],
    oddArr = [];

function recInRange(n, x) {
    if (n < (x - 1)) {
        if ((n + 1) % 2 == 0) {
            evenArr.push((n + 1));
        } else {
            oddArr.push((n + 1));
        }
        recInRange(++n, x);
    }

    return {
        evenArr,
        oddArr
    }
}
console.log(recInRange(1, 10));

// Write a program to find sum of all even or odd numbers in given range using recursion.
let sumEven = 0,
    oddSum = 0;

function recSumEvenOdd(n, x) {
    if (n < (x - 1)) {
        if ((n + 1) % 2 == 0) {
            sumEven += (n + 1);
        } else {
            oddSum += (n + 1);
        }
        recSumEvenOdd(++n, x);
    }

    return {
        sumEven,
        oddSum
    }
}
console.log(recSumEvenOdd(1, 10));

// Write a program to check whether a number is palindrome or not using recursion.
function recPalindrome(str) {
    if (str.length == 0) {
        return str;
    }
    return str[str.length - 1] + recPalindrome(str.slice(0, length - 1));

}
console.log(`GUVI is palindrome: ${'GUVI'==recPalindrome('GUVI')}`);
console.log(`LoL is palindrome: ${'LoL'==recPalindrome('LoL')}`);

// Write a program to find factorial of any number using recursion.
function recFact(n) {
    if (n == 0)
        return 1;
    else
        return n * recFact(--n);
}
console.log(`Factorial of 5 is ${recFact(5)}`);

// Write a program to find GCD (HCF) of two numbers using recursion.
function recGCD(n1, n2) {
    if (n2 != 0)
        return recGCD(n2, n1 % n2);
    else
        return n1;
}
console.log(recGCD(60, 6));

// Write a program to display all array elements using recursion.
function recAddArrayEle(arr, sum) {
    if (arr.length != 0) {
        sum += arr.pop() + recAddArrayEle(arr, sum);
    }
    return sum;

}
let arr = [1, 2, 3, 4, 5, 5];
console.log(recAddArrayEle(arr, 0));

// Write a program to find maximum and minimum elements in array using recursion.
function recGetMaxMin(arr, n) {
    if (n != 0) {
        if (max < arr[n - 1]) {
            max = arr[n - 1];
        }
        if (min > arr[n - 1]) {
            min = arr[n - 1];
        }
        recGetMaxMin(arr, --n);
    }

    return {
        max,
        min
    }
}
let myArr = [1, 2, 3, 4, 5];
let max = myArr[0],
    min = myArr[0];

console.log(recGetMaxMin(myArr, 5));

// Write a program to print all natural numbers between 1 to n using recursion.
let natural = 2;

function print_natural(n) {
    if (natural < n) {
        console.log(natural);
        natural++;
        print_natural(n);
    }
}
print_natural(10);

// Write a program to find sum of all natural numbers between 1 to n using recursion.
let allNatural = 2;
let s = 0;

function recNaturalInRange(n) {
    if (allNatural < n) {
        s += allNatural;
        allNatural++;
        recNaturalInRange(n);
    }
    return s;
}
console.log(recNaturalInRange(10));

// Write a program to find reverse of any number using recursion.
let reverseNum = 0;

function recReverseNum(n) {
    if (n > 0) {
        reverseNum = (reverseNum * 10) + (n % 10);
        recReverseNum(parseInt(n / 10));
    }
    return reverseNum;
}
console.log(recReverseNum(1009));

// Write a program to find sum of digits of a given number using recursion.
let sumDigits = 0;

function recSumDigits(n) {
    if (n > 0) {
        sumDigits += +(n % 10);
        recSumDigits(parseInt(n / 10));
    }
    return sumDigits;
}
console.log(recSumDigits(1009));

// Write a program to generate nth Fibonacci term using recursion.
let first = 0,
    second = 1;
let fibonacci = [];
let num = 1;

function recFibonacci(n) {
    if (n == 1) {
        fibonacci.push(0);
    } else if (n == 2) {
        fibonacci.push(0);
        fibonacci.push(1);
    } else if (num <= n) {
        if (num == 1) {
            fibonacci.push(0);
            fibonacci.push(1);
            num += 2;
        } else {
            let p = first + second;
            first = second;
            second = p;
            fibonacci.push(p);
            num++;
        }

        recFibonacci(n);
    }
    return fibonacci;
}
console.log(recFibonacci(3));

// Write a program to find GCD (HCF) of two numbers using recursion.
let num1 = 8;
let num2 = 12;

let lcm = (num1 > num2) ? num1 : num2;

function recLCM(m, n) {
    if (lcm % m !== 0 && lcm % n !== 0) {} else {
        lcm++;
        recLCM(m, n);
    }
    return lcm;
}
console.log(recLCM(num1, num2));

// Write a program to find sum of elements of array using recursion.
let ar = [1, 2, 3, 4, 5];

function recSumArr(arr, l, s) {
    if (l >= 0) {
        s += arr[l];
        l = l - 1;
        return recSumArr(ar, l, s);
    }
    return s;
}
console.log(recSumArr(ar, ar.length - 1, 0));

// Functions

// Write a program to find diameter, circumference and area of circle using functions.
function funCircle(r) {
    return {
        diameter: 2 * r,
        circumference: 2 * r * Math.PI.toFixed(1),
        area: Math.PI.toFixed(2) * r * r
    }
}
console.log(funCircle(5));

// Write a program to check whether a number is even or odd using functions.
function funOddEven(n) {
    return n % 2 == 0 ? 'Even' : 'Odd';
}
console.log(funOddEven(7));

// Write a program to find all prime numbers between given interval using functions.
function funPrimeInRange(ll, ul) {
    let arrPrime = [];
    for (let i = ll + 1; i < ul; i++) {
        let c = 2;
        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                c = -1;
                break;
            }
        }
        if (c == 2) {
            arrPrime.push(i);
        }
    }
    return arrPrime;
}
console.log(funPrimeInRange(1, 20));

// Write a program to print all Armstrong numbers between given interval using functions.
function funGetAllArmstrong(ll, ul) {
    let arrArm = [];
    for (let i = ll; i <= ul; i++) {
        let n = i;
        let sum = 0;
        while (n != 0) {
            let r = n % 10;
            sum += r * r * r;
            n = parseInt(n / 10);
        }

        if (sum == i) {
            arrArm.push(i);
        }
    }
    return arrArm;
}
console.log(funGetAllArmstrong(1, 1000));

// Write a program to find cube of any number using function.
function funCube(n) {
    return (n * n * n);
}
console.log(funCube(2));

// Write a program to find maximum and minimum between two numbers using functions.
function funMinMax(num1, num2) {
    let m = (num1 > num2) ? num1 : num2;
    let n = (num1 < num2) ? num1 : num2;

    return {
        m,
        n
    };
}

console.log(funMinMax(10, 3));

// Write a program to check whether a number is prime, Armstrong or perfect number using functions.
function funCheckTypeOfNum(n, c) {
    switch (c) {
        case 1:
            let cn = 0;
            for (let i = 2; i < n; i++) {
                if ((n % i) === 0) {
                    cn++;
                    console.log('Not Prime');
                    break;
                }
            }
            if (cn === 0) {
                console.log('Prime');
            }
            break;
        case 2:
            let dp = n;
            let cd = 0;
            let arn = [];
            while (dp > 0) {
                cd++;
                arn.push(dp % 10);
                dp = parseInt(dp / 10);
            }
            let s = 0;
            for (let j of arn) {
                s += +Math.pow(j, cd);
            }
            if (s === n) {
                console.log('Armstrong');
            } else {
                console.log('Not Armstrong');
            }
            break;
        case 3:
            let temp = 0,
                number = n;
            for (let i = 1; i <= number / 2; i++) {
                if (number % i === 0) {
                    temp += i;
                }
            }

            if (temp === number && temp !== 0) {
                console.log("Perfect Number.");
            } else {
                console.log("Not Perfect Number.");
            }
            break;
    }
}
funCheckTypeOfNum(7, 1);
funCheckTypeOfNum(153, 2)
funCheckTypeOfNum(120, 3);

// Write a program to print all strong numbers between given interval using functions.
function funStrongNum(start, end) {
    let ar = [];
    for (let i = start + 1; i < end; i++) {
        let cd = 0,
            dp = i,
            ss = 0;
        while (dp > 0) {
            cd++;
            let n = dp % 10;
            let sp = 1;
            for (let i = 1; i <= n; i++) {
                sp *= i;
            }
            ss += sp;
            dp = parseInt(dp / 10);
        }
        if (ss == i) {
            ar.push(i);
        }
    }
    return ar;
}
console.log(funStrongNum(1, 146));

// Write a program to print all perfect numbers between given interval using functions.
function funPerfectNumInRange(start, end) {
    let perfect = [];
    for (let i = start + 1; i < end; i++) {
        let p = 0,
            j = 1,
            number = i;
        var temp = 0;
        for (j = 1; j <= number / 2; j++) {
            if (number % j === 0) {
                temp += j;
            }
        }

        if (temp === number && temp !== 0) {
            perfect.push(temp);
        }
    }
    return perfect;
}
console.log(funPerfectNumInRange(1, 9000));

// String

// Write a program to toggle case of each character of a string.
function funToggleCase(str) {
    let newStr = '';
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) == str.charAt(i).toUpperCase()) {
            newStr += str.charAt(i).toLowerCase();
        } else {
            newStr += str.charAt(i).toUpperCase();
        }
    }
    return newStr;
}
console.log(funToggleCase('GuVi'));

// Write a program to count total number of vowels and consonants in a string.
function funCountVowels(str) {
    let vowels = 0,
        consonants = 0;
    for (let i = 0; i < str.length; i++) {
        let ch = str.charAt(i);
        if (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u' ||
            ch == 'A' || ch == 'E' || ch == 'I' || ch == 'O' || ch == 'U') {

            vowels++;
        } else {
            consonants++;
        }
    }
    return {
        vowels,
        consonants
    }
}
console.log(funCountVowels('Lorem ipsum'));

// Write a program to find reverse of a string.
function funRevStr(str) {
    return str.split('').reverse().join('');
}
console.log(funRevStr('Cat in the bag'));

// Write a program to find length of a string.
var length_string = "Nitin";
console.log(length_string.length);

// Write a program to copy one string to another string.
var original_string = "Nitin";
let copy_string = original_string;
console.log(copy_string);

// Write a program to concatenate two strings.
var concat_string = "Ni";
let concating_string = "tin"
let concated_string = concat_string + concating_string;
console.log(concated_string);

// Write a program to compare two strings.
var compare_string = "Ni";
let comparing_string = "Ni"
let compared_string = compare_string === comparing_string ? true : false;
console.log(compared_string);

// Write a program to convert lowercase string to uppercase.
var convert_to_upper_case = "Ni";
console.log(convert_to_upper_case.toUpperCase());

// Write a program to convert uppercase string to lowercase.
var convert_to_lower_case = "Ni";
console.log(convert_to_lower_case.toLowerCase());

// Write a program to find total number of alphabets, digits or special character in a string.
let adc = "Ascac..12",
    count_alphabet = 0,
    count_specia_character = 0,
    count_digit = 0;
for (let i = 0; i < s.length; i++) {
    if ((s[i] >= 'A' && s[i] <= 'Z') || (s[i] >= 'a' && s[i] <= 'z')) {
        count_alphabet++;
    } else if (s[i] >= 0 && s[i] <= 9) {
        count_digit++;
    } else {
        count_specia_character++;
    }
}
console.log('Alphabet:' + count_alphabet + ' Digit:' + count_digit + ' Special Character:' + count_specia_character);

// Write a program to count total number of words in a string.
let string_1 = "It is Me"
console.log(string_1.split(' ').length);

// Write a program to check whether a string is palindrome or not.
var name1 = "Nitin";
var name0 = '';
var l = name1.length - 1;
var c = 0;
for (var i = 0; i <= l; i++) {

    name0 = name1[i] + name0;
}
if (name1 === name0) {
    console.log('Palindrome');
} else {
    console.log('Not Palindrome');
}

// Write a program to reverse order of words in a given string.
let string_line = "It is Me"
console.log(string_line.split(' ').reverse().join(' '));

// Write a program to find first occurrence of a character in a given string.
let strFirst = 'My name is khan';
console.log(`First occurrence of n in ${strFirst} at:`, strFirst.indexOf('n') + 1);

// Write a program to search all occurrences of a character in given string.
function funAllOccurs(str, s) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) == s) {
            console.log(`n found at ${i+1}`);
            count++;
        }
    }
    return count;
}
console.log('All occurrences of n:');
funAllOccurs(strFirst, 'n');

// Write a program to find highest frequency character in a string.
let a = "aaaabbcccccc".split('');
let v = [];
for (let i = 0; i < a.length; i++) {
    let c = 1;
    for (let j = 0; j < a.length; j++) {
        if (i != j && a[i] == a[j]) {
            c++;
            a.splice(j, 1);
            j--;
        }
    }
    v.push(c);
}
let ii = v.indexOf(Math.max(...v));
console.log(`'${a[ii]}' has highest frequency of ${v[ii]}`);

// Write a program to count frequency of each character in a string.
// same logic at line 536
a.map((val, i) => {
    console.log(`frequency of '${val}' is ${v[i]}`);
})

// Write a program to remove last occurrence of a character from string.
let strLast = 'Lorem ipsum dolor sit amet consectetur adipisicing elit'
let lastIndex = strLast.lastIndexOf('o');
strLast = strLast.split('')
strLast.splice(lastIndex, 1);
console.log(strLast.join(''));

// Write a program to remove all repeated characters from a given string.
// same logic at line 536
console.log(a.join(''));

// Write a program to replace last occurrence of a character with another in a string.
strLast = 'Lorem ipsum dolor sit amet consectetur adipisicing elit'
lastIndex = strLast.lastIndexOf('o');
strLast = strLast.split('');
strLast[lastIndex] = 'GUVI';
console.log(strLast.join(''));

// Write a program to find first occurrence of a word in a given string.
strFirst = 'lorem ipsum dolorem sit aremt consectetur adipisicing remlit';
let firstIndex = strFirst.indexOf('rem');
console.log(firstIndex);

// Write a program to search all occurrences of a word in given string.
let strSearch = 'rem';
let posWord = [];
for (let i = 0; i < strFirst.length; i++) {
    let check = true;
    let k = i;
    for (let j = 0; j < strSearch.length; j++) {
        if (strSearch.charAt(j) == strFirst.charAt(k++)) {
            continue;
        } else {
            check = false;
        }
    }
    if (check) {
        posWord.push(i);
    }
}
console.log(posWord);

// Write a program to remove first occurrence of a word from string.
let strRemove = 'rem';
firstIndex = strFirst.indexOf(strRemove);
let newStr = strFirst.slice(0, firstIndex) + strFirst.slice((firstIndex + strRemove.length), strFirst.length);
console.log(newStr);

// Write a program to remove all occurrence of a word in given string.
strRemove = 'rem';
posWord = [];
newStr = '';
for (let i = 0; i < strFirst.length; i++) {
    let check = true;
    let k = i;
    for (let j = 0; j < strSearch.length; j++) {
        if (strSearch.charAt(j) == strFirst.charAt(k++)) {
            continue;
        } else {
            check = false;
        }
    }
    if (check) {
        posWord.push(i);
    }
}
let initial = 0;
for (let i = 0; i < posWord.length; i++) {
    newStr += strFirst.slice(initial, posWord[i]);
    initial = posWord[i] + strRemove.length;
}
newStr += strFirst.slice(initial, strFirst.length);
console.log(newStr);

// Write a program to trim trailing white space characters from given string.
let strWithSpace = ' Guvi is best learning platform. '
let breakPoint;
for (let i = 0; i < strWithSpace.length; i++) {
    let ch = strWithSpace.charAt(i);
    if (ch == ' ') {
        continue;
    } else {
        breakPoint = i;
        break;
    }
}
console.log(strWithSpace.slice(breakPoint, strWithSpace.length));

// Write a program to find first occurrence of a character in a given string.
let find_first_occurrence = "..133Ascac..12";
console.log(find_first_occurrence.lastIndexOf('c'));

// Write a program to count occurrences of a character in given string.
let find_count_occurrence = "..133Ascac..12";
let count = 0;
for (let i = 0; i < find_count_occurrence.length; i++) {
    if (find_count_occurrence[i] == 'c') {
        count++;
    }
}
console.log('c=>' + count);

// Write a program to find lowest frequency character in a string.
// same logic at line 536
ii = v.indexOf(Math.min(...v));
console.log(a[ii] + ' ' + v[ii]);

// Write a program to remove first occurrence of a character from string.
let remove_first_occurrence = 'aabbaac'.split('');
let first_index = remove_first_occurrence.indexOf('b');
remove_first_occurrence.splice(first_index, 1);
console.log(remove_first_occurrence.join(''));

// Write a program to remove all occurrences of a character from string.
let remove_all_occurrence = 'aabbaac'.split('');
for (let i = 0; i < remove_all_occurrence.length; i++) {
    if (remove_all_occurrence[i] == 'b') {
        remove_all_occurrence.splice(i, 1);
        i--;
    }
}

console.log(remove_all_occurrence.join(''));

// Write a program to replace first occurrence of a character with another in a string.
let replace_first_occurrence = 'aabbaac';
let fi = replace_first_occurrence.indexOf('a');
let nStr = '';
for (let i = 0; i < replace_first_occurrence.length; i++) {
    if (replace_first_occurrence[i] != 'a') {
        nStr = replace_first_occurrence[i];
        break;
    }
}
nStr = replace_first_occurrence.indexOf(nStr);
replace_first_occurrence = replace_first_occurrence.replace(replace_first_occurrence[fi], replace_first_occurrence[nStr]);
console.log(replace_first_occurrence);

// Write a program to replace all occurrences of a character with another in a string.
let replace_all_occurrence = 'aabbaac';
for (let i = 0; i < replace_all_occurrence.length; i++) {
    if (replace_all_occurrence[i] == 'a') {
        replace_all_occurrence = replace_all_occurrence.replace(replace_all_occurrence[i], ' guvi ');
    }
}
console.log(replace_all_occurrence);

// Write a program to find last occurrence of a word in a given string.
let find_first_occurrence_word = "Online learning classes is better than offline learning classes".split(' ');
console.log(find_first_occurrence_word.lastIndexOf('learning'));


// Write a program to count occurrences of a word in a given string.
let find_count_occurrence_word = "Online learning classes is better than offline learning classes".split(' ');
let count1 = 0;
for (let i = 0; i < find_count_occurrence_word.length; i++) {
    if (find_count_occurrence_word[i] == 'learning') {
        count1++;
    }
}
console.log('learning=>' + count1);

// Write a program to remove last occurrence of a word in given string.
let remove_last_occurrence_word = 'Online learning classes is better than offline learning classes'.split(' ');
let last_index = remove_last_occurrence_word.indexOf('learning');
remove_last_occurrence_word.splice(last_index, 1);
console.log(remove_last_occurrence_word.join(' '));

// Write a program to trim leading white space characters from given string.
let strLeadSpace = '   learn';
console.log(strLeadSpace.trim());

// Write a program to trim both leading and trailing white space characters from given string.
let strLeadEndSpace = '   learn          ';
console.log(strLeadEndSpace.trim());

// Write a program to remove all extra blank spaces from given string.
let strExtraSpace = '   Guvi   is the    best    learning       platform    '
newStr = '';
let temp = '';
for (let i = 0; i < strExtraSpace.length; i++) {
    let ch = strExtraSpace.charAt(i);
    if (ch != ' ') {
        temp += ch;
    } else {
        if(temp!=''){
            newStr += temp + ' ';
            temp = '';
        }     
    }
}
console.log(newStr.trim());