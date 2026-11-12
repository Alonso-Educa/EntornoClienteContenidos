"use strict";

import { Rio2 } from "./Rio2.js";

let s = "";

// crear rios
s+="<h3>Creación de rios:</h3>";
let rioA = new Rio2("Duero","Atlántica");
s+=`<p>Nuevo rio ${rioA.imprimeNombre()}, de la cuenca: ${rioA.imprimeCuenca()}.</p>`;
let rioB = new Rio2("Ebro","Mediterránea");
s+=`<p>Nuevo rio ${rioB.imprimeNombre()}, de la cuenca: ${rioB.imprimeCuenca()}.</p>`;

// prueba de métodos del rio A
s+=`<h3>Río ${rioA.imprimeNombre()} métodos:</h3>`;
s+=`Río ${rioA.imprimeNombre()} caudal: `+rioA.imprimeCaudal();
rioA.modificarCaudalmedio(1000);
s+=rioA.agregarPoblacion("Soria");
s+=rioA.eliminarPoblacion("Hola");
s+=rioA.eliminarPoblacion("Soria");
s+=rioA.agregarPoblacion("Zamora");
s+=rioA.agregarPoblacion("Burgos");

s+=`<p>Río ${rioA.imprimeNombre()} nombre: `+rioA.imprimePoblaciones()+"</p>";
s+=`<p>Río ${rioA.imprimeNombre()} cuenca: `+rioA.imprimeCuenca()+"</p>";
s+=`<p>Río ${rioA.imprimeNombre()} caudal: `+rioA.imprimeCaudal()+"</p>";
s+=`<p>Río ${rioA.imprimeNombre()} poblaciones: `+rioA.imprimePoblaciones()+"</p>";
s+=`<p>Río ${rioA.imprimeNombre()} datos: `+rioA.imprimeRio()+"</p>";

// prueba de métodos del rio B
s+=`<h3>Río ${rioB.imprimeNombre()} métodos:</h3>`;
rioB.modificarCaudalmedio(50);

s+=rioB.agregarPoblacion("Miranda de Ebro");
s+=rioB.agregarPoblacion("Tortosa");
s+=rioB.agregarPoblacion("Valladolid");
s+=`<p>Río ${rioB.imprimeNombre()} poblaciones: `+rioB.imprimePoblaciones()+"</p>";

s+=rioB.eliminarPoblacion("Valladolid");
s+=`<p>Río ${rioB.imprimeNombre()} poblaciones: `+rioB.imprimePoblaciones()+"</p>";

document.getElementById("rios").innerHTML = s;