"use strict";

export class Piloto {
    #nombre;
    #apellidos;
    #especialidad;
    #lista_especialidades;

    constructor(nombre, apellidos, especialidad) {
        this.#nombre = nombre;
        this.#apellidos = apellidos;
        this.#lista_especialidades = ["velocidad", "derrape", "mecanica"];
        // especialidad por defecto velocidad
        this.#lista_especialidades.indexOf(especialidad) == -1 ? this.#especialidad = "velocidad" : this.#especialidad = especialidad;
    }

    get Nombre(){
        return this.#nombre;
    }
    get Apellidos(){
        return this.#apellidos;
    }
    get Especialidad(){
        return this.#especialidad;
    }

    set Nombre(nombre){
        this.#nombre=nombre;
    }
    set Apellidos(apellidos){
        this.#apellidos=apellidos;
    }
    set Especialidad(especialidad){
        this.#lista_especialidades.indexOf(especialidad) == -1 ? this.#especialidad = "velocidad" : this.#especialidad = especialidad;
    }
}