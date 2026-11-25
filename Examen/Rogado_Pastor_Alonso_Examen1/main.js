"use strict";

import { Piloto } from "./Piloto.js";
import { Equipo } from "./Equipo.js";
import { Barrio } from "./Barrio.js";
import { Carrera } from "./Carrera.js";

let p1 = new Piloto("Alonso", "Rogado", "velocidad");
let p2 = new Piloto("Laura", "Ape1 Ape2", "");
let p3 = new Piloto("Pepe", "Pepito", "derrape");
let p4 = new Piloto("Juan", "Juanito", "mecanica");

console.log("\nPilotos:");
console.log(p1.Nombre, p1.Apellidos, p1.Especialidad);
console.log(p2.Nombre, p2.Apellidos, p2.Especialidad);

let e1 = new Equipo(p1, p2, "Lema1 prueb", ["huir de la policía", "huir de la policía"], 50000);
let e2 = new Equipo(p3, p4, "Nadie nos para en Vice City", ["exceso de velocidad", "prueba"], 1);

console.log("\nEquipos:");
console.log(e1.Pilotos, e1.Estrellas, e1.Lema, e1.Matricula, e1.NombreEnClave, e1.PremioNeto);
console.log(e2.Pilotos, e2.Estrellas, e2.Lema, e2.Matricula, e2.NombreEnClave, e2.PremioNeto);

console.log("\nBarrios:");
let b1 = new Barrio("San Andreas");
b1.anadirGaraje(1, 1, e1.NombreEnClave);
b1.anadirGaraje(2, 1, e2.NombreEnClave);
console.table(b1.Mapa);
console.log(b1.Nombre);

console.log("\nCarreras:");
let c1 = new Carrera("Nombre", b1, "2000-10-11");
console.log(new Date("2000-10-11") === "Invalid Date");
console.log(c1.Nombre, c1.Barrio.Nombre, c1.Fecha_Asignada, c1.Fecha_Indicada);


function validarFecha() {

}

function validarPilotosCarrera() {

}