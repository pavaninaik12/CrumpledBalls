
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var ground;

var bin1;

var paper;
var engine,world;


function setup() {
	createCanvas(1600, 700);
    rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    // I have changed the x and width of the ground object
	bin1 = new Bin(1200,650);
	
    paper = new Paper(200,450,40);
	ground = new Ground(width/2,670,width,20);


    
   // create your render options
	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1200,
		  height: 700,
		  wireframes: false
		}
	  });

	Engine.run(engine);
  
	
}


function draw() {
  rectMode(CENTER);
  background(0);
  //no need of drawSprites as we arent creating any sprites
 // drawSprites();
 
  

  

  bin1.display();


   paper.display();

   ground.display();

}

function keyPressed(){

if(keyCode === UP_ARROW){
	Matter.Body.applyForce(paper.body,paper.body.postion,{x:85,y:-85});
}

}

