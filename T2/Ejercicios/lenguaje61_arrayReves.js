"use strict";

// Ejercicio de cadenas: Escribir un texto al revés a nivel de palabras y de letras
let frase =
  "Un texto es el la una composición de signos codificados en un sistema de escritura (como un alfabeto) que forma una unidad de sentido. Su tamaño puede ser variable. También es texto una composición de caracteres imprimibles (con grafema) generados por un algoritmo de cifrado que, aunque ¡no tienen sentido! para cualquier persona, sí puede ser descifrado por su destinatario original. En otras palabras, a un texto es un entramado; de signos con una intención comunicativa que adquiere sentido en determinado contexto. ¿Es cierto? Es complicado.";

console.log("Frase original: "+frase);
console.log("Frase al revés: "+frase.split("").reverse().join(""));