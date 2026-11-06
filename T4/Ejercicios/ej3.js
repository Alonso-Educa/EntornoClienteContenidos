"use strict";

// clase Vehiculo con atributo privado pasajeros y su getter/setter
class Vehiculo {

    #pasajeros;

    constructor(pasajeros) {
        this.#pasajeros = pasajeros;
    }

    set pasajeros(valor) {
        this.#pasajeros = valor;
    }

    get pasajeros() {
        return this.#pasajeros;
    }
}

// clase Turismo hija de Vehiculo con atributo privado color y su getter/setter
class Turismo extends Vehiculo {

    #color;

    constructor(pasajeros, color) {
        super(pasajeros);
        this.#color = color;
    }

    set color(valor) {
        this.#color = valor;
    }

    get color() {
        return this.#color;
    }
}

// clase Camion hija de Vehiculo con atributo privado tara y su getter/setter
class Camion extends Vehiculo {

    #tara;

    constructor(pasajeros, tara) {
        super(pasajeros);
        this.#tara = tara;
    }

    set tara(valor) {
        this.#tara = valor;
    }

    get tara() {
        return this.#tara;
    }
}

// funcion que devuelve el tiempo actual en formato hh:mm:ss
function capturaReloj() {
    let actual = new Date();
    return `${actual.getUTCHours()}:${actual.getUTCMinutes()}:${actual.getUTCSeconds()}`;
}

// funcion que trabaja y añade vehiculos sobre el array global de vehiculos
function generarVehiculos() {
    // lista de colores del enunciado
    let colores = ["red", "blue", "green"];

    // meter turismos
    for (let i = 0; i < Math.ceil(Math.random() * 4); i++) {
        // pasajeros y color aleatorios
        arrayVehiculos.push(new Turismo(Math.ceil(Math.random() * 7), colores[Math.floor(Math.random() * 3)]));
    }

    // meter camiones
    for (let i = 0; i < Math.ceil(Math.random() * 4); i++) {
        // pasajeros y tara aleatorios
        arrayVehiculos.push(new Camion(Math.ceil(Math.random() * 7), Math.floor(Math.random() * 10000)));
    }
}

// funcion que imprime una tabla con los valores de la lista de vehiculos
// imprime hora, tipo, pasajeros y color/tara
function mostrarVehiculos() {
    document.write("<table border='1'>");
    arrayVehiculos.forEach(vehiculo => {
        document.write("<tr>");
        document.write(`<td>Hora: ${capturaReloj()}</td>`);

        document.write(`<td>Tipo: ${vehiculo instanceof Turismo ? "Turismo" : "Camion"}</td>`);
        
        document.write(`<td>Pasajeros: ${vehiculo.pasajeros}</td>`);

        if (vehiculo instanceof Turismo) {
            document.write(`<td bgcolor="${vehiculo.color}">Color: ${vehiculo.color}</td>`);
        } else {
            document.write(`<td>Tara: ${vehiculo.tara}</td>`);
        }

        document.write("</tr>");
    });
    document.write("</table>");
}

// array global de vehiculos
let arrayVehiculos = [];

// Las funciones se invocarán un total de 10 veces con un intervalo de 2 segundos.
let contador = 0;
const id = setInterval(function () {
    generarVehiculos();
    mostrarVehiculos();
    // se vacia el array después de cada bucle para que no se imprima lo mismo repetidamente
    arrayVehiculos = [];
    // al ejecutarse 10 veces detiene el bucle
    if (contador++ === 10) {
        clearInterval(id);
    }
}, 2000);