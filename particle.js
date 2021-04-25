class particles {
    constructor(x,y,r){
     
        var options={
            
            isStatic:false,
            restitution:0.4

        }
        this.x=x;
        this.y=y;
        this.r=r;

     this.body=Bodies.circle(x,y,this.r,options);

     this.colour=colour(random(0,255), random(0,255),random(0,255));

     World.add(world,this.body);

    }
    display(){

        push();

        var pos=this.body.position;

        var ang=this.body.angle;
       
        translate(pos.x,pos.y);

        rotate(ang);

        noStroke();

        ellipseMode(RADIUS);

        fill(this.colour);

        ellipse(0,0,this.r,this.r);

        pop();

    }
    



}