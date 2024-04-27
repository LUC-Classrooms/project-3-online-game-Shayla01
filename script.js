/**
 * Project 3 versions 0-4 - 2D Web Game
 * Name: Shayla Salvatori
 * April 28th, 2024
 * Use this template to get started creating a simple 2D game for the web using P5.js. 
 */

var gameState = "splash"; // version 0
var player1; // version 1, player, which is the basket 
var gameTimer; // version 2, game timer 
var testBox; // version 3
var dropTimer; // version 3, timer for mushrooms 
var mushrooms = new Array(0); // version 3, empty array, mushrooms array that drops 
var score = 0; //score and value 

function setup() { // setup function 

  createCanvas(600, 400); // create canvas and size 
  player1 = new Player(width/2, height * 7/8); // player constructor and placement 
  console.log(player1); // display player 1 definition in console 
  testBox = new Box(width/2, height/3); // test box object and placement 

  gameTimer = new Timer(20000); //timer and how long it runs (in milliseconds); 20 seconds 
  console.log(gameTimer); // display game timer in console 
  dropTimer = new Timer(1000); // timer for mushroom drop (in milliseconds); 1 second 
  

}// end of setup function 

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
    console.log ("no match! check your mousePressed function"); // display in console 
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
  testBox.display(); // test box display 
  testBox.spin(); // mushrooms spin on the canvas 
  //testBox.move(); // mushrooms drop off the canvas vertically 
} // end of splash function 

function play() { // play function 
  // this is what you see when the game is running 
  background(0, 200, 0); // background color 
  fill(0, 0, 200)
  textAlign(CENTER); // text on screen 
  textSize(16); // text size 
  text("This is where the Game happens", width / 2, height / 2); // text and placement 
 player1.x = mouseX;// basket movement horozontally on the screen 
 //player1.y = mouseY; 
  player1.display(); // display player 1
  
  if(gameTimer.isFinished()){
    gameState = "gameOver"; // game ends when the timer runs out 
  } // end of timer function 

  if(dropTimer.isFinished()){
    let m = new Box(random(width), -40);
    mushrooms.push(m); // add m to the array 
    dropTimer.start(); //when the drop timer is finished, it adds a new object to the array 
    console.log(m); // display m definition in the console 
    }

    for(let i = 0; i < mushrooms.length; i ++){
      mushrooms[i].display(); //mushroom display 
      mushrooms[i].move(); // mushroom movement 
      mushrooms[i].spin(); // mushrooms spinning

      if(mushrooms[i].y > height) {
        mushrooms.splice(i, 1);// remove mushroom from array when it is off screen 
        score ++; //adds to score if there is a collison between basket and mushroom 
      } // end of if statement for mushroom removal 

      let d = dist(mushrooms[i].x, mushrooms[i].y, player1.x, player1.y); // collison 
      if(d < 50){
        mushrooms.splice(i, 1); // when the mushroom collides with the basket it is removed from the array 
        score --; // lose a point in the score when you miss a mushroom 
      } // end of if function 

    } // end of for loop 

  textAlign(LEFT); // text is displayed on the left half of the screen 
  text("elapsed time: " + gameTimer.elapsedTime, width/2, 100); // displays timer countdown on screen 
  text("Score: " + score, 20, 40) // score and where it is displayed (under the elapsed time on the left)
  
} // end of play function 

function gameOver() { // game over function 
  // this is what you see when the game ends
  background(0); // background color 
  fill(255, 0, 0) 
  textAlign(CENTER); // text placement 
  textSize(16); // text size 
  text("Game Over!", width / 2, height / 2); // text display and placement 
  text("Your Final Score: " + score, width/2, height * 2/3); // displays final score when game ends 
}

function mousePressed() { // mouse pressed function 

  console.log("click!");
  if(gameState == "splash"){ 
    gameState = "play"; // play screen 
    gameTimer.start(); // game timer 
    dropTimer.start(); // mushroom timer
    score = 0; // reset the score at the end of the game 
  } 
  else if (gameState == "play") {
    //gameState = "gameOver";
  } 
  else if (gameState == "gameOver"){
    gameState = "splash";
  }
  console.log(gameState); // show game state in console 

} // end of mouse pressed function 
