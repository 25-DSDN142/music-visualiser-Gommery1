
let rectdrum;

let bassstar

let fall;

let ball1 = 200;

let ball2 = 80

let ball3 = 300

let ball4 = 400

let ball5 = 250

let ball6 = 700

let ball7 = 500

let ball8 = 560

let ball9 = 240

let angle = 0;
let r = 150;

let vocal_history = [];

function add_to_history(history, d) {
  history.push(d);
  if(history.length >= (width-1)/4) {
    history.shift();
  }
}
// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(76, 31, 143)
  textFont('arial narrow'); // please use CSS safe fonts
  rectMode(CENTER)
  textSize(24);
  
  rectdrum = map(drum, 0, 100, 50, 350);
  fall = map(other, 0, 100, 0, 60);
  bassstar = map(bass,0, 100, 30, 250);
  // WHITE OUTSIDE RECTANGLES

  fill(255, 0, 200);
rect(50, 100, 50, 160);  //rect(50, 100, 50, 160); 

rect(230, 200, 150, 60); //rect(230, 200, 150, 60);

rect(90, 300, 90, 200); //rect(90, 300, 90, 200);

rect(80, 920, 300, 50);~ // Side ways one at bottom rect(80, 920, 300, 50);

rect(310, 920, 50, 50);~ // Side ways one at bottom rect(310, 920, 50, 50)

rect(460, 920, 140, 50);~ // Side ways one at bottom rect(460, 920, 140, 50);

rect(300, 500, 200, 400); // Large going down rect(300, 500, 200, 400);

rect(400, 120, 150, 200); // medium going down rect(400, 120, 150, 200); 

rect(350, 800, 370, 170); // LARGE SIDEWAYS rect(350, 800, 370, 170);

rect(50, 500, 280, 80); // Middle way sideways rect(50, 500, 280, 80);

rect(200, 80, 200, 140); // top small sideways rect(200, 80, 200, 140);

rect(470, 510, 80, 300); // Side ways long rect(470, 510, 80, 300);

rect(470, 280, 90, 90); // rect(470, 280, 90, 90);

rect(80, 660, 130, 200); // rect(80, 660, 130, 200);

rect(80, 826, 100, 100); // rect(80, 826, 100, 100)

// LINES THAT WILL BUMP TOO BEAT (please work!!)
var numBars = 12;
var barWidth = 30;
var spacing = 15;

push();
strokeWeight(4);
stroke(255);

for (var i = 0; i < numBars; i++) {
   var x = 50 + i * (barWidth + spacing);
   var barHeight = map(drum, 0, 100, 5, height / 2);
   line(x, height, x, height - barHeight);
} 
pop();
// Lines that will bump to the drums

//var drumMap = map(drum, 0, 100, 5, 480);
//var lengthOfLine = 300;
//var lineStart = 100;
//var lineEnd = lineStart + lengthOfLine;
//push();
//colorMode(HSL);
//strokeWeight(5);
//stroke(drumMap, 80, 50);
//for (var i = 1; i <= drumMap; i++){
//var lineStep = i * 20;
//line(lineStart, lineStep, lineEnd, lineStep);
//}
//pop();

noStroke();
// Floating ellipse balls
fill(250, 147, 246);
ellipse(400, ball1, fall);
ball1 = ball1 +2

ellipse(ball2, 200, fall);
ball2 = ball2 +2

ellipse(80, ball3, fall);
ball3 = ball3 +3

ellipse(ball4, 800, fall);
ball4 = ball4 +3

ellipse(ball5, 370, fall);
ball5 = ball5 +4

ellipse(230, ball6, fall);
ball6 = ball6 +2

ellipse(500, ball7, fall);
ball7 = ball7 +1

ellipse(ball8, 600, fall );
ball8 = ball8 +2

ellipse(ball9, 30, fall);
ball9 = ball9 +3

if(ball9 >1000){
   ball9 = 0}

if(ball8 >1000){
   ball8 = 0}

if(ball7 >1000){
   ball7 = 0}

if(ball6 > 1000){
   ball6 = 0}

if(ball5 >1000){
   ball5 = 0}

if(ball4 > 1000){
   ball4 = 0   }

if(ball3 > 1000){
   ball3 = 0}

if( ball2 > 1000){
   ball2 = 0}

if(ball1 > 1000){
   ball1 = 0}

// Star beats
noStroke();
fill(252, 252, 252);
ellipse(270, 480, 100, rectdrum); // middle star
ellipse(270, 480, rectdrum, 100); // middle star

ellipse(90, 120, 60, bassstar); // top left star
ellipse(90, 120, bassstar, 60); // top left star

ellipse(450, 120, bassstar, 60); // top right star
ellipse(450, 120, 60, bassstar); // top right star

ellipse(90, 840, bassstar, 60); // bottom left star
ellipse(90, 840, 60, bassstar); // bottom left star

ellipse(450, 840, bassstar, 60); // bottom right star
ellipse(450, 840, 60, bassstar); // bottom right star


// COLOUR CHANGING CENTRE BALL
push()
colorMode(HSL)
let hueVal = map(bass, 0, 100, 285, 330);
let lightVal = map(bass, 0, 100, 30, 70);
fill(hueVal, 90, lightVal);
ellipse(270, 480, fall);
pop()



noStroke()

// THIS IS THE CENTRE BOUNCING BALLS
   textAlign(CENTER);
   textSize(vocal);
   text(words, width/2, height/3);
angleMode(RADIANS)
  add_to_history(vocal_history, vocal);
translate(270, 480);
strokeWeight(8);
stroke(250, 160, 248);
  //stroke(10);
  //r = vocal
  for(let i = 0; i < 20; i++){
  historyVal = vocal_history[vocal_history.length - i]
  r = map(historyVal, 0, 100, 30, 70)
  let angle = map(i, 0, 20, 0, PI*2)
let x = r * cos(angle);
let y = r * sin(angle);
  point(x, y);
  }
  angle += 0.05; //random(-0.1, 0.1);
  r -= random(-2, 2);
  
 let lastR = map(vocal, 0, 100, 30, 70);
let lastX = lastR * cos(TWO_PI);
let lastY = lastR * sin(TWO_PI);
point(lastX, lastY);

  noStroke();



  
}



