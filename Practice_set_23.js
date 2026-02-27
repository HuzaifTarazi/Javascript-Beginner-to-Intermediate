/* -----------------------------------------
               << Revesion of All >>

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

Spread Operator, Spread Operator(...), Rest Parameter(...), Callback Function

Callbacks, forEach(), map(), filter(), reduce(), findIndex()

Function Expression , Arrow Function, Objects, This Method

Class, Constructor, Object Creation Using Class, Static Keyword

Inheritance, Super Keyword, this, Getter, Setter, Destructuring 

Nested Objects, Arrays of objects 

sort Method (for Numeric a - b, for > String - localeCompare)

Date(), Closures

-------------------------------------------- */


/* 1:
     Calculator Using
     let, const, Math Operators, and Conditionals
*/

// const val1 = Number(window.prompt("Enter Value One: "));
// const val2 = Number(window.prompt("Enter Value Two: "));
// const insertOperator = window.prompt("Enter Operator: ")

// if (isNaN(val1) || isNaN(val2)) {
//     alert("Please Fill the Field Correctly");

// }

// const operatorArr = ["+", "-", "*", "/"]

// if (!operatorArr.includes(insertOperator)) {
//     alert(`Please Insert Valid Operator: [ + , - , * , / ]`)
// } else {
//     if (insertOperator === "+") {
//         const addition = val1 + val2;
//         alert(`Addition of Both Values: ${addition}`);
//     } else if (insertOperator === "-") {
//         const substraction = val1 - val2;
//         alert(`Substraction of Both Values: ${substraction}`);
//     } else if (insertOperator === "*") {
//         const multiplication = val1 * val2;
//         alert(`Multiplication of Both Values: ${multiplication}`)
//     } else if (insertOperator === "/") {
//         const division = val1 / val2;
//         alert(`Division of Both Values: ${division}`)
//     }
// }

/*<-------------------------->*/

/* 2:
    Age Checker Using Logical Operators
*/

// let namesArr = ["Huzaif", "Zukhruf", "Rufaf", "Osaf"]

// for(let i = 0; i < namesArr.length; i++){

//      let myAge = window.prompt(`Enter Your Age: `) 

//      if(isNaN(myAge)){
//           alert(`Enter Age Correctly: `)
//           continue;
//      } else if(myAge >= 70 && myAge <= 80){
//           alert(`70 - 80 years old.`)
//      } else if(myAge >= 50 && myAge <= 60){
//           alert(`50 - 60 years old.`)
//      } else if(myAge >= 30 && myAge <= 50){
//           alert(`30 - 50 years old.`)
//      } else if(myAge >= 15 && myAge <= 26){
//           alert(`15 - 26 years old.`)
//      }

//      console.log(`${namesArr[i]} is ${myAge} Years Old.`)

// }

/*<-------------------------->*/


/* 3:
    DOM Interaction
*/

const greetbtn = document.getElementById("greetbtn");
const greeting = document.getElementById("greeting");

greetbtn.onclick = function () {
     let greetInpu = document.getElementById("greetInpu").value;
     let saveInpu = greetInpu.trim().slice(0, 1).toUpperCase() + greetInpu.trim().slice(1)
     greeting.textContent = greetInpu ? `Hello ${saveInpu}! How are You..` : "Please Fill the Filed.!";
}

/*<-------------------------->*/


/* 4:
    Math Practice
    Math.round,trunc
    floor,ceil,random,max,
    min,pow,sqrt,abs,
*/

// const numbers = [3.7, 5.2, -9.8, 10];

// Round Number
// let roundNumber = numbers.map((element)=>{return Math.round(element)})
// console.log(roundNumber)

// trunc Number
// let truncNumber = numbers.map((element)=>{return Math.trunc(element)})
// console.log(truncNumber)

// floor Number
// let floorNumber = numbers.forEach(element => console.log(Math.floor(element)))

// Ceil Number
// let ceilNumber = numbers.map(element => console.log(Math.ceil(element)))

// random Number
// let randomArr = [];
// for(let i = 0; i <= 5; i++){
//      randomArr.push(Math.floor(Math.random() * 100 + 1))
// }
// console.log(randomArr)

// max Number
// let maxNumberArr = [];
// for(let i = 0; i <= 10; i++){
//     maxNumberArr[i] =  maxNumberArr.push()
// }
// const MaxNumber = Math.max(...maxNumberArr)
// console.log(MaxNumber)

// Min Number
// let emptyNumberArr = [];
// for(let i = 0; i <= 5; i++){
//      emptyNumberArr[i] = emptyNumberArr.push()
// }
// const minNumbersArr = Math.min(...emptyNumberArr)
// console.log(minNumbersArr)

// Pow Number
// const powNumber = Math.pow(2, 3)
// console.log(powNumber)

// sqrt Number
// const sqrtNumber = Math.sqrt(36);
// console.log(sqrtNumber)

// abs Number
// const absNumber = Math.abs(-1999)
// console.log(absNumber)

/*<-------------------------->*/


/* 5:
    String Operations:
          .length, .toUpperCase(), .toLowerCase(), 
          .trim(), .includes(), .startsWith(), 
          .endsWith(), .indexOf(), .slice(), 
          .substring(), .replace(), .replaceAll(), 
          .split(), .charAt() 
*/

// const text = "  JavaScript is fun! JavaScript is powerful!";

// lenght
// console.log(text.length)

// To Upper Case
// console.log(text.toUpperCase())

// To Lower Case
// console.log(text.toLowerCase())

// trim Character
// console.log(text.trim())

// Include
// console.log(text.includes("JavaScript"))

// Starts With
// console.log(text.startsWith(" "))

// Ends With
// console.log(text.endsWith("!"))

// index Of 
// console.log(text.indexOf("powerful"))

// slicing 
// console.log(text.slice(2, 5))

//  Sub string
// console.log(text.substring(2, 6))

// replacing
// console.log(text.trim().replace("JavaScript", "JARVIS"))

// replacing all
// console.log(text.trim().replaceAll("JavaScript", "Jarvis"))

// split
// let splitVal = text.split(" ")
// console.log(splitVal)

// character At 
// console.log(text.indexOf("fun"))
// console.log(text.charAt(16))
// console.log(text.charAt(17))
// console.log(text.charAt(18))
/*<-------------------------->*/