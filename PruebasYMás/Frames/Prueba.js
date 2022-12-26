let x = 0;
let y = 0;
let ancho = 0;
let alto = 0;
function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    background(220);
    rect(x,y,ancho,alto)
    x+=1;
    y+=1;
    ancho+=1;
    alto+=1;
    if (ancho > 50){
        ancho = 0;
    }
    if (alto > 50){
        alto = 0;
    }
  }