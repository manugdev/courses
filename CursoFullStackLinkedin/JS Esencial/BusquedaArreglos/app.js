"use strict"

//Find trae solo la primer incidencia.

var platillos = ["Ceviche", "Tacos", "Pasta"];

var pElegido = platillos.find(platillo => platillo == "Pasta");


for(let i in platillos){
    console.log(platillos[i]);
}


platillos.forEach((platillo, i) => console.log(i, platillo));

console.log(pElegido);

var menu = [
    {nombre: "Ceviche", precio: 20, pais: "Peru"},
    {nombre: "Tacos", precio: 10, pais: "Mexico"},
    {nombre: "Pasta", precio: 50, pais: "Peru"},
    {nombre: "Quesadillas", precio: 15, pais: "Mexico"}
]

var pElegido = menu.find(platillo => platillo.nombre == "Tacos");

console.log(pElegido);

var numPlatillo = platillos.findIndex(platillo => platillo == "Tacos");

var numPlatillo2 = menu.findIndex(platillo => platillo.nombre == "Tacos");

console.log("Platillo numero: ", numPlatillo);

console.log("Platillo numero: ", numPlatillo2);



var resultado = menu.find(platillo => platillo.pais == "Mexico");

//Filter es como find pero encuentra todas las incidencias.

resultado = menu.filter(platillo => platillo.pais == "Mexico");

console.log(resultado);



var resultado2 = menu.some(platillo => platillo.precio <= 20); //Alguno

console.log("¿Hay platillos abajo de $20? ", resultado2);

var resultado3 = menu.every(platillo => platillo.precio <= 10); //Todos

console.log("¿Todos los platillos cuestan menos de $20? ", resultado3)
