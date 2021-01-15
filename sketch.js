var wall1,wall2,wall3,wall4,wall5,wall6,wall7,wall8,wall9,wall10,wall11,wall12,wall13,wall14,wall15,wall16,wall17
var player
var enimy,enimy1
var g
function preload(){

}
function setup() {
  createCanvas(1300,700);
  g=new Group()
  g.add(wall1=createSprite(550,150,1200,10))
  wall1.shapeColor="brown"
  g.add(wall2=createSprite(400,60,10,90))
  wall2.shapeColor="brown"
  g.add(wall3=createSprite(800,60,10,90))
  wall3.shapeColor="brown"
  g.add(wall4=createSprite(1200,80,10,150))
  wall4.shapeColor="brown"
  g.add(wall5=createSprite(550,300,1200,10))
  wall5.shapeColor="brown"
  g.add(wall6=createSprite(400,200,10,90))
  wall6.shapeColor="brown"
  g.add(wall7=createSprite(800,200,10,90))
  wall7.shapeColor="brown"
  g.add(wall8=createSprite(1200,230,10,150))
  wall8.shapeColor="brown"
  g.add(wall9=createSprite(550,450,1200,10))
  wall9.shapeColor="brown"
  g.add(wall11=createSprite(400,350,10,90))
  wall11.shapeColor="brown"
  g.add(wall12=createSprite(800,350,10,90))
  wall12.shapeColor="brown"
  g.add( wall13=createSprite(1200,380,10,150))
  wall13.shapeColor="brown"
  g.add(wall14=createSprite(600,600,1200,10))
  wall14.shapeColor="brown"
  g.add( wall9=createSprite(400,500,10,90))
  wall9.shapeColor="brown"
  g.add( wall9=createSprite(800,500,10,90))
  wall9.shapeColor="brown"
  g.add( wall9=createSprite(1200,530,10,150))
  wall9.shapeColor="brown"
  g.add(wall15=createSprite(600,10,1200,10))
  wall15.shapeColor="brown"
  g.add(wall16=createSprite(5,300,10,600))
  wall16.shapeColor="brown"
  g.add(wall17=createSprite(1200,300,10,600))
  wall17.shapeColor="brown"
  player=createSprite(600,200,10,10)
  player.shapeColor="brown"
  enimy=createSprite(400,420,20,20)
  enimy.shapeColor="green"
  enimy.velocityY=+3
  
}
function draw() {
  background(243,27,45);  
  if (keyDown("right")) {
    player.x=player.x+5;
  }
  if (keyDown("left")) {
    player.x=player.x-5;
  }
  if (keyDown("up")) {
    player.y=player.y-5;
  }
  if (keyDown("down")) {
    player.y=player.y+5;
  }
  player.bounceOff(wall1);
  player.bounceOff(wall5);
  player.bounceOff(wall9);
  player.bounceOff(wall14);
  player.bounceOff(wall15);
  player.bounceOff(wall16);
  player.bounceOff(wall17);
  player.bounceOff(wall2);
  player.bounceOff(wall14);
  player.bounceOff(wall6);
  player.bounceOff(wall7);

  ghost()
   drawSprites();

}
 function ghost(){
  // enimy.bounce(enimy1)

  r=random(1,2)
  
  if(enimy.velocityX==0&&enimy.collide(g))
  {
    if(r==1)
    {
     enimy.velocityX=5;
    }
    else
    {
      enimy.velocityX=5
    }
    enimy.velocityY=0;
  }
  
   if(enimy.velocityY==0&&enimy.collide(g))
  {
    if(r==1)
    {
     enimy.velocityY=5;
    }
    else
    {
      enimy.velocityY=-5
    }
    enimy.velocityX=0;
  
  }
  enimy.bounceOff(g);
 }
 