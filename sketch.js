//Stanford empty project

// DEFINE variables here
var player
var player2
var wall1
var wall2
var wall3
var wall4
function setup() {
 createCanvas(800,600);
//INSTANTIATE variables here
player=createSprite(400,300,75,75);
player2=createSprite(300,200,50,50);
wall1=createSprite(0,-25,2400,50)
wall2=createSprite(800+50,0+650/2,100,650)
wall3=createSprite(0,625,2400,50)
wall4=createSprite(-25,0+650/2,50,1200)

wall1.immovable=true;
wall2.immovable=true;
wall3.immovable=true;
wall4.immovable=true;

player.friction=.98
player2.friction=.98
}

function draw() {
background(200);
//UPDATE variables here
drawSprites();
player.bounce(wall1);
player2.bounce(wall1);
player.bounce(wall2);
player2.bounce(wall2);
player.bounce(wall3);
player2.bounce(wall3);
player.bounce(wall4);
player2.bounce(wall4);

player.bounce(player2);
    if(keyDown(37)){
//Put what you want to happen when left is pressed in here
player.addSpeed(.2,180);
}

if(keyDown(39)){
//Put what you want to happen when right is pressed in here
player.addSpeed(.2,0);
}
if (keyDown(38)) {
player.addSpeed(.2,270);
}
if (keyDown(40)){
  player.addSpeed(.2,90);
}
    if(keyDown(65)){
player2.addSpeed(.2,180);
}
if(keyDown(68)){
  player2.addSpeed(.2,0);
}
if(keyDown(87)){
  player2.addSpeed(.2,270);
  }
  if(keyDown(83)){
    player2.addSpeed(.2,90);
  }
}
