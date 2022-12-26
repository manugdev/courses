"use strict"

var platillos = ["Ceviche", "Tacos", "Pasta"];
               //Posicion0-Posicion1-Posicion2

var bebidas = new Array("Jamaica", "Chicha Morada", "Pozo1", "Tostadas");

console.log(Array.isArray(platillos), bebidas);

//Array.isArray devuelve si es o no un array


//Cuanto miden los arreglos.

console.log("Hay " + platillos.length + " platillos en el menu.");

console.log("La segunda bebida es " + bebidas[1]);


//Arreglos multidimensionales

var menu = [platillos, bebidas];

console.log(menu[0][0]);

console.log(menu[1][0]);


//Operaciones basicas

console.log("Antes: ", platillos);

platillos.push("Carne", "Pizza");

console.log("Despues del push: ", platillos)

platillos.pop();

console.log("Despues del pop: ", platillos);


//Conversion a texto.

var mensaje = platillos.join();

console.log(mensaje);


//Orden arreglo.

console.log("Antes: ", platillos);

platillos.sort();

console.log("Despues del sort: ", platillos); //Lo ordena alfabeticamente

platillos.reverse();

console.log("Despues del reverse: ", platillos); //Lo da vuelta


//Desestructuracion

