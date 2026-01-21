/* -----------------------------------------
               << Number Guessing Game >>

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
slice(), replace(), replaceAll, split(),
charAt(),

Method Chaining, while Loop, for Loop

--------------------------------------------*/

const guessNow = document.getElementById("guessNow");
let attempt = 0;
function GuessRandomNumber() {
  const number1 = 1;
  const number2 = 100;
  const randomNumber = Math.trunc(Math.random() * (number2 - number1) + 1);

  let guessGame = document.getElementById("guessGame").value;
  let guessResult = document.getElementById("guessResult");

  if (isNaN(guessGame) || guessGame === "") {
    guessResult.textContent = `Please Enter Valid Number!`;
  } else if (guessGame < 0 || guessGame > 100) {
    guessResult.textContent = `Please Enter Numbers From 1 - 100`;
  } else {
    guessGame = Number(guessGame);
    attempt++;
    if (guessGame > randomNumber) {
    guessResult.textContent = `Number is Too High`;
    } else if (guessGame < randomNumber) {
    guessResult.textContent = `Number is Too Low`;
    } else {
      guessResult.textContent = `Congrats! It took you ${attempt} to get it Right`;
    }
  }
}

guessNow.onclick = GuessRandomNumber;
