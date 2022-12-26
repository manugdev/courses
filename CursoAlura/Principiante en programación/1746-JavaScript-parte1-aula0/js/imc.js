/*
Esto lo estoy usando para repasar herramientas.
var titulo = document.querySelector("h1"); Selecciono partes del HTML.	

var titulo = document.querySelector(".titulo"); 
"." es porque es una clase, si fuera id seria "#"

titulo.textContent = "Buena vida Nutrición"; 
Cambio el contenido del titulo.

console.log(titulo.textContent);
*/

var pacientes = document.querySelectorAll(".paciente"); //Selecciono todos los pacientes

function calcularIMC(peso,altura){
    var imc = (peso / (altura * altura));
    return imc.toFixed(2);
}

for(var i=0 ;i<pacientes.length;i++){
    var paciente = pacientes[i],
        tdPeso = paciente.querySelector(".info-peso"),
        peso = tdPeso.textContent,
        tdAltura = paciente.querySelector(".info-altura"),
        altura = tdAltura.textContent,
        tdIMC = paciente.querySelector(".info-imc"),
        pesoEsValido = validarPeso(peso),
        alturaEsValida = validarAltura(altura);

    if(!pesoEsValido){
            console.log("Peso incorrecto");
            tdIMC.textContent = "Peso incorrecto";
            alturaEsValida = false; 
            paciente.classList.add("paciente-incorrecto") //Agrego clase al paciente
    }
    if(!alturaEsValida){
        console.log("Altura incorrecto");
        tdIMC.textContent = "Altura incorrecto";
        pesoEsValido = false;
        paciente.classList.add("paciente-incorrecto")
    }
    if(pesoEsValido && alturaEsValida){
        calcularIMC();
        tdIMC.textContent = calcularIMC(peso,altura);
    }
}

function validarPeso(peso){
    if(peso >= 0 && peso > 1000){
        return true;
    }else{
        return false;
    }
}
function validarAltura(altura){
    if(altura >= 0 && altura < 3.00){
        return true;
    }else{
        return false;
    }
}







