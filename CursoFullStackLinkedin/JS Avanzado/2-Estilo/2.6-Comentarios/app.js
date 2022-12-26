var nombre = "Manuel",
    email = "manuelgarcia24696@gmail.com";

/*
Funcion para enviar saludos.
@param {string} nombre - Nombre de la persona a saludar.
(Esto lo veo en usjsdoc).
*/
function saludar (nombre){
    //Se retorna el mensaje formado.
    return "Hola " + nombre;
}

/*
    Comentario de bloque.
*/

/**
 * (poner /** y paretar tab)
 * @param {*} datoA 
 * @param {*} datoB 
 * @param {*} datoC 
 * @returns 
 */
function calcular (datoA, datoB, datoC){
    var resultado = datoA + datoB;
    return resultado;
}