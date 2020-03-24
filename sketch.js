
let ponyPic;
let rainbowPic;
let img;
let mouseBoxx;
let mouseBoxy;
let bg;
let frames = 0
let capture;
let river;


function setup(){
  ponyPic = loadModel('assets/TheRock2.obj');
  tv = loadModel('assets/TV01.obj');
  img = loadImage('assets/TheRock2_skin_hi.jpg')
  bg = loadImage('assets/TheRock2_teethUpper.jpg');
  //river = createVideo('assets/river.mov')
    createCanvas(1210, 1000, WEBGL);
		   	image(bg, 0, 0, 1210, 1000);
		   		background(0);
//   vid.loop();
//   vid.hide();
//   button = createButton('play');
//   button.mousePressed(toggleVid);
//   }

//   function toggleVid() {
//   if (playing) {
//     vid.pause();
//     button.html('play');
//   } else {
//     vid.loop();
//     button.html('pause');
//   }
//   playing = !playing;
// }
}

function draw(){


	randomChord();
  randomChord();

	 frames++;
  frames = frames % 360;
  let rotationAmount = radians(frames);
	push();
    texture(img);
    noStroke();
    translate(0, -20, 0, 0);
    rotateX(1850);
    rotateY(rotationAmount * .9);
   	scale(1, 1, 1);
    //noStroke();
      fill(random(255));
  stroke(color(random(255), random(255), random(255)));

    model(ponyPic);
    pop();

    	push();
    texture(img);
    noStroke();
    translate(400, -20, 0, 0);
    rotateX(1850);
    rotateY(rotationAmount * .9);
   	scale(1, 1, 1);
    //noStroke();
      fill(random(255));
  stroke(color(random(255), random(255), random(255)));

    model(ponyPic);
    pop();

     	push();
    texture(img);
    noStroke();
    translate(-400, -20, 0, 0);
    rotateX(1850);
    rotateY(rotationAmount * .9);
   	scale(1, 1, 1);
    //noStroke();
      fill(random(255));
  stroke(color(random(255), random(255), random(255)));

    model(ponyPic);
    pop();


function randomChord() {
     frames++;
  frames = frames % 360;
  let rotationAmount = radians(frames);
  push();
  stroke(color(random(255), random(255), random(255)));
  fill(random(255));
  translate(0, -350, 20, 20);
  rotateX(1900);
  //rotateY(600);
  rotateY(rotationAmount * .9);
  scale(.9)
  model(ponyPic);
  pop();

   push();
  stroke(color(random(255), random(255), random(255)));
  fill(random(255));
  translate(0, 330, 20, 20);
  rotateX(1800);
  //rotateY(600);
  scale(.9);
    rotateY(rotationAmount * .9);
  model(ponyPic);
  pop();

  push();
  let angle1 = random(0, 2 * PI);
  let xpos1 = -1500 + -1500 * cos(angle1);
  let ypos1 = -1500 + -1500 * sin(angle1);

  // find another random point on the circle
  let angle2 = random(0, 2 * PI);
  let xpos2 = 500 + -800 * cos(angle2);
  let ypos2 = 500 + -800 * sin(angle2);
  stroke(color(random(255), random(255), random(255)));
  // draw a line between them
  //fill(color(75, 75, 75));
  fill(0);
  rect(xpos1, ypos1, xpos2, ypos2);
  pop();

  // push();
  // model(tv);
  // texture(river);
  // pop();


}

    // push();
    // texture(img);
    // noStroke();
    // rotateX(1850);
    // rotateY(600 * frameCount);
   	// scale(random(10));
    // translate(-250, -300, 95, 95);
    // model(ponyPic);
    // pop();

    }
  
