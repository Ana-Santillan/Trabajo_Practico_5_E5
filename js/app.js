let intervalo;
let segundos = 0;
let minutos = 0;
let horas = 0;

const tiempo = document.getElementById('tiempo');
const iniciarBoton = document.getElementById('iniciar');
const pausarBoton = document.getElementById('pausar');
const reiniciarBoton = document.getElementById('reiniciar');

function iniciarTiempo() {
    intervalo = setInterval(() => {
        segundos++;
        if (segundos === 60) {
            segundos = 0;
            minutos++;
        }
        if (minutos === 60) {
            minutos = 0;
            horas++;
        }
        tiempo.textContent = `${horas.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;
    }, 1000);
}

function pausarTiempo() {
    clearInterval(intervalo);
}

function reiniciarTiempo() {
    clearInterval(intervalo);
    segundos = 0;
    minutos = 0;
    horas = 0;
    tiempo.textContent = '00:00:00';
}

iniciarBoton.addEventListener('click', iniciarTiempo);
pausarBoton.addEventListener('click', pausarTiempo);
reiniciarBoton.addEventListener('click', reiniciarTiempo);