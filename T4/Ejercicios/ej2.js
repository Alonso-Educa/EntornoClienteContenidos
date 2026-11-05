"use strict";

// let tablero = new Array(8).fill(new Array(8).fill(" "));
let tablero = new Array(8);
for (let i = 0; i < 8; i++) {
    tablero[i] = new Array(8).fill(" ");
}

const figura = {
    x: -1,
    y: -1,
    moverA: function (x, y) {
        this.x = x;
        this.y = y;
    }
}

let tipos = ["K", "K", "Q", "Q", "T", "T", "A", "A", "C", "C", "P", "P", "P", "P", "P", "P", "P", "P"];
let figuras = tipos.map(tipo => {
    let nuevo = Object.create(figura);
    nuevo.tipo = tipo;
    return nuevo;
});

function colocarPieza(figura, tablero) {
    let x, y;
    do {
        x = Math.floor(Math.random() * 8);
        y = Math.floor(Math.random() * 8);
    } while (tablero[x][y] !== " ");
    figura.moverA(x, y);
    tablero[x][y] = figura.tipo;
}

figuras.forEach(figura => colocarPieza(figura, tablero));

console.table(tablero);
