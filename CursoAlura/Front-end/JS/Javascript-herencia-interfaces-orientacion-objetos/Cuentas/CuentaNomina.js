import {Cuenta} from "./Cuenta.js";

export class CuentaNomina extends Cuenta{
    constructor(cliente, numero, agencia, saldo){ 
        super(cliente, numero, agencia, saldo);
    }
    retiroEnCuenta(valor){ 
        super._retiroEnCuenta(valor, 1); 
    }  
}