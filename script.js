const ponteiroSeg = document.querySelector('.ponteiro__seg');
const ponteiroMin = document.querySelector('.ponteiro__min');
const ponteiroHora = document.querySelector('.ponteiro__hora');

// console.log(ponteiroHora, ponteiroMin, ponteiroSeg);

function acharHora() {
    const horaAtual = new Date();

    const segundos = horaAtual.getSeconds();
    const minutos = horaAtual.getMinutes();
    const hora = horaAtual.getHours();

    const segundosGraus = ((segundos / 60) * 360) + 90;
    ponteiroSeg.style.transform = `rotate(${segundosGraus}deg)`;
    ponteiroSeg.style.background = `rgb(255, 58, 58)`;
   
    const minutosGraus = ((minutos / 60) * 360) + ((segundos / 60) * 6) + 90;
    ponteiroMin.style.transform = `rotate(${minutosGraus}deg)`;

    const horaGraus = ((hora / 12) * 360) + ((minutos / 60) * 30) + 90;    
    ponteiroHora.style.transform = `rotate(${horaGraus}deg)`;

}

setInterval(acharHora, 1000); 
acharHora();
