"use strict";

// Realiza un programa que cambie los dias de la semana a mayusculas
console.log("Ejercicio 1:");
var dias = new Array('lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado', 'domingo');
let f1 = semana => semana.map(dia => dia.replace(dia.charAt(0), dia.charAt(0).toLocaleUpperCase()));
console.log(dias);
console.log(f1(dias));

// Escribe un programa que pida por pantalla una frase y devuelva la frase cambiando las a por @, las e por 3 y las o por 0.
console.log("\nEjercicio 2:");
let frase = prompt("Escribe una frase", "Frase larga con muchas palabras");
let f2 = frase => frase.trim().split(" ").map(palabra => palabra.toLocaleLowerCase().replaceAll('a', '@').replaceAll('e', '3').replaceAll('o', '0')).join(' ');
console.log("Frase original: " + frase);
console.log("Frase alterada: " + f2(frase));

// Escribe un programa que pida por pantalla una frase y devuelve el numero de palabras que tiene la frase
console.log("\nEjercicio 3:");
// let frase = prompt("Escribe una frase");
let f3 = frase => frase.trim().split(" ").reduce((ac, a) => ac + 1, 0);
console.log("Frase original: " + frase);
console.log("Numero de palabras de la frase: " + frase.trim().split(" ").length);
console.log("Numero de palabras de la frase: " + f3(frase));

// Escribe un programa que pida por pantalla una frase y elimina las vocales
console.log("\nEjercicio 4:");
let f4 = frase => frase.trim().split(" ").map(palabra => {
    let vocales = "aeiou";
    vocales.split('').forEach(vocal => {
        palabra.replaceAll(vocal, '');
    });
    return palabra;
}).join(' ');
console.log("Frase original: " + frase);
console.log("Vocales eliminadas: " + f4(frase));

// Escribe un programa que pida por pantalla una fecha en formato dd/mm/yyyy separa
// cada valor y muestra el dia es: el mes es: y el año es:
console.log("\nEjercicio 5:");
let fecha = prompt("Introduzca una fecha en formato dd/mm/yyyy", "22/11/2005");
let f5 = fecha => {
    if (/^\d{2}\/\d{2}\/\d{4}$/.test(fecha.trim())) {
        let fechaFiltrada = [];
        fecha.trim().split('/').reduceRight((ac, valor) => {
            fechaFiltrada.push(valor);
        }, null);
        let nuevaFecha = new Date(fechaFiltrada.join('-'));
        return `El dia es: ${nuevaFecha.getDate()}, el mes es: ${nuevaFecha.getMonth() + 1} y el año es: ${nuevaFecha.getFullYear()}`;
    } else {
        return "La fecha no tiene el formato válido";
    }
}
console.log("Fecha original: " + fecha);
console.log("Formato de fecha: " + f5(fecha));

// Escribe un programa que multiplique dos matrices
console.log("\nEjercicio 6: Matrices");
let matrizA = [[2, 0, 1], [3, 0, 0], [5, 1, 1]];
let matrizB = [[1, 0, 1], [1, 2, 1], [1, 1, 0]];
let multiplicar = (matrizA, matrizB) => {
    // let filas = 0;
    // let matrizC = matrizA.map(fila => fila.map(valor => fila.reduce((ac, n, i) => ac + n * matrizB[filas++][i])));
    let matrizC = matrizA.map(fila => fila.map((valor, j) => fila.reduce((ac, n, k) => ac + n * matrizB[k][j], 0)));
    // let matrizC = matrizA.map(fila => fila.map((valor, i) => fila.reduce((ac, n, j) => ac + n * matrizB[j][i], 0)));
    // let matrizC = matrizA.map((fila, i) => fila.map((valor, j) => fila.reduce((ac, n, k) => ac + n * matrizB[k][j], 0)));
    return matrizC;
}

let matrizC = multiplicar(matrizA, matrizB);
// console.log("Matriz A:");
// matrizA.forEach(fila => fila.forEach(valor => console.log(valor)));
// console.log("Matriz B:");
// matrizC.forEach(fila => fila.forEach(valor => console.log(valor)));
console.log("Matriz A:");
console.table(matrizA);
console.log("Matriz B:");
console.table(matrizB);
console.log("Matriz C:");
console.table(matrizC);

// Realiza una expresión regular que permita validar un teléfono con formato 000-000-000
console.log("\nEjercicio 7:");
let telefono = prompt("Introduce un numero de teléfono con formato 000-000-000", "612-345-678");
let f7 = telefono => /^\d{3}-\d{3}-\d{3}$/.test(telefono.trim()) ? "El telefono cumple con el formato" : "El telefono no tiene el formato válido";
console.log("Teléfono original: " + telefono);
console.log("Formato de telefono: " + f7(telefono));

// Explica paso a paso que hace la siguiente expresión regular 
// /[^<]+|<(\/?)([A-Za-z]+)>/g
console.log("\nEjercicio 8:");
console.log("Expresión: /[^<]+|<(/?)([A-Za-z]+)>/g ");
// Expresión: /[^<]+|<(\/?)([A-Za-z]+)>/g
// Valida que se cumpla un patrón de entre 2 (está dividido por |)
// Patrón 1: [^<]+, engloba a cualquier conjunto de caracteres que no incluya '<', ^< niega el valor dentro del rango (es decir, que no sea una etiqueta)
// Patrón 2: <(\/?)([A-Za-z]+)>, empieza por < (puede llevar / o no), llevar letras mayusculas o minusculas al menos una vez, y terminar por > (es decir, que sea una etiqueta de apertura o de cierre)
// Como lleva /.../g, la g indica que es global, por lo que no se busca el primer patrón sino todos, indica que es una búsqueda global

// Calcula la letra de dni del usuario
console.log("\nEjercicio 9:");
let digitoDni = prompt("Introduce la parte numérica de tu dni", "12345678");
let letraDni = prompt("Introduce la letra de tu dni", "Z").toLocaleUpperCase();
let f9 = (digitoDni, letraDni) => {
    if (digitoDni < 0 || digitoDni > 99999999) {
        return "El número proporcionado no es válido";
    }
    var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K',
        'E', 'T'];
    let letraCalculo = letras[digitoDni % 23];
    return letraDni !== letraCalculo ? `La letra indicada no es correcta (correcta: ${letraCalculo})` : "El número y la letra indicados son correctos";
}
console.log("Dni introducido: ", digitoDni, letraDni);
console.log("Validación: " + f9(digitoDni, letraDni));


// Solicita mediante un alert que se introduzca el nombre de una persona y a partir de él
// que devuelva los siguientes datos:
console.log("\nEjercicio 10:");
alert("Introduce un nombre para poder devolver distintos datos sobre él");
let nombre = prompt("Introduce un nombre", "Pepe");
let f10 = nombre => {
    console.log("Número de caracteres de la cadena: " + nombre.length);
    console.log("Carácter situado en la tercera posición de la cadena: " + nombre.charAt(2));
    console.log("Devuelve la cadena escrita en mayúscula: " + nombre.toLocaleUpperCase());
    console.log("Array de elementos con los caracteres de la cadena: " + nombre.split(''));
}
console.log("Nombre introducido: " + nombre);
f10(nombre);