//Loops
let letras = ['a', 'b', 'c', 'd', 'f'];
let n_letras = letras.length;
let i = 0
for (i; i < n_letras; i++) {
    console.log(letras[i]);
}
i = 0;
while (i < n_letras) {
    console.log(letras[i]);
    i++;
}
//Al menos procesa el bloque una vez
i = 0;
do {
    console.log(letras[i]);
    i++;
} while (i < n_letras);

for (let letra in letras) {
    console.log(letras[letra]);
}