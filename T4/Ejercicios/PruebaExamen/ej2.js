"use strict";

import { Rio } from "./Rio.js";
document.open();

// crear rios
document.write("<h3>Creación de rios</h3>");
let rioA = new Rio("Duero","Atlántica");
let rioB = new Rio("Ebro","Mediterránea");

// prueba de métodos del rio A
document.write(`<h3>Río ${rioA.imprimeNombre()} métodos:</h3>`);
document.write(`Río ${rioA.imprimeNombre()} caudal: `+rioA.imprimeCaudal());
rioA.modificarCaudalmedio(1000);
rioA.agregarPoblacion("Soria");
rioA.eliminarPoblacion("Hola");
rioA.eliminarPoblacion("Soria");
rioA.agregarPoblacion("Zamora");
rioA.agregarPoblacion("Burgos");

document.write(`<p>Río ${rioA.imprimeNombre()} nombre: `+rioA.imprimePoblaciones()+"</p>");
document.write(`<p>Río ${rioA.imprimeNombre()} cuenca: `+rioA.imprimeCuenca()+"</p>");
document.write(`<p>Río ${rioA.imprimeNombre()} caudal: `+rioA.imprimeCaudal()+"</p>");
document.write(`<p>Río ${rioA.imprimeNombre()} poblaciones: `+rioA.imprimePoblaciones()+"</p>");
document.write(`<p>Río ${rioA.imprimeNombre()} datos: `+rioA.imprimeRio()+"</p>");

// prueba de métodos del rio B
document.write(`<h3>Río ${rioB.imprimeNombre()} métodos:</h3>`);
rioB.modificarCaudalmedio(50);

rioB.agregarPoblacion("Miranda de Ebro");
rioB.agregarPoblacion("Tortosa");
rioB.agregarPoblacion("Valladolid");
document.write(`<p>Río ${rioB.imprimeNombre()} poblaciones: `+rioB.imprimePoblaciones()+"</p>");

rioB.eliminarPoblacion("Valladolid");
document.write(`<p>Río ${rioB.imprimeNombre()} poblaciones: `+rioB.imprimePoblaciones()+"</p>");

document.close();