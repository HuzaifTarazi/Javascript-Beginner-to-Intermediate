/* -----------------------------------------
               << Practice Set 12 >>

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

--------------------------------------------*/

/* 1:
   
  USER GREETING ENGINE
    
  Goal:
    Display a personalized greeting using a function parameter.
  Concept Used:
    Function parameter
    String concatenation
  Logic:
    The function receives a name and prints a greeting. */

function GreetingUser(greetUser) {
  let printGreeting = document.getElementById("printGreeting");
  printGreeting.textContent = `Hello, ${greetUser}`;
}
let greetNow = document.getElementById("greetNow");
greetNow.onclick = function () {
  let greetUser = document.getElementById("greetUser").value;
  GreetingUser(greetUser);
};

/*<-------------------------->*/

/* 2:
   
  LOGIN VALIDATOR (CORE REAL-WORLD USE)
    
  Goal:
    Validate username and password using parameters.
  Concept Used:
    Parameters
    Conditions
    Reusability  */

function LoginValidator(userName, passWord) {
  let printValidValues = document.getElementById("printValidValues");
  if (!userName || userName.includes(" ")) {
    printValidValues.textContent = `Enter Correct Username`;
    return;
  }
  if (!passWord || passWord.includes(" ")) {
    printValidValues.textContent = `Enter Correct Password`;
  }

  printValidValues.textContent = `Hi, ${userName} Your Password is: ${passWord}`;
}

const validateNow = document.getElementById("validateNow");
validateNow.onclick = function () {
  let loginValidUser = document.getElementById("loginValidUser").value;
  let loginValidatorPass = document.getElementById("loginValidatorPass").value;

  LoginValidator(loginValidUser, loginValidatorPass);
};

/*<-------------------------->*/

/* 3:
   
  SIMPLE CALCULATOR FUNCTION
    
  Goal:
    Perform math operations dynamically.
  Concept Used:
    Multiple parameters
    Arithmetic operations
    Reusability  */

function SimpleCalculator(number1, operator, number2) {
  let printCalculation = document.getElementById("printCalculation");
  if (isNaN(number1) || isNaN(number2)) {
    alert("Only Numbers Are Allowed!");
    return;
  }

  if (operator === "+") {
    let sum = number1 + number2;
    printCalculation.textContent = `The Sum of ${number1} and ${number2} is: ${sum}`;
    console.log(sum);
  } else if (operator === "-") {
    let subtraction = number1 - number2;
    printCalculation.textContent = `The Subtraction of ${number1} and ${number2} is: ${subtraction}`;
  } else if (operator === "/") {
    let divide = number1 / number2;
    printCalculation.textContent = `The Division of ${number1} and ${number2} is: ${divide}`;
  } else if (operator === "*") {
    let multiply = number1 * number2;
    printCalculation.textContent = `The Multiplication of ${number1} and ${number2} is ${multiply}`;
  } else {
    alert("Please Enter Correct Operator to Calculate Numbers");
  }
}

let calculateNow = document.getElementById("calculateNow");

calculateNow.onclick = function () {
  let userNumber1 = document.getElementById("userNumber1").value;
  userNumber1 = Number(userNumber1);
  let userNumber2 = document.getElementById("userNumber2").value;
  userNumber2 = Number(userNumber2);

  let operator = document.getElementById("operator").value;
  SimpleCalculator(userNumber1, operator, userNumber2);
};

/*<-------------------------->*/
