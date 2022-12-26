"use strict"

var nombre = "Manuel";
//(Var) Para variables globales.

console.log(nombre)

function saludo(){
    let nombre = "OtroDatoNuevo"; 
    //(let)Contenedor de bloque, solo usa este espacio.
    console.log(nombre);
    let edad = 25;
    console.log(edad);
}
saludo();

const pi = 3.1416; //Uso const para tener valor fijo.

//pi = 15;
