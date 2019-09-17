function Circle(x, y, radius,color,speed) {
    this.canvas = document.getElementById('myCansvas');
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.speed = speed;
    this.draw = function () {
        let ctx = this.canvas.getContext("2d");
        ctx.beginPath();
        ctx.arc(this.x,this.y,this.radius, 0, 2 * Math.PI);
        ctx.fillStyle = this.color;
        ctx.fill();
    };
    this.move = function () {
        this.x += this.speed;
    }
}
function getRandomHex() {
    return Math.floor(Math.random() * 255);
}
function getRandomColor() {
    let red = getRandomHex();
    let green = getRandomHex();
    let blue = getRandomHex();
    return "rgb(" + red + "," + blue + "," + green + ")";
}
function createCircle() {
    let radius = Math.floor(Math.random() * 100);
    let color = getRandomColor();
    let x = Math.random() * window.innerWidth;
    let y = Math.random() * window.innerHeight;
    let speed = Math.floor(Math.random() * 20)+3;
    let circle = new Circle(x,y,radius,color,speed);
    circles.push(circle);
    circle.draw();
}
function createMultiCircle(){
    for (let i=0;i<10;i++){
        createCircle();
    }
}
let canvas = document.getElementById('myCanvas');
let circles = [];
createMultiCircle();
function main() {
    clearScreen();
    for (let i = 0;i<circles.length;i++){
        circles[i].move();
        circles[i].draw();
    }
    requestAnimationFrame(main);
}
function clearScreen(){
    canvas.getContext("2d").clearRect(0,0,canvas.width,canvas.height);
}
main();