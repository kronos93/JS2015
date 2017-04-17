let mascota = {
    tipo: 'perro',
    nombre: 'Dino',
    color: 'negro',
    ladrar: function() {
        return 'Roar!!!!!';
    },
    llamar: function() {
        return this.nombre + ' ven aquí';
    }

};

console.log(mascota);
console.log(mascota.nombre);
console.log(mascota.ladrar());
console.log(mascota.llamar());

let cadena = "Cadena literal";
let cadena2 = new String('Soy otra cadena en modo objeto');
console.log(cadena);
console.log(cadena2);
console.log(cadena2.length);

//Getter
console.log(mascota.nombre);
console.log(mascota.color);
console.log(mascota.ladrar());
//Setter
mascota.peso = "10k";
mascota.raza = "Coquer";
mascota.jugar = function() {
    return this.name + ' jugando...';
};
console.log(mascota);
console.log(mascota.jugar());