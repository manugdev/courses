/*
var pacientes = document.querySelectorAll(".paciente");

pacientes.forEach(function(paciente){
    paciente.addEventListener("dblclick", function(){
        this.remove();
    })
});

Funcionaba bien, pero no lo hacia con los recien ingresados.
*/

tabla.addEventListener("dblclick", function(){
    event.target.parentNode.classList.add(".fadeOut"); //Agrego animacion de eliminacion
    setTimeout(function(){
        event.target.parentNode.remove();  //Subir una gerarquia para eliminar la linea completa!

    },500); 
});
