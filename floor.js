class Ground {
    constructor(x,y,w,h) {
      var options = {
          isStatic: true
      }
      this.x=x;
      this.y=y;
      this.w = w;
      this.h = h;
      this.body = Bodies.rectangle(x,y,width,height,options);
      
      World.add(world, this.body);
    }
    display(){
      push();

      var pos =this.body.position;

      translate(pos.x,pos.y);
      
      rectMode(CENTER);
      
      rect(0,0,w,h);

      pop();
    }
  };
