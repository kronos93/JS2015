function saludo(nombre) { //Parametro
    console.log('Hola ' + nombre);
}
console.log(saludo);
saludo('Samuel'); //Argumento


function mult(a, b) {
    console.log(a * b);
    console.log(arguments);
}
mult(96, 64);

function dolaresToPesos(dolar) {
    console.log(dolar * 20);
}
dolaresToPesos(100);
//Ignora los demás parametros
dolaresToPesos(100, 200);
//Los demás parametros se vuelven undefinied
mult(100);

function sumar() {
    let suma = 0;
    let l = arguments.length;
    let i = 0;

    while (i < l) {
        suma += arguments[i];
        i++;
    }
    return suma;
}

let resultado = sumar(1, 2, 3, 4, 5, 6, 7);
console.log(resultado);


///Por su nombre
//Nombradas
function sum(a, b) {
    return a + b;
}
console.log(sum(1, 2));
//Anonimas
var sumAnonimo = (function(a, b) {
    return a + b;
})(20, 4);
console.log(sumAnonimo);

(function saludar() {
    console.log('Hola mundo');
})();
//Por su construcción
//Por declaracion
function miFunction() {
    console.log('Soy una función');
}

//Por expresión
var fn = function() {
    console.log('Expresión');
};
fn();

//Hoisting

fnSaludar();
//Funciona por elevación
function fnSaludar() {
    console.log("Saludando");
}
//No funciona
/*var fnSaludar = function() {
    console.log("Saludando");
}*/