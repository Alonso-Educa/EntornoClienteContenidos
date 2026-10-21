"use strict";

// Tarea de ejemplos de reduce():
// ac => ac; ac, n => ac + n; ac, n i => ac+n+io; ac, n,i,a=> ac+n+i+a[2]; ac,n
console.log("\nPruebas usando reduce() con distintos parámetros:");
let a = [1, 2, 4, 6, 9];
console.log(a.reduce(ac => ac)); // ac => ac: devuelve el acumulador, que es siempre el primer elemento = 1
console.log(a.reduce((ac, n) => ac + n)); // ac + n: 1 + 2 + 4 + 6 + 9 = 22
console.log(a.reduce((ac, n) => ac + n, 100)); // Operación anterior + 100 (100 es acumulador / valor inicial ya que se especifica)
console.log(a.reduce((ac, n, i) => ac + n + i)); // ac + n + i: (1 + 2 + 1) = 4; (4 + 4 + 2) = 10; (10 + 6 + 3) = 19; (19 + 9 + 4) = 32
console.log(a.reduce((ac, n, i, a) => ac + n + i + a[2])); // ac + n + i + a[2] (a[2] = 4): (1 + 2 + 1 + 4) = 8; (8 + 4 + 2 + 4) = 18; (18 + 6 + 3 + 4) = 31; (31 + 9 + 4 + 4) = 48
console.log("");

let b = [10, 20, 30];
console.log(b.reduce(ac => ac)); // ac => ac: devuelve el acumulador, que es siempre el primer elemento = 1
console.log(b.reduce((ac, n) => ac + n)); // ac + n: 
console.log(b.reduce((ac, n) => ac + n, 100)); // Operación anterior + 100 (100 es acumulador / valor inicial ya que se especifica)
console.log(b.reduce((ac, n, i) => ac + n + i)); // ac + n + i: 
console.log(b.reduce((ac, n, i, a) => ac + n + i + a[2]));
console.log("");

// Con acumulador 0 es lo mismo
console.log(b.reduce(ac => ac, 0)); // ac => ac: devuelve el acumulador, que se ha especificado 0
console.log(b.reduce((ac, n) => ac + n, 0)); // ac + n: 
console.log(b.reduce((ac, n) => ac + n, 100, 0)); // Operación anterior + 100 (100 es acumulador / valor inicial ya que se especifica)
console.log(b.reduce((ac, n, i) => ac + n + i, 0)); // ac + n + i: 
console.log(b.reduce((ac, n, i, a) => ac + n + i + a[2], 0));
console.log("\n-----\n");

const b2 = ['a', 'b'];
// console.log(b2.map(b => b+ 'x'));
console.log(b2);
let arrayNuevo = b2.map((b, i) => b + i);
console.log(b2);
console.log(arrayNuevo);
console.log(typeof (b2));
arrayNuevo.forEach(element => {
    console.log("Buenos dias");
    console.log(element);
});
console.log(arrayNuevo);

console.log("\nImpresión de valores");
// No se toma en cuenta el primer elemento
console.log("final (38): " + [10, 25, 38].reduce((ac, n) => {
    console.log("ac: " + ac);
    console.log("valor: " + n);
    return n;
}));
console.log("");

console.log("final (38): " + [10, 25, 38].reduce((ac, n) => {
    console.log("ac: " + ac);
    console.log("valor: " + n);
    return n;
}, 0));

console.log("\nSuma:");
console.log("suma (73): " + [10, 25, 38].reduce((ac, n) => {
    console.log("ac: " + ac);
    console.log("valor: " + n);
    return ac + n;
}, 0));


console.log("\nSuma con indice:");
console.log("final: " + b.reduce((ac, n, i) => {
    console.log("ac: " + ac);
    console.log("valor: " + n);
    console.log("indice: " + i);
    return ac + n + i;
}));
console.log("");

console.log("final: " + b.reduce((ac, n, i) => {
    console.log("ac: " + ac); // 0 / 10 / 31
    console.log("valor: " + n); // 10 / 20 / 30
    console.log("indice: " + i); // 0 / 1 / 2
    return ac + n + i; // 0 + 10 + 0 = 10 / 31 / 63
}, 0));
console.log("");

let c = ['a', 'b', 'c'];
console.log("\nSuma con indice y valores de texto:");
console.log("final: " + c.reduce((ac, n, i) => {
    console.log("ac: " + ac); // a / ab1
    console.log("valor: " + n); // b / c
    console.log("indice: " + i); // 1 / 2
    return ac + n + i; // ab1 / ab1c2
}));
console.log("");

let hacerFelizALaura = function () {
    return c.reduce((ac, n, i, a) => {
        return ac + n + i + b[2];
    });
}
console.log(hacerFelizALaura());

let hacerFelizALaura2 = c.reduce((ac, n, i, a) => {
    return ac + n + i + b[2];
});
console.log(hacerFelizALaura2);

// Convertir (ac, n, i, a) => ac + n + i + 40
function reduceInverso() {
    let ac = b[0];
    for (let i = 1; i < b.length; i++) {
        let n = b[i]; // 10 -> 20 -> 30
        ac += (n + i + b[2]); // 10 + 0 + 30 = 40 -> 
    }
    return ac;
}
console.log(reduceInverso());

console.log(b.reduce((ac, n, i, a) => hacerFelizALaura3(ac, n, i, a)));
console.log(b.reduce(hacerFelizALaura3)); // también funciona sin declararse como función flecha
function hacerFelizALaura3(ac, n, i, a) {
    return ac + n + i + a[2];
}