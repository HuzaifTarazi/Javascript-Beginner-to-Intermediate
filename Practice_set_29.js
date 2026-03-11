/* -----------------------------------------
               << Practice set 28 >>


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
concat(), length, reverse(), sort().

Spread Operator, Spread Operator(...), Rest Parameter(...), Callback Function

Callbacks, forEach(), map(), filter(), reduce(), findIndex()

Function Expression , Arrow Function, Objects, This Method

Class, Constructor, Object Creation Using Class, Static Keyword

Inheritance, Super Keyword, this, Getter, Setter, Destructuring

Nested objects, Arrays of objects, Sorting, Shuffle an array,  Dates, Closures

setTimeout, setInterval, clearTimeout, ES6 Modules , Asynchronous code

try catch, throw new Error,

DOM, getElementById(), getElementByClassName(), getElementsByTagName(), querySelector(), querySelectorAll()


.firstElementChild, LastElementChild, nextElementSibling, previousElementSibling, parentElement, childern

createElement(), append(), prepend(), removeChild(), insertBefore()

click, mouseover, mouseout, addEventListener(event, callback)

KeyPress, KeyDown, KeyUp, callback hell(avoid)

Promises, async / awaite

-------------------------------------------- */


/* 1:
    <-- Basic Promise Creation -->
    Goal: Understand how a Promise resolves or rejects.

    Task:
        Create a function checkNumber(num) that returns a Promise.
    Rules:
        If num > 10 → resolve with "Number is greater than 10"
        Otherwise → reject with "Number is too small"
*/

// function CheckNumberPromise(passNumber) {
//     return new Promise((resolve, reject) => {
//         if (passNumber > 10) {
//             resolve("Number is Greater Then 10.!")
//         } else {
//             reject("Number is Too Small.!")
//         }
//     })
// }

// CheckNumberPromise(5).then(value => { console.log(value) })

/*<-------------------------->*/


/* 2:
    <-- Simulating API Delay -->
    Goal: Practice asynchronous behavior using setTimeout.
    
    Task:
        Create a function getUserData() that returns a Promise.
    Rules:
       After 2 seconds, resolve with an object
*/

function GetUserPromise(){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
                resolve({name: "Huzaif", age: 34})
        }, 2000);
    })
}

GetUserPromise().then(value =>{ console.log(value)})



/*<-------------------------->*/