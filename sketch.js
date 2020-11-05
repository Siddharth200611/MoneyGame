
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var bananaGroup, obstacleGroup;
var score;
var survivalTime;

function preload(){
  
  
  monkey_running=loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
}

function setup() {
  
createCanvas(600,300);
  
  
monkey= createSprite(50,267,20,20) ; 
ground= createSprite(500,280,1000,10) ; 
  
  ground.velocityX = -6
  
   monkey.addAnimation("monkey",monkey_running);
  monkey.scale=0.1;
 
  score=0;
  survivalTime=0;
  
   bananaGroup = new Group();
  obstacleGroup = new Group();
  
}


function draw() {
  
  background("white");
   if (ground.x < 100){
      ground.x = ground.width/2;
    }
  
  monkey.collide(ground);
  
  if(keyDown("space") && monkey.y >= 200) {
      monkey.velocityY = -17;
    }
  monkey.velocityY = monkey.velocityY + 1.1
  
 textSize(28);
  fill("black");
  survivalTime=Math.round(frameCount/frameRate())
  text("Survival Time: "+survivalTime,100,50);
  
   if (monkey.isTouching(bananaGroup)){
    score=score+10;
  }
 textSize(20);
 fill("black");
   text( "Score "+score,100,70);
  
  monkey.collide(obstacleGroup);
  
  
  obstacles();
  food();

  drawSprites();
  
}

function obstacles(){
  
   if (frameCount % 100 === 0) {
    var obstacle = createSprite(650,240,10,10);
    obstacle.addImage(obstaceImage);
    obstacle.velocityX = -6;
     obstacle.scale=0.25
     obstacle.lifetime=120;
   obstacleGroup.add(obstacle);
    
  }
}

function food(){
  
  if (frameCount % 80 === 0) {
    var banana = createSprite(600,100,10,10);
     banana.y = Math.round(random(70,180));
    banana.addImage(bananaImage);
    banana.velocityX = -10;
    banana.scale=0.09;
      banana.lifetime=120;
    
   bananaGroup.add(banana);
}

}







