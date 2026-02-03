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
function RandomPasswordGenerator(passLength, upperCaseChar, lowerCaseChar, includeNumbers, includeSpecialChars) {

    let UPPERCASE = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let LOWERCASE = "abcdefghijklmnopqrstuvwxyz";
    let NUMBERS = "1234567890";
    let SYMBOLS = "!@#$%^&*()_+=-";
    let charSet = "";
    let password = "";

    upperCaseChar ? charSet += UPPERCASE : "";
    lowerCaseChar ? charSet += LOWERCASE : "";
    includeNumbers ? charSet += NUMBERS : "";
    includeSpecialChars ? charSet += SYMBOLS : "";

    for (let i = 0; i < passLength; i++) {

        let randomFunc = Math.trunc(Math.random() * charSet.length);
        password += charSet[randomFunc];
    }

    return password
}

const generatePassBtn = document.getElementById("generatePassBtn");
generatePassBtn.onclick = function () {
    const passLength = Number(document.getElementById("randomPass").value);
    if (passLength < 1 || passLength > 30) {
        alert("Password Length Must be between 1 - 30");
        return;
    }

    const upperCaseChar = document.getElementById("upperCaseChar").checked;
    const lowerCaseChar = document.getElementById("lowerCaseChar").checked;
    const includeNumbers = document.getElementById("includeNumbers").checked;
    const includeSpecialChars = document.getElementById("includeSpecialChars").checked;
    const printRandomPass = document.getElementById("printRandomPass");
  let passGenerated =   RandomPasswordGenerator(passLength, upperCaseChar, lowerCaseChar, includeNumbers, includeSpecialChars)
    printRandomPass.textContent = `Random Password Generated: ${passGenerated}`
}