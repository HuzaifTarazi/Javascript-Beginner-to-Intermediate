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

-------------------------------------------- */


/* 1:
     When the button is clicked:
        Select the heading using getElementById
        Change the text to "JavaScript is Powerful"
*/

function changeName() {
    const fetchName = document.getElementById("my-msg")
    fetchName.textContent = `JavaScript is Powerful Language.`
}

/*<-------------------------->*/

/* 2:
    When the button is clicked:
        Select all elements with class text
        Change their text color to blue
*/

const fetchClass = document.getElementsByClassName("text");

function changeText() {
    Array.from(fetchClass).forEach((element) => {
        element.style.backgroundColor = `yellow`;
        element.style.color = `black`
    })
}

/*<-------------------------->*/

/* 3:
    When button is clicked:
        Select all li elements.
        Change their background color to yellow.
*/
const fetchItems = document.getElementsByTagName("li")

function highlightItems() {
    Array.from(fetchItems).forEach((element) => {
        element.style.backgroundColor = `yellow`
        element.style.color = `black`
    })
}

/*<-------------------------->*/


/* 4:
    When button is clicked:
        Select only the first element with class "message".
        Change the text to "First Message Updated"
*/

const message = document.querySelector(".message")

function changeMessage() {
    message.textContent = `First, Message Updated `
}

/*<-------------------------->*/

/* 5:
    When button is clicked:
        Select all elements with class "box"
        Add 2px solid black border
*/

const box = document.querySelectorAll(".box")

function addBorder() {
    box.forEach((elmnt) => {
        elmnt.style.border = `1px solid white`
        elmnt.style.textAlign = `center`
        elmnt.style.padding = `5px`
        elmnt.style.margin = `10px`
    })
}

/*<-------------------------->*/

/* 6:
    When button is clicked:
        Change heading color to red using getElementById()
        Change all list item text to uppercase using querySelectorAll()
*/

const headings = document.getElementById("heading")
const items = document.querySelectorAll(".item")

function changeStyle() {
    headings.style.color = `red`;

    items.forEach((element) => {
        element.style.textTransform = `uppercase`
        element.style.margin = `5px`
    })
}

/*<-------------------------->*/

/* 7:
    When button is clicked:
        Get the value from the input field
        Select all .output paragraphs
        Display the entered name in both paragraphs
*/


function showName() {
    const nameInput = document.getElementById("nameInput").value;

    const fetchOutput = document.querySelectorAll(".output")

    fetchOutput.forEach((element) => {
        element.textContent = `${nameInput}`
    })
}

/*<-------------------------->*/















