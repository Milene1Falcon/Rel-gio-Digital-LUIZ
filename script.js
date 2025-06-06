
const musicas = [
    { nome: 'The Woods', path: 'audio/Holow Coves - The Woods (Official Music Video).mp3', artista: 'Hollow Coves' },
    { nome: 'Home', path: 'audio/Edward Sharpe & The Magnetic Zeros - Home (Official Video).mp3', artista: 'Edward Sharpe & The Maginetic Zeros' }
];


const horas = document.getElementById ('horas');
const minutos = document.getElementById ('minutos');
const segundos = document.getElementById ('segundos');

const relogio = setInterval(function time() {
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let s = dateToday.getSeconds();

    if (hr < 10) hr = '0' + hr;

    if (min < 10) min = '0' + min;

    if (s < 10) s = '0' + s;

    horas.textContent = hr + '';
    minutos.textContent = min + '';
    segundos.textContent = s;

})

let musica = document.querySelector('audio');

document.querySelector('.icon2').addEventListener('click', tocarMusica);

document.querySelector('.icon1').addEventListener('click', pausarMusica);

musica.addEventListener('timeupdate', atualizarBarra);

function tocarMusica(){
    musica.play();
    document.querySelector('.icon2').style.display = 'none';
    document.querySelector('.icon1').style.display = 'block';
}

function pausarMusica(){
    musica.pause();
    document.querySelector('.icon2').style.display = 'block';
    document.querySelector('.icon1').style.display = 'none';
}

function atualizarBarra(){
    let barra = document.querySelector('progressbar');
    progressbar.style.width = musica.currentTime
}