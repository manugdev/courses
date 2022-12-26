var tienda = {
    nombre: "Tienda las 4 esquinas", //Coma es separacion entre parametros.
    calcular: function(costo1, costo2){
        return costo1 + costo2; 
    },
    saludar: function(){
        var mensaje = "Hola ";
        return mensaje;
    }
};

var btnSaludar = document.getElementById("btnSaludar");

btnSaludar.addEventListener("click", function(){
    console.log(tienda.saludar()); //Cuando se termina de ejecutar una sentencia.
});

