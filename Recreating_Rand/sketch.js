

// this only runs once

function setup(){
 createCanvas(800,800);  // (x,y) are both parameters
 background(200, 127, 12); 

/*
Function Call is ended by a ;
Function definition is 

*/

}


// draw loops

function draw(){
  
  fill(0, 0, 255);
  ellipse(width/2, height/2, 50, 200);
  
  
  noStroke();
  ellipseMode(CORNER);
  fill(255, 100);
  ellipse(width/2, height/2, 50, 200);
  
  // line(x1, y1, x2, y2)
  stroke(100, 220, 400); // handles the color of the stroke
  line(200, 200, 400, 400);
  
  stroke(255);
  fill(255);
  line(mouseX, mouseY, 400, 400);

 /* 
  if(mousePressed);{ // if whatever is inside the () is true, then we
    background(0); //  will execute whatever is between the ()
    
  }
  */
  
}