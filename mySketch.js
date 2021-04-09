const base = 80;
const factor = 6;
const numSteps = 20;
const speed = 0.05;
let scale = 1;

function setup() {
    createCanvas(windowWidth, windowHeight);
    frameRate(2);
    strokeCap(SQUARE);
    colorMode(HSL);
    background(240, 0, 100);
}

function draw() {
    let x = 0;
    let y = height;
    //scale = 1;
    baseWidth = scale * base;

    noFill();
    let c = color(240, 70, map(scale, 1, 4, 100, 0));
    stroke(c);

    if (frameCount % 7 === 0 || frameCount % 9 === 0 || frameCount % 13 === 0) {

        push();

        translate(floor(random(-baseWidth, width)), floor(random(height)));
        rotate(map(random(), 0, 1, -1 * PI / 10, PI / 10));
        strokeWeight(7 * scale);

        // drawing the frame
        quad(x, y,
            x + baseWidth, y,
            x + 2 * (baseWidth / 3), y - (factor * baseWidth),
            x + (baseWidth / 3), y - (factor * baseWidth));

        // drawing the steps
        for (let i = 0; i < numSteps; i++) {
            let stepY = y - (i * (factor * baseWidth) / numSteps);
            let stepX = x + i * (baseWidth / 3) / numSteps;
            line(stepX, stepY,
                stepX + baseWidth - 2 * (i * (baseWidth / 3) / numSteps), stepY);
        }
        pop();

        scale += speed;
    }

}
