"use strict";

export class Comunidad {
    #comunidad;
    #provincias;

    constructor(comunidad, provincias) {
        this.#comunidad = comunidad;
        this.#provincias = provincias;
    }

    set Comunidad(valor) {
        this.#comunidad = valor;
    }

    set Provincias(valor) {
        this.#provincias = valor;
    }

    get Comunidad() {
        return this.#comunidad;
    }

    get Provincias() {
        return this.#provincias;
    }
}