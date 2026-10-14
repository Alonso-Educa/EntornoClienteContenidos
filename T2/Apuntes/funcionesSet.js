"use strict";

// Set o conjunto de valores. Se diferencia de los arrays porque no permite repetidos
let conjunto = new Set();
let conjunto2 = new Set(["1", "2", "a", 3, 2]); // 5 valores ("2" y 2 cuentan como elementos diferentes)
let conjunto3 = new Set("palabra"); // cada valor es un caracter distinto de la palabra, [p a l b r]

// add(element): Añade un nuevo valor
conjunto.add("primero");
conjunto.add("Hola");
conjunto.add("hola");
conjunto.add(".");
conjunto.add("");
conjunto.add("primero");
conjunto.add("hola");

console.log(conjunto);

// size: Devuelve el tamaño del conjunto
console.log(conjunto.size);

// delete(element): Borra un valor. Si se imprime devuelve true o false dependiendo si existe el elemento o no
conjunto.delete("Hola");
conjunto.delete("H0la");

// has(element): Comprueba si hay un elemento en el conjunto
console.log(conjunto.has("primero"));
console.log(conjunto.has("segundo"));

// values(): Devuelve un objeto iterable con cada uno de los valores del conjunto
console.log(conjunto.values());

// clear(): Elimina todos los valores del conjunto
conjunto.clear();

// 
console.log(conjunto.values());
console.log(conjunto2.values());
console.log(conjunto3.values());

// entries(): Devuelve pares clave-valor como en map, pero el valor es la propia clave
console.log("Entries:");
console.log(conjunto2.entries());

// for-of
console.log("For-of (values)");
for (const valor2 of conjunto2.values()) {
  console.log(valor2);
}

console.log("For-of (entries)");
for (const valor2 of conjunto2.entries()) {
  console.log(valor2);
}
