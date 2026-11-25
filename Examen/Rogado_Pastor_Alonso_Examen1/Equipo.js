"use strict";

export class Equipo {
    #pilotos;
    #lema;
    #infracciones;
    #lista_infracciones;
    #premios;
    #estrellas;
    #nombreEnClave;
    #matricula;

    constructor(piloto, copiloto, lema, infracciones = '', premios = '') {
        this.#pilotos = { piloto: piloto, copiloto: copiloto };
        this.#lema = lema;
        infracciones == '' ? this.#infracciones = [] : this.#infracciones = infracciones;
        premios == '' ? this.#premios = 0 : this.#premios = premios;
        this.#setListaInfracciones();
        this.#calcularNombreEnClave(this.#pilotos);
        this.#calcularEstrellas();
        this.#calcularMatricula();
    }

    #setListaInfracciones() {
        this.#lista_infracciones = new Map();
        this.#lista_infracciones.set("exceso de velocidad", 1);
        this.#lista_infracciones.set("saltarse un semáforo", 1);
        this.#lista_infracciones.set("conducción temeraria", 2);
        this.#lista_infracciones.set("huir de la policía", 3);
    }
    #calcularNombreEnClave({ piloto, copiloto }) {
        // array con datos de piloto y copiloto, 2 strings
        this.#nombreEnClave = `${[piloto.Nombre + " " + piloto.Apellidos, copiloto.Nombre + " " + copiloto.Apellidos].sort()[0].split(' ').map(valor => valor.charAt(0).toLocaleUpperCase()).join('')}&&${[piloto.Nombre + " " + piloto.Apellidos, copiloto.Nombre + " " + copiloto.Apellidos].sort()[1].split(' ').map(valor => valor.charAt(0).toLocaleUpperCase()).join('')}`;
    }
    #getEstrellas(infraccion) {
        return this.#lista_infracciones.has(infraccion) ? this.#lista_infracciones.get(infraccion) : 0;
    }
    #calcularEstrellas() {
        this.#estrellas = Math.min(this.#infracciones.reduce((ac, infraccion) => ac + this.#getEstrellas(infraccion), 0), 5);
    }
    #calcularMatricula() {
        this.#matricula = `${this.#lema.split(' ').filter(palabra => palabra.length % 2 == 0).map(palabra => palabra.charAt(0).toLocaleUpperCase()).join('')}-${this.#lema.split(' ').length}`;
    }

    get NombreEnClave() {
        return this.#nombreEnClave;
    }
    get Pilotos() {
        return this.#pilotos;
    }
    get Lema() {
        return this.#lema;
    }
    get Matricula() {
        return this.#matricula;
    }
    get Estrellas() {
        return this.#estrellas;
    }
    get PremioNeto() {
        return this.#premios > 5000 ? this.#premios * 0.8 : this.#premios;
    }

    set Pilotos({ piloto, copiloto }) {
        this.#pilotos = { piloto: piloto, copiloto: copiloto };
        this.#calcularNombreEnClave(this.#pilotos);
    }
    set Lema(lema) {
        this.#lema = lema;
        this.#calcularMatricula();
    }
    registrarPremio(premio) {
        this.#premios += premio;
    }
    registrarInfraccion(infraccion) {
        this.#infracciones.push(infraccion);
        this.#calcularEstrellas();
    }
}