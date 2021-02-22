class Web {
     constructor (BodyA,pointB){
    var puff={
        bodyA:BodyA,
        pointB:pointB,
        stiffness:1.2,
        length:250
    }
    this.kirti=Constraint.create(puff)
    //this.Image=loadImage("Cataplult.png")
    //this.band=loadImage("slingBand.png")
    World.add(world,this.kirti)
     }

     

    display(){
        //image(this.Image,150,80,150,150)
        if(this.kirti.bodyA){
            var pointA=this.kirti.BodyA.position;
            var pointB=this.pointB;
            
            push();
            strokeWeight(6)
            stroke(235, 235, 235)

            line(pointB.x,pointB.y,pointA.x,pointA.y);

            pop();
    }
//because of this below fly function we released
// our body or me from kirti constraint and then to
// help for not disapearing the body we gave this above display and gave the if condition!
   
}

}