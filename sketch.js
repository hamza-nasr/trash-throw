
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{

	paperhi=loadImage("paper.png");
	box1Image=loadImage("dustbingreen.png");
	
}
var paper;
function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
	
	
	box1=Bodies.rectangle(650,height-50,200,20,{isStatic:true});
	
	box2=Bodies.rectangle(550,height-100,20,100,{isStatic:true});
	
	box3=Bodies.rectangle(750,height-100,20,100,{isStatic:true});
	
	paper=Bodies.circle(50,600,30,{restitution:0.8});
	
	ground=Bodies.rectangle(400,height,800,20,{isStatic:true})
	
	//Create the Bodies Here.
	World.add(world,box1);
	World.add(world,box2);
	World.add(world,box3);
	World.add(world,paperhi);
	World.add(world,ground);
  
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine)
  background("white");
  image(paperhi,paper.position.x=50,paper.position.y=600,300,300);
  rect(box2.position.x,box2.position.y=550,20,200);
  rect(box3.position.x,box3.position.y=550,20,200);
  rect(ground.position.x,ground.position.y,800,20)
  image(box1Image,box1.position.x=530,box1.position.y=450,240,200);
  //ellipseMode(RADIUS);
  //ellipse(paper.position.x,paper.position.y,30);

}
function keyPressed(){
	if(keyCode === UP_ARROW){

		Matter.Body.applyForce(paper.body, paper.body.position,{x:85, y:-85})

	}
}