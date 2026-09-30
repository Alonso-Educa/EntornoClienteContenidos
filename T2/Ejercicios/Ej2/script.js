"use strict";
do {
  // Alonso,Rogado,Pastor,22/11/2005
  let contenido = prompt(
    "Introduce tu nombre, apellidos y tu fecha de nacimiento (mm-dd-aaaa) separados por comas",
    "Alonso,Rogado,Pastor,22/11/2005",
  );
  let datos = contenido.trim().split(",");
  let datosInfo = ["Nombre", "Primer apellido", "Segundo apellido", "Fecha"];
  let copiaDatos;
  datos[3] = datos[3].replaceAll("/", "-");
  copiaDatos = datos[3].split("-");
  datos[3] = new Date(copiaDatos[2], copiaDatos[1], copiaDatos[0]);
  // Hacer funcion en lugar de if-else
  // Hacerlo para aa en lugar de aaaa
  if (datos[3] != "Invalid Date" && datos.length == 4) {
    datos[3] = fecha;
    document.write("<table border='1'>");
    for (let i = 0; i < datos.length; i++) {
      document.write("<tr>");
      document.write(`<td>${datosInfo[i]}</td><td>${datos[i]}</td>`);
      document.write("</tr>");
    }
    document.write("</table>");
  } else {
    alert("El formato de la fecha introducida es incorrecto.");
  }
} while (datos[3] != "Invalid Date" || datos.length != 4);

function validarFecha(fecha){
    
}