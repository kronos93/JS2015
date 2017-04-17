(function(w, d) {
    let pais = d.getElementById('pais');
    pais.addEventListener('change', function() {
        console.log("Tu país es: " + this.value);
    });
})(window, document);

(function(w, d) {
    'use strict';
    var check = d.getElementById('check');
    check.addEventListener('change', function(e) {
        console.log(e);
        if (e.target.checked) {
            console.log('Haz activado el check');
        } else {
            console.log('Haz desactivado el check');
        }
    });
})(window, document);