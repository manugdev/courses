"use strict"

//Condicion IF

var datoA = 110;
var datoB = 20;
var datoC = 5;
var resultado = "Sin datos";

if(datoA > datoB){
    resultado = "La condicion se cumplio";
    if(datoC < datoB){
        resultado = "Evaluacion anidada verdadera";
    } else{
        resultado = "No se cumplio la evaluacion anidada";
    }
} else if (datoB == datoA){ 
    resultado = "Segunda evaluacion verdadera";
} else{
    resultado = "La condicion no se cumplio";
}

console.log(resultado);

