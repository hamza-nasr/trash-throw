
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
	
	
	box1=Bodies.rectangle(650,height-50,200,20,{isStatic:true});
	
	box2=Bodies.rectangle(550,height-100,20,100,{isStatic:true});
	
	box3=Bodies.rectangle(750,height-100,20,100,{isStatic:true});
	
	paper=Bodies.circle(50,600,30);
	
	ground=Bodies.rectangle(550,height-100,400,{isStatic:true})
	
	//Create the Bodies Here.
	World.add(world,box1);
	World.add(world,box2);
	World.add(world,box3);
	World.add(world,paper);
	
  
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine)
  background(0);
  rect(box1.position.x,box1.position.y,200,20);
  rect(box2.position.x,box2.position.y,20,100);
  rect(box3.position.x,box3.position.y,20,100);
  ellipseMode(RADIUS);
  ellipse(paper.position.x,paper.position.y,30);
}
function keyPressed() {
	if(keyCode === UP_ARROW){
	  Matter.Body.applyForce(paper.body,{x:85,y:-85})
	}
}


