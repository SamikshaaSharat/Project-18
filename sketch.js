var bananaImage , obstacleImage , obstacleGroup , player_running , backImage , ground 

var score = 0;

function preload(){
  backImage = loadImage("jungje.jpg");
  player_running = loadImage("Monkey_01.png" , "Monkey_02.png" , "Monkey_03.png" , "Monkey_04.png" , "Monkey_05.png" , "Monkey_06.png" , "Monkey_07.png" , "Monkey_08.png" , "Monkey_09.png" ,"Monkey_10.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("stone.png");
}

function setup() {
  createCanvas(600, 400);
  background = createSprite(340,180,20,20);
  background.addImage("jungje" , backImage );
  background.velocityX = -6;
  
  player = createSprite(50,180,20,50);
  player.addImage("running" , player_running);
  
  ground = createSprite(350,0,20,20);
  
  ground.visible = false;
  
  bananaGroup = new Group();
  obstaclesGroup = new Group();
}

  

function draw() {
  background(220);
  
  if (background.x < 0){
      background.x = background.width/2;
    }
  
  
  if(keyDown("space")) {
    player.velocityY = -10;
  }
  
  player.velocityY = player.velocityY + 0.8
  
  
  if(foodGroup.isTouching(player)){
      score = score+2;
    foodGroup.destroyEach();
    }
  switch(score){
      case 10 : player.scale = 0.12;
       break;
       case 20 : player.scale = 0.14;
       break;
       case 30 : player.scale = 0.16;
       break;
       case 40 : player.scale = 0.18;
       break;
       default: break;
  }
  
  if(obstacleGroup.isTouching(player)){
    player.scale =0.2;
  }
  
  banana();
  obstacles();
  
  drawSprites();
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score: " + score,500,50);
  
} 

function banana () {
  if(frameCount % 80 === 0) {
    var banana = createSprite(400,365,10,40);
    banana.addImage(bananaImage);
    banana.velocityX = -4;
    banana.y = 120;
    banana.lifetime = 70;
    banana.scale = 0.05;
    bananaGroup.add(banana);
}
}

function obstacles (){
  if(frameCount % 300 === 0){
    var obstacles = createSprite(170,320,20,40);
    obstacles.addImage(obstacleImage);
    obstacles.velocityX = - 5;
    obstacles.lifetime = 134;
    obstacles.scale = 0.15;
    obstacleGroup.add(obstacles);
    
    
  }
} 
