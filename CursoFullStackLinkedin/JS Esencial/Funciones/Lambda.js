"use strict"

//Funcinoes Arrow | Fat Arrow | Lambda.

var saludar = nombre => "Hola " + nombre;

console.log(saludar("Susana"));

//Declaro funcion, despues del igual va el dato que espera recibir,
//y despues de la flecha lo que va a retornar.

var sumar = cantidad => cantidad + 10;
console.log(sumar(10));

var calcular = (datoA, datoB) => datoA + datoB;
console.log(calcular(10, 15));
//Varios datos van entre ().

var generar = (datoA, datoB) => {
    var datoC = 5;
    return datoA + datoB + datoC;
}
console.log(generar(10, 15));
//Si necesito hacer mas de una operacion lo hago entre llaves {}.

var validar = () => {
    return "Validacion correcta";
}
console.log(validar());

//Si no necesito enviar parametros agrego () vacios.