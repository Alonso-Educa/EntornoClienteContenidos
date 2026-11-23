"use strict";

export class Aula {

    #numero;
    #equipos;
    #puestos;

    constructor(numero, filas, columnas) {
        this.#numero = numero;
        this.#equipos = [];
        for (let i = 0; i < filas; i++) {
            this.#equipos[i] = new Array(columnas).fill(null);
        }
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
        if ((this.#equipos.length <= fila || this.#equipos[fila].length <= columna) && !equipo.Personal) {
            return false;
        } else if (this.#equipos.length <= fila && equipo.Personal) {
            return false;
        } else {
            if (equipo.Personal) {
                // desplaza el resto de equipos 
                this.#equipos[fila].splice(columna, 0, equipo);
            } else {
                this.#equipos[fila][columna] = equipo;
            }
            return true;
        }
    }

    getPosicion(idEquipo) {
        for (let f = 0; f < this.#equipos.length; f++) {
            for (let c = 0; c < this.#equipos[f].length; c++) {
                if (this.#equipos[f][c]?.toString() === idEquipo) return [f, c];
            }
        }
        return null;
    }

    getPorcentajeOcupacion() {
        var totalOcupacion = this.#equipos.reduce((ac, valor) => {
            return ac + valor.reduce((ac2, equipo) => {
                return ac2 + (equipo != null ? 1 : 0);
            }, 0)
        }, 0);
        return Math.round((totalOcupacion / this.#puestos) * 100);
    }
}