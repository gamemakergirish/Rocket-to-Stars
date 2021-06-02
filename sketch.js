var PLAY = 1;
var END = 0;
var gameState = PLAY;

var star = 0
var rocket,asteroid,star,space;

function preload(){

  shuttle = loadImage("Rocket.jpg");
  antariksh = loadImage("space.jpg");
  tara = loadImage("star.jpg");
  rock = loadImage("asteroid image.jpg");
}
function setup() {
 createCanvas(400,400);
  
 space = createSprite(200,200,400,400);
 space.addImage("space",antariksh);
  
 rocket = createSprite(200,50,50,50);
 rocket.addImage("shooting",shuttle);
 //rocket.scale = 0.5;
 
}
function draw() {
 background("black")

  text("Star: "+ star, width/1.2,height/9);
  
  if(gameState === PLAY){
  
    if(rocket.isTouching(star)){
     star = star+1 
    }
    
    space.velocityX = -(4 + 3* score/100)
    
    if (space.y < 0){
      space.y = space.width/2; 
    }
    
    if(keyDown("LEFT_ARROW")) {
       rocket.x = rocket.x-5 
    }
    if(keyDown("RIGHT_ARROW")) {
       rocket.x = rocket.x+5 
    }
    spawnAsteroid();

    spawnStar();
    
  if(asteroid.isTouching(rocket)){
        rocket.visible = false;
        gameState = END;
    }} 
   else if (gameState === END) {
    text("Crashed",190,190);
    text("Press 'R' To Restart",210,180);
    if(keyDown("r")){ 
      star = 0
      gameState = PLAY;
    } 
   }
 drawSprites();
}

function spawnAsteroid(){
  if (frameCount % 60 === 0) {
     var asteroid = createSprite(600,120,40,10);
     asteroid.y = Math.round(random(50,150));
     asteroid.addImage(rock);
     asteroid.scale = 0.5;
     asteroid.velocityY = (4 + 3*star/2);
     asteroid.lifetime = 200;
 }}  

 function spawnStar(){
  if (frameCount % 60 === 0) {
     var star = createSprite(600,120,40,10);
     star.y = Math.round(random(50,150));
     star.addImage(rock);
     star.scale = 0.5;
     star.velocityY = (4 + 2*star/3);
     star.lifetime = 200;
 }}