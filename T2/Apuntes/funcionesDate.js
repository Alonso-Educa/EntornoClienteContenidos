"use strict";

// Date es un objeto global
console.log("Declaración y constructores de fecha (Date):");
let fecha1 = new Date(); // crea un objeto Date con fecha y hora actual
console.log("\nFecha sin parámetros (actual): " + fecha1);
let fecha2 = new Date(990000000000); // desde año 1970
console.log("Fecha por milisegundos: " + fecha2);
let fecha3 = new Date("2001-01-01"); // formato aaaa-mm-dd (con barras no lo recoge)
console.log("Fecha con String: " + fecha3);
fecha3 = new Date("01-21-2020"); // formato mm-mddm-aaaa (formato de eeuu)
console.log("Fecha con String: " + fecha3);
// Si se crea fecha con valores, mes y fecha empiezan por 0
let fecha4 = new Date(2020, 1, 2); // hora,mes,dia
console.log("Fecha con valores numéricos: " + fecha4);
fecha4 = new Date(2021, 0, 0, 25, 23, 59, 60); // hora,mes,dia,[hora,min,seg,ms] (corchetes opcional)
console.log("Fecha con valores numéricos completos: " + fecha4);

// 1. Date.now(): Devuelve el valor numérico de la fecha actual
console.log("\n1. Date.now():");
console.log("Fecha actual (valor numérico): " + Date.now()); // devuelve valor de fecha en ms
let FechaActual = new Date(Date.now());
console.log("Fecha actual: " + FechaActual); // formato normal

// 2. parse(): Parsea un string y devuelve el valor numérico de la fecha
console.log("\n2. Date.parse():");
let fechaParse = new Date(Date.parse("2000-01-01")); // fecha obtenida por ms
console.log("Fecha parseada: " + "Fecha parseada: " + fechaParse);
fechaParse = Date.parse("1500-01-01"); // ms en negativo porque el año es menor a 1970
console.log("Fecha parseada (valor numérico): " + fechaParse); // sin declararlo como date solamente devuelve valor date en ms
fechaParse = new Date(Date.parse("1500-01-01")); // fecha obtenida por ms (hay diferencia horaria por ser fecha indebida)
console.log("Fecha parseada (diferencia horaria): " + fechaParse); // formato nromal
fechaParse = new Date(Date.parse("1500-01-02")); // fecha obtenida por ms
console.log("Fecha parseada: " + "Fecha parseada: " + fechaParse); // formato nromal

// 3. getFullYear(): Devuelve el año de la fecha
console.log("\n3. getFullYear():");
console.log("Fecha: " + fecha1 + ", año: " + fecha1.getFullYear());
console.log("Fecha: " + fechaParse + ", año: " + fechaParse.getFullYear());

// 4. getMonth(): Devuelve el mes de la fecha (0 enero - 11 diciembre)
console.log("\n4. getMonth():");
console.log("Fecha: " + fecha1 + ", mes: " + fecha1.getMonth());
console.log("Fecha: " + fechaParse + ", mes: " + fechaParse.getMonth()); // mes 0 (enero)

// 5. getDate(): Devuelve el día del mes de la fecha
console.log("\n5. getDate():");
console.log("Fecha: " + fecha1 + ", día: " + fecha1.getDate());
console.log("Fecha: " + fechaParse + ", día: " + fechaParse.getDate()); // dia 1

// 6. getDay(): Devuelve el día de la semana (0 domingo - 6 sabado)
console.log("\n6. getDay():");
console.log("Fecha: " + fecha1 + ", dia de la semana: " + fecha1.getDay());
console.log(
  "Fecha: " + fechaParse + ", dia de la semana: " + fechaParse.getDay(),
);

// 7. getHours()/getMinutes()/getSeconds()/getMilliseconds(): Devuelve hora, minutos, segundos o ms de la fecha
console.log("\n7. getHours()/getMinutes()/getSeconds()/getMilliseconds():");
console.log("Fecha: " + fecha1 + ", hora: " + fecha1.getHours());
console.log("Fecha: " + fecha1 + ", minutos: " + fecha1.getMinutes());
console.log("Fecha: " + fecha1 + ", segundos: " + fecha1.getSeconds());
console.log("Fecha: " + fecha1 + ", milisegundos: " + fecha1.getMilliseconds());

// 8. getTime(): Devuelve el valor numérico en ms de la fecha
console.log("\n8. getTime:");
console.log("Fecha: " + fecha1 + ", valor numérico (ms): " + fecha1.getTime());
console.log(
  "Fecha: " + fechaParse + ", valor numérico (ms): " + fechaParse.getTime(),
);

// 9. Set: Establece un valor a una fecha
console.log("\n9. Set:");
fechaParse.setFullYear(1980);
fechaParse.setMonth(0); // enero
fechaParse.setDate(0); // dia 0 solo hace que sea un día antes, en este caso 31/11
fechaParse.setHours(0);
fechaParse.setMinutes(0);
fechaParse.setSeconds(0);
fechaParse.setMilliseconds(0);
console.log("Fecha actualizada (set): " + fechaParse);
fechaParse.setTime(14831683200000); // cambia fecha entera
console.log("Fecha actualizada (set): " + fechaParse);
