// Dice Roll Program



function DiceRollProgram(diceAttempts) {

    let tempArr = [];
    let imageArr = [];
    if (!diceAttempts || isNaN(diceAttempts)) {
        alert("Please Insert Number Correctly.!");
    }

    for (i = 1; i <= diceAttempts; i++) {
        const randomNumber = Math.floor(Math.random() * 6) + 1;
        tempArr.push(randomNumber);
        imageArr.push(`<img src="./dice_images/${randomNumber}.jpg" alt="Dice ${randomNumber}">`)

    }
    const diceResult = document.getElementById("diceResult");
    const diceImage = document.getElementById("diceImage");
    diceResult.textContent = `Dice Results: ${tempArr.join(", ")}`
    diceImage.innerHTML = imageArr.join('-');

}


const rollBtn = document.getElementById("rollBtn");
rollBtn.onclick = function () {
    const diceInput = document.getElementById("diceInput").value;
    DiceRollProgram(diceInput);
}