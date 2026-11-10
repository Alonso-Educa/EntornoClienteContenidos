"use strict";

import { Vehiculo } from "./Vehiculo.js";

// clase Camion hija de Vehiculo con atributo privado tara y su getter/setter
export class Camion extends Vehiculo {

    #tara;

    constructor(pasajeros, tara) {
        super(pasajeros);
        this.#tara = tara;
    }

    set Tara(valor) {
        this.#tara = valor;
    }

    get Tara() {
        return this.#tara;
    }
}