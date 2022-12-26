//Código JS para eventos.
var parrafo = document.querySelector("#id1");
var titular3 = document.querySelector("#id2");


//Añadir eventos a estos elementos.
parrafo.addEventListener("mouseover", function(){
    parrafo.style.color = "green";
    parrafo.style.border = "solid 2px green";
})
parrafo.addEventListener("mouseout", function(){
    parrafo.style.color = "black";
    parrafo.style.border = "none";
})
titular3.addEventListener("click", function(){
    titular3.textContent = "Gracias por haber pulsado!!";
    titular3.style.color = "red";
})