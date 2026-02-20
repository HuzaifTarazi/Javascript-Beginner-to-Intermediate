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
//     getGrade(){
//         if(this.marks >= 80){
//             return `You Have Got Grade A`;
//         } else if(this.marks >= 60){
//             return `You Have Got Grade B`;
//         } else {
//             return `You Have Got Grade C`;
//         }
//     }

//     getResult(){
//         return this.marks >= 50 ? "You Have Pass The Exams" : "You Have Failed The Exams";
//     }

//     getDetails(){
//         return `Student Name: ${this.name} \n Student Marks: ${this.marks} \n ${this.getGrade()} \n ${this.getResult()}`
//     }
// }

// let student1 = new StudentResultSystem("Huzaif Tarazi", 70);

// console.log(student1.getDetails())

/*<-------------------------->*/