"use strict";

let a = [4, 0, 3, 4, 7, 3, 5, 8, 1, 8, 8, 0, 2, 3, 1, 2, 5, 7, 3, 2, 5, 1];
let arrayNuevo = [];
console.log("Array original: " + a);

for (let i = 0; i < a.length; i++) {
  if (arrayNuevo.indexOf(a[i]) == -1) {
    arrayNuevo.push(a[i]);
  }
}

console.log("Array sin repetir y ordenado: " + arrayNuevo());
