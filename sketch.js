// Ryan Yi-Kuei Wu Jul 23, 2021
// bouncing balls with js.p5

var penSize = 15;
let ballTemp1, ballTemp2, ballNew;
let allBalls = []; 

function setup() {
  canvas1 = createCanvas(windowWidth, windowHeight);
  canvas2 = createGraphics(windowWidth, windowHeight);
  canvas1.background(0);
  canvas2.background(0);
  canvas2.clear();

  ballTemp1 = new BALL(0, 0, 3, 2); // if this is not defined in the setup, each class declaration will be reset
  ballTemp2 = new BALL(100, 200, -3, 2);
  allBalls.push(ballTemp1);
  allBalls.push(ballTemp2);
}

function mousePressed() {
  ballNew = new BALL(mouseX, mouseY, random(-1, 1), random(-1, 1));
  allBalls.push(ballNew);
}

function mouseDragged() {
  ballNew = new BALL(mouseX, mouseY, random(-1, 1), random(-1, 1));
  allBalls.push(ballNew);
}

function draw() {
  background(0);

  for (var ib = 0; ib <= allBalls.length-1 ; ib++) {
    mouseOverColorChange(mouseX,mouseY,allBalls[ib])
    allBalls[ib].drawBalls();
    allBalls[ib].moveBalls();
    allBalls[ib].bounceBalls();
    // remove anything that is intersecting
    for (var ib2 = allBalls.length-1; ib2 > ib ; ib2--){
      remove_ball = allBalls[ib].intersect(allBalls[ib2]);
      //print(remove_ball);
      if (remove_ball) {allBalls.splice(ib2,1);}
    }
    
  }
  
}

function mouseOverColorChange(Xmouse,Ymouse, oneBall){
  if (oneBall.mouseOverCheck(Xmouse,Ymouse)) {oneBall.ColorChange();}
}
