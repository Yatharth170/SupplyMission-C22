const Engine=Matter.Engine;
const Bodies=Matter.Bodies;
const World=Matter.World;

var engine,world;
var airplane,ground;
var package;

function setup() {
 var canvas= createCanvas(800,400);
  engine=Engine.create();
  world=engine.world;
  
  package= new Package(400,100,10,10);
  airplane= new Airplane(400,100,50,50);
  ground= new Ground(400,390,800,20);
  
}
function draw() {
  background("black");
  Engine.update(engine);
  package.display();
  airplane.display();
  ground.display();
}
function keyPressed(){
  if(keyCode=DOWN_ARROW){
    Matter.Body.setStatic(package.body,false);
}
}