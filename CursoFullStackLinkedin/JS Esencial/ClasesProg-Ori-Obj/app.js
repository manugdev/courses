"use strict"

//Trabajando con clases.

//Clase madre/padre.
class Producto{ 
    constructor(numSerie){
        this.numSerie = numSerie;
        this.tiempoGarantia = 100;
    }

    //Static hace que el metodo infoTienda este disponible aunque no hagamos una instancia(en ambas clases).
    static get infoTienda(){ 
        console.log(`Productos de la tienda Patito inc.`);
    }

    set garantia(value){ //Esto es para modificar la garantia del producto.
        this.tiempoGarantia -= value;
    }

    get garantia(){
        return this.tiempoGarantia;
    }
}

//Clase hijo, hereda de la clase madre Producto.
class Pantalla extends Producto{ 
    constructor(numSerie, marca, modelo, pulgadas){
        super(numSerie)
        this.marca = marca;
        this.modelo = modelo;
        this.pulgadas = pulgadas;
    }
    encendido(){
        this.garantia = 1;
        console.log(`La pantalla ${this.marca} se ha encendido.`);
    }
    volumen = function(){
        console.log(`El volumen se ha modificado.`);
    }
    info = function(){
        console.log(`la pantalla ${this.marca} de modelo ${this.modelo} es de ${this.pulgadas} pulgadas.`);
    }
    //Asigno un nuevo valor y lo devuelvo.
    set peso(value){ 
        this.kgs = value.trim();
    }
    get peso(){
        return this.kgs;
    }
}
const tvSala = new Pantalla("13579", "Master", "Oasis", 55);
const tvHabitacion = new Pantalla("24680", "Origin", "Artemis", 80);



/* Forma antigua 

function Pantalla(marca, modelo, pulgadas){
    this.marca = marca;
    this.modelo = modelo;
    this.pulgadas = pulgadas;
}

Pantalla.prototype.encendido = function(){
    console.log(`la pantalla ${this.marca} se ha encendido.`);
}

Pantalla.prototype.volumen = function(){
    console.log(`El volumen se ha modificado.`);
}

Pantalla.prototype.info = function(){
    console.log(`la pantalla ${this.marca} de modelo ${this.modelo} es de 
    ${this.pulgadas} pulgadas.`);
}s*/