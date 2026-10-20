"use strict";

// Ejercicio  de Expresiones regulares:
// A partir de un texto, almacenar en 6 arrays diferentes las palabras de una, dos, tres, cuatro, cinco letras o mas de cinco (LETRAS)

let frase =
  "Un texto es el la una composición de signos codificados en un sistema de escritura (como un alfabeto) que forma una unidad de sentido. Su tamaño puede ser variable. También es texto una composición de caracteres imprimibles (con grafema) generados por un algoritmo de cifrado que, aunque ¡no tienen sentido! para cualquier persona, sí puede ser descifrado por su destinatario original. En otras palabras, a un texto es un entramado; de signos con una intención comunicativa que adquiere sentido en determinado contexto. ¿Es cierto? Es complicado.";

// reemplazar tildes por vocales normales y limpiar espacios

let p1 = frase.match(/\s[A-za-záéíóúñÁÉÍÓÚÑ]{1}\s/g);
let p2 = frase.match(/\s[A-za-záéíóúñÁÉÍÓÚÑ]{2}\s/g);
let p3 = frase.match(/\s[A-za-záéíóúñÁÉÍÓÚÑ]{3}\s/g);
let p4 = frase.match(/\s[A-za-záéíóúñÁÉÍÓÚÑ]{4}\s/g);
let p5 = frase.match(/\s[A-za-záéíóúñÁÉÍÓÚÑ]{5}\s/g);
let p6 = frase.match(/\s[A-za-záéíóúñÁÉÍÓÚÑ]{6,}\s/g);

console.log("Número de palabras de una letra: " + p1.length);
console.log("Número de palabras de dos letras: " + p2.length);
console.log("Número de palabras de tres letras: " + p3.length);
console.log("Número de palabras de cuatro letras: " + p4.length);
console.log("Número de palabras de cinco letras: " + p5.length);
console.log("Número de palabras de más de cinco letras: " + p6.length);

console.log("\nPalabras de una letra: " + p1.join(","));
console.log("Palabras de dos letras: " + p2.join(","));
console.log("Palabras de tres letras: " + p3.join(","));
console.log("Palabras de cuatro letras: " + p4.join(","));
console.log("Palabras de cinco letras: " + p5.join(","));
console.log("Palabras de más de cinco letras: " + p6.join(","));
