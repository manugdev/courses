console.log("Operaciones Aritmeticas");
const variableTexto = "variableTexto";  //No se cambia porque es constante.
console.log(variableTexto);

let nuevaVariableTexto = "Valor que cambia"; //Cambia en el tiempo, se usa mas en bloques de codigo, scope redudico a un bloque.
console.log(nuevaVariableTexto);    
nuevaVariableTexto = "Por otro valor";
console.log(nuevaVariableTexto);    

var variableGlobal = "Variable de todo el programa"; //Variable global, se puede cambiar.
console.log(variableGlobal);
variableGlobal = "Otro valor global";
console.log(variableGlobal);

const unNumero = 10;
const numeroDecimal = 20.5;

let sumaNumeros = 0;
sumaNumeros = 2+2;
sumaNumeros = (2 + 10) *5
console.log(sumaNumeros);

const nombreMadre = "Maria";
console.log("El nombre de mi madre es: " +nombreMadre); //Concatenacion
