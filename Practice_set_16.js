/* -----------------------------------------
               << Practice Set 15 >>

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

Spread Operator, Spread Operator(...), Rest Parameter(...),

Callback Function

forEach(), map(), filter(), reduce(), findIndex()

Function Expression , Arrow Function, Objects, This Method

-------------------------------------------- */

/* 1:

Student Records System (Beginner)
  Tasks:
    Add a new student using push()
    Remove last student using pop()
    Remove first student using shift()
    Add a student at beginning using unshift()
    Print all names using forEach()
    Increase each student's marks by 5 using map()
    Filter students who passed (marks >= 70) using filter()
    Find total marks using reduce()
    Convert all names into string separated by comma using join()
    Check if "Ali" exists using includes()

// */

// let students = [
//     { name: "Huzaif", marks: 70 },
//     { name: "Osaf", marks: 60 },
//     { name: "Zukhruf", marks: 80 },
//     { name: "Ruffaf", marks: 80}
// ]

// // students.push({name: "Tarazi", marks: 90});
// // students.pop();
// // students.shift();
// // students.push({name: "Bohemia", marks: 60});
// students.unshift({name: "Nazli Rauf", marks: 90})

// // students.forEach(function(element){
// //     console.log(element.name, element.marks)
// // })

// let increase = students.map(function(element){
//     return element.name, element.marks + 5;
// })

// let filterStudents = students.filter((element)=> {
//     return element.marks > 70;
// })

// let reduceStudent = students.reduce((accu, number)=>{
//     return accu + number.marks;
// }, 0)

// let joinNames = students.map(function(element){return element.name})
// console.log(joinNames.join(" , "))

// let checkName = students.filter((element)=>{
//     return element.name.includes("Huzaif")
// })

// console.log(checkName)


/*<-------------------------->*/

/* 2:

Product Cart System (Intermediate)
  Tasks:
    Calculate total bill using reduce() 
    Add a new product using push()
    Remove product "Cap" using splice()
    Get all product names using map()
    Filter products with price > 1000
    Sort products by price (low to high)
    Reverse the cart order
    Use concat() to merge another cart
    Use slice() to get first 2 products
    Create a callback function that prints each product
*/

const cart = [
    { product: "Shirt", price: 1000, quantity: 2 },
    { product: "Shoes", price: 3000, quantity: 1 },
    { product: "Cap", price: 500, quantity: 3 },
    { product: "Jacket", price: 500, quantity: 3 },
    { product: "Ankel", price: 500, quantity: 3 },
    { product: "Eyes", price: 500, quantity: 3 },
    { product: "Glasses", price: 500, quantity: 3 },
];

// TOTAL OF BILL
// let calculateBill = cart.reduce((total, element) => { return total + element.price }, 0)

// NEW PRODUCT IN ARRAY
// cart.push({product: "Jacket", price: 3000, quantity: 2})

// REMOVE PRODUCT CAP 
// let index = cart.findIndex( (element)=> element.product === "Cap");
// let spliceNow = index !== 1 ? cart.splice(index, 1, "item1", "item2") : " ";
// console.log(spliceNow)

// GET ALL PRODUCT NAMES LIST
// let productNames  = cart.map((element)=>{return element.product })
// console.log(productNames.join(" , "))

// FILTER PRODUCT WITH PRICE GREATER THEN 1000
// let filterationProduct = cart.filter((element) => { return element.price >= 1000 })
// console.log(filterationProduct)

// SORT PRODUCTS BY PRICE (LOW TO HIGH)
// let saveSort = cart.toSorted((a, b) => { return a.price - b.price });
// console.log(saveSort)

// REVERSE ARRAY
// let saveReverse = cart.reverse();
// console.log(saveReverse)

// MERGE ANOTHER ARRAY
// let mergeArr = [{ product: "newProduct", price: 5000, quantity: 5 }]
// mergeArr = cart.concat(mergeArr)
// console.log(mergeArr)

// SLICE 2 ITEMS 
// let sliceFirst = cart.slice(0, 2)
// console.log(sliceFirst)

// CallBack FUNCTION

function cartStorage(cart, callBack){
    callBack(...cart)
}

function CartItemsDisplay(...cart){

    cart.forEach(function(element){
        console.log(element)
    })
}

cartStorage( cart, CartItemsDisplay )

/*<-------------------------->*/
