
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function setup() {
  createCanvas(windowWidth/2,windowHeight/2);
  engine = Engine.create();
  world = engine.world;

 // let canvasmouse = Mouse.create(canvas.elt);
  //canvasmouse.pixelRatio = pixelDensity();
  //let options = {
	//  mouse: canvasmouse
  
//mConstraint = MouseConstraint.create(engine, options);
  //World.add(world, mConstraint);

 // pendulum1 = new 


 
  pendulum1 = new Pendulum(45,90,300)
  pendulum2 = new Pendulum(110,90,300)
  pendulum3 = new Pendulum(180,90,300)
  pendulum4 = new Pendulum(245,90,300)
  pendulum5 = new Pendulum(320,90,300)

    sling1 = new Sling(pendulum1.body,{x:46, y:90})
    sling2 = new Sling(pendulum2.body,{x:110, y:90})
    sling3 = new Sling(pendulum3.body,{x:180, y:90})
    sling4 = new Sling(pendulum4.body,{x:245, y:90})
    sling5 = new Sling(pendulum5.body,{x:320, y:90})

	//Engine.run(engine);
  

}


function draw() {
  background(255,0,0);
  Engine.update(engine);
  
  pendulum1.display();
  sling1.display();

  pendulum2.display();
  sling2.display();

  pendulum3.display();
  sling3.display();

  pendulum4.display();
  sling4.display();

  pendulum5.display();
  sling5.display();
 
keyDragged();

}

function keyDragged(){

    Matter.Body.setPosition(pendulum1.body,{x:mouseX,y:mouseY});

}



