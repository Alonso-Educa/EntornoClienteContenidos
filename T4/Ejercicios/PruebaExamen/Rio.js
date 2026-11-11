"use strict";

export class Rio {
    #nombre;
    #cuenca;
    #caudalMedio;
    #poblaciones;

    constructor(nombre, cuenca) {
        this.#nombre = nombre;
        this.#cuenca = cuenca;
        this.#caudalMedio = 0;
        this.#poblaciones = [];

        // Cada vez que se instancie un rio se debe mostrar automáticamente el mensaje: nuevo rio xxxxx, de la cuenca: xxxxx. 
        document.write(`<p>Nuevo rio ${nombre}, de la cuenca: ${cuenca}.</p>`);
    }

    // Se le  pasa la población y las agrega a las ya existentes sí existen.
    agregarPoblacion(poblacion) {
        this.#poblaciones.push(poblacion);

        this.#datosPoblacion(true,poblacion);
    }

    // Se le pasa la población y la elimina de las ya existentes.
    eliminarPoblacion(poblacion) {
        this.#poblaciones=this.#poblaciones.filter(p => p != poblacion);

        this.#datosPoblacion(false,poblacion);
    }

    // Se le pasa el nuevo caudal.
    modificarCaudalmedio(numero) {
        this.#caudalMedio = numero;
    }

    // Devuelve el nombre.
    imprimeNombre() {
        return this.#nombre;
    }

    // Devuelve la cuenca.
    imprimeCuenca() {
        return this.#cuenca;
    }

    // Devuelve el caudal medio. (si esta sin informar se debe mostrar no consta)
    imprimeCaudal() {
        return this.#caudalMedio != 0 ? this.#caudalMedio : "No consta";
    }

    // Devuelve las poblaciones. (si esta sin informar se debe mostrar no consta)
    imprimePoblaciones() {
        return this.#poblaciones != [] ? this.#poblaciones.join(", ") : "No consta";
    }

    // Devuelve toda la información de un rio. Con el estilo Nombre: nombre, Cuenca: cuenca, Caudal medio: Caudal medio (si esta sin informar se debe mostrar no consta),  
    // Poblaciones: Poblaciones por las que pasa si esta sin informar se debe mostrar no consta. 
    imprimeRio() {
        return `Nombre: ${this.imprimeNombre()}, Cuenca: ${this.imprimeCuenca()}, Caudal medio: ${this.imprimeCaudal()}, Poblaciones: ${this.imprimePoblaciones()}`;
    }

    // Cada vez que se agrege/elimine una población a un libro que muestre un mensaje del estilo: El rio xxxxxxxx pasa/no pasa por xxxxxx. 
    #datosPoblacion(bool, poblacion) {
        document.write(`<p>El rio ${this.#nombre} ${bool? "ahora pasa" : "ya no pasa"} por ${poblacion}.</p>`);
    }
}