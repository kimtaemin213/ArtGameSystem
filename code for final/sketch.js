
let canvasWidth =1280;
let canvasHeight=800;
let character,obj;
let character_posX,character_posY;
let obj_posX,obj_posY;

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


}
function show() {
  character =createSprite(character_posX,character_posY,50,50);
  character.shapeColor="black";
  obj =createSprite(obj_posX,obj_posY,50,50);

}


