"use strict";

// clase Vehiculo con atributo privado pasajeros y su getter/setter
export class Vehiculo {

    #pasajeros;

    constructor(pasajeros) {
        this.#pasajeros = pasajeros;
    }

    set Pasajeros(valor) {
        this.#pasajeros = valor;
    }

    get Pasajeros() {
        return this.#pasajeros;
    }
}