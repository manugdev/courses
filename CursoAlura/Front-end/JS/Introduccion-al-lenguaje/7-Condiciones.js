console.log(`Trabajando con Condiciones`);

const ciudades = ["Bogota", "Lima", "Santiago", "Buenos Aires"];
ciudades.push("Caracas");
ciudades.push("Bariloche");
console.log(ciudades);

const edadComprador = 25;
const estaAcompañado = true;
const tienePasaje = true;

if ((edadComprador >= 18) || (estaAcompañado)) {
  console.log("El comprador puede viajar");
  console.log("Las ciudades disponibles son: " + ciudades);
} else {
  console.log("El comprador es menor de edad y no esta acompañado");
  console.log("No es posibles realizar viajes");
}


//Proceso de embarque
console.log("Proceso de embarque: \n \n");
if(((edadComprador >= 18) ||(estaAcompañado)) & (tienePasaje)){
    console.log("Comprador con pasaje. Buen viaje!");
} else{
    console.log("Comprador sin pasaje. No es posible hacer embarque");
}