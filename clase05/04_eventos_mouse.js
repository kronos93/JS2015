(function(w, d) {
    'use strict';

    function dibujar(e) {
        let punto = d.createElement('div');
        punto.classList.add('punto');
        punto.style.left = (e.pageX - 10) + 'px';
        punto.style.top = (e.pageY - 10) + 'px';
        d.body.appendChild(punto);
    }
    w.addEventListener('mousedown', function() {
        w.addEventListener('mousemove', dibujar);
        w.addEventListener('mouseup', function() {
            w.removeEventListener('mousemove', dibujar);
        });
    });


})(window, document);