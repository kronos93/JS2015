(function() {
    'use strict';
    var alerta = function() {
        console.log('click');
    };
    /*addEventListener('click', alerta);*/
})();


(function() {
    let btnHora = document.getElementById('btn-hora');
    btnHora.addEventListener('click', function() {
        let fecha = new Date();
        let h = fecha.getHours();
        let m = fecha.getMinutes();
        let s = fecha.getSeconds();
        console.log(h + ' : ' + m + ' : ' + s);
    });
})();
(function(w) {
    'use strict';
    w.addEventListener('resize', function() {
        let ancho = w.innerWidth;
        let alto = w.innerHeight;
        console.log('La ventana en ancho mide: ' + ancho + ' y en alto mide: ' + alto);
    });
})(window);