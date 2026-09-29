"use strict";
// Amplian los strings y añaden fncionalidad adicional

// 1. Interpolación
console.log("\n1. Interpolación:");
let a = 1,
  b = 2;
console.log('Suma: ${a+b}');
console.log("Suma: ${a+b}"); // Ni comilla simple ni doble permiten intepolacion
console.log(`Suma: ${a + b}`);

// 2. String de varias lineas
console.log("\n2. String de varias lineas:");
let s = `linea1 linea2`;
console.log(s);
s = `linea1 
linea2`;
console.log(s);
console.log(`Voy a pintar un string muy largo Voy a pintar un string muy largo Voy a pintar un string muy largo 
Voy a pintar un string muy largo Voy a pintar un string muy largo 
Voy a pintar un string muy largo Voy a pintar un string muy largo. `);
let f = new Date();
console.log(`Año: ${f.getFullYear},
    Mes: ${f.getMonth}, Dia: ${f.getDate}`); // Arreglar (sale [native code])


// 3. Definicion de funcion para uso de plantillas etiquetadas
console.log("\n3. Definicion de funcion para uso de plantillas etiquetadas:");
function foo(texto, p1, p2, p3) {
  console.log(texto, p1, p2, p3);
  return `La suma es: ${`${p1} + ${p2} + ${p3} = `+(p1+p2+p3)}`;
}
let res = foo`La suma de ${a} y ${b} es ${a + b}`;
console.log(res);

function suma(a, b, c, d) {
  if (a != undefined && b != undefined) {
    return a + b + c + d;
  }
}
console.log(suma(5, 7));
console.log(suma("hola", "adios"));
console.log(suma());