/**
 * Project 3 versions 0-4 - 2D Web Game
 * Name: Shayla Salvatori
 *
 * Use this template to get started creating a simple 2D game for the web using P5.js. 
 */

var gameState = "splash"; // version 0
var player1; // version 1
var gameTimer; // version 2

function setup() {

  createCanvas(600, 400);
  player1 = new Player(width/2, height * 7/8); // player constructor and placement 
  console.log(player1);

  gameTimer = new Timer(5000); //timer and how long it runs (in milliseconds)
  console.log(gameTimer); 

}

function draw() { // draw function 
  background(200);// background color 
  /* un-comment each line to see it work */
  //splash(); // call the splash screen function (below)
  //play(); // call the play screen function (below)
  //gameOver(); // call the gameOver screen function (below)
switch (gameState) { 
  case "splash" : // splash screen 
    splash();
    break;
  case "play": // play screen 
    play();
    break;
  case "gameOver" : // gameover screen 
    gameOver();
    break;
  default : 
    console.log ("no match! check your mousePressed function");
} // end of game state 

} // end of draw function 

function splash() { // splash function 
  // this is what you would see when the game starts
  background(200); // background color 
  textAlign(CENTER); // text on screen 
  textSize(16); // text size 
  text("Let's Play a Game!", width / 2, height / 2); // text and placement 
  textSize(12); // text size 
  text("(click the mouse to continue)", width / 2, height / 2 + 30); // text and placement 
} // end of splash function 

function play() { // play function 
  // this is what you see when the game is running 
  background(0, 200, 0); // background color 
  fill(0, 0, 200)
  textAlign(CENTER); // text on screen 
  textSize(16); // text size 
  text("This is where the Game happens", width / 2, height / 2); // text and placement 
 //player1.x = mouseX;
 player1.y = mouseY; // basket movement horozontally on the screen 
  player1.display();
  
  if(gameTimer.isFinished()){
    gameState = "gameOver"; // game ends when the timer runs out 
  } // end of timer function 

  text("elapsed time: " + gameTimer.elapsedTime, width/2, 100); // displays timer countdown on screen 

} // end of play function 

function gameOver() { // game over function 
  // this is what you see when the game ends
  background(0); // background color 
  fill(255, 0, 0) 
  textAlign(CENTER); // text placement 
  textSize(16); // text size 
  text("Game Over!", width / 2, height / 2); // text display and placement 
}

function mousePressed() { // mouse pressed function 

  console.log("click!");
  if(gameState == "splash"){ 
    gameState = "play"; 
    gameTimer.start();
  } else if (gameState == "play") {
    //gameState = "gameOver";
  } else if (gameState == "gameOver"){
    gameState = "splash";
  }
  console.log(gameState);

} // end of mouse pressed function 
