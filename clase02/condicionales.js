//Condicionales
if (!true) {
    console.log('Bloque 1 if');
} else if (true) {
    console.log('Bloque 2 if');
} else if (true) {
    console.log('Bloque 3 if');
} else {
    console.log('Final');
}
console.log("Continuación...");

let edad = 100;
if (edad > 0 && edad <= 10) {
    console.log('Eres un niño');
} else if (edad >= 11 && edad < 20) {
    console.log('Eres un adolescente');
} else if (edad > 21) {
    console.log('Eres mayor de edad');
}
let today = new Date();
let day = today.getDay();
switch (day) {
    case 0:
        console.log('domingo');
        break;
    case 1:
        console.log('lunes');
        break;
    case 2:
        console.log('martes');
        break;
    case 3:
        console.log('miercoles');
        break;
    case 4:
        console.log('jueves');
        break;
    case 5:
        console.log('viernes');
        break;
    default:
        console.log('Hubo un error');
        break;
}
let calf = 6;
let resultado = (calf >= 7) ? 'Pasaste' : 'Reporbaste';
console.log(resultado);