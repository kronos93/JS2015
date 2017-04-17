/*
    STRICT MODE
    Se activa añadiendo el string "use strict" en la primera linea del
    scope (se recomienda) que sea dentro de una funcion
 */
/*var nombre = "Marcos";*/

function saludar() {
    "use strict";
    var nombre = "Samuel";
    return "Hola " + nombre;
}
saludar();
/*console.log(nombre);*/
console.log("Continuación...");

/*
    THIS es una palabra reservada
*/
/*
    THIS dentro de una function
    Con use strict devuelve undefined
    Sin use strict retorna el objeto window u objeto global
*/

(function test() {
    "use strict";
    console.log(this);
})();

/*
    THIS dentro de un método hace referecia al objeto
 */
let persona = {
    nombre: 'Samuel',
    edad: 23,
    saludar: function() {
        return 'Hola, me llamo ' + this.nombre + ' y tengo ' + this.edad + ' años.';
    },
};
console.log(persona);
console.log(persona.saludar());

/*
    THIS en un event handler
    Hace referencia al elemento HTML que disparó el evento
*/

let btn = document.getElementById('btn');
console.log(btn);
btn.addEventListener('click', function(e) {
    "use strict";
    e.preventDefault();
    console.log(this);
    console.log(this.textContent);
});
/*
    CASO 4 
    this dentro de un constructor
*/
function Persona(nombre, edad) {
    "use strict";
    this.nombre = nombre;
    this.edad = edad;
}

let p = new Persona('Samuel', 18);
console.log(p);