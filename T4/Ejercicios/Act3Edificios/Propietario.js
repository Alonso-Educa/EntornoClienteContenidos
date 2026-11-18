"use strict";

export class Propietario{
    nombre;
    genero;
    miembros;

    // getters y setters
    get Nombre(){
        return this.nombre;
    }
    get Genero(){
        return this.genero;
    }
    get Miembros(){
        return this.miembros;
    }

    set Nombre(nombre){
        this.nombre=nombre;
    }
    set Genero(genero){
        this.genero=genero;
    }
    set Miembros(miembros){
        this.miembros=miembros;
    }

    toString(){
        return `${this.nombre} (${this.genero}) - ${this.miembros} integrantes`;
    }
}