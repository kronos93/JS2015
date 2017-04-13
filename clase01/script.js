console.log(document.body);
//Casesensitive
let hola = "Saludos desde hola";
let Hola = "Saludos desde Hola";

console.log(hola);
console.log(Hola);

console.log(hola == Hola);
//Tipado dinamico
let _var = "cadena";
console.log(typeof _var);
_var = 20;
console.log(typeof _var);

let saludar = function() {
    console.log("Hola, buen día");
};
saludar();

let Persona = {
    nombre: 'Samuel',
    apellidos: 'Rojas',
    edad: 18
};
console.log(Persona);

let nombre = "Samuel";
console.log(nombre);