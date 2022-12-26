var mensaje1 = "El cliente pidio sushi y comio su sushi.";
console.log(mensaje1.replace(/sushi/g, "tacos")); //Reemplaza. "g" es de global.


var mensaje2 = "Esta historia continuará...";

// \W Cualquier caracter que no sea alfanumerico.
// \S Cualquier caracter que no sea un espacio en blanco.
// -1 No se encontro ninguna coincidencia.

console.log(mensaje2.search(/\W/));
console.log(mensaje2.search(/\S/));


var expresion1 = /y/g;
console.log("LastIndex antes: " + expresion1.lastIndex);
expresion1.lastIndex = 6;
console.log("LastIndex antes2: " + expresion1.lastIndex);
var coincidencia = expresion1.exec("sibr yfx sibr yfx");
console.log(coincidencia);
console.log("LastIndex despues: " + expresion1.lastIndex);


var expresion2 = /\d/g;
console.log(expresion2.exec("Pedi 4 tacos y 1 agua.")); //Index 5
console.log(expresion2.exec("Pedi 4 tacos y 1 agua.")); //Index 15
console.log(expresion2.exec("Pedi 4 tacos y 1 agua.")); //Index null


var mensaje3 = "LLegaban por montones, primero 10, despues 20, despues 35 y se duplicaban hasta llegar a 1000";
var patron = /\b(\d+)\b/g;
var match;
while(match = patron.exec(mensaje3)){
    console.log("Se encontro ", match[1], " en la posicion: ", match.index);
}