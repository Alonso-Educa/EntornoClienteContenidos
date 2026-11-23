"use strict";

import { Propietario } from "./Propietario.js";
import { Edificio } from "./Edificio.js";
import { Inmobiliaria } from "./Inmobiliaria.js";

let edificio = new Edificio("Melancolía", 1, 10000);

edificio.agregaPlantasYPuertas(2, 3);

console.warn("Nuevos propietarios");
let nombres = ["Edu", "Antonio", "Erik", "Mayte", "Mónica", "Santiago"];
let generos = ["M", "M", "M", "F", "F", "M"];
let miembros = [1, 2, 1, 3, 8, 3];
for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 3; j++) {
        edificio.agregaPropietario(i, j, nombres[i + j], generos[i + j], miembros[i + j]);
    }
}
edificio.imprimePlantas();

let inmobiliaria = new Inmobiliaria();
inmobiliaria.addEdificio(edificio);
inmobiliaria.addEdificio(new Edificio("Hospital Militar", 67, 47000));
console.log("\nDatos de la inmobiliaria: ");
inmobiliaria.imprimirEdificios();

console.log(inmobiliaria.getEdificio("Melancolía", 1) !== null ? `El edificio en calle: Calle ${edificio.Calle} Nº: ${edificio.Numero} es parte de la inmobiliaria` : `El edificio en calle: Calle ${edificio.Calle} Nº: ${edificio.Numero} no es parte de la inmobiliaria`);
console.log(inmobiliaria.getEdificio("Cardenal Torquemada", 4) !== null ? `El edificio en calle: Calle Cardenal Torquemada Nº: 4 es parte de la inmobiliaria` : `El edificio en calle: Calle Cardenal Torquemada Nº: 4 no es parte de la inmobiliaria`);