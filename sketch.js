function setup() {
  createCanvas(400, 400);
  strokeWeight(10);
  stroke('pink');
  background(235, 52, 128);
  
  frameRate(12);
  
}

function draw() {
  
  
  let a= mouseX;
  let b = mouseY;
  point(a,b);
}