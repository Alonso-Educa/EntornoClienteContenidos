
"use strict";

let nombre, apellidos, edad, email, telefono, centro, curso, observaciones, anio;

do {
    nombre = prompt("Introduce tu nombre", "Laura");
} while (
    !comprobar(
        "nombre",
        nombre,
        /^[A-ZÁÉÍÓÚ][a-záéíóú]+(\s[A-ZÁÉÍÓÚ][a-záéíóú]+)?$/,
    )
);

do {
    apellidos = prompt("Introduce tus apellidos", "López Naves");
} while (
    !comprobar(
        "apellidos",
        apellidos,
        /^[A-ZÁÉÍÓÚ][a-záéíóú]+(\s[A-ZÁÉÍÓÚ][a-záéíóú]+)?$/,
    )
);

do {
    edad = prompt("Introduce tu edad", 25);
} while (
    !comprobar(
        "edad",
        edad,
        /^\d{1,3}$/,
    )
);

do {
    email = prompt("Introduce tu email", "laura.lopez@iesjulianmarias.es");
} while (
    !comprobar(
        "email",
        email,
        /^[-\w]+(\.[-\w]+)*@[-\w]+(\.[-\w]+)?\.[-\w]{2,3}$/,
    )
);

do {
    telefono = prompt("Introduce tu telefono", 983895623);
} while (
    !comprobar(
        "telefono",
        telefono,
        /^[69]\d{8}$/,
    )
);

do {
    centro = prompt("Introduce tu centro", "IES Julián Marías");
} while (
    !comprobar(
        "centro",
        centro,
        /^.{5,120}$/,
    )
);

do {
    curso = prompt("Introduce tu curso", 2);
} while (
    !comprobar(
        "curso",
        curso,
        /^[1-2]$/,
    )
);

do {
    observaciones = prompt("Introduce tus observaciones", "Es una estudiante excelente");
} while (
    !comprobar(
        "observaciones",
        observaciones,
        /^[a-záéíóúA-ZÁÉÍÓÚ0-9\.\s]{0,120}$/,
    )
);

do {
    anio = prompt("Introduce tu año de nacimiento", 1998);
} while (
    !comprobar(
        "año de nacimiento",
        anio,
        /^[1-2]\d{3}$/,
    )
);

document.open();
document.write("<table border='1'>");

document.write("<tr><th>Título</th><th>Parámetro</th></tr>");
document.write("<tr><td>Nombre</td><td>" + nombre + "</td></tr>");
document.write("<tr><td>Apellidos</td><td>" + apellidos + "</td></tr>");
document.write("<tr><td>Edad</td><td>" + edad + "</td></tr>");
document.write("<tr><td>Email</td><td>" + email + "</td></tr>");
document.write("<tr><td>Telefono</td><td>" + telefono + "</td></tr>");
document.write("<tr><td>Centro</td><td>" + centro + "</td></tr>");
document.write("<tr><td>Curso</td><td>" + curso + "</td></tr>");
document.write("<tr><td>Observaciones</td><td>" + observaciones + "</td></tr>");
document.write("<tr><td>Año</td><td>" + anio + "</td></tr>");

document.write("</table>");
document.close();

// Avisa si el texto es correcto y devuelve boolean
function comprobar(titulo, dato, expr) {
    alert(
        "Formato de " + dato + " (" + titulo + "): " + expr.test(dato)
    );
    return expr.test(dato);
}