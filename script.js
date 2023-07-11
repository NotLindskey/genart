const colors = [
  '#EF1A1A',
  '#EFEE1A',
  '#33EF1A',
  '#1AEFE9',
  '#1A29EF',
  '#961AEF',
  '#EF5F1A',
  '#EF881A',
  '#EF1A90',
];

let usedColorIndexes = [];

function randomColor() {
  let index = Math.floor(Math.random() * colors.length);

  while (usedColorIndexes.includes(index)) {
    index = Math.floor(Math.random() * colors.length);
  }

  usedColorIndexes.push(index);

  return colors[index];
}

function setup() {
  createCanvas(600, 600);
}

let bgColor = randomColor();
let bodyColor = randomColor();
let eyeColor = randomColor();

function draw() {
  strokeWeight(5);

  //background
  background(lightenColor(bgColor, 30));

  //body
  fill(lightenColor(bodyColor, 10));
  ellipse(300, 690, 640, 440);

  // ears
  fill(lightenColor(bodyColor, 10));
  ellipse(125, 135, 170, 170);
  ellipse(475, 135, 170, 170);

  // inner ears
  fill(bodyColor);
  ellipse(125, 135, 140, 140);
  ellipse(475, 135, 140, 140);

  // face
  fill(lightenColor(bodyColor, 10));
  ellipse(300, 330, 450, 440);

  //eyes
  fill('white');
  ellipse(230, 250, 82, 82);
  ellipse(370, 250, 82, 82);

  fill(eyeColor);
  ellipse(230, 250, 59, 59);
  ellipse(370, 250, 59, 59);

  // pupils
  fill('black');
  ellipse(230, 250, 30, 30);
  ellipse(370, 250, 30, 30);

  // snout
  fill(bodyColor);
  ellipse(300, 390, 200, 200);

  // mouth
  fill('black');
  arc(300, 420, 70, 65, 0, PI);

  // nose
  fill('black');
  ellipse(300, 350, 80);
}

function lightenColor(color, percent) {
  var num = parseInt(color.replace('#', ''), 16),
    amt = Math.round(2.55 * percent),
    R = (num >> 16) + amt,
    B = ((num >> 8) & 0x00ff) + amt,
    G = (num & 0x0000ff) + amt;

  return (
    '#' +
    (
      0x1000000 +
      (R < 255 ? (R < 1 ? 0 : R) : 255) * 0x10000 +
      (B < 255 ? (B < 1 ? 0 : B) : 255) * 0x100 +
      (G < 255 ? (G < 1 ? 0 : G) : 255)
    )
      .toString(16)
      .slice(1)
  );
}

// document.addEventListener('DOMContentLoaded', () => {
//   setTimeout(() => {
//     saveSVG('svg');
//   }, 500);
// });
