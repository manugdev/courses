import { Cliente } from "./Cliente.js";
import { CuentaAhorro } from "./Cuentas/CuentaAhorro.js";
import { CuentaCorriente } from "./Cuentas/CuentaCorriente.js";
import { CuentaNomina } from "./Cuentas/CuentaNomina.js";
import { Empleado } from "./Empleados/Empleado.js";
import { Gerente } from "./Empleados/Gerente.js";
import { Director } from "./Empleados/Director.js";
import { SistemaAutenticacion } from "./SistemaAutenticacion.js";

//Clientes y autenticacion.
const cliente1 = new Cliente("Jose", "13232876", "V13232876");
cliente1.asignarClave("1111")
console.log(SistemaAutenticacion.login(cliente1, "1111"))

const cliente2 = new Cliente("Leonardo", "13804050", "B13804050");
const cliente3 = new Cliente("Maria", "11204060", "F11204060");

//Cuentas Corrientes de los Clientes.
const CuentaCorriente1 = new CuentaCorriente(cliente1, "13232876", "1001");
const CuentaCorriente2 = new CuentaCorriente(cliente2, "123434343", "1002");
const CuentaCorriente3 = new CuentaCorriente(cliente3, "134353530", "1003");

//Cuentas Ahorro de los Clientes.
const cuentaAhorro1 = new CuentaAhorro(cliente1, "13232876", "1001", 0);
const cuentaAhorro2 = new CuentaAhorro(cliente2, "123434343", "1002", 0);
const cuentaAhorro3 = new CuentaAhorro(cliente3, "134353530", "1003", 0);

//Cuenta Nomina del Cliente.
const cuentaNomina1 = new CuentaNomina(cliente1, "13232876", "1001", 0);


//Empleados y autenticacion.
const empleado = new Empleado ("Juan Perez", "37665412", 10000);
empleado.asignarClave("12345")
console.log(SistemaAutenticacion.login(empleado, "12345"));

const gerente = new Gerente ("Pedro Rivas", "15678902", 12000);
gerente.asignarClave("67891")
console.log(SistemaAutenticacion.login(gerente, "67891"));

const director = new Director("Elena Moreno", "14701182", 15000);
director.asignarClave("11223")
console.log(SistemaAutenticacion.login(director, "11223"));

console.log(empleado.verBonificacion());
console.log(gerente.verBonificacion());
console.log(director.verBonificacion());

