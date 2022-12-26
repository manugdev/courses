var cuenta = 2 + 3,
    cuentaNueva = 20 + 45,
    totalFinal = cuenta + cuentaNueva;

console.log(totalFinal);

function suma(datoA, datoB){
    var resultado = datoA + datoB;
    return resultado;
} //Con esto me ahorro tener que declarar las cuentas!

suma(2,3);

var cuentaFinal = suma(suma(2,3), suma(20, 45));
console.log(cuentaFinal)
