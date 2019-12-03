
let canvasWidth =1280;
let canvasHeight=800;
let character_X = 50;
let character_Y = 50;
let character_posX = 0;
let character_posY = 0;
let obj_posX = 0;
let obj_posY = 0;
let obj_X = 50;
let obj_Y = 50;
let rect_posx;
let rect_posy;



function setup()
{
  canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.position(windowWidth/2 - canvasWidth/2, 20);
  rect_posx = random(0,1280);
  rect_posy = random(0,800);


}

function draw()
{
  background(0);
  fill(255,255,0);
  rect(character_posX,character_posY,character_X,character_Y);

  fill(0,255,125);
  rect(rect_posx,rect_posy,obj_X,obj_Y);



}

function keyPressed() {
  if(keyIsDown(LEFT_ARROW)){
    character_posX = character_posX -10;
  }
  if(keyIsDown(RIGHT_ARROW)){
    character_posX = character_posX +10;
  }
  if(keyIsDown(UP_ARROW)){
    character_posY = character_posY -10;
  }
  if(keyIsDown(DOWN_ARROW)){
    character_posY = character_posY +10;
  }
  


}
