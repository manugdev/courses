"use strict"

//Manejo de errores.

//Hago la prueba.
try{ 
    //var array = new Array(100000000000);
    //var x = y;
    decodeURIComponent("http://%ominio.com");
} 
//Si falla tiro el error o pruebo otras cosas.
catch(error){
    console.log(error);
    console.log(error.message);
    console.log(error.name);
}
