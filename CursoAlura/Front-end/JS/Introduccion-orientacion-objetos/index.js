//Importacion de clases
import{Cliente} from "./Cliente.js"
import{CuentaCorriente} from "./CuentaCorriente.js"


const cliente1 = new Cliente("Jose", "13232876", "V13232876");
const cuentaCorriente1 = new CuentaCorriente(cliente1, "232323232", "1001");

const cliente2 = new Cliente("Leonardo", "13804050", "B13804050");
const cuentaCorriente2 = new CuentaCorriente(cliente2, "123434343", "1002");

const cliente3 = new Cliente("Maria", "11204060", "F11204060");
const cuentaCorriente3 = new CuentaCorriente(cliente3, "134353530", "1003");


console.log(cuentaCorriente1.getCliente, cuentaCorriente2.getCliente, cuentaCorriente3.getCliente);

cuentaCorriente3.depositosEnCuenta(1000);
const saldoVer1 = cuentaCorriente3.verSaldo();
console.log("El saldo actual de la Cuenta3 es " + saldoVer1);

cuentaCorriente3.transferenciaEntreCuentas(100,cuentaCorriente2);

const saldoVer2 = cuentaCorriente2.verSaldo();
console.log("El saldo actual de la Cuenta2 es " + saldoVer2);

const saldoVer3 = cuentaCorriente3.verSaldo();
console.log("El saldo actual de la Cuenta3 es " +saldoVer3);

console.log(CuentaCorriente.cantidadCuentas);