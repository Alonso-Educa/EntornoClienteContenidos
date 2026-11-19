"use strict";

import { CentralMedidas } from "./CentralMedidas.js";

export class EstacionM2 {

    #ciudades;

    constructor() {
        this.#ciudades = new Map();
    }

    insertarCiudad(ciudad) {
        this.#ciudades.set(ciudad, new CentralMedidas());
    }

    eliminarCiudad(ciudad) {
        if (this.#ciudades.has(ciudad)) {
            this.#ciudades.delete(ciudad);
            document.write(`<p>Se ha eliminado la ciudad ${ciudad} de la estación metereológica.</p>`);
        } else {
            document.write(`<p>No se puede eliminar la ciudad ${ciudad} porque no pertenece a la estación metereológica.</p>`);
        }
    }

    modificarTemperatura(ciudad, dia, temperatura) {
        if (this.#ciudades.has(ciudad) && dia <= 30 && dia > 0) {
            this.#ciudades.set(ciudad, this.#ciudades.get(ciudad).modificarTemperaturaCentral(dia,temperatura));
            document.write(`<p>Se ha modificado la temperatura de la ciudad ${ciudad} del dia ${dia} de la estación metereológica.</p>`);
        } else {
            document.write(`<p>No se ha podido modificar la temperatura.</p>`);
        }
    }

    imprimirDatos() {
        document.write("<h3>Datos de la estación metereológica:</h3>");
        document.write("<table border='1'><tr>");
        document.write("<th></th>");
        for (let i = 0; i < 30; i++) {
            document.write(`<th>${i + 1}</th>`);
        }
        document.write("<th>Media</th></tr>");
        for (var [ciudad, temperaturas] of this.#ciudades) {
            document.write(`<tr><td>${ciudad}</td>`);
            temperaturas.Temperaturas.forEach(t => document.write(`<td>${t}</td>`));
            document.write(`<td>${temperaturas.reduce((ac, n) => ac + n, 0).toFixed(2)}</td></tr>`);
        }
        document.write("</table>");
    }
}