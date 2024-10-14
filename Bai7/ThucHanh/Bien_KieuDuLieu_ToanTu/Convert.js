const celsius = document.getElementById("celsius").value;
function convertToFahrenheit() {
    //const celsius = document.getElementById("celsius").value;
    const fahrenheit = (celsius / 5) * 9 + 32;
    document.getElementById("result").innerText = celsius + "°C = " + fahrenheit.toFixed(2) + "°F";
}
