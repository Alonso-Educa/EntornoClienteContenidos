"use strict";

// Ejercicio de expresiones regulares: A partir de una cadena CSV, almacenar en un array de forma ordenada

var cadenaCSV =
  "Ana,34567881A,983123456,47030,8948RGH,34534534,Luis,81233234H,912323232,38012,2145SDC,Marta,87654321Q,671223344,23456,4532PLF,Jose Luis,98765432W,4567KJL";

// ┌─────────┬─────────────┬─────────────┬─────────────┬─────────┬───────────┐
// │ (index) │ 0 │ 1 │ 2 │ 3 │ 4 │
// ├─────────┼─────────────┼─────────────┼─────────────┼─────────┼───────────┤
// │ 0 │ 'Ana' │ '34567881A' │ '983123456' │ '47030' │ '8948RGH' │
// │ 1 │ 'Luis' │ '81233234H' │ '912323232' │ '38012' │ '2145SDC' │
// │ 2 │ 'Marta' │ '87654321Q' │ '671223344' │ '23456' │ '4532PLF' │
// │ 3 │ 'Jose Luis' │ '98765432W' │ '' │ '' │ '4567KJL' │
// └─────────┴─────────────┴─────────────┴─────────────┴─────────┴───

let a = cadenaCSV.match(/[A-Z]\w*,\d{8}\w(,[69]\d{8})?(,\d{5})?(,\d{4}\w{3})?/g);
let nombre = [],
  dni = [],
  tlfn = [],
  n1 = [],
  n2 = [];
for (let i = 0; i < a.length; i++) {
  let elemento = a[i].split(",");
  nombre[i] = elemento[0];
  elemento.forEach((dato) => {
    if(dni[i]=== null || dni[i]=== undefined){dni[i] = dato.match(/^\d{8}[A-Z]$/);} 
    if(tlfn[i]=== null || tlfn[i]=== undefined){tlfn[i] = dato.match(/^[69]\d{8}$/)};
    if(n1[i]=== null || n1[i]=== undefined){n1[i] = dato.match(/^\d{5}$/)};
    if(n2[i]=== null || n2[i]=== undefined){n2[i] = dato.match(/^\d{4}\w{3}$/)};
  });
}
for (let i = 0; i < nombre.length; i++) {
  console.log("Persona " + i + ": ");
  console.log("Nombre: " + nombre[i]);
  console.log("DNI: " + dni[i]);
  console.log("Teléfono: " + tlfn[i]);
  console.log("Dato 1: " + n1[i]);
  console.log("Dato 2: " + n2[i] + "\n");
}
