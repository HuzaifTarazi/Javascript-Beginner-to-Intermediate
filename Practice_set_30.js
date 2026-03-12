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
    <-- Basic Async Function -->
    Goal: Create an async function that returns a greeting after 2 seconds.

    Requirements:
        Create a function getGreeting()
        Use setTimeout wrapped in a Promise
        Wait using await
    Console output:
        Hello Huzaif! Welcome to Async JavaScript
*/

// function getGreeting() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Hello, Huzaif! Welcome to Async Javascript")
//         }, 2000);
//     })
// }

// async function greetAsyncFun() {
//     const storeMessage = await getGreeting();
//     console.log(storeMessage)
// }

// greetAsyncFun()

/*<-------------------------->*/

/* 2:
    <-- Simulate Fetching User Data -->

    Goal: Create an async function getUser() that returns a user object after 2 seconds.

*/

// function simulateFetch(){
//     return new Promise((resolve, reject)=>{
//         resolve({name: "Huzaif", age: 23})
//     })
// }

// async function getSimulateFetch(){
//     const fetch = await simulateFetch()
//     console.log(fetch)
// }

// getSimulateFetch()

/*<-------------------------->*/


/* 3:
    <-- Sequential Tasks -->

    Simulate making tea with three steps:
        Boil water
        Add tea leaves
        Tea ready
    Each step should take 1 second..

*/
function BoilWater() {
    const boilWater = true;
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!boilWater) {
                reject("You Did not Boil the Water")
            } else {
                resolve("You boiled Water")
            }
        }, 1000);
    })
}

function AddTeaLeaves() {
    const teaLeave = true;

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!teaLeave) {
                reject("You did not add tea leaves")
            } else {
                resolve("You Added Tea leaves")
            }
        }, 1000);
    })
}


function TeaReady() {
    const teaReady = true;

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!teaReady) {
                reject("Tea is not Ready")
            } else {
                resolve("Tea is Ready 😀")
            }
        }, 1000);
    })
}

async function choresDone() {
    try {
        const boiledWater = await BoilWater()
        console.log(boiledWater)
        const teaLeave = await AddTeaLeaves()
        console.log(teaLeave)

        const teaReadyNow = await TeaReady()
        console.log(teaReadyNow)
    } catch (error) {
        console.error(error)
    }
}

choresDone()
/*<-------------------------->*/

