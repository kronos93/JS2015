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