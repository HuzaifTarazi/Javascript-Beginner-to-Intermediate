// Digital Clock


function digitalClock() {

    const time = new  Intl.DateTimeFormat("en-US", {
        hour: `2-digit`,
        minute: `2-digit`,
        second: `2-digit`,
        hour12: true,
    })
    const newTime = time.formatToParts(new Date())

    const [hour,, minute,, second,, hour12] = newTime 

    const setHour = document.getElementById("hours");
    setHour.textContent = hour.value
    const setMinute = document.getElementById("minutes");
    setMinute.textContent = minute.value;
    const setSeconds = document.getElementById("seconds");
    setSeconds.textContent = second.value
    const dayPeriod = document.getElementById("period");
    dayPeriod.textContent = hour12.value
}

setInterval(digitalClock, 1000)

