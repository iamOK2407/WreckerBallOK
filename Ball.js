class Ball {
  constructor(x,y,width,height,angle){
    var options={
        'density': 1,
        'friction':0.005,
        
    }
    //this.image=loadImage("paper.png")
    
    this.body=Bodies.rectangle(x,y,width,height,options);
     this.width=width;
     this.height=height;
    World.add(world,this.body);
    
    //this.visibility=255
  }
  display(){
      
      var angle= this.body.angle;
   
    push();
    translate(this.body.position.x,this.body.position.y);
  rotate(angle);
  ellipseMode(CENTER);
    ellipse(0,0,this.width,this.height);
    pop();
  }

}