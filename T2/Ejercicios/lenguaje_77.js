"use strict";

// Calcular el día de la semana de tus próximos 5 cumpleaños
console.log("\n7. Calcular el día de la semana de tus próximos 5 cumpleaños:");
let anio=2026;
for(let i=0; i<5; i++){
    let cumple = new Date(`${anio}-11-22`);
    console.log(`Día de 22/11/${anio++}: ${cumple.getDay()}`);
}