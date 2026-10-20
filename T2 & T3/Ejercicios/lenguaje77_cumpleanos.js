"use strict";

// Calcular el día de la semana de tus próximos 5 cumpleaños
console.log("\nCalcular el día de la semana de tus próximos 5 cumpleaños:");
const anio=2026;
for(let i=0; i<5; i++){
    let cumple = new Date(`${anio+i}-11-22`);
    // console.log(`Día de 22/11/${anio++}: ${cumple.getDay()}`); // devuelve índice numérico de la semana: [0-7]
    // Devuelve lo mismo que antes pero en vez de índice numérico, lo traduce a día de la semana (formato long) con formato español
    console.log(`Día de 22/11/${anio+i}: ${cumple.toLocaleDateString('es-ES', { weekday: 'long' })}`);
}