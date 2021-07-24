class BALL {
  constructor(offX, offY, xInc, yInc){
    this.rgbSet = [ [0, random(0,255), random(0,255)],
                    [255, 0, 0] ];
    this.colorFlag = 0;  // a flag to determine what rgb set to use 
    this.rPen = this.rgbSet[this.colorFlag][0];
    this.gPen = this.rgbSet[this.colorFlag][1];
    this.bPen = this.rgbSet[this.colorFlag][2];
    this.xIncrement = xInc; 
    this.yIncrement = yInc;
    this.ballSize = penSize*2;
    this.locX = 0+this.ballSize/2 + offX;
    this.locY = 0+this.ballSize/2 + offY;
  }
  
  
  drawBalls(){
    fill(this.rPen, this.gPen, this.bPen);
    noStroke();
    circle(this.locX, this.locY, this.ballSize);
  }
  moveBalls(){
    this.locX += this.xIncrement;
    this.locY += this.yIncrement;
  }
  
  bounceBalls(){
    if (this.locX > windowWidth-this.ballSize/2 || this.locX < 0+this.ballSize/2){
        this.xIncrement= -this.xIncrement;
    }
    if (this.locY > windowHeight-this.ballSize/2 || this.locY < 0+this.ballSize/2){
        this.yIncrement= -this.yIncrement;
    }
  }
  
  //mouseOverCheck + colorChange = mouseOverColorChange, now they are broken into two events to make them easy to use
  mouseOverCheck(x,y){
    let d = dist(x,y,this.locX,this.locY);
    if(d<this.ballSize/2){return true;}
    else{return false;}
  }
  
  ColorChange(){
    this.colorFlag ++;
    this.rPen = this.rgbSet[this.colorFlag%2][0];
    this.gPen = this.rgbSet[this.colorFlag%2][1];
    this.bPen = this.rgbSet[this.colorFlag%2][2];
  }
  
  //other has to be in Ball class too
  intersect(other){
    let flag_intersect = false;
    let d2 = dist(this.locX, this.locY, other.locX, other.locY);
    if (d2 <= this.ballSize/2 + other.ballSize/2) {
      flag_intersect = true;
      //print(flag_intersect);
    }
    return flag_intersect;
  }
}