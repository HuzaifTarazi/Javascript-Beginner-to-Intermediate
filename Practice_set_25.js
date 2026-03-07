// Digital Stop Watch 


const swhours = document.getElementById("swhours")
const swminutes = document.getElementById("swminutes")
const swseconds = document.getElementById("swseconds")
const swmilliseconds = document.getElementById("swmilliseconds")


let startTime = 0;
let elapsedTime = 0;
let isRunning = false;
let timer = null;


function start() {
    if (!isRunning) {
        startTime = Date.now() - elapsedTime;
        timer = setInterval(active, 10)
        isRunning = true;
    }
}
function active() {
    let currentTIme = Date.now();
    elapsedTime = currentTIme - startTime
    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    let minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);
    let milliseconds = Math.floor(elapsedTime % 1000 / 10);

    swhours.textContent = hours.toString().padStart(2, "0")
    swminutes.textContent = minutes.toString().padStart(2, "0")
    swseconds.textContent = seconds.toString().padStart(2, "0")
    swmilliseconds.textContent = milliseconds.toString().padStart(2, "0")
}

function stop() {
    if (isRunning) {
        clearInterval(timer)
        isRunning = false
    }
}

function reset() {

    if (isRunning || !isRunning) {
        clearInterval(timer)
        isRunning = false
        startTime = 0
        elapsedTime = 0
        timer = null

        swhours.textContent = "00"
        swminutes.textContent = "00"
        swseconds.textContent = "00"
        swmilliseconds.textContent = "00"
    }

}


