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

Variable Scopes (Local , Global)


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
    return;
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

/* 4:
   
  ATTEMPT COUNTER SYSTEM
    
  Goal:
    Track attempts using parameters instead of global variables.
  Concept Used:
    Multiple parameters
    Comparison logic
    Reusability  */

function CheckTotalAttempts(startAttempt, maxAttempt) {
  attemptLeft = maxAttempt - startAttempt;
  let remainAttempts = document.getElementById("remainAttempts");
  if (startAttempt >= maxAttempt) {
    alert("Sorry! Your Account is Locked..");
  } else {
    remainAttempts.textContent = `You have ${attemptLeft} Attempts Left.`;
  }
}

const checkAttempts = document.getElementById("checkAttempts");
checkAttempts.onclick = function () {
  let maxAttempts = document.getElementById("maxAttempts").value;
  maxAttempts = Number(maxAttempts);

  CheckTotalAttempts(1, maxAttempts);
};

/*<-------------------------->*/

/* 5:
   
  PASSWORD STRENGTH CHECKER
    
  Goal:
    Check password length dynamically.
  Concept Used:
    Multiple parameters
    String length
    Reusability  */

function PasswordStrengthChecker(PassLength) {
  let printPassStrength = document.getElementById("printPassStrength");

  if (PassLength.length <= 6) {
    alert("Password Must be Greater Then 6.!");
  } else {
    printPassStrength.textContent = `Hi,Your ${PassLength} is Approved!`;
  }
}

const checkStrength = document.getElementById("checkStrength");
checkStrength.onclick = function () {
  let passStrength = document.getElementById("passStrength").value;

  PasswordStrengthChecker(passStrength);
};

/*<-------------------------->*/
