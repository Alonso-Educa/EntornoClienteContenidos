// Control de flujo
// If/else
// switch
// di while
// while
// for
// for con in
// for con of
// try catch

let frutas = ["platano", "manzana", "melocoton", "uva"];

// For con in
console.log("\nFor con in (Array)");
for(const i in frutas){
    console.log(i+". "+frutas[i]);
}

console.log("\nFor con in (Objeto)");

let gato = { especie: "gato", altura: 40, edad: 5, terrestre: true };
for(const attr in gato){
    console.log(attr+": "+gato[attr]);
}

// Terminar la versión con eval
let ballena = { especie: "ballena", altura: 1400, edad: 40, terrestre: false };
for(const attr in ballena){
    console.log(attr+": "+ballena[attr]);
}

// for con of (=== foreach)
console.log("\nFor con of (Array)");
for (const i of frutas){
    console.log(frutas.indexOf(i)+". "+i);
}

console.log("\nFor con of (Objeto)");
// let perro = { especie: "perro", altura: 80, edad: 6, terrestre: true };
// for (const i of perro){
//     console.log(i);
// }

// For each
console.log("\nFor each");
fruta => console.log(frutas);