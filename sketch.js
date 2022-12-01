let yoff = 0.0;

// let orar
// let bluer
// let buttonbool = false;

// let gui;
//       let b;
//       let s

//       let inputo;
//       var buttono;

// let myBlobus;
let blobuses = [];


function setup() {
    createCanvas(windowWidth, windowHeight);
    // orar = [random(242, 244), random(228,187), random(222, 127)];
    // bluer = [random(46, 58), random(54,61), random(110, 95)];

    // buttono = createButton('submit');
    // buttono.position(20, 65);
    // buttono.mousePressed(greet);

    // inputo = createInput();
    // inputo.position(30, 65);

    // myBlobus = new Blobus(0, 0, 20,  1, 255);
    // myBlobus2 = new Blobus(200, 200, 20,  2, 255);
    for(let i = 0; i < 2; i++) {
        blobuses[i] = new Blobus(   random(-100, 100), 
                                    random(-100, 100), 
                                    50, 
                                    2, 
                                    0);
    }

}

function draw() {   

    background(220);
    fill(255);

    
    noStroke();
    translate(width / 2, height / 2);


    // var radius = 250;
    // fill(orar);
    // createBlobus(radius);

    // var radius = 20;
    // fill(bluer);
    // createBlobus(radius);
    
    // myBlobus.update();
    // myBlobus.draw();

    // myBlobus2.update();
    // myBlobus2.draw();

    for(let i = 0; i < blobuses.length; i++) {
        //blobuses[i].update();
        blobuses[i].draw();
    }

    // yoff += 0.01;

    // if(buttonbool == true){
    //     var radius = random(250);
    //     createBlobus(radius);
    //     buttonbool = false;
    // }
    
}

// function createBlobus(radius){
//     beginShape();
//     let xoff = 0;   
//     for (var a = 0; a < TWO_PI; a += 0.1) {
//         let offset = map(noise(xoff, yoff), 0, 1, -25, 25);
//         let r = radius + offset;
//         let x = r * cos(a);
//         let y = r * sin(a);
//         vertex(x, y);
//         xoff += 0.05;
//         //ellipse(x, y, 4, 4);
//     }
//     endShape();
// }   

class Blobus {
    constructor(x, y, radius, speed, color) {
        this.x = x;
        this.y = y;
        this.xoff = 0;
        this.yoff = 10;
        this.radius = radius;
        this.speed = speed/1000;
        this.color = color;

      }
    // update() {

    //     this.xoff += this.speed;
    //     this.yoff += this.speed;
    // }

    draw() {
        beginShape();
        for (var a = 0; a < TWO_PI; a += 1) {
            this.offset = map(noise(this.xoff, this.yoff), 0, 1, -25, 25);
            this.r = this.radius + this.offset;
            this.x = this.r * cos(a);
            this.y = this.r * sin(a);
            fill('red')
            ellipse(this.x, this.y, 4, 4);
            vertex(this.x, this.y);

            this.xoff += this.speed;
            this.yoff += this.speed;

            //console.log(this.x, this.y)
            console.log(this.xoff)
        }
        fill(this.color);
        endShape();
        
    }
  }



function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }

  //avoid scrolling
// function touchMoved() {
//     return false;
// }

// function greet() {
//     console.log('djdjfdal')
//     buttonbool = true;
// }