"use strict";

export class DptoInformatica {
    #aulas;

    constructor() {
        this.#aulas = new Map();
    }

    get Aulas() {
        return this.#aulas;
    }

    addAula(aula, grupo) {
        if (this.#aulas.has(aula.Numero)) {
            return false;
        } else {
            this.#aulas.set(aula.Numero, { aula: aula, grupo: grupo });
            return true;
        }
    }

    getUbicacion(idEquipo) {
        for (const { aula } of this.#aulas.values()) {
            if (aula.getPosicion(idEquipo) != null) {
                var [filas, columnas] = aula.getPosicion(idEquipo);
                return `Aula número: ${aula.Numero}, Fila: ${filas}, Columna: ${columnas}`;
            }
        }
        return 'Equipo desconocido';
    }

    getNEquipos() {
        return this.#aulas.values().reduce((ac, { aula }) => ac + aula.Equipos.reduce((ac2, fila) => ac2 + fila.length, 0), 0);
    }
}