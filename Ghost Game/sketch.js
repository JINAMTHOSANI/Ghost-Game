var tower,towerImage;
var door,doorImage;
var doorgroup
var climber,climberImage;
var climbergroup 
var ghost,ghostImage
function preload (){
 towerImage=loadImage("tower.png")
  doorImage=loadImage("door.png")
  climberImage=loadImage("climber.png")
  ghostImage=loadImage("ghost-standing.png")
}
function setup (){
 createCanvas(600,600) 
  tower=createSprite(300,300)
  tower.addImage("tower",towerImage)
  tower.velocityY=1
  
  doorgroup= new Group();
  climbergroup= new Group();
  
  ghost=createSprite(200,200,50,50)
  ghost.addImage("ghost",ghostImage)
  ghost.scale=0.3
  
  
  
  

  
} 
function draw(){
  background(0)
  if (tower.y>400){
    tower.y=300
  }
  spawndoor()
  
  if (keyDown("space")){
    ghost.velocityY=-10;
  }
  ghost.velocityY=ghost.velocityY + 0.8;
    
  
 drawSprites(); 
}
function spawndoor(){
 if(frameCount % 240===0){
   door=createSprite(200,-50)
   door.addImage("door",doorImage)
   door.velocityY=1
   door.x=Math.round(random(120,400))
   doorgroup.add(door);
   
   climber=createSprite(200,10)
   climber.addImage("climber",climberImage)
   climber.velocityY=1
   climber.x=door.x
   climbergroup.add(climber) 
   
   
     
   
   
 } 
}