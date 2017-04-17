(function(w) {
    'use strict';
    w.addEventListener('keyup', function(e) {
        console.log(e.which);
        switch (e.which) {
            case 65:
                console.log('Presionaste la tecla a');
                break;
            case 66:
                console.log('Presionaste la tecla b');
                break;
        }
    });
})(window);

(function(w) {
    'use strict';
    w.addEventListener('keydown', function(e) {
        if (e.ctrlKey === true && e.altKey === true && e.which === 89) {
            console.log('Bienvenido al juego');
        }
    });
})(window);


(function(w, d) {
    let keylogger = d.getElementById('psw');
    let keylog = "";
    keylogger.addEventListener('keyup', function() {
        keylog = this.value;
        console.log(keylog);
    });
})(window, document);