"use strict";
// Arrays multidimensionales
console.log("1. Contenido de arrays multidimensionales");
var tablaA = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9, 10],
  ["A", "B", "C"],
];
console.log(tablaA.length + ", " + tablaA[1].length); // 4, 3
tablaA[0][0] = 20; // [20,2,3]
console.log(tablaA[1][1]); // 5

// Foreach recorre la tabla igual que un for
console.log("\n2. Recorrer la tabla con el método forEach:");
tablaA.forEach(function (e, i) {
  tablaA[i].forEach(function (e, j) {
    console.log(tablaA[i][j]);
  });
});

// Crear un array bidimensional a partir de uno unidimensional
console.log("\n3. Fill en un array:");
var tablaB = new Array(5);
tablaB.fill(["A", "B", "C"]); // rellena todas las posiciones del array con el valor introducido
console.log(tablaB);
tablaB.forEach(function (e, i) {
  tablaB[i].forEach(function (e, j) {
    console.log(tablaB[i][j]);
  });
});

// Array bidimensional a partir de dos dimensiones
console.log("\n4. Array.of en un array:");
var tablaC = Array.of([1, 2, 3], [3, 4, 5]); // crea un nuevo array a partir de los elementos introducidos
console.log(tablaC);
tablaC.forEach(function (e, i) {
  tablaC[i].forEach(function (e, j) {
    console.log(tablaC[i][j]); // un valor por línea de consola
  });
});

// Join
tablaC = Array.of([1, 2, 3], [3, 4, 5], [6, 7, 8, 9]);
console.log("");
console.log(tablaC);
console.log("Join:");
tablaC.forEach(function (e, i) {
  console.log(tablaC[i].join(","));
});

// Usando concatenación en un array (s+=)
tablaC = Array.of([1, 2, 3], [3, 4, 5], [6, 7, 8, 9], ["a", "b", "c"]);
let s = "";
console.log("");
console.log(tablaC);
console.log("Concatenación de string:");
tablaC.forEach(function (e, i) {
  s = "";
  tablaC[i].forEach(function (e, j) {
    s += tablaC[i][j];
    if (j != tablaC[i].length - 1) {
      s += ","; // añade una coma siempre que no esté en el último índice de la fila
    }
  });
  console.log(s); // todo un array en una linea
});

// Array.of con un valor en lugar de array
tablaC = Array.of([1, 2, 3], [3, 4, 5], [6, 7, 8, 9], ["a", "b", "c"], tablaA);
console.log("");
console.log(tablaC);
console.log("Array.of con valor:");
tablaC.forEach(function (e, i) {
  console.log(tablaC[i].join(","));
});

// Crear arrays vacios dentro de otro
console.log("\n5. Creación anidada de arrays con new Array(n):");
var tablaD = new Array(new Array(3), new Array(3));
console.log(tablaD);
tablaD.forEach(function (e, i) {
  tablaD[i].forEach(function (e, j) {
    console.log(tablaD[i][j]); // no imprime nada porque no tiene valor
  });
});

// Transformación de strings
let frase =
  "Esto es un texto para hacer ejercicios con cadenas. Se realizará una transformación sobre el mismo. Se emplearán métodos del objeto String.";

console.log("\n6. Transformación de strings:");
console.log("Frase original: "+frase);

// Frase al revés por palabras
let arrayFrase = frase.split(" ").reverse();
console.log("Frase del revés por palabras: "+arrayFrase.join(" "));

// Frase al revés por caracteres
arrayFrase = frase.split("").reverse();
console.log("Frase del revés por caracteres: "+arrayFrase.join(""));