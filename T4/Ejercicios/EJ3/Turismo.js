"use strict";

import { Vehiculo } from "./Vehiculo.js";

// clase Turismo hija de Vehiculo con atributo privado color y su getter/setter
export class Turismo extends Vehiculo {

    #color;

    constructor(pasajeros, color) {
        super(pasajeros);
        this.#color = color;
    }

    set Color(valor) {
        this.#color = valor;
    }

    get Color() {
        return this.#color;
    }
}