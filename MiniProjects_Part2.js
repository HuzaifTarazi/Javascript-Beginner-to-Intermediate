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

/* 5:
   
String Analyzer

  Topics Used:
     length, toUpperCase, trim, includes, startsWith, endsWith
  Tasks:
    Take a string input and:
      Remove extra spaces
      Convert to uppercase
      Check if it includes "JS"
      Check if it starts with "Hello" */

function TextAnalyzerFunction(fetchText) {
  fetchText = fetchText.trim();
  // fetchText = fetchText.slice(0 , 1).toUpperCase() + fetchText.slice(1, -1) + fetchText.slice(-1).toUpperCase();
  fetchText = fetchText.slice(0, 1).toUpperCase() + fetchText.slice(1, -2) + fetchText.slice(-2, -1).toUpperCase() + fetchText.slice(-1);
  if (!fetchText) {
    alert("Please Fill the Feild To Proceed..!");
    return;
  }
  const printText = document.getElementById("printText");
  if (fetchText.startsWith("Hello") && fetchText.endsWith("Js")) {
    printText.textContent = `Congradulations.! '${fetchText}' is Correct Input. :)`
  } else {
    printText.textContent = `Unfortunatly.! '${fetchText}' is Not Correct Input. :)`
  }

}

const textAnalyzer = document.getElementById("textAnalyzer");
textAnalyzer.onclick = function () {
  let analyzeString = document.getElementById("analyzeString").value;
  TextAnalyzerFunction(analyzeString);
}

/*<-------------------------->*/


/* 6:
   
Password Masker (String Methods)

  Topics Used:
     slice, charAt, replaceAll
  Tasks:
    Take a string input and:
      Show first and last character
      Replace all middle characters with * 
    */

function TextMaskingSystem(maskNow) {
  if (!maskNow || maskNow.includes(" ")) {
    alert("Please Fill the Feild Correctly.!");
    return;
  }

  let firstText;
  firstText = maskNow.charAt(0, 1);
  let middleText = "*".repeat(maskNow.length - 2);
  let lastText = maskNow.charAt(maskNow.length - 2)
  let lastText2 = maskNow.at(maskNow.length - 1)

  let maskOp = document.getElementById("maskOp");
  maskOp.textContent = `${firstText} ${middleText} ${lastText} ${lastText2}`;
}

const subMask = document.getElementById("subMask");
subMask.onclick = function () {
  let passMask = document.getElementById("passMask").value;
  TextMaskingSystem(passMask);
}

/*<-------------------------->*/


/* 7:
   
Checkbox Agreement (DOM + .checked)

  Topics Used:
     .checked, getElementById(), if else
  Tasks:
    If checkbox is checked:
      Show "You agreed to terms"
      Else: 
      Show "Please agree first"
    */
function AgreementSystem(agreeTo) {
  const agreementOp = document.getElementById("agreementOp");

  if (agreeTo.checked) {
    agreementOp.textContent = `You Accept the Agreement.`
  } else {
    agreementOp.textContent = `Please Accept the Agreement First..!`
  }
}

const agreeNow = document.getElementById("agreeNow");
agreeNow.onclick = function () {
  const checkAgreement = document.getElementById("checkAgreement");
  AgreementSystem(checkAgreement);
}

/*<-------------------------->*/

/* 8:
   
Array Manager

  Topics Used:
     Array, push, pop, shift, unshift, splice, length, indexOf
  Tasks:
    Create an array of fruits and:
      Add one at the end
      Remove one from start
      Insert one in the middle
      Log array length  
      Find index of "Apple"
    */

// Insert Array at The End --

let printArrOp = document.getElementById("printArrOp");
function ArrayManagerSystem(fruitsArr) {
  fruits = ["apple", "mango", "orange", "banana"];
  fruits.push(fruitsArr);
  const arrInsertedOp = document.getElementById("arrInsertedOp");
  arrInsertedOp.textContent = `You Have Inserted '${fruitsArr}' in Fruits Array. The Updated Array is ${fruits}`;
}

const insertArray = document.getElementById("insertArray");
insertArray.onclick = function () {
  const fruitArr = document.getElementById("fruitArr").value.trim();
  ArrayManagerSystem(fruitArr);
}

// Remove First Array --

function RemoveFirstArray() {

  let removeFirst = ["apple", "mango", "orange", "banana"];
  let removeStart = removeFirst.shift();
  console.log(removeStart);
  let arrShiftedOp = document.getElementById("arrShiftedOp");
  arrShiftedOp.textContent = `You Have Removed '${removeStart}' From Array. Your Updated Array is ${removeFirst}`
}
const removeFirstArr = document.getElementById("removeFirstArr");
removeFirstArr.onclick = function () {
  RemoveFirstArray();
}

// Insert Array in Middle -- 

function InsertArrayMiddle(insertMiddle) {
  fruits = ["apple", "mango", "orange", "banana"];
  fruits.splice(1, 0, insertMiddle)
  const middleArrOp = document.getElementById("middleArrOp");
  middleArrOp.textContent = `You Have Inserted '${insertMiddle}' in Middle of Array. Your Updated Array is: ${fruits}`


}
const insertMiddleArr = document.getElementById("insertMiddleArr");
insertMiddleArr.onclick = function () {
  const fruitArr = document.getElementById("fruitArr").value.trim();
  InsertArrayMiddle(fruitArr);
}

// Find Index Number of Array --

function FindIndexNumber(findIndex) {
  fruits = ["apple", "mango", "orange", "banana"];
  fruits = fruits.indexOf(findIndex);
  const findIndexOp = document.getElementById("findIndexOp");
  findIndexOp.textContent = `The Index of ${findIndex} is : ${fruits}`
}

const findIndexArr = document.getElementById("findIndexArr");
findIndexArr.onclick = function () {
  const fruitArr = document.getElementById("fruitArr").value.trim();
  FindIndexNumber(fruitArr)
}

/*<-------------------------->*/

/* 9:
   
Smart Search System (Loops + Functions)

  Topics Used:
     Functions, parameters, return, for loop, includes, console.log
  Tasks:
    Create a function that:
      Takes an array of names
      Takes a search word  
      Returns "Found" or "Not Found"
  
    */

function SmartSearchSystem(smartSearch) {
  let names = ["zukhruf", "huzaif", "rufaf", "osaf"]

  for (let i = 0; i < names.length; i++) {
    if (names[i].includes(smartSearch)) {
      console.log("found")
      return;
    } 
  }
  console.log("not found")
}

const smartSubmit = document.getElementById("smartSubmit");
smartSubmit.onclick = function () {
  const smartSearch = document.getElementById("smartSearch").value.trim().toLowerCase();
  SmartSearchSystem(smartSearch)
}

/*<-------------------------->*/

