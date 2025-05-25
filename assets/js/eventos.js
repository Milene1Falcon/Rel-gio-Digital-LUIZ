const controls = document.querySelector("#controls");
let index = 0;
let currentMusic;
let isPlaying = false;

controls.addEventListener("click", function (event) {
    const audios = [];
    let music = {};
    if (event.target.id != "controls") {
      const musics =
        event.path[2].childNodes;
}}