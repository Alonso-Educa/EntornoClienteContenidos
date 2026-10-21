"use strict";

console.log("Tarea de funciones flecha");

// Escribir la siguientes funciones flecha que admitan el array a=[1,2,3,4] como parámetro.
let a = [1, 2, 3, 4];

// Una función f1 que devuelva un array con los números que sean el resultado de multiplicar cada elemento por 3, filtrando los resultantes no divisibles por 4.
let f1 = a => a.filter(valor => valor % 4 == 0).map(valor => valor *= 3);
console.log("\nFunción 1: ");
console.log(f1(a));

// Una función f2 visualice en consola los elementos que no sean divisibles por 2.
let f2 = a => a.filter(valor => valor % 2 != 0).forEach(element => console.log(element));
console.log("\nFunción 2: ");
f2(a);

// Una función f3 que devuelva la suma de todos los elementos que estén en una posición par.
let f3 = a => a.filter((valor, i) => i % 2 == 0).reduce((ac, n) => ac + n);
console.log("\nFunción 3: ");
console.log(f3(a));