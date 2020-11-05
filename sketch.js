
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var ground;

var bin1,bin2,bin3;

var paper;
var paperImg

function preload()
{
paperImage = loadImage("paper.png");	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground(400,700,800,20);

	bin1 = new Bin(600,680);


    paper = new Paper(50,690,20);
    paper.body.addImage(paperImage);
	

	Engine.run(engine);
  
	
}


function draw() {
  rectMode(CENTER);
  background(225);
  
  drawSprites();
 
  ground.display();

  

  bin1.display();


paper.display();



}

function keyPressed(){

if(keyCode === UP_ARROW){
	Matter.Body.applyForce(paper.body,paper.body.postion,{x:85,y:-85});
}

}

