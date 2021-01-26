const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;

var myEngine, myWorld;

function preload(){

}

function setup(){
  var canvas = createCanvas(600,600);

  myEngine=Engine.create();
  myWorld = myEngine.world;

  ball = new Ball(200,200,80,80);



}
function draw(){
  background(0);
  Engine.update(myEngine);

  ball.display();

}