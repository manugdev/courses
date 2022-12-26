console.log("Asignando valores a las variables");

const miNombre = "Manuel"; //Arranca con este nombre pero en al ejecucion del programa puede cambiar.
const miApellido = "Garcia";
console.log(miNombre);

const nombreCompleto = miNombre + " " + miApellido;

console.log(miNombre);

const textoMiNombre = `Mi nombre es: ${miNombre} ${miApellido}.` //Plantilla de texto.
console.log(textoMiNombre);



//Inmutavillidad y tipo de dato

let variableTexto = "Un texto";
console.log(variableTexto);

variableTexto = 10;
console.log(variableTexto);   //Conversion automatica de tipo de datos.

variableTexto = false;
console.log(variableTexto);


