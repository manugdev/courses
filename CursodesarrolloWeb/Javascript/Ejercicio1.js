var numeroCadena1 = prompt("Ingrese el primer número:");
var numeroCadena2 = prompt("Ingrese el segundo número:");
var operacion = prompt("¿Ingrese el simbolo de la operación  que desea realizar (+,-,*,/):");
var resultado = 0;
var numero1 = parseInt(numeroCadena1);
var numero2 = parseInt(numeroCadena2);
if (operacion == "+"){
    resultado = numero1 + numero2;
    alert(numero1 + operacion + numero2 + " = " + resultado)
    console.log(resultado);
}else if (operacion == "-"){
    resultado = numero1 - numero2;
    alert(numero1 + operacion + numero2 + " = " + resultado)
    console.log(resultado);
}else if (operacion == "*"){
    resultado = numero1 * numero2;
    alert(numero1 + operacion + numero2 + " = " + resultado)
    console.log(resultado);
}else{
    resultado = numero1 / numero2;
    alert(numero1 + operacion + numero2 + " = " + resultado)
    console.log(resultado);
}