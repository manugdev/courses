document.addEventListener("keydown", function(event){
    console.log(event);
})

//"document" representa el DOM de la página, es un objeto.
//"addEventListener" agrega un observador de eventos.

document.addEventListener("keyup", function(event){
    console.log(event);
})