const hora = document.querySelector('#hora');
const min = document.querySelector('#min');
const sec = document.querySelector('#sec');

setInterval(() =>{
    let date = new Date();
    let horas = date.getHours();
    let minutos = date.getMinutes();
    let segundos = date.getSeconds();

    hora.innerHTML = `${formatTime(horas)}`;
    min.innerHTML = `${formatTime(minutos)}`;
    sec.innerHTML = `${formatTime(segundos)}`;
}, 1000);

function formatTime(time){
    return time <10 ? "0" + time : time;
}