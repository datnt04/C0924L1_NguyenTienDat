let math = parseFloat(prompt("Enter Math_score:"));
let physics = parseFloat(prompt("Enter Physics_score:"));
let chemistry = parseFloat(prompt("Enter Chemistry_score:"));

function avrScore() {
    return (math + physics + chemistry) / 3;
}
alert("điểm trung bình cảu 3 môn là: " + avrScore());






