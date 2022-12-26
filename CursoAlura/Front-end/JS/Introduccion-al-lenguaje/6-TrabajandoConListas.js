console.log(`Trabajando con Listas`);

const bogota = "Bogota";
const lima = "Lima";
const santiago = "Santiago";
const buenosAires = "Buenos Aires";

console.log(bogota, lima, santiago, buenosAires);

const ciudades = ["Bogota", "Lima", "Santiago", "Buenos Aires"];
ciudades.push("Caracas"); //Agrega otro elemento al final de la lista.
ciudades.push("Bariloche");
console.log(ciudades);

const ciudadesMasVendidas = [];
ciudadesMasVendidas.push("Sao Pablo");
ciudadesMasVendidas.push("Moron");
console.log(ciudadesMasVendidas);

console.log(ciudades[0]);
console.log(`Tenemos ${ciudades.length} ciudades disponibles.`);
ciudades.splice(1,1); //Posicion, cantidad de elementos.
ciudades.pop(); //Saca el ultimo elemento.
console.log(ciudades);