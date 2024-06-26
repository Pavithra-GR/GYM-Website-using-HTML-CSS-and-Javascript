// script.js

function calculateBMI() {
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;
    const bmi = weight / ((height / 100) ** 2);
    document.getElementById('result').innerText = `Your BMI is: ${bmi.toFixed(2)}`;
}
