"use strict";

// Funciones de repetición que iteran en arrays
// Pueden tener una función como parámetro, normalmente función flecha


// 1. foreach(): Permite iterar sobre cada elemento de un array
let a = ['a', 'b', 'c'];
console.log("1. forEach():");
// Foreach normal
a.forEach(function (e) {
    console.log(e);
});
// Con función flecha
a.forEach(e => console.log(e));
// Clave-valor
a.forEach((valor, key) => console.log(`Clave: ${key}, valor: ${valor}`));
// Clave, valor y array original
a.forEach((valor, key, array) => console.log(`Clave: ${key}, valor: ${valor}, [${[...array]}]`));

// 2. map(): Devuelve un nuevo array resultado de transformar el array inicial
console.log("\n2. map():");
let b = [1, 2, 3];
console.log(b.map(e => e + 1)); // print del array +1
console.log(b.map(valor => valor + 1 + b[1])); // valor + 1 + indice1
console.log(b.map((valor, key) => valor + 1 + b[1] + key)); // valor + 1 + indice1 + posicion
console.log(b.map((valor, key) => key ** valor)); //  posicion ^ valor
console.log(['a', 'b'].map((valor, key, array) => valor + key + array.length)); //  valor indice y ta,año del array

// 3. reduce(): Devuelve un valor resultado de un operación sobre los elementos. [previousValue, item, index, array]
// Se acarrea el resultado a la siguiente llamada
// previousValue: resultado anterior o acumulador (inicial 0)
// item: Valor actual
// idex: Indice actual
// array: Matriz actual
console.log("\n3. reduce():");
console.log(b.reduce(e => e)); // 1 (indice 0)
console.log(b.reduce((a, b) => a + b)); // 1 + 2 + 3
console.log(b.reduce((a, b) => a - b)); // 1 - 2 - 3 
console.log(b.reduce((a, b) => a ** b)); // 1 ^ 2 ^ 3 = 1
// ac => ac; ac, n => ac + n; ac, n i => ac+n+io; ac, n,i,a=> ac+n+i+a[2]; ac,n
// 4. reduceRight(): Igual que reduce() pero itera de derecha a izquierda (al revés)
console.log("\n4. reduceRight():");
console.log(b.reduceRight(e => e)); // 3 (indice 0)
console.log(b.reduceRight((a, b) => a + b)); // 3 + 2 + 1
console.log(b.reduceRight((a, b) => a - b)); // 3 - 2 - 1
console.log([2, 3, 4].reduceRight((a, b) => a ** b)); // 2 ^ 3 ^ 4  = 2 ^ 12

// 5. filter(): Obtiene un nuevo array filtrando el original
console.log("\n5. filter():");
let c = ["hola", "pepe", "aaaaaaaa", "1", "."];
console.log(c.filter(valor => valor.length > 3)); // devuelve valores con longitud 3 o más
console.log(c.filter((valor, key) => key % 2 == 0)); // devuelve valores en indice par

// 6. every(): Devuelve true si todos los elementos cumplen una condición (and)
console.log("\n6. every():");
console.log(c.every(valor => /a/.test(valor)));
console.log(c.every(valor => valor.length > 0));

// 7. some(): Devuelve true si alguno de los elementos cumple una condición (or)
console.log("\n7. some():");
console.log(c.some(valor => /^a$/.test(valor)));
console.log(c.some(valor => /hola/.test(valor)));
console.log(c.some(valor => valor.length > 0));
console.log(c.some(valor => valor.length > 5));

// 8. find(): Devuelve el primer valor del array que cumple una condición o undefined en caso contrario
console.log("\n8. find():");
let d = [];
console.log(d.find(e => e)); // undefined (array vacío)
console.log(c.find(valor => valor.length > 3)); // "hola" (primero con longitud mayor que 3)
console.log(c.find(valor => /^a+$/.test(valor))); // "aaaaaaaa" (primero formado solo por aes)
console.log(c.find(valor => valor.length > 10)); // undefined (ninguno cumple)
console.log(b.find((valor, key) => valor * key > 1)); // 2 (valor * posicion > 1)
console.log(c.find((valor, key, array) => key == array.length - 1)); // "." (último elemento)

// 9. findIndex(): Devuelve el primer índice de un valor del array que cumple una condición o -1 en caso contrario
console.log("\n9. findIndex():");
console.log(d.findIndex(e => e)); // -1 (array vacío)
console.log(c.findIndex(valor => valor.length > 3)); // 0 ("hola")
console.log(c.findIndex(valor => /^a+$/.test(valor))); // 2 ("aaaaaaaa")
console.log(c.findIndex(valor => valor.length > 10)); // -1 (ninguno cumple)
console.log(b.findIndex((valor, key, array) => valor == array.length)); // 2 (valor 3 == tamaño del array)

// Funciones de repetición: Combinaciones de las funciones anteriores
console.log("\nCombinaciones:");
console.log(b.map(e => e * 2).filter(e => e > 2)); // [2, 4, 6] -> [4, 6]
console.log(c.filter(valor => valor.length > 3).map(valor => valor.toUpperCase())); // longitud > 3 y a mayúsculas
console.log(c.map(valor => valor.length).reduce((a, b) => a + b)); // suma de las longitudes: 4 + 4 + 8 + 1 + 1 = 18
console.log(c.filter(valor => valor.length > 3).map(valor => valor.length).reduce((a, b) => a + b)); // suma de longitudes > 3: 4 + 4 + 8 = 16

// Tarea de ejemplos de reduce():
console.log("\nPruebas usando reduce() con distintos parámetros:");
let e = [1, 2, 4, 6, 9];
console.log(e.reduce(ac => ac)); // ac => ac: devuelve el acumulador, que es siempre el primer elemento = 1
console.log(e.reduce((ac, n) => ac + n)); // ac + n: 1 + 2 + 4 + 6 + 9 = 22
console.log(e.reduce((ac, n, i) => ac + n + i)); // ac + n + i: (1 + 2 + 1) = 4; (4 + 4 + 2) = 10; (10 + 6 + 3) = 19; (19 + 9 + 4) = 32
console.log(e.reduce((ac, n, i, a) => ac + n + i + a[2])); // ac + n + i + a[2] (a[2] = 4): (1 + 2 + 1 + 4) = 8; (8 + 4 + 2 + 4) = 18; (18 + 6 + 3 + 4) = 31; (31 + 9 + 4 + 4) = 48