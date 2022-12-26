var persona = {
    nombre: "Manuel",
    email: "manuelgarcia24696@gmail.com",
    twitter: "manuu_garcia96",
    saludar: function(){
        return"Hola mundo!"
    }
}

var dato = "";

for (dato in persona){ //Para cada dato en el objeto hace una iteracion.
    console.log(dato + ": " + persona[dato]);
}