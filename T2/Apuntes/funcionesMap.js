"use strict";

// Map ([conjunto]): Constructor. Acepta un conjunto de pares clave-valor. Puede estar vacío o con valores
let mapa = new Map();
let mapa2 = new Map([
  [1, "one"],
  [2, "two"],
  [3, "three"],
]);
// console.log(mapa2.entries());

// set(key,value): Añade una nueva pareja clave-valor
mapa.set("a", 1);
mapa.set("b", 12);
mapa.set("c", 3);

// get(key): Obtiene el valor asociado a una clave
console.log(mapa.get("b"));

// size: Devuelve el número de entradas del Map. Importante: no se escribe size()
console.log(mapa.size);

// delete(key): Borra una pareja clave-valor mediante la clave
mapa.delete("c");

// has(key): Comprueba si hay determinada clave en el mapa
console.log(mapa.has("a"));
console.log(mapa.has("c"));

console.log("Mapa: " + mapa); // no devueve los valores
console.log(mapa); // devuelve tamaño y pares clave-valor (como un entries)
// values(): Devuelve los valores del mapa
console.log(mapa.values());
// keys(): Devuelve las claves del mapa
console.log(mapa.keys());
// entries(): Devuelve un conjunto de matrices clave-valor
console.log(mapa.entries());

// clear(): Elimina todos los valores del mapa
mapa.clear();
console.log(mapa);

// Diferencia entre values, keys y entries

// Iterar con for of
for (var [clave, valor] of mapa2) {
  console.log(clave + " = " + valor);
}

// For-in: No imprime nada. Solo sirve para iterar sobre un array
for (const clave in mapa2.keys()) {
  console.log(clave);
}

for (const valor in mapa2.values()) {
  console.log(valor);
}
