"use strict";

// Prohibido if, let o for
let s = "en un lugar de la mancha";

// f4(): Una función "f4" que devuelve un string similar al original, pero sin espacios y en "CamelCase"
let f4 = s => s.split(" ").map(palabra => palabra.replace(palabra.charAt(0), palabra.charAt(0).toUpperCase())).join("");

console.log("\nFunción 4: Devuelve un string similar al original, pero sin espacios y en 'CamelCase'.");
console.log("Frase original: " + s);
console.log("Frase nueva: " + f4(s));

// f5(): Una función "f5" que devuelve la longitud media de las palabras de la frase
let f5 = s => s.split(" ").reduce((ac, n, i, a) => ac + n.length / a.length, 0);

console.log("\nFunción 5: Devuelve la longitud media de las palabras de la frase.");
console.log("Frase original: " + s);
console.log("Longitud media de las palabras: " + f5(s));

// f6(): Una función "f6" que devuelve un aray con la longitud de cada una de las palabras que contenga la letra "a"
let f6 = s => s.split(" ").filter(palabra => palabra.includes("a")).map(a => a.length);

console.log("\nFunción 6: Devuelve un aray con la longitud de cada una de las palabras que contenga la letra 'a'.");
console.log("Frase original: " + s);
console.log("Longitud de las palabras que contienen 'a': " + f6(s));