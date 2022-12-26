import { Cliente } from "../Cliente.js";

export class Cuenta{
    #cliente;
    #saldo;

    constructor(cliente, numero, agencia, saldo){
        if(this.constructor == Cuenta){
            throw new Error("No se debe instanciar objetos de la clase Cuenta");
        }
        this.#cliente = cliente;
        this.numero = numero;
        this.agencia = agencia;
        this.#saldo = saldo;
    }
    depositosEnCuenta(valor){  //Metodo
        if(valor > 0){
            this.#saldo += valor; 
            return this.#saldo;
        }         
    }
    retiroEnCuenta(valor){ 
        //Metodo abstracto.
        throw new Error("Debe implementar el metodo de retiro en su clase.");
    }
    _retiroEnCuenta(valor, comision){ 
        valor = valor * (1 + comision / 100);
        if(valor <= this.#saldo){
            this.#saldo -= valor;  
            return this.#saldo;   
        }         
    }
    transferenciaEntreCuentas(valor, cuentaDestino){ //valor: parametro por valor; cuentaDestino: Parametro por referencia
        this.retiroEnCuenta(valor);
        cuentaDestino.depositosEnCuenta(valor);
    }
    verSaldo(){
        return this.#saldo;
    }
}