//Codigo JS
var valor = 0;
while(valor<4){
    //Código que se ejecuta de forma repetitiva hasta que
    //ya no se cumpla la condicion.
    console.log("El valor es igual a " + valor + ".");
        if(valor == 2){
            console.log("Ahora valor es igual a 2 y quiero parar la ejecuciín del bucle.");
            break;
        }
    console.log("Valor es menor que 4, entonces incremento en uno la variable.");
    valor = valor + 1;
}