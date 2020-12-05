
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload() {
	
}

function setup() {
	createCanvas(1600, 710);


	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);

	//Create the Bodies Here.

	bob1=new bob1(800-80,675,40);
	bob2=new bob2(800-40,675,40);
	bob3=new bob3(800,675,40);
	bob4=new bob4(800+40,675,40);
	bob5=new bob5(800+80,675,40);

	roof = new Roof(width/2,height/4,400,20);
	

	rope1 = new rope(bob1.body,roof.body,-66*2,0);
	rope2 = new rope(bob2.body,roof.body,-33*2,0);
	rope3 = new rope(bob3.body,roof.body,0*2,0);
	rope4 = new rope(bob4.body,roof.body,33*2,0);
	rope5 = new rope(bob5.body,roof.body,66*2,0);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  //roof.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  drawSprites();

  /*if keyPressed() {
	
  }*/
 
}
