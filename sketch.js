const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var plinkos,divisions,particles;
var engine,world;
var plinkos=[];
var divisions=[];
var Particles=[];
var divisionsHeight=300;


function setup() {
  createCanvas(480,800);
  
  engine = Engine.create();
  world = engine.world;


Engine.run(engine);}

function draw() {
  background(155,255,255);
  
  Engine.update(engine);


  for(var i=40 ; i<=width ; i=i+50){

   plinkos.push(new Plinkos(i,75))

  }
  
  for(var j=15 ; j<=width-10 ; j=j+50){

    plinkos.push(new Plinkos(j,175))

  }

for(var a=0 ; a<plinkos.length ; a++){

   plinkos[a].display();

}

for(var d=0;d<=width;d=d+80){

  divisions.push(new Divisions(k,height-divisionsHeight/2,10,divisionsHeight));

}



for(var d=0;d<divisions.length;d++){

divisions[d].display();

}

if(frameCount%50===0){

  Particles.push(new particles(random(width/2-10,width/2+10,10,10)));
}

for(var z=0;j<Particles.lenght;z++){

   Particles[z].display();

}



  drawSprites();
}