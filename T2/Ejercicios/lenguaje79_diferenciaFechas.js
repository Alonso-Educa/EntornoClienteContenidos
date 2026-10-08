"use strict";

// Hacer versión donde compara con ms

// Tiempo transcurrido entre dos fechas
let f1 = new Date(Date.UTC(2001,0,17)); // formato aaaa-mm-dd, mes: [0-11]
let f2 = new Date(Date.UTC(2026,9,1));

// console.log("Año f1: "+f1.getUTCFullYear()+", f2: "+f2.getUTCFullYear());
// console.log("Mes f1: "+f1.getUTCMonth()+", f2: "+f2.getUTCMonth());
// console.log("Dia f1: "+f1.getUTCDate()+", f2: "+f2.getUTCDate());

if (f1 > f2) {
  let f3 = f2;
  f2 = f1;
  f1 = f3;
}

let anio = f2.getUTCFullYear() - f1.getUTCFullYear();
let mes = f2.getUTCMonth() - f1.getUTCMonth();
let dia = f2.getUTCDate() - f1.getUTCDate();

if (dia < 0) {
  dia += 30;
  mes--;
}else if(mes<0){
  mes += 11;
  anio--;
}

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
