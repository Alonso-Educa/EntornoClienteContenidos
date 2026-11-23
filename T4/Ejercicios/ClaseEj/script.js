"use strict";

import { Estudiante } from "./Estudiante.js";
import { Profesor } from "./Profesor.js";

document.open();

let e1 = new Estudiante("Alonso", "Rogado", "123456789A", ["Entorno Cliente", "Entorno Servidor"]);
let e2 = new Estudiante("Mauro", "Garcia", "123456789A", ["Interfaces", "Entorno Servidor"]);
let e3 = new Estudiante("Pepe", "Pepe", "123456789A", ["Frameworks", "Despliegue"]);
let e4 = new Estudiante("Daniel", "Dani", "123456789A", ["Sostenibilidad"]);

let p1 = new Profesor("Juan", "Juan2", "123456789A", ["Entorno Servidor", "Despliegue"]);
let p2 = new Profesor("Laura", "Laura", "123456789A", ["Entorno Cliente"]);

e1.entregarEjercicio("Entorno Cliente", "2A");
e3.entregarEjercicio("Entorno Cliente", "3");
p2.corregirEjercicio("Entorno Cliente", "2A");