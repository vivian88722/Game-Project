const CANVAS_WIDTH = 639;
const CANVAS_HEIGHT = 619;
let bg;
let mermaid;
let mermaidAnim;
let monster;
let star;
let seaturtle;
let crab;

function preload() {
  const mermaidSpritesheet = loadSpriteSheet("img/mermaid.png", 128, 128, 5);
  mermaidAnim = loadAnimation(mermaidSpritesheet);
  mermaid = createSprite(CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2, 32, 32);
  mermaid.moveSpeed = 3;
  mermaid.scale = (0.7);

  const starSpritesheet = loadSpriteSheet("img/star.png", 64, 64,2);
  star = loadAnimation(starSpritesheet)  

  const monsterSpritesheet = loadSpriteSheet("img/monster.png", 64, 64,2);
  monster = loadAnimation(monsterSpritesheet)  
  
  const seaturtleSpritesheet = loadSpriteSheet("img/seaturtle.png", 64, 64,6);
  seaturtle = loadAnimation(seaturtleSpritesheet)  

  const crabSpritesheet = loadSpriteSheet("img/crab.png", 186, 96, 11);
  crab = loadAnimation(crabSpritesheet) 

  bg = loadImage('img/undersea.jpg')

}

function setup() {
  createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  mermaid.addAnimation("move", mermaidAnim);
  mermaid.addImage("still", loadImage("img/mermaid_still.png"));
  mermaid.setDefaultCollider();
}

function update(object) {


  if (keyDown("up") || keyDown("down") || keyDown("left") || keyDown("right")) {
    if (keyDown("up")) {
      object.addSpeed(2, 270);
    }
    if (keyDown("down")) {
      object.addSpeed(2, 90);
    }
    if (keyDown("left")) {
      object.addSpeed(2, 180);
      object.mirrorX(-1);
    }
    if (keyDown("right")) {
      object.addSpeed(2, 0);
      object.mirrorX(1);
    }
  } else {
    object.setSpeed(0);
  }
  drawObject(object);
}

function drawObject(object) {
  if (object.getSpeed() > 0.0001) {
    object.changeAnimation("move");
  } else {
    object.changeImage("still");
  }
  mermaid.limitSpeed(mermaid.moveSpeed);
  drawSprite(object);
}

function draw() {
  background(bg);
  update(mermaid);
  animation(monster, 300, 100);
  animation (star, 100, 500);
  animation (seaturtle, 450, 300)
  animation (crab, 400, 550)

}
