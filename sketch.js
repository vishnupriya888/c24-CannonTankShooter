// You could have multiple flags like: start, launch to indicate the state of the game.

const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;
// The above line creates different constant variables for Engine, World, Bodies etc.

/*

const {Engine} = Matter 
is the same as 
const Engine = Matter.Engine

*/
var ground;
var launchX,launchY;
var launcherX, launcherY;
var flag = "start"

function setup() {
    // Setup the canvas, the ground the, tanker, the shooting ball and the bubble balls.
    createCanvas(800,500);
    engine = Engine.create();
    world = engine.world;
    ground= new Ground(200,490,1200,20);
    tanker = new Tanker(50,400,100,100);
    tankerhead = new TankerHead(100,460,100,100);
    ball1= new Ball(300,100,25);
    ball2= new Ball(400,200,25);
    ball3= new Ball(500,150,25);
    ball4= new Ball(600,100,25);
    
    canonball = new CanonBall(20,20);
    shot = new ShootBall(canonball.body, { x: 70, y: height - 220 });
}

function draw() {
// Remember to update the Matter Engine and set the background. add display
    background("lightblue");
    Engine.update(engine);
    
    ground.display();
    tankerhead.display();
    tanker.display();
    
    ball1.display();
    ball2.display();
    ball3.display();
    ball4.display();

    canonball.display();
    shot.display();
    if (keyIsDown(32)) {
        shot.attach(canonball.body)
    }
    
}


function keyReleased() {
    // Call the shoot method for the cannon.
    if (keyCode === (32)) {
        flag = "launch"

        shot.shoot()
    }
}
