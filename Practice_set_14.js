/* -----------------------------------------
               << Practice Set 14 >>

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

/* 4:
    CALLBACK NAME LENGTH CHECKER

    Predefined names array
    Callback finds names with length > 4
    Show filtered names
*/

function NameLengthChecker(tempStorage, CallBackFunc) {
    CallBackFunc(tempStorage);
}


let definedData = ["Zukhruf", "Huzaif", "Rufaf", "Osaf"]

function CheckLength(newData) {
    let tempStorage = [...definedData, ...newData]
    const lengthOp = document.getElementById("lengthOp");
    let printingValue = [];
    for (let i = 0; i < tempStorage.length; i++) {
        if (tempStorage[i].length > 4) {
            printingValue.push(tempStorage[i]);
        }
    }

    lengthOp.textContent = `Filtered Names Greater Then 4: ${printingValue.join(", ")}`

}

const checklengthNow = document.getElementById("checklengthNow");

checklengthNow.onclick = function () {
    let lengthChecker = document.getElementById("lengthChecker").value;
    let tempStorage = lengthChecker.split(",");

    NameLengthChecker(tempStorage, CheckLength)
}

/*<-------------------------->*/

/* 5:
    CALLBACK + REST + SPREAD DICE ANALYZER

    Generate random dice numbers
    Pass dice array using spread
    Receive using rest
    Callback counts how many 6 appeared
*/


function SpreadDice(restArray, callbackspread) {
    callbackspread(...restArray);
}

function CallbackCount(...restArray) {

    let count = 0;

    for (let i = 0; i < restArray.length; i++) {
        if (restArray[i] === 6) {
            count++;
        }
    }

    const genData = document.getElementById("genData");
    genData.textContent = `There Are ${count} = 6 in Array`;
}

const analyzeDataNow = document.getElementById("analyzeDataNow");
analyzeDataNow.onclick = function () {
    let spreadDiceStart = document.getElementById("spreadDiceStart").value;
    let attempts = Number(spreadDiceStart);
    let arrStorage = [];

    for (let i = 0; i < attempts; i++) {
        let randomNumber = Math.floor(Math.random() * 6) + 1;
        arrStorage.push(randomNumber);
    }

    SpreadDice(arrStorage, CallbackCount)
}

/*<-------------------------->*/