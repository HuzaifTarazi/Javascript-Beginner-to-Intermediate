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
concat(), length, reverse(), sort(),

Spread Operator, Spread Operator(...), Rest Parameter(...), Callback Function

Callbacks, forEach(), map(), filter(), reduce(), findIndex()

Function Expression , Arrow Function, Objects, This Method

Class, Constructor, Object Creation Using Class, Static Keyword

Inheritance, Super Keyword, this, Getter, Setter, Destructuring 

Nested Objects, Arrays of objects 

sort Method (for Numeric a - b, for > String - localeCompare)

Date(), Closures

-------------------------------------------- */

/* 1:
     Calculator Using
     let, const, Math Operators, and Conditionals
*/

// const val1 = Number(window.prompt("Enter Value One: "));
// const val2 = Number(window.prompt("Enter Value Two: "));
// const insertOperator = window.prompt("Enter Operator: ")

// if (isNaN(val1) || isNaN(val2)) {
//     alert("Please Fill the Field Correctly");

// }

// const operatorArr = ["+", "-", "*", "/"]

// if (!operatorArr.includes(insertOperator)) {
//     alert(`Please Insert Valid Operator: [ + , - , * , / ]`)
// } else {
//     if (insertOperator === "+") {
//         const addition = val1 + val2;
//         alert(`Addition of Both Values: ${addition}`);
//     } else if (insertOperator === "-") {
//         const substraction = val1 - val2;
//         alert(`Substraction of Both Values: ${substraction}`);
//     } else if (insertOperator === "*") {
//         const multiplication = val1 * val2;
//         alert(`Multiplication of Both Values: ${multiplication}`)
//     } else if (insertOperator === "/") {
//         const division = val1 / val2;
//         alert(`Division of Both Values: ${division}`)
//     }
// }

/*<-------------------------->*/

/* 2:
    Age Checker Using Logical Operators
*/

// let namesArr = ["Huzaif", "Zukhruf", "Rufaf", "Osaf"]

// for(let i = 0; i < namesArr.length; i++){

//      let myAge = window.prompt(`Enter Your Age: `) 

//      if(isNaN(myAge)){
//           alert(`Enter Age Correctly: `)
//           continue;
//      } else if(myAge >= 70 && myAge <= 80){
//           alert(`70 - 80 years old.`)
//      } else if(myAge >= 50 && myAge <= 60){
//           alert(`50 - 60 years old.`)
//      } else if(myAge >= 30 && myAge <= 50){
//           alert(`30 - 50 years old.`)
//      } else if(myAge >= 15 && myAge <= 26){
//           alert(`15 - 26 years old.`)
//      }

//      console.log(`${namesArr[i]} is ${myAge} Years Old.`)

// }

/*<-------------------------->*/


/* 3:
    DOM Interaction
*/

// const greetbtn = document.getElementById("greetbtn");
// const greeting = document.getElementById("greeting");

// greetbtn.onclick = function () {
//     let greetInpu = document.getElementById("greetInpu").value;
//     let saveInpu = greetInpu.trim().slice(0, 1).toUpperCase() + greetInpu.trim().slice(1)
//     greeting.textContent = greetInpu ? `Hello ${saveInpu}! How are You..` : "Please Fill the Filed.!";
// }

/*<-------------------------->*/


/* 4:
    Math Practice
    Math.round,trunc
    floor,ceil,random,max,
    min,pow,sqrt,abs,
*/

// const numbers = [3.7, 5.2, -9.8, 10];

// Round Number
// let roundNumber = numbers.map((element)=>{return Math.round(element)})
// console.log(roundNumber)

// trunc Number
// let truncNumber = numbers.map((element)=>{return Math.trunc(element)})
// console.log(truncNumber)

// floor Number
// let floorNumber = numbers.forEach(element => console.log(Math.floor(element)))

// Ceil Number
// let ceilNumber = numbers.map(element => console.log(Math.ceil(element)))

// random Number
// let randomArr = [];
// for(let i = 0; i <= 5; i++){
//      randomArr.push(Math.floor(Math.random() * 100 + 1))
// }
// console.log(randomArr)

// max Number
// let maxNumberArr = [];
// for(let i = 0; i <= 10; i++){
//     maxNumberArr[i] =  maxNumberArr.push()
// }
// const MaxNumber = Math.max(...maxNumberArr)
// console.log(MaxNumber)

// Min Number
// let emptyNumberArr = [];
// for(let i = 0; i <= 5; i++){
//      emptyNumberArr[i] = emptyNumberArr.push()
// }
// const minNumbersArr = Math.min(...emptyNumberArr)
// console.log(minNumbersArr)

// Pow Number
// const powNumber = Math.pow(2, 3)
// console.log(powNumber)

// sqrt Number
// const sqrtNumber = Math.sqrt(36);
// console.log(sqrtNumber)

// abs Number
// const absNumber = Math.abs(-1999)
// console.log(absNumber)

/*<-------------------------->*/


/* 5:
    String Operations:
          .length, .toUpperCase(), .toLowerCase(),
          .trim(), .includes(), .startsWith(),
          .endsWith(), .indexOf(), .slice(),
          .substring(), .replace(), .replaceAll(),
          .split(), .charAt()
*/

// const text = "  JavaScript is fun! JavaScript is powerful!";

// lenght
// console.log(text.length)

// To Upper Case
// console.log(text.toUpperCase())

// To Lower Case
// console.log(text.toLowerCase())

// trim Character
// console.log(text.trim())

// Include
// console.log(text.includes("JavaScript"))

// Starts With
// console.log(text.startsWith(" "))

// Ends With
// console.log(text.endsWith("!"))

// index Of
// console.log(text.indexOf("powerful"))

// slicing
// console.log(text.slice(2, 5))

//  Sub string
// console.log(text.substring(2, 6))

// replacing
// console.log(text.trim().replace("JavaScript", "JARVIS"))

// replacing all
// console.log(text.trim().replaceAll("JavaScript", "Jarvis"))

// split
// let splitVal = text.split(" ")
// console.log(splitVal)

// character At
// console.log(text.indexOf("fun"))
// console.log(text.charAt(16))
// console.log(text.charAt(17))
// console.log(text.charAt(18))

/*<-------------------------->*/


/* 6:
    Array Methods:
        push, pop, shift, unshift,
        splice, slice, indexOf, 
        includes, join, toString, 
        concat, reverse, sort, forEach, 
        map, filter, reduce, findIndex, 
        spread operator
*/

// let fruits = ["Apple", "Banana", "Cherry"];

// Add Items 
// fruits.push("Jarvis");
// console.log(fruits)

// Removing Item
// fruits.pop();
// console.log(fruits)

//Removing From Start
// fruits.shift()
// console.log(fruits)

// Adding At Start 
// fruits.unshift("Jarvis")
// console.log(fruits)

// splicing 
// let splicing = fruits.splice(0, 2)
// console.log(splicing)

// slicing 
// let slicing = fruits.slice(0, 2)
// console.log(slicing)

// finding index of String
// console.log(fruits.indexOf("Cherry"))

// Data Include
// console.log(fruits.includes("Apple"))

// Joining
// console.log(fruits.join(", "))

// Converting to String
// console.log(fruits.toString())

// Joining Two Strings Together
// let array2 = ["Orange", "Avacado", "Grapes"]
// console.log(fruits.concat(array2))

// Reverse the Array
// console.log(fruits.toReversed())

// Sorting The Array
// console.log(fruits.toSorted())

// Looping through Array
// fruits.forEach((element, index)=> {
//         console.log(index +  element)
// });

// Returning with Map
// let saveFruits = fruits.map((element, index, array)=>{return array})
// console.log(saveFruits)

// Filteration in Array
// let filter = fruits.filter(element => element.includes("Cherry"))
// console.log(filter)

// reducing the Array
// let arrNum = [1,2,3,4,5,6];
// let saveArrNum = arrNum.reduce((accu, element)=>{return accu + element}, 0)
// console.log(saveArrNum)

// Finding Index
// console.log(fruits.findIndex((element)=>{return element.includes("Banana")}))

// spread operators
// let numberArr = [1,2,3]
// const newArr = [...fruits, ...numberArr]
// console.log(newArr)

/*<-------------------------->*/

/* 6:
    Functions, Arrow Functions, Scope, Callback
*/

// Simple Function 

// function Greet() {
//     console.log("Hello How are You!")
// }
// Greet();

// Arrow Function 

// const myFunc = (name) => {
//     console.log(`Hello ${name} How are You!`)
// }
// myFunc("Huzaif");

// CallBack Function

// let arr = [1, 2, 3, 4]
// function NumberArr(callBack, ...storeArr) {
//     let saveArr = storeArr.reduce((accu, element) => { return accu + element }, 0)
//     callBack(saveArr)
// }
// function CallbackArr(arr) {
//     console.log(arr)
// }
// NumberArr(CallbackArr, arr)

// Variable Scope

// let globalVariable = "I am Global";

// function variable() {
//     let localVar = "I am Local Variable"
//     console.log(localVar); //Accessible
//     console.log(globalVariable); //Accessible
// }
// console.log(localVar) // Not Accessible
// variable();

/*<-------------------------->*/

/* 7:
    Objects, Classes, Inheritance, Getter/Setter
*/

// Object & Destructuring

// const person = {
//     name: "Ali",
//     myAge: 25,
//     address: { city: "Sahiwal", country: "Pakistan" },
// };
// const { name, myAge, address: { city, country } } = person
// console.log(name + " " + myAge + " " + city + " " + country)

// Class & Inheritance

// const personObj = {
//     name: "huzaif",
//     age: 23,
//     city: "Sahiwal",
//     country: "Pakistan"
// }

// class Person {
//     constructor({ name, age }) {
//         this.name = name;
//         this.age = age;
//     }
// }

// class NewData extends Person {
//     constructor({ name, age, city, country }) {
//         super({ name, age });
//         this.city = city;
//         this.country = country;
//     }
//     callme() {
//         console.log(this.name)
//     }

// }
// const returnData = new Person({name: "Huzaf", age: 34})
// console.log(returnData)

//  Getters & Setters

// class brothers{
//     constructor(bro1, bro2, bro3, bro4){
//         this.bro1 = bro1;
//         this.bro2 = bro2;
//         this.bro3 = bro3;
//         this.bro4 = bro4
//     }

//     get brother1(){
//         return `${this._bro1}`
//     }
//     get brother2(){
//         return `${this._bro2}`
//     }

//     set bro1(value){
//        if(typeof value !== "string"){
//         console.error("Please provide string value")
//        } else {
//         this._bro1 = value
//        }
//     }

//     set bro2(value){
//        if(typeof value !== "string"){
//         console.error("Please provide string value")
//        } else {
//         this._bro2 = value
//        }
//     }
// }

// const arrName = ["huzaif", "zukhruf"]

// const brotherD = new brothers(...arrName)

// console.log(brotherD.brother1)
// console.log(brotherD.brother2)

/*<-------------------------->*/

/* 8:
    Date and Closure
*/

// const today = new Date();
// console.log(today.toDateString());
// console.log(today.getFullYear());
// console.log(today.getDate())


// function counter() {
//     let countValue = 0;

//     function ChangeBy(num) {
//        console.log(countValue = countValue + num);
//     }
//     return {
//         increment() {
//             ChangeBy(1)
//         },
//         decrement() {
//             ChangeBy(-1)
//         },
//         value(){
//            return console.log(countValue)
//         }
//     }
// }

// const counting = counter()

// counting.increment()
// counting.increment()

// counting.value()

/*<-------------------------->*/


/* 9:
    Advanced Student Management System
*/

const students = [
    { name: "Ali", marks: [80, 90, 85], age: 20 },
    { name: "Sara", marks: [70, 60, 75], age: 19 },
    { name: "Ahmed", marks: [95, 85, 100], age: 21 },
];



// // Function to calculate average marks using reduce
// let avgMarks = () => {
//     const avgMarksData = students.map((element) => {
//         let total = element.marks.reduce((accu, marks) => { return accu + marks }, 0)
//         let avg = total / element.marks.length;
//         return {
//             name: element.name,
//             marks: avg.toFixed(2)
//         }
//     })

//     return avgMarksData
// }

// const storeMarks = avgMarks()
// console.log(storeMarks)


// Callback function to print student info

// function average(student, Callback) {
//     const avgMarks = student.map((element) => {
//         let totalMarks = element.marks.reduce((accu, element) => { return accu + element }, 0)
//         let avg = totalMarks / element.marks.length;
//         return {
//             name: element.name,
//             marks: totalMarks,
//             avgMarks: avg.toFixed(2),
//             age: element.age,
//         }
//     })
//     Callback(avgMarks)
// }

// function displayData(avgMarks) {
//     avgMarks.forEach(element => {
//         console.log(`The Student ${element.name} got ${element.marks} Marks. Average: ${element.avgMarks}% by age ${element.age}`)
//     });
// }

// average(students, displayData)

// Filter students with average > 80

// const filterStudents = students.map(element => {
//     let totalMarks = element.marks.reduce((accu, element) => { return accu + element }, 0)
//     let averageMarks = (totalMarks / element.marks.length).toFixed(2)
//     return {
//         name: element.name,
//         marks: totalMarks, 
//         avgMarks: averageMarks,
//     }
// });

// const FilterationSystem = filterStudents.filter(element => {
//     return element.avgMarks > 80 ? element : "";    
// });

// console.log(FilterationSystem)


// Using findIndex

// const indexFind =  students.findIndex(element => element.name === "Ahmed")
// console.log(indexFind)

/*<-------------------------->*/

/* 10:
    Object Manipulation with Spread, Destructuring, and Arrow Functions
*/

// const student = {
//   name: "Ali",
//   age1: 20,
//   marks: [80, 90, 85],
//   greet: function() {
//     console.log(`Hello, my name is ${this.name}`);
//   }
// };

// Using arrow function inside object (lexical this)

// student.average = () => { return student.marks.reduce((a,b)=> a + b, 0) / student.marks.length}
// console.log(`The Students Average Marks: ${student.average()}`)

// Spread operator to clone and add new property

// const updateStudent = { ...student, Grade: "B"}
// console.log(updateStudent)


// Destructuring

// const {name, age1, marks} = student;
// console.log(`${marks}`)

/*<-------------------------->*/

/* 11:
    Class, Inheritance, Static Methods, Getter/Setter, Super Keyword
*/

// class Person {
//     constructor({name, age}) {
//         this.name = name;
//         this.age = age;
//     }

//     greet() {
//         console.log(`Hi, I'm ${this.name}`)
//     }

// }

// class Student extends Person {
//     constructor({ name, age, marks }) {
//         super({name, age});
//         this.marks = marks;
//     }
//     get updatedAge(){
//        return `Updated Age: ${this.age}`
//     }
//     set newAge(newAge){
//         this.age = newAge
//     }

//     getAvg() {
//         let avgStore = this.marks.reduce((accu, element) => { return accu + element }, 0) / this.marks.length
//         return avgStore.toFixed(2)
//     }
// }

// const studentInfo = new Student({name: "huzaif", age: 34, marks: [34,20,53]})

// console.log(studentInfo)
// console.log(studentInfo.name)
// console.log(studentInfo.age)
// studentInfo.newAge = 23
// console.log(studentInfo.updatedAge)
// console.log(studentInfo.getAvg())

/*<-------------------------->*/

/* 12:
    Class, Inheritance, Static Methods, Getter/Setter, Super Keyword
*/


// const courses = [
//     { title: "JavaScript", duration: 30, students: [{ name: "Ali" }, { name: "Sara" }] },
//     { title: "Python", duration: 25, students: [{ name: "Ahmed" }, { name: "Sara" }] },
//     { title: "React", duration: 20, students: [{ name: "Ali" }, { name: "Ahmed" }] },
// ];

// Sort courses by duration (numeric)

// let saveCourses = courses.sort((a, b) => { return a.duration - b.duration })
// console.log(saveCourses)

// Sort courses by title (string)

// let sortBy = courses.sort((a, b) => { return b.title.localeCompare(a.title) })
// console.log(sortBy)

// Display course info

// courses.forEach((element) => {
//     console.log(`Course: ${element.title}, ${element.duration}, ${element.students.map(element => element.name)},`)
// })

/*<-------------------------->*/

/* 13:
    Class, Inheritance, Static Methods, Getter/Setter, Super Keyword
*/

// function createReminder(message, daysLater){
//     const reminderDate = new Date();
//     reminderDate.setDate(reminderDate.getDate() + daysLater)

//     return function(){
//         console.log(`Reminder: ${message} on ${reminderDate.toDateString()}`)
//     }
// }
// const newFun =  createReminder("metting", 10)
// const submitAssignment = createReminder("Assignment SUbmission", 20)

// newFun()
// submitAssignment()

/*<-------------------------->*/


/* 14:
    Combined Rest Parameters + Spread + Callback + Map/Filter/Reduce
*/

// Function expression using rest parameters

// const sumNumbers = (...numbers) => { return numbers.reduce((accu, element) => { return accu + element }, 0) }
// console.log(`Sum: ${sumNumbers(1, 2, 3, 4)}`)

// Array manipulation with callbacks

// const numbers = [1,2,3,4,5,6];
// const proceed = numbers.map(elmenet => elmenet).filter(element => element > 4).reduce((accu, element) => accu + element, 0)
// console.log(`Processed Numbers: ${proceed}`)


// Spread operator to merge arrays

// const arr1 = [1,2,3], arr2 = [4,5,6];
// const merge = [...arr1, ...arr2]
// console.log(merge)


/*<-------------------------->*/


