/* -----------------------------------------
               << Practice Set 19 >>

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
    Temperature
        You are building an Temperature:
            Create a class Temperature:
            property: _celsius
            getter: fahrenheit
            formula: (celsius * 9/5) + 32
*/

// class Temperature {
//     constructor(celsius) {
//         this.celsius = celsius;
//     }

//     get celsius() {
//         return this._celsius;
//     }

//     set celsius(value) {
//         if (typeof value === "number") {
//             this._celsius = value * 9 / 5 + 32;
//         } else {
//             console.error("Invalid input: fahrenheit value must be a number.");
//         }
//     }
// }

// const temp = new Temperature(4);
// console.log(temp.celsius);

/*<-------------------------->*/


/* 2:
    Student Marks
        You are building an Student Marks:
            Create a class Student:
            property: _marks
            setter:
                marks must be between 0–100
            getter:
                return marks
*/

//     class Student{
//         constructor(studentName, marks){
//             this.studentName = studentName;
//             this.marks = marks;
//         }

//         get marks(){
//             return this._marks;
//         }

//         get newData (){
//             return "hi i am huzaif"
//         }

//         set marks(newMarksValue){
//             if((typeof newMarksValue === "string") || newMarksValue < 0 || newMarksValue > 100){
//                 console.error("error")
//             } else {
//                 this._marks = newMarksValue
//             }
//         }
//     }

// const student1 = new Student("Huzaif" , 100);
// console.log(student1.marks);

/*<-------------------------->*/


/* 3:
    Product Price
            Create a class Product:
            property: _price
            setter:
                price cannot be negative
            getter:
                return formatted price like "Rs. 500"
*/

// class Product {
//     constructor(name, price){
//         this.name = name;
//         this.price = price;
//     }

//     get price(){
//         return this._price;
//     }
//     set price(newPrice){
//         if(newPrice < 0){
//             console.error(`Error`)
//         } else {
//             this._price = newPrice;
//         }
//     }
// }

// const product1 = new Product("Keyboard", 1);
// console.log(product1.price)

/*<-------------------------->*/



/* 4:   
    MINI PROJECT: Online Course Platform
        Create a base class Course
            Create child classes:
                FreeCourse
                PaidCourse
            Add:
                title
                price
            Add getter/setter for price
            Static method for platform name
            Create user object
            Use arrow function for enrolling
            Use function expression somewhere
*/

// class Course {
//     constructor(user, title, price) {
//         this.user = user;
//         this.title = title
//         this.price = price;
//     }

//     get price() {
//         return this._price;
//     }

//     set price(checkPrice) {
//         if (typeof checkPrice === "string") {
//             console.error(`The Price Can't Be a String`);
//         } else {
//             this._price = checkPrice
//         }
//     }
//     courseAvailable() {
//         return `There is: ${this.title} Courses Available`;
//     }

//     enrollUser() {
//         return `${this.user} purchased ${this.title} for Rs.${this.price} `
//     }
// }

// class FreeCourse extends Course {
//     constructor(user, title, price) {
//         super(user, title, price)
//     }

//     freeCourse() {
//         return `There is ${this.title} Course Available for Free.`
//     }
// }

// class PaidCourse extends Course {
//     constructor(user, title, price) {
//         super(user, title, price)
//     }

//     enrollUser() {
//         return super.enrollUser();
//     }
// }

// // Converting Object
// const course1 = new Course("Huziaf", "MernStack", 50)
// const course2 = new Course("Zukhruf", "Graphic Designer", 50)
// const course3 = new Course("Rufaf", "Doctork", 50)

// // Child Class
// const freecourse = new FreeCourse("Huzaif", "MernStack-Ai", 0)

// // Paid Course Child Class
// const paidCourse = new PaidCourse("Tarazi", "mern", 5)

// // Courses Available
// console.log(course1.courseAvailable())
// console.log(course2.courseAvailable())
// console.log(course3.courseAvailable())

// // Free Courses 
// console.log(freecourse.freeCourse())

// // Paid Courses
// console.log(paidCourse.enrollUser())

/*<-------------------------->*/

