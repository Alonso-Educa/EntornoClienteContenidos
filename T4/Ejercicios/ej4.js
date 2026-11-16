"use strict";

// Dado el siguiente objeto:
const persona = {
    nombre: 'Pepe',
    apellidos: ['García', 'Peréz'],
    edad: 23
};

// Desestructurar "nombre" y "edad" en las variables ej1 y ej2:
const { nombre: ej1, edad: ej2 } = persona;
console.log("Ejercicio 1:");
console.log(ej1, ej2);

// Dato el siguiente array:
const arr = ['lunes', 'martes', 'miércoles', 'jueves', 'viernes'];

// Desestucturar el primer y tercer elmento en las variables "lu" y "mi":
const [lu, , mi] = arr;
console.log("\nEjercicio 2:");
console.log(lu, mi);

// Desestructurar los apellidos de persona en las variables "apellido1" y "apellido2"
const { apellidos: [apellido1, apellido2] } = persona;
console.log("\nEjercicio 3:");
console.log(apellido1, apellido2);

// Crear una función denominada "verDatos" que admita como parámetro el objeto persona y,
// realizando desestructuración, cree y visualice las variables "nombre" y "edad"
// con los valores por defecto "Luis" y 20 respectivamente. Probar con diferentes objetos.
function verDatos({ nombre = "Luis", edad = 20 }) {
    console.log(nombre, edad);
}

console.log("\nEjercicio 4:");
verDatos(persona);

const persona2 = { nombre: "Pepe2", edad: 32 };
verDatos(persona2);

const persona3 = { nombre: "Juan" };
verDatos(persona3);

verDatos({});