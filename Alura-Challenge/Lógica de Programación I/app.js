"use strict"

var encriptar = document.getElementById("encriptar");
var desencriptar = document.getElementById("desencriptar");
var copiar = document.getElementById("copiar");

function botonEncriptar(){
    var texto1 = document.getElementById("texto1").value;
    var textoEncriptado = texto1.replace(/e/igm,"enter"); 
    var textoEncriptado = textoEncriptado.replace(/o/igm,"ober");
    var textoEncriptado = textoEncriptado.replace(/i/igm,"imes");
    var textoEncriptado = textoEncriptado.replace(/a/igm,"ai");
    var textoEncriptado = textoEncriptado.replace(/u/igm,"ufat");
    document.getElementById("texto2").innerHTML = textoEncriptado;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";
}
function botonDesencriptar(){
    var texto1 = document.getElementById("texto1").value;
    var textoEncriptado = texto1.replace(/enter/igm,"e"); 
    var textoEncriptado = textoEncriptado.replace(/ober/igm,"o");
    var textoEncriptado = textoEncriptado.replace(/imes/igm,"i");
    var textoEncriptado = textoEncriptado.replace(/ai/igm,"a");
    var textoEncriptado = textoEncriptado.replace(/ufat/igm,"u");
    document.getElementById("texto2").innerHTML = textoEncriptado;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";
}
function botonCopiar(){
    var texto2 = document.getElementById("texto2");
    texto2.select();
    texto2.setSelectionRange(0,99999);
    document.execCommand("copy");
}
