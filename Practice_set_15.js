/* -----------------------------------------
               << Practice Set 15 >>

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


Spread Operator, Spread Operator(...), Rest Parameter(...)

forEach(), map(), filter(), reduce()
-------------------------------------------- */

/* 1:
     
Student Marks Upgrade System
    
    User enters marks (comma separated)
    Convert to numbers
    Use map() to add +5 bonus marks
    Use spread to clone original array before modification
Show:
    Original Marks
    Updated Marks

*/

function StudentMarksStorage(marksArr, callBack) {

    callBack(marksArr);
}

function StudentMarksCalculation(originalMarksArr) {
    let originalMarks = [...originalMarksArr]

    let modifiedMarks = originalMarksArr.map((element) => {
        return element + 5;
    })

    const printMarksOp = document.getElementById("printMarksOp");
    printMarksOp.textContent = `Original Array Of Numbers are ${originalMarks} and Updated ${modifiedMarks}`

}

const marksUpgradeGet = document.getElementById("marksUpgradeGet");
marksUpgradeGet.onclick = function () {
    let marksCalculationSystem = document.getElementById("marksCalculationSystem").value;
    marksCalculationSystem = marksCalculationSystem.split(",");

    marksCalculationSystem.forEach((element, index) => {
        marksCalculationSystem[index] = Number(element)
    });

    StudentMarksStorage(marksCalculationSystem, StudentMarksCalculation)
}

/*<-------------------------->*/

/* 2:
     
Even Number Filter System
    
    User inputs numbers
    Use filter() to keep even numbers
    Show filtered result

*/

function NumberFilterationStorage(arrStorage, callBack) {
    callBack(arrStorage);
}

function NumberFilterationSystem(originalArr) {

    let originalArrCopied = [...originalArr]

    let filteration = originalArr.filter((element) => {
        return element % 2 === 0;
    })

    const printfilteredOp = document.getElementById("printfilteredOp");
    printfilteredOp.textContent = `Original Array of Numbers are { ${originalArrCopied} } and Filtered Array is { ${filteration} }`;
}

const filterOpNow = document.getElementById("filterOpNow");
filterOpNow.onclick = function () {
    const numberFilter = document.getElementById("numberFilter").value;
    let arrStorage = numberFilter.split(",");

    arrStorage.forEach((element, index) => {
        arrStorage[index] = Number(element);
    })

    NumberFilterationStorage(arrStorage, NumberFilterationSystem)
}

/*<-------------------------->*/

/* 3: 
    Total Expense Calculator

    User enters expenses
    Pass expenses using spread
    Function receives using rest parameter
    Use reduce() to calculate total
*/

function TotalExpenseCalculator(...expenseArr) {
    let originalArr = [...expenseArr]

    let totalExpense = expenseArr.reduce((accumulator, element) => {
        return accumulator + element;
    })
    const printCalculationOp = document.getElementById("printCalculationOp");
    printCalculationOp.textContent = `Original Total Expenses are [${originalArr}] and Calculated Total Expense are [${totalExpense}]`
}

const performCalculationOp = document.getElementById("performCalculationOp");
performCalculationOp.onclick = function () {
    const expenseCalculate = document.getElementById("expenseCalculate").value;
    const storeValues = expenseCalculate.split(",");
    console.log(storeValues)
    for (let i = 0; i < storeValues.length; i++) {
        storeValues[i] = Number(storeValues[i])
    }

    TotalExpenseCalculator(...storeValues)

}

/*<-------------------------->*/


/* 4: 
    Total Expense Calculator

    User enters expenses
    Pass expenses using spread
    Function receives using rest parameter
    Use reduce() to calculate total
*/



function NameFilterArrayStorage(originalArr, callBack) {
    callBack(...originalArr)
}

function NameFilterationSystem(...originalArr) {

    let getNewArr = originalArr.map((element, index) => {
        return element.slice(0, 1).toUpperCase() + element.slice(1).toLowerCase();
    })

    let convertTostring = "";
    getNewArr.forEach((element) => {
        convertTostring += element + ' | ';
    })

    const displayFormatedOp = document.getElementById("displayFormatedOp");
    displayFormatedOp.textContent = `Modified Array: [${convertTostring}]`
}

const formatNameOp = document.getElementById("formatNameOp")
formatNameOp.onclick = function () {

    let preDefinedNamesArr = ['huzaif', 'zukhruf', 'osaf', 'rufaf']
    const nameFormaterSys = document.getElementById("nameFormaterSys").value;
    let convertToArr = nameFormaterSys.split(",")

    for (let i = 0; i < convertToArr.length; i++) {
        preDefinedNamesArr.push(convertToArr[i].trim())
    }
    NameFilterArrayStorage(preDefinedNamesArr, NameFilterationSystem)

}

/*<-------------------------->*/


/* 5: 
    Advanced Number Analyzer

    User inputs numbers
    Clone array using spread
    Use:
    map() → square numbers
    filter() → keep numbers > 10
    reduce() → find total
*/


function AdvanceNumberAnalyze(numberAnalyzeStorage, callBack) {
    callBack(...numberAnalyzeStorage)
}

function AdvanceNumberAnalyzeSystem(...originalArr) {
    let originalCloned = [...originalArr]

    let mapping = originalArr.map((element) => {
        return Math.pow(element, 2)
    })

    let filteration = mapping.filter((numbers) => {
        return numbers > 10;
    })

    let reduction = filteration.reduce((accumulator, current) => {
        return accumulator + current
    })

    const displayadvanceNumberAnalyze = document.getElementById("displayadvanceNumberAnalyze");
    displayadvanceNumberAnalyze.textContent = `Original Array: ${originalCloned} | Mapped Array: ${mapping} | Filterd Array: ${filteration} | Reduced Array: ${reduction}`
}

const advanceNumberAnalyzeOp = document.getElementById("advanceNumberAnalyzeOp");
advanceNumberAnalyzeOp.onclick = function () {
    const advanceNumberAnalyze = document.getElementById("advanceNumberAnalyze").value.trim();
    let numberAnalyzerStorage = advanceNumberAnalyze.split(",")

    for (let i = 0; i < numberAnalyzerStorage.length; i++) {
        numberAnalyzerStorage[i] = Number(numberAnalyzerStorage[i])
    }

    AdvanceNumberAnalyze(numberAnalyzerStorage, AdvanceNumberAnalyzeSystem)
}

/*<-------------------------->*/
