class bob1 {
    constructor(x, y, r) {
      var options = {
        'isStatic':false, 
        'restitution':0.3,
        'friction':0,
        'density':1,
      }
      this.x=x;
		this.y=y;
		this.r=r
		
		this.body=Bodies.circle(this.x, this.y, (this.r)/2, options);
      
      World.add(world, this.body);
    }
    display(){
      
      fill("black");
      ellipse(this.body.position.x,this.body.position.y,this.r, this.r);
      
    }
  };