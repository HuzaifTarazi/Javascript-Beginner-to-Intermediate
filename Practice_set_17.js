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

-------------------------------------------- */


/* 1:
    Practice Set 1 — Student Result System
    Create a Student class:
    Properties:
        name
        marks
    Methods:
        getGrade()
        ≥ 80 → "A"
        ≥ 60 → "B"
        else → "C"
        getResult()
        ≥ 50 → "Pass"
        else → "Fail"
        getDetails()
        Return full string
*/

// class StudentResultSystem {
//     // Properties
//     constructor(name, marks) {
//         this.name = name;
//         this.marks = marks;
//     }
//     // Methods
//     getGrade() {
//         if (this.marks >= 80) {
//             return `You Have Got Grade A`;
//         } else if (this.marks >= 60) {
//             return `You Have Got Grade B`;
//         } else {
//             return `You Have Got Grade C`;
//         }
//     }

//     getResult() {
//         return this.marks >= 50 ? "You Have Pass The Exams" : "You Have Failed The Exams";
//     }

//     getDetails() {
//         return `Student Name: ${this.name} \n Student Marks: ${this.marks} \n ${this.getGrade()} \n ${this.getResult()}`
//     }
// }

// let student1 = new StudentResultSystem("Huzaif Tarazi", 70);

// console.log(student1.getDetails())

/*<-------------------------->*/


/* 2:
    Practice Set 2 — Shopping Cart System
    Create a Cart class
    Properties:
        items (array)
    Methods:
        addItem(name, price)
        getTotal() → using reduce
        getItems() → return all item names
*/

// class ShoppingCart {
//     constructor() {
//         this.items = [];
//     }
//     addItems(name, price) {
//         return this.items.push({ name, price })
//     }
//     getTotal() {
//         return this.items.reduce((accumulator, item) => { return accumulator + item.price }, 0)
//     }
//     getAllItems() {
//         return this.items.map((elemnt) => { return elemnt.name })
//     }
// }

// let shopping = new ShoppingCart()

// console.log(shopping.addItems("Ballpoint", 5000))
// console.log(shopping.getTotal())
// console.log(shopping.getAllItems())

/*<-------------------------->*/


/* 3:
    Practice Set 3 — Bank Account System
    Create a BankAccount class
    Properties:
        name
        balance
    Methods:
       deposit(amount)
       Add amount to balance
       withdraw(amount)
       If balance ≥ amount → subtract
       else → "Insufficient Balance"
       checkBalance()
       Return current balance
*/

// class BankAccount {
//     constructor(name, balance) {
//         this.name = name;
//         this.balance = balance;
//     }

//     deposit(amount) {
//         this.balance += amount;
//         return `Deposit ${this.balance}`
//     }

//     withdraw(amount){
//         if(this.balance >= amount){
//             this.balance -= amount;
//             return `Withdrawn: ${this.balance}`
//         } else {
//             return `Insufficient Balance`;
//         }
//     }

//     CheckBalance(){
//         return `Total Balance: ${this.balance}`
//     }

// }

// let balanceDeposit = new BankAccount("huzaif", 5000)
// console.log(balanceDeposit.deposit(2000))
// console.log(balanceDeposit.withdraw(1000))
// console.log(balanceDeposit.CheckBalance())

/*<-------------------------->*/

/* 4:
    Practice Set 4 — Product Discount System
    Create a Store class
    Properties:
       products (array)
    Methods:
       addProduct(name, price)
       applyDiscount(percent)
       Reduce each product price
       getTotal()
       Return total price
*/

// class ProductDiscountSystem {
//     constructor() {
//         this.product = [];
//     }

//     AddProduct(name, price) {
//         return this.product.push({ name, price });
//     }

//     // ShowArray(){
//     //     return this.product.map((element)=>{ return element})
//     // }

//     DiscountPrice(percentage) {
//         return this.product.map((element) => {
//             return {
//                 name: element.name,
//                 price: element.price - (element.price * percentage / 100)
//             };
//         });
//     }

//     ReducePrice() {
//         return this.product.reduce((accu, element) => { return accu + element.price }, 0)
//     }


// }

// let Product1 = new ProductDiscountSystem();
// console.log(Product1.AddProduct("Keyboard", 45));
// console.log(Product1.AddProduct("Mouse", 69));
// // console.log(Product1.ShowArray())
// console.log(Product1.DiscountPrice(5))
// console.log(Product1.ReducePrice())

/*<-------------------------->*/


/* 5:
    Practice Set 5 — Employee Salary System
    Create an EmployeeSystem class
    Properties:
       employees (array)
    Methods:
       addEmployee(name, salary)
       increaseSalary(percent)
            Increase all employee salaries
       getHighSalaryEmployees(amount)
            Return employees with salary > amount
       getTotalSalary()
            Return total salary of all employees
*/

// class EmployeeSalarySystem {
//     constructor() {
//         this.employees = [];
//     }

//     AddEmployees(name, salary) {
//         return this.employees.push({ name, salary })
//     }

//     SalaryIncrement(percentage) {
//         return this.employees.map((element) => {
//             return {
//                 name: element.name,
//                 Salary: element.salary + (element.salary * percentage / 100),
//             };
//         });
//     }

//     HighSalaryEmployees() {
//         return this.employees.filter((element) => { return element.salary > 50000 })
//     }

//     TotalSalary() {
//         return this.employees.reduce((accu, element) => { return accu + element.salary }, 0)
//     }

// }

// let employeSetOne = new EmployeeSalarySystem();

// console.log(employeSetOne.AddEmployees("Huzaif Tarazi", 55000))
// console.log(employeSetOne.AddEmployees("Moeez Khan", 23000))
// console.log(employeSetOne.AddEmployees("Furqan Awan", 52000))
// console.log(employeSetOne.AddEmployees("Haseeb Zafar", 15000))
// console.log(employeSetOne.SalaryIncrement(1))
// console.log(employeSetOne.HighSalaryEmployees());
// console.log(employeSetOne.TotalSalary());

/*<-------------------------->*/