(function(w, d) {

})(window, document);

/*let string = "Hola mundo";
String.prototype.miPropiedadSecreta = "Secreta";
let string2 = "Adios mundo";*/

/*function Pais(nombre, capital) { //Función constructura
    this.nombre = nombre;
    this.capital = (capital) ? capital : 'default';
    this.saludo = function() {
        return 'Bienvenido ' + this.nombre;
    };
}

var peru = new Pais('Perú', 'Lima');
var mexico = new Pais('México', 'México');
var colombia = new Pais('Colombia', 'Bogota');*/

function Persona(nombre, apellidos) {
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.nombreCompleto = this.nombre + ' ' + this.apellidos;
}
Persona.propiedadEstatica = 'Default';
let yo = new Persona('Samuel');
yo.nombre = "Jose";

let amigo = new Persona('Nestor', 'Tec');


function Mascota() {
    var nombre = "Solobino";

    this.llamar = function() {
        return nombre + ', ven aquí';
    };
}
var miMascota = new Mascota();


function Calculos() {

}
//Metodos estaticos
Calculos.piesAMetros = function(pies) {
    return pies * 0.3048;
};

console.log(Calculos.piesAMetros(5));

var miCalculo = new Calculos();

function Person(nombre) {
    this.nombre = nombre;
    /*this.saludar = function() {
        return 'Hola soy ' + this.nombre;
    };*/
}
Person.prototype.saludar = function() {
    return 'Hola soy ' + this.nombre;
};
var p1 = new Person('Jose');
var p2 = new Person('Pepe');