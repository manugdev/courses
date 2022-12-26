"use strict"

const video = document.querySelector(".bostonVideo");

video.addEventListener("ended", function(){
    alert("MENSAJE \nEl video ha terminado");
    let resultado = confirm("¿Deseas ver el video nuevamente?");
    console.log(resultado);
    if(resultado){
        video.play();
    }else{
        window.location = "http://www.google.com";
    }
});