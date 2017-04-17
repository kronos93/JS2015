(function() {
    "use strict";
    let fecha = new Date();
    console.log(fecha);
    // YYYY - MM (0 index 0-11) -DD
    let fecha_nacimiento = new Date(1993, 8, 1);
    console.log(fecha_nacimiento);
    //Métodos
    //getFullYear();
    //getDay(); 0 - 6 Dom - Sab
    //getDate()
    //getMonth()
    console.log(fecha_nacimiento.getFullYear());
    console.log(fecha_nacimiento.getMonth());
    console.log(fecha_nacimiento.getDate());
    console.log(fecha_nacimiento.getDay());
    //Día de la semana
    let dia = fecha.getDay();
    console.log(dia);
})();