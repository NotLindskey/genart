function setup() {
  createCanvas(600, 600);
}

function draw() {
  strokeWeight(5);

  //background
  background('red');

  //body
  fill('yellow');
  ellipse(300, 690, 640, 440);

  // ears
  fill('green');
  ellipse(125, 135, 170, 170);
  ellipse(475, 135, 170, 170);

  // inner ears
  fill('cyan');
  ellipse(125, 135, 140, 140);
  ellipse(475, 135, 140, 140);

  // face
  fill('blue');
  ellipse(300, 330, 450, 440);

  //eyes
  fill('purple');
  ellipse(230, 250, 82, 82);
  ellipse(370, 250, 82, 82);

  // pupils
  fill('black');
  ellipse(230, 250, 30, 30);
  ellipse(370, 250, 30, 30);

  // snout
  fill('orange');
  ellipse(300, 390, 200, 200);

  // mouth
  fill('black');
  arc(300, 420, 70, 65, 0, PI);

  // nose
  fill('black');
  ellipse(300, 350, 80);
}
