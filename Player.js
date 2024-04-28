function Player(tempX, tempY) {
  // properties
  this.x = width/2;
  this.y = height/3;
  this.diam = 50;
  this.angle = 0;

  this.display = function () {
    push(); // create a drawing layer
    translate(this.x, this.y); // move origin point
    rotate(this.angle); // player can rotate

    fill(0); // black
    /** calculate points on a triangle based on a unit circle. You could use this method to draw more complex polygons that would fit inside a circle centered on (this.x, this.y)
     * For any point around the circle, x = the cosine of the angle in radians from 0 to TWO_PI, and y = the sine of that angle. an angle of 0 is the right side of the circle, PI is the left side. 
     * The points generated this way are relative to the coordinate point (0,0). 
     * The translate() function (above, line 10) takes care of moving it on the canvas.
     * 
    */
    let r = this.diam / 2; // radius
    // 270 degrees (top):
    let x1 = cos(PI + HALF_PI) * r; 
    let y1 = sin(PI + HALF_PI) * r; 
    // 30 degrees (bottom right):
    let x2 = cos(PI / 6) * r;
    let y2 = sin(PI / 6) * r;
    // 150 degrees (bottom left): 
    let x3 = cos(PI * 5 / 6) * r;
    let y3 = sin(PI * 5 / 6) * r;
    //draw the triangle:
    //triangle(x1, y1, x2, y2, x3, y3);
    //or draw a complex polygon
    
    beginShape(); // basket to catch 
    let diameter = 100 
    fill(101, 67, 33); // brown fill on basket 
    arc(width / 2, height / 2, 100, 100, 0, PI, CHORD); // basket shape 
 
    let x = width/2 
    let y = height/2
    let lineHeight = diameter/8 
    let lineWidth = diameter/3
    lineColor = [210, 180, 140] // light brown color for lines on basket 
   
    stroke(lineColor); // color of lines 
    strokeWeight(4); // weight of top horizontal line 
    // Horizontal lines for basket weave
    //largest line on top of basket 
    line(this.x - diameter / 2, this.y - diameter / 7 + lineHeight, this.x + diameter / 2, this.y - diameter / 7 + lineHeight);
    //smaller lines on basket 
    strokeWeight(2); // stroke weight on lines 
    line(this.x - diameter / 2, this.y - diameter / 19 + lineHeight, this.x + diameter / 2, this.y - diameter / 19 + lineHeight);
    line(this.x - diameter/ 3.2, this.y + 38, this.x + diameter/3.2, this.y + 38);
    line(this.x - diameter / 2.2, this.y + diameter / 3 - lineHeight, this.x + diameter / 2.2, this.x + diameter / 3 - lineHeight);
   
    // Vertical lines for the basket weave 
    line(this.x - diameter / 2 + lineWidth, this.y - diameter / 60, this.x - diameter / 2 + lineWidth, this.y + 46);
    line(this.x - diameter / 3, this.y - diameter / 60, this.x - diameter / 3, this.y + 38);
    line(this.x, this.y - diameter / 60, this.x, this.y + 50);
    line(this.x + diameter / 3, this.y - diameter / 60, this.x + diameter / 3, this.y + 38);
    line(this.x + diameter / 2 - lineWidth, this.y - diameter / 60, this.x + diameter / 2 - lineWidth, this.y + 46);

   endShape(); // end of shape 
   
   // uncomment the next two lines to see the circle
    // noFill();
    // ellipse(0, 0, this.diam, this.diam);

    pop(); // dispose of this layer

  }


  this.move = function () {
//folow the mouse for now
    this.x = mouseX;
    this.y = mouseY;

  }
}