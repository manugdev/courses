console.log(`Trabajando con Lazos`);

const ciudades = ["Bogota", "Lima", "Santiago", "Buenos Aires"];
ciudades.push("Caracas");
ciudades.push("Bariloche");
console.log(ciudades);

const edadComprador = 25;
const estaAcompañado = true;
const tienePasaje = true;
const ciudadDestino = "Lima";

if ((edadComprador >= 18) || (estaAcompañado)) {
  console.log("El comprador puede viajar");
  console.log("Las ciudades disponibles son: " + ciudades);
} else {
  console.log("El comprador es menor de edad y no esta acompañado");
  console.log("No es posibles realizar viajes");
}

for(let i=0; i<ciudades.length; i++){
    if(ciudades[i] == ciudadDestino){
        console.log("Destino disponible!");
        break;
    }
}

/* O sino puedo hacer
    var i = 0;
    while(i < ciudades.lenght){
        if(ciudades[i] == ciudadDestino){
            console.log("Destino disponible!");
        }
        i++;
    } 
*/