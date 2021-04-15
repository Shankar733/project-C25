class Paper{

    constructor(x,y,raidus){
        var options={
            isStatic:false,
            restitution:0.0,
            friction:0.0,
            density:1.2
        }
        this.body=Bodies.circle(x,y,raidus,options)
        this.raidus=raidus;
        this.image=loadImage('Paper.png')
        World.add(world, this.body);
    
    }
    display(){
        var angle = this.body.angle;
        push();
        //translate(this.body.position.x, this.body.position.y);
        //rotate(angle);
        imageMode(CENTER);
        image(this.image, this.body.position.x, this.body.position.y, this.raidus,this.raidus);
        //ellipse(0,0,this.raidus,this.raidus)
        pop();
      }
    
}