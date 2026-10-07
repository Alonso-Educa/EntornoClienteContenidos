"use strict";

// Ejercicio de cadenas: Alternar palabras en mayúsculas con palabras en minúsculas
let frase = "Frase de prueba con mayúsculas y minúsculas.";
console.log("Frase original: "+frase);

// Alternar por palabra
let array = frase.toLowerCase().split(" ");
for(let i=0;i<array.length; i+=2){
    array[i]=array[i].toUpperCase();
}
console.log("Alternando por palabra: "+array.join(" "));

// Alternar por caracter
array = frase.toLowerCase().split("");
for(let i=0;i<array.length; i+=2){
    array[i]=array[i].toUpperCase();
}
console.log("Alternando por caracter: "+array.join(""));