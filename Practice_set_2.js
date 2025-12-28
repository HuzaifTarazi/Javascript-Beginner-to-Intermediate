/* -----------------------------------------
               << Practice Set 2 >>
let, 
const, 
Arithimatic Operators, 
console.log, 
${}, 
getElementById().textContent;
getElementById().value; 
getElementById().onclick;
window.prompt
--------------------------------------------*/

/* 1:
   Make an input for name and a button when clicked show the message on page. */

//let username;
//document.getElementById("username_submit").onclick = function(){
//    username = document.getElementById("input_username").value;
//    document.getElementById("show_output_user").textContent = `Output Is: ${username}`;
//}

// This code can also be created like this

let username;
function onclicked_display() {
   username = document.getElementById("input_username").value;
   document.getElementById("show_output_user").textContent = `Output Is: ${username}`;
   console.log(username);
}

document.getElementById("username_submit").onclick = onclicked_display;

/*<-------------------------->*/

/* 2:
   User enters two numbers show sum of both on page */

let numberOne;
let numberTwo;

function sum() {
   numberOne = Number(document.getElementById("number_sum_1").value);
   numberTwo = Number(document.getElementById("number_sum_2").value);
   addition = numberOne + numberTwo;
   document.getElementById("sumofnumbers").textContent = `Sum of ${numberOne} and ${numberTwo} is: ${addition}`;
   console.log(addition);
}
document.getElementById("calculate_sum").onclick = sum;

/*<-------------------------->*/

/* 3:
   User enters two numbers show sum of both on page */

let age;
document.getElementById("myagesubmit").onclick = function () {
   age = Number(document.getElementById("myage").value);
   document.getElementById("ageoutput").textContent = `You are ${age} Years old.`;
   console.log(typeof age); console.log(age);
}

/*<-------------------------->*/


/* 4:
   Ask for width and height and show area of the rectangle. */

let rectangle_width;
let rectangle_height;
document.getElementById("calculate_rec_area").onclick = function () {
   rectangle_width = Number(document.getElementById("rectangle_width").value);
   rectangle_height = Number(document.getElementById("rectangle_height").value);
   area = rectangle_width * rectangle_height;
   console.log(area);
   document.getElementById("rec_output").textContent = `Area of Rectangle is: ${area}`;
}

/*<-------------------------->*/

/* 5:
   Ask for number and show the double of that number */

let double;

function doubleNumber() {
   double = Number(document.getElementById("doubled_no").value);
   dn = double * 2;
   document.getElementById("double_output").textContent = `The double of the number you entered is: ${dn}`;
}

document.getElementById("mydouble_no").onclick = doubleNumber;

/*<-------------------------->*/

/* 6:
   Show the input value in a p and then clear the input (.value = "") on click */

// let mydata;

// document.getElementById("mydatasubmit").onclick = function(){
//    mydata = document.getElementById("mydata").value;
//    document.getElementById("showmydata").textContent = `Your Input is: ${mydata}`;
//    document.getElementById("mydata").value = ``;
// }

// Second way to solve this problem

let mydata;

function cleardata() {
   mydata = document.getElementById("mydata").value;
   document.getElementById("showmydata").textContent = `Your Input is: ${mydata}`;
   document.getElementById("mydata").value = ``;
}

document.getElementById("mydatasubmit").onclick = cleardata;

/*<-------------------------->*/

/* 7:
   Ask for two numbers and show subtraction */

   let sub1;
   let sub2;

   document.getElementById("subtractionsubmit").onclick = function(){

      sub1 = Number(document.getElementById("sub1").value);
      sub2 = Number(document.getElementById("sub2").value);
      subtraction = sub1 - sub2; 
      document.getElementById("show_sub_value").textContent = `Result: ${subtraction}`;
   }

/*<-------------------------->*/

/* 8:
   Ask for two numbers and show subtraction */

   let increment; 

   document.getElementById("submit_increment").onclick = function(){
      increment = document.getElementById("increment").value;
      console.log(typeof increment);
      increment++; 
      document.getElementById("show_increment").textContent = `Result: ${increment}`;
   }

/*<-------------------------->*/




