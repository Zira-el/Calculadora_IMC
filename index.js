function calcular() {
var alturaElement = document.getElementById("altura");
var altura = alturaElement.value

var pesoElement = document.getElementById("peso");
var peso = pesoElement.value

var imc = peso/(altura*altura);

document.getElementById('imc').innerHTML = imc.toFixed(1);

if(imc<18.5) {
    document.getElementById ('Classificação').innerHTML = "abaixo do peso";
}
else if (imc >= 18.5 && imc <= 24.9) {
    document.getElementById ('Classificação').innerHTML = "Peso normal";
}
else if (imc >= 25 && imc <= 29.9) {
    document.getElementById ('Classificação').innerHTML = "Sobrepeso";
}
else if (imc >= 30 && imc <= 34.9) {
    document.getElementById ('Classificação').innerHTML = "Obesidade (Grau I)";
}
else if (imc >= 35 && imc <= 39.9) {
    document.getElementById ('Classificação').innerHTML = "Obesidade (Grau II)";
}
else if (imc >= 40) {
    document.getElementById ('Classificação').innerHTML = "Obesidade (Grau III)";
}

}


