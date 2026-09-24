// 1. Length: Devuelve la longitud de una variable
console.log("\n1. Length:");
let n = 1;
let str = "hola";
let lista1 = ["abc", "b", "c", 4, , [1, 2, 3]];
console.log(n + " | lenth = " + n.length);
console.log(str + " | lenth = " + str.length);
console.log(lista1 + " | lenth = " + lista1.length);

// 2. Concat: Une el contenido de 2 o más arrays
console.log("\n2. Concat:");
let s1 = "a+";
let s2 = "parte 2";
let s3 = "parte3";
let s4 = "hola";
console.log(s1 + ", " + s2 + " | concat(): " + s1.concat(s2));
console.log(
  s1 +
    ", " +
    s2 +
    ", " +
    s3 +
    ", " +
    s4 +
    " | concat(): " +
    s1.concat(s2, s3, s4),
);

// 3. Join: Introduce el contenido de un Array en un string
// puede elegirse un separador personalizado opcional
console.log("\n3. Join:");
let lista2 = [4, 5, 6, ["a", "b"]];
console.log(lista2 + " | join() = " + lista2.join());
console.log(lista2 + " con separador '_' | join() = " + lista2.join("_"));

// 4. Pop: Extrae el último elemento de un Array
console.log("\n4. Pop:");
console.log(lista1 + " | pop() = " + lista1.pop());
console.log("Array actualizado: " + lista1);

// 5. Push: Introduce un elemento en el último lugar de un Array
console.log("\n5. Push:");
let pushTexto;
console.log(
  lista1 +
    " (tamaño: " +
    lista1.length +
    ") + hola" +
    " | push() = tamaño actualizado: " +
    lista1.push("hola"),
);
console.log("Array actualizado: " + lista1);

// 6. Shift: Extrae el primer elemento de un array
console.log("\n6. Shift:");
console.log(lista2 + "(tamaño: 5) | shift() = tamaño: " + lista2.shift("hola"));
console.log("Array actualizado: " + lista2);

// 7. Unshift:
console.log("\n7. Unshift:");
console.log(lista2 + "+ hola | shift() = tamaño: " + lista2.unshift("hola"));
console.log("Array actualizado: " + lista2);

// 8. Reverse:
console.log("\n8. Reverse:");
console.log(lista2 + " | reverse() = " + lista2.reverse());
console.log("Array actualizado: " + lista2);

// 9. Sort: Ordena un array según un algoritmo
// No cambia el array original
console.log("\n9. Sort:");
let arraySort = [1, 5, 30, 4, "'qa, 1'", "b", "c", 22, '"', "\'"];

console.log([1, 2, 3, 4, 33, 21, 90, 53, 100].sort());
// Lo mismo pero más compacto: arr.sort((a, b) => a - b);
console.log(
  [1, 2, 3, 4, 33, 21, 90, 53, 100].sort(function (a, b) {
    return a - b; // Si a-b<0 intercambia las posiciones de estos
  }),
);

console.log(arraySort);
console.log(arraySort.sort());
console.log(
  ["a", "b", "c", 1, 2, 9, "h"].sort(function (a, b) {
    if (a > b) {
      return 1;
    }
    if (a < b) {
      return -1;
    }
    // a must be equal to b
    return 0;
  }),
);

// 10. IndexOf:
console.log("\n10. IndexOf:");
console.log("Array original: " + lista2);
console.log(
  "Posición de 2 en el Array: " + lista2.indexOf(2) + " (no contiene ninguno)",
);
console.log("Posición de 5 en el Array: " + lista2.indexOf(5));

// 11. LastIndexOf:
console.log("\n11. LastIndexOf:");
let lista3 = [1, 2, "hola", 5, 6, , 1, 7];
console.log("Array original: " + lista3);
console.log("Posición de 1 en el array: " + lista2.lastIndexOf(1));
console.log(
  "Posición de 2 en el array: " +
    lista2.lastIndexOf(2) +
    " (no contiene ninguno)",
);

// 12. Slice:
console.log("\n12. Slice:");
console.log("Array original: " + lista3);
console.log("Slice [-]: " + lista3.slice());
lista3 = [1, 2, "hola", 5, 6, , 1, 7];
console.log("Slice [1]: " + lista3.slice(1));
lista3 = [1, 2, "hola", 5, 6, , 1, 7];
console.log("Slice [-1]: " + lista3.slice(-3));
lista3 = [1, 2, "hola", 5, 6, , 1, 7];
console.log("Slice [2,4]: " + lista3.slice(2, 4));
lista3 = [1, 2, "hola", 5, 6, , 1, 7];
console.log("Slice [1,-1]: " + lista3.slice(1, -1));

// 13. Splice:
console.log("\n13. Splice:");
lista3 = [1, 2, "hola", 5, 6, , 1, 7];
console.log("Array original: " + lista3);
console.log("Splice [1]: " + lista3.splice(1) + " (eliminado)");
console.log("Array actualizado: " + lista3);
lista3 = [1, 2, "hola", 5, 6, , 1, 7];
console.log(
  "Splice [-1]: " + lista3.splice(-1, "nuevoElemento") + " (eliminado)",
);
console.log("Array actualizado: " + lista3);
lista3 = [1, 2, "hola", 5, 6, , 1, 7];
console.log("Splice [1, límite 2]: " + lista3.splice(2, 2) + " (eliminado)");
console.log("Array actualizado: " + lista3);

// Ejemplo clase
console.log("\nEjemplo sort:");
let frutas = ["platano", "manzana", "melocoton"];
console.log(["platano", "manzana", "melocoton"].sort());
console.log(frutas.sort());
console.log(frutas.sort((a, b) => -a + b));

// Corregir
console.log(frutas.sort((a, b) => a.indexOf(b) + b.indexOf(a)));