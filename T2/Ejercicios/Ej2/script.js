"use strict";

const datosInfo = ["Nombre", "Primer apellido", "Segundo apellido", "Fecha"];
let datos;
let fecha = new Date(NaN);

do {
  const contenido = prompt(
    "Introduce tu nombre, apellidos y tu fecha de nacimiento (dd-mm-aaaa) separados por comas",
    "Nombre,Apellido1,Apellido2,30/09/2026"
  );

  datos = contenido.trim().split(",");

  if (datos.length == 4) {
    const copiaDatos = datos[3].trim().replaceAll("/", "-").split("-");
    // El mes va de 0 a 11, por eso se resta 1
    fecha = new Date(copiaDatos[2], copiaDatos[1] - 1, copiaDatos[0]);
  } else {
    fecha = new Date(NaN);
  }

  if (isNaN(fecha)) {
    alert("El formato de los datos o de la fecha introducida es incorrecto.");
  }
} while (isNaN(fecha)); 

datos[3] = fecha;

document.write("<table border='1'>");
for (let i = 0; i < datos.length; i++) {
  document.write("<tr>");
  document.write(`<td>${datosInfo[i]}</td><td>${datos[i]}</td>`);
  document.write("</tr>");
}
document.write("</table>");