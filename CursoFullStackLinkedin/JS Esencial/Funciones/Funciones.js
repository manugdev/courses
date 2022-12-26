"use strict"

//Estructura basica de una funcion.

function saludar(nombre, edad){
    console.log("Nombre: " + nombre);
    console.log("Edad: " + edad);
    var resultado = nombre + " tiene " + edad + " años.";
    return resultado;
}
var mensaje = saludar("Manuel", 25);

console.log(mensaje);
