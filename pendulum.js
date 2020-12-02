class Pendulum {

constructor(x,y,color){
var options ={
//restitution: 0.8,
//friction: 1.0,
//density: 0.8,
frictionAir: 0.0,
//slop: 1,
//inertia: Infinity
isStatic:false,
restitution:1.3,
friction: 2,
density:0.5


};
this.body =Bodies.rectangle(x,y,40,40,options);
this.x = x;
this.y = y;
this.color = color;
World.add(world,this.body);
}

display(){
    var angle = this.body.angle;
    var pos = this.body.position;
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    noStroke();
    fill(this.color);
    ellipse(0,0,60,60);
    pop(); 
}
}