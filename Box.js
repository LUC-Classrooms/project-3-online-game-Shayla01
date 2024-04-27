function Box(_x, _y){
  this.x = _x;
  this.y = _y;

  this.xSpeed = 0;
  this.ySpeed = random(1, 2); // 1 - 2 (falling)

  this.angle = 0;

  this.display = function(){

    push();
    translate(this.x - 300, this.y -200);

    rectMode(CENTER);
    fill(this.boxColor);
    //rect(0, 0, 40); // 40px square
    
    //mushroom 
    //red cap 
  fill(200, 0, 0); //red fill 
  noStroke(); //no outline
  arc(this.x, this.y +25, 100, 100, PI, TWO_PI); // semi-circle cap  

 // larger white dots with outline 
  fill(255); // dot fill
  stroke(0); // outline
  strokeWeight(0.5);
  ellipse (this.x - 23, this.y - 5, 10, 10); 
  ellipse(20 + this.x, this.y - 6, 10, 10); 
  ellipse(this.x, 10 + this.y, 10, 10);
 
 //smaller white dots with outline 
  fill(255); //fill 
  stroke(0); //outline
  strokeWeight(0.5);
  ellipse (this.x - 32 , 13 + this.y, 6, 6);
  ellipse(30 + this.x , 15 + this.y, 6, 6);
  
 //white stem 
  fill(255); //white fill 
  stroke(0); //outline
  strokeWeight(1.2);
  rect(this.x +1, 60 + this.y, 30, 70); //stem 

    pop();

  }

  this.move = function() {
    this.y += this.ySpeed; // spin
  }

  this.spin = function() {
    this.angle += this.rSpeed; // spin
  }



}