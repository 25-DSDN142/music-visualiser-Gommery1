


// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(76, 31, 143)
  textFont('Verdana'); // please use CSS safe fonts
  rectMode(CENTER)
  textSize(24);
  
  // WHITE OUTSIDE RECTANGLES

  fill(255);
rect(50, 100, 50, 160);

rect(230, 200, 150, 60);

rect(90, 300, 90, 200);

rect(80, 920, 300, 50);~// Side ways one at bottom

rect(310, 920, 50, 50);~// Side ways one at bottom

rect(460, 920, 140, 50);~// Side ways one at bottom

rect(300, 500, 200, 400); // Large going down

rect(400, 120, 150, 200); // medium going down

rect(350, 800, 370, 170); // LARGE SIDEWAYS

rect(50, 500, 280, 80); // Middle way sideways

rect(200, 80, 200, 140); // top small sideways

rect(470, 510, 80, 300); // Side ways long

rect(470, 280, 90, 90);

rect(80, 660, 130, 200);

rect(80, 826, 100, 100);



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
 
   // display "words"
   //textAlign(CENTER);
   //textSize(vocal);
   //text(words, width/2, height/3);


   

}

