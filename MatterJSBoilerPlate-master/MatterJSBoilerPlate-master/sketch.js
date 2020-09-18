
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	
	box1=createSprite(650,height-50,200,20);
	
	box2=createSprite(550,height-100,20,100);
	
	box3=createSprite(750,height-100,20,100)
	
	circle=createSprite(50,600,30,30);
	
	engine = Engine.create();
	world = engine.world;
	
	//Create the Bodies Here.
	Matter.Body();
	Matter.World();

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  drawSprites();
 
}
function keyPressed() {
	if(keyCode === UP_ARROW){
	  Matter.Body.applyForce(body, position, force)({x:85,y:-85})
	}
}


