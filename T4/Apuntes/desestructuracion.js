"use strict";

const array = ["José", "Pérez", "García", "C/ Mayor, 1"];

// forma normal
// const nombre = array[0];
// const apellido1 = array[1];

// console.log(nombre);
// console.log(apellido1);

// con desestructuracion: funciona por posicion con arrays, por nombre con objetos
// const [nombre, apellido1] = array;
const [nombre, , , calle] = array; // se pueden omitir valores

console.log(nombre);
// console.log(apellido1);
// console.log(apellido2);
console.log(calle);

// se pueden usar parametros rest para agrupar valores
console.log("\nUso de parámetros rest:");
const array2 = ["José", "Pérez", 983123456, 983098765];
let [nombre2, , ...telefonos] = array2;

console.log(nombre2);
console.log(telefonos);

// se pueden usar valores por defecto
console.log("\nUso de valores por defecto:");
const array3 = ["José"];
const [nombre3, apellido3 = "Rodríguez"] = array3;

console.log(nombre3);
console.log(apellido3);

const [, , , , , , , , codigoPostal = 47007] = array;
console.log(codigoPostal);

// inicializar valores usando desestructuracion
// en lugar de hacer let a=1; let b=2; let c=3;
console.log("\nInicialización e intercambio de datos:");
let [a, b, c] = [1, 2, 3];
console.log(a, b, c);

// se pueden intercambiar valores
[a, b, c] = [c, b, a];
console.log(a, b, c);

const persona = {
    nombre: "Sarah",
    pais: "Nigeria",
    trabajo: "Desarrollador"
};

const { nombre4, pais, trabajo } = persona;
console.log(nombre4, pais, trabajo); // nombre4 no existe porque aquí va por nombre y no por posicion

const persona2 = {
    nombre: "Sara",
    pais: "Italia"
};
const { nombre: firstname, pais: country = "Italia" } = persona2; // se puede cambiar el nombre para que no sea igual
console.log(firstname, country);

// desestructuracion anidada
const persona3 = {
    nombre: "Sarah",
    lugar: { pais: "Nigeria", ciudad: "Lagos" },
    trabajo: "Desarrollador",
    amigas: ["Annie", "Becky"]
};

