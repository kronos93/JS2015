(function() {
    "use strict";
    console.log(Math.PI);
    console.log(Math.E);

    let numero = 3.55;

    //Redondea hacia arriba
    let resultado = Math.ceil(numero);
    console.log(resultado);
    //Redondea hacia abajo
    resultado = Math.floor(numero);
    console.log(resultado);
    //Redondea segun el valor
    resultado = Math.round(numero);
    console.log(resultado);
    //Número aleatorio entre 0 y 5
    let aleatorio = Math.random();
    console.log(aleatorio);
    let min = 10;
    let max = 18;
    aleatorio = Math.floor(Math.random() * (max - min)) + min;
    console.log(aleatorio);
})();

//JSON JavaScript Object Notation