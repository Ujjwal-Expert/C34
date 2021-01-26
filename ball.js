class Ball {
    constructor(x,y,width,height,angle){
        var opt= {
            restitution:0.5,
            density:2
        }
        this.body = Bodies.rectangle(x,y,width,height,opt);
        this.width = width;
        this.height = height;
        World.add(myWorld,this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        ellipseMode(CENTER);
        rotate(angle);
        fill("red");
        ellipse(0,0,this.width,this.height);
        pop();
    }
}