/* -----------------------------------------
               << Practice Set 20 >>

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

-------------------------------------------- */


/* 1:
    Student Grade Calculator
     Task:
         1. Calculate total and average marks for each student
         2. Use if/else if/else to assign grade: 
            A => 90+, B => 75-89, C => 60-74, F < 60
         3. Print: "Ali has total 240, average 80 and grade B"
*/

// Exercise:

// const students = [
//     { name: "Ali", marks: [80, 70, 90] },
//     { name: "Sara", marks: [50, 60, 55] },
//     { name: "Ahmed", marks: [95, 85, 100] }
// ];

// students.forEach((student) => {
//     const obTotalMarks = student.marks.reduce(function (accumulator, element) { return accumulator + element }, 0)
//     const totalNumbers = Math.round(obTotalMarks / student.marks.length)
//     console.log(totalNumbers)

//     let grade = "";
//     if (totalNumbers > 80) {
//         console.log(`You Have Gotten Grade: ${grade = "A"}`)
//     } else if (totalNumbers > 66) {

//         console.log(`You Have Gotten Grade: ${grade = "B"}`)
//     } else {

//         console.log(`You Have Gotten Grade: ${grade = "C"}`)
//     }

//     console.log(`${student.name} Has Gotten Total Marks: ${obTotalMarks} and Average of These Numbers are: ${totalNumbers}% with Grade: ${grade}`)
// })

/*<-------------------------->*/


/* 2:
    Shopping Cart with Discount
      Task:
        1. Take item price and quantity from input
        2. Calculate total
        3. If total > 500, apply 10% discount using ternary
        4. Display rounded total using Math.round()
*/

// Exercise:

function GradingSystem(itemPrice, quantity) {
    let totalPrice = itemPrice * quantity;
    let discountPrice = totalPrice > 500 ? totalPrice * 0.9 : `Error`;

    const output = document.getElementById("output");
    output.textContent = `Total Price: ${Math.round(totalPrice)}. The 10% Discount will be: ${discountPrice}`
}


const calculate = document.getElementById("calculate");
calculate.onclick = function () {
    const itemPrice = Number(document.getElementById("itemPrice").value);
    const quantity = Number(document.getElementById("quantity").value);

    if (!itemPrice || itemPrice === "") {
        console.error(`Please Fill Item Price Correctly.`);
        return;
    }
    if (!quantity || quantity === "") {
        console.error(`Please Fill Quantity Correctly.`)
        return;
    }

    GradingSystem(itemPrice, quantity);
}

/*<-------------------------->*/