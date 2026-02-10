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
    SPREAD OPERATOR CLONE ARRAY SYSTEM

    Predefined numbers array
    Clone array using spread operator
    Add new numbers
    Show original and cloned arrays
*/

let preDefinedArr = [10, 20, 30];

function PreDefined(arrStorage) {
    let cloneArray = [...preDefinedArr];
    cloneArray.push(...arrStorage)
    return cloneArray
}

const submitSpreadOp = document.getElementById("submitSpreadOp");
submitSpreadOp.onclick = function () {
    let spreadOp = document.getElementById("spreadOp").value;
    let spreadArray = spreadOp.split('');

    for (let i = 0; i < spreadArray.length; i++) {
        spreadArray[i] = Number(spreadArray[i])
    }

    let storeResult = PreDefined(spreadArray)
    const printSpreadOp = document.getElementById("printSpreadOp");
    printSpreadOp.textContent = `Combined Pre Defined Array With Input Values: ${storeResult}`
}


/*<-------------------------->*/

/* 3:
    REST PARAMETER PRODUCT PRICE SYSTEM

    User inputs product prices
    Pass prices using spread
    Function receives using rest
    Calculate total price
*/

function ProductPriceSystem(...data) {
    let total = 0;
    for (let i = 0; i < data.length; i++) {
        total = total + data[i];
    }
    return total;
}

const submitRestPara = document.getElementById("submitRestPara");
submitRestPara.onclick = function () {
    let restPara = document.getElementById("restPara").value;
    let storeRestPara = restPara.split(",");

    for (let i = 0; i < storeRestPara.length; i++) {
        storeRestPara[i] = Number(storeRestPara[i]);
    }
    let storeResult = ProductPriceSystem(...storeRestPara);
    const restParaOp = document.getElementById("restParaOp");
    restParaOp.textContent = `The Total Of Numbers Given: ${storeResult}`
}

/*<-------------------------->*/