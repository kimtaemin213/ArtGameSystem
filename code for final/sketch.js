
let canvasWidth =1280;
let canvasHeight=800;
let character,obj;
let character_posX,character_posY;
let obj_posX,obj_posY;
let energy;

function setup() {
  canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.position(windowWidth/2 - canvasWidth/2, 20);
  character_posX =random(300,900);
  character_posY =random(0,height/2);
  obj_posX = random(0,1280);
  obj_posY = random(0,800);

  show();

}

function draw() {
  background(255);
  drawSprites();
  fill(0,0,0);
  textSize(50);
  textAlign(CENTER);
  text("YOUR ENERGY",width/2,height - 85);

  if (keyIsDown(UP_ARROW)) {
    character.position.y -= 3;
  }
  if (keyIsDown(DOWN_ARROW)) {
    character.position.y += 3;

  }
  if (keyIsDown(LEFT_ARROW)) {
    character.position.x -= 3;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    character.position.x += 3;
  }
}

function show() {
  character =createSprite(character_posX,character_posY,50,50);
  character.shapeColor="black";
  obj =createSprite(obj_posX,obj_posY,50,50);
  energy = createSprite(width/2,height-50,500,30);
  energy.shapeColor="RED";

}












