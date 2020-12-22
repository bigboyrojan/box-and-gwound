class Ground  {
constructor (x,y,width,height){


var choices = {
isStatic: true

}
this.body = Bodies.rectangle (x,y,width,height, choices);
this.width = width;
this.height = height;

World.add(world, this.body);
}
display() {
var hi = this.body.position;
rectMode(CENTER);
fill(116);
rect(hi.x, hi.y, this.width, this.height);

}

}