function Area() {
    let radius = document.getElementById("radius").value;
    const PI = Math.PI;
    let area = radius*radius*PI;
    document.getElementById("result").innerText =" the area of circle :" +area ;
}
