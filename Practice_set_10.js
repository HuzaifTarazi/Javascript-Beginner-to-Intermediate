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
