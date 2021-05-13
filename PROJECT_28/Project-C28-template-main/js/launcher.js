class launcher{
    constructor(body,point){
      var options = {
            bodyA : body,
            pointB: point,
            stiffness: 0.04,
            length:10
        }

        this.bodyA = body;
        this.pointB = point;
        this.launch = Constraint.create(options);
        World.add(world,this.launch);
    }

    attach(body){
      this.launch.bodyA=body; 
    }

    fly(){
      this.launch.bodyA = null;
    }

    display(){
        if(this.launch.bodyA){
        var pointA = this.launch.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x,pointA.y,pointB.x,pointB.y)
    }
  }   
}     