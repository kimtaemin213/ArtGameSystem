let frog;
let car1;
let goal;
let sound_hit;
let bg;
let canvasWidth =400;
let canvasHeight=400;
let time;

function preload() {
  sound_hit = loadSound('hit.wav');
  bg = loadImage('bg.png');
}

function setup() {
  canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.position(windowWidth/2 - canvasWidth/2, 20);
  resetGame();

}

function draw() {
  background(bg);


  if (car1.position.x >= width) {
    car1.position.x = 0;
    car1.setVelocity(random(0.5, 2), 0);
  }



  if (frog.overlap(car1)) {
    noLoop();
    timer();
  }

  // 충돌 시 사운드 효과에 대한 또 다른 방법
  // frog.collide(car1, playHitSound);
  // frog.bounce(car1);


  if (frog.overlap(goal)) {
    nextLevel();
  }

  drawSprites();


}


function resetGame() {
  frog = createSprite(width/2, height-30, 20, 40);
  goal = createSprite(width/2, 0, width, 4);
  car1 = createSprite(0, height/2, 60, 30);

  car1.setVelocity(random(0.5, 2), 0);
}


function keyPressed() {
  if (keyCode == UP_ARROW) {
    frog.position.y -= 10;
  }
}



function nextLevel() {
  frog.position.x = width/2;
  frog.position.y = height-30;
}

function timer() {
  time = mills();
  if(mills() >3000) {
    Loop();
  }
}


