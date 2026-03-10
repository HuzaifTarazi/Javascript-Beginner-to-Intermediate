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

-------------------------------------------- */

/* 1:
    Increase a number every time the button is clicked:
        Select the button and counter element.
        Use addEventListener("click").
        Increase the number by 1 each time the button is clicked.
        Update the <h2> text.
*/

const counterJs = document.getElementById("counterJs");
const btnCounter = document.getElementById("btnCounter")
let countElement = 0;
btnCounter.addEventListener("click", () => {
    countElement = countElement + 1;
    counterJs.textContent = `${countElement}`
})

/*<-------------------------->*/

/* 2:
    Change text when the mouse enters and leaves.:
        Select the box.
        When mouse enters (mouseover):
        change text to "Mouse is inside the box"
        When mouse leaves (mouseout):
        change text to "Mouse left the box"
*/

const newElement = document.createElement("p");
const boxEvent = document.getElementById("boxEvent")

boxEvent.addEventListener("mouseover", () => {
    newElement.textContent = `Mouse is inside the Box`;
    newElement.style.color = `black`
    boxEvent.style.display = `flex`
    boxEvent.style.flexDirection = `colume`
    boxEvent.style.justifyContent = `center`
    boxEvent.style.alignItems = `center`
    boxEvent.prepend(newElement);
})

boxEvent.addEventListener("mouseout", () => {
    newElement.textContent = `Mouse left the box.!`;
    newElement.style.color = `black`
    boxEvent.style.display = `flex`
    boxEvent.style.flexDirection = `colume`
    boxEvent.style.justifyContent = `center`
    boxEvent.style.alignItems = `center`
    boxEvent.prepend(newElement);
})


/*<-------------------------->*/

/* 3:
        Select the box.
        Add a click event listener.
        When clicked:
        change background color to green
        Click again → change back to red.
*/

const boxClickEvent = document.getElementById("boxClickEvent")
const pElement = document.createElement("p")

let isRed = false;

boxClickEvent.addEventListener("click", () => {


    boxClickEvent.style.display = `flex`
    boxClickEvent.style.flexDirection = `colume`
    boxClickEvent.style.justifyContent = `center`
    boxClickEvent.style.alignItems = `center`


    if (!isRed) {
        boxClickEvent.style.backgroundColor = `tomato`
        pElement.textContent = `Changed to Red Color..!`
        isRed = true
    } 
    else {
        boxClickEvent.style.backgroundColor = `lightblue`
        boxClickEvent.style.color = `black`
        pElement.textContent = `Background Color Revered.!`
        isRed = false
    }

})


/*<-------------------------->*/

/* 4:
        show and hide element
*/

const changeImgState = document.getElementById("changeImgState")
const changeState = document.getElementById("changeState")
let isHidden = false;
changeState.addEventListener("click", ()=>{

    if(!isHidden){
        changeImgState.style.visibility = `hidden`
        changeState.textContent = `Show`
        isHidden = true;
    } else {
        changeImgState.style.visibility = `visible`
        changeState.textContent = `Hide`
        isHidden = false
    }
})

/*<-------------------------->*/






/* 5:
        On mouseover
            change background to blue
        On mouseout
            change background back to gray
        On click
            change text to "Card Clicked!"
*/

const cardChngEvent = document.getElementById("cardChngEvent");


cardChngEvent.addEventListener("mouseover", () => {
    cardChngEvent.style.backgroundColor = `blue`;

})

cardChngEvent.addEventListener("mouseout", () => {
    cardChngEvent.style.backgroundColor = `grey`;
})

cardChngEvent.addEventListener("click", () => {
    cardChngEvent.textContent = `Card Clicked!`;
})

/*<-------------------------->*/



