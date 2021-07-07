
const Engine = Matter.Engine;
const World  = Matter.World;
const Bodies = Matter.Bodies;
const Body   = Matter.Body;
const Constraint = Matter.Constraint;


var bobObj1,bobObj2,bobObj3,bobObj4,bobObj5,roofObj;
var rope1,rope2,rope3,rope4,rope5;
var world,engine;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	bobDiameter = 60;
	//Create the Bodies Here.
    roofObj = new Roof(width/2,height/4,300,20);
    
	bobObj1 = new Bob(width/2-bobDiameter*2,height/4+300,bobDiameter);
	bobObj2 = new Bob(width/2-bobDiameter,height/4+300,bobDiameter);
	bobObj3 = new Bob(width/2,height/4+300,bobDiameter);
	bobObj4 = new Bob(width/2+bobDiameter,height/4+300,bobDiameter);
	bobObj5 = new Bob(width/2+bobDiameter*2,height/4+300,bobDiameter);
 
    rope1 = new Rope(bobObj1.body,roofObj.body,-bobDiameter*2,0);
  rope2 = new Rope(bobObj2.body,roofObj.body,-bobDiameter,0);
  rope3 = new Rope(bobObj3.body,roofObj.body,0,0);
  rope4 = new Rope(bobObj4.body,roofObj.body,bobDiameter,0);
  rope5 = new Rope(bobObj5.body,roofObj.body,bobDiameter*2,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  roofObj.display();

  bobObj1.display();
  bobObj2.display();
  bobObj3.display();
  bobObj4.display();
  bobObj5.display();

  rope1.display();  
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
}



function keyPressed() {
    if (keyCode === UP_ARROW) {

      Matter.Body.applyForce(bobObj1.body,bobObj1.body.position,{x:-190,y:-45});

    }
}
