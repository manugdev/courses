"use strict"

var boton = document.getElementById("boton");
var mensajes = document.getElementById("mensajes");
var contBanderas = document.getElementById("banderas");
var contenedor = document.getElementById("contenedor");


boton.addEventListener("click", function(){
    getPosts()
    .then(data => data.json())
    .then(posts => {
        mostrarDatos(posts);
        return getCountries();
    })
    .then(data => data.json()) //then toma promesas.
    .then(countries => {
        mostrarBanderas(countries);
    })
    .catch(error => { //catch agarra los errores.
        mensajes.classList.toggle("hide"); //toggle remueve o agrega.
        mensajes.innerHTML = error;
        setTimeout(() => mensajes.classList.toggle("hide"), 6000);
        })
});

function getPosts(){
    return fetch("https://jsonplaceholder.typicode.com/posts");
}

function getCountries(){
    return fetch("https://restcountries.com/v2/all"); 
}

function mostrarBanderas(countries){
    contBanderas.innerHTML = "";
    countries.map((country, i) => {
        let bandera = document.createElement("img");
        bandera.src = country.flag;
        bandera.width = "20";
        bandera.height = "20";
        contBanderas.appendChild(bandera);
    })
}

function mostrarDatos(posts){
    posts.map((post, i) => {
        let titulo = document.createElement("h1");
        let contenido = document.createElement("P");

        titulo.innerHTML = (i + 1) + " - " + post.title;
        contenido.innerHTML = post.body;

    contenedor.appendChild(titulo);
    contenedor.appendChild(contenido);
    })
}