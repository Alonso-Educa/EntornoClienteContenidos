"use strict";

// Corregir 

// Solo cambia si es un array/objeto porque se accede al objeto en la memoria
// referencia en memoria obj vs variable

// Ordenar objeto
let obj = { nombre: "Samuel" };
function cambiaObjeto(obj){
  obj.nombre="Laura";
}
console.log(obj);
cambiaObjeto(obj);
console.log(obj);

// Ordenar array
let array = [3,2,4,5,1]; // numeros
function cambiaArray(a){
  a.sort();
}
console.log(array);
cambiaArray(array);
console.log(array);

let array1 = ['s','a','d','t','z','c']; // caract6eres
console.log(array1);
cambiaArray(array1);
console.log(array1);

let array2 = [1,3,'a',8,'z',4,'s']; // numeros y caracteres
console.log(array2);
cambiaArray(array2);
console.log(array2);

// Ordenar string
let string = "hola";
function cambiaString(s){
  s="adios";
}
console.log(string);
cambiaObjeto(string);
console.log(string);

// Ordenar char
let char = 'a';
function cambiaCaracter(c){
  c='c';
}
console.log(char);
cambiaCaracter(char);
console.log(char);

// Cambiar boolean
let bool = true;
function cambiaBoolean(b){
  b=false;
}
console.log(bool);
cambiaBoolean(bool);
console.log(bool);

// Cambiar numero
let num = 1;
function cambiaNumero(n){
  n=3;
}
console.log(num);
cambiaNumero(num);
console.log(num);

// Pasar de numero a letra