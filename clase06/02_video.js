(function(d) {
    'use strict';
    let video = d.getElementById('video');
    /*video.volume = 0.75;
    video.currentTime = 4;*/
    let play = d.getElementById('play');
    let time = d.getElementById('time');
    play.addEventListener('click', function() {
        if (this.textContent === 'Play') {
            video.play();
            this.textContent = 'Pause';
        } else {
            video.pause();
            this.textContent = 'Play';
        }

    });
    video.addEventListener('play', function() {
        console.log('Reproduciendo');

    });
    video.addEventListener('pause', function() {
        console.log('Pausado');
    });
    video.addEventListener('ended', function() {
        console.log('Finalizado');
    });
    let playTime = setInterval(function() {
        time.textContent = Math.floor(video.currentTime);
    }, 1);
    video.addEventListener('play', playTime);
    let volume = d.getElementById('volume');
    volume.addEventListener('change', function() {
        console.log(this.value);
        video.volume = this.value * 0.01;
    });

})(document);