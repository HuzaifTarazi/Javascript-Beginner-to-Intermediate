/* -----------------------------------------
               << Practice Set 10 >>

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

--------------------------------------------*/

/* 1:
   
  Username Validation (Strings + if + length + trim)
  You get a username from an input field.
  Rules:
    Remove extra spaces
    Username length must be at least 5 characters
  Tasks:
    Print "Valid Username" or "Invalid Username"*/

function StringTrim() {
  let stringOpTrim = document.getElementById("stringOpTrim");
  let trimDown = document.getElementById("trimDown");
  let trimOutput = document.getElementById("trimOutput");
  let getString = stringOpTrim.value;
  getString = getString.trim();
  if (getString.length < 5) {
    trimOutput.textContent = `Username "${getString}"  Length is Lower then 5.`;
  } else {
    trimOutput.textContent = `Congrats Username "${getString}" Fullfil the Condition`;
  }
  console.log(getString);
}
trimDown.onclick = StringTrim;
/*<-------------------------->*/
