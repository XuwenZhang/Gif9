let box001 = {
  color: 0, //main body
  rectX: 0,
  rectY: 0,
  rectWidth: 120,
  rectHeight: 300,
  transX: 300,
  transY: 400,
  speedX: -4,
  speedY: 1
}
let box002 = {
  color: 0, //neck
  rectX: 0,
  rectY: 0,
  rectWidth: 80,
  rectHeight: 30,
  transX: 300,
  transY: 210,
  speedX: 2,
  speedY: 2
}
let box003 = {
  color: 0, //body cover in the middle
  rectX: 0,
  rectY: 0,
  rectWidth: 50,
  rectHeight: 50,
  transX: 300,
  transY: 220,
  speedX: -2,
  speedY: 1
}
let box004 = {
  color: 0, //neck cap
  rectX: 0,
  rectY: 0,
  rectWidth: 80,
  rectHeight: 20,
  transX: 300,
  transY: 182,
  speedX: 2,
  speedY: 3
}
let box005 = {
  color: 0, //cap
  rectX: 0,
  rectY: 0,
  rectWidth: 80,
  rectHeight: 30,
  transX: 300,
  transY: 154,
  speedX: 2,
  speedY: 5
}
let box006 = {
  color: 0, //handle left
  rectX: 0,
  rectY: 0,
  rectWidth: 5,
  rectHeight: 50,
  transX: 255,
  transY: 140,
  speedX: 9,
  speedY: 4
}
let box007 = {
  color: 0, //handle right
  rectX: 0,
  rectY: 0,
  rectWidth: 5,
  rectHeight: 50,
  transX: 345,
  transY: 140,
  speedX: 1,
  speedY: 5
}
let box008 = {
  color: 0, //handle left addition
  rectX: 0,
  rectY: 0,
  rectWidth: 5,
  rectHeight: 20,
  transX: 248,
  transY: 150,
  speedX: 5,
  speedY: 1
}
let box009 = {
  color: 0, //handle right addition
  rectX: 0,
  rectY: 0,
  rectWidth: 5,
  rectHeight: 20,
  transX: 352,
  transY: 150,
  speedX: 6,
  speedY: 6
}
let box010 = {
  color: 0, //bottom
  rectX: 0,
  rectY: 0,
  rectWidth: 100,
  rectHeight: 20,
  transX: 300,
  transY: 550,
  speedX: 1,
  speedY: 1
}
let circle001 = {
  color: 0, //body left
  ellipseX: 0,
  ellipseY: 0,
  ellipseWidth: 60,
  ellipseHeight: 60,
  transX: 270,
  transY: 250,
  speedX: 9,
  speedY: 9
}
let circle002 = {
  color: 0, //body right
  ellipseX: 0,
  ellipseY: 0,
  ellipseWidth: 60,
  ellipseHeight: 60,
  transX: 330,
  transY: 250,
  speedX: 7,
  speedY: 7
}
let circle003 = {
  color: 0, //body left low
  ellipseX: 0,
  ellipseY: 0,
  ellipseWidth: 20,
  ellipseHeight: 20,
  transX: 250,
  transY: 550,
  speedX: -3,
  speedY: -3
}
let circle004 = {
  color: 0, //body right low
  ellipseX: 0,
  ellipseY: 0,
  ellipseWidth: 20,
  ellipseHeight: 20,
  transX: 350,
  transY: 550,
  speedX: -1,
  speedY: -1
}
let arc001 = {
  color: 0, //black
  arcX: 0,
  arcY: 0,
  arcWidth: 95,
  arcHeight: 95,
  transX: 300,
  transY: 115,
  speedX: -4,
  speedY: 6
}
let arc002 = {
  color: 255, //white
  arcX: 0,
  arcY: 0,
  arcWidth: 85,
  arcHeight: 85,
  transX: 300,
  transY: 115,
  speedX: 4,
  speedY: 4
}

class MovedFlask {
  constructor(incomingBox) {
    this.incomingBox = incomingBox;
  }
  moveBox() {
    // If I have a JS Object NAME called rectX
    // Then I know I am a box
    if (this.incomingBox.ellipseX === undefined && this.incomingBox.arcX === undefined) {
      push();
      if (this.incomingBox.transX > width || this.incomingBox.transX < 0) {
        this.incomingBox.speedX = this.incomingBox.speedX*-1;
      }
      this.incomingBox.transX = this.incomingBox.transX + this.incomingBox.speedX;
      if (this.incomingBox.transY > width || this.incomingBox.transY < 0) {
        this.incomingBox.speedY = this.incomingBox.speedY*-1;
      }
      this.incomingBox.transY = this.incomingBox.transY + this.incomingBox.speedY;
      translate(this.incomingBox.transX, this.incomingBox.transY, 50);
      noStroke();
      fill(255, 204, 0);
      rect(this.incomingBox.rectX, this.incomingBox.rectY, this.incomingBox.rectWidth, this.incomingBox.rectHeight);
      pop();
    }
  }
  trackingLines() {
    stroke(0);
    strokeWeight(0.3)
    line(this.incomingBox.transX, 0, this.incomingBox.transX, height)
    line(0, this.incomingBox.transY, height, this.incomingBox.transY)
  }

  drawCircle() {
    if (this.incomingBox.rectX === undefined && this.incomingBox.arcX === undefined) {

      fill(this.incomingBox.color); //black

      push();
      if (this.incomingBox.transX > width || this.incomingBox.transX < 0) {
        this.incomingBox.speedX = this.incomingBox.speedX*-1;
      }
      this.incomingBox.transX  = this.incomingBox.transX  + this.incomingBox.speedX;
      if ( this.incomingBox.transY > height ||  this.incomingBox.transY < 0) {
        this.incomingBox.speedY = this.incomingBox.speedY*-1;
      }
      this.incomingBox.transY  = this.incomingBox.transY  + this.incomingBox.speedY;
      fill('red');
      translate(this.incomingBox.transX, this.incomingBox.transY, 0)
      ellipse(this.incomingBox.ellipseX, this.incomingBox.ellipseY, this.incomingBox.ellipseWidth, this.incomingBox.ellipseHeight);
      pop();

    }
  }
  drawArc () {
    if (this.incomingBox.ellipseX === undefined && this.incomingBox.rectX === undefined) {
      fill(this.incomingBox.color);
      push()
      if (this.incomingBox.transX > width || this.incomingBox.transX  < 0) {
        this.incomingBox.speedX = this.incomingBox.speedX*-1;
      }
      this.incomingBox.transX  = this.incomingBox.transX + this.incomingBox.speedX;
      if ( this.incomingBox.transY > height ||  this.incomingBox.transY < 0) {
        this.incomingBox.speedY = this.incomingBox.speedY*-1;
      }
      this.incomingBox.transY  = this.incomingBox.transY + this.incomingBox.speedY;
      strokeWeight(1);
      translate(this.incomingBox.transX, this.incomingBox.transY, 0);
      fill('blue');
      arc(this.incomingBox.arcX, this.incomingBox.arcX, this.incomingBox.arcWidth, this.incomingBox.arcHeight, PI,TWO_PI);
      pop();

    }
  }
}
