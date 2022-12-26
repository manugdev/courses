"use strict"

//Parametros que se pueden expandir.

function cocinar(ingrediente1, ingrediente2, ingrediente3, ...otros){
    console.log("Ingrediente1: " + ingrediente1);
    console.log("Ingrediente2: " + ingrediente2);
    console.log("Ingrediente3: " + ingrediente3);
    console.log("Otros: " + otros);
}

var ingredientesBase = ["Pollo", "Tomate"];

cocinar(...ingredientesBase, "Arroz", "Pescado", "Chile");

//Hace que los datos se distribuyan.
//OJO!! Se usa en la invocacion.

