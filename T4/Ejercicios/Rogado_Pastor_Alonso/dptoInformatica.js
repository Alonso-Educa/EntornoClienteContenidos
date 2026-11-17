"use strict";

import { Aula } from "./aula.js";
import { Equipo } from "./equipo.js";

export class DptoInformatica {
    #aulas;

    constructor() {
        this.#aulas = new Map();
    }

    addAula(aula, grupo) {
        if (this.#aulas.has(grupo)) {
            return false;
        } else {
            this.#aulas.set(grupo, aula);
            return true;
        }
    }

    getUbicacion(idEquipo) {
        for (const aula in this.#aulas.values()) {
            if (aula.getPosicion(idEquipo) != null) {
                var [filas, columnas] = aula.getPosicion(idEquipo);
                return `Aula número: ${aula.getNumero()}, filas: ${filas}, columnas: ${columnas}`
            }
        }
        return 'Equipo desconocido';
    }

    getNEquipos() {
        return this.#aulas.values().reduce((ac,aula) => ac+aula.Puestos, 0);
    }
}