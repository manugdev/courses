let xSnake = 0;
let ySnake = 0;
let direccionX = 1;
let direccionY = 0;
let speedSnake = 3;
let actualBall = null;

function setup() {
    createCanvas(800, 800);
}
  
function draw() {
    background(220);
    /* if (!actualBall){
        actualBall = generateRandomBall();
    } */
    drawBorder();
    drawPlayer();
    //drawBall(actualBall);
    updateSnake();
}

function drawPlayer(){
rect(xSnake,ySnake,50,50)
}

function drawBlock(x,y){
    rect(x,y,50,50)
}

function drawBorder(){
    for(let indexX=0; indexX<=width; indexX+=50){
        drawBlock(indexX,0);
    }
    for(let indexX=0; indexX<=width; indexX+=50){
        drawBlock(indexX,height - 50);
    }
}

function keyPressed(){
    switch(keyCode){
        case LEFT_ARROW:
            xSnake -= 50;
            direccionX = -1;
            direccionY = 0;
            break;
        case RIGHT_ARROW:
            xSnake += 50;
            direccionX = 1;
            direccionY = 0;
            break;
        case UP_ARROW:
            ySnake -= 50;
            direccionY = -1;
            direccionX = 0;
            break;
        case DOWN_ARROW:
            ySnake += 50;
            direccionY = 1;
            direccionX = 0;
            break;
    }
}

function updateSnake(){
    if (xSnake >= 0 && xSnake <= 750){
        xSnake = xSnake + direccionX * speedSnake;
    }
    else if (xSnake > 750){
        xSnake = xSnake % 750;
    }
    else if(xSnake < 0){
        xSnake = width - 50;
    }
    
    ySnake = ySnake + direccionY * speedSnake;
    ySnake = constrain(ySnake, 50, height - 100)
   
}

/* function getRandomArbitrary(min, max){
    return Math.random() * ((max+1) - min) + min;
} */

/* function generateRandomBall(){
    return {x: generateRandomBall(width,0), y: generateRandomBall(0,height)}
} */

function drawBall(ball){
    fill(253,0,0);
    circle(ball.x, ball.y, 50);
}


