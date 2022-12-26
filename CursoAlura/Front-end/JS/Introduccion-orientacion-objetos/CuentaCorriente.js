import {Cliente} from "./Cliente.js"
export class CuentaCorriente{ 
    #cliente;
    numero;
    #saldo;
    agencia;
    static cantidadCuentas = 0; //Atributo estatico, sirve para todas las cuentas! No se puede acceder por "this"

    set setCliente(valor){
        if(valor instanceof Cliente){
            this.#cliente = valor;
        }
    }
    get getCliente(){
        return this.#cliente;
    }
    constructor(cliente, numero, agencia){  //Sirve para dar valores iniciales!
        this.setCliente = cliente;
        this.numero = numero;  
        this.#saldo = 0;  
        this.agencia = agencia;  
        CuentaCorriente.cantidadCuentas ++;
    }
    depositosEnCuenta(valor){  //Metodo
        if(valor > 0){
            this.#saldo += valor; 
            return this.#saldo;
        }         
    }
    retiroEnCuenta(valor){  
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

//Para asignar valores a atributos privados puedo usar "set" y para ver los valores puedo usar "get"

//El saldo es privado, solo lo puedo actualizar mediante los metodos.