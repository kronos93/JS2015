var miVariable = "Estoy afuera"; //Global

function saludar() {
    var nombre = "Samuel"; //Local
    console.log("Hola " + nombre);
    console.log(miVariable);
}

saludar();
console.log(miVariable);

function despedirse() {
    var nombre = "Sam";
    console.log("Adios " + nombre);
}
despedirse();
//console.log(nombre); No esta en el scope

var heroe = "Batman";

function llamarHeroe() {
    /*var heroe = "Linterna verde";*/
    heroe = "Linterna verde";
}
/*llamarHeroe();*/
console.log(heroe);