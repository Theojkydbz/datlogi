
function setup() {

    let bgcol = color(239,246,245);
    let blue1 = color(46,54,110);
    let blue2 = color(58,61,95);
    let bluer = color(random(46, 58), random(54,61), random(110, 95));
    let ora1 = color(242,228,222);
    let ora2 = color(244,187,127);
    let orar = color(random(242, 244), random(228,187), random(222, 127));

    createCanvas(windowWidth, windowHeight);
    background(239,246,245);
    noStroke();
    fill(bluer);
    ellipse(windowWidth/2, windowHeight/2, windowWidth/2, windowWidth/2);
}

function draw() { 
    let bluer = color(random(46, 58), random(54,61), random(110, 95));
    ellipse(windowWidth/2, windowHeight/2, windowWidth/2, windowWidth/2);
    //save("NoiseyGreyBlue");
}



