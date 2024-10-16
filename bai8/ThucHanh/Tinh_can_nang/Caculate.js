let weight = parseFloat(prompt("Enter your weight (kg):"));
let height = parseFloat(prompt("Enter your height (m):"));
function calculateBMI() {

    return weight / (height * height);
}

function check() {
    if (calculateBMI() < 18.5) {
        return "Underweight";
    } else if (calculateBMI() >= 18.5 && calculateBMI() < 25.0) {
        return "Normal";
    } else if (calculateBMI() >= 25.0 && calculateBMI() < 30.0) {
            return "Overweight";
    } else {
        return "Obese";
    }
}



let bmi = calculateBMI();
let type = check();

console.log("your BMI: " + bmi);
console.log("Type of BMI: " + type);
alert("Chỉ số BMI của bạn là: " + bmi );
alert("Type of BMI: " + type);