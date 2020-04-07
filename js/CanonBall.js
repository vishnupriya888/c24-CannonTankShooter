class CanonBall {
  constructor(x, y) {
    var options = {
      "density" :   1.5,
      "friction" : 1.0,
      "restitution" : 0.8,
      "frictionAir":0.06,
      
    }
    this.width = 15;
    this.height = 15;
    this.body = Bodies.rectangle(x,y,this.width,this.height,options)

    this.ballImage = loadImage('assets/ball.png');
    World.add(world, this.body);
    //console.log(this.body);
  };

  display(){
    if(flag === "launch"){
      var pos = this.body.position;
      var angle = this.body.angle

      push();
      translate(pos.x, pos.y);
      //rotate(angle);
      imageMode(CENTER)
      image(this.ballImage,0, 0, this.width, this.height);
      pop();
   }
  };
};
