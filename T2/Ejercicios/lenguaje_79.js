"use strict";

// Tiempo transcurrido entre dos fechas
let f1 = new Date("2000-01-01");
let f2 = new Date("2026-10-07");

let anio = (f2 - f1) / (1000 * 3600 * 24 * 365.25);
let mes = (anio - Math.floor(anio)) * 12;
let dia = Math.round((mes - Math.floor(mes)) * 30);

console.log("Fecha 1: " + f1);
console.log("Fecha 2: " + f2);
console.log(
  "Entre la fecha 1 y la fecha 2 han pasado " +
    Math.floor(anio) +
    " años, " +
    Math.floor(mes) +
    " meses y " +
    dia +
    " dias.",
);
