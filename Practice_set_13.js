/* -----------------------------------------
               << Practice Set 13 >>

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

// Exercise 1:
// Print All Array Values (Basic For Loop)
// Create an array of numbers and use a for loop to print each value using console.log().

// let arr = [1, 2, 3, 4, 5, 6, 7];
// for(let i = 0; i < arr.length; i++){
//   console.log(arr[i]);
// }

// --------------------

// Exercise 2:
// Calculate the sum of all numbers in an array using a for loop.

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let arrSum = 0;
// for(let i = 0; i < arr.length; i++){

//    arrSum = arrSum + arr[i]
//    console.log(arrSum)
// }

// --------------------

// Exercise 3:
// Count Even Numbers in an Array.

// let arr = [
//   1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
// ];
// let count = 0;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 === 0) {
//     count++;
//   }
// }
// console.log();

// ----------------------

// Exercise 4:
// Convert all strings in an array to uppercase.

// let arr = ["huzaif", "osaf", "rufaf", "zukhruf"]

// for(let i = 0; i < arr.length; i++){
//   arr[i] = arr[i].toUpperCase();
// }
// console.log(arr)

// ----------------------

// Exercise 5:
// Find the maximum number using for loop and Math.max() logic.

// let arr = [1,2,3,4,5,6,7,8];
// let tempArr = arr[0]
// for(let i = 1; i < arr.length; i++){
//   if(arr[i] > tempArr){
//     tempArr = arr[i]
//   }
// }
// console.log(tempArr)

// ----------------------

// Exercise 6:
// Check whether "JS" exists in an array using includes().

// let arr = ["js", "huzaif", "osaf", "zukhruf"]

// if(arr.includes("js")){
//   console.log(true)
// } else {
//   console.log(false)
// }

// ----------------------

// Exercise 7 :
// Count Words Greater Than 4 Characters.

// let arr = ["huzaif", "osaf", "zukhruf", "rufaf", "naz"];
// let count = 0;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i].length > 5) {
//     count++;
//   }
// }
// console.log(count);


// Exercise 8 :
// Function That Returns Average of Array

// function averageArray(arr) {
//   let sum = 0;

//   for (let i = 0; i < arr.length; i++) {
//     sum = sum + arr[i];
//   }
//   return sum / arr.length;
// }
// console.log(averageArray([10, 20, 30]));
