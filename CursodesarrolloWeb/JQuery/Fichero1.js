//Eventos con el mouse.
$("h1").click(function(){
    console.log("Se ha pulsado el titular h1.");
})
$("li").click(function(){
    console.log("Se ha pulsado un elemento de la lista.");
})
$("p").dblclick(function(){
    console.log("Se ha pulsado dos veces sobre el parrafo.");
})
//Eventos con el teclado.
$("input").eq(0).keypress(function(){
    $(this).css("color", "red");
})
$("input").eq(0).keypress(function(){
    $(this).css("color", "red");
    console.log(event);
})
$("input").eq(0).keypress(function(){
    $(this).css("color", "red");
    if(event.key === "d" || event.which === 100){
        $(this).css("color", "green"); 
    }
})
//Ahora haremos desaparecer el parrafo al hacer click en la lista.
$("li").eq(0).click(function(){
    $("#id1").fadeOut(2000);
})
$("li").eq(1).click(function(){
    $("h1").slideUp(2000);
})
