const boton = document.querySelector(".boton");

boton.addEventListener("click", function(){
    console.log(this.innerHTML);
})
//Con esta muestro el nombre del boton.

boton.addEventListener("click", () => {
    console.log(this);
    this.location = "http://www.google.com";
})
//Con esta redirecciono a donde me envia el boton.