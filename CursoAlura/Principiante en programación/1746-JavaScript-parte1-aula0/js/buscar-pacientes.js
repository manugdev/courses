var botonBuscar = document.querySelector("#buscar-paciente");

    botonBuscar.addEventListener("click", function(){
    var xhr = new XMLHttpRequest;
    xhr.open("GET", "https://alura-es-cursos.github.io/api-pacientes/pacientes.json");
    xhr.addEventListener("load", function(){
        var errorAjax = document.querySelector("#error-ajax");
        if(xhr.status == 200){
            var respuesta = xhr.responseText;
            var pacientes = JSON.parse(respuesta);
            
            errorAjax.classList.add("invisible");
            pacientes.forEach(function(paciente){
            adicionarPacienteEnLaTabla(paciente);
            });
        }
        else{
            errorAjax.classList.remove("invisible");
            console.log(xhr.status);
            console.log(xhr.responseText);
        }
    });
    xhr.send();
});
