"use strict"

//var mensajes = "Ceviche, Tacos, Pasta";

//var platillo = mensajes.split(", "); //Pasa de string a array!

//Array.from()
var platillosHTML = Array.from(document.querySelector(".platillos p"));

var platillos = platillosHTML.map(platillo => platillo.textContent)

//Array.of() Este es mas facil.
var platillos = Array.of("Ceviche", "Tacos", "Pasta");

console.log(platillos);