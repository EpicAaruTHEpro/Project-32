const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function preload() {

}

function setup() {
  createCanvas(800,600);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(400,height,800,20);
  polygon = new Polygon(100,200,40,40);
  stand1 = new Ground(600, 300, 200, 20);
  stand2 = new Ground(350, 450, 250, 20);

  //level1 stand1
  box1 = new Box(600, 280, 30, 50);
  box2 = new Box(570, 280, 30, 50);
  box3 = new Box(630, 280, 30, 50);
  box4 = new Box(540, 280, 30, 50);
  box5 = new Box(660, 280, 30, 50);

  //level2 stand1
  box6 = new Box(600, 230, 30, 50);
  box7 = new Box(570, 230, 30, 50);
  box8 = new Box(630, 230, 30, 50);

  //level3 stand1
  box9 = new Box(600, 180, 30, 50);

  //level1 stand2
  box10 = new Box(350, 400, 30, 50);
  box11 = new Box(320, 400, 30, 50);
  box12 = new Box(380, 400, 30, 50);
  box13 = new Box(290, 400, 30, 50);
  box14 = new Box(410, 400, 30, 50);
  box15 = new Box(260, 400, 30, 50);
  box16 = new Box(440, 400, 30, 50);

  //level2 stand2
  box17 = new Box(350, 350, 30, 50);
  box18 = new Box(320, 350, 30, 50);
  box19 = new Box(380, 350, 30, 50);
  box20 = new Box(290, 350, 30, 50);
  box21 = new Box(410, 350, 30, 50);

  //level3 stand2
  box22 = new Box(350, 300, 30, 50);
  box23 = new Box(320, 300, 30, 50);
  box24 = new Box(380, 300, 30, 50);

  //level4 stand2
  box25 = new Box(350, 250, 30, 50);

  //slingshot
  slingShot = new SlingShot(polygon.body,{x:100, y:150});

  Engine.run(engine);
}

function draw() {
  background(255,255,255);
  ground.display();
  polygon.display();
  stand1.display();
  stand2.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();
  slingShot.display();
}

function mouseDragged() {
	Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}

function mouseReleased() {
	slingShot.fly();
}

function keyPressed() {
	if (keyCode === 32) {
		Matter.Body.setPosition(polygon.body, {x: 100 , y: 200});
		slingShot.attach(polygon.body);
	}
}