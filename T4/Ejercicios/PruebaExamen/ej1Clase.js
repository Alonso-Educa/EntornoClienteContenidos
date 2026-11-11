"use strict";

import { Comunidad } from "./Comunidad.js";

// Versión con clases
// Ejercicio 1: Navegador de datos con relación entre algunas comunidades autónomas y sus provincias

document.open();

// a. Definir los arrays necesarios con los datos
const comunidades = [new Comunidad("Castilla y León", ["Valladolid", "Burgos", "León", "Palencia"]), new Comunidad("Valencia", ["Valencia", "Alicante"]), new Comunidad("Andalucía", ["Sevilla", "Córdoba", "Almería"])];

document.write("<h3>Apartado a</h3>");
comunidades.forEach((comunidad,i) => document.write(`<p>Posición ${i}: ${comunidad.Comunidad} - ${comunidad.Provincias} </p>`));

// b. Recorrer los arrays para que se muestre lo de arriba
let b = comunidad => comunidad.join(" ");

document.write("<h3>Apartado b</h3>");
comunidades.forEach(comunidad => document.write(`<p>${comunidad.Comunidad} - ${b(comunidad.Provincias)} </p>`));

// c. Hacer un recorrido como el del caso anterior, pero mostrando solo las provincias que empiezan por "V" o "C" en mayúsculas
let c = comunidad => comunidad.filter(provincia => provincia.startsWith("V") || provincia.startsWith("C")).map(provincia => provincia.toUpperCase()).join(" ");

document.write("<h3>Apartado c</h3>");
comunidades.forEach(comunidad => document.write(`<p>${comunidad.Comunidad} - ${c(comunidad.Provincias)} </p>`));

document.close();