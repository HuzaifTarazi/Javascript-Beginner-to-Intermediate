/* -----------------------------------------
               << Practice Set 3 >>
let, 
const, 
Arithimatic Operators, 
console.log, 
${}, 
getElementById().textContent;
getElementById().value; 
getElementById().onclick;
window.prompt
Number(),
parseInt(),
parseFloat(), 
String(),
Boolean(), 

--------------------------------------------*/


/* 1:
   Show Name on Screen -- When clicked show the input text inside a paragraph. */

let myinputtext;

document.getElementById("myinputsubmit").onclick = function () {
   myinputtext = document.getElementById("myinputtext").value;
   document.getElementById("myinputresult").textContent = `You Entered: ${myinputtext}`;
}

/*<-------------------------->*/

/* 2:
   Sum two numbes from input. 
   Create two input for numbers and a button when clicked 
   show their sum in a span use Number() or + to convert values. */

let num1;
let num2;

function cal_sum() {
   num1 = Number(document.getElementById("num1").value);
   num2 = Number(document.getElementById("num2").value);
   console.log(typeof num1, num1, typeof num2, num2);
   addition = num1 + num2;
   document.getElementById("cal_result").textContent = `SUM OF ${num1} and ${num2} = ${addition}`;
}
document.getElementById("cal_sum").onclick = cal_sum;
/*<-------------------------->*/

/* 3:
   Take two inputs. 
   When button clicked, 
   show the multiplication result in a paragraph. Use parseFloat() for decimal numbers. */

function multiplication() {
   const mul_num1 = parseFloat(document.getElementById("mul_num1").value);
   const mul_num2 = parseFloat(document.getElementById("mul_num2").value);
   const multiply = mul_num1 * mul_num2;
   document.getElementById("mul_cal_result").textContent = `Multiplication OF ${mul_num1} and ${mul_num2} is: ${multiply}`;
   console.log(typeof mul_num1, mul_num1, typeof mul_num2, mul_num2, '=', multiply);
}
document.getElementById("cal_mul").onclick = multiplication;

/*<-------------------------->*/

/* 4:
   Take two inputs. 
   When button clicked, 
   show the result of first input divided by the second use parseInt() or parseFloat() */

function divide_numbers() {
   let divide_num1 = parseInt(document.getElementById("divide_num1").value);
   let divide_num2 = parseInt(document.getElementById("divide_num2").value);
   division = divide_num1 / divide_num2;
   console.log(typeof divide_num1, divide_num1, typeof divide_num2, divide_num2);
   document.getElementById("divide_cal_result").textContent = `Division of ${divide_num1} with ${divide_num2} is: ${division}`;
}
document.getElementById("cal_divide").onclick = divide_numbers;

/*<-------------------------->*/

/* 5:
   Take a number input. 
   When button clicked, 
   Convert it to a string string() and show the type using ${} in a paragraph. */

function convert_string() {
   let entervalue = Number(document.getElementById("entervalue").value);
   let convertString = String(entervalue);
   document.getElementById("showconverttype").textContent = `Type is Converted to: ${typeof convertString}`;
   console.log(convertString);
}
document.getElementById("convertvalue").onclick = convert_string;

/*<-------------------------->*/

/* 6:
   Take a number input. 
   When button clicked, 
   Convert it to boolean using boolean() and display in a paragraph. */

let booleanvalue;

document.getElementById("convertbooleanvalue").onclick = function () {
   booleanvalue = document.getElementById("booleanvalue").value;
   changevalue = Boolean(booleanvalue);
   console.log(changevalue);
   document.getElementById("showbooleantype").textContent = `Type is Converted to: ${changevalue}`;
}

/*<-------------------------->*/

/* 7:
   Take a number input. 
   When button clicked, 
   Increase it by 1 using arthimatic operator and display using template literal */

let expected_increment;

document.getElementById("increment_submit").onclick = function () {
   expected_increment = parseInt(document.getElementById("expected_increment").value);
   expected_increment++;
   document.getElementById("increment_result").textContent = `Incremented Value is: ${expected_increment}`;
   console.log(typeof expected_increment, expected_increment);
}

/*<-------------------------->*/

/* 8:
   Use window prompt to Take a number input. 
   When button clicked, 
   convert it to a number and show double of it in span */

document.getElementById("double_submit").onclick = function () {
   const double_number = Number(window.prompt("Enter Value to Get Double: "));
   let result = double_number * 2;
   document.getElementById("double_result").textContent = `Doubled Value: ${result}`;
   console.log(typeof result, result);
}
/*<-------------------------->*/

/* 9:
   Take two inputs. 
   When button clicked, 
   Show remainder of first divide by second using % */
let rem1;
let rem2;
document.getElementById("rem_submit").onclick = function () {
   rem1 = parseInt(document.getElementById("rem1").value);
   rem2 = parseInt(document.getElementById("rem2").value);
   remainder = rem1 % rem2;
   document.getElementById("rem_result").textContent = `Remainder of ${rem1} and ${rem2} is: ${remainder}`;
   console.log(typeof remainder, remainder);
}
/*<-------------------------->*/

/* 10:
   Create two inputs and four buttons (+,-,/,*). 
   When button clicked, 
   Perform the respective arthimetic operation and show result in a span.
   Use Number(), parseInt(), parseFloat(). */

let input1;
let input2;

function cal_add() {
   input1 = Number(document.getElementById("input1").value);
   input2 = Number(document.getElementById("input2").value);
   const addition = input1 + input2;
   document.getElementById("calculations_output").textContent = 
      `Calculation of Both Numbers = Addtion of ${input1} and ${input2} is ${addition}.`;
   console.log(typeof addition, `Addition of ${input1} and ${input2} is ${addition}`);
}
function cal_minus() {
   input1 = Number(document.getElementById("input1").value);
   input2 = Number(document.getElementById("input2").value);
   const subtraction = input1 - input2;
   document.getElementById("calculations_output").textContent = 
      `Calculation of Both Numbers = Subtraction of ${input1} and ${input2} is ${subtraction}.`;
   console.log(typeof subtraction, `Subtraction of ${input1} and ${input2} is: ${subtraction}`);
}
function cal_multiply() {
   input1 = Number(document.getElementById("input1").value);
   input2 = Number(document.getElementById("input2").value);
   const Multiply_number = input1 * input2;
   document.getElementById("calculations_output").textContent = 
      `Calculation of Both Numbers = Multiplication of ${input1} and ${input2} is ${Multiply_number}.`;
   console.log(typeof Multiply_number, `Multiplication of ${input1} and ${input2} is: ${Multiply_number}`);
}
function mydivision(){
   input1 = Number(document.getElementById("input1").value);
   input2 = Number(document.getElementById("input2").value);
   const divide_input_numbers = input1 / input2 ;
   document.getElementById("calculations_output").textContent = 
      `Calculation of Both Numbers = Division of ${input1} and ${input2} is ${divide_input_numbers}.`;
   console.log(typeof divide_input_numbers, `Division of ${input1} and ${input2} is: ${divide_input_numbers}`);
}
function myremainder(){
   input1 = Number(document.getElementById("input1").value);
   input2 = Number(document.getElementById("input2").value);
   const cal_myremainder = input1 % input2;
   document.getElementById("calculations_output").textContent = 
   `Calculation of Both Numbers = Remainder of ${input1} and ${input2} is: ${cal_myremainder}`;
   console.log(typeof cal_myremainder, `Remainder of ${input1} and ${input2} is: ${cal_myremainder}`);
}
document.getElementById("cal_add").onclick = cal_add;
document.getElementById("cal_minus").onclick = cal_minus;
document.getElementById("cal_multiply").onclick = cal_multiply;
document.getElementById("cal_mydivide").onclick = mydivision;
document.getElementById("cal_remainder").onclick = myremainder;
/*<-------------------------->*/



