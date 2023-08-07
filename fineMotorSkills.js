//variables
var score = 0;
var page = 0;
var typingGameKill = 0;
var typingGameLives = 3;//these are the lives in the typing game
var pinchingGameLives = 3;//these are the lives for the pinching game//set to 3 for 3 lives
var drawingGameLives = 0;//these are the lives for the drawing game
var gamePages = 0;//this is what begins the games in the draw function
//these are for the color theme
var themeColor1 = 0;
var themeColor2 = 70;
var themeColor3 = 200;
var overAllScore = 0;//this is the overall score
var typingGameScore = 0;//this is for the typing game score4
var pinchingGameScore = 0;//for the pinching game score
var drawingGameScore = 0;//for the drawing game  score
let timerValue = 0;//timer
var speedOfEvilCowboy = 1;//speed of moving cowboy

//for typing game letters
var typingGameCorrectLetters  = 0;
var ramdomTypingLetters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var randomTypedLetters1;
var randomTypedLetters2;
var randomTypedLetters3;
var randomTypedLetters4;
var randomTypedLetters5;

//variables for typing game++
var cowBoyX = 870;
var cowBoyY = 250;

//this is for the pinching game++
//box 1
var box1X = 870;
var box1Y = 70;
//box 2
var box2X = 870;
var box2Y = 330;
//this adding by 1
var pinchingInc = 0;//this adds 1
var checking = pinchingInc;//this is set to pinchingInc
var resetBlocks = 0;//this resets the blocks

//this is for the drawing game ++
var backGroundTimes = 0;
var scoreCounterDrawing = 0;
var scoreCounterCheck = scoreCounterDrawing;
var restartScoreCounter = 0;


function setup() {
  createCanvas(870, 500);
  background(255);
  
  //this is ior the timer
  setInterval(timeIt, 1000);
  
  randomTypedLetters1 = random(ramdomTypingLetters);
  randomTypedLetters2 = random(ramdomTypingLetters);
  randomTypedLetters3 = random(ramdomTypingLetters);
  randomTypedLetters4 = random(ramdomTypingLetters);
  randomTypedLetters5 = random(ramdomTypingLetters);
}

//this is to restart the typing game letters
function resetTypingGameKill() {
  randomTypedLetters1 = random(ramdomTypingLetters);
  randomTypedLetters2 = random(ramdomTypingLetters);
  randomTypedLetters3 = random(ramdomTypingLetters);
  randomTypedLetters4 = random(ramdomTypingLetters);
  randomTypedLetters5 = random(ramdomTypingLetters);
  cowBoyX = 870;//this pushes the cowboy back
}

function draw() {
  //(0, 70, 200) for indego blue
  
  //this restarts the typing game
  if (typingGameKill == 1) {
    resetTypingGameKill();
    typingGameKill = 0;
  }
  
  //this opens the beginning page
  if (page == 0) {
  beginningPage();
  }
  
  //this is the button on the beginning page
  if (mouseIsPressed && mouseX > 631 && mouseY > 401 && mouseX < 751 && mouseY < 451 && page == 0) {
    page++;//page is auto set to 1
  }
  
  //this is the button for the typing game
  if (mouseIsPressed && mouseX > 70 && mouseY > 190 && mouseX < 320 && mouseY < 250 && page == 1) {
    page = 2;
  }
  //this is the button for the pinching game
  if (mouseIsPressed && mouseX > 450 && mouseY > 190 && mouseX < 700 && mouseY < 250 && page == 1) {
    page = 3;
  }
  //this is the button for the drawing game
  if (mouseIsPressed && mouseX > 70 && mouseY > 310 && mouseX < 320 && mouseY < 370 && page == 1) {
    page = 4;
  }
  //this opens the score menu
  if (mouseIsPressed && mouseX > 450 && mouseY > 310 && mouseX < 700 && mouseY < 370 && page == 1) {
    page = 5;
  }
  
  //settings button
  if (mouseIsPressed && mouseX > 310 && mouseY > 420 && mouseX < 480 && mouseY < 470 && page == 1) {
    page = 6;
  }
  
  //this is the button for the back button on the typing opening page
  if (mouseIsPressed && mouseX > 50 && mouseY > 370 && mouseX < 250 && mouseY < 460 && page == 2) {
    page = 1;//this sends you back to the menu
  }
  
  //this button betins the typing game
  if (mouseIsPressed && mouseX > 560 && mouseY > 370 && mouseX < 760 && mouseY < 460 && page == 2) {
    typingGameScore = 0;
    page = 7;//this begins the typing game
  }
  
  //this is the back gutton for the pinching game
  if (mouseIsPressed && mouseX > 100 && mouseY > 380 && mouseX < 300 && mouseY < 470 && page == 3) {
    page = 1
  }
  //start page for the pinching game
  if (mouseIsPressed && mouseX > 510 && mouseY > 380 && mouseX < 710 && mouseY < 470 && page == 3) {
    page = 8;
  }
  
  //this is the back button on the drawing page menu
  if (mouseIsPressed && mouseX > 100 && mouseY > 380 && mouseX < 300 && mouseY < 470 && page == 4) {
    page = 1;
  }
  
  //this is the start drawing game
  if (mouseIsPressed && mouseX > 510 && mouseY > 380 && mouseX < 710 && mouseY < 470 && page == 4) {
    background('white')
    page = 9;
  }
  
  //this is the button on the ending page for the typing game that restarts the game 
  if (mouseIsPressed && mouseX > 550 && mouseY > 400 && mouseX < 750 && mouseY < 450 && page == 10) {
    typingGameScore = 0;
    cowBoyX = 870;
    typingGameLives = 3;
    page = 7;
  }
  
  //this is the button on the ending page for the typing game that sends you back to the menu
  if (mouseIsPressed && mouseX > 300 && mouseY > 200 && mouseX < 500 && mouseY < 300 && page == 10) {
    cowBoyX = 870;
    typingGameLives = 3;
    page = 1;
  }
  //this is the button on the ending page for the pinching game that sends you back to the menu
  if (mouseIsPressed && mouseX > 300 && mouseY > 200 && mouseX < 500 && mouseY < 300 && page == 11) {
    pinchingGameLives = 3;
    box1X = 850;
    box2X = 850;
    page = 1;
  }
  //this is to restart the pinching game
  //rect(550,400,200,50)
  if (mouseIsPressed && mouseX > 550 && mouseY > 400 && mouseX < 750 && mouseY < 450 && page == 11) {
    pinchingGameLives = 3;
    pinchingGameScore = 0;
    box1X = 850;
    box2X = 850;
    page = 8;
  }
  
  //this is the restart button on the ending page of the drawing game
  if(mouseIsPressed && mouseX > 550 && mouseY > 400 && mouseX < 750 && mouseY < 450 && page == 12) {
    drawingGameScore = 0;
    background('white')
    page = 9;
  }
  //this is the menu page for the ending page of the drawing game
  if(mouseIsPressed && mouseX > 300 && mouseY > 200 && mouseX < 500 && mouseY < 300 && page == 12) {
    drawingGameScore = 0;
    page = 1;
  }
  
  //this opens the menu page
  if (page == 1) {
    background(255);
    menuPage();
  }
  
  //this opens the typing game
  if (page == 2) {
    background(255);
    typingGameOpeningPage();
  }
  
  //this opens the pinching game
  if (page == 3) {
    background(255);
    pinchingGamOpeningpage();
  }
  
  //this opens the drawing game
  if (page == 4) {
    background(255);
    drawingGameOpeningPage();
  }
  
  //this opens the score page
  if (page == 5) {
    background(255);
    scoringPage();
  }
  
  //this is the themes page
  if (page == 6) {
    background(255);
    themesPage();
  }
  
  //page for the typing game
  if (page == 7) {
    //this calls the game
    background(255);
    typingGame();
  }
  
  //page for the pinching game
  if (page == 8) {
    background(255);
    pinchingExersize();
  }
  
  //page for the drawing game
  if (page == 9) {
    drawingGame();
  }
  
  //ending page for typing game
  if (page == 10) {
    endingPageForTypingInstructer();
  }
  
  //endingpage for pinching game
  if (page == 11) {
    endingPageForPinchingInstructer();
  }
  
  //ending page for drawing game
  if (page == 12) {
    endingPageForDrawingGame();
  }
}

//menus
function beginningPage() {
  fill(themeColor1, themeColor2, themeColor3);//color for indigo blue theme
  
  //this is the start button and shapes around it
  strokeWeight(2);
  noStroke();
  
  rect(631, 401, 120, 50);
  
  fill(255, 100, 100);//salmon color theme
  noStroke(0);
  triangle(600, 400, 629, 400, 629, 449);
  triangle(630, 399, 750, 399, 750, 360);
  fill(255);
  textSize(30);
  text("Begin", 650, 435);
  
  fill(themeColor1, themeColor2, themeColor3) // blue color
  rect(0,0,800,144) // the very upper blue
  
  fill(200) // the grey
  rect(20,20,760,100)
 
  fill(0)
  textSize(60)
  text("Fine Motor Skills",200,90)
  
  fill(themeColor1, themeColor2, themeColor3) 
  rect(20,160,790,20)
  
  fill(255,100,100) // orange color
  stroke(1);
  rect(80,150,80,90)
  noStroke();
  
  fill(themeColor1, themeColor2, themeColor3) // rect above the orang
  rect(20,200,320,20)
  
  stroke(1);
  fill(themeColor1, themeColor2, themeColor3) // the small vertical rect 
  rect(280,190,30,58)
  noStroke();
}
function menuPage(){
  noStroke();
  
  fill(themeColor1, themeColor2, themeColor3);// code for large box
  rect(0, 0, 1000, 130);//top rectangle
  fill(255,100,100);
  fill(255);
  textSize(40)
  text("Select the motor skill to practice",110,90);
  
  fill(themeColor1, themeColor2, themeColor3);// colour for all the boxes
  rect(70, 190, 250, 60);//code for first top rightbox
  fill(255,100,100);
  rect(300,190,60, 60);
  fill(255);
  textSize(40)
  text("Typing", 120, 232);

  
  fill(themeColor1, themeColor2, themeColor3);
  rect(450, 190, 250, 60);//code for top left rightbox
  textSize(40)
  fill(255,100,100);
  rect(670, 190, 60, 60);//colour for small box
  fill(255);
  textSize(40)
  text("Pinching", 470, 232);
  
  fill(themeColor1, themeColor2, themeColor3);
  rect(450, 310, 250, 60);//code for bottom right box
  fill(255,100,100);
  rect(670, 310, 60, 60);
  fill(255);
  textSize(40)
  text("Score", 500, 350);
  
  fill(themeColor1, themeColor2, themeColor3);
  rect(70, 310, 250, 60);//code for bottom left box
  fill(255,100,100);
  rect(300,310,60,60);
  fill(255);
  textSize(40)
  text("Drawing",120, 350);
  
  fill(themeColor1, themeColor2, themeColor3);
  rect(310, 420, 170, 50);//code for the bottomost box
  fill(255);
  textSize(35)
  text("Themes",330, 455);
}

//extra pages
function scoringPage() {
  //Total Score Box
   fill(255, 100 ,100);
   rect(480, 20, 190, 80,20);
   fill(255);
   textSize(32);
   text("Total Score",500,70);
  
   fill(themeColor1, themeColor2, themeColor3);
   rect(250, 20, 190, 80,20); //topmost rect
   fill(255);
   textSize(40);
   text("scores",285,70);
  
   fill(themeColor1, themeColor2, themeColor3);
   rect(50, 130, 270, 70,20); // typing rect
   fill(255);
   textSize(40);
   text("Typing",120,175);
   
  
  
   fill(themeColor1, themeColor2, themeColor3);
   rect(50, 220, 270, 70,20); //pinching rect
   fill(255);
   textSize(40);
   text("Pinching",100,265);
  
   fill(themeColor1, themeColor2, themeColor3);
   rect(50, 310, 270, 70,20);
   fill(255);
   textSize(40);
   text("Drawing",105,355);
  
   fill(themeColor1, themeColor2, themeColor3);
   rect(90, 405, 210, 50,20);
   fill(255);
   textSize(40);
   text("Back",145,445);
  
   fill(themeColor1, themeColor2, themeColor3);
   rect(350, 130, 170, 70,20);//1st score display
   fill(255);
   textSize(40);
   text(typingGameScore,410,175);
  
  
   fill(themeColor1, themeColor2, themeColor3);
   rect(350, 220, 170, 70,20);//2nd score display
   fill(255);
   textSize(40);
   text(pinchingGameScore,410,270);
  
  
   fill(themeColor1, themeColor2, themeColor3);
   rect(350, 310, 170, 70,20);//3rd score display
   fill(255);
   textSize(40);
   text(drawingGameScore,410,360);
  
   fill(255,100,100);//
   rect(500, 130, 170, 70,20);//1st total score display
   fill(255);
   textSize(40);
   text(overAllScore,570,175);
  
   fill(255,100,100);
   rect(500, 220, 170, 70,20);//2nd total score display
   fill(255);
   textSize(40);
   text(overAllScore,570,270);
  
  
   fill(255,100,100);
   rect(500, 310, 170, 70,20);//3rd total score display
   fill(255);
   textSize(40);
   text(overAllScore,570,360);

  
   if (mouseIsPressed && mouseX > 90 && mouseX <300 && mouseY > 405 && mouseY < 455 && page == 5) {
    page = 1;
  }

}
function themesPage() {
    fill(themeColor1,themeColor2,themeColor3);
  stroke('black');
  strokeWeight(1.5)
  rect(230,10,300,100,20);
  
  noStroke();
  fill(255);
  textSize(50)
  text("Themes",290,75);
  
  //Theme Box
  fill(themeColor1,themeColor2,themeColor3);
  rect(0,200,800,100,20);
  
  noStroke();
  fill(255);
  textSize(30);
  text("Themes:",10,260);
  
  //Back Button
  fill(themeColor1,themeColor2,themeColor3)
  stroke('green');
  strokeWeight(1);
  rect(560, 370, 200, 90, 20);
  
  fill(255);
  textSize(60);
  text('Back', 595, 435);//back button
  
  noStroke();
  
  //color selection
  stroke(255)
  fill(255,204, 0); // first theme colour(yellow)
  rect(190,205,90,90,20);

  fill(300, 90, 200); // Second theme colour(pink)
  rect(320,205,90,90,20);
  
  fill(10, 230, 100); // Second theme colour(light green)
  rect(450,205,90,90,20);

  fill(0,70,200); // Second theme colour(blue)
  rect(583,205,90,90,20);
  
  noStroke();
  
  if (mouseIsPressed && mouseX > 560 && mouseX <760 && mouseY > 370 && mouseY < 460 && page == 6) {
    page = 1;
  }
  
  if (mouseIsPressed && mouseX > 190 && mouseX <280 && mouseY > 205 && mouseY < 295 && page == 6 ) {//yellow
    themeColor1 = 255;
    themeColor2 = 205;
    themeColor3 = 0;

  }
  
  if (mouseIsPressed && mouseX >320 && mouseX <410 && mouseY > 205 && mouseY < 295 && page == 6) {   //pink
    themeColor1 = 300;
    themeColor2 = 90;
    themeColor3 = 200;

  }
  
   
  if (mouseIsPressed && mouseX >450 && mouseX <540 && mouseY > 205 && mouseY < 295 && page == 6) { //light green
    themeColor1 = 10;
    themeColor2 = 230;
    themeColor3 = 100;

  }
  
  if (mouseIsPressed && mouseX > 583 && mouseX < 673 && mouseY > 205 && mouseY < 295 && page == 6 ) { //blue
    themeColor1 = 0;
    themeColor2 = 70;
    themeColor3 = 200;

  }

}

//opening pages
function drawingGameOpeningPage() {
  fill(themeColor1, themeColor2, themeColor3);//blue color
  rect(50,50,700,100,20);
   fill(255)
  textSize(90);
  text("DRAWING ",180,133)
  
  stroke(255,100,100);//Orange stroke
  strokeWeight(4);//width of stroke
  fill(themeColor1, themeColor2, themeColor3);//blue color
  rect(50,200,700,100,20);//A message showing instruction.
  noStroke();
  fill(255);
  textSize(23);
  text("Draw whatever you like! Each second is a point!",170,240)//first line
  noStroke();
  fill(255);
  textSize(23);
  noStroke();
  fill(themeColor1, themeColor2, themeColor3);//blue color
  rect(100,380,200,90,70)//A message takes user back to menu.
  fill(255);
  textSize(30);
  text("BACK", 150,435);//Adding "score".
  
  fill(themeColor1, themeColor2, themeColor3);//blue color
  rect(510,380,200,90,70);//A message takes user to the actual game
  fill(255);
  textSize(30);
  text("START", 560,435);//adding the "Start" option.
  
}
function typingGameOpeningPage() {
  
  //topmost rectangle
  stroke('#222222');
  strokeWeight(1.5);
  fill(themeColor1, themeColor2, themeColor3)
  rect(260, 30, 270, 110,20);
  fill(255);
  textSize(60);
  text('Typing', 308, 100);
  
  //bottom left rectangle
 
  fill(themeColor1, themeColor2, themeColor3)
  stroke('rgb(100%,0%,10%)');
  fill(themeColor1, themeColor2, themeColor3)
  rect(50,370,200,90,20);
  fill(255);
  textSize(60);
  text('Back', 85, 435);
  
  
  //bottom right rectangle
  stroke('rgb(0,255,0)');
  strokeWeight(1.5);
  fill(themeColor1, themeColor2, themeColor3)
  rect(560, 370, 200, 90, 20);
  fill(255);
  textSize(60);
  text('Start', 595, 435);
  
  //middle rectangle
  stroke('red');
  strokeWeight(5);
  fill(themeColor1, themeColor2, themeColor3)
  rect(55,175,700,160,20);
  fill(255);
  fill(255);
  textSize(20);
  strokeWeight(0);
  text("You will be given letters under a cowboy to be typed.", 160, 220); 
   text("Type them and you eleminate the cowboy and on to the next!", 130, 250); 
}
function pinchingGamOpeningpage(){
  fill(themeColor1, themeColor2, themeColor3);//blue color
  rect(50,50,700,100,20);
   fill(255)
  textSize(90);
  text("PINCHING ",190,133)
  
  stroke(255,100,100);//Orange stroke
  strokeWeight(4);//width of stroke
  fill(themeColor1, themeColor2, themeColor3);//blue color
  rect(50,200,700,100,20);//A message showing instruction.
  noStroke();
  fill(255);
  textSize(18);
  text("You will need to press both arrow keys at the same time over the squares",110,258)//first line
 
  noStroke();
  fill(themeColor1, themeColor2, themeColor3);//blue color
  rect(100,380,200,90,70)//A message takes user back to menu.
  fill(255);
  textSize(30);
  text("BACK", 150,435);
  
  fill(themeColor1, themeColor2, themeColor3);//blue color
  rect(510,380,200,90,70);//A message takes user to the actual game
  fill(255);
  textSize(30);
  text("START", 560,435);//adding the "Start" option.
  
}

//games
function typingGame() {
  
  cowBoyX--;//this moves the cowboy from one side of the screen to the next
  
  stroke('black');
  
  background(240, 205, 150);
  
  //score up top
  fill(150, 75, 0);
  rect(500, 0, 300, 50);
  strokeWeight(3);
  textSize(30);
  text("Score: " + typingGameScore, 520, 35);
  //lives up top
  text("|  Lives: " + typingGameLives, 650, 35);
  strokeWeight(1);
  
  //this is the saloon behind the person
  fill(200, 90, 0);
  rect(0, 0, 100, 400);//side
  fill(150, 75, 0);
  rect(0, 0, 100, 300);//roof
  fill(0, 0, 0, 150);
  triangle(100, 400, 100, 0, 200, 0);//shaddow\
  
  fill(150, 90, 0);
  triangle(80, 50, 80, 250, 50, 150);//saloon sign
  triangle(90, 50, 90, 250, 50, 150);//saloon triangle sign
  fill('red');
  textSize(25);
  text("S", 70, 120);
  text("t", 75, 140);
  text("o", 73, 160);
  text("r", 75, 180);
  text("e", 75, 200);
  fill(150, 90, 0);
  noStroke();
  rect(20, 0, 10, 298);//roof
  stroke(1);
  
  rect(70, 400, 30, 26);//box1
  rect(70, 375, 30, 25);//box top
  fill(0, 0, 0, 150);//shaddow
  noStroke();
  triangle(100, 430, 100, 400, 115, 350);
  stroke(1);
  
  fill(150, 110, 0);
  rect(20, 400, 25, 21);//box2
  rect(20, 380, 25, 20);//box top
  fill(0, 0, 0, 150);//shaddow
  triangle(45, 420, 45, 400, 54, 400);
  
  //side of building
  fill(200);
  rect(65, 300, 5, 100);
  rect(0, 300, 100, 5);
  
  //this is the quit button
  fill('brown');
  rect(438, 10, 50, 30, 5);
  fill('black');
  text("Quit", 440, 35);
  if (mouseIsPressed && mouseX > 450 && mouseY > 10 && mouseX < 500 && mouseY < 40 && page == 7) {
    cowBoyX = 870;
    page = 1;
  }
  
  //this is the code for the the player's cowboy
  strokeWeight(2);
  line(150, 250, 150, 250-13);//body
  noFill();
  ellipse(150, 250-17, 10, 10);//head
  line(150-8, 250-22, 150+8, 250-22);//hat flat
  fill('white');
  rect(150-4, 250-31, 7, 9, 3);//hat top
  line(150-7, 250-7, 150+7, 250-7);//arms
  line(150, 250, 150-7, 250+7);//legL
  line(150, 250, 150+7, 250+7);//legR
  stroke('white');
  line(150+7, 250-7, 150+10, 250-10);//gun
  stroke('brown');
  line(150+10, 250-10, 150+15, 250-10);//gun
  
  //this is an evil cowboy
  strokeWeight(2);
  stroke('black');
  line(cowBoyX, cowBoyY, cowBoyX, cowBoyY-13);//body
  noFill();
  ellipse(cowBoyX, cowBoyY-17, 10, 10);//head
  line(cowBoyX-8, cowBoyY-22, cowBoyX+8, cowBoyY-22);//hat flat
  fill(themeColor1, themeColor2, themeColor3);
  rect(cowBoyX-4, cowBoyY-31, 7, 9, 3);//hat top
  line(cowBoyX-7, cowBoyY-7, cowBoyX+7, cowBoyY-7);//arms
  line(cowBoyX, cowBoyY, cowBoyX-7, cowBoyY+7);//legL
  line(cowBoyX, cowBoyY, cowBoyX+7, cowBoyY+7);//legR
  stroke('white');
  line(cowBoyX+7, cowBoyY-7, cowBoyX+10, cowBoyY-10);//gun
  stroke('brown');
  line(cowBoyX+10, cowBoyY-10, cowBoyX+15, cowBoyY-10);//gun
  noStroke();
  
  //this displays the text under the attacker
  textSize(20);
  
  //these are the if commands if one presses the right KEY
  fill('black')
  text(randomTypedLetters1 + "  " + randomTypedLetters2 + "  " + randomTypedLetters3 + "  " + randomTypedLetters4 + "  " + randomTypedLetters5, cowBoyX-40, cowBoyY+25);
  
  
  strokeWeight(0);
  
  //when all vars are met set the kill to 1 then 0 (add this)
  //this adds to score 
  console.log(typingGameCorrectLetters)
  if ((key === randomTypedLetters1) && score < 10) {
      typingGameCorrectLetters++; 
      randomTypedLetters1 = "";
    }
  if ((typingGameCorrectLetters == 1) && key === randomTypedLetters2 && score < 10) {
    typingGameCorrectLetters++;
    randomTypedLetters2 = "";
  }
  if ((typingGameCorrectLetters == 2) && key === randomTypedLetters3 && score < 10) {
    typingGameCorrectLetters++;
    randomTypedLetters3 = "";
  }
  if ((typingGameCorrectLetters == 3) && key === randomTypedLetters4 && score < 10) {
    typingGameCorrectLetters++;
    randomTypedLetters4 = "";
  }
  if ((typingGameCorrectLetters == 4) && key === randomTypedLetters5 && score < 10) {
    typingGameCorrectLetters++;
    randomTypedLetters5 = "";
  }
  
  //this speeds the game up
  if (typingGameScore < 7) {
    speedOfEvilCowboy = 1;
  }else if (typingGameScore < 15) {
    speedOfEvilCowboy = 2;
  }else if (typingGameScore < 20) {
    speedOfEvilCowboy = 3;
  }else if (typingGameScore < 25) {
    speedOfEvilCowboy = 4;
  }else if (typingGameScore < 30) {
    speedOfEvilCowboy = 5;
  }else if (typingGameScore < 32) {
    speedOfEvilCowboy = 6;
  }else if (typingGameScore < 35) {
    speedOfEvilCowboy = 7;
  }else {
    speedOfEvilCowboy = 10;
  }
  
  if (speedOfEvilCowboy == 2) {
    cowBoyX = cowBoyX - 0.5
  }
  if (speedOfEvilCowboy == 3) {
    cowBoyX--;
  }
  if (speedOfEvilCowboy == 4) {
    cowBoyX = cowBoyX - 1.5;
  }
  if (speedOfEvilCowboy == 5) {
    cowBoyX = cowBoyX -2;
  }
  if (speedOfEvilCowboy == 6) {
    cowBoyX = cowBoyX - 2.5;
  }
  if (speedOfEvilCowboy == 7) {
    cowBoyX = -3;
  }
  if (speedOfEvilCowboy == 10) {
    cowBoyX = cowBoyX - 4.5;
  }
  
  //this is checks for a kill
  if (typingGameCorrectLetters == 5 && score < 10) {
    fill('orange')
    ellipse(165, 240, 20, 20)
    ellipse(cowBoyX, cowBoyY, 60, 60)
    typingGameKill = 1;
  }
  
  //this resets the character after a kill
  if (typingGameKill == 1) {
    typingGameScore++;
    overAllScore++;
    typingGameCorrectLetters = 0;
  }
  
  //this does what is needed if the evil cowboy gets to you -- lives
  if (cowBoyX <= 165) {
    typingGameLives--;
    typingGameCorrectLetters = 0;
    resetTypingGameKill();
  }
  
  //this is the end of the game when you run ouyt of lives
  if (typingGameLives == 0) {
    cowBoyX = 870;
    page = 10;
  }
}
function pinchingExersize() {
  
  background(0);
  
  //arrow1
  stroke(0,255,0);
  strokeWeight(4);
  line(30,40,30,180);
  fill(0,255,0);
  triangle(5,180,55,180,30,210)
  
  //arrow2
  stroke(138, 43, 226);
  strokeWeight(4);
  line(20,450,160,450);
  fill(138, 43, 226);
  triangle(160,475,160,425,190,450);
  
  //arrow2
  stroke(255,0,0);
  strokeWeight(4);
  line(770,460,770,320);
  fill(255,0,0);
  triangle(795,320,745,320,770,290);
  
  //arrow4
  stroke('blue');
  strokeWeight(4);
  line(780,50,640,50);
  fill('blue');
  triangle(640,25,640,75,610,50);
  
  //box
  stroke('yellow')
  line( 200, 250, 600, 250);
  
  //box 1
  stroke(0,100,70);
  strokeWeight(2);
  fill('gray');
  rect(50,70,100,100,20);
  
  //box 2
  stroke(0,100,70);
  strokeWeight(2);
  fill('gray');
  rect(50,330,100,100,20);
  
  //scoring box up top
  textSize(25);
  fill(255);
  rect(250, 0, 250, 50);
  text("Score: " + pinchingGameScore, 260, 33);
  text("|  Lives: " + pinchingGameLives, 370, 33);
  
  fill(255);
  rect(600, 10, 50, 30, 5);
  fill('black');
  text("Quit", 601, 35);
  
  //this button quits the game
  if (mouseIsPressed && mouseX > 600 && mouseY > 10 && mouseX < 650 && mouseY < 40) {
    pinchingGameLives = 3;
    box1X = 850;
    box2X = 850;
    page = 1;
  }
  //this is for the moving blocks
  /*//box 1
var box1X = 870;
var boxY2 = 200;
//box 2
var box2X = 870;
var box2Y = 300;*/
  
  //rect(50,70,100,100,20);
  rect(box1X,box1Y,100,100,20);
  rect(box2X, box2Y, 100, 100, 20)
  box1X = box1X - 3;
  box2X = box2X - 3;
  
  if (keyIsDown(UP_ARROW) && keyIsDown(DOWN_ARROW) && box1X > 25 && box1X < 75 && checking == pinchingInc) {
    //score up
    pinchingGameScore++;
    overAllScore++;
    resetBlocks = 1;
    checking = 1;
  }
  if (keyIsDown(UP_ARROW) && keyIsDown(DOWN_ARROW) && (box1X < 40 || (box1X > 60 && box1X < 790)) && checking == pinchingInc) { 
    pinchingGameLives--;
    resetBlocks = 1;
    checking = 1;
  }
  if (resetBlocks == 1) {
    box1X = 870;
    box2X = 870;
    checking = pinchingInc;
    resetBlocks = 0;
  }
  
  //if lives are 0
  if (pinchingGameLives == 0) {
    page = 11;
  }
  
  //if it moves too far to the left
  if (box1X < -100) {
    box1X = 850;
    box2X = 850;
  }
  
  //arrowPointingUp
  stroke("white");
  strokeWeight(4);
  fill("orange");
  triangle(box1X +23, box1Y + 80 ,box1X + 83, box1Y + 80, box1X + 50,box1Y + 10)
  

//arrowPointingDown
  stroke("white");
  strokeWeight(4);
  fill("orange");
  triangle(box1X +23, box1Y + 280 ,box1X + 83, box1Y + 280, box1X + 55,box1Y + 350)

}
function drawingGame() {
  
  //background(240, 205, 150);
  if(backGroundTimes == 0) {
    background('white');
    backGroundTimes++;
  }
  
  fill(themeColor1, themeColor2, themeColor3);
  rect(1,0, 200, 50, 20);
  fill(255)
  textSize(40)
  text("End",60,38);
  if (mouseIsPressed && mouseX > 1 && mouseY > 0 && mouseX < 201 && mouseY < 50) {
    overAllScore = overAllScore + drawingGameScore;
    page = 12;
  }
  
  fill(themeColor1, themeColor2, themeColor3);
  rect(544,0, 255, 50, 20);
   
  fill(255)
  textSize(40)
  text("Score: " + drawingGameScore, 560, 38);
  
    noStroke();
  if (mouseIsPressed === true) {
    fill(themeColor1, themeColor2, themeColor3)
    ellipse(mouseX, mouseY, 5, 5);
  }
  
  //this is the quit button
  textSize(25);
  fill('white');
  rect(438, 10, 50, 30, 5);
  fill('black');
  text("Quit", 440, 35);
  if (mouseIsPressed && mouseX > 450 && mouseY > 10 && mouseX < 500 && mouseY < 40 && page == 9) {
    backgroundTimes = 0;
    overAllScore = overAllScore + drawingGameScore;
    page = 1;
  }
  timeIt();
  drawingGameScore = timerValue / 100;
}
//timer
function timeIt() {
  if (timerValue > -1 && page == 9) {
    timerValue++;
  }
}
//endingpages
function endingPageForPinchingInstructer() {
  
  box1X = 850;
  box2X = 850;
  
  background(100, 100, 255, 10);//this dims the background
  
  stroke(255,100,100);//Orange stroke
  strokeWeight(4);//width of stroke
  fill(themeColor1, themeColor2, themeColor3);//blue color
  rect(100,50,600,50,20);//A message tells the user that he finished
  
  noStroke();
  fill(255);
  textSize(25);
  text("Great!!, you have finished the Pinching game!",140,80);//Adding text
  
  
  stroke(255,100,100);//Orange stroke
  strokeWeight(4);//width of stroke
  fill(themeColor1, themeColor2, themeColor3);//blue color
  rect(300,200,200,100,20);//A message indicated the typing is done.
  noStroke();
  fill(255);
  textSize(50);
  text("Menu",340,265)//Adding Menu to the shape.
  
  noStroke();
  fill(themeColor1, themeColor2, themeColor3);//blue color
  rect(100,400,200,50)//A message takes user back to menu.
  fill(255);
  textSize(30);
  text("Score", 170,435);//Adding "score".
  
  fill(255,100,100);//Orange Color
  rect(300,400,50,50);
  fill(255);
  fill(255);
  textSize(30);
  text(pinchingGameScore, 310,435);//printing the score.
  
  fill(themeColor1, themeColor2, themeColor3);//blue color
  rect(550,400,200,50);//A message takes user to his score.
  fill(255);
  textSize(30);
  text("Restart game", 560,435);//adding the "Restart game" option.
  fill(255,100,100);//Orange Color
  rect(500,400,50,50);
}
function endingPageForTypingInstructer() {
  
  background(100, 100, 255, 10);//this dims the background
  
  cowBoyX = 870;
  
  stroke(255,100,100);
  strokeWeight(4);
  fill(themeColor1, themeColor2, themeColor3);
  rect(100,50,600,50,20);//A message tells the user he has finished the game
  noStroke();
  fill(255);
  textSize(25);
  text("Awesome! you have finished the game!",180,80);
  
  stroke(255,100,100);//Orange stroke
  strokeWeight(4);//width of stroke
  fill(themeColor1, themeColor2, themeColor3);//blue color
  rect(300, 200, 200, 100 ,20);//A message indicated the typing is done.
  noStroke();
  fill(255);
  textSize(50);
  text("Menu",340,265)//Adding Menu to the shape.
  
  noStroke();
  fill(themeColor1, themeColor2, themeColor3);//blue color
  rect(100,400,200,50)//A message takes user back to menu.
  fill(255);
  textSize(30);
  text("score", 170,435);//Adding "score".
  
  fill(255,100,100);//Orange Color
  rect(300,400,50,50);
  fill(255);
  fill(255);
  textSize(30);
  text(typingGameScore, 310,435);//printing the score.
  
  fill(themeColor1, themeColor2, themeColor3);//blue color
  rect(550, 400, 200, 50);//A message takes user to his score.
  fill(255);
  textSize(30);
  text("Restart game", 560,435);//adding the "Restart game" option.
  fill(255,100,100);//Orange Color
  rect(500,400,50,50);
}
function endingPageForDrawingGame() {
  
  background(100, 100, 255, 10);//this dims the background
  
  stroke(255,100,100);
  strokeWeight(4);
  fill(themeColor1, themeColor2, themeColor3);
  rect(100,50,600,50,20);//A message tells the user he has finished the game
  noStroke();
  fill(255);
  textSize(25);
  text("Great!!, you have finished the Drawing game!",140,80);
  
  
  stroke(255,100,100);//Orange stroke
  strokeWeight(4);//width of stroke
  fill(themeColor1, themeColor2, themeColor3);//blue color
  rect(300,200,200,100,20);//A message indicated the typing is done.
  noStroke();
  fill(255);
  textSize(50);
  text("Menu",340,265)//Adding Menu to the shape.
  
  noStroke();
  fill(themeColor1, themeColor2, themeColor3);//blue color
  rect(100,400,200,50)//A message takes user back to menu.
  fill(255);
  textSize(30);
  text("Score", 170,435);//Adding "score".
  
  fill(255,100,100);//Orange Color
  rect(300,400,100,50);
  fill(255);
  fill(255);
  textSize(30);
  text(drawingGameScore, 310,435);//printing the score.
  
  fill(255,100,100);//Orange Color
  rect(500,400,50,50)
  fill(themeColor1, themeColor2, themeColor3);//blue color
  rect(550,400,200,50);//A message takes user to his score.
  fill(255);
  textSize(30);
  text("Restart", 600, 435);
}
