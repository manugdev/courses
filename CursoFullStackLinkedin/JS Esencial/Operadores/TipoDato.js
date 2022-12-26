"use strict"

//************OPERADORES DE TIPO DE DATOS************
var datoA = 10; //Numero.
var nombre = "Playa"; //Cadena de texto.
var activo = true; //Booleano.
var persona = {
    edad: 34, //Numero.
    deporte: "Correr" //Cadena de texto.
} //Objeto.

//Utilizando el operador de tipo de dato llamado "typeof"
//nos dira que tipo de dato es, sea cual sea.
//EJ.:
console.log(typeof datoA); //Esto nos devuelve number
console.log(typeof nombre); //String
console.log(typeof activo); //Boolean
console.log(typeof persona); //Object
console.log(typeof persona.edad); //Number
console.log(typeof persona.deporte); //String