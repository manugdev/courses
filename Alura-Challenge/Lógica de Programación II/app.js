var palabras = Array("Codigo", "Framework", "Libreria", "Dominio", "Software", "Desarrollador", "Tester", "Ciberseguridad", "Javascript", "Bootstrap");
var palabraOculta = "";
var palabraAdivinar = "";           
var vidas = 6;
document.getElementById("boton").addEventListener("click", comprobar);
iniciar();
dibujarHorca();

function iniciar(){
    palabraOculta = palabras[Math.floor(Math.random()*palabras.length)];
  
    for(let i = 0; i < palabraOculta.length; i++){
        palabraAdivinar += "_ ";
    }
    document.getElementById("frase").innerHTML = palabraAdivinar;
}
function comprobar(){
    let letra = document.getElementById("letra").value.toLowerCase();
    let nuevo = "";
    palabraOculta = palabraOculta.toLocaleLowerCase();
    for(let i = 0; i < palabraOculta.length; i++){
        if(letra==palabraOculta[i]){
            nuevo = nuevo + letra + " ";
        }else{
            nuevo = nuevo + palabraAdivinar[i*2] + " ";
        }
    }
    if(nuevo == palabraAdivinar){
        vidas --;
        document.getElementById("vida").innerHTML = "Vidas restantes: " + vidas;
    }
    palabraAdivinar = nuevo;
    document.getElementById("frase").innerHTML = palabraAdivinar;
    if(vidas == 0){
        alert("GAME OVER");
    }
    if(palabraAdivinar.search("_") == -1){
        alert("¡Ganaste el Juego!")
    }
    document.getElementById("letra").value = "";
    document.getElementById("letra").focus();
    dibujarAhorcado();
}
function dibujarHorca(){
    var canvas = document.getElementById("lienzo");
    if(canvas.getContext){
        var ctx = lienzo.getContext("2d");
        //Dibujo horca
        ctx.beginPath();
        ctx.moveTo(50,450);
        ctx.lineTo(150,450);
        ctx.moveTo(100,450);
        ctx.lineTo(100,25);
        ctx.moveTo(100,25);
        ctx.lineTo(300,25);
        ctx.moveTo(300,25);
        ctx.lineTo(300,50);
        ctx.stroke();
    }
}
function dibujarAhorcado(){
    var canvas = document.getElementById("lienzo");
    if(canvas.getContext){
        var ctx = lienzo.getContext("2d");
        if(vidas<=5){
            //Dibujo cabeza
            ctx.beginPath();
            ctx.arc(300, 100, 50, 0, Math.PI * 2); 
            ctx.stroke();
        }
        if(vidas<=4){
            //Dibujo torso
            ctx.beginPath();
            ctx.moveTo(300,150);
            ctx.lineTo(300,325);
            ctx.stroke();
        }
        if(vidas<=3){
            //Dibujo mano izquierda
            ctx.beginPath();
            ctx.moveTo(300,175);
            ctx.lineTo(250,275);
            ctx.stroke();
        }
        if(vidas<=2){
            //Dibujo mano derecha
            ctx.beginPath();
            ctx.moveTo(300,175);
            ctx.lineTo(350,275);
            ctx.stroke();
        }
        if(vidas<=1){
            //Dibujo pierna izquierda
            ctx.beginPath();
            ctx.moveTo(300,325);
            ctx.lineTo(250,425);
            ctx.stroke();
        }
        if(vidas==0){
            //Dibujo pierna derecha
            ctx.beginPath();
            ctx.moveTo(300,325);
            ctx.lineTo(350,425);
            ctx.stroke();
        }
    }
}
function nuevaPalabra(){
    let dato = document.getElementById("nueva").value;
    palabras.push(dato);
}

