"use strict";

// Ejercicio  de Expresiones regulares:
// A partir de un texto, almacenar en 6 arrays diferentes las palabras de una, dos, tres, cuatro, cinco letras o mas de cinco (LETRAS)

let frase =
  "Un texto es el la una composición de signos codificados en un sistema de escritura (como un alfabeto) que forma una unidad de sentido. Su tamaño puede ser variable. También es texto una composición de caracteres imprimibles (con grafema) generados por un algoritmo de cifrado que, aunque ¡no tienen sentido! para cualquier persona, sí puede ser descifrado por su destinatario original. En otras palabras, a un texto es un entramado; de signos con una intención comunicativa que adquiere sentido en determinado contexto. ¿Es cierto? Es complicado.";

let fraseCopia = frase.split(" ");

let a1 = [],
  a2 = [],
  a3 = [],
  a4 = [],
  a5 = [],
  a6 = [];

for (let i = 0; i < fraseCopia.length; i++) {
  switch (fraseCopia[i].length) {
    case 1:
      a1.push(fraseCopia[i]);
      break;
    case 2:
      a2.push(fraseCopia[i]);
      break;
    case 3:
      a3.push(fraseCopia[i]);
      break;
    case 4:
      a4.push(fraseCopia[i]);
      break;
    case 5:
      a5.push(fraseCopia[i]);
      break;
    default:
      a6.push(fraseCopia[i]);
      break;
  }
}

console.log("Número de palabras de una letra: " + a1.length);
console.log("Número de palabras de dos letras: " + a2.length);
console.log("Número de palabras de tres letras: " + a3.length);
console.log("Número de palabras de cuatro letras: " + a4.length);
console.log("Número de palabras de cinco letras: " + a5.length);
console.log("Número de palabras de más de cinco letras: " + a6.length);

console.log("\nPalabras de una letra: "+a1.join(", "));
console.log("Palabras de dos letras: "+a2.join(", "));
console.log("Palabras de tres letras: "+a3.join(", "));
console.log("Palabras de cuatro letras: "+a4.join(", "));
console.log("Palabras de cinco letras: "+a5.join(", "));
console.log("Palabras de más de cinco letras: "+a6.join(", "));