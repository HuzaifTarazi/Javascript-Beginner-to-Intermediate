/* -----------------------------------------
               << Practice Set 1 >>

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
--------------------------------------------*/

/* 1:
   User Enter age. 
   if age > 18 show Adult, otherwise minor.*/

const getValue = document.getElementById("enterAge");
const submitValue = document.getElementById("checkAge");
const printValue = document.getElementById("printAge");
let enterAge;

submitValue.onclick = function () {
    enterAge = getValue.value;
    enterAge = Number(enterAge);
    if (enterAge >= 18) {
        printValue.textContent = `You are an Adult`;
    }
    else {
        printValue.textContent = `You are a Minor`;
    }
    console.log(typeof enterAge, enterAge);
}

/*<-------------------------->*/

/* 2:
   Check if the number is positive, negative or zero*/

const checkNumber = document.getElementById("checkNumber");
const submitNumber = document.getElementById("submitNumber");
const printNumber = document.getElementById("printNumber");
let checkNow;

submitNumber.onclick = function () {

    checkNow = checkNumber.value;
    checkNow = Number(checkNow);
    if (checkNow > 0) {
        printNumber.textContent = `The Number is Positive`;
    }
    else if (checkNow < 0) {
        printNumber.textContent = `The Number is Negative`;
    }
    else {
        printNumber.textContent = `The Number is Zero`;
    }
}

/*<-------------------------->*/

/* 3:
   Determine whether a number is even or odd. */

const checkEvenOdd = document.getElementById("checkEvenOdd");
const submitCheck = document.getElementById("submitCheck");
const printResult = document.getElementById("printResult");
let getNum;

submitCheck.onclick = function () {
    getNum = checkEvenOdd.value;
    getNum = Number(getNum);
    if (getNum % 2 === 0) {
        printResult.textContent = `The Number is Even`;
    }
    else {
        printResult.textContent = `The Number is odd`;
    }
}

/*<-------------------------->*/


/* 4:
   If number is negative, convert it to positive. */
const removeMinus = document.getElementById("removeMinus");
const submitMinus = document.getElementById("submitMinus");
const printMinusResult = document.getElementById("printMinusResult");
let chngSign;

submitMinus.onclick = function () {
    chngSign = removeMinus.value;
    chngSign = parseInt(chngSign);

    if (chngSign < 0) {
        chngSign = Math.abs(chngSign);
        printMinusResult.textContent = `Number is Converted to Positive = ${chngSign}`;
    }
    console.log(typeof chngSign, chngSign);
}
/*<-------------------------->*/

/* 5:
   Square only if the numbers are positive. */

const sqrPositive = document.getElementById("sqrPositive");
const submitSqr = document.getElementById("submitSqr");
const printSqr = document.getElementById("printSqr");
let performSqr;

submitSqr.onclick = function () {
    performSqr = sqrPositive.value;
    performSqr = Number(performSqr);

    if (performSqr > 0) {
        const tookSqr = Math.pow(performSqr, 2);
        printSqr.textContent = `Square of Number ${performSqr} is ${tookSqr}`;
        console.log(typeof tookSqr, tookSqr);
    } else {
        printSqr.textContent = `The Number is not Positive`;
    }
}
/*<-------------------------->*/


/* 6:
   Calculate square root only if number is greater and equal to 0.*/

const takeSqrt = document.getElementById("takeSqrt");
const submitSqrt = document.getElementById("submitSqrt");
const printSqrt = document.getElementById("printSqrt");
let getSqrt;

submitSqrt.onclick = function () {
    getSqrt = takeSqrt.value;
    getSqrt = Number(getSqrt);

    if (getSqrt >= 0) {
        const findSqrt = Math.sqrt(getSqrt)
        printSqrt.textContent = `The Square root of ${getSqrt} is ${findSqrt}`;
        console.log(typeof getSqrt, findSqrt);
    } else {
        printSqrt.textContent = `The Square root of ${getSqrt} is not possible`
    }
}
/*<-------------------------->*/

/* 7:
   if number is greater and equal to 5 then round it and if lower then floor it.*/

const getValue2 = document.getElementById("getValue2");
const submitValue2 = document.getElementById("submitValue2");
const printValue2 = document.getElementById("printValue2");
let storeValue, round , floor; 

submitValue2.onclick = function(){
    storeValue = getValue2.value;
    storeValue = parseFloat(storeValue);

    if(storeValue >= 5){
        round = Math.round(storeValue);
        printValue2.textContent = `The Round of Number ${storeValue} is ${round}`;
    } 
    else{
        floor = Math.floor(storeValue);
        printValue2.textContent = `The Round of Number ${storeValue} is ${floor}`;
    }
}

/*<-------------------------->*/

/* 8:
   If number has decimal → use Math.ceil().*/

const inputDecimal =document.getElementById("inputDecimal");
const getDeci = document.getElementById("getDeci");
const printDeci = document.getElementById("printDeci");
let checkDeci;
const ceilUp = Math.ceil(checkDeci);

getDeci.onclick = function(){
    checkDeci = inputDecimal.value;
    checkDeci = parseFloat(checkDeci);
    console.log(checkDeci % 1);

    if(checkDeci % 1 !==0 )
        printDeci.textContent = `The ${checkDeci} has decimal remainder and its ceil up will be ${ceilUp}`;
    else
        printDeci.textContent=`The ${checkDeci} has no decimal remainder.`;
}

/*<-------------------------->*/














