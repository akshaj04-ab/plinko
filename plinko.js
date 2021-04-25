class Plinkos{

    constructor(x,y,r){
    var options={
        isStatic : true
    }
    this.r=r;
    this.x=x;
    this.y=y;
    this.body=Bodies.circle(x,y,this.r,options);
    World.add(world,this.body);

    }
    display(){
    
    push();

    var pos=this.body.position;

    translate(pos.x,pos.y);

    ellipseMode(RADIUS);

    ellipse(0,0,this.r,this.r);

    pop();

    }





}