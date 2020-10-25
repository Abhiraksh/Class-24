const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var pig1,bird1,log1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(890,380,70,70);
    box2 = new Box(1100,380,70,70);
    box3 = new Box(890,320,70,70);
    box4 = new Box(1100,320,70,70);
    box5 = new Box(1000,250,70,70);
    ground = new Ground(600,height,1200,20)

    pig1 = new Pig(1000,380);
    pig2 = new Pig(1000,320);
    bird1 = new Bird(200,100);
    log1 = new Log(995,350,300,PI/2)
    log2 = new Log(995,280,300,PI/2)
    log3 = new Log(980,250,150,PI/7)
    log4 = new Log(1010,250,150,-PI/7)
}

function draw(){
    background(0);
    Engine.update(engine);
    
    textSize(30);
    text(mouseX+" , "+mouseY,200,30);
    // console.log(box2.body.position.x);
    // console.log(box2.body.position.y);
    // console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    bird1.display();
    log1.display();
    pig1.display();
    box3.display();
    box4.display();
    pig2.display();
    log2.display();
    box5.display();
    log3.display();
    log4.display();
}