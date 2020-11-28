const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var plinkos = []
var balls = []


function setup() {
  createCanvas(405,505);
  
  engine = Engine.create();
  world = engine.world;


   ground = new Ground(200, 497.5, 400, 5);
   ground2 = new Ground(200, 502.5, 400, 5);
   ground3 = new Ground(2.5, 252.5, 5, 505);
   ground4 = new Ground(402.5, 252.5, 5, 505);

   wall1 = new Wall(2.5, 420, 5, 170);
   wall2 = new Wall(50, 420, 5,  170);
   wall3 = new Wall(100, 420, 5,  170);
   wall4 = new Wall(150, 420, 5,  170);
   wall5 = new Wall(200, 420, 5,  170);
   wall6 = new Wall(250, 420, 5,  170);
   wall7 = new Wall(300, 420, 5,  170);
   wall8 = new Wall(350, 420, 5,  170);
   wall9 = new Wall(397.5, 420, 5,  170);
   
   for (var i = 20; i < 400; i+=40) {
     plinkos.push(new Plinko(i, 75));

   }

   for (var i = 40; i < 400; i+=40) {
    plinkos.push(new Plinko(i, 125));

  }

  for (var i = 20; i < 400; i+=40) {
    plinkos.push(new Plinko(i, 175));

  }

  for (var i = 40; i < 400; i+=40) {
    plinkos.push(new Plinko(i, 225));

  }

  for (var i = 20; i < 400; i+=40) {
    plinkos.push(new Plinko(i, 275));

  }
   
}

function draw() {
  background(0);
  
  
  Engine.update(engine);
  
  
 


  ground.display();
  ground2.display();
  ground3.display();
  ground4.display();

  wall1.display();
  wall2.display();
  wall3.display();
  wall4.display();
  wall5.display();
  wall6.display();
  wall7.display();
  wall8.display();
  wall9.display();
  
  


  for (i = 0; i < plinkos.length; i++) {
    plinkos[i].display();
  }



  if (frameCount % 60 === 0) {
    balls.push(new Ball(random(50, 350), 10));

  }

  for (i = 0; i < balls.length; i++) {
    balls[i].display();
  }
  
}