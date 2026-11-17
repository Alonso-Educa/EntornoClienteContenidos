"use strict";

import { Equipo } from "./equipo.js";

export class Aula {

    #numero;
    #equipos;
    #puestos;

    constructor(numero, filas, columnas) {
        this.#numero = numero;
        this.#equipos = new Array(filas).fill(new Array(columnas).fill(null));
        this.#puestos = filas * columnas;
    }

    // getters y setters?
    get Numero() {
        return this.#numero;
    }
    get Equipos() {
        return this.#equipos;
    }
    get Puestos() {
        return this.#puestos;
    }
    set Numero(numero) {
        this.#numero = numero;
    }

    activaEquipo(equipo, fila, columna) {
        if ((this.#equipos.length < fila || this.#equipos[fila].length < columna) && !equipo.personal) {
            return false;
        } else if (this.#equipos.length < fila && equipo.personal) {
            return false;
        } else {
            this.#equipos[fila][columna] = equipo;
        }
    }

    getPosicion(idEquipo) {
        let filas = 0, columnas = 0;
        this.#equipos.forEach(fila => {
            filas++;
            fila.forEach(equipo => {
                columnas++;
                if (equipo.Id == idEquipo) {
                    return [filas, columnas];
                }
            })
        });
        return null;
    }

    getPorcentajeOcupacion() {
        var totalOcupacion = this.#equipos.reduce((ac, valor) => {
            return ac + valor.reduce((ac2, equipo) => {
                return ac2 + (equipo != null ? 1 : 0);
            }, 0)
        }, 0);
        return Math.round(totalOcupacion / this.#puestos);
    }
}