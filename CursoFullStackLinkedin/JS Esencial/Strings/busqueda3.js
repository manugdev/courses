"use strict"

var mensaje = "Estoy aprendiendo JavaScript.";

var resultado;

//startsWith.
//resultado = mensaje.startsWith("Es"); //Devuelve booleano.


//var textoEn = mensaje.indexOf("JavaScript");
//resultado = mensaje.startsWith("Ja", textoEn);


//endsWith.
//resultado = mensaje.endsWith("."); //Devuelve booleano.


//includes.
resultado = mensaje.includes("JavaScript", 6); //Devuelve booleano.
//El numero es desde donde empieza la busqueda.
 
//resultado = mensaje;


console.log(resultado);