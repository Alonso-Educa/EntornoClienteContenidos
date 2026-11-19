"use strict";

import { EstacionM2 } from "./EstacionM2.js";

let estacionm = new EstacionM2();
document.open();
estacionm.insertarCiudad("Valladolid");
estacionm.insertarCiudad("Oviedo");
estacionm.insertarCiudad("Santander");

estacionm.imprimirDatos();

estacionm.eliminarCiudad("Oviedo");
estacionm.eliminarCiudad("Oviedo");

estacionm.modificarTemperatura("Valladolid",5,67);
estacionm.imprimirDatos();