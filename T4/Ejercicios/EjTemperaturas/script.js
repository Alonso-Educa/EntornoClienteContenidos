"use strict";
document.open();
import { EstacionM } from "./EstacionM.js";

let estacionm = new EstacionM();
estacionm.insertarCiudad("Valladolid");
estacionm.insertarCiudad("Oviedo");
estacionm.insertarCiudad("Santander");

estacionm.imprimirDatos();

estacionm.eliminarCiudad("Oviedo");
estacionm.eliminarCiudad("Oviedo");

estacionm.modificarTemperatura("Valladolid",5,67);
estacionm.imprimirDatos();