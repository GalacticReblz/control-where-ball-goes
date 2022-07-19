const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;
var ball
var up_arrow
var right_arrow

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  
  ground =new Ground(200,390,425,20);
  right = new Ground(390,200,20,425);
  left = new Ground(10,200,20,425);
  top_wall = new Ground(200,10,425,20);
 
  rectMode(CENTER);
  ellipseMode(RADIUS);

  var ball_options = {
    restitution : .05,
    airfriction : 0.1
  }

  ball = Bodies.circle(100,300,12,ball_options)
  World.add(world,ball)

  up_arrow=createImg("up.png")
  up_arrow.position(30,30)
  up_arrow.size(50,50)
  up_arrow.mouseClicked(vForce)
  
  right_arrow=createImg("right.png")
  right_arrow.position(30,90)
  right_arrow.size(50,50)
  right_arrow.mouseClicked(hForce)
}

function draw() 
{
  background(51);
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  ellipse(ball.position.x,ball.position.y,12)
  Engine.update(engine);
}

function hForce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.01,y:0})
}

function vForce(){
  Matter.Body.applyForce(ball, {x:0,y:0}, {x:0,y:-0.01})
}
