let math = parseFloat(prompt("Enter Math_score:"));
let physics = parseFloat(prompt("Enter Physics_score:"));
let chemistry = parseFloat(prompt("Enter Chemistry_score:"));

function avrScore() {
    return (math + physics + chemistry) / 3;
}
function result(){
    return math + physics + chemistry;
}
alert("điểm trung bình của 3 môn là: " + avrScore());
alert("tổng số điểm của 3 môn là : " + result());