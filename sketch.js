var textarea = document.getElementById("text_area");
var text_area_main = document.getElementById("text_area_main");
var text_area_header2 = document.getElementById("text_area_header2");
var myFont;
function preload(){
  myFont = loadFont ("font/ClashDisplay-Semibold.otf");
}

function setup() {
  var c=createCanvas(400, 400);
  c.parent("canvasWrapper");
}

function draw() { 
  background(220);
  textFont (myFont);
  textSize(20); 
  

  //estilo header 1 
  noStroke();
  fill(0);
  textAlign(LEFT);
  text(textarea.value, 0, 40);

  //estilo main
  textAlign(RIGHT); 
  stroke(0);
  strokeWeight(1);
  fill(255);
  text(text_area_main.value, 390, height/2);

  //estilo header 2
  noStroke();
  fill(0);
  textAlign(RIGHT); 
  text(text_area_header2.value, 390, 300);
}
