"use strict"

var mensaje = "Estoy aprendiendo JavaScript";
var mensaje2 = " y programacion";
var total = 123456;

var resultado;

//resultado = total.toString(); //Convierto numero a string.

//resultado = mensaje.toLowerCase(); // Todo en minusculas.

//resultado = mensaje.toUpperCase(); // Todo en mayusculas.

resultado = mensaje.concat(mensaje2, " y tengo muchas ideas", total);
//Concatena - junta.

console.log(resultado);