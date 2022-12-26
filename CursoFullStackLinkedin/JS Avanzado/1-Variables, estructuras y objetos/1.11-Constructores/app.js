function Persona(nombre, apellido){
    this.nombre = nombre;
    this.apellido = apellido;
}

var persona = new Persona("Manuel", "Garcia");

console.log(persona);
console.log(persona.nombre);
console.log(persona.apellido);
