//Para expresiones largas:
var expresion1 = new RegExp("abc"); 
console.log("Expresion 1: " + expresion1.test("abcdef"));


//Para expresiones cortas:
var expresion2 = /Hola Mundo/;
console.log("Expresion 2: " + expresion2.test("El primer programa es: Hola Mundo"));


//var expresion3 = /[0123456789]/;
//Ó
var expresion3 = /[0,9a-zA-Z]/
console.log("Expresion 3: " + expresion3.test("Sucedio en 1996"));


var expresion4 = /\d\d-\d\d-\d\d\d\d/; //Digito
console.log("Expresion 4: " + expresion4.test("29-06-2007"));


var expresion5 = /[^01]/; //^ Negacion
console.log("Expresion 5: " + expresion5.test("10101001100110001"));


var expresion6 = /\d+/; //Mas de uno
console.log("Expresion 6: " + expresion6.test("1997"));


var expresion7 = /\d*/; //Mas de uno o ninguno
console.log("Expresion 7: " + expresion7.test("123123   "));


var expresion8 = /Hola Mun?do/; //Puede o no estar
console.log("Expresion 8: " + expresion8.test("Hola Mudo"));


var expresion9 = /\d{1,2}-\d{1,2}-\d{4}\s+\d{1,2}:\d{1,2}/; //{1,} una o mas veces
console.log("Expresion 9: " + expresion9.test("27-6-2007 11:45"));