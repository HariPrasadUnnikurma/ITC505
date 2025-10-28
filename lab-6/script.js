document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("converterForm");
    const resultDiv = document.getElementById("result");

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const temperature = parseFloat(document.getElementById("temperatureInput").value);
        const inputUnit = document.getElementById("inputUnit").value;
        const outputUnit = document.getElementById("outputUnit").value;

        if (isNaN(temperature)) {
            resultDiv.textContent = "Please enter a valid number.";
            return;
        }

        const converted = convertTemperature(temperature, inputUnit, outputUnit);
        resultDiv.textContent = `Converted Temperature: ${converted.toFixed(2)} ${outputUnit}`;
    });

    function convertTemperature(value, from, to) {
        if (from === to) return value;

        let celsius;
        if (from === "Celsius") celsius = value;
        else if (from === "Fahrenheit") celsius = (value - 32) * 5 / 9;
        else if (from === "Kelvin") celsius = value - 273.15;

        if (to === "Celsius") return celsius;
        else if (to === "Fahrenheit") return (celsius * 9 / 5) + 32;
        else if (to === "Kelvin") return celsius + 273.15;
    }
});
