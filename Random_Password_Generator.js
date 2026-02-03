/* -----------------------------------------
               << Practice Set 13 >>

let, const
+ - * / %
> < >= <= === !==
&& || !
if, else if, else, nested if else
Template literals ${}
getElementById().value
getElementById().textContent
getElementById().onclick
Number(), parseFloat()
console.log

Math:
round, floor, ceil, random, max, min
pow, sqrt, abs, trunc

.checked, 
Trinary Function, 
Switch Case.

String Operation:
length, toUpperCase(), toLowerCase(), trim(), 
includes(), startsWith(), endsWith(), indexOf(), 
slice(), subString(), replace(), replaceAll, split(),
charAt(),

Method Chaining , While Loop, For Loop
Functions, Function Parameters,Function Arguments, Return Statement

Variable Scopes (Local , Global)

Array, Array Methods:
push(), pop(), shift(), unshift(), splice(), slice(),
indexOf(), includes(), join(), toString(), 
concat(), length, reverse(), sort(), 


Spread Operator, Spread Operator(...), Rest Parameter(...)

-------------------------------------------- */

// Random Password Generator
const upperCaseChar = document.getElementById("upperCaseChar");

function RandomPasswordGenerator(passLength) {
    // if (passLength < 1 || isNaN(passLength)) {
    //     alert("Password Can't be Lower then 1.!!");
    //     return;
    // }

    let charSet = "";

    let upperCaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let lowerCaseChar = "abcdefghijklmnopqrstuvwxyz";
    let includeNumbers = "123456789";
    let includeSpecialChars = "!@#$%^&*()_+=-"


 upperCaseChar.checked ? upperCaseChar+=charSet : "False";
    console.log(charSet)

    // let storePass = "";
    // for (let i = 0; i < passLength; i++) {
    //     let randomNumber = Math.floor(Math.random() * lowerCaseChar.length)
    //     storePass += lowerCaseChar.charAt(randomNumber)
    // }
    // const printRandomPass = document.getElementById("printRandomPass")
    // printRandomPass.textContent = `Random Pass: ${storePass}`
}

const generatePassBtn = document.getElementById("generatePassBtn");
generatePassBtn.onclick = function () {
    const passLength = Number(document.getElementById("randomPass").value);
    RandomPasswordGenerator(passLength)
}