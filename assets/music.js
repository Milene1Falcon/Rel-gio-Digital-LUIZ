function formatTime(...args) { 
    return args.map(arg => (arg < 10 ? '0' : '') + arg).join(':');
}

const musicas = [
    { nome: 'The Woods', path: 'audio/Hollow Coves - The Woods (Official Music Video).mp3', artista: 'Hollow Coves' },
    { nome: 'Home', path: 'audio/Edward Sharpe & The Magnetic Zeros - Home (Official Video).mp3', artista: 'Edward Sharpe & The Maginetic Zeros' },
    { nome: 'Back One Day', path: 'audio/TheFatRat & NEFFEX - Back One Day (Outro Song).mp3', artista: 'TheFatRat e NEFFEX' },
    { nome: 'Stars', path: 'audio/Skillet - Stars [Official Video].mp3', artista: 'Skillet' }
];

let index = 0;

const musica = document.querySelector('audio');
const barraDeProgresso = document.querySelector('#progressbar');
const timeLabel = document.querySelector('#current-time');
const durationLabel = document.querySelector('#total-duration');


document.querySelector('.icon2').addEventListener('click', tocarMusica);
document.querySelector('.icon1').addEventListener('click', pausarMusica);



function tocarMusica(){
    musica.play();
    
    document.querySelector('.icon2').style.display = 'none';
    document.querySelector('.icon1').style.display = 'block';

    requestAnimationFrame(atualizarBarra);
}

function pausarMusica(){
    musica.pause();
    document.querySelector('.icon2').style.display = 'block';
    document.querySelector('.icon1').style.display = 'none';
}


document.querySelector('.fa-backward-step').addEventListener('click', () => {
    index = (--index + musicas.length) % musicas.length;
    mudarTocarMusica(index);
});

document.querySelector('.fa-forward-step').addEventListener('click', () => {
    index = (++index + musicas.length) % musicas.length;
    mudarTocarMusica(index);
});


function atualizarBarra(){
    barraDeProgresso.value = musica.currentTime;

    let rawSegundos = Math.floor(musica.currentTime);

    let minutos = Math.floor(rawSegundos / 60);
    let segundos = rawSegundos % 60;

    timeLabel.textContent = formatTime(minutos, segundos);

    if(!musica.paused && !musica.ended)
        requestAnimationFrame(atualizarBarra);
}

barraDeProgresso.addEventListener('input', (e) => {
    musica.currentTime = e.target.value;
    let rawSegundos = Math.floor(musica.currentTime);

    let minutos = Math.floor(rawSegundos / 60);
    let segundos = rawSegundos % 60;

    timeLabel.textContent = formatTime(minutos, segundos);
});


function mudarMusica(index) {
    musica.src = musicas[index].path
    
    musica.addEventListener('loadedmetadata', () => {
        let rawSegundos = Math.floor(musica.duration);
        let minutos = Math.floor(rawSegundos / 60);
        let segundos = rawSegundos % 60;
        
        barraDeProgresso.min = 0;
        barraDeProgresso.step = 0.0000001;
        barraDeProgresso.max = musica.duration;
        durationLabel.textContent = formatTime(minutos, segundos);
    });
}

function mudarTocarMusica(index) {
    mudarMusica(index);
    tocarMusica();
}


mudarMusica(0);


document.addEventListener('click', () => {
    tocarMusica();
}, { once: true });
