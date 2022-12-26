import { deleteAllCookies, deleteCookie, getCookieValue, setCookie } from 'cookies-utils'
import { LISTA_CURSOS } from './mock/cursos.mock';
import { Curso } from './models/curso'
import { Estudiante } from './models/Estudiante'
import { Empleado } from './models/Persona';

console.log("Hola TypeScript");
console.log("Hola Nodemon");

//Declaracion de variables, tipado debil/inferido.
var nombre = "Martin"
let email = "martin@imaginagroup.com"
const PI = 3.1416

console.log(`Hola mi nombre es ${nombre}, mi email es ${email} y se que PI es igual a ${PI}`)

//Declaracion de variables, tipado fuerte.
var nombre2: string = "Manuel"
let email2: string = "manug24696@gmail.com"
const PI2: number = 6.2832
let anything: any = "Esto puede tomar cualquier tipo de valor"
var error: boolean = true

console.log(`¿Hay error? ${error ? "Si" : "No"}`)

//instanciando multiples variables. 

let a: string, b: boolean, c: number

a = "TypeScript"
b = false
c = 247

console.log(`¿${a} es un lenguaje debil? ${b}. ¿Cuando deberia usarlo? ${c}`);


//Tipos mas complejos.
//Lista de cadena de texto.
let listaTareas: string[] = ["Tarea 1", "Tarea 2"]

//Combinar tipos en listas.
let valores: (string | number | boolean)[] = [false, "Hola", 56]

//Enumerados
enum Estados {
    "Completado" = "C",
    "Imcompleto" = "I",
    "Pendiente" = "P"
}

enum PuestoCarrera {
    "Primero" = 1,
    "Segundo",
    "Tercero"
}

let estadoTarea: Estados = Estados.Completado;
let puestoMaraton: PuestoCarrera = PuestoCarrera.Segundo;

//Interfaces
interface Tarea {
    nombre: string,
    estado: Estados,
    urgencia: number
}
//Podemos crear variables que sigan esta interface
let tarea1: Tarea = {
    nombre: "Tarea 1",
    estado: Estados.Pendiente,
    urgencia: 10
}
console.log(`Tarea: ${tarea1.nombre}, ${tarea1.estado}, ${tarea1.urgencia}`);

//Type de TypeScript. Mas complejo de interface.
type Producto = {
    precio: number,
    nombre: string,
    año: number
}
let coche: Producto = {
    nombre: "Audi", 
    precio: 45000,
    año: 2010
}
console.log(coche.año < 2010 ? `Producto: ${coche.nombre} es viejo` : `Producto: ${coche.nombre} es nuevo`);

let listaTareasNueva: Tarea[] = [
    {
        nombre: "Tarea 1",
        estado: Estados.Completado,
        urgencia: 1
    },
    {
        nombre: "Tarea 2",
        estado: Estados.Pendiente,
        urgencia: 5
    },
    {
        nombre: "Tarea 3",
        estado: Estados.Imcompleto,
        urgencia: 10
    }
]

listaTareasNueva.forEach((tarea: Tarea, index: number) => {
    console.log(`${index} - ${tarea.nombre}`);
})

//Funciones

/**
* Funcion que muestra un saludo por consola.
*/
function saludar() {
    let nombre = "Manuel"
    console.log(`¡Hola, ${nombre}!`);
    
}
//Invocacion
saludar()

function saludar2(nombre: string){
    console.log(`¡Hola, ${nombre}!`);
}
saludar2("Manuel Garcia")

//Si quiero un valor por defecto...
function despedir(nombre: string = "Pepe"){
    console.log(`¡Nos vemos ${nombre}, cuidate!`);
}
despedir()
despedir("Manuel Garcia")

//Recibir o no parametros
function despedida(nombre?: string) {
    nombre ? console.log(`¡Adiós ${nombre}!`) : console.log("Adiós")
}
despedida()
despedida("Jorge")

//Diferentes tipos de dato
function variosTipos(a: string | number){
    if(typeof(a) === "string"){
        console.log("A es un string");     
    } else if(typeof(a) === "number") {
        console.log("A es un numero");    
    } else {
        console.log("No es numero ni string");    
        throw Error("A no es un string ni un numero")   
    }
}
variosTipos("Hola!")
variosTipos(5)

//Return - despues de los parametros puedo declarar que tipo de valor
//retornara de la funcion.
function ejemploReturn(nombre: string, apellidos: string): string {
    return `${nombre} ${apellidos}`
}
const nombreCompleto = ejemploReturn("Manuel", "Garcia Landaburu")
console.log(nombreCompleto);


//Multiples parametros

function multiplesParametros(...nombres: string[]){
    nombres.forEach(nombre => {
        console.log(nombre);
    })
}
multiplesParametros("Manuel", "Jorge", "Claudia", "Agustin", "Mailen", "Lucia")
const lista = ["Una cosa", "Dos cosas"]
multiplesParametros(...lista)

//Arrow function
type Empleado2 = {
    nombre: string
    apellidos: string
    edad: number
}
let empleadoMartin: Empleado2 = {
    nombre: "Martin",
    apellidos: "San Jose",
    edad: 30
}
const mostraEmpleado = (empleado2: Empleado2) => (`${empleado2.nombre} tiene ${empleado2.edad} años`)

console.log(mostraEmpleado(empleadoMartin))

//Sobrecarga de funciones
function mostrarError(error: string | number): void {
    console.log("Ha habido un error: ", error);
    
}

//Persistencia de datos
// 1. localStorage
// 2. sessionStorage
// 3. cookies -> ambito de URL - fecha de caducidad

// function guardandoLocalStorage():void{
//     localStorage.set()
// }

// //Cookies

// const cookieOptions = {
//     name: "cookieTS", // string,
//     value: "Manu", // string,
//     maxAge: 10 * 60, // optional number (value in seconds),
//     expires: new Date(2099, 10, 1), // optional Date,
//     path: "/", // optional string,
//   };
//   //Seteando cookies
//   setCookie(cookieOptions);
//   //Leer cookie (mientras no expire)
//   getCookieValue("cookieTS")
//   //Eliminando
//   deleteCookie("cookieTS")
//   //Eliminar TODAS las cookies
//   deleteAllCookies()


// //Clase Temporizador

// class Temporizador {
//     public terminar?: (tiempo: number) => void

//     public empezar(): void{
//         setTimeout(() => {
//             //Comprobamos que exista la funcion terminar
//             if(!this.terminar) return
//             //Cuando haya pasado el tiempo, se ejecutara "terminar"
//             this.terminar(Date.now())
//         }, 10000);
//     }
// }

// const miTemporizador: Temporizador = new Temporizador()
// //Definamos la funcion del callback a ejecutar cuando termine el time
// miTemporizador.terminar = (tiempo: number) => {
//     console.log('Hemos terminado el evento: ', tiempo);
// }
// //Lo inicializamos
// miTemporizador.empezar()


//Clases





//Creamos un curso



const listaCursos: Curso[] = LISTA_CURSOS 

//Creamos un estudiante

const manuel: Estudiante = new Estudiante('Manuel', listaCursos, 'Garcia')

console.log(`${manuel.nombre}, estudia:`)
manuel.cursos.forEach((curso: Curso) => console.log(`${curso.nombre} - ${curso.horas} hs`))

const cursoAngular: Curso = new Curso('Angular', 40)
manuel.cursos.push(cursoAngular)


console.log(manuel.horasEstudiadas)
//Saber la instancia de un objeto/variable
//-- typeOf (tipo)
//-- instanceOf (instancia de)

let texto = new String('Hola')
let fechaNacimiento = new Date(1996,6,24)

if(fechaNacimiento instanceof Date){
    console.log('¿Es una instancia de Date? Si señor');
}
if(manuel instanceof Estudiante){
  console.log('Manuel es un estudiante');
}


//Herencia y polimorfismo

let empleado1 = new Empleado['Martin', 'San Jose', 30, 2000]