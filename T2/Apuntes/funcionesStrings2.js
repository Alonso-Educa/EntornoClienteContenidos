"use strict";

// 1. endsWith(): Determina si un string termina con otro string
console.log("\n1. endsWith():");
let cadena = "principiosubcadenafin";
console.log("Cadena original: " + cadena);
console.log("Empieza con 'fin'? -> " + cadena.endsWith("fin"));
console.log("Empieza con 'hola'? -> " + cadena.endsWith("hola"));

// 2. startsWith(): Determina si un string empieza con otro string
console.log("\n2. startsWith():");

console.log("Cadena original: " + cadena);
console.log("Empieza con 'principio'? -> " + cadena.startsWith("principio"));
console.log("Empieza con 'hola'? -> " + cadena.startsWith("hola"));

// 3. includes(): Determina si un string incluye otro string
console.log("\n3. includes():");
console.log(
  "Contiene 'hola' la cadena " + cadena + "? -> " + cadena.includes("hola"),
);
console.log(
  "Contiene 'fin' la cadena " + cadena + "? -> " + cadena.includes("fin"),
);

// 4. match(): Determina si un string incluye otro string y devuelve
//  un string con las ocurrencias
console.log("\n4. match():");
console.log("Ocurrencias de 'i' -> " + cadena.match("i")); // solo la primera si no se pone /g
console.log("Ocurrencias de 'i' -> " + cadena.match(/i/g));
console.log("Ocurrencias de 'xyz' -> " + cadena.match("xyz"));

// 5. repeat(): Repite un string un numero de veces
console.log("\n5. repeat():");
console.log("'sub' repetido 3 veces -> " + "sub".repeat(3));
console.log("La cadena repetida 2 veces -> " + cadena.repeat(2));

// 6. replace(): Reemplaza un string por otro
console.log("\n6. replace():");
console.log("Reemplazar 'sub' por 'SUB' -> " + cadena.replace("sub", "SUB"));
console.log("Reemplazar la primera 'i' por '*' -> " + cadena.replace("i", "*"));
console.log(
  "Reemplazar todas las 'i' por '*' -> " + cadena.replaceAll("i", "*"),
);

// 7. trim(): Elimina los espacios en blanco de un string
console.log("\n7. trim():");
let cadenaConEspacios = "   hola  mundo s  ";
console.log("Cadena original: " + cadenaConEspacios);
console.log("Cadena sin espacios (trim): " + cadenaConEspacios.trim());

// 8. padStart(): Añade espacios (o una subcadena) al inicio, especificar longitud máxima de cadena
console.log("\n8. padStart():");
let cadenaPad = "hola";
console.log("'hola' con 3 puntos delante -> " + cadenaPad.padStart(7, "."));
console.log("'fin' con longitud 8 -> " + "fin".padStart(8));

// 9. padEnd(): Añade espacios (o una subcadena) al final, especificar longitud máxima de cadena
console.log("\n9. padEnd():");
console.log("'hola' con 3 a  al final-> " + cadenaPad.padEnd(7, "a"));
console.log("'fin' con longitud 8 -> '" + "fin".padEnd(8, "."));
