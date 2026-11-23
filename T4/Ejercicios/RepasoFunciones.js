"use strict";

// // Realiza un programa que cambie los dias de la semana a mayusculas
// console.log("Ejercicio 1:");
// var dias = new Array('lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado', 'domingo');
// dias.map(dia => dia.replace(dia.charAt(0), dia.charAt(0).toLocaleUpperCase())).forEach(dia => console.log(dia));

// // escribe un programa quepida por pantalla una frase y devuielva la frase cambiando las a por @, las e por 3 y o por 0
// console.log("Ejercicio 2:");
// // let frase = prompt("Escribe una frase");
// let frase = "Frase larga con muchas palabras";
// console.log("Frase: " + frase);
// console.log("Numero de palabras de la frase: " + frase.split(" ").reduce((ac, a) => ac + 1, 0));

// console.log("\nEjercicio 3:");
// // let frase = prompt("Escribe una frase");
// console.log("Frase: " + frase);
// // console.log("Numero de palabras de la frase: " + frase.split(" ").length);

console.log("\nMatrices:");
let matrizA = [[2, 0, 1], [3, 0, 0], [5, 1, 1]];
let matrizB = [[1, 0, 1], [1, 2, 1], [1, 1, 0]];
let multiplicar = (matrizA, matrizB) => {
    let filas = 0;
    let matrizC = matrizA.map(fila => fila.map(valor => fila.reduce((ac, n, i) => ac + n * matrizB[filas++][i])));
    return matrizC;
}

let matrizC = multiplicar(matrizA, matrizB);
matrizA.forEach(fila => fila.forEach(valor => console.log(valor)));
matrizC.forEach(fila => fila.forEach(valor => console.log(valor)));