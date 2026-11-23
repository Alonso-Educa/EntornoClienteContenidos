"use strict";

import { Persona } from "./Persona.js";

export class Profesor extends Persona {

    #asignaturas;

    constructor(nombre, apellidos, dni, asignaturas) {
        super(nombre, apellidos, dni);
        this.#asignaturas = asignaturas;
        document.write(`<p>He sido creado y mis atributos son: ${nombre} (nombre) ${apellidos} (apellidos) ${dni} (dni) ${this.#asignaturas.join(" ")} (asignaturas)</p>`);
    }

    get Asignaturas() {
        return this.#asignaturas;
    }

    set Asignaturas(asignaturas) {
        this.#asignaturas = asignaturas;
    }

    corregirEjercicio(asignatura, numero) {
        if(this.#asignaturas.find(asignatura) !== undefined){
            document.write(`El profesor ${super.Nombre, super.Apellidos} ha corregido el ejercicio ${numero} de la asignatura ${asignatura}. Nota: ${(Math.random() * 10).toFixed(2)}.`);
        }else{
            document.write(`No se ha podido corregir un ejercicio de una asignatura que no se imparte.`);
        }
    }
}