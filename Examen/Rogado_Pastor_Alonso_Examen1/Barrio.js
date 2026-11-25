"use strict";

export class Barrio {
    #nombre;
    #mapa;

    constructor(nombre) {
        this.#nombre = nombre;
        this.#generarMapa();
    }

    #generarMapa() {
        // 4 filas con 5 columnas, es decir, 5 arrays con otro array de 4 posiciones
        // filas y columnas van del reves
        // this.#mapa = new Array(5).fill(new Array(4).fill(' '));
        this.#mapa = new Array(5);
        for (let i = 0; i < this.#mapa.length; i++) {
            this.#mapa[i] = new Array(4).fill(' ');
        }
        this.#mapa[0][2] = 'P';
        this.#mapa[2][4] = 'P';
    }

    anadirGaraje(fila, columna, { nombreEnClave }, inscrito = true) {
        let encontrado = false;
        let peligroCasillaVecina = false;

        this.#mapa.forEach(fila => fila.forEach(valor => {
            if (valor == nombreEnClave) {
                encontrado = true;
            }
        }));

        // calcular posiciones adyacentes (si hay algo = true)
        // arriba 
        let arriba = false;
        if (!(columna - 1 < 0)) {
            arriba = this.#mapa[fila][columna - 1] !== ' ';
        }
        // abajo
        let abajo = false;
        if (!(columna + 1 > 3)) {
            abajo = this.#mapa[fila][columna + 1] !== ' ';
        }
        // izquierda
        let izquierda = false;
        if (!(fila - 1 < 0)) {
            izquierda = this.#mapa[fila - 1][columna] !== ' ';
        }
        // derecha
        let derecha = false;
        if (!(fila + 1 > 4)) {
            derecha = this.#mapa[fila + 1][columna] !== ' ';
        }

        // validar posiciones adyacentes (si no da 0 la suma logica es el ultimo error)
        if (arriba || abajo || izquierda || derecha) {
            peligroCasillaVecina = true;
        }

        if (fila - 1 > 4 || fila - 1 < 0 || columna - 1 > 4 || columna - 1 < 0) {
            return "La casilla está fuera del mapa";
        } else if (this.#mapa[fila][columna] != ' ') {
            return "La casilla no está libre (hay una comisaría u otro garaje)"
        } else if (!inscrito) {
            return "El equipo no está inscrito en la carrera";
        } else if (encontrado) {
            return "El equipo ya tiene garaje";
        } else if (peligroCasillaVecina) {
            return "En una casilla vecina (arriba, abajo, izquierda o derecha, no en diagonal) hay una comisaría u otro garaje"
        } else {
            this.#mapa[columna][fila] = nombreEnClave;
        }
    }

    get Nombre() {
        return this.#nombre;
    }
    get Mapa() {
        return this.#mapa;
    }
}