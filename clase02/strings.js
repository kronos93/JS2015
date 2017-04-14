let cadena = "Hola Hola mundo";
console.log(cadena);
console.log(cadena.length);
//Encontrar un caracter en un string
console.log(cadena.indexOf('a')); // >= 0 posición
console.log(cadena.indexOf('s')); // == -1 no existe
//Convertir cadena a MAYUSCULAS
console.log(cadena.toUpperCase());
//Convertir cadena a minisculas
console.log(cadena.toLowerCase());
console.log(cadena);

let newCadena = cadena.replace("Hola", 'Saludos');
console.log(newCadena);
//Substring no acepta negativos
let cad = cadena.substring(0, 3);
console.log(cad);
let cad2 = cadena.substring(1);
console.log(cad2);
//substring con negativos
let cadenaSlice = cadena.slice(2, -3);
console.log(cadenaSlice);
//Eliminar espacios en blanco de cadenas al inicio y al final de una cadena
let trimCad = "    Hola     mundo     ";
console.log(trimCad.trim());