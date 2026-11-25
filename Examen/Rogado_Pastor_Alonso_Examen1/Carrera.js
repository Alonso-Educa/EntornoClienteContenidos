"use strict";

export class Carrera {
    #nombre;
    #barrio;
    #fecha_indicada;
    #fecha_asignada;

    constructor(nombre, barrio, fecha = "-") {
        this.#nombre = nombre;
        this.#barrio = barrio;
        if (this.#validarFecha(fecha)) {
            this.#fecha_indicada = fecha;
            this.#fecha_asignada = new Date("2027-30-01");
        } else {
            this.#fecha_indicada = "-";
            this.#fecha_asignada = new Date("2027-30-01");
        }
    }

    get Nombre(){
        return this.#nombre;
    }
    get Barrio(){
        return this.#barrio;
    }
    get Fecha_Asignada() {
        return this.#fecha_asignada;
    }
    get Fecha_Indicada() {
        return this.#fecha_indicada;
    }

    set Nombre(nombre){
        this.#nombre=nombre;
    }
    set Barrio(barrio){
        this.#barrio=barrio;
    }

    #validarFecha(fecha) {
        return new Date(fecha) === "Invalid Date";
    }
}
let f = new Date("-");
console.log(f);
console.log(f === "Invalid Date");
