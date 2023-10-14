const ponteiroHora = document.querySelector('.ponteiro__hora');
const ponteiroMin = document.querySelector('.ponteiro__min');
const ponteiroSeg = document.querySelector('.ponteiro__seg');

// console.log(ponteiroHora, ponteiroMin, ponteiroSeg);

function acharHora() {
    const horaAtual = new Date();
    const segundos = horaAtual.getSeconds();
    const minutos = horaAtual.getMinutes();
    const hora = horaAtual.getHours();

    return segundos, minutos, hora;
   
    

}


acharHora();