/* -----------------------------------------
               << Practice Set 21 >>

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
    User Profile Formatter (Basic)
*/

// const users = [
//     { name: "Ali", age: 20, city: "Lahore" },
//     { name: "Sara", age: 25, city: "Karachi" }
// ];

// users.forEach(({ name, age, city }) => {
//     console.log(`${name} is ${age} years old. And lives in ${city}`)
// })

/*<-------------------------->*/

/* 2:
    E-commerce Cart Total (Important)
*/

// const cart = [
//     { name: "Shirt", price: 1000, quantity: 2 },
//     { name: "Shoes", price: 3000, quantity: 1 }
// ];

// let itemCart = cart.reduce((accu, {price})=>{return accu + price}, 0)
// console.log(itemCart)

/*<-------------------------->*/


/* 3:
    Student Result System (Filtering)
*/

// const students = [
//   { name: "Ali", marks: 80 },
//   { name: "Sara", marks: 50 },
//   { name: "Ahmed", marks: 90 }
// ];

// let studentsPassed = students.filter(({ name, marks})=>{ return marks > 60 ? console.log(`${name} Passed`) : ""})

/*<-------------------------->*/


/* 4:
    Show First Skill (Nested Data)
*/

// const users = [
//   { name: "Ali", skills: ["JS", "React"] },
//   { name: "Sara", skills: ["HTML", "CSS"] }
// ];

// let firstSkill = users.forEach(({name, skills: [firstSkill, secondSkill]})=>{ console.log(`${name} knows ${firstSkill} and ${secondSkill}`)})

/*<-------------------------->*/

/* 5:
    Find Topper (Logic Building 🔥)
*/

// const students = [
//     { name: "Ali", marks: 80 },
//     { name: "Sara", marks: 60 },
//     { name: "Ahmed", marks: 95 }
// ];

// let maxMarks = students[0].marks;

// for (i = 1; i < students.length; i++) {
//     if (students[i].marks > maxMarks) {
//         maxMarks = students[i].marks
//     }
// }

// console.log(maxMarks)

/*<-------------------------->*/



