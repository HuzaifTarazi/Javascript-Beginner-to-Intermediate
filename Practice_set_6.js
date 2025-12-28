







/* 1:
   Take age input and show age in month use Number(), *, ${}, .textContent */

let ageConvert;
const ageOnclick = document.getElementById("submitAge");
const ageInput = document.getElementById("ageInput");

ageOnclick.onclick = function () {
    ageConvert = parseInt(ageInput.value);
    const chngMonth = ageConvert * 12;
    document.getElementById("ageOutput").textContent = `Your age converted to month is ${chngMonth}`;
    console.log(typeof chngMonth, chngMonth);
}
/*<-------------------------->*/

/* 2:
   User enters a number display its square */

let inputPower;
let powOnclick = document.getElementById("submitPower");

powOnclick.onclick = function () {
    inputPower = Number(document.getElementById("inputPower").value);
    const takingPow = Math.pow(inputPower, 2);
    document.getElementById("displayPower").textContent = `The Square Of ${inputPower} is ${takingPow}`;
    console.log(typeof takingPow, takingPow);
}
/*<-------------------------->*/

/* 3:
   User Enters a decimal > show rounded value. */

let roundedVal;
document.getElementById("submitroundedvalue").onclick = function () {
    roundedVal = parseFloat(document.getElementById("roundedVal").value);
    const roundingNumber = Math.round(roundedVal);
    document.getElementById("displayrounded").textContent = `The Rounded Number Of ${roundedVal} is ${roundingNumber}`;
    console.log(typeof roundingNumber, roundingNumber);
}

/*<-------------------------->*/

/* 4:
   User Enters a decimal > show rounded value. */

let floorInput;

function roundDown() {
    floorInput = parseFloat(document.getElementById("floorInput").value);
    const floorConvert = Math.floor(floorInput);
    document.getElementById("floorDisplay").textContent = `Rounded Down value of ${floorInput} is ${floorConvert}`;
    console.log(typeof floorConvert, floorConvert);
}
document.getElementById("floorSubmit").onclick = roundDown;
/*<-------------------------->*/

/* 5:
   User enter a deciaml > show rounded up value. */

let ceilValue;
function roundUp() {
    ceilValue = parseFloat(document.getElementById("ceilValue").value);
    const ceilFormula = Math.ceil(ceilValue);
    document.getElementById("ceilOutput").textContent = `Round Up number of ${ceilValue} is ${ceilFormula}`;
    console.log(typeof ceilFormula, ceilFormula);
}
document.getElementById("ceilSubmit").onclick = roundUp;

/*<-------------------------->*/

/* 6:
   User clicks button > show random number.*/

document.getElementById("randomSubmit").onclick = function () {
    const randomValue = Math.floor(Math.random() * 6) + 1;
    document.getElementById("randomDisplay").textContent = `${randomValue}`;
}
document.getElementById("randomReset").onclick = function () {
    const reset = 0;
    document.getElementById("randomDisplay").textContent = `${reset}`
}

/*<-------------------------->*/

/* 7:
   User enters 2 numbers > show the larger number of them */

let largerNum1;
let largerNum2;

function findNum() {
    largerNum1 = Number(document.getElementById("largerNum1").value);
    largerNum2 = Number(document.getElementById("largerNum2").value);
    const findMax = Math.max(largerNum1, largerNum2);
    document.getElementById("printLg").textContent = `The Larger Number between ${largerNum1} and ${largerNum2} is ${findMax} `;
    console.log(typeof largerNum1, typeof largerNum2, findMax);
}
document.getElementById("findLg").onclick = findNum;

/*<-------------------------->*/

/* 8:
    User enters two numbers and find smallest between them. */

let smNum1;
let smNum2;
let smNum3;

function findSmNum() {
    smNum1 = Number(document.getElementById("smNum1").value);
    smNum2 = Number(document.getElementById("smNum2").value);
    smNum3 = Number(document.getElementById("smNum3").value);
    const findSm = Math.min(smNum1, smNum2, smNum3);
    document.getElementById("printSm").textContent = `The Smallest Number between ${smNum1}, ${smNum2} and ${smNum3} is ${findSm}`;
    console.log(typeof findSm, findSm);
}
document.getElementById("findSm").onclick = findSmNum;


/*<-------------------------->*/

/* 9:
    User Enters number > show its square root. */

let squareRoot;

function getsqrt() {
    squareRoot = Number(document.getElementById("squareRoot").value);
    const sqrtFormula = Math.sqrt(squareRoot);
    document.getElementById("printSquare").textContent = `Square Root of ${squareRoot} is ${sqrtFormula}`;
    console.log(typeof sqrtFormula, sqrtFormula);
}
document.getElementById("getSquare").onclick = getsqrt;

/*<-------------------------->*/

/* 10:
    User enters decimal number  > show only integer part. */

let decimalValue;
function removeDeci(){
    decimalValue = parseFloat(document.getElementById("decimalValue").value);
    const removeDecimal = Math.trunc(decimalValue);
    document.getElementById("printdecimal").textContent = `The decimal of ${decimalValue} is Removed ${removeDecimal}px`
    console.log(typeof removeDecimal, removeDecimal);
}
document.getElementById("removeDeciaml").onclick = removeDeci;
/*<-------------------------->*/


