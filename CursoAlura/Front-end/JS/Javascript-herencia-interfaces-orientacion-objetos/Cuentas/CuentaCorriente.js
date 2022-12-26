import { Cuenta } from "./Cuenta.js";

export class CuentaCorriente extends Cuenta{ 

    static cantidadCuentas = 0; //Atributo estatico, sirve para todas las cuentas! No se puede acceder por "this"
   
    constructor(cliente, numero, agencia){  //Sirve para dar valores iniciales!
        super(cliente, numero, agencia, 0);
        CuentaCorriente.cantidadCuentas ++;
    }
    retiroEnCuenta(valor){ 
        super._retiroEnCuenta(valor, 5); 
    }         
}


//Para asignar valores a atributos privados puedo usar "set" y para ver los valores puedo usar "get"

//El saldo es privado, solo lo puedo actualizar mediante los metodos.