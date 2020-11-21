
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

	//Create the Bodies Here.
	ground = new Ground(200,height,400,20)

	Engine.run(engine);
  
}

function keyPressed(){
	if(keyCode===UP_ARROW){
matter.Body.applyForce(paperObject.body,paperObject.body.position,{x=85,y=-85});
	}
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  drawSprites();
 
}



