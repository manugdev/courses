var expresion1 = /Hola Mundo/i; //No es sensible a Min o May.
console.log(expresion1.test("Hola Mundo"));


var expresion2 = /Woo+(hoo+)+/i; //Agrupaciones y anidaciones
console.log(expresion2.test("Woooooohoohoooo"));


var expresion3 = /\d+/.exec("Del año 1984"); //Retorna un Array con informacion de si se encontro la expresion y en donde.
console.log(expresion3);


console.log("Hasta 1994".match(/\d+/)); //Igual que exec pero directamente en una cadena de texto!