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

/* 1:
   
  Number Check System (Callback)
    
  User inputs numbers (comma separated)
  Convert to array using split() and Number()
  Use callback function to:
  Check even numbers
  Show result in UI
*/


function OddNumberSystem(arr, CallBackFun) {
    CallBackFun(arr);
}
function OddNumberChecker(newData) {

    let storeArray = [];

    for (let i = 0; i < newData.length; i++) {
        (newData[i] % 2 === 0) ? storeArray.push(newData[i]) : "";
    }
    const printArrNew = document.getElementById("printArrNew");

    printArrNew.textContent = `The Odd Numbers Inside the Array Are: ${storeArray.join(" - ")}`;
}

const submitArr = document.getElementById("submitArr");
submitArr.onclick = function () {
    let inputArr = document.getElementById("inputArr").value;
    let arr = inputArr.split('');

    for (let i = 0; i < arr.length; i++) {
        arr[i] = Number(arr[i]);
    }

    OddNumberSystem(arr, OddNumberChecker)
}

/*<-------------------------->*/


/* 2:
   

*/



/*<-------------------------->*/