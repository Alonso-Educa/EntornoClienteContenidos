"use strict";

// 1. length: Devuelve la longitud de una cadena
console.log("\n1. length:");
let cadena = "hola";
console.log(
  "La cadena '" + cadena + "' tiene " + cadena.length + " caracteres.",
);
cadena = "cadenamuylarga345";
console.log(
  "La cadena '" + cadena + "' tiene " + cadena.length + " caracteres.",
);

// 2. concat(): Concatena 2 o más strings
console.log("\n2. concat():");
let c1 = "hola1";
let c2 = "cadena2";
let c3 = "123";
console.log("Cadena 1: " + c1 + ", cadena 2: " + c2 + ", cadena 3: " + c3);
console.log(c1.concat(c2, c3));

// 3. charat(pos): Devuelve el caracter en la posición pos
console.log("\n3. charAt(pos):");
let persona = "Juan";
for (let i = 0; i < persona.length; i++) {
  console.log("Pos " + i + " de " + persona + ". " + persona.charAt(i));
}

// 4. charcodeat(p): Devuelve el código unicode de la posición pos
console.log("\n4. charcodeat(p):");
for (let i = 0; i < persona.length; i++) {
  console.log(
    "Valor unicode del caracter " +
      persona.charAt(i) +
      ": " +
      charCodeAt(persona.charAt(i)),
  );
}

// 5. indexOf(sub): Devuelve la primera posición en la cadena de la subcadena introducida
console.log("\n5. indexOf(sub):");
cadena = "cadena123a";
console.log(cadena.indexOf("a"));
console.log(cadena.indexOf("5"));

// 6. lastIndexOf(): Devuelve la última posición en la cadena de la cadena introducida
console.log("\n6. lastIndexOf(sub):");
console.log(cadena.lastIndexOf("a"));
console.log(cadena.lastIndexOf("5"));

// 7. substr(i,f): Devuelve la subcadena desde la posición i a la f
console.log("\n7. substr(i,f)");
cadena = "cadenamuylargaparasplit";
console.log("Cadena original: " + cadena);
console.log("Substring [1,3]: " + cadena.substring(1, 7));
console.log("Substring [3]: " + cadena.substring(3));
console.log("Substring [2,-2]: " + cadena.substring(2, -2));

// 8. toLowerCase(): Convierte la cadena a minúsculas
console.log("\n8. toLowerCase():");
cadena = "HOLAENMAYUSCULAS";
console.log("Cadena original: " + cadena);
console.log("Cadena en minúsculas: " + cadena.toLowerCase);

// 9. toUpperCase(): Convierte la cadena a mayúsculas
console.log("\n9. toUpperCase():");
console.log("Cadena original: " + cadena);
console.log("Cadena en mayúsculas: " + cadena.toUpperCase);

// 10. split(c): Divide una cadena en subcadenas separadas por el caracter
// introducido y las devuelve en un array
console.log("\n10. split:");
let cadenaSplit = "cadenamuylargaparasplita2";
console.log("Cadena original: " + cadenaSplit);
console.log("Split (''): " + cadenaSplit.split("")); // Sin caracter separa todo
console.log("Split ('a'): " + cadenaSplit.split("a"));
console.log("Split ('a',3): " + cadenaSplit.split("a", 3));
