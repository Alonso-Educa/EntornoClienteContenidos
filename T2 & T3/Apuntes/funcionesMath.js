"use strict";

// 1. Math.PI: Propiedad con el numero pi
console.log("\n1. Math.PI:");
console.log("Valor de pi -> " + Math.PI);
console.log("Pi con 2 decimales -> " + Math.PI.toFixed(2));

// 2. Math.E: Propiedad con el numero e
console.log("\n2. Math.E:");
console.log("Valor de e -> " + Math.E);
console.log("E con 2 decimales -> " + Math.E.toFixed(2));

// 3. Math.abs(): Devuelve el valor absoluto de un número
console.log("\n3. Math.abs():");
let numero = -7.5;
console.log("Valor absoluto de " + numero + " -> " + Math.abs(numero));
console.log("Valor absoluto de 7 -> " + Math.abs(7));

// 4. Math.sin()/cos()/tan(): Seno, coseno y tangente
console.log("\n4. Math.sin()/cos()/tan():");
console.log("Seno de PI/2 -> " + Math.sin(Math.PI / 2));
console.log("Coseno de 0 -> " + Math.cos(0));
console.log("Tangente de 0 -> " + Math.tan(0));

// 5. Math.exp()/log(): Exponenciación y logaritmo
console.log("\n5. Math.exp()/log():");
console.log("e elevado a 1 -> " + Math.exp(1));
console.log("Logaritmo neperiano de e -> " + Math.log(Math.E));
console.log("Logaritmo neperiano de 10 -> " + Math.log(10));

// 6. Math.ceil(): Comprueba entero >= argumento
console.log("\n6. Math.ceil():");
console.log("ceil(4.2) -> " + Math.ceil(4.2));
console.log("ceil(-4.7) -> " + Math.ceil(-4.7));

// 7. Math.floor(): Comprueba entero <= argumento
console.log("\n7. Math.floor():");
console.log("floor(4.9) -> " + Math.floor(4.9));
console.log("floor(-4.2) -> " + Math.floor(-4.2));

// 8. Math.round(): Redondea el número
console.log("\n8. Math.round():");
console.log("round(4.4) -> " + Math.round(4.4));
console.log("round(4.5) -> " + Math.round(4.5));
console.log("round(-4.5) -> " + Math.round(-4.5));

// 9. Math.pow(b,e): Eleva la base b al exponente e
console.log("\n9. Math.pow(b,e):");
console.log("2 elevado a 3 -> " + Math.pow(2, 3));
console.log("5 elevado a 0 -> " + Math.pow(5, 0));

// 10. Math.min(): Devuelve el menor de sus argumentos
console.log("\n10. Math.min():");
console.log("Menor de 3, -1 y 7 -> " + Math.min(3, -1, 7));
let lista = [10, 4, 25, 8];
console.log("Menor de [" + lista + "] -> " + Math.min(...lista));

// 11. Math.max(): Devuelve el mayor de sus argumentos
console.log("\n11. Math.max():");
console.log("Mayor de 3, -1 y 7 -> " + Math.max(3, -1, 7));
console.log("Mayor de [" + lista + "] -> " + Math.max(...lista));

// 12. Math.sqrt(): Devuelve la raíz cuadrada del argumento
console.log("\n12. Math.sqrt():");
console.log("Raiz cuadrada de 16 -> " + Math.sqrt(16));
console.log("Raiz cuadrada de 2 -> " + Math.sqrt(2));
console.log("Raiz cuadrada de -1 -> " + Math.sqrt(-1));

// 13. Math.random(): Devuelve un número aleatorio entre 0 y 1
console.log("\n13. Math.random():");
console.log("Numero aleatorio entre 0 y 1 -> " + Math.random());
console.log(
  "Entero aleatorio entre 1 y 10 -> " + (Math.floor(Math.random() * 10) + 1),
);
