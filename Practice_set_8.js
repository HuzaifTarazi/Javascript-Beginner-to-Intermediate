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
   A user enter a product price.
   Apply a discount based on the price range and show final price.*/

const actualPrice = document.getElementById("actualPrice");
const checkDiscount = document.getElementById("checkDiscount");
const printDiscount = document.getElementById("printDiscountPrice");
let finalPrice;

function DiscountFunction() {
  finalPrice = actualPrice.value;
  finalPrice = Number(finalPrice);

  if (finalPrice >= 1000 && finalPrice <= 5000) {
    finalPrice = finalPrice - (finalPrice * 10) / 100;
    printDiscount.textContent = `You have gotten 10% off. Update Price is ${finalPrice}.`;
  } else if (finalPrice >= 5000) {
    finalPrice = finalPrice - (finalPrice * 20) / 100;
    printDiscount.textContent = `You have gotten 20% off. Update Price is ${finalPrice}`;
  } else {
    printDiscount.textContent = `No Discount Availabe`;
  }
}

checkDiscount.onclick = DiscountFunction;

/*<-------------------------->*/

/* 2:
   User Enters Marks.
   Display Pass/Fail and Grade.*/

let enterMarks;

function GradingSystem() {
  enterMarks = Number(document.getElementById("enterMarks").value);

  if (enterMarks <= 40) {
    document.getElementById(
      "printGrade"
    ).textContent = `You Have Failed! Better Luck Next Time.`;
  } else if (enterMarks <= 60) {
    document.getElementById(
      "printGrade"
    ).textContent = `You Have Gotten Grade C`;
  } else if (enterMarks <= 80) {
    document.getElementById(
      "printGrade"
    ).textContent = `You Have Gotten Grade B.`;
  } else {
    document.getElementById(
      "printGrade"
    ).textContent = `You have Gotten Grade A`;
  }
}
document.getElementById("checkResult").onclick = GradingSystem;

/*<-------------------------->*/

/* 3:
   Calculate total electricity bill base on units consumed.*/

const unitsConsumed = document.getElementById("unitsConsumed");
const checkBill = document.getElementById("checkBill");
const printBill = document.getElementById("printBill");
let calculateTotalbill;
let printConsumedUnits;
function CalculateBill() {
  printConsumedUnits = Number(unitsConsumed.value);
  calculateTotalbill = printConsumedUnits;
  if (calculateTotalbill <= 100) {
    calculateTotalbill = calculateTotalbill * 10;
    printBill.textContent = `You Have Consumed ${printConsumedUnits} Units Which costs ${calculateTotalbill}$`;
  } else if (calculateTotalbill <= 200) {
    calculateTotalbill = 100 * 10 + (calculateTotalbill - 100) * 15;
    printBill.textContent = `You Have Consumed ${printConsumedUnits} Units Which costs ${calculateTotalbill}$`;
  } else {
    calculateTotalbill = 100 * 10 + 100 * 15 + (calculateTotalbill - 100) * 20;
    printBill.textContent = `You Have Consumed ${printConsumedUnits} Units Which costs ${calculateTotalbill}$`;
  }
}

checkBill.onclick = CalculateBill;
/*<-------------------------->*/

/* 4:
   User enters height and weight calculate bmi and health category.*/

let userHeight;
let userWeight;
let calculateBmi;

document.getElementById("getBmi").onclick = function () {
  userHeight = parseFloat(document.getElementById("userHeight").value);
  userWeight = parseFloat(document.getElementById("userWeight").value);
  calculateBmi = userWeight / Math.pow(userHeight, 2);
  calculateBmi = calculateBmi.toFixed(2);
  calculateBmi = parseFloat(calculateBmi);
  if (calculateBmi <= 18.5) {
    document.getElementById(
      "bmiPrint"
    ).textContent = `Your Bmi is ${calculateBmi} and are Underweight`;
  } else if (calculateBmi <= 25) {
    document.getElementById(
      "bmiPrint"
    ).textContent = `Your Bmi is ${calculateBmi} and are Normal`;
  } else {
    document.getElementById(
      "bmiPrint"
    ).textContent = `Your Bmi is ${calculateBmi} and are Overweight`;
  }
};

/*<-------------------------->*/

/* 5:
   Generate a dice roll and classify result.*/

const rollDice = document.getElementById("rollDice");
const diceNumber = document.getElementById("diceNumber");
let executeDice;

function DiceRollFunction() {
  executeDice = Math.trunc(Math.random() * 6) + 1;
  if (executeDice <= 2) {
    diceNumber.textContent = `The Random Number is ${executeDice} and It is Low`;
  } else if (executeDice <= 4) {
    diceNumber.textContent = `The Random Number is ${executeDice} and it is Medium`;
  } else {
    diceNumber.textContent = `The Random Number is ${executeDice} and it is High`;
  }
}
rollDice.onclick = DiceRollFunction;

/*<-------------------------->*/

/* 6:
   Calculate Yearly Tax from Monthly Salary.*/

const enterSalary = document.getElementById("enterSalary");
const submitSalary = document.getElementById("submitSalary");
const printTax = document.getElementById("printTax");
const printYearlySalary = document.getElementById("printYearlySalary");
let yearlyTax;

function TaxCalculation() {
  yearlyTax = Number(enterSalary.value);
  yearlyTax = yearlyTax * 12;
  printYearlySalary.textContent = `Your Yearly Salary is ${yearlyTax}`;
  if (yearlyTax <= 600000) {
    printTax.textContent = `You are not eligible for Tax.`;
  } else if (yearlyTax <= 1200000) {
    yearlyTax = yearlyTax * (5 / 100);
    printTax.textContent = `You have to pay ${yearlyTax} as per your yearly salary.`;
  } else {
    yearlyTax = yearlyTax * (10 / 100);
    printTax.textContent = `You have to pay ${yearlyTax} as per your yearly salary.`;
  }
}
submitSalary.onclick = TaxCalculation;

/*<-------------------------->*/

/* 7:
   A user enters a username and pin code.*/
const pUsername = document.getElementById("pUsername");
const pinCode = document.getElementById("pinCode");
const pSubmit = document.getElementById("pSubmit");
const pOutput = document.getElementById("pOutput");

function AuthenticationSystem() {
  let getUsername = String(pUsername.value);
  let getPincode = Number(pinCode.value);

  if (getUsername !== "" && getPincode >= 1000 && getPincode <= 10000) {
    pOutput.textContent = `Login Successful`;
  } else {
    pOutput.textContent = `Login Failed`;
  }
}

pSubmit.onclick = AuthenticationSystem;

/*<-------------------------->*/

/* 8:
   A student enters Age and Attendance Percentage.*/
let studentAge = document.getElementById("studentAge");
let studentAttendance = document.getElementById("studentAttendance");
let submitInfo = document.getElementById("submitInfo");
let studentEligible = document.getElementById("studentEligible");

function StudentEligibilitySystem() {
  studentAge = parseInt(studentAge.value);
  studentAttendance = parseInt(studentAttendance.value);
  console.log(studentAge, studentAttendance);
  if (!(studentAge >= 18 && studentAttendance >= 75)) {
    studentEligible.textContent = `You are Not Eligible to enter.`;
  } else {
    studentEligible.textContent = `You are Eligible to enter.`;
  }
}

submitInfo.onclick = StudentEligibilitySystem;
/*<-------------------------->*/
