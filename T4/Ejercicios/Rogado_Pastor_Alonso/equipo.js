"use strict";

export class Equipo {
    #id;
    #fecha;
    #descripcion;
    #personal; // true portatil, false sobremesa

    constructor(descripcion, personal, dias = -1) {
        this.#descripcion = descripcion;
        this.#personal = personal;
        dias == -1 ? this.#fecha = new Date("2027-06-30") : this.#fecha = new Date(new Date("2026-09-01").getTime() + (dias * 24 * 3600 * 1000));
        this.#setId();
    }

    // getters y setters?
    get Fecha() {
        return this.#fecha;
    }
    get Descripcion() {
        return this.#descripcion;
    }
    get Personal() {
        return this.#personal;
    }

    set Descripcion(descripcion) {
        this.#descripcion = descripcion;
        this.#setId();
    }
    set Fecha(dias) {
        dias == 0 ? this.#fecha = new Date("06-30-2027") : this.#fecha = new Date(new Date("2026-09-01").getTime() + (dias * 24 * 3600 * 1000));
        this.#setId();
    }
    set Personal(personal) {
        this.#personal = personal;
        this.#setId();
    }
    #setId() {
        this.#id = `${this.#personal == true ? 'P' : 'S'}-${this.#descripcion.slice(-3)}-${this.#fecha.getDate()}-${this.#fecha.getMonth() + 1}-${this.#fecha.getFullYear()}`;
    }

    toString() {
        return this.#id;
    }
}