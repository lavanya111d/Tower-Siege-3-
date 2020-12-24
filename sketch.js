const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var score = 0;
function setup() {
  createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;
  stroke(225);
  ground1 = new Ground(400,780,800,20);
//level one
  box1 = new box(330,235,30,40);
  box2 = new box(360,235,30,40);
  box3 = new box(390,235,30,40);
  box4 = new box(420,235,30,40);
  box5 = new box(450,235,30,40);
//level two
  box6 = new box(360,194,30,40);
  box7 = new box(390,194,30,40);
  box8 = new box(420,194,30,40);
//lever three
  box9 = new box(390,155,30,40);
  polygon = new Polygon(50,200,50,50);
  chain = new SlingShot(polygon.body, {x: 50, y: 50});
}

function draw() {
  background(255);
  textSize(30);
  text("Score: " + score, 600, 50);
  Engine.update(engine);
  background(0); 
  box1.display(); 
  box1.score();
  box2.display(); 
  box2.score();
  box3.display(); 
  box3.score();
  box4.display(); 
  box4.score();
  box5.display(); 
  box5.score();
  box6.display();
  box6.score();
  box7.display();
  box7.score();
  box8.display();
  box8.score();
  box9.display();
  box9.score();

  ground1.display();

  chain.display();

  polygon.display();
}
