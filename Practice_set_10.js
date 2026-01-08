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
.checked, Trinary Function , Switch Case
--------------------------------------------*/

/* 1:
   User enters a number (1-7) and the program displays the corresponding day.*/

const checkDay = document.getElementById("checkDay");
function whichDay() {
  const dayInput = document.getElementById("dayInput");
  const printDay = document.getElementById("printDay");
  let chngType = Number(dayInput.value);

  switch (chngType) {
    case 1:
      printDay.textContent = `It's Monday Today`;
      dayInput.value = "";
      break;
    case 2:
      printDay.textContent = `It's Tuesday Today`;
      dayInput.value = "";
      break;
    case 3:
      printDay.textContent = `It's Wednesday Today`;
      dayInput.value = "";
      break;
    case 4:
      printDay.textContent = `It's Thursday Today`;
      dayInput.value = "";
      break;
    case 5:
      printDay.textContent = `It's Friday Today`;
      dayInput.value = "";
      break;
    case 6:
      printDay.textContent = `It's Saturday Today`;
      dayInput.value = "";
      break;
    case 7:
      printDay.textContent = `It's Sunday Today`;
      dayInput.value = "";
      break;
  }
}
checkDay.onclick = whichDay;

/*<-------------------------->*/

/* 2:
   User enters marks (0–100).
    Program prints the grade using switch case.*/

const getGrade = document.getElementById("getGrade");

function getGrades() {
  let switchGrade = document.getElementById("switchGrade");
  const printGrades = document.getElementById("printGrades");
  switchGrade = switchGrade.value;
  console.log(switchGrade);

  if (switchGrade === "" || isNaN(switchGrade)) {
    printGrades.textContent = `input Not Valid`;
    return;
  }

  const checkGrades = Number(switchGrade);
  switch (true) {
    case checkGrades <= 30:
      printGrades.textContent = `You have Failed`;
      switchGrade.value = "";
      console.log("failed");
      break;
    case checkGrades <= 60:
      printGrades.textContent = `You have Gotten Grade C`;
      switchGrade.value = "";
      console.log("Grade C");
      break;
    case checkGrades <= 75:
      printGrades.textContent = `You have Gotten Grade B`;
      switchGrade.value = "";
      console.log("Grade B");
      break;
    case checkGrades <= 100:
      printGrades.textContent = `You have Gotten Grade A`;
      switchGrade.value = "";
      console.log("Grade A");
      break;
    default:
      printGrades.textContent = `Please Enter Value Input from 1 - 100`;
  }
}
getGrade.onclick = getGrades;
/*<-------------------------->*/
