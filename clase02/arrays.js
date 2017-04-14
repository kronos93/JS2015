//Arrays
let array = [1, 2, 3, "Hola", "Mundo", false];
console.log(array);
console.log(array.length);
console.log(array[3]);
array[6] = "Sexto valor";
array[2] = 4;
console.log(array);
console.log(array.indexOf("Hola"));
//Array to string con separado
let arrayToString = array.join(';');;
console.log(arrayToString);
console.log(typeof arrayToString);
//String a array
let cadena = "supercalifragilisticoespialidoso";
let stringToArray = cadena.split('');
console.log(stringToArray);
console.log(cadena[4]);
//Unir arrays
let array1 = ['a', 'b', 'c', 'd'];
let array2 = ['e', 'f', 'g', 'h'];
let array3 = array1.concat(array2);
console.log(array3);
//Añadir elementos
//Al inicio
array1.unshift('z', 'y');
console.log(array1);
//Al final
array1.push('x', 'w');
console.log(array1);
//Quitar elementos
//Al inicio
//Retorna el elemento eliminado
let del = array1.shift();
console.log(array1);
console.log(del);
//Al final
let del2 = array1.pop();
console.log(array1);
console.log(del2);

//Crear arrays a partir de otros
let arrayA = [1, 2, 3, 4, 5, 6];
console.log(arrayA);
let arrayB = arrayA.slice(2, 4);
console.log(arrayB);
//Obtener elementos de un array
let arrayC = arrayA.splice(1, 2);
console.log(arrayA);
console.log(arrayC);

let arrayD = [1, 2, 3, 4, 5];
console.log(arrayD.splice(2, 1));
console.log(arrayD);

//Splice puede añadir y quitar elementos
let arrayE = [1, 2, 3, 4, 5];
arrayE.splice(2, 0, 'a', 'b', 'c');
console.log(arrayE);
let arrayF = [1, 2, 3, 4, 5];
arrayF.splice(2, 2, 'a', 'b', 'c');
console.log(arrayF);