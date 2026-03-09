/* -----------------------------------------
               << Practice set 27 >>


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

createElement(), append(), prepend(), removeChild()

-------------------------------------------- */

/* 1:
    When button is clicked:
        Create a new <p> element
        Set its text to
        "This paragraph was created with JavaScript"
        Add it inside the #container using append()
*/

const myContain = document.getElementById("myContain")
const appendBtn = document.getElementById("appendBtn");

appendBtn.onclick = () => {
    const createUl = document.createElement("ul");
    createUl.id = `myUl`;
    const createLi1 = document.createElement("li")
    createLi1.textContent = `Item 1`
    createLi1.style.color = `red`
    const createLi2 = document.createElement("li")
    createLi2.textContent = `Item 2`
    createLi2.style.color = `yellow`

    myContain.prepend(createUl)
    myUl.prepend(createLi1)
    myUl.append(createLi2)
}

/*<-------------------------->*/

/* 2:
    When button is clicked:
        Select the <ul>
        Select the first task
        Remove it using removeChild()
*/

const tasks = document.getElementById("tasks")
const btnRemoveChild = document.getElementById("btnRemoveChild");
const task1 = document.getElementById("task1")
btnRemoveChild.onclick = function () {
    tasks.removeChild(task1)
}

/*<-------------------------->*/

/* 3:
    When button is clicked:
        Create a <h2> element with text "Dynamic Title"
        Create a <p> element with text "Created using DOM"
        Append both elements inside #box
*/

const elementToAdd = document.getElementById("elementToAdd")
const btnCreateElement = document.getElementById("btnCreateElement")

btnCreateElement.onclick = function () {
    const h2Element = document.createElement("h2")
    h2Element.textContent = `Dynamic Title`
    h2Element.style.color = `yellow`
    h2Element.style.margin = `5px`
    h2Element.style.padding = `5px`

    const paraElement = document.createElement("p")
    paraElement.textContent = `Dynamic Title`
    paraElement.style.color = `red`
    paraElement.style.margin = `5px`
    paraElement.style.padding = `5px`

    elementToAdd.prepend(h2Element)
    elementToAdd.append(paraElement)
}

/*<-------------------------->*/


/* 4:
    When button is clicked:
        Create a new <li> element.
        Set its text to "Apple".
        Insert it before Mango using insertBefore().
*/

const btnApple = document.getElementById("btnApple");
const myMango = document.getElementById("myMango");
const myfruits = document.getElementById("myfruits");

btnApple.onclick = () => {
    const createElmnt = document.createElement("li");
    createElmnt.textContent = `New Element`;
    createElmnt.style.color = `red`
    myfruits.insertBefore(createElmnt, myMango); // correct order
    console.log(createElmnt);
}

/*<-------------------------->*/

/* 5:
    When button is clicked:
        Create a <p> element.
        Set its text to "First Paragraph".
        Insert it before the second paragraph.
*/

const btnParaInsert = document.getElementById("btnParaInsert")
const elementsSet = document.getElementById("elementsSet")
const secondItem = document.getElementById("second")

btnParaInsert.onclick = function (){
    const newParaElement = document.createElement("p")
    newParaElement.textContent = `First Paragraph`
    newParaElement.style.color = `red`

    elementsSet.insertBefore(newParaElement, secondItem)
}

/*<-------------------------->*/