var h,m,s;
var hAngle,mAngle,sAngle;

function setup() {
  createCanvas(400,400);
  angleMode(DEGREES);
}

function draw() {
  background(255,255,255);  
  translate(200,200);
  rotate(-90);
  hr = hour();
  m = minute();
  s = second();
  sAngle=map(s,0,60,0,360);
  mAngle=map(m,0,60,0,360);
  hAngle=map(h%12,0,12,0,360);
  push();
  rotate(sAngle);
  stroke(0,0,0);
  strokeWeight(7);
  line(0,0,100,0);
  pop();
  push();
  rotate(mAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,75,0);
  pop();
  push();
  rotate(hAngle);
  stroke(128,128,0);
  strokeWeight(7);
  line(0,0,50,0);
  pop();
  push();
  arc(50, 50, 80, 80, 0, PI + QUARTER_PI);
  stroke (128,0,0);
  strokeWeight(7); 
  line (0,0,50,0);
  pop();
  drawSprites();
}
