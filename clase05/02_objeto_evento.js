(function() {
    'use strict';
    let btn = document.getElementById('btn-hora');
    btn.addEventListener('click', function(e) {
        console.log(e);
        console.log(e.target);
        console.log(this);
    });
})();

(function(w) {
    'use strict';
    w.addEventListener('mousedown', function(e) {
        console.log(e.which);
        if (e.which === 3) {
            alert('Esta prohibido copiar contenido de esta página');
            e.preventDefault();
        }
    });
})(window);