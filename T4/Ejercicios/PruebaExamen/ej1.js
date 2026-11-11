"use strict";

// Ejercicio 1: Navegador de datos con relación entre algunas comunidades autónomas y sus provincias

// a. Definir los arrays necesarios con los datos
let cyl = ["Valladolid", "Burgos", "León", "Palencia"];
let val = ["Valencia", "Alicante"];
let and = ["Sevilla", "Córdoba", "Almería"];

console.log("Apartado a");
console.log("Castilla y León: " + cyl);
console.log("Valencia: " + val);
console.log("Andalucía: " + and);

// b. Recorrer los arrays para que se muestre lo de arriba
let b = comunidad => comunidad.join(" ");

console.log("\nApartado b");
console.log("Castilla y León: " + b(cyl));
console.log("Valencia: " + b(val));
console.log("Andalucía: " + b(and));

// c. Hacer un recorrido como el del caso anterior, pero mostrando solo las provincias que empiezan por "V" o "C" en mayúsculas
let c = comunidad => comunidad.filter(provincia => provincia.startsWith("V") || provincia.startsWith("C")).map(provincia => provincia.toUpperCase()).join(" ");

console.log("\nApartado c");
console.log("Castilla y León: " + c(cyl));
console.log("Valencia: " + c(val));
console.log("Andalucía: " + c(and));