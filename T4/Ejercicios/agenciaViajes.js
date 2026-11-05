"use strict";

console.log("Parte 1:");

function AgenciaViaje(ciudad, pais, precio, dias, valoracion, etiquetas, vuelo_incluido, url_foto) {
    this.ciudad = ciudad;
    this.pais = pais;
    this.precio = precio;
    this.dias = dias;
    this.valoracion = Math.min(Math.max(valoracion, 0), 5);
    this.etiquetas = etiquetas;
    this.vuelo_incluido = vuelo_incluido;
    this.url_foto = url_foto;
    this.reservar = function () { console.log(`Viaje a ${this.ciudad} (${this.pais}) reservado por ${this.precio} €.`) };
    this.toString = function () { return `${this.ciudad.toUpperCase()} | ${this.pais.replace(this.pais.charAt(0), this.pais.charAt(0).toUpperCase())} | ${this.dias} días | ${this.precio}€` };
}

const AGENCIA1 = new AgenciaViaje("Roma", "Italia", 450, 5, 4.6, ["cultura", "gastronomía", "historia"], true, "https://ejemplo.com/roma.jpg");
const AGENCIA2 = new AgenciaViaje("Tijuana", "Mexico", 320, 4, 4.1, ["cultura", "naturaleza"], false, "https://ejemplo.com/cracovia.jpg");
const AGENCIA3 = new AgenciaViaje("Cracovia", "Polonia", 580, 6, 4.8, ["playa", "historia", "fotografía"], true, "https://ejemplo.com/cracovia.jpg");
const AGENCIA4 = new AgenciaViaje("Lima", "Peru", 410, 5, 4.4, ["cultura", "gastronomía", "historia"], true, "https://ejemplo.com/lima.jpg");
const AGENCIA5 = new AgenciaViaje("oporto", "portugal", 750, 7, 10.9, ["playa", "romántico", "relax"], true, "https://ejemplo.com/oporto.jpg");

// Pruebas
AGENCIA1.reservar();                  // Viaje a Roma (Italia) reservado por 450€
console.log(AGENCIA2.toString());     // ROMA | Italia | 5 días | 450€
console.log(`${AGENCIA5}`);      // DUBROVNIK | Croacia | 6 días | 580€


console.log("\nParte 2:");
let catalogoR = [AGENCIA1, AGENCIA2, AGENCIA3, AGENCIA4];
console.log(catalogoR.toString());


console.log("\nParte 3:");
for (const agencia of catalogoR) {
    console.log(agencia.ciudad + ": " + Object.values(agencia).join(" | "));
}


console.log("\nParte 4:");
let esEconomico = ({ precio }) => precio < 500;
console.log("esEconomico():");
console.log(esEconomico(AGENCIA1));
console.log(esEconomico(AGENCIA3));

let estaEnCatalogo = (catalogo, destino) => catalogo.some(agencia => agencia.ciudad === destino.ciudad);
console.log("estaEnCatalogo():");
console.log(estaEnCatalogo(catalogoR, AGENCIA1));
console.log(estaEnCatalogo(catalogoR, AGENCIA5));


console.log("\nParte 5:");
// renombrado de catlogoCompleto
let catalogo = [...catalogoR, AGENCIA5];
console.log(catalogo.toString());


console.log("\nParte 6:");
// destinosEconomicos: usa filter junto con esEconomico para obtener un nuevo
// array con los destinos baratos.
let destinosEconomicos = catalogo => catalogo.filter(destino => esEconomico(destino));
console.log("destinosEconomicos():");
console.log(destinosEconomicos(catalogo).map(d => d.ciudad));

// ciudadesEnMayusculas: usa map para obtener un array solo con los nombres de
// ciudad en mayúsculas.
let ciudadesEnMayusculas = catalogo => catalogo.map(destino => destino.ciudad.toUpperCase());
console.log("ciudadesEnMayusculas():");
console.log(ciudadesEnMayusculas(catalogo));

// precioTotal: usa reduce para calcular el precio de viajar a todos los destinos del
// catálogo.
let precioTotal = catalogo => catalogo.reduce((ac, { precio }) => ac + precio, 0);
console.log("precioTotal():");
console.log(precioTotal(catalogo));

// precioMedioPorDia: usa reduce para calcular el precio medio por día de todo el
// catálogo (suma de precios dividida entre suma de días). Redondea a dos decimales
// con toFixed(2).
let precioMedioPorDia = catalogo => {
    let precio = catalogo.reduce((ac, destino) => ac + destino.precio, 0);
    let dias = catalogo.reduce((ac, destino) => ac + destino.dias, 0);
    return (precio / dias).toFixed(2);
};
console.log("precioMedioPorDia():");
console.log(precioMedioPorDia(catalogo));

// buscarPorPais: recibe un país y el catálogo, y usa find para devolver el primer
// destino de ese país (o undefined si no hay ninguno).
let buscarPorPais = (pais, catalogo) => catalogo.find(destino => destino.pais === pais);
console.log("buscarPorPais():");
console.log(buscarPorPais("Italia", catalogo).toString());
console.log(buscarPorPais("Francia", catalogo));

// mejorValorado: usa reduce para devolver el destino con mayor valoración.
let mejorValorado = catalogo => catalogo.reduce((ac, destino) => destino.valoracion > ac.valoracion ? ac = destino : ac);
console.log("mejorValorado():");
console.log(mejorValorado(catalogo).toString());

// destinosOrdenados: devuelve una copia del catálogo ordenada de menor a mayor
// precio con sort. Recuerda que sort modifica el array original, así que haz antes
// una copia con spread.
let destinosOrdenados = catalogo => [...catalogo].sort((destino1, destino2) => destino1.precio - destino2.precio);
console.log("destinosOrdenados():");
console.log(destinosOrdenados(catalogo).map(destino => `${destino.ciudad} (${destino.pais})`));


console.log("\nParte 7:");
console.log(buscarPorPais("Albania", catalogo) !== undefined ? "Hay viajes a Albania" : "No hay viajes a Albania");


console.log("\nParte 8:");
// generarCodigo: ej. ROM-IT-05
let generarCodigo = ({ ciudad, pais, dias }) =>
    `${ciudad.slice(0, 3).toUpperCase()}-${pais.slice(0, 2).toUpperCase()}-${String(dias).padStart(2, "0")}`;
console.log("generarCodigo():");
console.log(generarCodigo(AGENCIA1));       // ROM-IT-05
console.log(generarCodigo(AGENCIA2));  // DUB-CR-06

// buscarPorEtiqueta: destinos que contienen la etiqueta
let buscarPorEtiqueta = (etiqueta, catalogo) =>
    catalogo.filter(({ etiquetas }) =>
        etiquetas.map(e => e.toLowerCase()).includes(etiqueta.trim().toLowerCase())
    );
console.log("buscarPorEtiqueta():");
console.log(buscarPorEtiqueta("  CULTURA ", catalogo).map(d => d.ciudad));
console.log(buscarPorEtiqueta("playa", catalogo).map(d => d.ciudad));
console.log(buscarPorEtiqueta("montaña", catalogo));

// resumenViaje: frase con los espacios de la ciudad cambiados por guiones
let resumenViaje = ({ ciudad, pais, dias, precio }) =>
    `Viaje a ${ciudad.replace(/ /g, "-")} (${pais}): ${dias} días por ${precio}€.`;
console.log("resumenViaje():");
const tiranaCentro = new AgenciaViaje("Tirana Centro", "Albania", 300, 4, 4, ["cultura"], false, "https://ejemplo.com/tirana-centro.jpg");
console.log(resumenViaje(tiranaCentro));
// Viaje a Tirana-Centro (Albania): 4 días por 300€.
console.log(resumenViaje(AGENCIA1));

// paisesDelCatalogo: primera palabra de cada país, solo las que empiezan por I
let paisesDelCatalogo = catalogo =>
    catalogo
        .map(({ pais }) => pais.split(" ")[0])
        .filter(palabra => palabra.startsWith("I"));
console.log("paisesDelCatalogo():");
const dublin = new AgenciaViaje("Dublín", "Irlanda del Norte", 520, 4, 4.2, ["cultura"], true, "https://ejemplo.com/dublin.jpg");
console.log(paisesDelCatalogo(catalogo));
console.log(paisesDelCatalogo([...catalogo, dublin]));

console.log("\nParte 9:");
// añadirDestino: devuelve un nuevo array con el destino al final
const añadirDestino = (catalogo, destino) => [...catalogo, destino];

// cancelarDestino: borra la ciudad del array original (modifica el array)
const cancelarDestino = (catalogo, ciudad) => {
    const indice = catalogo.findIndex(destino => destino.ciudad === ciudad);
    if (indice !== -1) {
        catalogo.splice(indice, 1);
    }
};

// aplicarDescuento: nuevo array con los precios rebajados, sin tocar los originales
const aplicarDescuento = (catalogo, porcentaje) =>
    catalogo.map(destino => ({ ...destino, precio: destino.precio * (100 - porcentaje) / 100 }));

// resumenPorPais: objeto que cuenta los destinos por país
const resumenPorPais = catalogo =>
    catalogo.reduce((conteo, { pais }) => {
        conteo[pais] = (conteo[pais] || 0) + 1;
        return conteo;
    }, {});

// ---------- PRUEBAS ----------


// cancelarDestino (uso una copia para no estropear el catálogo de las demás pruebas)
const copia = [...catalogo];
cancelarDestino(copia, "Roma");
console.log(copia.map(d => d.ciudad));
// ["Tirana", "Dubrovnik", "Atenas", "Santorini"]
cancelarDestino(copia, "Madrid");
console.log(copia.length);
// 4 (Madrid no existe, no se borra nada)

// aplicarDescuento
const rebajados = aplicarDescuento(catalogo, 10);
console.log(rebajados.map(d => d.precio));
// [405, 288, 522, 369, 675]
console.log(catalogo.map(d => d.precio));
// [450, 320, 580, 410, 750] (los originales no cambian)
console.log(rebajados[0].toString());
// ROMA | Italia | 5 días | 405€

// resumenPorPais
console.log(resumenPorPais(catalogo));
// { Italia: 1, Albania: 1, Croacia: 1, Grecia: 2 }

console.log("\nParte 10:");
// ya está probado todo