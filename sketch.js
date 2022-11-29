let yoff = 0.0;
let orar
let bluer
let buttonbool = false;

let gui;
      let b;
      let s

      let inputo;
      var buttono;


function setup() {
    createCanvas(windowWidth, windowHeight);
    orar = [random(242, 244), random(228,187), random(222, 127)];
    bluer = [random(46, 58), random(54,61), random(110, 95)];

   // gui = createGui();
   // b = createButton("Button", 50, 50);
   // s = createSlider2d("Slider2d", 10, 210, 175, 175, 250, 350, 150, 50);

    buttono = createButton('submit');
    buttono.position(20, 65);
    buttono.mousePressed(greet);

    inputo = createInput();
    inputo.position(30, 65);


}

function draw() {   

    background(220);
    fill(255);
    //drawGui();


    //if(b.isPressed) {
   //   print(b.label + " is pressed.");
   // }

   // if (s.isChanged) {
        // Print a message when Slider2d is changed
        // that displays its value.
       // print(s.label + " = {" + s.valX + ", " + s.valY + "}");
    //  }

    
    noStroke();
    translate(width / 2, height / 2);


    var radius = 250;
    fill(orar);
    createBlobus(radius);

    var radius = 20;
    fill(bluer);
    createBlobus(radius);

    yoff += 0.01;

    if(buttonbool == true){
        var radius = random(250);
        createBlobus(radius);
        buttonbool = false;
    }
    
}

function createBlobus(radius){
    beginShape();
    let xoff = 0;
    for (var a = 0; a < TWO_PI; a += 0.1) {
        let offset = map(noise(xoff, yoff), 0, 1, -25, 25);
        let r = radius + offset;
        let x = r * cos(a);
        let y = r * sin(a);
        vertex(x, y);
        xoff += 0.05;
        //ellipse(x, y, 4, 4);
    }
    endShape();
}   

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }

  //avoid scrolling
function touchMoved() {
    return false;
}

function greet() {
    console.log('djdjfdal')
    buttonbool = true;
}