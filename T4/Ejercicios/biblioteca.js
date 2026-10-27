"use strict";

console.log("Parte 1:");

const LIBRO1 = {
    nombre: "Las aventuras de Alonso", color: "rojo", autor: "Alonso", n_paginas: 100,
    editorial: "Universidad de Valladolid", forrado: true, url_cover: "https://google.com",
    comprar: function () { console.log(`Libro de aventuras ${this.nombre} del autor ${this.autor} comprado.`); },
    toString: function () { return `${this.nombre}-${this.autor}(${this.n_paginas})**${this.forrado}`; }

};

LIBRO1.comprar();
console.log(LIBRO1.toString());

const LIBRO2 = {
    nombre: "Las aventuras de Laura", color: "verde", autor: "Laura", n_paginas: 160,
    editorial: "IES Julian Marias", forrado: true, url_cover: "https://google.com",
    comprar: function () { console.log(`Libro de aventuras ${this.nombre} del autor ${this.autor} comprado.`); },
    toString: function () { return `${this.nombre}-${this.autor}(${this.n_paginas})**${this.forrado}`; }
};

const LIBRO3 = {
    nombre: "Las aventuras de Pepe", color: "morado", autor: "Juan", n_paginas: 777,
    editorial: "IES Julian Marias", forrado: false, url_cover: "https://yahoo.com",
    comprar: function () { console.log(`Libro de aventuras ${this.nombre} del autor ${this.autor} comprado.`); },
    toString: function () { return `${this.nombre}-${this.autor}(${this.n_paginas})**${this.forrado}`; }
};

const LIBRO4 = {
    nombre: "Las aventuras de Mauro", color: "azul", autor: "Mauro", n_paginas: 33,
    editorial: "CIFP Juan de Herrera", forrado: false, url_cover: "https://brave.com",
    comprar: function () { console.log(`Libro de aventuras ${this.nombre} del autor ${this.autor} comprado.`); },
    toString: function () { return `${this.nombre}-${this.autor}(${this.n_paginas})**${this.forrado}`; }
};

console.log(LIBRO1);
console.log(LIBRO2);
console.log(LIBRO3);
console.log(LIBRO4);

let biblioteca = [LIBRO1, LIBRO2, LIBRO4];

console.log("\nParte 2:");
console.log("Biblioteca:");
console.log("Datos de la biblioteca: " + biblioteca.toString());


console.log("\nParte 3:");
for (const libro of biblioteca) {
    console.log("Editorial: " + libro.editorial);
}
biblioteca.forEach(libro => libro.comprar());

console.log("\nParte 4:");
let checkPages = l => l.n_paginas > 150;
console.log("checkPages():");
console.log(checkPages(LIBRO1));
console.log(checkPages(LIBRO3));

// version con indexOf()
// se comprueba si existe el libro buscandolo con indexOf en el array biblioteca
let checkLibro1 = (b, l) => b.indexOf(l) != -1;
console.log("checkLibro1():");
console.log(checkLibro1(biblioteca, LIBRO1));
console.log(checkLibro1(biblioteca, LIBRO3));

// version con find
// se comprueba si existe el libro buscando en biblioteca por nombre con un find, 
// devuelve el libro o undefined así que se comprueba si es diferente de undefined
let checkLibro2 = (b, l) => b.find(valor => valor.nombre == l.nombre) !== undefined;
console.log("checkLibro2():");
console.log(checkLibro2(biblioteca, LIBRO1));
console.log(checkLibro2(biblioteca, LIBRO3));

// Version de nico
// filtra el array biblioteca por libro con filter y devuelve un array con todos los valores coincidentes por nombre, 
// con map solo muestra los nombres, y comprueba si existe el libro por el tamaño del array devuelto
// se puede obviar el map
let checkLibro3 = (b, l) => b.filter(valor => valor.nombre == l.nombre).map(valor => valor.nombre == l.nombre).length != 0;
console.log("Versión de Nico - checkLibro3():");
console.log(checkLibro3(biblioteca, LIBRO1));
console.log(checkLibro3(biblioteca, LIBRO3));