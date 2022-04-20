
var tiureux ,trex_running;
function preload(){//função carregar uz elementos do jogo
  tiureux_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");
  imgSolo = loadImage("ground2.png");

}

function setup(){
  createCanvas(600,200)
  
  //crie um sprite de trex
  tiureux = createSprite(50,160,20,50);
  tiureux.addAnimation("running", tiureux_running);
  tiureux.scale=0.5;
  edges= createEdgeSprites();
  console.log("trex_correndo");
  
  solo = createSprite(200,180,400,20) 
  solo.addImage("ground",imgSolo);
  solo.x=solo.width/2;
}

function draw(){
  background("white")
  solo.velocityX= -2;
  if(solo.x<0){
    solo.x = solo.width/2;
  }
  drawSprites();
  console.log(tiureux.y)

  if (keyDown("space")){
    tiureux.velocityY= -10;
  }
  tiureux.velocityY=tiureux.velocityY+0.5; //Cria a grauviudade do tiureux
  tiureux.collide(solo);//faiz u tiureux coulidii
}