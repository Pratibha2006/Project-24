
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper , box1, box2, box3, ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	 paper = new Paper(100,600);
	 
	box1 = new Dustbin(325,645,10,50);
	box2 = new Dustbin(515,645,10,50);
	box3 = new Dustbin(420,675,200,10); 
	 
	 ground = new Ground(400,690,800,20);
	 
	Engine.run(engine);
  
}
 
function draw() {
  Engine.update(engine);

  rectMode(CENTER);
  background(0);
  
  paper.display();
  box1.display();
  box2.display();
  box3.display();
  ground.display();

  keyPressed();

  drawSprites();
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
   Matter.Body.applyForce(paper.body, paper.body.position,{x:85,y:-85})
	}
}
