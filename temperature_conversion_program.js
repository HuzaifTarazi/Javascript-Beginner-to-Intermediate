let temperatureInput = document.getElementById("temperatureInput");
const celsiusToFahrenheitRadio = document.getElementById(
  "celsiusToFahrenheitRadio",
);
const fahrenheitToCelsiusRadio = document.getElementById(
  "fahrenheitToCelsiusRadio",
);
const resultText = document.getElementById("resultText");
let tempValue;

function celsiusToFahrenheit(temp) {
  if (isNaN(temp)) {
    resultText.textContent = "field can't be empty";
  } else {
    let result = (temp * 9) / 5 + 32;
    resultText.textContent = `${temp}°C is ${result.toFixed(2)}°F`;
  }
}
function fahrenheitToCelsius(temp) {
    if (isNaN(temp)) {
        resultText.textContent = "field can't be empty";
    } else {
        let result = ((temp - 32) * 5) / 9;
        resultText.textContent = `${temp}°F is ${result.toFixed(2)}°C`;
    }
}

const convertBtn = document.getElementById("convertBtn");
convertBtn.onclick = function () {
  tempValue = Number(temperatureInput.value);

  if (celsiusToFahrenheitRadio.checked) {
    celsiusToFahrenheit(tempValue);
    document.getElementById("temperatureInput").value = "";
  } else if (fahrenheitToCelsiusRadio.checked) {
    fahrenheitToCelsius(tempValue);
    document.getElementById("temperatureInput").value = "";
  }
};
