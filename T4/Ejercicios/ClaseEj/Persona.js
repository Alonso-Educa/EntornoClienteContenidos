"use strict";

export class Persona{
    #nombre;
    #apellidos;
    #dni;

    constructor(nombre,apellidos,dni){
        this.#nombre=nombre;
        this.#apellidos=apellidos;
        this.#dni=dni;
    }

    get Nombre(){
        return this.#nombre;
    }
    get Apellidos(){
        return this.#apellidos;
    }
    get Dni(){
        return this.#dni;
    }

    set Nombre(nombre){
        this.#nombre=nombre;
    }
    set Apellidos(apellidos){
        this.#apellidos=apellidos;
    }
    set Dni(dni){
        this.#dni=dni;
    }
}