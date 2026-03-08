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

// DOM Navigation Practice Set 

/* 1:
    When button is clicked:
        Select the paragraph using getElementById
        Navigate to its parent element
        Change the parent's background color to lightblue
*/

const fetchSibling = document.getElementById("text");

function prntText() {
    const chngPrnt = fetchSibling.parentElement

    chngPrnt.style.backgroundColor = `lightblue`
    chngPrnt.style.padding = `1px`
    chngPrnt.style.margin = `4px`
    chngPrnt.style.color = `black`
}

/*<-------------------------->*/

/* 2:
    When button is clicked:
        Select the ul
        Access its children
        Change the text color of all children to green
*/

const btnChng = document.getElementById("btnChng");
const fetchSiblings = document.querySelector("#fruits")

btnChng.onclick = function () {
    const selectChildren = fetchSiblings.children;
    Array.from(selectChildren).forEach((element) => {
        element.style.color = `green`
    })
}

/*<-------------------------->*/

/* 3:
    When button is clicked:
        Select the div
        Change first child background → yellow
        Change last child background → orange
*/

const divBox = document.getElementById("box")
const btnBox = document.getElementById("btnBox")

btnBox.onclick = function () {
    const firstSibling = divBox.firstElementChild;
    firstSibling.style.color = `orange`
    const lastSibling = divBox.lastElementChild;
    lastSibling.style.color = `yellow`
}

/*<-------------------------->*/

/* 4:
    When button is clicked:
        Select the h2
        Find the next element sibling
        Change its text to:
*/

const titleSlct = document.querySelector("#title")

function slctNextSibling() {
    const selectNextSibling = titleSlct.nextElementSibling
    selectNextSibling.textContent = `This Content is Updated..!`
    selectNextSibling.style.color = `red`

    setInterval(() => {
        const selectPreviousSibling = titleSlct.previousElementSibling;
        selectPreviousSibling.textContent = `Changed Using Set Interval After Few Seconds..!`
        selectPreviousSibling.style.color = `orange`
    }, 1000);
}

/*<-------------------------->*/


/* 5:
    When button is clicked:
        Select #special
        Change its parent background → lightgray
        Change first child text color → blue
        Change previous sibling text → Updated Text
*/

const h1Parent = document.querySelector("#special");
const divParent = document.querySelector("#divElement");
const special = document.querySelector("#special");

const btnUpdateElement = document.getElementById("btnUpdateElement");

btnUpdateElement.onclick = () => {
    const changeParent = h1Parent.parentElement;
    const slctFirstSibling = divParent.firstElementChild
    const slctpreviousSibling = special.previousElementSibling
    changeParent.style.backgroundColor = `orange`;
    changeParent.style.padding = `4px`
    changeParent.style.margin = `10px`
    slctFirstSibling.style.color = `black`

    setTimeout(() => {
        slctpreviousSibling.textContent = `Text Updated..!`
        slctpreviousSibling.style.color = `green`
    }, 1000);

}

/*<-------------------------->*/













