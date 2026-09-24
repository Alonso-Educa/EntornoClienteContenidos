// Tipos de datos en JavaScript
console.log("\nTipos de datos en JavaScript:");
let numero1 = 1;
console.log(numero1 + " " + typeof numero1); // number
let numero2 = 0.1;
console.log(numero2 + " " + typeof numero2); // number
let booleano = true;
console.log(booleano + " " + typeof booleano); // boolean
let cadena = "Hola";
console.log(cadena + " " + typeof cadena); // string
let nulo = null;
console.log(nulo + " " + typeof nulo); // null / object
let indefinido = undefined;
console.log(indefinido + " " + typeof indefinido); // undefined
let objeto = { nombre: "Juan", edad: 30, a: 1 };
console.log(objeto + " " + typeof objeto); // object

// Se pueden cambiar los tipos de variables durante la ejecución
console.log("\nCambio de tipos de variables durante la ejecución:");
let a = 123;
console.log("a: " + a + ", tipo: " + typeof a); // number
a = "Hola";
console.log("a: " + a + ", tipo: " + typeof a); // string

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
dato = 123;
console.log(dato); // Number

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
resultado = (function (n) {
  // Función anónima
  var saludo = "Hola ";
  console.log(saludo + n); // Hola Juan
})("Juan"); // Los paréntesis al final permiten invocar la función inmediatamente

let prueba = 1;
console.log(prueba); // 1
(function f() {
  let prueba = 2;
  console.log(prueba); // 2
  if (true) {
    let prueba = 3;
    console.log(prueba); // 3
  }
})();
console.log(prueba); // 1

// Operadores
let n1 = 10;
let n2 = 3;
console.log("\nOperadores:");
console.log("n1: " + n1 + ", n2: " + n2);
console.log("Suma: " + (n1 + n2));
console.log("Resta: " + (n1 - n2));
console.log("Multiplicación: " + n1 * n2);
console.log("División: " + n1 / n2);
console.log("Resto: " + (n1 % n2));
console.log("Exponenciación: " + n1 ** n2);

console.log("\nOperadores lógicos:");
a = true;
let b = false;
console.log("a: " + a + ", b: " + b);
console.log("AND: " + (a && b));
console.log("OR: " + (a || b));
console.log("NOT: " + !a);
console.log("XOR: " + (a ^ b)); // XOR bit a bit
console.log("XOR: " + (a != b)); // XOR lógico
console.log("XAND: " + (a && !b)); // XAND lógico

d = 46;
console.log("\nConversión de bases:");
console.log(d);
console.log(d.toString(2)); // Convierte a binario (base 2)
console.log(d.toString(16)); // Convierte a hexadecimal (base 16)
console.log(d.toString()); // Lo deja en la misma base (base 10)

console.log("\nEval:");
let f = eval("2+4+parseInt('1.2')"); // Evalúa la expresión y ejecuta su contenido
console.log(f); // 7
console.log(eval("2+4+parseInt('1.2')")); // 7

// Coerción de tipos: JavaScript convierte automáticamente los tipos de datos según el contexto
// Se recomienda usar siempre el operador de igualdad estricta (===) para evitar errores de coerción de tipos
// También aplica para !== en lugar de != para evitar errores de coerción de tipos
a = "2";
b = 2;
console.log("\nCoerción de tipos con strings:");
console.log("a: " + a + " (" + typeof a + "), b: " + b + " (" + typeof b + ")");
console.log(a == b); // true (coerción a número)
console.log(a === b); // false (no hay coerción, compara tipos y valores)
console.log(a + b); // 12 (coerción a string) --> La suma concatena los valores como cadenas de texto
console.log(a - b); // 0 (coerción a número)
console.log(a * b); // 4 (coerción a número)
console.log(a / b); // 1 (coerción a número)

// Coerción de tipos con booleanos
// Se recomienda usar siempre el operador de igualdad estricta (===) para evitar errores de coerción de tipos
// También aplica para !== en lugar de != para evitar errores de coerción de tipos
c = true;
d = false;
console.log("\nCoerción de tipos con booleanos:");
console.log("c: " + c + typeof c + ", d: " + d + typeof d);
console.log(c + d);
console.log(-c + d);
console.log(c * d);
console.log(c / d);
console.log(d / c);
console.log("?", true == 1);
console.log("" == 0); // true (coerción a número de la cadena vacía a false y luego a 0)
console.log("0" == 0); // true (coerción a número de la cadena "0" a 0)
console.log("?", true === 1); // false (no hay coerción, compara tipos y valores)
console.log("" === 0); // false (no hay coerción, compara tipos y valores)
console.log("0" === 0); // false (no hay coerción, compara tipos y valores)

// Tres formas de crear un array vacío (tipo indefinido)
let lista1 = new Array();
let lista2 = Array();
let lista3 = [];

console.log("\nArrays:");

lista1[0] = 1;
lista1[5] = "Pepe"; // El tamaño del array lo define el índice más alto
console.log("lista1: " + lista1);
console.log("lista1[0]: " + lista1[0]);
console.log("Tamaño del array: " + lista1.length);
for (let i = 0; i < lista1.length; i++) {
  console.log(lista1[i]);
}

lista1["pos1"] = "Laura"; // Crea un atributo llamado pos1 con el valor "Laura"
lista1.pos2 = "Samuel"; // Hace lo mismo, crea un atributo llamado pos2 con el valor "Samuel"
for (let i = 0; i < lista1.length; i++) {
  console.log(lista1[i]);
}
let pos3 = 6;
lista1[pos3] = 7; // El tamaño del array se incrementa de nuevo porque toma el valor numérico
for (let i = 0; i < lista1.length; i++) {
  console.log(lista1[i]);
}
console.log(Object.keys(lista1).length); //
console.log(Object.keys(lista1)); // Imprime valores definidos y atributos
console.log(Object.keys(lista1).filter((key) => isNaN(key)).length);

// Matrices: Arrays multidimensionales
console.log("\nMatrices:");
let matriz1 = [];
matriz1[0] = 1;
matriz1[2] = 4;
matriz1[3] = [, 3, , "p"];
matriz1[4] = null;
matriz1[6] = "Hola";

//console.log(matriz1[3][3]); // p

Arreglar
for (let i = 0; i < matriz1.length; i++) {
  console.log("Fila " + i + ":");
  if (typeof matriz1[i] === "object") {
    for (let j = 0; j < matriz1[i].length; j++) {
      if (matriz1[i][j] != undefined && j != undefined) {
        console.log(matriz1[i][j]);
      }
    }
  } else if (matriz1[i] != undefined) {
    console.log(matriz1[i]);
  }
}

let matriz2 = [[1, 2, 3], [4, 5, 6], "h"];
for (let i = 0; i < matriz2.length; i++) {
  console.log("Fila " + i + ":");
  if (typeof matriz3[i] === "object") {
    for (let j = 0; j < matriz2[i].length; j++) {
    console.log("Columna: " + j + " | Valor: " + matriz2[i][j]);
  }
  } else {
    console.log("Valor: " + matriz3[i]);
  }
  
}

let matriz3 = [1, 2, [1, 2, 3], ["a", "b", "c"], "hola", "", true];
matriz3[8] = "d";
matriz3[10] = 101211;
for (let i = 0; i < matriz3.length; i++) {
  console.log("Fila " + i + ":");
  if (typeof matriz3[i] === "object") {
    for (let j = 0; j < matriz3[i].length; j++) {
      console.log("Columna: " + j + " | Valor: " + matriz3[i][j]);
    }
  } else {
    console.log("Valor: " + matriz3[i]);
  }
}
