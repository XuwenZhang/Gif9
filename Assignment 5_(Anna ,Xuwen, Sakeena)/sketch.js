
let flaskElements = [box001,box002,box003,box004,box005,box006,box007,box008,box009,box010,circle001,circle002,circle003,circle004,arc001,arc002];
let flaskArray = [];

let boxes = [box01,box02,box03,box04,box05,box06,box07];
let boxArray = [];

let circles = [circle01,circle02,circle03]
let circleArray = [];

let triangles = [triangle01,triangle02,triangle03,triangle04,triangle05]
let triangleArray = [];


function setup() {
  createCanvas(800, 800);
  rectMode(CENTER);
  angleMode(DEGREES);


  for (let i = 0; i < flaskElements.length; i++) {
    flaskArray[i] = new MovedFlask (flaskElements[i]);
  }
  for(let i= 0; i<boxes.length; i++){
  boxArray[i] = new BoxMoved(boxes[i]);
}

for(let i= 0; i<circles.length; i++){
  circleArray[i] = new CircleMoved(circles[i]);
}

for(let i= 0; i<triangles.length; i++){
  triangleArray[i] = new TriangleMoved(triangles[i]);
}
}

function draw() {
    background(255);
    push();
    translate(0, 0);
    pop();

  for (let i = 0; i < flaskElements.length; i++) {
    flaskArray[i].moveBox();
    flaskArray[i].trackingLines();
    flaskArray[i].drawCircle();
    flaskArray[i].drawArc();
  }



  for (let i= 0; i< boxes.length; i++){
   boxArray[i].drawBox();
   boxArray[i].tracingObject();
 }

 for (let i= 0; i< circles.length; i++){
   circleArray[i].drawCircle();
   circleArray[i].tracingObject();
 }

 rotate(angle);
 angle = angle + speed
 for (let i= 0; i< triangles.length; i++){
   triangleArray[i].drawTriangle();
 }


}
