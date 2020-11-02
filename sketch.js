
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;

var bin1,bin2,bin3;

var paper;

function preload()
{
	dustbinImage = loadImage("dustbingreen.png");

	paperImage = loadImage("paper.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground(400,700,800,20);

	bin1 = new Bin(600,640,10,100);
	bin2 = new Bin(700,640,10,100);
	bin3 = new Bin(650,690,100,10);
	

	paper = new Paper(50,690);
	
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(225);
  
  drawSprites();
 
  ground.display();

  

  bin1.display();
  bin2.display();
  bin3.display();

paper.display();



}

function keyPressed(){

if(keyCode === UP_ARROW){
	Matter.Body.applyForce(paper.body,paper.body.postion,{x:85,y:-85});
}

}

