/* -----------------------------------------
               << Mini Project Part_2 >>

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

-------------------------------------------- */

/* 1:
   
  Simple Calculator (Operators + Input)
    Topics Used:
        let, const, + - * / %, getElementById().value, Number(), console.log, functions, parameters, arguments
    Tasks:
        Create a calculator that:
        Takes two numbers from input fields
    Logs:
        Sum, Difference, Product, Division, Remainder */

const printOp = document.getElementById("printOp");
let result;
function SimpleCalculator(numberOne, numberTwo, operatorType) {
  if (isNaN(numberOne) || isNaN(numberTwo)) {
    printOp.textContent = `Please Enter Correct Number`;
    return;
  }
  const operatorsArr = ["+", "-", "/", "*"];
  if (!operatorsArr.includes(operatorType)) {
    printOp.textContent = `Operator Type is wrong!`;
    return;
  }

  switch (operatorType) {
    case "+":
      result = numberOne + numberTwo;
      printOp.textContent = `${numberOne} ${operatorType} ${numberTwo} = ${result}`;
      break;
    case "-":
      result = numberOne - numberTwo;
      printOp.textContent = `${numberOne} ${operatorType} ${numberTwo} = ${result}`;
      break;
    case "/":
      result = numberOne / numberTwo;
      printOp.textContent = `${numberOne} ${operatorType} ${numberTwo} = ${result}`;
      break;
    case "*":
      result = numberOne * numberTwo;
      printOp.textContent = `${numberOne} ${operatorType} ${numberTwo} = ${result}`;
      break;
  }
}

const performOp = document.getElementById("performOp");

performOp.onclick = function () {
  const enterNumber1 = Number(document.getElementById("enterNumber1").value);
  const enterNumber2 = Number(document.getElementById("enterNumber2").value);
  const operatorType = String(document.getElementById("operatorType").value);

  SimpleCalculator(enterNumber1, enterNumber2, operatorType);
};

/*<-------------------------->*/

/* 2:
   
  Age Checker (if / else + Comparison)
    Topics Used:
        if, else if, else, > < >= <= === !==, functions, function parameters, function arguments
    Tasks:
        Take age from input and:
            If age < 18 → log "Minor"
            If age ≥ 18 and < 60 → log "Adult"
            If age ≥ 60 → log "Senior" */

function AgeCheckFunc(yourAge) {
    if(isNaN(yourAge)){
        alert("Error! Please Enter Correct Age..!");
        return;
    }
    const prntAgeCheck = document.getElementById("prntAgeCheck");
    if(yourAge < 18){
        prntAgeCheck.textContent = `You are A Minor..!`;
    } else if(yourAge >= 18 && yourAge < 60){
        prntAgeCheck.textContent = `You are An Adult..!`;
    } else if(yourAge > 60){
        prntAgeCheck.textContent = `You are a Senior..!`
    }
}

const checkAgeElig = document.getElementById("checkAgeElig");
checkAgeElig.onclick = function(){
  let eligibleAgeOp = Number(document.getElementById("eligibleAgeOp").value);
  
  AgeCheckFunc(eligibleAgeOp);
};

/*<-------------------------->*/
