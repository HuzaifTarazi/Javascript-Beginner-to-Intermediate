/* -----------------------------------------
               << Practice Set 16 >>

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

// const cart = [
//     { product: "Shirt", price: 1000, quantity: 2 },
//     { product: "Shoes", price: 3000, quantity: 1 },
//     { product: "Cap", price: 500, quantity: 3 },
//     { product: "Jacket", price: 500, quantity: 3 },
//     { product: "Ankel", price: 500, quantity: 3 },
//     { product: "Eyes", price: 500, quantity: 3 },
//     { product: "Glasses", price: 500, quantity: 3 },
// ];

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

// function cartStorage(cart, callBack){
//     callBack(...cart)
// }

// function CartItemsDisplay(...cart){

//     cart.forEach(function(element){
//         console.log(element)
//     })
// }

// cartStorage( cart, CartItemsDisplay )

/*<-------------------------->*/


/* 3:

  Employee Management (Intermediate → Advanced)

  Tasks:
  Clone array using spread operator
  Add new employee using spread
  Increase all salaries by 10% using map()
  Find highest salary using reduce()
  Filter employees with salary > 50000
  Create function using rest parameter to add multiple employees
  Merge two employee arrays using spread
  Convert salaries into string using toString()
  Get index of "Ayesha" using indexOf() (hint: use names array)
  Sort employees by salary (high to low)
*/

// const employees = [
//   { name: "Zain", salary: 50000 },
//   { name: "Ayesha", salary: 60000 },
//   { name: "Usman", salary: 45000 }
// ];

// const employees2 = [
//   { name: "tarazi", salary: 50000 },
//   { name: "adsf", salary: 50000 },
//   { name: "ggewe", salary: 50000 },
//   { name: "zxcv", salary: 50000 },
// ]

// CLONED ARRAY USING SPREAD
// let cloneArr = [...employees];
// console.log(cloneArr)

// ADD NEW EMPLOYEE USING SPREAD
// let newEmployee = [...employees, { name: "huzaif", salary: 50000 }]
// console.log(newEmployee)

// INCREASE SALARY BY 10
// let increaseSalary = employees.map(function (element) {
//   return element.salary * 10
// })
// console.log(increaseSalary)

// HIGHEST SALARY
// let highSalary = employees.reduce((accumulator, element) => {
//   return element.salary > accumulator ? element.salary : accumulator;
// },0)
// console.log(highSalary)

// FITLER EMPLOYEES SALARY > 5000
// let filterEmployee = employees.filter(function(element){
//   return element.salary >= 50000
// })
// console.log(filterEmployee)

// REST PARAMETER FUNCTION
// function restPara(employees, callback) {
//   callback(...employees)
// }
// function insertEmployees(...arrayInsert) {
//   arrayInsert.push({ name: "tarazi", salary: 5000 })
//   console.log(arrayInsert)
// }

// restPara(employees, insertEmployees)

// MERGE TWO ARRAYS
// let mergeArr = [...employees, ...employees2]
// console.log(mergeArr)

// CONVERT SALARY TO STRING
// let convertToString = employees.map(function (element) {
//   return (element.salary).toString();
// })
// console.log(convertToString)

// GET NAME INDEX
// let nameIndex = employees.map((element)=>{ return element.name})
// console.log(nameIndex.indexOf("Ayesha"))

// SORT EMPLOYEES BY SALARY
// let sortingEmp = employees.toSorted((a, b) => b.salary - a.salary)
// console.log(sortingEmp)

/*<-------------------------->*/



/* 4:

  Order System with this (Advanced)

  Tasks:
  Complete getTotal() using this
  Add new item using this.items.push()
  Remove item using splice()
  Use map() to get item names
  Use filter() to get items above 5000
  Convert items into string using join()
  Reverse items list
  Sort items by price
  Use forEach() to print items
  Create arrow function version of a helper function

*/

// const order = {
//   customer: "Huzaif",
//   items: [
//     { name: "Laptop", price: 100000 },
//     { name: "Mouse", price: 2000 },
//     { name: "Keyboard", price: 4000 },
//     { name: "Monitor", price: 3000 },
//   ],

//   getTotal: function () {
//     // calculate total using reduce
//     return this.items.reduce((accu, element) => { return accu + element.price }, 0)

//   },

//   newItems: function () {
//     this.items.push({ name: "Tarazi", price: 50000 })
//     return this.items
//   },

// };

// console.log(order.getTotal());

// // NEW ITEM
// order.newItems();
// console.log(order)

// REMOVE ITEMS
// let cut = order.items.splice(0, 1);
// console.log(cut)

// GET ITEM NAMES
// let orderItemName = order.items.map((element)=>{ return element.name})
// console.log(orderItemName.join(" , "))

// GET ITEMS ABOVE 5000
// let getItemsAbove = order.items.filter(function(elements) { return elements.price > 5000})
// console.log(getItemsAbove)

// CONVERT ITEMS INTO STRING
// let convertString = order.items.map((element)=>{ return element.name + element.price})
// console.log(convertString.join(" , "))

// REVERSE ITEMS LIST
// let getReversed = order.items.toReversed(function(a, b){ return a.price - b.price})
// console.log(getReversed)

//  SORTING ITEMS BY PRICE
// let sortNow = order.items.sort((a,b)=>{ return a.price - b.price})
// console.log(sortNow)

// PRINT ALL ITEMS USING FOREACH
// order.items.forEach((element)=>{  console.log(element)})

/*<-------------------------->*/


/* 5:

  Advanced Analytics System (Expert Level)

  Tasks:
  Calculate total revenue using reduce()
  Get all products using map()
  Filter products where quantity > 2
  Sort by revenue (price * quantity)
  Create a function that accepts callback to process sales
  Use spread operator to duplicate sales array
  Add multiple sales using rest parameter
  Convert sales to string using join()
  Find product index using indexOf()
  Create a full summary object:
  
*/

const sales = [
  { product: "Phone", price: 50000, quantity: 2 },
  { product: "Laptop", price: 100000, quantity: 1 },
  { product: "Headphones", price: 5000, quantity: 5 }
];

// const sales2 = [
//   { product: "Phone", price: 50000, quantity: 2 },
//   { product: "Laptop", price: 100000, quantity: 1 },
//   { product: "Headphones", price: 5000, quantity: 5 }
// ];


// TOTAL REVENUE
// let revenueSum = sales.reduce((accumulator, element)=>{ return  accumulator + element.price * element.quantity}, 0)
// console.log(revenueSum)

// GET ALL PRODUCTS 
// let allProducts = sales.map((salesProduct)=>{return salesProduct.product})
// console.log(allProducts.join(" , "))

// FILTER LOW QUANTITY PRODUCT 
// let filterPro = sales.filter((element)=>{return element.quantity > 2})
// console.log(filterPro)

// COUNT REVENUE 
// let checkRevenue = sales.map((element)=>{ return `${element.product} ${element.price * element.quantity}`})
// console.log(checkRevenue.toSorted())

// DUPLICATION OF SALES ARRAY
// let duplication = [...sales]
// console.log(duplication)

// COMBINE MULTIPLE ARRAYS
// let mergeSales = [...sales, ...sales2]
// console.log(mergeSales)
 
// CONVERT SALES TO STRING 
// let convertSales = sales.map(function(element){ return `\n Product: ${element.product}, Price: ${element.price},  Quantity: ${element.quantity}`})
// console.log(convertSales.join(" , "))

// FIND INDEX OF ITEM
// let findIndex = sales.map((elemnt)=>{ return elemnt.product})
// console.log(findIndex.indexOf("Phone"))

// CREATE FULL SUMMARY: 

/*<-------------------------->*/
