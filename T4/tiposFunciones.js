"use strict";

// Funcion nombrada
function hello(nombre) {
    return `Hola ${nombre}`;
}
console.log(hello("Pepe"));

// Función anónima asignada a una variable
let hello2 = function (nombre) {
    return `Hola ${nombre}`;
};
console.log(hello2("Pepe"));

// Función que recibe una función como parámetro
function hola(foo) {
    foo();
}
// Función anónima como parámetro
hola(function () {
    console.log("Hola");
});

// Arreglar
// function sumar(foo){
//     foo();
// }
// let sumar = (sumar(function(a,b){
//     return (a+b);
// }));
// console.log(sumar(2,3));

// Función anónima como parámetro
function adios(nombre) {
    console.log(`Adiós ${nombre}`);
}

// hola(adios("Laura"));
hola2(1, 2);
function hola2(foo, parametro) {
    console.log(foo() + " " + parametro);
}
function adios2() {
    return "Adios2";
}
hola2(adios2, "Laura2");

// La funcion tiene el mismo nombre y numero de parametros que la otra hola2, se decide llamar a esta porque se ha declarado más abajo que la otra
function hola2(param1, param2) {
    console.log("Soy el nuevo hola");
}

// No se puede ejecutar una función no nombrada antes de su declaración. Ni con var, let o sin nombrar
// noNombrada();
let noNombrada = function () {
    console.log("Esto es una función no nombrada");
};
noNombrada();

// noNombrada2();
var noNombrada2 = function () {
    console.log("Esto es una función no nombrada");
};
noNombrada2();

// noNombrada3();
// noNombrada3 = function () {
//   console.log("Esto es una función no nombrada");
// };
// noNombrada3();

// Parametros: Se pueden utilizar los parametros que se deseen en la firma sin ninguna validación
function f1(nombre, edad) {
    console.log(`${nombre} - ${edad}`);
}
console.log("\nf1():");
f1();
f1("Pepe");
f1("Pepe", 23, "otro dato");

// Parametros utilizando arguments
function f2(nombre, edad) {
    console.log(`${arguments[0]} - ${arguments[1]}`);
}
console.log("\nf2():");
f2();
f2("Pepe");
f2("Pepe", 23, "otro dato");

// Parametros con valores por defecto
function f3(nombre = "Paco", edad = 28) {
    console.log(`${nombre} - ${edad}`);
}
console.log("\nf3():");
f3();
f3("Pepe");
f3("Pepe", 23, "otro dato");

console.log("\nSumas:")
function suma(a, b, c, d, e) {
    console.log(a + b + c + e + d);
}
suma(1, 2, 3, 4, 5);

function suma2() {
    let resultado = 0;
    for (let i = 0; i < arguments.length; i++) {
        resultado += arguments[i];
    }
    console.log(resultado);
}
suma2(1, 1, 1, 1, 1, 1, 1, 1, 1, 1);

// Parametros rest: Permiten agrupar multiples elementos y condensarlos en un array. Se utilizan en la declaración de funciones
console.log("\nParametros rest:");
function suma2args(...args) {
    console.log("N de argumentos: " + args.length);
    let resultado = 0;
    for (const a of args) {
        resultado += a;
    }
    return resultado;
}

console.log("Resultado: " + suma2args());
console.log("Resultado: " + suma2args(10));
console.log("Resultado: " + suma2args(10, 20));
console.log("Resultado: " + suma2args(10, 20, 30, 40, 50));

console.log("");
function anadirApellido(nombre, ...apellidos) {
    console.log("Tamaño de argumentos: " + arguments.length);
    console.log("Tamaño de apellidos: " + apellidos.length);
    let result = nombre;
    for (const i in apellidos) {
        result += " " + apellidos[i];
    }
    return result;
}
console.log(anadirApellido("Pedro"));
console.log(anadirApellido("Luis", "Ruiz"));
console.log(anadirApellido("Ana", "Gil", "Sanz"));


// Operador de propagación o spread operator
// Permite que uin iterable sea expandido en situaciones donde se esperann  multiples argumentos
let values = [1, 2, 3];
// let copia2=values;
console.log("Values: " + values);
// console.log("Copia2: "+copia2);

let copy = [...values];
console.log(copy);
let morevalues = [4, 5];
values.push(...morevalues);
console.log(values);
let others = [0, ...morevalues];
console.log(others);

console.log("---");
let values3 = [1, 2, 3];
let copia3 = values3;
console.log("Values: " + values3);
console.log("Copia2: " + copia3);
copia3[0] = 125; // se modifica en copia y values
console.log("Values: " + values3);
console.log("Copia2: " + copia3);

values3 = [1, 2, 3, 4, 5]; // solo se modifica values, no la copia
console.log("Values: " + values3);
console.log("Copia2: " + copia3);

// Corregir
// Por esto no se pueden asignar variables de esta forma, se asigna también la dirección de memoria
// asignar con [...values]???