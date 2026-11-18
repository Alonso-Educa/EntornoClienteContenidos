"use strict";

export class EstacionM {
    #ciudades;
    constructor() {
        this.#ciudades = new Map();
    }

    insertarCiudad(ciudad) {
        this.#ciudades.set(ciudad, this.#calcularTemperaturas());
    }

    #calcularTemperaturas() {
        return Array(30).fill().map(t => Math.ceil(Math.random() * 60) - 20);
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
        if (this.#ciudades.has(ciudad) && dia <= 30) {
            this.#ciudades.set(ciudad, this.#ciudades.get(ciudad).map((valor, i) => i + 1 == dia ? temperatura : valor));
            document.write(`<p>Se ha modificado la temperatura de la ciudad ${ciudad} del dia ${dia} de la estación metereológica.</p>`);
        }
        document.write(`<p>No se ha podido modificar la temperatura.</p>`);
    }

    imprimirDatos() {
        document.write("<h3>Datos de la estación metereológica:</h3>");
        for (var [ciudad, temperaturas] of this.#ciudades) {
            document.write(`<p>${ciudad} = ${temperaturas.join(" ")}</p>`);
        }
    }
}