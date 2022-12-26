var expresion1 = /\bcat\b/; //Limites de cadenas de texto.

console.log("expresion 1: " + expresion1.test("cat"));


var expresion2 = /pollo|res|pescado/i; //Patrones opcionales
console.log("Expresion 2: " + expresion2.test("El cliente pidió res"));


var expresion3Inicio = /^Any/; //^Inicio
var expresion3Final = /JS$/; //$Final
var expresion3Total = /^Any|JS$/;
console.log("Inicio expresion 3: " + expresion3Inicio.test("Any app that can be imagined can be made in JS"));
console.log("Final expresion 3: " + expresion3Final.test("Any app that can be imagined can be made in JS"));
console.log("Total expresion 3: " + expresion3Total.test("Any app that can be imagined can be made in JS"));