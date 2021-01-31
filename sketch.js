const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var canvas;
var bgimg;
var car;
var ground1,ground2;
var score=0;
var monster;

function preload(){
bgimg=loadImage("track.jpg")
}
function setup(){
  canvas = createCanvas(1400,10000);
  ground1=new Ground(700,1,1400,20)
 //  car=new Ball()

}


function draw(){
  background(bgimg);

  ground1.display();
}
