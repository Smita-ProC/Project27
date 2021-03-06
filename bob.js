class Bob{
  constructor(x,y,radius){
      var options = {
        restitution:1,
        friction:0,
        density:0.8
      }
      
      this.body = Bodies.circle(x,y,radius/2, options)
      this.r = radius;
      World.add(world,this.body)
  } 
  
  display(){
      var pos = this.body.position;
      push();
      translate(pos.x,pos.y);
      ellipseMode(CENTER);
      fill(150,220,150);
      ellipse(0,0,this.r,this.r);
      pop();
  }

}


