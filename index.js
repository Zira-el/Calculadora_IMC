function calcular() {
var alturaElement = document.getElementById("altura");
var altura = alturaElement.value

var pesoElement = document.getElementById("peso");
var peso = pesoElement.value

var imc = peso/(altura*altura);

document.getElementById('imc').innerHTML = Math.round(imc);
}


