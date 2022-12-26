var numero = prompt("Ingrese un número máximo: ");
var numero1 = parseInt(numero);
var numeroPares = [];
for(var i=0; i<=numero1; i++){
    if(i % 2 == 0){
        numeroPares.push(i);
    }
}
alert("Los números pares entre 0 y " + numero + " son: " + numeroPares);
