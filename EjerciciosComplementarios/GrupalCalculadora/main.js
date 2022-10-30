var mostrarOperacion = document.getElementById("operacion");
var mostrarNumeros = document.getElementById("numeros");
var suma = document.getElementById("suma");
var resta = document.getElementById("resta");
var producto = document.getElementById("producto");
var division = document.getElementById("division");
var cero = document.getElementById("cero");
var uno = document.getElementById("uno");
var dos = document.getElementById("dos");
var tres = document.getElementById("tres");
var cuatro = document.getElementById("cuatro");
var cinco = document.getElementById("cinco");
var seis = document.getElementById("seis");
var siete = document.getElementById("siete");
var ocho = document.getElementById("ocho");
var nueve = document.getElementById("nueve");
var punto = document.getElementById("punto");
var borrar = document.getElementById("borrar");
var igual = document.getElementById("igual");
var operacion = "";
var operando1 = "";
var operando2 = "";
var resultado = ""

cero.addEventListener("click", (e) => {
    operando1 += "0";
    mostrarNumeros.innerHTML = operando1;
})

uno.addEventListener("click", (e) => {
    operando1 += "1";
    mostrarNumeros.innerHTML = operando1;
})

dos.addEventListener("click", (e) => {
    operando1 += "2";
    mostrarNumeros.innerHTML = operando1;
})

tres.addEventListener("click", (e) => {
    operando1 += "3";
    mostrarNumeros.innerHTML = operando1;
})

cuatro.addEventListener("click", (e) => {
    operando1 += "4";
    mostrarNumeros.innerHTML = operando1;
})

cinco.addEventListener("click", (e) => {
    operando1 += "5";
    mostrarNumeros.innerHTML = operando1;
})

seis.addEventListener("click", (e) => {
    operando1 += "6";
    mostrarNumeros.innerHTML = operando1;
})

siete.addEventListener("click", (e) => {
    operando1 += "7";
    mostrarNumeros.innerHTML = operando1;
})

ocho.addEventListener("click", (e) => {
    operando1 += "8";
    mostrarNumeros.innerHTML = operando1;
})

nueve.addEventListener("click", (e) => {
    operando1 += "9";
    mostrarNumeros.innerHTML = operando1;
})

punto.addEventListener("click", (e) => {
    operando1 += ".";
    mostrarNumeros.innerHTML = operando1;
})

suma.addEventListener("click", (e) => {
    operacion = "+";
    if (!operando1 || !operando2) {
        operando2 = operando1;
        mostrarNumeros.innerHTML = operando2;
        operando1 = ""
    }
    mostrarOperacion.innerHTML = operacion;

})

resta.addEventListener("click", (e) => {
    operacion = "-";
    if (operando2) {
        operaciones()
        mostrarNumeros.innerHTML = resultado;
    } else {
        operando2 = operando1;
        mostrarNumeros.innerHTML = operando2;
    }
    operando1 = ""
    mostrarOperacion.innerHTML = operacion;
})

producto.addEventListener("click", (e) => {
    operacion = "*";
    if (operando1 && operando2) {
        operaciones()
        mostrarNumeros.innerHTML = resultado;
    } else {
        operando2 = operando1;
        mostrarNumeros.innerHTML = operando2;
    }
    operando1 = ""
    mostrarOperacion.innerHTML = operacion;
})

division.addEventListener("click", (e) => {
    operacion = "/";
    if (operando1 && operando2) {
        operaciones()
        mostrarNumeros.innerHTML = resultado;
    } else {
        operando2 = operando1;
        mostrarNumeros.innerHTML = operando2;
    }
    operando1 = ""
    mostrarOperacion.innerHTML = operacion;
})

borrar.addEventListener("click", (e) => {
    operando1 = operando1.slice(0, -1);

    mostrarNumeros.innerHTML = operando1;
})

igual.addEventListener('click', () => {
    switch (operacion) {
        case "+":
            resultado = parseInt(operando1) + parseInt(operando2);
            mostrarNumeros.innerHTML = resultado;
            operando2 = "";
            operando1 = "";
            break;

        case "-":
            resultado = parseInt(operando2) - parseInt(operando1);
            break;

        case "*":
            resultado = parseInt(operando1) * parseInt(operando2);
            break;

        case "/":
            resultado = parseInt(operando1) / parseInt(operando2);
            break;

        default:
            break;
    }
})