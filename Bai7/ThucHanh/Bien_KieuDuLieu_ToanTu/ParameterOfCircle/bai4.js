function Parameter() {
    let radius = document.getElementById("radius").value;
    const PI = Math.PI;
    let parameter = 2*radius*PI;
    document.getElementById("result").innerText =" the parameter of circle :" +parameter ;
}