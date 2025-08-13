const textBox = document.getElementById("input");

const toFahrenheit = document.getElementById("toFahrenheit");

const toCelcius = document.getElementById("toCelcius");

function convert() {
  if (toFahrenheit.checked) {
    let result = Number(textBox.value);
    result = result * 9 / 5 + 32;
    window.alert(result.toFixed(1) + "°F");
  } else if (toCelcius.checked) {
    let result = Number(textBox.value);
    result = (result - 32) * (5/9);
    window.alert(result.toFixed(1) + "°C");
  } else {
    window.alert("Please pick a conversion.")
  }
}
