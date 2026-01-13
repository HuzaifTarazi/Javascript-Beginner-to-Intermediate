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

/* 2:
   
  Email Checker (Strings + includes + if else)
    User enters an email.
  Rules:
    Convert email to lowercase
    Check if it includes "@gmail.com"
  Tasks:
    Print "Gmail User" or "Not a Gmail User" */

const checkEmail = document.getElementById("checkEmail");

function EmailCheckSystem() {
  let emailCheck = document.getElementById("emailCheck");
  let printEmailCheck = document.getElementById("printEmailCheck");
  emailCheck = emailCheck.value;
  emailCheck = emailCheck.toLowerCase();
  console.log(emailCheck);
  if (emailCheck.includes("@gmail.com")) {
    printEmailCheck.textContent = `Your Email includes @gmail.com`;
  } else {
    printEmailCheck.textContent = `Please Enter Email correctly`;
  }
}
checkEmail.onclick = EmailCheckSystem;

/*<-------------------------->*/

/* 3:
   
  Login Button (DOM + onclick + strings)
    A login button is clicked.
  Rules:
    Get username from input
    If trimmed username is empty, show "Please enter username"
    Otherwise show "Welcome <username>"
  Use:
    getElementById().value, getElementById().textContent */

const userLogin = document.getElementById("userLogin");

function UserLogin() {
  let loginUsername = document.getElementById("loginUsername");
  let loggedIn = document.getElementById("loggedIn");

  loginUsername = loginUsername.value;
  loginUsername = loginUsername.trim();
  if (loginUsername === "") {
    loggedIn.textContent = `Username Can't stay Empty! Please Enter Username`;
  } else {
    loggedIn.textContent = `${loginUsername} Congradulations! You are Logged In`;
  }
}
userLogin.onclick = UserLogin;

/*<-------------------------->*/

/* 4:
   
  Password Strength (Strings + length + if else)
    User enters a password.
  Rules:
    Trim spaces
    If length < 8 → "Weak Password"
    Else → "Strong Password" */

const PassLength = document.getElementById("PassLength");

function PasswordLength() {
  const passwordStrength = document.getElementById("passwordStrength");
  const checkPass = document.getElementById("checkPass");
  const lengthUser = document.getElementById("lengthUser");
  let storePass;
  let storeUser;
  storeUser = lengthUser.value;
  storeUser = storeUser.trim();
  console.log(storeUser);
  storePass = passwordStrength.value;
  storePass = storePass.trim();
  console.log(storePass);
  if (storePass.length <= 8) {
    checkPass.textContent = `${storeUser}! Please Enter Valid Password to Proceed`;
  } else {
    checkPass.textContent = `${storeUser}! Welcome You are Successfully Logged In`;
  }
}
PassLength.onclick = PasswordLength;

/*<-------------------------->*/
