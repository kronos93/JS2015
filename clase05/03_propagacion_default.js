(function(d) {
    'use strict';
    let container = d.getElementById('container');
    let btn = d.getElementById('btn-hora');
    btn.addEventListener('click', function(e) {
        console.log(e);
        console.log('Click en el boton');
        e.stopPropagation();
    });
    container.addEventListener('click', function() {
        console.log('Click en el container');
    });

})(document);

(function(d) {
    let enlace = document.getElementById('ir-google');
    enlace.addEventListener('click', function(e) {
        console.log("Serás redirigido a la página de google");
        e.preventDefault();
    });
})(document);