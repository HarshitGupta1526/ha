
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var engine, world, paper1, ground, dustbin1, dustbin2, dustbin3 
function setup (){
creatcanvas(1500,600)
rectmode(CENTER)

engine = engin.creat(),
world = engine.world;

paper1= new paper(700,600,10);
ground1= new ground(800,680,1600,20);
dustbin1 = new Dustbin(1300,600,100,20)
dustbin2= new Dustbin(1240,620,20,100)
dustbin3= new dustbin(1350,620,20,100)

}


