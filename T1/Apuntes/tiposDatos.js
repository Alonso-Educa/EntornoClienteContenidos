// Tipos de datos en JavaScript
console.log("\nTipos de datos en JavaScript:");
let numero1 = 1; console.log(numero1 + " " + typeof numero1); // number
let numero2 = 0.1; console.log(numero2 + " " + typeof numero2); // number
let booleano = true; console.log(booleano + " " + typeof booleano); // boolean
let cadena = "Hola"; console.log(cadena + " " + typeof cadena); // string
let nulo = null; console.log(nulo + " " + typeof nulo); // null / object
let indefinido = undefined; console.log(indefinido + " " + typeof indefinido); // undefined
let objeto = { nombre: "Juan", edad: 30, a: 1 }; console.log(objeto + " " + typeof objeto); // object

// Se pueden cambiar los tipos de variables durante la ejecución
console.log("\nCambio de tipos de variables durante la ejecución:");
let a = 123; console.log("a: " + a + ", tipo: " + typeof a); // number
a = "Hola"; console.log("a: " + a + ", tipo: " + typeof a); // string

// Las variables son sensibles a mayúsculas y minúsculas (case sensitive)
// console.log(a); // Imprime a
// console.log(A); // Error: A is not defined

// Con constructor.name se puede obtener el tipo de dato de una variable
console.log("\nTipos de datos con constructor.name:");
console.log(cadena.constructor.name); // String
console.log(String.constructor.name); // Function
console.log(numero1.constructor.name); // Number
console.log(booleano.constructor.name); // Boolean
console.log(objeto.constructor.name); // Object
// console.log(nulo.constructor.name); // Error: No se puede usar con null
// console.log(indefinido.constructor.name); // Error: Solo se puede usar con variables definidas

// Se puede declarar una variable sin usar let, var o const, pero no es recomendable
console.log("\nDeclaración de variables sin let, var o const:");
dato = 123; console.log(dato); // Number

// Si se pone "use strict"; al inicio del archivo, se activa el modo estricto y no se permite hacer esto último
// "use strict"; // Se recomienda usar strict mode al inicio del archivo para evitar errores

// Las variables constantes no se pueden cambiar de valor
// const b = 123; console.log(b); 
// b++; console.log(b); // Error: Assignment to constant variable.

// // Ámbito de las variables (let)
// console.log("\nÁmbito de las variables (let):");
// let a1 = 1; // Ámbito global
// console.log(a1); // 1
// console.log(a2);
// console.log(a3);
// console.log(a4);

// //
// { // Ámbito de bloque
//     let a2 = 2;
//     console.log(a1);
//     console.log(a2); // 2
//     console.log(a3);
//     console.log(a4);
// }
// function f() { // Ámbito de función
//     let a3 = 3;
//     console.log(a1);
//     console.log(a2);
//     console.log(a3); // 3
//     console.log(a4);
//     if (true) { // Ámbito de bloque
//         let a4 = 4;
//         console.log(a1);
//         console.log(a2);
//         console.log(a3);
//         console.log(a4); // 4   }
//     }
// }
// f();

// // Ámbito de las variables (var)
// // console.log("\nÁmbito de las variables (var):");
// // var c = 1; // Ámbito global: Error ya que la variable c ya fue declarada con let
// // console.log(c); // 1
// // //
// // { // Ámbito de bloque: Error ya que la variable c ya fue declarada con let
// //     var c = 2;
// //     console.log(c); // 2
// // }
// function f() { // Ámbito de función: 
//     var c = 3;
//     console.log(c); // 3
//     if (true) { // Ámbito de bloque
//         var c = 4;
//         console.log(c); // 4
//     }
// }
// f();

// // Ámbito de las variables (sin declaración)
// console.log("\nÁmbito de las variables (sin declaración):");
// c = 5; // Ámbito global
// console.log(c); // 5
// //
// { // Ámbito de bloque
//     c = 6;
//     console.log(c); // 6
// }
// function f() { // Ámbito de función
//     c = 7;
//     console.log(c); // 7
//     if (true) { // Ámbito de bloque
//         c = 8;
//         console.log(c); // 8
//     }
// }
// f();

// Hoisting: Las variables declaradas con var se elevan al inicio del ámbito, pero no su valor
console.log("\nHoisting con let y const:");
// console.log(d); // Error: Cannot access 'd' before initialization
let d = 6;
console.log(d); // 6

console.log(e); // undefined
var e = 5;
console.log(e); // 5

// Las funciones IIFE (Immediately Invoked Function Expression) son funciones autoinvocadas 
// que permiten encapsular variables mediante var creando un ámbito local
// También se pueden declarar sin nombre pero no se podrían reutilizar
console.log("\nFunciones IIFE (Immediately Invoked Function Expression):");
resultado = (function (n) { // Función anónima
    var saludo = "Hola ";
    console.log(saludo + n); // Hola Juan
}("Juan")); // Los paréntesis al final permiten invocar la función inmediatamente

let prueba=1;
console.log(prueba); // 1
(function f() {
    let prueba=2;
    console.log(prueba); // 2
    if (true) {
        let prueba=3;
        console.log(prueba); // 3
    }
})(); 
console.log(prueba); // 1

// Aprebder a ysar el debug
// Contiunuar con la teoria
// repasar lo de esta semana