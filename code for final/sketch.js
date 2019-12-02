
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



function setup()
{
  canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.position(windowWidth/2 - canvasWidth/2, 20);

}

function draw()
{
  background(0);


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
