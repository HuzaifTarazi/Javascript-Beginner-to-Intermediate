/* -----------------------------------------
               << Practice Set 9 >>

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
.checked, Trinary Function
--------------------------------------------*/

let birthYear = document.getElementById("birthYear");
let currentYear = document.getElementById("currentYear");

document.getElementById("checkAgeDiff").onclick = function () {
  birthYear = Number(birthYear.value);
  currentYear = Number(currentYear.value);
  let ageDiff = currentYear - birthYear;
  let ageStatus = ageDiff >= 18 ? "an Adult" : "a Minor";
  document.getElementById(
    "trianyDisplay"
  ).textContent = `Your Age is ${ageDiff}. You are ${ageStatus}.`;
};

/*<-------------------------->*/

/* 2:
   Newsletter Subscription and Payment Method Selection using .checked*/

const newsTellers2 = document.getElementById("newsTellers2");
const visaCard2 = document.getElementById("visaCard2");
const masterCard2 = document.getElementById("masterCard2");
const payPal2 = document.getElementById("payPal2");
const submitForm2 = document.getElementById("submitForm2");
const subscriptionCheck2 = document.getElementById("subscriptionCheck2");
const paymentSelected2 = document.getElementById("paymentSelected2");

submitForm2.onclick = function () {
  let condition;
  condition = newsTellers2.checked
    ? "You Are Subscribed"
    : "You are Not Subscribed";
  let condition2;
  condition2 = visaCard2.checked
    ? "You are paying visa"
    : masterCard2.checked
    ? "You are Paying With Mastercard"
    : payPal2.checked
    ? "You are Paying With Paypal"
    : "Please Check the Box";
  subscriptionCheck2.textContent = `${condition}`;
  paymentSelected2.textContent = `${condition2}`;
};
