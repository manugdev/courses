"use strict"

var mensaje = "Estoy aprendiendo JavaScript y estoy aprendiendo mucho.";

var resultado;


//match (Busca las palabras y las guarda en un arreglo).
//resultado = mensaje.match(/aprendiendo/gi); //g (global) para que busque todas.


//substr (Tenemos que darle el inicio de la palabra 
//y el largo de la misma, y extrae el texto).
//resultado = mensaje.substr(6,11);


//substring (Tenemos que darle el inicio y el final de la palabra,
//y extrae el texto).
//resultado = mensaje.substring(6,17);


//charAt (Busca el caracter por posicion).
resultado = mensaje.charAt(0);


console.log(resultado);