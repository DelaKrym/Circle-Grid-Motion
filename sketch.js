function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  //for the horizontal loop
  for (let x = 20; x < 400; x += 20) {
    //for the vertical loop
    for (let y = 20; y< 400; y += 20) {
      // for the subtle motion
      let dia = 20 + sin(frameCount * 0.05 + x * 0.01 + y * 0.01) * 5;
      //for the colour motion
      let r = map(sin(frameCount * 0.02 + x * 0.01), -1, 1, 100, 255);
      let g = map(cos(frameCount * 0.02 + y * 0.01), -1, 1, 100, 255);
      let b = map(sin(frameCount * 0.01 + x + y), -1, 1, 150, 255);
      fill(r,g,b);
      circle(x,y, dia);
    }
  }
  
}
