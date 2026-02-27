/* -----------------------------------------
               << Practice Set 22 >>

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
    TextSizing Using Closures
*/

// const changeh1 = document.getElementById("changeh1");
// const btn = document.getElementById("btn");
// const resetbtn = document.getElementById("resetbtn");

// function myh1(size) {

//     function textSize() {
//         return changeh1.style.fontSize = `${size}px`
//     }
//     function reset() {
//         return changeh1.style.fontSize = `${size}px`
//     }

//     return { textSize, reset };
// }

// const { textSize } = myh1(50);
// const { reset } = myh1(12)

// btn.onclick = textSize;
// resetbtn.onclick = reset;

/*<-------------------------->*/

/* 2:
    Private Counter -
*/

// const counterBtn = document.getElementById("counterBtn");
// const changeValue = document.getElementById("privateCount");
// const decreaseBtnPri = document.getElementById("decreaseBtnPri");

// function Counter(){
//     let privateCount = 0;

//     function incrementPrivate(){
//         privateCount = privateCount + 1;
//         return changeValue.textContent = `${privateCount}`;
//     }

//     function decrementPrivate(){
//         privateCount = privateCount - 1;
//         return changeValue.textContent = `${privateCount}`;
//     }

//     return {incrementPrivate, decrementPrivate};
// }


// const {incrementPrivate, decrementPrivate} = Counter();


// counterBtn.onclick = incrementPrivate;
// decreaseBtnPri.onclick = decrementPrivate;

/*<-------------------------->*/


// const counter = (function(){
    
//     let privateCounter = 0;

//     function ChangeBy(val){
//          privateCounter = privateCounter + val; 
//     }
//     return {
//         increament(){
//             ChangeBy(1)
//         },
//         decrement(){
//             ChangeBy(-1)
//         },
//         value(){
//             return privateCounter;
//         }
//     }
// })();

// counter.increament();
// counter.increament();
// counter.increament();
// counter.increament();

// console.log(counter.value())

/*<-------------------------->*/

/* 3:
   Function Returning Functions (Greeting Generator)
*/

// function greet(greet){

//     function performGreet(value){
//         return `${greet} ${value} - How Are You.!`
//     }

//     return {performGreet};
// }

// const {performGreet} = greet("Hello")

// console.log(performGreet("Sara"))
// console.log(performGreet("Huzaif"))
// console.log(performGreet("Zukhruf"))

/*<-------------------------->*/

/* 4:
   Multiplication Table Generator
*/

// function multiply(initialVal){
//     let storeResult;
//     function MultiplyBy(value){
//         storeResult = initialVal * value
//         return storeResult;
//     }
//     return {MultiplyBy};
// }

// const {MultiplyBy} = multiply(10)

// console.log(MultiplyBy(5))


/*<-------------------------->*/



