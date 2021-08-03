
var square;

function setup() {
  createCanvas(400,400);
  square = createSprite(100, 150, 50, 50);
  square.shapeColor = "lightpink"
}

function draw() 
{
  background(30);
  background("black")
  if(keyIsDown(RIGHT_ARROW)){
  background('yellow');
  }
  if(keyIsDown(LEFT_ARROW)){
    background('green')
  }
  if(keyIsDown(UP_ARROW)){
    background('blue')
  }
  if(keyIsDown(DOWN_ARROW)){
    background('purple')
  }
  drawSprites();
}




