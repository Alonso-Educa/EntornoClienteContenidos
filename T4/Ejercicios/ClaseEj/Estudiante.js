"use strict";

import { Persona } from "./Persona.js";
import { Estudiante } from "./Estudiante.js";

export class Estudiante extends Persona {

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

    entregarEjercicio(asignatura, numero) {
        if (this.#asignaturas.find(asignatura) !== undefined) {
            document.write(`Se ha entregado el ejercicio ${numero} de la asignatura ${asignatura}.`);
        } else {
            document.write(`No se ha podido entregar un ejercicio de una asignatura que no se recibe.`);
        }
    }
}
