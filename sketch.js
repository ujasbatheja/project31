
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var division1, division2, division3, division4, division5, division6, division7;
var plinko1,plinko2,plinko3,plinko4,plinko5,plink6,plinko7,plinko8;

function setup() {
  var canvas = createCanvas(480,700);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(200,680,1200,20);

  division1 = new Division(470,570,10,200);
  division2 = new Division(400,570,10,200);
  division3 = new Division(330,570,10,200);
  division4 = new Division(260,570,10,200);
  division5 = new Division(190,570,10,200);
  division6 = new Division(120,570,10,200);
  division7 = new Division(50,570,10,200);

  plinko1 = new Plinko(200,200,20);
}

function draw() {
  background("black");  
  Engine.update(engine);
  
  ground.display();

  division1.display();
  division2.display();
  division3.display();
  division4.display();
  division5.display();
  division6.display();
  division7.display();

  plinko1.display();

  drawSprites();
}