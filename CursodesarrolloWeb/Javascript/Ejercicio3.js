function media(numeros){
    var total = 0;
    for(numero of numeros){
        total = total + numero;
    }
    var media = total / numeros.length;
    console.log(media);
}

var numeros = [1,2,3,4,5];
var resultado = media(numeros);
var texto = "El resultado es igual a " + resultado;
console.log(texto);