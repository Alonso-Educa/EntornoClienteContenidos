"use strict";

export class CentralMedidas {

    constructor() {
        this.temperaturas = this.#calcularTemperaturas();
    }

    #calcularTemperaturas() {
        this.temperaturas = Array(30).fill().map(t => Math.ceil(Math.random() * 60) - 20);
    }

    get Temperaturas(){
        return this.temperaturas;
    }

    modificarTemperaturaCentral(dia, temperatura) {
        if (dia > 0 && dia <= 30) {
            this.temperaturas[i + 1] = temperatura;
            document.write(`<p>Se ha modificado la temperatura de la ciudad ${ciudad} del dia ${dia} de la estación metereológica.</p>`);
        }else{
            document.write(`<p>No se ha podido modificar la temperatura.</p>`);
        }
    }
}