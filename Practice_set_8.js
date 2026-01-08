/* -----------------------------------------
               << Practice Set 8 >>

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
.checked
--------------------------------------------*/

const newsTellers = document.getElementById("newsTellers");
const visaCard = document.getElementById("visaCard");
const masterCard = document.getElementById("masterCard");
const payPal = document.getElementById("payPal");
const submitForm = document.getElementById("submitForm");
const subscriptionCheck = document.getElementById("subscriptionCheck");
const paymentSelected = document.getElementById("paymentSelected");


submitForm.onclick = function(){

    if(newsTellers.checked){
        subscriptionCheck.textContent = `You have Subscribed to Newsletter`;
    }else{
        subscriptionCheck.textContent = `Please Subscribe to Newsletter`;
    }

    if(visaCard.checked){
        paymentSelected.textContent = `You are Paying with Visa Card`;
    }else if(masterCard.checked){
        paymentSelected.textContent = `You are Paying with Master Card`;
    }else if(payPal.checked){
        paymentSelected.textContent = `You are Paying with PayPal`;
    }else{
        paymentSelected.textContent = `Please Select Payment Method to Proceed`;
    }
}