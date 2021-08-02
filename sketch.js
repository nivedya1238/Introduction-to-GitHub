
var box;

function setup() {
  createCanvas(400,400);
  box = createSprite(100, 150, 50, 50);
  box.shapeColor = "brown"
}

function draw() 
{
  background(30);
  if(keyIsDown(RIGHT_ARROW)){
    box.x = box.x + 3
  }
  if(keyIsDown(LEFT_ARROW)){
    box.x = box.x - 3
  }
  if(keyDown(UP_ARROW)){
    box.y = box.y - 3
  }
  if(keyIsDown(DOWN_ARROW)){
    box.y = box.y + 3
  }
  drawSprites();
}




