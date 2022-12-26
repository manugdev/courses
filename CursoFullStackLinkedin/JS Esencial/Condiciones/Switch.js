"use strict"

//Estructura switch

var edad = 30;
var resultado = "";

switch (edad) {
    case 10:
        resultado = "La edad es 10 años";
    break;
    case 20:
        resultado = "La edad es 20 años";
    break;
    case 30:
        resultado = "La edad es 30 años";
    break;
    default:
        resultado = "Ningun caso coincide";
    break;
}

console.log(resultado);

//Evalucaion con cadena de texto.

var producto = "TV"; 

switch (producto) { //Ojo que es case sensitive.
    case "TV":
        resultado = "Se eligio la TV";
    break;
    case "Radio":
        resultado = "Se eligio la Radio";
    break;
    case "Telefono":
        resultado = "Se eligio el Telefono";
    break;
    default:
        resultado = "No se eligio ningun producto";
    break;
}

console.log(resultado);