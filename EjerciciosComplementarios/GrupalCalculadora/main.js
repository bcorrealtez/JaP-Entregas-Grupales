let mostrarOperacion = document.getElementById("operacion");
let mostrarNumeros = document.getElementById("numeros");
let suma = document.getElementById("suma");
let resta = document.getElementById("resta");
let producto = document.getElementById("producto");
let division = document.getElementById("division");
let cero = document.getElementById("cero");
let uno = document.getElementById("uno");
let dos = document.getElementById("dos");
let tres = document.getElementById("tres");
let cuatro = document.getElementById("cuatro");
let cinco = document.getElementById("cinco");
let seis = document.getElementById("seis");
let siete = document.getElementById("siete");
let ocho = document.getElementById("ocho");
let nueve = document.getElementById("nueve");
let punto = document.getElementById("punto");
let borrar = document.getElementById("borrar");
let igual = document.getElementById("igual");
let operacion = "";
let resultado1 = "";
let resultado2 = "";

cero.addEventListener("click", (e)=>{
        resultado1 += "0";

        mostrarNumeros.innerHTML = resultado1;
    })

uno.addEventListener("click", (e)=>{
        resultado1 += "1";

        mostrarNumeros.innerHTML = resultado1;
    })

dos.addEventListener("click", (e)=>{
        resultado1 += "2";

        mostrarNumeros.innerHTML = resultado1;
    })

tres.addEventListener("click", (e)=>{
        resultado1 += "3";

        mostrarNumeros.innerHTML = resultado1;
    })

cuatro.addEventListener("click", (e)=>{
        resultado1 += "4";

        mostrarNumeros.innerHTML = resultado1;
    })

cinco.addEventListener("click", (e)=>{
        resultado1 += "5";

        mostrarNumeros.innerHTML = resultado1;
    })

seis.addEventListener("click", (e)=>{
        resultado1 += "6";

        mostrarNumeros.innerHTML = resultado1;
    })

siete.addEventListener("click", (e)=>{
        resultado1 += "7";

        mostrarNumeros.innerHTML = resultado1;
    })

ocho.addEventListener("click", (e)=>{
        resultado1 += "8";

        mostrarNumeros.innerHTML = resultado1;
    })

nueve.addEventListener("click", (e)=>{
        resultado1 += "9";

        mostrarNumeros.innerHTML = resultado1;
    })

punto.addEventListener("click", (e)=>{
        resultado1 += ".";

        mostrarNumeros.innerHTML = resultado1;
    })

suma.addEventListener("click", (e)=>{
        operacion = "+";
        if(resultado2){
            resultado2 = parseInt(resultado1)+parseInt(resultado2);
        } else {
            resultado2 = resultado1;
        }
        resultado1 = "";
        mostrarOperacion.innerHTML = operacion;
        mostrarNumeros.innerHTML = resultado2;
    })

resta.addEventListener("click", (e)=>{
        operacion = "-";

        if(resultado2){
            resultado2 = (parseInt(resultado2)) - (parseInt(resultado1));
        } else {
            resultado2 = resultado1;
        }
        resultado1 = "";
        mostrarOperacion.innerHTML = operacion;
        mostrarNumeros.innerHTML = resultado2;
    })

producto.addEventListener("click", (e)=>{
        operacion = "x";

        if(resultado2){
            resultado2 = parseInt(resultado1) * parseInt(resultado2);
        } else {
            resultado2 = resultado1;
        }
        resultado1 = "";
        mostrarOperacion.innerHTML = operacion;
        mostrarNumeros.innerHTML = resultado2;
    })

division.addEventListener("click", (e)=>{
        operacion = "/";

        if(resultado2){
            resultado2 = parseInt(resultado2) / parseInt(resultado1);
        } else {
            resultado2 = resultado1;
        }
        resultado1 = "";
        mostrarOperacion.innerHTML = operacion;
        mostrarNumeros.innerHTML = resultado2;
    })

borrar.addEventListener("click", (e)=>{ 
    resultado1 = resultado1.slice(0, -1);

    mostrarNumeros.innerHTML = resultado1;
    })
