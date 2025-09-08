
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


// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(76, 31, 143)
  textFont('arial narrow'); // please use CSS safe fonts
  rectMode(CENTER)
  textSize(24);
  
  rectdrum = map(drum, 0, 100, 50, 350);
  fall = map(other, 0, 100, 20, 60);
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

// Smaller squares 
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

push()
colorMode(HSL)
let party = map(bass, 0, 100, 279, 311);
fill(party, 87, 94);
ellipse(270, 480, fall);
pop()


   //let bar_spacing = height / 10;
   //let bar_height = width / 12;
   //let bar_pos_x = width / 2;
 
// changes 
   // vocal bar is red
   //fill(200, 0, 0);
   //rect(bar_pos_x, height / 2 + 1 * bar_spacing, 4 * vocal, bar_height);
   //fill(0);
   //text("vocals", bar_pos_x, height / 2 + 1 * bar_spacing + 8);
 
   // drum bar is green
   //fill(0, 200, 0);
   //rect(bar_pos_x, height / 2 + 2 * bar_spacing, 4 * drum, bar_height);
   //fill(0);
   //text("drums", bar_pos_x, height / 2 + 2 * bar_spacing + 8);
 
   // bass bar is blue
   //fill(50, 50, 240);
   //rect(bar_pos_x, height / 2 + 3 * bar_spacing, 4 * bass, bar_height);
   //fill(0);
   //text("bass", bar_pos_x, height / 2 + 3 * bar_spacing + 8);
 
   // other bar is white
   //fill(200, 200, 200);
   //rect(bar_pos_x, height / 2 + 4 * bar_spacing, 4 * other, bar_height);
   //fill(0);
   //text("other", bar_pos_x, height / 2 + 4 * bar_spacing + 8);
   //fill(255, 255, 0);
 
   //display "words"
   textAlign(CENTER);
   textSize(vocal);
   text(words, width/2, height/3);


   

}

