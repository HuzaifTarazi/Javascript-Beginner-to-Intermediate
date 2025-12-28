const changeCount = document.getElementById("countLabel");
const decreaseBtn = document.getElementById("decreaseBtn");
const increaseBtn = document.getElementById("increaseBtn");
const resetBtn = document.getElementById("resetBtn");

let countLabel = 0;
function decreaseValue (){
    countLabel--;
    changeCount.textContent = countLabel;
}
function increaseValue(){
    countLabel++;
    changeCount.textContent = countLabel;
}
function resetValue(){
    countLabel = 0;
    changeCount.textContent = countLabel;
}
decreaseBtn.onclick = decreaseValue;
increaseBtn.onclick = increaseValue;
resetBtn.onclick = resetValue;