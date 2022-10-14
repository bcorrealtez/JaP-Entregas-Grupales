const rel = document.getElementById('reloj');
const minuto = document.getElementById('h');
const segundos = document.getElementById('m');
const ms = document.getElementById('s');
const start = document.getElementById('start');
const stop = document.getElementById('stop');
const restart = document.getElementById('restart');
var interval1;

function reiniciar() {
    minuto.value = 0;
    segundos.value = 0;
    ms.value = 0;
}

function detener(interval1) {
    clearInterval(interval1)
}

function iniciar() {
    interval1 = setInterval(() => {
        if (minuto.value==59) {
            detener(interval1)
        }
        if (segundos.value==59) {
            segundos.value = 0;
            minuto.value = parseInt(minuto.value)+1;
        }
        if (ms.value==999) {
            ms.value = 0;
            segundos.value = parseInt(segundos.value)+1;
        }
        ms.value = parseInt(ms.value)+1;
    }, 1);
}


start.addEventListener('click', ()=>{
    iniciar()
});
stop.addEventListener('click', ()=>{
    detener(interval1)
});

restart.addEventListener('click', ()=>{
    reiniciar()
});