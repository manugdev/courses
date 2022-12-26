var botonAdicionar = document.querySelector("#adicionar-paciente");

botonAdicionar.addEventListener("click", function(event){
    event.preventDefault();

    var form = document.querySelector("#form-adicionar"),
        paciente = capturarDatosPaciente(form),
        errores = validarPaciente(paciente),
        mensajesErrores = document.querySelector("#mensajes-errores");

    if(errores.length > 0){
        exibirMensajesErrores(errores);
        return; //Refiere a funcion anonima. Esto retorna vacio, ya que si es falso no quiero que ingrese los datos del paciente.
    }
    adicionarPacienteEnLaTabbla(paciente);
    
    form.reset();
    mensajesErrores.innerHTML = "";

})

function capturarDatosPaciente(form){
//Capturando los datos del formulario con una clase y objetos.
    var paciente = {
        nombre: form.nombre.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calcularIMC(form.peso.value, form.altura.value)
    }
    return paciente;
}

function construirTr(paciente){
/*Creando los TD y TR. Asignando los valores; asignando
  a los TR de los TD y a la tabla el TR.*/
var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");
    pacienteTr.appendChild(construirTd(paciente.nombre, "info-nombre"));
    pacienteTr.appendChild(construirTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(construirTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(construirTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(construirTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function construirTd(dato, clase){
    var td = document.createElement("td");
    td.classList.add(clase);
    td.textContent = dato;

    return td;
}

function validarPaciente(paciente){
    var errores = []
    if(paciente.nombre.length == 0){
        errores.push("El nombre no ha sido ingresado.");
    }
    if(paciente.peso.length == 0){
        errores.push("El peso no ha sido ingresado.");
    }
    if(paciente.altura.length == 0){
        errores.push("La altura no ha sido ingresado.");
    }
    if(paciente.gordura.length == 0){
        errores.push("El porcentaje de gordura no ha sido ingresado.");
    }
    if(!validarPeso(paciente.peso)){
        errores.push("El peso es incorrecto.");
    }
    if(!validarAltura(paciente.altura)){
        errores.push("La altura es incorrecta.");
    }
    return errores;
}

function exibirMensajesErrores(errores){
    var ul = document.querySelector("#mensajes-errores");
    ul.innerHTML = "";
    errores.forEach(error => {
        var li = document.createElement("li");
        li.textContent = error;
        ul.appendChild(li);
    });
}

function adicionarPacienteEnLaTabbla(paciente){
    var pacienteTr = construirTr(paciente),
        tabla = document.querySelector("#tabla-pacientes");

    tabla.appendChild(pacienteTr);
}