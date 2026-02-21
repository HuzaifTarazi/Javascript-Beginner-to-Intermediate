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

Spread Operator, Spread Operator(...), Rest Parameter(...), Callback Function

Callbacks, forEach(), map(), filter(), reduce(), findIndex()

Function Expression , Arrow Function, Objects, This Method

Class, Constructor, Object Creation Using Class, Static Keyword

Inheritance, Super Keyword,

-------------------------------------------- */


/* 1:   E-Commerce System
    You are building an online store.
    Create a class Product
    properties: name, price
    method: getDetails()
    Create a class Electronics that extends Product
    property: brand
    override getDetails()
    Add a static method comparePrice(p1, p2) that returns the expensive product
*/

// class Product {
//     constructor(name, price) {
//         this.name = name,
//             this.price = price
//     }

//     getDetails() {
//         return `Product Name: ${this.name}, Product Price: ${this.price}`;
//     }

//     static ComparePrice(Product1, Product2) {
//         return Product1.price > Product2.price ? Product1 : product2;
//     }
// }

// class Electronices extends Product {
//     constructor(name, price, brand) {
//         super(name, price);
//         this.brand = brand;
//     }

//     getDetails() {
//         return `Product Name: ${this.name}, Product Price: ${this.price}, Product Brand: ${this.brand}`
//     }
// }


// const Product1 = new Electronices("keyboard", 1000);
// const product2 = new Electronices("Mouse", 4000, "Apple")

// console.log(Product.ComparePrice(Product1, product2))

/*<-------------------------->*/


/* 1:   
    Banking System
        You are creating a bank system.
    📌 Requirements
            Class Account: 
                property: balance
                method: deposit(amount)
                static method: bankName()
            Class SavingsAccount extends Account
                property: interestRate
                method: addInterest()
*/

// class Account {
//     constructor(balance) {
//         this.balance = balance;
//     }

//     Deposit(DepositMoney) {
//         this.balance += DepositMoney;
//         return `You Have Deposited: ${this.balance}`
//     }

//     static BankName(name) {
//         return `Bank Name: ${name}`;
//     }
// }

// class SavingAccount extends Account {
//     constructor(balance, interestRate) {
//         super(balance);
//         this.interestRate = interestRate;
//     }

//     AddInterest(){
//         return this.balance += this.balance * this.interestRate;
//     }
// }

// // const AccountDetail = new Account(5000)
// // const bankName = Account.BankName("Allied Bank");
// // console.log(bankName)
// // console.log(AccountDetail.Deposit(1000))

// const savinAcc = new SavingAccount(5000, 0.1);
// console.log(savinAcc.AddInterest());
// console.log(savinAcc.Deposit(13));


/*<-------------------------->*/