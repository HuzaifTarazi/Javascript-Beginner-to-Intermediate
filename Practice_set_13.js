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


let numbers = [12, 45, 2, 89, 33];
let large = numbers[0]
for(let i = 0; i < numbers.length; i++){
  console.log(numbers[i])

  if(numbers[i] > large){

    // large = numbers[i]

    console.log(numbers[i])
  }
}

