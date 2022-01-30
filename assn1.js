function drawNameWithLines ()
{
  // insert your code here to draw the letters of your name
  // using only line()

	stroke(0,0,0);

  line (200, 200, 200, 250); // vertical line

  line (200, 200, 250, 200); // horizontal line

  line (250, 200, 250, 250);

  line (200, 225, 250, 225);
  // the above 4 lines print initial "A"

  line (275, 200, 325, 200);

  line (275, 200, 275, 225);

  line (275, 225, 325, 225);

  line (325, 225, 325, 250);

  line (325, 250, 275, 250);
  // the above 5 lines print initial "S"

  line (350, 200, 350, 250);

  line (350, 225, 400, 225);

  line (400, 200, 400, 250);
  // the above 3 lines print initial "H"
}

function drawNameWithTriangles ()
{
  // insert your code here to draw the letters of your name
  // using only ltriangle()
	stroke(0,0,0);
	triangle(30, 75, 48, 30, 45, 55);
	triangle(60, 75, 48, 30, 45, 55);
	// prints "A" initial using triangle function


	triangle(80, 30, 110, 25, 110, 35);
	triangle(80, 30, 110, 55, 110, 65);
	triangle(110, 65, 80, 65, 80, 75);
	// prints "S" initial using triangle function

	triangle(140, 75, 145, 25, 150, 75);
	triangle(160, 75, 165, 25, 170, 75);
	triangle(150, 60, 165, 55, 160, 45);
		// prints "H" initial using triangle function
}

// -----------------------------------------------------------
//
//  Do not edit below this lne
//
// -----------------------------------------------------------

let doLine;
let doTri;
let lineColor;
let fillColor;
let backgroundColor;

function setup() {
  createCanvas(500, 500);
  backgroundColor = color (150, 150, 150);
  background(backgroundColor);
  doLine = false;
  doTri = false;
  lineColor = color (0, 0, 0);
  fillColor = color (255, 0, 0);
}

function draw ()
{
  if (doLine) stroke(lineColor); else stroke (backgroundColor);
  drawNameWithLines();

  if (doTri) {
     fill(fillColor);
     stroke(fillColor);
  }
  else {
    fill(backgroundColor);
    stroke(backgroundColor);
  }
  drawNameWithTriangles();
}

function keyPressed()
{
  if (key == 'l') doLine = !doLine;
  if (key == 't') doTri = !doTri;
}
