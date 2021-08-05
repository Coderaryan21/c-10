var ship
var seaImg
var boat

function preload(){
  seaImg = loadImage("sea.png")
  ship = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png")
}

function setup(){
  createCanvas(400,400);
  sea = createSprite(200,234, 400,200)
  sea.addImage(seaImg)
  sea.scale = 0.5
  boat = createSprite(80, 310, 50, 40)
  boat.addAnimation("movement",ship)
  boat.scale = 0.2
  sea.velocityX=4
  
  
}

function draw() {
  background("blue");
 
  drawSprites()
  if(sea.x>1040){
    sea.x = -640
  }
}