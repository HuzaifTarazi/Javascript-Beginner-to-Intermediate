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
  if (isNaN(yourAge)) {
    alert("Error! Please Enter Correct Age..!");
    return;
  }
  const prntAgeCheck = document.getElementById("prntAgeCheck");
  if (yourAge < 18) {
    prntAgeCheck.textContent = `You are A Minor..!`;
  } else if (yourAge >= 18 && yourAge < 60) {
    prntAgeCheck.textContent = `You are An Adult..!`;
  } else if (yourAge > 60) {
    prntAgeCheck.textContent = `You are a Senior..!`
  }
}

const checkAgeElig = document.getElementById("checkAgeElig");
checkAgeElig.onclick = function () {
  let eligibleAgeOp = Number(document.getElementById("eligibleAgeOp").value);

  AgeCheckFunc(eligibleAgeOp);
};

/*<-------------------------->*/

/* 3:
   
Login Validation (Logical Operators)

  Topics Used:
     && || !, if else, let , const, function, parameters, arguments
  Tasks:
    Username is not empty
    Password length is at least 6
    Log "Login Successful" or "Invalid Credentials" */

function UserAuthentication(fetchUser) {
  if (!fetchUser || fetchUser.includes(" ")) {
    alert("Username Invalid.! Try Again");
    return;
  }
  const getUserOp = document.getElementById("getUserOp");
  if (fetchUser.length >= 6) {
    getUserOp.textContent = `${fetchUser}..! Login Successful`;
  } else {
    getUserOp.textContent = `${fetchUser}..! Login Unsuccessful`;
  }
}

const pushUserOp = document.getElementById("pushUserOp");
pushUserOp.onclick = function () {
  const userNameOp = document.getElementById("userNameOp").value.trim();
  let updateUser = userNameOp.slice(0, 1).toUpperCase() + userNameOp.slice(1).toLowerCase();

  UserAuthentication(updateUser)
}

/*<-------------------------->*/

/* 4:
   
Math Tool (Math Object)

  Topics Used:
     Math.round, floor, ceil, random, max, min, pow, sqrt, abs
  Tasks:
    Given two numbers:
    Show max and min
    Square the first number
    Square root of second number
    Absolute difference
    Generate a random number between 1–10 */

const mathToolSubmit = document.getElementById("mathToolSubmit");
function MathToolFunctions() {
  const mathValueOne = document.getElementById("mathValueOne").value;
  const mathValueTwo = document.getElementById("mathValueTwo").value;
  const prntMathTool = document.getElementById("prntMathTool");

  if (isNaN(mathValueOne) || isNaN(mathValueTwo)) {
    alert("Please Enter Valid Number.!");
    return;
  }
  let maxValue = Math.max(mathValueOne, mathValueTwo);
  let minValue = Math.min(mathValueOne, mathValueTwo);
  let firstSqr = Math.sqrt(mathValueOne);
  let secondSqr = Math.sqrt(mathValueTwo);
  let difference = Math.abs(mathValueOne);
  let randomNumber = Math.trunc(Math.random() * 10) + 1;
  prntMathTool.textContent = `The Max Value from ${mathValueOne} and ${mathValueTwo} is : ${maxValue} 
                          \n  The Min Value from ${mathValueOne} and ${mathValueTwo} is : ${minValue}
                          \n  The Square Root of ${mathValueOne} is : ${firstSqr}
                          \n  The Square Root of ${mathValueTwo} is : ${secondSqr}
                          \n  The Absolute Difference of ${mathValueOne} is : ${difference}
                          \n  The Random Number From 1-10 is: ${randomNumber}`;

}
mathToolSubmit.onclick = MathToolFunctions;

/*<-------------------------->*/



