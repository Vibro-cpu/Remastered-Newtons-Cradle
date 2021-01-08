const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Mouse = Matter.Mouse;
const Constraint = Matter.Constraint;
const MouseConstraint = Matter.MouseConstraint;

var engine, world;

function setup() {

  canvas = createCanvas(windowWidth / 2,windowHeight / 1.5);

  engine = Engine.create();
  world = engine.world;

  let canvasmouse = Mouse.create(canvas.elt)

  canvasmouse.pixelRatio = pixelDensity();

  let options = {

    mouse : canvasmouse

  }

  mConstraint = MouseConstraint.create(engine,options)

  World.add(world,mConstraint)

  pendulum1 = new Pendulum(300,50,"grey")

  pendulum2 = new Pendulum(340,50,"grey")

  pendulum3 = new Pendulum(380,50,"grey")

  pendulum4 = new Pendulum(420,50,"grey")
  
  pendulum5 = new Pendulum(460,50,"grey")

  sling1 = new Sling(pendulum1.body,{x:300,y:50})

  sling2 = new Sling(pendulum2.body,{x:340,y:50})

  sling3 = new Sling(pendulum3.body,{x:380,y:50})

  sling4 = new Sling(pendulum4.body,{x:420,y:50})

  sling5 = new Sling(pendulum5.body,{x:460,y:50})

}

function draw() {

  background("black");  

  Engine.update(engine);

  pendulum1.display()

  pendulum2.display()

  pendulum3.display()

  pendulum4.display()

  pendulum5.display()

  sling1.display()

  sling2.display()

  sling3.display()

  sling4.display()

  sling5.display()

  drawSprites();
}

