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

// function GradingSystem(itemPrice, quantity) {
//     let totalPrice = itemPrice * quantity;
//     let discountPrice = totalPrice > 500 ? totalPrice * 0.9 : `Error`;

//     const output = document.getElementById("output");
//     output.textContent = `Total Price: ${Math.round(totalPrice)}. The 10% Discount will be: ${discountPrice}`
// }

// const calculate = document.getElementById("calculate");
// calculate.onclick = function () {
//     const itemPrice = Number(document.getElementById("itemPrice").value);
//     const quantity = Number(document.getElementById("quantity").value);

//     if (!itemPrice || itemPrice === "") {
//         console.error(`Please Fill Item Price Correctly.`);
//         return;
//     }
//     if (!quantity || quantity === "") {
//         console.error(`Please Fill Quantity Correctly.`)
//         return;
//     }

//     GradingSystem(itemPrice, quantity);
// }

/*<-------------------------->*/

/* 3:
    String & Array Manipulation
      Task:
        1. Trim sentence and convert to lower case
        2. Split words into an array
        3. Filter words that include "js" (case insensitive)
        4. Map the filtered words to uppercase
        5. Join them with comma and print
*/

// const sentence = "  JavaScript is fun and JavaScript is powerful  ";

// const splitArr = sentence.trim().toLowerCase().split(" ");
// console.log(splitArr)

// const filterArr = splitArr.filter(function (element) { return element.includes("javascript") })
// console.log(filterArr)

// const mapped = filterArr.map((element) => { return element.toUpperCase() })
// console.log(mapped)

// const showArr = mapped.join(", ")
// console.log(showArr)

/*<-------------------------->*/


/* 4:
    String & Array Manipulation
       Task:
         1. Create class BankAccount with name, balance
         2. Create deposit(amount) and withdraw(amount) methods
         3. Create a subclass SavingsAccount with interestRate
         4. Add a getter to show account summary
         5. Create 2 accounts using spread/rest for initial data
*/

// class BankAccount {
//   constructor(name, balance) {
//     this.name = name;
//     this.balance = balance;

//   }

//   Desposit(addMoney) {
//     this.balance += addMoney;
//     return `${this.balance} Added to ${this.name}'s Account.`
//   }

//   WithdrawBalance(getMoney) {
//     if (this.balance > getMoney) {
//       this.balance = this.balance - getMoney;
//       return `${this.balance} Amount Withdrawn From ${this.name}'s Account`;
//     } else {
//       return `Insufficient Balance`;
//     }
//   }
// }

// class SavingAccount extends BankAccount {
//   constructor(name, balance) {
//     super(name, balance);
//   }
//   interestR(data) {
//     this.interestRate = this.balance * data;
//     return this.interestRate;
//   }
//   get AccountDetail() {
//     return `Account Name: ${this.name} got $${this.balance} in account with Interest Rate:`;
//   }
// }
// let person1 = new SavingAccount("Huzaif", 10000)
// // console.log(person2.name)
// // console.log(person2.balance)
// // console.log(person2.interestR(0.1))

// console.log(person1.AccountDetail, person1.interestR(0.1))

/*<-------------------------->*/

/* 5:
    Advanced Array + Callback + Reduce + Destructuring
       Task:
         1. Filter products with stock > 0
         2. Map product names to uppercase
         3. Find total price of in-stock products
         4. Find index of product with price > 900
         5. Print results
*/

// const products = [
//   { id: 1, name: "Laptop", price: 500, stock: 5 },
//   { id: 2, name: "Mobile", price: 700, stock: 0 },
//   { id: 3, name: "Tablet", price: 1000, stock: 3 }
// ];

// FIlteration.
// let saveFilter = products.filter((element)=>{ return element.stock > 0 ? element.stock : ""; })
// console.log(saveFilter)

// // Map Products to UpperCase
// let UpperCase = products.map((element)=>{return element.name.toUpperCase()})
// console.log(UpperCase)

// // Finding Total Price in Stock Products
// let totalPrice = products.reduce((accumulator, element)=>{return accumulator + (element.price * element.stock)}, 0)
// console.log(totalPrice)

// Find Index of Product with Price > 900
// let newIndex = products.findIndex((element)=>{return element.price > 900 })
// console.log(newIndex)

/*<-------------------------->*/