class Plinko {
    constructor(x,y,radius) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.circle(x,y,radius);
      this.radius = radius;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("white");
      circle(pos.x, pos.y,20,20);
    }
  };