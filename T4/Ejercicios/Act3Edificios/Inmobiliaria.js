"use strict";

export class Inmobiliaria {
    #edificios;

    constructor() {
        this.#edificios = [];
    }

    addEdificio(edificio) {
        this.#edificios.push(edificio);
    }
    getEdificio(calle, numero) {
        return this.#edificios.find(edificio => edificio.Calle == calle && edificio.Numero == numero, undefined);
    }

    imprimirEdificios() {
        this.#edificios.forEach(edificio => {
            console.log(`Edificio en calle: Calle ${edificio.Calle} Nº: ${edificio.Numero} CP: ${edificio.CodigoPostal}`);
        });
    }
}