const colors = ['red', 'yellow', 'green', 'cyan', 'blue', 'purple', 'orange'];

function randColor() {
  let index = Math.floor(Math.random() * colors.length);

  return colors[index];
}

function setup() {
  createCanvas(600, 600);
}

let bgColor = randColor();
let bodyColor = randColor();
let earsColor = randColor();
let innerEarsColor = randColor();
let eyeColor = randColor();
let faceColor = randColor();
let snoutColor = randColor();

function draw() {
  strokeWeight(5);

  //background
  background(bgColor);

  //body
  fill(bodyColor);
  ellipse(300, 690, 640, 440);

  // ears
  fill(earsColor);
  ellipse(125, 135, 170, 170);
  ellipse(475, 135, 170, 170);

  // inner ears
  fill(innerEarsColor);
  ellipse(125, 135, 140, 140);
  ellipse(475, 135, 140, 140);

  // face
  fill(faceColor);
  ellipse(300, 330, 450, 440);

  //eyes
  fill(eyeColor);
  ellipse(230, 250, 82, 82);
  ellipse(370, 250, 82, 82);

  // pupils
  fill('black');
  ellipse(230, 250, 30, 30);
  ellipse(370, 250, 30, 30);

  // snout
  fill(snoutColor);
  ellipse(300, 390, 200, 200);

  // mouth
  fill('black');
  arc(300, 420, 70, 65, 0, PI);

  // nose
  fill('black');
  ellipse(300, 350, 80);
}
